(function() {
  // prevent it from being stored in the global namespace.  it goes away once it is called.  this prevents
  // people from calling things on the window.
  'use strict';
  angular.module('application', ['todoList']);
})();
