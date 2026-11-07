const fs = require('fs');
const path = require('path');

console.log('--- BẮT ĐẦU NÂNG CẤP HỆ THỐNG V2.2.0 (CHIA SẺ & ĐỒNG BỘ 450 BÀI HÁT) ---');

// 1. Read the newly curated 6 playlists x 75 songs
const samplePlaylists = JSON.parse(fs.readFileSync('sample-playlists.json', 'utf8'));
console.log(`✓ Đã đọc sample-playlists.json: ${samplePlaylists.length} playlist, tổng ${samplePlaylists.reduce((acc, p) => acc + p.songs.length, 0)} bài hát.`);

const samplePlaylistsJsonString = JSON.stringify(samplePlaylists, null, 2);

// =========================================================================
// PART 1: UPDATE extension/content.js
// =========================================================================
console.log('\n--- 1. CẬP NHẬT extension/content.js ---');
let contentJs = fs.readFileSync('extension/content.js', 'utf8');

// Replace DEFAULT_PLAYLISTS
const startMarker = 'const DEFAULT_PLAYLISTS = [';
const endMarker = 'const STORAGE_KEYS = {';

const startIndex = contentJs.indexOf(startMarker);
const endIndex = contentJs.indexOf(endMarker);

if (startIndex === -1 || endIndex === -1) {
  throw new Error('Không tìm thấy vị trí DEFAULT_PLAYLISTS trong extension/content.js');
}

const newDefaultPlaylistsBlock = `const DEFAULT_PLAYLISTS = ${samplePlaylistsJsonString};\n\n  `;
contentJs = contentJs.substring(0, startIndex) + newDefaultPlaylistsBlock + contentJs.substring(endIndex);

// Update version string in header
contentJs = contentJs.replace(
  /Initializing script v[0-9\.]+/g,
  'Initializing script v2.2.0 (Cloud Sync & 450 Curated Songs)'
);

// Update STORAGE_KEYS to include PLAYLISTS_VERSION
if (!contentJs.includes('PLAYLISTS_VERSION:')) {
  contentJs = contentJs.replace(
    "PUBLISHER_CACHE: 'xmusic_publisher_playlists_cache'",
    "PUBLISHER_CACHE: 'xmusic_publisher_playlists_cache',\n    PLAYLISTS_VERSION: 'xmusic_playlists_version'"
  );
}

