# 🎵 XMusicStation Auto Playlist & Queue Manager

[![Version](https://img.shields.io/badge/version-2.2.0-blue.svg)](https://github.com/hotrocvst-cell/xmusic-station)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
[![Target](https://img.shields.io/badge/platform-player.xmusicstation.com-purple.svg)](https://player.xmusicstation.com/)
[![Curated Songs](https://img.shields.io/badge/catalog-450%20bài%20hát-orange.svg)](sample-playlists.json)
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

1. **Kho 450 Bài Hát Tuyển Chọn Chuẩn XMusic (75 bài / Chủ đề)**:
   - Tuyển tập 6 danh sách phát hot nhất dựa trên xu hướng mạng xã hội và các bảng xếp hạng âm nhạc thịnh hành.
   - Toàn bộ 450 bài hát đều được lấy trực tiếp từ hệ thống XMusic Station, có đầy đủ âm thanh bản quyền chất lượng cao, hình ảnh bìa và thời lượng chính xác.

2. **Chia Sẻ Playlist Bằng Mã `XMPL2` & Mạng Nội Bộ**:
   - Bấm **`🔗 Chia Sẻ`** tại bất kỳ playlist nào để tạo mã chia sẻ siêu gọn dạng `XMPL2:...`.
   - Người nhận chỉ cần bấm **`📥 Nhập Mã`** và dán mã là thêm ngay playlist vào thư viện mà không bị ghi đè mất dữ liệu cũ.

3. **Trung Tâm Cập Nhật GitHub (Update Center) - Khóa Cứng Admin**:
   - Tích hợp sẵn tab **`🚀 Cập Nhật`** ngay trong giao diện Web Player và Dashboard.
   - **Bảo mật tuyệt đối**: Nguồn cập nhật được khóa cứng duy nhất từ Admin: `https://github.com/hotrocvst-cell/xmusic-station`. Ngăn chặn hoàn toàn việc người dùng can thiệp hay đổi sang nguồn khác.
   - **Smart Merge Update**: Tự động nhận diện và bảo toàn 100% các playlist do người dùng tự tạo khi cập nhật kho bài hát mới từ Admin.

4. **Mở Khóa Kho Nhà Phát Hành (12 Playlist / ~600 Bài Hát)**:
   - Cho phép duyệt, nghe thử và nhặt từng bài hát lẻ từ các playlist mặc định của nhà phát hành sang Playlist cá nhân hoặc Now Playing.
   - Công cụ tìm kiếm kết hợp (**Hybrid Search**) quét đồng thời cả kho Online và bài hát độc quyền từ nhà phát hành.

5. **Nạp Nhạc Chính Xác 100% (Khắc Phục Hoàn Toàn Lỗi Lệch Bài)**:
   - Sử dụng cơ chế nạp trực tiếp siêu tốc **Vue 3 Memory Bridge** vào bộ nhớ trình phát.
   - Thuật toán đối soát thông minh (**Smart Match Engine**) kiểm tra nghiêm ngặt cả Tên bài hát và Nghệ sĩ, loại trừ các bản Beat/Karaoke/Cover sai.

6. **Tùy Biến Trộn Bài (Smart Artist-Separation Shuffle)**:
   - Nút **`🔀 Nạp Trộn Bài`** xáo trộn danh sách trước khi đưa vào hàng đợi phát.
   - Nút **`🔀 Đảo Thứ Tự`** trực tiếp trên playlist theo thuật toán phân bổ nghệ sĩ (tránh lặp ca sĩ liên tiếp) kèm nút **`↩ Hoàn Tác`** (Undo).

---

## 🎶 6 DANH SÁCH PHÁT TUYỂN CHỌN (450 BÀI HÁT)

| # | Tên Playlist | Số lượng | Phong cách & Nghệ sĩ tiêu biểu |
|---|---|:---:|---|
| 1 | **🔥 Top V-Pop Trending & Charts 2026** | 75 bài | *Sơn Tùng M-TP, HIEUTHUHAI, Anh Trai Say Hi, Phương Ly, AMEE, Tăng Duy Tân, Đức Phúc, ERIK, Văn Mai Hương...* |
| 2 | **☕ Acoustic & Coffee Chill Buổi Sáng** | 75 bài | *Thịnh Suy, Vũ., Trang, Mộc Gtar, Pia Solo, WHEE!, RUBY, Trung Quân...* |
| 3 | **⚡ EDM & Vinahouse Remix Cực Sung** | 75 bài | *Sơn Tùng Remix, Tam Vinh Producer, Freaky Remix, Da LAB Remix, NonHanTa, Machiot...* |
| 4 | **🌧️ Ballad Tâm Trạng & Lofi Suy** | 75 bài | *Trung Quân, Phương Ly Lofi, Minh Cà Ri, Lâm Phúc, Lâu Phai, Vũ Thịnh...* |
| 5 | **🌿 Gen Z & Indie Focus Flow (Sáng Tạo)** | 75 bài | *HIEUTHUHAI, tlinh, Freaky, EREN, Quinf, T.R.I, Bích Phương, Phương Ly...* |
| 6 | **🌸 Pop Tình Ca Ngọt Ngào & Yêu Đời** | 75 bài | *Sơn Tùng M-TP, Đức Phúc, ERIK, Phương Ly, AMEE, LyLy, An Vũ, Hoàng Dũng...* |

---

## 🔒 DÀNH CHO ADMIN: QUY TRÌNH PHÁT HÀNH BẢN CẬP NHẬT TỰ ĐỘNG

Dự án đã được tích hợp sẵn quy trình tự động hóa GitHub Actions. Mỗi khi Admin phát hành bản cập nhật mới:

1. **Bước 1**: Cập nhật thông tin trong file [`version.json`](version.json) (sửa số `version` và nội dung `releaseNotes`).
2. **Bước 2**: Tạo tag và đẩy lên GitHub:
   ```bash
   git add .
   git commit -m "release: v2.3.0"
   git tag v2.3.0
   git push origin main --tags
   ```
3. **Tự động hóa hoàn toàn**:
   - GitHub Actions sẽ tự động kích hoạt workflow, đóng gói file `xmusic-station-extension.zip`.
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
