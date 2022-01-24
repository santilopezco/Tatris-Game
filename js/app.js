let canvas;
let ctx;
let FPS = 60;

let widthBoard = 15;
let heightBoard = 22;

let widthWindow = window.innerWidth;

let widthShape;
let heightShape;

if (widthWindow <= 550) {
    widthShape = 22;
    heightShape = 22;
} else if (widthWindow > 550 && widthWindow < 800) {
    widthShape = 30;
    heightShape = 30;
} else if (widthWindow > 800 && widthWindow < 1025) {
    widthShape = 33;
    heightShape = 33;
}else if (widthWindow > 1025 && widthWindow <= 1366) {
    widthShape = 33;
    heightShape = 33;
}else{
    widthShape = 41;
    heightShape = 41;
}

let widthCanvas = widthShape * 15;
let heightCanvas = heightShape * 20;

let topMargin = 4;

let board = [
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

let board2 = [
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

// Draw Shapes
let tetromino = [
    [ //Shape 1
        [
            [0, 0, 0, 0],
            [0, 7, 7, 0],
            [0, 7, 7, 0],
            [0, 0, 0, 0]
        ],

        [
            [0, 0, 0, 0],
            [0, 7, 7, 0],
            [0, 7, 7, 0],
            [0, 0, 0, 0]
        ],

        [
            [0, 0, 0, 0],
            [0, 7, 7, 0],
            [0, 7, 7, 0],
            [0, 0, 0, 0]
        ],

        [
            [0, 0, 0, 0],
            [0, 7, 7, 0],
            [0, 7, 7, 0],
            [0, 0, 0, 0]
        ]
    ],

    [ // Shape 2
        [
            [0, 0, 0, 0],
            [2, 2, 2, 2],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ],

        [
            [0, 0, 2, 0],
            [0, 0, 2, 0],
            [0, 0, 2, 0],
            [0, 0, 2, 0]
        ],

        [
            [0, 0, 0, 0],
            [2, 2, 2, 2],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ],

        [
            [0, 0, 2, 0],
            [0, 0, 2, 0],
            [0, 0, 2, 0],
            [0, 0, 2, 0]
        ]

    ],

    [ //Shape 3
        [
            [0, 0, 0, 0],
            [0, 0, 3, 3],
            [0, 3, 3, 0],
            [0, 0, 0, 0]
        ],

        [
            [0, 0, 3, 0],
            [0, 0, 3, 3],
            [0, 0, 0, 3],
            [0, 0, 0, 0]
        ],

        [
            [0, 0, 0, 0],
            [0, 3, 3, 0],
            [0, 0, 3, 3],
            [0, 0, 0, 0]
        ],

        [
            [0, 0, 0, 3],
            [0, 0, 3, 3],
            [0, 0, 3, 0],
            [0, 0, 0, 0]
        ]

    ],

    [ //Shape 4
        [
            [0, 0, 0, 0],
            [0, 0, 4, 0],
            [0, 0, 4, 0],
            [0, 0, 4, 4]
        ],

        [
            [0, 0, 0, 0],
            [0, 0, 4, 4],
            [0, 0, 4, 0],
            [0, 0, 4, 0]
        ],

        [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 4],
            [0, 4, 4, 4]
        ],

        [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 4, 0, 0],
            [0, 4, 4, 4]
        ]

    ],

    [ //Shape 5
        [
            [0, 0, 0, 0],
            [0, 5, 5, 5],
            [0, 0, 5, 0],
            [0, 0, 0, 0]
        ],

        [
            [0, 0, 0, 5],
            [0, 0, 5, 5],
            [0, 0, 0, 5],
            [0, 0, 0, 0]
        ],

        [
            [0, 0, 5, 0],
            [0, 5, 5, 5],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ],

        [
            [0, 0, 5, 0],
            [0, 0, 5, 5],
            [0, 0, 5, 0],
            [0, 0, 0, 0]
        ]
    ],
];
//token colors
let colors = [
    "#ffd300",
    "#de38c8",
    "#652ec7",
    "#33135c",
    "#13ca91",
    "#ff9472",
    "#35212a",
    "#ff8b8b",
    "#28cf75",
    "#00a9fe",
    "#04005e",
    "#120052",
    "#272822",
    "#f92672",
    "#66d9ef",
    "#a6e22e",
    "#fd971f",
];

