# 📖 HƯỚNG DẪN SỬ DỤNG CHI TIẾT (Phiên bản 2.5.0)

## 🎯 Mục Tiêu & Các Tính Năng Nổi Bật v2.5.0
Cung cấp giải pháp trọn gói tự động hóa và nâng cấp trình phát **https://player.xmusicstation.com/**:
1. **Kho 200 Bài Hát Tuyển Chọn Chuẩn XMusic (50 bài/chủ đề)**: 4 chủ đề tuyển chọn đỉnh cao: Nhạc Việt Sôi Động 2026, Top Hit Rap Việt Thịnh Hành, Ballad Cảm Xúc Sâu Lắng, và Giáng Sinh & Mùa Lễ Hội Sôi Động.
2. **Sửa Triệt Để Thuật Toán Shuffle**: Sử dụng Fisher-Yates shuffle toàn diện mảng (đảo ngẫu nhiên 100% mọi vị trí trong danh sách phát, khắc phục hoàn toàn hiện tượng chỉ đảo ~15 bài đầu), kết hợp thuật toán phân tách ca sĩ tránh phát liên tiếp.
3. **Mở Khóa Toàn Diện Playlist Nhà Phát Hành (TINH HÀ "SAY HI")**: Hỗ trợ đầy đủ 100% các ca khúc độc quyền từ album TINH HÀ "SAY HI" (24 bài) và toàn bộ 11 playlist có sẵn của nhà phát hành (518 bài) thêm vào playlist cá nhân hoặc nạp phát trực tiếp.
4. **Giải Pháp Chia Sẻ Nhanh Qua Mã (Share Code `XMPL2`) & Mạng Nội Bộ**: Tạo mã chia sẻ nhỏ gọn gửi qua Zalo/Teams/Email, người nhận chỉ cần 1 cú click là nhập ngay vào thư viện.
5. **Đồng Bộ Cloud & Cập Nhật Thông Minh (Smart Merge Update)**: Dễ dàng nâng cấp kho playlist tuyển chọn khi có phiên bản mới mà **tuyệt đối không làm mất** các playlist do người dùng tự tạo.
6. **Ủy quyền tự động**: Tự động đăng nhập tài khoản cấu hình trong `localStorage` (cấu hình trong tab `⚙ Cấu Hình`).
7. **Nạp Nhạc Siêu Tốc & Chính Xác (Vue 3 Memory Bridge)**: Nạp trực tiếp qua Vue 3 memory bridge duyệt đệ quy `comp.subTree` và thuật toán đối soát điểm thông minh (Smart Match Engine).

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
   xmusic-station/extension
   ```
   *(hoặc thư mục `extension` sau khi giải nén từ file zip tải tại [GitHub Releases](https://github.com/hotrocvst-cell/xmusic-station/releases)).*
6. Tiện ích **"XMusicStation - Auto Playlist & Manager"** sẽ xuất hiện với icon màu tím.

---

### Cách 2: Cài đặt qua Tampermonkey / Violentmonkey (1 click)

1. Cài đặt tiện ích Tampermonkey trên trình duyệt.
2. Bấm vào link cài đặt trực tiếp từ GitHub Raw:
   👉 **[Cài đặt xmusic-auto-playlist.user.js](https://raw.githubusercontent.com/hotrocvst-cell/xmusic-station/main/userscript/xmusic-auto-playlist.user.js)** *(Tampermonkey sẽ tự động mở hộp thoại xác nhận cài đặt).*
3. Hoặc mở file `tampermonkey-guide.html` trên trình duyệt để copy mã script vào Tampermonkey.

---

## 🚀 HƯỚNG DẪN SỬ DỤNG 3 TÍNH NĂNG MỚI

### 1. Mở khóa & Thêm bài hát từ Playlist Nhà Phát Hành (TINH HÀ "SAY HI" & Kho Bản Quyền)
- **Vấn đề trước đây**: Nhà phát hành cài sẵn các playlist (như *[2Q] Nhạc Việt Hè Về*, *TINH HÀ "SAY HI"*, *[2Q] Nhạc Việt Sôi Động 2.0*...) chứa nhiều bài hát độc quyền. Trước đây, khi bấm "+ List tôi" với album *TINH HÀ "SAY HI"*, chuỗi tên ca sĩ chứa dấu ngoặc kép khiến hệ thống bị lỗi phân tích cú pháp HTML và không thêm được vào danh sách phát. Ngoài ra, do các bài này không xuất hiện trên ô tìm kiếm công cộng, trình phát không nạp bài được.
- **Cách sử dụng tính năng mới trong v2.5.0**:
  1. Mở Sidebar **XMusic Assistant** trên trang web (hoặc Web Dashboard).
  2. Bấm vào tab **📻 Kho Nhà Phát Hành** (hoặc menu *Kho Nhà Phát Hành* trên Dashboard).
  3. Chọn danh sách phát **`TINH HÀ "SAY HI"`** (hoặc bất kỳ playlist nào trong 11 playlist có sẵn của nhà phát hành).
  4. Bạn sẽ thấy danh sách đầy đủ tất cả 24 bài hát bên trong (như *tết tình*, *MVP (MƯA VỘI PHÓNG)*, *IDNAT*, *CÔ ĐƠN ANH CŨNG VUI*, *DANCIN' MY WAY*...):
     - Bấm **`+ List tôi`**: Thêm ngay lập tức bài hát lẻ đó vào Playlist cá nhân đang chọn một cách mượt mà và an toàn 100%.
     - Bấm **`▶ Queue`**: Nạp trực tiếp bài hát đó vào danh sách đang phát (*Now Playing*) siêu tốc qua Vue 3 Memory Bridge.
     - Bấm **`📋 Sao Chép Thành Playlist Cá Nhân`**: Nhân bản toàn bộ danh sách nhà phát hành sang Playlist cá nhân của bạn để thoải mái xóa bớt bài không thích, thêm bài mới hoặc sắp xếp lại thứ tự!
  5. **Tìm kiếm kết hợp (Hybrid Search)**: Khi gõ tìm kiếm tại tab **🔍 Tìm Bài**, hệ thống sẽ quét đồng thời cả kho Online và toàn bộ các bài hát độc quyền từ nhà phát hành. Các bài từ kho nhà phát hành sẽ được gắn thẻ hồng `📻 Kho Nhà Phát Hành: [Tên Playlist]` để bạn dễ dàng nhận biết và thêm vào.

---

### 2. Khắc phục lỗi nạp lệch bài hát (100% Khớp Đúng Bài & Nghệ Sĩ)
- **Vấn đề trước đây**: Do cơ chế cũ chỉ bấm kết quả đầu tiên (`rows[0]`) hoặc bị dính kết quả cũ từ lần tìm kiếm trước, hệ thống thường nạp nhầm bản Beat karaoke, bản Remix sai hoặc bài hát khác ca sĩ.
- **Giải pháp mới trong v2.5.0**:
  1. **Nạp trực tiếp siêu tốc (Vue 3 Memory Bridge)**: Khi nạp danh sách, tiện ích ưu tiên đẩy trực tiếp đối tượng bài hát chuẩn vào hàng đợi phát của player thông qua cơ chế duyệt đệ quy cây component Vue 3 (`comp.subTree`). Không cần gõ lại ô tìm kiếm, không độ trễ mạng và đảm bảo đúng 100% bài hát.
  2. **Thuật toán đối soát khớp thông minh (Smart Match Engine)**: Trong trường hợp dự phòng qua giao diện tìm kiếm, công cụ sẽ:
     - Tự động xóa kết quả cũ trước khi tìm từ khóa mới.
     - Tinh lọc tên bài (loại bỏ các thẻ như *[Acoustic Version]*, *(Remix)* nếu tìm kiếm chính xác không có kết quả).
     - Quét toàn bộ danh sách kết quả, tính điểm khớp cả **Tên bài hát** lẫn **Nghệ sĩ**.
     - Trừ điểm nặng các bản *(Beat)* hoặc karaoke nếu bài gốc không phải beat.
     - Chỉ bấm nút Thêm (+) trên hàng có điểm số khớp cao nhất, tuyệt đối không bấm ngẫu nhiên hàng số 1.

---

### 3. Tùy biến xáo trộn (Shuffle) Playlist đã lưu - Khắc Phục Lỗi Chỉ Đảo ~15 Bài Đầu
- **Vấn đề trước đây**: Thuật toán shuffle cũ nhóm theo ca sĩ rồi lấy round-robin khiến các ca sĩ ít bài bị cạn sau lượt đầu, dẫn đến hiện tượng chỉ đảo thứ tự khoảng 15 bài đầu tiên, 35 bài còn lại ở đuôi danh sách bị cố định thứ tự.
- **Thuật toán mới trong v2.5.0 (Fisher-Yates + Smoothing Pass)**:
  - **Fisher-Yates Shuffle 100%**: Đảo ngẫu nhiên công bằng tuyệt đối toàn bộ danh sách từ bài số 1 đến bài cuối cùng (bất kể danh sách 50 bài, 100 bài hay 200 bài).
  - **Smoothing Pass**: Tự động phân tách nghệ sĩ nếu phát hiện 2 bài của cùng 1 ca sĩ chính đứng sát nhau, giúp trải nghiệm nghe nhạc phong phú và không bị trùng lặp.
  - **Nút `🔀 Nạp Trộn Bài` (Shuffle & Queue)**: Xáo trộn ngẫu nhiên thứ tự các bài trước khi đưa vào hàng đợi phát của trang web (không làm thay đổi thứ tự playlist đã lưu trong máy).
  - **Tùy chọn `☑ Trộn bài khi nạp`**: Đánh dấu vào ô này để mỗi khi nạp danh sách (hoặc khi tiện ích tự động nạp lúc vừa mở trang web), thứ tự bài hát sẽ luôn được tự động xáo trộn.
  - **Nút `🔀 Đảo Thứ Tự` trên Playlist**: Cho phép xáo trộn trực tiếp thứ tự các bài hát đã lưu trong playlist cá nhân theo thuật toán **Smart Shuffle** mới.
  - **Nút `↩ Hoàn tác` (Undo)**: Xuất hiện ngay sau khi bạn vừa bấm đảo thứ tự, cho phép phục hồi lại vị trí ban đầu nếu bạn chưa ưng ý.
  - **Trên Web Dashboard**: Nút `🔀 Trộn List` nằm ngay trên thanh công cụ của Playlist Detail kèm nút Hoàn tác.

---

### 4. Kho 300 Bài Hát Tuyển Chọn Chuẩn XMusic (100 bài / Playlist)
Toàn bộ 300 bài hát đều được lấy từ kho nhạc bản quyền XMusic Station, là các ca khúc hot hit quen thuộc của các nghệ sĩ tên tuổi lớn:
1. **⚡ Top Nhạc Việt Sôi Động & Remix 2026 (100 bài)**: Pop Dance, Vinahouse, EDM cực sung (Sơn Tùng M-TP, Tăng Duy Tân, ANH TRAI "SAY HI", EM XINH "SAY HI", TINH HÀ "SAY HI", Da LAB, Hoàng Thùy Linh, Cukak, Phong Max...).
2. **🎤 Top Hit Rap Việt Thịnh Hành (100 bài)**: Rap & Hip-Hop thịnh hành dẫn đầu xu hướng (HIEUTHUHAI, Đen Vâu, BigDaddy, Pháp Kiều, RHYDER, HURRYKNG, Freaky, Karik, JustaTee, B Ray, Dick...).
3. **🌧️ Top Ballad Cảm Xúc & Sâu Lắng (100 bài)**: Giai điệu mộc mạc, tha thiết, sâu lắng chạm đến trái tim (Trung Quân Idol, Vũ., Đức Phúc, ERIK, Hoàng Dũng, Văn Mai Hương, Bùi Anh Tuấn, Phan Mạnh Quỳnh, Noo Phước Thịnh, AMEE, Phương Ly, Thịnh Suy, Quân A.P...).

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
  - **`🔄 Làm mới hoàn toàn`**: Đặt lại toàn bộ thư viện về nguyên bản 6 playlist tuyển chọn v2.5.0
  - **Đồng bộ từ URL tùy chỉnh**: Bạn có thể nhập bất kỳ đường link API hoặc file JSON nào trong mạng nội bộ để cập nhật cho toàn bộ máy trạm.

---

### 7. Chuyên Mục Cập Nhật GitHub (Update Center) - Khóa Cứng Nguồn Admin
Hệ thống tích hợp sẵn tab **`🚀 Cập Nhật`** ngay trên thanh công cụ của Web Player và mục **`🚀 Cập Nhật (GitHub)`** trên Web Dashboard, được **khóa cứng bảo mật duy nhất trỏ về kho chính thức của Admin**:
👉 **`https://github.com/hotrocvst-cell/xmusic-station.git`** (Người dùng không thể chỉnh sửa, can thiệp hoặc thay đổi nguồn khác).

