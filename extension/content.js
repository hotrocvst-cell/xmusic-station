// content.js - XMusicStation Left Sidebar & Queue Automation v2.2.0
(function () {
  'use strict';

  const APP_VERSION = '2.5.1';
  console.log('[XMusic Assistant] Initializing script v' + APP_VERSION + ' (Cloud Sync & 3 Curated Playlists - 300 Songs)...');

  // Default configuration
  const DEFAULT_AUTH = {
    username: '',
    password: '',
    autoLogin: false
  };

  const DEFAULT_PLAYLISTS = [
  {
    "id": "playlist-soi-dong-remix",
    "name": "⚡ Top Nhạc Việt Sôi Động & Remix 2026",
    "description": "Tuyển chọn 100 ca khúc V-Pop sôi động, EDM Festival, Vinahouse và Pop Dance hot nhất từ các ngôi sao hàng đầu (Sơn Tùng M-TP, Tăng Duy Tân, ANH TRAI \"SAY HI\", EM XINH \"SAY HI\", Da LAB, Cukak, Phong Max...).",
    "createdAt": "2026-11-16T04:41:38.859Z",
    "version": "2.5.0",
    "songs": [
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
        "key": "jFehIyXrCHMm",
        "title": "CATCH ME IF YOU CAN",
        "artists": [
          "ANH TRAI \"SAY HI\"",
          "Quang Hùng MasterD",
          "Negav",
          "Công Dương",
          "NICKY"
        ],
        "duration": 256,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/Warner_Audio248/CatchMeIfYouCanFeatQuangHungMasterdNegavCongDuongNicky-ANHTRAISAYHI-15285296.mp3?st=AVFqByZvjfYfQMBopJpaiA&e=1794662764&a=0&p=0&r=7ef1ee21196ca56483dcb6374348dce8",
        "image": "https://image-cdn.nct.vn/song/2024/07/05/8/d/1/2/1720195916328_300.jpg"
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
        "key": "gwkZrcqfbbOI",
        "title": "NGÁO NGƠ",
        "artists": [
          "ANH TRAI \"SAY HI\"",
          "HIEUTHUHAI",
          "ERIK",
          "Anh Tú Atus",
          "JSOL",
          "Orange"
        ],
        "duration": 252,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/Warner_Audio256/NgaoNgoFeatHieuthuhaiErikAnhTuAtusJsolOrange-ANHTRAISAYHI-15564774.mp3?st=02_Z7bFB_42TQefUfz6m3A&e=1794577136&a=0&p=0&r=7b9cbbb321d78ed7de611debde459459",
        "image": "https://image-cdn.nct.vn/song/2024/08/02/6/5/b/a/1722607585053_300.jpg"
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
        "key": "I27zoLp2Ovzz",
        "title": "KIM PHÚT, KIM GIỜ",
        "artists": [
          "Isaac",
          "Negav",
          "HIEUTHUHAI",
          "HURRYKNG",
          "Pháp Kiều",
          "ANH TRAI \"SAY HI\""
        ],
        "duration": 295,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/Warner_Audio260/KimPhutKimGioFeatHurrykngHieuthuhaiNegavPhapKieuIsaac-ANHTRAISAYHI-15840467.mp3?st=oHniIWHJeeYrXRs5yyxBWQ&e=1794577136&a=0&p=0&r=7b9cbbb321d78ed7de611debde459459",
        "image": "https://image-cdn.nct.vn/song/2024/08/23/e/c/3/c/1724421820127_300.jpg"
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
        "key": "RkLxj9aLU0FD",
        "title": "DANCIN' MY WAY",
        "artists": [
          "TINH HÀ \"SAY HI\"",
          "buitruonglinh",
          "Sơn.K",
          "HYO",
          "Song Luân"
        ],
        "duration": 244,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/resa/2607/35/44/0g63j27s9w.mp3?st=VVZk03H1Sn4Sd5kOslyZWQ&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2026/07/10/6/g/w/v/1783666342729_300.jpg"
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
        "key": "X17IY2MnscG3",
        "title": "Thức Giấc (Pema. Remix)",
        "artists": [
          "Da LAB",
          "PEMA"
        ],
        "duration": 285,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1024/ThucGiacPemaRemix-DaLABPEMA-7120868.mp3?st=uEv58GvnWEwoZh_Hb4fK2A&e=1794662763&a=0&p=0&r=65e39d1b5994d674c625f06f3c1fed08",
        "image": "https://image-cdn.nct.vn/song/2021/11/22/3/0/c/0/1637550252373_300.jpg"
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
        "key": "08DKRPTs9jKX",
        "title": "Giá Lúc Đó",
        "artists": [
          "Kiên Doãn"
        ],
        "duration": 133,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2059/GiaLucDo-KienDoan-40460779.mp3?st=yM-Y9l8_0U8zXoFNbLyx4A&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2026/01/29/6/f/c/f/1769683923973_300.jpg"
      },
      {
        "key": "BqqqXjrndL8F",
        "title": "LEMONADE",
        "artists": [
          "Don Raemo"
        ],
        "duration": 226,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2059/LEMONADE-DonRaemo-39820077.mp3?st=ujzOs21V0fg2XsKVBtOwbg&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2025/12/18/f/6/c/0/1766036778226_300.jpg"
      },
      {
        "key": "p36M0nuVmR9Z",
        "title": "Ghét Nhau Thêm",
        "artists": [
          "DJ Tít"
        ],
        "duration": 179,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2059/GhetNhauThem-DJTit-38722416.mp3?st=ArjqFa5qYDx2NUlTbCye_g&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2025/09/25/f/2/d/6/1758791814871_300.jpg"
      },
      {
        "key": "RZBjcwPBU032",
        "title": "Cầu Vồng Thanh Xuân",
        "artists": [
          "OSAD",
          "Janie"
        ],
        "duration": 256,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1000/CauVongThanhXuan-OsadJanie-6308201.mp3?st=QDpalPiW6j7WfcDE3hoeYQ&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2020/06/22/e/2/9/7/1592820085014_300.jpg"
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
        "key": "OUngYbcmAdkq",
        "title": "Đi Hết Thời Tuổi Trẻ (Version 2020)",
        "artists": [
          "Hà"
        ],
        "duration": 243,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui996/DiHetThoiTuoiTreVersion2020-Ha-6240339.mp3?st=U-jiYA1TqVHEebxfGfQF6Q&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2020/03/25/0/7/8/4/1585117427344_300.jpg"
      },
      {
        "key": "ItohkV2tcd1v",
        "title": "Hiếm Có Khó Tìm",
        "artists": [
          "JSOL",
          "Han Sara"
        ],
        "duration": 197,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1001/HiemCoKhoTim-JSOLHanSara-6330342.mp3?st=a-BULLviLstT96rZmz7vOw&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2020/07/13/a/f/7/f/1594611354950_300.jpg"
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
        "key": "G2E5e7g6NfO6",
        "title": "Anh Sẽ Cho Mình",
        "artists": [
          "Khải",
          "Sơn Bùi"
        ],
        "duration": 195,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2045/AnhSeChoMinh-KhaiSonBui-11722978.mp3?st=CMaGV-GYO3a27UZKa4AAAA&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2023/09/18/7/2/8/d/1695032666053_300.jpg"
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
        "key": "VQvMO3rOkT",
        "title": "Ngày Mai Trời Lại Sáng",
        "artists": [
          "Nguyễn Hồng Thuận",
          "Lam Trường"
        ],
        "duration": 211,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui180/NgayMaiTroiLaiSang-NguyenHongThuan_3cafd.mp3?st=s-Cq6Myj74O51tUN34s8wQ&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2013/11/06/c/c/a/8/1383712586855_300.jpg"
      },
      {
        "key": "n6C1UdVPh6cI",
        "title": "Tìm Đâu",
        "artists": [
          "Pay"
        ],
        "duration": 181,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1001/TimDau-Pay-6324397.mp3?st=XUcg_LQyBb6-KCZFxUsx7Q&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2020/07/10/7/0/0/f/1594372640695_300.jpg"
      },
      {
        "key": "6kuDtQlenhm2",
        "title": "It's You",
        "artists": [
          "Hari Won"
        ],
        "duration": 217,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui988/ItsYou-HariWon-6054064.mp3?st=axwHs_dGu09uWkCnj3zUsg&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2019/08/13/0/a/f/3/1565686973276_300.jpg"
      },
      {
        "key": "Spiv84rJKKbb",
        "title": "Nơi Bắt Đầu",
        "artists": [
          "Pixel Neko",
          "Cầm"
        ],
        "duration": 164,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2059/NoiBatDauftCam-PixelNekoCam-39735079.mp3?st=Cws3XIGbEGnuLb0QBrWx6A&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2025/12/12/a/2/6/2/1765530010086_300.jpg"
      },
      {
        "key": "mErSry4zLTp5",
        "title": "Girl Phố",
        "artists": [
          "Quỳnh Anh Shyn"
        ],
        "duration": 180,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2059/GirlPho-QuynhAnhShyn-41187002.mp3?st=XMDqcxlcrAtoF4scdGVHNg&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2026/03/26/3/5/0/1/1774540795067_300.jpg"
      },
      {
        "key": "oIzSLwq7zFe3",
        "title": "WDYS",
        "artists": [
          "Pixel Neko",
          "Rhosy"
        ],
        "duration": 185,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2059/WDYSftRhosy-PixelNekoRhosy-39735751.mp3?st=BGxdgju4OAixBkPHQ1yfpw&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2025/12/12/a/2/6/2/1765531468395_300.jpg"
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
        "key": "lLMlw6FsQ0Sh",
        "title": "Xóa",
        "artists": [
          "Pixel Neko",
          "Pay"
        ],
        "duration": 155,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2059/Xoa-PixelNekoPayQuynhThy-39558549.mp3?st=qHNVMpVHVeJOiVsMqX87xw&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2025/11/27/f/f/e/2/1764221289092_300.jpg"
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
        "key": "DnhO309afIRB",
        "title": "Tình Trần",
        "artists": [
          "Huy Diệc"
        ],
        "duration": 213,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1020/TinhTran-HuyDiec-7070214.mp3?st=yfAeddW3BYlXimrRLmKMhA&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/08/20/f/c/f/e/1629445664769_300.jpg"
      },
      {
        "key": "RMGdPFtmZimH",
        "title": "Tại Sao Anh Nhận Lời",
        "artists": [
          "Lyly"
        ],
        "duration": 223,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2045/TaiSaoAnhNhanLoi-LylyNguyenHoangLan-11836975.mp3?st=t-0Hg7jOuM3A2X-S_uPOrQ&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2023/10/02/c/5/c/8/1696251806962_300.jpg"
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
        "key": "CxUr0BDmhgdv",
        "title": "Chúng Con Thành Đôi",
        "artists": [
          "Powerk"
        ],
        "duration": 245,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2052/ChungConThanhDoi-Powerk-13956694.mp3?st=ngbO0v7bUydUnqPjQMx7MA&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2024/03/01/b/3/9/b/1709271106740_300.jpg"
      },
      {
        "key": "bioZHIaFUgeJ",
        "title": "Khu Vườn Nhà Thơ",
        "artists": [
          "Góp Thong Thả"
        ],
        "duration": 198,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2036/KhuVuonNhaTho-GopThongTha-8843631.mp3?st=HvDFCYnOah6fuqljYkiYaw&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2023/03/13/6/b/7/6/1678679889924_300.jpg"
      },
      {
        "key": "ROPNQ7yKhUH9",
        "title": "LET ME WAKE UP",
        "artists": [
          "Tronie",
          "Henry Nguyễn"
        ],
        "duration": 186,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1026/LetMeWakeUp-TronieHenry-7131294.mp3?st=rPAiGw8eZJ3jp4b38flM5g&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2022/03/01/f/3/d/3/1646143129872_300.jpg"
      }
    ]
  },
  {
    "id": "playlist-rap-viet-thinh-hanh",
    "name": "🎤 Top Hit Rap Việt Thịnh Hành",
    "description": "Tuyển chọn 100 bản Rap & Hip-Hop Việt dẫn đầu bảng xếp hạng từ các Rapper đình đám (HIEUTHUHAI, Đen Vâu, BigDaddy, Pháp Kiều, RHYDER, HURRYKNG, Freaky, Karik, JustaTee, B Ray, Dick, Huỳnh James...).",
    "createdAt": "2026-11-16T04:41:38.885Z",
    "version": "2.5.0",
    "songs": [
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
        "key": "ABLMB2aG7Gtr",
        "title": "CHÂN THÀNH",
        "artists": [
          "ANH TRAI \"SAY HI\"",
          "RHYDER",
          "CAPTAIN BOY",
          "Quang Hùng MasterD",
          "WEAN",
          "Ali Hoàng Dương"
        ],
        "duration": 258,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/Warner_Audio259/ChanThanhFeatRhyderCaptainQuangHungMasterdWeanAliHoangDuong-ANHTRAISAYHI-15770777.mp3?st=dDBRMXYRlXmLCW7_MBiWHA&e=1794662763&a=0&p=0&r=4f2cea33c36537f0ee0fa93f73c70630",
        "image": "https://image-cdn.nct.vn/song/2024/08/17/f/b/4/4/1723893395674_300.jpg"
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
        "key": "gC2swgBESFvv",
        "title": "Sống Cho Hết Đời Thanh Xuân 4",
        "artists": [
          "Dick",
          "RAP VIỆT"
        ],
        "duration": 260,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/Warner_Audio174/SongChoHetDoiThanhXuan4FeatDick-RAPVIET-10979137.mp3?st=Edvn8xm9LfgdspWPkYHXlg&e=1794662795&a=0&p=0&r=8ac2f4c84b14b51fa57748dc04f45d7f",
        "image": "https://image-cdn.nct.vn/song/2023/08/18/9/e/a/8/1692368496464_300.jpg"
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
        "key": "RZBjcwPBU032",
        "title": "Cầu Vồng Thanh Xuân",
        "artists": [
          "OSAD",
          "Janie"
        ],
        "duration": 256,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1000/CauVongThanhXuan-OsadJanie-6308201.mp3?st=QDpalPiW6j7WfcDE3hoeYQ&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2020/06/22/e/2/9/7/1592820085014_300.jpg"
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
        "key": "hTOTcDR9r5d4",
        "title": "But Me Too (Maddi Remix)",
        "artists": [
          "Freaky",
          "Harose"
        ],
        "duration": 188,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1001/ButMeTooMaddiRemix-Freaky-6490067.mp3?st=DRqS-Z2AsHJgRjK3JoI6uQ&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2020/08/13/6/3/1/8/1597286831785_300.jpg"
      },
      {
        "key": "bUM7OaCnPrqU",
        "title": "Chơi Vơi (Hiphop Remix)",
        "artists": [
          "Feliks Alvin",
          "Allen"
        ],
        "duration": 240,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1014/ChoiVoiHiphopRemix-FeliksAllen-7006337.mp3?st=CL2JC5rIK-wvsbou6CMZGg&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/04/19/d/1/f/1/1618801656444_300.jpg"
      },
      {
        "key": "fNF2c9brJQeu",
        "title": "Chợt Tỉnh Giấc (Official Remix)",
        "artists": [
          "RHYDER"
        ],
        "duration": 214,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1020/ChotTinhGiacOfficialRemix-QuangAnhRhyder-7068161.mp3?st=WSUtv80a0u7sgZI0I7hyYg&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/08/16/c/5/a/8/1629081809822_300.jpg"
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
        "key": "z4wyJlGPe0ey",
        "title": "Papurapapa (Tương Tư) (feat. Minsicko)",
        "artists": [
          "th?o",
          "Minsicko"
        ],
        "duration": 227,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2058/PapurapapaTuongTufeatMinsicko-thoMinsicko-35427528.mp3?st=GPPEc8o5tFW_35oyRGQf9w&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2025/02/13/5/f/e/3/1739423113428_300.jpg"
      },
      {
        "key": "iNBq9o6BVX1Q",
        "title": "ĐI DẠO (INTERLUDE)",
        "artists": [
          "TINH HÀ \"SAY HI\"",
          "Wren Evans"
        ],
        "duration": 20,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/resa/2608/23/4f/bqqk2rhi48.mp3?st=icn0Rdkk315SL5W1zqkuSg&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2026/08/07/B/9/p/M/1786092367635_300.jpg"
      },
      {
        "key": "jAR5f5XalPCF",
        "title": "NÓI EM NGHE...(INTERLUDE)",
        "artists": [
          "TINH HÀ \"SAY HI\"",
          "Wren Evans"
        ],
        "duration": 55,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/resa/2608/3a/40/lixfezgif8.mp3?st=fJ4LwLNkmvt5KoStOeCAhA&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2026/08/07/B/9/p/M/1786092367635_300.jpg"
      },
      {
        "key": "g7NJxyCLLTR6",
        "title": "SECRET (feat. Quang Hùng MasterD, CODYNAMVO, CONGB & Wren Evans)",
        "artists": [
          "TINH HÀ \"SAY HI\"",
          "Quang Hùng MasterD",
          "CODYNAMVO",
          "CONGB",
          "Wren Evans"
        ],
        "duration": 280,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/resa/2608/e7/bf/z92i5eyt1b.mp3?st=spKKjBmZw2wp_vTzBF6kfA&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2026/08/07/B/9/p/M/1786092367635_300.jpg"
      },
      {
        "key": "avwHPYGbc1Sv",
        "title": "CỦA ANH (OUTRO)",
        "artists": [
          "TINH HÀ \"SAY HI\"",
          "Wren Evans"
        ],
        "duration": 55,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/resa/2608/13/80/zepv781pwt.mp3?st=z27ljjzckWt_SJqJke46FQ&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2026/08/07/B/9/p/M/1786092367635_300.jpg"
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
        "key": "cOztSq7WhQmT",
        "title": "MẤT LA BÀN",
        "artists": [
          "TINH HÀ \"SAY HI\"",
          "Pháp Kiều",
          "Thể Thiên",
          "Đặng Hồng Hải",
          "VƯƠNG BÌNH",
          "TorySax"
        ],
        "duration": 244,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/resa/2607/34/77/kcw3xondxp.mp3?st=z5dL4mGc4LOVXXVbp1LK_g&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2026/07/24/V/2/2/4/1784877877927_300.jpg"
      },
      {
        "key": "OMuofaJl8iL4",
        "title": "THẾ GIỚI CỦA ANH",
        "artists": [
          "TINH HÀ \"SAY HI\"",
          "Dương Domic",
          "WEAN",
          "CONGB",
          "buitruonglinh",
          "Van Toan"
        ],
        "duration": 257,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/resa/2607/b2/82/voy1ne1jjl.mp3?st=AiYq5zKi_k53xWozON0FqQ&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2026/07/24/V/2/2/4/1784877877927_300.jpg"
      },
      {
        "key": "hcIGyvMliDh9",
        "title": "GENTLEMAN",
        "artists": [
          "TINH HÀ \"SAY HI\"",
          "KIMLONG",
          "HURRYKNG",
          "Jaysonlei",
          "DILLAN",
          "Kobe Thuy Trio",
          "Pierre Renaud",
          "Misha Krasnopolsky"
        ],
        "duration": 262,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/resa/2607/5d/c8/jqmgnktdb9.mp3?st=BNeXZgyWLH0Sj7aS2cJxMw&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
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
        "key": "N4mj3v5s9vg0",
        "title": "XOAY VÒNG",
        "artists": [
          "TINH HÀ \"SAY HI\"",
          "HURRYKNG",
          "CONGB",
          "JSOL",
          "VƯƠNG BÌNH",
          "KADO (Việt Nam)",
          "Reeze",
          "Hoa Xuân Đức"
        ],
        "duration": 205,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/resa/2607/e8/1a/5nymfjts9z.mp3?st=ejwpt4wGErIUHkyG-JjIOg&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
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
        "key": "8midsCPVi5RD",
        "title": "BAD NIGHT",
        "artists": [
          "TINH HÀ \"SAY HI\"",
          "Dương Domic",
          "Pháp Kiều",
          "Đặng Hồng Hải",
          "Ali Hoàng Dương"
        ],
        "duration": 233,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/resa/2607/e4/b7/h8l93x8mtn.mp3?st=r7_KCT7MQrIktMzmiQjViA&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2026/07/10/6/g/w/v/1783666342729_300.jpg"
      },
      {
        "key": "VtFikTfhGn51",
        "title": "TOGETHER WE SHINE",
        "artists": [
          "TINH HÀ \"SAY HI\"",
          "Dương Domic",
          "Pháp Kiều",
          "JSOL",
          "buitruonglinh",
          "Sơn.K",
          "CONGB",
          "VƯƠNG BÌNH",
          "Đặng Hồng Hải",
          "IVAN",
          "HURRYKNG",
          "Song Luân",
          "CODYNAMVO",
          "CoolKid",
          "Jaysonlei",
          "HYO",
          "Thể Thiên",
          "Wren Evans",
          "KIMLONG",
          "CAPTAIN BOY",
          "WEAN",
          "Xuân Định K.Y",
          "Quang Hùng MasterD",
          "DILLAN",
          "Ali Hoàng Dương"
        ],
        "duration": 316,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/resa/2607/ed/14/o66j2p71a9.mp3?st=J9yhVRCcr4HCSLyHXwhchQ&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2026/07/06/h/8/e/9/1783310563751_300.jpg"
      },
      {
        "key": "LLc8dqA9fgyJ",
        "title": "I.C.O.N",
        "artists": [
          "ANH TRAI \"SAY HI\"",
          "Isaac",
          "HIEUTHUHAI",
          "Đức Phúc",
          "Quân A.P",
          "Quang Hùng MasterD",
          "Lou Hoàng",
          "Pháp Kiều",
          "WEAN",
          "Negav",
          "Hải Đăng Doo",
          "Gin Tuấn Kiệt",
          "Ali Hoàng Dương",
          "NICKY",
          "Vũ Thịnh",
          "Công Dương"
        ],
        "duration": 197,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/Warner_Audio243/IconFeatIsaacHieuthuhaiDucPhucErikQuanApQuangHungMasterdLouHoangPhapKieuWeanNegavHaiDangDooGinTuanKietAliHoangDuongNickyVuThinhCongDuong-ANHTRAISAYHI-15065465.mp3?st=UzB2aFVr7p5UEa9biacAmA&e=1794577136&a=0&p=0&r=7b9cbbb321d78ed7de611debde459459",
        "image": "https://image-cdn.nct.vn/song/2024/06/15/9/3/9/1/1718396273723_300.jpg"
      },
      {
        "key": "I27zoLp2Ovzz",
        "title": "KIM PHÚT, KIM GIỜ",
        "artists": [
          "Isaac",
          "Negav",
          "HIEUTHUHAI",
          "HURRYKNG",
          "Pháp Kiều",
          "ANH TRAI \"SAY HI\""
        ],
        "duration": 295,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/Warner_Audio260/KimPhutKimGioFeatHurrykngHieuthuhaiNegavPhapKieuIsaac-ANHTRAISAYHI-15840467.mp3?st=oHniIWHJeeYrXRs5yyxBWQ&e=1794577136&a=0&p=0&r=7b9cbbb321d78ed7de611debde459459",
        "image": "https://image-cdn.nct.vn/song/2024/08/23/e/c/3/c/1724421820127_300.jpg"
      },
      {
        "key": "IHIi82CDXKDo",
        "title": "WALK",
        "artists": [
          "ANH TRAI \"SAY HI\"",
          "HURRYKNG",
          "HIEUTHUHAI",
          "Negav",
          "Pháp Kiều",
          "Isaac"
        ],
        "duration": 232,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/Warner_Audio259/WalkFeatHurrykngHieuthuhaiNegavPhapKieuIsaac-ANHTRAISAYHI-15770778.mp3?st=xTvhaVS6C7zZsh08pDOXzg&e=1794577136&a=0&p=0&r=7b9cbbb321d78ed7de611debde459459",
        "image": "https://image-cdn.nct.vn/song/2024/08/17/f/b/4/4/1723893395674_300.jpg"
      },
      {
        "key": "gwkZrcqfbbOI",
        "title": "NGÁO NGƠ",
        "artists": [
          "ANH TRAI \"SAY HI\"",
          "HIEUTHUHAI",
          "ERIK",
          "Anh Tú Atus",
          "JSOL",
          "Orange"
        ],
        "duration": 252,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/Warner_Audio256/NgaoNgoFeatHieuthuhaiErikAnhTuAtusJsolOrange-ANHTRAISAYHI-15564774.mp3?st=02_Z7bFB_42TQefUfz6m3A&e=1794577136&a=0&p=0&r=7b9cbbb321d78ed7de611debde459459",
        "image": "https://image-cdn.nct.vn/song/2024/08/02/6/5/b/a/1722607585053_300.jpg"
      },
      {
        "key": "BYVwXVPbNBvC",
        "title": "LOVE SAND",
        "artists": [
          "ANH TRAI \"SAY HI\"",
          "HIEUTHUHAI",
          "JSOL",
          "Ali Hoàng Dương",
          "Vũ Thịnh"
        ],
        "duration": 235,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/Warner_Audio248/LoveSandFeatHieuthuhaiJsolAliHoangDuongVuThinh-ANHTRAISAYHI-15285295.mp3?st=rK86QI-FM9CcjCNICrBPDg&e=1794577136&a=0&p=0&r=7b9cbbb321d78ed7de611debde459459",
        "image": "https://image-cdn.nct.vn/song/2024/07/05/8/d/1/2/1720195916328_300.jpg"
      },
      {
        "key": "fXl25DgC421i",
        "title": "Một Công Đôi Việc",
        "artists": [
          "HURRYKNG",
          "HIEUTHUHAI",
          "RAP VIỆT"
        ],
        "duration": 255,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/Warner_Audio170/MotCongDoiViecFeatHurrykngHieuthuhai-RAPVIET-10574051.mp3?st=SS0i-ultj8MNvUWMNfl0PA&e=1794577136&a=0&p=0&r=7b9cbbb321d78ed7de611debde459459",
        "image": "https://image-cdn.nct.vn/song/2023/08/05/3/1/c/1/1691173062137_300.jpg"
      },
      {
        "key": "WAGNWjPyy1vv",
        "title": "Diệu Kỳ Việt Nam",
        "artists": [
          "Bích Phương",
          "Phúc Du",
          "HIEUTHUHAI",
          "GDucky"
        ],
        "duration": 285,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1010/DieuKyVietNam-BichPhuongPhucDuHIEUTHUHAIGDucky-6919132.mp3?st=rLPstlA3vwYG7D3mqAS-kw&e=1794577136&a=0&p=0&r=7b9cbbb321d78ed7de611debde459459",
        "image": "https://image-cdn.nct.vn/song/2021/01/17/4/1/0/a/1610876379248_300.jpg"
      },
      {
        "key": "TzFdRrD7LHWi",
        "title": "Reeves",
        "artists": [
          "KNG",
          "MANBO",
          "HIEUTHUHAI"
        ],
        "duration": 255,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1000/Reeves-KNGMANBOHIEUTHUHAI-6316916.mp3?st=Ldy3OoG0bhQhu7hbgKglfw&e=1794577136&a=0&p=0&r=7b9cbbb321d78ed7de611debde459459",
        "image": "https://image-cdn.nct.vn/song/2020/06/30/1/1/b/4/1593484149502_300.jpg"
      },
      {
        "key": "jQjwLvlhKazj",
        "title": "CHỜ ANH VỀ",
        "artists": [
          "ANH TRAI \"SAY HI\"",
          "B Ray",
          "AMEE"
        ],
        "duration": 214,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/resa/2512/8d/ce/il05jk7ntx.mp3?st=MnO8fLakqN8ABP_6NXLo4A&e=1794577136&a=0&p=0&r=63cb9f18e712905f999a39d9a8481e94",
        "image": "https://image-cdn.nct.vn/song/2025/12/08/V/Y/X/f/1765165771131_300.jpg"
      },
      {
        "key": "bZD1VVSYpOpS",
        "title": "Do For Love",
        "artists": [
          "B Ray",
          "AMEE"
        ],
        "duration": 189,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui995/DoForLove-AMeeBRay-6221980.mp3?st=Y9EMMFxfpyHJuam2GW1meg&e=1794577136&a=0&p=0&r=63cb9f18e712905f999a39d9a8481e94",
        "image": "https://image-cdn.nct.vn/song/2020/02/11/d/4/5/a/1581406608326_300.jpg"
      },
      {
        "key": "9E0fuizURkYA",
        "title": "dỗi ít thôi ôm đê (ShenlongZ Remix)",
        "artists": [
          "Phúc Du",
          "AMEE"
        ],
        "duration": 189,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2032/DoiItThoiOmDeShenlongZRemix-PhucDuAMEE-8380820.mp3?st=p9dtKgPWUT6lH7e0YR8q4Q&e=1794577136&a=0&p=0&r=63cb9f18e712905f999a39d9a8481e94",
        "image": "https://image-cdn.nct.vn/song/2022/12/07/5/6/5/7/1670383191949_300.jpg"
      },
      {
        "key": "lLTrUXjAXrud",
        "title": "dỗi ít thôi ôm đê",
        "artists": [
          "Phúc Du",
          "AMEE"
        ],
        "duration": 188,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2032/DoiItThoiOmDe-PhucDuAMEE-8343857.mp3?st=ZKFsKzhxNG_uRRYU1ZTHMg&e=1794577136&a=0&p=0&r=63cb9f18e712905f999a39d9a8481e94",
        "image": "https://image-cdn.nct.vn/song/2022/12/05/a/d/e/b/1670222703450_300.jpg"
      },
      {
        "key": "TcToTb7FEGP9",
        "title": "HỀ",
        "artists": [
          "EM XINH \"SAY HI\"",
          "Phương Mỹ Chi",
          "Phương Ly",
          "Pháo",
          "Chi Xê",
          "WEAN"
        ],
        "duration": 266,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/resa/2506/d2/c0/jlgarklscw.mp3?st=9wR_hcQTNzpQLOBiqyUyHA&e=1794577136&a=0&p=0&r=0be5a2e7d9be55f4fec128a3e0a5bab6",
        "image": "https://image-cdn.nct.vn/song/2025/06/23/0/d/2/8/1750662892862_300.jpg"
      },
      {
        "key": "dNS7iGz7jBau",
        "title": "FOREVER SAY HI",
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
          "Phạm Đình Thái Ngân",
          "Karik",
          "Vũ Cát Tường",
          "GILL",
          "Tez",
          "buitruonglinh",
          "Otis",
          "Negav",
          "Mason Nguyen",
          "Sơn.K",
          "CONGB",
          "Jey B",
          "Ngô Kiến Huy",
          "VƯƠNG BÌNH",
          "Nhâm Phương Nam",
          "Đỗ Nam Sơn"
        ],
        "duration": 297,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/resa/2512/df/a9/tikrzo4ebe.mp3?st=JFV3LJaPwNE1I1jhzP0ESQ&e=1794577137&a=0&p=0&r=6e33b92896ab3191d9175465972f8ce6",
        "image": "https://image-cdn.nct.vn/song/2025/12/20/G/Q/a/0/1766242406791_300.jpg"
      },
      {
        "key": "cR5LoawvLAr5",
        "title": "ALL EYES ON US (REMIX)",
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
          "Phạm Đình Thái Ngân",
          "Karik",
          "Vũ Cát Tường",
          "GILL",
          "Tez",
          "buitruonglinh",
          "Otis",
          "Negav",
          "Mason Nguyen",
          "Sơn.K",
          "CONGB",
          "Jey B",
          "Ngô Kiến Huy",
          "VƯƠNG BÌNH",
          "Nhâm Phương Nam",
          "Đỗ Nam Sơn"
        ],
        "duration": 192,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/resa/2512/29/a4/sclk5c7ll0.mp3?st=t8mRWnBieVezcWmBtdqTzw&e=1794577137&a=0&p=0&r=6e33b92896ab3191d9175465972f8ce6",
        "image": "https://image-cdn.nct.vn/song/2025/12/20/G/Q/a/0/1766242406791_300.jpg"
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
        "key": "Z8vq9PRQpd9A",
        "title": "THIÊU THÂN",
        "artists": [
          "ANH TRAI \"SAY HI\"",
          "Khoi Vu",
          "B Ray",
          "Ryn Lee",
          "Phạm Đình Thái Ngân",
          "Bùi Duy Ngọc"
        ],
        "duration": 202,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/resa/2509/dc/68/vyubsz8bdy.mp3?st=n89w5Vb6Q8kI8dgWz6eU5A&e=1794577137&a=0&p=0&r=6e33b92896ab3191d9175465972f8ce6",
        "image": "https://image-cdn.nct.vn/song/2025/09/29/o/W/i/k/1759119226418_300.jpg"
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
        "key": "UAXoY85t8dIP",
        "title": "Tiểu Thuyết Tình Yêu 2026 (Eopixi Remix)",
        "artists": [
          "Freaky",
          "Hành Or",
          "Pinny",
          "Eopixi"
        ],
        "duration": 284,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/resa/2609/ae/9e/yp7531jjah.mp3?st=2u4n7LuBChuxkyQ4SkMN9g&e=1794577139&a=0&p=0&r=e9d640806fdc94face6305b502720edc",
        "image": "https://image-cdn.nct.vn/song/2026/09/07/a/d/d/5/1788775402227_300.jpg"
      },
      {
        "key": "myqn76bJZKBf",
        "title": "Lửa Thử Vàng (Rising Like A Star)",
        "artists": [
          "Hành Or",
          "Rtee",
          "Freaky",
          "Hổ"
        ],
        "duration": 218,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/resa/2608/79/9d/tc8dhry9wn.mp3?st=9H6iuW3japUnsIIlW77Mfg&e=1794577139&a=0&p=0&r=e9d640806fdc94face6305b502720edc",
        "image": "https://image-cdn.nct.vn/song/2026/08/18/5/2/4/e/1787051531040_300.jpg"
      },
      {
        "key": "uMTU7xlx3BOG",
        "title": "TIỂU THUYẾT TÌNH YÊU 2026",
        "artists": [
          "Freaky",
          "Hành Or",
          "Pinny",
          "Hổ"
        ],
        "duration": 189,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/resa/2607/71/69/bf7i70bbd1.mp3?st=BODsVaQkzHywkeGYkZvBTQ&e=1794577139&a=0&p=0&r=e9d640806fdc94face6305b502720edc",
        "image": "https://image-cdn.nct.vn/song/2026/07/15/c/c/9/8/1784098925534_300.jpg"
      },
      {
        "key": "BMncGEC7MwEn",
        "title": "BCT2026 (Prod. Hổ)",
        "artists": [
          "Hành Or",
          "Rtee",
          "Freaky",
          "5BER1"
        ],
        "duration": 354,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/resa/2605/de/f5/t8ufkjzjaw.mp3?st=Nj8s9Dd0-sou3oCccpj4yA&e=1794577139&a=0&p=0&r=e9d640806fdc94face6305b502720edc",
        "image": "https://image-cdn.nct.vn/song/2026/05/15/1/6/8/b/1778829676492_300.jpg"
      },
      {
        "key": "bIuRf6GR9Nid",
        "title": "Tết Đong Đầy 5 (Remix)",
        "artists": [
          "KHOA",
          "Freaky"
        ],
        "duration": 164,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2059/TetDongDay5Remix-KHOATreFreaky-40087480.mp3?st=cg0G1nGubZ84-ffjtijH7w&e=1794577139&a=0&p=0&r=e9d640806fdc94face6305b502720edc",
        "image": "https://image-cdn.nct.vn/song/2026/01/12/4/d/5/5/1768213763086_300.jpg"
      },
      {
        "key": "Lo31VtxPGXbm",
        "title": "Trao Nhau Nụ Hôn",
        "artists": [
          "Phát Hồ",
          "Freaky"
        ],
        "duration": 222,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2059/TraoNhauNuHon-PhatHoFreaky-38591753.mp3?st=AGxBUpwbX3W3pDqHdtp2hQ&e=1794577139&a=0&p=0&r=e9d640806fdc94face6305b502720edc",
        "image": "https://image-cdn.nct.vn/song/2025/09/16/9/2/d/5/1758009354990_300.jpg"
      },
      {
        "key": "8KGCPjMg2pC5",
        "title": "Nghĩ Nhiều",
        "artists": [
          "Hành Or",
          "Freaky"
        ],
        "duration": 192,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2058/NghiNhieu-HanhOrFreaky-36974541.mp3?st=4nS3tYf33NU2rcunxESdTA&e=1794577139&a=0&p=0&r=e9d640806fdc94face6305b502720edc",
        "image": "https://image-cdn.nct.vn/song/2025/05/21/0/8/a/b/1747816065241_300.jpg"
      },
      {
        "key": "8bRSmTcH7bG0",
        "title": "Cypher Love",
        "artists": [
          "KHOA",
          "Minh Huy",
          "Freaky",
          "Pjnboys",
          "Bảo Kun",
          "Koo",
          "Dubbie",
          "BILLY100",
          "Night T"
        ],
        "duration": 432,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2058/CypherLove-KHOANguyenKhoaMinhHuyFreakyPjnboysBaoKunKooDubbieBILLY100NightT-35367138.mp3?st=bwkF4j3pN6ajC0T_8mrOuA&e=1794577139&a=0&p=0&r=e9d640806fdc94face6305b502720edc",
        "image": "https://image-cdn.nct.vn/song/2025/02/10/b/a/7/c/1739165883078_300.jpg"
      },
      {
        "key": "hTSnGs46119Y",
        "title": "Tết Đong Đầy 5",
        "artists": [
          "KHOA",
          "Freaky"
        ],
        "duration": 205,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2058/TetDongDay5-KHOAFreaky-35086100.mp3?st=iaRBJ-kE2k__P1KkE8tphA&e=1794577139&a=0&p=0&r=e9d640806fdc94face6305b502720edc",
        "image": "https://image-cdn.nct.vn/song/2025/01/19/3/c/b/3/1737293490949_300.jpg"
      },
      {
        "key": "4baBf7m1FCej",
        "title": "Tao Muốn Có Ngày Đẹp Trời",
        "artists": [
          "Minh Huy",
          "Freaky",
          "Hustlang HBo",
          "Nam Joyy"
        ],
        "duration": 309,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2057/TaoMuonCoNgayDepTroi-MinhHuyFreakyHustlangHBoNamJoyy-16355046.mp3?st=aPFGlxBWUZsFPd93sGjn_w&e=1794577139&a=0&p=0&r=e9d640806fdc94face6305b502720edc",
        "image": "https://image-cdn.nct.vn/song/2024/10/09/a/6/f/f/1728465234994_300.jpg"
      },
      {
        "key": "LjXKd9Rknlst",
        "title": "Muốn Cưa Được Em",
        "artists": [
          "Freaky",
          "HENNESSY"
        ],
        "duration": 170,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2057/MuonCuaDuocEm-FreakyHennessy-16352486.mp3?st=5ODEVdEU2wrG58pbejdyJA&e=1794577139&a=0&p=0&r=e9d640806fdc94face6305b502720edc",
        "image": "https://image-cdn.nct.vn/song/2024/10/09/a/6/f/f/1728444878624_300.jpg"
      },
      {
        "key": "azept7itHFSP",
        "title": "Mẹ Anh Thường Nhắc Về Em",
        "artists": [
          "Freaky",
          "Olew"
        ],
        "duration": 200,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2056/MeAnhThuongNhacVeEm-FreakyOlewVietNam-15151271.mp3?st=cp04hEcmQBdOaGueOkDQBA&e=1794577139&a=0&p=0&r=e9d640806fdc94face6305b502720edc",
        "image": "https://image-cdn.nct.vn/song/2024/06/25/4/4/7/1/1719301196943_300.jpg"
      },
      {
        "key": "DzKODGz9hHly",
        "title": "EVE",
        "artists": [
          "GreenV",
          "Freaky"
        ],
        "duration": 219,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2053/EVE-GreenVFreaky-14146189.mp3?st=VQYJbfBPM_cY8Eu6YAK4EA&e=1794577139&a=0&p=0&r=e9d640806fdc94face6305b502720edc",
        "image": "https://image-cdn.nct.vn/song/2024/03/19/d/4/1/2/1710832767382_300.jpg"
      },
      {
        "key": "y8eIqOnOx6vD",
        "title": "Giữa Thành Phố",
        "artists": [
          "Tempo G",
          "Anh Thư Phan",
          "Freaky"
        ],
        "duration": 244,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2052/GiuaThanhPho-TempoGAnhThuPhanFreaky-13672608.mp3?st=85to1xe7p1TybsEQ2HWz1w&e=1794577139&a=0&p=0&r=e9d640806fdc94face6305b502720edc",
        "image": "https://image-cdn.nct.vn/song/2024/02/06/1/a/e/4/1707205128834_300.jpg"
      },
      {
        "key": "HLwEAhyeYKlq",
        "title": "Freaky Horanhac Session 3",
        "artists": [
          "Freaky",
          "Hổ"
        ],
        "duration": 178,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2051/FreakyHoranhacSession3-FreakyHo-13638361.mp3?st=Pz-XurGl6-msywY41O0bwg&e=1794577139&a=0&p=0&r=e9d640806fdc94face6305b502720edc",
        "image": "https://image-cdn.nct.vn/song/2024/02/02/3/e/1/3/1706865468012_300.jpg"
      },
      {
        "key": "NVNTw9gASEeF",
        "title": "Em Cứ Bước (CM1X Remix)",
        "artists": [
          "Freaky",
          "DAT NHO",
          "CM1X"
        ],
        "duration": 200,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2051/EmCuBuocCM1XRemix-FreakyDATNHOCM1X-13596767.mp3?st=FAjj6B0bbXj4rwBAL0_n4w&e=1794577139&a=0&p=0&r=e9d640806fdc94face6305b502720edc",
        "image": "https://image-cdn.nct.vn/song/2024/01/30/7/7/2/a/1706626088646_300.jpg"
      },
      {
        "key": "SYJqlQtALFsZ",
        "title": "Em Cứ Bước",
        "artists": [
          "Freaky",
          "DAT NHO"
        ],
        "duration": 210,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2048/EmCuBuoc-FreakyDATNHO-12474178.mp3?st=3hpUVTAhK771CuRccWJKbQ&e=1794577139&a=0&p=0&r=e9d640806fdc94face6305b502720edc",
        "image": "https://image-cdn.nct.vn/song/2023/11/21/a/b/f/4/1700551560024_300.jpg"
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
        "key": "ZMRUyjT64keA",
        "title": "Muốn Quên Được Em (KPROX Remix)",
        "artists": [
          "Freaky",
          "SEANPOET"
        ],
        "duration": 224,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2043/MuonQuenDuocEmKPROXRemix-Freaky-10326625.mp3?st=qpGMb863uhFuhYBaA_iSuQ&e=1794577139&a=0&p=0&r=e9d640806fdc94face6305b502720edc",
        "image": "https://image-cdn.nct.vn/song/2023/07/31/b/4/4/c/1690796537160_300.jpg"
      },
      {
        "key": "A5yTNXUk5n1S",
        "title": "Muốn Quên Được Em (QUANVROX Remix)",
        "artists": [
          "Freaky",
          "SEANPOET"
        ],
        "duration": 199,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2043/MuonQuenDuocEmQUANVROXRemix-Freaky-10326623.mp3?st=bs8DCRTTwqgDPPODf1EPSA&e=1794577139&a=0&p=0&r=e9d640806fdc94face6305b502720edc",
        "image": "https://image-cdn.nct.vn/song/2023/07/31/b/4/4/c/1690796463039_300.jpg"
      },
      {
        "key": "t31lx6Sl5Sqm",
        "title": "Muốn Quên Được Em (DUZME Remix)",
        "artists": [
          "Freaky",
          "SEANPOET"
        ],
        "duration": 184,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2043/MuonQuenDuocEmDUZMERemix-Freaky-10326591.mp3?st=SmjYpVC4PeMoHfQAinifhw&e=1794577139&a=0&p=0&r=e9d640806fdc94face6305b502720edc",
        "image": "https://image-cdn.nct.vn/song/2023/07/31/b/4/4/c/1690795653799_300.jpg"
      },
      {
        "key": "2hnqRGO1AxSh",
        "title": "Muốn Quên Được Em (CM1X Remix)",
        "artists": [
          "Freaky",
          "SEANPOET"
        ],
        "duration": 190,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2043/MuonQuenDuocEmCM1XRemix-Freaky-10326267.mp3?st=14YXX5zHK4B30uQHTZaLSQ&e=1794577139&a=0&p=0&r=e9d640806fdc94face6305b502720edc",
        "image": "https://image-cdn.nct.vn/song/2023/07/31/b/4/4/c/1690790438515_300.jpg"
      },
      {
        "key": "1iTCVCDlp11V",
        "title": "Muốn Quên Được Em",
        "artists": [
          "Freaky",
          "SEANPOET"
        ],
        "duration": 190,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2042/MuonQuenDuocEm-Freaky-10089792.mp3?st=x2WTA-bB0Pv7ypgvYsgu8Q&e=1794577139&a=0&p=0&r=e9d640806fdc94face6305b502720edc",
        "image": "https://image-cdn.nct.vn/song/2023/07/13/a/e/f/0/1689184276745_300.jpg"
      },
      {
        "key": "zKMTTTdmSkwB",
        "title": "Sài Gòn 24h",
        "artists": [
          "Freaky",
          "TÔ CHÂU"
        ],
        "duration": 212,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2042/SaiGon24h-FreakyTOCHAUVietNam-10084646.mp3?st=gWJ6ys7L3dxTkIsyGLQ7zw&e=1794577139&a=0&p=0&r=e9d640806fdc94face6305b502720edc",
        "image": "https://image-cdn.nct.vn/song/2023/07/12/e/d/1/2/1689175661644_300.jpg"
      },
      {
        "key": "u7Vn8qWVYt6J",
        "title": "Thanh Xuân Có Nhau",
        "artists": [
          "SEANPOET",
          "Freaky"
        ],
        "duration": 221,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2038/ThanhXuanCoNhau-VA-9362715.mp3?st=iFIeL1Iyo2EiLOpxBrFiOQ&e=1794577139&a=0&p=0&r=e9d640806fdc94face6305b502720edc",
        "image": "https://image-cdn.nct.vn/song/2025/09/17/1/9/d/0/1758102396985_300.jpg"
      },
      {
        "key": "4imjtyVPdt86",
        "title": "Ghé Vào Tai",
        "artists": [
          "UMIE",
          "Freaky",
          "Hổ"
        ],
        "duration": 155,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2034/GheVaoTai-UMIEFreakyHo-8514373.mp3?st=4NxVNvoigfLzu4rN0s1p6Q&e=1794577139&a=0&p=0&r=e9d640806fdc94face6305b502720edc",
        "image": "https://image-cdn.nct.vn/song/2023/01/12/e/2/4/d/1673508699888_300.jpg"
      },
      {
        "key": "fhR43evJMRZP",
        "title": "Tán Em",
        "artists": [
          "KHOA",
          "Freaky"
        ],
        "duration": 188,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2033/TanEm-KHOANguyenKhoaFreaky-8445577.mp3?st=ZktNXKDk_dHCvTk-KommHQ&e=1794577139&a=0&p=0&r=e9d640806fdc94face6305b502720edc",
        "image": "https://image-cdn.nct.vn/song/2022/12/21/b/2/7/c/1671607770938_300.jpg"
      },
      {
        "key": "2eGgibj6YecO",
        "title": "Quả Táo",
        "artists": [
          "TIA",
          "Freaky",
          "CM1X"
        ],
        "duration": 264,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2033/QuaTao-TiaHaiChauFreakyCM1X-8428473.mp3?st=oldkIKROFwpGrRowljRVQQ&e=1794577139&a=0&p=0&r=e9d640806fdc94face6305b502720edc",
        "image": "https://image-cdn.nct.vn/song/2022/12/16/7/d/4/0/1671185141260_300.jpg"
      },
      {
        "key": "qbALDeuz95PW",
        "title": "Riu Gơ",
        "artists": [
          "Freaky",
          "T.R.I",
          "Trần Quang Trường"
        ],
        "duration": 249,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2030/RiuGo-FreakyTRIBeon-8186440.mp3?st=OB_sdKrbpGk-c-8S9yHLJw&e=1794577139&a=0&p=0&r=e9d640806fdc94face6305b502720edc",
        "image": "https://image-cdn.nct.vn/song/2022/11/01/e/b/7/c/1667286829871_300.jpg"
      },
      {
        "key": "NsprSsRZkgYG",
        "title": "Tài Từ Trong Trứng",
        "artists": [
          "Freaky"
        ],
        "duration": 120,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2029/TaiTuTrongTrung-Freaky-8093728.mp3?st=UbwxqRm-eCUFOg52eLphjQ&e=1794577139&a=0&p=0&r=e9d640806fdc94face6305b502720edc",
        "image": "https://image-cdn.nct.vn/song/2022/10/19/7/1/f/4/1666168315603_300.jpg"
      },
      {
        "key": "ak9qyLrmBjqN",
        "title": "Tuesday (CM1X Remix)",
        "artists": [
          "Freaky"
        ],
        "duration": 201,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2028/TuesdayCM1XRemix-Freaky-7851420.mp3?st=ynn6VvyWxXXWo0Tti5Ld1w&e=1794577139&a=0&p=0&r=e9d640806fdc94face6305b502720edc",
        "image": "https://image-cdn.nct.vn/song/2022/09/08/b/6/2/9/1662634241513_300.jpg"
      },
      {
        "key": "SsDUe4BQKhvU",
        "title": "Gọi Cho Anh Đi Bae",
        "artists": [
          "KHOA",
          "Freaky"
        ],
        "duration": 188,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2027/GoiChoAnhDiBae-KhoaFreaky-7806505.mp3?st=fLn0RWniDZaRQddwwECevw&e=1794577139&a=0&p=0&r=e9d640806fdc94face6305b502720edc",
        "image": "https://image-cdn.nct.vn/song/2022/08/22/6/b/a/9/1661161152601_300.jpg"
      },
      {
        "key": "QZPu7RIAJyY3",
        "title": "Tuesday",
        "artists": [
          "Freaky"
        ],
        "duration": 200,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2027/Tuesday-Freaky-7771103.mp3?st=8xFhJNNG_GhqTBF-U49E_w&e=1794577139&a=0&p=0&r=e9d640806fdc94face6305b502720edc",
        "image": "https://image-cdn.nct.vn/song/2022/08/12/4/2/3/2/1660300084240_300.jpg"
      },
      {
        "key": "NFt8ncegAcJk",
        "title": "Ta Can Nhau Khong",
        "artists": [
          "Tempo G",
          "Freaky",
          "SIVAN"
        ],
        "duration": 220,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2022/TaCanNhauKhong-TempoGFreakySIVANMinhAnSivan-7290490.mp3?st=mNJHA9MNyFrcmESlatmRNA&e=1794577139&a=0&p=0&r=e9d640806fdc94face6305b502720edc",
        "image": "https://image-cdn.nct.vn/song/2022/06/01/4/b/6/9/1654067141439_300.jpg"
      },
      {
        "key": "acW0G9E5S07a",
        "title": "Yêu Mỗi Em",
        "artists": [
          "Sóc Nâu",
          "Freaky"
        ],
        "duration": 192,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2022/YeuMoiEm-SocNauFreaky-7235491.mp3?st=CFJC9WbkYekVX8QOmXOl2g&e=1794577139&a=0&p=0&r=e9d640806fdc94face6305b502720edc",
        "image": "https://image-cdn.nct.vn/song/2022/05/25/0/6/5/4/1653450079125_300.jpg"
      },
      {
        "key": "NZgd7IupAE3U",
        "title": "Sân Khấu Lầm Tưởng",
        "artists": [
          "Freaky",
          "RAP VIỆT"
        ],
        "duration": 232,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/Warner_Audio73/SanKhauLamTuongFeatFreaky-RAPVIET-7138816.mp3?st=dYKKBRMd0Tvg9og_U5yTJA&e=1794577139&a=0&p=0&r=e9d640806fdc94face6305b502720edc",
        "image": "https://image-cdn.nct.vn/song/2022/01/18/e/b/3/0/1642491962561_300.jpg"
      },
      {
        "key": "0iaceejVO5mm",
        "title": "Vì Đó Là Anh",
        "artists": [
          "2Can",
          "Freaky",
          "RAP VIỆT"
        ],
        "duration": 164,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1024/ViDoLaAnh-2CanFreakyRAPVIET-7122090.mp3?st=UNA7oLoJBS4hexYdP-2oOg&e=1794577139&a=0&p=0&r=e9d640806fdc94face6305b502720edc",
        "image": "https://image-cdn.nct.vn/song/2021/12/02/7/5/4/1/1638432039815_300.jpg"
      },
      {
        "key": "zz2ywetOw77L",
        "title": "Teen Rap Việt",
        "artists": [
          "Freaky",
          "RAP VIỆT"
        ],
        "duration": 164,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1024/TeenRapViet-FreakyRAPVIET-7121381.mp3?st=9hHUIaAY5jq3jrSEBmhIwg&e=1794577139&a=0&p=0&r=e9d640806fdc94face6305b502720edc",
        "image": "https://image-cdn.nct.vn/song/2021/11/26/4/a/f/f/1637912221887_300.jpg"
      },
      {
        "key": "jk34xOOdsZK7",
        "title": "Healing",
        "artists": [
          "Freaky",
          "SUMMER VEE"
        ],
        "duration": 215,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1022/Healing-FreakySummerVee-7090679.mp3?st=UxdRA5wHeRWTjelT1xFR7Q&e=1794577139&a=0&p=0&r=e9d640806fdc94face6305b502720edc",
        "image": "https://image-cdn.nct.vn/song/2021/09/17/5/a/b/4/1631859764320_300.jpg"
      },
      {
        "key": "ejYMU3QCMZ8C",
        "title": "GENZ",
        "artists": [
          "Freaky",
          "Nhật Hoàng"
        ],
        "duration": 151,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1020/Genz-FreakyNhatHoang-7067061.mp3?st=ZkWVpGp7u9hQSvZPOps5jQ&e=1794577139&a=0&p=0&r=e9d640806fdc94face6305b502720edc",
        "image": "https://image-cdn.nct.vn/song/2021/08/13/7/b/0/e/1628835376920_300.jpg"
      }
    ]
  },
  {
    "id": "playlist-ballad-cam-xuc",
    "name": "🌧️ Top Ballad Cảm Xúc & Sâu Lắng",
    "description": "Tuyển chọn 100 tình khúc Ballad da diết, mộc mạc và sâu lắng chạm đến trái tim từ các giọng ca vàng (Trung Quân Idol, Vũ., Đức Phúc, ERIK, Hoàng Dũng, Văn Mai Hương, Bùi Anh Tuấn, Phan Mạnh Quỳnh, Noo Phước Thịnh, AMEE, Phương Ly, Thịnh Suy...).",
    "createdAt": "2026-11-16T04:41:38.925Z",
    "version": "2.5.0",
    "songs": [
      {
        "key": "QEX3eU6yxm2r",
        "title": "Ta Còn Yêu Nhau (HITStory Live Version)",
        "artists": [
          "Đức Phúc",
          "HITSTORY - Chuyện Nhạc"
        ],
        "duration": 212,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2058/TaConYeuNhauHITStoryLiveVersion-DucPhucHITStory-35133252.mp3?st=UU9sYUZzjTD4ufuP0UtZJw&e=1794577141&a=0&p=0&r=443a766ab370b8d4d2b2a27c07542e78",
        "image": "https://image-cdn.nct.vn/song/2025/01/22/3/1/a/1/1737525316880_300.jpg"
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
        "key": "jvaolomZtGnd",
        "title": "Một Ngàn Nỗi Đau",
        "artists": [
          "Văn Mai Hương",
          "Hứa Kim Tuyền"
        ],
        "duration": 321,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2023/MotNganNoiDau-VanMaiHuongHuaKimTuyen-7561897.mp3?st=5BK9fuz6pUnNr5SZey8oxg&e=1794577143&a=0&p=0&r=07c728d1fbc10979898289c700d8d53c",
        "image": "https://image-cdn.nct.vn/song/2022/06/22/2/2/2/d/1655884422688_300.jpg"
      },
      {
        "key": "tZRixwuv75MV",
        "title": "Cầu Hôn (Happy Version)",
        "artists": [
          "Văn Mai Hương"
        ],
        "duration": 244,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1010/CauHonHappyVersion-VanMaiHuong-6927334.mp3?st=VlZdN2UVpGtbRTXJGZlDAw&e=1794577143&a=0&p=0&r=07c728d1fbc10979898289c700d8d53c",
        "image": "https://image-cdn.nct.vn/song/2021/01/22/9/f/2/1/1611280551489_300.jpg"
      },
      {
        "key": "E2izzWhGMenY",
        "title": "Tôi Thương Ba (Original Soundtrack From \"Con Nhót Mót Chồng\")",
        "artists": [
          "Văn Mai Hương",
          "Hồ Trung Dũng"
        ],
        "duration": 356,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2038/ToiThuongBaOriginalSoundtrackFromConNhotMotChong-VanMaiHuongHoTrungDung-9356964.mp3?st=KbqxpTeupfJ4fdtdDenL8g&e=1794577143&a=0&p=0&r=07c728d1fbc10979898289c700d8d53c",
        "image": "https://image-cdn.nct.vn/song/2023/04/24/7/a/f/6/1682319459521_300.jpg"
      },
      {
        "key": "4yr3Kru4RDD1",
        "title": "Chuyện Rằng",
        "artists": [
          "Thịnh Suy"
        ],
        "duration": 272,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1007/ChuyenRang1-ThinhSuy-6465355.mp3?st=pZjsV9cAsY2UW3xQjHlhdw&e=1794577146&a=0&p=0&r=da95dcf22d5abc0686f5dadba2ebd80c",
        "image": "https://image-cdn.nct.vn/song/2020/08/07/d/e/f/2/1596786667818_300.jpg"
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
        "key": "kvS8Bw6RFZeB",
        "title": "Gần Bên Em (Ready For You)",
        "artists": [
          "Vũ Thảo My"
        ],
        "duration": 206,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2054/GanBenEmReadyForYou-VuThaoMy-14329585.mp3?st=uuWAU221FHh4HQfUV8gj8Q&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2024/04/05/b/7/4/5/1712290502151_300.jpg"
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
        "key": "sfOAUHdZuTKR",
        "title": "Bad Girl (Dành Một Mình Mỗi Anh)",
        "artists": [
          "Vũ Thảo My"
        ],
        "duration": 193,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2054/BadGirlDanhMotMinhMoiAnh-VuThaoMy-14329595.mp3?st=eP1f3eP3NmeGhGQF4VZjjw&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2024/04/05/b/7/4/5/1712290970766_300.jpg"
      },
      {
        "key": "9tFcUMkGrFCv",
        "title": "Làm Em Say (Fall In Love)",
        "artists": [
          "Vũ Thảo My"
        ],
        "duration": 181,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2054/LamEmSayFallInLove-VuThaoMy-14329814.mp3?st=V1jTrjlW3ZeYNkErqzqEkA&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2024/04/05/b/7/4/5/1712295947457_300.jpg"
      },
      {
        "key": "ISOjWT6AAOO5",
        "title": "Bang Bang",
        "artists": [
          "Vũ Thảo My",
          "Jsdrmns"
        ],
        "duration": 180,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2043/BangBang-VuThaoMyJsdrmns-10302195.mp3?st=x-5or8hkzHYEBwXliSOw8A&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2023/07/26/1/0/8/1/1690347293732_300.jpg"
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
        "key": "jFQphrABK5rk",
        "title": "Nơi Ta Từng (Pro. By KRIZH) (Cukak Remix)",
        "artists": [
          "Xuân Vũ",
          "Nghĩa Phùng"
        ],
        "duration": 211,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2031/NoiTaTungProByKRIZHCukakRemix-XuanVuNghiaPhung-8294894.mp3?st=wzH2uhyTXQi7utaJUDgubw&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2022/11/21/4/f/d/3/1669006256129_300.jpg"
      },
      {
        "key": "TVXIVGpuhAIK",
        "title": "Lỡ Duyên Vậy Thôi (LeeRit x HHD Remix)",
        "artists": [
          "Trần Minh Vũ",
          "Khả Huy"
        ],
        "duration": 248,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1019/LoDuyenVayThoiLeeritXHhdRemix-TranMinhVuKhaHuy-7061391.mp3?st=asux0-RO7s7oKQKCLm4f7Q&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/08/05/3/c/a/5/1628131095592_300.jpg"
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
        "key": "LLc8dqA9fgyJ",
        "title": "I.C.O.N",
        "artists": [
          "ANH TRAI \"SAY HI\"",
          "Isaac",
          "HIEUTHUHAI",
          "Đức Phúc",
          "Quân A.P",
          "Quang Hùng MasterD",
          "Lou Hoàng",
          "Pháp Kiều",
          "WEAN",
          "Negav",
          "Hải Đăng Doo",
          "Gin Tuấn Kiệt",
          "Ali Hoàng Dương",
          "NICKY",
          "Vũ Thịnh",
          "Công Dương"
        ],
        "duration": 197,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/Warner_Audio243/IconFeatIsaacHieuthuhaiDucPhucErikQuanApQuangHungMasterdLouHoangPhapKieuWeanNegavHaiDangDooGinTuanKietAliHoangDuongNickyVuThinhCongDuong-ANHTRAISAYHI-15065465.mp3?st=UzB2aFVr7p5UEa9biacAmA&e=1794577136&a=0&p=0&r=7b9cbbb321d78ed7de611debde459459",
        "image": "https://image-cdn.nct.vn/song/2024/06/15/9/3/9/1/1718396273723_300.jpg"
      },
      {
        "key": "gwkZrcqfbbOI",
        "title": "NGÁO NGƠ",
        "artists": [
          "ANH TRAI \"SAY HI\"",
          "HIEUTHUHAI",
          "ERIK",
          "Anh Tú Atus",
          "JSOL",
          "Orange"
        ],
        "duration": 252,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/Warner_Audio256/NgaoNgoFeatHieuthuhaiErikAnhTuAtusJsolOrange-ANHTRAISAYHI-15564774.mp3?st=02_Z7bFB_42TQefUfz6m3A&e=1794577136&a=0&p=0&r=7b9cbbb321d78ed7de611debde459459",
        "image": "https://image-cdn.nct.vn/song/2024/08/02/6/5/b/a/1722607585053_300.jpg"
      },
      {
        "key": "BYVwXVPbNBvC",
        "title": "LOVE SAND",
        "artists": [
          "ANH TRAI \"SAY HI\"",
          "HIEUTHUHAI",
          "JSOL",
          "Ali Hoàng Dương",
          "Vũ Thịnh"
        ],
        "duration": 235,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/Warner_Audio248/LoveSandFeatHieuthuhaiJsolAliHoangDuongVuThinh-ANHTRAISAYHI-15285295.mp3?st=rK86QI-FM9CcjCNICrBPDg&e=1794577136&a=0&p=0&r=7b9cbbb321d78ed7de611debde459459",
        "image": "https://image-cdn.nct.vn/song/2024/07/05/8/d/1/2/1720195916328_300.jpg"
      },
      {
        "key": "jQjwLvlhKazj",
        "title": "CHỜ ANH VỀ",
        "artists": [
          "ANH TRAI \"SAY HI\"",
          "B Ray",
          "AMEE"
        ],
        "duration": 214,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/resa/2512/8d/ce/il05jk7ntx.mp3?st=MnO8fLakqN8ABP_6NXLo4A&e=1794577136&a=0&p=0&r=63cb9f18e712905f999a39d9a8481e94",
        "image": "https://image-cdn.nct.vn/song/2025/12/08/V/Y/X/f/1765165771131_300.jpg"
      },
      {
        "key": "bZD1VVSYpOpS",
        "title": "Do For Love",
        "artists": [
          "B Ray",
          "AMEE"
        ],
        "duration": 189,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui995/DoForLove-AMeeBRay-6221980.mp3?st=Y9EMMFxfpyHJuam2GW1meg&e=1794577136&a=0&p=0&r=63cb9f18e712905f999a39d9a8481e94",
        "image": "https://image-cdn.nct.vn/song/2020/02/11/d/4/5/a/1581406608326_300.jpg"
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
        "key": "9E0fuizURkYA",
        "title": "dỗi ít thôi ôm đê (ShenlongZ Remix)",
        "artists": [
          "Phúc Du",
          "AMEE"
        ],
        "duration": 189,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2032/DoiItThoiOmDeShenlongZRemix-PhucDuAMEE-8380820.mp3?st=p9dtKgPWUT6lH7e0YR8q4Q&e=1794577136&a=0&p=0&r=63cb9f18e712905f999a39d9a8481e94",
        "image": "https://image-cdn.nct.vn/song/2022/12/07/5/6/5/7/1670383191949_300.jpg"
      },
      {
        "key": "lLTrUXjAXrud",
        "title": "dỗi ít thôi ôm đê",
        "artists": [
          "Phúc Du",
          "AMEE"
        ],
        "duration": 188,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2032/DoiItThoiOmDe-PhucDuAMEE-8343857.mp3?st=ZKFsKzhxNG_uRRYU1ZTHMg&e=1794577136&a=0&p=0&r=63cb9f18e712905f999a39d9a8481e94",
        "image": "https://image-cdn.nct.vn/song/2022/12/05/a/d/e/b/1670222703450_300.jpg"
      },
      {
        "key": "kvyyApgfnHC3",
        "title": "hai mươi hai (22)",
        "artists": [
          "Hứa Kim Tuyền",
          "AMEE"
        ],
        "duration": 239,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2022/HaiMuoiHai22-HuaKimTuyenAMEE-7231237.mp3?st=Tjd4cR4z0Q5CFsPEXBjMRw&e=1794577136&a=0&p=0&r=63cb9f18e712905f999a39d9a8481e94",
        "image": "https://image-cdn.nct.vn/song/2022/05/24/9/6/e/a/1653363505428_300.jpg"
      },
      {
        "key": "NpjQ8CWkUjMm",
        "title": "ĐẦU MÈO ĐUÔI CHUỘT",
        "artists": [
          "EM XINH \"SAY HI\"",
          "Phương Ly",
          "MAIQUINN",
          "Tiên Tiên",
          "Miu Lê"
        ],
        "duration": 231,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/resa/2508/6a/1b/d9mpsc18et.mp3?st=REV2eZ7OjE2nfJvkwmM_jQ&e=1794577136&a=0&p=0&r=0be5a2e7d9be55f4fec128a3e0a5bab6",
        "image": "https://image-cdn.nct.vn/song/2025/08/26/q/N/V/K/1756192636010_300.jpg"
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
        "key": "GHHOVuQrqVgb",
        "title": "CHẲNG PHẢI ANH ĐÂU",
        "artists": [
          "EM XINH \"SAY HI\"",
          "Phương Ly",
          "Vũ Thảo My",
          "Orange",
          "Châu Bùi",
          "52Hz"
        ],
        "duration": 261,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/resa/2508/33/58/7lm8uo7som.mp3?st=I-Bb8eua98V0Qz1nEPX_RQ&e=1794577136&a=0&p=0&r=0be5a2e7d9be55f4fec128a3e0a5bab6",
        "image": "https://image-cdn.nct.vn/song/2025/08/02/c/a/5/c/1754116077508_300.jpg"
      },
      {
        "key": "PmTBiEoqtguv",
        "title": "SO ĐẬM",
        "artists": [
          "EM XINH \"SAY HI\"",
          "Phương Ly",
          "Vũ Thảo My",
          "Châu Bùi",
          "Muộii"
        ],
        "duration": 220,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/resa/2507/f2/25/zrs8lb6fvs.mp3?st=MlYjQbCWwQ9xcHlB7Fl7Ng&e=1794577136&a=0&p=0&r=0be5a2e7d9be55f4fec128a3e0a5bab6",
        "image": "https://image-cdn.nct.vn/song/2025/07/11/5/d/2/f/1752211873082_300.jpg"
      },
      {
        "key": "TcToTb7FEGP9",
        "title": "HỀ",
        "artists": [
          "EM XINH \"SAY HI\"",
          "Phương Mỹ Chi",
          "Phương Ly",
          "Pháo",
          "Chi Xê",
          "WEAN"
        ],
        "duration": 266,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/resa/2506/d2/c0/jlgarklscw.mp3?st=9wR_hcQTNzpQLOBiqyUyHA&e=1794577136&a=0&p=0&r=0be5a2e7d9be55f4fec128a3e0a5bab6",
        "image": "https://image-cdn.nct.vn/song/2025/06/23/0/d/2/8/1750662892862_300.jpg"
      },
      {
        "key": "yGQnRwqJszZZ",
        "title": "THE REAL AURA",
        "artists": [
          "EM XINH \"SAY HI\"",
          "Bích Phương",
          "Phương Ly",
          "Tiên Tiên",
          "Bảo Anh",
          "Phương Mỹ Chi",
          "Juky San",
          "Orange",
          "Lyly",
          "52Hz",
          "Lâm Bảo Ngọc",
          "Vũ Thảo My",
          "Hoàng Duyên",
          "Châu Bùi",
          "Quỳnh Anh Shyn",
          "Pháo",
          "LAMOON",
          "Ngô Lan Hương",
          "Muộii",
          "Han Sara",
          "Liu Grace",
          "DANMY",
          "Saabirose",
          "Ánh Sáng AZA",
          "桃子A1J",
          "LyHan",
          "Yeolan",
          "Chi Xê",
          "MAIQUINN",
          "Miu Lê",
          "Mỹ Mỹ"
        ],
        "duration": 300,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/resa/2505/bd/d8/62tyklivzx.mp3?st=v9mx8Q7XAHx8ZhoIxn3M9Q&e=1794577136&a=0&p=0&r=0be5a2e7d9be55f4fec128a3e0a5bab6",
        "image": "https://image-cdn.nct.vn/song/2025/05/30/5/3/9/3/1748590504600_300.jpg"
      },
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
        "key": "Pt8XvLl8voDa",
        "title": "Liệu Đến Bao Giờ",
        "artists": [
          "Nguyenn",
          "Đặng Tuấn Vũ"
        ],
        "duration": 289,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2057/LieuDenBaoGio-NguyennDangTuanVu-15793651.mp3?st=KJEs-F-Ft6Q2jbIOlm4Rcw&e=1794577137&a=0&p=0&r=a41d39994dac3234002e29a1115b89f0",
        "image": "https://image-cdn.nct.vn/song/2024/08/20/b/7/7/8/1724143338467_300.jpg"
      },
      {
        "key": "LLml709khlYD",
        "title": "Khi Ta Lớn 2",
        "artists": [
          "An Vũ"
        ],
        "duration": 291,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2059/KhiTaLon2-AnVu-42090874.mp3?st=gM4qnFNw8aSHDp2SLsgPSw&e=1794577137&a=0&p=0&r=6e33b92896ab3191d9175465972f8ce6",
        "image": "https://image-cdn.nct.vn/song/2026/06/08/4/3/3/3/1780901228931_300.jpg"
      },
      {
        "key": "xuVFlwRvI8uf",
        "title": "Không Thể Làm Gì Khác",
        "artists": [
          "Dani D",
          "Đặng Tuấn Vũ"
        ],
        "duration": 309,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2059/KhongTheLamGiKhac-DaniDDangTuanVu-41893943.mp3?st=Rvm7huqejCLgCvOaIhOg5Q&e=1794577137&a=0&p=0&r=6e33b92896ab3191d9175465972f8ce6",
        "image": "https://image-cdn.nct.vn/song/2026/05/26/5/6/b/d/1779790716786_300.jpg"
      },
      {
        "key": "h2giVRJnRfCX",
        "title": "Tình Đẹp Ta Đau (Version 2)",
        "artists": [
          "Phượng Vũ",
          "Nguyễn Trung Đức"
        ],
        "duration": 249,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2059/TinhDepTaDauVersion2-PhuongVuNguyenTrungDuc-41638563.mp3?st=MFImhgQf7mLxxrpdeBBlNw&e=1794577137&a=0&p=0&r=6e33b92896ab3191d9175465972f8ce6",
        "image": "https://image-cdn.nct.vn/song/2026/05/06/4/3/3/8/1778060119649_300.jpg"
      },
      {
        "key": "mnvXbycsu5O9",
        "title": "CÁCH YÊU ĐÚNG ĐIỆU (PHIÊN BẢN ATSH) [Day 9 Version]",
        "artists": [
          "ANH TRAI \"SAY HI\"",
          "Song Luân",
          "Gin Tuấn Kiệt",
          "Hải Đăng Doo",
          "NICKY",
          "Vũ Thịnh"
        ],
        "duration": 222,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/resa/2604/0c/7b/i4esmwd5bs.mp3?st=jgaR8mfqHJGMPv0fjTol8Q&e=1794577137&a=0&p=0&r=6e33b92896ab3191d9175465972f8ce6",
        "image": "https://image-cdn.nct.vn/song/2026/04/19/B/X/0/u/1776532587893_300.jpg"
      },
      {
        "key": "dNS7iGz7jBau",
        "title": "FOREVER SAY HI",
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
          "Phạm Đình Thái Ngân",
          "Karik",
          "Vũ Cát Tường",
          "GILL",
          "Tez",
          "buitruonglinh",
          "Otis",
          "Negav",
          "Mason Nguyen",
          "Sơn.K",
          "CONGB",
          "Jey B",
          "Ngô Kiến Huy",
          "VƯƠNG BÌNH",
          "Nhâm Phương Nam",
          "Đỗ Nam Sơn"
        ],
        "duration": 297,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/resa/2512/df/a9/tikrzo4ebe.mp3?st=JFV3LJaPwNE1I1jhzP0ESQ&e=1794577137&a=0&p=0&r=6e33b92896ab3191d9175465972f8ce6",
        "image": "https://image-cdn.nct.vn/song/2025/12/20/G/Q/a/0/1766242406791_300.jpg"
      },
      {
        "key": "umJDoD7NYfA6",
        "title": "LIÊN KHÚC VŨ TRỤ SAY HI (HERMOSA - TADIDA - ĐOẠN KỊCH CÂM - HÚT)",
        "artists": [
          "ANH TRAI \"SAY HI\"",
          "EM XINH \"SAY HI\"",
          "Sơn.K",
          "CONGB",
          "CODYNAMVO",
          "Phạm Đình Thái Ngân",
          "Mỹ Mỹ",
          "Vũ Thảo My",
          "MAIQUINN",
          "Ánh Sáng AZA",
          "Ali Hoàng Dương",
          "Hải Đăng Doo"
        ],
        "duration": 344,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/resa/2512/9e/04/k0gtr2e8un.mp3?st=DorJfyHR0891BIVwGvVLKQ&e=1794577137&a=0&p=0&r=6e33b92896ab3191d9175465972f8ce6",
        "image": "https://image-cdn.nct.vn/song/2025/12/20/G/Q/a/0/1766242406791_300.jpg"
      },
      {
        "key": "cR5LoawvLAr5",
        "title": "ALL EYES ON US (REMIX)",
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
          "Phạm Đình Thái Ngân",
          "Karik",
          "Vũ Cát Tường",
          "GILL",
          "Tez",
          "buitruonglinh",
          "Otis",
          "Negav",
          "Mason Nguyen",
          "Sơn.K",
          "CONGB",
          "Jey B",
          "Ngô Kiến Huy",
          "VƯƠNG BÌNH",
          "Nhâm Phương Nam",
          "Đỗ Nam Sơn"
        ],
        "duration": 192,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/resa/2512/29/a4/sclk5c7ll0.mp3?st=t8mRWnBieVezcWmBtdqTzw&e=1794577137&a=0&p=0&r=6e33b92896ab3191d9175465972f8ce6",
        "image": "https://image-cdn.nct.vn/song/2025/12/20/G/Q/a/0/1766242406791_300.jpg"
      },
      {
        "key": "X0JT4FJG99Ye",
        "title": "VIỆT NAM HƠN TỪNG NGÀY (HaNoi Concert Version)",
        "artists": [
          "EM XINH \"SAY HI\"",
          "Saabirose",
          "Orange",
          "Muộii",
          "Lâm Bảo Ngọc",
          "LAMOON",
          "LyHan",
          "Vũ Thảo My",
          "桃子A1J",
          "Ngô Lan Hương",
          "MAIQUINN"
        ],
        "duration": 334,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/resa/2512/3b/59/fu2m2r7l86.mp3?st=xLBvJ5Mw0_nmGxvw7ywHcA&e=1794577137&a=0&p=0&r=6e33b92896ab3191d9175465972f8ce6",
        "image": "https://image-cdn.nct.vn/song/2025/12/19/4/Z/U/K/1766141907250_300.jpg"
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
        "key": "MQJS4xbaHt0T",
        "title": "Nơi Ta Từng (Pro. By KRIZH) (Duzme Remix)",
        "artists": [
          "Xuân Vũ",
          "Nghĩa Phùng"
        ],
        "duration": 299,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2031/NoiTaTungProByKRIZHDuzmeRemix-XuanVuNghiaPhung-8291488.mp3?st=Bvv5YGwQMkvvjUQqOTejkA&e=1794577137&a=0&p=0&r=6e33b92896ab3191d9175465972f8ce6",
        "image": "https://image-cdn.nct.vn/song/2022/11/18/5/2/9/8/1668777877434_300.jpg"
      },
      {
        "key": "MA37Ze4diO54",
        "title": "Gieo Niềm Đau",
        "artists": [
          "An Vũ"
        ],
        "duration": 189,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1026/GieoNiemDau-AnVu-7135748.mp3?st=0Vw4Aj2u3oMVk1RX-ocw7A&e=1794577137&a=0&p=0&r=6e33b92896ab3191d9175465972f8ce6",
        "image": "https://image-cdn.nct.vn/song/2022/03/07/4/e/0/3/1646612795895_300.jpg"
      },
      {
        "key": "k1OYVm7jkuLj",
        "title": "THUYỀN EM XA BẾN ĐÔ NƠI NÀO - REMIX BY SILEN PROD",
        "artists": [
          "Vũ Phan Dương Ninh"
        ],
        "duration": 271,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2036/THUYENEMXABENDONOINAOREMIXBYSILENPROD-VuPhanDuongNinh-8790349.mp3?st=K1Y8ZpnPP54pQnMeHy9m7g&e=1794577137&a=0&p=0&r=6e33b92896ab3191d9175465972f8ce6",
        "image": "https://image-cdn.nct.vn/song/2023/02/28/8/3/7/e/1677569380965_300.jpg"
      },
      {
        "key": "iAayDPt2GZlh",
        "title": "THUYỀN EM XA BẾN ĐÔ NƠI NÀO - REMIX BY LD PROD",
        "artists": [
          "Vũ Phan Dương Ninh"
        ],
        "duration": 227,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2036/THUYENEMXABENDONOINAOREMIXBYLDPROD-VuPhanDuongNinh-8790188.mp3?st=o-c8onxtfplKpEqha3-40w&e=1794577137&a=0&p=0&r=6e33b92896ab3191d9175465972f8ce6",
        "image": "https://image-cdn.nct.vn/song/2023/02/28/8/3/7/e/1677568799624_300.jpg"
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
        "key": "PcrpyCkxfffS",
        "title": "Tô Màu Trời Mây",
        "artists": [
          "Huy Vũ",
          "Soulient"
        ],
        "duration": 246,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2059/ToMauTroiMay-HuyVuTreSoulient-37959967.mp3?st=jvwkjEpJ0ZDxaFBbJzQ_jA&e=1794577137&a=0&p=0&r=6e33b92896ab3191d9175465972f8ce6",
        "image": "https://image-cdn.nct.vn/song/2025/08/04/d/7/b/a/1754296309132_300.jpg"
      },
      {
        "key": "dl4R575kkskZ",
        "title": "Thêm Bao Lâu",
        "artists": [
          "Lê Vũ"
        ],
        "duration": 189,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2059/ThemBaoLau-LeVuTre-37694815.mp3?st=KMdtbf8mJltO4_QDbl1H2Q&e=1794577137&a=0&p=0&r=6e33b92896ab3191d9175465972f8ce6",
        "image": "https://image-cdn.nct.vn/song/2025/07/15/0/d/c/0/1752575559315_300.jpg"
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
        "key": "LhcQL28BzC4u",
        "title": "Ghé Tai Đây",
        "artists": [
          "Lê Vũ"
        ],
        "duration": 146,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2059/GheTaiDay-LeVuTre-37694734.mp3?st=iUVng4P-iRiSo3Xz5lH_Cw&e=1794577137&a=0&p=0&r=6e33b92896ab3191d9175465972f8ce6",
        "image": "https://image-cdn.nct.vn/song/2025/07/15/0/d/c/0/1752575294991_300.jpg"
      },
      {
        "key": "pBq9EE2zROv7",
        "title": "Chuẩn Bị Lúc Chia Tay",
        "artists": [
          "Lê Vũ"
        ],
        "duration": 228,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2059/ChuanBiLucChiaTay-LeVuTre-37694673.mp3?st=5cvHG7GQg9JQ3VXXxJR6Bg&e=1794577137&a=0&p=0&r=6e33b92896ab3191d9175465972f8ce6",
        "image": "https://image-cdn.nct.vn/song/2025/07/15/0/d/c/0/1752575182310_300.jpg"
      },
      {
        "key": "dTj6gxj8qYV2",
        "title": "Lạc Vào Đồi Hoa",
        "artists": [
          "Lê Vũ"
        ],
        "duration": 223,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2059/LacVaoDoiHoa-LeVuTre-37694615.mp3?st=YmUTTPDms-BWR5Rb4_vFDQ&e=1794577137&a=0&p=0&r=6e33b92896ab3191d9175465972f8ce6",
        "image": "https://image-cdn.nct.vn/song/2025/07/15/0/d/c/0/1752574969404_300.jpg"
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
        "key": "GEpAfLkKHKVk",
        "title": "ĐIỀU EM LUÔN MONG MUỐN",
        "artists": [
          "EM XINH \"SAY HI\"",
          "Tiên Tiên",
          "Juky San",
          "Vũ Thảo My",
          "桃子A1J",
          "Gemini Hùng Huỳnh"
        ],
        "duration": 196,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/resa/2507/8b/bd/p848yoxqke.mp3?st=_Pcx2qht98hnPuS4EdzH_A&e=1794577137&a=0&p=0&r=6e33b92896ab3191d9175465972f8ce6",
        "image": "https://image-cdn.nct.vn/song/2025/07/01/1/4/c/4/1751334001626_300.jpg"
      },
      {
        "key": "BYBlMKuPxCKw",
        "title": "MẮT EM",
        "artists": [
          "NP.2",
          "Lê Vũ"
        ],
        "duration": 199,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2058/MATEM-NP2LeVuTre-37120836.mp3?st=V2jLreGYPlVxbGmAFSuPbQ&e=1794577137&a=0&p=0&r=6e33b92896ab3191d9175465972f8ce6",
        "image": "https://image-cdn.nct.vn/song/2025/06/10/d/d/3/f/1749528558742_300.jpg"
      },
      {
        "key": "crIRjGKD2pRy",
        "title": "ĐỒNG DAO XINH GÁI",
        "artists": [
          "EM XINH \"SAY HI\"",
          "Quỳnh Anh Shyn",
          "Miu Lê",
          "Orange",
          "Vũ Thảo My",
          "Mỹ Mỹ"
        ],
        "duration": 220,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/resa/2506/e5/7d/bjjufkjzkn.mp3?st=Kd2gfOi_nX0KVoRHt81zPA&e=1794577137&a=0&p=0&r=6e33b92896ab3191d9175465972f8ce6",
        "image": "https://image-cdn.nct.vn/song/2025/06/09/5/3/6/3/1749442857092_300.jpg"
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
        "key": "F30FCLsZidVt",
        "title": "Lặng Im Xa Rời (Remix)",
        "artists": [
          "Vũ ZF"
        ],
        "duration": 204,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2058/LangImXaRoiRemix-VuZF-36806721.mp3?st=T1qEysH2uGepkewQbYwbPA&e=1794577137&a=0&p=0&r=6e33b92896ab3191d9175465972f8ce6",
        "image": "https://image-cdn.nct.vn/song/2025/05/07/3/f/e/c/1746614513870_300.jpg"
      },
      {
        "key": "3d02jDLlhYCa",
        "title": "Cơ Hội Cuối",
        "artists": [
          "An Vũ"
        ],
        "duration": 280,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2058/CoHoiCuoi-AnVu-36681929.mp3?st=JcDj5G36T10SHD3D-X0h5Q&e=1794577137&a=0&p=0&r=6e33b92896ab3191d9175465972f8ce6",
        "image": "https://image-cdn.nct.vn/song/2025/04/25/9/6/f/d/1745570268232_300.jpg"
      },
      {
        "key": "OrrSR2k68fTu",
        "title": "Quện",
        "artists": [
          "Trương Đăng Châu",
          "Kan Vũ"
        ],
        "duration": 194,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2058/Quen-TruongDangChauKanVuVietNam-36454883.mp3?st=I9hFElgDPl8iJiHMiug9NA&e=1794577137&a=0&p=0&r=6e33b92896ab3191d9175465972f8ce6",
        "image": "https://image-cdn.nct.vn/song/2025/04/08/5/2/0/0/1744089628185_300.jpg"
      },
      {
        "key": "M5jG2O5nOtYr",
        "title": "Nếu như em gọi đó là giấc mơ (Liveshow \"Về Nhà Về Giữa Thiên Nhiên\")",
        "artists": [
          "Phượng Vũ",
          "Xin Chào Entertainment"
        ],
        "duration": 225,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2058/NeuNhuEmGoiDoLaGiacMoLiveshowVeNhaVeGiuaThienNhien-PhuongVuTheVoiceVietAnh-36413588.mp3?st=AG_ldKaAbmR62OTP0ch0tA&e=1794577137&a=0&p=0&r=6e33b92896ab3191d9175465972f8ce6",
        "image": "https://image-cdn.nct.vn/song/2025/04/04/8/e/e/2/1743741784387_300.jpg"
      },
      {
        "key": "XipMpsJYn29w",
        "title": "Lặng Im Xa Rời",
        "artists": [
          "Vũ ZF"
        ],
        "duration": 256,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2058/LangImXaRoi-VuZF-35927433.mp3?st=u2hx8_u-XW_r6VjVFWHnkQ&e=1794577137&a=0&p=0&r=6e33b92896ab3191d9175465972f8ce6",
        "image": "https://image-cdn.nct.vn/song/2025/03/11/e/d/9/d/1741664930968_300.jpg"
      },
      {
        "key": "x2Ub52MAUU2H",
        "title": "Sao Anh Có Thể Quên",
        "artists": [
          "An Vũ"
        ],
        "duration": 204,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2058/SaoAnhCoTheQuen-AnVu-35373971.mp3?st=NP4CZm_68RHIHU6UapaB1w&e=1794577137&a=0&p=0&r=6e33b92896ab3191d9175465972f8ce6",
        "image": "https://image-cdn.nct.vn/song/2025/02/10/b/a/7/c/1739194486802_300.jpg"
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
        "key": "qJVOXV4BSVux",
        "title": "Sao Mà Em Lại Không",
        "artists": [
          "SimonC",
          "Lê Vũ"
        ],
        "duration": 199,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2057/SaoMaEmLaiKhong-SimonCLeVuTre-16776690.mp3?st=LWcrYPJjtNLmbuM_2QZ7yg&e=1794577137&a=0&p=0&r=6e33b92896ab3191d9175465972f8ce6",
        "image": "https://image-cdn.nct.vn/song/2024/11/20/d/0/b/4/1732093430714_300.jpg"
      },
      {
        "key": "7OP26LsRXywJ",
        "title": "HY VỌNG",
        "artists": [
          "RAP VIỆT",
          "LOWER",
          "DABLO",
          "Vũ Phụng Tiên"
        ],
        "duration": 196,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/Warner_Audio278/HyVongFeatLowerDabloVuPhungTien-RAPVIET-16626075.mp3?st=ERoOYd03bcN2IwYOx9DgjA&e=1794577137&a=0&p=0&r=6e33b92896ab3191d9175465972f8ce6",
        "image": "https://image-cdn.nct.vn/song/2024/11/05/2/0/5/4/1730801806967_300.jpg"
      },
      {
        "key": "2BEAfoMBVwIa",
        "title": "Tô Lên Trái Tim",
        "artists": [
          "Lê Vũ",
          "Rion"
        ],
        "duration": 242,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2057/ToLenTraiTim-LeVuTreRionVietNam-16409360.mp3?st=Qn_SWHtPVb7k6b7k7uH3GQ&e=1794577137&a=0&p=0&r=6e33b92896ab3191d9175465972f8ce6",
        "image": "https://image-cdn.nct.vn/song/2024/10/22/d/4/0/c/1729583001226_300.jpg"
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
      }
    ]
  }
];

  const DEFAULT_PUBLISHER_PLAYLISTS = [
  {
    "id": "pub-6436695826",
    "name": "[2Q] Nhạc Việt Hè Về",
    "description": "Kho bài hát chính thức từ nhà phát hành ([2Q] Nhạc Việt Hè Về)",
    "songDetails": [
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
        "key": "wdWKnHCzGluT",
        "title": "căn gác mùa hè (sweet summer)",
        "artists": [
          "Phùng Khánh Linh"
        ],
        "duration": 191,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2029/CanGacMuaHesweetSummer-PhungKhanhLinh-8032622.mp3?st=BnZ30ZSb1yvkSY9-90tUmg&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2022/10/06/f/1/0/4/1665052656983_300.jpg"
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
        "key": "BzJpCGjVw8bO",
        "title": "Vườn mây vừa hay",
        "artists": [
          "Ân ngờ",
          "MYLINA"
        ],
        "duration": 245,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2059/VuonMayVuaHay-AnNgoMYLINAVietNam-38132024.mp3?st=jBaT0alc6M8cX_O_Bhrg-A&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2025/08/19/7/3/6/d/1755591380215_300.jpg"
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
        "key": "KxHyeSpQsBrJ",
        "title": "Mùa Hè Ấm Áp",
        "artists": [
          "Sáo"
        ],
        "duration": 267,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2059/MuaHeAmAp-Sao-40904101.mp3?st=CppD1w6hZgDI2moXkYLB1w&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2026/03/03/9/4/b/9/1772529730971_300.jpg"
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
        "key": "wlSkV1sOSmA2",
        "title": "Summer Loves",
        "artists": [
          "Gun"
        ],
        "duration": 164,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1020/SummerLoves-GunVietNam-7067078.mp3?st=MCbI_t0x6TT136z0prj2-Q&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/08/13/7/b/0/e/1628836659914_300.jpg"
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
        "key": "Anyizu3fg3KC",
        "title": "Những Chuyến Tàu Mùa Hè",
        "artists": [
          "Vy Vy"
        ],
        "duration": 250,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui999/NhungChuyenTauMuaHe-VyVy-6284561.mp3?st=j5pUtOu3V8EWgDVQfrMxYw&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2020/05/22/5/a/6/8/1590115574605_300.jpg"
      },
      {
        "key": "JfFBBSYCKyFi",
        "title": "Phía Sau Mùa Hè",
        "artists": [
          "Vy Vy"
        ],
        "duration": 271,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1000/PhiaSauMuaHe-VyVy-6297310.mp3?st=5mY1PIcAtv_gIu-NMXS3cA&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2020/06/12/5/b/c/b/1591949825593_300.jpg"
      },
      {
        "key": "7k4PatV4F8KJ",
        "title": "Mùa Hè Ở Lại",
        "artists": [
          "Vy Vy"
        ],
        "duration": 225,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1000/MuaHeOLai-VyVy-6308432.mp3?st=6MYUlmf-35PuDdNhhLTlNw&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2020/06/23/6/4/d/a/1592910207923_300.jpg"
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
        "key": "ycXosma9lLmj",
        "title": "Mùa Hè Năm Ấy",
        "artists": [
          "Nguyenn"
        ],
        "duration": 191,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1020/MuaHeNamAy-Nguyenn-7067453.mp3?st=68-dkhF5qjP4vYgN8vPvdQ&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/08/14/d/2/1/7/1628905403681_300.jpg"
      },
      {
        "key": "0oyUBMv3KC5v",
        "title": "Summertime",
        "artists": [
          "Larria.",
          "Kim Chi Sun",
          "CHARLES."
        ],
        "duration": 231,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2029/Sumertime-LarriaVietNamKimChiSunCHARLES-8019275.mp3?st=R9cLkZ9z2mzksFSxoR-gJA&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2022/10/04/f/e/5/f/1664872964308_300.jpg"
      },
      {
        "key": "VaqFshQtak7G",
        "title": "The Memory Of Summer Night",
        "artists": [
          "JCee",
          "Helen"
        ],
        "duration": 204,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2059/TheMemoryOfSummerNight-JCeeVietNamHelentre-40624063.mp3?st=DVJK4JXyO8rMOYaGL_bxSw&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2026/02/09/f/f/5/7/1770628310809_300.jpg"
      },
      {
        "key": "ReERylaCBKnP",
        "title": "Một Mùa Hè",
        "artists": [
          "MCO",
          "Yana Bảo Ngọc"
        ],
        "duration": 184,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2057/MotMuaHe-MCOVietNamYanaBaoNgoc-16707794.mp3?st=BZIiLPAT47AQJ51Y5AVMyg&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2024/11/13/9/1/3/4/1731491732410_300.jpg"
      },
      {
        "key": "cZ7wQQpWGCmv",
        "title": "Lòng Vòng",
        "artists": [
          "Xôn Nguyễn",
          "Anne",
          "JingD"
        ],
        "duration": 174,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2058/LongVong-XonNguyenAnneVietNamJingDVietNam-17111767.mp3?st=9VZPbSCfpK4g_3LKMXXXYQ&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2024/12/23/d/a/1/9/1734930460494_300.jpg"
      },
      {
        "key": "87swlb8wisYJ",
        "title": "Chocolate",
        "artists": [
          "Phùng Khánh Linh"
        ],
        "duration": 277,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui995/Chocolate-PhungKhanhLinh-6221497.mp3?st=CH8D2ppNuP-Gxjh3qXb31g&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2020/02/10/a/e/4/6/1581316993207_300.jpg"
      },
      {
        "key": "Wjpkd7Uf7s0e",
        "title": "Sunflower",
        "artists": [
          "FreshlyRC"
        ],
        "duration": 153,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui998/Sunflower1-FreshlyRC-6266224.mp3?st=WFy4xSM4ZnINK_t7HtPTaQ&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2020/04/24/5/1/d/9/1587691040026_300.jpg"
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
        "key": "smb5cKa8oypY",
        "title": "Cafe Em Hát",
        "artists": [
          "Kim Chi Sun",
          "CHARLES."
        ],
        "duration": 218,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui992/CafeEmHat-KimChiSunCharlesHuynh-6163429.mp3?st=yWok5N-p4q3LK5pXbvHsvA&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2019/12/05/3/d/1/9/1575520982809_300.jpg"
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
        "key": "xOo1onVC7F4s",
        "title": "Nơi Này",
        "artists": [
          "2T",
          "Diên",
          "Venn",
          "KayTee"
        ],
        "duration": 247,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui999/NoiNay-2TDienVanKayTee-6288699.mp3?st=VRkDsRQIjvpSiIDHTXX6RA&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2020/06/02/4/d/4/6/1591081509252_300.jpg"
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
        "key": "mpkRwZPFQ8AL",
        "title": "chỉ cần là chúng ta",
        "artists": [
          "Dubbie"
        ],
        "duration": 241,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1000/ChiCanLaChungTa-Dubbie-6301024.mp3?st=D4tANY1KXbKw3oKP2BsXnw&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2020/06/16/d/b/e/b/1592301320932_300.jpg"
      },
      {
        "key": "gjx4906A3RZo",
        "title": "Những Ngày Thật Khác (7 Deep Cuts Session)",
        "artists": [
          "Phùng Khánh Linh"
        ],
        "duration": 259,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui999/NhungNgayThatKhac7DeepCutsSession-PhungKhanhLinh-6277189.mp3?st=AD-dQDEvoOTjnwP6Rr6eXQ&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2020/05/12/2/2/0/9/1589255030166_300.jpg"
      },
      {
        "key": "ZxabQVhAr1Fg",
        "title": "Đơn Phương Tiền Truyện",
        "artists": [
          "Juan Phi",
          "Chuột Sấm Sét"
        ],
        "duration": 178,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1000/DonPhuongTienTruyen-JuanPhiChuotSamSet-6316682.mp3?st=hIZf5RvKTLflRmzfh4Nntw&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2020/06/29/6/9/e/a/1593413526104_300.jpg"
      },
      {
        "key": "fOuJeMnbg4Ri",
        "title": "WIND",
        "artists": [
          "Winner"
        ],
        "duration": 237,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1001/Wind-WinnerP336-6323453.mp3?st=bzBf52XIT24TDiXUFZopPw&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2020/07/07/a/2/2/f/1594116151780_300.jpg"
      },
      {
        "key": "aiE3p2jk92lb",
        "title": "Tin Nhắn Chờ",
        "artists": [
          "Coldie"
        ],
        "duration": 282,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1001/TinNhanCho-Coldie-6323857.mp3?st=JLMXUGZHBeWoAAp_F08Ugg&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2020/07/09/d/2/5/f/1594285985889_300.jpg"
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
        "key": "JJEejq3JG5OQ",
        "title": "Bên Kia Biển Xanh",
        "artists": [
          "Elty"
        ],
        "duration": 238,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1016/BenKiaBienXanh-Elty-7020223.mp3?st=7sRnzOAZPyYr3W4fzRBxYg&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/05/15/a/3/4/6/1621061710196_300.jpg"
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
      }
    ],
    "songs": [
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
        "key": "wdWKnHCzGluT",
        "title": "căn gác mùa hè (sweet summer)",
        "artists": [
          "Phùng Khánh Linh"
        ],
        "duration": 191,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2029/CanGacMuaHesweetSummer-PhungKhanhLinh-8032622.mp3?st=BnZ30ZSb1yvkSY9-90tUmg&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2022/10/06/f/1/0/4/1665052656983_300.jpg"
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
        "key": "BzJpCGjVw8bO",
        "title": "Vườn mây vừa hay",
        "artists": [
          "Ân ngờ",
          "MYLINA"
        ],
        "duration": 245,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2059/VuonMayVuaHay-AnNgoMYLINAVietNam-38132024.mp3?st=jBaT0alc6M8cX_O_Bhrg-A&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2025/08/19/7/3/6/d/1755591380215_300.jpg"
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
        "key": "KxHyeSpQsBrJ",
        "title": "Mùa Hè Ấm Áp",
        "artists": [
          "Sáo"
        ],
        "duration": 267,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2059/MuaHeAmAp-Sao-40904101.mp3?st=CppD1w6hZgDI2moXkYLB1w&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2026/03/03/9/4/b/9/1772529730971_300.jpg"
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
        "key": "wlSkV1sOSmA2",
        "title": "Summer Loves",
        "artists": [
          "Gun"
        ],
        "duration": 164,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1020/SummerLoves-GunVietNam-7067078.mp3?st=MCbI_t0x6TT136z0prj2-Q&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/08/13/7/b/0/e/1628836659914_300.jpg"
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
        "key": "Anyizu3fg3KC",
        "title": "Những Chuyến Tàu Mùa Hè",
        "artists": [
          "Vy Vy"
        ],
        "duration": 250,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui999/NhungChuyenTauMuaHe-VyVy-6284561.mp3?st=j5pUtOu3V8EWgDVQfrMxYw&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2020/05/22/5/a/6/8/1590115574605_300.jpg"
      },
      {
        "key": "JfFBBSYCKyFi",
        "title": "Phía Sau Mùa Hè",
        "artists": [
          "Vy Vy"
        ],
        "duration": 271,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1000/PhiaSauMuaHe-VyVy-6297310.mp3?st=5mY1PIcAtv_gIu-NMXS3cA&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2020/06/12/5/b/c/b/1591949825593_300.jpg"
      },
      {
        "key": "7k4PatV4F8KJ",
        "title": "Mùa Hè Ở Lại",
        "artists": [
          "Vy Vy"
        ],
        "duration": 225,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1000/MuaHeOLai-VyVy-6308432.mp3?st=6MYUlmf-35PuDdNhhLTlNw&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2020/06/23/6/4/d/a/1592910207923_300.jpg"
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
        "key": "ycXosma9lLmj",
        "title": "Mùa Hè Năm Ấy",
        "artists": [
          "Nguyenn"
        ],
        "duration": 191,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1020/MuaHeNamAy-Nguyenn-7067453.mp3?st=68-dkhF5qjP4vYgN8vPvdQ&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/08/14/d/2/1/7/1628905403681_300.jpg"
      },
      {
        "key": "0oyUBMv3KC5v",
        "title": "Summertime",
        "artists": [
          "Larria.",
          "Kim Chi Sun",
          "CHARLES."
        ],
        "duration": 231,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2029/Sumertime-LarriaVietNamKimChiSunCHARLES-8019275.mp3?st=R9cLkZ9z2mzksFSxoR-gJA&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2022/10/04/f/e/5/f/1664872964308_300.jpg"
      },
      {
        "key": "VaqFshQtak7G",
        "title": "The Memory Of Summer Night",
        "artists": [
          "JCee",
          "Helen"
        ],
        "duration": 204,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2059/TheMemoryOfSummerNight-JCeeVietNamHelentre-40624063.mp3?st=DVJK4JXyO8rMOYaGL_bxSw&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2026/02/09/f/f/5/7/1770628310809_300.jpg"
      },
      {
        "key": "ReERylaCBKnP",
        "title": "Một Mùa Hè",
        "artists": [
          "MCO",
          "Yana Bảo Ngọc"
        ],
        "duration": 184,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2057/MotMuaHe-MCOVietNamYanaBaoNgoc-16707794.mp3?st=BZIiLPAT47AQJ51Y5AVMyg&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2024/11/13/9/1/3/4/1731491732410_300.jpg"
      },
      {
        "key": "cZ7wQQpWGCmv",
        "title": "Lòng Vòng",
        "artists": [
          "Xôn Nguyễn",
          "Anne",
          "JingD"
        ],
        "duration": 174,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2058/LongVong-XonNguyenAnneVietNamJingDVietNam-17111767.mp3?st=9VZPbSCfpK4g_3LKMXXXYQ&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2024/12/23/d/a/1/9/1734930460494_300.jpg"
      },
      {
        "key": "87swlb8wisYJ",
        "title": "Chocolate",
        "artists": [
          "Phùng Khánh Linh"
        ],
        "duration": 277,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui995/Chocolate-PhungKhanhLinh-6221497.mp3?st=CH8D2ppNuP-Gxjh3qXb31g&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2020/02/10/a/e/4/6/1581316993207_300.jpg"
      },
      {
        "key": "Wjpkd7Uf7s0e",
        "title": "Sunflower",
        "artists": [
          "FreshlyRC"
        ],
        "duration": 153,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui998/Sunflower1-FreshlyRC-6266224.mp3?st=WFy4xSM4ZnINK_t7HtPTaQ&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2020/04/24/5/1/d/9/1587691040026_300.jpg"
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
        "key": "smb5cKa8oypY",
        "title": "Cafe Em Hát",
        "artists": [
          "Kim Chi Sun",
          "CHARLES."
        ],
        "duration": 218,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui992/CafeEmHat-KimChiSunCharlesHuynh-6163429.mp3?st=yWok5N-p4q3LK5pXbvHsvA&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2019/12/05/3/d/1/9/1575520982809_300.jpg"
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
        "key": "xOo1onVC7F4s",
        "title": "Nơi Này",
        "artists": [
          "2T",
          "Diên",
          "Venn",
          "KayTee"
        ],
        "duration": 247,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui999/NoiNay-2TDienVanKayTee-6288699.mp3?st=VRkDsRQIjvpSiIDHTXX6RA&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2020/06/02/4/d/4/6/1591081509252_300.jpg"
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
        "key": "mpkRwZPFQ8AL",
        "title": "chỉ cần là chúng ta",
        "artists": [
          "Dubbie"
        ],
        "duration": 241,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1000/ChiCanLaChungTa-Dubbie-6301024.mp3?st=D4tANY1KXbKw3oKP2BsXnw&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2020/06/16/d/b/e/b/1592301320932_300.jpg"
      },
      {
        "key": "gjx4906A3RZo",
        "title": "Những Ngày Thật Khác (7 Deep Cuts Session)",
        "artists": [
          "Phùng Khánh Linh"
        ],
        "duration": 259,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui999/NhungNgayThatKhac7DeepCutsSession-PhungKhanhLinh-6277189.mp3?st=AD-dQDEvoOTjnwP6Rr6eXQ&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2020/05/12/2/2/0/9/1589255030166_300.jpg"
      },
      {
        "key": "ZxabQVhAr1Fg",
        "title": "Đơn Phương Tiền Truyện",
        "artists": [
          "Juan Phi",
          "Chuột Sấm Sét"
        ],
        "duration": 178,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1000/DonPhuongTienTruyen-JuanPhiChuotSamSet-6316682.mp3?st=hIZf5RvKTLflRmzfh4Nntw&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2020/06/29/6/9/e/a/1593413526104_300.jpg"
      },
      {
        "key": "fOuJeMnbg4Ri",
        "title": "WIND",
        "artists": [
          "Winner"
        ],
        "duration": 237,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1001/Wind-WinnerP336-6323453.mp3?st=bzBf52XIT24TDiXUFZopPw&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2020/07/07/a/2/2/f/1594116151780_300.jpg"
      },
      {
        "key": "aiE3p2jk92lb",
        "title": "Tin Nhắn Chờ",
        "artists": [
          "Coldie"
        ],
        "duration": 282,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1001/TinNhanCho-Coldie-6323857.mp3?st=JLMXUGZHBeWoAAp_F08Ugg&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2020/07/09/d/2/5/f/1594285985889_300.jpg"
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
        "key": "JJEejq3JG5OQ",
        "title": "Bên Kia Biển Xanh",
        "artists": [
          "Elty"
        ],
        "duration": 238,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1016/BenKiaBienXanh-Elty-7020223.mp3?st=7sRnzOAZPyYr3W4fzRBxYg&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/05/15/a/3/4/6/1621061710196_300.jpg"
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
      }
    ]
  },
  {
    "id": "pub-6442095248",
    "name": "[2Q] Nhạc Việt Remix",
    "description": "Kho bài hát chính thức từ nhà phát hành ([2Q] Nhạc Việt Remix)",
    "songDetails": [
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
      }
    ],
    "songs": [
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
      }
    ]
  },
  {
    "id": "pub-3540528068",
    "name": "[2Q] Nhạc Việt Pop Tình Ca",
    "description": "Kho bài hát chính thức từ nhà phát hành ([2Q] Nhạc Việt Pop Tình Ca)",
    "songDetails": [
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
        "key": "tPV6rt1Sj7zw",
        "title": "Mê Kung",
        "artists": [
          "Nie"
        ],
        "duration": 206,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2059/MeKung-NieVietNam-39473729.mp3?st=jRUcYVrknHfPtC8ApZQa3g&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2025/11/20/b/9/6/4/1763610397671_300.jpg"
      },
      {
        "key": "St3qaFhXjRi5",
        "title": "Cyber Crush",
        "artists": [
          "Lục Huy"
        ],
        "duration": 179,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2034/CyberCrush1-LucHuy-8494073.mp3?st=qazUtlV5nqR1OPoqdN2T5w&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2023/01/01/6/6/2/a/1672566564973_300.jpg"
      },
      {
        "key": "hco4ZgdLotaC",
        "title": "CHỈ VÌ CÓ EM",
        "artists": [
          "Nie",
          "VUZ"
        ],
        "duration": 188,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2058/CHIVICOEM-NieVietNamVUZ-35861695.mp3?st=DpDgD4YgooZ838kz8jSMeA&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2025/03/07/f/8/f/8/1741335576993_300.jpg"
      },
      {
        "key": "7AaXes7AUyop",
        "title": "Không Một Ai Bằng Em",
        "artists": [
          "Kang",
          "PTone",
          "SonNguyen"
        ],
        "duration": 170,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1020/KhongMotAiBangEm-KangPToneSonNguyen-7065602.mp3?st=tQAtrHXjBrQPAIdPPTcyDw&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/08/09/b/a/7/b/1628527047009_300.jpg"
      },
      {
        "key": "aCayvnMB3m8K",
        "title": "Ghé Thăm Nhà Em",
        "artists": [
          "Nie",
          "Xôn Nguyễn",
          "2Long"
        ],
        "duration": 247,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2045/GheThamNhaEm-NieVietNamXonNguyen2Long-11664494.mp3?st=Lqrb5uSfb5qX_rfgzH8evw&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2023/09/13/5/c/f/b/1694576651536_300.jpg"
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
        "key": "VRc7ppAqpz1s",
        "title": "Miễn Là Cùng Nhau",
        "artists": [
          "Rum"
        ],
        "duration": 201,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1025/MienLaCungNhau-Rum-7125478.mp3?st=r-xsJpnjOFtBaeiH5d9WGQ&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2022/01/05/2/5/8/1/1641368126390_300.jpg"
      },
      {
        "key": "Ng4uzMI3qLE0",
        "title": "Lâu đài, lâu dài",
        "artists": [
          "Cassano"
        ],
        "duration": 200,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2056/LauDaiLauDai-Cassano-15237772.mp3?st=meprsJO8XBH3jms4dJTEGg&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2024/07/02/3/c/c/f/1719937129324_300.jpg"
      },
      {
        "key": "tlU20efoc4uP",
        "title": "Không Em Thì Ai",
        "artists": [
          "Quân REV",
          "Trung Trần"
        ],
        "duration": 195,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2038/KhongEmThiAi-QuanREVTrungTran-9293297.mp3?st=NKKOcO4I9l6hiJfMA0m6Lw&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2023/04/19/d/2/5/3/1681894620656_300.jpg"
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
        "key": "QpcoJw1Ry92T",
        "title": "Your Smile",
        "artists": [
          "Emma Nhất Khanh",
          "Seachains"
        ],
        "duration": 234,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui999/YourSmile1-EmmaNhatKhanhSeachains-6287382.mp3?st=sOq6kOkb91P0mCJpDGsbbA&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2020/05/29/a/7/1/5/1590717667764_300.jpg"
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
        "key": "CDN2UmyAyFj5",
        "title": "Love Me More",
        "artists": [
          "The Sheep"
        ],
        "duration": 210,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui986/LoveMeMore-TheSheep-6040474.mp3?st=34wcpAD7zJhfTb17dnqi1A&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2019/07/27/3/f/9/d/1564234629165_300.jpg"
      },
      {
        "key": "NxoBHG3sVAuV",
        "title": "Nhớ Một Người",
        "artists": [
          "The Sheep"
        ],
        "duration": 315,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NCTSong/2411/1f/01/2lww1uvj8n.mp3?st=HG9zVqnpvnkV1ei058Db4g&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2024/10/30/8/5/1/7/1730273245693_300.jpg"
      },
      {
        "key": "8Suvmrgi4OwO",
        "title": "Love Oversleep",
        "artists": [
          "KALYN",
          "Zunni"
        ],
        "duration": 284,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1001/LoveOversleep-KalynZunniHoangTungAnh-6404908.mp3?st=UE21GizRc02YOYPHtkiCJw&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2020/07/29/5/7/4/a/1595998744556_300.jpg"
      },
      {
        "key": "Icr99v1SaRSn",
        "title": "Pilot Falls In Love",
        "artists": [
          "Bee9"
        ],
        "duration": 188,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1006/PilotFallsInLove-Bee9-6821827.mp3?st=fX_hyAVli_CRGSsfNWfX2g&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2020/11/18/1/e/7/8/1605688618852_300.jpg"
      },
      {
        "key": "yYGrNJOPrG8j",
        "title": "FALL IN LOVE",
        "artists": [
          "DYOR",
          "Crou"
        ],
        "duration": 263,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1009/FallInLove-DYORCrou-6898361.mp3?st=DhagAsmAbePt3lQ6UvNoRw&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2020/12/30/2/e/0/5/1609316132852_300.jpg"
      },
      {
        "key": "AS3BNKEVISST",
        "title": "Love Song (Ngốc Hơn Chữ Ngốc OST)",
        "artists": [
          "Đạt Max"
        ],
        "duration": 254,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1012/LoveSongNgocHonChuNgocOst-DatMax-6962940.mp3?st=02R6qfRQGtNIRCHTGVjxxw&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/03/10/f/3/5/e/1615345885600_300.jpg"
      },
      {
        "key": "JBfWWoiO4rPZ",
        "title": "Tinder Love",
        "artists": [
          "A Fishy Bit",
          "TeTe"
        ],
        "duration": 193,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1014/TinderLove-BitTeTe-6995106.mp3?st=aH509KefGqNs7V2N7t7ncQ&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2024/01/29/d/4/2/0/1706511562662_300.jpg"
      },
      {
        "key": "PV3Iry9eBrMv",
        "title": "i don't like u, i love u",
        "artists": [
          "NOAH"
        ],
        "duration": 235,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1016/IDontLikeUILoveU-Noah-7030889.mp3?st=2a04HMiwiqevzWzlfesw8w&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/06/09/b/d/a/0/1623221639605_300.jpg"
      },
      {
        "key": "x7kqV2M4QbSW",
        "title": "Send Love To Me",
        "artists": [
          "Xuan-ai",
          "Vux"
        ],
        "duration": 203,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1022/SendLoveToMe-XuanaiVux-7092341.mp3?st=guBeH8UqLWRWjaOmlEKwBA&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/09/21/2/a/c/4/1632192845406_300.jpg"
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
        "key": "at9GD3TOgsTa",
        "title": "Fell In Love",
        "artists": [
          "Đỗ Phú Đạt"
        ],
        "duration": 154,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2029/FellInLove-DoPhuDat-8015887.mp3?st=KseTu-OIe-2G1BtJ-0oLkA&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2022/10/04/f/e/5/f/1664859137725_300.jpg"
      },
      {
        "key": "cCE9ptMVWHv1",
        "title": "Trying To Love",
        "artists": [
          "Kuzz",
          "Guvy"
        ],
        "duration": 162,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2029/TryingToLove-KuzzGuvy-8079143.mp3?st=lHwM2i46-Bx0gtx8mE35EA&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2022/10/17/b/9/5/f/1665992230002_300.jpg"
      },
      {
        "key": "rtCuhZ6B9XRy",
        "title": "Shining Love",
        "artists": [
          "ASEA"
        ],
        "duration": 213,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2040/ShiningLove-ASEA-9544871.mp3?st=aKHZQZqaDq5Ax6somscx5w&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2023/05/23/0/1/e/d/1684841372208_300.jpg"
      },
      {
        "key": "lVEQU4hk2JwT",
        "title": "Love You",
        "artists": [
          "Đào Ngọc Sang"
        ],
        "duration": 252,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2041/LoveYou-DaoNgocSang-9795938.mp3?st=kdJ5cRYESUJQRFMPXxdBfw&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2023/06/26/1/2/8/2/1687759505843_300.jpg"
      },
      {
        "key": "s29b79ZedW2E",
        "title": "Love You To The Star",
        "artists": [
          "Đỗ Hoàng Dương"
        ],
        "duration": 201,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1025/LoveYouToTheStar-DoHoangDuong-7127370.mp3?st=gQP-lxvCSxZ7qkY1IQ0IYA&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2022/01/18/e/b/3/0/1642489668779_300.jpg"
      },
      {
        "key": "si18519z6K4M",
        "title": "Thoáng Qua (My Love)",
        "artists": [
          "Quang Vinh"
        ],
        "duration": 223,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2056/ThoangQuaMyLove-QuangVinh-15193955.mp3?st=QrnTnEKDQt2513tjugnEqg&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2024/06/28/f/d/c/9/1719565917832_300.jpg"
      },
      {
        "key": "YmkkCONrLxIT",
        "title": "Dizzy Love",
        "artists": [
          "MiQ",
          "Catchellers"
        ],
        "duration": 122,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2057/DizzyLove-MiQVietNamCatchellers-15820785.mp3?st=FdY6sRJMkB1N99BTU6Jcpw&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2024/08/22/7/5/9/b/1724317460619_300.jpg"
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
        "key": "GvJ0O0wbqxv4",
        "title": "Đôi Mình",
        "artists": [
          "Chuột Sấm Sét"
        ],
        "duration": 177,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2038/DoiMinh-ChuotSamSet-9217197.mp3?st=BRRA4epR_URPu-I4kbJG0g&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2023/04/17/1/9/a/e/1681748128632_300.jpg"
      },
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
      }
    ],
    "songs": [
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
        "key": "tPV6rt1Sj7zw",
        "title": "Mê Kung",
        "artists": [
          "Nie"
        ],
        "duration": 206,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2059/MeKung-NieVietNam-39473729.mp3?st=jRUcYVrknHfPtC8ApZQa3g&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2025/11/20/b/9/6/4/1763610397671_300.jpg"
      },
      {
        "key": "St3qaFhXjRi5",
        "title": "Cyber Crush",
        "artists": [
          "Lục Huy"
        ],
        "duration": 179,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2034/CyberCrush1-LucHuy-8494073.mp3?st=qazUtlV5nqR1OPoqdN2T5w&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2023/01/01/6/6/2/a/1672566564973_300.jpg"
      },
      {
        "key": "hco4ZgdLotaC",
        "title": "CHỈ VÌ CÓ EM",
        "artists": [
          "Nie",
          "VUZ"
        ],
        "duration": 188,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2058/CHIVICOEM-NieVietNamVUZ-35861695.mp3?st=DpDgD4YgooZ838kz8jSMeA&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2025/03/07/f/8/f/8/1741335576993_300.jpg"
      },
      {
        "key": "7AaXes7AUyop",
        "title": "Không Một Ai Bằng Em",
        "artists": [
          "Kang",
          "PTone",
          "SonNguyen"
        ],
        "duration": 170,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1020/KhongMotAiBangEm-KangPToneSonNguyen-7065602.mp3?st=tQAtrHXjBrQPAIdPPTcyDw&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/08/09/b/a/7/b/1628527047009_300.jpg"
      },
      {
        "key": "aCayvnMB3m8K",
        "title": "Ghé Thăm Nhà Em",
        "artists": [
          "Nie",
          "Xôn Nguyễn",
          "2Long"
        ],
        "duration": 247,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2045/GheThamNhaEm-NieVietNamXonNguyen2Long-11664494.mp3?st=Lqrb5uSfb5qX_rfgzH8evw&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2023/09/13/5/c/f/b/1694576651536_300.jpg"
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
        "key": "VRc7ppAqpz1s",
        "title": "Miễn Là Cùng Nhau",
        "artists": [
          "Rum"
        ],
        "duration": 201,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1025/MienLaCungNhau-Rum-7125478.mp3?st=r-xsJpnjOFtBaeiH5d9WGQ&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2022/01/05/2/5/8/1/1641368126390_300.jpg"
      },
      {
        "key": "Ng4uzMI3qLE0",
        "title": "Lâu đài, lâu dài",
        "artists": [
          "Cassano"
        ],
        "duration": 200,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2056/LauDaiLauDai-Cassano-15237772.mp3?st=meprsJO8XBH3jms4dJTEGg&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2024/07/02/3/c/c/f/1719937129324_300.jpg"
      },
      {
        "key": "tlU20efoc4uP",
        "title": "Không Em Thì Ai",
        "artists": [
          "Quân REV",
          "Trung Trần"
        ],
        "duration": 195,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2038/KhongEmThiAi-QuanREVTrungTran-9293297.mp3?st=NKKOcO4I9l6hiJfMA0m6Lw&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2023/04/19/d/2/5/3/1681894620656_300.jpg"
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
        "key": "QpcoJw1Ry92T",
        "title": "Your Smile",
        "artists": [
          "Emma Nhất Khanh",
          "Seachains"
        ],
        "duration": 234,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui999/YourSmile1-EmmaNhatKhanhSeachains-6287382.mp3?st=sOq6kOkb91P0mCJpDGsbbA&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2020/05/29/a/7/1/5/1590717667764_300.jpg"
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
        "key": "CDN2UmyAyFj5",
        "title": "Love Me More",
        "artists": [
          "The Sheep"
        ],
        "duration": 210,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui986/LoveMeMore-TheSheep-6040474.mp3?st=34wcpAD7zJhfTb17dnqi1A&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2019/07/27/3/f/9/d/1564234629165_300.jpg"
      },
      {
        "key": "NxoBHG3sVAuV",
        "title": "Nhớ Một Người",
        "artists": [
          "The Sheep"
        ],
        "duration": 315,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NCTSong/2411/1f/01/2lww1uvj8n.mp3?st=HG9zVqnpvnkV1ei058Db4g&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2024/10/30/8/5/1/7/1730273245693_300.jpg"
      },
      {
        "key": "8Suvmrgi4OwO",
        "title": "Love Oversleep",
        "artists": [
          "KALYN",
          "Zunni"
        ],
        "duration": 284,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1001/LoveOversleep-KalynZunniHoangTungAnh-6404908.mp3?st=UE21GizRc02YOYPHtkiCJw&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2020/07/29/5/7/4/a/1595998744556_300.jpg"
      },
      {
        "key": "Icr99v1SaRSn",
        "title": "Pilot Falls In Love",
        "artists": [
          "Bee9"
        ],
        "duration": 188,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1006/PilotFallsInLove-Bee9-6821827.mp3?st=fX_hyAVli_CRGSsfNWfX2g&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2020/11/18/1/e/7/8/1605688618852_300.jpg"
      },
      {
        "key": "yYGrNJOPrG8j",
        "title": "FALL IN LOVE",
        "artists": [
          "DYOR",
          "Crou"
        ],
        "duration": 263,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1009/FallInLove-DYORCrou-6898361.mp3?st=DhagAsmAbePt3lQ6UvNoRw&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2020/12/30/2/e/0/5/1609316132852_300.jpg"
      },
      {
        "key": "AS3BNKEVISST",
        "title": "Love Song (Ngốc Hơn Chữ Ngốc OST)",
        "artists": [
          "Đạt Max"
        ],
        "duration": 254,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1012/LoveSongNgocHonChuNgocOst-DatMax-6962940.mp3?st=02R6qfRQGtNIRCHTGVjxxw&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/03/10/f/3/5/e/1615345885600_300.jpg"
      },
      {
        "key": "JBfWWoiO4rPZ",
        "title": "Tinder Love",
        "artists": [
          "A Fishy Bit",
          "TeTe"
        ],
        "duration": 193,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1014/TinderLove-BitTeTe-6995106.mp3?st=aH509KefGqNs7V2N7t7ncQ&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2024/01/29/d/4/2/0/1706511562662_300.jpg"
      },
      {
        "key": "PV3Iry9eBrMv",
        "title": "i don't like u, i love u",
        "artists": [
          "NOAH"
        ],
        "duration": 235,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1016/IDontLikeUILoveU-Noah-7030889.mp3?st=2a04HMiwiqevzWzlfesw8w&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/06/09/b/d/a/0/1623221639605_300.jpg"
      },
      {
        "key": "x7kqV2M4QbSW",
        "title": "Send Love To Me",
        "artists": [
          "Xuan-ai",
          "Vux"
        ],
        "duration": 203,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1022/SendLoveToMe-XuanaiVux-7092341.mp3?st=guBeH8UqLWRWjaOmlEKwBA&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/09/21/2/a/c/4/1632192845406_300.jpg"
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
        "key": "at9GD3TOgsTa",
        "title": "Fell In Love",
        "artists": [
          "Đỗ Phú Đạt"
        ],
        "duration": 154,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2029/FellInLove-DoPhuDat-8015887.mp3?st=KseTu-OIe-2G1BtJ-0oLkA&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2022/10/04/f/e/5/f/1664859137725_300.jpg"
      },
      {
        "key": "cCE9ptMVWHv1",
        "title": "Trying To Love",
        "artists": [
          "Kuzz",
          "Guvy"
        ],
        "duration": 162,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2029/TryingToLove-KuzzGuvy-8079143.mp3?st=lHwM2i46-Bx0gtx8mE35EA&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2022/10/17/b/9/5/f/1665992230002_300.jpg"
      },
      {
        "key": "rtCuhZ6B9XRy",
        "title": "Shining Love",
        "artists": [
          "ASEA"
        ],
        "duration": 213,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2040/ShiningLove-ASEA-9544871.mp3?st=aKHZQZqaDq5Ax6somscx5w&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2023/05/23/0/1/e/d/1684841372208_300.jpg"
      },
      {
        "key": "lVEQU4hk2JwT",
        "title": "Love You",
        "artists": [
          "Đào Ngọc Sang"
        ],
        "duration": 252,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2041/LoveYou-DaoNgocSang-9795938.mp3?st=kdJ5cRYESUJQRFMPXxdBfw&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2023/06/26/1/2/8/2/1687759505843_300.jpg"
      },
      {
        "key": "s29b79ZedW2E",
        "title": "Love You To The Star",
        "artists": [
          "Đỗ Hoàng Dương"
        ],
        "duration": 201,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1025/LoveYouToTheStar-DoHoangDuong-7127370.mp3?st=gQP-lxvCSxZ7qkY1IQ0IYA&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2022/01/18/e/b/3/0/1642489668779_300.jpg"
      },
      {
        "key": "si18519z6K4M",
        "title": "Thoáng Qua (My Love)",
        "artists": [
          "Quang Vinh"
        ],
        "duration": 223,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2056/ThoangQuaMyLove-QuangVinh-15193955.mp3?st=QrnTnEKDQt2513tjugnEqg&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2024/06/28/f/d/c/9/1719565917832_300.jpg"
      },
      {
        "key": "YmkkCONrLxIT",
        "title": "Dizzy Love",
        "artists": [
          "MiQ",
          "Catchellers"
        ],
        "duration": 122,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2057/DizzyLove-MiQVietNamCatchellers-15820785.mp3?st=FdY6sRJMkB1N99BTU6Jcpw&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2024/08/22/7/5/9/b/1724317460619_300.jpg"
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
        "key": "GvJ0O0wbqxv4",
        "title": "Đôi Mình",
        "artists": [
          "Chuột Sấm Sét"
        ],
        "duration": 177,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2038/DoiMinh-ChuotSamSet-9217197.mp3?st=BRRA4epR_URPu-I4kbJG0g&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2023/04/17/1/9/a/e/1681748128632_300.jpg"
      },
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
      }
    ]
  },
  {
    "id": "pub-8812050925",
    "name": "[2Q] Nhạc Việt Sôi Động",
    "description": "Kho bài hát chính thức từ nhà phát hành ([2Q] Nhạc Việt Sôi Động)",
    "songDetails": [
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
        "key": "08DKRPTs9jKX",
        "title": "Giá Lúc Đó",
        "artists": [
          "Kiên Doãn"
        ],
        "duration": 133,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2059/GiaLucDo-KienDoan-40460779.mp3?st=yM-Y9l8_0U8zXoFNbLyx4A&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2026/01/29/6/f/c/f/1769683923973_300.jpg"
      },
      {
        "key": "BqqqXjrndL8F",
        "title": "LEMONADE",
        "artists": [
          "Don Raemo"
        ],
        "duration": 226,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2059/LEMONADE-DonRaemo-39820077.mp3?st=ujzOs21V0fg2XsKVBtOwbg&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2025/12/18/f/6/c/0/1766036778226_300.jpg"
      },
      {
        "key": "p36M0nuVmR9Z",
        "title": "Ghét Nhau Thêm",
        "artists": [
          "DJ Tít"
        ],
        "duration": 179,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2059/GhetNhauThem-DJTit-38722416.mp3?st=ArjqFa5qYDx2NUlTbCye_g&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2025/09/25/f/2/d/6/1758791814871_300.jpg"
      },
      {
        "key": "RZBjcwPBU032",
        "title": "Cầu Vồng Thanh Xuân",
        "artists": [
          "OSAD",
          "Janie"
        ],
        "duration": 256,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1000/CauVongThanhXuan-OsadJanie-6308201.mp3?st=QDpalPiW6j7WfcDE3hoeYQ&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2020/06/22/e/2/9/7/1592820085014_300.jpg"
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
        "key": "OUngYbcmAdkq",
        "title": "Đi Hết Thời Tuổi Trẻ (Version 2020)",
        "artists": [
          "Hà"
        ],
        "duration": 243,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui996/DiHetThoiTuoiTreVersion2020-Ha-6240339.mp3?st=U-jiYA1TqVHEebxfGfQF6Q&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2020/03/25/0/7/8/4/1585117427344_300.jpg"
      },
      {
        "key": "ItohkV2tcd1v",
        "title": "Hiếm Có Khó Tìm",
        "artists": [
          "JSOL",
          "Han Sara"
        ],
        "duration": 197,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1001/HiemCoKhoTim-JSOLHanSara-6330342.mp3?st=a-BULLviLstT96rZmz7vOw&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2020/07/13/a/f/7/f/1594611354950_300.jpg"
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
        "key": "G2E5e7g6NfO6",
        "title": "Anh Sẽ Cho Mình",
        "artists": [
          "Khải",
          "Sơn Bùi"
        ],
        "duration": 195,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2045/AnhSeChoMinh-KhaiSonBui-11722978.mp3?st=CMaGV-GYO3a27UZKa4AAAA&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2023/09/18/7/2/8/d/1695032666053_300.jpg"
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
        "key": "VQvMO3rOkT",
        "title": "Ngày Mai Trời Lại Sáng",
        "artists": [
          "Nguyễn Hồng Thuận",
          "Lam Trường"
        ],
        "duration": 211,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui180/NgayMaiTroiLaiSang-NguyenHongThuan_3cafd.mp3?st=s-Cq6Myj74O51tUN34s8wQ&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2013/11/06/c/c/a/8/1383712586855_300.jpg"
      },
      {
        "key": "n6C1UdVPh6cI",
        "title": "Tìm Đâu",
        "artists": [
          "Pay"
        ],
        "duration": 181,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1001/TimDau-Pay-6324397.mp3?st=XUcg_LQyBb6-KCZFxUsx7Q&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2020/07/10/7/0/0/f/1594372640695_300.jpg"
      },
      {
        "key": "6kuDtQlenhm2",
        "title": "It's You",
        "artists": [
          "Hari Won"
        ],
        "duration": 217,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui988/ItsYou-HariWon-6054064.mp3?st=axwHs_dGu09uWkCnj3zUsg&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2019/08/13/0/a/f/3/1565686973276_300.jpg"
      },
      {
        "key": "Spiv84rJKKbb",
        "title": "Nơi Bắt Đầu",
        "artists": [
          "Pixel Neko",
          "Cầm"
        ],
        "duration": 164,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2059/NoiBatDauftCam-PixelNekoCam-39735079.mp3?st=Cws3XIGbEGnuLb0QBrWx6A&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2025/12/12/a/2/6/2/1765530010086_300.jpg"
      },
      {
        "key": "mErSry4zLTp5",
        "title": "Girl Phố",
        "artists": [
          "Quỳnh Anh Shyn"
        ],
        "duration": 180,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2059/GirlPho-QuynhAnhShyn-41187002.mp3?st=XMDqcxlcrAtoF4scdGVHNg&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2026/03/26/3/5/0/1/1774540795067_300.jpg"
      },
      {
        "key": "oIzSLwq7zFe3",
        "title": "WDYS",
        "artists": [
          "Pixel Neko",
          "Rhosy"
        ],
        "duration": 185,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2059/WDYSftRhosy-PixelNekoRhosy-39735751.mp3?st=BGxdgju4OAixBkPHQ1yfpw&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2025/12/12/a/2/6/2/1765531468395_300.jpg"
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
        "key": "lLMlw6FsQ0Sh",
        "title": "Xóa",
        "artists": [
          "Pixel Neko",
          "Pay"
        ],
        "duration": 155,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2059/Xoa-PixelNekoPayQuynhThy-39558549.mp3?st=qHNVMpVHVeJOiVsMqX87xw&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2025/11/27/f/f/e/2/1764221289092_300.jpg"
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
        "key": "DnhO309afIRB",
        "title": "Tình Trần",
        "artists": [
          "Huy Diệc"
        ],
        "duration": 213,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1020/TinhTran-HuyDiec-7070214.mp3?st=yfAeddW3BYlXimrRLmKMhA&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/08/20/f/c/f/e/1629445664769_300.jpg"
      },
      {
        "key": "RMGdPFtmZimH",
        "title": "Tại Sao Anh Nhận Lời",
        "artists": [
          "Lyly"
        ],
        "duration": 223,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2045/TaiSaoAnhNhanLoi-LylyNguyenHoangLan-11836975.mp3?st=t-0Hg7jOuM3A2X-S_uPOrQ&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2023/10/02/c/5/c/8/1696251806962_300.jpg"
      },
      {
        "key": "QChkpW6YlXCn",
        "title": "HỨA CHO VUI THÔI",
        "artists": [
          "Cassano",
          "MPacific"
        ],
        "duration": 255,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2052/HUACHOVUITHOI-CassanoMPacific-13959663.mp3?st=NGQoJpxUYCZL27xDpifHvA&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2024/03/01/b/3/9/b/1709287973157_300.jpg"
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
        "key": "CxUr0BDmhgdv",
        "title": "Chúng Con Thành Đôi",
        "artists": [
          "Powerk"
        ],
        "duration": 245,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2052/ChungConThanhDoi-Powerk-13956694.mp3?st=ngbO0v7bUydUnqPjQMx7MA&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2024/03/01/b/3/9/b/1709271106740_300.jpg"
      },
      {
        "key": "bioZHIaFUgeJ",
        "title": "Khu Vườn Nhà Thơ",
        "artists": [
          "Góp Thong Thả"
        ],
        "duration": 198,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2036/KhuVuonNhaTho-GopThongTha-8843631.mp3?st=HvDFCYnOah6fuqljYkiYaw&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2023/03/13/6/b/7/6/1678679889924_300.jpg"
      },
      {
        "key": "ROPNQ7yKhUH9",
        "title": "LET ME WAKE UP",
        "artists": [
          "Tronie",
          "Henry Nguyễn"
        ],
        "duration": 186,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1026/LetMeWakeUp-TronieHenry-7131294.mp3?st=rPAiGw8eZJ3jp4b38flM5g&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2022/03/01/f/3/d/3/1646143129872_300.jpg"
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
        "key": "kVhxjHbpVgE6",
        "title": "Vì Em Tô Vẽ",
        "artists": [
          "SimonC"
        ],
        "duration": 218,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2053/ViEmToVe-SimonC-13991069.mp3?st=AK7fVu2q6TvFIhTLH232eQ&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2024/03/05/4/2/4/5/1709630265299_300.jpg"
      },
      {
        "key": "4019ZWyrAyH6",
        "title": "MAY MẮN",
        "artists": [
          "MiQ",
          "Dusky",
          "Catchellers"
        ],
        "duration": 215,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2053/MAYMAN-MiQVietNamDuskyVietNamCatchellersSoulientBillis-14204594.mp3?st=fpE_JF-j1paXgHrx8xF9zA&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2024/03/25/9/c/3/a/1711359424640_300.jpg"
      },
      {
        "key": "n6wFNmjgdYuq",
        "title": "Kẻ Ương Bướng Gặp Được Người Thích Nuông Chiều",
        "artists": [
          "Cassano"
        ],
        "duration": 216,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2054/KeUongBuongGapDuocNguoiThichNuongChieu-Cassano-14452219.mp3?st=kw66vS5a5nen5wZb_6waug&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2024/04/17/d/4/8/0/1713342982280_300.jpg"
      },
      {
        "key": "QJHXbS78WnRP",
        "title": "Cái Giá Của Sự Trưởng Thành",
        "artists": [
          "Phí Phương Anh",
          "RIN9",
          "DREAMeR"
        ],
        "duration": 177,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2055/CaiGiaCuaSuTruongThanh-VA-14650399.mp3?st=eyE_fpOa4isKnAFjXqCg2w&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2024/05/02/b/c/9/d/1714638814209_300.jpg"
      },
      {
        "key": "V00mhAZYXddF",
        "title": "I Don't Need A Boy Friend Like You",
        "artists": [
          "Flower",
          "Pink Frog"
        ],
        "duration": 88,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2056/IDontNeedABoyFriendLikeYou-FlowerVietNamPinkFrog-15059094.mp3?st=UT3EGu8YM1pnRId7OaP91Q&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2024/06/14/b/3/7/1/1718337112071_300.jpg"
      },
      {
        "key": "kvS8Bw6RFZeB",
        "title": "Gần Bên Em (Ready For You)",
        "artists": [
          "Vũ Thảo My"
        ],
        "duration": 206,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2054/GanBenEmReadyForYou-VuThaoMy-14329585.mp3?st=uuWAU221FHh4HQfUV8gj8Q&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2024/04/05/b/7/4/5/1712290502151_300.jpg"
      },
      {
        "key": "pcWnntlgYrMn",
        "title": "Ngôi Sao Nhỏ",
        "artists": [
          "Tăng Vịnh Nghi"
        ],
        "duration": 173,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2058/NgoiSaoNho-TangVinhNghi-35365942.mp3?st=-bTiKXnu7OsbXieaFmOYgw&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2025/02/10/b/a/7/c/1739160964227_300.jpg"
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
        "key": "If7x3cgrkwPv",
        "title": "Daydream",
        "artists": [
          "1991 Fitness Entertainment"
        ],
        "duration": 213,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2058/Daydream-1991FitnessEntertainment-35523154.mp3?st=kK7HbZVkhn34xzUXj2xbXg&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2025/02/19/6/2/f/b/1739943430965_300.jpg"
      },
      {
        "key": "78zwAzT3A5pF",
        "title": "Lời Hứa Bỏ Quên",
        "artists": [
          "Đỗ Hoàng Dương"
        ],
        "duration": 261,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2040/LoiHuaBoQuen-DoHoangDuong-9624469.mp3?st=SegkVk1xBv4RKTNwni0hTQ&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2023/06/07/0/d/a/2/1686110991866_300.jpg"
      },
      {
        "key": "JQGEjxmJVByk",
        "title": "Youth!",
        "artists": [
          "KayC",
          "GiGi Hương Giang"
        ],
        "duration": 200,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2045/Youth-KayCGiGiHuongGiang-11801063.mp3?st=MvmbCQpN2DZZC5ZxXSdn0Q&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2023/09/27/a/7/7/d/1695812779340_300.jpg"
      },
      {
        "key": "CYN6u2ftUCUR",
        "title": "Phía Cuối Chân Trời",
        "artists": [
          "Yanbi",
          "Yến Lê"
        ],
        "duration": 275,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui999/PhiaCuoiChanTroi-YanbiYenLe-6284787.mp3?st=634S_zx14ATfd9-JLk0n2A&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2020/05/22/5/a/6/8/1590144990848_300.jpg"
      },
      {
        "key": "hi6DYIJslIVH",
        "title": "Hỏa Tâm",
        "artists": [
          "Anh Trai Vượt Ngàn Chông Gai",
          "34 Anh Tài"
        ],
        "duration": 263,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/resa/2606/02/85/twryp4ekz8.mp3?st=9fFjhK8ifQnc0kzJXWj2WA&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2026/06/24/1/e/I/E/1782278610880_300.jpg"
      }
    ],
    "songs": [
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
        "key": "08DKRPTs9jKX",
        "title": "Giá Lúc Đó",
        "artists": [
          "Kiên Doãn"
        ],
        "duration": 133,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2059/GiaLucDo-KienDoan-40460779.mp3?st=yM-Y9l8_0U8zXoFNbLyx4A&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2026/01/29/6/f/c/f/1769683923973_300.jpg"
      },
      {
        "key": "BqqqXjrndL8F",
        "title": "LEMONADE",
        "artists": [
          "Don Raemo"
        ],
        "duration": 226,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2059/LEMONADE-DonRaemo-39820077.mp3?st=ujzOs21V0fg2XsKVBtOwbg&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2025/12/18/f/6/c/0/1766036778226_300.jpg"
      },
      {
        "key": "p36M0nuVmR9Z",
        "title": "Ghét Nhau Thêm",
        "artists": [
          "DJ Tít"
        ],
        "duration": 179,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2059/GhetNhauThem-DJTit-38722416.mp3?st=ArjqFa5qYDx2NUlTbCye_g&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2025/09/25/f/2/d/6/1758791814871_300.jpg"
      },
      {
        "key": "RZBjcwPBU032",
        "title": "Cầu Vồng Thanh Xuân",
        "artists": [
          "OSAD",
          "Janie"
        ],
        "duration": 256,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1000/CauVongThanhXuan-OsadJanie-6308201.mp3?st=QDpalPiW6j7WfcDE3hoeYQ&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2020/06/22/e/2/9/7/1592820085014_300.jpg"
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
        "key": "OUngYbcmAdkq",
        "title": "Đi Hết Thời Tuổi Trẻ (Version 2020)",
        "artists": [
          "Hà"
        ],
        "duration": 243,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui996/DiHetThoiTuoiTreVersion2020-Ha-6240339.mp3?st=U-jiYA1TqVHEebxfGfQF6Q&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2020/03/25/0/7/8/4/1585117427344_300.jpg"
      },
      {
        "key": "ItohkV2tcd1v",
        "title": "Hiếm Có Khó Tìm",
        "artists": [
          "JSOL",
          "Han Sara"
        ],
        "duration": 197,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1001/HiemCoKhoTim-JSOLHanSara-6330342.mp3?st=a-BULLviLstT96rZmz7vOw&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2020/07/13/a/f/7/f/1594611354950_300.jpg"
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
        "key": "G2E5e7g6NfO6",
        "title": "Anh Sẽ Cho Mình",
        "artists": [
          "Khải",
          "Sơn Bùi"
        ],
        "duration": 195,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2045/AnhSeChoMinh-KhaiSonBui-11722978.mp3?st=CMaGV-GYO3a27UZKa4AAAA&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2023/09/18/7/2/8/d/1695032666053_300.jpg"
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
        "key": "VQvMO3rOkT",
        "title": "Ngày Mai Trời Lại Sáng",
        "artists": [
          "Nguyễn Hồng Thuận",
          "Lam Trường"
        ],
        "duration": 211,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui180/NgayMaiTroiLaiSang-NguyenHongThuan_3cafd.mp3?st=s-Cq6Myj74O51tUN34s8wQ&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2013/11/06/c/c/a/8/1383712586855_300.jpg"
      },
      {
        "key": "n6C1UdVPh6cI",
        "title": "Tìm Đâu",
        "artists": [
          "Pay"
        ],
        "duration": 181,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1001/TimDau-Pay-6324397.mp3?st=XUcg_LQyBb6-KCZFxUsx7Q&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2020/07/10/7/0/0/f/1594372640695_300.jpg"
      },
      {
        "key": "6kuDtQlenhm2",
        "title": "It's You",
        "artists": [
          "Hari Won"
        ],
        "duration": 217,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui988/ItsYou-HariWon-6054064.mp3?st=axwHs_dGu09uWkCnj3zUsg&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2019/08/13/0/a/f/3/1565686973276_300.jpg"
      },
      {
        "key": "Spiv84rJKKbb",
        "title": "Nơi Bắt Đầu",
        "artists": [
          "Pixel Neko",
          "Cầm"
        ],
        "duration": 164,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2059/NoiBatDauftCam-PixelNekoCam-39735079.mp3?st=Cws3XIGbEGnuLb0QBrWx6A&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2025/12/12/a/2/6/2/1765530010086_300.jpg"
      },
      {
        "key": "mErSry4zLTp5",
        "title": "Girl Phố",
        "artists": [
          "Quỳnh Anh Shyn"
        ],
        "duration": 180,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2059/GirlPho-QuynhAnhShyn-41187002.mp3?st=XMDqcxlcrAtoF4scdGVHNg&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2026/03/26/3/5/0/1/1774540795067_300.jpg"
      },
      {
        "key": "oIzSLwq7zFe3",
        "title": "WDYS",
        "artists": [
          "Pixel Neko",
          "Rhosy"
        ],
        "duration": 185,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2059/WDYSftRhosy-PixelNekoRhosy-39735751.mp3?st=BGxdgju4OAixBkPHQ1yfpw&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2025/12/12/a/2/6/2/1765531468395_300.jpg"
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
        "key": "lLMlw6FsQ0Sh",
        "title": "Xóa",
        "artists": [
          "Pixel Neko",
          "Pay"
        ],
        "duration": 155,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2059/Xoa-PixelNekoPayQuynhThy-39558549.mp3?st=qHNVMpVHVeJOiVsMqX87xw&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2025/11/27/f/f/e/2/1764221289092_300.jpg"
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
        "key": "DnhO309afIRB",
        "title": "Tình Trần",
        "artists": [
          "Huy Diệc"
        ],
        "duration": 213,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1020/TinhTran-HuyDiec-7070214.mp3?st=yfAeddW3BYlXimrRLmKMhA&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/08/20/f/c/f/e/1629445664769_300.jpg"
      },
      {
        "key": "RMGdPFtmZimH",
        "title": "Tại Sao Anh Nhận Lời",
        "artists": [
          "Lyly"
        ],
        "duration": 223,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2045/TaiSaoAnhNhanLoi-LylyNguyenHoangLan-11836975.mp3?st=t-0Hg7jOuM3A2X-S_uPOrQ&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2023/10/02/c/5/c/8/1696251806962_300.jpg"
      },
      {
        "key": "QChkpW6YlXCn",
        "title": "HỨA CHO VUI THÔI",
        "artists": [
          "Cassano",
          "MPacific"
        ],
        "duration": 255,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2052/HUACHOVUITHOI-CassanoMPacific-13959663.mp3?st=NGQoJpxUYCZL27xDpifHvA&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2024/03/01/b/3/9/b/1709287973157_300.jpg"
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
        "key": "CxUr0BDmhgdv",
        "title": "Chúng Con Thành Đôi",
        "artists": [
          "Powerk"
        ],
        "duration": 245,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2052/ChungConThanhDoi-Powerk-13956694.mp3?st=ngbO0v7bUydUnqPjQMx7MA&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2024/03/01/b/3/9/b/1709271106740_300.jpg"
      },
      {
        "key": "bioZHIaFUgeJ",
        "title": "Khu Vườn Nhà Thơ",
        "artists": [
          "Góp Thong Thả"
        ],
        "duration": 198,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2036/KhuVuonNhaTho-GopThongTha-8843631.mp3?st=HvDFCYnOah6fuqljYkiYaw&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2023/03/13/6/b/7/6/1678679889924_300.jpg"
      },
      {
        "key": "ROPNQ7yKhUH9",
        "title": "LET ME WAKE UP",
        "artists": [
          "Tronie",
          "Henry Nguyễn"
        ],
        "duration": 186,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1026/LetMeWakeUp-TronieHenry-7131294.mp3?st=rPAiGw8eZJ3jp4b38flM5g&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2022/03/01/f/3/d/3/1646143129872_300.jpg"
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
        "key": "kVhxjHbpVgE6",
        "title": "Vì Em Tô Vẽ",
        "artists": [
          "SimonC"
        ],
        "duration": 218,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2053/ViEmToVe-SimonC-13991069.mp3?st=AK7fVu2q6TvFIhTLH232eQ&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2024/03/05/4/2/4/5/1709630265299_300.jpg"
      },
      {
        "key": "4019ZWyrAyH6",
        "title": "MAY MẮN",
        "artists": [
          "MiQ",
          "Dusky",
          "Catchellers"
        ],
        "duration": 215,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2053/MAYMAN-MiQVietNamDuskyVietNamCatchellersSoulientBillis-14204594.mp3?st=fpE_JF-j1paXgHrx8xF9zA&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2024/03/25/9/c/3/a/1711359424640_300.jpg"
      },
      {
        "key": "n6wFNmjgdYuq",
        "title": "Kẻ Ương Bướng Gặp Được Người Thích Nuông Chiều",
        "artists": [
          "Cassano"
        ],
        "duration": 216,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2054/KeUongBuongGapDuocNguoiThichNuongChieu-Cassano-14452219.mp3?st=kw66vS5a5nen5wZb_6waug&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2024/04/17/d/4/8/0/1713342982280_300.jpg"
      },
      {
        "key": "QJHXbS78WnRP",
        "title": "Cái Giá Của Sự Trưởng Thành",
        "artists": [
          "Phí Phương Anh",
          "RIN9",
          "DREAMeR"
        ],
        "duration": 177,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2055/CaiGiaCuaSuTruongThanh-VA-14650399.mp3?st=eyE_fpOa4isKnAFjXqCg2w&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2024/05/02/b/c/9/d/1714638814209_300.jpg"
      },
      {
        "key": "V00mhAZYXddF",
        "title": "I Don't Need A Boy Friend Like You",
        "artists": [
          "Flower",
          "Pink Frog"
        ],
        "duration": 88,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2056/IDontNeedABoyFriendLikeYou-FlowerVietNamPinkFrog-15059094.mp3?st=UT3EGu8YM1pnRId7OaP91Q&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2024/06/14/b/3/7/1/1718337112071_300.jpg"
      },
      {
        "key": "kvS8Bw6RFZeB",
        "title": "Gần Bên Em (Ready For You)",
        "artists": [
          "Vũ Thảo My"
        ],
        "duration": 206,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2054/GanBenEmReadyForYou-VuThaoMy-14329585.mp3?st=uuWAU221FHh4HQfUV8gj8Q&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2024/04/05/b/7/4/5/1712290502151_300.jpg"
      },
      {
        "key": "pcWnntlgYrMn",
        "title": "Ngôi Sao Nhỏ",
        "artists": [
          "Tăng Vịnh Nghi"
        ],
        "duration": 173,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2058/NgoiSaoNho-TangVinhNghi-35365942.mp3?st=-bTiKXnu7OsbXieaFmOYgw&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2025/02/10/b/a/7/c/1739160964227_300.jpg"
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
        "key": "If7x3cgrkwPv",
        "title": "Daydream",
        "artists": [
          "1991 Fitness Entertainment"
        ],
        "duration": 213,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2058/Daydream-1991FitnessEntertainment-35523154.mp3?st=kK7HbZVkhn34xzUXj2xbXg&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2025/02/19/6/2/f/b/1739943430965_300.jpg"
      },
      {
        "key": "78zwAzT3A5pF",
        "title": "Lời Hứa Bỏ Quên",
        "artists": [
          "Đỗ Hoàng Dương"
        ],
        "duration": 261,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2040/LoiHuaBoQuen-DoHoangDuong-9624469.mp3?st=SegkVk1xBv4RKTNwni0hTQ&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2023/06/07/0/d/a/2/1686110991866_300.jpg"
      },
      {
        "key": "JQGEjxmJVByk",
        "title": "Youth!",
        "artists": [
          "KayC",
          "GiGi Hương Giang"
        ],
        "duration": 200,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2045/Youth-KayCGiGiHuongGiang-11801063.mp3?st=MvmbCQpN2DZZC5ZxXSdn0Q&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2023/09/27/a/7/7/d/1695812779340_300.jpg"
      },
      {
        "key": "CYN6u2ftUCUR",
        "title": "Phía Cuối Chân Trời",
        "artists": [
          "Yanbi",
          "Yến Lê"
        ],
        "duration": 275,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui999/PhiaCuoiChanTroi-YanbiYenLe-6284787.mp3?st=634S_zx14ATfd9-JLk0n2A&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2020/05/22/5/a/6/8/1590144990848_300.jpg"
      },
      {
        "key": "hi6DYIJslIVH",
        "title": "Hỏa Tâm",
        "artists": [
          "Anh Trai Vượt Ngàn Chông Gai",
          "34 Anh Tài"
        ],
        "duration": 263,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/resa/2606/02/85/twryp4ekz8.mp3?st=9fFjhK8ifQnc0kzJXWj2WA&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2026/06/24/1/e/I/E/1782278610880_300.jpg"
      }
    ]
  },
  {
    "id": "pub-6450022383",
    "name": "[JUL26] [2Q] Vpop Sôi Động",
    "description": "Kho bài hát chính thức từ nhà phát hành ([JUL26] [2Q] Vpop Sôi Động)",
    "songDetails": [
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
        "key": "llhHLzwJCK4d",
        "title": "Độc Thoại",
        "artists": [
          "Huỳnh Tú",
          "Nguyễn Hồng Thuận"
        ],
        "duration": 245,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2046/DocThoai-HuynhTuNguyenHongThuan-11934224.mp3?st=TUJkbhWAG0VtWygg-HcAmw&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2023/10/12/6/9/1/3/1697101630866_300.jpg"
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
        "key": "BWgSIuGkgWnp",
        "title": "Anh Sai Rồi",
        "artists": [
          "Tăng Phúc",
          "Nguyễn Hồng Thuận"
        ],
        "duration": 254,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2046/AnhSaiRoi-TangPhucNguyenHongThuan-12045729.mp3?st=AoCmNJOIm5B68qBepf0ttA&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2023/10/25/b/4/f/e/1698224058092_300.jpg"
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
        "key": "FIKoWdW3weZ8",
        "title": "UMBALA",
        "artists": [
          "UPRIZE"
        ],
        "duration": 210,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/resa/2607/56/6d/tkib15rfrl.mp3?st=andKKe4XbiGJW2TCY9GHtw&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2026/06/26/c/v/q/D/1782409127876_300.jpg"
      },
      {
        "key": "ivE0J2fleWFM",
        "title": "chính là cảm giác này",
        "artists": [
          "UPRIZE"
        ],
        "duration": 217,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/resa/2607/fb/3f/0uai2uay17.mp3?st=ZpZ5VwT73h_-BGnUPArjjw&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2026/05/15/G/w/5/z/1778841786575_300.jpg"
      },
      {
        "key": "RYmXZWIClYO9",
        "title": "crazy, stupid, love",
        "artists": [
          "UPRIZE"
        ],
        "duration": 173,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/resa/2607/21/fd/ifmra0gv7w.mp3?st=ICCuaf0lCL8PHghNf-R7-w&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2026/06/26/c/v/q/D/1782409127876_300.jpg"
      },
      {
        "key": "Wrm63MgYSMY6",
        "title": "EXposure",
        "artists": [
          "UPRIZE"
        ],
        "duration": 185,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/resa/2607/60/2c/fx28i9cah9.mp3?st=vA30tLUJBUE8OSkzSAXsdg&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2026/06/26/c/v/q/D/1782409127876_300.jpg"
      },
      {
        "key": "jTS7xUvrqAX6",
        "title": "THUNDER",
        "artists": [
          "UPRIZE"
        ],
        "duration": 205,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/resa/2602/31/c9/weiz7dlive.mp3?st=rJnkXwzZtpejGR6qw_AG7Q&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2026/02/27/P/F/S/F/1772187508325_300.jpg"
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
        "key": "oUgomAo3Hons",
        "title": "Rắc Rối",
        "artists": [
          "Anh Trai Vượt Ngàn Chông Gai",
          "Hồ Đông Quan"
        ],
        "duration": 144,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/resa/2607/dc/78/iho2uv28ks.mp3?st=fVLuq4HRsl_e3dpabRvmQA&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2026/07/06/r/k/0/J/1783310063643_300.jpg"
      },
      {
        "key": "nDmQ9wPk4jYK",
        "title": "Ngày Đẹp Trời Mà Em Không Tới",
        "artists": [
          "Hồ Đông Quan"
        ],
        "duration": 204,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/resa/2603/48/1d/h6el36x39a.mp3?st=HcH1XYUhyeYPJYBG8akcGg&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2026/04/07/U/X/a/y/1775570140795_300.jpg"
      },
      {
        "key": "1eIkIbj0oyze",
        "title": "có lẽ",
        "artists": [
          "SWAN"
        ],
        "duration": 208,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/resa/2605/e5/00/tn23xlw3c0.mp3?st=6sqAtT67qKeNqU0TUpJghQ&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2026/03/13/J/q/A/s/1773372891401_300.jpg"
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
        "key": "p5JIo6qHSteH",
        "title": "VAR",
        "artists": [
          "Show It All Vietnam (Tân Binh Toàn Năng)",
          "BEX",
          "PN",
          "Lâm Anh",
          "DYLAN",
          "Phi Long"
        ],
        "duration": 196,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/resa/2509/bc/23/p3fuv1f9qf.mp3?st=IBa53NbjRYRIk3tmk8Xr1g&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2025/07/11/5/d/2/f/1752201407404_300.jpg"
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
        "key": "zb1Pzvii73im",
        "title": "BẬN TÂM",
        "artists": [
          "Show It All Vietnam (Tân Binh Toàn Năng)",
          "LAVM"
        ],
        "duration": 241,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/resa/2512/59/59/3qvzwcvomj.mp3?st=1Ip29EiivO27tRbANJ2PWA&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2025/12/16/Z/F/P/C/1765858524158_300.jpg"
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
        "key": "Yb0HQ2NRAwth",
        "title": "VACATION",
        "artists": [
          "Show It All Vietnam (Tân Binh Toàn Năng)",
          "Hồ Đông Quan",
          "SWAN",
          "O.D",
          "LAVM"
        ],
        "duration": 191,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/resa/2509/ba/44/y19ms6nw6y.mp3?st=O_eNyvn-QCf1St5q-vafZg&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2025/09/30/c/9/e/l/1759218965757_300.jpg"
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
        "key": "uZPzqNjUsW01",
        "title": "Falling In Love",
        "artists": [
          "Quốc Anh"
        ],
        "duration": 179,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2022/FallingInLove-QuocAnhVietNam-7266712.mp3?st=l-X2MGV2WJtbnGoAnTIKCw&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2022/05/31/a/d/6/d/1653977636217_300.jpg"
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
        "key": "Oe6uuDkWiBy6",
        "title": "Chỉ Là Cho Vui Mồm",
        "artists": [
          "Trungg I.U",
          "boum"
        ],
        "duration": 169,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2059/ChiLaChoVuiMom-TrunggIUboum-40451996.mp3?st=FUEOpdS4BNFiP82N0sSJyQ&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2026/01/29/6/f/c/f/1769659991189_300.jpg"
      },
      {
        "key": "B6RS3zwR8Q56",
        "title": "too late (extended version)",
        "artists": [
          "MiQ",
          "Dusky",
          "GUrbane"
        ],
        "duration": 157,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2059/TooLatefeatGUrbane-MiQVietNamDuskyVietNamGUrbane-39717321.mp3?st=Np2q8vF2m-ex6CVTb31v0g&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2025/12/11/d/b/d/8/1765422723563_300.jpg"
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
        "key": "9Fd4zVvPMIbf",
        "title": "Em Của Ngày Hôm Qua",
        "artists": [
          "Sơn Tùng M-TP"
        ],
        "duration": 263,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2053/EmCuaNgayHomQua-SonTungMTP-2882720.mp3?st=Tk-kh8cqv0MIogKbIRZFJg&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2024/03/15/4/c/b/d/1710499255450_300.jpg"
      }
    ],
    "songs": [
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
        "key": "llhHLzwJCK4d",
        "title": "Độc Thoại",
        "artists": [
          "Huỳnh Tú",
          "Nguyễn Hồng Thuận"
        ],
        "duration": 245,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2046/DocThoai-HuynhTuNguyenHongThuan-11934224.mp3?st=TUJkbhWAG0VtWygg-HcAmw&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2023/10/12/6/9/1/3/1697101630866_300.jpg"
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
        "key": "BWgSIuGkgWnp",
        "title": "Anh Sai Rồi",
        "artists": [
          "Tăng Phúc",
          "Nguyễn Hồng Thuận"
        ],
        "duration": 254,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2046/AnhSaiRoi-TangPhucNguyenHongThuan-12045729.mp3?st=AoCmNJOIm5B68qBepf0ttA&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2023/10/25/b/4/f/e/1698224058092_300.jpg"
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
        "key": "FIKoWdW3weZ8",
        "title": "UMBALA",
        "artists": [
          "UPRIZE"
        ],
        "duration": 210,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/resa/2607/56/6d/tkib15rfrl.mp3?st=andKKe4XbiGJW2TCY9GHtw&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2026/06/26/c/v/q/D/1782409127876_300.jpg"
      },
      {
        "key": "ivE0J2fleWFM",
        "title": "chính là cảm giác này",
        "artists": [
          "UPRIZE"
        ],
        "duration": 217,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/resa/2607/fb/3f/0uai2uay17.mp3?st=ZpZ5VwT73h_-BGnUPArjjw&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2026/05/15/G/w/5/z/1778841786575_300.jpg"
      },
      {
        "key": "RYmXZWIClYO9",
        "title": "crazy, stupid, love",
        "artists": [
          "UPRIZE"
        ],
        "duration": 173,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/resa/2607/21/fd/ifmra0gv7w.mp3?st=ICCuaf0lCL8PHghNf-R7-w&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2026/06/26/c/v/q/D/1782409127876_300.jpg"
      },
      {
        "key": "Wrm63MgYSMY6",
        "title": "EXposure",
        "artists": [
          "UPRIZE"
        ],
        "duration": 185,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/resa/2607/60/2c/fx28i9cah9.mp3?st=vA30tLUJBUE8OSkzSAXsdg&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2026/06/26/c/v/q/D/1782409127876_300.jpg"
      },
      {
        "key": "jTS7xUvrqAX6",
        "title": "THUNDER",
        "artists": [
          "UPRIZE"
        ],
        "duration": 205,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/resa/2602/31/c9/weiz7dlive.mp3?st=rJnkXwzZtpejGR6qw_AG7Q&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2026/02/27/P/F/S/F/1772187508325_300.jpg"
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
        "key": "oUgomAo3Hons",
        "title": "Rắc Rối",
        "artists": [
          "Anh Trai Vượt Ngàn Chông Gai",
          "Hồ Đông Quan"
        ],
        "duration": 144,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/resa/2607/dc/78/iho2uv28ks.mp3?st=fVLuq4HRsl_e3dpabRvmQA&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2026/07/06/r/k/0/J/1783310063643_300.jpg"
      },
      {
        "key": "nDmQ9wPk4jYK",
        "title": "Ngày Đẹp Trời Mà Em Không Tới",
        "artists": [
          "Hồ Đông Quan"
        ],
        "duration": 204,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/resa/2603/48/1d/h6el36x39a.mp3?st=HcH1XYUhyeYPJYBG8akcGg&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2026/04/07/U/X/a/y/1775570140795_300.jpg"
      },
      {
        "key": "1eIkIbj0oyze",
        "title": "có lẽ",
        "artists": [
          "SWAN"
        ],
        "duration": 208,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/resa/2605/e5/00/tn23xlw3c0.mp3?st=6sqAtT67qKeNqU0TUpJghQ&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2026/03/13/J/q/A/s/1773372891401_300.jpg"
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
        "key": "p5JIo6qHSteH",
        "title": "VAR",
        "artists": [
          "Show It All Vietnam (Tân Binh Toàn Năng)",
          "BEX",
          "PN",
          "Lâm Anh",
          "DYLAN",
          "Phi Long"
        ],
        "duration": 196,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/resa/2509/bc/23/p3fuv1f9qf.mp3?st=IBa53NbjRYRIk3tmk8Xr1g&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2025/07/11/5/d/2/f/1752201407404_300.jpg"
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
        "key": "zb1Pzvii73im",
        "title": "BẬN TÂM",
        "artists": [
          "Show It All Vietnam (Tân Binh Toàn Năng)",
          "LAVM"
        ],
        "duration": 241,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/resa/2512/59/59/3qvzwcvomj.mp3?st=1Ip29EiivO27tRbANJ2PWA&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2025/12/16/Z/F/P/C/1765858524158_300.jpg"
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
        "key": "Yb0HQ2NRAwth",
        "title": "VACATION",
        "artists": [
          "Show It All Vietnam (Tân Binh Toàn Năng)",
          "Hồ Đông Quan",
          "SWAN",
          "O.D",
          "LAVM"
        ],
        "duration": 191,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/resa/2509/ba/44/y19ms6nw6y.mp3?st=O_eNyvn-QCf1St5q-vafZg&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2025/09/30/c/9/e/l/1759218965757_300.jpg"
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
        "key": "uZPzqNjUsW01",
        "title": "Falling In Love",
        "artists": [
          "Quốc Anh"
        ],
        "duration": 179,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2022/FallingInLove-QuocAnhVietNam-7266712.mp3?st=l-X2MGV2WJtbnGoAnTIKCw&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2022/05/31/a/d/6/d/1653977636217_300.jpg"
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
        "key": "Oe6uuDkWiBy6",
        "title": "Chỉ Là Cho Vui Mồm",
        "artists": [
          "Trungg I.U",
          "boum"
        ],
        "duration": 169,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2059/ChiLaChoVuiMom-TrunggIUboum-40451996.mp3?st=FUEOpdS4BNFiP82N0sSJyQ&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2026/01/29/6/f/c/f/1769659991189_300.jpg"
      },
      {
        "key": "B6RS3zwR8Q56",
        "title": "too late (extended version)",
        "artists": [
          "MiQ",
          "Dusky",
          "GUrbane"
        ],
        "duration": 157,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2059/TooLatefeatGUrbane-MiQVietNamDuskyVietNamGUrbane-39717321.mp3?st=Np2q8vF2m-ex6CVTb31v0g&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2025/12/11/d/b/d/8/1765422723563_300.jpg"
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
        "key": "9Fd4zVvPMIbf",
        "title": "Em Của Ngày Hôm Qua",
        "artists": [
          "Sơn Tùng M-TP"
        ],
        "duration": 263,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2053/EmCuaNgayHomQua-SonTungMTP-2882720.mp3?st=Tk-kh8cqv0MIogKbIRZFJg&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2024/03/15/4/c/b/d/1710499255450_300.jpg"
      }
    ]
  },
  {
    "id": "pub-10048843289",
    "name": "[2Q] Nhạc Việt Sôi Động 2.0",
    "description": "Kho bài hát chính thức từ nhà phát hành ([2Q] Nhạc Việt Sôi Động 2.0)",
    "songDetails": [
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
        "key": "uilcavZFnhmr",
        "title": "Là Tất Cả",
        "artists": [
          "Đá Số Tới"
        ],
        "duration": 156,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1007/LaTatCa-DaSoToi-6853334.mp3?st=TlOdezDe0P5qJA0eLg3NRw&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2020/11/30/f/f/2/6/1606720349114_300.jpg"
      },
      {
        "key": "ouo8DGuTA6Et",
        "title": "Em",
        "artists": [
          "Đá Số Tới"
        ],
        "duration": 168,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1004/Em-DaSoToi-6690290.mp3?st=MXdl4vz8cSwjG0jRV0kvcA&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2020/09/30/8/5/b/e/1601455493192_300.jpg"
      },
      {
        "key": "E9Vs1Au45VN3",
        "title": "Sống Sai",
        "artists": [
          "The Flob"
        ],
        "duration": 242,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1004/SongSai-TheFlob-6720194.mp3?st=16sAg8RM4Q9VmVeq3-b1Sg&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2020/10/02/a/e/7/c/1601635153092_300.jpg"
      },
      {
        "key": "I0pT5mHc9sFu",
        "title": "Vegas",
        "artists": [
          "The Flob"
        ],
        "duration": 205,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1004/Vegas-TheFlob-6720195.mp3?st=cjbbSg8JlZrsXFxncFcVTw&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2020/10/02/a/e/7/c/1601635174026_300.jpg"
      },
      {
        "key": "lky5ZXE8ICJg",
        "title": "Ở Nhà Đêêê",
        "artists": [
          "The Flob"
        ],
        "duration": 172,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1018/ONhaDeee-TheFlob-7050105.mp3?st=Jl13ww2Gfzvu1Qqmy6KtAg&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/07/16/f/4/9/8/1626418651903_300.jpg"
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
        "key": "h7LWcpKxqpuX",
        "title": "#D",
        "artists": [
          "Hail",
          "Green",
          "VCC CCMK"
        ],
        "duration": 267,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1010/ChoToiYeuEmVoi-HailGreenVietNamCcmk-6918399.mp3?st=Uv6FjZ9aZ1e0k78y_2da5A&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/01/15/2/d/3/c/1610681858423_300.jpg"
      },
      {
        "key": "j2x7DceziObK",
        "title": "Tùng Zin Zin",
        "artists": [
          "Kafkaf",
          "Hằng ssi",
          "Aries tis"
        ],
        "duration": 170,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2059/TungZinZin-KafkafHangssiAriestis-38721452.mp3?st=_pNeH-Pf3XAuUlAZ0EcXpw&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2025/09/25/f/2/d/6/1758785635644_300.jpg"
      },
      {
        "key": "5KKSuQGSFvTF",
        "title": "Kết!",
        "artists": [
          "Pink Frog",
          "Hào",
          "Mạnh Ninh"
        ],
        "duration": 190,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2059/Ket-PinkFrogHaoManhNinh-38690504.mp3?st=xa9nSS5cQb0IR0YBgG_udg&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2025/09/23/d/3/0/5/1758616553322_300.jpg"
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
        "key": "bBO1iCakdpsh",
        "title": "Đạp số lên ga",
        "artists": [
          "KHOA",
          "BILLY100"
        ],
        "duration": 151,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/resa/2507/71/ee/lqf16mw83k.mp3?st=1-aFK90jETD_rwC-DMncvg&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2025/07/09/d/b/c/5/1752056227262_300.jpg"
      },
      {
        "key": "OMBOOAkmqQQs",
        "title": "Lại Gần Hôn Anh",
        "artists": [
          "Tr.D"
        ],
        "duration": 188,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2059/LaiGanHonAnh-TrD-38149001.mp3?st=qgYfCfqN6R4sn96tgLYymQ&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2025/08/20/d/6/a/c/1755686051911_300.jpg"
      },
      {
        "key": "NeENTMlkanrN",
        "title": "át chủ bài",
        "artists": [
          "MiiNa",
          "RIN9",
          "DREAMeR"
        ],
        "duration": 206,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2058/AtChuBai-MiiNaDREAMeRRIN9DREAMeRVietNam-36456775.mp3?st=h9Iy7mJQPI7yhibml5wcXQ&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2025/04/08/5/2/0/0/1744098333685_300.jpg"
      },
      {
        "key": "N1Z9rXnM46wW",
        "title": "tần số chung",
        "artists": [
          "MiiNa",
          "RIN9",
          "DREAMeR"
        ],
        "duration": 166,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2058/TanSoChung-MiiNaDREAMeRRIN9DREAMeRVietNam-36456985.mp3?st=Op9f1TaR4gKuAjq4xS8b9w&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2025/04/08/5/2/0/0/1744098980201_300.jpg"
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
        "key": "U9gTWjNXtKmQ",
        "title": "9 Tầng Mây",
        "artists": [
          "MiiNa",
          "RIN9",
          "DREAMeR"
        ],
        "duration": 174,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2057/9TangMay-MiiNaDREAMeRRIN9DREAMeRVietNam-15732603.mp3?st=VpezFmTwkobfdJTP2LoiFA&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2024/08/14/1/b/e/3/1723626336591_300.jpg"
      },
      {
        "key": "sfOAUHdZuTKR",
        "title": "Bad Girl (Dành Một Mình Mỗi Anh)",
        "artists": [
          "Vũ Thảo My"
        ],
        "duration": 193,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2054/BadGirlDanhMotMinhMoiAnh-VuThaoMy-14329595.mp3?st=eP1f3eP3NmeGhGQF4VZjjw&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2024/04/05/b/7/4/5/1712290970766_300.jpg"
      },
      {
        "key": "eWJyY9pF1gCC",
        "title": "em là nhất",
        "artists": [
          "Fang Cee"
        ],
        "duration": 187,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2054/EmLaNhat-FangCeeVietNam-14394212.mp3?st=HrfA0qhtT3jVT4hRjLRxuQ&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2024/04/12/e/8/f/1/1712910055223_300.jpg"
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
        "key": "9tFcUMkGrFCv",
        "title": "Làm Em Say (Fall In Love)",
        "artists": [
          "Vũ Thảo My"
        ],
        "duration": 181,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2054/LamEmSayFallInLove-VuThaoMy-14329814.mp3?st=V1jTrjlW3ZeYNkErqzqEkA&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2024/04/05/b/7/4/5/1712295947457_300.jpg"
      },
      {
        "key": "FmKp1xiElfuJ",
        "title": "Đi Tiếp",
        "artists": [
          "ChipPunks"
        ],
        "duration": 148,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2047/DiTiep-ChipPunks-12165393.mp3?st=MOdyBkSyDOfx97_bCeMx6w&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2023/11/02/9/6/4/6/1698919085110_300.jpg"
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
        "key": "P5cbFalK4zVO",
        "title": "LENXE",
        "artists": [
          "FEEZY",
          "Tony D"
        ],
        "duration": 150,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2045/LENXE-FEEZYVietNamTonyD-11703636.mp3?st=5fFfZBCv0bXjnuw0zHDr3A&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2023/09/15/6/0/3/f/1694748971770_300.jpg"
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
        "key": "ISOjWT6AAOO5",
        "title": "Bang Bang",
        "artists": [
          "Vũ Thảo My",
          "Jsdrmns"
        ],
        "duration": 180,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2043/BangBang-VuThaoMyJsdrmns-10302195.mp3?st=x-5or8hkzHYEBwXliSOw8A&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2023/07/26/1/0/8/1/1690347293732_300.jpg"
      },
      {
        "key": "PjXOdFjsrbc6",
        "title": "Thiên Thần Cánh Đen",
        "artists": [
          "Teddyzkillers"
        ],
        "duration": 169,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NCTSong/2307/60/13/rr50jlxooa.mp3?st=dCfBdVIDJQ5TxCvKKVveLA&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2023/07/19/f/a/f/a/1689751480490_300.jpg"
      },
      {
        "key": "X74A6VDgjmBX",
        "title": "Vitamin Tình Iu",
        "artists": [
          "18.18"
        ],
        "duration": 200,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2042/VitaminTinhIu-8TEEN8TEEN-10024424.mp3?st=rcGtVF7l0UssK_fJBvV7IA&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2023/07/11/2/6/6/2/1689075566708_300.jpg"
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
      },
      {
        "key": "gX8tcaVvDvnM",
        "title": "1h20 Speed Up 120%",
        "artists": [
          "Sticker T"
        ],
        "duration": 119,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2039/1h20SpeedUp120-StickerTVietNam-9422333.mp3?st=Z2sx6tJVkm1HUVff9VqqOQ&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2023/05/05/9/2/f/e/1683263346175_300.jpg"
      },
      {
        "key": "UyH8po8XKE6b",
        "title": "Sóng Cả Không Ngã Tay Chèo",
        "artists": [
          "TIA",
          "CM1X"
        ],
        "duration": 189,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2038/SongCaKhongNgaTayCheo-TiaHaiChauCM1X-9217198.mp3?st=Q8VCN_F3YxVOnxgY0Wzhsw&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2023/04/17/1/9/a/e/1681748494501_300.jpg"
      },
      {
        "key": "oSObtJ9FsEyP",
        "title": "Cầu Vồng Kỳ Lân Lấp Lánh",
        "artists": [
          "Ezs",
          "T-Nation"
        ],
        "duration": 193,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2037/CauVongKyLanLapLanh-EzsTNation-8973817.mp3?st=dqQ4-iC5uiL8vvnEgaNjZQ&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2023/04/04/c/3/f/a/1680606413963_300.jpg"
      },
      {
        "key": "PPxAGatFwB8J",
        "title": "Buh-bye",
        "artists": [
          "Hakoota"
        ],
        "duration": 200,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2033/Buhbye-HakootaDungHa-8440120.mp3?st=PiacsiehM0s4knNMFOirGA&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2022/12/19/1/f/4/4/1671423532375_300.jpg"
      }
    ],
    "songs": [
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
        "key": "uilcavZFnhmr",
        "title": "Là Tất Cả",
        "artists": [
          "Đá Số Tới"
        ],
        "duration": 156,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1007/LaTatCa-DaSoToi-6853334.mp3?st=TlOdezDe0P5qJA0eLg3NRw&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2020/11/30/f/f/2/6/1606720349114_300.jpg"
      },
      {
        "key": "ouo8DGuTA6Et",
        "title": "Em",
        "artists": [
          "Đá Số Tới"
        ],
        "duration": 168,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1004/Em-DaSoToi-6690290.mp3?st=MXdl4vz8cSwjG0jRV0kvcA&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2020/09/30/8/5/b/e/1601455493192_300.jpg"
      },
      {
        "key": "E9Vs1Au45VN3",
        "title": "Sống Sai",
        "artists": [
          "The Flob"
        ],
        "duration": 242,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1004/SongSai-TheFlob-6720194.mp3?st=16sAg8RM4Q9VmVeq3-b1Sg&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2020/10/02/a/e/7/c/1601635153092_300.jpg"
      },
      {
        "key": "I0pT5mHc9sFu",
        "title": "Vegas",
        "artists": [
          "The Flob"
        ],
        "duration": 205,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1004/Vegas-TheFlob-6720195.mp3?st=cjbbSg8JlZrsXFxncFcVTw&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2020/10/02/a/e/7/c/1601635174026_300.jpg"
      },
      {
        "key": "lky5ZXE8ICJg",
        "title": "Ở Nhà Đêêê",
        "artists": [
          "The Flob"
        ],
        "duration": 172,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1018/ONhaDeee-TheFlob-7050105.mp3?st=Jl13ww2Gfzvu1Qqmy6KtAg&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/07/16/f/4/9/8/1626418651903_300.jpg"
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
        "key": "h7LWcpKxqpuX",
        "title": "#D",
        "artists": [
          "Hail",
          "Green",
          "VCC CCMK"
        ],
        "duration": 267,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1010/ChoToiYeuEmVoi-HailGreenVietNamCcmk-6918399.mp3?st=Uv6FjZ9aZ1e0k78y_2da5A&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/01/15/2/d/3/c/1610681858423_300.jpg"
      },
      {
        "key": "j2x7DceziObK",
        "title": "Tùng Zin Zin",
        "artists": [
          "Kafkaf",
          "Hằng ssi",
          "Aries tis"
        ],
        "duration": 170,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2059/TungZinZin-KafkafHangssiAriestis-38721452.mp3?st=_pNeH-Pf3XAuUlAZ0EcXpw&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2025/09/25/f/2/d/6/1758785635644_300.jpg"
      },
      {
        "key": "5KKSuQGSFvTF",
        "title": "Kết!",
        "artists": [
          "Pink Frog",
          "Hào",
          "Mạnh Ninh"
        ],
        "duration": 190,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2059/Ket-PinkFrogHaoManhNinh-38690504.mp3?st=xa9nSS5cQb0IR0YBgG_udg&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2025/09/23/d/3/0/5/1758616553322_300.jpg"
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
        "key": "bBO1iCakdpsh",
        "title": "Đạp số lên ga",
        "artists": [
          "KHOA",
          "BILLY100"
        ],
        "duration": 151,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/resa/2507/71/ee/lqf16mw83k.mp3?st=1-aFK90jETD_rwC-DMncvg&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2025/07/09/d/b/c/5/1752056227262_300.jpg"
      },
      {
        "key": "OMBOOAkmqQQs",
        "title": "Lại Gần Hôn Anh",
        "artists": [
          "Tr.D"
        ],
        "duration": 188,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2059/LaiGanHonAnh-TrD-38149001.mp3?st=qgYfCfqN6R4sn96tgLYymQ&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2025/08/20/d/6/a/c/1755686051911_300.jpg"
      },
      {
        "key": "NeENTMlkanrN",
        "title": "át chủ bài",
        "artists": [
          "MiiNa",
          "RIN9",
          "DREAMeR"
        ],
        "duration": 206,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2058/AtChuBai-MiiNaDREAMeRRIN9DREAMeRVietNam-36456775.mp3?st=h9Iy7mJQPI7yhibml5wcXQ&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2025/04/08/5/2/0/0/1744098333685_300.jpg"
      },
      {
        "key": "N1Z9rXnM46wW",
        "title": "tần số chung",
        "artists": [
          "MiiNa",
          "RIN9",
          "DREAMeR"
        ],
        "duration": 166,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2058/TanSoChung-MiiNaDREAMeRRIN9DREAMeRVietNam-36456985.mp3?st=Op9f1TaR4gKuAjq4xS8b9w&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2025/04/08/5/2/0/0/1744098980201_300.jpg"
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
        "key": "U9gTWjNXtKmQ",
        "title": "9 Tầng Mây",
        "artists": [
          "MiiNa",
          "RIN9",
          "DREAMeR"
        ],
        "duration": 174,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2057/9TangMay-MiiNaDREAMeRRIN9DREAMeRVietNam-15732603.mp3?st=VpezFmTwkobfdJTP2LoiFA&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2024/08/14/1/b/e/3/1723626336591_300.jpg"
      },
      {
        "key": "sfOAUHdZuTKR",
        "title": "Bad Girl (Dành Một Mình Mỗi Anh)",
        "artists": [
          "Vũ Thảo My"
        ],
        "duration": 193,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2054/BadGirlDanhMotMinhMoiAnh-VuThaoMy-14329595.mp3?st=eP1f3eP3NmeGhGQF4VZjjw&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2024/04/05/b/7/4/5/1712290970766_300.jpg"
      },
      {
        "key": "eWJyY9pF1gCC",
        "title": "em là nhất",
        "artists": [
          "Fang Cee"
        ],
        "duration": 187,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2054/EmLaNhat-FangCeeVietNam-14394212.mp3?st=HrfA0qhtT3jVT4hRjLRxuQ&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2024/04/12/e/8/f/1/1712910055223_300.jpg"
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
        "key": "9tFcUMkGrFCv",
        "title": "Làm Em Say (Fall In Love)",
        "artists": [
          "Vũ Thảo My"
        ],
        "duration": 181,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2054/LamEmSayFallInLove-VuThaoMy-14329814.mp3?st=V1jTrjlW3ZeYNkErqzqEkA&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2024/04/05/b/7/4/5/1712295947457_300.jpg"
      },
      {
        "key": "FmKp1xiElfuJ",
        "title": "Đi Tiếp",
        "artists": [
          "ChipPunks"
        ],
        "duration": 148,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2047/DiTiep-ChipPunks-12165393.mp3?st=MOdyBkSyDOfx97_bCeMx6w&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2023/11/02/9/6/4/6/1698919085110_300.jpg"
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
        "key": "P5cbFalK4zVO",
        "title": "LENXE",
        "artists": [
          "FEEZY",
          "Tony D"
        ],
        "duration": 150,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2045/LENXE-FEEZYVietNamTonyD-11703636.mp3?st=5fFfZBCv0bXjnuw0zHDr3A&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2023/09/15/6/0/3/f/1694748971770_300.jpg"
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
        "key": "ISOjWT6AAOO5",
        "title": "Bang Bang",
        "artists": [
          "Vũ Thảo My",
          "Jsdrmns"
        ],
        "duration": 180,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2043/BangBang-VuThaoMyJsdrmns-10302195.mp3?st=x-5or8hkzHYEBwXliSOw8A&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2023/07/26/1/0/8/1/1690347293732_300.jpg"
      },
      {
        "key": "PjXOdFjsrbc6",
        "title": "Thiên Thần Cánh Đen",
        "artists": [
          "Teddyzkillers"
        ],
        "duration": 169,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NCTSong/2307/60/13/rr50jlxooa.mp3?st=dCfBdVIDJQ5TxCvKKVveLA&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2023/07/19/f/a/f/a/1689751480490_300.jpg"
      },
      {
        "key": "X74A6VDgjmBX",
        "title": "Vitamin Tình Iu",
        "artists": [
          "18.18"
        ],
        "duration": 200,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2042/VitaminTinhIu-8TEEN8TEEN-10024424.mp3?st=rcGtVF7l0UssK_fJBvV7IA&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2023/07/11/2/6/6/2/1689075566708_300.jpg"
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
      },
      {
        "key": "gX8tcaVvDvnM",
        "title": "1h20 Speed Up 120%",
        "artists": [
          "Sticker T"
        ],
        "duration": 119,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2039/1h20SpeedUp120-StickerTVietNam-9422333.mp3?st=Z2sx6tJVkm1HUVff9VqqOQ&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2023/05/05/9/2/f/e/1683263346175_300.jpg"
      },
      {
        "key": "UyH8po8XKE6b",
        "title": "Sóng Cả Không Ngã Tay Chèo",
        "artists": [
          "TIA",
          "CM1X"
        ],
        "duration": 189,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2038/SongCaKhongNgaTayCheo-TiaHaiChauCM1X-9217198.mp3?st=Q8VCN_F3YxVOnxgY0Wzhsw&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2023/04/17/1/9/a/e/1681748494501_300.jpg"
      },
      {
        "key": "oSObtJ9FsEyP",
        "title": "Cầu Vồng Kỳ Lân Lấp Lánh",
        "artists": [
          "Ezs",
          "T-Nation"
        ],
        "duration": 193,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2037/CauVongKyLanLapLanh-EzsTNation-8973817.mp3?st=dqQ4-iC5uiL8vvnEgaNjZQ&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2023/04/04/c/3/f/a/1680606413963_300.jpg"
      },
      {
        "key": "PPxAGatFwB8J",
        "title": "Buh-bye",
        "artists": [
          "Hakoota"
        ],
        "duration": 200,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2033/Buhbye-HakootaDungHa-8440120.mp3?st=PiacsiehM0s4knNMFOirGA&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2022/12/19/1/f/4/4/1671423532375_300.jpg"
      }
    ]
  },
  {
    "id": "pub-3624937248",
    "name": "[2Q] [INST] Giai Điệu Trẻ Thơ",
    "description": "Kho bài hát chính thức từ nhà phát hành ([2Q] [INST] Giai Điệu Trẻ Thơ)",
    "songDetails": [
      {
        "key": "0r0caZlZNjaA",
        "title": "Bé Vui Học Hát (Kids Version)",
        "artists": [
          "Cuti Kid"
        ],
        "duration": 214,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NCTSong/2412/20/e2/rvc3xc7256.mp3?st=g8wLSRuBzFg420meZUhnyQ&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2024/12/24/3/a/3/4/03136_300.jpg"
      },
      {
        "key": "dFMSQqHSqQ37",
        "title": "Khám Phá Thế Giới Cùng Bé (Kids Version)",
        "artists": [
          "Cuti Kid"
        ],
        "duration": 194,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NCTSong/2412/0c/f0/lio31jvv72.mp3?st=QKiWRPgL1k4gqSH5-LhZ2w&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2024/12/24/d/8/8/a/06072_300.jpg"
      },
      {
        "key": "OR6R2JE1plMs",
        "title": "Thiếu Nhi Vui Tươi (Kids Version)",
        "artists": [
          "Cuti Kid"
        ],
        "duration": 186,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NCTSong/2412/3e/33/kjf1im14gn.mp3?st=uDHhuZCv8aUvmCv2jEZbpg&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2024/12/24/1/5/9/2/48361_300.jpg"
      },
      {
        "key": "B0EssacQvELl",
        "title": "Ngày Mới Của Bé (Kids Version)",
        "artists": [
          "Cuti Kid"
        ],
        "duration": 203,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NCTSong/2412/41/b4/j1fiy2ds55.mp3?st=i4K-Ir1McFI2LDku2e2deg&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2024/12/24/5/0/1/9/31589_300.jpg"
      },
      {
        "key": "hykwyHQQuWYp",
        "title": "Niềm Vui Trẻ Thơ (Kids Version)",
        "artists": [
          "Cuti Kid"
        ],
        "duration": 196,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NCTSong/2412/31/8b/55g2ohksyz.mp3?st=lFa8NAaXUhc3q2IGv7FJ4A&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2024/12/24/6/f/4/7/58047_300.jpg"
      },
      {
        "key": "6FN9i3seMRH3",
        "title": "Bé Vui Chơi Cùng Bạn (Kids Version)",
        "artists": [
          "Cuti Kid"
        ],
        "duration": 198,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NCTSong/2412/ff/a6/28qtp72q5l.mp3?st=4CxtXh3v84t4UnDY6AH39g&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2024/12/24/0/b/b/8/20669_300.jpg"
      },
      {
        "key": "riP1syOiM75Z",
        "title": "Thế Giới Vui Nhộn Của Bé (Kids Version)",
        "artists": [
          "Cuti Kid"
        ],
        "duration": 199,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NCTSong/2412/96/46/fac90h1blf.mp3?st=vaE5KTtx9wr41BPxGBtO4A&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2024/12/24/4/d/8/e/96063_300.jpg"
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
        "key": "7ICDOzZVXJje",
        "title": "Bé Học Hát Vui (Kids Version)",
        "artists": [
          "Cuti Kid"
        ],
        "duration": 173,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NCTSong/2412/f4/94/p663ovz1l2.mp3?st=h0LUveDKlL8CyLAbNwuoQg&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2024/12/24/6/4/1/4/88368_300.jpg"
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
        "key": "yp7t1AvSTDjc",
        "title": "Bữa Cơm Ngon Của Bé",
        "artists": [
          "Cuti Kid"
        ],
        "duration": 216,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NCTSong/2412/e0/b6/5ele2kkwu9.mp3?st=q-AdVxZ9RsG7foUAI6KwOA&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2024/12/24/c/1/1/3/68920_300.jpg"
      },
      {
        "key": "9JXr41VjSGsU",
        "title": "Cùng Bé Ăn Cơm Vui Vẻ",
        "artists": [
          "Cuti Kid"
        ],
        "duration": 211,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NCTSong/2412/b8/ea/r1kz6r4ea6.mp3?st=OOKFKfNKn25XAXMkYPE85g&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2024/12/24/6/b/d/6/44391_300.jpg"
      },
      {
        "key": "GF5tpeUH66pc",
        "title": "Nghe Nhạc Vui Nhộn Bé Sẽ Ăn Nhiều",
        "artists": [
          "Cuti Kid"
        ],
        "duration": 256,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NCTSong/2412/59/00/6pcv89s8i8.mp3?st=omqGLLxTfF9m6NXKBGpd1A&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2024/12/24/d/d/0/d/40118_300.jpg"
      },
      {
        "key": "QzFFygLTIAY6",
        "title": "Bé Ăn Ngon Cùng Giai Điệu Vui Nhộn",
        "artists": [
          "Cuti Kid"
        ],
        "duration": 182,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NCTSong/2412/eb/37/mw9m90xk8z.mp3?st=1U9X7Kq5LWDxwgIrlgpBvA&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2024/12/24/6/b/e/b/72431_300.jpg"
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
        "key": "TlnYxiBxW7WE",
        "title": "Mẹ Nấu Cơm Cho Bé Ăn Ngon Miệng Mỗi Bữa",
        "artists": [
          "Cuti Kid"
        ],
        "duration": 241,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NCTSong/2412/4b/84/9qva9nrq2o.mp3?st=IlY75cgwNIiaaqFdPnrxAw&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2024/12/24/0/3/2/c/25243_300.jpg"
      },
      {
        "key": "Ab9gOd0mDnr9",
        "title": "Bé Ngoan Bé Thích Ăn Cơm Và Nghe Nhạc",
        "artists": [
          "Cuti Kid"
        ],
        "duration": 230,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NCTSong/2412/fa/6c/pmwykvpojw.mp3?st=uRIxlrVTdgGbhyWBglEwDQ&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2024/12/24/b/6/c/7/36622_300.jpg"
      },
      {
        "key": "DkjaemhDoSs3",
        "title": "Bé Ăn Ngoan Trong Giai Điệu Vui Tươi",
        "artists": [
          "Cuti Kid"
        ],
        "duration": 202,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NCTSong/2412/ee/b0/n9rlv9ay67.mp3?st=1x6QOcmgHIK7qt1PjcTXjg&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2024/12/24/a/1/9/a/66888_300.jpg"
      },
      {
        "key": "QuJXt4WLacyz",
        "title": "Bữa Ăn Của Bé Thêm Ngon Trong Từng Nốt Nhạc Vui",
        "artists": [
          "Cuti Kid"
        ],
        "duration": 198,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NCTSong/2412/a3/af/woykpccohl.mp3?st=1oBkz5TxFsSlk8VSBuis2w&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2024/12/24/1/b/9/6/91145_300.jpg"
      },
      {
        "key": "u2ODmLDlLVWy",
        "title": "Bữa Cơm Gia Đình Cùng Bé",
        "artists": [
          "Cuti Kid"
        ],
        "duration": 200,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NCTSong/2412/c3/ea/fi6cetcga9.mp3?st=RKdlsMPaQLgLlduAHGBPSw&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2024/12/24/5/0/5/6/87532_300.jpg"
      },
      {
        "key": "TlPy65TiACE5",
        "title": "Giấc Ngủ Ngon Của Em Bé",
        "artists": [
          "Cuti Kid"
        ],
        "duration": 264,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NCTSong/2412/cd/38/gt6zf43uh0.mp3?st=bW7V_5Ob-heQjbsaxw3GAw&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2024/12/24/3/9/3/f/04272_300.jpg"
      },
      {
        "key": "6hHiZyhHKPrg",
        "title": "Ru Con Êm Dịu Trẻ Sơ Sinh Dễ Ngủ",
        "artists": [
          "Cuti Kid"
        ],
        "duration": 262,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NCTSong/2412/77/5b/esjun2x6e5.mp3?st=r7KWHqg0g_LKU7jleFMPsQ&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2024/12/24/6/5/d/7/59998_300.jpg"
      },
      {
        "key": "iCGJU0UgZ507",
        "title": "Hát Ru Bé Ngủ",
        "artists": [
          "Cuti Kid"
        ],
        "duration": 250,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NCTSong/2412/ec/e6/sup41p99nl.mp3?st=k7a7FGvaVJRkuwVv7V5m_w&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2024/12/24/1/3/d/c/88232_300.jpg"
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
        "key": "vqGOaFHcf6G9",
        "title": "Giai Điệu Nhẹ Nhàng Đưa Bé Vào Giấc Ngủ",
        "artists": [
          "Cuti Kid"
        ],
        "duration": 265,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NCTSong/2412/da/4c/ok15heeyt8.mp3?st=E0FrlSIDR5nTL-u9TyqVyA&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2024/12/24/d/d/4/3/08798_300.jpg"
      },
      {
        "key": "51QRVuMMeoWG",
        "title": "Món Quà Tinh Thần Của Trẻ Em",
        "artists": [
          "Cuti Kid"
        ],
        "duration": 200,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NCTSong/2412/4e/22/vaczj9ctix.mp3?st=rIY50_VnUoXHEC63iDx9PA&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2024/12/24/a/d/1/b/17519_300.jpg"
      },
      {
        "key": "YtnQwgf5vmMj",
        "title": "Kích Thích Sự Sáng Tạo Của Bé Qua Âm Nhạc",
        "artists": [
          "Cuti Kid"
        ],
        "duration": 174,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NCTSong/2412/01/67/svherdsq86.mp3?st=RVd1xLoBxgAnGmPCJ1wMLw&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2024/12/24/3/2/b/2/39313_300.jpg"
      },
      {
        "key": "ThYCJWHnoIur",
        "title": "Nguồn Năng Lượng Tích Cực Cho Bé",
        "artists": [
          "Cuti Kid"
        ],
        "duration": 192,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NCTSong/2412/cd/30/pzdn9fok1s.mp3?st=I4i5BuxbppR2-kUQpsIBrA&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2024/12/24/7/0/c/9/73317_300.jpg"
      },
      {
        "key": "93cL3mRr9Ius",
        "title": "Tăng Cường Khả Năng Tập Trung Cho Bé",
        "artists": [
          "Cuti Kid"
        ],
        "duration": 175,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NCTSong/2412/c7/7c/fnth07m5id.mp3?st=CihYsbYsz9EO3kALvVhI4Q&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2024/12/24/e/c/4/4/16988_300.jpg"
      },
      {
        "key": "ehJxc2pxvJZh",
        "title": "Phát Triển Kỹ Năng Vận Động Cho Trẻ",
        "artists": [
          "Cuti Kid"
        ],
        "duration": 206,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NCTSong/2412/a9/e3/bmfqcd9ac8.mp3?st=gJtsW9HtbNcKcqgIHjEVfw&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2024/12/24/5/a/c/c/71009_300.jpg"
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
        "key": "5TWrXEUkzIjZ",
        "title": "Phát Triển Trí Nhớ Của Trẻ",
        "artists": [
          "Cuti Kid"
        ],
        "duration": 206,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NCTSong/2412/16/da/4td8r8aoxn.mp3?st=poAl-Ea-1-07-W_RMhr6YQ&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2024/12/24/5/2/0/0/10689_300.jpg"
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
      }
    ],
    "songs": [
      {
        "key": "0r0caZlZNjaA",
        "title": "Bé Vui Học Hát (Kids Version)",
        "artists": [
          "Cuti Kid"
        ],
        "duration": 214,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NCTSong/2412/20/e2/rvc3xc7256.mp3?st=g8wLSRuBzFg420meZUhnyQ&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2024/12/24/3/a/3/4/03136_300.jpg"
      },
      {
        "key": "dFMSQqHSqQ37",
        "title": "Khám Phá Thế Giới Cùng Bé (Kids Version)",
        "artists": [
          "Cuti Kid"
        ],
        "duration": 194,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NCTSong/2412/0c/f0/lio31jvv72.mp3?st=QKiWRPgL1k4gqSH5-LhZ2w&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2024/12/24/d/8/8/a/06072_300.jpg"
      },
      {
        "key": "OR6R2JE1plMs",
        "title": "Thiếu Nhi Vui Tươi (Kids Version)",
        "artists": [
          "Cuti Kid"
        ],
        "duration": 186,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NCTSong/2412/3e/33/kjf1im14gn.mp3?st=uDHhuZCv8aUvmCv2jEZbpg&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2024/12/24/1/5/9/2/48361_300.jpg"
      },
      {
        "key": "B0EssacQvELl",
        "title": "Ngày Mới Của Bé (Kids Version)",
        "artists": [
          "Cuti Kid"
        ],
        "duration": 203,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NCTSong/2412/41/b4/j1fiy2ds55.mp3?st=i4K-Ir1McFI2LDku2e2deg&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2024/12/24/5/0/1/9/31589_300.jpg"
      },
      {
        "key": "hykwyHQQuWYp",
        "title": "Niềm Vui Trẻ Thơ (Kids Version)",
        "artists": [
          "Cuti Kid"
        ],
        "duration": 196,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NCTSong/2412/31/8b/55g2ohksyz.mp3?st=lFa8NAaXUhc3q2IGv7FJ4A&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2024/12/24/6/f/4/7/58047_300.jpg"
      },
      {
        "key": "6FN9i3seMRH3",
        "title": "Bé Vui Chơi Cùng Bạn (Kids Version)",
        "artists": [
          "Cuti Kid"
        ],
        "duration": 198,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NCTSong/2412/ff/a6/28qtp72q5l.mp3?st=4CxtXh3v84t4UnDY6AH39g&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2024/12/24/0/b/b/8/20669_300.jpg"
      },
      {
        "key": "riP1syOiM75Z",
        "title": "Thế Giới Vui Nhộn Của Bé (Kids Version)",
        "artists": [
          "Cuti Kid"
        ],
        "duration": 199,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NCTSong/2412/96/46/fac90h1blf.mp3?st=vaE5KTtx9wr41BPxGBtO4A&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2024/12/24/4/d/8/e/96063_300.jpg"
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
        "key": "7ICDOzZVXJje",
        "title": "Bé Học Hát Vui (Kids Version)",
        "artists": [
          "Cuti Kid"
        ],
        "duration": 173,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NCTSong/2412/f4/94/p663ovz1l2.mp3?st=h0LUveDKlL8CyLAbNwuoQg&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2024/12/24/6/4/1/4/88368_300.jpg"
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
        "key": "yp7t1AvSTDjc",
        "title": "Bữa Cơm Ngon Của Bé",
        "artists": [
          "Cuti Kid"
        ],
        "duration": 216,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NCTSong/2412/e0/b6/5ele2kkwu9.mp3?st=q-AdVxZ9RsG7foUAI6KwOA&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2024/12/24/c/1/1/3/68920_300.jpg"
      },
      {
        "key": "9JXr41VjSGsU",
        "title": "Cùng Bé Ăn Cơm Vui Vẻ",
        "artists": [
          "Cuti Kid"
        ],
        "duration": 211,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NCTSong/2412/b8/ea/r1kz6r4ea6.mp3?st=OOKFKfNKn25XAXMkYPE85g&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2024/12/24/6/b/d/6/44391_300.jpg"
      },
      {
        "key": "GF5tpeUH66pc",
        "title": "Nghe Nhạc Vui Nhộn Bé Sẽ Ăn Nhiều",
        "artists": [
          "Cuti Kid"
        ],
        "duration": 256,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NCTSong/2412/59/00/6pcv89s8i8.mp3?st=omqGLLxTfF9m6NXKBGpd1A&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2024/12/24/d/d/0/d/40118_300.jpg"
      },
      {
        "key": "QzFFygLTIAY6",
        "title": "Bé Ăn Ngon Cùng Giai Điệu Vui Nhộn",
        "artists": [
          "Cuti Kid"
        ],
        "duration": 182,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NCTSong/2412/eb/37/mw9m90xk8z.mp3?st=1U9X7Kq5LWDxwgIrlgpBvA&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2024/12/24/6/b/e/b/72431_300.jpg"
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
        "key": "TlnYxiBxW7WE",
        "title": "Mẹ Nấu Cơm Cho Bé Ăn Ngon Miệng Mỗi Bữa",
        "artists": [
          "Cuti Kid"
        ],
        "duration": 241,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NCTSong/2412/4b/84/9qva9nrq2o.mp3?st=IlY75cgwNIiaaqFdPnrxAw&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2024/12/24/0/3/2/c/25243_300.jpg"
      },
      {
        "key": "Ab9gOd0mDnr9",
        "title": "Bé Ngoan Bé Thích Ăn Cơm Và Nghe Nhạc",
        "artists": [
          "Cuti Kid"
        ],
        "duration": 230,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NCTSong/2412/fa/6c/pmwykvpojw.mp3?st=uRIxlrVTdgGbhyWBglEwDQ&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2024/12/24/b/6/c/7/36622_300.jpg"
      },
      {
        "key": "DkjaemhDoSs3",
        "title": "Bé Ăn Ngoan Trong Giai Điệu Vui Tươi",
        "artists": [
          "Cuti Kid"
        ],
        "duration": 202,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NCTSong/2412/ee/b0/n9rlv9ay67.mp3?st=1x6QOcmgHIK7qt1PjcTXjg&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2024/12/24/a/1/9/a/66888_300.jpg"
      },
      {
        "key": "QuJXt4WLacyz",
        "title": "Bữa Ăn Của Bé Thêm Ngon Trong Từng Nốt Nhạc Vui",
        "artists": [
          "Cuti Kid"
        ],
        "duration": 198,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NCTSong/2412/a3/af/woykpccohl.mp3?st=1oBkz5TxFsSlk8VSBuis2w&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2024/12/24/1/b/9/6/91145_300.jpg"
      },
      {
        "key": "u2ODmLDlLVWy",
        "title": "Bữa Cơm Gia Đình Cùng Bé",
        "artists": [
          "Cuti Kid"
        ],
        "duration": 200,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NCTSong/2412/c3/ea/fi6cetcga9.mp3?st=RKdlsMPaQLgLlduAHGBPSw&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2024/12/24/5/0/5/6/87532_300.jpg"
      },
      {
        "key": "TlPy65TiACE5",
        "title": "Giấc Ngủ Ngon Của Em Bé",
        "artists": [
          "Cuti Kid"
        ],
        "duration": 264,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NCTSong/2412/cd/38/gt6zf43uh0.mp3?st=bW7V_5Ob-heQjbsaxw3GAw&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2024/12/24/3/9/3/f/04272_300.jpg"
      },
      {
        "key": "6hHiZyhHKPrg",
        "title": "Ru Con Êm Dịu Trẻ Sơ Sinh Dễ Ngủ",
        "artists": [
          "Cuti Kid"
        ],
        "duration": 262,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NCTSong/2412/77/5b/esjun2x6e5.mp3?st=r7KWHqg0g_LKU7jleFMPsQ&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2024/12/24/6/5/d/7/59998_300.jpg"
      },
      {
        "key": "iCGJU0UgZ507",
        "title": "Hát Ru Bé Ngủ",
        "artists": [
          "Cuti Kid"
        ],
        "duration": 250,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NCTSong/2412/ec/e6/sup41p99nl.mp3?st=k7a7FGvaVJRkuwVv7V5m_w&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2024/12/24/1/3/d/c/88232_300.jpg"
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
        "key": "vqGOaFHcf6G9",
        "title": "Giai Điệu Nhẹ Nhàng Đưa Bé Vào Giấc Ngủ",
        "artists": [
          "Cuti Kid"
        ],
        "duration": 265,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NCTSong/2412/da/4c/ok15heeyt8.mp3?st=E0FrlSIDR5nTL-u9TyqVyA&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2024/12/24/d/d/4/3/08798_300.jpg"
      },
      {
        "key": "51QRVuMMeoWG",
        "title": "Món Quà Tinh Thần Của Trẻ Em",
        "artists": [
          "Cuti Kid"
        ],
        "duration": 200,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NCTSong/2412/4e/22/vaczj9ctix.mp3?st=rIY50_VnUoXHEC63iDx9PA&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2024/12/24/a/d/1/b/17519_300.jpg"
      },
      {
        "key": "YtnQwgf5vmMj",
        "title": "Kích Thích Sự Sáng Tạo Của Bé Qua Âm Nhạc",
        "artists": [
          "Cuti Kid"
        ],
        "duration": 174,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NCTSong/2412/01/67/svherdsq86.mp3?st=RVd1xLoBxgAnGmPCJ1wMLw&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2024/12/24/3/2/b/2/39313_300.jpg"
      },
      {
        "key": "ThYCJWHnoIur",
        "title": "Nguồn Năng Lượng Tích Cực Cho Bé",
        "artists": [
          "Cuti Kid"
        ],
        "duration": 192,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NCTSong/2412/cd/30/pzdn9fok1s.mp3?st=I4i5BuxbppR2-kUQpsIBrA&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2024/12/24/7/0/c/9/73317_300.jpg"
      },
      {
        "key": "93cL3mRr9Ius",
        "title": "Tăng Cường Khả Năng Tập Trung Cho Bé",
        "artists": [
          "Cuti Kid"
        ],
        "duration": 175,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NCTSong/2412/c7/7c/fnth07m5id.mp3?st=CihYsbYsz9EO3kALvVhI4Q&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2024/12/24/e/c/4/4/16988_300.jpg"
      },
      {
        "key": "ehJxc2pxvJZh",
        "title": "Phát Triển Kỹ Năng Vận Động Cho Trẻ",
        "artists": [
          "Cuti Kid"
        ],
        "duration": 206,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NCTSong/2412/a9/e3/bmfqcd9ac8.mp3?st=gJtsW9HtbNcKcqgIHjEVfw&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2024/12/24/5/a/c/c/71009_300.jpg"
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
        "key": "5TWrXEUkzIjZ",
        "title": "Phát Triển Trí Nhớ Của Trẻ",
        "artists": [
          "Cuti Kid"
        ],
        "duration": 206,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NCTSong/2412/16/da/4td8r8aoxn.mp3?st=poAl-Ea-1-07-W_RMhr6YQ&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2024/12/24/5/2/0/0/10689_300.jpg"
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
      }
    ]
  },
  {
    "id": "pub-4954382322",
    "name": "[2Q] Remix Sôi Động",
    "description": "Kho bài hát chính thức từ nhà phát hành ([2Q] Remix Sôi Động)",
    "songDetails": [
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
        "key": "CQUVLSbiktE8",
        "title": "Ái Nộ (Remix)",
        "artists": [
          "Masew",
          "Khoi Vu"
        ],
        "duration": 180,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1024/AiNoRemix2-MasewKhoiVu-7107607.mp3?st=Jh4nujgiGS96qCIvvFDZeg&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/10/16/5/4/f/0/1634384666867_300.jpg"
      },
      {
        "key": "n53nY38zPdLd",
        "title": "Ăn Mày Quá Khứ Remix",
        "artists": [
          "Thiên Dũng"
        ],
        "duration": 353,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1023/AnMayQuaKhuRemix-ThienDung-7100429.mp3?st=qezctBmat1oLcIR1d3ErNw&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/10/04/0/2/9/6/1633317295313_300.jpg"
      },
      {
        "key": "8QMtxO1NE88O",
        "title": "Anh Đâu Mất Rồi (Remix)",
        "artists": [
          "Tuyết Nhi"
        ],
        "duration": 209,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1024/AnhDauMatRoiRemix-TuyetNhi-7120911.mp3?st=hEyJkqoBsB8cuXXc4Istbw&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/11/20/7/6/a/9/1637402416819_300.jpg"
      },
      {
        "key": "wLj0R2xgLQ7w",
        "title": "Anh Sẽ Đợi (Thành Đạt Remix)",
        "artists": [
          "TLong",
          "Tô Minh"
        ],
        "duration": 267,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2022/AnhSeDoiThanhDatRemix-TLongToMinh-7235658.mp3?st=ZdWHbZa4miPRpKPVWFkD9w&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2022/05/25/0/6/5/4/1653469587331_300.jpg"
      },
      {
        "key": "dx2V38rbWlvF",
        "title": "Câu Hẹn Câu Thề (Vinahouse Remix)",
        "artists": [
          "Đình Dũng",
          "ACV"
        ],
        "duration": 304,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1013/CauHenCauTheVinahouseVersion-DinhDung-6994955.mp3?st=xGuxKAzYDufnGbVxTDns_w&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/03/30/9/9/d/6/1617092310885_300.jpg"
      },
      {
        "key": "53e4cYI2Ui0R",
        "title": "Chẳng Ai Có Thể Thay Thế Em (Remix House)",
        "artists": [
          "Kalee Hoàng",
          "Cường"
        ],
        "duration": 249,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1024/ChangAiCoTheThayTheEmRemixHouse-KaleeHoangCuong-7122508.mp3?st=o-iH15Q3YDhJdvAGLLxvog&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/12/04/2/5/4/4/1638593352133_300.jpg"
      },
      {
        "key": "h6ZBpte24BmH",
        "title": "Chẳng Biết Chờ Ai Remix",
        "artists": [
          "Trương Linh Đan"
        ],
        "duration": 344,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1023/ChangBietChoAiRemix-TruongLinhDan-7100310.mp3?st=MjXRbOD7CAZ1R5eoUSrkzA&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/10/03/1/e/b/b/1633257354785_300.jpg"
      },
      {
        "key": "9FwYR3eUMFJk",
        "title": "Chỉ Anh Còn Yêu (A.W Remix)",
        "artists": [
          "Kalee Hoàng",
          "Thành Tar"
        ],
        "duration": 175,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1022/ChiAnhConYeuAwRemix-KaleeHoangThanhTar-7097019.mp3?st=1dBo7jkrB3h5QqvHdQGmxw&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/09/27/3/a/f/2/1632729367895_300.jpg"
      },
      {
        "key": "D92grApoP24T",
        "title": "Chỉ Anh Còn Yêu (Blak Remix)",
        "artists": [
          "Kalee Hoàng",
          "Thành Tar"
        ],
        "duration": 233,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1022/ChiAnhConYeuBlakRemix-KaleeHoangThanhTar-7097016.mp3?st=dF7lv8tr33WcKYYQRpCzlQ&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/09/27/3/a/f/2/1632729320582_300.jpg"
      },
      {
        "key": "fJk0mmvSfyBz",
        "title": "Chỉ Anh Còn Yêu (T-Bag Remix)",
        "artists": [
          "Kalee Hoàng",
          "Thành Tar"
        ],
        "duration": 263,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1022/ChiAnhConYeuTbagRemix-KaleeHoangThanhTar-7097020.mp3?st=VBvH8UAuqZJJqSqOrVckyQ&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/09/27/3/a/f/2/1632729389916_300.jpg"
      },
      {
        "key": "GvdGYXyWNRXw",
        "title": "Có Duyên Không Nợ Remix",
        "artists": [
          "NB3 Hoài Bảo"
        ],
        "duration": 245,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1000/CoDuyenKhongNoRemix-NB3HoaiBao-6291829.mp3?st=g6tUqlxm6qixnfVEp3DbtQ&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2020/06/09/2/d/0/7/1591692680622_300.jpg"
      },
      {
        "key": "CUrJeZsRybFw",
        "title": "Cuộc Tình Lầm Lỡ (Remix House)",
        "artists": [
          "Kalee Hoàng",
          "Thành Tar"
        ],
        "duration": 224,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1022/CuocTinhLamLoRemixHouse-KaleeHoangThanhTar-7092373.mp3?st=YMOBdTnqIrptZszWTezmxg&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/09/21/2/a/c/4/1632203934638_300.jpg"
      },
      {
        "key": "MQqLIDLtpKS2",
        "title": "Đâu Ai Biết Trước Được Chữ Ngờ Remix",
        "artists": [
          "Khánh Phương"
        ],
        "duration": 313,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui998/DauAiBietTruocDuocChuNgoRemix-KhanhPhuong-6268906.mp3?st=hvOFUw9-s9pYkBogRkk_pA&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2020/04/29/0/a/7/1/1588133790064_300.jpg"
      },
      {
        "key": "aq9dlj8wktxF",
        "title": "Điều Không Thể (Remix)",
        "artists": [
          "Dương Nhất Linh"
        ],
        "duration": 250,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1024/DieuKhongTheRemix-DuongNhatLinh-7120543.mp3?st=PPHf5YJBUKSjO7JQl5BfFQ&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/12/15/3/0/1/7/1639544493202_300.jpg"
      },
      {
        "key": "jgwOF5pQvGLS",
        "title": "Điêu Ngoa (Thanhhuyy Remix)",
        "artists": [
          "Cemz"
        ],
        "duration": 249,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1025/DieuNgoaThanhhuyyRemix-Cemz-7125216.mp3?st=6EP2ZRP_snOzVoLuv798dQ&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/12/31/5/e/3/2/1640962051032_300.jpg"
      },
      {
        "key": "HZ9IVfuZAiK7",
        "title": "Đổ Vỡ (House Remix)",
        "artists": [
          "Jokes Bii"
        ],
        "duration": 222,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1026/DoVoHouseRemix-JokesBii-7130943.mp3?st=_ZATCnAxc0FAgEZ6uWCoeg&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2022/02/23/7/f/a/6/1645624966010_300.jpg"
      },
      {
        "key": "brn95pNxhUYT",
        "title": "Đom Đóm Và Ánh Trăng (Remix)",
        "artists": [
          "Foo",
          "Mouse T"
        ],
        "duration": 225,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1025/DomDomVaAnhTrangRemix-FooMouseT-7128937.mp3?st=TzlAkyiOaBrF-CU-_PHmuA&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2022/01/26/4/e/f/e/1643180334404_300.jpg"
      },
      {
        "key": "Usg3E9UB3Td6",
        "title": "Đông Vừa Sang Remix",
        "artists": [
          "VIET.",
          "ACV"
        ],
        "duration": 168,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1006/DongVuaSangRemix-NhuVietACV-6809317.mp3?st=3tjZbW2gVU_nk0D8FdYy7Q&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2020/11/10/2/5/0/9/1604998688123_300.jpg"
      },
      {
        "key": "OzdKjK9cOauq",
        "title": "Duyên Ta Chỉ Đây Thôi (AnhVu x HHD Remix)",
        "artists": [
          "Phát Huy T4",
          "Truzg"
        ],
        "duration": 257,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1018/DuyenTaChiDayThoiAnhvuXHhdRemix-PhatHuyT4Truzg-7049235.mp3?st=UXpWVkOf9uuXEViGxPb_kg&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/07/15/2/2/1/4/1626322899461_300.jpg"
      },
      {
        "key": "0wIrMoYjRj8q",
        "title": "Duyên Tàn (Remix House)",
        "artists": [
          "Lạc Khởi"
        ],
        "duration": 238,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1025/DuyenTanRemixHouse-LacKhoi-7127171.mp3?st=-MQ9hlWHuzqnCz1TOiRX6w&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2022/01/17/6/c/e/0/1642411624160_300.jpg"
      },
      {
        "key": "hcOYF53qT6jS",
        "title": "Em Đã Chọn Anh Ấy (A.W Remix)",
        "artists": [
          "Kalee Hoàng",
          "Thành Tar"
        ],
        "duration": 214,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1023/EmDaChonAnhAyAwRemix-KaleeHoangThanhTar-7113937.mp3?st=XYbvDgNMW556x4xf6Py2yg&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/10/19/d/8/7/2/1634645946140_300.jpg"
      },
      {
        "key": "YXesXceW7ep6",
        "title": "Em Đã Chọn Anh Ấy (Master D Remix)",
        "artists": [
          "Kalee Hoàng",
          "Thành Tar"
        ],
        "duration": 187,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1023/EmDaChonAnhAyMasterDRemix-KaleeHoangThanhTar-7113941.mp3?st=vDMpQGh3W2OJESz3iVdviQ&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/10/19/d/8/7/2/1634646014352_300.jpg"
      },
      {
        "key": "ow0Gv57GbP0c",
        "title": "Hạnh Phúc Không Chung Đôi Remix",
        "artists": [
          "Trương Khải Minh"
        ],
        "duration": 250,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1005/HanhPhucKhongChungDoiRemix-TruongKhaiMinh-6792523.mp3?st=Mc5r7KoiKxKWQhacbic3ow&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2020/11/03/d/a/8/9/1604397271066_300.jpg"
      },
      {
        "key": "pi7wN1SPBH9Q",
        "title": "Hết Duyên Thì Người Đi (Remix House)",
        "artists": [
          "Kalee Hoàng",
          "Đông Ca"
        ],
        "duration": 196,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1018/HetDuyenThiNguoiDiRemixHouse-KaleeHoangDongCa-7053384.mp3?st=IrA1BhaEXocGUHiFkQe_yA&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/07/23/0/9/2/3/1627016747949_300.jpg"
      },
      {
        "key": "2vux2z0OTHHh",
        "title": "Hóa Tương Tư Remix",
        "artists": [
          "Anh Rồng"
        ],
        "duration": 226,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1012/HoaTuongTuRemix-AnhRong-6953330.mp3?st=il7brLeeVmQPYZ6EDnGFUQ&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/03/09/c/3/5/4/1615277277393_300.jpg"
      },
      {
        "key": "FeW1pRekU6wj",
        "title": "Không Thể Yêu Một Ai Khác (Remix Version)",
        "artists": [
          "Ngô Trường"
        ],
        "duration": 236,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1023/KhongTheYeuMotAiKhacRemixVersion-NgoTruong-7107096.mp3?st=NM0PYhE0pk__NLlMeZVfHg&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/10/15/e/3/9/a/1634284836439_300.jpg"
      },
      {
        "key": "IOOI7fNDm3Ne",
        "title": "KN25 (Onderbi Remix)",
        "artists": [
          "Deus Tiến Đạt"
        ],
        "duration": 167,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1025/Kn25OnderbiRemix-DeusTienDat-7124702.mp3?st=ddmdhoI3zgZZIq_YKIxMkA&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2023/12/05/4/7/6/c/1701768551910_300.jpg"
      },
      {
        "key": "QKRgzz45NRIK",
        "title": "Là Bạn Nhưng Yêu Em (Remix)",
        "artists": [
          "Đức Anh"
        ],
        "duration": 191,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2029/LaBanNhungYeuEmRemix-DucAnh-8018995.mp3?st=IfqovZ2Z76S-8YHpue6XeA&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2022/10/04/f/e/5/f/1664872513855_300.jpg"
      },
      {
        "key": "66mAdh6iYkFD",
        "title": "Là Do Ta Không Giữ (Remix House)",
        "artists": [
          "Kalee Hoàng",
          "Thành Tar"
        ],
        "duration": 216,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1024/LaDoTaKhongGiuHouseVersion-KaleeHoangThanhTar-7119942.mp3?st=awxpchVsb6PcP4DI25ma7A&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/11/05/e/c/7/c/1636119273686_300.jpg"
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
        "key": "0XE6tbV1z8bJ",
        "title": "Love City (Remix)",
        "artists": [
          "Phúc Bồ",
          "Snoop Dee"
        ],
        "duration": 202,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1024/LoveCityRemix-PhucBoSnoopDee-7121157.mp3?st=gyiojvrnnVp2Kh_cVBVUyA&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/11/25/8/7/5/6/1637830660397_300.jpg"
      },
      {
        "key": "LWdLSVk8wJ13",
        "title": "Mê Cung Ngàn Lối (Remix)",
        "artists": [
          "Phạm Nhật Bu"
        ],
        "duration": 247,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1024/MeCungNganLoiTeddyXMartHouseRemix-PhamNhatBu-7122851.mp3?st=Ny-j5Minmgmd8rGRWsXqpw&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/12/07/3/4/9/a/1638868866653_300.jpg"
      },
      {
        "key": "qPQY7cDGQ2YK",
        "title": "Mình Cưới Thôi (NIF x Heness Remix)",
        "artists": [
          "Leo",
          "JENY.PM"
        ],
        "duration": 234,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1023/MinhCuoiThoiRemixVersion-LEOVietNamJENYPM-7107087.mp3?st=kXD8jdPaPJcieuP2jdqvJA&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/10/15/e/3/9/a/1634284462320_300.jpg"
      },
      {
        "key": "ejhuz9021Fxw",
        "title": "Mình Kết Thúc Đi (Remix)",
        "artists": [
          "Đinh Kiến Phong",
          "DJ KeeBin"
        ],
        "duration": 338,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1010/MinhKetThucDiRemix-DinhKienPhongDJKeeBin-6927352.mp3?st=Bd3Fjfl_mWwY3jG5cwD0vQ&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/01/22/9/f/2/1/1611282750881_300.jpg"
      },
      {
        "key": "p5y8paeRXKTq",
        "title": "Muôn Kiếp Là Anh Em (Vinahouse)",
        "artists": [
          "Du Thiên"
        ],
        "duration": 284,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui998/MuonKiepLaAnhEmVinahouse-DuThien-6269001.mp3?st=2yFJkBMsk-kpRrUcPnOlcA&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2020/04/29/0/a/7/1/1588147882601_300.jpg"
      },
      {
        "key": "MIcvU5oGJrif",
        "title": "Ngại Nói (1967 Remix)",
        "artists": [
          "Tú Salmon",
          "Ez.Fluv"
        ],
        "duration": 171,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1021/NgaiNoi1967Remix-TuDaoEzFluv-7087915.mp3?st=MY80cA72FwbooxvlwqihkA&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2022/03/31/f/b/1/2/1648715918560_300.jpg"
      },
      {
        "key": "EicvMDS8VrdS",
        "title": "Ngày Mai Sẽ Khác (Remix)",
        "artists": [
          "Thái Bảo Trâm"
        ],
        "duration": 255,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1014/NgayMaiSeKhacRemix-ThaiBaoTram-7007366.mp3?st=gpqYTiHnIg0N2gPitTHQDw&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/04/22/7/a/0/2/1619073819573_300.jpg"
      },
      {
        "key": "ZeG5wfxx8TKi",
        "title": "Người Khác Lối Remix",
        "artists": [
          "Khánh Phong"
        ],
        "duration": 272,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1012/NguoiKhacLoiRemix-KhanhPhong-6964023.mp3?st=RG0aTDA87UPgw-ArSLx8Sw&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/singer/avatar/2018/03/21/7/8/1/2/1521596985192_300.jpg"
      },
      {
        "key": "S0MjZMyopJoI",
        "title": "Người Mà Anh Thương (Remix)",
        "artists": [
          "Hữu Stream"
        ],
        "duration": 218,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1025/NguoiMaAnhThuongRemix-HuuStream-7125203.mp3?st=cHj6hx3cl-FoRK7Plol7VA&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/12/31/5/e/3/2/1640960924448_300.jpg"
      },
      {
        "key": "SUp4OXkwIEV1",
        "title": "Người Ta Sẽ Thay Anh (Remix Beat)",
        "artists": [
          "La Hoàng Phúc"
        ],
        "duration": 237,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1026/NguoiTaSeThayAnhRemixBeat-LaHoangPhuc-7135249.mp3?st=t1T5vKltWhN4RX2dA7JTFQ&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2022/03/04/5/9/c/8/1646381882788_300.jpg"
      },
      {
        "key": "gQkFTmgyTztj",
        "title": "Nhành Hoa Phai (Tlong Remix)",
        "artists": [
          "TCM Tuấn Cảnh",
          "TLong"
        ],
        "duration": 255,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1027/NhanhHoaPhaiTlongRemix-TCMTuanCanhTLong-7204785.mp3?st=nQuags3SI4zCngiBSdp5tg&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2022/05/08/9/8/a/c/1651972667887_300.jpg"
      },
      {
        "key": "XdLilMYA0lK3",
        "title": "Nỗi Nhớ Ùa Về (Remix House)",
        "artists": [
          "Kalee Hoàng",
          "Thành Tar"
        ],
        "duration": 209,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1023/NoiNhoUaVeRemixHouse-KaleeHoangThanhTar-7106850.mp3?st=l3oc7ixmcu38-lOXq_lOwg&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/10/14/f/5/6/6/1634217200532_300.jpg"
      },
      {
        "key": "jFQphrABK5rk",
        "title": "Nơi Ta Từng (Pro. By KRIZH) (Cukak Remix)",
        "artists": [
          "Xuân Vũ",
          "Nghĩa Phùng"
        ],
        "duration": 211,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2031/NoiTaTungProByKRIZHCukakRemix-XuanVuNghiaPhung-8294894.mp3?st=wzH2uhyTXQi7utaJUDgubw&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2022/11/21/4/f/d/3/1669006256129_300.jpg"
      },
      {
        "key": "FBjC2AGrK5tW",
        "title": "Phồn Hoa (Htrol Remix)",
        "artists": [
          "Thái Sơn",
          "Sinike"
        ],
        "duration": 253,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1015/PhonHoaHtrolRemix-ThaiSonSinike-7017601.mp3?st=CTn5KJsQ0V6Kkf6AgwZ9Ew&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/05/11/1/1/d/f/1620698735460_300.jpg"
      },
      {
        "key": "D9yh5VKD9DtA",
        "title": "Quá Khứ Đẹp Đẽ (Remix House)",
        "artists": [
          "Kalee Hoàng",
          "Cường"
        ],
        "duration": 184,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1022/QuaKhuDepDeRemixHouse-KaleeHoangCuong-7092822.mp3?st=Pi-PQo7k5VtdlbT2hIMVWw&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/09/22/1/4/6/2/1632286702185_300.jpg"
      },
      {
        "key": "Ib2paPOgqY5H",
        "title": "Quá Muộn Rồi (Remix)",
        "artists": [
          "Phạm Thanh Sang"
        ],
        "duration": 217,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1026/QuaMuonRoiRemix-PhamThanhSang-7147083.mp3?st=aYd1I3U3Oy3GMilgYSW0eg&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2022/03/21/1/2/8/3/1647850972524_300.jpg"
      },
      {
        "key": "cVImzX3KN1Ua",
        "title": "Rời Xa Nhau Tim Mình Đau Remix",
        "artists": [
          "Chí Hướng"
        ],
        "duration": 219,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1019/RoiXaNhauTimMinhDauRemix-ChiHuong-7060339.mp3?st=RMQVCEMrlo1eK3zHrEFR8Q&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/08/03/8/1/4/1/1627981705173_300.jpg"
      },
      {
        "key": "mnNtRBDeM8Sb",
        "title": "Sài Gòn Cố Lên! (NIF x Heness Remix)",
        "artists": [
          "Leo",
          "Dorie",
          "KayZ",
          "JENY.PM"
        ],
        "duration": 217,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1022/SaiGonCoLenNifXHenessRemix-LEOVietNamDorieKayzSuper9JENYPM-7098789.mp3?st=h4oJtsyn9nLstGkwX0hzRw&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/10/01/4/5/5/5/1633071554922_300.jpg"
      },
      {
        "key": "RLuqx0U6Y9DI",
        "title": "Sầu Bi (Remix Version)",
        "artists": [
          "Trúc Ly"
        ],
        "duration": 169,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1023/SauBiRemixVersion-TrucLyTre-7107062.mp3?st=7RKx6i582U9zIxlvakBNTg&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/10/15/e/3/9/a/1634282115211_300.jpg"
      },
      {
        "key": "pLBn8kVgcZrt",
        "title": "Thích Thì Tỏ Tình (Remix Version)",
        "artists": [
          "Như Thùy",
          "Hoàng Rapper"
        ],
        "duration": 234,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1025/ThichThiToTinhRemix-AnieNhuThuyHoangRapper-7124600.mp3?st=nbfjdeA2Gi_ONygmvtUY4A&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/12/29/c/0/b/f/1640775711897_300.jpg"
      },
      {
        "key": "3faTMlAS28MS",
        "title": "Thu Quên Bóng Người (Qrinn Remix)",
        "artists": [
          "Quang Minh"
        ],
        "duration": 242,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1024/ThuQuenBongNguoiQrinnRemix-QuangMinh-7121063.mp3?st=6V1J3DF2_3p1L4pMJt8X1A&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/11/25/8/7/5/6/1637820639949_300.jpg"
      },
      {
        "key": "JbHSER8lB2Kc",
        "title": "Thương Tâm (Remix Version)",
        "artists": [
          "Từ Thức"
        ],
        "duration": 292,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1023/ThuongTamRemix-TuThuc-7100419.mp3?st=T43OeJAoDyAyXH1cEEZkLA&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/10/04/0/2/9/6/1633315191864_300.jpg"
      },
      {
        "key": "WiWr05WjWVRo",
        "title": "Thúy Vân (Qrinn Remix)",
        "artists": [
          "Tony Trương"
        ],
        "duration": 349,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1025/ThuyVanQrinnRemix-TonyTruong-7127152.mp3?st=5KpRK--WdW6H1QvZiiQndg&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2022/01/17/6/c/e/0/1642410779070_300.jpg"
      },
      {
        "key": "CgzKPKwZg4Q3",
        "title": "Tình Thương Phu Thê (Remix)",
        "artists": [
          "Chí Hướng"
        ],
        "duration": 271,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1021/TinhThuongPhuTheRemix-ChiHuong-7084111.mp3?st=PLTpmakWYPL2Z9uFKFzKpQ&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/09/07/5/9/f/7/1630988654114_300.jpg"
      },
      {
        "key": "R3XgzteFm8P1",
        "title": "Tình Yêu Khủng Long Remix",
        "artists": [
          "Fay"
        ],
        "duration": 243,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui999/TinhYeuKhungLongRemix-FAY-6277616.mp3?st=OeRQrfxCEyP13PQxVGdKkQ&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2020/05/13/9/e/4/3/1589353597891_300.jpg"
      },
      {
        "key": "TslZWKMmtWux",
        "title": "Tình Yêu Tự Tìm Được Lối (Orinn Remix)",
        "artists": [
          "Vicky Nhung"
        ],
        "duration": 275,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1004/TinhYeuTuTimDuocLoiOrinnRemix-VickyNhung-6689810.mp3?st=Vm8dJ5zsHBHWSuKGf9vEgA&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2020/09/29/a/a/f/c/1601375726932_300.jpg"
      },
      {
        "key": "0HBZ6n3F5tZ2",
        "title": "Trái Duyên Remix",
        "artists": [
          "Từ Thức"
        ],
        "duration": 309,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1020/TraiDuyenRemix-TuThuc-7065380.mp3?st=xFtsocUFtKzeOC3qoRMR9g&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/08/09/b/a/7/b/1628503536465_300.jpg"
      },
      {
        "key": "G6W7c7Pmmifp",
        "title": "Từ Khi Lìa Đôi (Remix)",
        "artists": [
          "Ngô Trường"
        ],
        "duration": 191,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1024/TuKhiLiaDoiRemix-NgoTruong-7115171.mp3?st=HqA8qu8E7NnFVdgsCpnokw&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/10/22/a/2/f/7/1634916090363_300.jpg"
      },
      {
        "key": "DqFRvztJhGCj",
        "title": "Em Lại Khóc Rồi (Remix)",
        "artists": [
          "Quỳnh Ori"
        ],
        "duration": 215,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2058/EmLaiKhocRoiRemix-QuynhOri-36377954.mp3?st=dYf1NJgeVDqZjbZJpyq2gA&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2025/04/02/6/7/e/2/1743585526639_300.jpg"
      }
    ],
    "songs": [
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
        "key": "CQUVLSbiktE8",
        "title": "Ái Nộ (Remix)",
        "artists": [
          "Masew",
          "Khoi Vu"
        ],
        "duration": 180,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1024/AiNoRemix2-MasewKhoiVu-7107607.mp3?st=Jh4nujgiGS96qCIvvFDZeg&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/10/16/5/4/f/0/1634384666867_300.jpg"
      },
      {
        "key": "n53nY38zPdLd",
        "title": "Ăn Mày Quá Khứ Remix",
        "artists": [
          "Thiên Dũng"
        ],
        "duration": 353,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1023/AnMayQuaKhuRemix-ThienDung-7100429.mp3?st=qezctBmat1oLcIR1d3ErNw&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/10/04/0/2/9/6/1633317295313_300.jpg"
      },
      {
        "key": "8QMtxO1NE88O",
        "title": "Anh Đâu Mất Rồi (Remix)",
        "artists": [
          "Tuyết Nhi"
        ],
        "duration": 209,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1024/AnhDauMatRoiRemix-TuyetNhi-7120911.mp3?st=hEyJkqoBsB8cuXXc4Istbw&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/11/20/7/6/a/9/1637402416819_300.jpg"
      },
      {
        "key": "wLj0R2xgLQ7w",
        "title": "Anh Sẽ Đợi (Thành Đạt Remix)",
        "artists": [
          "TLong",
          "Tô Minh"
        ],
        "duration": 267,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2022/AnhSeDoiThanhDatRemix-TLongToMinh-7235658.mp3?st=ZdWHbZa4miPRpKPVWFkD9w&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2022/05/25/0/6/5/4/1653469587331_300.jpg"
      },
      {
        "key": "dx2V38rbWlvF",
        "title": "Câu Hẹn Câu Thề (Vinahouse Remix)",
        "artists": [
          "Đình Dũng",
          "ACV"
        ],
        "duration": 304,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1013/CauHenCauTheVinahouseVersion-DinhDung-6994955.mp3?st=xGuxKAzYDufnGbVxTDns_w&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/03/30/9/9/d/6/1617092310885_300.jpg"
      },
      {
        "key": "53e4cYI2Ui0R",
        "title": "Chẳng Ai Có Thể Thay Thế Em (Remix House)",
        "artists": [
          "Kalee Hoàng",
          "Cường"
        ],
        "duration": 249,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1024/ChangAiCoTheThayTheEmRemixHouse-KaleeHoangCuong-7122508.mp3?st=o-iH15Q3YDhJdvAGLLxvog&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/12/04/2/5/4/4/1638593352133_300.jpg"
      },
      {
        "key": "h6ZBpte24BmH",
        "title": "Chẳng Biết Chờ Ai Remix",
        "artists": [
          "Trương Linh Đan"
        ],
        "duration": 344,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1023/ChangBietChoAiRemix-TruongLinhDan-7100310.mp3?st=MjXRbOD7CAZ1R5eoUSrkzA&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/10/03/1/e/b/b/1633257354785_300.jpg"
      },
      {
        "key": "9FwYR3eUMFJk",
        "title": "Chỉ Anh Còn Yêu (A.W Remix)",
        "artists": [
          "Kalee Hoàng",
          "Thành Tar"
        ],
        "duration": 175,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1022/ChiAnhConYeuAwRemix-KaleeHoangThanhTar-7097019.mp3?st=1dBo7jkrB3h5QqvHdQGmxw&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/09/27/3/a/f/2/1632729367895_300.jpg"
      },
      {
        "key": "D92grApoP24T",
        "title": "Chỉ Anh Còn Yêu (Blak Remix)",
        "artists": [
          "Kalee Hoàng",
          "Thành Tar"
        ],
        "duration": 233,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1022/ChiAnhConYeuBlakRemix-KaleeHoangThanhTar-7097016.mp3?st=dF7lv8tr33WcKYYQRpCzlQ&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/09/27/3/a/f/2/1632729320582_300.jpg"
      },
      {
        "key": "fJk0mmvSfyBz",
        "title": "Chỉ Anh Còn Yêu (T-Bag Remix)",
        "artists": [
          "Kalee Hoàng",
          "Thành Tar"
        ],
        "duration": 263,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1022/ChiAnhConYeuTbagRemix-KaleeHoangThanhTar-7097020.mp3?st=VBvH8UAuqZJJqSqOrVckyQ&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/09/27/3/a/f/2/1632729389916_300.jpg"
      },
      {
        "key": "GvdGYXyWNRXw",
        "title": "Có Duyên Không Nợ Remix",
        "artists": [
          "NB3 Hoài Bảo"
        ],
        "duration": 245,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1000/CoDuyenKhongNoRemix-NB3HoaiBao-6291829.mp3?st=g6tUqlxm6qixnfVEp3DbtQ&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2020/06/09/2/d/0/7/1591692680622_300.jpg"
      },
      {
        "key": "CUrJeZsRybFw",
        "title": "Cuộc Tình Lầm Lỡ (Remix House)",
        "artists": [
          "Kalee Hoàng",
          "Thành Tar"
        ],
        "duration": 224,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1022/CuocTinhLamLoRemixHouse-KaleeHoangThanhTar-7092373.mp3?st=YMOBdTnqIrptZszWTezmxg&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/09/21/2/a/c/4/1632203934638_300.jpg"
      },
      {
        "key": "MQqLIDLtpKS2",
        "title": "Đâu Ai Biết Trước Được Chữ Ngờ Remix",
        "artists": [
          "Khánh Phương"
        ],
        "duration": 313,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui998/DauAiBietTruocDuocChuNgoRemix-KhanhPhuong-6268906.mp3?st=hvOFUw9-s9pYkBogRkk_pA&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2020/04/29/0/a/7/1/1588133790064_300.jpg"
      },
      {
        "key": "aq9dlj8wktxF",
        "title": "Điều Không Thể (Remix)",
        "artists": [
          "Dương Nhất Linh"
        ],
        "duration": 250,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1024/DieuKhongTheRemix-DuongNhatLinh-7120543.mp3?st=PPHf5YJBUKSjO7JQl5BfFQ&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/12/15/3/0/1/7/1639544493202_300.jpg"
      },
      {
        "key": "jgwOF5pQvGLS",
        "title": "Điêu Ngoa (Thanhhuyy Remix)",
        "artists": [
          "Cemz"
        ],
        "duration": 249,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1025/DieuNgoaThanhhuyyRemix-Cemz-7125216.mp3?st=6EP2ZRP_snOzVoLuv798dQ&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/12/31/5/e/3/2/1640962051032_300.jpg"
      },
      {
        "key": "HZ9IVfuZAiK7",
        "title": "Đổ Vỡ (House Remix)",
        "artists": [
          "Jokes Bii"
        ],
        "duration": 222,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1026/DoVoHouseRemix-JokesBii-7130943.mp3?st=_ZATCnAxc0FAgEZ6uWCoeg&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2022/02/23/7/f/a/6/1645624966010_300.jpg"
      },
      {
        "key": "brn95pNxhUYT",
        "title": "Đom Đóm Và Ánh Trăng (Remix)",
        "artists": [
          "Foo",
          "Mouse T"
        ],
        "duration": 225,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1025/DomDomVaAnhTrangRemix-FooMouseT-7128937.mp3?st=TzlAkyiOaBrF-CU-_PHmuA&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2022/01/26/4/e/f/e/1643180334404_300.jpg"
      },
      {
        "key": "Usg3E9UB3Td6",
        "title": "Đông Vừa Sang Remix",
        "artists": [
          "VIET.",
          "ACV"
        ],
        "duration": 168,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1006/DongVuaSangRemix-NhuVietACV-6809317.mp3?st=3tjZbW2gVU_nk0D8FdYy7Q&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2020/11/10/2/5/0/9/1604998688123_300.jpg"
      },
      {
        "key": "OzdKjK9cOauq",
        "title": "Duyên Ta Chỉ Đây Thôi (AnhVu x HHD Remix)",
        "artists": [
          "Phát Huy T4",
          "Truzg"
        ],
        "duration": 257,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1018/DuyenTaChiDayThoiAnhvuXHhdRemix-PhatHuyT4Truzg-7049235.mp3?st=UXpWVkOf9uuXEViGxPb_kg&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/07/15/2/2/1/4/1626322899461_300.jpg"
      },
      {
        "key": "0wIrMoYjRj8q",
        "title": "Duyên Tàn (Remix House)",
        "artists": [
          "Lạc Khởi"
        ],
        "duration": 238,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1025/DuyenTanRemixHouse-LacKhoi-7127171.mp3?st=-MQ9hlWHuzqnCz1TOiRX6w&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2022/01/17/6/c/e/0/1642411624160_300.jpg"
      },
      {
        "key": "hcOYF53qT6jS",
        "title": "Em Đã Chọn Anh Ấy (A.W Remix)",
        "artists": [
          "Kalee Hoàng",
          "Thành Tar"
        ],
        "duration": 214,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1023/EmDaChonAnhAyAwRemix-KaleeHoangThanhTar-7113937.mp3?st=XYbvDgNMW556x4xf6Py2yg&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/10/19/d/8/7/2/1634645946140_300.jpg"
      },
      {
        "key": "YXesXceW7ep6",
        "title": "Em Đã Chọn Anh Ấy (Master D Remix)",
        "artists": [
          "Kalee Hoàng",
          "Thành Tar"
        ],
        "duration": 187,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1023/EmDaChonAnhAyMasterDRemix-KaleeHoangThanhTar-7113941.mp3?st=vDMpQGh3W2OJESz3iVdviQ&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/10/19/d/8/7/2/1634646014352_300.jpg"
      },
      {
        "key": "ow0Gv57GbP0c",
        "title": "Hạnh Phúc Không Chung Đôi Remix",
        "artists": [
          "Trương Khải Minh"
        ],
        "duration": 250,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1005/HanhPhucKhongChungDoiRemix-TruongKhaiMinh-6792523.mp3?st=Mc5r7KoiKxKWQhacbic3ow&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2020/11/03/d/a/8/9/1604397271066_300.jpg"
      },
      {
        "key": "pi7wN1SPBH9Q",
        "title": "Hết Duyên Thì Người Đi (Remix House)",
        "artists": [
          "Kalee Hoàng",
          "Đông Ca"
        ],
        "duration": 196,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1018/HetDuyenThiNguoiDiRemixHouse-KaleeHoangDongCa-7053384.mp3?st=IrA1BhaEXocGUHiFkQe_yA&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/07/23/0/9/2/3/1627016747949_300.jpg"
      },
      {
        "key": "2vux2z0OTHHh",
        "title": "Hóa Tương Tư Remix",
        "artists": [
          "Anh Rồng"
        ],
        "duration": 226,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1012/HoaTuongTuRemix-AnhRong-6953330.mp3?st=il7brLeeVmQPYZ6EDnGFUQ&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/03/09/c/3/5/4/1615277277393_300.jpg"
      },
      {
        "key": "FeW1pRekU6wj",
        "title": "Không Thể Yêu Một Ai Khác (Remix Version)",
        "artists": [
          "Ngô Trường"
        ],
        "duration": 236,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1023/KhongTheYeuMotAiKhacRemixVersion-NgoTruong-7107096.mp3?st=NM0PYhE0pk__NLlMeZVfHg&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/10/15/e/3/9/a/1634284836439_300.jpg"
      },
      {
        "key": "IOOI7fNDm3Ne",
        "title": "KN25 (Onderbi Remix)",
        "artists": [
          "Deus Tiến Đạt"
        ],
        "duration": 167,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1025/Kn25OnderbiRemix-DeusTienDat-7124702.mp3?st=ddmdhoI3zgZZIq_YKIxMkA&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2023/12/05/4/7/6/c/1701768551910_300.jpg"
      },
      {
        "key": "QKRgzz45NRIK",
        "title": "Là Bạn Nhưng Yêu Em (Remix)",
        "artists": [
          "Đức Anh"
        ],
        "duration": 191,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2029/LaBanNhungYeuEmRemix-DucAnh-8018995.mp3?st=IfqovZ2Z76S-8YHpue6XeA&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2022/10/04/f/e/5/f/1664872513855_300.jpg"
      },
      {
        "key": "66mAdh6iYkFD",
        "title": "Là Do Ta Không Giữ (Remix House)",
        "artists": [
          "Kalee Hoàng",
          "Thành Tar"
        ],
        "duration": 216,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1024/LaDoTaKhongGiuHouseVersion-KaleeHoangThanhTar-7119942.mp3?st=awxpchVsb6PcP4DI25ma7A&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/11/05/e/c/7/c/1636119273686_300.jpg"
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
        "key": "0XE6tbV1z8bJ",
        "title": "Love City (Remix)",
        "artists": [
          "Phúc Bồ",
          "Snoop Dee"
        ],
        "duration": 202,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1024/LoveCityRemix-PhucBoSnoopDee-7121157.mp3?st=gyiojvrnnVp2Kh_cVBVUyA&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/11/25/8/7/5/6/1637830660397_300.jpg"
      },
      {
        "key": "LWdLSVk8wJ13",
        "title": "Mê Cung Ngàn Lối (Remix)",
        "artists": [
          "Phạm Nhật Bu"
        ],
        "duration": 247,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1024/MeCungNganLoiTeddyXMartHouseRemix-PhamNhatBu-7122851.mp3?st=Ny-j5Minmgmd8rGRWsXqpw&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/12/07/3/4/9/a/1638868866653_300.jpg"
      },
      {
        "key": "qPQY7cDGQ2YK",
        "title": "Mình Cưới Thôi (NIF x Heness Remix)",
        "artists": [
          "Leo",
          "JENY.PM"
        ],
        "duration": 234,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1023/MinhCuoiThoiRemixVersion-LEOVietNamJENYPM-7107087.mp3?st=kXD8jdPaPJcieuP2jdqvJA&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/10/15/e/3/9/a/1634284462320_300.jpg"
      },
      {
        "key": "ejhuz9021Fxw",
        "title": "Mình Kết Thúc Đi (Remix)",
        "artists": [
          "Đinh Kiến Phong",
          "DJ KeeBin"
        ],
        "duration": 338,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1010/MinhKetThucDiRemix-DinhKienPhongDJKeeBin-6927352.mp3?st=Bd3Fjfl_mWwY3jG5cwD0vQ&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/01/22/9/f/2/1/1611282750881_300.jpg"
      },
      {
        "key": "p5y8paeRXKTq",
        "title": "Muôn Kiếp Là Anh Em (Vinahouse)",
        "artists": [
          "Du Thiên"
        ],
        "duration": 284,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui998/MuonKiepLaAnhEmVinahouse-DuThien-6269001.mp3?st=2yFJkBMsk-kpRrUcPnOlcA&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2020/04/29/0/a/7/1/1588147882601_300.jpg"
      },
      {
        "key": "MIcvU5oGJrif",
        "title": "Ngại Nói (1967 Remix)",
        "artists": [
          "Tú Salmon",
          "Ez.Fluv"
        ],
        "duration": 171,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1021/NgaiNoi1967Remix-TuDaoEzFluv-7087915.mp3?st=MY80cA72FwbooxvlwqihkA&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2022/03/31/f/b/1/2/1648715918560_300.jpg"
      },
      {
        "key": "EicvMDS8VrdS",
        "title": "Ngày Mai Sẽ Khác (Remix)",
        "artists": [
          "Thái Bảo Trâm"
        ],
        "duration": 255,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1014/NgayMaiSeKhacRemix-ThaiBaoTram-7007366.mp3?st=gpqYTiHnIg0N2gPitTHQDw&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/04/22/7/a/0/2/1619073819573_300.jpg"
      },
      {
        "key": "ZeG5wfxx8TKi",
        "title": "Người Khác Lối Remix",
        "artists": [
          "Khánh Phong"
        ],
        "duration": 272,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1012/NguoiKhacLoiRemix-KhanhPhong-6964023.mp3?st=RG0aTDA87UPgw-ArSLx8Sw&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/singer/avatar/2018/03/21/7/8/1/2/1521596985192_300.jpg"
      },
      {
        "key": "S0MjZMyopJoI",
        "title": "Người Mà Anh Thương (Remix)",
        "artists": [
          "Hữu Stream"
        ],
        "duration": 218,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1025/NguoiMaAnhThuongRemix-HuuStream-7125203.mp3?st=cHj6hx3cl-FoRK7Plol7VA&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/12/31/5/e/3/2/1640960924448_300.jpg"
      },
      {
        "key": "SUp4OXkwIEV1",
        "title": "Người Ta Sẽ Thay Anh (Remix Beat)",
        "artists": [
          "La Hoàng Phúc"
        ],
        "duration": 237,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1026/NguoiTaSeThayAnhRemixBeat-LaHoangPhuc-7135249.mp3?st=t1T5vKltWhN4RX2dA7JTFQ&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2022/03/04/5/9/c/8/1646381882788_300.jpg"
      },
      {
        "key": "gQkFTmgyTztj",
        "title": "Nhành Hoa Phai (Tlong Remix)",
        "artists": [
          "TCM Tuấn Cảnh",
          "TLong"
        ],
        "duration": 255,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1027/NhanhHoaPhaiTlongRemix-TCMTuanCanhTLong-7204785.mp3?st=nQuags3SI4zCngiBSdp5tg&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2022/05/08/9/8/a/c/1651972667887_300.jpg"
      },
      {
        "key": "XdLilMYA0lK3",
        "title": "Nỗi Nhớ Ùa Về (Remix House)",
        "artists": [
          "Kalee Hoàng",
          "Thành Tar"
        ],
        "duration": 209,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1023/NoiNhoUaVeRemixHouse-KaleeHoangThanhTar-7106850.mp3?st=l3oc7ixmcu38-lOXq_lOwg&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/10/14/f/5/6/6/1634217200532_300.jpg"
      },
      {
        "key": "jFQphrABK5rk",
        "title": "Nơi Ta Từng (Pro. By KRIZH) (Cukak Remix)",
        "artists": [
          "Xuân Vũ",
          "Nghĩa Phùng"
        ],
        "duration": 211,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2031/NoiTaTungProByKRIZHCukakRemix-XuanVuNghiaPhung-8294894.mp3?st=wzH2uhyTXQi7utaJUDgubw&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2022/11/21/4/f/d/3/1669006256129_300.jpg"
      },
      {
        "key": "FBjC2AGrK5tW",
        "title": "Phồn Hoa (Htrol Remix)",
        "artists": [
          "Thái Sơn",
          "Sinike"
        ],
        "duration": 253,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1015/PhonHoaHtrolRemix-ThaiSonSinike-7017601.mp3?st=CTn5KJsQ0V6Kkf6AgwZ9Ew&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/05/11/1/1/d/f/1620698735460_300.jpg"
      },
      {
        "key": "D9yh5VKD9DtA",
        "title": "Quá Khứ Đẹp Đẽ (Remix House)",
        "artists": [
          "Kalee Hoàng",
          "Cường"
        ],
        "duration": 184,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1022/QuaKhuDepDeRemixHouse-KaleeHoangCuong-7092822.mp3?st=Pi-PQo7k5VtdlbT2hIMVWw&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/09/22/1/4/6/2/1632286702185_300.jpg"
      },
      {
        "key": "Ib2paPOgqY5H",
        "title": "Quá Muộn Rồi (Remix)",
        "artists": [
          "Phạm Thanh Sang"
        ],
        "duration": 217,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1026/QuaMuonRoiRemix-PhamThanhSang-7147083.mp3?st=aYd1I3U3Oy3GMilgYSW0eg&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2022/03/21/1/2/8/3/1647850972524_300.jpg"
      },
      {
        "key": "cVImzX3KN1Ua",
        "title": "Rời Xa Nhau Tim Mình Đau Remix",
        "artists": [
          "Chí Hướng"
        ],
        "duration": 219,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1019/RoiXaNhauTimMinhDauRemix-ChiHuong-7060339.mp3?st=RMQVCEMrlo1eK3zHrEFR8Q&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/08/03/8/1/4/1/1627981705173_300.jpg"
      },
      {
        "key": "mnNtRBDeM8Sb",
        "title": "Sài Gòn Cố Lên! (NIF x Heness Remix)",
        "artists": [
          "Leo",
          "Dorie",
          "KayZ",
          "JENY.PM"
        ],
        "duration": 217,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1022/SaiGonCoLenNifXHenessRemix-LEOVietNamDorieKayzSuper9JENYPM-7098789.mp3?st=h4oJtsyn9nLstGkwX0hzRw&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/10/01/4/5/5/5/1633071554922_300.jpg"
      },
      {
        "key": "RLuqx0U6Y9DI",
        "title": "Sầu Bi (Remix Version)",
        "artists": [
          "Trúc Ly"
        ],
        "duration": 169,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1023/SauBiRemixVersion-TrucLyTre-7107062.mp3?st=7RKx6i582U9zIxlvakBNTg&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/10/15/e/3/9/a/1634282115211_300.jpg"
      },
      {
        "key": "pLBn8kVgcZrt",
        "title": "Thích Thì Tỏ Tình (Remix Version)",
        "artists": [
          "Như Thùy",
          "Hoàng Rapper"
        ],
        "duration": 234,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1025/ThichThiToTinhRemix-AnieNhuThuyHoangRapper-7124600.mp3?st=nbfjdeA2Gi_ONygmvtUY4A&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/12/29/c/0/b/f/1640775711897_300.jpg"
      },
      {
        "key": "3faTMlAS28MS",
        "title": "Thu Quên Bóng Người (Qrinn Remix)",
        "artists": [
          "Quang Minh"
        ],
        "duration": 242,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1024/ThuQuenBongNguoiQrinnRemix-QuangMinh-7121063.mp3?st=6V1J3DF2_3p1L4pMJt8X1A&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/11/25/8/7/5/6/1637820639949_300.jpg"
      },
      {
        "key": "JbHSER8lB2Kc",
        "title": "Thương Tâm (Remix Version)",
        "artists": [
          "Từ Thức"
        ],
        "duration": 292,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1023/ThuongTamRemix-TuThuc-7100419.mp3?st=T43OeJAoDyAyXH1cEEZkLA&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/10/04/0/2/9/6/1633315191864_300.jpg"
      },
      {
        "key": "WiWr05WjWVRo",
        "title": "Thúy Vân (Qrinn Remix)",
        "artists": [
          "Tony Trương"
        ],
        "duration": 349,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1025/ThuyVanQrinnRemix-TonyTruong-7127152.mp3?st=5KpRK--WdW6H1QvZiiQndg&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2022/01/17/6/c/e/0/1642410779070_300.jpg"
      },
      {
        "key": "CgzKPKwZg4Q3",
        "title": "Tình Thương Phu Thê (Remix)",
        "artists": [
          "Chí Hướng"
        ],
        "duration": 271,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1021/TinhThuongPhuTheRemix-ChiHuong-7084111.mp3?st=PLTpmakWYPL2Z9uFKFzKpQ&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/09/07/5/9/f/7/1630988654114_300.jpg"
      },
      {
        "key": "R3XgzteFm8P1",
        "title": "Tình Yêu Khủng Long Remix",
        "artists": [
          "Fay"
        ],
        "duration": 243,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui999/TinhYeuKhungLongRemix-FAY-6277616.mp3?st=OeRQrfxCEyP13PQxVGdKkQ&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2020/05/13/9/e/4/3/1589353597891_300.jpg"
      },
      {
        "key": "TslZWKMmtWux",
        "title": "Tình Yêu Tự Tìm Được Lối (Orinn Remix)",
        "artists": [
          "Vicky Nhung"
        ],
        "duration": 275,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1004/TinhYeuTuTimDuocLoiOrinnRemix-VickyNhung-6689810.mp3?st=Vm8dJ5zsHBHWSuKGf9vEgA&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2020/09/29/a/a/f/c/1601375726932_300.jpg"
      },
      {
        "key": "0HBZ6n3F5tZ2",
        "title": "Trái Duyên Remix",
        "artists": [
          "Từ Thức"
        ],
        "duration": 309,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1020/TraiDuyenRemix-TuThuc-7065380.mp3?st=xFtsocUFtKzeOC3qoRMR9g&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/08/09/b/a/7/b/1628503536465_300.jpg"
      },
      {
        "key": "G6W7c7Pmmifp",
        "title": "Từ Khi Lìa Đôi (Remix)",
        "artists": [
          "Ngô Trường"
        ],
        "duration": 191,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1024/TuKhiLiaDoiRemix-NgoTruong-7115171.mp3?st=HqA8qu8E7NnFVdgsCpnokw&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/10/22/a/2/f/7/1634916090363_300.jpg"
      },
      {
        "key": "DqFRvztJhGCj",
        "title": "Em Lại Khóc Rồi (Remix)",
        "artists": [
          "Quỳnh Ori"
        ],
        "duration": 215,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2058/EmLaiKhocRoiRemix-QuynhOri-36377954.mp3?st=dYf1NJgeVDqZjbZJpyq2gA&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2025/04/02/6/7/e/2/1743585526639_300.jpg"
      }
    ]
  },
  {
    "id": "pub-4558136299",
    "name": "[SEP26] [2Q] Nhạc Vpop Remix",
    "description": "Kho bài hát chính thức từ nhà phát hành ([SEP26] [2Q] Nhạc Vpop Remix)",
    "songDetails": [
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
        "key": "hfZBvO3miwB3",
        "title": "Em Đi Đâu (Cm1x Remix)",
        "artists": [
          "Machiot",
          "CM1X"
        ],
        "duration": 192,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui996/EmDiDauCm1xRemix-MachiotCM1X-6237588.mp3?st=s0cs503MaW6aRMrOx3GZwg&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2020/03/16/d/2/1/a/1584322940853_300.jpg"
      },
      {
        "key": "tvG3Cm2WqeNz",
        "title": "Là Khi Nào Ấy Nhờ (Hagii Remix)",
        "artists": [
          "Machiot",
          "Hagii"
        ],
        "duration": 286,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui996/LaKhiNaoAyNhoHagiiRemix-MachiotHagii-6237586.mp3?st=RWKor39roOiVgNGOJYFy0w&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2020/03/16/d/2/1/a/1584322730727_300.jpg"
      },
      {
        "key": "G63dFWGvV9jG",
        "title": "Một Thời Đã Sống (Teddy Doox Remix)",
        "artists": [
          "Yanbi",
          "2Can",
          "Teddy Doox"
        ],
        "duration": 255,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui997/MotThoiDaSongTeddyDooxRemix-Yanbi2CanTeddyDoox-6248467.mp3?st=WJfDk_lTlTmK6Ba6SQ2hQA&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2020/04/11/9/2/5/f/1586567328881_300.jpg"
      },
      {
        "key": "NxZwWPLaTGC9",
        "title": "Baby I'm Good (Beep Beep Child Remix)",
        "artists": [
          "Kim Chi Sun",
          "BeepBeepChild"
        ],
        "duration": 201,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui993/BabyImGoodBeepBeepChildRemix-KimChiSun-6182238.mp3?st=Mapjdf4UVu5l2lVRyz-gbA&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2019/12/26/e/d/9/c/1577330865497_300.jpg"
      },
      {
        "key": "NKierKyDqS8u",
        "title": "Là Khi Nào Ấy Nhờ (Teddy Doox Remix)",
        "artists": [
          "Teddy Doox"
        ],
        "duration": 191,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui999/LaKhiNaoAyNhoTeddyDooxRemix-TeddyDoox-6288660.mp3?st=OJXBQWP2oR8r3hS5L9p4Zg&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2020/06/02/4/d/4/6/1591063308225_300.jpg"
      },
      {
        "key": "otXUVQL1vir6",
        "title": "Nước Cờ Em Chọn (Ông Trùm Bùi Viện OST) (Remix Version)",
        "artists": [
          "Ưng Hoàng Phúc"
        ],
        "duration": 246,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1001/NuocCoEmChonRemixOngTrumBuiVienOst-UngHoangPhuc-6465926.mp3?st=nJIYcD2Sbv8qS8cHe3ctGg&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2020/08/10/3/0/c/b/1597056967818_300.jpg"
      },
      {
        "key": "hTOTcDR9r5d4",
        "title": "But Me Too (Maddi Remix)",
        "artists": [
          "Freaky",
          "Harose"
        ],
        "duration": 188,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1001/ButMeTooMaddiRemix-Freaky-6490067.mp3?st=DRqS-Z2AsHJgRjK3JoI6uQ&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2020/08/13/6/3/1/8/1597286831785_300.jpg"
      },
      {
        "key": "AvfuLL5F6mY2",
        "title": "Có Chắc Là Yêu Không? (EDM Remix)",
        "artists": [
          "NonHanTa"
        ],
        "duration": 248,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1003/CoChacLaYeuKhongEdmRemix-NonHanTa-6638572.mp3?st=hhYcJBtWHx_VYnoFvXrdww&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/singer/avatar/2019/07/19/2/3/b/1/1563509005550_300.jpg"
      },
      {
        "key": "4raHghdAKPdE",
        "title": "Thật Buồn Cho Đôi Ta (Truzg Remix)",
        "artists": [
          "Quang Chợ Lầm",
          "Minh Tường"
        ],
        "duration": 220,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1002/ThatBuonChoDoiTaTruzgRemix-QuangChoLamMinhTuong-6575020.mp3?st=w3Wo2mJ0XoV3839wERgV5Q&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2020/08/28/9/f/d/6/1598601326075_300.jpg"
      },
      {
        "key": "guyPQzhgFTjN",
        "title": "My Autumn (Ccats Remix)",
        "artists": [
          "Simple Tommy",
          "Long"
        ],
        "duration": 250,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1003/MyAutumnCcatsRemix-TommyTomLong-6637369.mp3?st=OmtaD6HDZ0KR287Ma0saJA&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2020/09/18/d/5/7/7/1600402355004_300.jpg"
      },
      {
        "key": "cZcyv4ezHMDS",
        "title": "Nhớ Về Em (Heineken Remix)",
        "artists": [
          "Quang Minh"
        ],
        "duration": 267,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1004/NhoVeEmHeinekenRemix-NguyenQuangMinh-6652265.mp3?st=AREYzBAbM5qZnpVVtw1LQA&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2020/09/22/8/6/c/e/1600748733813_300.jpg"
      },
      {
        "key": "K0J0bWOeThh7",
        "title": "Yêu Sâu Đậm Sẽ Mang Sai Lầm (HHD Remix)",
        "artists": [
          "Hiếu Adobe"
        ],
        "duration": 202,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1005/YeuSauDamSeMangSaiLamHhdRemix-HieuAdobe-6792486.mp3?st=rOHR_drPwLjO5AEVrV0CYQ&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2020/11/03/d/a/8/9/1604392983720_300.jpg"
      },
      {
        "key": "6uGzyGmRb2vF",
        "title": "CILU (Zang Remix)",
        "artists": [
          "JGKiD",
          "MPaKK"
        ],
        "duration": 213,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1009/CiluZangRemix-JGKiDDaLABMPaKKDaLAB-6892646.mp3?st=3rU_kXO41FqvChCB5aHiuQ&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2020/12/21/3/6/0/f/1608520366654_300.jpg"
      },
      {
        "key": "MMiVF9KaFgUf",
        "title": "LƠI (CM1X Remix)",
        "artists": [
          "Lytuevy",
          "Ngắn"
        ],
        "duration": 234,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1009/LoiCm1xRemix-LytuevyNgan-6893284.mp3?st=oM6o2Xp1M-yyN2FUDEhxug&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2020/12/22/d/0/d/1/1608623575968_300.jpg"
      },
      {
        "key": "6EOlfBkLHM1z",
        "title": "Những Ngày Sau Remix",
        "artists": [
          "Trí",
          "MyNhan"
        ],
        "duration": 186,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1009/NhungNgaySauRemix-TriMyNhan-6911909.mp3?st=TPrl_YKbfe6KZ5jfcSNzwQ&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/01/05/0/6/1/b/1609833343659_300.jpg"
      },
      {
        "key": "JLSHl1OSO3hN",
        "title": "Tốt Cho Cả Hai (Persi Remix)",
        "artists": [
          "Quang Chợ Lầm"
        ],
        "duration": 297,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1010/TotChoCaHaiPersiRemix-QuangChoLam-6916731.mp3?st=uZxbqp9c3G9x01vHcuN_Qg&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/01/13/b/d/d/4/1610510379722_300.jpg"
      },
      {
        "key": "iHV4sYIVsfHk",
        "title": "Cơn Mưa Qua (HeineKen Remix)",
        "artists": [
          "DMD Minh Duy"
        ],
        "duration": 276,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1010/ConMuaQuaHeinekenRemix-DMDMinhDuy-6931487.mp3?st=jSEIgO4EnwoImwrZ_vhCGg&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/02/01/d/0/3/0/1612156118286_300.jpg"
      },
      {
        "key": "2qp2g5kyOoUb",
        "title": "Sài Gòn Đau Lòng Quá (Mee Remix)",
        "artists": [
          "Hứa Kim Tuyền",
          "Hoàng Duyên"
        ],
        "duration": 334,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1024/SaiGonDauLongQuaMeeRemix-HuaKimTuyenHoangDuyen-7119300.mp3?st=XXJTB_TYyJc-sKxm6RPDRQ&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/10/29/0/8/0/c/1635478617511_300.jpg"
      },
      {
        "key": "gsQBDZjUg1Wn",
        "title": "Phận Duyên Lỡ Làng (Minh Khôn Remix )",
        "artists": [
          "Phát Huy T4",
          "Truzg"
        ],
        "duration": 191,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1014/PhanDuyenLoLangMinhKhonRemix-PhatHuyT4Trugz-7004542.mp3?st=gRFPcLSbsyEo2QlXYFhi9g&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/04/14/c/3/3/b/1618383612121_300.jpg"
      },
      {
        "key": "bUM7OaCnPrqU",
        "title": "Chơi Vơi (Hiphop Remix)",
        "artists": [
          "Feliks Alvin",
          "Allen"
        ],
        "duration": 240,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1014/ChoiVoiHiphopRemix-FeliksAllen-7006337.mp3?st=CL2JC5rIK-wvsbou6CMZGg&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/04/19/d/1/f/1/1618801656444_300.jpg"
      },
      {
        "key": "o7Qrzam9iLev",
        "title": "Ai Ngờ (Minh Khôn Remix)",
        "artists": [
          "Quang Chợ Lầm",
          "Mai Linh"
        ],
        "duration": 175,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1015/AiNgoMinhKhonRemix-QuangChoLamMaiLinh-7007839.mp3?st=VxggfMEN1FmETz1X0qctOQ&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/04/23/2/f/5/3/1619162486848_300.jpg"
      },
      {
        "key": "dFrkx3qydbny",
        "title": "Phận Duyên Lỡ Làng (Kaine x HHD Remix)",
        "artists": [
          "Phát Huy T4",
          "Truzg"
        ],
        "duration": 313,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1016/PhanDuyenLoLangKaineXHhdRemix-PhatHuyT4Truzg-7023455.mp3?st=9d9qd_X_xICnWcwkAh65cA&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/05/24/f/8/d/8/1621830605225_300.jpg"
      },
      {
        "key": "4uU07ONcCFmj",
        "title": "Ngày Mai Xa Rồi (Oriion x HHD Remix)",
        "artists": [
          "Bình Boo"
        ],
        "duration": 245,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1016/NgayMaiXaRoiOriionXHhdRemix-BinhBoo-7026376.mp3?st=aNvTcAjZQiZIO5hZ7L_BPA&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/05/29/2/f/2/4/1622301335643_300.jpg"
      },
      {
        "key": "SzUoxz0T9fQW",
        "title": "Đắm Say Rồi (Heineken X Hhd Remix)",
        "artists": [
          "Sùng Chẩn Páo"
        ],
        "duration": 313,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1016/DamSayRoiHeinekenXHhdRemix-SungChanPao-7030397.mp3?st=I31TEI1nNq7kZTVwdxkrPg&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/06/07/5/c/c/c/1623040406556_300.jpg"
      },
      {
        "key": "4oKhORg2jU5D",
        "title": "Ngỡ Được Yêu (Tiser x HHD Remix)",
        "artists": [
          "LinhTG"
        ],
        "duration": 291,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1017/NgoDuocYeuTiserXHhdRemix-LinhTG-7032458.mp3?st=CGOrFAH4BuM9l_MJZG6zPQ&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/06/15/0/f/0/b/1623722359905_300.jpg"
      },
      {
        "key": "4l1eFOCphnBm",
        "title": "Lụy Tình (Mus x HHD Remix)",
        "artists": [
          "TLong"
        ],
        "duration": 265,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1017/LuyTinhMusXHhdRemix-TLong-7036488.mp3?st=_pKZ4IvMrxMXcaCHzox91w&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/06/22/0/3/e/7/1624351430657_300.jpg"
      },
      {
        "key": "srcxdhfOQ47g",
        "title": "Răng Khôn (Cukak Remix)",
        "artists": [
          "Phí Phương Anh",
          "RIN9"
        ],
        "duration": 170,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1017/RangKhonCukakRemix-PhiPhuongAnhTheFaceRIN9-7040447.mp3?st=fqLDPq5k6d_lwnpao5kxrw&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/06/29/9/1/6/e/1624940282847_300.jpg"
      },
      {
        "key": "57PasPj5jrts",
        "title": "Đào Nương (LHK x HHD Remix)",
        "artists": [
          "Hoàng Vương"
        ],
        "duration": 224,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1017/DaoNuongLhkXHhdRemix-HoangVuong-7037336.mp3?st=HdfElpjSJEL2_XsrI94kFg&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/06/25/e/6/6/d/1624604695052_300.jpg"
      },
      {
        "key": "2xKZOHhVsyps",
        "title": "Em Là Dealer? (Minh Nhật & Lusic Remix)",
        "artists": [
          "Minh Nhật",
          "S.U.N"
        ],
        "duration": 210,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1018/EmLaDealerMinhNhatLusicRemix-MinhNhat-7047928.mp3?st=7tY3RXq2sPANF6BBpeElkg&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/07/13/d/1/2/3/1626166099790_300.jpg"
      },
      {
        "key": "gX9JWEExCdiv",
        "title": "Hiện Đại (Ciray Remix)",
        "artists": [
          "Khắc Việt"
        ],
        "duration": 271,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/Warner_Audio72/HienDaiCirayRemix-KhacViet-7051466.mp3?st=X1WTHkk_Hgl6t0iW35hWtQ&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/07/16/f/4/9/8/1626402031444_300.jpg"
      },
      {
        "key": "7ysVK2EO1rBZ",
        "title": "Nhánh Phong Lan (HeineKen x HHD Remix)",
        "artists": [
          "Lộc Kim Vân"
        ],
        "duration": 298,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1018/NhanhPhongLanHeinekenXHhdRemix-LocKimVan-7052271.mp3?st=joqiBZHD9f2SFo3g5R6aaQ&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/07/21/7/0/f/8/1626853305960_300.jpg"
      },
      {
        "key": "GFICy1vMYc4D",
        "title": "Có Anh Đây Rồi (Lssin x HHD Remix)",
        "artists": [
          "Namm",
          "Đứcc"
        ],
        "duration": 195,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1018/CoAnhDayRoiLssinXHhdRemix-NammDucc-7052961.mp3?st=pm8W14jNTSugpgbP_8DJDA&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/07/22/7/9/0/7/1626942044520_300.jpg"
      },
      {
        "key": "Sbu8db33IAng",
        "title": "Tiếng Tơ Lòng (HeineKen x HHD Remix)",
        "artists": [
          "H-Kray",
          "Truzg"
        ],
        "duration": 352,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1019/TiengToLongHeinekenXHhdRemix-HKrayTruzg-7056595.mp3?st=djmbhEdcng1zCL5p5IngKg&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/07/29/1/3/5/3/1627522611864_300.jpg"
      },
      {
        "key": "58jLlizdKXht",
        "title": "Một Người Tương Xứng (LHK x HHD Remix)",
        "artists": [
          "Quang Chợ Lầm"
        ],
        "duration": 291,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1019/MotNguoiTuongXungLhkXHhdRemix-QuangChoLam-7061409.mp3?st=FfMsHRP1PVyh2EdlwULiAA&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/08/05/3/c/a/5/1628133182141_300.jpg"
      },
      {
        "key": "TVXIVGpuhAIK",
        "title": "Lỡ Duyên Vậy Thôi (LeeRit x HHD Remix)",
        "artists": [
          "Trần Minh Vũ",
          "Khả Huy"
        ],
        "duration": 248,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1019/LoDuyenVayThoiLeeritXHhdRemix-TranMinhVuKhaHuy-7061391.mp3?st=asux0-RO7s7oKQKCLm4f7Q&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/08/05/3/c/a/5/1628131095592_300.jpg"
      },
      {
        "key": "BIJHkIxtTR95",
        "title": "Chạm Nhẹ Đôi Môi (Kiên Dino x HHD Remix)",
        "artists": [
          "M-az"
        ],
        "duration": 294,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1020/ChamNheDoiMoiKienDinoXHhdRemix-Maz-7065573.mp3?st=gLG_Rb46lUIktA7xXjMgPQ&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/08/09/b/a/7/b/1628523420573_300.jpg"
      },
      {
        "key": "fqJN5jRGMDEe",
        "title": "Em Muốn Gì? (Cukak Remix)",
        "artists": [
          "BigP",
          "B.O.T"
        ],
        "duration": 203,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1020/EmMuonGiCukakRemix-BigPBOT-7069806.mp3?st=JgsVkD_SIh-fuaxfFD5O3g&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/08/19/2/a/f/0/1629361200839_300.jpg"
      },
      {
        "key": "fNF2c9brJQeu",
        "title": "Chợt Tỉnh Giấc (Official Remix)",
        "artists": [
          "RHYDER"
        ],
        "duration": 214,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1020/ChotTinhGiacOfficialRemix-QuangAnhRhyder-7068161.mp3?st=WSUtv80a0u7sgZI0I7hyYg&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/08/16/c/5/a/8/1629081809822_300.jpg"
      },
      {
        "key": "kAOG5sQR6BKN",
        "title": "Giấc Mơ Rất Thơ Remix",
        "artists": [
          "Mer",
          "thaison!"
        ],
        "duration": 177,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1020/GiacMoRatThoRemix-MerVietNamthaison-7068765.mp3?st=Zpgp5NbOi3AcLC9zgZflyg&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/08/17/b/d/3/4/1629194705854_300.jpg"
      },
      {
        "key": "pzZmBT3PiBVo",
        "title": "Em Có Yêu Như Ngày Hôm Qua (ChungQ x HHD Remix)",
        "artists": [
          "THI"
        ],
        "duration": 216,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1020/EmCoYeuNhuNgayHomQuaChungqXHhdRemix-THI-7069743.mp3?st=DDCd2O2zPqwwqukbl-ymKg&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/08/19/2/a/f/0/1629356661958_300.jpg"
      },
      {
        "key": "cMJhcnV3LtCl",
        "title": "Phù Dung (HeineKen x HHD Remix)",
        "artists": [
          "Jin Tuấn Nam",
          "Sin Thiện Tâm",
          "Ryo T"
        ],
        "duration": 288,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1020/PhuDungHeinekenXHhdRemix-JinTuanNamSinThienTamRyoT-7070184.mp3?st=xVExGWt3-OQ7g-pFDIyy8Q&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/08/20/f/c/f/e/1629442174363_300.jpg"
      },
      {
        "key": "iGYkyCgcDPyy",
        "title": "Tình Trần (ChungQ x HHD Remix)",
        "artists": [
          "Huy Diệc"
        ],
        "duration": 236,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1020/TinhTranChungqXHhdRemix-HuyDiec-7070215.mp3?st=ZcoTRiH0a1pQFxw_dbC94A&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/08/20/f/c/f/e/1629445694724_300.jpg"
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
        "key": "7voyzkQhxiU2",
        "title": "This Way (CM1X Remix)",
        "artists": [
          "CARA"
        ],
        "duration": 213,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1021/ThisWayCm1xRemix-CARA-7079354.mp3?st=Dzw7uq_l1y63VS1ycpVQeQ&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/08/31/0/d/9/9/1630395402935_300.jpg"
      },
      {
        "key": "p5LXXhDeBInv",
        "title": "Phải Nên Bắt Đầu Từ Đâu (Trung Ngon Remix)",
        "artists": [
          "Hoài Lâm"
        ],
        "duration": 251,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1022/PhaiNenBatDauTuDauTrungNgonRemix-HoaiLam-7091690.mp3?st=kAkrUvuWxffdU3RgemlspA&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/09/20/6/4/1/e/1632107491022_300.jpg"
      },
      {
        "key": "ROQ3gHAIGYwQ",
        "title": "12PM Remix",
        "artists": [
          "B'dory",
          "MeiA",
          "SIVIX"
        ],
        "duration": 189,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1021/12pmRemix-BdoryMeiA-7086791.mp3?st=p4UAValjp3oHTSmZHZNPYw&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/09/10/2/9/e/9/1631259066987_300.jpg"
      },
      {
        "key": "chFP1qWza8kC",
        "title": "Chỉ Xin Vài Giây (Mee Remix)",
        "artists": [
          "Hoàng Green"
        ],
        "duration": 383,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1023/ChiXinVaiGiayMeeRemix-HoangGreen-7102963.mp3?st=zNdKo957UnSQglOKXfj0Bw&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/10/08/a/2/d/b/1633684916101_300.jpg"
      },
      {
        "key": "cbDDHZVLqC1P",
        "title": "Buông Xuôi Hy Vọng (BP Bounce Remix)",
        "artists": [
          "Kalee Hoàng",
          "Thành Tar"
        ],
        "duration": 130,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1022/BuongXuoiHyVongBpBounceRemix-KaleeHoangThanhTar-7098054.mp3?st=TJ2ITpWNUvIf2r2_O6dGrA&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/09/29/e/5/3/b/1632903531483_300.jpg"
      },
      {
        "key": "qNQwt0mz4OtO",
        "title": "Còn Yêu Hãy Về Với Nhau (Liner Remix)",
        "artists": [
          "Kalee Hoàng",
          "Thành Tar"
        ],
        "duration": 269,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1022/ConYeuHayVeVoiNhauLinerRemix-KaleeHoangThanhTar-7098374.mp3?st=_-a3myH4NwJ85iaOhLKlXg&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/09/30/7/6/2/7/1632968399733_300.jpg"
      }
    ],
    "songs": [
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
        "key": "hfZBvO3miwB3",
        "title": "Em Đi Đâu (Cm1x Remix)",
        "artists": [
          "Machiot",
          "CM1X"
        ],
        "duration": 192,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui996/EmDiDauCm1xRemix-MachiotCM1X-6237588.mp3?st=s0cs503MaW6aRMrOx3GZwg&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2020/03/16/d/2/1/a/1584322940853_300.jpg"
      },
      {
        "key": "tvG3Cm2WqeNz",
        "title": "Là Khi Nào Ấy Nhờ (Hagii Remix)",
        "artists": [
          "Machiot",
          "Hagii"
        ],
        "duration": 286,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui996/LaKhiNaoAyNhoHagiiRemix-MachiotHagii-6237586.mp3?st=RWKor39roOiVgNGOJYFy0w&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2020/03/16/d/2/1/a/1584322730727_300.jpg"
      },
      {
        "key": "G63dFWGvV9jG",
        "title": "Một Thời Đã Sống (Teddy Doox Remix)",
        "artists": [
          "Yanbi",
          "2Can",
          "Teddy Doox"
        ],
        "duration": 255,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui997/MotThoiDaSongTeddyDooxRemix-Yanbi2CanTeddyDoox-6248467.mp3?st=WJfDk_lTlTmK6Ba6SQ2hQA&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2020/04/11/9/2/5/f/1586567328881_300.jpg"
      },
      {
        "key": "NxZwWPLaTGC9",
        "title": "Baby I'm Good (Beep Beep Child Remix)",
        "artists": [
          "Kim Chi Sun",
          "BeepBeepChild"
        ],
        "duration": 201,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui993/BabyImGoodBeepBeepChildRemix-KimChiSun-6182238.mp3?st=Mapjdf4UVu5l2lVRyz-gbA&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2019/12/26/e/d/9/c/1577330865497_300.jpg"
      },
      {
        "key": "NKierKyDqS8u",
        "title": "Là Khi Nào Ấy Nhờ (Teddy Doox Remix)",
        "artists": [
          "Teddy Doox"
        ],
        "duration": 191,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui999/LaKhiNaoAyNhoTeddyDooxRemix-TeddyDoox-6288660.mp3?st=OJXBQWP2oR8r3hS5L9p4Zg&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2020/06/02/4/d/4/6/1591063308225_300.jpg"
      },
      {
        "key": "otXUVQL1vir6",
        "title": "Nước Cờ Em Chọn (Ông Trùm Bùi Viện OST) (Remix Version)",
        "artists": [
          "Ưng Hoàng Phúc"
        ],
        "duration": 246,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1001/NuocCoEmChonRemixOngTrumBuiVienOst-UngHoangPhuc-6465926.mp3?st=nJIYcD2Sbv8qS8cHe3ctGg&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2020/08/10/3/0/c/b/1597056967818_300.jpg"
      },
      {
        "key": "hTOTcDR9r5d4",
        "title": "But Me Too (Maddi Remix)",
        "artists": [
          "Freaky",
          "Harose"
        ],
        "duration": 188,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1001/ButMeTooMaddiRemix-Freaky-6490067.mp3?st=DRqS-Z2AsHJgRjK3JoI6uQ&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2020/08/13/6/3/1/8/1597286831785_300.jpg"
      },
      {
        "key": "AvfuLL5F6mY2",
        "title": "Có Chắc Là Yêu Không? (EDM Remix)",
        "artists": [
          "NonHanTa"
        ],
        "duration": 248,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1003/CoChacLaYeuKhongEdmRemix-NonHanTa-6638572.mp3?st=hhYcJBtWHx_VYnoFvXrdww&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/singer/avatar/2019/07/19/2/3/b/1/1563509005550_300.jpg"
      },
      {
        "key": "4raHghdAKPdE",
        "title": "Thật Buồn Cho Đôi Ta (Truzg Remix)",
        "artists": [
          "Quang Chợ Lầm",
          "Minh Tường"
        ],
        "duration": 220,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1002/ThatBuonChoDoiTaTruzgRemix-QuangChoLamMinhTuong-6575020.mp3?st=w3Wo2mJ0XoV3839wERgV5Q&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2020/08/28/9/f/d/6/1598601326075_300.jpg"
      },
      {
        "key": "guyPQzhgFTjN",
        "title": "My Autumn (Ccats Remix)",
        "artists": [
          "Simple Tommy",
          "Long"
        ],
        "duration": 250,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1003/MyAutumnCcatsRemix-TommyTomLong-6637369.mp3?st=OmtaD6HDZ0KR287Ma0saJA&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2020/09/18/d/5/7/7/1600402355004_300.jpg"
      },
      {
        "key": "cZcyv4ezHMDS",
        "title": "Nhớ Về Em (Heineken Remix)",
        "artists": [
          "Quang Minh"
        ],
        "duration": 267,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1004/NhoVeEmHeinekenRemix-NguyenQuangMinh-6652265.mp3?st=AREYzBAbM5qZnpVVtw1LQA&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2020/09/22/8/6/c/e/1600748733813_300.jpg"
      },
      {
        "key": "K0J0bWOeThh7",
        "title": "Yêu Sâu Đậm Sẽ Mang Sai Lầm (HHD Remix)",
        "artists": [
          "Hiếu Adobe"
        ],
        "duration": 202,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1005/YeuSauDamSeMangSaiLamHhdRemix-HieuAdobe-6792486.mp3?st=rOHR_drPwLjO5AEVrV0CYQ&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2020/11/03/d/a/8/9/1604392983720_300.jpg"
      },
      {
        "key": "6uGzyGmRb2vF",
        "title": "CILU (Zang Remix)",
        "artists": [
          "JGKiD",
          "MPaKK"
        ],
        "duration": 213,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1009/CiluZangRemix-JGKiDDaLABMPaKKDaLAB-6892646.mp3?st=3rU_kXO41FqvChCB5aHiuQ&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2020/12/21/3/6/0/f/1608520366654_300.jpg"
      },
      {
        "key": "MMiVF9KaFgUf",
        "title": "LƠI (CM1X Remix)",
        "artists": [
          "Lytuevy",
          "Ngắn"
        ],
        "duration": 234,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1009/LoiCm1xRemix-LytuevyNgan-6893284.mp3?st=oM6o2Xp1M-yyN2FUDEhxug&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2020/12/22/d/0/d/1/1608623575968_300.jpg"
      },
      {
        "key": "6EOlfBkLHM1z",
        "title": "Những Ngày Sau Remix",
        "artists": [
          "Trí",
          "MyNhan"
        ],
        "duration": 186,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1009/NhungNgaySauRemix-TriMyNhan-6911909.mp3?st=TPrl_YKbfe6KZ5jfcSNzwQ&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/01/05/0/6/1/b/1609833343659_300.jpg"
      },
      {
        "key": "JLSHl1OSO3hN",
        "title": "Tốt Cho Cả Hai (Persi Remix)",
        "artists": [
          "Quang Chợ Lầm"
        ],
        "duration": 297,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1010/TotChoCaHaiPersiRemix-QuangChoLam-6916731.mp3?st=uZxbqp9c3G9x01vHcuN_Qg&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/01/13/b/d/d/4/1610510379722_300.jpg"
      },
      {
        "key": "iHV4sYIVsfHk",
        "title": "Cơn Mưa Qua (HeineKen Remix)",
        "artists": [
          "DMD Minh Duy"
        ],
        "duration": 276,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1010/ConMuaQuaHeinekenRemix-DMDMinhDuy-6931487.mp3?st=jSEIgO4EnwoImwrZ_vhCGg&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/02/01/d/0/3/0/1612156118286_300.jpg"
      },
      {
        "key": "2qp2g5kyOoUb",
        "title": "Sài Gòn Đau Lòng Quá (Mee Remix)",
        "artists": [
          "Hứa Kim Tuyền",
          "Hoàng Duyên"
        ],
        "duration": 334,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1024/SaiGonDauLongQuaMeeRemix-HuaKimTuyenHoangDuyen-7119300.mp3?st=XXJTB_TYyJc-sKxm6RPDRQ&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/10/29/0/8/0/c/1635478617511_300.jpg"
      },
      {
        "key": "gsQBDZjUg1Wn",
        "title": "Phận Duyên Lỡ Làng (Minh Khôn Remix )",
        "artists": [
          "Phát Huy T4",
          "Truzg"
        ],
        "duration": 191,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1014/PhanDuyenLoLangMinhKhonRemix-PhatHuyT4Trugz-7004542.mp3?st=gRFPcLSbsyEo2QlXYFhi9g&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/04/14/c/3/3/b/1618383612121_300.jpg"
      },
      {
        "key": "bUM7OaCnPrqU",
        "title": "Chơi Vơi (Hiphop Remix)",
        "artists": [
          "Feliks Alvin",
          "Allen"
        ],
        "duration": 240,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1014/ChoiVoiHiphopRemix-FeliksAllen-7006337.mp3?st=CL2JC5rIK-wvsbou6CMZGg&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/04/19/d/1/f/1/1618801656444_300.jpg"
      },
      {
        "key": "o7Qrzam9iLev",
        "title": "Ai Ngờ (Minh Khôn Remix)",
        "artists": [
          "Quang Chợ Lầm",
          "Mai Linh"
        ],
        "duration": 175,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1015/AiNgoMinhKhonRemix-QuangChoLamMaiLinh-7007839.mp3?st=VxggfMEN1FmETz1X0qctOQ&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/04/23/2/f/5/3/1619162486848_300.jpg"
      },
      {
        "key": "dFrkx3qydbny",
        "title": "Phận Duyên Lỡ Làng (Kaine x HHD Remix)",
        "artists": [
          "Phát Huy T4",
          "Truzg"
        ],
        "duration": 313,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1016/PhanDuyenLoLangKaineXHhdRemix-PhatHuyT4Truzg-7023455.mp3?st=9d9qd_X_xICnWcwkAh65cA&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/05/24/f/8/d/8/1621830605225_300.jpg"
      },
      {
        "key": "4uU07ONcCFmj",
        "title": "Ngày Mai Xa Rồi (Oriion x HHD Remix)",
        "artists": [
          "Bình Boo"
        ],
        "duration": 245,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1016/NgayMaiXaRoiOriionXHhdRemix-BinhBoo-7026376.mp3?st=aNvTcAjZQiZIO5hZ7L_BPA&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/05/29/2/f/2/4/1622301335643_300.jpg"
      },
      {
        "key": "SzUoxz0T9fQW",
        "title": "Đắm Say Rồi (Heineken X Hhd Remix)",
        "artists": [
          "Sùng Chẩn Páo"
        ],
        "duration": 313,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1016/DamSayRoiHeinekenXHhdRemix-SungChanPao-7030397.mp3?st=I31TEI1nNq7kZTVwdxkrPg&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/06/07/5/c/c/c/1623040406556_300.jpg"
      },
      {
        "key": "4oKhORg2jU5D",
        "title": "Ngỡ Được Yêu (Tiser x HHD Remix)",
        "artists": [
          "LinhTG"
        ],
        "duration": 291,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1017/NgoDuocYeuTiserXHhdRemix-LinhTG-7032458.mp3?st=CGOrFAH4BuM9l_MJZG6zPQ&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/06/15/0/f/0/b/1623722359905_300.jpg"
      },
      {
        "key": "4l1eFOCphnBm",
        "title": "Lụy Tình (Mus x HHD Remix)",
        "artists": [
          "TLong"
        ],
        "duration": 265,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1017/LuyTinhMusXHhdRemix-TLong-7036488.mp3?st=_pKZ4IvMrxMXcaCHzox91w&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/06/22/0/3/e/7/1624351430657_300.jpg"
      },
      {
        "key": "srcxdhfOQ47g",
        "title": "Răng Khôn (Cukak Remix)",
        "artists": [
          "Phí Phương Anh",
          "RIN9"
        ],
        "duration": 170,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1017/RangKhonCukakRemix-PhiPhuongAnhTheFaceRIN9-7040447.mp3?st=fqLDPq5k6d_lwnpao5kxrw&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/06/29/9/1/6/e/1624940282847_300.jpg"
      },
      {
        "key": "57PasPj5jrts",
        "title": "Đào Nương (LHK x HHD Remix)",
        "artists": [
          "Hoàng Vương"
        ],
        "duration": 224,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1017/DaoNuongLhkXHhdRemix-HoangVuong-7037336.mp3?st=HdfElpjSJEL2_XsrI94kFg&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/06/25/e/6/6/d/1624604695052_300.jpg"
      },
      {
        "key": "2xKZOHhVsyps",
        "title": "Em Là Dealer? (Minh Nhật & Lusic Remix)",
        "artists": [
          "Minh Nhật",
          "S.U.N"
        ],
        "duration": 210,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1018/EmLaDealerMinhNhatLusicRemix-MinhNhat-7047928.mp3?st=7tY3RXq2sPANF6BBpeElkg&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/07/13/d/1/2/3/1626166099790_300.jpg"
      },
      {
        "key": "gX9JWEExCdiv",
        "title": "Hiện Đại (Ciray Remix)",
        "artists": [
          "Khắc Việt"
        ],
        "duration": 271,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/Warner_Audio72/HienDaiCirayRemix-KhacViet-7051466.mp3?st=X1WTHkk_Hgl6t0iW35hWtQ&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/07/16/f/4/9/8/1626402031444_300.jpg"
      },
      {
        "key": "7ysVK2EO1rBZ",
        "title": "Nhánh Phong Lan (HeineKen x HHD Remix)",
        "artists": [
          "Lộc Kim Vân"
        ],
        "duration": 298,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1018/NhanhPhongLanHeinekenXHhdRemix-LocKimVan-7052271.mp3?st=joqiBZHD9f2SFo3g5R6aaQ&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/07/21/7/0/f/8/1626853305960_300.jpg"
      },
      {
        "key": "GFICy1vMYc4D",
        "title": "Có Anh Đây Rồi (Lssin x HHD Remix)",
        "artists": [
          "Namm",
          "Đứcc"
        ],
        "duration": 195,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1018/CoAnhDayRoiLssinXHhdRemix-NammDucc-7052961.mp3?st=pm8W14jNTSugpgbP_8DJDA&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/07/22/7/9/0/7/1626942044520_300.jpg"
      },
      {
        "key": "Sbu8db33IAng",
        "title": "Tiếng Tơ Lòng (HeineKen x HHD Remix)",
        "artists": [
          "H-Kray",
          "Truzg"
        ],
        "duration": 352,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1019/TiengToLongHeinekenXHhdRemix-HKrayTruzg-7056595.mp3?st=djmbhEdcng1zCL5p5IngKg&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/07/29/1/3/5/3/1627522611864_300.jpg"
      },
      {
        "key": "58jLlizdKXht",
        "title": "Một Người Tương Xứng (LHK x HHD Remix)",
        "artists": [
          "Quang Chợ Lầm"
        ],
        "duration": 291,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1019/MotNguoiTuongXungLhkXHhdRemix-QuangChoLam-7061409.mp3?st=FfMsHRP1PVyh2EdlwULiAA&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/08/05/3/c/a/5/1628133182141_300.jpg"
      },
      {
        "key": "TVXIVGpuhAIK",
        "title": "Lỡ Duyên Vậy Thôi (LeeRit x HHD Remix)",
        "artists": [
          "Trần Minh Vũ",
          "Khả Huy"
        ],
        "duration": 248,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1019/LoDuyenVayThoiLeeritXHhdRemix-TranMinhVuKhaHuy-7061391.mp3?st=asux0-RO7s7oKQKCLm4f7Q&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/08/05/3/c/a/5/1628131095592_300.jpg"
      },
      {
        "key": "BIJHkIxtTR95",
        "title": "Chạm Nhẹ Đôi Môi (Kiên Dino x HHD Remix)",
        "artists": [
          "M-az"
        ],
        "duration": 294,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1020/ChamNheDoiMoiKienDinoXHhdRemix-Maz-7065573.mp3?st=gLG_Rb46lUIktA7xXjMgPQ&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/08/09/b/a/7/b/1628523420573_300.jpg"
      },
      {
        "key": "fqJN5jRGMDEe",
        "title": "Em Muốn Gì? (Cukak Remix)",
        "artists": [
          "BigP",
          "B.O.T"
        ],
        "duration": 203,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1020/EmMuonGiCukakRemix-BigPBOT-7069806.mp3?st=JgsVkD_SIh-fuaxfFD5O3g&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/08/19/2/a/f/0/1629361200839_300.jpg"
      },
      {
        "key": "fNF2c9brJQeu",
        "title": "Chợt Tỉnh Giấc (Official Remix)",
        "artists": [
          "RHYDER"
        ],
        "duration": 214,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1020/ChotTinhGiacOfficialRemix-QuangAnhRhyder-7068161.mp3?st=WSUtv80a0u7sgZI0I7hyYg&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/08/16/c/5/a/8/1629081809822_300.jpg"
      },
      {
        "key": "kAOG5sQR6BKN",
        "title": "Giấc Mơ Rất Thơ Remix",
        "artists": [
          "Mer",
          "thaison!"
        ],
        "duration": 177,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1020/GiacMoRatThoRemix-MerVietNamthaison-7068765.mp3?st=Zpgp5NbOi3AcLC9zgZflyg&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/08/17/b/d/3/4/1629194705854_300.jpg"
      },
      {
        "key": "pzZmBT3PiBVo",
        "title": "Em Có Yêu Như Ngày Hôm Qua (ChungQ x HHD Remix)",
        "artists": [
          "THI"
        ],
        "duration": 216,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1020/EmCoYeuNhuNgayHomQuaChungqXHhdRemix-THI-7069743.mp3?st=DDCd2O2zPqwwqukbl-ymKg&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/08/19/2/a/f/0/1629356661958_300.jpg"
      },
      {
        "key": "cMJhcnV3LtCl",
        "title": "Phù Dung (HeineKen x HHD Remix)",
        "artists": [
          "Jin Tuấn Nam",
          "Sin Thiện Tâm",
          "Ryo T"
        ],
        "duration": 288,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1020/PhuDungHeinekenXHhdRemix-JinTuanNamSinThienTamRyoT-7070184.mp3?st=xVExGWt3-OQ7g-pFDIyy8Q&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/08/20/f/c/f/e/1629442174363_300.jpg"
      },
      {
        "key": "iGYkyCgcDPyy",
        "title": "Tình Trần (ChungQ x HHD Remix)",
        "artists": [
          "Huy Diệc"
        ],
        "duration": 236,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1020/TinhTranChungqXHhdRemix-HuyDiec-7070215.mp3?st=ZcoTRiH0a1pQFxw_dbC94A&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/08/20/f/c/f/e/1629445694724_300.jpg"
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
        "key": "7voyzkQhxiU2",
        "title": "This Way (CM1X Remix)",
        "artists": [
          "CARA"
        ],
        "duration": 213,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1021/ThisWayCm1xRemix-CARA-7079354.mp3?st=Dzw7uq_l1y63VS1ycpVQeQ&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/08/31/0/d/9/9/1630395402935_300.jpg"
      },
      {
        "key": "p5LXXhDeBInv",
        "title": "Phải Nên Bắt Đầu Từ Đâu (Trung Ngon Remix)",
        "artists": [
          "Hoài Lâm"
        ],
        "duration": 251,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1022/PhaiNenBatDauTuDauTrungNgonRemix-HoaiLam-7091690.mp3?st=kAkrUvuWxffdU3RgemlspA&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/09/20/6/4/1/e/1632107491022_300.jpg"
      },
      {
        "key": "ROQ3gHAIGYwQ",
        "title": "12PM Remix",
        "artists": [
          "B'dory",
          "MeiA",
          "SIVIX"
        ],
        "duration": 189,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1021/12pmRemix-BdoryMeiA-7086791.mp3?st=p4UAValjp3oHTSmZHZNPYw&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/09/10/2/9/e/9/1631259066987_300.jpg"
      },
      {
        "key": "chFP1qWza8kC",
        "title": "Chỉ Xin Vài Giây (Mee Remix)",
        "artists": [
          "Hoàng Green"
        ],
        "duration": 383,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1023/ChiXinVaiGiayMeeRemix-HoangGreen-7102963.mp3?st=zNdKo957UnSQglOKXfj0Bw&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/10/08/a/2/d/b/1633684916101_300.jpg"
      },
      {
        "key": "cbDDHZVLqC1P",
        "title": "Buông Xuôi Hy Vọng (BP Bounce Remix)",
        "artists": [
          "Kalee Hoàng",
          "Thành Tar"
        ],
        "duration": 130,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1022/BuongXuoiHyVongBpBounceRemix-KaleeHoangThanhTar-7098054.mp3?st=TJ2ITpWNUvIf2r2_O6dGrA&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/09/29/e/5/3/b/1632903531483_300.jpg"
      },
      {
        "key": "qNQwt0mz4OtO",
        "title": "Còn Yêu Hãy Về Với Nhau (Liner Remix)",
        "artists": [
          "Kalee Hoàng",
          "Thành Tar"
        ],
        "duration": 269,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1022/ConYeuHayVeVoiNhauLinerRemix-KaleeHoangThanhTar-7098374.mp3?st=_-a3myH4NwJ85iaOhLKlXg&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/09/30/7/6/2/7/1632968399733_300.jpg"
      }
    ]
  },
  {
    "id": "pub-2179519086",
    "name": "[SEP26] [2Q] Nhạc Vpop Sôi Động",
    "description": "Kho bài hát chính thức từ nhà phát hành ([SEP26] [2Q] Nhạc Vpop Sôi Động)",
    "songDetails": [
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
        "key": "P3u7zUnbAyF0",
        "title": "Từng Là Của Nhau",
        "artists": [
          "Bảo Anh",
          "Táo"
        ],
        "duration": 269,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2027/TungLaCuaNhau-BaoAnhTao-7818322.mp3?st=oKa_3GSYJZhfLqH3nklS3A&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2022/08/26/7/9/f/5/1661498805403_300.jpg"
      },
      {
        "key": "9JZCXfCOfx5c",
        "title": "I'm Not OK",
        "artists": [
          "Xuân Nghi",
          "CHARLES."
        ],
        "duration": 202,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/resa/2607/2a/37/u3sphyexaj.mp3?st=WLmko1rVf6x0oxl9NbYXDg&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2026/07/09/2/b/3/d/1783570767132_300.jpg"
      },
      {
        "key": "XVytLuB4Xs2D",
        "title": "Đến Đây Thôi",
        "artists": [
          "Xuân Nghi"
        ],
        "duration": 170,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/resa/2607/3a/11/z2qrw45fjt.mp3?st=HxmBt6pi5VtaJdt5njcyMg&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2026/07/13/e/f/c/c/1783926935987_300.jpg"
      },
      {
        "key": "lgynBDS55GM1",
        "title": "Ngay Và Luôn",
        "artists": [
          "UPRIZE"
        ],
        "duration": 167,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/resa/2607/09/bd/pj8zi54i8n.mp3?st=U4SbweWqYlonBoHpBdG9sQ&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2026/07/02/6/5/Q/e/1782963455858_300.jpg"
      },
      {
        "key": "fobqBN5fB9kU",
        "title": "Decision",
        "artists": [
          "Xuân Nghi"
        ],
        "duration": 224,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/resa/2606/12/36/ot7ygz5feo.mp3?st=2QEhklvwxetu0GbQ1n3u-w&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2026/06/26/c/4/1/7/1782457634138_300.jpg"
      },
      {
        "key": "aaXm8JVmyS87",
        "title": "Anh Đổ Rồi Đấy",
        "artists": [
          "(S)TRONG"
        ],
        "duration": 190,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui985/AnhDoRoiDay-TrongHieu-6010643.mp3?st=wuba-vEKfgkyGpdOr0m-1g&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2019/06/28/7/b/d/d/1561712185107_300.jpg"
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
      },
      {
        "key": "Z64ZfrCjszUF",
        "title": "Ta có nhau rồi",
        "artists": [
          "VDT",
          "Bảo Hân"
        ],
        "duration": 220,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2059/TaCoNhauRoi-VDTBaoHan-40974762.mp3?st=RcPEP1dqbjdyMEwVnK9n4Q&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2026/03/09/6/a/4/4/1773044653248_300.jpg"
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
        "key": "IIC7mzSmn6xl",
        "title": "Một Ngày Đẹp Nhất",
        "artists": [
          "Billis",
          "Soulient",
          "Catchellers",
          "KIMLONG"
        ],
        "duration": 198,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NCTSong/2412/ca/d2/687hircjuq.mp3?st=8fMvHOGDNro2o-ZSdv2xEg&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2024/12/19/1/f/1/d/1734604748698_300.jpg"
      },
      {
        "key": "KdSEcV3YJ9lp",
        "title": "Bfriend (bé iu của anh)",
        "artists": [
          "Hằng ssi",
          "Aries tis"
        ],
        "duration": 173,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2059/BfriendbeIuCuaAnh-HangssiAriestis-41056028.mp3?st=CaM_B7bav5Cr8YFGjrxXxA&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2026/03/16/7/c/1/b/1773647940796_300.jpg"
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
        "key": "rIueytaLeEkf",
        "title": "Its Burning Time",
        "artists": [
          "Soulient",
          "Catchellers",
          "Billis"
        ],
        "duration": 148,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2057/ItsBurningTime-SoulientCatchellers-16942395.mp3?st=-5oUvafYF-bkRXBt4blB7w&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2024/12/07/8/d/f/c/1733537340807_300.jpg"
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
        "key": "AgcGpiYE2Opv",
        "title": "Bất Chấp",
        "artists": [
          "WHEE!"
        ],
        "duration": 184,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2043/BatChap-WHEE-10314801.mp3?st=NVNr0HFAkQcs6dE6LCvUzg&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2023/07/28/a/f/0/d/1690530460303_300.jpg"
      },
      {
        "key": "ZHbDkwNthphi",
        "title": "Thanh Xuân Yêu Em",
        "artists": [
          "Sing"
        ],
        "duration": 211,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2058/ThanhXuanYeuEm-Sing-37035931.mp3?st=6-xvN08x6uudlg9YdwnKAQ&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2025/05/29/9/8/7/1/1748488301882_300.jpg"
      },
      {
        "key": "UrUYv25lYHoQ",
        "title": "TĂNG CA",
        "artists": [
          "Đạt Ozy",
          "PiaLinh"
        ],
        "duration": 196,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2057/TANGCA-DatOzyPiaLinh-16696557.mp3?st=4bBSbKn1v1B8gHAxxew3Ng&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2024/11/18/f/7/6/3/1731903184838_300.jpg"
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
        "key": "tFUh8uzkLsb9",
        "title": "Yêu Hay Sao Ngọt Ngào",
        "artists": [
          "Trúc Trúc"
        ],
        "duration": 241,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1021/YeuHaySaoNgotNgao-DangCapNhat-7079802.mp3?st=et43tIOhRgg-XG8knB17Sw&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/09/01/0/7/7/f/1630475219230_300.jpg"
      },
      {
        "key": "9s2MMlYwb3Ux",
        "title": "Hát với tôi",
        "artists": [
          "Pink Frog",
          "Hào",
          "Huy Đẹp Trai"
        ],
        "duration": 214,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2059/HatVoiToi-PinkFrogHaoHuyDepTrai-38690453.mp3?st=SywMkzI1Ha5TX2XY15wmmQ&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2025/09/23/d/3/0/5/1758616400255_300.jpg"
      },
      {
        "key": "te4qvzrQIcKz",
        "title": "Sau Hôm Nay",
        "artists": [
          "Nguyễn Hữu Kha"
        ],
        "duration": 241,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui996/SauHomNay-NguyenHuuKha-6237591.mp3?st=s_yluoDO-_FBuLjmOGD2Hw&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2020/03/16/d/2/1/a/1584323651349_300.jpg"
      },
      {
        "key": "Z0lB8gD4uORT",
        "title": "Trước Khi",
        "artists": [
          "Góp Thong Thả"
        ],
        "duration": 225,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2043/TruocKhi-GopThongTha-10648569.mp3?st=atzzHbqeh0oUL8cmvPbxSA&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2023/08/08/e/8/a/a/1691472389750_300.jpg"
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
        "key": "2b6tjPbaRCuX",
        "title": "Nắng cười",
        "artists": [
          "Namchan",
          "Tr.D"
        ],
        "duration": 180,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2058/NangCuoi-NamchanTrD-37028765.mp3?st=qSsOgbxL2lWxKUrZooShBw&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2025/05/28/b/7/d/b/1748426069764_300.jpg"
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
        "key": "RRmkoFH3hnyz",
        "title": "Em Như Nào Cũng Được",
        "artists": [
          "Ngô Lan Hương",
          "D CROWN"
        ],
        "duration": 246,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui995/EmNhuNaoCungDuoc-NgoLanHuongDcrownfly-6221812.mp3?st=zPEfw40FdGPDuyA4V_qsrQ&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2020/02/11/d/4/5/a/1581384257395_300.jpg"
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
        "key": "Wcp4HvfJSVNl",
        "title": "Chạm Tay Vào Điều Ước",
        "artists": [
          "Chuy Blue"
        ],
        "duration": 224,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2040/ChamTayVaoDieuUoc-ChuyBlue-9544876.mp3?st=oQCu1z-uTXppEgwkftpiow&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2023/05/23/0/1/e/d/1684841936127_300.jpg"
      },
      {
        "key": "wgpNJZxMdoMX",
        "title": "Cưới Đi",
        "artists": [
          "2T",
          "ChangC"
        ],
        "duration": 232,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1002/CuoiDi-2TChangC-6560962.mp3?st=ZHOmWaTLYnHdz_dgU_OABA&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2020/08/27/8/e/c/f/1598516178659_300.jpg"
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
        "key": "qiOTLNBzzLmd",
        "title": "Đợi Bàn",
        "artists": [
          "Xuân Nghi",
          "Phạm Quỳnh Anh",
          "Ngọc Thanh Tâm",
          "Kiều Anh",
          "Hoàng Yến Chibi"
        ],
        "duration": 198,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/resa/2607/56/e8/wc9d5d9z3d.mp3?st=rQUJfu9U3mTnsjtYVE_How&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2026/07/13/e/f/c/c/1783926951399_300.jpg"
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
        "key": "gFiiwJAIZ2IX",
        "title": "Cánh Cửa Diệu Kỳ",
        "artists": [
          "Hoàng Thùy Linh",
          "Hoàng Rob",
          "Khắc Hưng"
        ],
        "duration": 226,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2024/CanhCuaDieuKy1-HoangThuyLinhHoangRobKhacHung-6926789.mp3?st=V16llJfH-Pd7GErx6o1qDg&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/01/20/e/d/a/8/1611135122518_300.jpg"
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
        "key": "z4wyJlGPe0ey",
        "title": "Papurapapa (Tương Tư) (feat. Minsicko)",
        "artists": [
          "th?o",
          "Minsicko"
        ],
        "duration": 227,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2058/PapurapapaTuongTufeatMinsicko-thoMinsicko-35427528.mp3?st=GPPEc8o5tFW_35oyRGQf9w&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2025/02/13/5/f/e/3/1739423113428_300.jpg"
      },
      {
        "key": "pYS242rdOCNZ",
        "title": "gương kia ngự ở trên tường",
        "artists": [
          "MiiNa",
          "RIN9",
          "DREAMeR"
        ],
        "duration": 216,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2058/GuongKiaNguOTrenTuong-MiiNaDREAMeRRIN9DREAMeRVietNam-36456956.mp3?st=-nglMmkw1Tr9bpCrmMVyrw&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2025/04/08/5/2/0/0/1744098936304_300.jpg"
      },
      {
        "key": "Rj5mkaMoR6Df",
        "title": "Vấn Vương",
        "artists": [
          "buitruonglinh"
        ],
        "duration": 174,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2058/VanVuong-buitruonglinh-36582521.mp3?st=xry4bXer3Mk3hHuMKDYpvA&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2025/04/16/b/b/0/4/1744790764751_300.jpg"
      },
      {
        "key": "mm1z2UUAd3cP",
        "title": "Dù Em Từng Yêu",
        "artists": [
          "buitruonglinh"
        ],
        "duration": 194,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2057/DuEmTungYeu-buitruonglinh-16952751.mp3?st=AohgMp0mgaVamtdv46ihJg&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2024/12/09/e/c/4/1/1733730736531_300.jpg"
      },
      {
        "key": "R16wa5asI3C3",
        "title": "Anh Đầu Hàng Thôi",
        "artists": [
          "Lil Zpoet"
        ],
        "duration": 181,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2051/AnhDauHangThoi-LilZpoet-13594648.mp3?st=r_CJKEh8ajW4GyhiBPbeNw&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2024/01/30/7/7/2/a/1706617927239_300.jpg"
      }
    ],
    "songs": [
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
        "key": "P3u7zUnbAyF0",
        "title": "Từng Là Của Nhau",
        "artists": [
          "Bảo Anh",
          "Táo"
        ],
        "duration": 269,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2027/TungLaCuaNhau-BaoAnhTao-7818322.mp3?st=oKa_3GSYJZhfLqH3nklS3A&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2022/08/26/7/9/f/5/1661498805403_300.jpg"
      },
      {
        "key": "9JZCXfCOfx5c",
        "title": "I'm Not OK",
        "artists": [
          "Xuân Nghi",
          "CHARLES."
        ],
        "duration": 202,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/resa/2607/2a/37/u3sphyexaj.mp3?st=WLmko1rVf6x0oxl9NbYXDg&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2026/07/09/2/b/3/d/1783570767132_300.jpg"
      },
      {
        "key": "XVytLuB4Xs2D",
        "title": "Đến Đây Thôi",
        "artists": [
          "Xuân Nghi"
        ],
        "duration": 170,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/resa/2607/3a/11/z2qrw45fjt.mp3?st=HxmBt6pi5VtaJdt5njcyMg&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2026/07/13/e/f/c/c/1783926935987_300.jpg"
      },
      {
        "key": "lgynBDS55GM1",
        "title": "Ngay Và Luôn",
        "artists": [
          "UPRIZE"
        ],
        "duration": 167,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/resa/2607/09/bd/pj8zi54i8n.mp3?st=U4SbweWqYlonBoHpBdG9sQ&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2026/07/02/6/5/Q/e/1782963455858_300.jpg"
      },
      {
        "key": "fobqBN5fB9kU",
        "title": "Decision",
        "artists": [
          "Xuân Nghi"
        ],
        "duration": 224,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/resa/2606/12/36/ot7ygz5feo.mp3?st=2QEhklvwxetu0GbQ1n3u-w&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2026/06/26/c/4/1/7/1782457634138_300.jpg"
      },
      {
        "key": "aaXm8JVmyS87",
        "title": "Anh Đổ Rồi Đấy",
        "artists": [
          "(S)TRONG"
        ],
        "duration": 190,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui985/AnhDoRoiDay-TrongHieu-6010643.mp3?st=wuba-vEKfgkyGpdOr0m-1g&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2019/06/28/7/b/d/d/1561712185107_300.jpg"
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
      },
      {
        "key": "Z64ZfrCjszUF",
        "title": "Ta có nhau rồi",
        "artists": [
          "VDT",
          "Bảo Hân"
        ],
        "duration": 220,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2059/TaCoNhauRoi-VDTBaoHan-40974762.mp3?st=RcPEP1dqbjdyMEwVnK9n4Q&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2026/03/09/6/a/4/4/1773044653248_300.jpg"
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
        "key": "IIC7mzSmn6xl",
        "title": "Một Ngày Đẹp Nhất",
        "artists": [
          "Billis",
          "Soulient",
          "Catchellers",
          "KIMLONG"
        ],
        "duration": 198,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NCTSong/2412/ca/d2/687hircjuq.mp3?st=8fMvHOGDNro2o-ZSdv2xEg&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2024/12/19/1/f/1/d/1734604748698_300.jpg"
      },
      {
        "key": "KdSEcV3YJ9lp",
        "title": "Bfriend (bé iu của anh)",
        "artists": [
          "Hằng ssi",
          "Aries tis"
        ],
        "duration": 173,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2059/BfriendbeIuCuaAnh-HangssiAriestis-41056028.mp3?st=CaM_B7bav5Cr8YFGjrxXxA&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2026/03/16/7/c/1/b/1773647940796_300.jpg"
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
        "key": "rIueytaLeEkf",
        "title": "Its Burning Time",
        "artists": [
          "Soulient",
          "Catchellers",
          "Billis"
        ],
        "duration": 148,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2057/ItsBurningTime-SoulientCatchellers-16942395.mp3?st=-5oUvafYF-bkRXBt4blB7w&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2024/12/07/8/d/f/c/1733537340807_300.jpg"
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
        "key": "AgcGpiYE2Opv",
        "title": "Bất Chấp",
        "artists": [
          "WHEE!"
        ],
        "duration": 184,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2043/BatChap-WHEE-10314801.mp3?st=NVNr0HFAkQcs6dE6LCvUzg&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2023/07/28/a/f/0/d/1690530460303_300.jpg"
      },
      {
        "key": "ZHbDkwNthphi",
        "title": "Thanh Xuân Yêu Em",
        "artists": [
          "Sing"
        ],
        "duration": 211,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2058/ThanhXuanYeuEm-Sing-37035931.mp3?st=6-xvN08x6uudlg9YdwnKAQ&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2025/05/29/9/8/7/1/1748488301882_300.jpg"
      },
      {
        "key": "UrUYv25lYHoQ",
        "title": "TĂNG CA",
        "artists": [
          "Đạt Ozy",
          "PiaLinh"
        ],
        "duration": 196,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2057/TANGCA-DatOzyPiaLinh-16696557.mp3?st=4bBSbKn1v1B8gHAxxew3Ng&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2024/11/18/f/7/6/3/1731903184838_300.jpg"
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
        "key": "tFUh8uzkLsb9",
        "title": "Yêu Hay Sao Ngọt Ngào",
        "artists": [
          "Trúc Trúc"
        ],
        "duration": 241,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1021/YeuHaySaoNgotNgao-DangCapNhat-7079802.mp3?st=et43tIOhRgg-XG8knB17Sw&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/09/01/0/7/7/f/1630475219230_300.jpg"
      },
      {
        "key": "9s2MMlYwb3Ux",
        "title": "Hát với tôi",
        "artists": [
          "Pink Frog",
          "Hào",
          "Huy Đẹp Trai"
        ],
        "duration": 214,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2059/HatVoiToi-PinkFrogHaoHuyDepTrai-38690453.mp3?st=SywMkzI1Ha5TX2XY15wmmQ&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2025/09/23/d/3/0/5/1758616400255_300.jpg"
      },
      {
        "key": "te4qvzrQIcKz",
        "title": "Sau Hôm Nay",
        "artists": [
          "Nguyễn Hữu Kha"
        ],
        "duration": 241,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui996/SauHomNay-NguyenHuuKha-6237591.mp3?st=s_yluoDO-_FBuLjmOGD2Hw&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2020/03/16/d/2/1/a/1584323651349_300.jpg"
      },
      {
        "key": "Z0lB8gD4uORT",
        "title": "Trước Khi",
        "artists": [
          "Góp Thong Thả"
        ],
        "duration": 225,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2043/TruocKhi-GopThongTha-10648569.mp3?st=atzzHbqeh0oUL8cmvPbxSA&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2023/08/08/e/8/a/a/1691472389750_300.jpg"
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
        "key": "2b6tjPbaRCuX",
        "title": "Nắng cười",
        "artists": [
          "Namchan",
          "Tr.D"
        ],
        "duration": 180,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2058/NangCuoi-NamchanTrD-37028765.mp3?st=qSsOgbxL2lWxKUrZooShBw&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2025/05/28/b/7/d/b/1748426069764_300.jpg"
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
        "key": "RRmkoFH3hnyz",
        "title": "Em Như Nào Cũng Được",
        "artists": [
          "Ngô Lan Hương",
          "D CROWN"
        ],
        "duration": 246,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui995/EmNhuNaoCungDuoc-NgoLanHuongDcrownfly-6221812.mp3?st=zPEfw40FdGPDuyA4V_qsrQ&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2020/02/11/d/4/5/a/1581384257395_300.jpg"
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
        "key": "Wcp4HvfJSVNl",
        "title": "Chạm Tay Vào Điều Ước",
        "artists": [
          "Chuy Blue"
        ],
        "duration": 224,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2040/ChamTayVaoDieuUoc-ChuyBlue-9544876.mp3?st=oQCu1z-uTXppEgwkftpiow&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2023/05/23/0/1/e/d/1684841936127_300.jpg"
      },
      {
        "key": "wgpNJZxMdoMX",
        "title": "Cưới Đi",
        "artists": [
          "2T",
          "ChangC"
        ],
        "duration": 232,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui1002/CuoiDi-2TChangC-6560962.mp3?st=ZHOmWaTLYnHdz_dgU_OABA&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2020/08/27/8/e/c/f/1598516178659_300.jpg"
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
        "key": "qiOTLNBzzLmd",
        "title": "Đợi Bàn",
        "artists": [
          "Xuân Nghi",
          "Phạm Quỳnh Anh",
          "Ngọc Thanh Tâm",
          "Kiều Anh",
          "Hoàng Yến Chibi"
        ],
        "duration": 198,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/resa/2607/56/e8/wc9d5d9z3d.mp3?st=rQUJfu9U3mTnsjtYVE_How&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2026/07/13/e/f/c/c/1783926951399_300.jpg"
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
        "key": "gFiiwJAIZ2IX",
        "title": "Cánh Cửa Diệu Kỳ",
        "artists": [
          "Hoàng Thùy Linh",
          "Hoàng Rob",
          "Khắc Hưng"
        ],
        "duration": 226,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2024/CanhCuaDieuKy1-HoangThuyLinhHoangRobKhacHung-6926789.mp3?st=V16llJfH-Pd7GErx6o1qDg&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2021/01/20/e/d/a/8/1611135122518_300.jpg"
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
        "key": "z4wyJlGPe0ey",
        "title": "Papurapapa (Tương Tư) (feat. Minsicko)",
        "artists": [
          "th?o",
          "Minsicko"
        ],
        "duration": 227,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2058/PapurapapaTuongTufeatMinsicko-thoMinsicko-35427528.mp3?st=GPPEc8o5tFW_35oyRGQf9w&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2025/02/13/5/f/e/3/1739423113428_300.jpg"
      },
      {
        "key": "pYS242rdOCNZ",
        "title": "gương kia ngự ở trên tường",
        "artists": [
          "MiiNa",
          "RIN9",
          "DREAMeR"
        ],
        "duration": 216,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2058/GuongKiaNguOTrenTuong-MiiNaDREAMeRRIN9DREAMeRVietNam-36456956.mp3?st=-nglMmkw1Tr9bpCrmMVyrw&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2025/04/08/5/2/0/0/1744098936304_300.jpg"
      },
      {
        "key": "Rj5mkaMoR6Df",
        "title": "Vấn Vương",
        "artists": [
          "buitruonglinh"
        ],
        "duration": 174,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2058/VanVuong-buitruonglinh-36582521.mp3?st=xry4bXer3Mk3hHuMKDYpvA&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2025/04/16/b/b/0/4/1744790764751_300.jpg"
      },
      {
        "key": "mm1z2UUAd3cP",
        "title": "Dù Em Từng Yêu",
        "artists": [
          "buitruonglinh"
        ],
        "duration": 194,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2057/DuEmTungYeu-buitruonglinh-16952751.mp3?st=AohgMp0mgaVamtdv46ihJg&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2024/12/09/e/c/4/1/1733730736531_300.jpg"
      },
      {
        "key": "R16wa5asI3C3",
        "title": "Anh Đầu Hàng Thôi",
        "artists": [
          "Lil Zpoet"
        ],
        "duration": 181,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/NhacCuaTui2051/AnhDauHangThoi-LilZpoet-13594648.mp3?st=r_CJKEh8ajW4GyhiBPbeNw&e=1794568319&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2024/01/30/7/7/2/a/1706617927239_300.jpg"
      }
    ]
  },
  {
    "id": "pub-6334250751",
    "name": "TINH HÀ \"SAY HI\"",
    "description": "Kho bài hát chính thức từ nhà phát hành (TINH HÀ \"SAY HI\")",
    "songDetails": [
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
      },
      {
        "key": "1a45uWg71oJ3",
        "title": "người trên dây",
        "artists": [
          "TINH HÀ \"SAY HI\"",
          "Dương Domic",
          "Thể Thiên",
          "VƯƠNG BÌNH",
          "JSOL"
        ],
        "duration": 215,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/resa/2608/0f/fc/htnirw8tsr.mp3?st=tkiIQfoez_PILRXhzUdGFA&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2026/08/14/t/8/e/K/1786702328021_300.jpg"
      },
      {
        "key": "9A9stEtxttHb",
        "title": "happy! (outro)",
        "artists": [
          "TINH HÀ \"SAY HI\"",
          "Dương Domic"
        ],
        "duration": 110,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/resa/2608/50/f7/z2m4l1cxse.mp3?st=55sxyD4klKlYuCKMOF463w&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2026/08/14/t/8/e/K/1786702328021_300.jpg"
      },
      {
        "key": "8elgx6gQAz7U",
        "title": "RUN TO YOU (feat. Ali Hoàng Dương, Song Luân, IVAN & KIMLONG)",
        "artists": [
          "TINH HÀ \"SAY HI\"",
          "Ali Hoàng Dương",
          "Song Luân",
          "IVAN",
          "KIMLONG"
        ],
        "duration": 275,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/resa/2608/61/3e/qpecy9d930.mp3?st=p1YWVRC7yG2OksDPownWcA&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2026/08/07/B/9/p/M/1786092367635_300.jpg"
      },
      {
        "key": "iNBq9o6BVX1Q",
        "title": "ĐI DẠO (INTERLUDE)",
        "artists": [
          "TINH HÀ \"SAY HI\"",
          "Wren Evans"
        ],
        "duration": 20,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/resa/2608/23/4f/bqqk2rhi48.mp3?st=icn0Rdkk315SL5W1zqkuSg&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2026/08/07/B/9/p/M/1786092367635_300.jpg"
      },
      {
        "key": "angpyBCuxkfu",
        "title": "MRT (feat. Xuân Định K.Y, buitruonglinh, CAPTAIN BOY & HYO)",
        "artists": [
          "TINH HÀ \"SAY HI\"",
          "Xuân Định K.Y",
          "buitruonglinh",
          "CAPTAIN BOY",
          "HYO"
        ],
        "duration": 331,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/resa/2608/27/2b/lrt1fwvb5z.mp3?st=2zSeobVsVrgp3tOiCmg1Ng&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2026/08/07/B/9/p/M/1786092367635_300.jpg"
      },
      {
        "key": "jAR5f5XalPCF",
        "title": "NÓI EM NGHE...(INTERLUDE)",
        "artists": [
          "TINH HÀ \"SAY HI\"",
          "Wren Evans"
        ],
        "duration": 55,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/resa/2608/3a/40/lixfezgif8.mp3?st=fJ4LwLNkmvt5KoStOeCAhA&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2026/08/07/B/9/p/M/1786092367635_300.jpg"
      },
      {
        "key": "g7NJxyCLLTR6",
        "title": "SECRET (feat. Quang Hùng MasterD, CODYNAMVO, CONGB & Wren Evans)",
        "artists": [
          "TINH HÀ \"SAY HI\"",
          "Quang Hùng MasterD",
          "CODYNAMVO",
          "CONGB",
          "Wren Evans"
        ],
        "duration": 280,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/resa/2608/e7/bf/z92i5eyt1b.mp3?st=spKKjBmZw2wp_vTzBF6kfA&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2026/08/07/B/9/p/M/1786092367635_300.jpg"
      },
      {
        "key": "avwHPYGbc1Sv",
        "title": "CỦA ANH (OUTRO)",
        "artists": [
          "TINH HÀ \"SAY HI\"",
          "Wren Evans"
        ],
        "duration": 55,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/resa/2608/13/80/zepv781pwt.mp3?st=z27ljjzckWt_SJqJke46FQ&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2026/08/07/B/9/p/M/1786092367635_300.jpg"
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
        "key": "WBksxom1P0Lm",
        "title": "MỘNG DUYÊN",
        "artists": [
          "TINH HÀ \"SAY HI\"",
          "Quang Hùng MasterD",
          "Song Luân",
          "JSOL",
          "Sơn.K",
          "Emil Vergo"
        ],
        "duration": 288,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/resa/2607/3b/5c/8v33u0o6x3.mp3?st=aGWvpL7FHamXF0aZ4pjymQ&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2026/07/24/V/2/2/4/1784877877927_300.jpg"
      },
      {
        "key": "cOztSq7WhQmT",
        "title": "MẤT LA BÀN",
        "artists": [
          "TINH HÀ \"SAY HI\"",
          "Pháp Kiều",
          "Thể Thiên",
          "Đặng Hồng Hải",
          "VƯƠNG BÌNH",
          "TorySax"
        ],
        "duration": 244,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/resa/2607/34/77/kcw3xondxp.mp3?st=z5dL4mGc4LOVXXVbp1LK_g&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2026/07/24/V/2/2/4/1784877877927_300.jpg"
      },
      {
        "key": "tvDTOCZAUcvb",
        "title": "CÓ GÌ ĐÂU MÀ CAY",
        "artists": [
          "TINH HÀ \"SAY HI\"",
          "CAPTAIN BOY",
          "CoolKid",
          "IVAN",
          "Xuân Định K.Y",
          "leonsash"
        ],
        "duration": 288,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/resa/2607/6f/12/smvquq0n4q.mp3?st=XSt7V9eDKhXV_gwvdJMHug&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2026/07/24/V/2/2/4/1784877877927_300.jpg"
      },
      {
        "key": "OMuofaJl8iL4",
        "title": "THẾ GIỚI CỦA ANH",
        "artists": [
          "TINH HÀ \"SAY HI\"",
          "Dương Domic",
          "WEAN",
          "CONGB",
          "buitruonglinh",
          "Van Toan"
        ],
        "duration": 257,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/resa/2607/b2/82/voy1ne1jjl.mp3?st=AiYq5zKi_k53xWozON0FqQ&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2026/07/24/V/2/2/4/1784877877927_300.jpg"
      },
      {
        "key": "hcIGyvMliDh9",
        "title": "GENTLEMAN",
        "artists": [
          "TINH HÀ \"SAY HI\"",
          "KIMLONG",
          "HURRYKNG",
          "Jaysonlei",
          "DILLAN",
          "Kobe Thuy Trio",
          "Pierre Renaud",
          "Misha Krasnopolsky"
        ],
        "duration": 262,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/resa/2607/5d/c8/jqmgnktdb9.mp3?st=BNeXZgyWLH0Sj7aS2cJxMw&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2026/07/24/V/2/2/4/1784877877927_300.jpg"
      },
      {
        "key": "q4bHsqfsR8bp",
        "title": "50 CUỘC GỌI NHỠ",
        "artists": [
          "TINH HÀ \"SAY HI\"",
          "CoolKid",
          "Quang Hùng MasterD",
          "Jaysonlei",
          "CODYNAMVO"
        ],
        "duration": 240,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/resa/2607/8b/6e/ts3nsuthi9.mp3?st=GlDBabJySo60TIFZAQamLw&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2026/07/10/6/g/w/v/1783666342729_300.jpg"
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
        "key": "N4mj3v5s9vg0",
        "title": "XOAY VÒNG",
        "artists": [
          "TINH HÀ \"SAY HI\"",
          "HURRYKNG",
          "CONGB",
          "JSOL",
          "VƯƠNG BÌNH",
          "KADO (Việt Nam)",
          "Reeze",
          "Hoa Xuân Đức"
        ],
        "duration": 205,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/resa/2607/e8/1a/5nymfjts9z.mp3?st=ejwpt4wGErIUHkyG-JjIOg&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2026/07/10/6/g/w/v/1783666342729_300.jpg"
      },
      {
        "key": "RkLxj9aLU0FD",
        "title": "DANCIN' MY WAY",
        "artists": [
          "TINH HÀ \"SAY HI\"",
          "buitruonglinh",
          "Sơn.K",
          "HYO",
          "Song Luân"
        ],
        "duration": 244,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/resa/2607/35/44/0g63j27s9w.mp3?st=VVZk03H1Sn4Sd5kOslyZWQ&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
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
        "key": "8midsCPVi5RD",
        "title": "BAD NIGHT",
        "artists": [
          "TINH HÀ \"SAY HI\"",
          "Dương Domic",
          "Pháp Kiều",
          "Đặng Hồng Hải",
          "Ali Hoàng Dương"
        ],
        "duration": 233,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/resa/2607/e4/b7/h8l93x8mtn.mp3?st=r7_KCT7MQrIktMzmiQjViA&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2026/07/10/6/g/w/v/1783666342729_300.jpg"
      },
      {
        "key": "VtFikTfhGn51",
        "title": "TOGETHER WE SHINE",
        "artists": [
          "TINH HÀ \"SAY HI\"",
          "Dương Domic",
          "Pháp Kiều",
          "JSOL",
          "buitruonglinh",
          "Sơn.K",
          "CONGB",
          "VƯƠNG BÌNH",
          "Đặng Hồng Hải",
          "IVAN",
          "HURRYKNG",
          "Song Luân",
          "CODYNAMVO",
          "CoolKid",
          "Jaysonlei",
          "HYO",
          "Thể Thiên",
          "Wren Evans",
          "KIMLONG",
          "CAPTAIN BOY",
          "WEAN",
          "Xuân Định K.Y",
          "Quang Hùng MasterD",
          "DILLAN",
          "Ali Hoàng Dương"
        ],
        "duration": 316,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/resa/2607/ed/14/o66j2p71a9.mp3?st=J9yhVRCcr4HCSLyHXwhchQ&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2026/07/06/h/8/e/9/1783310563751_300.jpg"
      },
      {
        "key": "tAzBgwy2Wksm",
        "title": "Spell Me (H-A-I)",
        "artists": [
          "TINH HÀ \"SAY HI\"",
          "Đặng Hồng Hải"
        ],
        "duration": 51,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/resa/2607/64/2a/gvxcb2rlgu.mp3?st=oD91YQyfcFoaGSOfhGrGvQ&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2026/07/03/N/r/H/F/1783055716431_300.jpg"
      }
    ],
    "songs": [
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
      },
      {
        "key": "1a45uWg71oJ3",
        "title": "người trên dây",
        "artists": [
          "TINH HÀ \"SAY HI\"",
          "Dương Domic",
          "Thể Thiên",
          "VƯƠNG BÌNH",
          "JSOL"
        ],
        "duration": 215,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/resa/2608/0f/fc/htnirw8tsr.mp3?st=tkiIQfoez_PILRXhzUdGFA&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2026/08/14/t/8/e/K/1786702328021_300.jpg"
      },
      {
        "key": "9A9stEtxttHb",
        "title": "happy! (outro)",
        "artists": [
          "TINH HÀ \"SAY HI\"",
          "Dương Domic"
        ],
        "duration": 110,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/resa/2608/50/f7/z2m4l1cxse.mp3?st=55sxyD4klKlYuCKMOF463w&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2026/08/14/t/8/e/K/1786702328021_300.jpg"
      },
      {
        "key": "8elgx6gQAz7U",
        "title": "RUN TO YOU (feat. Ali Hoàng Dương, Song Luân, IVAN & KIMLONG)",
        "artists": [
          "TINH HÀ \"SAY HI\"",
          "Ali Hoàng Dương",
          "Song Luân",
          "IVAN",
          "KIMLONG"
        ],
        "duration": 275,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/resa/2608/61/3e/qpecy9d930.mp3?st=p1YWVRC7yG2OksDPownWcA&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2026/08/07/B/9/p/M/1786092367635_300.jpg"
      },
      {
        "key": "iNBq9o6BVX1Q",
        "title": "ĐI DẠO (INTERLUDE)",
        "artists": [
          "TINH HÀ \"SAY HI\"",
          "Wren Evans"
        ],
        "duration": 20,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/resa/2608/23/4f/bqqk2rhi48.mp3?st=icn0Rdkk315SL5W1zqkuSg&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2026/08/07/B/9/p/M/1786092367635_300.jpg"
      },
      {
        "key": "angpyBCuxkfu",
        "title": "MRT (feat. Xuân Định K.Y, buitruonglinh, CAPTAIN BOY & HYO)",
        "artists": [
          "TINH HÀ \"SAY HI\"",
          "Xuân Định K.Y",
          "buitruonglinh",
          "CAPTAIN BOY",
          "HYO"
        ],
        "duration": 331,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/resa/2608/27/2b/lrt1fwvb5z.mp3?st=2zSeobVsVrgp3tOiCmg1Ng&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2026/08/07/B/9/p/M/1786092367635_300.jpg"
      },
      {
        "key": "jAR5f5XalPCF",
        "title": "NÓI EM NGHE...(INTERLUDE)",
        "artists": [
          "TINH HÀ \"SAY HI\"",
          "Wren Evans"
        ],
        "duration": 55,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/resa/2608/3a/40/lixfezgif8.mp3?st=fJ4LwLNkmvt5KoStOeCAhA&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2026/08/07/B/9/p/M/1786092367635_300.jpg"
      },
      {
        "key": "g7NJxyCLLTR6",
        "title": "SECRET (feat. Quang Hùng MasterD, CODYNAMVO, CONGB & Wren Evans)",
        "artists": [
          "TINH HÀ \"SAY HI\"",
          "Quang Hùng MasterD",
          "CODYNAMVO",
          "CONGB",
          "Wren Evans"
        ],
        "duration": 280,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/resa/2608/e7/bf/z92i5eyt1b.mp3?st=spKKjBmZw2wp_vTzBF6kfA&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2026/08/07/B/9/p/M/1786092367635_300.jpg"
      },
      {
        "key": "avwHPYGbc1Sv",
        "title": "CỦA ANH (OUTRO)",
        "artists": [
          "TINH HÀ \"SAY HI\"",
          "Wren Evans"
        ],
        "duration": 55,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/resa/2608/13/80/zepv781pwt.mp3?st=z27ljjzckWt_SJqJke46FQ&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2026/08/07/B/9/p/M/1786092367635_300.jpg"
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
        "key": "WBksxom1P0Lm",
        "title": "MỘNG DUYÊN",
        "artists": [
          "TINH HÀ \"SAY HI\"",
          "Quang Hùng MasterD",
          "Song Luân",
          "JSOL",
          "Sơn.K",
          "Emil Vergo"
        ],
        "duration": 288,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/resa/2607/3b/5c/8v33u0o6x3.mp3?st=aGWvpL7FHamXF0aZ4pjymQ&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2026/07/24/V/2/2/4/1784877877927_300.jpg"
      },
      {
        "key": "cOztSq7WhQmT",
        "title": "MẤT LA BÀN",
        "artists": [
          "TINH HÀ \"SAY HI\"",
          "Pháp Kiều",
          "Thể Thiên",
          "Đặng Hồng Hải",
          "VƯƠNG BÌNH",
          "TorySax"
        ],
        "duration": 244,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/resa/2607/34/77/kcw3xondxp.mp3?st=z5dL4mGc4LOVXXVbp1LK_g&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2026/07/24/V/2/2/4/1784877877927_300.jpg"
      },
      {
        "key": "tvDTOCZAUcvb",
        "title": "CÓ GÌ ĐÂU MÀ CAY",
        "artists": [
          "TINH HÀ \"SAY HI\"",
          "CAPTAIN BOY",
          "CoolKid",
          "IVAN",
          "Xuân Định K.Y",
          "leonsash"
        ],
        "duration": 288,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/resa/2607/6f/12/smvquq0n4q.mp3?st=XSt7V9eDKhXV_gwvdJMHug&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2026/07/24/V/2/2/4/1784877877927_300.jpg"
      },
      {
        "key": "OMuofaJl8iL4",
        "title": "THẾ GIỚI CỦA ANH",
        "artists": [
          "TINH HÀ \"SAY HI\"",
          "Dương Domic",
          "WEAN",
          "CONGB",
          "buitruonglinh",
          "Van Toan"
        ],
        "duration": 257,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/resa/2607/b2/82/voy1ne1jjl.mp3?st=AiYq5zKi_k53xWozON0FqQ&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2026/07/24/V/2/2/4/1784877877927_300.jpg"
      },
      {
        "key": "hcIGyvMliDh9",
        "title": "GENTLEMAN",
        "artists": [
          "TINH HÀ \"SAY HI\"",
          "KIMLONG",
          "HURRYKNG",
          "Jaysonlei",
          "DILLAN",
          "Kobe Thuy Trio",
          "Pierre Renaud",
          "Misha Krasnopolsky"
        ],
        "duration": 262,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/resa/2607/5d/c8/jqmgnktdb9.mp3?st=BNeXZgyWLH0Sj7aS2cJxMw&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2026/07/24/V/2/2/4/1784877877927_300.jpg"
      },
      {
        "key": "q4bHsqfsR8bp",
        "title": "50 CUỘC GỌI NHỠ",
        "artists": [
          "TINH HÀ \"SAY HI\"",
          "CoolKid",
          "Quang Hùng MasterD",
          "Jaysonlei",
          "CODYNAMVO"
        ],
        "duration": 240,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/resa/2607/8b/6e/ts3nsuthi9.mp3?st=GlDBabJySo60TIFZAQamLw&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2026/07/10/6/g/w/v/1783666342729_300.jpg"
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
        "key": "N4mj3v5s9vg0",
        "title": "XOAY VÒNG",
        "artists": [
          "TINH HÀ \"SAY HI\"",
          "HURRYKNG",
          "CONGB",
          "JSOL",
          "VƯƠNG BÌNH",
          "KADO (Việt Nam)",
          "Reeze",
          "Hoa Xuân Đức"
        ],
        "duration": 205,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/resa/2607/e8/1a/5nymfjts9z.mp3?st=ejwpt4wGErIUHkyG-JjIOg&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2026/07/10/6/g/w/v/1783666342729_300.jpg"
      },
      {
        "key": "RkLxj9aLU0FD",
        "title": "DANCIN' MY WAY",
        "artists": [
          "TINH HÀ \"SAY HI\"",
          "buitruonglinh",
          "Sơn.K",
          "HYO",
          "Song Luân"
        ],
        "duration": 244,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/resa/2607/35/44/0g63j27s9w.mp3?st=VVZk03H1Sn4Sd5kOslyZWQ&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
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
        "key": "8midsCPVi5RD",
        "title": "BAD NIGHT",
        "artists": [
          "TINH HÀ \"SAY HI\"",
          "Dương Domic",
          "Pháp Kiều",
          "Đặng Hồng Hải",
          "Ali Hoàng Dương"
        ],
        "duration": 233,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/resa/2607/e4/b7/h8l93x8mtn.mp3?st=r7_KCT7MQrIktMzmiQjViA&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2026/07/10/6/g/w/v/1783666342729_300.jpg"
      },
      {
        "key": "VtFikTfhGn51",
        "title": "TOGETHER WE SHINE",
        "artists": [
          "TINH HÀ \"SAY HI\"",
          "Dương Domic",
          "Pháp Kiều",
          "JSOL",
          "buitruonglinh",
          "Sơn.K",
          "CONGB",
          "VƯƠNG BÌNH",
          "Đặng Hồng Hải",
          "IVAN",
          "HURRYKNG",
          "Song Luân",
          "CODYNAMVO",
          "CoolKid",
          "Jaysonlei",
          "HYO",
          "Thể Thiên",
          "Wren Evans",
          "KIMLONG",
          "CAPTAIN BOY",
          "WEAN",
          "Xuân Định K.Y",
          "Quang Hùng MasterD",
          "DILLAN",
          "Ali Hoàng Dương"
        ],
        "duration": 316,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/resa/2607/ed/14/o66j2p71a9.mp3?st=J9yhVRCcr4HCSLyHXwhchQ&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2026/07/06/h/8/e/9/1783310563751_300.jpg"
      },
      {
        "key": "tAzBgwy2Wksm",
        "title": "Spell Me (H-A-I)",
        "artists": [
          "TINH HÀ \"SAY HI\"",
          "Đặng Hồng Hải"
        ],
        "duration": 51,
        "kbit": 128,
        "streamUrl": "https://stream.nct.vn/resa/2607/64/2a/gvxcb2rlgu.mp3?st=oD91YQyfcFoaGSOfhGrGvQ&e=1794568318&a=8&p=0&r=1f4532d7-9778-42f1-9e41-384cf4b53d9b",
        "image": "https://image-cdn.nct.vn/song/2026/07/03/N/r/H/F/1783055716431_300.jpg"
      }
    ]
  }
];

  const STORAGE_KEYS = {
    AUTH: 'xmusic_auth_config',
    PLAYLISTS: 'xmusic_playlists',
    ACTIVE_PLAYLIST_ID: 'xmusic_active_playlist_id',
    AUTO_POPULATE: 'xmusic_auto_populate_on_load',
    SHUFFLE_ON_QUEUE: 'xmusic_shuffle_on_queue',
    PUBLISHER_CACHE: 'xmusic_publisher_playlists_cache',
    PLAYLISTS_VERSION: 'xmusic_playlists_version',
    GITHUB_REPO: 'xmusic_github_repo'
  };

  // State Management
  function getAuthConfig() {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.AUTH);
      return data ? Object.assign({}, DEFAULT_AUTH, JSON.parse(data)) : DEFAULT_AUTH;
    } catch (e) {
      return DEFAULT_AUTH;
    }
  }

  function saveAuthConfig(config) {
    localStorage.setItem(STORAGE_KEYS.AUTH, JSON.stringify(config));
  }

  function getPlaylists() {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.PLAYLISTS);
      if (data) {
        const parsed = JSON.parse(data);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch (e) {
      console.warn('[XMusic Assistant] Error loading playlists:', e);
    }
    savePlaylists(DEFAULT_PLAYLISTS);
    return DEFAULT_PLAYLISTS;
  }

  function savePlaylists(playlists) {
    localStorage.setItem(STORAGE_KEYS.PLAYLISTS, JSON.stringify(playlists));
  }

  function getActivePlaylistId() {
    const id = localStorage.getItem(STORAGE_KEYS.ACTIVE_PLAYLIST_ID);
    const playlists = getPlaylists();
    if (id && playlists.some(p => p.id === id)) return id;
    const def = playlists[0] ? playlists[0].id : '';
    localStorage.setItem(STORAGE_KEYS.ACTIVE_PLAYLIST_ID, def);
    return def;
  }

  function setActivePlaylistId(id) {
    localStorage.setItem(STORAGE_KEYS.ACTIVE_PLAYLIST_ID, id);
  }

  function isAutoPopulateEnabled() {
    const val = localStorage.getItem(STORAGE_KEYS.AUTO_POPULATE);
    return val === null ? true : val === 'true';
  }

  function setAutoPopulateEnabled(enabled) {
    localStorage.setItem(STORAGE_KEYS.AUTO_POPULATE, enabled ? 'true' : 'false');
  }

  function isShuffleOnQueueEnabled() {
    const val = localStorage.getItem(STORAGE_KEYS.SHUFFLE_ON_QUEUE);
    return val === 'true';
  }

  function setShuffleOnQueueEnabled(enabled) {
    localStorage.setItem(STORAGE_KEYS.SHUFFLE_ON_QUEUE, enabled ? 'true' : 'false');
  }

  // Publisher Playlists Cache
  let publisherPlaylistsCache = [];

  function getPublisherPlaylists() {
    if (publisherPlaylistsCache.length > 0) return publisherPlaylistsCache;
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.PUBLISHER_CACHE);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          publisherPlaylistsCache = parsed;
          return parsed;
        }
      }
    } catch (e) {
      console.warn('[XMusic Assistant] Error reading publisher cache:', e);
    }
    if (typeof DEFAULT_PUBLISHER_PLAYLISTS !== 'undefined' && Array.isArray(DEFAULT_PUBLISHER_PLAYLISTS) && DEFAULT_PUBLISHER_PLAYLISTS.length > 0) {
      publisherPlaylistsCache = DEFAULT_PUBLISHER_PLAYLISTS;
      return DEFAULT_PUBLISHER_PLAYLISTS;
    }
    return [];
  }

  async function fetchPublisherPlaylists() {
    try {
      const token = localStorage.getItem('token');
      if (!token) return getPublisherPlaylists();

      const userInfoStr = localStorage.getItem('userInfo');
      let userId = '';
      if (userInfoStr) {
        try { userId = JSON.parse(userInfoStr).id || ''; } catch (e) {}
      }

      const url = `https://web.xmusicstation.com/api/v1/player/playlist/list?${userId ? `userId=${userId}&` : ''}pageIndex=1&pageSize=50`;
      const res = await fetch(url, {
        headers: {
          'Token': token,
          'Authorization': 'Bearer ' + token,
          'x-bgm-lang': 'vi'
        }
      });
      const data = await res.json();
      if (data.code === 0 && data.data && Array.isArray(data.data.items)) {
        publisherPlaylistsCache = data.data.items;
        localStorage.setItem(STORAGE_KEYS.PUBLISHER_CACHE, JSON.stringify(data.data.items));
        console.log(`[XMusic Assistant] Đã tải thành công ${data.data.items.length} playlist từ nhà phát hành.`);
        return data.data.items;
      }
    } catch (err) {
      console.warn('[XMusic Assistant] Lỗi tải playlist nhà phát hành:', err);
    }
    return getPublisherPlaylists();
  }

  function getAllPublisherSongs() {
    const pubPlaylists = getPublisherPlaylists();
    const map = new Map();
    pubPlaylists.forEach(pl => {
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

  // Toast System
  function showToast(message, type = 'info', duration = 3000) {
    const existing = document.querySelector('.xmusic-toast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.className = 'xmusic-toast';
    const icon = type === 'success' ? '✅' : type === 'error' ? '❌' : 'ℹ️';
    toast.innerHTML = '<span>' + icon + '</span><span>' + message + '</span>';
    document.body.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transition = 'opacity 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, duration);
  }

  const delay = (ms) => new Promise(r => setTimeout(r, ms));

  // Robust Element Click Dispatcher
  function robustClick(el) {
    if (!el) return;
    const opts = { bubbles: true, cancelable: true, view: window };
    el.dispatchEvent(new MouseEvent('mouseenter', opts));
    el.dispatchEvent(new MouseEvent('mouseover', opts));
    el.dispatchEvent(new MouseEvent('mousedown', opts));
    el.dispatchEvent(new MouseEvent('mouseup', opts));
    el.dispatchEvent(new MouseEvent('click', opts));
    if (typeof el.click === 'function') {
      try { el.click(); } catch (e) {}
    }
  }

  // Wait for selector with polling
  async function waitForSelector(selector, timeout = 10000) {
    const start = Date.now();
    while (Date.now() - start < timeout) {
      const el = document.querySelector(selector);
      if (el) return el;
      await delay(100);
    }
    return null;
  }

  // Close search modal reliably
  async function closeModal() {
    for (let attempt = 0; attempt < 3; attempt++) {
      const closeSelectors = [
        'a.ivu-modal-close',
        '.ivu-modal-close',
        '.ivu-modal-close i',
        '.ivu-icon-ios-close',
        '[class*="modal-close"]'
      ];
      for (const sel of closeSelectors) {
        const btn = document.querySelector(sel);
        if (btn) {
          robustClick(btn);
          await delay(150);
        }
      }

      document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', code: 'Escape', keyCode: 27, bubbles: true }));
      document.dispatchEvent(new KeyboardEvent('keyup', { key: 'Escape', code: 'Escape', keyCode: 27, bubbles: true }));

      await delay(150);
      const modal = document.querySelector('.add-dong-modal') || document.querySelector('.ivu-modal-wrap');
      if (!modal || window.getComputedStyle(modal).display === 'none') {
        return true;
      }
    }
    return false;
  }

  // Find Add button (+) in a result row
  function findAddButtonInRow(row) {
    if (!row) return null;
    const svgUse = row.querySelector('use[*|href*="musicAdd"], use[*|href*="Add"], use[*|href*="add"]');
    if (svgUse) {
      const iconWrap = svgUse.closest('.icon-wrap') || svgUse.closest('div');
      if (iconWrap) return iconWrap;
    }
    const iconWraps = row.querySelectorAll('.actions-wrap .icon-wrap');
    if (iconWraps && iconWraps.length >= 2) return iconWraps[1];
    if (iconWraps && iconWraps.length === 1) return iconWraps[0];
    return row.querySelector('.actions-wrap > div:last-child');
  }

  // ==========================================
  // DIRECT IN-MEMORY QUEUE BRIDGE (VUE 3)
  // ==========================================
  function injectMainWorldBridge() {
    if (document.getElementById('xmusic-page-bridge')) return;
    const script = document.createElement('script');
    script.id = 'xmusic-page-bridge';
    script.textContent = `
      (function() {
        function findVuePlayerComponent() {
          const rootEl = document.getElementById('app');
          let target = null;

          // 1. Quét từ DOM element thuộc thanh phát nhạc thực tế
          const playerNodes = document.querySelectorAll('.player-bar, .bottom-bar, .player-wrap, footer, .play-bar, audio, .ivu-drawer');
          for (const el of playerNodes) {
            let curr = el;
            while (curr && curr !== document.body && !target) {
              if (curr.__vueParentComponent) {
                let p = curr.__vueParentComponent;
                while (p && !target) {
                  if (p.setupState && (p.setupState.y || p.setupState.SearchSong || p.setupState.I || p.setupState.playSong)) {
                    target = p;
                    return target;
                  }
                  p = p.parent;
                }
              }
              curr = curr.parentElement;
            }
          }

          // 2. Duyệt đệ quy vnode (hỗ trợ đầy đủ Vue 3 comp.subTree)
          if (rootEl && rootEl._vnode) {
            function walk(vnode) {
              if (!vnode || target) return;
              if (vnode.component) {
                const comp = vnode.component;
                if (comp.setupState) {
                  if (comp.setupState.y || comp.setupState.SearchSong || comp.setupState.getSongDetail || comp.setupState.I) {
                    target = comp;
                    return;
                  }
                  for (const k in comp.setupState) {
                    const val = comp.setupState[k];
                    if (Array.isArray(val) && val.length > 0 && val[0] && (val[0].key || val[0].streamUrl)) {
                      target = comp;
                      return;
                    }
                  }
                }
                if (comp.subTree) {
                  walk(comp.subTree);
                  if (target) return;
                }
              }
              if (Array.isArray(vnode.children)) {
                for (const c of vnode.children) {
                  if (c && typeof c === 'object') walk(c);
                  if (target) return;
                }
              }
              if (vnode.dynamicChildren && Array.isArray(vnode.dynamicChildren)) {
                for (const c of vnode.dynamicChildren) {
                  if (c && typeof c === 'object') walk(c);
                  if (target) return;
                }
              }
            }
            walk(rootEl._vnode);
          }
          return target;
        }

        window.addEventListener('xmusic_direct_queue_req', function(e) {
          try {
            const song = e.detail;
            const comp = findVuePlayerComponent();
            if (comp && comp.setupState) {
              const songData = JSON.parse(JSON.stringify(song));
              songData.source = 'add';
              if (typeof songData.artists === 'string') {
                songData.artists = [songData.artists];
              }

              let y = comp.setupState.y;
              if (y && y.value && Array.isArray(y.value)) y = y.value;
              songData.playKey = songData.key + '_' + (Array.isArray(y) ? y.length : Date.now());

              let added = false;
              if (typeof comp.setupState.I === 'function') {
                try {
                  comp.setupState.I({ type: 'add', data: songData });
                  added = true;
                } catch(err) {}
              }
              if (!added && Array.isArray(y)) {
                y.push(songData);
                added = true;
              }

              if (added) {
                window.dispatchEvent(new CustomEvent('xmusic_direct_queue_res', {
                  detail: { success: true, key: song.key, title: song.title }
                }));
                return;
              }
            }
          } catch (err) {
            console.warn('[XMusic Bridge] Lỗi nạp trực tiếp vào Vue:', err);
          }
          window.dispatchEvent(new CustomEvent('xmusic_direct_queue_res', {
            detail: { success: false, key: e.detail?.key }
          }));
        });
      })();
    `;
    (document.head || document.documentElement).appendChild(script);
  }

  function tryDirectQueue(song) {
    return new Promise((resolve) => {
      let resolved = false;
      const handler = (evt) => {
        if (evt.detail && evt.detail.key === song.key) {
          window.removeEventListener('xmusic_direct_queue_res', handler);
          resolved = true;
          resolve(evt.detail.success);
        }
      };
      window.addEventListener('xmusic_direct_queue_res', handler);
      window.dispatchEvent(new CustomEvent('xmusic_direct_queue_req', { detail: song }));
      setTimeout(() => {
        if (!resolved) {
          window.removeEventListener('xmusic_direct_queue_res', handler);
          resolve(false);
        }
      }, 600);
    });
  }

  // ==========================================
  // SMART SONG MATCHING ENGINE (DOM FALLBACK)
  // ==========================================
  function cleanSongTitle(title) {
    if (!title) return '';
    return title
      .replace(/\s*[\(\[][^\)\]]*(?:version|ver|remix|acoustic|beat|karaoke|live|cover)[^\)\]]*[\)\]]/gi, '')
      .replace(/\s+/g, ' ')
      .trim();
  }

  function normalizeText(str) {
    return (str || '')
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/đ/g, 'd')
      .replace(/[^\w\s]/gi, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  }

  function scoreRowMatch(rowTitle, rowArtist, targetTitle, targetArtists) {
    const rTitle = normalizeText(rowTitle);
    const rArtist = normalizeText(rowArtist);
    const tTitle = normalizeText(targetTitle);
    const tCleanTitle = normalizeText(cleanSongTitle(targetTitle));
    const tArtists = (targetArtists || []).map(a => normalizeText(a)).filter(Boolean);

    let score = 0;

    // 1. Title Matching
    if (rTitle === tTitle) {
      score += 50;
    } else if (rTitle === tCleanTitle || rTitle.includes(tCleanTitle) || tTitle.includes(rTitle)) {
      score += 35;
    } else {
      const tWords = tCleanTitle.split(' ').filter(w => w.length > 1);
      const matchedWords = tWords.filter(w => rTitle.includes(w));
      if (tWords.length > 0 && matchedWords.length === tWords.length) {
        score += 25;
      } else if (tWords.length > 0) {
        score += Math.round((matchedWords.length / tWords.length) * 20);
      }
    }

    // 2. Artist Matching
    let artistMatched = false;
    for (const ta of tArtists) {
      if (ta && (rArtist.includes(ta) || ta.includes(rArtist))) {
        artistMatched = true;
        break;
      }
    }
    if (artistMatched) {
      score += 40;
    }

    // 3. Penalty for unwanted Beat / Karaoke / Instrumental
    const targetIsBeat = tTitle.includes('beat') || tTitle.includes('karaoke') || tTitle.includes('instrumental');
    const rowIsBeat = rTitle.includes('beat') || rTitle.includes('karaoke') || rTitle.includes('instrumental');
    if (rowIsBeat && !targetIsBeat) {
      score -= 55;
    }

    return score;
  }

  async function addSongViaSearchModal(song) {
    const songTitle = typeof song === 'string' ? song : song.title;
    const targetArtists = (typeof song === 'object' && song.artists) ? song.artists : [];

    console.log('[XMusic Assistant] >>> Bắt đầu tìm & khớp bài hát:', songTitle, targetArtists);

    // Mở modal nếu chưa mở
    const modal = document.querySelector('.add-dong-modal') || document.querySelector('.ivu-modal-wrap');
    const isModalOpen = modal && window.getComputedStyle(modal).display !== 'none';

    if (!isModalOpen) {
      const addSongBtn = Array.from(document.querySelectorAll('.add-song, .player-wrap .add-song, div')).find(el => {
        return el.classList?.contains('add-song') || (el.innerText && (el.innerText.includes('Add song') || el.innerText.includes('Thêm bài')));
      });

      if (!addSongBtn) {
        console.error('[XMusic Assistant] Không tìm thấy nút Add song trên trang web!');
        return false;
      }
      robustClick(addSongBtn);
      await delay(350);
    }

    const searchInput = await waitForSelector('input.search-input, .add-dong-modal input', 5000);
    if (!searchInput) {
      console.error('[XMusic Assistant] Không tìm thấy ô search-input!');
      closeModal();
      return false;
    }

    // Reset input cũ để tránh dính kết quả trước
    const nativeSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value')?.set;
    if (searchInput.value) {
      if (nativeSetter) nativeSetter.call(searchInput, '');
      else searchInput.value = '';
      searchInput.dispatchEvent(new Event('input', { bubbles: true }));
      await delay(120);
    }

    const cleaned = cleanSongTitle(songTitle);
    const searchVariants = [songTitle];
    if (cleaned && cleaned !== songTitle) {
      searchVariants.push(cleaned);
    }

    let matchedRow = null;

    for (const term of searchVariants) {
      searchInput.focus();
      if (nativeSetter) nativeSetter.call(searchInput, term);
      else searchInput.value = term;
      searchInput.dispatchEvent(new Event('input', { bubbles: true }));
      searchInput.dispatchEvent(new Event('change', { bubbles: true }));

      await delay(320); // Chờ debounce của Vue component (300ms)

      const searchIcon = document.querySelector('.add-dong-modal .s-icon') || 
                         document.querySelector('.search-wrap .s-icon') ||
                         document.querySelector('.search-wrap svg');
      if (searchIcon) robustClick(searchIcon);
      searchInput.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', keyCode: 13, bubbles: true }));
      searchInput.dispatchEvent(new KeyboardEvent('keyup', { key: 'Enter', keyCode: 13, bubbles: true }));

      const startTime = Date.now();
      let bestRow = null;
      let bestScore = -999;

      while (Date.now() - startTime < 6000) {
        const rows = Array.from(document.querySelectorAll('.add-dong-modal .tr-wrap, .search-list-table-wrap .tr-wrap'));
        if (rows.length > 0) {
          for (const row of rows) {
            const titleEl = row.querySelector('.name-wrap') || row.querySelector('span');
            const artistEl = row.querySelector('.artist-wrap') || row.querySelectorAll('div')[1];
            const rTitle = titleEl ? titleEl.innerText.trim() : '';
            const rArtist = artistEl ? artistEl.innerText.trim() : '';

            const score = scoreRowMatch(rTitle, rArtist, songTitle, targetArtists);
            if (score > bestScore) {
              bestScore = score;
              bestRow = row;
            }
          }

          if (bestScore >= 40) {
            matchedRow = bestRow;
            console.log(`[XMusic Assistant] Khớp bài hát thành công: "${bestRow.querySelector('.name-wrap')?.innerText}" (Điểm: ${bestScore})`);
            break;
          }
        }
        await delay(150);
      }

      if (matchedRow) break;
    }

    if (!matchedRow) {
      console.warn('[XMusic Assistant] ⚠️ Không tìm thấy bài hát khớp chính xác cho:', songTitle);
      await closeModal();
      return false;
    }

    const addBtn = findAddButtonInRow(matchedRow);
    if (!addBtn) {
      console.error('[XMusic Assistant] Không tìm thấy nút Add trên kết quả khớp!');
      await closeModal();
      return false;
    }

    robustClick(addBtn);
    console.log('[XMusic Assistant] ✅ Đã thêm bài hát khớp vào queue thành công!');
    await delay(400);
    await closeModal();
    await delay(200);
    return true;
  }

  // Unified Song Adder: tries direct injection first, then DOM fallback
  async function addSongToQueue(song) {
    if (typeof song === 'object' && song.key) {
      const directOk = await tryDirectQueue(song);
      if (directOk) {
        console.log('[XMusic Assistant] ⚡ Đã nạp trực tiếp siêu tốc vào Vue player:', song.title);
        return true;
      }
    }
    return await addSongViaSearchModal(song);
  }

  // ==========================================
  // SHUFFLE ALGORITHMS & CUSTOMIZATION
  // ==========================================
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
    // 1. Fisher-Yates Shuffle toàn diện mảng: đảo ngẫu nhiên 100% mọi vị trí
    const shuffled = shuffleArray(songs);

    // 2. Smoothing pass: phân tách nghệ sĩ trùng lặp liên tiếp nếu có
    for (let i = 0; i < shuffled.length - 1; i++) {
      const curArtist = (shuffled[i].artists && shuffled[i].artists[0]) ? shuffled[i].artists[0].trim().toLowerCase() : '';
      const nextArtist = (shuffled[i + 1].artists && shuffled[i + 1].artists[0]) ? shuffled[i + 1].artists[0].trim().toLowerCase() : '';
      if (curArtist && nextArtist && curArtist === nextArtist) {
        // Tìm bài khác ca sĩ từ i + 2 trở đi để hoán đổi
        for (let j = i + 2; j < shuffled.length; j++) {
          const candidateArtist = (shuffled[j].artists && shuffled[j].artists[0]) ? shuffled[j].artists[0].trim().toLowerCase() : '';
          const candidatePrevArtist = (shuffled[j - 1].artists && shuffled[j - 1].artists[0]) ? shuffled[j - 1].artists[0].trim().toLowerCase() : '';
          if (candidateArtist !== curArtist && candidatePrevArtist !== curArtist) {
            const temp = shuffled[i + 1];
            shuffled[i + 1] = shuffled[j];
            shuffled[j] = temp;
            break;
          }
        }
      }
    }
    return shuffled;
  }

  let lastPlaylistUndoState = null;

  function shuffleCurrentPlaylist() {
    const playlists = getPlaylists();
    const activeId = getActivePlaylistId();
    const playlist = playlists.find(p => p.id === activeId);

    if (!playlist || !playlist.songs || playlist.songs.length < 2) {
      showToast('Cần ít nhất 2 bài hát để xáo trộn!', 'info');
      return;
    }

    lastPlaylistUndoState = {
      playlistId: activeId,
      songs: playlist.songs.slice()
    };

    playlist.songs = smartShuffle(playlist.songs);
    savePlaylists(playlists);
    renderCurrentPlaylistSongs();
    showToast('🔀 Đã xáo trộn danh sách phát thông minh (cách ca sĩ)!', 'success', 2500);
  }

  function undoShuffleCurrentPlaylist() {
    if (!lastPlaylistUndoState) return;
    const playlists = getPlaylists();
    const playlist = playlists.find(p => p.id === lastPlaylistUndoState.playlistId);
    if (playlist) {
      playlist.songs = lastPlaylistUndoState.songs.slice();
      savePlaylists(playlists);
      renderCurrentPlaylistSongs();
      lastPlaylistUndoState = null;
      showToast('↩ Đã khôi phục thứ tự danh sách ban đầu!', 'info', 2000);
    }
  }

  // Populate Queue from Playlist with Shuffle Support
  let isQueueing = false;
  async function populateQueue(playlist, forceShuffle = false) {
    if (isQueueing) return;
    if (!playlist || !playlist.songs || playlist.songs.length === 0) {
      showToast('Playlist không có bài hát nào.', 'error');
      return;
    }

    isQueueing = true;
    let songsToQueue = playlist.songs.slice();
    const shouldShuffle = forceShuffle || isShuffleOnQueueEnabled();

    if (shouldShuffle) {
      songsToQueue = smartShuffle(songsToQueue);
      showToast('🔀 Đã xáo trộn ngẫu nhiên thứ tự các bài trước khi nạp!', 'info', 1800);
    }

    const total = songsToQueue.length;
    const progressWrap = document.getElementById('xmusic-progress-wrap');
    const progressFill = document.getElementById('xmusic-progress-fill');
    const progressText = document.getElementById('xmusic-progress-text');
    const queueBtn = document.getElementById('xmusic-btn-queue');
    const shuffleBtn = document.getElementById('xmusic-btn-shuffle-queue');

    if (progressWrap) progressWrap.style.display = 'block';
    if (queueBtn) queueBtn.disabled = true;
    if (shuffleBtn) shuffleBtn.disabled = true;

    showToast('Bắt đầu nạp ' + total + ' bài vào hàng đợi...', 'info', 2000);

    let successCount = 0;
    for (let i = 0; i < total; i++) {
      const song = songsToQueue[i];
      const percent = Math.round(((i + 1) / total) * 100);

      if (progressFill) progressFill.style.width = percent + '%';
      if (progressText) progressText.innerText = 'Đang nạp ' + (i + 1) + '/' + total + ': ' + song.title;

      try {
        const ok = await addSongToQueue(song);
        if (ok) successCount++;
      } catch (err) {
        console.error('[XMusic Assistant] Lỗi khi nạp bài:', song.title, err);
        await closeModal();
      }

      await delay(300);
    }

    updateQueueCountUI();

    if (progressText) progressText.innerText = 'Hoàn tất! Đã thêm ' + successCount + '/' + total + ' bài.';
    showToast('Đã nạp xong! ' + successCount + ' bài đã được đưa vào hàng đợi phát.', 'success', 4000);

    setTimeout(() => {
      if (progressWrap) progressWrap.style.display = 'none';
      if (queueBtn) queueBtn.disabled = false;
      if (shuffleBtn) shuffleBtn.disabled = false;
      isQueueing = false;
    }, 1200);
  }

  function updateQueueCountUI() {
    setTimeout(() => {
      const count = document.querySelectorAll('.player-wrap .item.row').length;
      const countEl = document.getElementById('xmusic-queue-count');
      if (countEl) countEl.innerText = 'Đang phát: ' + count + ' bài';
    }, 400);
  }

  // Clear Queue via remove icons
  async function clearCurrentQueue() {
    const removeButtons = document.querySelectorAll('.player-wrap .remove-icon, .player-wrap .item .remove-icon');
    if (removeButtons.length === 0) {
      showToast('Hàng đợi phát hiện tại đang trống.', 'info');
      return;
    }

    showToast('Đang xóa ' + removeButtons.length + ' bài trong hàng đợi...', 'info');
    for (let i = 0; i < removeButtons.length; i++) {
      robustClick(removeButtons[i]);
      await delay(80);
    }
    updateQueueCountUI();
    showToast('Đã xóa sạch hàng đợi phát nhạc!', 'success');
  }

  // Add a single song to custom active playlist
  function addSongToActivePlaylist(song) {
    const playlists = getPlaylists();
    const activeId = getActivePlaylistId();
    const pl = playlists.find(p => p.id === activeId);
    if (!pl) return;

    if (pl.songs.some(s => s.key === song.key)) {
      showToast('Bài hát này đã có trong playlist!', 'info');
      return;
    }

    pl.songs.push({
      key: song.key,
      title: song.title,
      artists: song.artists || [],
      duration: song.duration || 0,
      kbit: song.kbit || 128,
      streamUrl: song.streamUrl || '',
      image: song.image || ''
    });

    savePlaylists(playlists);
    renderCurrentPlaylistSongs();
    updatePlaylistSelect();
    showToast('Đã thêm "' + song.title + '" vào ' + pl.name, 'success', 2000);
  }

  // Clone entire Publisher Playlist into User Personal Playlists
  function clonePublisherPlaylist(pubPlId) {
    const pubPlaylists = getPublisherPlaylists();
    const pub = pubPlaylists.find(p => String(p.id) === String(pubPlId));
    if (!pub || !pub.songDetails || pub.songDetails.length === 0) {
      showToast('Không tìm thấy bài hát trong playlist này.', 'error');
      return;
    }

    const playlists = getPlaylists();
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

    playlists.push(newPl);
    savePlaylists(playlists);
    setActivePlaylistId(newPl.id);
    updatePlaylistSelect();
    renderCurrentPlaylistSongs();
    showToast('Đã sao chép "' + newPl.name + '" thành Playlist cá nhân của bạn!', 'success', 3000);
  }

  // Inject Left Sidebar Widget
  
  // =========================================================================
  // GITHUB UPDATE CENTER - NGUỒN CHÍNH THỨC DUY NHẤT TỪ ADMIN (KHÓA BẢO MẬT)
  // =========================================================================
  const OFFICIAL_GITHUB_REPO = Object.freeze({
    owner: 'hotrocvst-cell',
    repo: 'xmusic-station',
    fullName: 'hotrocvst-cell/xmusic-station',
    url: 'https://github.com/hotrocvst-cell/xmusic-station',
    rawVersionUrl: 'https://raw.githubusercontent.com/hotrocvst-cell/xmusic-station/main/version.json',
    rawPlaylistsUrl: 'https://raw.githubusercontent.com/hotrocvst-cell/xmusic-station/main/sample-playlists.json',
    rawUserscriptUrl: 'https://raw.githubusercontent.com/hotrocvst-cell/xmusic-station/main/userscript/xmusic-auto-playlist.user.js',
    releasesUrl: 'https://github.com/hotrocvst-cell/xmusic-station/releases/latest'
  });

  function compareVersions(v1, v2) {
    if (!v1 || !v2) return 0;
    const p1 = String(v1).replace(/^v/, '').split('.').map(Number);
    const p2 = String(v2).replace(/^v/, '').split('.').map(Number);
    for (let i = 0; i < Math.max(p1.length, p2.length); i++) {
      const num1 = p1[i] || 0;
      const num2 = p2[i] || 0;
      if (num1 > num2) return 1;
      if (num1 < num2) return -1;
    }
    return 0;
  }

  let isCheckingGithub = false;
  async function checkGithubUpdates(resultContainer) {
    if (!resultContainer) return;
    if (isCheckingGithub) return;
    isCheckingGithub = true;

    const btnCheckGithub = document.getElementById('xmusic-btn-check-github');
    if (btnCheckGithub) {
      btnCheckGithub.disabled = true;
      btnCheckGithub.innerHTML = '⏳ Đang kiểm tra GitHub...';
    }

    resultContainer.innerHTML = `
      <div style="color: #94a3b8; font-size: 12px; text-align: center; padding: 12px;">
        Đang kết nối tới GitHub Admin (${OFFICIAL_GITHUB_REPO.fullName})...
      </div>
    `;

    try {
      const rawVersionUrl = `${OFFICIAL_GITHUB_REPO.rawVersionUrl}?t=${Date.now()}`;
      const res = await fetch(rawVersionUrl);
      
      if (!res.ok) {
        resultContainer.innerHTML = `
          <div style="background: rgba(239, 68, 68, 0.1); border: 1px solid rgba(239, 68, 68, 0.3); border-radius: 8px; padding: 12px; color: #fca5a5; font-size: 12px; line-height: 1.5;">
            Không tìm thấy file <code>version.json</code> trên kho chính thức <b>${OFFICIAL_GITHUB_REPO.fullName}</b> (HTTP ${res.status}).<br>
            • Admin cần push commit đầu tiên lên nhánh <code>main</code> của GitHub.<br>
            • Link kho: <a href="${OFFICIAL_GITHUB_REPO.url}" target="_blank" style="color: #38bdf8; text-decoration: underline;">${OFFICIAL_GITHUB_REPO.fullName}</a>
          </div>
        `;
        showToast('Không tìm thấy version.json trên GitHub Admin (HTTP ' + res.status + ')', 'error');
        return;
      }

      const remote = await res.json();
      const currentVer = localStorage.getItem(STORAGE_KEYS.PLAYLISTS_VERSION) || APP_VERSION;
      const isNewer = compareVersions(remote.version, currentVer) > 0;

      let html = '';
      if (isNewer) {
        showToast('🎉 Phát hiện bản cập nhật mới v' + remote.version + ' từ Admin!', 'info', 2500);
        html = `
          <div style="background: rgba(52, 211, 153, 0.1); border: 1px solid rgba(52, 211, 153, 0.35); border-radius: 10px; padding: 14px;">
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
              <span class="xmusic-ver-pill new">🎉 Có phiên bản mới: v${escapeHtml(remote.version)}</span>
              <span style="font-size: 11px; color: #94a3b8;">${escapeHtml(remote.updatedAt || '')}</span>
            </div>
            <div style="font-weight: 600; color: #fff; font-size: 13.5px; margin-bottom: 6px;">
              ${escapeHtml(remote.name || 'Bản phát hành từ Admin')}
            </div>
            <div class="xmusic-changelog-box">
              <div style="font-weight: 600; margin-bottom: 4px; color: #34d399;">Nội dung cập nhật mới:</div>
              <ul>
                ${(remote.releaseNotes || []).map(n => `<li>${escapeHtml(n)}</li>`).join('')}
              </ul>
            </div>
            <div class="xmusic-update-actions">
              <button id="xmusic-btn-apply-github-pl" class="xmusic-btn-primary" style="width: 100%;">
                ⚡ 1. Nạp Kho Nhạc Mới Từ Admin (Giữ Playlist Riêng)
              </button>
              <a href="${OFFICIAL_GITHUB_REPO.rawUserscriptUrl}" target="_blank" class="xmusic-btn-secondary" style="text-align: center; text-decoration: none; display: block; padding: 8px;">
                📥 2. Cập Nhật Tampermonkey Script
              </a>
              <a href="${OFFICIAL_GITHUB_REPO.releasesUrl}" target="_blank" class="xmusic-btn-secondary" style="text-align: center; text-decoration: none; display: block; padding: 8px;">
                📦 3. Tải Extension .zip Từ GitHub Releases
              </a>
            </div>
          </div>
        `;
      } else {
        showToast('✅ Bạn đang sử dụng phiên bản mới nhất (v' + currentVer + ')', 'success', 2000);
        html = `
          <div style="background: rgba(56, 189, 248, 0.1); border: 1px solid rgba(56, 189, 248, 0.3); border-radius: 10px; padding: 14px;">
            <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px;">
              <span style="font-size: 16px;">✅</span>
              <span style="font-weight: 700; color: #38bdf8;">Bạn đang sử dụng phiên bản mới nhất (v${escapeHtml(currentVer)})!</span>
            </div>
            <div style="font-size: 12px; color: #94a3b8; margin-bottom: 10px;">
              Kho chính thức từ Admin: <b>${OFFICIAL_GITHUB_REPO.fullName}</b> • Phiên bản: v${escapeHtml(remote.version)} (${remote.totalSongs || 300} bài hát).
            </div>
            <div class="xmusic-update-actions">
              <button id="xmusic-btn-force-github-pl" class="xmusic-btn-secondary" style="width: 100%;">
                🔄 Nạp lại kho ${remote.totalSongs || 300} bài từ Admin (Đồng bộ tức thì)
              </button>
              <a href="${OFFICIAL_GITHUB_REPO.url}" target="_blank" class="xmusic-btn-secondary" style="text-align: center; text-decoration: none; display: block; padding: 6px;">
                🌐 Truy cập Kho GitHub Admin
              </a>
            </div>
          </div>
        `;
      }

      resultContainer.innerHTML = html;

      const applyBtn = resultContainer.querySelector('#xmusic-btn-apply-github-pl') || resultContainer.querySelector('#xmusic-btn-force-github-pl');
      if (applyBtn) {
        const isForce = applyBtn.id === 'xmusic-btn-force-github-pl';
        applyBtn.onclick = async () => {
          applyBtn.textContent = '⏳ Đang tải từ Admin GitHub...';
          applyBtn.disabled = true;
          try {
            const plRes = await fetch(`${OFFICIAL_GITHUB_REPO.rawPlaylistsUrl}?t=${Date.now()}`);
            const plData = await plRes.json();
            if (Array.isArray(plData) && plData.length > 0) {
              smartUpdatePlaylists(plData, true);
              setActivePlaylistId(plData[0].id);
              updatePlaylistSelect();
              renderCurrentPlaylistSongs();
              showToast(`Đã đồng bộ thành công ${plData.length} playlist từ Admin!`, 'success');
              checkGithubUpdates(resultContainer);
            } else {
              showToast('Dữ liệu playlist từ Admin không đúng định dạng!', 'error');
            }
          } catch (err) {
            showToast('Lỗi khi tải playlist từ GitHub: ' + err.message, 'error');
          } finally {
            applyBtn.textContent = isForce ? `🔄 Nạp lại kho ${remote.totalSongs || 300} bài từ Admin (Đồng bộ tức thì)` : '⚡ 1. Nạp Kho Nhạc Mới Từ Admin (Giữ Playlist Riêng)';
            applyBtn.disabled = false;
          }
        };
      }
    } catch (e) {
      resultContainer.innerHTML = `
        <div style="color: #f87171; font-size: 12px; background: rgba(239,68,68,0.1); padding: 10px; border-radius: 8px;">
          Lỗi kết nối GitHub Admin: ${escapeHtml(e.message)}
        </div>
      `;
      showToast('Lỗi kết nối GitHub Admin: ' + e.message, 'error');
    } finally {
      isCheckingGithub = false;
      if (btnCheckGithub) {
        btnCheckGithub.disabled = false;
        btnCheckGithub.innerHTML = '🔍 Kiểm Tra Bản Cập Nhật Từ Admin (GitHub)';
      }
    }
  }

  function injectLeftSidebarWidget() {
    if (document.getElementById('xmusic-assistant-root')) return;

    try {
      const root = document.createElement('div');
      root.id = 'xmusic-assistant-root';

      const playlists = getPlaylists();
      const activeId = getActivePlaylistId();
      const auth = getAuthConfig();
      const isAutoPop = isAutoPopulateEnabled();
      const isShuffleOnQ = isShuffleOnQueueEnabled();
      const token = localStorage.getItem('token');

    root.innerHTML = `
      <!-- Launch Button (Fixed on the LEFT edge) -->
      <button id="xmusic-floating-btn" class="xmusic-floating-btn" title="Bật/Tắt Sidebar Quản Lý Playlist">
        <span>🎵</span>
        <span>XMusic Assistant</span>
        <span class="xmusic-badge">${playlists.length} List</span>
      </button>

      <!-- Backdrop Overlay -->
      <div id="xmusic-backdrop" class="xmusic-backdrop"></div>

      <!-- LEFT SIDEBAR -->
      <aside id="xmusic-sidebar" class="xmusic-sidebar">
        <!-- Header -->
        <div class="xmusic-header">
          <div class="xmusic-title-wrap">
            <div class="xmusic-logo-icon">XM</div>
            <div>
              <div class="xmusic-title">XMusic Assistant</div>
              <div style="font-size: 11.5px; color: #94a3b8;">Quản lý & Tự động tạo Playlist v2.0</div>
            </div>
          </div>
          <div class="xmusic-header-actions">
            <div id="xmusic-auth-status" class="xmusic-status-pill ${token ? 'logged-in' : 'logged-out'}">
              ${token ? '● ' + (auth.username || 'Đã đăng nhập') : '○ Chưa đăng nhập'}
            </div>
            <button id="xmusic-btn-close-sidebar" class="xmusic-btn-close" title="Đóng Sidebar">✕</button>
          </div>
        </div>

        <!-- Quick Action Bar -->
        <div class="xmusic-quick-bar">
          <div class="xmusic-quick-row">
            <select id="xmusic-playlist-select" class="xmusic-select">
              ${playlists.map(p => `<option value="${p.id}" ${p.id === activeId ? 'selected' : ''}>${p.name} (${p.songs.length} bài)</option>`).join('')}
            </select>
          </div>

          <!-- Dual Queue Buttons: Normal & Shuffle -->
          <div class="xmusic-quick-btn-group">
            <button id="xmusic-btn-queue" class="xmusic-btn-queue" title="Nạp bài hát theo thứ tự danh sách">
              <span>▶</span>
              <span>Nạp Queue</span>
            </button>
            <button id="xmusic-btn-shuffle-queue" class="xmusic-btn-shuffle" title="Xáo trộn ngẫu nhiên thứ tự các bài hát trước khi nạp">
              <span>🔀</span>
              <span>Nạp Trộn Bài</span>
            </button>
          </div>

          <div class="xmusic-quick-sub">
            <label class="xmusic-checkbox-label" title="Tự động đảo ngẫu nhiên danh sách trước khi đưa vào hàng đợi">
              <input type="checkbox" id="xmusic-check-shuffle" ${isShuffleOnQ ? 'checked' : ''} />
              <span>Trộn bài khi nạp</span>
            </label>
            <label class="xmusic-checkbox-label">
              <input type="checkbox" id="xmusic-check-autopop" ${isAutoPop ? 'checked' : ''} />
              <span>Tự nạp khi vào web</span>
            </label>
          </div>

          <div style="display: flex; align-items: center; justify-content: space-between; font-size: 12px; margin-top: 2px;">
            <span id="xmusic-queue-count" style="font-weight: 600; color: #34d399;">Đang phát: 0 bài</span>
            <button id="xmusic-btn-clear-queue" class="xmusic-btn-clear-queue">Xóa sạch queue</button>
          </div>
        </div>

        <!-- Progress Bar -->
        <div id="xmusic-progress-wrap" class="xmusic-progress-wrap">
          <div id="xmusic-progress-text" class="xmusic-progress-text">Đang chuẩn bị...</div>
          <div class="xmusic-progress-track">
            <div id="xmusic-progress-fill" class="xmusic-progress-fill"></div>
          </div>
        </div>

        <!-- Tabs Navigation -->
        <div class="xmusic-tabs">
          <button class="xmusic-tab-btn active" data-tab="tab-playlist">📋 Playlist</button>
          <button class="xmusic-tab-btn" data-tab="tab-publisher">📻 Nhà Phát Hành</button>
          <button class="xmusic-tab-btn" data-tab="tab-search">🔍 Tìm Bài</button>
          <button class="xmusic-tab-btn" data-tab="tab-update">🚀 Cập Nhật</button>
          <button class="xmusic-tab-btn" data-tab="tab-config">⚙ Cấu Hình</button>
        </div>

        <!-- Tab 1: Playlist Details -->
        <div id="tab-playlist" class="xmusic-content tab-content">
          <div class="xmusic-list-toolbar" id="xmusic-list-toolbar">
            <span id="xmusic-list-meta-text">0 bài hát</span>
            <div class="xmusic-toolbar-actions">
              <button class="xmusic-btn-share-current" id="xmusic-btn-share-curr" title="Chia sẻ playlist này qua mã hoặc file">🔗 Chia Sẻ</button>
              <button class="xmusic-btn-shuffle-list" id="xmusic-btn-shuffle-list" title="Xáo trộn ngẫu nhiên thứ tự các bài hát trong danh sách">🔀 Đảo Thứ Tự</button>
              <button class="xmusic-btn-undo" id="xmusic-btn-undo-shuffle" style="display: none;" title="Hoàn tác thứ tự vừa đảo">↩ Hoàn tác</button>
            </div>
          </div>
          <div id="xmusic-song-list">
            <!-- Rendered by JS -->
          </div>
        </div>

        <!-- Tab 2: Publisher Playlists Catalog -->
        <div id="tab-publisher" class="xmusic-content tab-content" style="display: none;">
          <div class="xmusic-publisher-header">
            <div class="xmusic-publisher-header-title">
              <span>📻</span>
              <span>Kho Playlist Nhà Phát Hành</span>
            </div>
            <div class="xmusic-publisher-meta" id="xmusic-pub-meta">Đang tải danh sách từ hệ thống...</div>
            <select id="xmusic-publisher-select" class="xmusic-select xmusic-publisher-select">
              <option value="">Đang tải...</option>
            </select>
            <button id="xmusic-btn-clone-publisher" class="xmusic-publisher-btn-clone">
              📋 Sao Chép Thành Playlist Cá Nhân Của Tôi
            </button>
          </div>
          <div id="xmusic-publisher-song-list">
            <!-- Rendered by JS -->
          </div>
        </div>

        <!-- Tab 3: Search & Add Songs -->
        <div id="tab-search" class="xmusic-content tab-content" style="display: none;">
          <div class="xmusic-search-box">
            <span class="xmusic-search-icon">🔍</span>
            <input type="text" id="xmusic-live-search" class="xmusic-search-input" placeholder="Tìm tên bài hát hoặc ca sĩ (Online + Nhà phát hành)..." />
          </div>
          <div id="xmusic-search-results" class="xmusic-search-results"></div>
          <div style="font-size: 12px; color: #94a3b8; text-align: center; margin-top: 14px; line-height: 1.6;">
            Tìm kiếm kết hợp thông minh: Tìm trên toàn bộ kho online và toàn bộ các bài hát độc quyền từ các Playlist Nhà phát hành.
          </div>
        </div>

        
        <!-- Tab 5: GitHub Update Center -->
        <div id="tab-update" class="xmusic-content tab-content" style="display: none;">
          <div class="xmusic-update-card">
            <div class="xmusic-update-status">
              <span style="font-size: 22px;">🚀</span>
              <div>
                <div style="font-weight: 700; color: #fff; font-size: 14px;">Trung Tâm Cập Nhật GitHub</div>
                <div style="font-size: 12px; color: #94a3b8; margin-top: 2px;">
                  Bản hiện tại: <span class="xmusic-ver-pill current">v${APP_VERSION}</span> • 300 bài tuyển chọn
                </div>
              </div>
            </div>

            <!-- Locked Official Repository Card -->
            <div style="background: rgba(15, 23, 42, 0.65); border: 1px solid rgba(99, 102, 241, 0.4); border-radius: 10px; padding: 12px 14px; margin-bottom: 14px;">
              <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 6px;">
                <span style="font-size: 11px; font-weight: 700; color: #a5b4fc; text-transform: uppercase; letter-spacing: 0.5px;">Kho Nguồn Chính Thức (Admin Duy Nhất)</span>
                <span style="font-size: 10.5px; background: rgba(16, 185, 129, 0.2); color: #34d399; padding: 2px 8px; border-radius: 12px; border: 1px solid rgba(16, 185, 129, 0.4); font-weight: 700;">🔒 ĐÃ KHÓA BẢO MẬT</span>
              </div>
              <div style="font-weight: 700; color: #38bdf8; font-size: 13.5px; font-family: monospace;">
                hotrocvst-cell/xmusic-station
              </div>
              <div style="font-size: 11px; color: #64748b; margin-top: 4px; line-height: 1.4;">
                Nguồn cập nhật được khóa cứng từ Admin. Người dùng không thể can thiệp hoặc thay đổi địa chỉ khác.
              </div>
            </div>

            <button id="xmusic-btn-check-github" class="xmusic-btn-primary" style="width: 100%;">
              🔍 Kiểm Tra Bản Cập Nhật Từ Admin (GitHub)
            </button>

            <!-- Live check result area -->
            <div id="xmusic-github-check-result" style="margin-top: 14px;"></div>
          </div>
        </div>

        <!-- Tab 4: Configuration -->
        <div id="tab-config" class="xmusic-content tab-content" style="display: none;">
          <div class="xmusic-form-group">
            <label class="xmusic-form-label">Tài khoản XMusicStation</label>
            <input type="text" id="xmusic-cfg-user" class="xmusic-input" value="${auth.username || ''}" placeholder="Nhập tên tài khoản" />
          </div>
          <div class="xmusic-form-group">
            <label class="xmusic-form-label">Mật khẩu</label>
            <input type="password" id="xmusic-cfg-pass" class="xmusic-input" value="${auth.password || ''}" placeholder="Nhập mật khẩu" />
          </div>
          <div class="xmusic-form-group">
            <label class="xmusic-checkbox-label">
              <input type="checkbox" id="xmusic-cfg-autologin" ${auth.autoLogin ? 'checked' : ''} />
              <span>Tự động đăng nhập khi mở trang</span>
            </label>
          </div>
          <div style="display: flex; gap: 10px; margin-top: 16px;">
            <button id="xmusic-btn-save-cfg" class="xmusic-btn-primary" style="flex: 1;">💾 Lưu Cấu Hình</button>
            <button id="xmusic-btn-relogin" class="xmusic-btn-secondary" style="flex: 1;">🔑 Đăng Nhập Lại</button>
          </div>
        </div>

        <!-- Bottom Actions Bar -->
        <div class="xmusic-bottom-bar">
          <button id="xmusic-btn-new-pl" class="xmusic-btn-secondary" style="flex: 1;">➕ Tạo List</button>
          <button id="xmusic-btn-share-pl" class="xmusic-btn-secondary" style="flex: 1;" title="Chia sẻ playlist hiện tại (Mã / File)">🔗 Chia Sẻ</button>
          <button id="xmusic-btn-import" class="xmusic-btn-secondary" style="flex: 1;" title="Nhập playlist từ File sao lưu JSON hoặc Mã chia sẻ">📥 Nhập</button>
          <button id="xmusic-btn-sync-cloud" class="xmusic-btn-secondary" style="flex: 1.2;" title="Kiểm tra và đồng bộ kho nhạc từ GitHub Admin">☁️ Cập Nhật</button>
          <button id="xmusic-btn-export" class="xmusic-btn-secondary" style="flex: 0.8;" title="Xuất sao lưu JSON">📤 Xuất</button>
          <button id="xmusic-btn-reset-pl" class="xmusic-btn-secondary" style="flex: 0.8;" title="Khôi phục 3 playlist mẫu v2.5.0 (300 bài)">🔄 Mẫu</button>
          <input type="file" id="xmusic-file-import" accept=".json" style="display: none;" />
        </div>
      </aside>
    `;

    const targetContainer = document.body || document.documentElement;
    if (targetContainer) {
      targetContainer.appendChild(root);
      console.log('[XMusic Assistant] Floating button & Left Sidebar injected into DOM.');
    }

    bindSidebarEvents();
    renderCurrentPlaylistSongs();
    updateQueueCountUI();
    loadAndRenderPublisherTab();
  } catch (err) {
    console.error('[XMusic Assistant] Error injecting Left Sidebar Widget:', err);
  }
}

  function renderCurrentPlaylistSongs() {
    const playlists = getPlaylists();
    const activeId = getActivePlaylistId();
    const playlist = playlists.find(p => p.id === activeId);
    const container = document.getElementById('xmusic-song-list');
    const metaText = document.getElementById('xmusic-list-meta-text');
    const undoBtn = document.getElementById('xmusic-btn-undo-shuffle');

    if (!container) return;

    if (undoBtn) {
      undoBtn.style.display = (lastPlaylistUndoState && lastPlaylistUndoState.playlistId === activeId) ? 'inline-block' : 'none';
    }

    if (!playlist || !playlist.songs || playlist.songs.length === 0) {
      if (metaText) metaText.innerText = '0 bài hát';
      container.innerHTML = '<div style="text-align: center; color: #64748b; padding: 32px 0; font-size: 13px;">Chưa có bài hát nào trong playlist này.<br>Chuyển qua tab <b>"List Nhà Phát Hành"</b> hoặc <b>"Tìm & Thêm Bài"</b> để thêm nhạc!</div>';
      return;
    }

    const totalSec = playlist.songs.reduce((acc, s) => acc + (s.duration || 0), 0);
    const min = Math.round(totalSec / 60);
    if (metaText) metaText.innerText = `${playlist.songs.length} bài hát • ~${min} phút`;

    container.innerHTML = playlist.songs.map((song, idx) => `
      <div class="xmusic-song-item" data-index="${idx}">
        <div class="xmusic-song-info">
          <div class="xmusic-song-title">${idx + 1}. ${song.title}</div>
          <div class="xmusic-song-meta">${(song.artists || []).join(', ') || 'Nhiều ca sĩ'} • ${formatDuration(song.duration)}</div>
        </div>
        <div class="xmusic-song-actions">
          <button class="xmusic-btn-sm xmusic-btn-play-single" data-index="${idx}" title="Nạp bài này vào Đang Phát">▶</button>
          <button class="xmusic-btn-sm xmusic-btn-move-up" data-index="${idx}" title="Lên trên" ${idx === 0 ? 'disabled' : ''}>▲</button>
          <button class="xmusic-btn-sm xmusic-btn-move-down" data-index="${idx}" title="Xuống dưới" ${idx === playlist.songs.length - 1 ? 'disabled' : ''}>▼</button>
          <button class="xmusic-btn-sm xmusic-btn-del" data-index="${idx}" title="Xóa">✕</button>
        </div>
      </div>
    `).join('');

    // Play single song
    container.querySelectorAll('.xmusic-btn-play-single').forEach(btn => {
      btn.onclick = () => {
        const idx = parseInt(btn.dataset.index);
        const song = playlist.songs[idx];
        if (song) {
          showToast('Đang thêm bài hát vào hàng đợi phát...', 'info', 1500);
          addSongToQueue(song).then(ok => {
            if (ok) {
              updateQueueCountUI();
              showToast('Đã thêm "' + song.title + '" vào đang phát!', 'success', 2500);
            }
          });
        }
      };
    });

    container.querySelectorAll('.xmusic-btn-move-up').forEach(btn => {
      btn.onclick = () => {
        const idx = parseInt(btn.dataset.index);
        if (idx > 0) {
          const temp = playlist.songs[idx];
          playlist.songs[idx] = playlist.songs[idx - 1];
          playlist.songs[idx - 1] = temp;
          savePlaylists(playlists);
          renderCurrentPlaylistSongs();
        }
      };
    });

    container.querySelectorAll('.xmusic-btn-move-down').forEach(btn => {
      btn.onclick = () => {
        const idx = parseInt(btn.dataset.index);
        if (idx < playlist.songs.length - 1) {
          const temp = playlist.songs[idx];
          playlist.songs[idx] = playlist.songs[idx + 1];
          playlist.songs[idx + 1] = temp;
          savePlaylists(playlists);
          renderCurrentPlaylistSongs();
        }
      };
    });

    container.querySelectorAll('.xmusic-btn-del').forEach(btn => {
      btn.onclick = () => {
        const idx = parseInt(btn.dataset.index);
        const removed = playlist.songs.splice(idx, 1);
        savePlaylists(playlists);
        renderCurrentPlaylistSongs();
        updatePlaylistSelect();
        showToast('Đã xóa bài "' + (removed[0]?.title || '') + '"', 'info', 1500);
      };
    });
  }

  function updatePlaylistSelect() {
    const select = document.getElementById('xmusic-playlist-select');
    if (!select) return;
    const playlists = getPlaylists();
    const activeId = getActivePlaylistId();
    select.innerHTML = playlists.map(p => `<option value="${p.id}" ${p.id === activeId ? 'selected' : ''}>${p.name} (${p.songs.length} bài)</option>`).join('');
  }

  function formatDuration(sec) {
    if (!sec || isNaN(sec)) return '0:00';
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return m + ':' + (s < 10 ? '0' : '') + s;
  }

  // Publisher Tab Renderer
  async function loadAndRenderPublisherTab() {
    const pubSelect = document.getElementById('xmusic-publisher-select');
    const pubMeta = document.getElementById('xmusic-pub-meta');
    const songContainer = document.getElementById('xmusic-publisher-song-list');
    const cloneBtn = document.getElementById('xmusic-btn-clone-publisher');

    if (!pubSelect || !songContainer) return;

    let pubPlaylists = getPublisherPlaylists();
    if (pubPlaylists.length === 0) {
      pubPlaylists = await fetchPublisherPlaylists();
    }

    if (!pubPlaylists || pubPlaylists.length === 0) {
      if (pubMeta) pubMeta.innerText = 'Chưa thể kết nối kho bài hát nhà phát hành.';
      pubSelect.innerHTML = '<option value="">Không có dữ liệu</option>';
      songContainer.innerHTML = '<div style="text-align: center; color: #64748b; padding: 20px;">Vui lòng đăng nhập lại để xem danh sách nhà phát hành.</div>';
      return;
    }

    if (pubMeta) pubMeta.innerText = `Có ${pubPlaylists.length} danh sách phát có sẵn từ nhà phát hành`;

    pubSelect.innerHTML = pubPlaylists.map((p, idx) => 
      `<option value="${p.id}" ${idx === 0 ? 'selected' : ''}>${p.name} (${p.songDetails ? p.songDetails.length : (p.songKeys?.length || 0)} bài)</option>`
    ).join('');

    function renderPublisherSongsForSelected() {
      const selectedId = pubSelect.value;
      const currentPub = pubPlaylists.find(p => String(p.id) === String(selectedId));
      if (!currentPub || !currentPub.songDetails || currentPub.songDetails.length === 0) {
        songContainer.innerHTML = '<div style="text-align: center; color: #64748b; padding: 20px;">Danh sách này chưa có bài hát chi tiết.</div>';
        return;
      }

      const songList = currentPub.songDetails || currentPub.songs || [];
      songContainer.innerHTML = songList.map((song, idx) => `
        <div class="xmusic-song-item" data-key="${song.key}">
          <div class="xmusic-song-info">
            <div class="xmusic-song-title">${idx + 1}. ${song.title}</div>
            <div class="xmusic-song-meta">${(song.artists || []).join(', ') || 'Nhiều ca sĩ'} • ${formatDuration(song.duration)}</div>
          </div>
          <div class="xmusic-song-actions">
            <button class="xmusic-btn-sm xmusic-btn-add-to-mine" data-idx="${idx}" title="Thêm vào Playlist cá nhân đang chọn">+ List tôi</button>
            <button class="xmusic-btn-sm xmusic-btn-queue-single" data-idx="${idx}" title="Nạp trực tiếp vào hàng đợi đang phát">▶ Queue</button>
          </div>
        </div>
      `).join('');

      songContainer.querySelectorAll('.xmusic-btn-add-to-mine').forEach(btn => {
        btn.onclick = () => {
          try {
            const idx = parseInt(btn.getAttribute('data-idx'), 10);
            const song = songList[idx];
            if (song) addSongToActivePlaylist(song);
          } catch (e) {
            console.error('[XMusic Assistant] Lỗi thêm bài từ nhà phát hành:', e);
          }
        };
      });

      songContainer.querySelectorAll('.xmusic-btn-queue-single').forEach(btn => {
        btn.onclick = () => {
          try {
            const idx = parseInt(btn.getAttribute('data-idx'), 10);
            const song = songList[idx];
            if (!song) return;
            showToast('Đang nạp bài hát vào hàng đợi phát...', 'info', 1500);
            addSongToQueue(song).then(ok => {
              if (ok) {
                updateQueueCountUI();
                showToast('Đã thêm "' + song.title + '" vào đang phát!', 'success', 2500);
              }
            });
          } catch (e) {
            console.error('[XMusic Assistant] Lỗi nạp queue bài từ nhà phát hành:', e);
          }
        };
      });
    }

    pubSelect.onchange = renderPublisherSongsForSelected;
    renderPublisherSongsForSelected();

    if (cloneBtn) {
      cloneBtn.onclick = () => {
        clonePublisherPlaylist(pubSelect.value);
      };
    }
  }

  
  // ==========================================
  // MODAL & SHARE & SYNC ENGINE (v2.5.0)
  // ==========================================
  const CURATED_IDS = ['playlist-soi-dong-remix', 'playlist-rap-viet-thinh-hanh', 'playlist-ballad-cam-xuc'];

  function showModal(title, bodyHtml, onMount) {
    const existing = document.getElementById('xmusic-active-modal');
    if (existing) existing.remove();

    const overlay = document.createElement('div');
    overlay.id = 'xmusic-active-modal';
    overlay.className = 'xmusic-modal-overlay';
    overlay.innerHTML = `
      <div class="xmusic-modal-card">
        <div class="xmusic-modal-header">
          <div class="xmusic-modal-title">${title}</div>
          <button class="xmusic-modal-close" id="xmusic-modal-btn-close">✕</button>
        </div>
        <div class="xmusic-modal-body">
          ${bodyHtml}
        </div>
      </div>
    `;

    document.body.appendChild(overlay);

    const closeModal = () => overlay.remove();
    const closeBtn = overlay.querySelector('#xmusic-modal-btn-close');
    if (closeBtn) closeBtn.onclick = closeModal;
    overlay.onclick = (e) => {
      if (e.target === overlay) closeModal();
    };

    if (typeof onMount === 'function') {
      onMount(overlay, closeModal);
    }
  }

  function createShareCode(playlist) {
    if (!playlist) return '';
    const compact = {
      n: playlist.name,
      d: playlist.description,
      s: (playlist.songs || []).map(s => ({
        k: s.key,
        t: s.title,
        a: s.artists || [],
        d: s.duration || 0,
        u: s.streamUrl || '',
        i: s.image || ''
      }))
    };
    const jsonStr = JSON.stringify(compact);
    const b64 = btoa(encodeURIComponent(jsonStr).replace(/%([0-9A-F]{2})/g, (match, p1) => {
      return String.fromCharCode('0x' + p1);
    }));
    return 'XMPL2:' + b64;
  }

  function decodeShareCode(codeStr) {
    const clean = codeStr.trim();
    let jsonStr = '';
    if (clean.startsWith('XMPL2:') || clean.startsWith('XMPL:')) {
      const b64 = clean.replace(/^XMPL[0-9]*:/, '');
      jsonStr = decodeURIComponent(Array.prototype.map.call(atob(b64), c => {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join(''));
    } else if (clean.startsWith('{') || clean.startsWith('[')) {
      jsonStr = clean;
    } else {
      throw new Error('Mã không hợp lệ (cần bắt đầu bằng XMPL2: hoặc file JSON chuẩn)');
    }

    const obj = JSON.parse(jsonStr);
    if (Array.isArray(obj)) return obj;
    if (obj.n && Array.isArray(obj.s)) {
      return {
        id: 'playlist-shared-' + Date.now(),
        name: obj.n,
        description: obj.d || ('Được chia sẻ ngày ' + new Date().toLocaleDateString('vi-VN')),
        createdAt: new Date().toISOString(),
        songs: obj.s.map(s => ({
          key: s.k || s.key,
          title: s.t || s.title,
          artists: s.a || s.artists || [],
          duration: s.d || s.duration || 0,
          streamUrl: s.u || s.streamUrl || '',
          image: s.i || s.image || ''
        }))
      };
    }
    if (obj.name && Array.isArray(obj.songs)) {
      return {
        id: obj.id || ('playlist-shared-' + Date.now()),
        name: obj.name,
        description: obj.description || '',
        createdAt: obj.createdAt || new Date().toISOString(),
        songs: obj.songs
      };
    }
    throw new Error('Dữ liệu không đúng cấu trúc playlist chuẩn');
  }

  function smartUpdatePlaylists(newCuratedPlaylists, keepUserCustom = true) {
    const current = getPlaylists();
    if (!keepUserCustom) {
      savePlaylists(newCuratedPlaylists);
      localStorage.setItem(STORAGE_KEYS.PLAYLISTS_VERSION, APP_VERSION);
      return newCuratedPlaylists;
    }
    const userCustomPlaylists = current.filter(p => !CURATED_IDS.includes(p.id));
    const merged = [...newCuratedPlaylists, ...userCustomPlaylists];
    savePlaylists(merged);
    localStorage.setItem(STORAGE_KEYS.PLAYLISTS_VERSION, APP_VERSION);
    return merged;
  }

  function openShareModal(playlist) {
    if (!playlist) {
      showToast('Vui lòng chọn playlist muốn chia sẻ!', 'error');
      return;
    }
    const shareCode = createShareCode(playlist);
    const bodyHtml = `
      <div style="font-weight: 700; font-size: 15px; color: #38bdf8; margin-bottom: 4px;">
        🎵 ${escapeHtml(playlist.name)}
      </div>
      <div style="color: #94a3b8; font-size: 12px; margin-bottom: 14px;">
        ${playlist.songs ? playlist.songs.length : 0} bài hát • ${escapeHtml(playlist.description || '')}
      </div>

      <div style="background: rgba(30, 41, 59, 0.7); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 10px; padding: 12px; margin-bottom: 14px;">
        <div style="font-weight: 700; color: #a5b4fc; font-size: 12.5px; margin-bottom: 4px;">
          📋 CÁCH 1: MÃ CHIA SẺ NHANH (Gửi qua Zalo, Messenger, Teams...)
        </div>
        <div style="font-size: 11.5px; color: #94a3b8; margin-bottom: 8px; line-height: 1.4;">
          Mã bên dưới chứa toàn bộ danh sách bài hát. Người nhận chỉ cần bấm nút <b>"📥 Nhập"</b> trên công cụ XMusic và dán mã vào là nghe được ngay!
        </div>
        <textarea id="xmusic-share-code-box" class="xmusic-share-textarea" readonly style="width: 100%; height: 75px; font-family: monospace; font-size: 11px; background: rgba(15, 23, 42, 0.8); border: 1px solid rgba(255, 255, 255, 0.15); border-radius: 6px; color: #cbd5e1; padding: 8px;">${shareCode}</textarea>
        <button id="xmusic-btn-copy-code" class="xmusic-btn-primary" style="width: 100%; margin-top: 8px;">
          📋 Sao Chép Mã Chia Sẻ (1-Click)
        </button>
      </div>

      <div style="background: rgba(30, 41, 59, 0.7); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 10px; padding: 12px;">
        <div style="font-weight: 700; color: #34d399; font-size: 12.5px; margin-bottom: 4px;">
          💾 CÁCH 2: TẢI FILE JSON RIÊNG
        </div>
        <div style="font-size: 11.5px; color: #94a3b8; margin-bottom: 8px;">
          Lưu file <code>.json</code> về máy để chia sẻ đính kèm hoặc sao lưu riêng playlist này.
        </div>
        <button id="xmusic-btn-dl-json" class="xmusic-btn-secondary" style="width: 100%;">
          💾 Tải File JSON (${escapeHtml(playlist.name)}.json)
        </button>
      </div>
    `;

    showModal('🔗 Chia Sẻ Playlist Cho Người Khác', bodyHtml, (overlay, closeModal) => {
      const copyBtn = overlay.querySelector('#xmusic-btn-copy-code');
      if (copyBtn) {
        copyBtn.onclick = () => {
          navigator.clipboard.writeText(shareCode).then(() => {
            showToast('✓ Đã sao chép mã chia sẻ vào Clipboard!', 'success');
          }).catch(() => {
            const ta = overlay.querySelector('#xmusic-share-code-box');
            if (ta) {
              ta.select();
              document.execCommand('copy');
              showToast('✓ Đã sao chép mã chia sẻ!', 'success');
            }
          });
        };
      }

      const dlBtn = overlay.querySelector('#xmusic-btn-dl-json');
      if (dlBtn) {
        dlBtn.onclick = () => {
          const blob = new Blob([JSON.stringify(playlist, null, 2)], { type: 'application/json' });
          const url = URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = (playlist.name.replace(/[^a-zA-Z0-9-_]/g, '_') || 'playlist') + '.json';
          a.click();
          URL.revokeObjectURL(url);
          showToast('Đã tải xuống file ' + a.download, 'success');
        };
      }
    });
  }

  function openImportModal() {
    const bodyHtml = `
      <div style="background: rgba(30, 41, 59, 0.7); border: 1px solid rgba(99, 102, 241, 0.3); border-radius: 10px; padding: 12px; margin-bottom: 14px;">
        <div style="font-weight: 700; color: #a5b4fc; font-size: 13px; margin-bottom: 4px;">
          📁 CÁCH 1: NHẬP TỪ FILE SAO LƯU JSON TRÊN MÁY
        </div>
        <div style="font-size: 11.5px; color: #94a3b8; margin-bottom: 10px;">
          Khôi phục playlist từ file bạn đã bấm <b>"📤 Xuất"</b> hoặc file <code>.json</code> được người khác gửi.
        </div>
        <button id="xmusic-btn-choose-file" class="xmusic-btn-primary" style="width: 100%;">
          📂 Chọn File JSON Từ Máy Tính Của Bạn
        </button>
      </div>

      <div style="background: rgba(30, 41, 59, 0.7); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 10px; padding: 12px;">
        <div style="font-weight: 700; color: #38bdf8; font-size: 13px; margin-bottom: 4px;">
          📋 CÁCH 2: DÁN MÃ CHIA SẺ HOẶC LINK URL
        </div>
        <div style="font-size: 11.5px; color: #94a3b8; margin-bottom: 8px;">
          Dán mã chia sẻ (bắt đầu bằng <code>XMPL2:</code>) hoặc đường link file JSON:
        </div>
        <textarea id="xmusic-import-input" class="xmusic-share-textarea" placeholder="Dán mã XMPL2:... hoặc nội dung JSON vào đây..." style="width: 100%; height: 70px; font-family: monospace; font-size: 11px; background: rgba(15, 23, 42, 0.8); border: 1px solid rgba(255, 255, 255, 0.15); border-radius: 6px; color: #cbd5e1; padding: 8px;"></textarea>
        <div id="xmusic-import-preview" style="margin-top: 8px; font-size: 12px; min-height: 20px;"></div>
        <div style="display: flex; gap: 8px; margin-top: 10px;">
          <button id="xmusic-btn-preview-import" class="xmusic-btn-secondary" style="flex: 1;">🔍 Kiểm Tra</button>
          <button id="xmusic-btn-confirm-import" class="xmusic-btn-primary" style="flex: 1;" disabled>➕ Thêm Vào Danh Sách</button>
        </div>
      </div>
    `;

    showModal('📥 Nhập Playlist (File JSON / Mã Chia Sẻ)', bodyHtml, (overlay, closeModal) => {
      // Cách 1: Chọn file JSON
      const chooseFileBtn = overlay.querySelector('#xmusic-btn-choose-file');
      const fileInput = document.getElementById('xmusic-file-import');
      if (chooseFileBtn && fileInput) {
        chooseFileBtn.onclick = () => {
          fileInput.click();
        };
      }

      // Cách 2: Nhập mã
      const inputEl = overlay.querySelector('#xmusic-import-input');
      const previewEl = overlay.querySelector('#xmusic-import-preview');
      const previewBtn = overlay.querySelector('#xmusic-btn-preview-import');
      const confirmBtn = overlay.querySelector('#xmusic-btn-confirm-import');

      let parsedData = null;

      const runPreview = async () => {
        const text = inputEl.value.trim();
        if (!text) {
          previewEl.innerHTML = '<span style="color: #f87171;">Vui lòng nhập mã hoặc URL!</span>';
          confirmBtn.disabled = true;
          return;
        }

        previewEl.innerHTML = '<span style="color: #94a3b8;">Đang kiểm tra và giải mã...</span>';

        try {
          if (text.startsWith('http://') || text.startsWith('https://')) {
            const res = await fetch(text);
            const json = await res.json();
            parsedData = decodeShareCode(JSON.stringify(json));
          } else {
            parsedData = decodeShareCode(text);
          }

          if (Array.isArray(parsedData)) {
            previewEl.innerHTML = `<span style="color: #34d399; font-weight: 600;">✓ Hợp lệ: Bộ sưu tập gồm ${parsedData.length} playlist (${parsedData.reduce((acc, p) => acc + (p.songs ? p.songs.length : 0), 0)} bài hát).</span>`;
            confirmBtn.disabled = false;
          } else if (parsedData && parsedData.name) {
            previewEl.innerHTML = `<span style="color: #34d399; font-weight: 600;">✓ Hợp lệ:</span> <b>${escapeHtml(parsedData.name)}</b> (${parsedData.songs ? parsedData.songs.length : 0} bài hát).`;
            confirmBtn.disabled = false;
          } else {
            previewEl.innerHTML = '<span style="color: #f87171;">Không nhận dạng được playlist hợp lệ!</span>';
            confirmBtn.disabled = true;
          }
        } catch (e) {
          previewEl.innerHTML = `<span style="color: #f87171;">Lỗi giải mã: ${escapeHtml(e.message)}</span>`;
          confirmBtn.disabled = true;
        }
      };

      if (previewBtn) previewBtn.onclick = runPreview;
      if (inputEl) {
        inputEl.oninput = () => {
          if (inputEl.value.trim().length > 15) runPreview();
        };
      }

      if (confirmBtn) {
        confirmBtn.onclick = () => {
          if (!parsedData) return;
          const playlists = getPlaylists();
          if (Array.isArray(parsedData)) {
            parsedData.forEach(p => {
              if (!p.id) p.id = 'playlist-shared-' + Date.now() + Math.random().toString(36).substring(2, 5);
              playlists.push(p);
            });
            savePlaylists(playlists);
            setActivePlaylistId(parsedData[0].id);
            showToast(`Đã nạp thành công ${parsedData.length} playlist mới!`, 'success');
          } else {
            parsedData.id = 'playlist-shared-' + Date.now();
            playlists.push(parsedData);
            savePlaylists(playlists);
            setActivePlaylistId(parsedData.id);
            showToast(`Đã thêm playlist "${parsedData.name}" (${parsedData.songs.length} bài)!`, 'success');
          }
          updatePlaylistSelect();
          renderCurrentPlaylistSongs();
          closeModal();
        };
      }
    });
  }

  function openSyncCloudModal() {
    // Chuyển thẳng sang tab "🚀 Cập Nhật" và kích hoạt kiểm tra ngay
    const updateTabBtn = document.querySelector('.xmusic-tab-btn[data-tab="tab-update"]');
    if (updateTabBtn) {
      updateTabBtn.click();
      const resEl = document.getElementById('xmusic-github-check-result');
      if (resEl) {
        checkGithubUpdates(resEl);
      }
      showToast('Đang kết nối trung tâm cập nhật GitHub Admin...', 'info', 1500);
    }
  }

  function bindSidebarEvents() {
    const floatBtn = document.getElementById('xmusic-floating-btn');
    const sidebar = document.getElementById('xmusic-sidebar');
    const backdrop = document.getElementById('xmusic-backdrop');
    const closeBtn = document.getElementById('xmusic-btn-close-sidebar');
    const queueBtn = document.getElementById('xmusic-btn-queue');
    const shuffleQueueBtn = document.getElementById('xmusic-btn-shuffle-queue');
    const clearQueueBtn = document.getElementById('xmusic-btn-clear-queue');
    const playlistSelect = document.getElementById('xmusic-playlist-select');
    const autoPopCheck = document.getElementById('xmusic-check-autopop');
    const shuffleCheck = document.getElementById('xmusic-check-shuffle');
    const btnShuffleList = document.getElementById('xmusic-btn-shuffle-list');
    const btnUndoShuffle = document.getElementById('xmusic-btn-undo-shuffle');

    function openSidebar() {
      if (sidebar) sidebar.classList.add('open');
      if (backdrop) backdrop.classList.add('active');
      updateQueueCountUI();
      fetchPublisherPlaylists().then(() => loadAndRenderPublisherTab());
    }

    function closeSidebar() {
      if (sidebar) sidebar.classList.remove('open');
      if (backdrop) backdrop.classList.remove('active');
    }

    if (floatBtn) floatBtn.onclick = openSidebar;
    if (closeBtn) closeBtn.onclick = closeSidebar;
    if (backdrop) backdrop.onclick = closeSidebar;

    // Shuffle Buttons
    if (btnShuffleList) {
      btnShuffleList.onclick = shuffleCurrentPlaylist;
    }

    if (btnUndoShuffle) {
      btnUndoShuffle.onclick = undoShuffleCurrentPlaylist;
    }

    // Clear Queue
    if (clearQueueBtn) {
      clearQueueBtn.onclick = () => {
        if (confirm('Xác nhận xóa sạch hàng đợi phát nhạc hiện tại?')) {
          clearCurrentQueue();
        }
      };
    }

    // Playlist Change
    if (playlistSelect) {
      playlistSelect.onchange = (e) => {
        setActivePlaylistId(e.target.value);
        lastPlaylistUndoState = null;
        renderCurrentPlaylistSongs();
      };
    }

    // Standard Queue Button Click
    if (queueBtn) {
      queueBtn.onclick = () => {
        const playlists = getPlaylists();
        const activeId = getActivePlaylistId();
        const playlist = playlists.find(p => p.id === activeId);
        if (playlist) populateQueue(playlist, false);
      };
    }

    // Shuffle & Queue Button Click
    if (shuffleQueueBtn) {
      shuffleQueueBtn.onclick = () => {
        const playlists = getPlaylists();
        const activeId = getActivePlaylistId();
        const playlist = playlists.find(p => p.id === activeId);
        if (playlist) populateQueue(playlist, true);
      };
    }

    // Checkboxes
    if (autoPopCheck) {
      autoPopCheck.onchange = (e) => {
        setAutoPopulateEnabled(e.target.checked);
        showToast(e.target.checked ? 'Đã bật tự động nạp playlist khi vào web' : 'Đã tắt tự động nạp playlist', 'info');
      };
    }

    if (shuffleCheck) {
      shuffleCheck.onchange = (e) => {
        setShuffleOnQueueEnabled(e.target.checked);
        showToast(e.target.checked ? 'Đã bật tự động xáo trộn ngẫu nhiên khi nạp queue' : 'Đã tắt trộn bài khi nạp', 'info');
      };
    }

    // Tabs Switching
    document.querySelectorAll('.xmusic-tab-btn').forEach(btn => {
      btn.onclick = () => {
        document.querySelectorAll('.xmusic-tab-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(c => c.style.display = 'none');
        btn.classList.add('active');
        const targetId = btn.dataset.tab;
        const target = document.getElementById(targetId);
        if (target) target.style.display = 'block';

        if (targetId === 'tab-publisher') {
          loadAndRenderPublisherTab();
        }
        if (targetId === 'tab-update') {
          const resEl = document.getElementById('xmusic-github-check-result');
          if (resEl && !resEl.hasChildNodes()) {
            checkGithubUpdates(resEl);
          }
        }
      };
    });

    // Create New Playlist
    const newPlBtn = document.getElementById('xmusic-btn-new-pl');
    if (newPlBtn) {
      newPlBtn.onclick = () => {
        const name = prompt('Nhập tên Playlist mới:');
        if (name && name.trim()) {
          const playlists = getPlaylists();
          const newPl = {
            id: 'playlist-' + Date.now(),
            name: name.trim(),
            description: 'Tạo ngày ' + new Date().toLocaleDateString('vi-VN'),
            createdAt: new Date().toISOString(),
            songs: []
          };
          playlists.push(newPl);
          savePlaylists(playlists);
          setActivePlaylistId(newPl.id);
          updatePlaylistSelect();
          renderCurrentPlaylistSongs();
          showToast('Đã tạo playlist "' + newPl.name + '"', 'success');
        }
      };
    }

    // Share & Sync Actions (v2.2.0)
    const sharePlBtn = document.getElementById('xmusic-btn-share-pl');
    const shareCurrBtn = document.getElementById('xmusic-btn-share-curr');
    const importCodeBtn = document.getElementById('xmusic-btn-import-code');
    const syncCloudBtn = document.getElementById('xmusic-btn-sync-cloud');

    const handleShareActive = () => {
      const playlists = getPlaylists();
      const activeId = getActivePlaylistId();
      const pl = playlists.find(p => p.id === activeId);
      if (pl) openShareModal(pl);
    };

    if (sharePlBtn) sharePlBtn.onclick = handleShareActive;
    if (shareCurrBtn) shareCurrBtn.onclick = handleShareActive;
    const importBtn = document.getElementById('xmusic-btn-import');
    if (importBtn) importBtn.onclick = () => openImportModal();
    if (importCodeBtn) importCodeBtn.onclick = () => openImportModal();
    if (syncCloudBtn) syncCloudBtn.onclick = () => openSyncCloudModal();

    // Reset to Sample Playlists
    
    // GitHub Update Center bindings (Locked to official Admin source)
    const btnCheckGithub = document.getElementById('xmusic-btn-check-github');
    const resultArea = document.getElementById('xmusic-github-check-result');

    if (btnCheckGithub && resultArea) {
      btnCheckGithub.onclick = () => {
        checkGithubUpdates(resultArea);
      };
    }

    const resetPlBtn = document.getElementById('xmusic-btn-reset-pl');
    if (resetPlBtn) {
      resetPlBtn.onclick = () => {
        if (confirm('Khôi phục lại 3 playlist mẫu tuyển chọn V-Pop đỉnh cao (300 bài hát)?')) {
          savePlaylists(DEFAULT_PLAYLISTS);
          setActivePlaylistId(DEFAULT_PLAYLISTS[0].id);
          updatePlaylistSelect();
          renderCurrentPlaylistSongs();
          showToast('Đã khôi phục 3 danh sách phát mẫu tuyển chọn v2.5.0 (300 bài)!', 'success');
        }
      };
    }

    // Export Playlists
    const exportBtn = document.getElementById('xmusic-btn-export');
    if (exportBtn) {
      exportBtn.onclick = () => {
        const playlists = getPlaylists();
        const blob = new Blob([JSON.stringify(playlists, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'xmusic_playlists_backup.json';
        a.click();
        URL.revokeObjectURL(url);
        showToast('Đã xuất file xmusic_playlists_backup.json', 'success');
      };
    }

    // File Import Change Listener
    const fileImport = document.getElementById('xmusic-file-import');
    if (fileImport) {
      fileImport.onchange = (e) => {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (evt) => {
          try {
            const imported = JSON.parse(evt.target.result);
            if (Array.isArray(imported) && imported.length > 0) {
              savePlaylists(imported);
              setActivePlaylistId(imported[0].id);
              updatePlaylistSelect();
              renderCurrentPlaylistSongs();
              showToast('Đã nhập thành công ' + imported.length + ' playlist!', 'success');
            } else {
              showToast('File JSON không hợp lệ!', 'error');
            }
          } catch (err) {
            showToast('Lỗi đọc file: ' + err.message, 'error');
          }
        };
        reader.readAsText(file);
      };
    }

    // Hybrid Song Search in Tab 3
    const searchInput = document.getElementById('xmusic-live-search');
    const searchResults = document.getElementById('xmusic-search-results');
    let searchTimer = null;

    if (searchInput && searchResults) {
      searchInput.oninput = () => {
        clearTimeout(searchTimer);
        const kw = searchInput.value.trim();
        if (!kw) {
          searchResults.style.display = 'none';
          searchResults.innerHTML = '';
          return;
        }

        searchTimer = setTimeout(async () => {
          searchResults.style.display = 'block';
          searchResults.innerHTML = '<div style="padding: 14px; text-align: center; color: #94a3b8; font-size: 12px;">Đang tìm kiếm bài hát thông minh...</div>';

          try {
            const token = localStorage.getItem('token') || '';
            const kwNorm = normalizeText(kw);

            // 1. Search locally in publisher songs catalog (Instant + covers unsearchable songs)
            const pubSongs = getAllPublisherSongs();
            const matchedPubSongs = pubSongs.filter(s => {
              const t = normalizeText(s.title);
              const a = normalizeText((s.artists || []).join(' '));
              return t.includes(kwNorm) || a.includes(kwNorm);
            });

            // 2. Search online API
            let onlineSongs = [];
            try {
              const res = await fetch('https://web.xmusicstation.com/api/v1/player/playlist/search-songs?keyword=' + encodeURIComponent(kw), {
                headers: {
                  'Token': token,
                  'Authorization': 'Bearer ' + token,
                  'x-bgm-lang': 'vi'
                }
              });
              const data = await res.json();
              if (data.code === 0 && Array.isArray(data.data)) {
                onlineSongs = data.data;
              }
            } catch (err) {}

            // 3. Merge & Deduplicate results
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

            if (combined.length === 0) {
              searchResults.innerHTML = '<div style="padding: 14px; text-align: center; color: #94a3b8; font-size: 12px;">Không tìm thấy bài hát phù hợp.</div>';
              return;
            }

            searchResults.innerHTML = combined.slice(0, 20).map((s, idx) => `
              <div class="xmusic-search-result-item">
                <div style="flex: 1; overflow: hidden; margin-right: 10px;">
                  <div style="font-weight: 600; font-size: 13px; color: #f8fafc; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                    ${s.title}
                  </div>
                  <div style="font-size: 11.5px; color: #94a3b8;">
                    ${(s.artists || []).join(', ')} • ${formatDuration(s.duration)}
                  </div>
                  ${s.isFromPublisher ? `<span class="xmusic-tag-source publisher">📻 Kho Nhà Phát Hành: ${s.fromPublisherPlaylist || ''}</span>` : `<span class="xmusic-tag-source online">🌐 Online XMusic</span>`}
                </div>
                <div style="display: flex; gap: 6px;">
                  <button class="xmusic-btn-sm xmusic-btn-add-search" data-idx="${idx}" style="padding: 6px 10px;">+ List tôi</button>
                  <button class="xmusic-btn-sm xmusic-btn-quick-play" data-idx="${idx}" style="padding: 6px 10px; color: #34d399;">▶ Queue</button>
                </div>
              </div>
            `).join('');

            // Add to My Playlist
            searchResults.querySelectorAll('.xmusic-btn-add-search').forEach(addBtn => {
              addBtn.onclick = () => {
                try {
                  const idx = parseInt(addBtn.getAttribute('data-idx'), 10);
                  const songData = combined[idx];
                  if (songData) {
                    addSongToActivePlaylist(songData);
                    addBtn.innerText = '✓ Đã thêm';
                    addBtn.disabled = true;
                    addBtn.style.color = '#4ade80';
                  }
                } catch (e) {
                  console.error('[XMusic Assistant] Lỗi thêm bài từ tìm kiếm:', e);
                }
              };
            });

            // Quick Queue Single Song
            searchResults.querySelectorAll('.xmusic-btn-quick-play').forEach(qBtn => {
              qBtn.onclick = () => {
                try {
                  const idx = parseInt(qBtn.getAttribute('data-idx'), 10);
                  const songData = combined[idx];
                  if (!songData) return;
                  showToast('Đang nạp bài vào hàng đợi...', 'info', 1500);
                  addSongToQueue(songData).then(ok => {
                    if (ok) {
                      updateQueueCountUI();
                      qBtn.innerText = '✓ Đang phát';
                      qBtn.disabled = true;
                      showToast('Đã nạp "' + songData.title + '" vào đang phát!', 'success', 2500);
                    }
                  });
                } catch (e) {
                  console.error('[XMusic Assistant] Lỗi nạp queue bài từ tìm kiếm:', e);
                }
              };
            });

          } catch (e) {
            searchResults.innerHTML = '<div style="padding: 14px; text-align: center; color: #ef4444; font-size: 12px;">Lỗi tìm kiếm: ' + e.message + '</div>';
          }
        }, 300);
      };
    }

    // Save Config
    const saveCfgBtn = document.getElementById('xmusic-btn-save-cfg');
    const reloginBtn = document.getElementById('xmusic-btn-relogin');
    if (saveCfgBtn) {
      saveCfgBtn.onclick = () => {
        const u = document.getElementById('xmusic-cfg-user')?.value.trim();
        const p = document.getElementById('xmusic-cfg-pass')?.value.trim();
        const auto = document.getElementById('xmusic-cfg-autologin')?.checked;

        if (!u || !p) {
          showToast('Vui lòng nhập tài khoản và mật khẩu!', 'error');
          return;
        }

        saveAuthConfig({ username: u, password: p, autoLogin: !!auto });
        showToast('Đã lưu cấu hình tài khoản vào LocalStorage!', 'success');
      };
    }

    // Re-login Button
    if (reloginBtn) {
      reloginBtn.onclick = async () => {
        const u = document.getElementById('xmusic-cfg-user')?.value.trim();
        const p = document.getElementById('xmusic-cfg-pass')?.value.trim();
        if (!u || !p) {
          showToast('Vui lòng nhập tài khoản và mật khẩu!', 'error');
          return;
        }
        showToast('Đang đăng nhập lại...', 'info');
        try {
          const res = await fetch('https://web.xmusicstation.com/api/v1/pub/player/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: u, password: p })
          });
          const d = await res.json();
          if (d.code === 0 && d.data && d.data.token) {
            localStorage.setItem('token', d.data.token);
            localStorage.setItem('userInfo', JSON.stringify(d.data.userInfo));
            saveAuthConfig({ username: u, password: p, autoLogin: true });
            showToast('Đăng nhập lại thành công: ' + (d.data.userInfo.fullname || u), 'success');
            const authStatus = document.getElementById('xmusic-auth-status');
            if (authStatus) {
              authStatus.className = 'xmusic-status-pill logged-in';
              authStatus.innerText = '● ' + u;
            }
            fetchPublisherPlaylists().then(() => loadAndRenderPublisherTab());
          } else {
            showToast('Đăng nhập thất bại: ' + (d.msg || 'Lỗi'), 'error');
          }
        } catch (e) {
          showToast('Lỗi mạng khi đăng nhập', 'error');
        }
      };
    }
  }

  // Session & Initialization Controller
  async function init() {
    injectMainWorldBridge();

    // 1. Auto-login check
    const token = localStorage.getItem('token');
    const isLoginPage = window.location.pathname.includes('/login') || !!document.querySelector('.login-form-wrap');
    const auth = getAuthConfig();

    if ((!token || isLoginPage) && auth.autoLogin && auth.username && auth.password) {
      console.log('[XMusic Assistant] Triggering auto-login for user:', auth.username);
      try {
        const res = await fetch('https://web.xmusicstation.com/api/v1/pub/player/auth/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username: auth.username, password: auth.password })
        });
        const data = await res.json();
        if (data.code === 0 && data.data?.token) {
          localStorage.setItem('token', data.data.token);
          localStorage.setItem('userInfo', JSON.stringify(data.data.userInfo));
          if (isLoginPage) {
            window.location.href = '/';
            return;
          }
        }
      } catch (err) {
        console.warn('Auto-login error:', err);
      }
    }

    // 2. Fetch publisher playlists in background
    fetchPublisherPlaylists();

    // 3. Inject Left Sidebar UI immediately & retry until attached
    function tryInject() {
      if (document.getElementById('xmusic-assistant-root')) return true;
      if (document.body || document.documentElement) {
        injectLeftSidebarWidget();
        return !!document.getElementById('xmusic-assistant-root');
      }
      return false;
    }

    if (!tryInject()) {
      let attempts = 0;
      const checkInterval = setInterval(() => {
        attempts++;
        if (tryInject() || attempts > 25) {
          clearInterval(checkInterval);
        }
      }, 250);
    }

    // 4. Auto-populate playlist on load if enabled
    if (isAutoPopulateEnabled() && !window.location.pathname.includes('/login')) {
      const autoKey = 'xmusic_autopopulated_session_' + new Date().toDateString();
      if (!sessionStorage.getItem(autoKey)) {
        sessionStorage.setItem(autoKey, 'true');
        setTimeout(() => {
          const playlists = getPlaylists();
          const activeId = getActivePlaylistId();
          const activePl = playlists.find(p => p.id === activeId);
          if (activePl && activePl.songs && activePl.songs.length > 0) {
            console.log('[XMusic Assistant] Tự động nạp playlist khi vào web...');
            populateQueue(activePl, isShuffleOnQueueEnabled());
          }
        }, 1800);
      }
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
