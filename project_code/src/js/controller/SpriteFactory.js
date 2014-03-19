// Generated by CoffeeScript 1.6.2
(function() {
  var SpriteFactory;

  SpriteFactory = (function() {
    var Factory, instance;

    function SpriteFactory() {}

    instance = null;

    Factory = (function() {
      function Factory() {}

      Factory.spriteList = [];

      Factory.prototype.makeSprite = function(id) {
        if (this.spriteList[id] != null) {
          return new this.spriteList[id];
        }
      };

      return Factory;

    })();

    SpriteFactory.get = function() {
      return instance != null ? instance : instance = new Factory;
    };

    return SpriteFactory;

  }).call(this);

  window.SpriteFactory = SpriteFactory;

}).call(this);

/*
//@ sourceMappingURL=SpriteFactory.map
*/