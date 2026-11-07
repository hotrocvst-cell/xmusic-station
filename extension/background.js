// background.js - Service Worker for XMusicStation Extension
chrome.runtime.onInstalled.addListener(() => {
  console.log('[XMusic Assistant] Extension installed successfully.');
});

// Listener for messages from popup or content script
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'OPEN_PLAYER') {
    chrome.tabs.create({ url: 'https://player.xmusicstation.com/' });
    sendResponse({ success: true });
  }
  return true;
});
