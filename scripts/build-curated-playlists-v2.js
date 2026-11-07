const fs = require('fs');
const path = require('path');

const allSongs = JSON.parse(fs.readFileSync('scripts/all-available-songs.json', 'utf8'));

function cleanSong(s) {
  if (!s) return null;
  return {
    key: s.key,
    title: (s.title || '').trim(),
    artists: (s.artists || []).map(a => a.trim()).filter(Boolean),
    duration: s.duration || 0,
    kbit: s.kbit || 128,
    streamUrl: s.streamUrl || '',
    image: s.image || ''
  };
}

function isVocal(s) {
  const g = s.genre || '';
  const t = (s.title || '').toLowerCase();
  if (g === 'Beat') return false;
  if (t.includes('karaoke') || t.includes('playback') || t.includes('tập hát') || t.endsWith(' beat')) return false;
  return true;
}

const vocalCatalog = allSongs.filter(isVocal);

// Scoring & selection helper for playlists
function curatePlaylist(id, name, description, priorityMatches, generalFilter, targetCount = 75) {
  const selectedSongs = [];
  const seenKeys = new Set();

  function tryAdd(s) {
    if (s && !seenKeys.has(s.key)) {
      seenKeys.add(s.key);
      selectedSongs.push(cleanSong(s));
      return true;
    }
    return false;
  }

  // 1. First add explicit priority tracks
  for (const [tKw, aKw] of priorityMatches) {
    const tLower = tKw.toLowerCase();
    const aLower = aKw ? aKw.toLowerCase() : null;
    const match = vocalCatalog.find(s => {
      const t = (s.title || '').toLowerCase();
      const a = (s.artists || []).join(' ').toLowerCase();
      return t.includes(tLower) && (!aLower || a.includes(aLower));
    });
    if (match) {
      tryAdd(match);
    }
  }

  // 2. Add from generalFilter until targetCount is reached
  for (const s of vocalCatalog) {
    if (selectedSongs.length >= targetCount) break;
    if (!seenKeys.has(s.key) && generalFilter(s)) {
      tryAdd(s);
    }
  }

  console.log(`[${name}] Tuyển chọn được: ${selectedSongs.length} bài hát (Mục tiêu: ${targetCount})`);

  return {
    id,
    name,
    description,
    createdAt: new Date().toISOString(),
    version: '2.2.0',
    songs: selectedSongs
  };
}

