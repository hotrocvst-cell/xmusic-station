const fs = require('fs');
const path = require('path');

const allSongs = JSON.parse(fs.readFileSync('scripts/all-available-songs.json', 'utf8'));

function find(titlePart, artistPart) {
  const tKw = titlePart.toLowerCase();
  const aKw = artistPart ? artistPart.toLowerCase() : null;

  return allSongs.find(s => {
    const t = s.title.toLowerCase();
    const a = (s.artists || []).join(', ').toLowerCase();
    const matchTitle = t.includes(tKw);
    const matchArtist = aKw ? a.includes(aKw) : true;
    return matchTitle && matchArtist;
  });
}

function cleanSong(s) {
  if (!s) return null;
  return {
    key: s.key,
    title: s.title.trim(),
    artists: s.artists || [],
    duration: s.duration || 0,
    kbit: s.kbit || 128,
    streamUrl: s.streamUrl || '',
    image: s.image || ''
  };
}

function buildPlaylist(id, name, description, criteriaList) {
  const songs = [];
  const seenKeys = new Set();

  for (const [t, a] of criteriaList) {
    const s = find(t, a);
    if (s && !seenKeys.has(s.key)) {
      seenKeys.add(s.key);
      songs.push(cleanSong(s));
    } else if (!s) {
      console.warn(`[${name}] Không tìm thấy: "${t}" (${a || 'any'})`);
    }
  }

  return {
    id,
    name,
    description,
    createdAt: new Date().toISOString(),
    songs
  };
}

// 1. TOP V-POP HITS & TRENDING CHARTS (25 bài)
const criteriaTrending = [
  ['Nơi Này Có Anh', 'Sơn Tùng'],
  ['Muộn Rồi Mà Sao Còn', 'Sơn Tùng'],
  ['Chúng Ta Không Thuộc Về Nhau', 'Sơn Tùng'],
  ['CÓ CHẮC YÊU LÀ ĐÂY', 'Sơn Tùng'],
  ['Em Của Ngày Hôm Qua', 'Sơn Tùng'],
  ['Cơn Mưa Xa Dần', 'Sơn Tùng'],
  ['Nắng Ấm Ngang Qua', 'Sơn Tùng'],
  ['QUAY ĐI QUAY LẠI', 'HIEUTHUHAI'],
  ['Sao Hạng A', 'HIEUTHUHAI'],
  ['Lời Đường Mật', 'HIEUTHUHAI'],
  ['ĐÃ XINH LẠI CÒN THÔNG MINH', 'Bích Phương'],
  ['EM XINH EM BLING', 'Phương Ly'],
  ['Chạy Khỏi Thế Giới Này', 'Phương Ly'],
  ['VỖ TAY', 'Phương Ly'],
  ['Trái Đất Đẹp Nhất Khi Có Em', 'Đức Phúc'],
  ['SAU ĐÊM NAY', 'ERIK'],
  ['Tình Đầu Quá Chén', 'ERIK'],
  ['I\'M THINKING ABOUT YOU', 'tlinh'],
  ['nếu mai chia tay', 'AMEE'],
  ['Ngây Thơ', 'Tăng Duy Tân'],
  ['Buồn Nốt Hôm Nay', 'Tăng Duy Tân'],
  ['Chờ Em Đến', 'EREN'],
  ['Thằng nào làm em suy', 'Freaky'],
  ['Hót Hòn Họt', 'Hương Giang'],
  ['Vì Anh Là Tình Đầu', 'Chí Chương']
];

