# 📖 HƯỚNG DẪN SỬ DỤNG CHI TIẾT (Phiên bản 2.2.0)

## 🎯 Mục Tiêu & Các Tính Năng Nổi Bật v2.2.0
Cung cấp giải pháp trọn gói tự động hóa và nâng cấp trình phát **https://player.xmusicstation.com/**:
1. **Kho 450 Bài Hát Tuyển Chọn Chuẩn XMusic (75 bài/chủ đề)**: Mở rộng 6 danh sách phát theo Top Trending V-Pop 2026, Acoustic Chill, Vinahouse Bass Cực Sung, Ballad Lofi Suy, Gen Z Indie và Pop Tình Ca Yêu Đời.
2. **Giải Pháp Chia Sẻ Nhanh Qua Mã (Share Code `XMPL2`) & Mạng Nội Bộ**: Tạo mã chia sẻ nhỏ gọn gửi qua Zalo/Teams/Email, người nhận chỉ cần 1 cú click là nhập ngay vào thư viện.
3. **Đồng Bộ Cloud & Cập Nhật Thông Minh (Smart Merge Update)**: Dễ dàng nâng cấp kho playlist tuyển chọn khi có phiên bản mới mà **tuyệt đối không làm mất** các playlist do người dùng tự tạo.
4. **Ủy quyền tự động**: Tự động đăng nhập tài khoản cấu hình trong `localStorage` (mặc định: `tgd111` / `mwg2025`).
5. **Mở khóa Kho Nhạc Nhà Phát Hành (12 Playlist có sẵn)**: Cho phép duyệt, nghe thử và thêm bài lẻ từ các playlist mặc định của nhà phát hành sang Playlist cá nhân hoặc hàng đợi phát.
6. **Sửa triệt để lỗi lệch bài hát khi nạp (100% Accurate)**: Nạp trực tiếp qua Vue memory bridge và thuật toán đối soát điểm thông minh (Smart Match Engine).
7. **Tùy biến Shuffle Playlist đã lưu**: Hỗ trợ nạp trộn ngẫu nhiên thông minh (Smart Artist Separation) kèm nút hoàn tác (Undo).

---

## 🛠️ HƯỚNG DẪN CÀI ĐẶT

### Cách 1: Cài đặt Chrome / Edge Extension vào trình duyệt

1. Mở trình duyệt **Google Chrome** (hoặc **Microsoft Edge**, **Cốc Cốc**, **Brave**).
2. Nhập vào thanh địa chỉ:
   ```
   chrome://extensions
   ```
   *(Nếu dùng Microsoft Edge thì nhập: `edge://extensions`)*
3. Ở góc trên bên phải màn hình, gạt bật công tắc:
   👉 **Chế độ dành cho nhà phát triển (Developer mode)**.
4. Bấm vào nút:
   👉 **Tải tiện ích đã giải nén (Load unpacked)**.
5. Tìm và chọn thư mục:
   ```
   d:\01-VibeCode\xmusic-playlist-automation\extension
   ```
6. Tiện ích **"XMusicStation - Auto Playlist & Manager"** sẽ xuất hiện với icon màu tím.

---

### Cách 2: Cài đặt qua Tampermonkey / Violentmonkey (1 click)

1. Cài đặt tiện ích Tampermonkey trên trình duyệt.
2. Mở file `tampermonkey-guide.html` trên trình duyệt hoặc sao chép mã nguồn từ file:
   `d:\01-VibeCode\xmusic-playlist-automation\userscript\xmusic-auto-playlist.user.js`
3. Tạo script mới trong Tampermonkey, dán mã vào và nhấn **Save (Ctrl + S)**.

---

## 🚀 HƯỚNG DẪN SỬ DỤNG 3 TÍNH NĂNG MỚI

