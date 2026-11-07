const fs = require('fs');
const path = require('path');

console.log('--- BẮT ĐẦU TÍCH HỢP GITHUB UPDATE CENTER ---');

// =========================================================================
// 1. CẬP NHẬT extension/content.js
// =========================================================================
let contentJs = fs.readFileSync('extension/content.js', 'utf8');

// A. Add GITHUB_REPO to STORAGE_KEYS
if (!contentJs.includes('GITHUB_REPO:')) {
  contentJs = contentJs.replace(
    "PLAYLISTS_VERSION: 'xmusic_playlists_version'",
    "PLAYLISTS_VERSION: 'xmusic_playlists_version',\n    GITHUB_REPO: 'xmusic_github_repo'"
  );
}

// B. Add GitHub Update Helper Functions if not present
if (!contentJs.includes('function checkGithubUpdates(')) {
  const githubHelpers = `
  // ==========================================
  // GITHUB UPDATE CENTER MODULE (v2.2.0)
  // ==========================================
  function getGithubRepo() {
    return localStorage.getItem(STORAGE_KEYS.GITHUB_REPO) || 'https://github.com/vibe-code/xmusic-playlist-automation';
  }

  function setGithubRepo(repo) {
    localStorage.setItem(STORAGE_KEYS.GITHUB_REPO, (repo || '').trim());
  }

  function parseGithubRepo(repoStr) {
    let clean = (repoStr || '').trim();
    clean = clean.replace(/^https?:\\/\\/github\\.com\\//, '').replace(/\\/$/, '');
    const parts = clean.split('/');
    if (parts.length >= 2) {
      return { owner: parts[0], repo: parts[1], fullName: \`\${parts[0]}/\${parts[1]}\` };
    }
    return null;
  }

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
    const rawRepo = getGithubRepo();
    const parsed = parseGithubRepo(rawRepo);
    if (!parsed) {
      resultContainer.innerHTML = \`<div style="color: #f87171; font-size: 12px; margin-top: 8px;">Địa chỉ GitHub repository không hợp lệ. Vui lòng nhập dạng "owner/repo" hoặc URL GitHub đầy đủ!</div>\`;
      return;
    }

    resultContainer.innerHTML = \`
      <div style="color: #94a3b8; font-size: 12px; text-align: center; padding: 12px;">
        Đang kết nối tới GitHub (\${escapeHtml(parsed.fullName)})...
      </div>
    \`;

    try {
      const rawVersionUrl = \`https://raw.githubusercontent.com/\${parsed.owner}/\${parsed.repo}/main/version.json?t=\${Date.now()}\`;
      const res = await fetch(rawVersionUrl);
      
      if (!res.ok) {
        resultContainer.innerHTML = \`
          <div style="background: rgba(239, 68, 68, 0.1); border: 1px solid rgba(239, 68, 68, 0.3); border-radius: 8px; padding: 12px; color: #fca5a5; font-size: 12px; line-height: 1.5;">
            Không tìm thấy file <code>version.json</code> trên nhánh <code>main</code> của kho <b>\${escapeHtml(parsed.fullName)}</b> (HTTP \${res.status}).<br>
            • Hãy đảm bảo bạn đã tạo và push file lên GitHub.<br>
            • Link kho: <a href="https://github.com/\${parsed.owner}/\${parsed.repo}" target="_blank" style="color: #38bdf8; text-decoration: underline;">github.com/\${parsed.owner}/\${parsed.repo}</a>
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
              \${escapeHtml(remote.name || 'Bản phát hành mới')}
            </div>
            <div class="xmusic-changelog-box">
              <div style="font-weight: 600; margin-bottom: 4px; color: #34d399;">Nội dung cập nhật:</div>
              <ul>
                \${(remote.releaseNotes || []).map(n => \`<li>\${escapeHtml(n)}</li>\`).join('')}
              </ul>
            </div>
            <div class="xmusic-update-actions">
              <button id="xmusic-btn-apply-github-pl" class="xmusic-btn-primary" style="width: 100%;">
                ⚡ 1. Nạp Kho Nhạc Mới Từ GitHub (Giữ Playlist Riêng)
              </button>
              <a href="https://raw.githubusercontent.com/\${parsed.owner}/\${parsed.repo}/main/userscript/xmusic-auto-playlist.user.js" target="_blank" class="xmusic-btn-secondary" style="text-align: center; text-decoration: none; display: block; padding: 8px;">
                📥 2. Cập Nhật Tampermonkey Script
              </a>
              <a href="https://github.com/\${parsed.owner}/\${parsed.repo}/releases/latest" target="_blank" class="xmusic-btn-secondary" style="text-align: center; text-decoration: none; display: block; padding: 8px;">
                📦 3. Tải Extension .zip Từ GitHub
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
              Kho trên GitHub: <b>\${escapeHtml(parsed.fullName)}</b> • Phiên bản: v\${escapeHtml(remote.version)} (\${remote.totalSongs || 450} bài hát).
            </div>
            <div class="xmusic-update-actions">
              <button id="xmusic-btn-force-github-pl" class="xmusic-btn-secondary" style="width: 100%;">
                🔄 Nạp lại kho 450 bài từ GitHub (Đồng bộ tức thì)
              </button>
              <a href="https://github.com/\${parsed.owner}/\${parsed.repo}" target="_blank" class="xmusic-btn-secondary" style="text-align: center; text-decoration: none; display: block; padding: 6px;">
                🌐 Truy cập Repository trên GitHub
              </a>
            </div>
          </div>
        \`;
      }

      resultContainer.innerHTML = html;

      const applyBtn = resultContainer.querySelector('#xmusic-btn-apply-github-pl') || resultContainer.querySelector('#xmusic-btn-force-github-pl');
      if (applyBtn) {
        applyBtn.onclick = async () => {
          applyBtn.textContent = 'Đang tải từ GitHub...';
          applyBtn.disabled = true;
          try {
            const plRes = await fetch(\`https://raw.githubusercontent.com/\${parsed.owner}/\${parsed.repo}/main/sample-playlists.json?t=\${Date.now()}\`);
            const plData = await plRes.json();
            if (Array.isArray(plData) && plData.length > 0) {
              smartUpdatePlaylists(plData, true);
              setActivePlaylistId(plData[0].id);
              updatePlaylistSelect();
              renderCurrentPlaylistSongs();
              showToast(\`Đã đồng bộ thành công \${plData.length} playlist từ GitHub!\`, 'success');
              checkGithubUpdates(resultContainer);
            } else {
              showToast('Dữ liệu playlist trên GitHub không đúng định dạng!', 'error');
            }
          } catch (err) {
            showToast('Lỗi khi tải playlist từ GitHub: ' + err.message, 'error');
          } finally {
            applyBtn.textContent = '⚡ 1. Nạp Kho Nhạc Mới Từ GitHub';
            applyBtn.disabled = false;
          }
        };
      }
    } catch (e) {
      resultContainer.innerHTML = \`
        <div style="color: #f87171; font-size: 12px; background: rgba(239,68,68,0.1); padding: 10px; border-radius: 8px;">
          Lỗi kết nối GitHub: \${escapeHtml(e.message)}
        </div>
      \`;
    }
  }
  `;

  contentJs = contentJs.replace('function createSidebarUI()', githubHelpers + '\n  function createSidebarUI()');
}