// Add Share & Cloud Sync helpers if not present
if (!contentJs.includes('function createShareCode(')) {
  const helperCode = `
  // ==========================================
  // SHARING & CLOUD SYNC MODULE (v2.2.0)
  // ==========================================
  const APP_VERSION = '2.2.0';
  const RELEASE_DATE = '2026-11-07';
  const CURATED_IDS = [
    'playlist-trending-chart',
    'playlist-acoustic-cafe',
    'playlist-edm-remix',
    'playlist-ballad-suy',
    'playlist-genz-indie',
    'playlist-love-sweet'
  ];

  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function createShareCode(playlist) {
    const compact = {
      n: playlist.name,
      d: playlist.description || '',
      v: APP_VERSION,
      s: (playlist.songs || []).map(s => ({
        k: s.key,
        t: s.title,
        a: s.artists || [],
        d: s.duration || 0,
        u: s.streamUrl || '',
        i: s.image || ''
      }))
    };
    const jsonStr = JSON.stringify(compact);
    const b64 = btoa(encodeURIComponent(jsonStr).replace(/%([0-9A-F]{2})/g, (match, p1) => {
      return String.fromCharCode('0x' + p1);
    }));
    return 'XMPL2:' + b64;
  }

  function decodeShareCode(codeStr) {
    const clean = codeStr.trim();
    let jsonStr = '';
    if (clean.startsWith('XMPL2:') || clean.startsWith('XMPL:')) {
      const b64 = clean.replace(/^XMPL[0-9]*:/, '');
      jsonStr = decodeURIComponent(Array.prototype.map.call(atob(b64), c => {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join(''));
    } else if (clean.startsWith('{') || clean.startsWith('[')) {
      jsonStr = clean;
    } else {
      throw new Error('Mã không hợp lệ (cần bắt đầu bằng XMPL2: hoặc định dạng JSON)');
    }

    const obj = JSON.parse(jsonStr);
    if (Array.isArray(obj)) return obj;
    if (obj.n && Array.isArray(obj.s)) {
      return {
        id: 'playlist-shared-' + Date.now(),
        name: obj.n,
        description: obj.d || ('Được chia sẻ ngày ' + new Date().toLocaleDateString('vi-VN')),
        createdAt: new Date().toISOString(),
        songs: obj.s.map(s => ({
          key: s.k || s.key,
          title: s.t || s.title,
          artists: s.a || s.artists || [],
          duration: s.d || s.duration || 0,
          streamUrl: s.u || s.streamUrl || '',
          image: s.i || s.image || ''
        }))
      };
    }
    if (obj.name && Array.isArray(obj.songs)) {
      return {
        id: obj.id || ('playlist-shared-' + Date.now()),
        name: obj.name,
        description: obj.description || '',
        createdAt: obj.createdAt || new Date().toISOString(),
        songs: obj.songs
      };
    }
    throw new Error('Dữ liệu không đúng cấu trúc playlist chuẩn');
  }

  function smartUpdatePlaylists(newCuratedPlaylists, keepUserCustom = true) {
    const current = getPlaylists();
    if (!keepUserCustom) {
      savePlaylists(newCuratedPlaylists);
      localStorage.setItem(STORAGE_KEYS.PLAYLISTS_VERSION, APP_VERSION);
      return newCuratedPlaylists;
    }
    const userCustomPlaylists = current.filter(p => !CURATED_IDS.includes(p.id));
    const merged = [...newCuratedPlaylists, ...userCustomPlaylists];
    savePlaylists(merged);
    localStorage.setItem(STORAGE_KEYS.PLAYLISTS_VERSION, APP_VERSION);
    return merged;
  }

  function showModal(title, bodyHtml, onMount) {
    const existing = document.getElementById('xmusic-active-modal');
    if (existing) existing.remove();

    const overlay = document.createElement('div');
    overlay.id = 'xmusic-active-modal';
    overlay.className = 'xmusic-modal-overlay';
    overlay.innerHTML = \`
      <div class="xmusic-modal-card">
        <div class="xmusic-modal-header">
          <div class="xmusic-modal-title">\${title}</div>
          <button class="xmusic-modal-close" id="xmusic-modal-btn-close">✕</button>
        </div>
        <div class="xmusic-modal-body">
          \${bodyHtml}
        </div>
      </div>
    \`;

    document.body.appendChild(overlay);

    const closeModal = () => overlay.remove();
    overlay.querySelector('#xmusic-modal-btn-close').onclick = closeModal;
    overlay.onclick = (e) => {
      if (e.target === overlay) closeModal();
    };

    if (typeof onMount === 'function') {
      onMount(overlay, closeModal);
    }
  }

  function openShareModal(playlist) {
    if (!playlist) {
      showToast('Không tìm thấy playlist để chia sẻ', 'error');
      return;
    }
    const shareCode = createShareCode(playlist);
    const bodyHtml = \`
      <div style="font-weight: 600; font-size: 15px; color: #38bdf8; margin-bottom: 4px;">
        🎵 \${escapeHtml(playlist.name)}
      </div>
      <div style="color: #94a3b8; font-size: 12.5px; margin-bottom: 12px;">
        \${playlist.songs ? playlist.songs.length : 0} bài hát • \${escapeHtml(playlist.description || '')}
      </div>

      <div style="font-weight: 600; margin-bottom: 6px;">Cách 1: Mã Chia Sẻ Nhanh (Gửi qua Zalo, Teams, tin nhắn)</div>
      <textarea id="xmusic-share-code-box" class="xmusic-share-textarea" readonly>\${shareCode}</textarea>
      <div style="display: flex; gap: 8px; margin-top: 8px; margin-bottom: 16px;">
        <button id="xmusic-btn-copy-code" class="xmusic-btn-primary" style="flex: 1;">📋 Sao Chép Mã</button>
        <button id="xmusic-btn-dl-json" class="xmusic-btn-secondary" style="flex: 1;">💾 Tải File JSON</button>
      </div>

      <div style="font-weight: 600; margin-bottom: 6px;">Cách 2: Chia Sẻ Qua Server Hub Nội Bộ</div>
      <div style="color: #94a3b8; font-size: 12px; margin-bottom: 8px;">
        Nếu server local (port 3000) đang chạy, bạn có thể tạo liên kết để chia sẻ qua mạng nội bộ:
      </div>
      <button id="xmusic-btn-share-online" class="xmusic-btn-secondary" style="width: 100%;">🌐 Tạo Link Chia Sẻ Trực Tuyến</button>
      <div id="xmusic-share-online-result" style="margin-top: 8px; font-size: 12px; word-break: break-all;"></div>
    \`;

    showModal('🔗 Chia Sẻ Playlist', bodyHtml, (overlay, closeModal) => {
      const copyBtn = overlay.querySelector('#xmusic-btn-copy-code');
      copyBtn.onclick = () => {
        navigator.clipboard.writeText(shareCode).then(() => {
          showToast('Đã sao chép mã chia sẻ vào Clipboard!', 'success');
        }).catch(() => {
          const ta = overlay.querySelector('#xmusic-share-code-box');
          ta.select();
          document.execCommand('copy');
          showToast('Đã sao chép mã chia sẻ!', 'success');
        });
      };

      const dlBtn = overlay.querySelector('#xmusic-btn-dl-json');
      dlBtn.onclick = () => {
        const blob = new Blob([JSON.stringify(playlist, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = (playlist.name.replace(/[^a-zA-Z0-9\-_]/g, '_') || 'playlist') + '.json';
        a.click();
        URL.revokeObjectURL(url);
        showToast('Đã tải xuống file ' + a.download, 'success');
      };

      const shareOnlineBtn = overlay.querySelector('#xmusic-btn-share-online');
      const shareResDiv = overlay.querySelector('#xmusic-share-online-result');
      shareOnlineBtn.onclick = async () => {
        shareOnlineBtn.textContent = 'Đang tạo liên kết...';
        shareOnlineBtn.disabled = true;
        try {
          const res = await fetch('http://localhost:3000/api/share', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ playlist })
          });
          const json = await res.json();
          if (json.shareUrl) {
            shareResDiv.innerHTML = \`<span style="color: #34d399;">Link chia sẻ:</span> <a href="\${json.shareUrl}" target="_blank" style="color: #38bdf8;">\${json.shareUrl}</a>\`;
            navigator.clipboard.writeText(json.shareUrl);
            showToast('Đã tạo link chia sẻ và sao chép vào Clipboard!', 'success');
          } else {
            shareResDiv.innerHTML = \`<span style="color: #f87171;">Lỗi: \${json.error || 'Không thể tạo link'}</span>\`;
          }
        } catch (e) {
          shareResDiv.innerHTML = \`<span style="color: #f87171;">Không kết nối được server localhost:3000. Hãy mở Web Dashboard trước!</span>\`;
        } finally {
          shareOnlineBtn.textContent = '🌐 Tạo Link Chia Sẻ Trực Tuyến';
          shareOnlineBtn.disabled = false;
        }
      };
    });
  }

  function openImportShareModal() {
    const bodyHtml = \`
      <div style="color: #94a3b8; font-size: 12.5px; margin-bottom: 12px;">
        Dán <b>Mã chia sẻ</b> (bắt đầu bằng <code>XMPL2:</code>), chuỗi <b>JSON playlist</b> hoặc <b>Đường dẫn URL</b> (GitHub raw, Gist, Server nội bộ...):
      </div>
      <textarea id="xmusic-import-input" class="xmusic-share-textarea" placeholder="Dán mã XMPL2:... hoặc URL file playlist vào đây..."></textarea>
      <div id="xmusic-import-preview" style="margin-top: 12px; font-size: 13px; line-height: 1.5; min-height: 30px;"></div>
      <div style="display: flex; gap: 8px; margin-top: 14px;">
        <button id="xmusic-btn-preview-import" class="xmusic-btn-secondary" style="flex: 1;">🔍 Kiểm Tra & Xem Trước</button>
        <button id="xmusic-btn-confirm-import" class="xmusic-btn-primary" style="flex: 1;" disabled>➕ Thêm Vào Thư Viện</button>
      </div>
    \`;

    showModal('📥 Nhập Playlist Chia Sẻ', bodyHtml, (overlay, closeModal) => {
      const inputEl = overlay.querySelector('#xmusic-import-input');
      const previewEl = overlay.querySelector('#xmusic-import-preview');
      const previewBtn = overlay.querySelector('#xmusic-btn-preview-import');
      const confirmBtn = overlay.querySelector('#xmusic-btn-confirm-import');

      let parsedData = null;

      const runPreview = async () => {
        const text = inputEl.value.trim();
        if (!text) {
          previewEl.innerHTML = '<span style="color: #f87171;">Vui lòng nhập mã hoặc URL!</span>';
          confirmBtn.disabled = true;
          return;
        }

        previewEl.innerHTML = '<span style="color: #94a3b8;">Đang kiểm tra và giải mã...</span>';

        try {
          if (text.startsWith('http://') || text.startsWith('https://')) {
            const res = await fetch(text);
            const json = await res.json();
            parsedData = decodeShareCode(JSON.stringify(json));
          } else {
            parsedData = decodeShareCode(text);
          }

          if (Array.isArray(parsedData)) {
            previewEl.innerHTML = \`<span style="color: #34d399; font-weight: 600;">✓ Hợp lệ: Bộ sưu tập gồm \${parsedData.length} playlist (\${parsedData.reduce((acc, p) => acc + (p.songs ? p.songs.length : 0), 0)} bài hát).</span>\`;
            confirmBtn.disabled = false;
          } else if (parsedData && parsedData.name) {
            previewEl.innerHTML = \`<span style="color: #34d399; font-weight: 600;">✓ Hợp lệ:</span> <b>\${escapeHtml(parsedData.name)}</b> (\${parsedData.songs ? parsedData.songs.length : 0} bài hát).\`;
            confirmBtn.disabled = false;
          } else {
            previewEl.innerHTML = '<span style="color: #f87171;">Không nhận dạng được playlist hợp lệ!</span>';
            confirmBtn.disabled = true;
          }
        } catch (e) {
          previewEl.innerHTML = \`<span style="color: #f87171;">Lỗi giải mã: \${escapeHtml(e.message)}</span>\`;
          confirmBtn.disabled = true;
        }
      };

      previewBtn.onclick = runPreview;
      inputEl.oninput = () => {
        if (inputEl.value.trim().length > 15) {
          runPreview();
        }
      };

      confirmBtn.onclick = () => {
        if (!parsedData) return;
        const playlists = getPlaylists();
        if (Array.isArray(parsedData)) {
          parsedData.forEach(p => {
            if (!p.id) p.id = 'playlist-shared-' + Date.now() + Math.random().toString(36).substring(2, 5);
            playlists.push(p);
          });
          savePlaylists(playlists);
          setActivePlaylistId(parsedData[0].id);
          showToast(\`Đã nạp thành công \${parsedData.length} playlist mới!\`, 'success');
        } else {
          parsedData.id = 'playlist-shared-' + Date.now();
          playlists.push(parsedData);
          savePlaylists(playlists);
          setActivePlaylistId(parsedData.id);
          showToast(\`Đã thêm playlist "\${parsedData.name}" (\${parsedData.songs.length} bài)!\`, 'success');
        }
        updatePlaylistSelect();
        renderCurrentPlaylistSongs();
        closeModal();
      };
    });
  }

  function openSyncCloudModal() {
    const curVersion = localStorage.getItem(STORAGE_KEYS.PLAYLISTS_VERSION) || '2.0.0';
    const bodyHtml = \`
      <div class="xmusic-sync-card">
        <div class="xmusic-sync-badge">Phiên bản mới nhất: v2.2.0 (Phát hành: \${RELEASE_DATE})</div>
        <div style="font-weight: 700; font-size: 14px; margin-bottom: 4px; color: #fff;">
          Kho Tuyển Chọn 450 Bài Hát Chuẩn XMusic (75 bài/chủ đề)
        </div>
        <div style="font-size: 12px; color: #94a3b8; line-height: 1.5;">
          • Mở rộng quy mô từ 25 bài lên 75 bài hát/playlist.<br>
          • Cập nhật đầy đủ Top Trending V-Pop 2026, Acoustic Chill, Vinahouse Bass căng, Ballad Lofi Suy, Gen Z Indie và Tình ca ngọt ngào.<br>
          • Phiên bản hiện tại trên máy của bạn: <b style="color: #38bdf8;">v\${escapeHtml(curVersion)}</b>
        </div>
      </div>

      <div style="font-weight: 600; margin-bottom: 10px; font-size: 13px;">Chọn phương thức cập nhật:</div>

      <button id="xmusic-btn-sync-smart" class="xmusic-opt-btn primary">
        <span style="font-size: 20px;">🟢</span>
        <div>
          <div style="font-weight: 600;">Cập nhật & Giữ lại Playlist cá nhân (Khuyên dùng)</div>
          <div style="font-size: 11.5px; color: #cbd5e1;">Bảo toàn 100% các playlist bạn tự tạo, chỉ cập nhật 6 playlist tuyển chọn hệ thống.</div>
        </div>
      </button>

      <button id="xmusic-btn-sync-full" class="xmusic-opt-btn">
        <span style="font-size: 20px;">🔄</span>
        <div>
          <div style="font-weight: 600;">Làm mới hoàn toàn (Khôi phục mặc định)</div>
          <div style="font-size: 11.5px; color: #cbd5e1;">Xóa các playlist cũ và nạp lại nguyên bản 6 playlist tuyển chọn v2.2.0.</div>
        </div>
      </button>

      <div style="margin-top: 14px; padding-top: 12px; border-top: 1px solid rgba(255,255,255,0.08);">
        <div style="font-weight: 600; font-size: 12px; color: #94a3b8; margin-bottom: 6px;">
          Đồng bộ từ Server Hub hoặc URL tùy chỉnh (LAN / Cloud):
        </div>
        <div style="display: flex; gap: 6px;">
          <input type="text" id="xmusic-sync-url-input" class="xmusic-input" value="http://localhost:3000/sample-playlists.json" placeholder="Nhập URL JSON..." style="flex: 1; font-size: 12px;" />
          <button id="xmusic-btn-sync-url" class="xmusic-btn-secondary" style="white-space: nowrap;">Tải URL</button>
        </div>
      </div>
    \`;

    showModal('☁️ Cập Nhật Kho Tuyển Chọn v2.2.0', bodyHtml, (overlay, closeModal) => {
      overlay.querySelector('#xmusic-btn-sync-smart').onclick = () => {
        smartUpdatePlaylists(DEFAULT_PLAYLISTS, true);
        setActivePlaylistId(DEFAULT_PLAYLISTS[0].id);
        updatePlaylistSelect();
        renderCurrentPlaylistSongs();
        showToast('Đã nâng cấp 6 playlist lên v2.2.0 (450 bài hát) & giữ nguyên playlist cá nhân!', 'success');
        closeModal();
      };

      overlay.querySelector('#xmusic-btn-sync-full').onclick = () => {
        if (confirm('LƯU Ý: Thao tác này sẽ ghi đè toàn bộ danh sách phát bằng 6 playlist mẫu v2.2.0. Bạn có chắc chắn muốn tiếp tục?')) {
          smartUpdatePlaylists(DEFAULT_PLAYLISTS, false);
          setActivePlaylistId(DEFAULT_PLAYLISTS[0].id);
          updatePlaylistSelect();
          renderCurrentPlaylistSongs();
          showToast('Đã đặt lại toàn bộ kho nhạc về mặc định v2.2.0!', 'success');
          closeModal();
        }
      };

      overlay.querySelector('#xmusic-btn-sync-url').onclick = async () => {
        const url = overlay.querySelector('#xmusic-sync-url-input').value.trim();
        if (!url) return;
        const btn = overlay.querySelector('#xmusic-btn-sync-url');
        btn.textContent = 'Đang tải...';
        btn.disabled = true;
        try {
          const res = await fetch(url);
          const data = await res.json();
          if (Array.isArray(data) && data.length > 0) {
            smartUpdatePlaylists(data, true);
            setActivePlaylistId(data[0].id);
            updatePlaylistSelect();
            renderCurrentPlaylistSongs();
            showToast(\`Đã đồng bộ thành công \${data.length} playlist từ URL!\`, 'success');
            closeModal();
          } else {
            showToast('Dữ liệu từ URL không phải là danh sách playlist hợp lệ!', 'error');
          }
        } catch (e) {
          showToast('Lỗi tải từ URL: ' + e.message, 'error');
        } finally {
          btn.textContent = 'Tải URL';
          btn.disabled = false;
        }
      };
    });
  }
`;

  // Inject helperCode right before function createSidebarUI
  contentJs = contentJs.replace('function createSidebarUI()', helperCode + '\n  function createSidebarUI()');
}

