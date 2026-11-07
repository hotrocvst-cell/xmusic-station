const fs = require('fs');
const path = require('path');

console.log('--- BẮT ĐẦU KHÓA CỨNG GITHUB REPO CHÍNH THỨC TỪ ADMIN (hotrocvst-cell/xmusic-station) ---');

// =========================================================================
// 1. UPDATE extension/content.js
// =========================================================================
let contentJs = fs.readFileSync('extension/content.js', 'utf8');

// The locked official repository definition
const lockedModuleCode = `
  // =========================================================================
  // GITHUB UPDATE CENTER - NGUỒN CHÍNH THỨC DUY NHẤT TỪ ADMIN (KHÓA BẢO MẬT)
  // =========================================================================
  const OFFICIAL_GITHUB_REPO = Object.freeze({
    owner: 'hotrocvst-cell',
    repo: 'xmusic-station',
    fullName: 'hotrocvst-cell/xmusic-station',
    url: 'https://github.com/hotrocvst-cell/xmusic-station',
    rawVersionUrl: 'https://raw.githubusercontent.com/hotrocvst-cell/xmusic-station/main/version.json',
    rawPlaylistsUrl: 'https://raw.githubusercontent.com/hotrocvst-cell/xmusic-station/main/sample-playlists.json',
    rawUserscriptUrl: 'https://raw.githubusercontent.com/hotrocvst-cell/xmusic-station/main/userscript/xmusic-auto-playlist.user.js',
    releasesUrl: 'https://github.com/hotrocvst-cell/xmusic-station/releases/latest'
  });

  function compareVersions(v1, v2) {
    if (!v1 || !v2) return 0;
    const p1 = String(v1).replace(/^v/, '').split('.').map(Number);
    const p2 = String(v2).replace(/^v/, '').split('.').map(Number);
    for (let i = 0; i < Math.max(p1.length, p2.length); i++) {
      const num1 = p1[i] || 0;
      const num2 = p2[i] || 0;
      if (num1 > num2) return 1;
      if (num1 < num2) return -1;
    }
    return 0;
  }

  async function checkGithubUpdates(resultContainer) {
    if (!resultContainer) return;

    resultContainer.innerHTML = \`
      <div style="color: #94a3b8; font-size: 12px; text-align: center; padding: 12px;">
        Đang kết nối tới GitHub Admin (\${OFFICIAL_GITHUB_REPO.fullName})...
      </div>
    \`;

    try {
      const rawVersionUrl = \`\${OFFICIAL_GITHUB_REPO.rawVersionUrl}?t=\${Date.now()}\`;
      const res = await fetch(rawVersionUrl);
      
      if (!res.ok) {
        resultContainer.innerHTML = \`
          <div style="background: rgba(239, 68, 68, 0.1); border: 1px solid rgba(239, 68, 68, 0.3); border-radius: 8px; padding: 12px; color: #fca5a5; font-size: 12px; line-height: 1.5;">
            Không tìm thấy file <code>version.json</code> trên kho chính thức <b>\${OFFICIAL_GITHUB_REPO.fullName}</b> (HTTP \${res.status}).<br>
            • Admin cần push commit đầu tiên lên nhánh <code>main</code> của GitHub.<br>
            • Link kho: <a href="\${OFFICIAL_GITHUB_REPO.url}" target="_blank" style="color: #38bdf8; text-decoration: underline;">\${OFFICIAL_GITHUB_REPO.fullName}</a>
          </div>
        \`;
        return;
      }

      const remote = await res.json();
      const currentVer = localStorage.getItem(STORAGE_KEYS.PLAYLISTS_VERSION) || APP_VERSION;
      const isNewer = compareVersions(remote.version, currentVer) > 0;

      let html = '';
      if (isNewer) {
        html = \`
          <div style="background: rgba(52, 211, 153, 0.1); border: 1px solid rgba(52, 211, 153, 0.35); border-radius: 10px; padding: 14px;">
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
              <span class="xmusic-ver-pill new">🎉 Có phiên bản mới: v\${escapeHtml(remote.version)}</span>
              <span style="font-size: 11px; color: #94a3b8;">\${escapeHtml(remote.updatedAt || '')}</span>
            </div>
            <div style="font-weight: 600; color: #fff; font-size: 13.5px; margin-bottom: 6px;">
              \${escapeHtml(remote.name || 'Bản phát hành từ Admin')}
            </div>
            <div class="xmusic-changelog-box">
              <div style="font-weight: 600; margin-bottom: 4px; color: #34d399;">Nội dung cập nhật mới:</div>
              <ul>
                \${(remote.releaseNotes || []).map(n => \`<li>\${escapeHtml(n)}</li>\`).join('')}
              </ul>
            </div>
            <div class="xmusic-update-actions">
              <button id="xmusic-btn-apply-github-pl" class="xmusic-btn-primary" style="width: 100%;">
                ⚡ 1. Nạp Kho Nhạc Mới Từ Admin (Giữ Playlist Riêng)
              </button>
              <a href="\${OFFICIAL_GITHUB_REPO.rawUserscriptUrl}" target="_blank" class="xmusic-btn-secondary" style="text-align: center; text-decoration: none; display: block; padding: 8px;">
                📥 2. Cập Nhật Tampermonkey Script
              </a>
              <a href="\${OFFICIAL_GITHUB_REPO.releasesUrl}" target="_blank" class="xmusic-btn-secondary" style="text-align: center; text-decoration: none; display: block; padding: 8px;">
                📦 3. Tải Extension .zip Từ GitHub Releases
              </a>
            </div>
          </div>
        \`;
      } else {
        html = \`
          <div style="background: rgba(56, 189, 248, 0.1); border: 1px solid rgba(56, 189, 248, 0.3); border-radius: 10px; padding: 14px;">
            <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px;">
              <span style="font-size: 16px;">✅</span>
              <span style="font-weight: 700; color: #38bdf8;">Bạn đang sử dụng phiên bản mới nhất (v\${escapeHtml(currentVer)})!</span>
            </div>
            <div style="font-size: 12px; color: #94a3b8; margin-bottom: 10px;">
              Kho chính thức từ Admin: <b>\${OFFICIAL_GITHUB_REPO.fullName}</b> • Phiên bản: v\${escapeHtml(remote.version)} (\${remote.totalSongs || 450} bài hát).
            </div>
            <div class="xmusic-update-actions">
              <button id="xmusic-btn-force-github-pl" class="xmusic-btn-secondary" style="width: 100%;">
                🔄 Nạp lại kho 450 bài từ Admin (Đồng bộ tức thì)
              </button>
              <a href="\${OFFICIAL_GITHUB_REPO.url}" target="_blank" class="xmusic-btn-secondary" style="text-align: center; text-decoration: none; display: block; padding: 6px;">
                🌐 Truy cập Kho GitHub Admin
              </a>
            </div>
          </div>
        \`;
      }

      resultContainer.innerHTML = html;

      const applyBtn = resultContainer.querySelector('#xmusic-btn-apply-github-pl') || resultContainer.querySelector('#xmusic-btn-force-github-pl');
      if (applyBtn) {
        applyBtn.onclick = async () => {
          applyBtn.textContent = 'Đang tải từ Admin GitHub...';
          applyBtn.disabled = true;
          try {
            const plRes = await fetch(\`\${OFFICIAL_GITHUB_REPO.rawPlaylistsUrl}?t=\${Date.now()}\`);
            const plData = await plRes.json();
            if (Array.isArray(plData) && plData.length > 0) {
              smartUpdatePlaylists(plData, true);
              setActivePlaylistId(plData[0].id);
              updatePlaylistSelect();
              renderCurrentPlaylistSongs();
              showToast(\`Đã đồng bộ thành công \${plData.length} playlist từ Admin!\`, 'success');
              checkGithubUpdates(resultContainer);
            } else {
              showToast('Dữ liệu playlist từ Admin không đúng định dạng!', 'error');
            }
          } catch (err) {
            showToast('Lỗi khi tải playlist từ GitHub: ' + err.message, 'error');
          } finally {
            applyBtn.textContent = '⚡ 1. Nạp Kho Nhạc Mới Từ Admin';
            applyBtn.disabled = false;
          }
        };
      }
    } catch (e) {
      resultContainer.innerHTML = \`
        <div style="color: #f87171; font-size: 12px; background: rgba(239,68,68,0.1); padding: 10px; border-radius: 8px;">
          Lỗi kết nối GitHub Admin: \${escapeHtml(e.message)}
        </div>
      \`;
    }
  }
`;

