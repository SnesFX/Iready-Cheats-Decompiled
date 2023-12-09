chrome.webRequest.onBeforeRequest.addListener(function (_0x36ba1e) {
  if (_0x36ba1e.url.includes("/app-18.chunk.js")) {
    return {
      cancel: true
    };
  } else if (_0x36ba1e.url.includes("trackjs") || _0x36ba1e.url.includes("/logger")) {
    return {
      cancel: true
    };
  }
}, {
  urls: ["<all_urls>"]
}, ["blocking"]);