//Selection of colors and shapes randomly
let getRandom = function (array) {
    return Math.floor(Math.random() * array.length)
}

let Tetris = function () {
    this.drawBoard = function () {
        // Recorremos el primer nivel del array
        for (axisY = 0; axisY < board.length; axisY++) {
            for (axisX = 0; axisX < board[axisY].length + 1; axisX++) {
                if (board[axisY][axisX] == 0) {
                    ctx.fillStyle = "#F9F9F0";
                    ctx.fillRect((axisX - 1) * widthShape, (axisY - topMargin + 1) * heightShape, widthShape, heightShape);
                    ctx.strokeStyle = '#CFCFCF';
                    ctx.strokeRect((axisX - 1) * widthShape, (axisY - topMargin + 1) * heightShape, widthShape, heightShape);
                }
            }
        }
    }
}

let Shape = function () {
    this.x = 0;
    this.y = 0;
    this.color;
    this.Random = 0; //type of shape
    this.angle = 0; // 0 - 3

    this.newShape = function () {
        this.Random = getRandom(tetromino);
        let color = getRandom(colors);
        this.color = colors[color];
        this.y = 0;
        this.x = 7;
    }

    this.rotate = function () {
        let newAngle = this.angle;

        if (newAngle >= 3) {
            newAngle = 0;
        } else {
            newAngle++;
        }

        if (this.colision(newAngle, this.y, this.x) == false) {
            this.angle = newAngle;
        }
    }

    this.draw = function () {
        for (axisY = 0; axisY < 4; axisY++) {
            for (axisX = 0; axisX < 4; axisX++) {
                if (tetromino[this.Random][this.angle][axisY][axisX] != 0) {
                    ctx.fillStyle = this.color;
                    ctx.fillRect((this.x + axisX - 1) * widthShape, (this.y + axisY - topMargin) * heightShape, widthShape, heightShape);

                    ctx.strokeStyle = '#eee';
                    ctx.strokeRect((this.x + axisX - 1) * widthShape, (this.y + axisY - topMargin) * heightShape, widthShape, heightShape);
                }
            }
        }
    }

    this.right = function () {
        if (this.colision(this.angle, this.y, this.x + 1) == false) {
            this.x++;
        }
    }

    this.down = function () {
        if (this.colision(this.angle, this.y, this.x) == false) {
            this.y++;
        }
    }

    this.left = function () {
        if (this.colision(this.angle, this.y, this.x - 1) == false) {
            this.x--;
        }
    }

    this.fallShape = function () {
        switch (this.colision(this.angle, this.y, this.x)) {
            case true:
                this.y--;
                this.fix();
                this.clear();
                this.newShape();
                if (this.gameOver()) {
                    this.resetBoard();
                }
                break;
            case false:
                this.y++;
            default:
                break;
        }
    }

    this.btnPause = function fPause () {
        reset = resets;
    } 



    this.resetBoard = function () {
        for (axisY = 0; axisY <= heightBoard; axisY++) {
            for (axisX = 0; axisX <= widthBoard; axisX++) {
                board[axisY][axisX] = board2[axisY][axisX];
            }
        }
    }

    this.gameOver = function () {
        let lose = false;
        for (axisX = 1; axisX < widthBoard + 1; axisX++) {
            if (board[2][axisX] != 0) {
                lose = true;
            }
        }
        return lose;
    }

    this.clear = function(){
        let fullRow;
        for(axisY = topMargin; axisY < heightBoard + 1; axisY++){
            fullRow = true;

            for(axisX = 1; axisX < widthBoard + 1; axisX++){
                if(board[axisY][axisX] == 0){
                    fullRow = false;
                }
            }

            if(fullRow == true){
                for(axisX = 1; axisX < widthBoard + 1; axisX++){
                    board[axisY][axisX] = 0;
                }
            }
        }
    }


    this.colision = function (newAngle, newY, newX) {
        let result = false;

        for (axisY = 0; axisY < 4; axisY++) {
            for (axisX = 0; axisX < 4; axisX++) {
                if (tetromino[this.Random][newAngle][axisY][axisX] > 0) {
                    if (board[newY + axisY][newX + axisX] > 0) {
                        result = true;
                    }
                }
            }
        }

        return result;
    }

    this.fix = function () {
        for (axisY = 0; axisY < 4; axisY++) {
            for (axisX = 0; axisX < 4; axisX++) {
                if (tetromino[this.Random][this.angle][axisY][axisX] > 0) {
                    board[this.y + axisY][this.x + axisX] = tetromino[this.Random][this.angle][axisY][axisX];
                }
            }
        }
    }

    // launch new shape
    this.newShape();
}



