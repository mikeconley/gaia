'use strict';

function choiceChanged(target) {
  var choice = target.dataset.choice;
  if (!choice)
    return;

  var view = document.getElementById(choice + '-view');
  if (!view)
    return;

  var tabs = document.getElementById('tabs').querySelector('fieldset');
  var tabsCount = tabs.childElementCount;
  for (var i = 0; i < tabsCount; i++) {
    var tab = tabs.children[i];
    delete tab.dataset.active;

    var tabView = document.getElementById(tab.dataset.choice + '-view');
    if (tabView)
      tabView.hidden = true;
  }

  target.dataset.active = true;
  view.hidden = false;
}

// Set the 'lang' and 'dir' attributes to <html> when the page is translated
window.addEventListener('localized', function showBody() {
  var html = document.querySelector('html');
  var lang = document.mozL10n.language;
  html.setAttribute('lang', lang.code);
  html.setAttribute('dir', lang.direction);
  // <body> children are hidden until the UI is translated
  document.body.classList.remove('hidden');
});
