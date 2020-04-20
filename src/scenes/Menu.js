
class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    preload() {
        // load audio
        this.load.audio('sfx_select', './assets/ex.wav');
        this.load.audio('sfx_explosion', './assets/explosion38.wav');
        this.load.audio('sfx_rocket', './assets/rocket_shot.wav');
        this.load.audio('money', './assets/money.wav');
        this.load.audio('coin', './assets/coin.wav');

        //Load menu screen
        this.load.spritesheet('menu', './assets/menu.png', {frameWidth: 640, frameHeight: 480, startFrame: 0, endFrame: 8});
        this.load.image('menustat', './assets/menustat.png');
    }

    create() {

        const menu = this.add.sprite(0, 0, 'menu', 0).setOrigin(0, 0);
        let menustat = this.add.image(0, 0, 'menustat', 0).setOrigin(0, 0);

        // menu display
        let menuConfig = {
            fontFamily: 'Arial',
            fontSize: '28px',
            backgroundColor: '#F3B141',
            color: '#843605',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }

        // show menu text
        let centerX = game.config.width/2;
        let centerY = game.config.height/2;
        let textSpacer = 64;

        this.add.text(centerX, centerY- textSpacer, 'ROCKET PATROL', menuConfig).setOrigin(0.5);
        this.add.text(centerX, centerY, 'Use ←→ arrows to move & (F) to Fire', menuConfig).setOrigin(0.5);
        menuConfig.backgroundColor = '#00FF00';
        menuConfig.color = '#000';
        this.add.text(centerX, centerY + textSpacer, 'Press ← for One player or → for Two Player', menuConfig).setOrigin(0.5);  
        
        // define keys
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        

        //intro animation
        this.anims.create({
            key: 'menu',
            frames: this.anims.generateFrameNumbers('menu', {start: 0, end: 8, first: 0}),
            frameRate: 15,
        });
        
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keyLEFT)) {

            // easy mode
            game.settings = {
                spaceshipSpeed: 3,
                gameTimer: 60000    
            }
            
            
            let menu = this.add.sprite(0, 0, 'menu', 0).setOrigin(0, 0);
            menu.anims.play('menu');
            this.sound.play('sfx_select'); //menu.anims.play('menu');
            menu.on('animationcomplete', () => {    // callback after animation completes
                this.scene.start("singlePlayer");                   // make ship visible again
                menu.destroy();                   // remove explosion sprite
            });
                
        }
        else if (Phaser.Input.Keyboard.JustDown(keyRIGHT)) {
            
            // hard mode
            game.settings = {
                spaceshipSpeed: 4,
                gameTimer: 45000    
            }
            let menu = this.add.sprite(0, 0, 'menu', 0).setOrigin(0, 0);
            menu.anims.play('menu');
            this.sound.play('sfx_select'); //menu.anims.play('menu');
            menu.on('animationcomplete', () => {    // callback after animation completes
                this.scene.start("playScene");                   // make ship visible again
                menu.destroy();                   // remove explosion sprite
            });
                
        }
    }
    
}

