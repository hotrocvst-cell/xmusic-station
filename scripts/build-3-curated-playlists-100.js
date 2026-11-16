/**
 * scripts/build-3-curated-playlists-100.js
 * Tuyển chọn 3 danh sách phát mẫu đỉnh cao chuẩn V-Pop (100 bài / chủ đề = 300 bài):
 * 1. ⚡ Top Nhạc Việt Sôi Động & EDM Remix (100 bài)
 * 2. 🎤 Top Hit Rap Việt Thịnh Hành (100 bài)
 * 3. 🌧️ Top Ballad Cảm Xúc & Sâu Lắng (100 bài)
 * 
 * TIÊU CHÍ NGHIÊM NGẶT:
 * - Tham khảo nguồn internet (Top trending ZingMP3, NhacCuaTui, Làn Sóng Xanh, TikTok viral).
 * - CHỈ CHỌN BÀI HÁT TOP THỊNH HÀNH (nghe nhiều, quen thuộc).
 * - KHÔNG CHỌN ca sĩ xa lạ chưa có tiếng.
 * - Dữ liệu trích xuất từ 3,280 bài hát bản quyền trong scripts/all-available-songs.json.
 */

const fs = require('fs');
const path = require('path');

const allSongs = JSON.parse(fs.readFileSync(path.join(__dirname, 'all-available-songs.json'), 'utf8'));

function cleanSong(s) {
  if (!s) return null;
  return {
    key: s.key,
    title: (s.title || '').trim(),
    artists: (s.artists || []).map(a => a.trim().replace(/^,\s*/, '')).filter(Boolean),
    duration: s.duration || 0,
    kbit: s.kbit || 128,
    streamUrl: s.streamUrl || '',
    image: s.image || ''
  };
}

// Lọc bỏ beat, karaoke, nhạc cụ
function isVocal(s) {
  const g = (s.genre || '').toLowerCase();
  const t = (s.title || '').toLowerCase();
  if (g === 'beat') return false;
  if (t.includes('karaoke') || t.includes('playback') || t.includes('tập hát') || t.endsWith(' beat') || t.includes('(beat)')) return false;
  return true;
}

const UNKNOWN_BLACKLIST = [
  'audiobay', 'vmotion', 'múa rối nước', 'mộc gtar', 'pia solo', 'ruby', 'nonhanta',
  'machiot', 'quinf', 'catchellers', 'billis', 'lâu phai', 'tam vinh',
  'cậu phát', 'min min', 'cường sahara', 'hà ny', 'cassano', 'quyết tiến maz',
  'unknown'
];

function isKnownArtist(s) {
  const artStr = (s.artists || []).join(' ').toLowerCase();
  if (!artStr || artStr.length < 2) return false;
  for (const b of UNKNOWN_BLACKLIST) {
    if (artStr.includes(b)) return false;
  }
  return true;
}

const vocalSongs = allSongs.filter(s => isVocal(s) && isKnownArtist(s));

function buildList(id, name, description, priorityMatches, generalFilter, targetCount = 100) {
  const selected = [];
  const seenKeys = new Set();

  function tryAdd(s) {
    if (s && !seenKeys.has(s.key)) {
      seenKeys.add(s.key);
      selected.push(cleanSong(s));
      return true;
    }
    return false;
  }

  // 1. Add priority matches (exact song matching from top trending list)
  for (const [tKw, aKw] of priorityMatches) {
    if (selected.length >= targetCount) break;
    const tLower = tKw.toLowerCase();
    const aLower = aKw ? aKw.toLowerCase() : null;
    const match = vocalSongs.find(s => {
      const t = (s.title || '').toLowerCase();
      const a = (s.artists || []).join(' ').toLowerCase();
      return t.includes(tLower) && (!aLower || a.includes(aLower));
    });
    if (match) {
      tryAdd(match);
    }
  }

  // 2. Add from generalFilter matching theme
  for (const s of vocalSongs) {
    if (selected.length >= targetCount) break;
    if (!seenKeys.has(s.key) && generalFilter(s)) {
      tryAdd(s);
    }
  }

  console.log(`✓ [${name}]: Tuyển chọn thành công ${selected.length}/${targetCount} bài hát.`);
  return {
    id,
    name,
    description,
    createdAt: new Date().toISOString(),
    version: '2.5.0',
    songs: selected
  };
}