// 2. ACOUSTIC & COFFEE CHILL (25 bài)
const criteriaAcoustic = [
  ['Em Ở Đây Mà (Acoustic', 'RUBY'],
  ['Best Friends (Tao Với Mày) [Acoustic', 'tuấn việt'],
  ['Không Sao Đâu (Acoustic', 'WHEE'],
  ['Mời Buồn Sang Chơi (Acoustic', 'Bảo Yến'],
  ['tiny love', 'Thịnh Suy'],
  ['Summer Vibe', 'Thịnh Suy'],
  ['the lost kid', 'Thịnh Suy'],
  ['cá rim cá chô', 'Thịnh Suy'],
  ['Vẫn Thế (Rừng Việt Nam)', 'Thịnh Suy'],
  ['Thanh', 'Thịnh Suy'],
  ['Saigon1', 'Thịnh Suy'],
  ['Tình Yêu Màu Nắng', 'Trang'],
  ['Không Lý Do', 'Vũ Phụng Tiên'],
  ['Anh Yêu Nụ Cười Ấy', 'An Vũ'],
  ['Vài Giọt Sương Mai', 'Quinf'],
  ['Hà Nội Và Em', 'Minh Cà Ri'],
  ['Có Một Chữ \'Thương\'', 'Minh Cà Ri'],
  ['‘anhduong’ (Piano', 'Lâm Phúc'],
  ['Điểm Đến Lý Tưởng Cho Cuộc Hẹn Cuối Tuần (Guitar', 'Mộc Gtar'],
  ['Đan Vào Nhau Một Lát', 'TRONG'],
  ['tết tình', 'TINH HÀ'],
  ['Trong Hẻm Nhỏ Có Anh Chờ', 'Trung Quân'],
  ['I Do', 'Trung Quân'],
  ['người bán nỗi buồn', 'Trung Quân'],
  ['Tiếng Piano Ru Bé Vào Giấc Ngủ Say', 'Cuti Kid']
];

// 3. EDM & VINAHOUSE REMIX CỰC SUNG (25 bài)
const criteriaRemix = [
  ['Có Chắc Yêu Là Đây (Remix)', 'Sơn Tùng'],
  ['Nơi Này Có Anh (Remix)', 'Sơn Tùng'],
  ['Muộn Rồi Mà Sao Còn (Remix)', 'Sơn Tùng'],
  ['Cơn Mưa Ngang Qua (Remix 2022)', 'Sơn Tùng'],
  ['Remember Me (Onionn Remix', 'Sơn Tùng'],
  ['Thằng nào làm em suy (Remix)', 'Freaky'],
  ['Gác Lại Âu Lo (Zang Remix)', 'Da LAB'],
  ['Ngây Thơ (Phong Max Remix)', 'Tăng Duy Tân'],
  ['Anh Chưa Quên (House Lak)', 'Jea Nam'],
  ['Cứ Ngỡ (EDM Remix)', 'NB3 Hoài Bảo'],
  ['Giọt Sương Nắng Remix', 'NamDuc'],
  ['Đánh Thức Giấc Mơ (Remix', 'Hàn Trương'],
  ['Có Chắc Là Yêu Không? (Vinahouse Remix)', 'NonHanTa'],
  ['Thật Buồn Cho Đôi Ta (HHD Remix)', 'Quang Chợ Lầm'],
  ['Một Người Tương Xứng (Minh Tường', 'Quang Chợ Lầm'],
  ['Yêu Xa Thôi Mà Remix', 'Yul Lee'],
  ['Anh Đây Đã Quá Khờ Remix', 'Gin-B'],
  ['2 Năm Sao Em Nỡ (Qrinn Remix)', 'TLong'],
  ['Em Đi Đâu (Freak D Remix)', 'Machiot'],
  ['SI EM', 'Thanh Tú'],
  ['ĐẶT CÁI TÊN EM LÊN HÀNG ĐẦU', 'Cassano'],
  ['Baby I\'m Good (Jsdrmns Remix)', 'Kim Chi Sun'],
  ['Lỡ Duyên Vậy Thôi (ChungQ x HHD Remix)', 'Vũ'],
  ['Lạc Vào Em (Remix)', 'Lê Vũ'],
  ['Vọng Phu (Remix Version)', 'Vũ Phan Dương Ninh']
];