function init() {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');

    canvas.width = widthCanvas;
    canvas.height = heightCanvas;

    let boardTetris = new Tetris();
    boardTetris.drawBoard();

    
    let shape = new Shape();
    shape.draw();

    let listener = new window.keypress.Listener();

    //Use of keypress library
    let my_scope = this;
    let my_combos = listener.register_many([{
            keys: "up",
            is_exclusive: true,
            on_keydown: function () {
                shape.rotate();
            },
            this: my_scope,
        },
        {
            keys: "right",
            is_exclusive: true,
            on_keydown: function () {
                shape.right();
            },
            this: my_scope,
        },
        {
            keys: "left",
            is_exclusive: true,
            on_keydown: function () {
                shape.left();
            },
            this: my_scope,
        },
        {
            keys: "down",
            is_exclusive: true,
            on_keydown: function () {
                shape.down();
            },
            this: my_scope,
        },
    ]);


    // Keys for mobile devices
    const downKey = document.getElementById('down');
    downKey.addEventListener('click', () => {
        shape.down();
    });

    const leftKey = document.getElementById('left');
    leftKey.addEventListener('click', () => {
        shape.left();
    });

    const rightKey = document.getElementById('right');
    rightKey.addEventListener('click', () => {
        shape.right();
    });

    const rotateKey = document.getElementById('rotate');
    rotateKey.addEventListener('click', () => {
        shape.rotate();
    });

    // Keys for desktop devices
    const downKey2 = document.getElementById('down2');
    downKey2.addEventListener('click', () => {
        shape.down();
    });

    const leftKey2 = document.getElementById('left2');
    leftKey2.addEventListener('click', () => {
        shape.left();
    });

    const rightKey2 = document.getElementById('right2');
    rightKey2.addEventListener('click', () => {
        shape.right();
    });

    const rotateKey2 = document.getElementById('rotate2');
    rotateKey2.addEventListener('click', () => {
        shape.rotate();
    });


    // check if the window is computer and remove the buttons
    if (widthWindow > 1020) {
        let controls = document.getElementById('controls');
        controls.style.display = 'none';
    }

    // Interval in which the shape falls

     

    setInterval(function () {
        shape.fallShape();
    }, 10000 / FPS);



    // intervan in which update board
    setInterval(function () {
        boardTetris.drawBoard();
        shape.draw();
    }, 1000 / FPS);

}




//count down
const startingMinutes = 5;
let time =startingMinutes * 60;

const countDownEl = document.getElementById("countDown");

setInterval(updateCountDown, 1000);

function updateCountDown() {
    const minutes = Math.floor(time / 60)
    let seconds = time % 60;

    seconds = seconds < 5 ? '0' + seconds : seconds;

    countDownEl.innerHTML = `<span>${minutes}:${seconds}</span>`;
    time--;

    if(minutes == 0 && seconds == 0){
        let shape = new Shape();
        shape.gameOver();
    }

}