// =========================================================================
// 1. TOP NHẠC VIỆT SÔI ĐỘNG & EDM REMIX (100 bài)
// =========================================================================
const prioritySoidong = [
  ['Em Của Ngày Hôm Qua', 'Sơn Tùng'],
  ['Chúng Ta Không Thuộc Về Nhau', 'Sơn Tùng'],
  ['Cơn Mưa Xa Dần', 'Sơn Tùng'],
  ['Nắng Ấm Ngang Qua', 'Sơn Tùng'],
  ['Chạy Khỏi Thế Giới Này (Cukak Remix)', 'Da LAB'],
  ['Ngây Thơ (Phong Max Remix)', 'Tăng Duy Tân'],
  ['Dạ Vũ', 'Tăng Duy Tân'],
  ['Cắt Đôi Nỗi Sầu', 'Tăng Duy Tân'],
  ['Thằng nào làm em suy (Remix)', 'Freaky'],
  ['Lời Đường Mật (Remix)', 'Lyly'],
  ['Sao Hạng A', 'ANH TRAI "SAY HI"'],
  ['BẢNH', 'ANH TRAI "SAY HI"'],
  ['Catch Me If You Can', 'ANH TRAI "SAY HI"'],
  ['Tình Đầu Quá Chén', 'ANH TRAI "SAY HI"'],
  ['Ngáo Ngơ', 'ANH TRAI "SAY HI"'],
  ['I\'m Thinking About You', 'ANH TRAI "SAY HI"'],
  ['Hút', 'ANH TRAI "SAY HI"'],
  ['VỖ TAY', 'EM XINH "SAY HI"'],
  ['ĐÃ XINH LẠI CÒN THÔNG MINH', 'EM XINH "SAY HI"'],
  ['DANCIN\' MY WAY', 'TINH HÀ "SAY HI"'],
  ['MVP (MƯA VỘI PHÓNG)', 'TINH HÀ "SAY HI"'],
  ['IDNAT (IM ĐỢI NGƯỜI ANH THƯƠNG)', 'TINH HÀ "SAY HI"'],
  ['tết tình', 'TINH HÀ "SAY HI"'],
  ['CÔ ĐƠN ANH CŨNG VUI', 'TINH HÀ "SAY HI"'],
  ['Sáng Đèn', 'Changg'],
  ['Cưới Thôi', 'Masiu'],
  ['Tình Ca Tình Ta (Remix)', 'KIS'],
  ['Anh Đã Lạc Vào (Remix)', 'Green'],
  ['Thích Em Hơi Nhiều', 'Wren Evans'],
  ['Từng Là', 'Vũ Cát Tường'],
  ['Em Xinh', 'MONO'],
  ['Waiting For You', 'MONO'],
  ['Gieo Quẻ', 'Hoàng Thùy Linh'],
  ['Để Mị Nói Cho Mà Nghe', 'Hoàng Thùy Linh'],
  ['See Tình', 'Hoàng Thùy Linh'],
  ['Thương Em Là Điều Anh Không Thể Ngờ', 'Noo Phước Thịnh'],
  ['Bật Tình Yêu Lên', 'Tăng Duy Tân'],
  ['Tình Đầu', 'Tăng Duy Tân'],
  ['05 (Không Phai)', 'Tăng Duy Tân'],
  ['Hai Phút Hơn', 'Pháo'],
  ['Kẻ Cắp Gặp Bà Già', 'Hoàng Thùy Linh'],
  ['Kém Duyên', 'Rum'],
  ['Yêu Là Tha Thu', 'OnlyC'],
  ['Bống Bống Bang Bang', '365DABAND'],
  ['Sóng Gió', 'Jack'],
  ['Bạc Phận', 'Jack'],
  ['Hồng Nhan', 'Jack'],
  ['Đom Đóm', 'Jack'],
  ['Hoa Hải Đường', 'Jack'],
  ['Thức Giấc', 'Da LAB'],
  ['Thanh Xuân', 'Da LAB'],
  ['Gác Lại Âu Lo', 'Da LAB'],
  ['Một Nhà', 'Da LAB']
];