// Update the list toolbar to include Share button
contentJs = contentJs.replace(
  '<div class="xmusic-toolbar-actions">',
  `<div class="xmusic-toolbar-actions">\n              <button class="xmusic-btn-share-current" id="xmusic-btn-share-curr" title="Chia sẻ playlist này qua mã hoặc file">🔗 Chia Sẻ</button>`
);

// Update bottom action bar in createSidebarUI
const oldBottomBar = `<div class="xmusic-bottom-bar">
          <button id="xmusic-btn-new-pl" class="xmusic-btn-secondary" style="flex: 1;">➕ Tạo List</button>
          <button id="xmusic-btn-reset-pl" class="xmusic-btn-secondary" style="flex: 1;" title="Khôi phục 6 playlist mẫu theo Trending & Mood (150 bài)">🔄 Reset Mẫu</button>
          <button id="xmusic-btn-export" class="xmusic-btn-secondary" style="flex: 1;">📤 Xuất</button>
          <button id="xmusic-btn-import" class="xmusic-btn-secondary" style="flex: 1;">📥 Nhập</button>
          <input type="file" id="xmusic-file-import" accept=".json" style="display: none;" />
        </div>`;

const newBottomBar = `<div class="xmusic-bottom-bar">
          <button id="xmusic-btn-new-pl" class="xmusic-btn-secondary" style="flex: 1;">➕ Tạo List</button>
          <button id="xmusic-btn-share-pl" class="xmusic-btn-secondary" style="flex: 1;" title="Chia sẻ playlist hiện tại (Mã / File)">🔗 Chia Sẻ</button>
          <button id="xmusic-btn-import-code" class="xmusic-btn-secondary" style="flex: 1;" title="Nhập playlist từ Mã Chia Sẻ hoặc URL">📥 Nhập Mã</button>
          <button id="xmusic-btn-sync-cloud" class="xmusic-btn-secondary" style="flex: 1.2;" title="Cập nhật 6 playlist tuyển chọn v2.2.0 (450 bài)">☁️ Cập Nhật</button>
          <button id="xmusic-btn-export" class="xmusic-btn-secondary" style="flex: 0.8;" title="Xuất sao lưu JSON">📤 Xuất</button>
          <button id="xmusic-btn-reset-pl" class="xmusic-btn-secondary" style="flex: 0.8;" title="Khôi phục 6 playlist mẫu (450 bài)">🔄 Mẫu</button>
          <input type="file" id="xmusic-file-import" accept=".json" style="display: none;" />
        </div>`;