#### A. Cách người dùng kiểm tra & tải bản cập nhật:
1. Mở thanh công cụ trên Web Player -> Chuyển sang tab **`🚀 Cập Nhật`** (hoặc chọn menu *Cập Nhật (GitHub)* trên Dashboard).
2. Hệ thống hiển thị nguồn Admin được bảo vệ: `hotrocvst-cell/xmusic-station` (Khóa bảo mật 🔒).
3. Bấm **`🔍 Kiểm Tra Bản Cập Nhật Từ Admin (GitHub)`**:
   - Nếu phát hiện **Phiên bản mới hơn từ Admin**:
     - Hiển thị badge: `🎉 Có phiên bản mới: v2.5.0` kèm danh sách tính năng & bài hát mới (*Release Notes*).
     - Bấm **`⚡ 1. Nạp Kho Nhạc Mới Từ Admin`**: Tải thẳng `sample-playlists.json` mới nhất về và chạy Smart Merge (bảo toàn nguyên vẹn playlist cá nhân).
     - Bấm **`📥 2. Cập Nhật Tampermonkey Script`**: Mở link raw userscript để Tampermonkey tự động nạp bản mới.
     - Bấm **`📦 3. Tải Extension .zip Từ GitHub`**: Tải file zip tiện ích từ GitHub Releases.
   - Nếu đã là bản mới nhất: Hiện thông báo xác nhận `✅ Bạn đang sử dụng phiên bản mới nhất từ Admin!`.

