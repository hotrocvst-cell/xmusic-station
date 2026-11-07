# 🎵 XMusicStation Playlist Automation & Manager (v2.2)

> **Giải pháp ủy quyền tự động, kho 450 bài hát tuyển chọn, chia sẻ playlist qua mã, đồng bộ Cloud và sửa lỗi nạp nhạc trên website https://player.xmusicstation.com/**

---

## 📌 Tổng Quan Vấn Đề & Giải Pháp Mới Trong v2.2

1. **Kho 450 Bài Hát Tuyển Chọn Chuẩn XMusic (75 bài / Playlist)**:
   - Mở rộng quy mô từ 25 bài lên 75 bài hát/chủ đề (450 bài chất lượng cao) với đầy đủ âm thanh bản quyền trực tiếp từ XMusic Station.
   - Gồm 6 chủ đề thịnh hành: Top Trending V-Pop 2026, Acoustic Chill, Vinahouse Remix Bass Cực Sung, Ballad Lofi Suy, Gen Z Indie Focus và Pop Tình Ca Yêu Đời.
2. **Giải Pháp Chia Sẻ Playlist Tiện Lợi (Share Code `XMPL2` & Link Trực Tuyến)**:
   - Tạo mã chia sẻ nén nhỏ gọn (`XMPL2:...`) sao chép gửi qua Zalo, Messenger, Teams hoặc Email.
   - Người nhận chỉ cần bấm **`📥 Nhập Mã`** là nạp ngay playlist vào thư viện cá nhân mà không bị ghi đè dữ liệu.
   - Hỗ trợ tạo link chia sẻ trực tiếp qua server Hub nội bộ.
3. **Đồng Bộ Cloud & Cập Nhật Thông Minh (Smart Merge Update)**:
   - Dễ dàng cập nhật kho nhạc mới qua nút **`☁️ Cập Nhật`** với tùy chọn thông minh: **Bảo toàn 100% các playlist tự tạo của người dùng**, chỉ làm mới các playlist tuyển chọn hệ thống.
4. **Mở khóa Kho Playlist Nhà Phát Hành (12 Playlist / ~600 bài hát)**:
   - Cho phép duyệt, nghe thử và thêm bài lẻ từ các playlist mặc định của nhà phát hành sang Playlist cá nhân hoặc Now Playing.
5. **Khắc phục lỗi nạp lệch bài hát (100% Khớp Đúng Tên & Nghệ Sĩ)**:
   - Nạp trực tiếp qua Vue 3 Memory Bridge và thuật toán đối soát điểm thông minh (Smart Match Scoring).
6. **Tùy biến xáo trộn (Shuffle) Playlist đã lưu**:
   - Nút **`🔀 Nạp Trộn Bài`** (Shuffle Queue), tùy chọn **`☑ Trộn bài khi nạp`**, và tính năng **`🔀 Đảo Thứ Tự`** danh sách phát đã lưu theo thuật toán **Smart Shuffle** (tách nghệ sĩ liên tiếp) kèm nút **`↩ Hoàn Tác`** (Undo).
7. **Ủy quyền tự động (Auto-login)**: Tự động đăng nhập tài khoản `tgd111` / `mwg2025` và duy trì token phiên.

---

## 📂 Cấu Trúc Dự Án

```text
xmusic-playlist-automation/
├── extension/                       # Tiện ích mở rộng Chrome / Edge (Manifest V3)
│   ├── manifest.json                # Khai báo extension V3 (v2.0.0)
│   ├── content.js                   # Script tự động đăng nhập, cầu nối Vue & thanh công cụ nổi
│   ├── content.css                  # Giao diện glassmorphism nổi trên web player
│   ├── background.js                # Service worker
│   ├── popup.html / popup.js / css  # Giao diện menu trên thanh công cụ trình duyệt
│   └── icons/                       # Bộ icon 16x16, 48x48, 128x128
├── userscript/                      # Phiên bản chạy qua Tampermonkey / Violentmonkey
│   └── xmusic-auto-playlist.user.js # Cài đặt 1 click cho mọi trình duyệt (v2.0.0)
├── web-dashboard/                   # Bảng điều khiển web độc lập quản lý playlist
│   ├── index.html                   # Giao diện chính (Hỗ trợ duyệt kho nhà phát hành & Shuffle)
│   ├── style.css                    # Thiết kế giao diện hiện đại
│   └── app.js                       # Logic quản lý, tìm kiếm kết hợp & nghe thử bài hát
├── scripts/
│   ├── test-auth.js                 # Kiểm tra kết nối API & ủy quyền đăng nhập
│   ├── build-curated-playlists.js   # Công cụ tạo và làm mới 6 Playlist theo bảng xếp hạng & Mood
│   └── build-userscript.js          # Tự động đồng bộ mã nguồn sang userscript & guide HTML
├── sample-playlists.json            # Tuyển tập 6 Playlist theo Trending Charts & Mood (150 bài)
├── server.js                        # Máy chủ chạy Web Dashboard (Zero dependency)
├── package.json
└── HUONG_DAN_SU_DUNG.md             # Hướng dẫn chi tiết từng bước bằng tiếng Việt
```

---

## 🎶 Danh Mục 6 Playlist Mẫu Tuyển Chọn (450 Bài Hát Thực Tế - 75 Bài / List)

Hệ thống được cài đặt sẵn 6 danh sách phát tuyển chọn dựa trên các bảng xếp hạng âm nhạc thịnh hành và các chủ đề tâm trạng (Mood) phổ biến trên Internet:

