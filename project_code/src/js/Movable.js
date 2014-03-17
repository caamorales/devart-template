// Generated by CoffeeScript 1.6.2
(function() {
  var Movable,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  Movable = (function() {
    function Movable(view) {
      this.view = view;
      this.setRotation = __bind(this.setRotation, this);
      this.follow = __bind(this.follow, this);
      this.loop = __bind(this.loop, this);
      this.death = __bind(this.death, this);
      this.birth = __bind(this.birth, this);
      this.pX = this.view.x;
      this.pY = this.view.y;
      this.rotationSpeed = .2;
      this.followSpeed = .02;
      this.life = false;
      this.leader = new Leader(this.view.x, this.view.y);
      createjs.Ticker.addEventListener("tick", this.loop);
      this.birth();
    }

    Movable.prototype.birth = function() {
      return this.life = true;
    };

    Movable.prototype.death = function() {
      return this.life = false;
    };

    Movable.prototype.loop = function() {
      if (!this.life) {
        return;
      }
      this.follow();
      return this.setRotation();
    };

    Movable.prototype.follow = function() {
      this.view.x += (this.leader.location.x - this.view.x) * this.followSpeed;
      return this.view.y += (this.leader.location.y - this.view.y) * this.followSpeed;
    };

    Movable.prototype.setRotation = function() {
      var diff_R, diff_X, diff_Y, end, start;

      diff_X = this.pX - this.view.x;
      diff_Y = this.pY - this.view.y;
      start = this.view.rotation;
      end = Math.atan2(diff_Y, diff_X) * (180 / Math.PI);
      diff_R = end - start;
      if (diff_R < -180) {
        diff_R += 360;
      }
      if (diff_R > 180) {
        diff_R -= 360;
      }
      this.view.rotation += diff_R * this.rotationSpeed;
      if (this.view.rotation > 180) {
        this.view.rotation -= 360;
      }
      if (this.view.rotation < -180) {
        this.view.rotation += 360;
      }
      this.pX = this.view.x;
      return this.pY = this.view.y;
    };

    return Movable;

  })();

  window.Movable = Movable;

}).call(this);