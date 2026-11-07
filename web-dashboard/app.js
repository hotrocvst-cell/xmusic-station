// app.js - Web Dashboard Controller for XMusicStation Playlist Automation v2.0.0
document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // Default configuration
  const DEFAULT_AUTH = {
    username: 'tgd111',
    password: 'mwg2025',
    autoLogin: true,
    autoPopulate: true
  };

  const DEFAULT_PLAYLISTS = [
  {
    "id": "playlist-trending-chart",
    "name": "🔥 Top V-Pop Trending & Charts 2026",
    "description": "Tuyển tập 75 ca khúc V-Pop hot nhất dẫn đầu bảng xếp hạng âm nhạc hiện nay (Sơn Tùng M-TP, HIEUTHUHAI, Anh Trai Say Hi, AMEE, Phương Ly, Tăng Duy Tân, Đức Phúc, ERIK, Văn Mai Hương...).",
    "createdAt": "2026-11-07T14:27:40.171Z",
    "version": "2.2.0",
    "songs": [
      {
        "key": "JzDZ5BW4RSTI",
        "title": "Nơi Này Có Anh",
        "artists": [
          "Sơn Tùng M-TP"
        ],
        "duration": 260,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui937/NoiNayCoAnh-SonTungMTP-4772041.mp3?st=D9UF0YaPF7HWgfJpFzl-CA&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2024/03/15/4/c/b/d/1710498649541_300.jpg"
      },
      {
        "key": "2AwsjotRy1ES",
        "title": "Muộn Rồi Mà Sao Còn",
        "artists": [
          "Sơn Tùng M-TP"
        ],
        "duration": 275,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/Believe_Audio19/MuonRoiMaSaoCon-SonTungMTP-7011803.mp3?st=ixrnqOq70dEEPrBKOcVNHA&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/04/29/9/1/f/8/1619691182261_300.jpg"
      },
      {
        "key": "Qtd3XdEr5XtP",
        "title": "Chúng Ta Không Thuộc Về Nhau",
        "artists": [
          "Sơn Tùng M-TP"
        ],
        "duration": 233,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui925/ChungTaKhongThuocVeNhau-SonTungMTP-4528181.mp3?st=WV2xEyjdlt7uhWP01vMFIg&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2024/03/15/4/c/b/d/1710499889373_300.jpg"
      },
      {
        "key": "PDQhy2jOk147",
        "title": "CÓ CHẮC YÊU LÀ ĐÂY",
        "artists": [
          "Sơn Tùng M-TP"
        ],
        "duration": 202,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2053/COCHACYEULADAY-SonTungMTP-6316913.mp3?st=JrbAOEqvq860fsv8r2D5OA&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2024/03/15/4/c/b/d/1710497543374_300.jpg"
      },
      {
        "key": "9Fd4zVvPMIbf",
        "title": "Em Của Ngày Hôm Qua",
        "artists": [
          "Sơn Tùng M-TP"
        ],
        "duration": 263,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2053/EmCuaNgayHomQua-SonTungMTP-2882720.mp3?st=Tk-kh8cqv0MIogKbIRZFJg&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2024/03/15/4/c/b/d/1710499255450_300.jpg"
      },
      {
        "key": "YRHvjaOi44LL",
        "title": "Cơn Mưa Xa Dần",
        "artists": [
          "Sơn Tùng M-TP"
        ],
        "duration": 196,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NCTSong/2304/7c/47/g45idzz37l.mp3?st=ZvdNJy7bbeqJbIxwbAezNA&e=1794577135&a=0&p=0&r=576f595de6ebaed3e188c8beed1149c0",
        "image": "https://image-cdn.nct.vn/song/2024/03/15/4/c/b/d/1710496856047_300.jpg"
      },
      {
        "key": "r2uSBXI8j8ms",
        "title": "Nắng Ấm Ngang Qua",
        "artists": [
          "Sơn Tùng M-TP"
        ],
        "duration": 195,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NCTSong/2304/56/2d/tarfef3leg.mp3?st=SpYTpXMiXb0_Xc1EKlIH5w&e=1794577135&a=0&p=0&r=576f595de6ebaed3e188c8beed1149c0",
        "image": "https://image-cdn.nct.vn/song/2024/03/15/4/c/b/d/1710496894576_300.jpg"
      },
      {
        "key": "A3Paw1blPQuR",
        "title": "QUAY ĐI QUAY LẠI",
        "artists": [
          "HIEUTHUHAI",
          "ANH TRAI \"SAY HI\""
        ],
        "duration": 210,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NCTSong/2409/55/33/8fjymv06r3.mp3?st=wHj5sEmRsw8hOfplXsrs5A&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2024/08/31/5/f/c/2/1725070519239_300.jpg"
      },
      {
        "key": "9hVrZ2qY9XqD",
        "title": "Sao Hạng A",
        "artists": [
          "ANH TRAI \"SAY HI\"",
          "HIEUTHUHAI",
          "Dương Domic",
          "Song Luân",
          "JSOL",
          "Trần Đăng Dương"
        ],
        "duration": 252,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/Warner_Audio270/SaoHangAFeatHieuthuhaiDuongDomicSongLuanJsolTranDangDuong-ANHTRAISAYHI-16206185.mp3?st=4970CUZdb_MO109HFMD71w&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2024/09/13/f/1/0/2/1726246384758_300.jpg"
      },
      {
        "key": "Mrg5s5IfnvUx",
        "title": "Lời Đường Mật (Remix)",
        "artists": [
          "Lyly",
          "HIEUTHUHAI"
        ],
        "duration": 276,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1008/LoiDuongMatRemix-LylyHIEUTHUHAI-6859730.mp3?st=7GVEWp5vB0ZW8AuWDhmfgg&e=1794568319&a=8&p=0&r=763a6e71-413f-4016-ab1e-6a274444200a",
        "image": "https://image-cdn.nct.vn/song/2020/12/03/6/a/a/3/1606987904645_300.jpg"
      },
      {
        "key": "9tnlqUId7YsA",
        "title": "ĐÃ XINH LẠI CÒN THÔNG MINH",
        "artists": [
          "EM XINH \"SAY HI\"",
          "Bích Phương",
          "Miu Lê",
          "Phương Ly",
          "Bảo Anh",
          "Orange",
          "Lyly",
          "Hoàng Duyên",
          "Chi Xê",
          "Vũ Thảo My",
          "Ngô Lan Hương",
          "LAMOON",
          "Quỳnh Anh Shyn",
          "Saabirose",
          "Liu Grace",
          "Mỹ Mỹ"
        ],
        "duration": 236,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/resa/2506/1b/63/h48wv060p1.mp3?st=gge9MSKOZIh3d9ujfCgAuw&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2025/06/02/e/b/8/e/1748842250540_300.jpg"
      },
      {
        "key": "hzxaln2Xti2U",
        "title": "EM XINH EM BLING",
        "artists": [
          "EM XINH \"SAY HI\"",
          "Pháo",
          "Phương Ly",
          "Juky San",
          "Chi Xê",
          "Hoàng Duyên"
        ],
        "duration": 202,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/resa/2506/19/07/dwwjpscho6.mp3?st=EHGdPPlz9F7WfJ8OSvsi8w&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2025/06/09/5/3/6/3/1749442857092_300.jpg"
      },
      {
        "key": "FY0A6ONtGfXn",
        "title": "Chạy Khỏi Thế Giới Này (Cukak Remix)",
        "artists": [
          "Da LAB",
          "Phương Ly"
        ],
        "duration": 294,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2023/ChayKhoiTheGioiNayCukakRemix-DaLABPhuongLy-7583822.mp3?st=f2gvYkLF2OQhXUyIjL1jzw&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2022/07/06/5/e/b/8/1657077703565_300.jpg"
      },
      {
        "key": "GhjCJqbl700Z",
        "title": "VỖ TAY",
        "artists": [
          "EM XINH \"SAY HI\"",
          "Phương Ly"
        ],
        "duration": 241,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/resa/2508/61/bf/b6kzt769ea.mp3?st=oPQJF8VH_aaag1XPdiCL1w&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2025/08/19/p/8/e/b/1755557818393_300.jpg"
      },
      {
        "key": "JPvSFraXdEAT",
        "title": "Trái Đất Đẹp Nhất Khi Có Em",
        "artists": [
          "Đức Phúc",
          "ViruSs"
        ],
        "duration": 184,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui996/TraiDatDepNhatKhiCoEm-DucPhucViruSs-6238530.mp3?st=4GvRierFfusJHickaYGLpQ&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2020/03/19/2/6/e/8/1584587405790_300.jpg"
      },
      {
        "key": "1JITUz09WzVY",
        "title": "SAU ĐÊM NAY",
        "artists": [
          "ANH TRAI \"SAY HI\"",
          "ERIK",
          "Đức Phúc",
          "Quân A.P",
          "JSOL",
          "Gemini Hùng Huỳnh"
        ],
        "duration": 291,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/Warner_Audio259/SauDemNayFeatErikDucPhucQuanApJsolHungHuynh-ANHTRAISAYHI-15770779.mp3?st=tat6rq-mHbIrqc3iQL3tTg&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2024/08/17/f/b/4/4/1723893395674_300.jpg"
      },
      {
        "key": "ZViQdtds3AH7",
        "title": "Tình Đầu Quá Chén",
        "artists": [
          "ANH TRAI \"SAY HI\"",
          "Quang Hùng MasterD",
          "Negav",
          "Pháp Kiều",
          "ERIK"
        ],
        "duration": 316,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/Warner_Audio270/TinhDauQuaChenFeatQuangHungMasterdNegavPhapKieuErik-ANHTRAISAYHI-16206182.mp3?st=sk043ivtYyvHl44GgUzyEg&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2024/09/13/f/1/0/2/1726246384758_300.jpg"
      },
      {
        "key": "ITZdSZPfW2PF",
        "title": "I'M THINKING ABOUT YOU",
        "artists": [
          "ANH TRAI \"SAY HI\"",
          "RHYDER",
          "WEAN",
          "Đức Phúc",
          "Gemini Hùng Huỳnh",
          "tlinh"
        ],
        "duration": 278,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/Warner_Audio257/IMThinkingAboutYouFeatRhyderWeanDucPhucHungHuynhTlinh-ANHTRAISAYHI-15631775.mp3?st=Ou23s_kpqQBjwcmaT5wmUA&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2024/08/09/b/d/0/0/1723211825063_300.jpg"
      },
      {
        "key": "En0MGqSieGxH",
        "title": "nếu mai chia tay",
        "artists": [
          "MONSTAR",
          "AMEE"
        ],
        "duration": 205,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1020/neumaichiatay-MONSTARAMEE-7057196.mp3?st=HL_sXXSjhq5_6hsYAvg2Og&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/07/30/a/0/c/2/1627616265915_300.jpg"
      },
      {
        "key": "iBZzLiPGcKPo",
        "title": "Ngây Thơ (Phong Max Remix)",
        "artists": [
          "Tăng Duy Tân"
        ],
        "duration": 268,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1004/NgayThoPhongMaxRemix-TangDuyTan-6689614.mp3?st=Iaf3kOvZXIoFe_Ktgv4f5A&e=1794568319&a=8&p=0&r=763a6e71-413f-4016-ab1e-6a274444200a",
        "image": "https://image-cdn.nct.vn/song/2020/09/29/a/a/f/c/1601351809763_300.jpg"
      },
      {
        "key": "1QNoCU3SK1Ud",
        "title": "Buồn Nốt Hôm Nay",
        "artists": [
          "Tăng Duy Tân"
        ],
        "duration": 197,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1003/BuonNotHomNay-TangDuyTan-6637372.mp3?st=Q9aklZshS9FUfLnrccASLQ&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2020/09/18/d/5/7/7/1600403674640_300.jpg"
      },
      {
        "key": "KNFKUBzKwmJX",
        "title": "Chờ Em Đến",
        "artists": [
          "EREN",
          "Bbynascar",
          "nVu"
        ],
        "duration": 159,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2059/ChoEmDen-ERENVietNamBbynascarnVuVietNam-41053962.mp3?st=FmqOGeyeeDwhXluqry8ohg&e=1794577137&a=0&p=0&r=a41d39994dac3234002e29a1115b89f0",
        "image": "https://image-cdn.nct.vn/song/2026/03/16/7/c/1/b/1773636970644_300.jpg"
      },
      {
        "key": "QusqRM2M6i2a",
        "title": "Thằng nào làm em suy (Remix)",
        "artists": [
          "Freaky",
          "Chúc Hỷ",
          "Eopixi",
          "King JB"
        ],
        "duration": 205,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2059/ThangNaoLamEmSuyRemix-FreakyChucHyEopixiKingJB-40994165.mp3?st=2ghiOosY223kI6zcOLxwYw&e=1794577139&a=0&p=0&r=e9d640806fdc94face6305b502720edc",
        "image": "https://image-cdn.nct.vn/song/2026/03/10/b/0/c/d/1773141426645_300.jpg"
      },
      {
        "key": "fcV0M5IUSZoH",
        "title": "Hót Hòn Họt",
        "artists": [
          "Hương Giang",
          "Saabirose",
          "D.A"
        ],
        "duration": 227,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2048/HotHonHot-HuongGiangSaabiroseDA-12441345.mp3?st=dmUbWd014zCvwRizKJFrMw&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2023/11/16/6/6/d/6/1700132010747_300.jpg"
      },
      {
        "key": "QYCxmdZwMyq7",
        "title": "Vì Anh Là Tình Đầu",
        "artists": [
          "Chí Chương",
          "Namchan"
        ],
        "duration": 261,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2059/ViAnhLaTinhDau-ChiChuongNamchan-40624039.mp3?st=rrUBxj-ENPYw_PviARDoIw&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2026/02/09/f/f/5/7/1770628117720_300.jpg"
      },
      {
        "key": "2rgIpbCEKtbX",
        "title": "If U Have A Dream",
        "artists": [
          "MIN",
          "Rtee",
          "Kai Đinh",
          "TINLE"
        ],
        "duration": 218,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1009/IfWeHaveADream-MINRTeeKaiDinh-6912036.mp3?st=9dhHHe5cABn682V-C_bN-Q&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/01/05/0/6/1/b/1609843480336_300.jpg"
      },
      {
        "key": "K2BRcdT93jok",
        "title": "Váy Hoa Nhí (Summertime)",
        "artists": [
          "Hoàng Minh Châu"
        ],
        "duration": 215,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2051/VayHoaNhiSummertime-HoangMinhChau-13605700.mp3?st=y7JDA38gmpgbiy0T7lAzzA&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2024/01/31/c/9/2/3/1706675722568_300.jpg"
      },
      {
        "key": "crcW5oD4PcUR",
        "title": "Tặng Em",
        "artists": [
          "Minh Cà Ri",
          "Tuấn"
        ],
        "duration": 234,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui999/TangEm-TuanMinhCaRi-6277241.mp3?st=rig9TtmZWgF_AV7uIf3B4Q&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2020/05/12/2/2/0/9/1589264328591_300.jpg"
      },
      {
        "key": "daOdLIxeZzRp",
        "title": "Váy Hoa Nhí",
        "artists": [
          "Hoàng Minh Châu"
        ],
        "duration": 179,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui999/VayHoaNhi-HoangMinhChau-6286711.mp3?st=9kV__J4yGI4GsV5d1FFNBA&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2020/05/27/0/b/b/a/1590552904341_300.jpg"
      },
      {
        "key": "1uWWUf6ZAHC4",
        "title": "Gác Lại Âu Lo",
        "artists": [
          "Da LAB",
          "Miu Lê"
        ],
        "duration": 282,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1001/GacLaiAuLo-DaLABMiuLe-6360815.mp3?st=bMTT8os80v2_TGWf2JXGBw&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2020/07/24/f/6/5/1/1595564868985_300.jpg"
      },
      {
        "key": "Kx3Kbih0rS5z",
        "title": "Nàng Thơ",
        "artists": [
          "Hoàng Dũng"
        ],
        "duration": 254,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1001/NangTho-HoangDung-6413381.mp3?st=AwmMjN-WMTEtNDz6VA_DfA&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2020/07/31/c/5/8/9/1596188259603_300.jpg"
      },
      {
        "key": "xqI1jfaOUztS",
        "title": "But Me Too",
        "artists": [
          "Freaky",
          "Harose"
        ],
        "duration": 188,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1001/ButMeToo-FreakyHaro-6323429.mp3?st=6FCShK1NepQeCz1gZlJF6w&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2020/07/07/a/2/2/f/1594109122957_300.jpg"
      },
      {
        "key": "pNlk1CcSUhiE",
        "title": "Yêu Đi Anh Ơi",
        "artists": [
          "Kiều Phạm",
          "RHYDER"
        ],
        "duration": 231,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1001/YeuDiAnhOi-KieuPhamQuangAnhRhyder-6332599.mp3?st=dzJtSqSegE3m6wtFDSH0kA&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2020/07/15/b/b/c/7/1594802958128_300.jpg"
      },
      {
        "key": "hYasE60B0v9P",
        "title": "Let's Talk About Love",
        "artists": [
          "Văn Mai Hương",
          "Blacka",
          "Châu Đăng Khoa"
        ],
        "duration": 242,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1025/LetsTalkAboutLove-VanMaiHuongBlackaChauDangKhoa-7124748.mp3?st=qxH2r3EgRFZu5ZkFytohlQ&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/12/30/d/f/6/5/1640846498725_300.jpg"
      },
      {
        "key": "djSI0psIaQZN",
        "title": "EM KHÔNG CÓ ƯA",
        "artists": [
          "EM XINH \"SAY HI\"",
          "Tiên Tiên",
          "Bảo Anh",
          "Ánh Sáng AZA",
          "Saabirose"
        ],
        "duration": 241,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/resa/2507/82/11/rm0sydyfl3.mp3?st=yceFbN0uHmJh3nfxCCaJFw&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2025/07/11/5/d/2/f/1752211873082_300.jpg"
      },
      {
        "key": "AmeCw2biUPcB",
        "title": "Không Lý Do",
        "artists": [
          "Vũ Phụng Tiên",
          "Hạ"
        ],
        "duration": 198,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1020/KhongLyDo-VuPhungTienHaLyAnhKhoa-7065624.mp3?st=t8Izd-QExJMXYx7wnFz9cA&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/08/10/b/2/e/0/1628560873036_300.jpg"
      },
      {
        "key": "xa5CaLd9j48J",
        "title": "The Stars (female Version)",
        "artists": [
          "ANH TRAI \"SAY HI\"",
          "Juky San",
          "Liz Kim Cương",
          "Mỹ Mỹ",
          "52Hz",
          "Pháo"
        ],
        "duration": 217,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/Warner_Audio270/TheStarsFeatJukySanLizKimCuongMyMy52hzPhaofemaleVersion-ANHTRAISAYHI-16206187.mp3?st=YjTQPRxhJiqf87bMd5M1Nw&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2024/10/02/2/a/f/2/1727859430047_300.jpg"
      },
      {
        "key": "dA7LfpmZrCJa",
        "title": "Vẫn Lit - Hội Không Nón",
        "artists": [
          "IndieK",
          "HURRYKNG",
          "CAPTAIN BOY",
          "OgeNus",
          "Strange H",
          "gung0cay",
          "Yuno BigBoi",
          "Tọi",
          "RAP VIỆT"
        ],
        "duration": 434,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/Warner_Audio181/VanLitHoiKhongNonFeatIndiekHurrykngCaptainOgenusStrangeHGung0cayYunoBigboiToi-RAPVIET-11540502.mp3?st=WD-4qxetnfsPVsCHF900YQ&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2023/09/09/9/1/e/5/1694255781566_300.jpg"
      },
      {
        "key": "ALJhFwSKaOm6",
        "title": "NOT MY FAULT",
        "artists": [
          "EM XINH \"SAY HI\"",
          "Mỹ Mỹ",
          "LyHan",
          "Liu Grace",
          "MAIQUINN"
        ],
        "duration": 245,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/resa/2507/a2/55/qy5ps38hfs.mp3?st=cgvZrUh7va1ZpCt_Qrsr9w&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2025/07/19/0/d/b/6/1752878626972_300.jpg"
      },
      {
        "key": "gio1Wqg9NlIp",
        "title": "AAA",
        "artists": [
          "EM XINH \"SAY HI\"",
          "Tiên Tiên",
          "Phương Mỹ Chi",
          "Juky San",
          "Lâm Bảo Ngọc",
          "52Hz",
          "Pháo",
          "Han Sara",
          "DANMY",
          "Muộii",
          "Ánh Sáng AZA",
          "桃子A1J",
          "LyHan",
          "MAIQUINN",
          "Châu Bùi",
          "Yeolan"
        ],
        "duration": 236,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/resa/2506/a2/bd/xp08sucoef.mp3?st=w3OD2XKahYX-VOGougNDBw&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2025/06/02/e/b/8/e/1748842250540_300.jpg"
      },
      {
        "key": "SE1G1K2nC0zu",
        "title": "NỖI ĐAU NGÂY DẠI",
        "artists": [
          "ANH TRAI \"SAY HI\"",
          "HIEUTHUHAI",
          "Đức Phúc",
          "Công Dương"
        ],
        "duration": 258,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/Warner_Audio245/NoiDauNgayDaiFeatHieuthuhaiDucPhucCongDuong-ANHTRAISAYHI-15145547.mp3?st=fKnA1xgbbUHk4UDhwZbx0w&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2024/06/25/4/4/7/1/1719253194515_300.jpg"
      },
      {
        "key": "JrgE5hVpF1zA",
        "title": "Vỡ Tan",
        "artists": [
          "Anh Trai Vượt Ngàn Chông Gai",
          "THỎ (Da LAB)",
          "Trịnh Thăng Bình",
          "Hà An Huy"
        ],
        "duration": 248,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/resa/2607/15/c1/r7dmqc52zr.mp3?st=6bQfzh2_b4GhgdRaoA4FMQ&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2026/07/06/K/m/3/z/1783309412730_300.jpg"
      },
      {
        "key": "Z0nggETbKCn5",
        "title": "Rơi Vào Tình Yêu",
        "artists": [
          "Anh Trai Vượt Ngàn Chông Gai",
          "Thái Lê Minh Hiếu"
        ],
        "duration": 152,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/resa/2607/17/5c/mmfzov2h5k.mp3?st=sa9DvbNfkkvvCPQ2fSGnnQ&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2026/07/03/I/P/r/Z/1783055620241_300.jpg"
      },
      {
        "key": "Y0McPjTTJYdQ",
        "title": "có lẽ",
        "artists": [
          "SWAN",
          "Minh Tốc & Lam"
        ],
        "duration": 208,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/resa/2604/da/cb/jkidd4cu4o.mp3?st=PYWj3tYrYFdFmlolcYJ1Ww&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2026/04/22/H/k/R/9/1776849875552_300.jpg"
      },
      {
        "key": "0ldBa1VMkozH",
        "title": "Điện Cao Thế",
        "artists": [
          "Show It All Vietnam (Tân Binh Toàn Năng)",
          "Lezii",
          "Đông Quan",
          "Văn Tâm",
          "Minh Quân",
          "Hoàng Long",
          "O.D"
        ],
        "duration": 212,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/resa/2510/45/90/lwnmt94sg1.mp3?st=u4W0y8sdwFuu8kyD-0b_8w&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2025/07/11/5/d/2/f/1752201382671_300.jpg"
      },
      {
        "key": "3FwAZw1XiCUb",
        "title": "GEN-ZNIUS (GG)",
        "artists": [
          "Show It All Vietnam (Tân Binh Toàn Năng)",
          "SWAN",
          "minhtin",
          "Văn Khang",
          "Văn Liêm",
          "Thái Lê Minh Hiếu"
        ],
        "duration": 201,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/resa/2510/d5/45/szhbcir1if.mp3?st=amsVWYawjE5nXN5JghuHmA&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2025/07/11/5/d/2/f/1752201267799_300.jpg"
      },
      {
        "key": "LpTb2jrwOvMu",
        "title": "WE LIT THE SHOW",
        "artists": [
          "Show It All Vietnam (Tân Binh Toàn Năng)",
          "Minh Hiếu",
          "BEX",
          "Lâm Anh",
          "LEON",
          "LEZII",
          "SWAN",
          "O.D",
          "PN",
          "Phi Long",
          "Hồ Đông Quan",
          "DYLAN",
          "WONBI",
          "minhtin"
        ],
        "duration": 188,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/resa/2507/5d/ca/vyun4que6t.mp3?st=UVwR2K2JLw15D9YULxyo6g&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2025/07/31/o/B/U/8/1753959247624_300.jpg"
      },
      {
        "key": "RFLY0OWbryGX",
        "title": "GƯƠNG VỠ LÀM LÀNH",
        "artists": [
          "Show It All Vietnam (Tân Binh Toàn Năng)",
          "BEX",
          "Hồ Đông Quan",
          "SWAN",
          "DYLAN",
          "LAVM",
          "WONBI",
          "minhtin",
          "Thái Lê Minh Hiếu"
        ],
        "duration": 188,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/resa/2511/29/54/xlcxpig4rm.mp3?st=WDJRoVh1pQl18yhKfpWFeQ&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2025/11/14/A/T/F/H/1763131944088_300.jpg"
      },
      {
        "key": "445mW7IuKxZw",
        "title": "ÚM BA LA",
        "artists": [
          "Show It All Vietnam (Tân Binh Toàn Năng)",
          "DYLAN",
          "O.D",
          "LAVM",
          "PN",
          "LEON",
          "WONBI",
          "Thái Lê Minh Hiếu",
          "BEX",
          "SWAN",
          "Hồ Đông Quan"
        ],
        "duration": 213,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/resa/2511/05/d3/ky3p6zr1xa.mp3?st=KIASZ8t-osut7MHRVbHEYQ&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2025/11/27/0/E/t/G/1764234728112_300.jpg"
      },
      {
        "key": "Co4NslS5s1If",
        "title": "MẤT TRÍ NHỚ TẠM THỜI",
        "artists": [
          "Show It All Vietnam (Tân Binh Toàn Năng)",
          "BEX",
          "WONBI",
          "PN",
          "O.D",
          "Lâm Anh",
          "Thái Lê Minh Hiếu",
          "LEON",
          "DYLAN"
        ],
        "duration": 198,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/resa/2512/db/28/myurshr9ej.mp3?st=u9Vp4GYeyXsIw6T4ICno0w&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2025/12/26/E/C/5/e/1766726595643_300.jpg"
      },
      {
        "key": "0lPagHRpjRBF",
        "title": "EXPOSURE",
        "artists": [
          "Show It All Vietnam (Tân Binh Toàn Năng)",
          "BEX",
          "WONBI",
          "LEON",
          "DYLAN",
          "minhtin",
          "PN"
        ],
        "duration": 182,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/resa/2509/c6/73/wojuczjam9.mp3?st=5dPxtRCKpK7uTU38Gu69zQ&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2025/10/03/q/n/c/n/1759476500771_300.jpg"
      },
      {
        "key": "6cwRB2BhzeZN",
        "title": "TAKE U HOME TONIGHT",
        "artists": [
          "Show It All Vietnam (Tân Binh Toàn Năng)",
          "DYLAN",
          "O.D",
          "LAVM",
          "PN",
          "LEON",
          "WONBI",
          "Thái Lê Minh Hiếu",
          "BEX"
        ],
        "duration": 208,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/resa/2511/25/bc/i6s1imh838.mp3?st=ZlLKLPGvYmM3DDmye3kDUg&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2025/11/21/x/S/U/N/1763704546120_300.jpg"
      },
      {
        "key": "gIJyaTpn1Nnm",
        "title": "TEMPLE",
        "artists": [
          "Show It All Vietnam (Tân Binh Toàn Năng)",
          "BEX",
          "WONBI",
          "PN",
          "O.D",
          "Lâm Anh",
          "Thái Lê Minh Hiếu",
          "LEON",
          "DYLAN"
        ],
        "duration": 213,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/resa/2601/55/10/uxc9n8qrna.mp3?st=aasWoZHnMSYolHJVhQimhw&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2026/01/09/F/c/l/u/1767962670495_300.jpg"
      },
      {
        "key": "LVHXuUZMeBEK",
        "title": "SHOW ME",
        "artists": [
          "Show It All Vietnam (Tân Binh Toàn Năng)",
          "Đông Quan",
          "BEX",
          "WONBI",
          "Minh Hiếu",
          "SWAN",
          "Hoàng Long",
          "DYLAN",
          "minhtin",
          "Đức Duy",
          "Lâm Anh",
          "PN"
        ],
        "duration": 225,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/resa/2509/98/c3/3vah0ebtux.mp3?st=7aiv_cC5eksRoa2kIcEwVQ&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2025/09/17/u/v/t/l/1758100141398_300.jpg"
      },
      {
        "key": "nu6RaDK9Eak7",
        "title": "TAKE A SHOT",
        "artists": [
          "Show It All Vietnam (Tân Binh Toàn Năng)",
          "BEX",
          "WONBI",
          "minhtin",
          "PN",
          "LEON",
          "DYLAN",
          "Hồ Đông Quan",
          "O.D",
          "LAVM",
          "SWAN",
          "Thái Lê Minh Hiếu"
        ],
        "duration": 190,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/resa/2510/52/43/iw5jfsrq7s.mp3?st=2e6wlErpRlUumx0X9WACMQ&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2025/10/14/E/s/D/Q/1760437066968_300.jpg"
      },
      {
        "key": "0v5fPaVB4qmf",
        "title": "ANH TRAI NƯỚC VIỆT",
        "artists": [
          "ANH TRAI \"SAY HI\"",
          "ERIK",
          "Đức Phúc",
          "Quân A.P",
          "JSOL",
          "Gemini Hùng Huỳnh"
        ],
        "duration": 251,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/Warner_Audio259/AnhTraiNuocVietFeatErikDucPhucQuanApJsolHungHuynh-ANHTRAISAYHI-15770775.mp3?st=_hc6jCrFQbXzGGGIWLJsqQ&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2024/08/17/f/b/4/4/1723893395674_300.jpg"
      },
      {
        "key": "2DHGAbJCbp1b",
        "title": "BẢNH",
        "artists": [
          "ANH TRAI \"SAY HI\"",
          "Anh Tú Atus",
          "Song Luân",
          "RHYDER",
          "HURRYKNG",
          "CAPTAIN BOY",
          "Quang Trung",
          "Dương Domic",
          "Anh Tú",
          "JSOL",
          "Đỗ Phú Quí",
          "Tage",
          "Phạm Đình Thái Ngân",
          "Phạm Anh Duy",
          "Gemini Hùng Huỳnh",
          "ERIK"
        ],
        "duration": 217,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/Warner_Audio243/BangFeatAnhTuAtusSongLuanRhyderHurrykngCaptainQuangTrungDuongDomicAnhTuJsolDoPhuQuiTagePhamDinhThaiNganPhamAnhDuyHungHuynh-ANHTRAISAYHI-15065466.mp3?st=Kxof2sAB-5RkGVjffYIF-g&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2024/06/15/9/3/9/1/1718396273723_300.jpg"
      },
      {
        "key": "k6WpGO5sdgOk",
        "title": "Baby Gọi Cho Anh",
        "artists": [
          "CAPTAIN BOY",
          "UMIE",
          "RAP VIỆT"
        ],
        "duration": 178,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/Warner_Audio165/BabyGoiChoAnhFeatCaptainUmie-RAPVIET-10126626.mp3?st=bdjVYHhZ00P0rAYZtUYHag&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2023/07/14/b/6/b/1/1689345321829_300.jpg"
      },
      {
        "key": "8fBWGX9hPFRW",
        "title": "GÃ SĂN CÁ",
        "artists": [
          "EM XINH \"SAY HI\"",
          "Lâm Bảo Ngọc",
          "Quỳnh Anh Shyn",
          "MAIQUINN",
          "Saabirose",
          "Quang Hùng MasterD"
        ],
        "duration": 232,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/resa/2507/fd/84/4g56qmjsg0.mp3?st=9x2NubS7cNqv04-ONlxQcw&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2025/07/01/1/4/c/4/1751334001626_300.jpg"
      },
      {
        "key": "vsof2Dbnkcis",
        "title": "QUẢ CHÍN QUÁ",
        "artists": [
          "EM XINH \"SAY HI\"",
          "52Hz",
          "Lâm Bảo Ngọc",
          "Pháo",
          "桃子A1J"
        ],
        "duration": 278,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/resa/2507/c1/7d/4nd3ryo1e4.mp3?st=j_Y6Hp3A-hz7_A3DGVLyRQ&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2025/07/19/0/d/b/6/1752878626972_300.jpg"
      },
      {
        "key": "b1oUdFyBk8Sp",
        "title": "CÁCH (YÊU ĐÚNG) ĐIỆU",
        "artists": [
          "EM XINH \"SAY HI\"",
          "Bích Phương",
          "Juky San",
          "LAMOON",
          "Mỹ Mỹ",
          "Quỳnh Anh Shyn"
        ],
        "duration": 259,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/resa/2508/ab/bd/sqicol0oxo.mp3?st=CEf9fDjv6k7mDl_PlFrDXA&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2025/08/02/c/a/5/c/1754116077508_300.jpg"
      },
      {
        "key": "PJMDWo8qSqvI",
        "title": "Tràn Bộ Nhớ",
        "artists": [
          "ANH TRAI \"SAY HI\"",
          "Dương Domic"
        ],
        "duration": 210,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/Warner_Audio265/TranBoNhoFeatDuongDomic-ANHTRAISAYHI-16027394.mp3?st=LGk5cFCklWAiOgHvh9EaZw&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2024/09/07/c/7/8/0/1725682110609_300.jpg"
      },
      {
        "key": "FKLm3ZdjI5uR",
        "title": "Yêu Người Có Ước Mơ",
        "artists": [
          "buitruonglinh"
        ],
        "duration": 296,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2032/YeuNguoiCoUocMo-buitruonglinh-8396692.mp3?st=UOEnEoPJgQ_cWr_1HH3OrA&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2022/12/15/0/3/9/2/1671089368641_300.jpg"
      },
      {
        "key": "U0iVV2HZL2XH",
        "title": "Nếu",
        "artists": [
          "Catchellers",
          "Soulient",
          "Minh Khang"
        ],
        "duration": 162,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2058/Neu-CatchellersSoulientMinhKhangTre-17060936.mp3?st=toPIpX5w9dzlqXq_R1n2vA&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2024/12/19/1/f/1/d/1734604514869_300.jpg"
      },
      {
        "key": "5ktfPL5YVWsR",
        "title": "Billion Years",
        "artists": [
          "Catchellers",
          "Soulient",
          "Minh Khang"
        ],
        "duration": 90,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2058/BillionYears-CatchellersSoulientMinhKhangTre-17060938.mp3?st=VN2aawIT9hhaPDBmPoWvig&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2024/12/19/1/f/1/d/1734604647098_300.jpg"
      },
      {
        "key": "p9RWHCldTEya",
        "title": "I'LL BE THERE",
        "artists": [
          "EM XINH \"SAY HI\"",
          "Orange",
          "Phương Mỹ Chi",
          "Han Sara",
          "LAMOON"
        ],
        "duration": 235,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/resa/2507/05/dd/8p9gnv55rl.mp3?st=X29eCMIe22qZidgvTyE0Vg&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2025/07/11/5/d/2/f/1752211873082_300.jpg"
      },
      {
        "key": "VxElKxG7k4UK",
        "title": "Lời Đường Mật",
        "artists": [
          "Lyly",
          "HIEUTHUHAI"
        ],
        "duration": 222,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1005/LoiDuongMat-LylyHIEUTHUHAI-6802155.mp3?st=4WZ0eqPxS6Dif_0TrvYhcg&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2020/11/05/4/4/6/c/1604552476279_300.jpg"
      },
      {
        "key": "QUuRbjEqXar0",
        "title": "Hóa Đơn Tiền Điện",
        "artists": [
          "Thu Minh",
          "Hoàng Dũng"
        ],
        "duration": 234,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2044/HoaDonTienDien-ThuMinhHoangDung-11100865.mp3?st=tQEELrj_IBLPhh1oAw4hgQ&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2023/08/23/9/d/5/c/1692765420951_300.jpg"
      },
      {
        "key": "lxDuygG2FF5d",
        "title": "Chạy Khỏi Thế Giới Này",
        "artists": [
          "Da LAB",
          "Phương Ly"
        ],
        "duration": 255,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2023/ChayKhoiTheGioiNay-DaLABPhuongLy-7574104.mp3?st=dKpmYzpKkMU4EoWbtV-Nig&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2022/06/27/6/d/1/7/1656334890653_300.jpg"
      },
      {
        "key": "O5qj82fh7NbG",
        "title": "Là Khi Anh Có Em Bên Mình",
        "artists": [
          "Huy Lê",
          "Minh Cà Ri"
        ],
        "duration": 240,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui997/LaKhiAnhCoEmBenMinh-HuyLeMinhCaRi-6242258.mp3?st=aIeRXwGi8r1oR5lB4De_2Q&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2020/03/31/4/6/f/c/1585623787574_300.jpg"
      },
      {
        "key": "vdXhGFEWSIMh",
        "title": "ĐOẠN KỊCH CÂM",
        "artists": [
          "ANH TRAI \"SAY HI\"",
          "CONGB",
          "Negav",
          "B Ray",
          "CODYNAMVO",
          "Phạm Đình Thái Ngân",
          "Mỹ Mỹ"
        ],
        "duration": 241,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/resa/2511/f4/eb/5yhdkqr2nz.mp3?st=FadsrrYOt47Uwhxcm73Igg&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2025/11/03/D/2/u/R/1762160793118_300.jpg"
      },
      {
        "key": "ljxRTVWmdNfT",
        "title": "CŨNG MAY LÀ Ế",
        "artists": [
          "ANH TRAI \"SAY HI\"",
          "B Ray",
          "Karik",
          "CODYNAMVO",
          "GILL",
          "Ryn Lee"
        ],
        "duration": 222,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/resa/2511/98/f0/z0qdlvettt.mp3?st=ZS_x9AjK-SxNTLqSdJxj7A&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2025/11/17/Y/f/D/T/1763353192712_300.jpg"
      },
      {
        "key": "qWmc2x35NHEk",
        "title": "MAKE UP",
        "artists": [
          "ANH TRAI \"SAY HI\"",
          "DILLAN",
          "buitruonglinh",
          "Đỗ Nam Sơn",
          "Lohan",
          "Ryn Lee",
          "Bảo Thy"
        ],
        "duration": 258,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/resa/2511/d3/53/eahs42sipx.mp3?st=SW5J3_YcUdD6H-ia5-cJ3A&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2025/11/03/D/2/u/R/1762160793118_300.jpg"
      },
      {
        "key": "0U4Pr5esABDT",
        "title": "REGRET",
        "artists": [
          "ANH TRAI \"SAY HI\"",
          "Quân A.P",
          "Pháp Kiều",
          "Quang Trung",
          "Ali Hoàng Dương",
          "Lâm Bảo Ngọc"
        ],
        "duration": 252,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/Warner_Audio256/RegretFeatQuanApPhapKieuQuangTrungAliHoangDuongLamBaoNgoc-ANHTRAISAYHI-15564775.mp3?st=4del4Okh93yiwVJT0mxECQ&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2024/08/02/6/5/b/a/1722607585053_300.jpg"
      },
      {
        "key": "QuQ5Abpdfad6",
        "title": "Đừng Phiền Anh (feat. Pháp Kiều)",
        "artists": [
          "Ali Hoàng Dương",
          "Pháp Kiều"
        ],
        "duration": 230,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2058/DungPhienAnhfeatPhapKieu-AliHoangDuongPhapKieu-36947727.mp3?st=EqK7lwof2ttoQKhhuySK-w&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2025/05/19/3/3/a/8/1747628343192_300.jpg"
      }
    ]
  },
  {
    "id": "playlist-acoustic-cafe",
    "name": "☕ Acoustic & Coffee Chill Buổi Sáng",
    "description": "Giai điệu mộc mạc du dương của guitar, piano và acoustic chill, tạo không gian bình yên, thư thái cho quán cafe, văn phòng hoặc góc làm việc buổi sáng (75 bài hát tuyển chọn).",
    "createdAt": "2026-11-07T14:27:40.179Z",
    "version": "2.2.0",
    "songs": [
      {
        "key": "EXQ7tU01R6HG",
        "title": "Em Ở Đây Mà (Acoustic Ver)",
        "artists": [
          "RUBY"
        ],
        "duration": 200,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2058/EmODayMaAcousticVer-RUBYVietNam-37112142.mp3?st=m7lDx2w0vIJzj8Ut6p6bYw&e=1794577147&a=0&p=0&r=d4d873af7a3eeb3560cc1b645c537f37",
        "image": "https://image-cdn.nct.vn/song/2025/06/09/5/3/6/3/1749454703913_300.jpg"
      },
      {
        "key": "VFlqrYD7H6BI",
        "title": "Best Friends (Tao Với Mày) [Acoustic Version]",
        "artists": [
          "tuấn việt",
          "Minh Huy",
          "Tr.D"
        ],
        "duration": 237,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2058/BestFriendsTaoVoiMayAcousticVersion-TuanVietMinhHuyTrD-36768586.mp3?st=4W5leUWZP8NPspZW5J6X2w&e=1794577147&a=0&p=0&r=d4d873af7a3eeb3560cc1b645c537f37",
        "image": "https://image-cdn.nct.vn/song/2025/05/05/0/a/e/3/1746430774610_300.jpg"
      },
      {
        "key": "z8jFgXYtQj7a",
        "title": "Không Sao Đâu (Acoustic Version)",
        "artists": [
          "WHEE!"
        ],
        "duration": 208,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2058/KhongSaoDauAcousticVersion-WHEE-35238516.mp3?st=psg_cTbsaa6XM4vE0i5bCg&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2025/02/03/2/c/2/b/1738579971236_300.jpg"
      },
      {
        "key": "rqdAx3J6jyA1",
        "title": "Mời Buồn Sang Chơi (Acoustic Version)",
        "artists": [
          "Bảo Yến Rosie",
          "Freaky",
          "Châu Đăng Khoa"
        ],
        "duration": 220,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2047/MoiBuonSangChoiAcousticVersion-BaoYenRosieFreakyChauDangKhoa-12165269.mp3?st=YNb6QVCiK2_VQRo1T02Blw&e=1794577139&a=0&p=0&r=e9d640806fdc94face6305b502720edc",
        "image": "https://image-cdn.nct.vn/song/2023/11/02/9/6/4/6/1698918654363_300.jpg"
      },
      {
        "key": "VNPqe8Hq0FRq",
        "title": "tiny love",
        "artists": [
          "Thịnh Suy"
        ],
        "duration": 158,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1024/TinyLove-ThinhSuy-7122314.mp3?st=QbVRc6flMc-0NfkLfFSGwA&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/12/03/6/8/e/4/1638519606788_300.jpg"
      },
      {
        "key": "WG0wcxnMbccF",
        "title": "Summer Vibe",
        "artists": [
          "Pay",
          "Thịnh Suy"
        ],
        "duration": 168,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1016/SummerVibe-PayVietNamThinhSuy-7030872.mp3?st=uQsc8yUXr6H51CJmNz9y-Q&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/06/09/b/d/a/0/1623212624112_300.jpg"
      },
      {
        "key": "npbSPZZ9PtXt",
        "title": "the lost kid",
        "artists": [
          "Thịnh Suy"
        ],
        "duration": 195,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1024/TheLostKid-ThinhSuy-7122331.mp3?st=SCNExeoEzcXNqznRaMK7-Q&e=1794577146&a=0&p=0&r=da95dcf22d5abc0686f5dadba2ebd80c",
        "image": "https://image-cdn.nct.vn/song/2021/12/03/6/8/e/4/1638521502802_300.jpg"
      },
      {
        "key": "W9oo8ofpi292",
        "title": "cá rim cá chô",
        "artists": [
          "Thịnh Suy"
        ],
        "duration": 177,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1024/CaRimCaCho-ThinhSuy-7122318.mp3?st=aQpmNKmk0fEBhBB_W_xrGQ&e=1794577146&a=0&p=0&r=da95dcf22d5abc0686f5dadba2ebd80c",
        "image": "https://image-cdn.nct.vn/song/2021/12/03/6/8/e/4/1638520293161_300.jpg"
      },
      {
        "key": "b6LSwSzYvgZR",
        "title": "Vẫn Thế (Rừng Việt Nam)",
        "artists": [
          "Thịnh Suy"
        ],
        "duration": 218,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1026/VanTheRungVietNam-ThinhSuy-7146924.mp3?st=bVE93-yeiWjgM5_n4wwEbA&e=1794577146&a=0&p=0&r=da95dcf22d5abc0686f5dadba2ebd80c",
        "image": "https://image-cdn.nct.vn/song/2022/03/18/b/9/6/4/1647586205473_300.jpg"
      },
      {
        "key": "fHrfgoDousN4",
        "title": "Thanh",
        "artists": [
          "Thịnh Suy"
        ],
        "duration": 162,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1015/Thanh-ThinhSuy-7010637.mp3?st=1GRrOqpB8NWQdPHCExcqTw&e=1794577146&a=0&p=0&r=da95dcf22d5abc0686f5dadba2ebd80c",
        "image": "https://image-cdn.nct.vn/song/2021/04/27/f/2/1/d/1619510027785_300.jpg"
      },
      {
        "key": "BihR01lIfZFS",
        "title": "Saigon1",
        "artists": [
          "Thịnh Suy"
        ],
        "duration": 191,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1008/Saigon1-ThinhSuy-6872645.mp3?st=nLf9YbvroLmHXipPAnfFlg&e=1794577146&a=0&p=0&r=da95dcf22d5abc0686f5dadba2ebd80c",
        "image": "https://image-cdn.nct.vn/song/2020/12/08/0/9/d/8/1607406175540_300.jpg"
      },
      {
        "key": "PYOHqKw9GimB",
        "title": "Tình Yêu Màu Nắng",
        "artists": [
          "Đoàn Thúy Trang",
          "BigDaddy"
        ],
        "duration": 285,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2037/TinhYeuMauNang-DoanThuyTrang-8899940.mp3?st=eNmxC7a0hBU4-FusHpHqfw&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2023/03/24/3/2/2/6/1679658021838_300.jpg"
      },
      {
        "key": "AmeCw2biUPcB",
        "title": "Không Lý Do",
        "artists": [
          "Vũ Phụng Tiên",
          "Hạ"
        ],
        "duration": 198,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1020/KhongLyDo-VuPhungTienHaLyAnhKhoa-7065624.mp3?st=t8Izd-QExJMXYx7wnFz9cA&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/08/10/b/2/e/0/1628560873036_300.jpg"
      },
      {
        "key": "kAOgYCUopEVC",
        "title": "Anh Yêu Nụ Cười Ấy",
        "artists": [
          "An Vũ"
        ],
        "duration": 184,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2038/AnhYeuNuCuoiAy-AnVu-9180211.mp3?st=bcZDPK202SD36j8JbMQjIQ&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2023/04/13/f/6/b/c/1681379933706_300.jpg"
      },
      {
        "key": "5IoB6SmTPxXT",
        "title": "Vài Giọt Sương Mai",
        "artists": [
          "Quinf",
          "Catchellers",
          "Billis"
        ],
        "duration": 206,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2059/VaiGiotSuongMai-QuinfCatchellersBillis-39150438.mp3?st=ZWWi47kWIAQs7OxvXIquFQ&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2025/10/27/0/2/e/b/1761561291852_300.jpg"
      },
      {
        "key": "y0XtKvMKrz55",
        "title": "Hà Nội Và Em",
        "artists": [
          "Minh Cà Ri",
          "Lâm Phúc"
        ],
        "duration": 319,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2059/HaNoiVaEm-MinhCaRiLamPhuc-40977832.mp3?st=DtSSZGjXV6GFJ9qrEwMYIg&e=1794577140&a=0&p=0&r=59e3d6c260cc80a14f91ee87290af93b",
        "image": "https://image-cdn.nct.vn/song/2026/03/09/6/a/4/4/1773054645722_300.jpg"
      },
      {
        "key": "LEy3vYptGKmC",
        "title": "Có Một Chữ 'Thương'",
        "artists": [
          "Minh Cà Ri",
          "Lâm Phúc",
          "Tú Phương"
        ],
        "duration": 279,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2059/CoMotChuThuong-MinhCaRiLamPhucTuPhuong-40977890.mp3?st=m5rWdzPA_lxPY9tRpoxveg&e=1794577140&a=0&p=0&r=59e3d6c260cc80a14f91ee87290af93b",
        "image": "https://image-cdn.nct.vn/song/2026/03/09/6/a/4/4/1773054775932_300.jpg"
      },
      {
        "key": "tBYt8tAHzpQ7",
        "title": "‘anhduong’ (Piano Version)",
        "artists": [
          "Lâm Phúc"
        ],
        "duration": 231,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2057/anhduongPianoVersion-LamPhuc-15577865.mp3?st=iRUHKpRzckqKHalmPkeiqg&e=1794577140&a=0&p=0&r=fda55a388824f6cfc8af9b3e67587e5f",
        "image": "https://image-cdn.nct.vn/song/2024/08/05/b/7/a/3/1722845653634_300.jpg"
      },
      {
        "key": "Ximw9F1jZwnT",
        "title": "Điểm Đến Lý Tưởng Cho Cuộc Hẹn Cuối Tuần (Guitar Version)",
        "artists": [
          "Mộc Gtar"
        ],
        "duration": 235,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NCTSong/2407/81/46/10fc45t0su.mp3?st=bxeUJiej59CCqH2lWLRtiA&e=1794577137&a=0&p=0&r=a41d39994dac3234002e29a1115b89f0",
        "image": "https://image-cdn.nct.vn/song/2024/07/17/8/1/2/5/08393_300.jpg"
      },
      {
        "key": "zsouw4byMWGx",
        "title": "Đan Vào Nhau Một Lát",
        "artists": [
          "(S)TRONG"
        ],
        "duration": 155,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2059/DanVaoNhauMotLat-STRONG-39948616.mp3?st=DFMyo5Zif0QuG4tydc8w2Q&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2025/12/29/2/a/9/8/1766991970392_300.jpg"
      },
      {
        "key": "IfYMlwyQfM6n",
        "title": "tết tình",
        "artists": [
          "TINH HÀ \"SAY HI\"",
          "Jaysonlei",
          "Sơn.K",
          "DILLAN",
          "Đặng Hồng Hải"
        ],
        "duration": 220,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/resa/2608/ff/da/dh081ws7js.mp3?st=iGArZwgKOzFSfoe5sk5EdA&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2026/08/14/t/8/e/K/1786702328021_300.jpg"
      },
      {
        "key": "jsXzltldRKm1",
        "title": "Trong Hẻm Nhỏ Có Anh Chờ",
        "artists": [
          "Trung Quân",
          "Bùi Anh Tuấn"
        ],
        "duration": 290,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2058/TrongHemNhoCoAnhCho-TrungQuanIdolBuiAnhTuan-35450909.mp3?st=MhGN1oC0s_xdCClvhLsQCQ&e=1794577143&a=0&p=0&r=f7c68627f5b87d9a5ef7aba0e497d5de",
        "image": "https://image-cdn.nct.vn/song/2025/02/21/8/e/9/a/1740142288438_300.jpg"
      },
      {
        "key": "DlRwGa7jJuHh",
        "title": "I Do",
        "artists": [
          "Trung Quân",
          "Bùi Anh Tuấn"
        ],
        "duration": 263,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2058/IDo-TrungQuanIdolBuiAnhTuan-35270376.mp3?st=GS-LIdToJO5J-xcuXxKLUw&e=1794577143&a=0&p=0&r=f7c68627f5b87d9a5ef7aba0e497d5de",
        "image": "https://image-cdn.nct.vn/song/2025/02/06/4/3/4/f/1738780499996_300.jpg"
      },
      {
        "key": "uvM1T4ZPDjKz",
        "title": "Người Bán Nỗi Buồn (Remix Version)",
        "artists": [
          "Phí Phương Anh",
          "Trung Quân",
          "RIN9",
          "DREAMeR"
        ],
        "duration": 328,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2056/NguoiBanNoiBuonRemixVersion-PhiPhuongAnhTrungQuanIdolRIN9DREAMeRVietNam-15448562.mp3?st=rBFwl9QoByxvmgwnjTcy8A&e=1794577143&a=0&p=0&r=f7c68627f5b87d9a5ef7aba0e497d5de",
        "image": "https://image-cdn.nct.vn/song/2024/07/23/0/2/c/e/1721710761751_300.jpg"
      },
      {
        "key": "crcW5oD4PcUR",
        "title": "Tặng Em",
        "artists": [
          "Minh Cà Ri",
          "Tuấn"
        ],
        "duration": 234,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui999/TangEm-TuanMinhCaRi-6277241.mp3?st=rig9TtmZWgF_AV7uIf3B4Q&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2020/05/12/2/2/0/9/1589264328591_300.jpg"
      },
      {
        "key": "dA7LfpmZrCJa",
        "title": "Vẫn Lit - Hội Không Nón",
        "artists": [
          "IndieK",
          "HURRYKNG",
          "CAPTAIN BOY",
          "OgeNus",
          "Strange H",
          "gung0cay",
          "Yuno BigBoi",
          "Tọi",
          "RAP VIỆT"
        ],
        "duration": 434,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/Warner_Audio181/VanLitHoiKhongNonFeatIndiekHurrykngCaptainOgenusStrangeHGung0cayYunoBigboiToi-RAPVIET-11540502.mp3?st=WD-4qxetnfsPVsCHF900YQ&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2023/09/09/9/1/e/5/1694255781566_300.jpg"
      },
      {
        "key": "FQF6oiP22fWt",
        "title": "Tiếng Piano Ru Bé Vào Giấc Ngủ Say",
        "artists": [
          "Cuti Kid"
        ],
        "duration": 260,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NCTSong/2412/cc/04/vghdsfjlho.mp3?st=vm7nqST9leXU_170FedvcA&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2024/12/24/2/1/d/5/44284_300.jpg"
      },
      {
        "key": "O5qj82fh7NbG",
        "title": "Là Khi Anh Có Em Bên Mình",
        "artists": [
          "Huy Lê",
          "Minh Cà Ri"
        ],
        "duration": 240,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui997/LaKhiAnhCoEmBenMinh-HuyLeMinhCaRi-6242258.mp3?st=aIeRXwGi8r1oR5lB4De_2Q&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2020/03/31/4/6/f/c/1585623787574_300.jpg"
      },
      {
        "key": "wOkqQPZtWxDm",
        "title": "Anh Thích Em Ý",
        "artists": [
          "Lil Zpoet",
          "Trang X.O.X.O"
        ],
        "duration": 128,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2039/AnhThichEmY-LilZPoetTrangXOXO-9466796.mp3?st=-OM-ZjQDEYx7eByREObC4Q&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2023/05/12/2/4/f/0/1683901877045_300.jpg"
      },
      {
        "key": "WPYW2FolcVng",
        "title": "Đến Giờ Cơm",
        "artists": [
          "Minh Cà Ri",
          "PiaLinh"
        ],
        "duration": 236,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2059/DenGioCom-MinhCaRiPiaLinh-40977858.mp3?st=3SDx0S79LD0wPtlkkK4_dA&e=1794577137&a=0&p=0&r=a41d39994dac3234002e29a1115b89f0",
        "image": "https://image-cdn.nct.vn/song/2026/03/09/6/a/4/4/1773054710057_300.jpg"
      },
      {
        "key": "EgY5kY4NHbyv",
        "title": "Tùng Dinh Dinh Rước Đèn Ông Sao (Nhạc Trung Thu)",
        "artists": [
          "Vmotion",
          "AudioBay"
        ],
        "duration": 233,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NCTSong/2408/38/a7/x3t9zo0z4y.mp3?st=zKpyeYvLDpynflLRQZYw7A&e=1794577137&a=0&p=0&r=a41d39994dac3234002e29a1115b89f0",
        "image": "https://image-cdn.nct.vn/song/2024/08/23/4/3/8/0/99731_300.jpg"
      },
      {
        "key": "7e9G691uDjSL",
        "title": "Nậm Nhùn Nơi Tôi Đặt Chân Đến (Sáo Mèo Tây Bắc)",
        "artists": [
          "A Phủ",
          "Wehuong",
          "AudioBay"
        ],
        "duration": 172,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NCTSong/2408/57/4d/cp2qsckkvy.mp3?st=lUwIC4fnJI5LFoPfeET69Q&e=1794577137&a=0&p=0&r=a41d39994dac3234002e29a1115b89f0",
        "image": "https://image-cdn.nct.vn/song/2024/08/23/7/d/7/9/89609_300.jpg"
      },
      {
        "key": "zT3pgYuoXEqa",
        "title": "CHILL GUYS NGON ZAI",
        "artists": [
          "ANH TRAI \"SAY HI\"",
          "BigDaddy",
          "OgeNus",
          "B Ray",
          "Phúc Du",
          "Hustlang Robber",
          "RIO",
          "Khoi Vu",
          "Lohan",
          "Bùi Duy Ngọc",
          "DILLAN",
          "Ryn Lee",
          "Hải Nam",
          "Jaysonlei",
          "CODYNAMVO",
          "Phạm Đình Thái Ngân"
        ],
        "duration": 229,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/resa/2509/4c/83/np5axqlb1i.mp3?st=j8TRF3Ol6tN7rR8OzR9rDQ&e=1794577137&a=0&p=0&r=6e33b92896ab3191d9175465972f8ce6",
        "image": "https://image-cdn.nct.vn/song/2025/09/22/8/2/H/n/1758513735386_300.jpg"
      },
      {
        "key": "KCnyEPRfYOwh",
        "title": "Trăng Sáng Soi",
        "artists": [
          "Minh Cà Ri",
          "PiaLinh"
        ],
        "duration": 255,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2059/TrangSangSoi-MinhCaRiPiaLinh-40977915.mp3?st=IJl2GtYDY7SILiA-ap3GQg&e=1794577140&a=0&p=0&r=59e3d6c260cc80a14f91ee87290af93b",
        "image": "https://image-cdn.nct.vn/song/2026/03/09/6/a/4/4/1773054839327_300.jpg"
      },
      {
        "key": "fGVM1Iwnp0jm",
        "title": "Khúc Valse Hoàng Hôn",
        "artists": [
          "Minh Cà Ri",
          "PiaLinh",
          "Lâm Phúc"
        ],
        "duration": 374,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2059/KhucValseHoangHon-MinhCaRiPiaLinhLamPhuc-40977778.mp3?st=vHNp60m-AiQcy4xzr1zUXQ&e=1794577140&a=0&p=0&r=59e3d6c260cc80a14f91ee87290af93b",
        "image": "https://image-cdn.nct.vn/song/2026/03/09/6/a/4/4/1773054558005_300.jpg"
      },
      {
        "key": "thxlA2zgplm2",
        "title": "Rằng Ta Có Bao Lâu Để Yêu",
        "artists": [
          "Minh Cà Ri",
          "Tú Phương",
          "PiaLinh"
        ],
        "duration": 267,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2059/RangTaCoBaoLauDeYeu-MinhCaRiTuPhuongPiaLinh-40977723.mp3?st=3AvLceV72Aj9zjYDE795HA&e=1794577140&a=0&p=0&r=59e3d6c260cc80a14f91ee87290af93b",
        "image": "https://image-cdn.nct.vn/song/2026/03/09/6/a/4/4/1773054463040_300.jpg"
      },
      {
        "key": "smAazNkhVMZ1",
        "title": "Tuổi Hồng Ơi (SGK Âm nhạc 5)",
        "artists": [
          "Minh Cà Ri",
          "Ngọc Khánh Chi"
        ],
        "duration": 188,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2059/TuoiHongOiSGKAmNhac5-MinhCaRiNgocKhanhChi-40977682.mp3?st=OuaiUhFNoUmyRcbZkkO56g&e=1794577140&a=0&p=0&r=59e3d6c260cc80a14f91ee87290af93b",
        "image": "https://image-cdn.nct.vn/song/2026/03/09/6/a/4/4/1773054384146_300.jpg"
      },
      {
        "key": "vj7exVDqzwnF",
        "title": "Bước Chân Của Em",
        "artists": [
          "Minh Cà Ri",
          "Ngọc Khánh Chi"
        ],
        "duration": 126,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2059/BuocChanCuaEm-MinhCaRiNgocKhanhChi-40977672.mp3?st=-NhdWF47C6qECxZwLkmFtA&e=1794577140&a=0&p=0&r=59e3d6c260cc80a14f91ee87290af93b",
        "image": "https://image-cdn.nct.vn/song/2026/03/09/6/a/4/4/1773054319659_300.jpg"
      },
      {
        "key": "69YDbRoJE2iV",
        "title": "Có một chữ Thương",
        "artists": [
          "Lâm Phúc",
          "Ngọc Khánh Chi",
          "Minh Cà Ri"
        ],
        "duration": 274,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2058/CoMotChuThuong-LamPhucNgocKhanhChiMinhCaRi-36972158.mp3?st=Lgp5qo7YmSlSsd_JqJDaDQ&e=1794577140&a=0&p=0&r=59e3d6c260cc80a14f91ee87290af93b",
        "image": "https://image-cdn.nct.vn/song/2025/05/21/0/8/a/b/1747790460954_300.jpg"
      },
      {
        "key": "nawFlrZSS5Jo",
        "title": "Đâu Phải Chỉ Là Giá Như",
        "artists": [
          "Lâm Phúc",
          "Minh Cà Ri"
        ],
        "duration": 322,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2057/DauPhaiChiLaGiaNhu-LamPhucMinhCaRi-16645620.mp3?st=9PplCuF1nmrBSAe2sHYfnA&e=1794577140&a=0&p=0&r=59e3d6c260cc80a14f91ee87290af93b",
        "image": "https://image-cdn.nct.vn/song/2024/11/05/2/0/5/4/1730780801078_300.jpg"
      },
      {
        "key": "HaWCILlHpBjP",
        "title": "Hành Trình Của Lá",
        "artists": [
          "PiaLinh",
          "Lâm Bảo Ngọc",
          "Minh Cà Ri"
        ],
        "duration": 238,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2057/HanhTrinhCuaLa-PiaLinhLamBaoNgocMinhCaRi-16236433.mp3?st=03a-luBUgwX8AX7QJ2mgFQ&e=1794577140&a=0&p=0&r=59e3d6c260cc80a14f91ee87290af93b",
        "image": "https://image-cdn.nct.vn/song/2024/09/27/b/e/b/8/1727430670911_300.jpg"
      },
      {
        "key": "kXH4gZgRksnp",
        "title": "Nhuộm Màu Hoàng Hôn Lên Tóc Em",
        "artists": [
          "Rica",
          "Minh Cà Ri",
          "Lâm Bảo Ngọc"
        ],
        "duration": 280,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2055/NhuomMauHoangHonLenTocEm-RicaMinhCaRiLamBaoNgoc-14831246.mp3?st=berWrAnAKM-CrauUwZDOhA&e=1794577140&a=0&p=0&r=59e3d6c260cc80a14f91ee87290af93b",
        "image": "https://image-cdn.nct.vn/song/2024/05/20/1/c/e/2/1716183501315_300.jpg"
      },
      {
        "key": "Hjn56ykPuBDW",
        "title": "Buổi Diễn Hôm Nay (Cô Ấy Không Đến)",
        "artists": [
          "Rica",
          "Minh Cà Ri",
          "Hồng Dương M4U"
        ],
        "duration": 357,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2055/BuoiDienHomNayCoAyKhongDen-RicaMinhCaRiHongDuongM4U-14831241.mp3?st=GwND5MKBYjj2OHs4YfRmlg&e=1794577140&a=0&p=0&r=59e3d6c260cc80a14f91ee87290af93b",
        "image": "https://image-cdn.nct.vn/song/2024/05/20/1/c/e/2/1716183447991_300.jpg"
      },
      {
        "key": "ZsBzh2bcccb8",
        "title": "14B1 - 215.93",
        "artists": [
          "Rica",
          "Minh Cà Ri"
        ],
        "duration": 177,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2055/14B121593-RicaMinhCaRi-14831226.mp3?st=14t0FmxVc8FVixn2ggRw_Q&e=1794577140&a=0&p=0&r=59e3d6c260cc80a14f91ee87290af93b",
        "image": "https://image-cdn.nct.vn/song/2024/05/20/1/c/e/2/1716183318831_300.jpg"
      },
      {
        "key": "WgOv7e90j74R",
        "title": "Giữ Hộ Anh (Intro)",
        "artists": [
          "Rica",
          "Minh Cà Ri"
        ],
        "duration": 150,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2055/GiuHoAnhIntro-RicaMinhCaRi-14831225.mp3?st=A22bFXh3gWlP2ieo3dZUcA&e=1794577140&a=0&p=0&r=59e3d6c260cc80a14f91ee87290af93b",
        "image": "https://image-cdn.nct.vn/song/2024/05/20/1/c/e/2/1716183274467_300.jpg"
      },
      {
        "key": "1JgvB2nINBKh",
        "title": "Ai Cho Em Mang Mùa Hè Của Anh Đi",
        "artists": [
          "minhthuy",
          "Minh Cà Ri",
          "Rica"
        ],
        "duration": 286,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2040/AiChoEmMangMuaHeCuaAnhDi-MinhThuyMinhCaRiRica-9545107.mp3?st=WrzFSX3yp1dO5ruCJSYLMw&e=1794577140&a=0&p=0&r=59e3d6c260cc80a14f91ee87290af93b",
        "image": "https://image-cdn.nct.vn/song/2023/05/24/b/d/9/f/1684930218696_300.jpg"
      },
      {
        "key": "RlwbE64Zg1DV",
        "title": "Cất Lại Mùa Hè Của Em",
        "artists": [
          "minhthuy",
          "Minh Cà Ri",
          "Rica"
        ],
        "duration": 192,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2040/CatLaiMuaHeCuaEm-MinhThuyMinhCaRiRica-9545106.mp3?st=tZpoMVT6qq3A1qkWg2Flrg&e=1794577140&a=0&p=0&r=59e3d6c260cc80a14f91ee87290af93b",
        "image": "https://image-cdn.nct.vn/song/2023/05/24/b/d/9/f/1684930167580_300.jpg"
      },
      {
        "key": "B7u4OnMHPmE3",
        "title": "Khúc Valse Hoàng Hôn",
        "artists": [
          "Đăng Giang",
          "minhthuy",
          "Minh Cà Ri"
        ],
        "duration": 150,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2040/KhucValseHoangHon-DangGiangMinhThuyMinhCaRi-9545105.mp3?st=UhETLWRgfkLgYoyqb1eFZA&e=1794577140&a=0&p=0&r=59e3d6c260cc80a14f91ee87290af93b",
        "image": "https://image-cdn.nct.vn/song/2023/05/24/b/d/9/f/1684930077479_300.jpg"
      },
      {
        "key": "FR7MwqKwbQRL",
        "title": "Lời Tựa",
        "artists": [
          "Rica",
          "Minh Cà Ri"
        ],
        "duration": 94,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2040/LoiTua-RicaMinhCaRi-9545104.mp3?st=5OtaiO_xoUKeGEUHZWim8Q&e=1794577140&a=0&p=0&r=59e3d6c260cc80a14f91ee87290af93b",
        "image": "https://image-cdn.nct.vn/song/2023/05/24/b/d/9/f/1684929645182_300.jpg"
      },
      {
        "key": "blbzcsCMmLZr",
        "title": "Rằng Ta Có Bao Lâu Để Yêu?",
        "artists": [
          "Tú Phương",
          "Minh Cà Ri"
        ],
        "duration": 264,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2024/RangTaCoBaoLauDeYeu-TuPhuongMinhCaRi-7609595.mp3?st=sS3s4ZwshMXn8fm_IamPiw&e=1794577140&a=0&p=0&r=59e3d6c260cc80a14f91ee87290af93b",
        "image": "https://image-cdn.nct.vn/song/2022/07/12/8/a/2/b/1657609679679_300.jpg"
      },
      {
        "key": "GByorbuFcVsV",
        "title": "Mùa Nắng Vừa Qua (Lofi Version)",
        "artists": [
          "Tú Phương",
          "Minh Cà Ri"
        ],
        "duration": 188,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1013/MuaNangVuaQuaLofiVersion-TuPhuongMinhCaRi-6955037.mp3?st=4vdoE8M5V8q6XUj2GOu_EA&e=1794577140&a=0&p=0&r=59e3d6c260cc80a14f91ee87290af93b",
        "image": "https://image-cdn.nct.vn/song/2021/03/14/0/1/e/0/1615676621759_300.jpg"
      },
      {
        "key": "91hzj3dv1uTI",
        "title": "Mùa Nắng Vừa Qua",
        "artists": [
          "Tú Phương",
          "Minh Cà Ri"
        ],
        "duration": 230,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1000/MuaNangVuaQua-TuPhuongMinhCaRi-6307725.mp3?st=HcQnTGSBvNrVlpiZVHSQIg&e=1794577140&a=0&p=0&r=59e3d6c260cc80a14f91ee87290af93b",
        "image": "https://image-cdn.nct.vn/song/2020/06/22/e/2/9/7/1592791874492_300.jpg"
      },
      {
        "key": "4VOYQbPNrFW8",
        "title": "Rơi Rớt",
        "artists": [
          "Minh Cà Ri",
          "Tuấn"
        ],
        "duration": 171,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui999/RoiRot-TuanMinhCaRi-6277245.mp3?st=KuToxyqaudqxIF5TooB3gQ&e=1794577140&a=0&p=0&r=59e3d6c260cc80a14f91ee87290af93b",
        "image": "https://image-cdn.nct.vn/song/2020/05/12/2/2/0/9/1589264420517_300.jpg"
      },
      {
        "key": "zKKyh1Y463ad",
        "title": "Vì Em",
        "artists": [
          "Minh Cà Ri",
          "Tuấn"
        ],
        "duration": 289,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui999/ViEm-TuanMinhCaRi-6277243.mp3?st=Df_ceO89S7NyPQQzjbgFzg&e=1794577140&a=0&p=0&r=59e3d6c260cc80a14f91ee87290af93b",
        "image": "https://image-cdn.nct.vn/song/2020/05/12/2/2/0/9/1589264374099_300.jpg"
      },
      {
        "key": "s3ceSi9v6TuA",
        "title": "Chim Quý Trong Lồng (Piano Version)",
        "artists": [
          "K-ICM",
          "Văn Mai Hương"
        ],
        "duration": 312,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1018/ChimQuyTrongLongPianoVersion-KICMVanMaiHuong-7051126.mp3?st=Wg7yeUk5TXlsJG0LoNNjXw&e=1794577143&a=0&p=0&r=07c728d1fbc10979898289c700d8d53c",
        "image": "https://image-cdn.nct.vn/song/2021/07/19/5/f/7/4/1626670419699_300.jpg"
      },
      {
        "key": "8B9UAoyGSVc7",
        "title": "Diễm",
        "artists": [
          "Đoàn Thúy Trang"
        ],
        "duration": 241,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2059/Diem-DoanThuyTrang-41673279.mp3?st=WXG6b4g4n_GKhN2NWghIkg&e=1794577144&a=0&p=0&r=155371077a83c7b2327d92589cd0fbc6",
        "image": "https://image-cdn.nct.vn/song/2026/05/08/b/4/d/d/1778239474768_300.jpg"
      },
      {
        "key": "nWAVb8CzvLEH",
        "title": "Đêm Trăng Xa Nhớ",
        "artists": [
          "Đoàn Thúy Trang",
          "Double2T"
        ],
        "duration": 267,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2059/DemTrangXaNho-DoanThuyTrangDouble2T-41673271.mp3?st=dtjCXnFUHZJgS4Vl6BQOlw&e=1794577144&a=0&p=0&r=155371077a83c7b2327d92589cd0fbc6",
        "image": "https://image-cdn.nct.vn/song/2026/05/08/b/4/d/d/1778239434208_300.jpg"
      },
      {
        "key": "fyEo9WR1nTvp",
        "title": "Cần Đẩu Cần Đâu",
        "artists": [
          "Đoàn Thúy Trang",
          "桃子A1J"
        ],
        "duration": 246,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2059/CanDauCanDau-DoanThuyTrangDaoTuA1J-41673243.mp3?st=ujsxgFrEUr5YPmyVFJhRlw&e=1794577144&a=0&p=0&r=155371077a83c7b2327d92589cd0fbc6",
        "image": "https://image-cdn.nct.vn/song/2026/05/08/b/4/d/d/1778239368095_300.jpg"
      },
      {
        "key": "HcidHKehQq44",
        "title": "Tình Tứ",
        "artists": [
          "Đoàn Thúy Trang"
        ],
        "duration": 213,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2059/TinhTu-DoanThuyTrang-41673225.mp3?st=-rYCq_vIfb80X9XViaa8Vw&e=1794577144&a=0&p=0&r=155371077a83c7b2327d92589cd0fbc6",
        "image": "https://image-cdn.nct.vn/song/2026/05/08/b/4/d/d/1778239299327_300.jpg"
      },
      {
        "key": "K6tVREcjZHbb",
        "title": "Tự Tình",
        "artists": [
          "Đoàn Thúy Trang"
        ],
        "duration": 201,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2059/TuTinh-DoanThuyTrang-41673220.mp3?st=BlP1YF81dV5Io3cwr8tGdA&e=1794577144&a=0&p=0&r=155371077a83c7b2327d92589cd0fbc6",
        "image": "https://image-cdn.nct.vn/song/2026/05/08/b/4/d/d/1778239253596_300.jpg"
      },
      {
        "key": "gw9h6qkQIXJ3",
        "title": "Nơi Cổ Tích Lên Ngôi",
        "artists": [
          "Đoàn Thúy Trang"
        ],
        "duration": 180,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2059/NoiCoTichLenNgoi-DoanThuyTrang-41673219.mp3?st=JvC2zXMSUi3zbomLj4YUvA&e=1794577144&a=0&p=0&r=155371077a83c7b2327d92589cd0fbc6",
        "image": "https://image-cdn.nct.vn/song/2026/05/08/b/4/d/d/1778239204843_300.jpg"
      },
      {
        "key": "JWNHE4N1wUBn",
        "title": "Nỏ Thần Tình Yêu",
        "artists": [
          "Đoàn Thúy Trang",
          "Lil Van"
        ],
        "duration": 198,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2059/NoThanTinhYeu-DoanThuyTrangLilVanVietNam-41673217.mp3?st=xCGSatmQG1RI7GCgy4NCEw&e=1794577144&a=0&p=0&r=155371077a83c7b2327d92589cd0fbc6",
        "image": "https://image-cdn.nct.vn/song/2026/05/08/b/4/d/d/1778239102707_300.jpg"
      },
      {
        "key": "i9OuQ8hIfYCJ",
        "title": "Người Đứng Dưới Mưa",
        "artists": [
          "Trang Juli"
        ],
        "duration": 232,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2059/NguoiDungDuoiMua-TrangJuli-41638489.mp3?st=9YgPWQAhbO1fhi0pibmnQg&e=1794577144&a=0&p=0&r=155371077a83c7b2327d92589cd0fbc6",
        "image": "https://image-cdn.nct.vn/song/2026/05/06/4/3/3/8/1778059677838_300.jpg"
      },
      {
        "key": "xoKLwsfto7Ug",
        "title": "Lên Rừng Xuống Biển",
        "artists": [
          "Đoàn Thúy Trang",
          "Phúc Du"
        ],
        "duration": 225,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2059/LenRungXuongBien1-DoanThuyTrangPhucDu-41621654.mp3?st=UoNAMvIUeH18amqdvNKHRQ&e=1794577144&a=0&p=0&r=155371077a83c7b2327d92589cd0fbc6",
        "image": "https://image-cdn.nct.vn/song/2026/05/05/9/1/6/8/1777960285801_300.jpg"
      },
      {
        "key": "ifmzq68WHOqz",
        "title": "Trạng Thái Mộng Mơ (Piano Version)",
        "artists": [
          "Đỗ Hoàng Long"
        ],
        "duration": 269,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2059/TrangThaiMongMoPianoVersion-DoHoangLong-41226844.mp3?st=iiWwzNcqxIVOdyX3rISeLw&e=1794577144&a=0&p=0&r=155371077a83c7b2327d92589cd0fbc6",
        "image": "https://image-cdn.nct.vn/song/2026/03/30/9/8/c/a/1774854037581_300.jpg"
      },
      {
        "key": "zffUNWJFULOv",
        "title": "Kẻ Si Tình",
        "artists": [
          "Hoàng Thống",
          "Trang Hàn"
        ],
        "duration": 255,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2059/KeSiTinh-HoangThongTrangHan-39250171.mp3?st=0xDJ0lRm4dpiY5Pjg2TKVw&e=1794577144&a=0&p=0&r=155371077a83c7b2327d92589cd0fbc6",
        "image": "https://image-cdn.nct.vn/song/2025/11/04/f/b/f/d/1762239327588_300.jpg"
      },
      {
        "key": "Hc06NzW7uYAw",
        "title": "Hai thế giới",
        "artists": [
          "Hoàng Thống",
          "Trang Hàn"
        ],
        "duration": 196,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2059/HaiTheGioi-HoangThongTrangHan-38935143.mp3?st=cCY9YyugHvLWbWyuui3OjQ&e=1794577144&a=0&p=0&r=155371077a83c7b2327d92589cd0fbc6",
        "image": "https://image-cdn.nct.vn/song/2025/10/13/8/0/9/3/1760352882186_300.jpg"
      },
      {
        "key": "3OgEgJn3n0HH",
        "title": "Khóc Thương Dòng Sông",
        "artists": [
          "Trang Anh Thơ",
          "Thắng Nguyễn"
        ],
        "duration": 364,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1025/KhocThuongDongSong-TrangAnhThoThangNguyen-7124745.mp3?st=47_FWYMH9eu1Z8VlN69dIw&e=1794577144&a=0&p=0&r=155371077a83c7b2327d92589cd0fbc6",
        "image": "https://image-cdn.nct.vn/song/2021/12/30/d/f/6/5/1640845998107_300.jpg"
      },
      {
        "key": "Q4GkyBwTnzBe",
        "title": "Chẳng Được Như Ý (Beat)",
        "artists": [
          "D-Ahn",
          "Đinh Trang"
        ],
        "duration": 204,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2058/ChangDuocNhuYBeat-DAhnDinhTrang-36928627.mp3?st=KwRxk3o3O2nEoDucCLN6Dw&e=1794577144&a=0&p=0&r=155371077a83c7b2327d92589cd0fbc6",
        "image": "https://image-cdn.nct.vn/song/2025/05/16/4/2/0/c/1747389457717_300.jpg"
      },
      {
        "key": "pR6CnS4WcygZ",
        "title": "Chẳng Được Như Ý",
        "artists": [
          "D-Ahn",
          "Đinh Trang"
        ],
        "duration": 203,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2058/ChangDuocNhuY-DAhnDinhTrang-36928615.mp3?st=tL4nY1gAowr5yXRqJ-N0JA&e=1794577144&a=0&p=0&r=155371077a83c7b2327d92589cd0fbc6",
        "image": "https://image-cdn.nct.vn/song/2025/05/16/4/2/0/c/1747389364898_300.jpg"
      },
      {
        "key": "fzFr5v7RfJxO",
        "title": "Nhớ Anh Khi Chưa Tạm Biệt",
        "artists": [
          "Thảo Trang"
        ],
        "duration": 255,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2058/NhoAnhKhiChuaTamBiet-ThaoTrang-35917186.mp3?st=puZWJb5ao9d3s-4ZXE3jRA&e=1794577144&a=0&p=0&r=155371077a83c7b2327d92589cd0fbc6",
        "image": "https://image-cdn.nct.vn/song/2025/03/10/4/6/5/b/1741617100368_300.jpg"
      },
      {
        "key": "1Ufzcu92bdVn",
        "title": "Hãy Mang Em Đi Khi Ngày Mai Có Nắng",
        "artists": [
          "Đinh Hương",
          "Đinh Trang"
        ],
        "duration": 211,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2057/HayMangEmDiKhiNgayMaiCoNang-DinhHuongDinhTrang-16582633.mp3?st=vfehZZHYpOnSljhMAXaicg&e=1794577144&a=0&p=0&r=155371077a83c7b2327d92589cd0fbc6",
        "image": "https://image-cdn.nct.vn/song/2024/10/28/0/a/d/f/1730091782878_300.jpg"
      },
      {
        "key": "YmfHl9ZLyLEt",
        "title": "Nhạc Tết Không Lời - Cảnh Bắn Pháo Hoa Hoành Tráng",
        "artists": [
          "AudioBay"
        ],
        "duration": 202,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NCTSong/2410/e6/a8/25xqn8mzee.mp3?st=I3eB_356Le49y0hk0vV3IA&e=1794577144&a=0&p=0&r=155371077a83c7b2327d92589cd0fbc6",
        "image": "https://image-cdn.nct.vn/song/2024/10/12/4/c/1/9/14108_300.jpg"
      },
      {
        "key": "QJB4GePCZRbq",
        "title": "Hôm Nay Anh Thế Nào?",
        "artists": [
          "Trang Hàn"
        ],
        "duration": 302,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2057/HomNayAnhTheNao-TrangHan-15839311.mp3?st=K8yxHgu1fLhHAeWQpGbvOg&e=1794577144&a=0&p=0&r=155371077a83c7b2327d92589cd0fbc6",
        "image": "https://image-cdn.nct.vn/song/2024/08/23/e/c/3/c/1724411242965_300.jpg"
      },
      {
        "key": "iFTqXM9GuowF",
        "title": "Ánh Trăng Trắng Ngà Ngồi Ăn Bánh Trung Thu Đêm Rằm (Nhạc Trung Thu)",
        "artists": [
          "Vmotion",
          "AudioBay"
        ],
        "duration": 307,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NCTSong/2408/08/94/d0lsr4qqlt.mp3?st=B1U9MRKzvpdiRobeErWpMA&e=1794577144&a=0&p=0&r=155371077a83c7b2327d92589cd0fbc6",
        "image": "https://image-cdn.nct.vn/song/2024/08/23/8/6/1/7/78069_300.jpg"
      }
    ]
  },
  {
    "id": "playlist-edm-remix",
    "name": "⚡ EDM & Vinahouse Remix Cực Sung (High Energy)",
    "description": "Bùng nổ năng lượng với 75 bản Vinahouse, Remix, House Lak bass căng cực sung cho phòng gym, thể thao, tiệc tùng hoặc giờ bán hàng cao điểm.",
    "createdAt": "2026-11-07T14:27:40.181Z",
    "version": "2.2.0",
    "songs": [
      {
        "key": "FZxWRLHmQ3GY",
        "title": "Có Chắc Yêu Là Đây (Remix)",
        "artists": [
          "Sơn Tùng M-TP",
          "BOMATELA"
        ],
        "duration": 226,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2045/CoChacYeuLaDayRemix-SonTungMTP-11819494.mp3?st=yTYR7NicF7gnKRx2mq8eeg&e=1794577135&a=0&p=0&r=576f595de6ebaed3e188c8beed1149c0",
        "image": "https://image-cdn.nct.vn/song/2023/09/29/b/f/c/7/1695965230747_300.jpg"
      },
      {
        "key": "6BszztPmENIh",
        "title": "Nơi Này Có Anh (Remix)",
        "artists": [
          "Sơn Tùng M-TP",
          "BOMATELA"
        ],
        "duration": 214,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2045/NoiNayCoAnhRemix-SonTungMTP-11742566.mp3?st=Q9_x-81T0gRMXPqqLMoOBg&e=1794577135&a=0&p=0&r=576f595de6ebaed3e188c8beed1149c0",
        "image": "https://image-cdn.nct.vn/song/2023/09/20/2/2/5/5/1695173221879_300.jpg"
      },
      {
        "key": "IImexCEPyaXj",
        "title": "Muộn Rồi Mà Sao Còn (Remix)",
        "artists": [
          "Sơn Tùng M-TP",
          "BOMATELA"
        ],
        "duration": 446,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2044/MuonRoiMaSaoConRemix-SonTungMTP-11525944.mp3?st=K9JZslek_FIi38v-R7axAA&e=1794577135&a=0&p=0&r=576f595de6ebaed3e188c8beed1149c0",
        "image": "https://image-cdn.nct.vn/song/2023/09/07/0/1/0/6/1694069290946_300.jpg"
      },
      {
        "key": "W4eDsyNNSZhs",
        "title": "Cơn Mưa Ngang Qua (Remix 2022)",
        "artists": [
          "Sơn Tùng M-TP"
        ],
        "duration": 233,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2053/ConMuaNgangQuaRemix2022-SonTungMTP-7606794.mp3?st=2JtEOo_mLRSTpAPRbLdZkA&e=1794577135&a=0&p=0&r=576f595de6ebaed3e188c8beed1149c0",
        "image": "https://image-cdn.nct.vn/song/2022/07/09/8/e/3/6/1657368250935_300.jpg"
      },
      {
        "key": "9EOfA2ERFuKh",
        "title": "Remember Me (Onionn Remix Countdown 2021)",
        "artists": [
          "Sơn Tùng M-TP"
        ],
        "duration": 197,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2029/RememberMeOnionnRemixCountdown2021-SonTungMTP-6971599.mp3?st=QczBKUJrS0sLFoPZzbN-wQ&e=1794577135&a=0&p=0&r=576f595de6ebaed3e188c8beed1149c0",
        "image": "https://image-cdn.nct.vn/song/2022/10/17/b/9/5/f/1666000068419_300.jpg"
      },
      {
        "key": "QusqRM2M6i2a",
        "title": "Thằng nào làm em suy (Remix)",
        "artists": [
          "Freaky",
          "Chúc Hỷ",
          "Eopixi",
          "King JB"
        ],
        "duration": 205,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2059/ThangNaoLamEmSuyRemix-FreakyChucHyEopixiKingJB-40994165.mp3?st=2ghiOosY223kI6zcOLxwYw&e=1794577139&a=0&p=0&r=e9d640806fdc94face6305b502720edc",
        "image": "https://image-cdn.nct.vn/song/2026/03/10/b/0/c/d/1773141426645_300.jpg"
      },
      {
        "key": "Y8QG9DPHDL8Q",
        "title": "Gác Lại Âu Lo (Zang Remix)",
        "artists": [
          "Da LAB",
          "Miu Lê"
        ],
        "duration": 303,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1025/GacLaiAuLoZangRemix-DaLABMiuLemZang-7128522.mp3?st=8bClYwTlYqQoqj0t8bZ2hg&e=1794568319&a=8&p=0&r=763a6e71-413f-4016-ab1e-6a274444200a",
        "image": "https://image-cdn.nct.vn/song/2022/01/24/9/2/a/5/1642993669063_300.jpg"
      },
      {
        "key": "iBZzLiPGcKPo",
        "title": "Ngây Thơ (Phong Max Remix)",
        "artists": [
          "Tăng Duy Tân"
        ],
        "duration": 268,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1004/NgayThoPhongMaxRemix-TangDuyTan-6689614.mp3?st=Iaf3kOvZXIoFe_Ktgv4f5A&e=1794568319&a=8&p=0&r=763a6e71-413f-4016-ab1e-6a274444200a",
        "image": "https://image-cdn.nct.vn/song/2020/09/29/a/a/f/c/1601351809763_300.jpg"
      },
      {
        "key": "pMMZVnHpHVJB",
        "title": "Anh Chưa Quên (House Lak)",
        "artists": [
          "Jea Nam"
        ],
        "duration": 270,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2059/AnhChuaQuenHouseLak-JeaNam-38133974.mp3?st=qqYwORdrWM32_hIzlar_CA&e=1794568319&a=8&p=0&r=763a6e71-413f-4016-ab1e-6a274444200a",
        "image": "https://image-cdn.nct.vn/song/2025/08/19/7/3/6/d/1755601282762_300.jpg"
      },
      {
        "key": "TNlOTwNsrtEH",
        "title": "Cứ Ngỡ (EDM Remix)",
        "artists": [
          "NB3 Hoài Bảo",
          "Hoàng Ly"
        ],
        "duration": 342,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui998/CuNgoEdmRemix-NB3HoaiBaoHoangLy-6267952.mp3?st=zdyT83cbuD05rB-pLULeNg&e=1794568319&a=8&p=0&r=763a6e71-413f-4016-ab1e-6a274444200a",
        "image": "https://image-cdn.nct.vn/song/2020/04/27/0/5/f/c/1587969031981_300.jpg"
      },
      {
        "key": "Ohy4U98iZGpq",
        "title": "Giọt Sương Nắng Remix",
        "artists": [
          "NamDuc",
          "Nguyễn Lê Hữu Khánh"
        ],
        "duration": 239,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui999/GiotSuongNangRemix-NamDucNguyenLeHuuKhanh-6285865.mp3?st=yPjARpHHX3MQ85mFzUSjgA&e=1794568319&a=8&p=0&r=763a6e71-413f-4016-ab1e-6a274444200a",
        "image": "https://image-cdn.nct.vn/song/2020/05/25/a/b/2/b/1590375826982_300.jpg"
      },
      {
        "key": "22uCRf2qIOLP",
        "title": "Đánh Thức Giấc Mơ (Remix Version)",
        "artists": [
          "Hàn Trương",
          "JungLy"
        ],
        "duration": 185,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1000/DanhThucGiacMoRemixVersion-HanTruongJungLy-6317034.mp3?st=9_vtcHX1rx8YNp7eWi_d2Q&e=1794568319&a=8&p=0&r=763a6e71-413f-4016-ab1e-6a274444200a",
        "image": "https://image-cdn.nct.vn/song/2020/06/30/1/1/b/4/1593510048621_300.jpg"
      },
      {
        "key": "KaaqsqZxcPMf",
        "title": "Có Chắc Là Yêu Không? (Vinahouse Remix)",
        "artists": [
          "NonHanTa"
        ],
        "duration": 280,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1003/CoChacLaYeuKhongVinahouseRemix-NonHanTa-6638576.mp3?st=HnCBueBVFD-qztA5DRUMZA&e=1794568319&a=8&p=0&r=763a6e71-413f-4016-ab1e-6a274444200a",
        "image": "https://image-cdn.nct.vn/singer/avatar/2019/07/19/2/3/b/1/1563509005550_300.jpg"
      },
      {
        "key": "QoeBAQxl5vKV",
        "title": "Thật Buồn Cho Đôi Ta (HHD Remix)",
        "artists": [
          "Quang Chợ Lầm",
          "Minh Tường"
        ],
        "duration": 292,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1002/ThatBuonChoDoiTaHhdRemix-QuangChoLamMinhTuong-6575019.mp3?st=rjgBl-fHCAe9zlj5_psD6Q&e=1794568319&a=8&p=0&r=763a6e71-413f-4016-ab1e-6a274444200a",
        "image": "https://image-cdn.nct.vn/song/2020/08/28/9/f/d/6/1598601287726_300.jpg"
      },
      {
        "key": "2PFWHbnWGEmx",
        "title": "Một Người Tương Xứng (Minh Tường x HHD Remix)",
        "artists": [
          "Quang Chợ Lầm"
        ],
        "duration": 232,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1019/MotNguoiTuongXungMinhTuongXHhdRemix-QuangChoLam-7061411.mp3?st=xCji3Q5FMzPfxPEWtOY4Xg&e=1794568319&a=8&p=0&r=763a6e71-413f-4016-ab1e-6a274444200a",
        "image": "https://image-cdn.nct.vn/song/2021/08/05/3/c/a/5/1628133232908_300.jpg"
      },
      {
        "key": "ve2UjsGTSAd5",
        "title": "Yêu Xa Thôi Mà Remix",
        "artists": [
          "Yul Lee"
        ],
        "duration": 184,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1002/YeuXaThoiMaRemix-YulLee-6556574.mp3?st=9-KIq3a7KeqqE9_zbyNKHw&e=1794568319&a=8&p=0&r=763a6e71-413f-4016-ab1e-6a274444200a",
        "image": "https://image-cdn.nct.vn/song/2020/08/25/d/8/b/5/1598345657808_300.jpg"
      },
      {
        "key": "t4qMzz7Du8pD",
        "title": "Anh Đây Đã Quá Khờ Remix",
        "artists": [
          "Gin-B Nguyễn"
        ],
        "duration": 227,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1002/AnhDayDaQuaKhoRemix-AnNam-6575335.mp3?st=U1AbYEjhgSyv-ca7Qqxh5Q&e=1794568319&a=8&p=0&r=763a6e71-413f-4016-ab1e-6a274444200a",
        "image": "https://image-cdn.nct.vn/song/2021/10/04/0/2/9/6/1633336771256_300.jpg"
      },
      {
        "key": "SfVJeAV2mGSo",
        "title": "2 Năm Sao Em Nỡ (Qrinn Remix)",
        "artists": [
          "TLong"
        ],
        "duration": 250,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1025/2NamSaoEmNoQrinnRemix-TLong-7126272.mp3?st=gtoaI_88qj1bMFOvIJpwvg&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2022/01/08/9/f/7/b/1641613490052_300.jpg"
      },
      {
        "key": "jiW7Vvjzf8Ss",
        "title": "Em Đi Đâu (Freak D Remix)",
        "artists": [
          "Machiot",
          "Freak D"
        ],
        "duration": 182,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui996/EmDiDauFreakDRemix-MachiotFreakD-6237587.mp3?st=G09UoiYJe00uMou46qFGXw&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2020/03/16/d/2/1/a/1584322841753_300.jpg"
      },
      {
        "key": "VLAGE4PTnXZa",
        "title": "SI EM",
        "artists": [
          "Thanh Tú"
        ],
        "duration": 201,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2059/SIEM-ThanhTu-40641923.mp3?st=euQf-7vzC0iqTojyJPhO5A&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2026/02/10/6/a/c/6/1770715705598_300.jpg"
      },
      {
        "key": "QUXNNFM8WJfK",
        "title": "ĐẶT CÁI TÊN EM LÊN HÀNG ĐẦU",
        "artists": [
          "Cassano"
        ],
        "duration": 195,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2058/DATCAITENEMLENHANGDAU-Cassano-35312888.mp3?st=Tof63B9KXHF_SjpJIEOaUA&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2025/02/07/a/8/5/0/1738922208308_300.jpg"
      },
      {
        "key": "KMJzsE6qOb08",
        "title": "Baby I'm Good (Jsdrmns Remix)",
        "artists": [
          "Kim Chi Sun",
          "Jsdrmns"
        ],
        "duration": 263,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui999/BabyImGoodJsdrmnsRemix-KimChiSunJsdrmns-6287534.mp3?st=7z1W1QDaNo4swIQi0tBM5A&e=1794568319&a=8&p=0&r=763a6e71-413f-4016-ab1e-6a274444200a",
        "image": "https://image-cdn.nct.vn/song/2020/05/29/a/7/1/5/1590735656391_300.jpg"
      },
      {
        "key": "KhhlwmNMt0Zv",
        "title": "Lỡ Duyên Vậy Thôi (ChungQ x HHD Remix)",
        "artists": [
          "Trần Minh Vũ",
          "Khả Huy"
        ],
        "duration": 257,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1019/LoDuyenVayThoiChungqXHhdRemix-TranMinhVuKhaHuy-7061387.mp3?st=Ah0xBEb6IZLmDLYH4YsqIQ&e=1794568319&a=8&p=0&r=763a6e71-413f-4016-ab1e-6a274444200a",
        "image": "https://image-cdn.nct.vn/song/2021/08/05/3/c/a/5/1628131016229_300.jpg"
      },
      {
        "key": "nCoHxnUpElbO",
        "title": "Lạc Vào Em (Remix)",
        "artists": [
          "Lê Vũ"
        ],
        "duration": 187,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2029/LacVaoEmRemix-LeVuTre-8019784.mp3?st=rmNzKV5APZPA9xjRfZ2_Dw&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2022/10/05/2/3/6/c/1664962948204_300.jpg"
      },
      {
        "key": "OKgLsFkaz03e",
        "title": "Vọng Phu (Remix Version)",
        "artists": [
          "Vũ Phan Dương Ninh"
        ],
        "duration": 162,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1021/VongPhuRemixVersion-VuPhanDuongNinh-7080244.mp3?st=b1pcIQoS8I5oHOggSnERNg&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/09/02/8/9/0/5/1630551832086_300.jpg"
      },
      {
        "key": "0RquGIB484XK",
        "title": "Như Giấc Mơ",
        "artists": [
          "Machiot"
        ],
        "duration": 176,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1000/NhuGiacMo-Machiot-6301157.mp3?st=dTpDtU-eB_KgmCZGfzolVQ&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2020/06/17/9/4/7/9/1592367923970_300.jpg"
      },
      {
        "key": "hNs4siRgtSxP",
        "title": "Tuyệt Sắc (Orinn Remix)",
        "artists": [
          "NamDuc"
        ],
        "duration": 196,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1003/TuyetSacOrinnRemix-NamDuc-6608000.mp3?st=Iic6y1CyMGjcjDFnRAfjbw&e=1794568319&a=8&p=0&r=763a6e71-413f-4016-ab1e-6a274444200a",
        "image": "https://image-cdn.nct.vn/song/2020/09/08/c/3/c/2/1599555417100_300.jpg"
      },
      {
        "key": "J6a2LUuJyloD",
        "title": "Nhớ Về Em (HHD Remix)",
        "artists": [
          "Quang Minh"
        ],
        "duration": 198,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1004/NhoVeEmHhdRemix-NguyenQuangMinh-6652264.mp3?st=Zm3Vga48CPGX6fgSou1POQ&e=1794568319&a=8&p=0&r=763a6e71-413f-4016-ab1e-6a274444200a",
        "image": "https://image-cdn.nct.vn/song/2020/09/22/8/6/c/e/1600748606863_300.jpg"
      },
      {
        "key": "BnscWaeSDqMK",
        "title": "Bình Yên Kẻ Si Tình Remix",
        "artists": [
          "Ngân Giang"
        ],
        "duration": 250,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1004/BinhYenKeSiTinhRemix-NganGiangNhim-6722523.mp3?st=7G71Xw-oiZSEiPvHkakitw&e=1794568319&a=8&p=0&r=763a6e71-413f-4016-ab1e-6a274444200a",
        "image": "https://image-cdn.nct.vn/song/2020/10/08/f/a/6/e/1602132063465_300.jpg"
      },
      {
        "key": "FpSyNjwloLjH",
        "title": "Người Yêu Tôi Đó (Remix Version)",
        "artists": [
          "Vin Thái Bảo"
        ],
        "duration": 360,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1005/NguoiYeuToiDoRemixVersion-VinThaiBao-6759261.mp3?st=Ocr7lvW-ZFuN9QIEvaXwOQ&e=1794568319&a=8&p=0&r=763a6e71-413f-4016-ab1e-6a274444200a",
        "image": "https://image-cdn.nct.vn/song/2020/10/26/4/3/b/8/1603696310110_300.jpg"
      },
      {
        "key": "p2FwZLgyFW8k",
        "title": "Chẳng Thể Nhớ Em Remix",
        "artists": [
          "NonHanTa"
        ],
        "duration": 253,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1005/ChangTheNhoEmRemix-NonHanTa-6771187.mp3?st=fWbRJI2lpfkhtnN77UbJWg&e=1794568319&a=8&p=0&r=763a6e71-413f-4016-ab1e-6a274444200a",
        "image": "https://image-cdn.nct.vn/song/2020/10/29/5/4/e/e/1603961352001_300.jpg"
      },
      {
        "key": "cOXRR6nKGaaA",
        "title": "Yêu Sâu Đậm Sẽ Mang Sai Lầm (Heineken Remix)",
        "artists": [
          "Hiếu Adobe"
        ],
        "duration": 411,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1005/YeuSauDamSeMangSaiLamHeinekenRemix-HieuAdobe-6792484.mp3?st=oWJ81AzGExhIdF_20hPYaA&e=1794568319&a=8&p=0&r=763a6e71-413f-4016-ab1e-6a274444200a",
        "image": "https://image-cdn.nct.vn/song/2020/11/03/d/a/8/9/1604392920801_300.jpg"
      },
      {
        "key": "4gx7LOvIWWJZ",
        "title": "Tệ Quá Đi Thôi (Remix)",
        "artists": [
          "Deus Tiến Đạt"
        ],
        "duration": 186,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1006/TeQuaDiThoiRemix-DeusTienDat-6819967.mp3?st=45jy8c_X2pzZ7wLVjhtW3g&e=1794568319&a=8&p=0&r=763a6e71-413f-4016-ab1e-6a274444200a",
        "image": "https://image-cdn.nct.vn/song/2020/11/17/b/e/e/2/1605585977058_300.jpg"
      },
      {
        "key": "joQJcDfSEZsp",
        "title": "Từng Một Người Yêu Em Remix",
        "artists": [
          "NonHanTa"
        ],
        "duration": 243,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1006/TungMotNguoiYeuEmRemix-NonHanTa-6812279.mp3?st=q5vv7Yi1QSNv_g4FnPgdDA&e=1794568319&a=8&p=0&r=763a6e71-413f-4016-ab1e-6a274444200a",
        "image": "https://image-cdn.nct.vn/song/2020/11/13/b/0/9/1/1605237805727_300.jpg"
      },
      {
        "key": "BH6deqdygD7W",
        "title": "CILU (Cukak Remix)",
        "artists": [
          "JGKiD",
          "MPaKK"
        ],
        "duration": 196,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1009/CiluCukakRemix-JGKiDDaLABMPaKKDaLAB-6892644.mp3?st=gYK27grx45pZ91rSF0VFng&e=1794568319&a=8&p=0&r=763a6e71-413f-4016-ab1e-6a274444200a",
        "image": "https://image-cdn.nct.vn/song/2020/12/21/3/6/0/f/1608520166336_300.jpg"
      },
      {
        "key": "Mrg5s5IfnvUx",
        "title": "Lời Đường Mật (Remix)",
        "artists": [
          "Lyly",
          "HIEUTHUHAI"
        ],
        "duration": 276,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1008/LoiDuongMatRemix-LylyHIEUTHUHAI-6859730.mp3?st=7GVEWp5vB0ZW8AuWDhmfgg&e=1794568319&a=8&p=0&r=763a6e71-413f-4016-ab1e-6a274444200a",
        "image": "https://image-cdn.nct.vn/song/2020/12/03/6/a/a/3/1606987904645_300.jpg"
      },
      {
        "key": "JoSMHEhOQ9Tj",
        "title": "Vì Một Người (Teed Remix)",
        "artists": [
          "AnT"
        ],
        "duration": 159,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1008/ViMotNguoiTeedRemix-AnTMinhTruong-6872278.mp3?st=sPs_yl9jEFZcBmltQ7aRag&e=1794568319&a=8&p=0&r=763a6e71-413f-4016-ab1e-6a274444200a",
        "image": "https://image-cdn.nct.vn/song/2020/12/07/e/7/5/9/1607328230917_300.jpg"
      },
      {
        "key": "wMqq7d89fg3S",
        "title": "Khi Nào Anh Ghé Chơi Remix",
        "artists": [
          "Phương Trinh Jolie",
          "Daniel Mastro"
        ],
        "duration": 238,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1009/KhiNaoAnhGheChoiRemix-PhuongTrinhJolieMrWhite-6893735.mp3?st=ZZDbb8miIwJBvT1B9PQZow&e=1794568319&a=8&p=0&r=763a6e71-413f-4016-ab1e-6a274444200a",
        "image": "https://image-cdn.nct.vn/song/2020/12/24/e/1/5/1/1608781883118_300.jpg"
      },
      {
        "key": "XTzA91jAx8nj",
        "title": "Ai Ngờ (Kvprox Remix)",
        "artists": [
          "Quang Chợ Lầm",
          "Mai Linh"
        ],
        "duration": 238,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1015/AiNgoKvproxRemix-QuangChoLamMaiLinh-7007838.mp3?st=-yssr9VrenxPHL6M64Sl8g&e=1794568319&a=8&p=0&r=763a6e71-413f-4016-ab1e-6a274444200a",
        "image": "https://image-cdn.nct.vn/song/2021/04/23/2/f/5/3/1619162467538_300.jpg"
      },
      {
        "key": "NS7ZYnoMCMYJ",
        "title": "Ngọt (Heineken Remix)",
        "artists": [
          "Quang Minh",
          "Hugo"
        ],
        "duration": 319,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1014/NgotHeinekenRemix-QuangMinhHugoVietNam-7006286.mp3?st=Qsq6O1P6pQJKn1PQJQIVYA&e=1794568319&a=8&p=0&r=763a6e71-413f-4016-ab1e-6a274444200a",
        "image": "https://image-cdn.nct.vn/song/2021/04/19/d/1/f/1/1618785328232_300.jpg"
      },
      {
        "key": "e18TjUQDzdrP",
        "title": "Phận Duyên Lỡ Làng (HeineKen Remix)",
        "artists": [
          "Phát Huy T4",
          "Truzg"
        ],
        "duration": 307,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1014/PhanDuyenLoLangHeinekenRemix-PhatHuyT4Trugz-7004546.mp3?st=zKcLc9p_6_nC8FXBfMyCXw&e=1794568319&a=8&p=0&r=763a6e71-413f-4016-ab1e-6a274444200a",
        "image": "https://image-cdn.nct.vn/song/2021/04/14/c/3/3/b/1618383680950_300.jpg"
      },
      {
        "key": "GsYYm46dUjyl",
        "title": "Cô Đơn Vắt Vai (BeeBB CM1X Remix)",
        "artists": [
          "Machiot",
          "BeeBB",
          "CM1X"
        ],
        "duration": 209,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1014/CoDonVatVaiBeebbCm1xRemix-MachiotBeeBBCM1X-7003998.mp3?st=wAGEsxG_7jyaj-2xSrehrg&e=1794568319&a=8&p=0&r=763a6e71-413f-4016-ab1e-6a274444200a",
        "image": "https://image-cdn.nct.vn/song/2021/04/13/9/7/d/5/1618279696473_300.jpg"
      },
      {
        "key": "GWo8sJlcCRww",
        "title": "Vấn Duyên Tình Remix",
        "artists": [
          "Kaiz",
          "Like.Q"
        ],
        "duration": 208,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1012/VanDuyenTinhRemix-KaizLikeQ-6962586.mp3?st=vAEvJV0-bY6mULva8_wO_w&e=1794568319&a=8&p=0&r=763a6e71-413f-4016-ab1e-6a274444200a",
        "image": "https://image-cdn.nct.vn/song/2021/03/09/c/3/5/4/1615264374307_300.jpg"
      },
      {
        "key": "2X6RFV8lW27P",
        "title": "Tốt Cho Cả Hai (Cukak Remix)",
        "artists": [
          "Quang Chợ Lầm"
        ],
        "duration": 210,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1010/TotChoCaHaiCukakRemix-QuangChoLam-6916729.mp3?st=DPO6mYTKCCvFzavhJpM6UA&e=1794568319&a=8&p=0&r=763a6e71-413f-4016-ab1e-6a274444200a",
        "image": "https://image-cdn.nct.vn/song/2021/01/13/b/d/d/4/1610510317474_300.jpg"
      },
      {
        "key": "PrqwxFafe8xw",
        "title": "Thanh Xuân Vương Trên Vai Gầy (HeineKen Remix)",
        "artists": [
          "Quyết Tiến Maz",
          "Gia Bảo"
        ],
        "duration": 376,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1010/ThanhXuanVuongTrenVaiGayHeinekenRemix-QuyetTienMazGiaBao-6926932.mp3?st=3CwfaiKpkKL-XPRS0MWaGQ&e=1794568319&a=8&p=0&r=763a6e71-413f-4016-ab1e-6a274444200a",
        "image": "https://image-cdn.nct.vn/song/2021/01/21/5/c/9/9/1611198082884_300.jpg"
      },
      {
        "key": "UvcearXYO17c",
        "title": "Cơn Mưa Qua (Cukak Remix)",
        "artists": [
          "DMD Minh Duy"
        ],
        "duration": 216,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1010/ConMuaQuaCukakRemix-DMDMinhDuy-6931484.mp3?st=RCuEkZzyuglp1ZJ6WXh8Ew&e=1794568319&a=8&p=0&r=763a6e71-413f-4016-ab1e-6a274444200a",
        "image": "https://image-cdn.nct.vn/song/2021/02/01/d/0/3/0/1612156029344_300.jpg"
      },
      {
        "key": "lHlED72UF0l9",
        "title": "Thê Lương (Cukak Remix)",
        "artists": [
          "Phúc Chinh"
        ],
        "duration": 240,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1012/TheLuongCukakRemix-PhucChinh-6971147.mp3?st=7dCaopp5ay8Pdt_m5DLKuQ&e=1794568319&a=8&p=0&r=763a6e71-413f-4016-ab1e-6a274444200a",
        "image": "https://image-cdn.nct.vn/song/2021/03/12/e/2/9/e/1615555786073_300.jpg"
      },
      {
        "key": "xGtpfIvGtrAP",
        "title": "Ai Đâu Hay (CM1X Remix)",
        "artists": [
          "SEANPOET",
          "CM1X"
        ],
        "duration": 303,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1014/AiDauHayCm1xRemix-SeanVietNamCM1X-6999077.mp3?st=xQFqQOpnb52D_dvGJTEKqw&e=1794568319&a=8&p=0&r=763a6e71-413f-4016-ab1e-6a274444200a",
        "image": "https://image-cdn.nct.vn/song/2025/09/17/1/9/d/0/1758100151658_300.jpg"
      },
      {
        "key": "InQFTpSZ2vTq",
        "title": "Hoa Bỉ Ngạn (Hoàng Trung Remix)",
        "artists": [
          "Gavin",
          "Light A"
        ],
        "duration": 211,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1015/HoaBiNganHoangTrungRemix-GavinLightA-7010303.mp3?st=dANxauhtoXufnBVpd9cHXA&e=1794568319&a=8&p=0&r=763a6e71-413f-4016-ab1e-6a274444200a",
        "image": "https://image-cdn.nct.vn/song/2021/04/26/f/c/2/5/1619444686480_300.jpg"
      },
      {
        "key": "j7QPjLrmob81",
        "title": "Lệ Sông Buồn (Anhvu, Hhd Remix)",
        "artists": [
          "TLong"
        ],
        "duration": 293,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1016/LeSongBuonAnhvuHhdRemix-TLong-7023396.mp3?st=D9nAbxYDW8MZr0bRXKr3zg&e=1794568319&a=8&p=0&r=763a6e71-413f-4016-ab1e-6a274444200a",
        "image": "https://image-cdn.nct.vn/song/2021/05/24/f/8/d/8/1621822453238_300.jpg"
      },
      {
        "key": "tCsJPR19IElv",
        "title": "Ngày Mai Xa Rồi (Kvprox x HHD Remix)",
        "artists": [
          "Bình Boo"
        ],
        "duration": 235,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1016/NgayMaiXaRoiKvproxXHhdRemix-BinhBoo-7026375.mp3?st=HQCsFWmz2qlt19upXi8mDw&e=1794568319&a=8&p=0&r=763a6e71-413f-4016-ab1e-6a274444200a",
        "image": "https://image-cdn.nct.vn/song/2021/05/29/2/f/2/4/1622301311404_300.jpg"
      },
      {
        "key": "Rcf5UP5Bgkum",
        "title": "Chuyện Cũ Anh Và Em (Khả Huy X HHD Remix)",
        "artists": [
          "Hoàng Hiệp",
          "Tấn Vinh"
        ],
        "duration": 395,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1016/ChuyenCuAnhVaEmKhaHuyXHhdRemix-HoangHiep2002TanVinh2001-7026289.mp3?st=8YKvpwFxx9aIqZNjl1GZpA&e=1794568319&a=8&p=0&r=763a6e71-413f-4016-ab1e-6a274444200a",
        "image": "https://image-cdn.nct.vn/song/2021/05/29/2/f/2/4/1622285224029_300.jpg"
      },
      {
        "key": "oa22gJrwzolG",
        "title": "Buông Tay Để Nhẹ Lòng (Remix Version)",
        "artists": [
          "Hoàng Anh Trung"
        ],
        "duration": 254,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1016/BuongTayDeNheLongRemixVersion-HoangAnhTrung-7026136.mp3?st=6UWgipJlSDPw8U-iOV-LgA&e=1794568319&a=8&p=0&r=763a6e71-413f-4016-ab1e-6a274444200a",
        "image": "https://image-cdn.nct.vn/song/2021/05/28/a/5/3/8/1622209371218_300.jpg"
      },
      {
        "key": "Vg7BFlLelWma",
        "title": "Đắm Say Rồi (Anhvu X Hhd Remix)",
        "artists": [
          "Sùng Chẩn Páo"
        ],
        "duration": 195,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1016/DamSayRoiAnhvuXHhdRemix-SungChanPao-7030395.mp3?st=NQOeEVE4XW3nL46ojqiSnw&e=1794568319&a=8&p=0&r=763a6e71-413f-4016-ab1e-6a274444200a",
        "image": "https://image-cdn.nct.vn/song/2021/06/07/5/c/c/c/1623040292902_300.jpg"
      },
      {
        "key": "PovSJUWsLZnq",
        "title": "Ngỡ Được Yêu (Minh Khôn x HHD Remix)",
        "artists": [
          "LinhTG"
        ],
        "duration": 161,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1017/NgoDuocYeuMinhKhonXHhdRemix-LinhTG-7032456.mp3?st=am1lxOhBKFXhU8vUmt3sng&e=1794568319&a=8&p=0&r=763a6e71-413f-4016-ab1e-6a274444200a",
        "image": "https://image-cdn.nct.vn/song/2021/06/15/0/f/0/b/1623722304016_300.jpg"
      },
      {
        "key": "8iFFtApPQ9YD",
        "title": "Lụy Tình (Minh Khôn x HHD Remix)",
        "artists": [
          "TLong"
        ],
        "duration": 170,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1017/LuyTinhMinhKhonXHhdRemix-TLong-7036487.mp3?st=QS5hHTJq00pymib2P8VnyA&e=1794568319&a=8&p=0&r=763a6e71-413f-4016-ab1e-6a274444200a",
        "image": "https://image-cdn.nct.vn/song/2021/06/22/0/3/e/7/1624351408334_300.jpg"
      },
      {
        "key": "fQLwSKAa547j",
        "title": "Đào Nương (Durian x HHD Remix)",
        "artists": [
          "Hoàng Vương"
        ],
        "duration": 198,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1017/DaoNuongDurianXHhdRemix-HoangVuong-7037332.mp3?st=f1waIemi6Tr8bGLeW6Eg5g&e=1794568319&a=8&p=0&r=763a6e71-413f-4016-ab1e-6a274444200a",
        "image": "https://image-cdn.nct.vn/song/2021/06/25/e/6/6/d/1624604655968_300.jpg"
      },
      {
        "key": "9a4nbWSN63nQ",
        "title": "Em Là Dealer? (Phiusao Remix)",
        "artists": [
          "S.U.N"
        ],
        "duration": 224,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1017/EmLaDealerPhiusaoRemix-SUN-7036393.mp3?st=ajZ5afxSMyHlAmQ4kehQAw&e=1794568319&a=8&p=0&r=763a6e71-413f-4016-ab1e-6a274444200a",
        "image": "https://image-cdn.nct.vn/song/2021/06/22/0/3/e/7/1624336516970_300.jpg"
      },
      {
        "key": "k7JcJSWgCbfj",
        "title": "Anh Từng Mơ (Mee Remix)",
        "artists": [
          "Lê Vũ",
          "Xám"
        ],
        "duration": 294,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1018/AnhTungMoMeeRemix-LeVuXam-7050223.mp3?st=vVvlGbOF3MjixWwNO9YVXA&e=1794568319&a=8&p=0&r=763a6e71-413f-4016-ab1e-6a274444200a",
        "image": "https://image-cdn.nct.vn/song/2021/07/16/f/4/9/8/1626428030937_300.jpg"
      },
      {
        "key": "9ifQyZSICkio",
        "title": "Một Người Tương Xứng (Kaine x HHD Remix)",
        "artists": [
          "Quang Chợ Lầm"
        ],
        "duration": 271,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1019/MotNguoiTuongXungKaineXHhdRemix-QuangChoLam-7061407.mp3?st=u-ZIOtydrCvT5M7o_QVYHg&e=1794568319&a=8&p=0&r=763a6e71-413f-4016-ab1e-6a274444200a",
        "image": "https://image-cdn.nct.vn/song/2021/08/05/3/c/a/5/1628133110922_300.jpg"
      },
      {
        "key": "8hh4ABDfVzGJ",
        "title": "Chạm Nhẹ Đôi Môi (HeineKen x HHD Remix)",
        "artists": [
          "M-az"
        ],
        "duration": 290,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1020/ChamNheDoiMoiHeinekenXHhdRemix-Maz-7065572.mp3?st=8xiP--aghShjzbs7yASyvw&e=1794568319&a=8&p=0&r=763a6e71-413f-4016-ab1e-6a274444200a",
        "image": "https://image-cdn.nct.vn/song/2021/08/09/b/a/7/b/1628523400877_300.jpg"
      },
      {
        "key": "abFPNItFKoaD",
        "title": "Chẳng Thể Giữ Lấy (MDDanel Remix)",
        "artists": [
          "Giang NV"
        ],
        "duration": 167,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1005/ChangTheGiuLayMddanelRemix-GiangNV-6770606.mp3?st=7syEUpVEa87UHf1ynIQz4Q&e=1794568319&a=8&p=0&r=763a6e71-413f-4016-ab1e-6a274444200a",
        "image": "https://image-cdn.nct.vn/song/2020/10/28/e/1/7/4/1603883850454_300.jpg"
      },
      {
        "key": "Rotq7cP6GmXw",
        "title": "Buông Xuôi Hy Vọng (Blak Remix)",
        "artists": [
          "Kalee Hoàng",
          "Thành Tar"
        ],
        "duration": 148,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1022/BuongXuoiHyVongBlakRemix-KaleeHoangThanhTar-7098053.mp3?st=WcXQYj4v0dnmxGXj9z0xcw&e=1794568319&a=8&p=0&r=763a6e71-413f-4016-ab1e-6a274444200a",
        "image": "https://image-cdn.nct.vn/song/2021/09/29/e/5/3/b/1632903512449_300.jpg"
      },
      {
        "key": "ew5NJIueG6f3",
        "title": "Còn Yêu Hãy Về Với Nhau (Blak Remix)",
        "artists": [
          "Kalee Hoàng",
          "Thành Tar"
        ],
        "duration": 202,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1022/ConYeuHayVeVoiNhauBlakRemix-KaleeHoangThanhTar-7098370.mp3?st=pOdHsUoI9-0J1LDsE6RsHw&e=1794568319&a=8&p=0&r=763a6e71-413f-4016-ab1e-6a274444200a",
        "image": "https://image-cdn.nct.vn/song/2021/09/30/7/6/2/7/1632968285049_300.jpg"
      },
      {
        "key": "zhYyrFanqWlm",
        "title": "Thương Người Không Thương Mình (Blak Remix)",
        "artists": [
          "Kalee Hoàng",
          "Thành Tar"
        ],
        "duration": 181,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1023/ThuongNguoiKhongThuongMinhBlakRemix-KaleeHoangThanhTar-7100359.mp3?st=CaHQ2Am4B3rwAzFcJhFk8w&e=1794568319&a=8&p=0&r=763a6e71-413f-4016-ab1e-6a274444200a",
        "image": "https://image-cdn.nct.vn/song/2021/10/03/1/e/b/b/1633272598556_300.jpg"
      },
      {
        "key": "Fxxy1RhE9lFr",
        "title": "Phía Cô Đơn (CM1X Remix)",
        "artists": [
          "SEANPOET",
          "Tweny"
        ],
        "duration": 196,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2028/PhiaCoDonCM1XRemix-SeanTweny-7847458.mp3?st=7Hlzaeaj-9t-X0lFj7u2lQ&e=1794568319&a=8&p=0&r=763a6e71-413f-4016-ab1e-6a274444200a",
        "image": "https://image-cdn.nct.vn/song/2025/09/17/1/9/d/0/1758102256600_300.jpg"
      },
      {
        "key": "GzejEPyocmL5",
        "title": "Là Khi Nào Ấy Nhờ",
        "artists": [
          "Machiot",
          "Seachains"
        ],
        "duration": 199,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui996/LaKhiNaoAyNho-MachiotSeachains-6237585.mp3?st=FCWysA9OXcNlitGdg8Q1dA&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2020/03/16/d/2/1/a/1584322560840_300.jpg"
      },
      {
        "key": "ZZqaPOVQnYb3",
        "title": "Thích Em Chưa!? (Remix Version)",
        "artists": [
          "Di Di",
          "Longg"
        ],
        "duration": 192,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2036/ThichEmChuaRemixVersion-DiDiLongC-8822614.mp3?st=khrXzG2HfwsbmWDujf-fUA&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2023/03/07/d/3/e/f/1678177246121_300.jpg"
      },
      {
        "key": "RwGoR0SE4LLZ",
        "title": "Thế Giới Có Nơi Nào Cho Em (Remix)",
        "artists": [
          "Sweet Liquor"
        ],
        "duration": 227,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2034/TheGioiCoNoiNaoChoEmRemix-SweetLiquor-8533158.mp3?st=o3N56u4_6W6tTLK_tQYrpA&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2023/01/11/3/2/2/d/1673450208893_300.jpg"
      },
      {
        "key": "FY0A6ONtGfXn",
        "title": "Chạy Khỏi Thế Giới Này (Cukak Remix)",
        "artists": [
          "Da LAB",
          "Phương Ly"
        ],
        "duration": 294,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2023/ChayKhoiTheGioiNayCukakRemix-DaLABPhuongLy-7583822.mp3?st=f2gvYkLF2OQhXUyIjL1jzw&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2022/07/06/5/e/b/8/1657077703565_300.jpg"
      },
      {
        "key": "wKV3gvwFsR7A",
        "title": "Không Phải Lưu Manh (Remix)",
        "artists": [
          "Đỗ Hiếu",
          "DT Tập Rap",
          "CONTREKZ"
        ],
        "duration": 199,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2054/KhongPhaiLuuManhRemix-DoHieuDTTapRapCONTREKZ-14312883.mp3?st=cglpjrJdNMSpmkyGyzfC9g&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2024/04/04/1/c/8/b/1712209582638_300.jpg"
      },
      {
        "key": "fNUlQHIL81ZK",
        "title": "Khóc Ở Trong Club (CM1X Remix)",
        "artists": [
          "Hiền Hồ"
        ],
        "duration": 202,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2046/KhocOTrongClubCM1XRemix-HienHo-11971554.mp3?st=UFhyjSFR3_AyiD4tItdAbw&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2023/10/17/c/6/9/4/1697514070747_300.jpg"
      },
      {
        "key": "J3hjNgJhnCEe",
        "title": "Giấc Mơ Của Em (THE HOTEL LOBBY Remix)",
        "artists": [
          "MYLINA",
          "fueled by boba",
          "THE HOTEL LOBBY"
        ],
        "duration": 131,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2046/GiacMoCuaEmTHEHOTELLOBBYRemix-MYLINAVietNamfueledbybobaTHEHOTELLOBBY-11934227.mp3?st=xVt23JsaYSZcLfaBTPPBNg&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2023/10/12/6/9/1/3/1697102158028_300.jpg"
      },
      {
        "key": "PnJ9PISW0kOM",
        "title": "TO THE MOON",
        "artists": [
          "KayC",
          "YoungPuppy",
          "Machiot"
        ],
        "duration": 172,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2044/TOTHEMOON-KayCPuppyVietNamMachiot-11100890.mp3?st=XHzsnAHOAE7bkuc72hs8RQ&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2023/08/23/9/d/5/c/1692767878796_300.jpg"
      },
      {
        "key": "UiYamfUZjzVY",
        "title": "Thu Remix (Là Mùa Xa Nhau)",
        "artists": [
          "gung0cay",
          "da/md"
        ],
        "duration": 217,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2037/ThuRemixLaMuaXaNhau-gung0caydamd-9023991.mp3?st=mII1tNFaDi0K-VbirdtCSw&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2023/04/07/3/9/2/f/1680854197004_300.jpg"
      }
    ]
  },
  {
    "id": "playlist-ballad-suy",
    "name": "🌧️ Ballad Tâm Trạng & Lofi Suy (Late Night)",
    "description": "Những khúc ca sâu lắng, da diết và êm đềm cho những đêm muộn hay những ngày mưa cần khoảng lặng thư giãn, chữa lành tâm hồn (75 bài hát).",
    "createdAt": "2026-11-07T14:27:40.185Z",
    "version": "2.2.0",
    "songs": [
      {
        "key": "svttWv0SzbBB",
        "title": "Chạy Khỏi Thế Giới Này (Lofi Version By Zeaplee)",
        "artists": [
          "Da LAB",
          "Phương Ly"
        ],
        "duration": 243,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2024/ChayKhoiTheGioiNayLofiVersionByZeaplee-DaLABPhuongLy-7609566.mp3?st=KhWLksKTMmtql0Jv-iqgkA&e=1794577136&a=0&p=0&r=0be5a2e7d9be55f4fec128a3e0a5bab6",
        "image": "https://image-cdn.nct.vn/song/2022/07/12/8/a/2/b/1657597988117_300.jpg"
      },
      {
        "key": "i3ahBHGg53DQ",
        "title": "Đến Lúc Thay Đổi Rồi",
        "artists": [
          "Trung Quân",
          "Bùi Anh Tuấn"
        ],
        "duration": 281,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2058/DenLucThayDoiRoi-TrungQuanIdolBuiAnhTuan-35450829.mp3?st=GQbOYQPT1T_XCBmuIXtQhA&e=1794577137&a=0&p=0&r=a41d39994dac3234002e29a1115b89f0",
        "image": "https://image-cdn.nct.vn/song/2025/02/14/d/d/1/2/1739546200472_300.jpg"
      },
      {
        "key": "UF5gWE6PtJT6",
        "title": "Thất Vọng Đến Mức Em Chỉ Biết Im Lặng (Lofi Version)",
        "artists": [
          "Lâu Phai"
        ],
        "duration": 182,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NCTSong/2410/ac/b7/o2hvzvpjfd.mp3?st=NoIlMlmCGf4npUh5h7FNJQ&e=1794577137&a=0&p=0&r=a41d39994dac3234002e29a1115b89f0",
        "image": "https://image-cdn.nct.vn/song/2024/10/12/6/f/0/9/90307_300.jpg"
      },
      {
        "key": "f0SHQZMf4pof",
        "title": "Yêu Thật Lòng Khó Đến Vậy Sao (Lofi Version)",
        "artists": [
          "Lâu Phai"
        ],
        "duration": 204,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NCTSong/2410/63/da/qvpmv93y0m.mp3?st=44BZQimvbSXDzzQ0VD0HcA&e=1794577137&a=0&p=0&r=a41d39994dac3234002e29a1115b89f0",
        "image": "https://image-cdn.nct.vn/song/2024/10/12/9/a/6/a/02116_300.jpg"
      },
      {
        "key": "68IghCN5awm7",
        "title": "Tổn Thương Nhiều Quá Đến Chẳng Dám Yêu (Lofi Version)",
        "artists": [
          "Lâu Phai"
        ],
        "duration": 135,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NCTSong/2410/d3/97/mreh10v0xm.mp3?st=zkf1ITpgfk1Da2P_9wwGZw&e=1794577137&a=0&p=0&r=a41d39994dac3234002e29a1115b89f0",
        "image": "https://image-cdn.nct.vn/song/2024/10/12/c/9/0/5/70599_300.jpg"
      },
      {
        "key": "Hw9otAQwbb1a",
        "title": "Tổn Thương Đến Đau Lòng (Lofi Version)",
        "artists": [
          "Lâu Phai"
        ],
        "duration": 164,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NCTSong/2410/97/69/dkx7lmrhny.mp3?st=YM5sa238U5bB4T6Yq9WD0A&e=1794577137&a=0&p=0&r=a41d39994dac3234002e29a1115b89f0",
        "image": "https://image-cdn.nct.vn/song/2024/10/12/e/c/1/f/66085_300.jpg"
      },
      {
        "key": "CKX1Tdlv3eLd",
        "title": "Yêu Trong Nắng Mai (Lofi Mix)",
        "artists": [
          "Hồ Văn Quý",
          "Lê Vũ"
        ],
        "duration": 213,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1025/YeuTrongNangMaiLofiMix-HoVanQuyLeVuTre-7130025.mp3?st=-uQfsIzBU-Ox9HEm8ZjLww&e=1794577137&a=0&p=0&r=6e33b92896ab3191d9175465972f8ce6",
        "image": "https://image-cdn.nct.vn/song/2022/02/14/9/a/9/8/1644830572875_300.jpg"
      },
      {
        "key": "5UEdFDFzlWb6",
        "title": "Khi Ta Già (Lofi Version)",
        "artists": [
          "Vũ Thịnh"
        ],
        "duration": 310,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1010/KhiTaGiaLofiVersion-VuThinhTheWings-6931843.mp3?st=_fsOdRKsoaUl9pP1iEUIUw&e=1794577137&a=0&p=0&r=6e33b92896ab3191d9175465972f8ce6",
        "image": "https://image-cdn.nct.vn/song/2023/04/10/e/5/0/a/1681109839969_300.jpg"
      },
      {
        "key": "y0XtKvMKrz55",
        "title": "Hà Nội Và Em",
        "artists": [
          "Minh Cà Ri",
          "Lâm Phúc"
        ],
        "duration": 319,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2059/HaNoiVaEm-MinhCaRiLamPhuc-40977832.mp3?st=DtSSZGjXV6GFJ9qrEwMYIg&e=1794577140&a=0&p=0&r=59e3d6c260cc80a14f91ee87290af93b",
        "image": "https://image-cdn.nct.vn/song/2026/03/09/6/a/4/4/1773054645722_300.jpg"
      },
      {
        "key": "LEy3vYptGKmC",
        "title": "Có Một Chữ 'Thương'",
        "artists": [
          "Minh Cà Ri",
          "Lâm Phúc",
          "Tú Phương"
        ],
        "duration": 279,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2059/CoMotChuThuong-MinhCaRiLamPhucTuPhuong-40977890.mp3?st=m5rWdzPA_lxPY9tRpoxveg&e=1794577140&a=0&p=0&r=59e3d6c260cc80a14f91ee87290af93b",
        "image": "https://image-cdn.nct.vn/song/2026/03/09/6/a/4/4/1773054775932_300.jpg"
      },
      {
        "key": "QYCxmdZwMyq7",
        "title": "Vì Anh Là Tình Đầu",
        "artists": [
          "Chí Chương",
          "Namchan"
        ],
        "duration": 261,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2059/ViAnhLaTinhDau-ChiChuongNamchan-40624039.mp3?st=rrUBxj-ENPYw_PviARDoIw&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2026/02/09/f/f/5/7/1770628117720_300.jpg"
      },
      {
        "key": "SE1G1K2nC0zu",
        "title": "NỖI ĐAU NGÂY DẠI",
        "artists": [
          "ANH TRAI \"SAY HI\"",
          "HIEUTHUHAI",
          "Đức Phúc",
          "Công Dương"
        ],
        "duration": 258,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/Warner_Audio245/NoiDauNgayDaiFeatHieuthuhaiDucPhucCongDuong-ANHTRAISAYHI-15145547.mp3?st=fKnA1xgbbUHk4UDhwZbx0w&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2024/06/25/4/4/7/1/1719253194515_300.jpg"
      },
      {
        "key": "1QNoCU3SK1Ud",
        "title": "Buồn Nốt Hôm Nay",
        "artists": [
          "Tăng Duy Tân"
        ],
        "duration": 197,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1003/BuonNotHomNay-TangDuyTan-6637372.mp3?st=Q9aklZshS9FUfLnrccASLQ&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2020/09/18/d/5/7/7/1600403674640_300.jpg"
      },
      {
        "key": "AmeCw2biUPcB",
        "title": "Không Lý Do",
        "artists": [
          "Vũ Phụng Tiên",
          "Hạ"
        ],
        "duration": 198,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1020/KhongLyDo-VuPhungTienHaLyAnhKhoa-7065624.mp3?st=t8Izd-QExJMXYx7wnFz9cA&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/08/10/b/2/e/0/1628560873036_300.jpg"
      },
      {
        "key": "5IoB6SmTPxXT",
        "title": "Vài Giọt Sương Mai",
        "artists": [
          "Quinf",
          "Catchellers",
          "Billis"
        ],
        "duration": 206,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2059/VaiGiotSuongMai-QuinfCatchellersBillis-39150438.mp3?st=ZWWi47kWIAQs7OxvXIquFQ&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2025/10/27/0/2/e/b/1761561291852_300.jpg"
      },
      {
        "key": "zsouw4byMWGx",
        "title": "Đan Vào Nhau Một Lát",
        "artists": [
          "(S)TRONG"
        ],
        "duration": 155,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2059/DanVaoNhauMotLat-STRONG-39948616.mp3?st=DFMyo5Zif0QuG4tydc8w2Q&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2025/12/29/2/a/9/8/1766991970392_300.jpg"
      },
      {
        "key": "En0MGqSieGxH",
        "title": "nếu mai chia tay",
        "artists": [
          "MONSTAR",
          "AMEE"
        ],
        "duration": 205,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1020/neumaichiatay-MONSTARAMEE-7057196.mp3?st=HL_sXXSjhq5_6hsYAvg2Og&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/07/30/a/0/c/2/1627616265915_300.jpg"
      },
      {
        "key": "KNFKUBzKwmJX",
        "title": "Chờ Em Đến",
        "artists": [
          "EREN",
          "Bbynascar",
          "nVu"
        ],
        "duration": 159,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2059/ChoEmDen-ERENVietNamBbynascarnVuVietNam-41053962.mp3?st=FmqOGeyeeDwhXluqry8ohg&e=1794577137&a=0&p=0&r=a41d39994dac3234002e29a1115b89f0",
        "image": "https://image-cdn.nct.vn/song/2026/03/16/7/c/1/b/1773636970644_300.jpg"
      },
      {
        "key": "kAOgYCUopEVC",
        "title": "Anh Yêu Nụ Cười Ấy",
        "artists": [
          "An Vũ"
        ],
        "duration": 184,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2038/AnhYeuNuCuoiAy-AnVu-9180211.mp3?st=bcZDPK202SD36j8JbMQjIQ&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2023/04/13/f/6/b/c/1681379933706_300.jpg"
      },
      {
        "key": "QusqRM2M6i2a",
        "title": "Thằng nào làm em suy (Remix)",
        "artists": [
          "Freaky",
          "Chúc Hỷ",
          "Eopixi",
          "King JB"
        ],
        "duration": 205,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2059/ThangNaoLamEmSuyRemix-FreakyChucHyEopixiKingJB-40994165.mp3?st=2ghiOosY223kI6zcOLxwYw&e=1794577139&a=0&p=0&r=e9d640806fdc94face6305b502720edc",
        "image": "https://image-cdn.nct.vn/song/2026/03/10/b/0/c/d/1773141426645_300.jpg"
      },
      {
        "key": "VFlqrYD7H6BI",
        "title": "Best Friends (Tao Với Mày) [Acoustic Version]",
        "artists": [
          "tuấn việt",
          "Minh Huy",
          "Tr.D"
        ],
        "duration": 237,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2058/BestFriendsTaoVoiMayAcousticVersion-TuanVietMinhHuyTrD-36768586.mp3?st=4W5leUWZP8NPspZW5J6X2w&e=1794577147&a=0&p=0&r=d4d873af7a3eeb3560cc1b645c537f37",
        "image": "https://image-cdn.nct.vn/song/2025/05/05/0/a/e/3/1746430774610_300.jpg"
      },
      {
        "key": "z8jFgXYtQj7a",
        "title": "Không Sao Đâu (Acoustic Version)",
        "artists": [
          "WHEE!"
        ],
        "duration": 208,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2058/KhongSaoDauAcousticVersion-WHEE-35238516.mp3?st=psg_cTbsaa6XM4vE0i5bCg&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2025/02/03/2/c/2/b/1738579971236_300.jpg"
      },
      {
        "key": "rqdAx3J6jyA1",
        "title": "Mời Buồn Sang Chơi (Acoustic Version)",
        "artists": [
          "Bảo Yến Rosie",
          "Freaky",
          "Châu Đăng Khoa"
        ],
        "duration": 220,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2047/MoiBuonSangChoiAcousticVersion-BaoYenRosieFreakyChauDangKhoa-12165269.mp3?st=YNb6QVCiK2_VQRo1T02Blw&e=1794577139&a=0&p=0&r=e9d640806fdc94face6305b502720edc",
        "image": "https://image-cdn.nct.vn/song/2023/11/02/9/6/4/6/1698918654363_300.jpg"
      },
      {
        "key": "uq8yr2TZZXnq",
        "title": "Gặp Em Lúc Tan Vỡ",
        "artists": [
          "Trung Quân"
        ],
        "duration": 261,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2049/GapEmLucTanVo-TrungQuanIdol-12872422.mp3?st=IKQovC_PIkKNw9QU4vX1Lg&e=1794577143&a=0&p=0&r=f7c68627f5b87d9a5ef7aba0e497d5de",
        "image": "https://image-cdn.nct.vn/song/2023/12/11/f/0/3/2/1702287163836_300.jpg"
      },
      {
        "key": "IfYMlwyQfM6n",
        "title": "tết tình",
        "artists": [
          "TINH HÀ \"SAY HI\"",
          "Jaysonlei",
          "Sơn.K",
          "DILLAN",
          "Đặng Hồng Hải"
        ],
        "duration": 220,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/resa/2608/ff/da/dh081ws7js.mp3?st=iGArZwgKOzFSfoe5sk5EdA&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2026/08/14/t/8/e/K/1786702328021_300.jpg"
      },
      {
        "key": "2QYXVsG0qeh6",
        "title": "Mưa Mùa Hè",
        "artists": [
          "Amy Lương"
        ],
        "duration": 284,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1004/MuaMuaHe-AmyLuong-6722490.mp3?st=k-eJ4h8HcbgQ_j1m3plvpg&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2020/10/08/f/a/6/e/1602124146785_300.jpg"
      },
      {
        "key": "2rgIpbCEKtbX",
        "title": "If U Have A Dream",
        "artists": [
          "MIN",
          "Rtee",
          "Kai Đinh",
          "TINLE"
        ],
        "duration": 218,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1009/IfWeHaveADream-MINRTeeKaiDinh-6912036.mp3?st=9dhHHe5cABn682V-C_bN-Q&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/01/05/0/6/1/b/1609843480336_300.jpg"
      },
      {
        "key": "crcW5oD4PcUR",
        "title": "Tặng Em",
        "artists": [
          "Minh Cà Ri",
          "Tuấn"
        ],
        "duration": 234,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui999/TangEm-TuanMinhCaRi-6277241.mp3?st=rig9TtmZWgF_AV7uIf3B4Q&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2020/05/12/2/2/0/9/1589264328591_300.jpg"
      },
      {
        "key": "hYasE60B0v9P",
        "title": "Let's Talk About Love",
        "artists": [
          "Văn Mai Hương",
          "Blacka",
          "Châu Đăng Khoa"
        ],
        "duration": 242,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1025/LetsTalkAboutLove-VanMaiHuongBlackaChauDangKhoa-7124748.mp3?st=qxH2r3EgRFZu5ZkFytohlQ&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/12/30/d/f/6/5/1640846498725_300.jpg"
      },
      {
        "key": "rDaJzzQ21egb",
        "title": "Không Yêu Cũng Chẳng Cô Đơn",
        "artists": [
          "Hưng Cacao"
        ],
        "duration": 234,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2057/KhongYeuCungChangCoDon-HungCacao-16212557.mp3?st=hStCz2bj-fXhC3kA3XUqLQ&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2024/09/26/7/4/1/c/1727326468213_300.jpg"
      },
      {
        "key": "1JITUz09WzVY",
        "title": "SAU ĐÊM NAY",
        "artists": [
          "ANH TRAI \"SAY HI\"",
          "ERIK",
          "Đức Phúc",
          "Quân A.P",
          "JSOL",
          "Gemini Hùng Huỳnh"
        ],
        "duration": 291,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/Warner_Audio259/SauDemNayFeatErikDucPhucQuanApJsolHungHuynh-ANHTRAISAYHI-15770779.mp3?st=tat6rq-mHbIrqc3iQL3tTg&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2024/08/17/f/b/4/4/1723893395674_300.jpg"
      },
      {
        "key": "5QxyFEBkCnKJ",
        "title": "Khóc Ở Trong Club (Rock Version)",
        "artists": [
          "Hiền Hồ"
        ],
        "duration": 162,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2044/KhocOTrongClubRockVersion-HienHo-11230363.mp3?st=BfBNhzbxaNOBdG0B1vR54A&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2023/08/29/1/9/2/3/1693306497853_300.jpg"
      },
      {
        "key": "n1cUQsRq0lDa",
        "title": "Đàn Ru Bé Khó Ngủ Đêm Quấy Khóc",
        "artists": [
          "Cuti Kid"
        ],
        "duration": 249,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NCTSong/2412/0c/d6/87yt17vqrw.mp3?st=dA7tdrNENqEcv-AT2aYNnQ&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2024/12/24/1/e/0/4/07782_300.jpg"
      },
      {
        "key": "zOKhSrM7qShy",
        "title": "Bé Ngủ Ngon Mỗi Đêm Với Nhạc Êm Dịu",
        "artists": [
          "Cuti Kid"
        ],
        "duration": 263,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NCTSong/2412/dd/73/8d0ouxubcd.mp3?st=v23QqTX5b9gDHNaKINp0bg&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2024/12/24/2/c/6/b/19033_300.jpg"
      },
      {
        "key": "UdDuVAjkJlWj",
        "title": "Cho Bé Nghe Nín Khóc Ngay Lập Tức",
        "artists": [
          "Cuti Kid"
        ],
        "duration": 250,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NCTSong/2412/3e/aa/62jburlegn.mp3?st=MyhLY8CppU4ZWmGZAWOG2g&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2024/12/24/2/f/a/3/67806_300.jpg"
      },
      {
        "key": "Pjvm2TLuiU5a",
        "title": "Tiếng Nhạc Xoá Tan Tiếng Khóc Của Bé",
        "artists": [
          "Cuti Kid"
        ],
        "duration": 272,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NCTSong/2412/c9/a6/79gqdy0gl2.mp3?st=0Y5ikdRBIonfzSww5EHMBw&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2024/12/24/9/4/c/d/99951_300.jpg"
      },
      {
        "key": "O5qj82fh7NbG",
        "title": "Là Khi Anh Có Em Bên Mình",
        "artists": [
          "Huy Lê",
          "Minh Cà Ri"
        ],
        "duration": 240,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui997/LaKhiAnhCoEmBenMinh-HuyLeMinhCaRi-6242258.mp3?st=aIeRXwGi8r1oR5lB4De_2Q&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2020/03/31/4/6/f/c/1585623787574_300.jpg"
      },
      {
        "key": "lTsGgLEw63U6",
        "title": "MVP (MƯA VỘI PHÓNG)",
        "artists": [
          "TINH HÀ \"SAY HI\"",
          "Wren Evans",
          "Ali Hoàng Dương",
          "CODYNAMVO",
          "HYO",
          "2pillz"
        ],
        "duration": 221,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/resa/2607/97/2f/8qyfyvvwdp.mp3?st=KBHfna2S9CGpLqEq9FdTMw&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2026/07/24/V/2/2/4/1784877877927_300.jpg"
      },
      {
        "key": "K5sM5HjDRSGk",
        "title": "IDNAT (IM ĐỢI NGƯỜI ANH THƯƠNG)",
        "artists": [
          "TINH HÀ \"SAY HI\"",
          "Wren Evans",
          "IVAN",
          "CAPTAIN BOY",
          "Thể Thiên"
        ],
        "duration": 239,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/resa/2607/ce/3a/9pr3er43fk.mp3?st=Bx8YihX9FFeLLZNITVlcNQ&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2026/07/10/6/g/w/v/1783666342729_300.jpg"
      },
      {
        "key": "oNXVQ2bkB8Ay",
        "title": "CÔ ĐƠN ANH CŨNG VUI",
        "artists": [
          "TINH HÀ \"SAY HI\"",
          "WEAN",
          "KIMLONG",
          "Xuân Định K.Y",
          "DILLAN"
        ],
        "duration": 350,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/resa/2607/d4/24/q8av498yb9.mp3?st=l1mR-fg7-5vzLSdWLZ4jDw&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2026/07/10/6/g/w/v/1783666342729_300.jpg"
      },
      {
        "key": "YRHvjaOi44LL",
        "title": "Cơn Mưa Xa Dần",
        "artists": [
          "Sơn Tùng M-TP"
        ],
        "duration": 196,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NCTSong/2304/7c/47/g45idzz37l.mp3?st=ZvdNJy7bbeqJbIxwbAezNA&e=1794577135&a=0&p=0&r=576f595de6ebaed3e188c8beed1149c0",
        "image": "https://image-cdn.nct.vn/song/2024/03/15/4/c/b/d/1710496856047_300.jpg"
      },
      {
        "key": "kfPSh6WlPR3U",
        "title": "Khuôn Mặt Đáng Thương",
        "artists": [
          "Sơn Tùng M-TP"
        ],
        "duration": 257,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2053/KhuonMatDangThuong-SonTungMTP-3823635.mp3?st=gScMQJWwgxlpfjYsQB3FNA&e=1794577135&a=0&p=0&r=576f595de6ebaed3e188c8beed1149c0",
        "image": "https://image-cdn.nct.vn/song/2024/03/15/4/c/b/d/1710499494829_300.jpg"
      },
      {
        "key": "jKtQogltJZ",
        "title": "Cơn Mưa Ngang Qua",
        "artists": [
          "Sơn Tùng M-TP"
        ],
        "duration": 288,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2053/ConMuaNgangQua-SonTungMTP-1142953.mp3?st=5aWnpONfAdDHyWLBg_Yq6g&e=1794577135&a=0&p=0&r=576f595de6ebaed3e188c8beed1149c0",
        "image": "https://image-cdn.nct.vn/song/2024/03/15/4/c/b/d/1710498868926_300.jpg"
      },
      {
        "key": "wUQDyBZc0Hp6",
        "title": "từ 1 sẽ thành 2",
        "artists": [
          "Kai Đinh",
          "AMEE"
        ],
        "duration": 251,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2058/Tu1SeThanh2-KaiDinhAMEE-37231478.mp3?st=paLOMUAjQMT8MK7NpFcpMw&e=1794577136&a=0&p=0&r=63cb9f18e712905f999a39d9a8481e94",
        "image": "https://image-cdn.nct.vn/song/2025/06/30/6/a/1/a/1751252985261_300.jpg"
      },
      {
        "key": "UPO552h7LrqB",
        "title": "baby you are not alone",
        "artists": [
          "Kai Đinh",
          "AMEE",
          "TDK"
        ],
        "duration": 277,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2058/BabyYouAreNotAlone-KaiDinhAMEETDK-17021511.mp3?st=4y1UGr88_VMVcpQEzM5cEA&e=1794577136&a=0&p=0&r=63cb9f18e712905f999a39d9a8481e94",
        "image": "https://image-cdn.nct.vn/song/2024/12/18/8/2/9/3/1734506693199_300.jpg"
      },
      {
        "key": "PhwFrsyFayXm",
        "title": "Trái đất ôm Mặt trời",
        "artists": [
          "Kai Đinh",
          "AMEE",
          "GREY D"
        ],
        "duration": 193,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2056/TraiDatOmMatTroi-KaiDinhAMEEGREYD-15211404.mp3?st=XYDmNujhCU0YJUOYxSmjxQ&e=1794577136&a=0&p=0&r=63cb9f18e712905f999a39d9a8481e94",
        "image": "https://image-cdn.nct.vn/song/2024/06/30/d/e/4/f/1719756110820_300.jpg"
      },
      {
        "key": "EemTHbrT7zsG",
        "title": "CỨ ĐỔ TẠI CƠN MƯA",
        "artists": [
          "EM XINH \"SAY HI\"",
          "Phương Ly",
          "Orange",
          "Châu Bùi",
          "52Hz",
          "Vũ Thảo My"
        ],
        "duration": 254,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/resa/2508/6f/53/2jc7ampscu.mp3?st=bEcp2f-xYYzvNH4BUHQFPw&e=1794577136&a=0&p=0&r=0be5a2e7d9be55f4fec128a3e0a5bab6",
        "image": "https://image-cdn.nct.vn/song/2025/08/09/5/4/8/0/1754690686377_300.jpg"
      },
      {
        "key": "lC3cNjfofwFh",
        "title": "Cho Đến Bao Giờ",
        "artists": [
          "Quang Trung",
          "Nguyễn Minh Cường"
        ],
        "duration": 243,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2059/ChoDenBaoGio-QuangTrungNguyenMinhCuong-41802833.mp3?st=LQzlXaIFZEY7yZJvkehStA&e=1794577137&a=0&p=0&r=a41d39994dac3234002e29a1115b89f0",
        "image": "https://image-cdn.nct.vn/song/2026/05/19/1/4/9/6/1779182854364_300.jpg"
      },
      {
        "key": "WPYW2FolcVng",
        "title": "Đến Giờ Cơm",
        "artists": [
          "Minh Cà Ri",
          "PiaLinh"
        ],
        "duration": 236,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2059/DenGioCom-MinhCaRiPiaLinh-40977858.mp3?st=3SDx0S79LD0wPtlkkK4_dA&e=1794577137&a=0&p=0&r=a41d39994dac3234002e29a1115b89f0",
        "image": "https://image-cdn.nct.vn/song/2026/03/09/6/a/4/4/1773054710057_300.jpg"
      },
      {
        "key": "5gWYGLxufFXj",
        "title": "Và Cơn Mưa Đến",
        "artists": [
          "WHEE!"
        ],
        "duration": 202,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2059/VaConMuaDen-WHEEThiSax-38904077.mp3?st=swGxUSz0ncPbp_JGkPiMZA&e=1794577137&a=0&p=0&r=a41d39994dac3234002e29a1115b89f0",
        "image": "https://image-cdn.nct.vn/song/2025/10/10/0/8/b/1/1760033946299_300.jpg"
      },
      {
        "key": "2YBKV5EDUJ1N",
        "title": "Tưng Bừng Nhộn Nhịp Phố Lồng Đèn Đêm Trung Thu (Background Music)",
        "artists": [
          "Vmotion"
        ],
        "duration": 155,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NCTSong/2407/d1/06/0dcn0utop5.mp3?st=kk6PKJrS4A1V1-0-EV9vkg&e=1794577137&a=0&p=0&r=a41d39994dac3234002e29a1115b89f0",
        "image": "https://image-cdn.nct.vn/song/2024/07/17/b/d/9/2/91766_300.jpg"
      },
      {
        "key": "oTtGPJY6igwX",
        "title": "Phố Lồng Đèn Quận 5 Rực Rỡ Về Đêm (Background Music)",
        "artists": [
          "Vmotion"
        ],
        "duration": 184,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NCTSong/2407/06/09/67g431amgu.mp3?st=Fkfb-1TwwdM1I96Yok_uKA&e=1794577137&a=0&p=0&r=a41d39994dac3234002e29a1115b89f0",
        "image": "https://image-cdn.nct.vn/song/2024/07/18/3/c/2/4/1721289421880_300.jpg"
      },
      {
        "key": "ohdUc5kDIMnJ",
        "title": "NGƯỜI NHƯ ANH XỨNG ĐÁNG CÔ ĐƠN",
        "artists": [
          "ANH TRAI \"SAY HI\"",
          "Vũ Cát Tường",
          "Karik",
          "Negav",
          "Ngô Kiến Huy",
          "Jey B"
        ],
        "duration": 316,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/resa/2509/73/e4/qpdfu2t5m0.mp3?st=IQi__47fmNOm1W-HoOSC-g&e=1794577137&a=0&p=0&r=6e33b92896ab3191d9175465972f8ce6",
        "image": "https://image-cdn.nct.vn/song/2025/09/29/o/W/i/k/1759119226418_300.jpg"
      },
      {
        "key": "Lsfelh0EKVI3",
        "title": "Mưa Lại Tuôn",
        "artists": [
          "Lê Vũ"
        ],
        "duration": 209,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2059/MuaLaiTuon-LeVuTre-37694783.mp3?st=IgVYnFggahHFRFjBdtNzMA&e=1794577137&a=0&p=0&r=6e33b92896ab3191d9175465972f8ce6",
        "image": "https://image-cdn.nct.vn/song/2025/07/15/0/d/c/0/1752575436615_300.jpg"
      },
      {
        "key": "PYlLKmVmUFeb",
        "title": "xuân vũ",
        "artists": [
          "Kai Đinh",
          "Đức Phúc",
          "Hoàng Rob"
        ],
        "duration": 163,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/resa/2507/9f/25/ghaxsle1kq.mp3?st=DT2F28sxJfb5X5I8a_C8Jw&e=1794577137&a=0&p=0&r=6e33b92896ab3191d9175465972f8ce6",
        "image": "https://image-cdn.nct.vn/song/2025/07/10/a/0/b/d/1752139360848_300.jpg"
      },
      {
        "key": "I1ae4LP4sdMu",
        "title": "Đừng Buồn Em Nhé (feat. Khói, Dương Triệu Vũ)",
        "artists": [
          "Đàm Vĩnh Hưng",
          "Khói",
          "Dương Triệu Vũ"
        ],
        "duration": 334,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2058/DungBuonEmNhefeatKhoiDuongTrieuVu-DamVinhHungKhoiDuongTrieuVu-36973195.mp3?st=XBdEt4q4tQ1C14eZwavfwA&e=1794577137&a=0&p=0&r=6e33b92896ab3191d9175465972f8ce6",
        "image": "https://image-cdn.nct.vn/song/2025/05/21/0/8/a/b/1747802564627_300.jpg"
      },
      {
        "key": "jh0CLliA2Ob1",
        "title": "Yên Bình Thương Em",
        "artists": [
          "An Vũ"
        ],
        "duration": 212,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2058/YenBinhThuongEm-AnVu-35373954.mp3?st=1ymeT9sU6XU9FZ3RSZmMWQ&e=1794577137&a=0&p=0&r=6e33b92896ab3191d9175465972f8ce6",
        "image": "https://image-cdn.nct.vn/song/2025/02/10/b/a/7/c/1739194435813_300.jpg"
      },
      {
        "key": "SmwWyjA599eK",
        "title": "Chẳng Để Em Phải Cô Đơn",
        "artists": [
          "An Vũ"
        ],
        "duration": 255,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2057/ChangDeEmPhaiCoDon-AnVu-16352915.mp3?st=m3xNlTUG6I9SXsjLAQIOVQ&e=1794577137&a=0&p=0&r=6e33b92896ab3191d9175465972f8ce6",
        "image": "https://image-cdn.nct.vn/song/2024/10/09/a/6/f/f/1728448333720_300.jpg"
      },
      {
        "key": "6MOn7V9prhkm",
        "title": "Tan Vỡ",
        "artists": [
          "Par SG",
          "EREN",
          "Higo"
        ],
        "duration": 133,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/resa/2609/a2/26/8tfikaot41.mp3?st=1FoghqVPmkpcvk9_6LEOUA&e=1794577138&a=0&p=0&r=3949b73b6c3eede348affb67103c0e94",
        "image": "https://image-cdn.nct.vn/song/2026/09/07/a/d/d/5/1788781635919_300.jpg"
      },
      {
        "key": "AgqPKSoQxCz9",
        "title": "Đêm Cuối",
        "artists": [
          "EREN",
          "Trungng"
        ],
        "duration": 149,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2059/DemCuoi-ERENVietNamTrungng-41053977.mp3?st=VwwVfQ-xVrAYz9uADe2RSw&e=1794577138&a=0&p=0&r=3949b73b6c3eede348affb67103c0e94",
        "image": "https://image-cdn.nct.vn/song/2026/03/16/7/c/1/b/1773637900747_300.jpg"
      },
      {
        "key": "KCnyEPRfYOwh",
        "title": "Trăng Sáng Soi",
        "artists": [
          "Minh Cà Ri",
          "PiaLinh"
        ],
        "duration": 255,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2059/TrangSangSoi-MinhCaRiPiaLinh-40977915.mp3?st=IJl2GtYDY7SILiA-ap3GQg&e=1794577140&a=0&p=0&r=59e3d6c260cc80a14f91ee87290af93b",
        "image": "https://image-cdn.nct.vn/song/2026/03/09/6/a/4/4/1773054839327_300.jpg"
      },
      {
        "key": "fGVM1Iwnp0jm",
        "title": "Khúc Valse Hoàng Hôn",
        "artists": [
          "Minh Cà Ri",
          "PiaLinh",
          "Lâm Phúc"
        ],
        "duration": 374,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2059/KhucValseHoangHon-MinhCaRiPiaLinhLamPhuc-40977778.mp3?st=vHNp60m-AiQcy4xzr1zUXQ&e=1794577140&a=0&p=0&r=59e3d6c260cc80a14f91ee87290af93b",
        "image": "https://image-cdn.nct.vn/song/2026/03/09/6/a/4/4/1773054558005_300.jpg"
      },
      {
        "key": "thxlA2zgplm2",
        "title": "Rằng Ta Có Bao Lâu Để Yêu",
        "artists": [
          "Minh Cà Ri",
          "Tú Phương",
          "PiaLinh"
        ],
        "duration": 267,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2059/RangTaCoBaoLauDeYeu-MinhCaRiTuPhuongPiaLinh-40977723.mp3?st=3AvLceV72Aj9zjYDE795HA&e=1794577140&a=0&p=0&r=59e3d6c260cc80a14f91ee87290af93b",
        "image": "https://image-cdn.nct.vn/song/2026/03/09/6/a/4/4/1773054463040_300.jpg"
      },
      {
        "key": "smAazNkhVMZ1",
        "title": "Tuổi Hồng Ơi (SGK Âm nhạc 5)",
        "artists": [
          "Minh Cà Ri",
          "Ngọc Khánh Chi"
        ],
        "duration": 188,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2059/TuoiHongOiSGKAmNhac5-MinhCaRiNgocKhanhChi-40977682.mp3?st=OuaiUhFNoUmyRcbZkkO56g&e=1794577140&a=0&p=0&r=59e3d6c260cc80a14f91ee87290af93b",
        "image": "https://image-cdn.nct.vn/song/2026/03/09/6/a/4/4/1773054384146_300.jpg"
      },
      {
        "key": "vj7exVDqzwnF",
        "title": "Bước Chân Của Em",
        "artists": [
          "Minh Cà Ri",
          "Ngọc Khánh Chi"
        ],
        "duration": 126,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2059/BuocChanCuaEm-MinhCaRiNgocKhanhChi-40977672.mp3?st=-NhdWF47C6qECxZwLkmFtA&e=1794577140&a=0&p=0&r=59e3d6c260cc80a14f91ee87290af93b",
        "image": "https://image-cdn.nct.vn/song/2026/03/09/6/a/4/4/1773054319659_300.jpg"
      },
      {
        "key": "69YDbRoJE2iV",
        "title": "Có một chữ Thương",
        "artists": [
          "Lâm Phúc",
          "Ngọc Khánh Chi",
          "Minh Cà Ri"
        ],
        "duration": 274,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2058/CoMotChuThuong-LamPhucNgocKhanhChiMinhCaRi-36972158.mp3?st=Lgp5qo7YmSlSsd_JqJDaDQ&e=1794577140&a=0&p=0&r=59e3d6c260cc80a14f91ee87290af93b",
        "image": "https://image-cdn.nct.vn/song/2025/05/21/0/8/a/b/1747790460954_300.jpg"
      },
      {
        "key": "nawFlrZSS5Jo",
        "title": "Đâu Phải Chỉ Là Giá Như",
        "artists": [
          "Lâm Phúc",
          "Minh Cà Ri"
        ],
        "duration": 322,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2057/DauPhaiChiLaGiaNhu-LamPhucMinhCaRi-16645620.mp3?st=9PplCuF1nmrBSAe2sHYfnA&e=1794577140&a=0&p=0&r=59e3d6c260cc80a14f91ee87290af93b",
        "image": "https://image-cdn.nct.vn/song/2024/11/05/2/0/5/4/1730780801078_300.jpg"
      },
      {
        "key": "HaWCILlHpBjP",
        "title": "Hành Trình Của Lá",
        "artists": [
          "PiaLinh",
          "Lâm Bảo Ngọc",
          "Minh Cà Ri"
        ],
        "duration": 238,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2057/HanhTrinhCuaLa-PiaLinhLamBaoNgocMinhCaRi-16236433.mp3?st=03a-luBUgwX8AX7QJ2mgFQ&e=1794577140&a=0&p=0&r=59e3d6c260cc80a14f91ee87290af93b",
        "image": "https://image-cdn.nct.vn/song/2024/09/27/b/e/b/8/1727430670911_300.jpg"
      },
      {
        "key": "kXH4gZgRksnp",
        "title": "Nhuộm Màu Hoàng Hôn Lên Tóc Em",
        "artists": [
          "Rica",
          "Minh Cà Ri",
          "Lâm Bảo Ngọc"
        ],
        "duration": 280,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2055/NhuomMauHoangHonLenTocEm-RicaMinhCaRiLamBaoNgoc-14831246.mp3?st=berWrAnAKM-CrauUwZDOhA&e=1794577140&a=0&p=0&r=59e3d6c260cc80a14f91ee87290af93b",
        "image": "https://image-cdn.nct.vn/song/2024/05/20/1/c/e/2/1716183501315_300.jpg"
      },
      {
        "key": "Hjn56ykPuBDW",
        "title": "Buổi Diễn Hôm Nay (Cô Ấy Không Đến)",
        "artists": [
          "Rica",
          "Minh Cà Ri",
          "Hồng Dương M4U"
        ],
        "duration": 357,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2055/BuoiDienHomNayCoAyKhongDen-RicaMinhCaRiHongDuongM4U-14831241.mp3?st=GwND5MKBYjj2OHs4YfRmlg&e=1794577140&a=0&p=0&r=59e3d6c260cc80a14f91ee87290af93b",
        "image": "https://image-cdn.nct.vn/song/2024/05/20/1/c/e/2/1716183447991_300.jpg"
      },
      {
        "key": "ZsBzh2bcccb8",
        "title": "14B1 - 215.93",
        "artists": [
          "Rica",
          "Minh Cà Ri"
        ],
        "duration": 177,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2055/14B121593-RicaMinhCaRi-14831226.mp3?st=14t0FmxVc8FVixn2ggRw_Q&e=1794577140&a=0&p=0&r=59e3d6c260cc80a14f91ee87290af93b",
        "image": "https://image-cdn.nct.vn/song/2024/05/20/1/c/e/2/1716183318831_300.jpg"
      },
      {
        "key": "WgOv7e90j74R",
        "title": "Giữ Hộ Anh (Intro)",
        "artists": [
          "Rica",
          "Minh Cà Ri"
        ],
        "duration": 150,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2055/GiuHoAnhIntro-RicaMinhCaRi-14831225.mp3?st=A22bFXh3gWlP2ieo3dZUcA&e=1794577140&a=0&p=0&r=59e3d6c260cc80a14f91ee87290af93b",
        "image": "https://image-cdn.nct.vn/song/2024/05/20/1/c/e/2/1716183274467_300.jpg"
      },
      {
        "key": "1JgvB2nINBKh",
        "title": "Ai Cho Em Mang Mùa Hè Của Anh Đi",
        "artists": [
          "minhthuy",
          "Minh Cà Ri",
          "Rica"
        ],
        "duration": 286,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2040/AiChoEmMangMuaHeCuaAnhDi-MinhThuyMinhCaRiRica-9545107.mp3?st=WrzFSX3yp1dO5ruCJSYLMw&e=1794577140&a=0&p=0&r=59e3d6c260cc80a14f91ee87290af93b",
        "image": "https://image-cdn.nct.vn/song/2023/05/24/b/d/9/f/1684930218696_300.jpg"
      },
      {
        "key": "RlwbE64Zg1DV",
        "title": "Cất Lại Mùa Hè Của Em",
        "artists": [
          "minhthuy",
          "Minh Cà Ri",
          "Rica"
        ],
        "duration": 192,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2040/CatLaiMuaHeCuaEm-MinhThuyMinhCaRiRica-9545106.mp3?st=tZpoMVT6qq3A1qkWg2Flrg&e=1794577140&a=0&p=0&r=59e3d6c260cc80a14f91ee87290af93b",
        "image": "https://image-cdn.nct.vn/song/2023/05/24/b/d/9/f/1684930167580_300.jpg"
      },
      {
        "key": "B7u4OnMHPmE3",
        "title": "Khúc Valse Hoàng Hôn",
        "artists": [
          "Đăng Giang",
          "minhthuy",
          "Minh Cà Ri"
        ],
        "duration": 150,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2040/KhucValseHoangHon-DangGiangMinhThuyMinhCaRi-9545105.mp3?st=UhETLWRgfkLgYoyqb1eFZA&e=1794577140&a=0&p=0&r=59e3d6c260cc80a14f91ee87290af93b",
        "image": "https://image-cdn.nct.vn/song/2023/05/24/b/d/9/f/1684930077479_300.jpg"
      }
    ]
  },
  {
    "id": "playlist-genz-indie",
    "name": "🌿 Gen Z & Indie Focus Flow (Sáng Tạo & Năng Động)",
    "description": "Giai điệu trẻ trung, tươi mới, bay bổng của làn sóng âm nhạc Gen Z & Indie Việt, khơi nguồn cảm hứng làm việc và học tập hiệu quả (75 bài hát).",
    "createdAt": "2026-11-07T14:27:40.187Z",
    "version": "2.2.0",
    "songs": [
      {
        "key": "A3Paw1blPQuR",
        "title": "QUAY ĐI QUAY LẠI",
        "artists": [
          "HIEUTHUHAI",
          "ANH TRAI \"SAY HI\""
        ],
        "duration": 210,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NCTSong/2409/55/33/8fjymv06r3.mp3?st=wHj5sEmRsw8hOfplXsrs5A&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2024/08/31/5/f/c/2/1725070519239_300.jpg"
      },
      {
        "key": "9hVrZ2qY9XqD",
        "title": "Sao Hạng A",
        "artists": [
          "ANH TRAI \"SAY HI\"",
          "HIEUTHUHAI",
          "Dương Domic",
          "Song Luân",
          "JSOL",
          "Trần Đăng Dương"
        ],
        "duration": 252,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/Warner_Audio270/SaoHangAFeatHieuthuhaiDuongDomicSongLuanJsolTranDangDuong-ANHTRAISAYHI-16206185.mp3?st=4970CUZdb_MO109HFMD71w&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2024/09/13/f/1/0/2/1726246384758_300.jpg"
      },
      {
        "key": "ITZdSZPfW2PF",
        "title": "I'M THINKING ABOUT YOU",
        "artists": [
          "ANH TRAI \"SAY HI\"",
          "RHYDER",
          "WEAN",
          "Đức Phúc",
          "Gemini Hùng Huỳnh",
          "tlinh"
        ],
        "duration": 278,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/Warner_Audio257/IMThinkingAboutYouFeatRhyderWeanDucPhucHungHuynhTlinh-ANHTRAISAYHI-15631775.mp3?st=Ou23s_kpqQBjwcmaT5wmUA&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2024/08/09/b/d/0/0/1723211825063_300.jpg"
      },
      {
        "key": "Mrg5s5IfnvUx",
        "title": "Lời Đường Mật (Remix)",
        "artists": [
          "Lyly",
          "HIEUTHUHAI"
        ],
        "duration": 276,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1008/LoiDuongMatRemix-LylyHIEUTHUHAI-6859730.mp3?st=7GVEWp5vB0ZW8AuWDhmfgg&e=1794568319&a=8&p=0&r=763a6e71-413f-4016-ab1e-6a274444200a",
        "image": "https://image-cdn.nct.vn/song/2020/12/03/6/a/a/3/1606987904645_300.jpg"
      },
      {
        "key": "9tnlqUId7YsA",
        "title": "ĐÃ XINH LẠI CÒN THÔNG MINH",
        "artists": [
          "EM XINH \"SAY HI\"",
          "Bích Phương",
          "Miu Lê",
          "Phương Ly",
          "Bảo Anh",
          "Orange",
          "Lyly",
          "Hoàng Duyên",
          "Chi Xê",
          "Vũ Thảo My",
          "Ngô Lan Hương",
          "LAMOON",
          "Quỳnh Anh Shyn",
          "Saabirose",
          "Liu Grace",
          "Mỹ Mỹ"
        ],
        "duration": 236,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/resa/2506/1b/63/h48wv060p1.mp3?st=gge9MSKOZIh3d9ujfCgAuw&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2025/06/02/e/b/8/e/1748842250540_300.jpg"
      },
      {
        "key": "hzxaln2Xti2U",
        "title": "EM XINH EM BLING",
        "artists": [
          "EM XINH \"SAY HI\"",
          "Pháo",
          "Phương Ly",
          "Juky San",
          "Chi Xê",
          "Hoàng Duyên"
        ],
        "duration": 202,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/resa/2506/19/07/dwwjpscho6.mp3?st=EHGdPPlz9F7WfJ8OSvsi8w&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2025/06/09/5/3/6/3/1749442857092_300.jpg"
      },
      {
        "key": "KNFKUBzKwmJX",
        "title": "Chờ Em Đến",
        "artists": [
          "EREN",
          "Bbynascar",
          "nVu"
        ],
        "duration": 159,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2059/ChoEmDen-ERENVietNamBbynascarnVuVietNam-41053962.mp3?st=FmqOGeyeeDwhXluqry8ohg&e=1794577137&a=0&p=0&r=a41d39994dac3234002e29a1115b89f0",
        "image": "https://image-cdn.nct.vn/song/2026/03/16/7/c/1/b/1773636970644_300.jpg"
      },
      {
        "key": "QusqRM2M6i2a",
        "title": "Thằng nào làm em suy (Remix)",
        "artists": [
          "Freaky",
          "Chúc Hỷ",
          "Eopixi",
          "King JB"
        ],
        "duration": 205,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2059/ThangNaoLamEmSuyRemix-FreakyChucHyEopixiKingJB-40994165.mp3?st=2ghiOosY223kI6zcOLxwYw&e=1794577139&a=0&p=0&r=e9d640806fdc94face6305b502720edc",
        "image": "https://image-cdn.nct.vn/song/2026/03/10/b/0/c/d/1773141426645_300.jpg"
      },
      {
        "key": "VNPqe8Hq0FRq",
        "title": "tiny love",
        "artists": [
          "Thịnh Suy"
        ],
        "duration": 158,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1024/TinyLove-ThinhSuy-7122314.mp3?st=QbVRc6flMc-0NfkLfFSGwA&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/12/03/6/8/e/4/1638519606788_300.jpg"
      },
      {
        "key": "WG0wcxnMbccF",
        "title": "Summer Vibe",
        "artists": [
          "Pay",
          "Thịnh Suy"
        ],
        "duration": 168,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1016/SummerVibe-PayVietNamThinhSuy-7030872.mp3?st=uQsc8yUXr6H51CJmNz9y-Q&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/06/09/b/d/a/0/1623212624112_300.jpg"
      },
      {
        "key": "5IoB6SmTPxXT",
        "title": "Vài Giọt Sương Mai",
        "artists": [
          "Quinf",
          "Catchellers",
          "Billis"
        ],
        "duration": 206,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2059/VaiGiotSuongMai-QuinfCatchellersBillis-39150438.mp3?st=ZWWi47kWIAQs7OxvXIquFQ&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2025/10/27/0/2/e/b/1761561291852_300.jpg"
      },
      {
        "key": "IfYMlwyQfM6n",
        "title": "tết tình",
        "artists": [
          "TINH HÀ \"SAY HI\"",
          "Jaysonlei",
          "Sơn.K",
          "DILLAN",
          "Đặng Hồng Hải"
        ],
        "duration": 220,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/resa/2608/ff/da/dh081ws7js.mp3?st=iGArZwgKOzFSfoe5sk5EdA&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2026/08/14/t/8/e/K/1786702328021_300.jpg"
      },
      {
        "key": "zsouw4byMWGx",
        "title": "Đan Vào Nhau Một Lát",
        "artists": [
          "(S)TRONG"
        ],
        "duration": 155,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2059/DanVaoNhauMotLat-STRONG-39948616.mp3?st=DFMyo5Zif0QuG4tydc8w2Q&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2025/12/29/2/a/9/8/1766991970392_300.jpg"
      },
      {
        "key": "fcV0M5IUSZoH",
        "title": "Hót Hòn Họt",
        "artists": [
          "Hương Giang",
          "Saabirose",
          "D.A"
        ],
        "duration": 227,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2048/HotHonHot-HuongGiangSaabiroseDA-12441345.mp3?st=dmUbWd014zCvwRizKJFrMw&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2023/11/16/6/6/d/6/1700132010747_300.jpg"
      },
      {
        "key": "QYCxmdZwMyq7",
        "title": "Vì Anh Là Tình Đầu",
        "artists": [
          "Chí Chương",
          "Namchan"
        ],
        "duration": 261,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2059/ViAnhLaTinhDau-ChiChuongNamchan-40624039.mp3?st=rrUBxj-ENPYw_PviARDoIw&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2026/02/09/f/f/5/7/1770628117720_300.jpg"
      },
      {
        "key": "VLAGE4PTnXZa",
        "title": "SI EM",
        "artists": [
          "Thanh Tú"
        ],
        "duration": 201,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2059/SIEM-ThanhTu-40641923.mp3?st=euQf-7vzC0iqTojyJPhO5A&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2026/02/10/6/a/c/6/1770715705598_300.jpg"
      },
      {
        "key": "QUXNNFM8WJfK",
        "title": "ĐẶT CÁI TÊN EM LÊN HÀNG ĐẦU",
        "artists": [
          "Cassano"
        ],
        "duration": 195,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2058/DATCAITENEMLENHANGDAU-Cassano-35312888.mp3?st=Tof63B9KXHF_SjpJIEOaUA&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2025/02/07/a/8/5/0/1738922208308_300.jpg"
      },
      {
        "key": "PYOHqKw9GimB",
        "title": "Tình Yêu Màu Nắng",
        "artists": [
          "Đoàn Thúy Trang",
          "BigDaddy"
        ],
        "duration": 285,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2037/TinhYeuMauNang-DoanThuyTrang-8899940.mp3?st=eNmxC7a0hBU4-FusHpHqfw&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2023/03/24/3/2/2/6/1679658021838_300.jpg"
      },
      {
        "key": "z8jFgXYtQj7a",
        "title": "Không Sao Đâu (Acoustic Version)",
        "artists": [
          "WHEE!"
        ],
        "duration": 208,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2058/KhongSaoDauAcousticVersion-WHEE-35238516.mp3?st=psg_cTbsaa6XM4vE0i5bCg&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2025/02/03/2/c/2/b/1738579971236_300.jpg"
      },
      {
        "key": "y0XtKvMKrz55",
        "title": "Hà Nội Và Em",
        "artists": [
          "Minh Cà Ri",
          "Lâm Phúc"
        ],
        "duration": 319,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2059/HaNoiVaEm-MinhCaRiLamPhuc-40977832.mp3?st=DtSSZGjXV6GFJ9qrEwMYIg&e=1794577140&a=0&p=0&r=59e3d6c260cc80a14f91ee87290af93b",
        "image": "https://image-cdn.nct.vn/song/2026/03/09/6/a/4/4/1773054645722_300.jpg"
      },
      {
        "key": "En0MGqSieGxH",
        "title": "nếu mai chia tay",
        "artists": [
          "MONSTAR",
          "AMEE"
        ],
        "duration": 205,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1020/neumaichiatay-MONSTARAMEE-7057196.mp3?st=HL_sXXSjhq5_6hsYAvg2Og&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/07/30/a/0/c/2/1627616265915_300.jpg"
      },
      {
        "key": "iBZzLiPGcKPo",
        "title": "Ngây Thơ (Phong Max Remix)",
        "artists": [
          "Tăng Duy Tân"
        ],
        "duration": 268,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1004/NgayThoPhongMaxRemix-TangDuyTan-6689614.mp3?st=Iaf3kOvZXIoFe_Ktgv4f5A&e=1794568319&a=8&p=0&r=763a6e71-413f-4016-ab1e-6a274444200a",
        "image": "https://image-cdn.nct.vn/song/2020/09/29/a/a/f/c/1601351809763_300.jpg"
      },
      {
        "key": "FY0A6ONtGfXn",
        "title": "Chạy Khỏi Thế Giới Này (Cukak Remix)",
        "artists": [
          "Da LAB",
          "Phương Ly"
        ],
        "duration": 294,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2023/ChayKhoiTheGioiNayCukakRemix-DaLABPhuongLy-7583822.mp3?st=f2gvYkLF2OQhXUyIjL1jzw&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2022/07/06/5/e/b/8/1657077703565_300.jpg"
      },
      {
        "key": "JPvSFraXdEAT",
        "title": "Trái Đất Đẹp Nhất Khi Có Em",
        "artists": [
          "Đức Phúc",
          "ViruSs"
        ],
        "duration": 184,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui996/TraiDatDepNhatKhiCoEm-DucPhucViruSs-6238530.mp3?st=4GvRierFfusJHickaYGLpQ&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2020/03/19/2/6/e/8/1584587405790_300.jpg"
      },
      {
        "key": "GhjCJqbl700Z",
        "title": "VỖ TAY",
        "artists": [
          "EM XINH \"SAY HI\"",
          "Phương Ly"
        ],
        "duration": 241,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/resa/2508/61/bf/b6kzt769ea.mp3?st=oPQJF8VH_aaag1XPdiCL1w&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2025/08/19/p/8/e/b/1755557818393_300.jpg"
      },
      {
        "key": "LOdF31bmyFFZ",
        "title": "Summertime",
        "artists": [
          "datfitzx",
          "Bluejee",
          "Halee",
          "Chein",
          "Tri Dung Do",
          "Toun"
        ],
        "duration": 217,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2028/Summertime-datfitzxBluejeeHaleeCheinTriDungDoTounVietNam-7846999.mp3?st=dwl5ebudjn6Gd_URKCWZ8A&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2022/09/05/e/9/8/e/1662357647813_300.jpg"
      },
      {
        "key": "ls6F412920fa",
        "title": "Mùa Hè Của Ai?",
        "artists": [
          "Hoàng KayLee",
          "kisstherajn"
        ],
        "duration": 224,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1008/MuaHeCuaAi-HoangKayLeekisstherajn-6890065.mp3?st=JxQj1cZRw0CYjOlFHr3JPA&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2020/12/16/c/3/5/6/1608112993626_300.jpg"
      },
      {
        "key": "rieB2lCoU8CY",
        "title": "Biển Trời Mênh Mông",
        "artists": [
          "Aki (7UPPERCUTS)",
          "CAM",
          "Juan Phi",
          "yeuquaimohihi"
        ],
        "duration": 234,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1009/BienTroiMenhMong-AkiVNCAMVNJuanPhiyeuquaimohihi-6898955.mp3?st=ObB7f9QJ45WTRPXn72U99g&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2020/12/31/0/b/6/d/1609412193067_300.jpg"
      },
      {
        "key": "XeTizgkuMUBQ",
        "title": "Anh Là Nắng Em Là Nhà",
        "artists": [
          "CORA Trinh Phạm",
          "Lous $"
        ],
        "duration": 216,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2046/AnhLaNangEmLaNha-CORATrinhPhamLous-11959461.mp3?st=Rw5hBpun5K5QWwkiktcxmA&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2023/10/15/e/1/f/b/1697309075294_300.jpg"
      },
      {
        "key": "H1HnswFaeEkP",
        "title": "Mr Say Đắm",
        "artists": [
          "1DEE"
        ],
        "duration": 191,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1003/MrSayDam-1DEE-6651985.mp3?st=9Pfv4hC1FOJqmdVNxSBOiQ&e=1794568319&a=8&p=0&r=763a6e71-413f-4016-ab1e-6a274444200a",
        "image": "https://image-cdn.nct.vn/song/2020/09/21/9/4/2/4/1600675444626_300.jpg"
      },
      {
        "key": "fayzdDiXXuuO",
        "title": "SAY",
        "artists": [
          "Lena",
          "T.R.I"
        ],
        "duration": 177,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui998/Say-LenaLenaTRI-6272674.mp3?st=ufbZIWRYurZhVhEefBmy8w&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2020/05/08/7/a/1/d/1588913559930_300.jpg"
      },
      {
        "key": "xqI1jfaOUztS",
        "title": "But Me Too",
        "artists": [
          "Freaky",
          "Harose"
        ],
        "duration": 188,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1001/ButMeToo-FreakyHaro-6323429.mp3?st=6FCShK1NepQeCz1gZlJF6w&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2020/07/07/a/2/2/f/1594109122957_300.jpg"
      },
      {
        "key": "EDQEXFnNePZv",
        "title": "Love You Need You",
        "artists": [
          "Jayden",
          "Wansentai"
        ],
        "duration": 150,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1001/LoveYouNeedYou-JaydenWansentai-6323762.mp3?st=N9xOxJXtJkgwZXI6AOF8Fg&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2020/07/09/d/2/5/f/1594267362489_300.jpg"
      },
      {
        "key": "pNlk1CcSUhiE",
        "title": "Yêu Đi Anh Ơi",
        "artists": [
          "Kiều Phạm",
          "RHYDER"
        ],
        "duration": 231,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1001/YeuDiAnhOi-KieuPhamQuangAnhRhyder-6332599.mp3?st=dzJtSqSegE3m6wtFDSH0kA&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2020/07/15/b/b/c/7/1594802958128_300.jpg"
      },
      {
        "key": "nsVsorpQpiav",
        "title": "Green Love",
        "artists": [
          "Cashmel",
          "QNT"
        ],
        "duration": 168,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1024/GreenLoveChillNFree-CashmelQNT-7123639.mp3?st=d0wSqtmQLz6XHmzd56Ep7g&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/12/16/7/7/f/6/1639636972309_300.jpg"
      },
      {
        "key": "djSI0psIaQZN",
        "title": "EM KHÔNG CÓ ƯA",
        "artists": [
          "EM XINH \"SAY HI\"",
          "Tiên Tiên",
          "Bảo Anh",
          "Ánh Sáng AZA",
          "Saabirose"
        ],
        "duration": 241,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/resa/2507/82/11/rm0sydyfl3.mp3?st=yceFbN0uHmJh3nfxCCaJFw&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2025/07/11/5/d/2/f/1752211873082_300.jpg"
      },
      {
        "key": "0vDM6esY9Uem",
        "title": "I Luv U Chucamo",
        "artists": [
          "Hino",
          "Titie",
          "Daduc"
        ],
        "duration": 179,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2022/ILuvYouChucamo-HinoTitieDaduc-7486544.mp3?st=OOdP_u1_9cv1ita26SeXFQ&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2022/06/15/f/f/d/8/1655287454354_300.jpg"
      },
      {
        "key": "Fs1nRWH5uPcP",
        "title": "Thanh Xuân Muôn Màu",
        "artists": [
          "CORA Trinh Phạm",
          "Whisty Eazy"
        ],
        "duration": 216,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2046/ThanhXuanMuonMau-CORATrinhPhamWhistyEazy-11959464.mp3?st=GI6A7PjC-rleBun108eL5Q&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2023/10/15/e/1/f/b/1697309694684_300.jpg"
      },
      {
        "key": "qGmfTN4Z2DKO",
        "title": "Tối Thứ 7",
        "artists": [
          "Groovie Lã Thắng",
          "Trung Trần"
        ],
        "duration": 230,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1003/ToiThu7-GroovieLaThangTrungTran-6588030.mp3?st=1g4Pae-SmOKUZVHf0aGkWg&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2020/09/03/9/e/8/4/1599109030421_300.jpg"
      },
      {
        "key": "xa5CaLd9j48J",
        "title": "The Stars (female Version)",
        "artists": [
          "ANH TRAI \"SAY HI\"",
          "Juky San",
          "Liz Kim Cương",
          "Mỹ Mỹ",
          "52Hz",
          "Pháo"
        ],
        "duration": 217,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/Warner_Audio270/TheStarsFeatJukySanLizKimCuongMyMy52hzPhaofemaleVersion-ANHTRAISAYHI-16206187.mp3?st=YjTQPRxhJiqf87bMd5M1Nw&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2024/10/02/2/a/f/2/1727859430047_300.jpg"
      },
      {
        "key": "0xfmXrPXLLqm",
        "title": "LAMMOM",
        "artists": [
          "LAMOON",
          "JustaTee"
        ],
        "duration": 240,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2059/LAMMOM-LAMOONJustaTee-38289124.mp3?st=Ry7dy3GvGlqoGXZ8oVMdpw&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2025/08/28/a/8/1/2/1756373711209_300.jpg"
      },
      {
        "key": "IqxZYqxhZKXw",
        "title": "Khi Cơn Mơ Dần Phai",
        "artists": [
          "Tez",
          "Myra Trần",
          "RAP VIỆT"
        ],
        "duration": 195,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/Warner_Audio178/KhiConMoDanPhaiFeatTezMyraTran-RAPVIET-11341672.mp3?st=gSymghakut3R0CTx43TFeA&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2023/09/02/5/8/b/4/1693646405719_300.jpg"
      },
      {
        "key": "vJgL3DaveP8T",
        "title": "Từ A Đến Z",
        "artists": [
          "24k.Right",
          "RAP VIỆT"
        ],
        "duration": 197,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/Warner_Audio175/TuADenZFeat24kright-RAPVIET-11123998.mp3?st=i4nK4Eid_WZHeFYCSElyCA&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2023/08/25/b/5/0/5/1692965578320_300.jpg"
      },
      {
        "key": "dA7LfpmZrCJa",
        "title": "Vẫn Lit - Hội Không Nón",
        "artists": [
          "IndieK",
          "HURRYKNG",
          "CAPTAIN BOY",
          "OgeNus",
          "Strange H",
          "gung0cay",
          "Yuno BigBoi",
          "Tọi",
          "RAP VIỆT"
        ],
        "duration": 434,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/Warner_Audio181/VanLitHoiKhongNonFeatIndiekHurrykngCaptainOgenusStrangeHGung0cayYunoBigboiToi-RAPVIET-11540502.mp3?st=WD-4qxetnfsPVsCHF900YQ&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2023/09/09/9/1/e/5/1694255781566_300.jpg"
      },
      {
        "key": "ePuveeRWFQPT",
        "title": "Vải Thiều",
        "artists": [
          "Karik",
          "SMO",
          "RAP VIỆT"
        ],
        "duration": 190,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/Warner_Audio181/VaiThieuFeatKarikSmo-RAPVIET-11540498.mp3?st=QUtf1xpgMr4jtKToBvCjBg&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2023/09/09/9/1/e/5/1694255781566_300.jpg"
      },
      {
        "key": "ALJhFwSKaOm6",
        "title": "NOT MY FAULT",
        "artists": [
          "EM XINH \"SAY HI\"",
          "Mỹ Mỹ",
          "LyHan",
          "Liu Grace",
          "MAIQUINN"
        ],
        "duration": 245,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/resa/2507/a2/55/qy5ps38hfs.mp3?st=cgvZrUh7va1ZpCt_Qrsr9w&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2025/07/19/0/d/b/6/1752878626972_300.jpg"
      },
      {
        "key": "gio1Wqg9NlIp",
        "title": "AAA",
        "artists": [
          "EM XINH \"SAY HI\"",
          "Tiên Tiên",
          "Phương Mỹ Chi",
          "Juky San",
          "Lâm Bảo Ngọc",
          "52Hz",
          "Pháo",
          "Han Sara",
          "DANMY",
          "Muộii",
          "Ánh Sáng AZA",
          "桃子A1J",
          "LyHan",
          "MAIQUINN",
          "Châu Bùi",
          "Yeolan"
        ],
        "duration": 236,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/resa/2506/a2/bd/xp08sucoef.mp3?st=w3OD2XKahYX-VOGougNDBw&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2025/06/02/e/b/8/e/1748842250540_300.jpg"
      },
      {
        "key": "SE1G1K2nC0zu",
        "title": "NỖI ĐAU NGÂY DẠI",
        "artists": [
          "ANH TRAI \"SAY HI\"",
          "HIEUTHUHAI",
          "Đức Phúc",
          "Công Dương"
        ],
        "duration": 258,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/Warner_Audio245/NoiDauNgayDaiFeatHieuthuhaiDucPhucCongDuong-ANHTRAISAYHI-15145547.mp3?st=fKnA1xgbbUHk4UDhwZbx0w&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2024/06/25/4/4/7/1/1719253194515_300.jpg"
      },
      {
        "key": "2qZT9niJWble",
        "title": "Take It Easy",
        "artists": [
          "Liu Grace",
          "RAP VIỆT"
        ],
        "duration": 164,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/Warner_Audio170/TakeItEasyFeatLiuGrace-RAPVIET-10574052.mp3?st=o_wOomV9iO3FR4JXOwXqVQ&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2023/08/05/3/1/c/1/1691173062137_300.jpg"
      },
      {
        "key": "phCXQoa5sVXU",
        "title": "CÓ EM VUI",
        "artists": [
          "RAP VIỆT",
          "Ngắn"
        ],
        "duration": 224,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/Warner_Audio271/CoEmVuiFeatNgan-RAPVIET-16313128.mp3?st=ht40jxp4-y71GTlbsUqp_w&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2024/10/04/1/9/d/7/1728054066115_300.jpg"
      },
      {
        "key": "QnXfeWz3oYtd",
        "title": "CỘNG",
        "artists": [
          "RAP VIỆT",
          "Nhật Hoàng",
          "Lil Van"
        ],
        "duration": 222,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/Warner_Audio276/CongFeatNhatHoangLilVan-RAPVIET-16560299.mp3?st=pftnHrUfvfuj3sep6pRTwA&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2024/10/25/e/f/7/3/1729872055681_300.jpg"
      },
      {
        "key": "1JITUz09WzVY",
        "title": "SAU ĐÊM NAY",
        "artists": [
          "ANH TRAI \"SAY HI\"",
          "ERIK",
          "Đức Phúc",
          "Quân A.P",
          "JSOL",
          "Gemini Hùng Huỳnh"
        ],
        "duration": 291,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/Warner_Audio259/SauDemNayFeatErikDucPhucQuanApJsolHungHuynh-ANHTRAISAYHI-15770779.mp3?st=tat6rq-mHbIrqc3iQL3tTg&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2024/08/17/f/b/4/4/1723893395674_300.jpg"
      },
      {
        "key": "0v5fPaVB4qmf",
        "title": "ANH TRAI NƯỚC VIỆT",
        "artists": [
          "ANH TRAI \"SAY HI\"",
          "ERIK",
          "Đức Phúc",
          "Quân A.P",
          "JSOL",
          "Gemini Hùng Huỳnh"
        ],
        "duration": 251,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/Warner_Audio259/AnhTraiNuocVietFeatErikDucPhucQuanApJsolHungHuynh-ANHTRAISAYHI-15770775.mp3?st=_hc6jCrFQbXzGGGIWLJsqQ&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2024/08/17/f/b/4/4/1723893395674_300.jpg"
      },
      {
        "key": "2DHGAbJCbp1b",
        "title": "BẢNH",
        "artists": [
          "ANH TRAI \"SAY HI\"",
          "Anh Tú Atus",
          "Song Luân",
          "RHYDER",
          "HURRYKNG",
          "CAPTAIN BOY",
          "Quang Trung",
          "Dương Domic",
          "Anh Tú",
          "JSOL",
          "Đỗ Phú Quí",
          "Tage",
          "Phạm Đình Thái Ngân",
          "Phạm Anh Duy",
          "Gemini Hùng Huỳnh",
          "ERIK"
        ],
        "duration": 217,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/Warner_Audio243/BangFeatAnhTuAtusSongLuanRhyderHurrykngCaptainQuangTrungDuongDomicAnhTuJsolDoPhuQuiTagePhamDinhThaiNganPhamAnhDuyHungHuynh-ANHTRAISAYHI-15065466.mp3?st=Kxof2sAB-5RkGVjffYIF-g&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2024/06/15/9/3/9/1/1718396273723_300.jpg"
      },
      {
        "key": "n3QoQ1P5WLHS",
        "title": "Tay-lai Pr0 (Tây-lai Pr0)",
        "artists": [
          "JustaTee",
          "Double2T",
          "RAP VIỆT"
        ],
        "duration": 258,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/Warner_Audio181/TaylaiPr0TaylaiPr0featJustateeDouble2t-RAPVIET-11540501.mp3?st=5dQxSKIWxfKPjVQV6a8mwg&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2023/09/09/9/1/e/5/1694255781566_300.jpg"
      },
      {
        "key": "k6WpGO5sdgOk",
        "title": "Baby Gọi Cho Anh",
        "artists": [
          "CAPTAIN BOY",
          "UMIE",
          "RAP VIỆT"
        ],
        "duration": 178,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/Warner_Audio165/BabyGoiChoAnhFeatCaptainUmie-RAPVIET-10126626.mp3?st=bdjVYHhZ00P0rAYZtUYHag&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2023/07/14/b/6/b/1/1689345321829_300.jpg"
      },
      {
        "key": "8fBWGX9hPFRW",
        "title": "GÃ SĂN CÁ",
        "artists": [
          "EM XINH \"SAY HI\"",
          "Lâm Bảo Ngọc",
          "Quỳnh Anh Shyn",
          "MAIQUINN",
          "Saabirose",
          "Quang Hùng MasterD"
        ],
        "duration": 232,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/resa/2507/fd/84/4g56qmjsg0.mp3?st=9x2NubS7cNqv04-ONlxQcw&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2025/07/01/1/4/c/4/1751334001626_300.jpg"
      },
      {
        "key": "vsof2Dbnkcis",
        "title": "QUẢ CHÍN QUÁ",
        "artists": [
          "EM XINH \"SAY HI\"",
          "52Hz",
          "Lâm Bảo Ngọc",
          "Pháo",
          "桃子A1J"
        ],
        "duration": 278,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/resa/2507/c1/7d/4nd3ryo1e4.mp3?st=j_Y6Hp3A-hz7_A3DGVLyRQ&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2025/07/19/0/d/b/6/1752878626972_300.jpg"
      },
      {
        "key": "b1oUdFyBk8Sp",
        "title": "CÁCH (YÊU ĐÚNG) ĐIỆU",
        "artists": [
          "EM XINH \"SAY HI\"",
          "Bích Phương",
          "Juky San",
          "LAMOON",
          "Mỹ Mỹ",
          "Quỳnh Anh Shyn"
        ],
        "duration": 259,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/resa/2508/ab/bd/sqicol0oxo.mp3?st=CEf9fDjv6k7mDl_PlFrDXA&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2025/08/02/c/a/5/c/1754116077508_300.jpg"
      },
      {
        "key": "ZViQdtds3AH7",
        "title": "Tình Đầu Quá Chén",
        "artists": [
          "ANH TRAI \"SAY HI\"",
          "Quang Hùng MasterD",
          "Negav",
          "Pháp Kiều",
          "ERIK"
        ],
        "duration": 316,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/Warner_Audio270/TinhDauQuaChenFeatQuangHungMasterdNegavPhapKieuErik-ANHTRAISAYHI-16206182.mp3?st=sk043ivtYyvHl44GgUzyEg&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2024/09/13/f/1/0/2/1726246384758_300.jpg"
      },
      {
        "key": "PJMDWo8qSqvI",
        "title": "Tràn Bộ Nhớ",
        "artists": [
          "ANH TRAI \"SAY HI\"",
          "Dương Domic"
        ],
        "duration": 210,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/Warner_Audio265/TranBoNhoFeatDuongDomic-ANHTRAISAYHI-16027394.mp3?st=LGk5cFCklWAiOgHvh9EaZw&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2024/09/07/c/7/8/0/1725682110609_300.jpg"
      },
      {
        "key": "q8SklmjW6OZD",
        "title": "Notice Me",
        "artists": [
          "LAMOON"
        ],
        "duration": 150,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/resa/2509/9a/3b/gz6ctppr9q.mp3?st=D5ltUuFjUW8IGyhzJtxoJQ&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2025/08/28/a/8/1/2/1756372935184_300.jpg"
      },
      {
        "key": "UHcetfIoDMVA",
        "title": "Trời Nồm",
        "artists": [
          "LAMOON"
        ],
        "duration": 223,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/resa/2509/51/1c/qjdn3n4qi4.mp3?st=Mef_FAeGdDiLNJlztUWm0Q&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2025/08/28/a/8/1/2/1756373140385_300.jpg"
      },
      {
        "key": "porZF7XUoHf5",
        "title": "Nụ Hôn Dài Thoòng Loòng",
        "artists": [
          "LAMOON"
        ],
        "duration": 160,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/resa/2509/c5/8d/q0041gtph1.mp3?st=3iRyCt6SPeLPE-8MfRqw0w&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2025/08/28/a/8/1/2/1756374141267_300.jpg"
      },
      {
        "key": "CDbWgYBIP0W3",
        "title": "Synth Chúc Nâng Ly",
        "artists": [
          "LAMOON"
        ],
        "duration": 181,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2059/SynthChucNangLy-LAMOON-38149261.mp3?st=t7GCpOTMB_oQpgVPNaB0KQ&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2025/08/20/d/6/a/c/1755687383189_300.jpg"
      },
      {
        "key": "LqmjOFz9bG5t",
        "title": "Sao Hiểu Được",
        "artists": [
          "LAMOON"
        ],
        "duration": 143,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2048/SaoHieuDuoc-LAMOON-12708262.mp3?st=ayCxgyE0VSt98w_AtFvuBQ&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2023/12/04/9/a/1/2/1701686737603_300.jpg"
      },
      {
        "key": "p9RWHCldTEya",
        "title": "I'LL BE THERE",
        "artists": [
          "EM XINH \"SAY HI\"",
          "Orange",
          "Phương Mỹ Chi",
          "Han Sara",
          "LAMOON"
        ],
        "duration": 235,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/resa/2507/05/dd/8p9gnv55rl.mp3?st=X29eCMIe22qZidgvTyE0Vg&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2025/07/11/5/d/2/f/1752211873082_300.jpg"
      },
      {
        "key": "VxElKxG7k4UK",
        "title": "Lời Đường Mật",
        "artists": [
          "Lyly",
          "HIEUTHUHAI"
        ],
        "duration": 222,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1005/LoiDuongMat-LylyHIEUTHUHAI-6802155.mp3?st=4WZ0eqPxS6Dif_0TrvYhcg&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2020/11/05/4/4/6/c/1604552476279_300.jpg"
      },
      {
        "key": "lxDuygG2FF5d",
        "title": "Chạy Khỏi Thế Giới Này",
        "artists": [
          "Da LAB",
          "Phương Ly"
        ],
        "duration": 255,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2023/ChayKhoiTheGioiNay-DaLABPhuongLy-7574104.mp3?st=dKpmYzpKkMU4EoWbtV-Nig&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2022/06/27/6/d/1/7/1656334890653_300.jpg"
      },
      {
        "key": "vdXhGFEWSIMh",
        "title": "ĐOẠN KỊCH CÂM",
        "artists": [
          "ANH TRAI \"SAY HI\"",
          "CONGB",
          "Negav",
          "B Ray",
          "CODYNAMVO",
          "Phạm Đình Thái Ngân",
          "Mỹ Mỹ"
        ],
        "duration": 241,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/resa/2511/f4/eb/5yhdkqr2nz.mp3?st=FadsrrYOt47Uwhxcm73Igg&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2025/11/03/D/2/u/R/1762160793118_300.jpg"
      },
      {
        "key": "ljxRTVWmdNfT",
        "title": "CŨNG MAY LÀ Ế",
        "artists": [
          "ANH TRAI \"SAY HI\"",
          "B Ray",
          "Karik",
          "CODYNAMVO",
          "GILL",
          "Ryn Lee"
        ],
        "duration": 222,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/resa/2511/98/f0/z0qdlvettt.mp3?st=ZS_x9AjK-SxNTLqSdJxj7A&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2025/11/17/Y/f/D/T/1763353192712_300.jpg"
      },
      {
        "key": "qWmc2x35NHEk",
        "title": "MAKE UP",
        "artists": [
          "ANH TRAI \"SAY HI\"",
          "DILLAN",
          "buitruonglinh",
          "Đỗ Nam Sơn",
          "Lohan",
          "Ryn Lee",
          "Bảo Thy"
        ],
        "duration": 258,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/resa/2511/d3/53/eahs42sipx.mp3?st=SW5J3_YcUdD6H-ia5-cJ3A&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2025/11/03/D/2/u/R/1762160793118_300.jpg"
      },
      {
        "key": "0U4Pr5esABDT",
        "title": "REGRET",
        "artists": [
          "ANH TRAI \"SAY HI\"",
          "Quân A.P",
          "Pháp Kiều",
          "Quang Trung",
          "Ali Hoàng Dương",
          "Lâm Bảo Ngọc"
        ],
        "duration": 252,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/Warner_Audio256/RegretFeatQuanApPhapKieuQuangTrungAliHoangDuongLamBaoNgoc-ANHTRAISAYHI-15564775.mp3?st=4del4Okh93yiwVJT0mxECQ&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2024/08/02/6/5/b/a/1722607585053_300.jpg"
      },
      {
        "key": "QuQ5Abpdfad6",
        "title": "Đừng Phiền Anh (feat. Pháp Kiều)",
        "artists": [
          "Ali Hoàng Dương",
          "Pháp Kiều"
        ],
        "duration": 230,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2058/DungPhienAnhfeatPhapKieu-AliHoangDuongPhapKieu-36947727.mp3?st=EqK7lwof2ttoQKhhuySK-w&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2025/05/19/3/3/a/8/1747628343192_300.jpg"
      },
      {
        "key": "cnOYrRTVw5xV",
        "title": "một người như thế",
        "artists": [
          "TINH HÀ \"SAY HI\"",
          "WEAN",
          "Pháp Kiều",
          "CoolKid",
          "HURRYKNG"
        ],
        "duration": 274,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/resa/2608/be/66/hjs588w69u.mp3?st=Veo84k9qbirBythJ4Wxyzg&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2026/08/14/t/8/e/K/1786702328021_300.jpg"
      }
    ]
  },
  {
    "id": "playlist-love-sweet",
    "name": "🌸 Pop Tình Ca Ngọt Ngào & Yêu Đời (Happy Love)",
    "description": "Giai điệu lãng mạn, vui tươi, ngọt ngào tràn ngập tình yêu đôi lứa, mang lại nụ cười và cảm xúc tích cực suốt cả ngày dài (75 bài hát).",
    "createdAt": "2026-11-07T14:27:40.189Z",
    "version": "2.2.0",
    "songs": [
      {
        "key": "JzDZ5BW4RSTI",
        "title": "Nơi Này Có Anh",
        "artists": [
          "Sơn Tùng M-TP"
        ],
        "duration": 260,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui937/NoiNayCoAnh-SonTungMTP-4772041.mp3?st=D9UF0YaPF7HWgfJpFzl-CA&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2024/03/15/4/c/b/d/1710498649541_300.jpg"
      },
      {
        "key": "PDQhy2jOk147",
        "title": "CÓ CHẮC YÊU LÀ ĐÂY",
        "artists": [
          "Sơn Tùng M-TP"
        ],
        "duration": 202,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2053/COCHACYEULADAY-SonTungMTP-6316913.mp3?st=JrbAOEqvq860fsv8r2D5OA&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2024/03/15/4/c/b/d/1710497543374_300.jpg"
      },
      {
        "key": "2AwsjotRy1ES",
        "title": "Muộn Rồi Mà Sao Còn",
        "artists": [
          "Sơn Tùng M-TP"
        ],
        "duration": 275,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/Believe_Audio19/MuonRoiMaSaoCon-SonTungMTP-7011803.mp3?st=ixrnqOq70dEEPrBKOcVNHA&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/04/29/9/1/f/8/1619691182261_300.jpg"
      },
      {
        "key": "JPvSFraXdEAT",
        "title": "Trái Đất Đẹp Nhất Khi Có Em",
        "artists": [
          "Đức Phúc",
          "ViruSs"
        ],
        "duration": 184,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui996/TraiDatDepNhatKhiCoEm-DucPhucViruSs-6238530.mp3?st=4GvRierFfusJHickaYGLpQ&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2020/03/19/2/6/e/8/1584587405790_300.jpg"
      },
      {
        "key": "Mrg5s5IfnvUx",
        "title": "Lời Đường Mật (Remix)",
        "artists": [
          "Lyly",
          "HIEUTHUHAI"
        ],
        "duration": 276,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1008/LoiDuongMatRemix-LylyHIEUTHUHAI-6859730.mp3?st=7GVEWp5vB0ZW8AuWDhmfgg&e=1794568319&a=8&p=0&r=763a6e71-413f-4016-ab1e-6a274444200a",
        "image": "https://image-cdn.nct.vn/song/2020/12/03/6/a/a/3/1606987904645_300.jpg"
      },
      {
        "key": "9tnlqUId7YsA",
        "title": "ĐÃ XINH LẠI CÒN THÔNG MINH",
        "artists": [
          "EM XINH \"SAY HI\"",
          "Bích Phương",
          "Miu Lê",
          "Phương Ly",
          "Bảo Anh",
          "Orange",
          "Lyly",
          "Hoàng Duyên",
          "Chi Xê",
          "Vũ Thảo My",
          "Ngô Lan Hương",
          "LAMOON",
          "Quỳnh Anh Shyn",
          "Saabirose",
          "Liu Grace",
          "Mỹ Mỹ"
        ],
        "duration": 236,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/resa/2506/1b/63/h48wv060p1.mp3?st=gge9MSKOZIh3d9ujfCgAuw&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2025/06/02/e/b/8/e/1748842250540_300.jpg"
      },
      {
        "key": "hzxaln2Xti2U",
        "title": "EM XINH EM BLING",
        "artists": [
          "EM XINH \"SAY HI\"",
          "Pháo",
          "Phương Ly",
          "Juky San",
          "Chi Xê",
          "Hoàng Duyên"
        ],
        "duration": 202,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/resa/2506/19/07/dwwjpscho6.mp3?st=EHGdPPlz9F7WfJ8OSvsi8w&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2025/06/09/5/3/6/3/1749442857092_300.jpg"
      },
      {
        "key": "FY0A6ONtGfXn",
        "title": "Chạy Khỏi Thế Giới Này (Cukak Remix)",
        "artists": [
          "Da LAB",
          "Phương Ly"
        ],
        "duration": 294,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2023/ChayKhoiTheGioiNayCukakRemix-DaLABPhuongLy-7583822.mp3?st=f2gvYkLF2OQhXUyIjL1jzw&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2022/07/06/5/e/b/8/1657077703565_300.jpg"
      },
      {
        "key": "En0MGqSieGxH",
        "title": "nếu mai chia tay",
        "artists": [
          "MONSTAR",
          "AMEE"
        ],
        "duration": 205,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1020/neumaichiatay-MONSTARAMEE-7057196.mp3?st=HL_sXXSjhq5_6hsYAvg2Og&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/07/30/a/0/c/2/1627616265915_300.jpg"
      },
      {
        "key": "KNFKUBzKwmJX",
        "title": "Chờ Em Đến",
        "artists": [
          "EREN",
          "Bbynascar",
          "nVu"
        ],
        "duration": 159,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2059/ChoEmDen-ERENVietNamBbynascarnVuVietNam-41053962.mp3?st=FmqOGeyeeDwhXluqry8ohg&e=1794577137&a=0&p=0&r=a41d39994dac3234002e29a1115b89f0",
        "image": "https://image-cdn.nct.vn/song/2026/03/16/7/c/1/b/1773636970644_300.jpg"
      },
      {
        "key": "QYCxmdZwMyq7",
        "title": "Vì Anh Là Tình Đầu",
        "artists": [
          "Chí Chương",
          "Namchan"
        ],
        "duration": 261,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2059/ViAnhLaTinhDau-ChiChuongNamchan-40624039.mp3?st=rrUBxj-ENPYw_PviARDoIw&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2026/02/09/f/f/5/7/1770628117720_300.jpg"
      },
      {
        "key": "kAOgYCUopEVC",
        "title": "Anh Yêu Nụ Cười Ấy",
        "artists": [
          "An Vũ"
        ],
        "duration": 184,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2038/AnhYeuNuCuoiAy-AnVu-9180211.mp3?st=bcZDPK202SD36j8JbMQjIQ&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2023/04/13/f/6/b/c/1681379933706_300.jpg"
      },
      {
        "key": "IfYMlwyQfM6n",
        "title": "tết tình",
        "artists": [
          "TINH HÀ \"SAY HI\"",
          "Jaysonlei",
          "Sơn.K",
          "DILLAN",
          "Đặng Hồng Hải"
        ],
        "duration": 220,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/resa/2608/ff/da/dh081ws7js.mp3?st=iGArZwgKOzFSfoe5sk5EdA&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2026/08/14/t/8/e/K/1786702328021_300.jpg"
      },
      {
        "key": "PYOHqKw9GimB",
        "title": "Tình Yêu Màu Nắng",
        "artists": [
          "Đoàn Thúy Trang",
          "BigDaddy"
        ],
        "duration": 285,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2037/TinhYeuMauNang-DoanThuyTrang-8899940.mp3?st=eNmxC7a0hBU4-FusHpHqfw&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2023/03/24/3/2/2/6/1679658021838_300.jpg"
      },
      {
        "key": "VNPqe8Hq0FRq",
        "title": "tiny love",
        "artists": [
          "Thịnh Suy"
        ],
        "duration": 158,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1024/TinyLove-ThinhSuy-7122314.mp3?st=QbVRc6flMc-0NfkLfFSGwA&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/12/03/6/8/e/4/1638519606788_300.jpg"
      },
      {
        "key": "EXQ7tU01R6HG",
        "title": "Em Ở Đây Mà (Acoustic Ver)",
        "artists": [
          "RUBY"
        ],
        "duration": 200,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2058/EmODayMaAcousticVer-RUBYVietNam-37112142.mp3?st=m7lDx2w0vIJzj8Ut6p6bYw&e=1794577147&a=0&p=0&r=d4d873af7a3eeb3560cc1b645c537f37",
        "image": "https://image-cdn.nct.vn/song/2025/06/09/5/3/6/3/1749454703913_300.jpg"
      },
      {
        "key": "5IoB6SmTPxXT",
        "title": "Vài Giọt Sương Mai",
        "artists": [
          "Quinf",
          "Catchellers",
          "Billis"
        ],
        "duration": 206,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2059/VaiGiotSuongMai-QuinfCatchellersBillis-39150438.mp3?st=ZWWi47kWIAQs7OxvXIquFQ&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2025/10/27/0/2/e/b/1761561291852_300.jpg"
      },
      {
        "key": "zsouw4byMWGx",
        "title": "Đan Vào Nhau Một Lát",
        "artists": [
          "(S)TRONG"
        ],
        "duration": 155,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2059/DanVaoNhauMotLat-STRONG-39948616.mp3?st=DFMyo5Zif0QuG4tydc8w2Q&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2025/12/29/2/a/9/8/1766991970392_300.jpg"
      },
      {
        "key": "VLAGE4PTnXZa",
        "title": "SI EM",
        "artists": [
          "Thanh Tú"
        ],
        "duration": 201,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2059/SIEM-ThanhTu-40641923.mp3?st=euQf-7vzC0iqTojyJPhO5A&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2026/02/10/6/a/c/6/1770715705598_300.jpg"
      },
      {
        "key": "1JITUz09WzVY",
        "title": "SAU ĐÊM NAY",
        "artists": [
          "ANH TRAI \"SAY HI\"",
          "ERIK",
          "Đức Phúc",
          "Quân A.P",
          "JSOL",
          "Gemini Hùng Huỳnh"
        ],
        "duration": 291,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/Warner_Audio259/SauDemNayFeatErikDucPhucQuanApJsolHungHuynh-ANHTRAISAYHI-15770779.mp3?st=tat6rq-mHbIrqc3iQL3tTg&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2024/08/17/f/b/4/4/1723893395674_300.jpg"
      },
      {
        "key": "ZViQdtds3AH7",
        "title": "Tình Đầu Quá Chén",
        "artists": [
          "ANH TRAI \"SAY HI\"",
          "Quang Hùng MasterD",
          "Negav",
          "Pháp Kiều",
          "ERIK"
        ],
        "duration": 316,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/Warner_Audio270/TinhDauQuaChenFeatQuangHungMasterdNegavPhapKieuErik-ANHTRAISAYHI-16206182.mp3?st=sk043ivtYyvHl44GgUzyEg&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2024/09/13/f/1/0/2/1726246384758_300.jpg"
      },
      {
        "key": "iBZzLiPGcKPo",
        "title": "Ngây Thơ (Phong Max Remix)",
        "artists": [
          "Tăng Duy Tân"
        ],
        "duration": 268,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1004/NgayThoPhongMaxRemix-TangDuyTan-6689614.mp3?st=Iaf3kOvZXIoFe_Ktgv4f5A&e=1794568319&a=8&p=0&r=763a6e71-413f-4016-ab1e-6a274444200a",
        "image": "https://image-cdn.nct.vn/song/2020/09/29/a/a/f/c/1601351809763_300.jpg"
      },
      {
        "key": "fcV0M5IUSZoH",
        "title": "Hót Hòn Họt",
        "artists": [
          "Hương Giang",
          "Saabirose",
          "D.A"
        ],
        "duration": 227,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2048/HotHonHot-HuongGiangSaabiroseDA-12441345.mp3?st=dmUbWd014zCvwRizKJFrMw&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2023/11/16/6/6/d/6/1700132010747_300.jpg"
      },
      {
        "key": "y0XtKvMKrz55",
        "title": "Hà Nội Và Em",
        "artists": [
          "Minh Cà Ri",
          "Lâm Phúc"
        ],
        "duration": 319,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2059/HaNoiVaEm-MinhCaRiLamPhuc-40977832.mp3?st=DtSSZGjXV6GFJ9qrEwMYIg&e=1794577140&a=0&p=0&r=59e3d6c260cc80a14f91ee87290af93b",
        "image": "https://image-cdn.nct.vn/song/2026/03/09/6/a/4/4/1773054645722_300.jpg"
      },
      {
        "key": "DlRwGa7jJuHh",
        "title": "I Do",
        "artists": [
          "Trung Quân",
          "Bùi Anh Tuấn"
        ],
        "duration": 263,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2058/IDo-TrungQuanIdolBuiAnhTuan-35270376.mp3?st=GS-LIdToJO5J-xcuXxKLUw&e=1794577143&a=0&p=0&r=f7c68627f5b87d9a5ef7aba0e497d5de",
        "image": "https://image-cdn.nct.vn/song/2025/02/06/4/3/4/f/1738780499996_300.jpg"
      },
      {
        "key": "K2BRcdT93jok",
        "title": "Váy Hoa Nhí (Summertime)",
        "artists": [
          "Hoàng Minh Châu"
        ],
        "duration": 215,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2051/VayHoaNhiSummertime-HoangMinhChau-13605700.mp3?st=y7JDA38gmpgbiy0T7lAzzA&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2024/01/31/c/9/2/3/1706675722568_300.jpg"
      },
      {
        "key": "daOdLIxeZzRp",
        "title": "Váy Hoa Nhí",
        "artists": [
          "Hoàng Minh Châu"
        ],
        "duration": 179,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui999/VayHoaNhi-HoangMinhChau-6286711.mp3?st=9kV__J4yGI4GsV5d1FFNBA&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2020/05/27/0/b/b/a/1590552904341_300.jpg"
      },
      {
        "key": "mtzgFkqTvTVN",
        "title": "Gói Những Bông Hoa Nhỏ Tặng Em",
        "artists": [
          "Chủ Tịch Kim"
        ],
        "duration": 230,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1000/GoiNhungBongHoaNhoTangEm-ChuTichKim-6297070.mp3?st=L8963HV9ZzmFYhXCFjo_GA&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2020/06/11/2/a/2/1/1591865957016_300.jpg"
      },
      {
        "key": "Kx3Kbih0rS5z",
        "title": "Nàng Thơ",
        "artists": [
          "Hoàng Dũng"
        ],
        "duration": 254,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1001/NangTho-HoangDung-6413381.mp3?st=AwmMjN-WMTEtNDz6VA_DfA&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2020/07/31/c/5/8/9/1596188259603_300.jpg"
      },
      {
        "key": "upefyF17NlqI",
        "title": "Nàng Nắng",
        "artists": [
          "Frasol",
          "Censored X"
        ],
        "duration": 227,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2029/NangNang-FrasolCensoredX-8018130.mp3?st=M6Xqr4ybCcPMfMwmJGELLA&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2022/10/04/f/e/5/f/1664868112265_300.jpg"
      },
      {
        "key": "ynavp002XDI5",
        "title": "Hát Với Anh (Nắng Hạ Version)",
        "artists": [
          "Võ Việt Phương"
        ],
        "duration": 216,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2044/HatVoiAnhNangHaVersion-VoVietPhuong-11495759.mp3?st=YbdptAduFsLiOpYRWI9a0A&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2023/09/05/4/c/5/6/1693903659136_300.jpg"
      },
      {
        "key": "XeTizgkuMUBQ",
        "title": "Anh Là Nắng Em Là Nhà",
        "artists": [
          "CORA Trinh Phạm",
          "Lous $"
        ],
        "duration": 216,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2046/AnhLaNangEmLaNha-CORATrinhPhamLous-11959461.mp3?st=Rw5hBpun5K5QWwkiktcxmA&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2023/10/15/e/1/f/b/1697309075294_300.jpg"
      },
      {
        "key": "vT8iPGCfdPxl",
        "title": "Nắng",
        "artists": [
          "MEC Music Club"
        ],
        "duration": 249,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1016/Nang-MECMusicClub-7019187.mp3?st=835xdLha5n-JB-pRXG33oA&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/05/13/0/6/f/b/1620859946410_300.jpg"
      },
      {
        "key": "HMflFu2rNc2u",
        "title": "Nắng",
        "artists": [
          "The Cassette"
        ],
        "duration": 269,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1016/Nang-TheCassette-7031236.mp3?st=ZY1bfBsIlg0R_LEg5ugqdA&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/06/10/e/7/c/a/1623299539953_300.jpg"
      },
      {
        "key": "Ir50cFEcX6EY",
        "title": "Nắng Chiều Mùa Hạ",
        "artists": [
          "Trần Đình Trọng",
          "Long BIG"
        ],
        "duration": 185,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1025/NangChieuMuaHa-TranDinhTrongLongBIG-7126213.mp3?st=TvrCSbYeSKgPiU3C4m21Yw&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2022/01/07/2/5/8/e/1641549677865_300.jpg"
      },
      {
        "key": "QUC6IRrhsVKi",
        "title": "Em Là Tia Nắng",
        "artists": [
          "XIN"
        ],
        "duration": 57,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1025/EmLaTiaNang-XIN-7126152.mp3?st=s5vxXpmfVMlnEYyUHePnzQ&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2022/01/07/2/5/8/e/1641543706739_300.jpg"
      },
      {
        "key": "gCgeTznpFjf3",
        "title": "Mèo Say Nắng",
        "artists": [
          "Võ Ê Vo"
        ],
        "duration": 196,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2032/MeoSayNang-VoEVo-8392002.mp3?st=1p9QmqoKJC5XX-4rQSlmRQ&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2022/12/09/2/2/3/f/1670563548415_300.jpg"
      },
      {
        "key": "LO4w418r7aY0",
        "title": "Hoàng Hôn Muộn Nắng",
        "artists": [
          "KALYN"
        ],
        "duration": 191,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2037/HoangHonMuonNang-KALYN-9017099.mp3?st=XHD2aoOzz10uS0KJbUzvsA&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2023/04/06/3/1/2/5/1680766299442_300.jpg"
      },
      {
        "key": "NiUJYBEigV6g",
        "title": "Nắng",
        "artists": [
          "MANBO",
          "CHANEE"
        ],
        "duration": 165,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1004/Nang-MANBOCHANEE-6726958.mp3?st=ifQhNcWNymWCZ8wdTGE-Rg&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2020/10/09/d/b/3/d/1602232971503_300.jpg"
      },
      {
        "key": "LUAZBiboyU3L",
        "title": "Yêu Anh Vạn Kiếp (Love You 10,000)",
        "artists": [
          "Tiffany Bun"
        ],
        "duration": 219,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2059/YeuAnhVanKiepLoveYou10000-TiffanyBun-40955875.mp3?st=F_HzcDyjL9eSEvB74ZHY4g&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2026/03/06/8/6/e/f/1772790471485_300.jpg"
      },
      {
        "key": "wQzSLqO3qtaC",
        "title": "Biết Yêu Thật Nhiều",
        "artists": [
          "SEANPOET",
          "Lemese"
        ],
        "duration": 207,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2034/BietYeuThatNhieu-SeanLemese-8512466.mp3?st=Nig4os3vKK8JWUGc1kFWFQ&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2025/09/17/1/9/d/0/1758102997967_300.jpg"
      },
      {
        "key": "pNlk1CcSUhiE",
        "title": "Yêu Đi Anh Ơi",
        "artists": [
          "Kiều Phạm",
          "RHYDER"
        ],
        "duration": 231,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1001/YeuDiAnhOi-KieuPhamQuangAnhRhyder-6332599.mp3?st=dzJtSqSegE3m6wtFDSH0kA&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2020/07/15/b/b/c/7/1594802958128_300.jpg"
      },
      {
        "key": "GwaJyk6bPooO",
        "title": "Chẳng Yêu Ai Khác",
        "artists": [
          "Solsilva"
        ],
        "duration": 166,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2059/ChangYeuAiKhac-Solsilva-39592975.mp3?st=E32JBiYqnsEiltHPWqc50A&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2025/12/01/2/8/0/8/1764563727270_300.jpg"
      },
      {
        "key": "juyGG3ymx0pv",
        "title": "Câu Chuyện Tình Yêu",
        "artists": [
          "Nhữ Thuỳ Dương"
        ],
        "duration": 232,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2037/CauChuyenTinhYeu-NhuThuyDuong-8972171.mp3?st=PWA4QkaS__-EaFXDcFUlhQ&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2023/04/04/c/3/f/a/1680577394129_300.jpg"
      },
      {
        "key": "cgc3Rz1XXZ4f",
        "title": "Chỉ Cần Vậy Thôi Yêu Là Yêu",
        "artists": [
          "KALYN",
          "Ray.D"
        ],
        "duration": 249,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2037/ChiCanVayThoiYeuLaYeu-KALYNRayD-9017064.mp3?st=0NNsF6JsKDWuICA0luKLRQ&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2023/04/06/3/1/2/5/1680766230719_300.jpg"
      },
      {
        "key": "rKGimpeom1sA",
        "title": "Vì Anh Yêu Em",
        "artists": [
          "SO"
        ],
        "duration": 200,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2038/ViAnhYeuEm-SOVietNam-9297073.mp3?st=uE_hb13i9JoSQyQZuPVcAQ&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2023/04/21/2/1/7/d/1682052297494_300.jpg"
      },
      {
        "key": "iJEqdSiqdW30",
        "title": "MÃI YÊU EM",
        "artists": [
          "Đào Ngọc Sang"
        ],
        "duration": 203,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2040/MAIYEUEM-DaoNgocSang-9544672.mp3?st=24orHGe7n7Oai1bybV9pJA&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2023/05/23/0/1/e/d/1684838362481_300.jpg"
      },
      {
        "key": "GSt5UWi1QbS2",
        "title": "Rằng Em Chưa Yêu Ai Khác Ngoài Anh",
        "artists": [
          "Đào Ngọc Sang",
          "SUMMER VEE"
        ],
        "duration": 202,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2041/RangEmChuaYeuAiKhacNgoaiAnh-DaoNgocSangSummerVee-9682497.mp3?st=NAIBCDHGrF5vLmLiib42_w&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2023/06/15/3/e/2/5/1686810606260_300.jpg"
      },
      {
        "key": "Al3gy3Pw93cA",
        "title": "Yêu Trong 1s",
        "artists": [
          "Bâu"
        ],
        "duration": 171,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2044/YeuTrong1s-Bau-10895343.mp3?st=8y2ZficuCzt5k2Y58eoMOg&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2023/08/15/5/e/6/1/1692105942927_300.jpg"
      },
      {
        "key": "swLogZwM0CRD",
        "title": "Say Em Đắm Yêu",
        "artists": [
          "Phạm Đình Thái Ngân"
        ],
        "duration": 241,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2043/SayEmDamYeu-PhamDinhThaiNgan-10326095.mp3?st=6x2r-qwweBuLfUfUy426Lw&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2023/08/04/2/7/b/7/1691122747840_300.jpg"
      },
      {
        "key": "TbtRtzg9F2kf",
        "title": "Yêu Hay Không Yêu",
        "artists": [
          "Phạm Đình Thái Ngân"
        ],
        "duration": 175,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2044/YeuHayKhongYeu-PhamDinhThaiNgan-11226171.mp3?st=mrX39ceQHkHNmpBa8Eb_TA&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2023/08/29/1/9/2/3/1693296492816_300.jpg"
      },
      {
        "key": "w6uEIVEqVzpZ",
        "title": "Yêu Chầm Chậm Thôi",
        "artists": [
          "Ebe"
        ],
        "duration": 261,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2046/YeuChamChamThoi-EbeVietNam-11908693.mp3?st=U2AE_lsJ03cEf0XPG9Ra4g&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2023/10/10/6/2/b/4/1696932615610_300.jpg"
      },
      {
        "key": "9LpsOrl8yakH",
        "title": "khi tình yêu đến",
        "artists": [
          "Khải"
        ],
        "duration": 150,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2059/KhiTinhYeuDen-Khai-39252795.mp3?st=2Br5T6qciAkAMZgVhAwDYw&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2025/11/04/f/b/f/d/1762252860293_300.jpg"
      },
      {
        "key": "rDaJzzQ21egb",
        "title": "Không Yêu Cũng Chẳng Cô Đơn",
        "artists": [
          "Hưng Cacao"
        ],
        "duration": 234,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2057/KhongYeuCungChangCoDon-HungCacao-16212557.mp3?st=hStCz2bj-fXhC3kA3XUqLQ&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2024/09/26/7/4/1/c/1727326468213_300.jpg"
      },
      {
        "key": "AH93eSNO8ePt",
        "title": "Em Có Yêu Như Ngày Hôm Qua",
        "artists": [
          "THI"
        ],
        "duration": 231,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1020/EmCoYeuNhuNgayHomQua-THI-7069741.mp3?st=EFwemwvSxdxzYbfbrJOf8A&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/08/19/2/a/f/0/1629356626618_300.jpg"
      },
      {
        "key": "SE1G1K2nC0zu",
        "title": "NỖI ĐAU NGÂY DẠI",
        "artists": [
          "ANH TRAI \"SAY HI\"",
          "HIEUTHUHAI",
          "Đức Phúc",
          "Công Dương"
        ],
        "duration": 258,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/Warner_Audio245/NoiDauNgayDaiFeatHieuthuhaiDucPhucCongDuong-ANHTRAISAYHI-15145547.mp3?st=fKnA1xgbbUHk4UDhwZbx0w&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2024/06/25/4/4/7/1/1719253194515_300.jpg"
      },
      {
        "key": "Z0nggETbKCn5",
        "title": "Rơi Vào Tình Yêu",
        "artists": [
          "Anh Trai Vượt Ngàn Chông Gai",
          "Thái Lê Minh Hiếu"
        ],
        "duration": 152,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/resa/2607/17/5c/mmfzov2h5k.mp3?st=sa9DvbNfkkvvCPQ2fSGnnQ&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2026/07/03/I/P/r/Z/1783055620241_300.jpg"
      },
      {
        "key": "9Fd4zVvPMIbf",
        "title": "Em Của Ngày Hôm Qua",
        "artists": [
          "Sơn Tùng M-TP"
        ],
        "duration": 263,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2053/EmCuaNgayHomQua-SonTungMTP-2882720.mp3?st=Tk-kh8cqv0MIogKbIRZFJg&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2024/03/15/4/c/b/d/1710499255450_300.jpg"
      },
      {
        "key": "ITZdSZPfW2PF",
        "title": "I'M THINKING ABOUT YOU",
        "artists": [
          "ANH TRAI \"SAY HI\"",
          "RHYDER",
          "WEAN",
          "Đức Phúc",
          "Gemini Hùng Huỳnh",
          "tlinh"
        ],
        "duration": 278,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/Warner_Audio257/IMThinkingAboutYouFeatRhyderWeanDucPhucHungHuynhTlinh-ANHTRAISAYHI-15631775.mp3?st=Ou23s_kpqQBjwcmaT5wmUA&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2024/08/09/b/d/0/0/1723211825063_300.jpg"
      },
      {
        "key": "0v5fPaVB4qmf",
        "title": "ANH TRAI NƯỚC VIỆT",
        "artists": [
          "ANH TRAI \"SAY HI\"",
          "ERIK",
          "Đức Phúc",
          "Quân A.P",
          "JSOL",
          "Gemini Hùng Huỳnh"
        ],
        "duration": 251,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/Warner_Audio259/AnhTraiNuocVietFeatErikDucPhucQuanApJsolHungHuynh-ANHTRAISAYHI-15770775.mp3?st=_hc6jCrFQbXzGGGIWLJsqQ&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2024/08/17/f/b/4/4/1723893395674_300.jpg"
      },
      {
        "key": "2DHGAbJCbp1b",
        "title": "BẢNH",
        "artists": [
          "ANH TRAI \"SAY HI\"",
          "Anh Tú Atus",
          "Song Luân",
          "RHYDER",
          "HURRYKNG",
          "CAPTAIN BOY",
          "Quang Trung",
          "Dương Domic",
          "Anh Tú",
          "JSOL",
          "Đỗ Phú Quí",
          "Tage",
          "Phạm Đình Thái Ngân",
          "Phạm Anh Duy",
          "Gemini Hùng Huỳnh",
          "ERIK"
        ],
        "duration": 217,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/Warner_Audio243/BangFeatAnhTuAtusSongLuanRhyderHurrykngCaptainQuangTrungDuongDomicAnhTuJsolDoPhuQuiTagePhamDinhThaiNganPhamAnhDuyHungHuynh-ANHTRAISAYHI-15065466.mp3?st=Kxof2sAB-5RkGVjffYIF-g&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2024/06/15/9/3/9/1/1718396273723_300.jpg"
      },
      {
        "key": "GhjCJqbl700Z",
        "title": "VỖ TAY",
        "artists": [
          "EM XINH \"SAY HI\"",
          "Phương Ly"
        ],
        "duration": 241,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/resa/2508/61/bf/b6kzt769ea.mp3?st=oPQJF8VH_aaag1XPdiCL1w&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2025/08/19/p/8/e/b/1755557818393_300.jpg"
      },
      {
        "key": "b1oUdFyBk8Sp",
        "title": "CÁCH (YÊU ĐÚNG) ĐIỆU",
        "artists": [
          "EM XINH \"SAY HI\"",
          "Bích Phương",
          "Juky San",
          "LAMOON",
          "Mỹ Mỹ",
          "Quỳnh Anh Shyn"
        ],
        "duration": 259,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/resa/2508/ab/bd/sqicol0oxo.mp3?st=CEf9fDjv6k7mDl_PlFrDXA&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2025/08/02/c/a/5/c/1754116077508_300.jpg"
      },
      {
        "key": "Xn47CgVKxTAw",
        "title": "siêu người yêu",
        "artists": [
          "MiiNa",
          "RIN9",
          "DREAMeR"
        ],
        "duration": 198,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2058/SieuNguoiYeu-MiiNaDREAMeRRIN9DREAMeRVietNam-36456872.mp3?st=cTX3FvYEjRLbS_aCVrUOoQ&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2025/04/08/5/2/0/0/1744098770926_300.jpg"
      },
      {
        "key": "0N0kpOLu5blb",
        "title": "Tình Yêu Diệu Kỳ",
        "artists": [
          "MAIQUINN",
          "Nguyễn Hồng Thuận"
        ],
        "duration": 213,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2045/TinhYeuDieuKy-QuinnHienMaiNguyenHongThuan-11735881.mp3?st=ImleYMVIW0OeubVU-PK-Ow&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2023/09/19/a/5/e/6/1695118857105_300.jpg"
      },
      {
        "key": "HTqNfagZTfkV",
        "title": "Bé Yêu Học Hỏi Và Khám Phá (Kids Version)",
        "artists": [
          "Cuti Kid"
        ],
        "duration": 278,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NCTSong/2412/ff/ad/din3l48w9a.mp3?st=Mi2BFv2vUL83Fbrz1dKYZQ&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2024/12/24/2/7/9/c/84522_300.jpg"
      },
      {
        "key": "Hyl3zqeB8MkF",
        "title": "Nghe Nhạc Cùng Bé Yêu (Kids Version)",
        "artists": [
          "Cuti Kid"
        ],
        "duration": 194,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NCTSong/2412/1e/16/kh8ii9835f.mp3?st=BApCn0CA4tzrf6Lfq2EKtA&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2024/12/24/b/1/b/4/29657_300.jpg"
      },
      {
        "key": "KFtg2BraF5R4",
        "title": "Bé Yêu Ăn Ngon Và Khoẻ Mạnh",
        "artists": [
          "Cuti Kid"
        ],
        "duration": 199,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NCTSong/2412/e8/07/f5l976qvdv.mp3?st=ob857NSOYCfd7G_B_FYsAg&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2024/12/24/6/e/e/b/75273_300.jpg"
      },
      {
        "key": "U3s7BeHPNa5P",
        "title": "Bé Yêu Ngủ Ngon Trong Tiếng Nhạc Ru Êm Ái",
        "artists": [
          "Cuti Kid"
        ],
        "duration": 264,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NCTSong/2412/b2/ae/r9pmomsalg.mp3?st=6FOkg12kqCpqn62Gg4dZqQ&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2024/12/24/3/a/2/b/84784_300.jpg"
      },
      {
        "key": "24VFKJ1lHkPj",
        "title": "Giai Điệu Sôi Nổi Bé Yêu Phát Triển Toàn Diện",
        "artists": [
          "Cuti Kid"
        ],
        "duration": 208,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NCTSong/2412/dd/17/qqcncst7jx.mp3?st=aPB1QnNTuuQ4muHo_tadwQ&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2024/12/24/0/d/1/e/40737_300.jpg"
      },
      {
        "key": "y5AV2UPS2uHH",
        "title": "Học Hỏi Cùng Bé Yêu",
        "artists": [
          "Cuti Kid"
        ],
        "duration": 206,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NCTSong/2412/ee/2f/bsps5ikwl5.mp3?st=XhVhlqSiqbqywJF8Irq6Ig&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2024/12/24/4/5/b/7/35624_300.jpg"
      },
      {
        "key": "0dQBHnzaycNr",
        "title": "Tiếng Đàn Vui Nhộn Bên Bé Yêu Năng Động",
        "artists": [
          "Cuti Kid"
        ],
        "duration": 207,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NCTSong/2412/cc/5f/w21tfv5j7g.mp3?st=2M7grnptSK_5rSRlNWuAJA&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2024/12/24/7/3/9/f/97236_300.jpg"
      },
      {
        "key": "alAaFRae9Ktg",
        "title": "Mỗi Nốt Nhạc Kích Thích Phát Triển Não Bộ Bé Yêu",
        "artists": [
          "Cuti Kid"
        ],
        "duration": 206,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NCTSong/2412/d9/64/09og4ef8g7.mp3?st=YfS7Mog2m7gBdN0-o6SOUw&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2024/12/24/3/e/7/4/83321_300.jpg"
      },
      {
        "key": "FKLm3ZdjI5uR",
        "title": "Yêu Người Có Ước Mơ",
        "artists": [
          "buitruonglinh"
        ],
        "duration": 296,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2032/YeuNguoiCoUocMo-buitruonglinh-8396692.mp3?st=UOEnEoPJgQ_cWr_1HH3OrA&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2022/12/15/0/3/9/2/1671089368641_300.jpg"
      },
      {
        "key": "oKzPuAEgTz1h",
        "title": "Yêu Đi",
        "artists": [
          "Mabel",
          "ICY RIX"
        ],
        "duration": 147,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2059/YeuDi-MabelVietNamICYRIX-40062608.mp3?st=2icpt_0SeYuQ68N63PV9Rg&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2026/01/09/7/1/7/6/1767948355542_300.jpg"
      }
    ]
  }
];

  const STORAGE_KEYS = {
    AUTH: 'xmusic_auth_config',
    PLAYLISTS: 'xmusic_playlists',
    ACTIVE_PLAYLIST_ID: 'xmusic_active_playlist_id',
    PUBLISHER_CACHE: 'xmusic_publisher_playlists_cache',
    PLAYLISTS_VERSION: 'xmusic_playlists_version',
    GITHUB_REPO: 'xmusic_github_repo'
  };

  // State
  let currentPlaylists = loadPlaylists();
  let activePlaylistId = loadActivePlaylistId();
  let publisherPlaylists = loadPublisherPlaylists();
  let activePublisherPlaylistId = publisherPlaylists[0]?.id || '';
  let authConfig = loadAuthConfig();
  let currentToken = localStorage.getItem('token') || '';
  let lastDashboardShuffleUndo = null;

  // DOM Elements
  const navBtns = document.querySelectorAll('.nav-item');
  const views = document.querySelectorAll('.content-view');
  const playlistsGrid = document.getElementById('playlists-cards-grid');
  const songsTableBody = document.getElementById('songs-table-body');
  const detailTitle = document.getElementById('detail-title');
  const detailMeta = document.getElementById('detail-meta');
  const navPlaylistCount = document.getElementById('nav-playlist-count');
  const navPublisherCount = document.getElementById('nav-publisher-count');
  const targetPlaylistSelect = document.getElementById('target-playlist-select');

  // Publisher Elements
  const publisherCardsGrid = document.getElementById('publisher-cards-grid');
  const publisherSongsTableBody = document.getElementById('publisher-songs-table-body');
  const pubDetailTitle = document.getElementById('pub-detail-title');
  const pubDetailMeta = document.getElementById('pub-detail-meta');
  const pubTargetPlaylistSelect = document.getElementById('pub-target-playlist-select');
  const btnCloneCurrentPub = document.getElementById('btn-clone-current-pub');

  // Search Elements
  const globalSearchInput = document.getElementById('global-search-input');
  const onlineSearchInput = document.getElementById('online-search-input');
  const btnExecuteSearch = document.getElementById('btn-execute-search');
  const searchResultsContainer = document.getElementById('search-results-container');

  // Config Elements
  const cfgUser = document.getElementById('cfg-username');
  const cfgPass = document.getElementById('cfg-password');
  const cfgAutoLogin = document.getElementById('cfg-autologin');
  const cfgAutoPop = document.getElementById('cfg-autopopulate');
  const btnSaveSettings = document.getElementById('btn-save-settings');
  const btnTestAuth = document.getElementById('btn-test-auth');
  const snippetCode = document.getElementById('snippet-code');
  const btnCopySnippet = document.getElementById('btn-copy-snippet');

  // Shuffle Elements
  const btnShufflePlaylist = document.getElementById('btn-shuffle-playlist');
  const btnUndoShuffle = document.getElementById('btn-undo-shuffle');

  // Audio Preview Elements
  const audioPreviewBar = document.getElementById('audio-preview-bar');
  const audioElement = document.getElementById('audio-element');
  const previewSongTitle = document.getElementById('preview-song-title');
  const previewSongArtist = document.getElementById('preview-song-artist');
  const btnClosePreview = document.getElementById('btn-close-preview');

  // Init
  initUI();
  autoVerifyToken();

  function initUI() {
    setupNavigation();
    renderPlaylists();
    renderActivePlaylistSongs();
    renderPublisherPlaylists();
    renderActivePublisherSongs();
    updateTargetPlaylistDropdown();
    updateConsoleSnippet();
    setupActions();
  }

  // State Loaders
  function loadPlaylists() {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.PLAYLISTS);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch (e) {
      console.warn('Error reading playlists:', e);
    }
    localStorage.setItem(STORAGE_KEYS.PLAYLISTS, JSON.stringify(DEFAULT_PLAYLISTS));
    return DEFAULT_PLAYLISTS;
  }

  function savePlaylists(data) {
    currentPlaylists = data;
    localStorage.setItem(STORAGE_KEYS.PLAYLISTS, JSON.stringify(data));
    if (navPlaylistCount) navPlaylistCount.innerText = data.length;
    renderPlaylists();
    updateTargetPlaylistDropdown();
    updateConsoleSnippet();
  }

  function loadActivePlaylistId() {
    const id = localStorage.getItem(STORAGE_KEYS.ACTIVE_PLAYLIST_ID);
    if (id && currentPlaylists.some(p => p.id === id)) return id;
    const def = currentPlaylists[0] ? currentPlaylists[0].id : '';
    localStorage.setItem(STORAGE_KEYS.ACTIVE_PLAYLIST_ID, def);
    return def;
  }

  function setActivePlaylist(id) {
    activePlaylistId = id;
    localStorage.setItem(STORAGE_KEYS.ACTIVE_PLAYLIST_ID, id);
    if (btnUndoShuffle) btnUndoShuffle.style.display = 'none';
    lastDashboardShuffleUndo = null;
    renderPlaylists();
    renderActivePlaylistSongs();
  }

  function loadPublisherPlaylists() {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.PUBLISHER_CACHE);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch (e) {}
    return [];
  }

  function savePublisherPlaylists(data) {
    publisherPlaylists = data;
    localStorage.setItem(STORAGE_KEYS.PUBLISHER_CACHE, JSON.stringify(data));
    if (navPublisherCount) navPublisherCount.innerText = data.length;
    renderPublisherPlaylists();
    renderActivePublisherSongs();
  }

  async function fetchPublisherPlaylists() {
    try {
      if (!currentToken) return;
      const userInfoStr = localStorage.getItem('userInfo');
      let userId = '';
      if (userInfoStr) {
        try { userId = JSON.parse(userInfoStr).id || ''; } catch (e) {}
      }

      const url = `https://web.xmusicstation.com/api/v1/player/playlist/list?${userId ? `userId=${userId}&` : ''}pageIndex=1&pageSize=50`;
      const res = await fetch(url, {
        headers: {
          'Token': currentToken,
          'Authorization': 'Bearer ' + currentToken,
          'x-bgm-lang': 'vi'
        }
      });
      const data = await res.json();
      if (data.code === 0 && data.data && Array.isArray(data.data.items)) {
        savePublisherPlaylists(data.data.items);
        if (!activePublisherPlaylistId && data.data.items.length > 0) {
          activePublisherPlaylistId = data.data.items[0].id;
          renderActivePublisherSongs();
        }
        console.log(`[Dashboard] Đã tải ${data.data.items.length} danh sách phát từ nhà phát hành.`);
      }
    } catch (e) {
      console.warn('Lỗi tải publisher playlists:', e);
    }
  }

  function getAllPublisherSongs() {
    const map = new Map();
    publisherPlaylists.forEach(pl => {
      if (Array.isArray(pl.songDetails)) {
        pl.songDetails.forEach(s => {
          if (!map.has(s.key)) {
            map.set(s.key, Object.assign({}, s, {
              fromPublisherPlaylist: pl.name,
              publisherPlaylistId: pl.id
            }));
          }
        });
      }
    });
    return Array.from(map.values());
  }

  function loadAuthConfig() {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.AUTH);
      return saved ? Object.assign({}, DEFAULT_AUTH, JSON.parse(saved)) : DEFAULT_AUTH;
    } catch (e) {
      return DEFAULT_AUTH;
    }
  }

  function saveAuthConfig(data) {
    authConfig = data;
    localStorage.setItem(STORAGE_KEYS.AUTH, JSON.stringify(data));
    updateConsoleSnippet();
  }

  // Shuffle Algorithms
  function shuffleArray(array) {
    const arr = array.slice();
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  function smartShuffle(songs) {
    if (!songs || songs.length <= 2) return shuffleArray(songs || []);
    const byArtist = {};
    songs.forEach(s => {
      const artist = (s.artists && s.artists[0]) ? s.artists[0].trim().toLowerCase() : 'khác';
      if (!byArtist[artist]) byArtist[artist] = [];
      byArtist[artist].push(s);
    });

    Object.keys(byArtist).forEach(a => {
      byArtist[a] = shuffleArray(byArtist[a]);
    });

    const buckets = Object.values(byArtist).sort((a, b) => b.length - a.length);
    const result = [];
    let more = true;
    while (more) {
      more = false;
      for (const b of buckets) {
        if (b.length > 0) {
          result.push(b.shift());
          more = true;
        }
      }
    }
    return result;
  }

  // Navigation Setup
  function setupNavigation() {
    navBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        navBtns.forEach(b => b.classList.remove('active'));
        views.forEach(v => v.classList.remove('active'));
        btn.classList.add('active');
        const viewId = btn.dataset.view;
        const targetView = document.getElementById(viewId);
        if (targetView) targetView.classList.add('active');

        if (viewId === 'view-publisher') {
          renderPublisherPlaylists();
          renderActivePublisherSongs();
        }
      });
    });
  }

  // Render Playlists Cards Grid
  function renderPlaylists() {
    if (!playlistsGrid) return;
    if (navPlaylistCount) navPlaylistCount.innerText = currentPlaylists.length;

    playlistsGrid.innerHTML = currentPlaylists.map(pl => {
      const isActive = pl.id === activePlaylistId;
      const count = pl.songs ? pl.songs.length : 0;
      let icon = '🎵';
      if (pl.name.includes('🔥') || pl.name.includes('Trending')) icon = '🔥';
      else if (pl.name.includes('☕') || pl.name.includes('Acoustic')) icon = '☕';
      else if (pl.name.includes('⚡') || pl.name.includes('Remix') || pl.name.includes('EDM')) icon = '⚡';
      else if (pl.name.includes('🌧️') || pl.name.includes('Ballad') || pl.name.includes('Lofi')) icon = '🌧️';
      else if (pl.name.includes('🌿') || pl.name.includes('Indie') || pl.name.includes('Gen Z')) icon = '🌿';
      else if (pl.name.includes('🌸') || pl.name.includes('Tình Ca') || pl.name.includes('Love')) icon = '🌸';

      return `
        <div class="playlist-card ${isActive ? 'active' : ''}" data-id="${pl.id}">
          <div class="card-top">
            <span class="card-icon">${icon}</span>
            <span class="card-count-badge">${count} bài hát</span>
          </div>
          <div class="card-title">${pl.name}</div>
          <div class="card-desc">${pl.description || 'Chưa có mô tả'}</div>
        </div>
      `;
    }).join('');

    playlistsGrid.querySelectorAll('.playlist-card').forEach(card => {
      card.addEventListener('click', () => {
        setActivePlaylist(card.dataset.id);
      });
    });
  }

  // Render Active Playlist Songs
  function renderActivePlaylistSongs() {
    const pl = currentPlaylists.find(p => p.id === activePlaylistId);
    if (!pl) return;

    if (detailTitle) detailTitle.innerText = pl.name;
    const detailIcon = document.getElementById('detail-icon');
    let icon = '🎵';
    if (pl.name.includes('🔥') || pl.name.includes('Trending')) icon = '🔥';
    else if (pl.name.includes('☕') || pl.name.includes('Acoustic')) icon = '☕';
    else if (pl.name.includes('⚡') || pl.name.includes('Remix') || pl.name.includes('EDM')) icon = '⚡';
    else if (pl.name.includes('🌧️') || pl.name.includes('Ballad') || pl.name.includes('Lofi')) icon = '🌧️';
    else if (pl.name.includes('🌿') || pl.name.includes('Indie') || pl.name.includes('Gen Z')) icon = '🌿';
    else if (pl.name.includes('🌸') || pl.name.includes('Tình Ca') || pl.name.includes('Love')) icon = '🌸';
    if (detailIcon) detailIcon.innerText = icon;
    const totalSec = (pl.songs || []).reduce((acc, s) => acc + (s.duration || 0), 0);
    const min = Math.round(totalSec / 60);
    if (detailMeta) detailMeta.innerText = `${pl.songs ? pl.songs.length : 0} bài hát • Khoảng ${min} phút • ID: ${pl.id}`;

    if (!songsTableBody) return;

    if (!pl.songs || pl.songs.length === 0) {
      songsTableBody.innerHTML = `
        <tr>
          <td colspan="5" style="text-align: center; padding: 40px; color: #64748b;">
            Chưa có bài hát nào trong playlist này.<br>Bấm <b>Thêm bài hát</b> hoặc chuyển sang tab <b>Kho Nhà Phát Hành</b> để chọn bài!
          </td>
        </tr>
      `;
      return;
    }

    songsTableBody.innerHTML = pl.songs.map((s, idx) => `
      <tr>
        <td style="color: #64748b;">${idx + 1}</td>
        <td>
          <div class="song-title-cell">${s.title}</div>
          <div style="font-size: 11px; color: #64748b;">Key: ${s.key}</div>
        </td>
        <td>${(s.artists || []).join(', ') || 'Nhiều nghệ sĩ'}</td>
        <td>${formatDuration(s.duration)}</td>
        <td>
          <div class="table-actions">
            ${s.streamUrl ? `<button class="btn-tbl play-preview" data-url="${s.streamUrl}" data-title="${encodeURIComponent(s.title)}" data-artist="${encodeURIComponent((s.artists||[]).join(', '))}" title="Nghe thử">▶ Nghe</button>` : ''}
            <button class="btn-tbl btn-up" data-index="${idx}" title="Đưa lên" ${idx === 0 ? 'disabled' : ''}>▲</button>
            <button class="btn-tbl btn-down" data-index="${idx}" title="Đưa xuống" ${idx === pl.songs.length - 1 ? 'disabled' : ''}>▼</button>
            <button class="btn-tbl btn-del" data-index="${idx}" title="Xóa" style="color: #f87171;">✕</button>
          </div>
        </td>
      </tr>
    `).join('');

    // Table Actions
    songsTableBody.querySelectorAll('.play-preview').forEach(btn => {
      btn.addEventListener('click', () => {
        playPreviewAudio(btn.dataset.url, decodeURIComponent(btn.dataset.title), decodeURIComponent(btn.dataset.artist));
      });
    });

    songsTableBody.querySelectorAll('.btn-up').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.dataset.index);
        if (idx > 0) {
          const temp = pl.songs[idx];
          pl.songs[idx] = pl.songs[idx - 1];
          pl.songs[idx - 1] = temp;
          savePlaylists(currentPlaylists);
          renderActivePlaylistSongs();
        }
      });
    });

    songsTableBody.querySelectorAll('.btn-down').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.dataset.index);
        if (idx < pl.songs.length - 1) {
          const temp = pl.songs[idx];
          pl.songs[idx] = pl.songs[idx + 1];
          pl.songs[idx + 1] = temp;
          savePlaylists(currentPlaylists);
          renderActivePlaylistSongs();
        }
      });
    });

    songsTableBody.querySelectorAll('.btn-del').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.dataset.index);
        const removed = pl.songs.splice(idx, 1);
        savePlaylists(currentPlaylists);
        renderActivePlaylistSongs();
        showToast('Đã xóa bài "' + (removed[0]?.title || '') + '"', 'info');
      });
    });
  }

  // Render Publisher Playlists Cards
  function renderPublisherPlaylists() {
    if (!publisherCardsGrid) return;
    if (navPublisherCount) navPublisherCount.innerText = publisherPlaylists.length;

    if (publisherPlaylists.length === 0) {
      publisherCardsGrid.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; padding: 30px; color: #94a3b8;">
          Đang kết nối tải danh sách từ máy chủ XMusicStation...
        </div>
      `;
      return;
    }

    if (!activePublisherPlaylistId) {
      activePublisherPlaylistId = publisherPlaylists[0].id;
    }

    publisherCardsGrid.innerHTML = publisherPlaylists.map(pl => {
      const isActive = String(pl.id) === String(activePublisherPlaylistId);
      const count = pl.songDetails ? pl.songDetails.length : (pl.songKeys?.length || 0);

      return `
        <div class="playlist-card ${isActive ? 'active' : ''}" data-id="${pl.id}">
          <div class="card-top">
            <span class="card-icon">📻</span>
            <span class="card-count-badge">${count} bài hát</span>
          </div>
          <div class="card-title">${pl.name}</div>
          <div class="card-desc">Playlist nhà phát hành • ID: ${pl.id}</div>
        </div>
      `;
    }).join('');

    publisherCardsGrid.querySelectorAll('.playlist-card').forEach(card => {
      card.addEventListener('click', () => {
        activePublisherPlaylistId = card.dataset.id;
        renderPublisherPlaylists();
        renderActivePublisherSongs();
      });
    });
  }

  // Render Songs for Selected Publisher Playlist
  function renderActivePublisherSongs() {
    if (!publisherSongsTableBody) return;
    const pl = publisherPlaylists.find(p => String(p.id) === String(activePublisherPlaylistId));

    if (!pl) {
      publisherSongsTableBody.innerHTML = `
        <tr><td colspan="5" style="text-align: center; padding: 30px; color: #64748b;">Chọn một playlist nhà phát hành ở trên để xem bài hát.</td></tr>
      `;
      return;
    }

    if (pubDetailTitle) pubDetailTitle.innerText = pl.name;
    const songs = pl.songDetails || [];
    const totalSec = songs.reduce((acc, s) => acc + (s.duration || 0), 0);
    const min = Math.round(totalSec / 60);
    if (pubDetailMeta) pubDetailMeta.innerText = `${songs.length} bài hát • Khoảng ${min} phút • ID: ${pl.id}`;

    if (songs.length === 0) {
      publisherSongsTableBody.innerHTML = `
        <tr><td colspan="5" style="text-align: center; padding: 30px; color: #64748b;">Danh sách này chưa có bài hát chi tiết.</td></tr>
      `;
      return;
    }

    publisherSongsTableBody.innerHTML = songs.map((s, idx) => `
      <tr>
        <td style="color: #64748b;">${idx + 1}</td>
        <td>
          <div class="song-title-cell">${s.title}</div>
          <div style="font-size: 11px; color: #64748b;">Key: ${s.key}</div>
        </td>
        <td>${(s.artists || []).join(', ') || 'Nhiều nghệ sĩ'}</td>
        <td>${formatDuration(s.duration)}</td>
        <td>
          <div class="table-actions">
            ${s.streamUrl ? `<button class="btn-tbl play-preview" data-url="${s.streamUrl}" data-title="${encodeURIComponent(s.title)}" data-artist="${encodeURIComponent((s.artists||[]).join(', '))}" title="Nghe thử">▶ Nghe</button>` : ''}
            <button class="btn-primary btn-add-pub-song" data-song='${JSON.stringify(s).replace(/'/g, "&#39;")}' style="padding: 5px 10px; font-size: 11.5px;">+ Thêm vào list</button>
          </div>
        </td>
      </tr>
    `).join('');

    publisherSongsTableBody.querySelectorAll('.play-preview').forEach(btn => {
      btn.addEventListener('click', () => {
        playPreviewAudio(btn.dataset.url, decodeURIComponent(btn.dataset.title), decodeURIComponent(btn.dataset.artist));
      });
    });

    publisherSongsTableBody.querySelectorAll('.btn-add-pub-song').forEach(btn => {
      btn.addEventListener('click', () => {
        const song = JSON.parse(btn.getAttribute('data-song'));
        const targetId = pubTargetPlaylistSelect ? pubTargetPlaylistSelect.value : activePlaylistId;
        const targetPl = currentPlaylists.find(p => p.id === targetId);

        if (targetPl) {
          if (targetPl.songs.some(existing => existing.key === song.key)) {
            showToast('Bài hát này đã có trong danh sách của bạn!', 'info');
            return;
          }
          targetPl.songs.push({
            key: song.key,
            title: song.title,
            artists: song.artists || [],
            duration: song.duration || 0,
            kbit: song.kbit || 128,
            streamUrl: song.streamUrl || '',
            image: song.image || ''
          });
          savePlaylists(currentPlaylists);
          renderActivePlaylistSongs();
          btn.innerText = '✓ Đã thêm';
          btn.disabled = true;
          btn.style.background = '#10b981';
          showToast('Đã thêm "' + song.title + '" vào ' + targetPl.name, 'success');
        }
      });
    });
  }

  function updateTargetPlaylistDropdown() {
    const opts = currentPlaylists.map(p => 
      `<option value="${p.id}" ${p.id === activePlaylistId ? 'selected' : ''}>${p.name} (${p.songs ? p.songs.length : 0} bài)</option>`
    ).join('');

    if (targetPlaylistSelect) targetPlaylistSelect.innerHTML = opts;
    if (pubTargetPlaylistSelect) pubTargetPlaylistSelect.innerHTML = opts;
  }

  function formatDuration(sec) {
    if (!sec || isNaN(sec)) return '0:00';
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return m + ':' + (s < 10 ? '0' : '') + s;
  }

  // Audio Preview Controller
  function playPreviewAudio(url, title, artist) {
    if (!audioPreviewBar || !audioElement) return;
    audioPreviewBar.style.display = 'flex';
    if (previewSongTitle) previewSongTitle.innerText = title;
    if (previewSongArtist) previewSongArtist.innerText = artist;
    audioElement.src = url;
    audioElement.play().catch(e => console.warn('Audio play prevented:', e));
  }

  if (btnClosePreview && audioElement && audioPreviewBar) {
    btnClosePreview.addEventListener('click', () => {
      audioElement.pause();
      audioElement.src = '';
      audioPreviewBar.style.display = 'none';
    });
  }

  // Live Hybrid Song Search (Matches online API + Publisher Playlists Catalog)
  async function performSearch(query) {
    if (!query || !query.trim()) return;
    if (!searchResultsContainer) return;

    const kw = query.trim();
    const kwNorm = kw.toLowerCase();

    searchResultsContainer.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 40px; color: #a5b4fc;">Đang tìm kiếm kết hợp thông minh (Online + Kho Nhà Phát Hành)...</div>';

    try {
      // 1. Search locally in publisher playlists songs
      const pubSongs = getAllPublisherSongs();
      const matchedPubSongs = pubSongs.filter(s => {
        const t = (s.title || '').toLowerCase();
        const a = (s.artists || []).join(' ').toLowerCase();
        return t.includes(kwNorm) || a.includes(kwNorm);
      });

      // 2. Search online API
      if (!currentToken) await autoVerifyToken();

      let onlineSongs = [];
      try {
        const res = await fetch('https://web.xmusicstation.com/api/v1/player/playlist/search-songs?keyword=' + encodeURIComponent(kw), {
          headers: {
            'Token': currentToken,
            'Authorization': 'Bearer ' + currentToken,
            'x-bgm-lang': 'vi'
          }
        });
        const data = await res.json();
        if (data.code === 0 && Array.isArray(data.data)) {
          onlineSongs = data.data;
        }
      } catch (e) {}

      // 3. Merge & Deduplicate
      const combined = [];
      const seenKeys = new Set();

      matchedPubSongs.forEach(s => {
        seenKeys.add(s.key);
        combined.push(Object.assign({}, s, { isFromPublisher: true }));
      });

      onlineSongs.forEach(s => {
        if (!seenKeys.has(s.key)) {
          seenKeys.add(s.key);
          combined.push(Object.assign({}, s, { isFromPublisher: false }));
        }
      });

      if (combined.length > 0) {
        searchResultsContainer.innerHTML = combined.map(s => `
          <div class="result-card">
            <div class="result-info">
              <div class="result-title">${s.title}</div>
              <div class="result-artist">${(s.artists || []).join(', ') || 'Nhiều nghệ sĩ'} • ${formatDuration(s.duration)}</div>
              ${s.isFromPublisher ? `<span class="result-source-tag publisher">📻 Kho Nhà Phát Hành: ${s.fromPublisherPlaylist || ''}</span>` : `<span class="result-source-tag online">🌐 Online XMusic</span>`}
            </div>
            <div style="display: flex; gap: 6px;">
              ${s.streamUrl ? `<button class="btn-tbl play-preview" data-url="${s.streamUrl}" data-title="${encodeURIComponent(s.title)}" data-artist="${encodeURIComponent((s.artists||[]).join(', '))}" title="Nghe thử">▶</button>` : ''}
              <button class="btn-primary btn-add-to-target" data-song='${JSON.stringify(s).replace(/'/g, "&#39;")}' style="padding: 6px 12px; font-size: 12px;">+ Thêm</button>
            </div>
          </div>
        `).join('');

        searchResultsContainer.querySelectorAll('.play-preview').forEach(btn => {
          btn.addEventListener('click', () => {
            playPreviewAudio(btn.dataset.url, decodeURIComponent(btn.dataset.title), decodeURIComponent(btn.dataset.artist));
          });
        });

        searchResultsContainer.querySelectorAll('.btn-add-to-target').forEach(btn => {
          btn.addEventListener('click', () => {
            const song = JSON.parse(btn.getAttribute('data-song'));
            const targetId = targetPlaylistSelect ? targetPlaylistSelect.value : activePlaylistId;
            const targetPl = currentPlaylists.find(p => p.id === targetId);

            if (targetPl) {
              if (targetPl.songs.some(existing => existing.key === song.key)) {
                showToast('Bài hát này đã có trong danh sách!', 'info');
                return;
              }
              targetPl.songs.push({
                key: song.key,
                title: song.title,
                artists: song.artists || [],
                duration: song.duration || 0,
                kbit: song.kbit || 128,
                streamUrl: song.streamUrl || '',
                image: song.image || ''
              });
              savePlaylists(currentPlaylists);
              renderActivePlaylistSongs();
              btn.innerText = '✓ Đã thêm';
              btn.disabled = true;
              btn.style.background = '#10b981';
              showToast('Đã thêm bài hát vào ' + targetPl.name, 'success');
            }
          });
        });
      } else {
        searchResultsContainer.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 40px; color: #64748b;">Không tìm thấy bài hát nào phù hợp với từ khóa.</div>';
      }
    } catch (err) {
      console.error('Search error:', err);
      searchResultsContainer.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 40px; color: #ef4444;">Lỗi khi tìm kiếm bài hát: ' + err.message + '</div>';
    }
  }

  // Auto verify and fetch token
  async function autoVerifyToken() {
    try {
      const res = await fetch('https://web.xmusicstation.com/api/v1/pub/player/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: authConfig.username, password: authConfig.password })
      });
      const data = await res.json();
      if (data.code === 0 && data.data?.token) {
        currentToken = data.data.token;
        localStorage.setItem('token', currentToken);
        localStorage.setItem('userInfo', JSON.stringify(data.data.userInfo));
        updateAccountUI(data.data.userInfo);
        fetchPublisherPlaylists();
        return true;
      }
    } catch (e) {
      console.warn('Auto auth verify error:', e);
    }
    return false;
  }

  function updateAccountUI(info) {
    const statusText = document.getElementById('account-status-text');
    const fullname = document.getElementById('account-fullname');
    const sub = document.getElementById('account-sub');
    const valFullname = document.getElementById('info-val-fullname');
    const valAddress = document.getElementById('info-val-address');

    if (statusText) statusText.innerText = 'Đã kết nối';
    if (fullname && info.fullname) fullname.innerText = info.fullname;
    if (sub && info.username) sub.innerText = info.username + ' • ID: ' + info.id;
    if (valFullname && info.fullname) valFullname.innerText = info.fullname;
    if (valAddress && info.address) valAddress.innerText = info.address;
  }

  // Update Console Snippet
  function updateConsoleSnippet() {
    if (!snippetCode) return;
    const payload = {
      token: currentToken,
      playlists: currentPlaylists,
      activePlaylistId: activePlaylistId,
      autoPopulate: authConfig.autoPopulate
    };
    snippetCode.innerText = `// Dán đoạn mã này vào Console (F12) trên trang player.xmusicstation.com để đồng bộ:
