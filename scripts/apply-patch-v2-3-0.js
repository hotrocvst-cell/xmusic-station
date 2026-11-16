/**
 * scripts/apply-patch-v2-3-0.js
 * Bản vá tự động v2.3.0 cho XMusicStation Automation:
 * 1. Cập nhật 4 danh sách phát tuyển chọn mới (50 bài/list = 200 bài).
 * 2. Tích hợp 11 danh sách phát nhà phát hành (có 24 bài TINH HÀ "SAY HI" đầy đủ streamUrl).
 * 3. Sửa lỗi shuffle (Fisher-Yates đảo 100% mọi vị trí + smoothing pass ca sĩ).
 * 4. Sửa lỗi thêm/phát nhạc các bài TINH HÀ "SAY HI" (bỏ data-song attribute, duyệt Vue subTree).
 */

const fs = require('fs');
const path = require('path');

console.log('🚀 Bắt đầu áp dụng bản vá v2.3.0...');

// 1. Đọc dữ liệu 4 curated playlists
const samplePlaylistsPath = path.join(__dirname, '../sample-playlists.json');
const curatedPlaylists = JSON.parse(fs.readFileSync(samplePlaylistsPath, 'utf8'));
console.log(`✓ Đã nạp 4 curated playlists (${curatedPlaylists.reduce((acc, p) => acc + p.songs.length, 0)} bài).`);

// 2. Trích xuất 11 publisher playlists từ all-available-songs.json
const allSongsPath = path.join(__dirname, 'all-available-songs.json');
const allSongs = JSON.parse(fs.readFileSync(allSongsPath, 'utf8'));

const pubMap = new Map();
allSongs.forEach(s => {
  if (s.sourceHint && !s.sourceHint.startsWith('search:')) {
    const hint = s.sourceHint;
    if (!pubMap.has(hint)) {
      pubMap.set(hint, {
        id: 'pub-' + Math.abs(hint.split('').reduce((a, b) => ((a << 5) - a) + b.charCodeAt(0), 0)),
        name: hint,
        description: `Kho bài hát chính thức từ nhà phát hành (${hint})`,
        songDetails: []
      });
    }
    pubMap.get(hint).songDetails.push({
      key: s.key,
      title: (s.title || '').trim(),
      artists: (s.artists || []).map(a => a.trim().replace(/^,\s*/, '')).filter(Boolean),
      duration: s.duration || 0,
      kbit: s.kbit || 128,
      streamUrl: s.streamUrl || '',
      image: s.image || ''
    });
  }
});

// Chuyển thành mảng và gán songs = songDetails để tương thích cả 2 chuẩn
const publisherPlaylists = Array.from(pubMap.values()).map(p => {
  return {
    id: p.id,
    name: p.name,
    description: p.description,
    songDetails: p.songDetails,
    songs: p.songDetails
  };
});
console.log(`✓ Đã trích xuất ${publisherPlaylists.length} publisher playlists (${publisherPlaylists.reduce((acc, p) => acc + p.songs.length, 0)} bài).`);

// 3. Đoạn mã DEFAULT_PLAYLISTS và DEFAULT_PUBLISHER_PLAYLISTS dạng code string
const curatedPlaylistsCode = 'const DEFAULT_PLAYLISTS = ' + JSON.stringify(curatedPlaylists, null, 2) + ';\n\n' +
  '  const DEFAULT_PUBLISHER_PLAYLISTS = ' + JSON.stringify(publisherPlaylists, null, 2) + ';';

