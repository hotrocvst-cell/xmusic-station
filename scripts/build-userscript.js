const fs = require('fs');
const path = require('path');

const css = fs.readFileSync(path.join(__dirname, '../extension/content.css'), 'utf8');
const js = fs.readFileSync(path.join(__dirname, '../extension/content.js'), 'utf8');

const header = `// ==UserScript==
// @name         XMusicStation - Tự Động Đăng Nhập & Tạo Playlist Phát Nhạc (Left Sidebar)
// @namespace    https://github.com/hotrocvst-cell/xmusic-station
// @version      2.2.0
// @description  Kho 450 bài hát tuyển chọn (75 bài/playlist), chia sẻ playlist qua mã, đồng bộ Cloud chính thức từ hotrocvst-cell/xmusic-station
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

// Now update tampermonkey-guide.html using reliable markers
const guidePath = path.join(__dirname, '../tampermonkey-guide.html');
let guideHtml = fs.readFileSync(guidePath, 'utf8');

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

const escapedScript = escapeHtml(fullScript);
const base64Script = Buffer.from(fullScript, 'utf8').toString('base64');

const startMarker = '<!-- USERSCRIPT_CODE_START -->';
const endMarker = '<!-- USERSCRIPT_CODE_END -->';

if (guideHtml.includes(startMarker) && guideHtml.includes(endMarker)) {
  const before = guideHtml.substring(0, guideHtml.indexOf(startMarker) + startMarker.length);
  const after = guideHtml.substring(guideHtml.indexOf(endMarker));
  guideHtml = before + '\n<pre class="code-view" id="userScriptPre">' + escapedScript + '</pre>\n' + after;
}

const b64Marker = 'const rawUserScriptBase64 = "';
const b64EndMarker = ';\n    const rawUserScript = decodeURIComponent';
if (guideHtml.includes(b64Marker) && guideHtml.includes(b64EndMarker)) {
  const b64Start = guideHtml.indexOf(b64Marker);
  const b64End = guideHtml.indexOf(b64EndMarker, b64Start);
  guideHtml = guideHtml.substring(0, b64Start) + 'const rawUserScriptBase64 = "' + base64Script + '"' + guideHtml.substring(b64End);
}

fs.writeFileSync(guidePath, guideHtml, 'utf8');
console.log('✅ Updated tampermonkey-guide.html successfully!');
