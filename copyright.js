(function () {

  'use strict';

  var Copyright = function (config) {
    this.config = config;
    this.setup();
  };

  Copyright.prototype.setup = function () {
    this.insertText();
  };

  Copyright.prototype.currentYear = function () {
    return new Date().getFullYear();
  };

  Copyright.prototype.getElement = function () {
    return document.querySelectorAll(this.config.crSelector)[0];
  };

  Copyright.prototype.owner = function () {
    if (this.getElement()) {
      this.getElement().getAttribute('data-owner');
    }
  };

  Copyright.prototype.insertText = function () {
    var text = "Copyright \u00A9 " + this.currentYear() + " " + this.owner();
    if (this.getElement()) {
      this.getElement().innerHTML = text;
    }
  };

  document.addEventListener('DOMContentLoaded', function () {
    var c = new Copyright({
      crSelector: '#plugin-copyright'
    });
  }, false);

}());