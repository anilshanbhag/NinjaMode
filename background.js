chrome.webNavigation.onBeforeNavigate.addListener(function(details){
    if(details.url.indexOf("twitch.tv") > -1)
        chrome.tabs.update(details.tabId, {url:"https://www.youtube.com/watch?v=yX39J_YyKbs"});
});