const list1 = buildList(
  'playlist-soi-dong-remix',
  '⚡ Top Nhạc Việt Sôi Động & Remix 2026',
  'Tuyển chọn 100 ca khúc V-Pop sôi động, EDM Festival, Vinahouse và Pop Dance hot nhất từ các ngôi sao hàng đầu (Sơn Tùng M-TP, Tăng Duy Tân, ANH TRAI "SAY HI", EM XINH "SAY HI", Da LAB, Cukak, Phong Max...).',
  prioritySoidong,
  (s) => {
    const t = (s.title || '').toLowerCase();
    const a = (s.artists || []).join(' ').toLowerCase();
    const h = (s.sourceHint || '').toLowerCase();
    const isDance = t.includes('remix') || t.includes('dance') || t.includes('vinahouse') || t.includes('edm') ||
                    h.includes('remix') || h.includes('sôi động') ||
                    a.includes('sơn tùng') || a.includes('tăng duy tân') || a.includes('anh trai') || a.includes('em xinh');
    return isDance;
  },
  100
);

// =========================================================================
// 2. TOP HIT RAP VIỆT THỊNH HÀNH (100 bài)
// =========================================================================
const priorityRap = [
  ['Ngủ Một Mình', 'HIEUTHUHAI'],
  ['NOLOVE', 'HIEUTHUHAI'],
  ['Cua', 'HIEUTHUHAI'],
  ['Vệ Tinh', 'HIEUTHUHAI'],
  ['Xoay Một Vòng', 'HIEUTHUHAI'],
  ['Không Thể Say', 'HIEUTHUHAI'],
  ['Bật Nhạc Lên', 'HIEUTHUHAI'],
  ['Lời Đường Mật', 'HIEUTHUHAI'],
  ['Mang Tiền Về Cho Mẹ', 'Đen'],
  ['Trốn Tìm', 'Đen'],
  ['Đi Về Nhà', 'Đen'],
  ['Bài Này Chill Phết', 'Đen'],
  ['Cho Tôi Lang Thang', 'Đen'],
  ['Hai Triệu Năm', 'Đen'],
  ['Một Triệu Like', 'Đen'],
  ['Ta Cứ Đi Cùng Nhau', 'Đen'],
  ['Lối Nhỏ', 'Đen'],
  ['Cảm Ơn', 'Đen'],
  ['Nấu Ăn Cho Em', 'Đen'],
  ['Mượn Rượu Tỏ Tình', 'BigDaddy'],
  ['Tình Yêu Màu Nắng', 'BigDaddy'],
  ['Nói Làm Gì', 'BigDaddy'],
  ['Ngõ Chạm', 'BigDaddy'],
  ['Hao Hụt', 'Pháp Kiều'],
  ['DOC', 'Pháp Kiều'],
  ['Chịu Cách Mình Nói Thua', 'RHYDER'],
  ['Chân Thành', 'RHYDER'],
  ['Ma Mị', 'HURRYKNG'],
  ['một người như thế', 'HURRYKNG'],
  ['Thằng nào làm em suy', 'Freaky'],
  ['Chậm Lại', 'Freaky'],
  ['Hề', 'Freaky'],
  ['Ánh Đèn Sân Khấu', 'Freaky'],
  ['Cung Bọ Cạp', 'Freaky'],
  ['Nghi Ngờ', 'Freaky'],
  ['Ghé Qua', 'Dick'],
  ['Sống Cho Hết Đời Thanh Xuân', 'Dick'],
  ['Tết Đong Đầy', 'Kay Trần'],
  ['Dân Biển Mà', 'Huỳnh James'],
  ['Mình Cưới Nhau Đi', 'Huỳnh James'],
  ['Quăng Tao Cái Boong', 'Huỳnh James'],
  ['Người Âm Phủ', 'OSAD'],
  ['Yêu Sắc Yếu', 'OSAD'],
  ['Túy Âm', 'Xesi'],
  ['Vô Tình', 'Xesi']
];

