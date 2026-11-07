/**
 * Test authentication & search capabilities on XMusicStation API
 */
async function test() {
  const credentials = {
    username: 'tgd111',
    password: 'mwg2025'
  };

  console.log('1. Đang gửi yêu cầu đăng nhập tới XMusicStation API...');
  try {
    const loginRes = await fetch('https://web.xmusicstation.com/api/v1/pub/player/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials)
    });

    const loginData = await loginRes.json();
    if (loginData.code === 0 && loginData.data?.token) {
      console.log('✅ Đăng nhập THÀNH CÔNG!');
      console.log(' - User ID:', loginData.data.userId);
      console.log(' - Cửa hàng:', loginData.data.userInfo.fullname);
      console.log(' - Địa chỉ:', loginData.data.userInfo.address);
      console.log(' - Token:', loginData.data.token.substring(0, 30) + '...');

      console.log('\n2. Kiểm tra tìm kiếm bài hát với token vừa cấp...');
      const searchRes = await fetch('https://web.xmusicstation.com/api/v1/player/playlist/search-songs?keyword=Acoustic', {
        headers: {
          'Token': loginData.data.token,
          'Authorization': 'Bearer ' + loginData.data.token,
          'x-bgm-lang': 'vi'
        }
      });
      const searchData = await searchRes.json();
      if (searchData.code === 0 && Array.isArray(searchData.data)) {
        console.log(`✅ Tìm kiếm bài hát thành công! Nhận được ${searchData.data.length} kết quả.`);
        console.log('   Mẫu bài đầu tiên:', searchData.data[0].title, '-', (searchData.data[0].artists || []).join(', '));
      } else {
        console.log('⚠️ Tìm kiếm không trả về kết quả:', searchData);
      }
    } else {
      console.error('❌ Đăng nhập thất bại:', loginData);
    }
  } catch (err) {
    console.error('❌ Lỗi kết nối:', err);
  }
}

test();
