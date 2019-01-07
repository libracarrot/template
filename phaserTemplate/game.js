var screen_h = $(window).height()/$(window).width()*640;
var scale_k = screen_h/1008;
var game = new Phaser.Game(640, screen_h, Phaser.CANVAS, 'container');
game.States = {};
game.States.boot = function () {
    this.preload = function(){
        game.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;
        game.scale.pageAlignVertically = true;
        game.scale.pageAlignHorizontally = true;
        game.load.crossOrigin = 'anonymous';
    };
    this.create = function(){
        game.state.start('preload');
    };
}
game.States.preload = function () {
    this.preload = function () {
        game.load.image('bg','//devcdn.pannacloud.com/2018/1227_newyear/img/bg.jpg')
        game.load.onFileComplete.add(this.fileComplete, this);
    };
    this.fileComplete = function (progress) {
        console.log(progress)
    }
    this.create = function(){
        game.state.start('playState');
    }
}
game.States.playState = function () {
    this.create = function(){
        game.add.image(0,0,'bg').scale.y = scale_k
    }
}
game.state.add('boot',game.States.boot);
game.state.add('preload',game.States.preload);
game.state.add('playState',game.States.playState);
game.state.start('boot');