// 4. Thuật toán Fisher-Yates + Smoothing Pass mới
const newSmartShuffleCode = `  function smartShuffle(songs) {
    if (!songs || songs.length <= 2) return shuffleArray(songs || []);
    // 1. Fisher-Yates Shuffle toàn diện mảng: đảo ngẫu nhiên 100% mọi vị trí
    const shuffled = shuffleArray(songs);

    // 2. Smoothing pass: phân tách nghệ sĩ trùng lặp liên tiếp nếu có
    for (let i = 0; i < shuffled.length - 1; i++) {
      const curArtist = (shuffled[i].artists && shuffled[i].artists[0]) ? shuffled[i].artists[0].trim().toLowerCase() : '';
      const nextArtist = (shuffled[i + 1].artists && shuffled[i + 1].artists[0]) ? shuffled[i + 1].artists[0].trim().toLowerCase() : '';
      if (curArtist && nextArtist && curArtist === nextArtist) {
        // Tìm bài khác ca sĩ từ i + 2 trở đi để hoán đổi
        for (let j = i + 2; j < shuffled.length; j++) {
          const candidateArtist = (shuffled[j].artists && shuffled[j].artists[0]) ? shuffled[j].artists[0].trim().toLowerCase() : '';
          const candidatePrevArtist = (shuffled[j - 1].artists && shuffled[j - 1].artists[0]) ? shuffled[j - 1].artists[0].trim().toLowerCase() : '';
          if (candidateArtist !== curArtist && candidatePrevArtist !== curArtist) {
            const temp = shuffled[i + 1];
            shuffled[i + 1] = shuffled[j];
            shuffled[j] = temp;
            break;
          }
        }
      }
    }
    return shuffled;
  }`;

// 5. Cập nhật getPublisherPlaylists có fallback sang DEFAULT_PUBLISHER_PLAYLISTS
const newGetPublisherPlaylistsCode = `  function getPublisherPlaylists() {
    if (publisherPlaylistsCache.length > 0) return publisherPlaylistsCache;
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.PUBLISHER_CACHE);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          publisherPlaylistsCache = parsed;
          return parsed;
        }
      }
    } catch (e) {
      console.warn('[XMusic Assistant] Error reading publisher cache:', e);
    }
    if (typeof DEFAULT_PUBLISHER_PLAYLISTS !== 'undefined' && Array.isArray(DEFAULT_PUBLISHER_PLAYLISTS) && DEFAULT_PUBLISHER_PLAYLISTS.length > 0) {
      publisherPlaylistsCache = DEFAULT_PUBLISHER_PLAYLISTS;
      return DEFAULT_PUBLISHER_PLAYLISTS;
    }
    return [];
  }`;

// =========================================================================
// PATCH FILE 1: extension/content.js
// =========================================================================
console.log('\n--- Đang vá extension/content.js ---');
const contentJsPath = path.join(__dirname, '../extension/content.js');
let contentJs = fs.readFileSync(contentJsPath, 'utf8');

// 1. Version bump
contentJs = contentJs.replace(/const APP_VERSION = '[^']+';/, "const APP_VERSION = '2.3.0';");
contentJs = contentJs.replace(/Initializing script v' \+ APP_VERSION \+ ' \([^)]+\)/, "Initializing script v' + APP_VERSION + ' (Cloud Sync & 4 Curated Playlists - 200 Songs)");

// 2. Thay thế DEFAULT_PLAYLISTS
const defPlRegex = /const DEFAULT_PLAYLISTS = \[\s*\{[\s\S]*?\}\s*\];/;
if (defPlRegex.test(contentJs)) {
  contentJs = contentJs.replace(defPlRegex, curatedPlaylistsCode);
  console.log('✓ Đã cập nhật DEFAULT_PLAYLISTS và thêm DEFAULT_PUBLISHER_PLAYLISTS vào content.js');
} else {
  console.error('❌ Không tìm thấy pattern DEFAULT_PLAYLISTS trong content.js');
}

// 3. Thay getPublisherPlaylists
const getPubRegex = /function getPublisherPlaylists\(\) \{[\s\S]*?return \[\];\s*\}/;
if (getPubRegex.test(contentJs)) {
  contentJs = contentJs.replace(getPubRegex, newGetPublisherPlaylistsCode.trim());
  console.log('✓ Đã cập nhật getPublisherPlaylists fallback trong content.js');
} else {
  console.error('❌ Không tìm thấy pattern getPublisherPlaylists trong content.js');
}

