const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
const DASHBOARD_DIR = path.join(__dirname, 'web-dashboard');
const SAMPLE_PLAYLISTS_PATH = path.join(__dirname, 'sample-playlists.json');
const SHARED_STORE_PATH = path.join(__dirname, 'shared_playlists.json');

const APP_VERSION = '2.2.0';
const RELEASE_DATE = '2026-11-07';

// Load shared store if exists
let sharedPlaylists = {};
try {
  if (fs.existsSync(SHARED_STORE_PATH)) {
    sharedPlaylists = JSON.parse(fs.readFileSync(SHARED_STORE_PATH, 'utf8'));
  }
} catch (e) {
  console.warn('Could not read shared_playlists.json:', e.message);
}

function saveSharedStore() {
  try {
    fs.writeFileSync(SHARED_STORE_PATH, JSON.stringify(sharedPlaylists, null, 2), 'utf8');
  } catch (e) {
    console.error('Error saving shared_playlists.json:', e.message);
  }
}

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.svg': 'image/svg+xml'
};

const server = http.createServer((req, res) => {
  // Common CORS headers to allow cross-origin requests from player.xmusicstation.com
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, Token, x-bgm-lang');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  const [reqPath] = req.url.split('?');

  // API 1: Version check
  if (reqPath === '/api/version') {
    let totalSongs = 0;
    let playlistsCount = 0;
    try {
      if (fs.existsSync(SAMPLE_PLAYLISTS_PATH)) {
        const playlists = JSON.parse(fs.readFileSync(SAMPLE_PLAYLISTS_PATH, 'utf8'));
        playlistsCount = playlists.length;
        totalSongs = playlists.reduce((acc, p) => acc + (p.songs?.length || 0), 0);
      }
    } catch (_) {}

    res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
    res.end(JSON.stringify({
      version: APP_VERSION,
      updatedAt: RELEASE_DATE,
      playlistsCount,
      totalSongs,
      syncUrl: `http://localhost:${PORT}/sample-playlists.json`,
      releaseNotes: 'Bản cập nhật v2.2.0: Mở rộng 6 playlist tuyển chọn lên 75 bài/playlist (450 bài hát bản quyền chất lượng cao) + Tính năng chia sẻ & đồng bộ Cloud 1-click.'
    }));
    return;
  }

  // API 2: Latest Playlists JSON
  if (reqPath === '/sample-playlists.json' || reqPath === '/api/playlists/latest') {
    if (fs.existsSync(SAMPLE_PLAYLISTS_PATH)) {
      res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
      fs.createReadStream(SAMPLE_PLAYLISTS_PATH).pipe(res);
      return;
    }
  }

  // API 3: Share Playlist (POST)
  if (reqPath === '/api/share' && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', () => {
      try {
        const payload = JSON.parse(body);
        const playlist = payload.playlist;
        if (!playlist || !playlist.name) {
          res.writeHead(400, { 'Content-Type': 'application/json; charset=utf-8' });
          res.end(JSON.stringify({ error: 'Dữ liệu playlist không hợp lệ' }));
          return;
        }

        const shareId = 'xm_' + Date.now().toString(36) + '_' + Math.random().toString(36).substring(2, 6);
        sharedPlaylists[shareId] = {
          ...playlist,
          sharedAt: new Date().toISOString(),
          author: payload.author || 'XMusic User'
        };
        saveSharedStore();

        res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
        res.end(JSON.stringify({
          success: true,
          shareId,
          shareUrl: `http://localhost:${PORT}/api/share/${shareId}`,
          message: 'Chia sẻ playlist thành công!'
        }));
      } catch (err) {
        res.writeHead(500, { 'Content-Type': 'application/json; charset=utf-8' });
        res.end(JSON.stringify({ error: err.message }));
      }
    });
    return;
  }

  // API 4: Get Shared Playlist (GET /api/share/:id)
  if (reqPath.startsWith('/api/share/')) {
    const shareId = reqPath.replace('/api/share/', '').trim();
    if (shareId && sharedPlaylists[shareId]) {
      res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
      res.end(JSON.stringify(sharedPlaylists[shareId]));
      return;
    } else {
      res.writeHead(404, { 'Content-Type': 'application/json; charset=utf-8' });
      res.end(JSON.stringify({ error: 'Không tìm thấy playlist chia sẻ này hoặc mã đã hết hạn' }));
      return;
    }
  }

  // Static files in web-dashboard
  let targetPath = reqPath;
  if (targetPath === '/' || targetPath === '') targetPath = '/index.html';

  const filePath = path.join(DASHBOARD_DIR, targetPath);

  if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('404 Not Found');
    return;
  }

  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';

  res.writeHead(200, { 'Content-Type': contentType });
  fs.createReadStream(filePath).pipe(res);
});

server.listen(PORT, () => {
  console.log(`\n======================================================`);
  console.log(`🎵 XMusicStation Playlist Automation Server v${APP_VERSION}`);
  console.log(`👉 Web Dashboard: http://localhost:${PORT}`);
  console.log(`☁️ API Kho Playlist Mẫu: http://localhost:${PORT}/api/playlists/latest`);
  console.log(`ℹ️ API Kiểm tra Phiên bản: http://localhost:${PORT}/api/version`);
  console.log(`======================================================\n`);
});