// 4. BALLAD TÂM TRẠNG & LOFI SUY (25 bài)
const criteriaBalladSuy = [
  ['Chạy Khỏi Thế Giới Này (Lofi Version', 'Phương Ly'],
  ['Đến Lúc Thay Đổi Rồi', 'Trung Quân'],
  ['Thất Vọng Đến Mức Em Chỉ Biết Im Lặng (Lofi', 'Lâu Phai'],
  ['Yêu Thật Lòng Khó Đến Vậy Sao (Lofi', 'Lâu Phai'],
  ['Tổn Thương Nhiều Quá Đến Chẳng Dám Yêu (Lofi', 'Lâu Phai'],
  ['Tổn Thương Đến Đau Lòng (Lofi', 'Lâu Phai'],
  ['Yêu Trong Nắng Mai (Lofi Mix)', 'Lê Vũ'],
  ['Khi Ta Già (Lofi Version)', 'Vũ Thịnh'],
  ['Hà Nội Và Em', 'Minh Cà Ri'],
  ['Có Một Chữ \'Thương\'', 'Minh Cà Ri'],
  ['Vì Anh Là Tình Đầu', 'Chí Chương'],
  ['NỖI ĐAU NGÂY DẠI', 'HIEUTHUHAI'],
  ['Buồn Nốt Hôm Nay', 'Tăng Duy Tân'],
  ['Không Lý Do', 'Vũ Phụng Tiên'],
  ['Vài Giọt Sương Mai', 'Quinf'],
  ['Đan Vào Nhau Một Lát', 'TRONG'],
  ['nếu mai chia tay', 'AMEE'],
  ['Chờ Em Đến', 'EREN'],
  ['Anh Yêu Nụ Cười Ấy', 'An Vũ'],
  ['Thằng nào làm em suy', 'Freaky'],
  ['Best Friends (Tao Với Mày)', 'tuấn việt'],
  ['Không Sao Đâu (Acoustic', 'WHEE'],
  ['Mời Buồn Sang Chơi (Acoustic', 'Bảo Yến'],
  ['Gặp Em Lúc Tan Vỡ', 'Trung Quân'],
  ['tết tình', 'TINH HÀ']
];

// 5. GEN Z & INDIE FOCUS VIBES (25 bài)
const criteriaGenZ = [
  ['QUAY ĐI QUAY LẠI', 'HIEUTHUHAI'],
  ['Sao Hạng A', 'HIEUTHUHAI'],
  ['I\'M THINKING ABOUT YOU', 'tlinh'],
  ['Lời Đường Mật', 'HIEUTHUHAI'],
  ['ĐÃ XINH LẠI CÒN THÔNG MINH', 'Bích Phương'],
  ['EM XINH EM BLING', 'Phương Ly'],
  ['Chờ Em Đến', 'EREN'],
  ['Thằng nào làm em suy', 'Freaky'],
  ['tiny love', 'Thịnh Suy'],
  ['Summer Vibe', 'Thịnh Suy'],
  ['Vài Giọt Sương Mai', 'Quinf'],
  ['tết tình', 'TINH HÀ'],
  ['Đan Vào Nhau Một Lát', 'TRONG'],
  ['Hót Hòn Họt', 'Hương Giang'],
  ['Vì Anh Là Tình Đầu', 'Chí Chương'],
  ['SI EM', 'Thanh Tú'],
  ['ĐẶT CÁI TÊN EM LÊN HÀNG ĐẦU', 'Cassano'],
  ['Tình Yêu Màu Nắng', 'Trang'],
  ['Không Sao Đâu (Acoustic', 'WHEE'],
  ['Hà Nội Và Em', 'Minh Cà Ri'],
  ['nếu mai chia tay', 'AMEE'],
  ['Ngây Thơ', 'Tăng Duy Tân'],
  ['Chạy Khỏi Thế Giới Này', 'Phương Ly'],
  ['Trái Đất Đẹp Nhất Khi Có Em', 'Đức Phúc'],
  ['VỖ TAY', 'Phương Ly']
];