localStorage.setItem('xmusic_playlists', JSON.stringify(${JSON.stringify(currentPlaylists)}));
localStorage.setItem('xmusic_active_playlist_id', '${activePlaylistId}');
localStorage.setItem('xmusic_auto_populate_on_load', '${authConfig.autoPopulate}');
console.log('✅ Đã đồng bộ thành công ' + ${currentPlaylists.length} + ' Playlist sang Web Player!');`;
  }

  // Setup Actions & Event Listeners
  function setupActions() {
    // Top Bar Actions
    const btnNewTop = document.getElementById('btn-new-playlist-top');
    const btnExport = document.getElementById('btn-export-all');
    const btnImport = document.getElementById('btn-import-all');
    const fileImport = document.getElementById('file-import-input');
    const btnReset = document.getElementById('btn-reset-samples');

    if (btnNewTop) btnNewTop.addEventListener('click', createNewPlaylist);

    
    const btnCheckGithubDash = document.getElementById('btn-check-github-dash');
    const dashRepoInput = document.getElementById('dash-github-repo-input');
    const btnSaveDashRepo = document.getElementById('dash-btn-save-repo');
    const dashResultArea = document.getElementById('dash-github-check-result');

    if (dashRepoInput) {
      dashRepoInput.value = getGithubRepo();
    }

    if (btnSaveDashRepo && dashRepoInput) {
      btnSaveDashRepo.addEventListener('click', () => {
        setGithubRepo(dashRepoInput.value);
        showToast('Đã lưu cấu hình kho GitHub!', 'success');
        if (dashResultArea) checkDashboardGithubUpdates(dashResultArea);
      });
    }

    if (btnCheckGithubDash && dashResultArea) {
      btnCheckGithubDash.addEventListener('click', () => {
        if (dashRepoInput) setGithubRepo(dashRepoInput.value);
        checkDashboardGithubUpdates(dashResultArea);
      });
    }

    const btnShareModal = document.getElementById('btn-share-modal');
    if (btnShareModal) btnShareModal.addEventListener('click', () => openDashboardImportModal());

    const btnSyncCloud = document.getElementById('btn-sync-cloud');
    if (btnSyncCloud) btnSyncCloud.addEventListener('click', () => openDashboardSyncModal());

    const btnShareActive = document.getElementById('btn-share-active');
    if (btnShareActive) {
      btnShareActive.addEventListener('click', () => {
        const pl = currentPlaylists.find(p => p.id === activePlaylistId);
        if (pl) openDashboardShareModal(pl);
      });
    }

    if (btnReset) {
      btnReset.addEventListener('click', () => {
        if (confirm('Khôi phục lại 6 danh sách phát mẫu tuyển chọn v2.2.0 (450 bài hát)? Các bài hát tự thêm sẽ bị đặt lại.')) {
          savePlaylists(DEFAULT_PLAYLISTS);
          setActivePlaylist(DEFAULT_PLAYLISTS[0].id);
          showToast('Đã khôi phục 6 danh sách phát mẫu v2.2.0 (450 bài)!', 'success');
        }
      });
    }

    // Shuffle & Undo Playlist Actions
    if (btnShufflePlaylist) {
      btnShufflePlaylist.addEventListener('click', () => {
        const pl = currentPlaylists.find(p => p.id === activePlaylistId);
        if (!pl || !pl.songs || pl.songs.length < 2) {
          showToast('Cần ít nhất 2 bài hát để xáo trộn!', 'info');
          return;
        }

        lastDashboardShuffleUndo = {
          playlistId: activePlaylistId,
          songs: pl.songs.slice()
        };

        pl.songs = smartShuffle(pl.songs);
        savePlaylists(currentPlaylists);
        renderActivePlaylistSongs();
        if (btnUndoShuffle) btnUndoShuffle.style.display = 'inline-flex';
        showToast('🔀 Đã xáo trộn danh sách thông minh (cách ca sĩ)!', 'success');
      });
    }

    if (btnUndoShuffle) {
      btnUndoShuffle.addEventListener('click', () => {
        if (!lastDashboardShuffleUndo) return;
        const pl = currentPlaylists.find(p => p.id === lastDashboardShuffleUndo.playlistId);
        if (pl) {
          pl.songs = lastDashboardShuffleUndo.songs.slice();
          savePlaylists(currentPlaylists);
          renderActivePlaylistSongs();
          lastDashboardShuffleUndo = null;
          btnUndoShuffle.style.display = 'none';
          showToast('↩ Đã hoàn tác thứ tự danh sách ban đầu!', 'info');
        }
      });
    }

    // Clone Publisher Playlist
    if (btnCloneCurrentPub) {
      btnCloneCurrentPub.addEventListener('click', () => {
        const pub = publisherPlaylists.find(p => String(p.id) === String(activePublisherPlaylistId));
        if (!pub || !pub.songDetails || pub.songDetails.length === 0) {
          showToast('Danh sách nhà phát hành này chưa có bài hát.', 'error');
          return;
        }

        const newPl = {
          id: 'cloned-' + Date.now(),
          name: '⭐ ' + pub.name,
          description: 'Sao chép từ danh sách nhà phát hành (' + pub.songDetails.length + ' bài)',
          createdAt: new Date().toISOString(),
          songs: pub.songDetails.map(s => ({
            key: s.key,
            title: s.title,
            artists: s.artists || [],
            duration: s.duration || 0,
            kbit: s.kbit || 128,
            streamUrl: s.streamUrl || '',
            image: s.image || ''
          }))
        };

        currentPlaylists.push(newPl);
        savePlaylists(currentPlaylists);
        setActivePlaylist(newPl.id);

        // Switch to view-playlists
        const navPlaylists = document.getElementById('nav-btn-playlists');
        if (navPlaylists) navPlaylists.click();
        showToast('Đã sao chép "' + newPl.name + '" thành Playlist cá nhân của bạn!', 'success');
      });
    }

    // Detail Actions
    const btnEditInfo = document.getElementById('btn-edit-playlist-info');
    const btnAddSongs = document.getElementById('btn-add-songs-to-active');
    const btnDelActive = document.getElementById('btn-delete-active-playlist');

    if (btnEditInfo) {
      btnEditInfo.addEventListener('click', () => {
        const pl = currentPlaylists.find(p => p.id === activePlaylistId);
        if (!pl) return;
        const newName = prompt('Nhập tên mới cho playlist:', pl.name);
        if (newName && newName.trim()) {
          pl.name = newName.trim();
          savePlaylists(currentPlaylists);
          renderPlaylists();
          renderActivePlaylistSongs();
          showToast('Đã đổi tên danh sách phát!', 'success');
        }
      });
    }

    if (btnAddSongs) {
      btnAddSongs.addEventListener('click', () => {
        const navSearch = document.getElementById('nav-btn-search');
        if (navSearch) navSearch.click();
      });
    }

    if (btnDelActive) {
      btnDelActive.addEventListener('click', () => {
        if (currentPlaylists.length <= 1) {
          showToast('Phải giữ lại ít nhất 1 danh sách phát!', 'error');
          return;
        }
        const pl = currentPlaylists.find(p => p.id === activePlaylistId);
        if (confirm(`Bạn có chắc chắn muốn xóa playlist "${pl?.name}"?`)) {
          currentPlaylists = currentPlaylists.filter(p => p.id !== activePlaylistId);
          setActivePlaylist(currentPlaylists[0].id);
          savePlaylists(currentPlaylists);
          showToast('Đã xóa playlist thành công.', 'info');
        }
      });
    }

    // Export/Import Actions
    if (btnExport) {
      btnExport.addEventListener('click', () => {
        const blob = new Blob([JSON.stringify(currentPlaylists, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `xmusic_playlists_backup_${new Date().toISOString().slice(0, 10)}.json`;
        a.click();
        URL.revokeObjectURL(url);
        showToast('Đã xuất file sao lưu thành công!', 'success');
      });
    }

    if (btnImport && fileImport) {
      btnImport.addEventListener('click', () => fileImport.click());
      fileImport.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (evt) => {
          try {
            const data = JSON.parse(evt.target.result);
            if (Array.isArray(data) && data.length > 0) {
              savePlaylists(data);
              setActivePlaylist(data[0].id);
              showToast('Đã nhập thành công ' + data.length + ' danh sách phát!', 'success');
            } else {
              showToast('File JSON không đúng định dạng danh sách!', 'error');
            }
          } catch (err) {
            showToast('Lỗi đọc file: ' + err.message, 'error');
          }
        };
        reader.readAsText(file);
      });
    }

    // Online Search triggers
    if (btnExecuteSearch && onlineSearchInput) {
      btnExecuteSearch.addEventListener('click', () => performSearch(onlineSearchInput.value));
      onlineSearchInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') performSearch(onlineSearchInput.value);
      });
    }

    if (globalSearchInput) {
      globalSearchInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
          const val = globalSearchInput.value;
          const navSearch = document.getElementById('nav-btn-search');
          if (navSearch) navSearch.click();
          if (onlineSearchInput) onlineSearchInput.value = val;
          performSearch(val);
        }
      });
    }

    // Save Settings
    if (btnSaveSettings) {
      btnSaveSettings.addEventListener('click', () => {
        const u = cfgUser?.value.trim();
        const p = cfgPass?.value.trim();
        const al = cfgAutoLogin?.checked;
        const ap = cfgAutoPop?.checked;

        if (!u || !p) {
          showToast('Vui lòng nhập tài khoản và mật khẩu!', 'error');
          return;
        }

        saveAuthConfig({ username: u, password: p, autoLogin: !!al, autoPopulate: !!ap });
        showToast('Đã lưu cấu hình tài khoản vào LocalStorage!', 'success');
      });
    }

    // Test Auth
    if (btnTestAuth) {
      btnTestAuth.addEventListener('click', async () => {
        showToast('Đang kiểm tra ủy quyền tài khoản...', 'info');
        const ok = await autoVerifyToken();
        if (ok) {
          showToast('Ủy quyền thành công! Tài khoản hoạt động tốt.', 'success');
        } else {
          showToast('Ủy quyền thất bại. Vui lòng kiểm tra lại tài khoản/mật khẩu.', 'error');
        }
      });
    }

    // Toggle PW
    const btnTogglePw = document.getElementById('btn-toggle-pw');
    if (btnTogglePw && cfgPass) {
      btnTogglePw.addEventListener('click', () => {
        cfgPass.type = cfgPass.type === 'password' ? 'text' : 'password';
      });
    }

    // Copy snippet
    if (btnCopySnippet && snippetCode) {
      btnCopySnippet.addEventListener('click', () => {
        navigator.clipboard.writeText(snippetCode.innerText).then(() => {
          showToast('Đã sao chép mã cài đặt nhanh!', 'success');
        });
      });
    }
  }

  function createNewPlaylist() {
    const name = prompt('Nhập tên danh sách phát mới:');
    if (name && name.trim()) {
      const newPl = {
        id: 'playlist-' + Date.now(),
        name: name.trim(),
        description: 'Tạo lúc ' + new Date().toLocaleString('vi-VN'),
        createdAt: new Date().toISOString(),
        songs: []
      };
      currentPlaylists.push(newPl);
      savePlaylists(currentPlaylists);
      setActivePlaylist(newPl.id);
      showToast('Đã tạo playlist "' + newPl.name + '"', 'success');
    }
  }

  // Toast System
  function showToast(message, type = 'info', duration = 3000) {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    const icon = type === 'success' ? '✅' : type === 'error' ? '❌' : 'ℹ️';
    toast.innerHTML = '<span>' + icon + '</span><span>' + message + '</span>';
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transition = 'opacity 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, duration);
  }
});
