/**
 * scripts/bump-version.js
 * Tool tự động đồng bộ phiên bản và chuẩn bị bản cập nhật cho Admin.
 * 
 * Cách dùng:
 *   node scripts/bump-version.js <phiên_bản_mới> [ghi_chú_cập_nhật]
 * 
 * Ví dụ:
 *   node scripts/bump-version.js 2.3.0 "Bổ sung 50 bài hát hot V-Pop 2026 và tối ưu tốc độ nạp"
 *   npm run bump 2.3.0
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const rootDir = path.join(__dirname, '..');
const versionJsonPath = path.join(rootDir, 'version.json');
const packageJsonPath = path.join(rootDir, 'package.json');
const manifestJsonPath = path.join(rootDir, 'extension/manifest.json');

// 1. Đọc phiên bản hiện tại
const currentVersionData = JSON.parse(fs.readFileSync(versionJsonPath, 'utf8'));
const currentVersion = currentVersionData.version;

const newVersionArg = process.argv[2];
const releaseNoteArg = process.argv[3];

if (!newVersionArg) {
  console.log('====================================================');
  console.log(`📌 Phiên bản hiện tại của dự án: v${currentVersion}`);
  console.log('====================================================');
  console.log('💡 Cách sử dụng:');
  console.log('   npm run bump <version_mới> [nội_dung_cập_nhật]');
  console.log('');
  console.log('Gợi ý phiên bản tiếp theo:');
  const parts = currentVersion.split('.').map(n => parseInt(n, 10));
  if (parts.length === 3) {
    console.log(`   - Bản vá lỗi (Patch):  ${parts[0]}.${parts[1]}.${parts[2] + 1}`);
    console.log(`   - Tính năng mới (Minor): ${parts[0]}.${parts[1] + 1}.0`);
    console.log(`   - Bản lớn (Major):       ${parts[0] + 1}.0.0`);
  }
  console.log('');
  console.log('Ví dụ lệnh mẫu:');
  console.log('   node scripts/bump-version.js 2.3.0 "Cập nhật 50 bài hát mới"');
  process.exit(0);
}

// Chuẩn hóa phiên bản (loại bỏ chữ 'v' nếu người dùng gõ v2.3.0)
const cleanVersion = newVersionArg.trim().replace(/^v/i, '');
const today = new Date().toISOString().split('T')[0];

console.log(`🚀 Bắt đầu cập nhật cấu hình dự án từ v${currentVersion} -> v${cleanVersion}...`);

// 2. Cập nhật version.json
currentVersionData.version = cleanVersion;
currentVersionData.updatedAt = today;

if (releaseNoteArg && releaseNoteArg.trim()) {
  if (!Array.isArray(currentVersionData.releaseNotes)) {
    currentVersionData.releaseNotes = [];
  }
  currentVersionData.releaseNotes.unshift(releaseNoteArg.trim());
  if (currentVersionData.releaseNotes.length > 5) {
    currentVersionData.releaseNotes = currentVersionData.releaseNotes.slice(0, 5);
  }
}
fs.writeFileSync(versionJsonPath, JSON.stringify(currentVersionData, null, 2) + '\n', 'utf8');
console.log('✅ 1. Đã cập nhật version.json');

// 3. Cập nhật package.json
const packageData = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
packageData.version = cleanVersion;
fs.writeFileSync(packageJsonPath, JSON.stringify(packageData, null, 2) + '\n', 'utf8');
console.log('✅ 2. Đã cập nhật package.json');

// 4. Cập nhật extension/manifest.json
const manifestData = JSON.parse(fs.readFileSync(manifestJsonPath, 'utf8'));
manifestData.version = cleanVersion;
fs.writeFileSync(manifestJsonPath, JSON.stringify(manifestData, null, 2) + '\n', 'utf8');
console.log('✅ 3. Đã cập nhật extension/manifest.json');

// 5. Cập nhật extension/content.js
const contentJsPath = path.join(rootDir, 'extension/content.js');
let contentJs = fs.readFileSync(contentJsPath, 'utf8');
contentJs = contentJs.replace(/const APP_VERSION = '[^']+';/, `const APP_VERSION = '${cleanVersion}';`);
fs.writeFileSync(contentJsPath, contentJs, 'utf8');
console.log('✅ 4. Đã cập nhật extension/content.js (const APP_VERSION)');

// 5. Chạy build lại userscript và guide HTML
console.log('⏳ 4. Đang build lại Userscript và tài liệu hướng dẫn...');
try {
  execSync('node scripts/build-userscript.js', { cwd: rootDir, stdio: 'inherit' });
} catch (err) {
  console.error('❌ Lỗi khi build userscript:', err.message);
  process.exit(1);
}

console.log('\n====================================================');
console.log(`🎉 CHUẨN BỊ PHIÊN BẢN v${cleanVersion} THÀNH CÔNG!`);
console.log('====================================================\n');

console.log('👉 HƯỚNG DẪN BƯỚC TIẾP THEO CHO ADMIN:\n');
console.log('----------------------------------------------------');
console.log('🖥️ CÁCH 1: NẾU BẠN DÙNG GITHUB DESKTOP APP (Khuyên dùng):');
console.log('----------------------------------------------------');
console.log('1. Mở ứng dụng GitHub Desktop.');
console.log('2. Ở cột bên trái (tab "Changes"), bạn sẽ thấy các file đã cập nhật.');
console.log(`3. Nhập vào ô "Summary": release: v${cleanVersion}`);
console.log('4. Bấm nút xanh: [Commit to main]');
console.log('5. Bấm nút: [Push origin] ở thanh công cụ trên cùng.');
console.log('6. Tạo Tag phiên bản (quan trọng để kích hoạt Release):');
console.log('   - Chuyển sang tab "History" (bên cạnh tab Changes).');
console.log('   - Bấm chuột phải vào Commit vừa tạo trên cùng -> Chọn "Create Tag...".');
console.log(`   - Nhập tên tag: v${cleanVersion} -> Bấm [Create Tag].`);
console.log('   - Bấm nút [Push origin] ở thanh trên cùng để đẩy Tag lên GitHub!');
console.log('=> GitHub Actions sẽ tự động đóng gói file zip và tạo Release mới.\n');

console.log('----------------------------------------------------');
console.log('⌨️ CÁCH 2: NẾU BẠN DÙNG DÒNG LỆNH (TERMINAL / CMD):');
console.log('----------------------------------------------------');
console.log(`   git add .`);
console.log(`   git commit -m "release: v${cleanVersion}"`);
console.log(`   git tag v${cleanVersion}`);
console.log(`   git push origin main --tags`);
console.log('----------------------------------------------------\n');