### 1. Mở khóa & Thêm bài hát từ Playlist Nhà Phát Hành
- **Vấn đề trước đây**: Nhà phát hành cài sẵn các playlist (như *[2Q] Nhạc Việt Hè Về*, *TINH HÀ "SAY HI"*, *[2Q] Nhạc Việt Sôi Động 2.0*...) chứa nhiều bài hát độc quyền. Người dùng không thể tìm kiếm những bài này trong ô tìm kiếm để thêm lẻ, mà bị ép phải nghe toàn bộ playlist của nhà phát hành.
- **Cách sử dụng tính năng mới**:
  1. Mở Sidebar **XMusic Assistant** trên trang web (hoặc Web Dashboard).
  2. Bấm vào tab **📻 List Nhà Phát Hành** (hoặc menu *Kho Nhà Phát Hành* trên Dashboard).
  3. Chọn bất kỳ danh sách phát nào của nhà phát hành trong danh sách thả xuống.
  4. Bạn sẽ thấy danh sách đầy đủ tất cả bài hát bên trong:
     - Bấm **`+ List tôi`**: Thêm ngay bài hát lẻ đó vào Playlist cá nhân của bạn.
     - Bấm **`▶ Queue`**: Nạp trực tiếp bài hát đó vào danh sách đang phát (*Now Playing*).
     - Bấm **`📋 Sao Chép Thành Playlist Cá Nhân`**: Nhân bản toàn bộ danh sách nhà phát hành sang Playlist cá nhân của bạn để thoải mái xóa bớt bài không thích, thêm bài mới hoặc sắp xếp lại thứ tự!
  5. **Tìm kiếm kết hợp (Hybrid Search)**: Khi gõ tìm kiếm tại tab **🔍 Tìm & Thêm Bài**, hệ thống sẽ quét đồng thời cả kho Online và toàn bộ các bài hát độc quyền từ nhà phát hành. Các bài từ kho nhà phát hành sẽ được gắn thẻ hồng `📻 Kho Nhà Phát Hành: [Tên Playlist]` để bạn dễ dàng nhận biết.

---

### 2. Khắc phục lỗi nạp lệch bài hát (100% Khớp Đúng Bài & Nghệ Sĩ)
- **Vấn đề trước đây**: Do cơ chế cũ chỉ bấm kết quả đầu tiên (`rows[0]`) hoặc bị dính kết quả cũ từ lần tìm kiếm trước, hệ thống thường nạp nhầm bản Beat karaoke, bản Remix sai hoặc bài hát khác ca sĩ.
- **Giải pháp mới trong v2.0**:
  1. **Nạp trực tiếp siêu tốc (Vue 3 Memory Bridge)**: Khi nạp danh sách, tiện ích ưu tiên đẩy trực tiếp đối tượng bài hát chuẩn vào hàng đợi phát của player. Không cần gõ lại ô tìm kiếm, không độ trễ mạng và đảm bảo đúng 100% bài hát.
  2. **Thuật toán đối soát khớp thông minh (Smart Match Engine)**: Trong trường hợp dự phòng qua giao diện tìm kiếm, công cụ sẽ:
     - Tự động xóa kết quả cũ trước khi tìm từ khóa mới.
     - Tinh lọc tên bài (loại bỏ các thẻ như *[Acoustic Version]*, *(Remix)* nếu tìm kiếm chính xác không có kết quả).
     - Quét toàn bộ danh sách kết quả, tính điểm khớp cả **Tên bài hát** lẫn **Nghệ sĩ**.
     - Trừ điểm nặng các bản *(Beat)* hoặc karaoke nếu bài gốc không phải beat.
     - Chỉ bấm nút Thêm (+) trên hàng có điểm số khớp cao nhất, tuyệt đối không bấm ngẫu nhiên hàng số 1.

---

### 3. Tùy biến xáo trộn (Shuffle) Playlist đã lưu
- **Vấn đề trước đây**: Website player chỉ phát nhạc tuần tự từ trên xuống dưới, không có tính năng trộn bài.
- **Các tùy chọn Shuffle mới**:
  - **Nút `🔀 Nạp Trộn Bài` (Shuffle & Queue)**: Nằm ngay cạnh nút Nạp Queue trên thanh tác vụ nhanh. Bấm nút này sẽ xáo trộn ngẫu nhiên thứ tự các bài trước khi đưa vào hàng đợi phát của trang web (không làm thay đổi thứ tự playlist đã lưu trong máy).
  - **Tùy chọn `☑ Trộn bài khi nạp`**: Đánh dấu vào ô này để mỗi khi nạp danh sách (hoặc khi tiện ích tự động nạp lúc vừa mở trang web), thứ tự bài hát sẽ luôn được tự động xáo trộn.
  - **Nút `🔀 Đảo Thứ Tự` trên Playlist**: Cho phép xáo trộn trực tiếp thứ tự các bài hát đã lưu trong playlist cá nhân theo thuật toán **Smart Shuffle** (tự động phân bổ tách nghệ sĩ, tránh việc 2 bài của cùng 1 ca sĩ phát liên tiếp nhau).
  - **Nút `↩ Hoàn tác` (Undo)**: Xuất hiện ngay sau khi bạn vừa bấm đảo thứ tự, cho phép phục hồi lại vị trí ban đầu nếu bạn chưa ưng ý.
  - **Trên Web Dashboard**: Nút `🔀 Trộn List` nằm ngay trên thanh công cụ của Playlist Detail kèm nút Hoàn tác.

