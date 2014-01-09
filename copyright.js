(function () {

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

  Copyright.prototype.insertText = function () {
    var text = "Copyright \u00A9 " + this.c55urrentYear() + " " + this.owner();
    if (this.config) {
      this.config.appendChild(document.createTextNode(text));
    }
  };

  var Helper = function (config) {
    this.config = config;
    this.getElements = document.querySelectorAll(this.config.crSelector);
    this.forEachCreateCopyrights();
  };

  Helper.prototype.forEachCreateCopyrights = function () {
    var copyrights = this.getElements;
    for (var i = 0; i < copyrights.length; i++) {
      console.log(copyrights[i]);
      var c = new Copyright(copyrights[i]);
    }
  };

  document.addEventListener('DOMContentLoaded', function () {
    var helper = new Helper({
      crSelector: '.plugin-copyright'
    });
  }, false);

}());