// Replace previous helpers or inject before injectLeftSidebarWidget
if (contentJs.includes('const OFFICIAL_GITHUB_REPO =')) {
  // Replace existing
  contentJs = contentJs.replace(
    /\/\/ ==+[\s\S]*?const OFFICIAL_GITHUB_REPO[\s\S]*?async function checkGithubUpdates[\s\S]*?\n  }\n/m,
    lockedModuleCode
  );
} else {
  contentJs = contentJs.replace(
    'function injectLeftSidebarWidget() {',
    lockedModuleCode + '\n  function injectLeftSidebarWidget() {'
  );
}

// Replace tab-update HTML in contentJs to remove input and show locked official card
const oldTabUpdateRegex = /<!-- Tab 5: GitHub Update Center -->[\s\S]*?<!-- Tab 4: Configuration -->/;
const newTabUpdateHtml = `<!-- Tab 5: GitHub Update Center -->
        <div id="tab-update" class="xmusic-content tab-content" style="display: none;">
          <div class="xmusic-update-card">
            <div class="xmusic-update-status">
              <span style="font-size: 22px;">🚀</span>
              <div>
                <div style="font-weight: 700; color: #fff; font-size: 14px;">Trung Tâm Cập Nhật GitHub</div>
                <div style="font-size: 12px; color: #94a3b8; margin-top: 2px;">
                  Bản hiện tại: <span class="xmusic-ver-pill current">v\${APP_VERSION}</span> • 450 bài tuyển chọn
                </div>
              </div>
            </div>

            <!-- Locked Official Repository Card -->
            <div style="background: rgba(15, 23, 42, 0.65); border: 1px solid rgba(99, 102, 241, 0.4); border-radius: 10px; padding: 12px 14px; margin-bottom: 14px;">
              <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 6px;">
                <span style="font-size: 11px; font-weight: 700; color: #a5b4fc; text-transform: uppercase; letter-spacing: 0.5px;">Kho Nguồn Chính Thức (Admin Duy Nhất)</span>
                <span style="font-size: 10.5px; background: rgba(16, 185, 129, 0.2); color: #34d399; padding: 2px 8px; border-radius: 12px; border: 1px solid rgba(16, 185, 129, 0.4); font-weight: 700;">🔒 ĐÃ KHÓA BẢO MẬT</span>
              </div>
              <div style="font-weight: 700; color: #38bdf8; font-size: 13.5px; font-family: monospace;">
                hotrocvst-cell/xmusic-station
              </div>
              <div style="font-size: 11px; color: #64748b; margin-top: 4px; line-height: 1.4;">
                Nguồn cập nhật được khóa cứng từ Admin. Người dùng không thể can thiệp hoặc thay đổi địa chỉ khác.
              </div>
            </div>

            <button id="xmusic-btn-check-github" class="xmusic-btn-primary" style="width: 100%;">
              🔍 Kiểm Tra Bản Cập Nhật Từ Admin (GitHub)
            </button>

            <!-- Live check result area -->
            <div id="xmusic-github-check-result" style="margin-top: 14px;"></div>
          </div>
        </div>

        <!-- Tab 4: Configuration -->`;