1. **🔥 Top V-Pop Trending & Charts 2026 (75 bài)**: Các hit quốc dân dẫn đầu bảng xếp hạng (Sơn Tùng M-TP, HIEUTHUHAI, Anh Trai Say Hi, AMEE, Phương Ly, Tăng Duy Tân, EREN, ERIK, Đức Phúc, Văn Mai Hương...).
2. **☕ Acoustic & Coffee Chill Buổi Sáng (75 bài)**: Giai điệu mộc mạc du dương của guitar và piano, tạo không gian bình yên, thư thái cho quán cafe, văn phòng hoặc góc làm việc buổi sáng (Vũ, Thịnh Suy, Trang, Mộc Gtar, Pia Solo, WHEE!, RUBY, Trung Quân...).
3. **⚡ EDM & Vinahouse Remix Cực Sung (75 bài)**: Bùng nổ năng lượng với các bản Vinahouse, Remix bass căng cực cháy cho phòng gym, thể thao, tiệc tùng hoặc giờ bán hàng cao điểm tại cửa hàng (Sơn Tùng Remix, Freaky, Tăng Duy Tân, Machiot, Da LAB, NonHanTa...).
4. **🌧️ Ballad Tâm Trạng & Lofi Suy (75 bài)**: Những khúc ca sâu lắng, da diết và êm đềm cho những đêm muộn hay những ngày mưa cần khoảng lặng thư giãn, chữa lành tâm hồn (Trung Quân, Phương Ly Lofi, Minh Cà Ri, Lâm Phúc, Lâu Phai...).
5. **🌿 Gen Z & Indie Focus Flow (75 bài)**: Giai điệu trẻ trung, tươi mới, bay bổng của làn sóng âm nhạc Gen Z & Indie Việt, khơi nguồn cảm hứng làm việc và học tập hiệu quả (HIEUTHUHAI, tlinh, Thịnh Suy, AMEE, EREN, Quinf, T.R.I...).
6. **🌸 Pop Tình Ca Ngọt Ngào & Yêu Đời (75 bài)**: Giai điệu lãng mạn, vui tươi, ngọt ngào tràn ngập tình yêu đôi lứa, mang lại nụ cười và cảm xúc tích cực suốt cả ngày dài.

---

## 🚀 Các Phương Thức Sử Dụng

### Cách 1: Cài đặt Chrome / Edge Extension (Khuyên dùng - Tiện lợi nhất)

1. Mở trình duyệt Google Chrome hoặc Microsoft Edge.
2. Truy cập: `chrome://extensions` (hoặc `edge://extensions`).
3. Bật **Chế độ dành cho nhà phát triển (Developer mode)** ở góc trên bên phải.
4. Bấm **Tải tiện ích đã giải nén (Load unpacked)**.
5. Chọn thư mục:
   ```
   d:\01-VibeCode\xmusic-playlist-automation\extension
   ```
6. Truy cập [https://player.xmusicstation.com/](https://player.xmusicstation.com/):
   - Tiện ích tự động đăng nhập bằng tài khoản `tgd111` / `mwg2025`.
   - Nút nổi **🎵 XMusic Assistant** xuất hiện ở góc trên bên trái màn hình.
   - Duyệt tab **📻 List Nhà Phát Hành**, tìm kiếm thông minh hoặc bấm **🔀 Nạp Trộn Bài**!

---

### Cách 2: Sử dụng Tampermonkey / Violentmonkey Userscript

1. Cài đặt extension **Tampermonkey** từ [Chrome Web Store](https://chromewebstore.google.com/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo).
2. Mở file:
   `xmusic-playlist-automation/userscript/xmusic-auto-playlist.user.js`
3. Sao chép toàn bộ mã nguồn và tạo script mới trong Tampermonkey, sau đó nhấn **Save (Ctrl + S)**.
4. Khi mở [https://player.xmusicstation.com/](https://player.xmusicstation.com/), script sẽ tự động kích hoạt.

---

### Cách 3: Chạy Web Dashboard Quản Lý Playlist Độc Lập

Nếu muốn nghe thử bài hát trước, tìm kiếm các bài hát mới trong kho XMusic và quản lý danh sách trực quan:

```bash
cd C:\Users\26479-DBLINH\.gemini\antigravity-ide\scratch\xmusic-playlist-automation
npm start
```

Truy cập: `http://localhost:3000` trên trình duyệt.

---

## 🔑 Cấu Hình Tài Khoản (LocalStorage)

Mặc định công cụ lưu cấu hình tại `localStorage`:
- **Key `xmusic_auth_config`**:
  ```json
  {
    "username": "tgd111",
    "password": "mwg2025",
    "autoLogin": true
  }
  ```
- **Key `xmusic_playlists`**: Lưu toàn bộ danh sách phát do người dùng tạo hoặc chỉnh sửa.
- **Key `xmusic_active_playlist_id`**: ID danh sách phát đang được chọn để nạp.
- **Key `xmusic_auto_populate_on_load`**: Bật/tắt tự động nạp bài hát khi vừa mở trang.

---

## 🎧 Danh Sách Phát Mẫu Có Sẵn

1. **☕ Acoustic & Cafe Chill MWG (12 bài)**:
   - Các giai điệu mộc mạc, nhẹ nhàng, du dương (Em Ở Đây Mà, Best Friends, Không Sao Đâu, Tình Yêu Buông Tha Cho Chúng Ta, Đau Lòng,...).
2. **⚡ Top Hits & Năng Động V-Pop (12 bài)**:
   - Các bản hit bắt tai, tươi vui, tạo năng lượng cho không gian cửa hàng.
