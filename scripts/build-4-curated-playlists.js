/**
 * scripts/build-4-curated-playlists.js
 * Tuyển chọn 4 danh sách phát chuẩn XMusic (50 bài / chủ đề = 200 bài):
 * 1. Nhạc Việt Sôi Động (EDM, Remix, Vinahouse, Pop Dance cực sung)
 * 2. Rap Việt (Top thịnh hành Rap Việt, HIEUTHUHAI, RHYDER, Pháp Kiều, HURRYKNG, Đen, BigDaddy...)
 * 3. Ballad (Top Ballad cảm xúc: Trung Quân, Đức Phúc, Vũ., Hoàng Dũng, Văn Mai Hương, ERIK...)
 * 4. Giáng Sinh (Sôi Động) & Mùa Lễ Hội Cuối Năm
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

function isVocal(s) {
  const g = (s.genre || '').toLowerCase();
  const t = (s.title || '').toLowerCase();
  if (g === 'beat') return false;
  if (t.includes('karaoke') || t.includes('playback') || t.includes('tập hát') || t.endsWith(' beat') || t.includes('(beat)')) return false;
  return true;
}

const vocalSongs = allSongs.filter(isVocal);

function buildList(id, name, description, priorityMatches, generalFilter, targetCount = 50) {
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

  // 1. Add priority matches
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

  // 2. Add from generalFilter
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
    version: '2.4.0',
    songs: selected
  };
}

// =========================================================================
// 1. NHẠC VIỆT SÔI ĐỘNG (EDM, REMIX, VINAHOUSE, POP DANCE CỰC SUNG) (50 bài)
// =========================================================================
const prioritySoidong = [
  ['Em Của Ngày Hôm Qua', 'Sơn Tùng'],
  ['Chúng Ta Không Thuộc Về Nhau', 'Sơn Tùng'],
  ['Cơn Mưa Xa Dần', 'Sơn Tùng'],
  ['Nắng Ấm Ngang Qua', 'Sơn Tùng'],
  ['Chạy Khỏi Thế Giới Này (Cukak Remix)', 'Da LAB'],
  ['Ngây Thơ (Phong Max Remix)', 'Tăng Duy Tân'],
  ['Thằng nào làm em suy (Remix)', 'Freaky'],
  ['Lời Đường Mật (Remix)', 'Lyly'],
  ['Sao Hạng A', 'ANH TRAI "SAY HI"'],
  ['BẢNH', 'ANH TRAI "SAY HI"'],
  ['VỖ TAY', 'EM XINH "SAY HI"'],
  ['ĐÃ XINH LẠI CÒN THÔNG MINH', 'EM XINH "SAY HI"'],
  ['EM XINH EM BLING', 'EM XINH "SAY HI"'],
  ['AAA', 'EM XINH "SAY HI"'],
  ['CŨNG MAY LÀ Ế', 'ANH TRAI "SAY HI"'],
  ['MAKE UP', 'ANH TRAI "SAY HI"'],
  ['REGRET', 'ANH TRAI "SAY HI"'],
  ['ANH TRAI NƯỚC VIỆT', 'ANH TRAI "SAY HI"'],
  ['GÃ SĂN CÁ', 'EM XINH "SAY HI"'],
  ['QUAY ĐI QUAY LẠI', 'HIEUTHUHAI'],
  ['MVP (MƯA VỘI PHÓNG)', 'TINH HÀ "SAY HI"'],
  ['tết tình', 'TINH HÀ "SAY HI"'],
  ['DANCIN\' MY WAY', 'TINH HÀ "SAY HI"'],
  ['CÓ GÌ ĐÂU MÀ CAY', 'TINH HÀ "SAY HI"'],
  ['TOGETHER WE SHINE', 'TINH HÀ "SAY HI"']
];

const list1 = buildList(
  'playlist-nhac-viet-soi-dong',
  '⚡ Top Nhạc Việt Sôi Động & Remix 2026',
  'Tuyển chọn 50 bản hit nhạc Việt sôi động, EDM, Vinahouse và Dance Pop bùng nổ năng lượng nhất (Sơn Tùng M-TP, Da LAB, Tăng Duy Tân, Anh Trai Say Hi, Em Xinh Say Hi, Tam Vinh Producer...).',
  prioritySoidong,
  (s) => {
    const t = (s.title || '').toLowerCase();
    const a = (s.artists || []).join(' ').toLowerCase();
    const h = (s.sourceHint || '').toLowerCase();
    return t.includes('remix') || t.includes('vinahouse') || t.includes('edm') ||
           h.includes('sôi động') || h.includes('remix') ||
           a.includes('tam vinh') || a.includes('nonhanta') || a.includes('machiot') ||
           a.includes('sơn tùng') || a.includes('da lab') || a.includes('tăng duy tân');
  },
  50
);

// =========================================================================
// 2. RAP VIỆT (TOP THỊNH HÀNH RAP VIỆT, NGHỆ SĨ NỔI TIẾNG) (50 bài)
// =========================================================================
const priorityRap = [
  ['QUAY ĐI QUAY LẠI', 'HIEUTHUHAI'],
  ['Sao Hạng A', 'ANH TRAI "SAY HI"'],
  ['NỖI ĐAU NGÂY DẠI', 'HIEUTHUHAI'],
  ['I\'M THINKING ABOUT YOU', 'RHYDER'],
  ['SAU ĐÊM NAY', 'ANH TRAI "SAY HI"'],
  ['BẢNH', 'ANH TRAI "SAY HI"'],
  ['ANH TRAI NƯỚC VIỆT', 'ANH TRAI "SAY HI"'],
  ['Tràn Bộ Nhớ', 'Dương Domic'],
  ['ĐOẠN KỊCH CÂM', 'ANH TRAI "SAY HI"'],
  ['một người như thế', 'TINH HÀ "SAY HI"'],
  ['người trên dây', 'TINH HÀ "SAY HI"'],
  ['GENTLEMAN', 'TINH HÀ "SAY HI"'],
  ['MẤT LA BÀN', 'TINH HÀ "SAY HI"'],
  ['50 CUỘC GỌI NHỠ', 'TINH HÀ "SAY HI"'],
  ['XOAY VÒNG', 'TINH HÀ "SAY HI"'],
  ['BAD NIGHT', 'TINH HÀ "SAY HI"'],
  ['Cầu Vồng Thanh Xuân', 'OSAD'],
  ['Sự Tích Mùa Xuân', 'ICD'],
  ['Tết Đong Đầy 5', 'Freaky'],
  ['Thằng nào làm em suy', 'Freaky'],
  ['Những Cơn Mưa Dài Cuối Đông', 'BigDaddy']
];

const rapArtists = ['rap việt', 'hieuthuhai', 'đen', 'freaky', 'pháp kiều', 'hurrykng', 'rhyder', 'captain boy', 'bigdaddy', 'phúc du', 'pháo', 'tlinh', 'negav', 'tage', 'tez', '24k.right', 'double2t', 'coolkid', 'osad', 'eren', 'quinf', 'icd', 'bray', 'karik', 'suboi', 'anh trai "say hi"', 'em xinh "say hi"', 'tinh hà "say hi"'];

const list2 = buildList(
  'playlist-rap-viet-trending',
  '🎤 Top Hit Rap Việt Thịnh Hành',
  'Tuyển tập 50 ca khúc Rap Việt đỉnh cao, triệu view từ các nghệ sĩ hàng đầu (HIEUTHUHAI, RHYDER, Pháp Kiều, HURRYKNG, Đen Vâu, BigDaddy, Phúc Du, Freaky, OSAD, ICD, Anh Trai Say Hi...).',
  priorityRap,
  (s) => {
    const t = (s.title || '').toLowerCase();
    const a = (s.artists || []).join(' ').toLowerCase();
    const g = (s.genre || '').toLowerCase();
    return (g.includes('rap') || g.includes('hiphop') || rapArtists.some(ra => a.includes(ra))) &&
           !t.includes('beat') && !t.includes('karaoke');
  },
  50
);

// =========================================================================
// 3. BALLAD (TOP BALLAD CẢM XÚC, NGHỆ SĨ NỔI TIẾNG) (50 bài)
// =========================================================================
const priorityBallad = [
  ['Nơi Này Có Anh', 'Sơn Tùng'],
  ['Muộn Rồi Mà Sao Còn', 'Sơn Tùng'],
  ['CÓ CHẮC YÊU LÀ ĐÂY', 'Sơn Tùng'],
  ['Trái Đất Đẹp Nhất Khi Có Em', 'Đức Phúc'],
  ['nếu mai chia tay', 'MONSTAR'],
  ['Buồn Nốt Hôm Nay', 'Hoàng Duyên'],
  ['Chờ Em Đến', 'Hoàng Dũng'],
  ['Vì Anh Là Tình Đầu', 'Lyly'],
  ['Tặng Em', 'ERIK'],
  ['Gác Lại Âu Lo', 'Da LAB'],
  ['Nàng Thơ', 'Hoàng Dũng'],
  ['Yêu Đi Anh Ơi', 'Văn Mai Hương'],
  ['Không Lý Do', 'ERIK'],
  ['có lẽ', 'Lâu Phai'],
  ['Yêu Người Có Ước Mơ', 'buitruonglinh'],
  ['Hóa Đơn Tiền Điện', 'Thu Minh'],
  ['Là Khi Anh Có Em Bên Mình', 'Huy Lê'],
  ['Một Người Đi Một Người Quên', 'ERIK'],
  ['Có Không Giữ Mất Đừng Tìm', 'Trúc Nhân'],
  ['Mùa Đông Nhắc Tim Còn Thương', 'Hoài Lâm'],
  ['Bản Tình Ca Mùa Đông', 'Cậu Phát'],
  ['xuân vũ', 'Đức Phúc'],
  ['Tách Trà Thanh Xuân', 'Văn Mai Hương'],
  ['có hẹn với thanh xuân', 'GREY D'],
  ['CÔ ĐƠN ANH CŨNG VUI', 'TINH HÀ "SAY HI"'],
  ['THẾ GIỚI CỦA ANH', 'TINH HÀ "SAY HI"'],
  ['MỘNG DUYÊN', 'TINH HÀ "SAY HI"']
];

const balladArtists = ['trung quân', 'đức phúc', 'vũ.', 'hoàng dũng', 'văn mai hương', 'erik', 'quân a.p', 'lâm phúc', 'minh cà ri', 'buitruonglinh', 'lâu phai', 'hoài lâm', 'phan mạnh quỳnh', 'bùi anh tuấn', 'hương tràm', 'vũ cát tường', 'thịnh suy', 'trang', 'nguyễn minh cường', 'kai đinh', 'vũ thịnh', 'hồ văn cường', 'khải đăng', 'quốc thiên', 'monstar', 'grey d', 'tinh hà "say hi"'];

const list3 = buildList(
  'playlist-ballad-cam-xuc',
  '🌧️ Top Ballad Cảm Xúc & Sâu Lắng',
  '50 bản tình ca Ballad da diết, chữa lành tâm hồn qua giọng ca của các nghệ sĩ nổi tiếng (Trung Quân, Đức Phúc, Vũ., Hoàng Dũng, Văn Mai Hương, ERIK, Quân A.P, Hoài Lâm, GREY D...).',
  priorityBallad,
  (s) => {
    const t = (s.title || '').toLowerCase();
    const a = (s.artists || []).join(' ').toLowerCase();
    const g = (s.genre || '').toLowerCase();
    if (t.includes('remix') || t.includes('vinahouse') || t.includes('edm')) return false;
    return balladArtists.some(ba => a.includes(ba)) || g.includes('ballad') || t.includes('ballad') || t.includes('lofi');
  },
  50
);

// =========================================================================
// 4. GIÁNG SINH (SÔI ĐỘNG) & MÙA LỄ HỘI CUỐI NĂM (50 bài)
// =========================================================================
const priorityXmas = [
  ['ĐÊM GIÁNG SINH MÙA HẠ', 'ANH TRAI "SAY HI"'],
  ['Đông Vừa Sang Remix', 'VIET.'],
  ['Một Năm Mới Bình An', 'Sơn Tùng M-TP'],
  ['Mừng Năm Mới Đến (Happy New Year)', 'Akira Phan'],
  ['Tết Đong Đầy 5 (Remix)', 'Freaky'],
  ['Tết Đong Đầy 5', 'Freaky'],
  ['Xuân An Khang (Remix Version)', 'Khả My'],
  ['Xuân Yên Bình (Un9 Remix)', 'Hannie'],
  ['Ta Cùng Làm - Tết Càng Lớn', 'Bích Phương'],
  ['Ô Kìa Mùa Xuân Vui (Gala Nhạc Việt 15)', 'Văn Mai Hương'],
  ['Xuân Mang Tết Đến (Gala Nhạc Việt 15)', 'Bảo Anh'],
  ['Cảnh Đẹp Sapa Tuyết Rơi (Tây Bắc EDM)', 'Vmotion'],
  ['tết tình', 'TINH HÀ "SAY HI"'],
  ['MRT (feat. Xuân Định K.Y, buitruonglinh, CAPTAIN BOY & HYO)', 'TINH HÀ "SAY HI"'],
  ['01 Nhạc Nền Noel Giáng Sinh Vui Vẻ', 'AudioBay'],
  ['Mùa Đông Đã Đến', 'Hà Ny'],
  ['Bản Tình Ca Mùa Đông', 'Cậu Phát'],
  ['Là Tại Mùa Đông', 'T.R.I'],
  ['MÙA ĐÔNG GHÉ QUA', 'Cassano'],
  ['Những Cơn Mưa Dài Cuối Đông', 'BigDaddy'],
  ['Thanh Xuân Vương Trên Vai Gầy (HeineKen Remix)', 'Quyết Tiến Maz'],
  ['Asian Cheerful Party - Travel Background Music (EDM Version)', 'AudioBay'],
  ['Phuket\'s Hottest Pool Party Resorts Travel Vlog (Asian Edm)', 'Vmotion'],
  ['Exciting Lion Dance Drumming For Asian New Year', 'Múa Rối Nước Art'],
  ['Nhạc Tết Không Lời - Pháo Hoa Đêm Giao Thừa', 'AudioBay'],
  ['Nhạc Tết Không Lời - Cảnh Bắn Pháo Hoa Hoành Tráng', 'AudioBay'],
  ['Tết Đến Nơi Thật Rồi', 'Min Min'],
  ['Tết Này Yêu Thương Trọn Vẹn', 'Cường Sahara'],
  ['Cho Mùa Xuân Bên Em', 'BIN'],
  ['xuân vũ', 'Đức Phúc'],
  ['Tự Dưng Lại Tết', 'Đạt Ozy'],
  ['Sự Tích Mùa Xuân', 'Bùi Anh Tuấn'],
  ['có hẹn với thanh xuân', 'MONSTAR']
];

const list4 = buildList(
  'playlist-giang-sinh-le-hoi',
  '🎄 Giáng Sinh & Mùa Lễ Hội Sôi Động',
  'Tuyển chọn 50 bài hát chủ đề Giáng Sinh, Mùa Đông, Năm Mới và tiệc tùng lễ hội cực kỳ sôi động, rộn ràng và vui tươi (Đêm Giáng Sinh Mùa Hạ, Đông Vừa Sang Remix, Một Năm Mới Bình An, Tết Đong Đầy...).',
  priorityXmas,
  (s) => {
    const t = (s.title || '').toLowerCase();
    const a = (s.artists || []).join(' ').toLowerCase();
    return t.includes('noel') || t.includes('giáng sinh') || t.includes('christmas') ||
           t.includes('mùa đông') || t.includes('đông') || t.includes('tuyết') ||
           t.includes('năm mới') || t.includes('new year') || t.includes('tết') ||
           t.includes('xuân') || t.includes('lễ hội') || t.includes('party');
  },
  50
);

// Combine all 4 curated playlists (4 x 50 = 200 songs)
const allCuratedPlaylists = [list1, list2, list3, list4];

fs.writeFileSync(
  path.join(__dirname, '../sample-playlists.json'),
  JSON.stringify(allCuratedPlaylists, null, 2) + '\n',
  'utf8'
);

console.log('\n======================================================');
console.log('🎉 ĐÃ TẠO THÀNH CÔNG sample-playlists.json VỚI 4 CHỦ ĐỀ CHUẨN:');
allCuratedPlaylists.forEach((p, idx) => {
  console.log(`  ${idx + 1}. ${p.name} (${p.songs.length} bài)`);
});
console.log(`Tổng số bài hát: ${allCuratedPlaylists.reduce((acc, p) => acc + p.songs.length, 0)} bài.`);
console.log('======================================================\n');