// C. Add Tab Button to xmusic-tabs in createSidebarUI()
const oldTabsNav = `<div class="xmusic-tabs">
          <button class="xmusic-tab-btn active" data-tab="tab-playlist">📋 Playlist Tôi</button>
          <button class="xmusic-tab-btn" data-tab="tab-publisher">📻 List Nhà Phát Hành</button>
          <button class="xmusic-tab-btn" data-tab="tab-search">🔍 Tìm & Thêm Bài</button>
          <button class="xmusic-tab-btn" data-tab="tab-config">⚙ Cấu Hình</button>
        </div>`;

const newTabsNav = `<div class="xmusic-tabs">
          <button class="xmusic-tab-btn active" data-tab="tab-playlist">📋 Playlist</button>
          <button class="xmusic-tab-btn" data-tab="tab-publisher">📻 Nhà Phát Hành</button>
          <button class="xmusic-tab-btn" data-tab="tab-search">🔍 Tìm Bài</button>
          <button class="xmusic-tab-btn" data-tab="tab-update">🚀 Cập Nhật</button>
          <button class="xmusic-tab-btn" data-tab="tab-config">⚙ Cấu Hình</button>
        </div>`;

contentJs = contentJs.replace(oldTabsNav, newTabsNav);

// D. Add Tab 5: tab-update HTML
const tabUpdateHtml = `
        <!-- Tab 5: GitHub Update Center -->
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

            <div style="font-size: 12.5px; color: #cbd5e1; margin-bottom: 12px; line-height: 1.5;">
              Kiểm tra trực tiếp các phiên bản mới, bài hát mới và mã nguồn phát hành từ GitHub Repository.
            </div>

            <div class="xmusic-form-group" style="margin-bottom: 10px;">
              <label class="xmusic-form-label" style="display: flex; justify-content: space-between;">
                <span>Kho GitHub Repository</span>
                <span style="color: #64748b; font-size: 11px;">owner/repo</span>
              </label>
              <div style="display: flex; gap: 6px;">
                <input type="text" id="xmusic-github-repo-input" class="xmusic-input" value="\${escapeHtml(getGithubRepo())}" placeholder="owner/repo hoặc link GitHub..." style="flex: 1; font-size: 12px;" />
                <button id="xmusic-btn-save-repo" class="xmusic-btn-secondary" style="font-size: 11.5px; padding: 4px 10px;" title="Lưu cấu hình kho">Lưu</button>
              </div>
            </div>

            <button id="xmusic-btn-check-github" class="xmusic-btn-primary" style="width: 100%; margin-top: 6px;">
              🔍 Kiểm Tra Bản Cập Nhật Trên GitHub
            </button>

            <!-- Live check result area -->
            <div id="xmusic-github-check-result" style="margin-top: 14px;"></div>
          </div>
        </div>
`;

