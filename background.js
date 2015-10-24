chrome.webNavigation.onBeforeNavigate.addListener(function(details) {
  chrome.storage.sync.get({
    patterns: '',
    redirectLink: 'https://www.youtube.com/watch?v=yX39J_YyKbs'
  }, function(items) {
    var parts = items.patterns.split('\n');
    var redirect = false;
    for (var i=0; i<parts.length; i++) {
      var pattern = parts[i].trim();
      if (pattern && details.url.indexOf(pattern) > -1) {
        redirect = true;
        break;
      }
    }

    if (redirect)
      chrome.tabs.update(details.tabId, {url : items.redirectLink});
  });
});