contentJs = contentJs.replace(oldBottomBar, newBottomBar);

// Bind events in bindSidebarEvents
const oldResetBind = `// Reset to Sample Playlists
    const resetPlBtn = document.getElementById('xmusic-btn-reset-pl');`;

const newBinds = `// Share & Sync Actions (v2.2.0)
    const sharePlBtn = document.getElementById('xmusic-btn-share-pl');
    const shareCurrBtn = document.getElementById('xmusic-btn-share-curr');
    const importCodeBtn = document.getElementById('xmusic-btn-import-code');
    const syncCloudBtn = document.getElementById('xmusic-btn-sync-cloud');

    const handleShareActive = () => {
      const playlists = getPlaylists();
      const activeId = getActivePlaylistId();
      const pl = playlists.find(p => p.id === activeId);
      if (pl) openShareModal(pl);
    };

    if (sharePlBtn) sharePlBtn.onclick = handleShareActive;
    if (shareCurrBtn) shareCurrBtn.onclick = handleShareActive;
    if (importCodeBtn) importCodeBtn.onclick = () => openImportShareModal();
    if (syncCloudBtn) syncCloudBtn.onclick = () => openSyncCloudModal();

    // Reset to Sample Playlists
    const resetPlBtn = document.getElementById('xmusic-btn-reset-pl');`;