---

### 4. Kho 450 Bài Hát Tuyển Chọn Chuẩn XMusic (75 bài / Playlist)
Toàn bộ bài hát đều đã được đối soát 100% bản quyền phát được trên XMusicStation với đầy đủ `key`, `duration`, `streamUrl`, ảnh bìa và nghệ sĩ gốc:
1. **🔥 Top V-Pop Trending & Charts 2026 (75 bài)**: Các hit bùng nổ của Sơn Tùng M-TP, HIEUTHUHAI, Anh Trai Say Hi, Phương Ly, AMEE, Tăng Duy Tân, Đức Phúc, ERIK, Văn Mai Hương...
2. **☕ Acoustic & Coffee Chill Buổi Sáng (75 bài)**: Mộc mạc, thư thái cho quán cafe và văn phòng (Thịnh Suy, Vũ., Trang, Mộc Gtar, Pia Solo, WHEE!, Trung Quân...).
3. **⚡ EDM & Vinahouse Remix Cực Sung (75 bài)**: Năng lượng đỉnh cao cho phòng tập, sự kiện, giờ cao điểm (Sơn Tùng Remix, Tam Vinh Producer, Freaky Remix, Da LAB Remix, NonHanTa...).
4. **🌧️ Ballad Tâm Trạng & Lofi Suy (75 bài)**: Sâu lắng, hoài niệm cho đêm muộn (Lâu Phai, Trung Quân, Phương Ly Lofi, Minh Cà Ri, Lâm Phúc...).
5. **🌿 Gen Z & Indie Focus Flow (75 bài)**: R&B / Indie Pop tươi mới, kích thích tập trung và sáng tạo (tlinh, HIEUTHUHAI, EREN, Quinf, T.R.I, Bích Phương...).
6. **🌸 Pop Tình Ca Ngọt Ngào & Yêu Đời (75 bài)**: Lãng mạn, vui tươi, tích cực (Sơn Tùng, Đức Phúc, Phương Ly, AMEE, LyLy, An Vũ...).

---

### 5. Giải Pháp Chia Sẻ Playlist Tiện Lợi (Share Code `XMPL2` & Link Trực Tuyến)
Người dùng có thể dễ dàng chia sẻ bất kỳ playlist nào cho đồng nghiệp hoặc bạn bè mà không cần cài đặt phức tạp:
- **Tạo Mã Chia Sẻ Nhanh (`XMPL2:`)**:
  1. Bấm nút **`🔗 Chia Sẻ`** tại playlist đang chọn.
  2. Bấm **`📋 Sao Chép Mã`**. Hệ thống sẽ tự động nén toàn bộ thông tin bài hát thành một đoạn mã ngắn dạng `XMPL2:...`.
  3. Gửi mã này qua Zalo, Messenger, Teams, Email hoặc tài liệu nội bộ.
- **Người Nhận Nhập Playlist**:
  1. Bấm nút **`📥 Nhập Mã`** (trên Web Player hoặc Web Dashboard).
  2. Dán mã `XMPL2:...` hoặc đường link trực tuyến vào ô nhập liệu -> Bấm **`🔍 Kiểm Tra & Xem Trước`**.
  3. Bấm **`➕ Thêm Vào Thư Viện`** -> Playlist sẽ xuất hiện ngay trong danh sách phát của người nhận mà không làm mất các playlist khác.
- **Chia sẻ qua Server Hub Nội Bộ**: Nếu chạy Web Dashboard trong mạng LAN, bấm **`🌐 Tạo Link Chia Sẻ Trực Tuyến`** để tạo URL `http://.../api/share/...` cho người khác truy cập hoặc đồng bộ tự động.

---