if (!contentJs.includes('id="tab-update"')) {
  contentJs = contentJs.replace(
    '<!-- Tab 4: Configuration -->',
    tabUpdateHtml + '\n        <!-- Tab 4: Configuration -->'
  );
}

// E. Add Event Bindings in bindSidebarEvents()
const oldTabSwitch = `if (targetId === 'tab-publisher') {
          loadAndRenderPublisherTab();
        }`;

const newTabSwitch = `if (targetId === 'tab-publisher') {
          loadAndRenderPublisherTab();
        }
        if (targetId === 'tab-update') {
          const resEl = document.getElementById('xmusic-github-check-result');
          if (resEl && !resEl.hasChildNodes()) {
            checkGithubUpdates(resEl);
          }
        }`;

contentJs = contentJs.replace(oldTabSwitch, newTabSwitch);

const githubBinds = `
    // GitHub Update Center bindings
    const btnCheckGithub = document.getElementById('xmusic-btn-check-github');
    const btnSaveRepo = document.getElementById('xmusic-btn-save-repo');
    const repoInput = document.getElementById('xmusic-github-repo-input');
    const resultArea = document.getElementById('xmusic-github-check-result');

    if (btnSaveRepo && repoInput) {
      btnSaveRepo.onclick = () => {
        setGithubRepo(repoInput.value);
        showToast('Đã lưu cấu hình kho GitHub!', 'success');
        if (resultArea) checkGithubUpdates(resultArea);
      };
    }

    if (btnCheckGithub && resultArea) {
      btnCheckGithub.onclick = () => {
        if (repoInput) setGithubRepo(repoInput.value);
        checkGithubUpdates(resultArea);
      };
    }
`;

if (!contentJs.includes('// GitHub Update Center bindings')) {
  contentJs = contentJs.replace(
    "const resetPlBtn = document.getElementById('xmusic-btn-reset-pl');",
    githubBinds + "\n    const resetPlBtn = document.getElementById('xmusic-btn-reset-pl');"
  );
}

fs.writeFileSync('extension/content.js', contentJs, 'utf8');
console.log('✓ Đã cập nhật extension/content.js thành công!');

// =========================================================================
// 2. CẬP NHẬT web-dashboard/index.html
// =========================================================================
let dashHtml = fs.readFileSync('web-dashboard/index.html', 'utf8');