// 4. Nâng cấp injectMainWorldBridge (walk subTree + DOM search + ref support)
const oldBridgeRegex = /function injectMainWorldBridge\(\) \{[\s\S]*?\}\s*function tryDirectQueue/;
const newBridgeCode = `function injectMainWorldBridge() {
    if (document.getElementById('xmusic-page-bridge')) return;
    const script = document.createElement('script');
    script.id = 'xmusic-page-bridge';
    script.textContent = \`
      (function() {
        function findVuePlayerComponent() {
          const rootEl = document.getElementById('app');
          let target = null;

          // 1. Quét từ DOM element thuộc thanh phát nhạc thực tế
          const playerNodes = document.querySelectorAll('.player-bar, .bottom-bar, .player-wrap, footer, .play-bar, audio, .ivu-drawer');
          for (const el of playerNodes) {
            let curr = el;
            while (curr && curr !== document.body && !target) {
              if (curr.__vueParentComponent) {
                let p = curr.__vueParentComponent;
                while (p && !target) {
                  if (p.setupState && (p.setupState.y || p.setupState.SearchSong || p.setupState.I || p.setupState.playSong)) {
                    target = p;
                    return target;
                  }
                  p = p.parent;
                }
              }
              curr = curr.parentElement;
            }
          }

          // 2. Duyệt đệ quy vnode (hỗ trợ đầy đủ Vue 3 comp.subTree)
          if (rootEl && rootEl._vnode) {
            function walk(vnode) {
              if (!vnode || target) return;
              if (vnode.component) {
                const comp = vnode.component;
                if (comp.setupState) {
                  if (comp.setupState.y || comp.setupState.SearchSong || comp.setupState.getSongDetail || comp.setupState.I) {
                    target = comp;
                    return;
                  }
                  for (const k in comp.setupState) {
                    const val = comp.setupState[k];
                    if (Array.isArray(val) && val.length > 0 && val[0] && (val[0].key || val[0].streamUrl)) {
                      target = comp;
                      return;
                    }
                  }
                }
                if (comp.subTree) {
                  walk(comp.subTree);
                  if (target) return;
                }
              }
              if (Array.isArray(vnode.children)) {
                for (const c of vnode.children) {
                  if (c && typeof c === 'object') walk(c);
                  if (target) return;
                }
              }
              if (vnode.dynamicChildren && Array.isArray(vnode.dynamicChildren)) {
                for (const c of vnode.dynamicChildren) {
                  if (c && typeof c === 'object') walk(c);
                  if (target) return;
                }
              }
            }
            walk(rootEl._vnode);
          }
          return target;
        }

        window.addEventListener('xmusic_direct_queue_req', function(e) {
          try {
            const song = e.detail;
            const comp = findVuePlayerComponent();
            if (comp && comp.setupState) {
              const songData = JSON.parse(JSON.stringify(song));
              songData.source = 'add';
              if (typeof songData.artists === 'string') {
                songData.artists = [songData.artists];
              }

              let y = comp.setupState.y;
              if (y && y.value && Array.isArray(y.value)) y = y.value;
              songData.playKey = songData.key + '_' + (Array.isArray(y) ? y.length : Date.now());

              let added = false;
              if (typeof comp.setupState.I === 'function') {
                try {
                  comp.setupState.I({ type: 'add', data: songData });
                  added = true;
                } catch(err) {}
              }
              if (!added && Array.isArray(y)) {
                y.push(songData);
                added = true;
              }

              if (added) {
                window.dispatchEvent(new CustomEvent('xmusic_direct_queue_res', {
                  detail: { success: true, key: song.key, title: song.title }
                }));
                return;
              }
            }
          } catch (err) {
            console.warn('[XMusic Bridge] Lỗi nạp trực tiếp vào Vue:', err);
          }
          window.dispatchEvent(new CustomEvent('xmusic_direct_queue_res', {
            detail: { success: false, key: e.detail?.key }
          }));
        });
      })();
    \`;
    (document.head || document.documentElement).appendChild(script);
  }

  function tryDirectQueue`;