// 6. POP TÌNH CA NGỌT NGÀO & YÊU ĐỜI (25 bài)
const criteriaLove = [
  ['Nơi Này Có Anh', 'Sơn Tùng'],
  ['CÓ CHẮC YÊU LÀ ĐÂY', 'Sơn Tùng'],
  ['Muộn Rồi Mà Sao Còn', 'Sơn Tùng'],
  ['Trái Đất Đẹp Nhất Khi Có Em', 'Đức Phúc'],
  ['Lời Đường Mật', 'HIEUTHUHAI'],
  ['ĐÃ XINH LẠI CÒN THÔNG MINH', 'Phương Ly'],
  ['EM XINH EM BLING', 'Phương Ly'],
  ['Chạy Khỏi Thế Giới Này', 'Phương Ly'],
  ['nếu mai chia tay', 'AMEE'],
  ['Chờ Em Đến', 'EREN'],
  ['Vì Anh Là Tình Đầu', 'Chí Chương'],
  ['Anh Yêu Nụ Cười Ấy', 'An Vũ'],
  ['tết tình', 'TINH HÀ'],
  ['Tình Yêu Màu Nắng', 'Trang'],
  ['tiny love', 'Thịnh Suy'],
  ['Em Ở Đây Mà (Acoustic', 'RUBY'],
  ['Vài Giọt Sương Mai', 'Quinf'],
  ['Đan Vào Nhau Một Lát', 'TRONG'],
  ['SI EM', 'Thanh Tú'],
  ['SAU ĐÊM NAY', 'ERIK'],
  ['Tình Đầu Quá Chén', 'ERIK'],
  ['Ngây Thơ', 'Tăng Duy Tân'],
  ['Hót Hòn Họt', 'Hương Giang'],
  ['Hà Nội Và Em', 'Minh Cà Ri'],
  ['I Do', 'Trung Quân']
];

const p1 = buildPlaylist('playlist-trending-chart', '🔥 Top V-Pop Trending & Charts 2026', 'Tuyển tập 25 ca khúc V-Pop hot nhất, dẫn đầu các bảng xếp hạng âm nhạc (Sơn Tùng M-TP, HIEUTHUHAI, Anh Trai Say Hi, AMEE, Phương Ly, Tăng Duy Tân...).', criteriaTrending);
const p2 = buildPlaylist('playlist-acoustic-cafe', '☕ Acoustic & Coffee Chill Buổi Sáng', 'Giai điệu mộc mạc du dương của guitar và piano, tạo không gian bình yên, thư thái cho quán cafe, văn phòng hoặc góc làm việc buổi sáng (25 bài).', criteriaAcoustic);
const p3 = buildPlaylist('playlist-edm-remix', '⚡ EDM & Vinahouse Remix Cực Sung (High Energy)', 'Bùng nổ năng lượng với các bản Vinahouse, Remix bass căng cực cháy cho phòng gym, thể thao, tiệc tùng hoặc giờ bán hàng cao điểm (25 bài).', criteriaRemix);
const p4 = buildPlaylist('playlist-ballad-suy', '🌧️ Ballad Tâm Trạng & Lofi Suy (Late Night)', 'Những khúc ca sâu lắng, da diết và êm đềm cho những đêm muộn hay những ngày mưa cần khoảng lặng thư giãn, chữa lành tâm hồn (25 bài).', criteriaBalladSuy);
const p5 = buildPlaylist('playlist-genz-indie', '🌿 Gen Z & Indie Focus Flow (Sáng Tạo & Năng Động)', 'Giai điệu trẻ trung, tươi mới, bay bổng của làn sóng âm nhạc Gen Z & Indie Việt, khơi nguồn cảm hứng làm việc và học tập hiệu quả (25 bài).', criteriaGenZ);
const p6 = buildPlaylist('playlist-love-sweet', '🌸 Pop Tình Ca Ngọt Ngào & Yêu Đời (Happy Love)', 'Giai điệu lãng mạn, vui tươi, ngọt ngào tràn ngập tình yêu đôi lứa, mang lại nụ cười và cảm xúc tích cực suốt cả ngày dài (25 bài).', criteriaLove);

const curatedPlaylists = [p1, p2, p3, p4, p5, p6];

console.log('\n======================================');
curatedPlaylists.forEach(p => {
  console.log(`- ${p.name}: ${p.songs.length} bài hát`);
});
console.log('======================================');

// Save to sample-playlists.json
fs.writeFileSync('sample-playlists.json', JSON.stringify(curatedPlaylists, null, 2), 'utf8');
console.log('✅ Đã lưu thành công 6 playlist vào sample-playlists.json');
