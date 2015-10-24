function save_options() {
  var patterns = document.querySelector('#patterns').value;
  var redirectLink = document.querySelector('#redirectLink').value;
  // TODO: Add validation
  chrome.storage.sync.set({
    patterns: patterns,
    redirectLink: redirectLink
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.innerHTML = 'Options saved.';
    setTimeout(function() {
      status.innerHTML = '';
    }, 2000);
  });
  return false;
}

function restore_options() {
  chrome.storage.sync.get({
    patterns: '',
    redirectLink: 'https://www.youtube.com/watch?v=yX39J_YyKbs'
  }, function(items) {
    document.getElementById('patterns').value = items.patterns;
    document.getElementById('redirectLink').value = items.redirectLink;
  });
}

var form = document.getElementById('settings');
form.onsubmit = save_options;
document.addEventListener('DOMContentLoaded', restore_options);