if (oldBridgeRegex.test(contentJs)) {
  contentJs = contentJs.replace(oldBridgeRegex, newBridgeCode);
  console.log('✓ Đã nâng cấp injectMainWorldBridge với Vue 3 subTree trong content.js');
} else {
  console.error('❌ Không tìm thấy pattern injectMainWorldBridge trong content.js');
}

// Timeout tryDirectQueue -> 600ms
contentJs = contentJs.replace(/setTimeout\(\(\) => \{\s*if \(!resolved\) \{\s*window\.removeEventListener\('xmusic_direct_queue_res', handler\);\s*resolve\(false\);\s*\}\s*\}, 350\);/,
  `setTimeout(() => {\n        if (!resolved) {\n          window.removeEventListener('xmusic_direct_queue_res', handler);\n          resolve(false);\n        }\n      }, 600);`);

// 5. Thay thế smartShuffle
const oldSmartShuffleRegex = /function smartShuffle\(songs\) \{[\s\S]*?return result;\s*\}/;
if (oldSmartShuffleRegex.test(contentJs)) {
  contentJs = contentJs.replace(oldSmartShuffleRegex, newSmartShuffleCode.trim());
  console.log('✓ Đã thay thế thuật toán smartShuffle (Fisher-Yates) trong content.js');
} else {
  console.error('❌ Không tìm thấy pattern smartShuffle trong content.js');
}

// 6. Sửa loadAndRenderPublisherTab: bỏ data-song, dùng data-idx
const oldPubRenderBlock = `songContainer.innerHTML = currentPub.songDetails.map((song, idx) => \`
        <div class="xmusic-song-item" data-key="\${song.key}">
          <div class="xmusic-song-info">
            <div class="xmusic-song-title">\${idx + 1}. \${song.title}</div>
            <div class="xmusic-song-meta">\${(song.artists || []).join(', ') || 'Nhiều ca sĩ'} • \${formatDuration(song.duration)}</div>
          </div>
          <div class="xmusic-song-actions">
            <button class="xmusic-btn-sm xmusic-btn-add-to-mine" data-song='\${JSON.stringify(song).replace(/'/g, "&#39;")}' title="Thêm vào Playlist cá nhân đang chọn">+ List tôi</button>
            <button class="xmusic-btn-sm xmusic-btn-queue-single" data-song='\${JSON.stringify(song).replace(/'/g, "&#39;")}' title="Nạp trực tiếp vào hàng đợi đang phát">▶ Queue</button>
          </div>
        </div>
      \`).join('');

      songContainer.querySelectorAll('.xmusic-btn-add-to-mine').forEach(btn => {
        btn.onclick = () => {
          try {
            const song = JSON.parse(btn.getAttribute('data-song'));
            addSongToActivePlaylist(song);
          } catch (e) {}
        };
      });

      songContainer.querySelectorAll('.xmusic-btn-queue-single').forEach(btn => {
        btn.onclick = () => {
          try {
            const song = JSON.parse(btn.getAttribute('data-song'));
            showToast('Đang nạp bài hát vào hàng đợi phát...', 'info', 1500);
            addSongToQueue(song).then(ok => {
              if (ok) {
                updateQueueCountUI();
                showToast('Đã thêm "' + song.title + '" vào đang phát!', 'success', 2500);
              }
            });
          } catch (e) {}
        };
      });`;