const list2 = buildList(
  'playlist-rap-viet-thinh-hanh',
  '🎤 Top Hit Rap Việt Thịnh Hành',
  'Tuyển chọn 100 bản Rap & Hip-Hop Việt dẫn đầu bảng xếp hạng từ các Rapper đình đám (HIEUTHUHAI, Đen Vâu, BigDaddy, Pháp Kiều, RHYDER, HURRYKNG, Freaky, Karik, JustaTee, B Ray, Dick, Huỳnh James...).',
  priorityRap,
  (s) => {
    const a = (s.artists || []).join(' ').toLowerCase();
    const t = (s.title || '').toLowerCase();
    const isRap = a.includes('hieuthuhai') || a.includes('đen') || a.includes('freaky') ||
                  a.includes('rhyder') || a.includes('pháp kiều') || a.includes('hurrykng') ||
                  a.includes('bigdaddy') || a.includes('karik') || a.includes('justatee') ||
                  a.includes('b ray') || a.includes('dick') || a.includes('huỳnh james') ||
                  a.includes('osad') || a.includes('xesi') || a.includes('kay trần') ||
                  a.includes('wren evans') || a.includes('wean') || a.includes('phúc du') ||
                  a.includes('double2t') || a.includes('tez') || a.includes('negav') ||
                  t.includes('rap') || t.includes('hiphop');
    return isRap;
  },
  100
);

// =========================================================================
// 3. TOP BALLAD CẢM XÚC & SÂU LẮNG (100 bài)
// =========================================================================
const priorityBallad = [
  ['Dấu Mưa', 'Trung Quân'],
  ['Trót Yêu', 'Trung Quân'],
  ['Chưa Bao Giờ', 'Trung Quân'],
  ['Chuyện Mưa', 'Trung Quân'],
  ['Thả Vào Mưa', 'Trung Quân'],
  ['Gọi Mưa', 'Trung Quân'],
  ['Tự Tình 2', 'Trung Quân'],
  ['Và Ngày Nào Đó', 'Trung Quân'],
  ['Những Câu Hỏi Lớn', 'Trung Quân'],
  ['Chiều Nay Không Có Mưa Bay', 'Trung Quân'],
  ['Bước Qua Mùa Cô Đơn', 'Vũ.'],
  ['Bước Qua Nhau', 'Vũ.'],
  ['Lạ Lùng', 'Vũ.'],
  ['Mùa Hè Của Em', 'Vũ.'],
  ['Đông Kiếm Em', 'Vũ.'],
  ['Anh Nhớ Ra', 'Vũ.'],
  ['Những Lời Hứa Bỏ Quên', 'Vũ.'],
  ['Lời Yêu Em', 'Vũ.'],
  ['Do Ai?', 'Vũ.'],
  ['Một Giấc Mơ', 'Vũ.'],
  ['Hơn Cả Yêu', 'Đức Phúc'],
  ['Hết Thương Cạn Nhớ', 'Đức Phúc'],
  ['Ngày Đầu Tiên', 'Đức Phúc'],
  ['Ánh Nắng Của Anh', 'Đức Phúc'],
  ['Ta Còn Yêu Nhau', 'Đức Phúc'],
  ['Cũng Đành Thôi', 'Đức Phúc'],
  ['Sau Tất Cả', 'ERIK'],
  ['Có Tất Cả Nhưng Thiếu Anh', 'ERIK'],
  ['Chạm Đáy Nỗi Đau', 'ERIK'],
  ['Em Không Sai Chúng Ta Sai', 'ERIK'],
  ['Yêu & Xa', 'ERIK'],
  ['Nàng Thơ', 'Hoàng Dũng'],
  ['Yếu Đuối', 'Hoàng Dũng'],
  ['Đôi Lời', 'Hoàng Dũng'],
  ['Nép Vào Anh Và Nghe Anh Hát', 'Hoàng Dũng'],
  ['Đoạn Kết Mới', 'Hoàng Dũng'],
  ['Một Ngàn Nỗi Đau', 'Văn Mai Hương'],
  ['Mưa Tháng Sáu', 'Văn Mai Hương'],
  ['Cầu Hôn', 'Văn Mai Hương'],
  ['Nếu Như Anh Đến', 'Văn Mai Hương'],
  ['Hương', 'Văn Mai Hương'],
  ['Nơi Tình Yêu Bắt Đầu', 'Bùi Anh Tuấn'],
  ['Hẹn Một Mai', 'Bùi Anh Tuấn'],
  ['Mơ Hồ', 'Bùi Anh Tuấn'],
  ['Có Chàng Trai Viết Lên Cây', 'Phan Mạnh Quỳnh'],
  ['Vợ Người Ta', 'Phan Mạnh Quỳnh'],
  ['Khi Người Mình Yêu Khóc', 'Phan Mạnh Quỳnh'],
  ['Từ Đó', 'Phan Mạnh Quỳnh'],
  ['Thương Em Là Điều Anh Không Thể Ngờ', 'Noo Phước Thịnh'],
  ['Chạm Khẽ Tim Anh Một Chút Thôi', 'Noo Phước Thịnh'],
  ['Gạt Đi Nước Mắt', 'Noo Phước Thịnh'],
  ['Vết Mưa', 'Vũ Cát Tường'],
  ['Mơ', 'Vũ Cát Tường'],
  ['Yêu Xa', 'Vũ Cát Tường'],
  ['Một Đêm Say', 'Thịnh Suy'],
  ['Thắc Mắc', 'Thịnh Suy'],
  ['Chuyện Rằng', 'Thịnh Suy'],
  ['Bông Hoa Đẹp Nhất', 'Quân A.P'],
  ['Còn Gì Đau Hơn Chữ Đã Từng', 'Quân A.P'],
  ['Ai Là Người Thương Em', 'Quân A.P'],
  ['Từ Thích Thích Thành Thương Thương', 'AMEE'],
  ['Sao Anh Chưa Về Nhà', 'AMEE'],
  ['Anh Nhà Ở Đâu Thế', 'AMEE'],
  ['Mặt Trời Của Em', 'Phương Ly'],
  ['Thằng Điên', 'Phương Ly'],
  ['Anh Là Ngoại Lệ Của Em', 'Phương Ly'],
  ['Missing You', 'Phương Ly'],
  ['Chạy Khỏi Thế Giới Này', 'Da LAB'],
  ['Suýt Nữa Thì', 'Andiez'],
  ['1 Phút', 'Andiez'],
  ['Bài Hát Của Em', 'Trang'],
  ['Ngã Tư Không Đèn', 'Trang'],
  ['Hẹn Bạn Hôm Khác', 'Trang'],
  ['Thư Cho Anh', 'Trang'],
  ['Bụi Hoa Giấy', 'Trang'],
  ['Từng Ngày Yêu', 'Trang']
];