contentJs = contentJs.replace(oldTabUpdateRegex, newTabUpdateHtml);

// Clean up bindSidebarEvents: remove btnSaveRepo binding
contentJs = contentJs.replace(
  /\/\/ GitHub Update Center bindings[\s\S]*?if \(btnCheckGithub && resultArea\) \{[\s\S]*?checkGithubUpdates\(resultArea\);\s*\}\s*\}/,
  `// GitHub Update Center bindings (Locked to official Admin source)
    const btnCheckGithub = document.getElementById('xmusic-btn-check-github');
    const resultArea = document.getElementById('xmusic-github-check-result');

    if (btnCheckGithub && resultArea) {
      btnCheckGithub.onclick = () => {
        checkGithubUpdates(resultArea);
      };
    }`
);

fs.writeFileSync('extension/content.js', contentJs, 'utf8');
console.log('✓ Đã khóa cứng repo trong extension/content.js!');

// =========================================================================
// 2. UPDATE web-dashboard/index.html
// =========================================================================
let dashHtml = fs.readFileSync('web-dashboard/index.html', 'utf8');

// Replace the repo configuration in view-update to be locked
const oldDashCardRegex = /<div class="xm-update-card">[\s\S]*?<!-- Deployment Guide Quick Card -->/;
const newDashCardHtml = `<div class="xm-update-card">
            <div class="xm-update-status">
              <span style="font-size: 26px;">🚀</span>
              <div>
                <div style="font-weight: 700; color: #fff; font-size: 16px;">Phiên Bản Ứng Dụng Hiện Tại</div>
                <div style="font-size: 13px; color: #94a3b8; margin-top: 3px;">
                  Bản cài đặt: <span class="xm-ver-pill current">v2.2.0</span> • Kho 450 bài hát tuyển chọn (75 bài/chủ đề) • Ngày: 07/11/2026
                </div>
              </div>
            </div>

            <!-- Locked Official Repository Card -->
            <div style="max-width: 650px; margin-top: 16px; background: rgba(15, 23, 42, 0.65); border: 1px solid rgba(99, 102, 241, 0.4); border-radius: 10px; padding: 14px 18px;">
              <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 6px;">
                <span style="font-size: 11.5px; font-weight: 700; color: #a5b4fc; text-transform: uppercase; letter-spacing: 0.5px;">Nguồn Cập Nhật Chính Thức (Admin Duy Nhất)</span>
                <span style="font-size: 11px; background: rgba(16, 185, 129, 0.2); color: #34d399; padding: 2px 10px; border-radius: 12px; border: 1px solid rgba(16, 185, 129, 0.4); font-weight: 700;">🔒 ĐÃ KHÓA BẢO MẬT</span>
              </div>
              <div style="font-weight: 700; color: #38bdf8; font-size: 15px; font-family: monospace;">
                hotrocvst-cell/xmusic-station
              </div>
              <div style="font-size: 12px; color: #64748b; margin-top: 4px; line-height: 1.5;">
                Toàn bộ dữ liệu bài hát và phiên bản cập nhật được liên kết cố định trực tiếp từ tài khoản Admin (hotrocvst-cell). Người dùng không thể thay đổi nguồn này.
              </div>
            </div>

            <!-- Live Check Results Area -->
            <div id="dash-github-check-result" style="margin-top: 20px;"></div>
          </div>

          <!-- Deployment Guide Quick Card -->`;

