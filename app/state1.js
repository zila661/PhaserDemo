demo.state1 = function() {};
demo.state1.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = "#DDFDDD";      
        game.input.keyboard.addKey(Phaser.Keyboard.ONE).onDown.add(changeState, null, null, 2);
        game.input.keyboard.addKey(Phaser.Keyboard.TWO).onDown.add(changeState, null, null, 0);
    },
    update: function(){}
}