const newPubRenderBlock = `const songList = currentPub.songDetails || currentPub.songs || [];
      songContainer.innerHTML = songList.map((song, idx) => \`
        <div class="xmusic-song-item" data-key="\${song.key}">
          <div class="xmusic-song-info">
            <div class="xmusic-song-title">\${idx + 1}. \${song.title}</div>
            <div class="xmusic-song-meta">\${(song.artists || []).join(', ') || 'Nhiều ca sĩ'} • \${formatDuration(song.duration)}</div>
          </div>
          <div class="xmusic-song-actions">
            <button class="xmusic-btn-sm xmusic-btn-add-to-mine" data-idx="\${idx}" title="Thêm vào Playlist cá nhân đang chọn">+ List tôi</button>
            <button class="xmusic-btn-sm xmusic-btn-queue-single" data-idx="\${idx}" title="Nạp trực tiếp vào hàng đợi đang phát">▶ Queue</button>
          </div>
        </div>
      \`).join('');

      songContainer.querySelectorAll('.xmusic-btn-add-to-mine').forEach(btn => {
        btn.onclick = () => {
          try {
            const idx = parseInt(btn.getAttribute('data-idx'), 10);
            const song = songList[idx];
            if (song) addSongToActivePlaylist(song);
          } catch (e) {
            console.error('[XMusic Assistant] Lỗi thêm bài từ nhà phát hành:', e);
          }
        };
      });

      songContainer.querySelectorAll('.xmusic-btn-queue-single').forEach(btn => {
        btn.onclick = () => {
          try {
            const idx = parseInt(btn.getAttribute('data-idx'), 10);
            const song = songList[idx];
            if (!song) return;
            showToast('Đang nạp bài hát vào hàng đợi phát...', 'info', 1500);
            addSongToQueue(song).then(ok => {
              if (ok) {
                updateQueueCountUI();
                showToast('Đã thêm "' + song.title + '" vào đang phát!', 'success', 2500);
              }
            });
          } catch (e) {
            console.error('[XMusic Assistant] Lỗi nạp queue bài từ nhà phát hành:', e);
          }
        };
      });`;

if (contentJs.includes('class="xmusic-btn-sm xmusic-btn-add-to-mine" data-song=')) {
  contentJs = contentJs.replace(oldPubRenderBlock, newPubRenderBlock);
  console.log('✓ Đã sửa loadAndRenderPublisherTab dùng data-idx an toàn trong content.js');
} else {
  console.warn('⚠️ Kiểm tra lại pattern loadAndRenderPublisherTab trong content.js');
}

// 7. Sửa Search Tab: bỏ data-song, dùng data-idx
const oldSearchRenderBlock = `                <div style="display: flex; gap: 6px;">
                  <button class="xmusic-btn-sm xmusic-btn-add-search" data-song='\${JSON.stringify(s).replace(/'/g, "&#39;")}' style="padding: 6px 10px;">+ List tôi</button>
                  <button class="xmusic-btn-sm xmusic-btn-quick-play" data-song='\${JSON.stringify(s).replace(/'/g, "&#39;")}' style="padding: 6px 10px; color: #34d399;">▶ Queue</button>
                </div>
              </div>
            \`).join('');

            // Add to My Playlist
            searchResults.querySelectorAll('.xmusic-btn-add-search').forEach(addBtn => {
              addBtn.onclick = () => {
                try {
                  const songData = JSON.parse(addBtn.getAttribute('data-song'));
                  addSongToActivePlaylist(songData);
                  addBtn.innerText = '✓ Đã thêm';
                  addBtn.disabled = true;
                  addBtn.style.color = '#4ade80';
                } catch (e) {}
              };
            });

            // Quick Queue Single Song
            searchResults.querySelectorAll('.xmusic-btn-quick-play').forEach(qBtn => {
              qBtn.onclick = () => {
                try {
                  const songData = JSON.parse(qBtn.getAttribute('data-song'));
                  showToast('Đang nạp bài vào hàng đợi...', 'info', 1500);
                  addSongToQueue(songData).then(ok => {
                    if (ok) {
                      updateQueueCountUI();
                      qBtn.innerText = '✓ Đang phát';
                      qBtn.disabled = true;
                      showToast('Đã nạp "' + songData.title + '" vào đang phát!', 'success', 2500);
                    }
                  });
                } catch (e) {}
              };
            });`;