contentJs = contentJs.replace(oldResetBind, newBinds);

// Update confirmation text in resetPlBtn
contentJs = contentJs.replace(
  'Khôi phục lại 6 playlist mẫu theo Trending Charts & Mood (150 bài hát)?',
  'Khôi phục lại 6 playlist mẫu theo Trending Charts & Mood (450 bài hát)?'
);
contentJs = contentJs.replace(
  'Đã khôi phục 6 danh sách phát mẫu tuyển chọn (150 bài)!',
  'Đã khôi phục 6 danh sách phát mẫu tuyển chọn v2.2.0 (450 bài)!'
);

fs.writeFileSync('extension/content.js', contentJs, 'utf8');
console.log('✓ Đã cập nhật thành công extension/content.js!');

// =========================================================================
// PART 2: UPDATE web-dashboard/app.js
// =========================================================================
console.log('\n--- 2. CẬP NHẬT web-dashboard/app.js ---');
let appJs = fs.readFileSync('web-dashboard/app.js', 'utf8');

// Replace DEFAULT_PLAYLISTS in app.js
const appStartIndex = appJs.indexOf(startMarker);
const appEndMarker = 'const STORAGE_KEYS = {';
const appEndIndex = appJs.indexOf(appEndMarker);

if (appStartIndex !== -1 && appEndIndex !== -1) {
  const newAppDefaultBlock = `const DEFAULT_PLAYLISTS = ${samplePlaylistsJsonString};\n\n  `;
  appJs = appJs.substring(0, appStartIndex) + newAppDefaultBlock + appJs.substring(appEndIndex);
}

// Add STORAGE_KEYS.PLAYLISTS_VERSION if needed
if (!appJs.includes('PLAYLISTS_VERSION:')) {
  appJs = appJs.replace(
    "PUBLISHER_CACHE: 'xmusic_publisher_playlists_cache'",
    "PUBLISHER_CACHE: 'xmusic_publisher_playlists_cache',\n    PLAYLISTS_VERSION: 'xmusic_playlists_version'"
  );
}

