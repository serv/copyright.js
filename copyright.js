var components = {
  init: function() {
    components.config = {
      crSelectorID: 'plugin-copyright'
    };

    components.setup();
  },

  setup: function() {
    components.insertText();
  },

  currentYear: function() {
    return new Date().getFullYear();
  },

  owner: function() {
    return document.getElementById(components.config.crSelectorID).getAttribute('data-owner');
  },

  insertText: function() {
    var text = "Copyright &#169; " + components.currentYear() + " " + components.owner();
    document.getElementById(components.config.crSelectorID).innerHTML = text;
  }
};

document.addEventListener('DOMContentLoaded', function() {
  components.init();
}, false);