(function(){

  var Copyright = function(config){
    this.config = config;
    this.setup();
  };

  Copyright.prototype.setup = function(){
    this.insertText();
  };

  Copyright.prototype.currentYear = function(){
    return new Date().getFullYear();
  };

  Copyright.prototype.owner = function(){
    return document.querySelectorAll(this.config.crSelector)[0].getAttribute('data-owner');
  };

  Copyright.prototype.insertText = function(){
    var text = "Copyright \u00A9 " + this.currentYear() + " " + this.owner();
    document.querySelectorAll(this.config.crSelector)[0].innerHTML = text;
  };

  document.addEventListener('DOMContentLoaded', function() {
    var c = new Copyright({
      crSelector: '#plugin-copyright'
    });
  }, false);

})();