// Add sharing and modal methods into app.js if not present
if (!appJs.includes('function createShareCode(')) {
  const dashboardHelperCode = `
  // ==========================================
  // SHARING & CLOUD SYNC MODULE (v2.2.0)
  // ==========================================
  const APP_VERSION = '2.2.0';
  const RELEASE_DATE = '2026-11-07';
  const CURATED_IDS = [
    'playlist-trending-chart',
    'playlist-acoustic-cafe',
    'playlist-edm-remix',
    'playlist-ballad-suy',
    'playlist-genz-indie',
    'playlist-love-sweet'
  ];

  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function createShareCode(playlist) {
    const compact = {
      n: playlist.name,
      d: playlist.description || '',
      v: APP_VERSION,
      s: (playlist.songs || []).map(s => ({
        k: s.key,
        t: s.title,
        a: s.artists || [],
        d: s.duration || 0,
        u: s.streamUrl || '',
        i: s.image || ''
      }))
    };
    const jsonStr = JSON.stringify(compact);
    const b64 = btoa(encodeURIComponent(jsonStr).replace(/%([0-9A-F]{2})/g, (match, p1) => {
      return String.fromCharCode('0x' + p1);
    }));
    return 'XMPL2:' + b64;
  }

  function decodeShareCode(codeStr) {
    const clean = codeStr.trim();
    let jsonStr = '';
    if (clean.startsWith('XMPL2:') || clean.startsWith('XMPL:')) {
      const b64 = clean.replace(/^XMPL[0-9]*:/, '');
      jsonStr = decodeURIComponent(Array.prototype.map.call(atob(b64), c => {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join(''));
    } else if (clean.startsWith('{') || clean.startsWith('[')) {
      jsonStr = clean;
    } else {
      throw new Error('Mã không hợp lệ (cần bắt đầu bằng XMPL2: hoặc định dạng JSON)');
    }

    const obj = JSON.parse(jsonStr);
    if (Array.isArray(obj)) return obj;
    if (obj.n && Array.isArray(obj.s)) {
      return {
        id: 'playlist-shared-' + Date.now(),
        name: obj.n,
        description: obj.d || ('Được chia sẻ ngày ' + new Date().toLocaleDateString('vi-VN')),
        createdAt: new Date().toISOString(),
        songs: obj.s.map(s => ({
          key: s.k || s.key,
          title: s.t || s.title,
          artists: s.a || s.artists || [],
          duration: s.d || s.duration || 0,
          streamUrl: s.u || s.streamUrl || '',
          image: s.i || s.image || ''
        }))
      };
    }
    if (obj.name && Array.isArray(obj.songs)) {
      return {
        id: obj.id || ('playlist-shared-' + Date.now()),
        name: obj.name,
        description: obj.description || '',
        createdAt: obj.createdAt || new Date().toISOString(),
        songs: obj.songs
      };
    }
    throw new Error('Dữ liệu không đúng cấu trúc playlist chuẩn');
  }

  function smartUpdatePlaylists(newCuratedPlaylists, keepUserCustom = true) {
    if (!keepUserCustom) {
      currentPlaylists = [...newCuratedPlaylists];
      savePlaylists(currentPlaylists);
      localStorage.setItem(STORAGE_KEYS.PLAYLISTS_VERSION, APP_VERSION);
      return currentPlaylists;
    }
    const userCustomPlaylists = currentPlaylists.filter(p => !CURATED_IDS.includes(p.id));
    currentPlaylists = [...newCuratedPlaylists, ...userCustomPlaylists];
    savePlaylists(currentPlaylists);
    localStorage.setItem(STORAGE_KEYS.PLAYLISTS_VERSION, APP_VERSION);
    return currentPlaylists;
  }

  function showDashboardModal(title, bodyHtml, onMount) {
    const existing = document.getElementById('xm-active-modal');
    if (existing) existing.remove();

    const overlay = document.createElement('div');
    overlay.id = 'xm-active-modal';
    overlay.className = 'xm-modal-overlay';
    overlay.innerHTML = \`
      <div class="xm-modal-card">
        <div class="xm-modal-header">
          <div class="xm-modal-title">\${title}</div>
          <button class="xm-modal-close" id="xm-modal-btn-close">✕</button>
        </div>
        <div class="xm-modal-body">
          \${bodyHtml}
        </div>
      </div>
    \`;

    document.body.appendChild(overlay);

    const closeModal = () => overlay.remove();
    overlay.querySelector('#xm-modal-btn-close').onclick = closeModal;
    overlay.onclick = (e) => {
      if (e.target === overlay) closeModal();
    };

    if (typeof onMount === 'function') {
      onMount(overlay, closeModal);
    }
  }

  function openDashboardShareModal(playlist) {
    if (!playlist) {
      showToast('Không tìm thấy playlist để chia sẻ', 'error');
      return;
    }
    const shareCode = createShareCode(playlist);
    const bodyHtml = \`
      <div style="font-weight: 600; font-size: 15px; color: #38bdf8; margin-bottom: 4px;">
        🎵 \${escapeHtml(playlist.name)}
      </div>
      <div style="color: #94a3b8; font-size: 12.5px; margin-bottom: 12px;">
        \${playlist.songs ? playlist.songs.length : 0} bài hát • \${escapeHtml(playlist.description || '')}
      </div>

      <div style="font-weight: 600; margin-bottom: 6px;">Cách 1: Mã Chia Sẻ Nhanh (Gửi qua Zalo, Teams, tin nhắn)</div>
      <textarea id="xm-share-code-box" class="xm-share-textarea" readonly>\${shareCode}</textarea>
      <div style="display: flex; gap: 8px; margin-top: 8px; margin-bottom: 16px;">
        <button id="xm-btn-copy-code" class="btn-primary" style="flex: 1;">📋 Sao Chép Mã</button>
        <button id="xm-btn-dl-json" class="btn-secondary" style="flex: 1;">💾 Tải File JSON</button>
      </div>

      <div style="font-weight: 600; margin-bottom: 6px;">Cách 2: Chia Sẻ Qua Mạng Nội Bộ (Hub Server)</div>
      <div style="color: #94a3b8; font-size: 12px; margin-bottom: 8px;">
        Tạo liên kết để các máy khác trong mạng LAN có thể tải danh sách này:
      </div>
      <button id="xm-btn-share-online" class="btn-secondary" style="width: 100%;">🌐 Tạo Link Chia Sẻ Trực Tuyến</button>
      <div id="xm-share-online-result" style="margin-top: 8px; font-size: 12px; word-break: break-all;"></div>
    \`;

    showDashboardModal('🔗 Chia Sẻ Playlist', bodyHtml, (overlay, closeModal) => {
      const copyBtn = overlay.querySelector('#xm-btn-copy-code');
      copyBtn.onclick = () => {
        navigator.clipboard.writeText(shareCode).then(() => {
          showToast('Đã sao chép mã chia sẻ vào Clipboard!', 'success');
        }).catch(() => {
          const ta = overlay.querySelector('#xm-share-code-box');
          ta.select();
          document.execCommand('copy');
          showToast('Đã sao chép mã chia sẻ!', 'success');
        });
      };

      const dlBtn = overlay.querySelector('#xm-btn-dl-json');
      dlBtn.onclick = () => {
        const blob = new Blob([JSON.stringify(playlist, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = (playlist.name.replace(/[^a-zA-Z0-9\-_]/g, '_') || 'playlist') + '.json';
        a.click();
        URL.revokeObjectURL(url);
        showToast('Đã tải xuống file ' + a.download, 'success');
      };

      const shareOnlineBtn = overlay.querySelector('#xm-btn-share-online');
      const shareResDiv = overlay.querySelector('#xm-share-online-result');
      shareOnlineBtn.onclick = async () => {
        shareOnlineBtn.textContent = 'Đang tạo liên kết...';
        shareOnlineBtn.disabled = true;
        try {
          const res = await fetch('/api/share', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ playlist })
          });
          const json = await res.json();
          if (json.shareUrl) {
            shareResDiv.innerHTML = \`<span style="color: #34d399;">Link chia sẻ:</span> <a href="\${json.shareUrl}" target="_blank" style="color: #38bdf8;">\${json.shareUrl}</a>\`;
            navigator.clipboard.writeText(json.shareUrl);
            showToast('Đã tạo link chia sẻ và sao chép vào Clipboard!', 'success');
          } else {
            shareResDiv.innerHTML = \`<span style="color: #f87171;">Lỗi: \${json.error || 'Không thể tạo link'}</span>\`;
          }
        } catch (e) {
          shareResDiv.innerHTML = \`<span style="color: #f87171;">Lỗi kết nối server: \${e.message}</span>\`;
        } finally {
          shareOnlineBtn.textContent = '🌐 Tạo Link Chia Sẻ Trực Tuyến';
          shareOnlineBtn.disabled = false;
        }
      };
    });
  }

  function openDashboardImportModal() {
    const bodyHtml = \`
      <div style="color: #94a3b8; font-size: 12.5px; margin-bottom: 12px;">
        Dán <b>Mã chia sẻ</b> (bắt đầu bằng <code>XMPL2:</code>), chuỗi <b>JSON playlist</b> hoặc <b>Đường dẫn URL</b> (GitHub raw, Gist, Server nội bộ...):
      </div>
      <textarea id="xm-import-input" class="xm-share-textarea" placeholder="Dán mã XMPL2:... hoặc URL file playlist vào đây..."></textarea>
      <div id="xm-import-preview" style="margin-top: 12px; font-size: 13px; line-height: 1.5; min-height: 30px;"></div>
      <div style="display: flex; gap: 8px; margin-top: 14px;">
        <button id="xm-btn-preview-import" class="btn-secondary" style="flex: 1;">🔍 Kiểm Tra & Xem Trước</button>
        <button id="xm-btn-confirm-import" class="btn-primary" style="flex: 1;" disabled>➕ Thêm Vào Thư Viện</button>
      </div>
    \`;

    showDashboardModal('📥 Nhập Playlist Chia Sẻ', bodyHtml, (overlay, closeModal) => {
      const inputEl = overlay.querySelector('#xm-import-input');
      const previewEl = overlay.querySelector('#xm-import-preview');
      const previewBtn = overlay.querySelector('#xm-btn-preview-import');
      const confirmBtn = overlay.querySelector('#xm-btn-confirm-import');

      let parsedData = null;

      const runPreview = async () => {
        const text = inputEl.value.trim();
        if (!text) {
          previewEl.innerHTML = '<span style="color: #f87171;">Vui lòng nhập mã hoặc URL!</span>';
          confirmBtn.disabled = true;
          return;
        }

        previewEl.innerHTML = '<span style="color: #94a3b8;">Đang kiểm tra và giải mã...</span>';

        try {
          if (text.startsWith('http://') || text.startsWith('https://')) {
            const res = await fetch(text);
            const json = await res.json();
            parsedData = decodeShareCode(JSON.stringify(json));
          } else {
            parsedData = decodeShareCode(text);
          }

          if (Array.isArray(parsedData)) {
            previewEl.innerHTML = \`<span style="color: #34d399; font-weight: 600;">✓ Hợp lệ: Bộ sưu tập gồm \${parsedData.length} playlist (\${parsedData.reduce((acc, p) => acc + (p.songs ? p.songs.length : 0), 0)} bài hát).</span>\`;
            confirmBtn.disabled = false;
          } else if (parsedData && parsedData.name) {
            previewEl.innerHTML = \`<span style="color: #34d399; font-weight: 600;">✓ Hợp lệ:</span> <b>\${escapeHtml(parsedData.name)}</b> (\${parsedData.songs ? parsedData.songs.length : 0} bài hát).\`;
            confirmBtn.disabled = false;
          } else {
            previewEl.innerHTML = '<span style="color: #f87171;">Không nhận dạng được playlist hợp lệ!</span>';
            confirmBtn.disabled = true;
          }
        } catch (e) {
          previewEl.innerHTML = \`<span style="color: #f87171;">Lỗi giải mã: \${escapeHtml(e.message)}</span>\`;
          confirmBtn.disabled = true;
        }
      };

      previewBtn.onclick = runPreview;
      inputEl.oninput = () => {
        if (inputEl.value.trim().length > 15) {
          runPreview();
        }
      };

      confirmBtn.onclick = () => {
        if (!parsedData) return;
        if (Array.isArray(parsedData)) {
          parsedData.forEach(p => {
            if (!p.id) p.id = 'playlist-shared-' + Date.now() + Math.random().toString(36).substring(2, 5);
            currentPlaylists.push(p);
          });
          savePlaylists(currentPlaylists);
          setActivePlaylist(parsedData[0].id);
          showToast(\`Đã nạp thành công \${parsedData.length} playlist mới!\`, 'success');
        } else {
          parsedData.id = 'playlist-shared-' + Date.now();
          currentPlaylists.push(parsedData);
          savePlaylists(currentPlaylists);
          setActivePlaylist(parsedData.id);
          showToast(\`Đã thêm playlist "\${parsedData.name}" (\${parsedData.songs.length} bài)!\`, 'success');
        }
        renderPlaylistsGrid();
        renderActivePlaylistSongs();
        closeModal();
      };
    });
  }

  function openDashboardSyncModal() {
    const curVersion = localStorage.getItem(STORAGE_KEYS.PLAYLISTS_VERSION) || '2.0.0';
    const bodyHtml = \`
      <div class="xm-sync-card">
        <div class="xm-sync-badge">Phiên bản mới nhất: v2.2.0 (Phát hành: \${RELEASE_DATE})</div>
        <div style="font-weight: 700; font-size: 14px; margin-bottom: 4px; color: #fff;">
          Kho Tuyển Chọn 450 Bài Hát Chuẩn XMusic (75 bài/chủ đề)
        </div>
        <div style="font-size: 12px; color: #94a3b8; line-height: 1.5;">
          • Mở rộng quy mô từ 25 bài lên 75 bài hát/playlist.<br>
          • Cập nhật đầy đủ Top Trending V-Pop 2026, Acoustic Chill, Vinahouse Bass căng, Ballad Lofi Suy, Gen Z Indie và Tình ca ngọt ngào.<br>
          • Phiên bản hiện tại trên máy của bạn: <b style="color: #38bdf8;">v\${escapeHtml(curVersion)}</b>
        </div>
      </div>

      <div style="font-weight: 600; margin-bottom: 10px; font-size: 13px;">Chọn phương thức cập nhật:</div>

      <button id="xm-btn-sync-smart" class="xm-opt-btn primary">
        <span style="font-size: 20px;">🟢</span>
        <div>
          <div style="font-weight: 600;">Cập nhật & Giữ lại Playlist cá nhân (Khuyên dùng)</div>
          <div style="font-size: 11.5px; color: #cbd5e1;">Bảo toàn 100% các playlist bạn tự tạo, chỉ cập nhật 6 playlist tuyển chọn hệ thống.</div>
        </div>
      </button>

      <button id="xm-btn-sync-full" class="xm-opt-btn">
        <span style="font-size: 20px;">🔄</span>
        <div>
          <div style="font-weight: 600;">Làm mới hoàn toàn (Khôi phục mặc định)</div>
          <div style="font-size: 11.5px; color: #cbd5e1;">Xóa các playlist cũ và nạp lại nguyên bản 6 playlist tuyển chọn v2.2.0.</div>
        </div>
      </button>

      <div style="margin-top: 14px; padding-top: 12px; border-top: 1px solid rgba(255,255,255,0.08);">
        <div style="font-weight: 600; font-size: 12px; color: #94a3b8; margin-bottom: 6px;">
          Đồng bộ từ Server Hub hoặc URL tùy chỉnh (LAN / Cloud):
        </div>
        <div style="display: flex; gap: 6px;">
          <input type="text" id="xm-sync-url-input" class="search-input" value="/sample-playlists.json" placeholder="Nhập URL JSON..." style="flex: 1; font-size: 12px;" />
          <button id="xm-btn-sync-url" class="btn-secondary" style="white-space: nowrap;">Tải URL</button>
        </div>
      </div>
    \`;

    showDashboardModal('☁️ Cập Nhật Kho Tuyển Chọn v2.2.0', bodyHtml, (overlay, closeModal) => {
      overlay.querySelector('#xm-btn-sync-smart').onclick = () => {
        smartUpdatePlaylists(DEFAULT_PLAYLISTS, true);
        setActivePlaylist(DEFAULT_PLAYLISTS[0].id);
        renderPlaylistsGrid();
        renderActivePlaylistSongs();
        showToast('Đã nâng cấp 6 playlist lên v2.2.0 (450 bài hát) & giữ nguyên playlist cá nhân!', 'success');
        closeModal();
      };

      overlay.querySelector('#xm-btn-sync-full').onclick = () => {
        if (confirm('LƯU Ý: Thao tác này sẽ ghi đè toàn bộ danh sách phát bằng 6 playlist mẫu v2.2.0. Bạn có chắc chắn muốn tiếp tục?')) {
          smartUpdatePlaylists(DEFAULT_PLAYLISTS, false);
          setActivePlaylist(DEFAULT_PLAYLISTS[0].id);
          renderPlaylistsGrid();
          renderActivePlaylistSongs();
          showToast('Đã đặt lại toàn bộ kho nhạc về mặc định v2.2.0!', 'success');
          closeModal();
        }
      };

      overlay.querySelector('#xm-btn-sync-url').onclick = async () => {
        const url = overlay.querySelector('#xm-sync-url-input').value.trim();
        if (!url) return;
        const btn = overlay.querySelector('#xm-btn-sync-url');
        btn.textContent = 'Đang tải...';
        btn.disabled = true;
        try {
          const res = await fetch(url);
          const data = await res.json();
          if (Array.isArray(data) && data.length > 0) {
            smartUpdatePlaylists(data, true);
            setActivePlaylist(data[0].id);
            renderPlaylistsGrid();
            renderActivePlaylistSongs();
            showToast(\`Đã đồng bộ thành công \${data.length} playlist từ URL!\`, 'success');
            closeModal();
          } else {
            showToast('Dữ liệu từ URL không phải là danh sách playlist hợp lệ!', 'error');
          }
        } catch (e) {
          showToast('Lỗi tải từ URL: ' + e.message, 'error');
        } finally {
          btn.textContent = 'Tải URL';
          btn.disabled = false;
        }
      };
    });
  }
`;

  appJs = appJs.replace('function initApp()', dashboardHelperCode + '\n  function initApp()');
}