const list3 = buildList(
  'playlist-ballad-cam-xuc',
  '🌧️ Top Ballad Cảm Xúc & Sâu Lắng',
  'Tuyển chọn 100 tình khúc Ballad da diết, mộc mạc và sâu lắng chạm đến trái tim từ các giọng ca vàng (Trung Quân Idol, Vũ., Đức Phúc, ERIK, Hoàng Dũng, Văn Mai Hương, Bùi Anh Tuấn, Phan Mạnh Quỳnh, Noo Phước Thịnh, AMEE, Phương Ly, Thịnh Suy...).',
  priorityBallad,
  (s) => {
    const a = (s.artists || []).join(' ').toLowerCase();
    const t = (s.title || '').toLowerCase();
    const isBalladArtist = a.includes('trung quân') || a.includes('vũ') || a.includes('đức phúc') ||
                           a.includes('erik') || a.includes('hoàng dũng') || a.includes('văn mai hương') ||
                           a.includes('bùi anh tuấn') || a.includes('phan mạnh quỳnh') || a.includes('noo phước thịnh') ||
                           a.includes('thịnh suy') || a.includes('quân a.p') || a.includes('trang') ||
                           a.includes('amee') || a.includes('phương ly') || a.includes('lâm phúc') ||
                           a.includes('minh cà ri');
    return isBalladArtist;
  },
  100
);

// Gộp 3 curated playlists (3 x 100 = 300 songs)
const allCuratedPlaylists = [list1, list2, list3];

fs.writeFileSync(
  path.join(__dirname, '../sample-playlists.json'),
  JSON.stringify(allCuratedPlaylists, null, 2) + '\n',
  'utf8'
);

console.log('\n======================================================');
console.log('🎉 ĐÃ TẠO THÀNH CÔNG sample-playlists.json VỚI 3 CHỦ ĐỀ CHUẨN:');
allCuratedPlaylists.forEach((p, idx) => {
  console.log(`  ${idx + 1}. ${p.name} (${p.songs.length} bài)`);
});
console.log(`Tổng số bài hát: ${allCuratedPlaylists.reduce((acc, p) => acc + p.songs.length, 0)} bài.`);
console.log('======================================================\n');
