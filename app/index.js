'use strict';

import behaviors from './behaviors';

// Sets app default base URL
let baseUrl = '/';
if (window.location.port === '') {  // if production
  // Uncomment app.baseURL below and
  // set app.baseURL to '/your-pathname/' if running from folder in production
  // app.baseUrl = '/polymer-starter-kit/';
}

// Page is ready
document.addEventListener('DOMContentLoaded', function() {

  // Grab a reference to our auto-binding template
  // and give it some initial binding values
  // Learn more about auto-binding templates at http://goo.gl/Dx1u2g
  let main = document.querySelector('#main');

  // Listen for template bound event to know when bindings
  // have resolved and content has been stamped to the page
  main.addEventListener('dom-change', function() {
    console.log('Our app is ready to rock!');
  });

  // See https://github.com/Polymer/polymer/issues/1381
  window.addEventListener('WebComponentsReady', function() {
    // imports are loaded and elements have been registered
  });

});

export { behaviors, baseUrl };
