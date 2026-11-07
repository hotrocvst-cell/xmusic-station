// popup.js - Extension Toolbar Action Controller
document.addEventListener('DOMContentLoaded', () => {
  const openPlayerBtn = document.getElementById('btn-open-player');
  const playlistSelect = document.getElementById('popup-playlist-select');

  // Load playlists from chrome.storage or fallback
  if (chrome.storage && chrome.storage.local) {
    chrome.storage.local.get(['xmusic_playlists', 'xmusic_active_playlist_id'], (result) => {
      if (result.xmusic_playlists && Array.isArray(result.xmusic_playlists)) {
        playlistSelect.innerHTML = result.xmusic_playlists.map(p => 
          `<option value="${p.id}" ${p.id === result.xmusic_active_playlist_id ? 'selected' : ''}>${p.name} (${p.songs.length} bài)</option>`
        ).join('');
      }
    });
  }

  if (playlistSelect) {
    playlistSelect.addEventListener('change', (e) => {
      if (chrome.storage && chrome.storage.local) {
        chrome.storage.local.set({ xmusic_active_playlist_id: e.target.value });
      }
    });
  }

  if (openPlayerBtn) {
    openPlayerBtn.addEventListener('click', () => {
      chrome.tabs.create({ url: 'https://player.xmusicstation.com/' });
    });
  }
});