dashHtml = dashHtml.replace(oldDashCardRegex, newDashCardHtml);
fs.writeFileSync('web-dashboard/index.html', dashHtml, 'utf8');
console.log('✓ Đã khóa cứng repo trong web-dashboard/index.html!');

// =========================================================================
// 3. UPDATE web-dashboard/app.js
// =========================================================================
let appJs = fs.readFileSync('web-dashboard/app.js', 'utf8');

const dashLockedModuleCode = `
  // =========================================================================
  // GITHUB UPDATE CENTER - NGUỒN CHÍNH THỨC DUY NHẤT TỪ ADMIN (KHÓA BẢO MẬT)
  // =========================================================================
  const OFFICIAL_GITHUB_REPO = Object.freeze({
    owner: 'hotrocvst-cell',
    repo: 'xmusic-station',
    fullName: 'hotrocvst-cell/xmusic-station',
    url: 'https://github.com/hotrocvst-cell/xmusic-station',
    rawVersionUrl: 'https://raw.githubusercontent.com/hotrocvst-cell/xmusic-station/main/version.json',
    rawPlaylistsUrl: 'https://raw.githubusercontent.com/hotrocvst-cell/xmusic-station/main/sample-playlists.json',
    rawUserscriptUrl: 'https://raw.githubusercontent.com/hotrocvst-cell/xmusic-station/main/userscript/xmusic-auto-playlist.user.js',
    releasesUrl: 'https://github.com/hotrocvst-cell/xmusic-station/releases/latest'
  });

  function compareVersions(v1, v2) {
    if (!v1 || !v2) return 0;
    const p1 = String(v1).replace(/^v/, '').split('.').map(Number);
    const p2 = String(v2).replace(/^v/, '').split('.').map(Number);
    for (let i = 0; i < Math.max(p1.length, p2.length); i++) {
      const num1 = p1[i] || 0;
      const num2 = p2[i] || 0;
      if (num1 > num2) return 1;
      if (num1 < num2) return -1;
    }
    return 0;
  }

  async function checkDashboardGithubUpdates(resultContainer) {
    if (!resultContainer) return;

    resultContainer.innerHTML = \`
      <div style="color: #94a3b8; font-size: 13px; text-align: center; padding: 16px;">
        Đang kết nối tới GitHub Admin (\${OFFICIAL_GITHUB_REPO.fullName})...
      </div>
    \`;

    try {
      const rawVersionUrl = \`\${OFFICIAL_GITHUB_REPO.rawVersionUrl}?t=\${Date.now()}\`;
      const res = await fetch(rawVersionUrl);
      
      if (!res.ok) {
        resultContainer.innerHTML = \`
          <div style="background: rgba(239, 68, 68, 0.1); border: 1px solid rgba(239, 68, 68, 0.3); border-radius: 8px; padding: 14px; color: #fca5a5; font-size: 13px; line-height: 1.6;">
            Không tìm thấy file <code>version.json</code> trên kho chính thức <b>\${OFFICIAL_GITHUB_REPO.fullName}</b> (HTTP \${res.status}).<br>
            • Admin cần push commit đầu tiên lên nhánh <code>main</code> của GitHub.<br>
            • Link kho: <a href="\${OFFICIAL_GITHUB_REPO.url}" target="_blank" style="color: #38bdf8; text-decoration: underline;">\${OFFICIAL_GITHUB_REPO.fullName}</a>
          </div>
        \`;
        return;
      }

      const remote = await res.json();
      const currentVer = localStorage.getItem(STORAGE_KEYS.PLAYLISTS_VERSION) || APP_VERSION;
      const isNewer = compareVersions(remote.version, currentVer) > 0;

      let html = '';
      if (isNewer) {
        html = \`
          <div style="background: rgba(52, 211, 153, 0.1); border: 1px solid rgba(52, 211, 153, 0.35); border-radius: 10px; padding: 18px;">
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 10px;">
              <span class="xm-ver-pill new">🎉 Có phiên bản mới: v\${escapeHtml(remote.version)}</span>
              <span style="font-size: 12px; color: #94a3b8;">Phát hành: \${escapeHtml(remote.updatedAt || '')}</span>
            </div>
            <div style="font-weight: 700; color: #fff; font-size: 15px; margin-bottom: 8px;">
              \${escapeHtml(remote.name || 'Bản phát hành từ Admin')}
            </div>
            <div class="xm-changelog-box">
              <div style="font-weight: 700; margin-bottom: 6px; color: #34d399;">Nội dung cập nhật mới:</div>
              <ul>
                \${(remote.releaseNotes || []).map(n => \`<li>\${escapeHtml(n)}</li>\`).join('')}
              </ul>
            </div>
            <div class="xm-update-actions">
              <button id="dash-btn-apply-github-pl" class="btn-primary">
                ⚡ 1. Nạp Kho Nhạc Mới Từ Admin (Giữ Playlist Riêng)
              </button>
              <a href="\${OFFICIAL_GITHUB_REPO.rawUserscriptUrl}" target="_blank" class="btn-secondary" style="text-decoration: none; display: inline-flex; align-items: center;">
                📥 2. Cập Nhật Tampermonkey Script
              </a>
              <a href="\${OFFICIAL_GITHUB_REPO.releasesUrl}" target="_blank" class="btn-secondary" style="text-decoration: none; display: inline-flex; align-items: center;">
                📦 3. Tải Extension .zip Từ GitHub Releases
              </a>
            </div>
          </div>
        \`;
      } else {
        html = \`
          <div style="background: rgba(56, 189, 248, 0.1); border: 1px solid rgba(56, 189, 248, 0.3); border-radius: 10px; padding: 18px;">
            <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 10px;">
              <span style="font-size: 20px;">✅</span>
              <span style="font-weight: 700; color: #38bdf8; font-size: 15px;">Bạn đang sử dụng phiên bản mới nhất (v\${escapeHtml(currentVer)})!</span>
            </div>
            <div style="font-size: 13px; color: #94a3b8; margin-bottom: 14px;">
              Kho chính thức từ Admin: <b>\${OFFICIAL_GITHUB_REPO.fullName}</b> • Phiên bản: v\${escapeHtml(remote.version)} (\${remote.totalSongs || 450} bài hát).
            </div>
            <div class="xm-update-actions">
              <button id="dash-btn-force-github-pl" class="btn-secondary">
                🔄 Nạp lại kho 450 bài từ Admin (Đồng bộ tức thì)
              </button>
              <a href="\${OFFICIAL_GITHUB_REPO.url}" target="_blank" class="btn-secondary" style="text-decoration: none; display: inline-flex; align-items: center;">
                🌐 Truy cập Kho GitHub Admin
              </a>
            </div>
          </div>
        \`;
      }

      resultContainer.innerHTML = html;

      const applyBtn = resultContainer.querySelector('#dash-btn-apply-github-pl') || resultContainer.querySelector('#dash-btn-force-github-pl');
      if (applyBtn) {
        applyBtn.onclick = async () => {
          applyBtn.textContent = 'Đang tải từ Admin GitHub...';
          applyBtn.disabled = true;
          try {
            const plRes = await fetch(\`\${OFFICIAL_GITHUB_REPO.rawPlaylistsUrl}?t=\${Date.now()}\`);
            const plData = await plRes.json();
            if (Array.isArray(plData) && plData.length > 0) {
              smartUpdatePlaylists(plData, true);
              setActivePlaylist(plData[0].id);
              renderPlaylistsGrid();
              renderActivePlaylistSongs();
              showToast(\`Đã đồng bộ thành công \${plData.length} playlist từ Admin!\`, 'success');
              checkDashboardGithubUpdates(resultContainer);
            } else {
              showToast('Dữ liệu playlist từ Admin không đúng định dạng!', 'error');
            }
          } catch (err) {
            showToast('Lỗi khi tải playlist từ GitHub: ' + err.message, 'error');
          } finally {
            applyBtn.textContent = '⚡ 1. Nạp Kho Nhạc Mới Từ Admin';
            applyBtn.disabled = false;
          }
        };
      }
    } catch (e) {
      resultContainer.innerHTML = \`
        <div style="color: #f87171; font-size: 13px; background: rgba(239,68,68,0.1); padding: 12px; border-radius: 8px;">
          Lỗi kết nối GitHub Admin: \${escapeHtml(e.message)}
        </div>
      \`;
    }
  }
`;