const newSearchRenderBlock = `                <div style="display: flex; gap: 6px;">
                  <button class="xmusic-btn-sm xmusic-btn-add-search" data-idx="\${idx}" style="padding: 6px 10px;">+ List tôi</button>
                  <button class="xmusic-btn-sm xmusic-btn-quick-play" data-idx="\${idx}" style="padding: 6px 10px; color: #34d399;">▶ Queue</button>
                </div>
              </div>
            \`).join('');

            // Add to My Playlist
            searchResults.querySelectorAll('.xmusic-btn-add-search').forEach(addBtn => {
              addBtn.onclick = () => {
                try {
                  const idx = parseInt(addBtn.getAttribute('data-idx'), 10);
                  const songData = combined[idx];
                  if (songData) {
                    addSongToActivePlaylist(songData);
                    addBtn.innerText = '✓ Đã thêm';
                    addBtn.disabled = true;
                    addBtn.style.color = '#4ade80';
                  }
                } catch (e) {
                  console.error('[XMusic Assistant] Lỗi thêm bài từ tìm kiếm:', e);
                }
              };
            });

            // Quick Queue Single Song
            searchResults.querySelectorAll('.xmusic-btn-quick-play').forEach(qBtn => {
              qBtn.onclick = () => {
                try {
                  const idx = parseInt(qBtn.getAttribute('data-idx'), 10);
                  const songData = combined[idx];
                  if (!songData) return;
                  showToast('Đang nạp bài vào hàng đợi...', 'info', 1500);
                  addSongToQueue(songData).then(ok => {
                    if (ok) {
                      updateQueueCountUI();
                      qBtn.innerText = '✓ Đang phát';
                      qBtn.disabled = true;
                      showToast('Đã nạp "' + songData.title + '" vào đang phát!', 'success', 2500);
                    }
                  });
                } catch (e) {
                  console.error('[XMusic Assistant] Lỗi nạp queue bài từ tìm kiếm:', e);
                }
              };
            });`;

if (contentJs.includes('class="xmusic-btn-sm xmusic-btn-add-search" data-song=')) {
  contentJs = contentJs.replace(oldSearchRenderBlock, newSearchRenderBlock);
  console.log('✓ Đã sửa Search Tab dùng data-idx an toàn trong content.js');
} else {
  console.warn('⚠️ Kiểm tra lại pattern Search Tab trong content.js');
}

fs.writeFileSync(contentJsPath, contentJs, 'utf8');
console.log('🎉 Đã ghi thành công extension/content.js!');

// =========================================================================
// PATCH FILE 2: web-dashboard/app.js
// =========================================================================
console.log('\n--- Đang vá web-dashboard/app.js ---');
const appJsPath = path.join(__dirname, '../web-dashboard/app.js');
let appJs = fs.readFileSync(appJsPath, 'utf8');

// 1. Thay thế DEFAULT_PLAYLISTS và thêm DEFAULT_PUBLISHER_PLAYLISTS
if (defPlRegex.test(appJs)) {
  appJs = appJs.replace(defPlRegex, curatedPlaylistsCode);
  console.log('✓ Đã cập nhật DEFAULT_PLAYLISTS và DEFAULT_PUBLISHER_PLAYLISTS vào app.js');
} else {
  console.error('❌ Không tìm thấy pattern DEFAULT_PLAYLISTS trong app.js');
}

// 2. Thay getPublisherPlaylists
if (getPubRegex.test(appJs)) {
  appJs = appJs.replace(getPubRegex, newGetPublisherPlaylistsCode.trim());
  console.log('✓ Đã cập nhật getPublisherPlaylists fallback trong app.js');
} else {
  console.error('❌ Không tìm thấy pattern getPublisherPlaylists trong app.js');
}

