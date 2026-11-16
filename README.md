# 🎵 XMusicStation Auto Playlist & Queue Manager

[![Version](https://img.shields.io/badge/version-2.3.0-blue.svg)](https://github.com/hotrocvst-cell/xmusic-station)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
[![Target](https://img.shields.io/badge/platform-player.xmusicstation.com-purple.svg)](https://player.xmusicstation.com/)
[![Curated Songs](https://img.shields.io/badge/catalog-200%20bài%20hát-orange.svg)](sample-playlists.json)
[![Admin](https://img.shields.io/badge/official%20admin-hotrocvst--cell-red.svg)](https://github.com/hotrocvst-cell/xmusic-station)

> **Bộ công cụ tự động hóa phát nhạc, quản lý danh sách phát thông minh và mở khóa toàn bộ kho nhạc bản quyền trên [player.xmusicstation.com](https://player.xmusicstation.com/).**

---

## ⚡ HƯỚNG DẪN CÀI ĐẶT NHANH (QUICK START)

Dành cho người dùng mới lần đầu truy cập kho lưu trữ GitHub:

### Cách 1: Cài bằng Tampermonkey / Violentmonkey (Khuyên dùng - 1 Click)

Nếu trình duyệt của bạn đã có tiện ích Tampermonkey hoặc Violentmonkey:

1. **Cài đặt 1 click**: Nhấp vào liên kết trực tiếp bên dưới:  
   👉 **[Cài đặt xmusic-auto-playlist.user.js](https://raw.githubusercontent.com/hotrocvst-cell/xmusic-station/main/userscript/xmusic-auto-playlist.user.js)**  
   *(Tampermonkey sẽ tự động mở trang cài đặt, bạn chỉ cần bấm nút **Cài đặt / Install**).*

2. **Cách dự phòng (Thủ công)**:  
   - Mở file [`userscript/xmusic-auto-playlist.user.js`](userscript/xmusic-auto-playlist.user.js) trên repository này.  
   - Bấm nút **Copy raw contents** (Sao chép toàn bộ mã nguồn).  
   - Mở Tampermonkey Dashboard -> Bấm biểu tượng **+ (Thêm script mới)** -> Dán mã vào và nhấn **Ctrl + S** để lưu.

3. Mở trang web [https://player.xmusicstation.com/](https://player.xmusicstation.com/), thanh công cụ nổi **🎵 XMusic Assistant** sẽ tự động kích hoạt ở góc màn hình!

---

### Cách 2: Cài bằng Chrome / Edge Extension (File ZIP)

Dành cho người dùng muốn cài đặt tiện ích mở rộng trực tiếp trên Chrome, Edge, Cốc Cốc, Brave:

1. **Tải file Extension**:  
   👉 Truy cập mục **[GitHub Releases Mới Nhất](https://github.com/hotrocvst-cell/xmusic-station/releases/latest)** và tải file **`xmusic-station-extension.zip`**.
2. **Giải nén**: Giải nén file `.zip` vừa tải về vào một thư mục trên máy tính.
3. **Mở trang tiện ích của trình duyệt**:  
   - Google Chrome: Nhập `chrome://extensions`  
   - Microsoft Edge: Nhập `edge://extensions`
4. **Bật chế độ nhà phát triển**: Gạt công tắc **"Chế độ dành cho nhà phát triển" (Developer mode)** ở góc trên cùng bên phải.
5. **Cài đặt**: Bấm nút **"Tải tiện ích đã giải nén" (Load unpacked)** -> Chọn thư mục `extension` vừa giải nén.
6. Mở [https://player.xmusicstation.com/](https://player.xmusicstation.com/) để bắt đầu sử dụng!

---

### Cách 3: Chạy Web Dashboard Quản Lý Offline & Nghe Thử

Dành cho người dùng muốn quản lý danh sách, nghe thử bài hát trực tiếp hoặc tạo mạng chia sẻ nội bộ:

```bash
# 1. Clone repository về máy tính
git clone https://github.com/hotrocvst-cell/xmusic-station.git
cd xmusic-station

# 2. Khởi động Web Dashboard
npm start
```

Mở trình duyệt truy cập: **`http://localhost:3000`**

---

## 🌟 TÍNH NĂNG NỔI BẬT

1. **Kho 200 Bài Hát Tuyển Chọn Chuẩn XMusic (50 bài / Chủ đề)**:
   - Tuyển chọn 4 chủ đề chuẩn: **Nhạc Việt Sôi Động 2026**, **Top Hit Rap Việt Thịnh Hành**, **Ballad Cảm Xúc & Sâu Lắng**, và **Giáng Sinh & Mùa Lễ Hội Sôi Động**.
   - Toàn bộ 200 bài hát đều được lấy trực tiếp từ kho nhạc bản quyền XMusic Station, có đầy đủ âm thanh chất lượng cao, hình ảnh bìa và thời lượng chính xác.

2. **Chia Sẻ Playlist Bằng Mã `XMPL2` & Mạng Nội Bộ**:
   - Bấm **`🔗 Chia Sẻ`** tại bất kỳ playlist nào để tạo mã chia sẻ siêu gọn dạng `XMPL2:...`.
   - Người nhận chỉ cần bấm **`📥 Nhập Mã`** và dán mã là thêm ngay playlist vào thư viện mà không bị ghi đè mất dữ liệu cũ.

3. **Trung Tâm Cập Nhật GitHub (Update Center) - Khóa Cứng Admin**:
   - Tích hợp sẵn tab **`🚀 Cập Nhật`** ngay trong giao diện Web Player và Dashboard.
   - **Bảo mật tuyệt đối**: Nguồn cập nhật được khóa cứng duy nhất từ Admin: `https://github.com/hotrocvst-cell/xmusic-station`. Ngăn chặn hoàn toàn việc người dùng can thiệp hay đổi sang nguồn khác.
   - **Smart Merge Update**: Tự động nhận diện và bảo toàn 100% các playlist do người dùng tự tạo khi cập nhật kho bài hát mới từ Admin.

4. **Mở Khóa Kho Nhà Phát Hành (11 Playlist / 518 Bài Hát Bản Quyền)**:
   - Hỗ trợ đầy đủ các album và bài hát độc quyền từ nhà phát hành (bao gồm toàn bộ 24 ca khúc **TINH HÀ "SAY HI"**).
   - Cho phép duyệt, nghe thử, thêm bài lẻ vào playlist cá nhân hoặc nạp trực tiếp siêu tốc vào hàng đợi phát nhạc.
   - Công cụ tìm kiếm kết hợp (**Hybrid Search**) quét đồng thời cả kho Online và bài hát độc quyền từ nhà phát hành.

5. **Nạp Nhạc Chính Xác 100% (Khắc Phục Hoàn Toàn Lỗi Lệch Bài)**:
   - Sử dụng cơ chế nạp trực tiếp siêu tốc **Vue 3 Memory Bridge** (hỗ trợ đệ quy `comp.subTree`) vào bộ nhớ trình phát.
   - Thuật toán đối soát thông minh (**Smart Match Engine**) kiểm tra nghiêm ngặt cả Tên bài hát và Nghệ sĩ, loại trừ các bản Beat/Karaoke/Cover sai.

6. **Tùy Biến Trộn Bài Đỉnh Cao (Fisher-Yates 100% Toàn Danh Sách)**:
   - Khắc phục triệt để lỗi shuffle chỉ đảo ~15 bài đầu: Thuật toán Fisher-Yates mới đảo ngẫu nhiên công bằng 100% mọi vị trí trong danh sách.
   - Kết hợp lượt vuốt mượt (**Smoothing Pass**) tự động phân bổ tách nghệ sĩ, đảm bảo không có 2 bài của cùng 1 ca sĩ phát liên tiếp nhau.
   - Hỗ trợ nút **`↩ Hoàn Tác`** (Undo) để khôi phục ngay vị trí ban đầu.

---

## 🎶 4 DANH SÁCH PHÁT TUYỂN CHỌN CHUẨN v2.3.0 (200 BÀI HÁT)

| # | Tên Playlist | Số lượng | Phong cách & Nghệ sĩ tiêu biểu |
|---|---|:---:|---|
| 1 | **⚡ Top Nhạc Việt Sôi Động & Remix 2026** | 50 bài | *Sơn Tùng M-TP, Da LAB, Tăng Duy Tân, ANH TRAI "SAY HI", EM XINH "SAY HI", Cukak, Phong Max, Freaky Remix...* |
| 2 | **🎤 Top Hit Rap Việt Thịnh Hành** | 50 bài | *HIEUTHUHAI, RHYDER, Pháp Kiều, HURRYKNG, Đen Vâu, BigDaddy, Negav, Tez, Double2T, Phúc Du, Gill...* |
| 3 | **🌧️ Top Ballad Cảm Xúc & Sâu Lắng** | 50 bài | *Trung Quân Idol, Vũ., Đức Phúc, Hoàng Dũng, Văn Mai Hương, ERIK, Bùi Anh Tuấn, Quân A.P, Phan Mạnh Quỳnh...* |
| 4 | **🎄 Giáng Sinh & Mùa Lễ Hội Sôi Động** | 50 bài | *Đêm Giáng Sinh Mùa Hạ, Đông Vừa Sang Remix, Mùa Đông Đã Đến, Một Năm Mới Bình An, Tết Đong Đầy, EDM Festival...* |

---

## 🔒 DÀNH CHO ADMIN: QUY TRÌNH PHÁT HÀNH BẢN CẬP NHẬT TỰ ĐỘNG

Dự án đã được tích hợp sẵn công cụ đồng bộ và quy trình tự động hóa GitHub Actions. Xem chi tiết tại [QUY_TRINH_PHAT_HANH.md](QUY_TRINH_PHAT_HANH.md).

### Bước 1: Đồng bộ cấu hình dự án (1 lệnh duy nhất)
Chạy lệnh sau tại thư mục dự án:
```bash
npm run bump 2.3.0 "Nội dung cập nhật mới"
```
*(Lệnh này tự động cập nhật `version.json`, `package.json`, `manifest.json`, đồng thời build lại userscript và tài liệu).*

---

### Bước 2: Phát hành bản mới

#### 🖥️ Cách 1: Sử dụng GitHub Desktop App (Khuyên dùng)
1. Mở **GitHub Desktop** -> Ở cột bên trái (tab **Changes**), bạn sẽ thấy các file đã cập nhật.
2. Nhập vào ô Summary: `release: v2.3.0` -> Bấm nút xanh **`Commit to main`**.
3. Bấm **`Push origin`** ở thanh công cụ trên cùng.
4. **Tạo Tag để kích hoạt Release**:
   - Chuyển sang tab **History** (cạnh tab *Changes*).
   - Chuột phải vào commit vừa tạo trên cùng -> Chọn **`Create Tag...`**.
   - Nhập tên tag: `v2.3.0` -> Bấm **`Create Tag`**.
   - Bấm nút **`Push origin`** ở thanh trên cùng để đẩy tag lên GitHub!

#### ⌨️ Cách 2: Sử dụng dòng lệnh Git (CLI)
```bash
git add .
git commit -m "release: v2.3.0"
git tag v2.3.0
git push origin main --tags
```

---

### Kết quả tự động từ GitHub Actions:
- GitHub Actions tự động kích hoạt workflow, đóng gói file **`xmusic-station-extension.zip`**.
- Tự động tạo 1 lượt **Release mới** trên mục [Releases](https://github.com/hotrocvst-cell/xmusic-station/releases) với đầy đủ file zip, file script và ghi chú cập nhật.
- Toàn bộ người dùng khi mở tab **`🚀 Cập Nhật`** trên trình duyệt sẽ thấy thông báo cập nhật mới và tải về trong 1-click!

---

## ⚙️ CẤU HÌNH TÀI KHOẢN NGƯỜI DÙNG

Để tiện ích tự động ủy quyền khi bạn mở trình duyệt:
1. Mở thanh công cụ **🎵 XMusic Assistant** trên trang web -> Chuyển sang tab **`⚙ Cấu Hình`**.
2. Nhập tài khoản và mật khẩu XMusicStation được cấp cho thiết bị của bạn.
3. Tích chọn **"Tự động đăng nhập khi mở trang"** -> Bấm **`💾 Lưu Cấu Hình`**.
4. Dữ liệu tài khoản được lưu an toàn cục bộ trong `localStorage` trên máy tính của bạn, hoàn toàn không gửi ra ngoài.

---

## 📄 GIẤY PHÉP & BẢN QUYỀN

- Mã nguồn được phát hành theo giấy phép **MIT License**.
- Toàn bộ quyền sở hữu âm nhạc và bản quyền tác phẩm thuộc về nền tảng **XMusicStation** và các đơn vị phát hành tương ứng.
