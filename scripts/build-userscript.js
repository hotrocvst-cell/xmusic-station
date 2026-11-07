const fs = require('fs');
const path = require('path');

const css = fs.readFileSync(path.join(__dirname, '../extension/content.css'), 'utf8');
const js = fs.readFileSync(path.join(__dirname, '../extension/content.js'), 'utf8');

const header = `// ==UserScript==
// @name         XMusicStation - Tự Động Đăng Nhập & Tạo Playlist Phát Nhạc (Left Sidebar)
// @namespace    https://github.com/hotrocvst-cell/xmusic-station
// @version      2.2.0
// @description  Tự động đăng nhập tài khoản tgd111, kho 450 bài hát tuyển chọn (75 bài/playlist), chia sẻ playlist qua mã, đồng bộ Cloud chính thức từ hotrocvst-cell/xmusic-station
// @author       hotrocvst-cell
// @match        https://player.xmusicstation.com/*
// @homepageURL  https://github.com/hotrocvst-cell/xmusic-station
// @updateURL    https://raw.githubusercontent.com/hotrocvst-cell/xmusic-station/main/userscript/xmusic-auto-playlist.user.js
// @downloadURL  https://raw.githubusercontent.com/hotrocvst-cell/xmusic-station/main/userscript/xmusic-auto-playlist.user.js
// @grant        none
// @run-at       document-idle
// ==/UserScript==

// Inject Left Sidebar CSS Styles
(function() {
  const styleEl = document.createElement('style');
  styleEl.type = 'text/css';
  styleEl.id = 'xmusic-assistant-style';
  styleEl.textContent = ${JSON.stringify(css)};
  (document.head || document.documentElement).appendChild(styleEl);
})();

`;

const fullScript = header + js;
fs.writeFileSync(path.join(__dirname, '../userscript/xmusic-auto-playlist.user.js'), fullScript, 'utf8');
console.log('✅ Generated userscript/xmusic-auto-playlist.user.js successfully! Length:', fullScript.length);

// Now update tampermonkey-guide.html
const guidePath = path.join(__dirname, '../tampermonkey-guide.html');
let guideHtml = fs.readFileSync(guidePath, 'utf8');

// 1. Update version badge
guideHtml = guideHtml.replace(
  /<span class="file-badge">[^<]*<\/span>/,
  '<span class="file-badge">Bản Ổn Định v2.2.0 (Mới Nhất)</span>'
);

// 2. Escape HTML entities for the <pre id="userScriptPre"> tag
function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

const escapedScript = escapeHtml(fullScript);
guideHtml = guideHtml.replace(
  /<pre class="code-view" id="userScriptPre">[\s\S]*?<\/pre>/,
  `<pre class="code-view" id="userScriptPre">${escapedScript}</pre>`
);

// 3. Update callout description
const newCallout = `<h5>Tính năng nổi bật trong bản cập nhật v2.2.0:</h5>
          <p>
            • <strong>Kho 450 bài hát tuyển chọn (75 bài/playlist)</strong>: Mở rộng 6 chủ đề âm nhạc V-Pop Trending, Acoustic Chill, Vinahouse Bass căng, Ballad Suy, Gen Z Indie và Pop Tình Ca chuẩn XMusic.<br>
            • <strong>Chia sẻ Playlist qua Mã (Share Code XMPL2) & Link nội bộ</strong>: Dễ dàng gửi mã chia sẻ playlist cho đồng nghiệp hoặc người dùng khác chỉ với 1 click.<br>
            • <strong>Đồng bộ Cloud & Cập nhật Thông minh (Smart Update)</strong>: Cho phép nâng cấp kho nhạc tuyển chọn mới mà vẫn bảo toàn 100% các playlist do người dùng tự tạo.<br>
            • <strong>Độ chính xác 100% & Shuffle tùy biến</strong>: Trực tiếp nạp nhạc qua Vue memory bridge, khớp chuẩn nghệ sĩ và hỗ trợ đảo thứ tự danh sách.
          </p>`;

guideHtml = guideHtml.replace(
  /<h5>Tính năng nổi bật trong bản cập nhật[\s\S]*?<\/p>/,
  newCallout
);

// 4. Update rawUserScriptBase64
const base64Script = Buffer.from(fullScript, 'utf8').toString('base64');
guideHtml = guideHtml.replace(
  /const rawUserScriptBase64 = "[\s\S]*?";/,
  `const rawUserScriptBase64 = "${base64Script}";`
);

fs.writeFileSync(guidePath, guideHtml, 'utf8');
console.log('✅ Updated tampermonkey-guide.html successfully!');
