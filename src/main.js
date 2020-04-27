/*Code written by David Matias Pazos:
    I completely redesigned the game, while keeping the core mechanics. I added my own art and sounds. (Sounds made using BFXR). I also added a two player mode along with typical 
    single player mode. I redesigned the UI and changed the theme of the game to a bank heist game. I also created a little animation to the start of the game, as well as animation to 
    the objects flying across the scene. I also changed the speeds of the flying objects to be random within a range. 
*/


let config = {
    type: Phaser.CANVAS,
    width: 640,
    height: 480,
    scene: [ Menu, Play, Play2 ],
};

let game = new Phaser.Game(config);

let keyF, keyLEFT, keyRIGHT, keyA, keyD, keySPACE, keyUP, keyM;