#### B. Quy trình đẩy code & phát hành bản mới dành cho Admin (`hotrocvst-cell`):
Chi tiết đầy đủ xem tại [QUY_TRINH_PHAT_HANH.md](QUY_TRINH_PHAT_HANH.md).

1. **Bước 1: Tự động đồng bộ cấu hình phiên bản (1 câu lệnh)**:
   Tại thư mục dự án, chạy:
   ```powershell
   npm run bump 2.4.0 "Nội dung cập nhật tính năng hoặc kho nhạc"
   ```
   *(Công cụ tự động cập nhật `version.json`, `package.json`, `extension/manifest.json` và build lại Userscript).*

2. **Bước 2: Phát hành qua GitHub Desktop App (Khuyên dùng)**:
   - Mở ứng dụng **GitHub Desktop** -> Ở tab **Changes**, kiểm tra danh sách file đã cập nhật.
   - Ô Summary: nhập `release: v2.5.0` -> Bấm nút **`Commit to main`**.
   - Bấm nút **`Push origin`** ở thanh trên cùng để đẩy commit.
   - **Tạo Tag kích hoạt Release**:
     1. Chuyển sang tab **History** ở cột bên trái.
     2. Bấm chuột phải vào Commit vừa tạo trên cùng -> Chọn **`Create Tag...`**.
     3. Nhập tên tag: `v2.5.0` (phải có chữ `v` ở đầu) -> Bấm **`Create Tag`**.
     4. Bấm nút **`Push origin`** ở thanh trên cùng để đẩy Tag lên GitHub.

3. **Bước 2 (Dự phòng): Phát hành qua dòng lệnh Git CLI**:
   ```powershell
   git add .
   git commit -m "release: v2.5.0"
   git tag v2.5.0
   git push origin main --tags
   ```

4. **Kết quả tự động hóa**:
   - GitHub Actions lập tức đóng gói `xmusic-station-extension.zip` và tạo Release mới tại [Releases](https://github.com/hotrocvst-cell/xmusic-station/releases).
   - Tất cả người dùng khi mở tab **`🚀 Cập Nhật`** trên trình duyệt sẽ thấy bản mới và nạp bài hát ngay!

---

## 💻 CHẠY WEB DASHBOARD QUẢN LÝ RIÊNG

Nếu muốn có giao diện bảng điều khiển toàn màn hình để nghe thử trực tiếp bài hát, duyệt kho nhà phát hành và quản lý playlist:

```bash
git clone https://github.com/hotrocvst-cell/xmusic-station.git
cd xmusic-station
npm start
```

Mở trình duyệt truy cập: `http://localhost:3000`