### 6. Cập Nhật & Đồng Bộ Cloud Thông Minh (Smart Merge Update)
Khi có phiên bản kho nhạc mới hoặc bạn muốn đồng bộ 450 bài hát tuyển chọn:
- Bấm nút **`☁️ Cập Nhật`** (trên Web Player hoặc Web Dashboard).
- Hộp thoại cập nhật cung cấp 2 chế độ:
  - **`🟢 Cập nhật & Giữ lại Playlist cá nhân (Khuyên dùng)`**: Hệ thống tự động nhận diện các playlist bạn đã tự tạo để bảo toàn 100%, đồng thời nâng cấp 6 playlist tuyển chọn hệ thống lên phiên bản mới nhất (450 bài hát).
  - **`🔄 Làm mới hoàn toàn`**: Đặt lại toàn bộ thư viện về nguyên bản 6 playlist tuyển chọn v2.2.0.
  - **Đồng bộ từ URL tùy chỉnh**: Bạn có thể nhập bất kỳ đường link API hoặc file JSON nào trong mạng nội bộ để cập nhật cho toàn bộ máy trạm.

---

### 7. Chuyên Mục Cập Nhật GitHub (Update Center) & Quy Trình Triển Khai
Hệ thống tích hợp sẵn tab **`🚀 Cập Nhật`** ngay trên thanh công cụ của Web Player và mục **`🚀 Cập Nhật (GitHub)`** trên Web Dashboard:

#### A. Cách người dùng kiểm tra & tải bản cập nhật:
1. Mở thanh công cụ trên Web Player -> Chuyển sang tab **`🚀 Cập Nhật`** (hoặc chọn menu *Cập Nhật (GitHub)* trên Dashboard).
2. Hệ thống sẽ kết nối tới GitHub Repository được cấu hình (ví dụ: `https://github.com/vibe-code/xmusic-playlist-automation` hoặc repo của bạn):
   - Nếu phát hiện **Phiên bản mới hơn**:
     - Hiển thị badge: `🎉 Có phiên bản mới: v2.3.0` kèm danh sách tính năng mới (*Release Notes*).
     - Bấm **`⚡ 1. Nạp Kho Nhạc Mới Từ GitHub`**: Tải thẳng `sample-playlists.json` mới nhất về và chạy Smart Merge (giữ nguyên playlist cá nhân).
     - Bấm **`📥 2. Cập Nhật Tampermonkey Script`**: Mở link raw userscript để Tampermonkey tự động nạp bản mới.
     - Bấm **`📦 3. Tải Extension .zip Từ GitHub`**: Tải file zip tiện ích từ GitHub Releases.
   - Nếu đã là bản mới nhất: Hiện thông báo xác nhận `✅ Bạn đang sử dụng phiên bản mới nhất!`.

#### B. Hướng dẫn chi tiết cách tải code lên GitHub & phát hành bản mới:
1. **Bước 1: Tạo Repository mới trên GitHub**
   - Đăng nhập vào [GitHub](https://github.com/) -> Bấm nút **New** (hoặc vào [github.com/new](https://github.com/new)).
   - Đặt tên repository: `xmusic-playlist-automation` (để chế độ **Public** để người dùng có thể tải bản cập nhật trực tiếp).
   - *Lưu ý*: Không tích chọn "Add a README file" vì chúng ta đã có sẵn. Bấm **Create repository**.
2. **Bước 2: Kết nối & Đẩy toàn bộ mã nguồn lên GitHub**
   - Mở PowerShell tại thư mục dự án và chạy 2 lệnh sau:
     ```powershell
     # Thay <tai-khoan-github> bằng username GitHub của bạn
     git remote add origin https://github.com/<tai-khoan-github>/xmusic-playlist-automation.git
     git push -u origin main
     ```
3. **Bước 3: Cách phát hành phiên bản mới (về sau)**
   - Mỗi khi bạn cập nhật thêm bài hát hoặc tính năng mới:
     1. Mở file `version.json` và sửa `version` (ví dụ: `"2.3.0"`) kèm nội dung trong `releaseNotes`.
     2. Mở file `package.json` và `manifest.json` nâng phiên bản tương ứng.
     3. Chạy lệnh:
        ```powershell
        git add .
        git commit -m "release: v2.3.0 - Cập nhật kho nhạc & tính năng mới"
        git push origin main
        ```
     4. Ngay lập tức, tất cả người dùng XMusicStation khi mở tab **`🚀 Cập Nhật`** sẽ thấy phiên bản mới v2.3.0 và có thể cập nhật trong 1-click!

---

## 💻 CHẠY WEB DASHBOARD QUẢN LÝ RIÊNG

Nếu muốn có giao diện bảng điều khiển toàn màn hình để nghe thử trực tiếp bài hát, duyệt kho nhà phát hành và quản lý playlist:

```bash
cd d:\01-VibeCode\xmusic-playlist-automation
npm start
```

Mở trình duyệt truy cập: `http://localhost:3000`