// A. Add Nav item to sidebar-nav
const oldNavGuide = `<button class="nav-item" id="nav-btn-guide" data-view="view-guide">`;
const newNavUpdate = `<button class="nav-item" id="nav-btn-update" data-view="view-update">
          <span class="nav-icon">🚀</span>
          <span class="nav-label">Cập Nhật (GitHub)</span>
        </button>
        <button class="nav-item" id="nav-btn-guide" data-view="view-guide">`;

if (!dashHtml.includes('id="nav-btn-update"')) {
  dashHtml = dashHtml.replace(oldNavGuide, newNavUpdate);
}

// B. Add View 5: view-update section
const viewUpdateHtml = `
        <!-- View 5: GitHub Update Center -->
        <section class="content-view" id="view-update">
          <div class="view-header">
            <div>
              <h2 class="view-title">Trung Tâm Cập Nhật & Đồng Bộ GitHub</h2>
              <p class="view-desc">Kiểm tra phiên bản mới, đồng bộ 450 bài hát tuyển chọn và tải bản cập nhật trực tiếp từ kho GitHub.</p>
            </div>
            <div class="view-actions">
              <button class="btn-primary" id="btn-check-github-dash">
                <span>🔍</span>
                <span>Kiểm tra cập nhật GitHub</span>
              </button>
            </div>
          </div>

          <div class="xm-update-card">
            <div class="xm-update-status">
              <span style="font-size: 26px;">🚀</span>
              <div>
                <div style="font-weight: 700; color: #fff; font-size: 16px;">Phiên Bản Ứng Dụng Hiện Tại</div>
                <div style="font-size: 13px; color: #94a3b8; margin-top: 3px;">
                  Bản cài đặt: <span class="xm-ver-pill current">v2.2.0</span> • Kho 450 bài hát tuyển chọn (75 bài/chủ đề) • Ngày: 07/11/2026
                </div>
              </div>
            </div>

            <div style="max-width: 650px; margin-top: 16px;">
              <label style="display: block; font-size: 12.5px; font-weight: 600; color: #cbd5e1; margin-bottom: 6px;">
                Cấu hình kho GitHub Repository (owner/repo hoặc URL đầy đủ):
              </label>
              <div style="display: flex; gap: 8px;">
                <input type="text" id="dash-github-repo-input" class="topbar-search-input" value="https://github.com/vibe-code/xmusic-playlist-automation" placeholder="owner/repo..." style="flex: 1;" />
                <button id="dash-btn-save-repo" class="btn-secondary">Lưu cấu hình</button>
              </div>
            </div>

            <!-- Live Check Results Area -->
            <div id="dash-github-check-result" style="margin-top: 20px;"></div>
          </div>

          <!-- Deployment Guide Quick Card -->
          <div class="guide-card" style="margin-top: 20px;">
            <div class="guide-badge">Quy Trình Triển Khai</div>
            <h3>📖 Cách Tải Code Lên GitHub & Phát Hành Bản Cập Nhật</h3>
            <p style="font-size: 13.5px; color: #94a3b8; line-height: 1.6; margin-bottom: 12px;">
              Để đưa dự án lên GitHub và phát hành bản cập nhật cho người dùng khác, bạn chỉ cần thực hiện 3 bước đơn giản:
            </p>
            <ol class="guide-steps">
              <li><b>Tạo Repository trên GitHub</b>: Đặt tên ví dụ <code>xmusic-playlist-automation</code>.</li>
              <li><b>Đẩy code từ máy tính lên</b>: Chạy <code>git init</code>, <code>git add .</code>, <code>git commit -m "v2.2.0"</code>, <code>git push -u origin main</code>.</li>
              <li><b>Khi có bản cập nhật mới</b>: Sửa số phiên bản trong file <code>version.json</code> và push lên GitHub. Mọi người dùng dùng XMusicStation bấm <b>Kiểm tra cập nhật</b> sẽ thấy bản mới và nạp bài hát trong 1-click!</li>
            </ol>
          </div>
        </section>
`;

if (!dashHtml.includes('id="view-update"')) {
  dashHtml = dashHtml.replace(
    '<!-- View 4: Installation Guide -->',
    viewUpdateHtml + '\n        <!-- View 4: Installation Guide -->'
  );
}

fs.writeFileSync('web-dashboard/index.html', dashHtml, 'utf8');
console.log('✓ Đã cập nhật web-dashboard/index.html thành công!');

