(function(){

  var components = {
    init: function() {
      this.config = {
        crSelectorID: 'plugin-copyright'
      };

      this.setup();
    },

    setup: function() {
      this.insertText();
    },

    currentYear: function() {
      return new Date().getFullYear();
    },

    owner: function() {
      return document.getElementById(this.config.crSelectorID).getAttribute('data-owner');
    },

    insertText: function() {
      var text = "Copyright &#169; " + this.currentYear() + " " + this.owner();
      document.getElementById(this.config.crSelectorID).innerHTML = text;
    }
  };

  document.addEventListener('DOMContentLoaded', function() {
    components.init();
  }, false);

})();