// In setupActions in app.js, bind the new buttons
const appOldSetupActions = `    if (btnNewTop) btnNewTop.addEventListener('click', createNewPlaylist);`;
const appNewSetupActions = `    if (btnNewTop) btnNewTop.addEventListener('click', createNewPlaylist);

    const btnShareModal = document.getElementById('btn-share-modal');
    if (btnShareModal) btnShareModal.addEventListener('click', () => openDashboardImportModal());

    const btnSyncCloud = document.getElementById('btn-sync-cloud');
    if (btnSyncCloud) btnSyncCloud.addEventListener('click', () => openDashboardSyncModal());

    const btnShareActive = document.getElementById('btn-share-active');
    if (btnShareActive) {
      btnShareActive.addEventListener('click', () => {
        const pl = currentPlaylists.find(p => p.id === activePlaylistId);
        if (pl) openDashboardShareModal(pl);
      });
    }`;

appJs = appJs.replace(appOldSetupActions, appNewSetupActions);

// Update confirmation in btnReset in app.js
appJs = appJs.replace(
  "if (confirm('Khôi phục lại 2 danh sách phát mẫu? Các bài hát tự thêm sẽ bị đặt lại.'))",
  "if (confirm('Khôi phục lại 6 danh sách phát mẫu tuyển chọn v2.2.0 (450 bài hát)? Các bài hát tự thêm sẽ bị đặt lại.'))"
);
appJs = appJs.replace(
  "showToast('Đã khôi phục 2 danh sách phát mẫu!', 'success');",
  "showToast('Đã khôi phục 6 danh sách phát mẫu v2.2.0 (450 bài)!', 'success');"
);

fs.writeFileSync('web-dashboard/app.js', appJs, 'utf8');
console.log('✓ Đã cập nhật thành công web-dashboard/app.js!');

console.log('\n--- HOÀN TẤT PATCH CODE ---');

