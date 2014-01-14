(function (window) {

  'use strict';

  var Copyright = function (config) {
    this.config = config;
    this.insertText();
  };

  Copyright.prototype.currentYear = function () {
    return new Date().getFullYear();
  };

  Copyright.prototype.owner = function () {
    if (this.config) {
      return this.config.getAttribute('data-owner');
    }
  };

  Copyright.prototype.format = function () {
    if (this.config) {
      var dataFormat = this.config.getAttribute('data-format');
      return Number(dataFormat);
    }
  };

  Copyright.prototype.beginning = function () {
    if (this.config) {
      return this.config.getAttribute('data-beginning');
    }
  };

  Copyright.prototype.insertText = function () {
    var text = this.getTextBasedOnFormat();
    if (this.config) {
      this.config.appendChild(document.createTextNode(text));
    }
  };

  Copyright.prototype.getTextBasedOnFormat = function () {
    var formatNumber = this.format();
    switch (formatNumber) {
    case 1:
      return "Copyright \u00A9 " + this.currentYear() + " " + this.owner();
    case 2:
      return "\u00A9 " + this.currentYear() + " " + this.owner();
    case 3:
      return "Copyright " + this.currentYear() + " " + this.owner();
    case 4:
      return "\u00A9 Copyright " + this.beginning() + " to the present, " + this.owner();
    case 5:
      return "\u00A9 " + this.beginning() + "\u2013" + this.currentYear() + " " + this.owner();
    case 6:
      return "\u00A9 Copyright " + this.beginning() + "\u2013" + this.currentYear() + " " + this.owner();
    default:
      return "Copyright \u00A9 " + this.currentYear() + " " + this.owner();
    }
  };

  window.Helper = function (config) {
    this.config = config;
    this.getElements = document.querySelectorAll(this.config.selector);
    this.forEachCreateCopyrights();
  };

  Helper.prototype.forEachCreateCopyrights = function () {
    var copyrights, i, c;
    copyrights = this.getElements;
    for (i = 0; i < copyrights.length; i++) {
      c = new Copyright(copyrights[i]);
    }
  };

}(window));

document.addEventListener('DOMContentLoaded', function () {
  var helper = new Helper({
    selector: '.plugin-copyright'
  });
}, false);