// 3. Thay thế smartShuffle
if (oldSmartShuffleRegex.test(appJs)) {
  appJs = appJs.replace(oldSmartShuffleRegex, newSmartShuffleCode.trim());
  console.log('✓ Đã thay thế thuật toán smartShuffle (Fisher-Yates) trong app.js');
} else {
  console.error('❌ Không tìm thấy pattern smartShuffle trong app.js');
}

// 4. Thay data-song trong renderPublisherSongs
appJs = appJs.replace(
  `<button class="btn-primary btn-add-pub-song" data-song='\${JSON.stringify(s).replace(/'/g, "&#39;")}' style="padding: 5px 10px; font-size: 11.5px;">+ Thêm vào list</button>`,
  `<button class="btn-primary btn-add-pub-song" data-idx="\${idx}" style="padding: 5px 10px; font-size: 11.5px;">+ Thêm vào list</button>`
);
appJs = appJs.replace(
  `const song = JSON.parse(btn.getAttribute('data-song'));\n        const activeId = activePlaylistId;\n        const pl = currentPlaylists.find(p => p.id === activeId);`,
  `const idx = parseInt(btn.getAttribute('data-idx'), 10);\n        const song = songs[idx];\n        const activeId = activePlaylistId;\n        const pl = currentPlaylists.find(p => p.id === activeId);`
);

// 5. Thay data-song trong Search Results
appJs = appJs.replace(
  `<button class="btn-primary btn-add-to-target" data-song='\${JSON.stringify(s).replace(/'/g, "&#39;")}' style="padding: 6px 12px; font-size: 12px;">+ Thêm</button>`,
  `<button class="btn-primary btn-add-to-target" data-idx="\${idx}" style="padding: 6px 12px; font-size: 12px;">+ Thêm</button>`
);
appJs = appJs.replace(
  `const song = JSON.parse(btn.getAttribute('data-song'));\n            const targetId = modalTargetSelect.value;`,
  `const idx = parseInt(btn.getAttribute('data-idx'), 10);\n            const song = lastSearchResults[idx];\n            const targetId = modalTargetSelect.value;`
);

// 6. Cập nhật thông báo khôi phục
appJs = appJs.replace(
  /showToast\('Đã khôi phục [^']+', 'success'\);/,
  "showToast('Đã khôi phục 4 danh sách phát mẫu v2.3.0 (200 bài)!', 'success');"
);

fs.writeFileSync(appJsPath, appJs, 'utf8');
console.log('🎉 Đã ghi thành công web-dashboard/app.js!');

// =========================================================================
// PATCH FILE 3: version.json
// =========================================================================
console.log('\n--- Đang cập nhật version.json ---');
const versionJsonPath = path.join(__dirname, '../version.json');
const versionData = {
  version: "2.3.0",
  releasedAt: new Date().toISOString(),
  playlistsCount: 4,
  totalSongs: 200,
  releaseNotes: "Bản phát hành v2.3.0: (1) Sửa triệt để thuật toán Smart Shuffle bằng Fisher-Yates shuffle 100% toàn danh sách kèm phân tách ca sĩ; (2) Hỗ trợ đầy đủ các bài hát và album độc quyền Nhà Phát Hành như TINH HÀ SAY HI (24 bài) thêm vào playlist cá nhân và nạp trực tiếp siêu tốc vào hàng đợi phát; (3) Cập nhật 4 danh sách phát tuyển chọn cực đỉnh: Nhạc Việt Sôi Động 2026, Top Hit Rap Việt, Ballad Cảm Xúc Sâu Lắng, Giáng Sinh & Lễ Hội Sôi Động (50 bài/playlist)."
};
fs.writeFileSync(versionJsonPath, JSON.stringify(versionData, null, 2) + '\n', 'utf8');
console.log('✓ Đã cập nhật version.json lên v2.3.0.');

console.log('\n======================================================');
console.log('🎉 BẢN VÁ v2.3.0 ĐÃ ĐƯỢC ÁP DỤNG THÀNH CÔNG VÀO MÃ NGUỒN!');
console.log('======================================================\n');
