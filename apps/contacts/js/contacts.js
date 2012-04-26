'use strict';

var Contacts = {
  init: function contacts_init() {
  }
};

window.addEventListener('load', function contactsLoad(aEvent) {
  window.removeEventListener('load', contactsLoad);
  Contacts.init();
});
