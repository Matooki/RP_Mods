let config = {
    type: Phaser.CANVAS,
    width: 640,
    height: 480,
    scene: [ Menu, Play, Play2 ],
};

let game = new Phaser.Game(config);

let keyF, keyLEFT, keyRIGHT, keyA, keyD, keySPACE, keyUP;