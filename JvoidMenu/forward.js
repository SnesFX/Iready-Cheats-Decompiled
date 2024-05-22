chrome.webRequest.onBeforeRequest.addListener(function (iReady) {
  if (iReady.url.includes("/app-18.chunk.js")) {
    return {
      cancel: true
    };
  } else if (iReady.url.includes("trackjs") || iReady.url.includes("/logger")) {
    return {
      cancel: true
    };
  }
}, {
  urls: ["<all_urls>"]
}, ["blocking"]);