// ==========================================
// 1. TOP V-POP TRENDING & CHARTS 2026 (75 bài)
// ==========================================
const priorityTrending = [
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

const p1 = curatePlaylist(
  'playlist-trending-chart',
  '🔥 Top V-Pop Trending & Charts 2026',
  'Tuyển tập 75 ca khúc V-Pop hot nhất dẫn đầu bảng xếp hạng âm nhạc hiện nay (Sơn Tùng M-TP, HIEUTHUHAI, Anh Trai Say Hi, AMEE, Phương Ly, Tăng Duy Tân, Đức Phúc, ERIK, Văn Mai Hương...).',
  priorityTrending,
  (s) => {
    const art = (s.artists || []).join(' ').toLowerCase();
    const t = (s.title || '').toLowerCase();
    const isRemix = t.includes('remix') || t.includes('vinahouse');
    if (isRemix) return false;
    const hotArtists = ['sơn tùng', 'say hi', 'hieuthuhai', 'phương ly', 'amee', 'bích phương', 'tăng duy tân', 'đức phúc', 'erik', 'văn mai hương', 'hoàng dũng', 'buitruonglinh', 'rhyder', 'pháp kiều', 'negav', 'captain boy', 'freaky', 'da lab', 'tlinh', 'wren evans', 'mono', 'grey d', 'vũ phụng tiên', 'min', 'lou hoàng'];
    return hotArtists.some(a => art.includes(a));
  },
  75
);

// ==========================================
// 2. ACOUSTIC & COFFEE CHILL BUỔI SÁNG (75 bài)
// ==========================================
const priorityAcoustic = [
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
  ['người bán nỗi buồn', 'Trung Quân']
];

const p2 = curatePlaylist(
  'playlist-acoustic-cafe',
  '☕ Acoustic & Coffee Chill Buổi Sáng',
  'Giai điệu mộc mạc du dương của guitar, piano và acoustic chill, tạo không gian bình yên, thư thái cho quán cafe, văn phòng hoặc góc làm việc buổi sáng (75 bài hát tuyển chọn).',
  priorityAcoustic,
  (s) => {
    const t = (s.title || '').toLowerCase();
    const art = (s.artists || []).join(' ').toLowerCase();
    if (t.includes('remix') || t.includes('vinahouse') || t.includes('dance')) return false;
    return t.includes('acoustic') || t.includes('guitar') || t.includes('piano') || t.includes('chill') ||
           art.includes('mộc gtar') || art.includes('pia solo') || art.includes('vũ.') || art.includes('thịnh suy') ||
           art.includes('minh cà ri') || art.includes('vjazz') || art.includes('audiobay') || art.includes('trang');
  },
  75
);

// ==========================================
// 3. EDM & VINAHOUSE REMIX CỰC SUNG (75 bài)
// ==========================================
const priorityRemix = [
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

const p3 = curatePlaylist(
  'playlist-edm-remix',
  '⚡ EDM & Vinahouse Remix Cực Sung (High Energy)',
  'Bùng nổ năng lượng với 75 bản Vinahouse, Remix, House Lak bass căng cực sung cho phòng gym, thể thao, tiệc tùng hoặc giờ bán hàng cao điểm.',
  priorityRemix,
  (s) => {
    const t = (s.title || '').toLowerCase();
    const art = (s.artists || []).join(' ').toLowerCase();
    const g = (s.genre || '').toLowerCase();
    return g.includes('remix') || g.includes('dance') || g.includes('electronic') ||
           t.includes('remix') || t.includes('vinahouse') || t.includes('house lak') || t.includes('edm') ||
           t.includes('dj') || t.includes('mix') || art.includes('tam vinh') || art.includes('nonhanta') ||
           art.includes('machiot');
  },
  75
);

// ==========================================
// 4. BALLAD TÂM TRẠNG & LOFI SUY (75 bài)
// ==========================================
const priorityBalladSuy = [
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

const p4 = curatePlaylist(
  'playlist-ballad-suy',
  '🌧️ Ballad Tâm Trạng & Lofi Suy (Late Night)',
  'Những khúc ca sâu lắng, da diết và êm đềm cho những đêm muộn hay những ngày mưa cần khoảng lặng thư giãn, chữa lành tâm hồn (75 bài hát).',
  priorityBalladSuy,
  (s) => {
    const t = (s.title || '').toLowerCase();
    const art = (s.artists || []).join(' ').toLowerCase();
    if (t.includes('remix') || t.includes('vinahouse') || t.includes('dance')) return false;
    return t.includes('lofi') || t.includes('suy') || t.includes('buồn') || t.includes('mưa') || t.includes('đêm') ||
           t.includes('cô đơn') || t.includes('thương') || t.includes('khóc') || t.includes('tan vỡ') ||
           art.includes('lâu phai') || art.includes('trung quân') || art.includes('nguyễn minh cường') ||
           art.includes('văn mai hương') || art.includes('kai đinh') || art.includes('lâm phúc') ||
           art.includes('bảo yến') || art.includes('chí chương') || art.includes('minh cà ri');
  },
  75
);

// ==========================================
// 5. GEN Z & INDIE FOCUS FLOW (75 bài)
// ==========================================
const priorityGenZ = [
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

const p5 = curatePlaylist(
  'playlist-genz-indie',
  '🌿 Gen Z & Indie Focus Flow (Sáng Tạo & Năng Động)',
  'Giai điệu trẻ trung, tươi mới, bay bổng của làn sóng âm nhạc Gen Z & Indie Việt, khơi nguồn cảm hứng làm việc và học tập hiệu quả (75 bài hát).',
  priorityGenZ,
  (s) => {
    const t = (s.title || '').toLowerCase();
    const art = (s.artists || []).join(' ').toLowerCase();
    const g = (s.genre || '').toLowerCase();
    if (t.includes('remix') || t.includes('vinahouse')) return false;
    return g.includes('rap') || art.includes('hieuthuhai') || art.includes('tlinh') || art.includes('eren') ||
           art.includes('freaky') || art.includes('pháp kiều') || art.includes('negav') || art.includes('rhyder') ||
           art.includes('quinf') || art.includes('lamoon') || art.includes('captain boy') || art.includes('bích phương') ||
           art.includes('thịnh suy') || art.includes('amee') || art.includes('phương ly') || art.includes('say hi') ||
           art.includes('tri') || art.includes('t.r.i');
  },
  75
);

// ==========================================
// 6. POP TÌNH CA NGỌT NGÀO & YÊU ĐỜI (75 bài)
// ==========================================
const priorityLove = [
  ['Nơi Này Có Anh', 'Sơn Tùng'],
  ['CÓ CHẮC YÊU LÀ ĐÂY', 'Sơn Tùng'],
  ['Muộn Rồi Mà Sao Còn', 'Sơn Tùng'],
  ['Trái Đất Đẹp Nhất Khi Có Em', 'Đức Phúc'],
  ['Lời Đường Mật', 'HIEUTHUHAI'],
  ['ĐÃ XINH LẠI CÒN THÔNG MINH', 'Bích Phương'],
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

const p6 = curatePlaylist(
  'playlist-love-sweet',
  '🌸 Pop Tình Ca Ngọt Ngào & Yêu Đời (Happy Love)',
  'Giai điệu lãng mạn, vui tươi, ngọt ngào tràn ngập tình yêu đôi lứa, mang lại nụ cười và cảm xúc tích cực suốt cả ngày dài (75 bài hát).',
  priorityLove,
  (s) => {
    const t = (s.title || '').toLowerCase();
    const art = (s.artists || []).join(' ').toLowerCase();
    if (t.includes('remix') || t.includes('vinahouse') || t.includes('buồn') || t.includes('suy') || t.includes('khóc')) return false;
    return t.includes('yêu') || t.includes('thương') || t.includes('nắng') || t.includes('cười') || t.includes('hạnh phúc') ||
           t.includes('ngọt') || t.includes('hoa') || t.includes('bình yên') || t.includes('xinh') || t.includes('bling') ||
           art.includes('đức phúc') || art.includes('erik') || art.includes('phương ly') || art.includes('amee') ||
           art.includes('sơn tùng') || art.includes('an vũ') || art.includes('thanh tú') || art.includes('hoàng dũng');
  },
  75
);

const curatedPlaylists = [p1, p2, p3, p4, p5, p6];

console.log('\n======================================');
curatedPlaylists.forEach(p => {
  console.log(`- ${p.name}: ${p.songs.length} bài hát`);
});
console.log('======================================');

// Save to sample-playlists.json
fs.writeFileSync('sample-playlists.json', JSON.stringify(curatedPlaylists, null, 2), 'utf8');
console.log('✅ Đã lưu thành công 6 playlist x 75 bài hát vào sample-playlists.json');