// =========================================================================
// 3. CẬP NHẬT web-dashboard/app.js
// =========================================================================
let appJs = fs.readFileSync('web-dashboard/app.js', 'utf8');

if (!appJs.includes('GITHUB_REPO:')) {
  appJs = appJs.replace(
    "PLAYLISTS_VERSION: 'xmusic_playlists_version'",
    "PLAYLISTS_VERSION: 'xmusic_playlists_version',\n    GITHUB_REPO: 'xmusic_github_repo'"
  );
}

if (!appJs.includes('function checkDashboardGithubUpdates(')) {
  const dashGithubHelpers = `
  // ==========================================
  // GITHUB UPDATE CENTER MODULE (v2.2.0)
  // ==========================================
  function getGithubRepo() {
    return localStorage.getItem(STORAGE_KEYS.GITHUB_REPO) || 'https://github.com/vibe-code/xmusic-playlist-automation';
  }

  function setGithubRepo(repo) {
    localStorage.setItem(STORAGE_KEYS.GITHUB_REPO, (repo || '').trim());
  }

  function parseGithubRepo(repoStr) {
    let clean = (repoStr || '').trim();
    clean = clean.replace(/^https?:\\/\\/github\\.com\\//, '').replace(/\\/$/, '');
    const parts = clean.split('/');
    if (parts.length >= 2) {
      return { owner: parts[0], repo: parts[1], fullName: \`\${parts[0]}/\${parts[1]}\` };
    }
    return null;
  }

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
    const rawRepo = getGithubRepo();
    const parsed = parseGithubRepo(rawRepo);
    if (!parsed) {
      resultContainer.innerHTML = \`<div style="color: #f87171; font-size: 13px; margin-top: 8px;">Địa chỉ GitHub repository không hợp lệ. Vui lòng nhập dạng "owner/repo" hoặc URL đầy đủ!</div>\`;
      return;
    }

    resultContainer.innerHTML = \`
      <div style="color: #94a3b8; font-size: 13px; text-align: center; padding: 16px;">
        Đang kết nối tới GitHub (\${escapeHtml(parsed.fullName)})...
      </div>
    \`;

    try {
      const rawVersionUrl = \`https://raw.githubusercontent.com/\${parsed.owner}/\${parsed.repo}/main/version.json?t=\${Date.now()}\`;
      const res = await fetch(rawVersionUrl);
      
      if (!res.ok) {
        resultContainer.innerHTML = \`
          <div style="background: rgba(239, 68, 68, 0.1); border: 1px solid rgba(239, 68, 68, 0.3); border-radius: 8px; padding: 14px; color: #fca5a5; font-size: 13px; line-height: 1.6;">
            Không tìm thấy file <code>version.json</code> trên nhánh <code>main</code> của kho <b>\${escapeHtml(parsed.fullName)}</b> (HTTP \${res.status}).<br>
            • Hãy đảm bảo bạn đã tạo và push file lên GitHub.<br>
            • Link kho: <a href="https://github.com/\${parsed.owner}/\${parsed.repo}" target="_blank" style="color: #38bdf8; text-decoration: underline;">github.com/\${parsed.owner}/\${parsed.repo}</a>
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
              \${escapeHtml(remote.name || 'Bản phát hành mới')}
            </div>
            <div class="xm-changelog-box">
              <div style="font-weight: 700; margin-bottom: 6px; color: #34d399;">Nội dung cập nhật:</div>
              <ul>
                \${(remote.releaseNotes || []).map(n => \`<li>\${escapeHtml(n)}</li>\`).join('')}
              </ul>
            </div>
            <div class="xm-update-actions">
              <button id="dash-btn-apply-github-pl" class="btn-primary">
                ⚡ 1. Nạp Kho Nhạc Mới Từ GitHub (Giữ Playlist Riêng)
              </button>
              <a href="https://raw.githubusercontent.com/\${parsed.owner}/\${parsed.repo}/main/userscript/xmusic-auto-playlist.user.js" target="_blank" class="btn-secondary" style="text-decoration: none; display: inline-flex; align-items: center;">
                📥 2. Cập Nhật Tampermonkey Script
              </a>
              <a href="https://github.com/\${parsed.owner}/\${parsed.repo}/releases/latest" target="_blank" class="btn-secondary" style="text-decoration: none; display: inline-flex; align-items: center;">
                📦 3. Tải Extension .zip Từ GitHub
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
              Kho trên GitHub: <b>\${escapeHtml(parsed.fullName)}</b> • Phiên bản: v\${escapeHtml(remote.version)} (\${remote.totalSongs || 450} bài hát).
            </div>
            <div class="xm-update-actions">
              <button id="dash-btn-force-github-pl" class="btn-secondary">
                🔄 Nạp lại kho 450 bài từ GitHub (Đồng bộ tức thì)
              </button>
              <a href="https://github.com/\${parsed.owner}/\${parsed.repo}" target="_blank" class="btn-secondary" style="text-decoration: none; display: inline-flex; align-items: center;">
                🌐 Truy cập Repository trên GitHub
              </a>
            </div>
          </div>
        \`;
      }

      resultContainer.innerHTML = html;

      const applyBtn = resultContainer.querySelector('#dash-btn-apply-github-pl') || resultContainer.querySelector('#dash-btn-force-github-pl');
      if (applyBtn) {
        applyBtn.onclick = async () => {
          applyBtn.textContent = 'Đang tải từ GitHub...';
          applyBtn.disabled = true;
          try {
            const plRes = await fetch(\`https://raw.githubusercontent.com/\${parsed.owner}/\${parsed.repo}/main/sample-playlists.json?t=\${Date.now()}\`);
            const plData = await plRes.json();
            if (Array.isArray(plData) && plData.length > 0) {
              smartUpdatePlaylists(plData, true);
              setActivePlaylist(plData[0].id);
              renderPlaylistsGrid();
              renderActivePlaylistSongs();
              showToast(\`Đã đồng bộ thành công \${plData.length} playlist từ GitHub!\`, 'success');
              checkDashboardGithubUpdates(resultContainer);
            } else {
              showToast('Dữ liệu playlist trên GitHub không đúng định dạng!', 'error');
            }
          } catch (err) {
            showToast('Lỗi khi tải playlist từ GitHub: ' + err.message, 'error');
          } finally {
            applyBtn.textContent = '⚡ 1. Nạp Kho Nhạc Mới Từ GitHub';
            applyBtn.disabled = false;
          }
        };
      }
    } catch (e) {
      resultContainer.innerHTML = \`
        <div style="color: #f87171; font-size: 13px; background: rgba(239,68,68,0.1); padding: 12px; border-radius: 8px;">
          Lỗi kết nối GitHub: \${escapeHtml(e.message)}
        </div>
      \`;
    }
  }
  `;

  appJs = appJs.replace('function initApp()', dashGithubHelpers + '\n  function initApp()');
}

