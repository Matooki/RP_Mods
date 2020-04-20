
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
        this.load.audio('hop', './assets/hop.wav');

        //Load menu screen
        this.load.spritesheet('menu', './assets/menu.png', {frameWidth: 640, frameHeight: 480, startFrame: 0, endFrame: 8});
        this.load.image('menustat', './assets/menustat.png');
    }

    create() {

        const menu = this.add.sprite(0, 0, 'menu', 0).setOrigin(0, 0);
        let menustat = this.add.image(0, 0, 'menustat', 0).setOrigin(0, 0);

        // menu display
        let menuConfig = {
            fontFamily: 'Impact',
            fontSize: '24px',
            //backgroundColor: '#F3B141',
            color: '#ffff19',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }
        let menuConfig2 = {
            fontFamily: 'Arial',
            fontSize: '18px',
            //backgroundColor: '#F3B141',
            color: '#ffff19',
            align: 'center',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }
        let menuConfig3 = {
            fontFamily: 'Arial',
            fontSize: '20px',
            backgroundColor: '#FACADE',
            color: '#FA23DE',
            align: 'center',
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

        this.add.text(centerX-10, centerY- textSpacer, 'B a n k     H e i s t', menuConfig).setOrigin(0.5);
        this.add.text(centerX - 10, centerY, '  P1: Use ←→ arrows to move & (UP) to Fire \nP2: Use A & D to move and SPACE to Fire', menuConfig2).setOrigin(0.5);
        this.add.text(centerX-10, centerY + textSpacer, 'Press ← To Heist Alone or → To Compete with a Friend', menuConfig3).setOrigin(0.5);  
        
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