if (appJs.includes('const OFFICIAL_GITHUB_REPO =')) {
  appJs = appJs.replace(
    /\/\/ ==+[\s\S]*?const OFFICIAL_GITHUB_REPO[\s\S]*?async function checkDashboardGithubUpdates[\s\S]*?\n  }\n/m,
    dashLockedModuleCode
  );
} else {
  // Replace before function initApp
  appJs = appJs.replace(
    /\n\s*function initApp\(\)/,
    dashLockedModuleCode + '\n  function initApp()'
  );
}

// Clean up bind actions in app.js
appJs = appJs.replace(
  /\/\/ GitHub Update Center bindings[\s\S]*?if \(btnCheckGithubDash && dashResultArea\) \{[\s\S]*?checkDashboardGithubUpdates\(dashResultArea\);\s*\}\s*\}/,
  `const btnCheckGithubDash = document.getElementById('btn-check-github-dash');
    const dashResultArea = document.getElementById('dash-github-check-result');

    if (btnCheckGithubDash && dashResultArea) {
      btnCheckGithubDash.addEventListener('click', () => {
        checkDashboardGithubUpdates(dashResultArea);
      });
    }`
);

fs.writeFileSync('web-dashboard/app.js', appJs, 'utf8');
console.log('✓ Đã khóa cứng repo trong web-dashboard/app.js!');

console.log('--- HOÀN TẤT KHÓA CỨNG GITHUB REPO ADMIN ---');