// In setupActions in app.js, bind dash GitHub elements
const dashGithubBinds = `
    const btnCheckGithubDash = document.getElementById('btn-check-github-dash');
    const dashRepoInput = document.getElementById('dash-github-repo-input');
    const btnSaveDashRepo = document.getElementById('dash-btn-save-repo');
    const dashResultArea = document.getElementById('dash-github-check-result');

    if (dashRepoInput) {
      dashRepoInput.value = getGithubRepo();
    }

    if (btnSaveDashRepo && dashRepoInput) {
      btnSaveDashRepo.addEventListener('click', () => {
        setGithubRepo(dashRepoInput.value);
        showToast('Đã lưu cấu hình kho GitHub!', 'success');
        if (dashResultArea) checkDashboardGithubUpdates(dashResultArea);
      });
    }

    if (btnCheckGithubDash && dashResultArea) {
      btnCheckGithubDash.addEventListener('click', () => {
        if (dashRepoInput) setGithubRepo(dashRepoInput.value);
        checkDashboardGithubUpdates(dashResultArea);
      });
    }
`;

if (!appJs.includes('const btnCheckGithubDash =')) {
  appJs = appJs.replace(
    "const btnShareModal = document.getElementById('btn-share-modal');",
    dashGithubBinds + "\n    const btnShareModal = document.getElementById('btn-share-modal');"
  );
}

fs.writeFileSync('web-dashboard/app.js', appJs, 'utf8');
console.log('✓ Đã cập nhật web-dashboard/app.js thành công!');

console.log('--- HOÀN TẤT TÍCH HỢP GITHUB UPDATE CENTER ---');
