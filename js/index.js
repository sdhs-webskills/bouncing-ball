class Ball {
    constructor(x = 50, y = 50, radius = 15, speed = 5, directX = "right", directY = "down", color = "#333") {
        this._x = x;
        this._y = y;
        this.range = 10;
        this.radius = radius;
        this.speed = speed;
        this._color = color;
        this._directX = directX;
        this._directY = directY;
    };

    get x() { return this._x; };
    set x(position) { this._x = position; };

    get y() { return this._y; };
    set y(position) { this._y = position; };

    get color() { return this._color; };
    set color(hex) { this._color = hex; };

    get directX() { return this._directX; };
    set directX(direct) { this._directX = direct; };

    get directY() { return this._directY; };
    set directY(direct) { this._directY = direct; };
}

const $canvas = document.querySelector("canvas");
const ctx = $canvas.getContext("2d");

$canvas.width = window.innerWidth - 20;
$canvas.height = window.innerHeight - 30;

const randomRL = num => num === 1 ? "right" : "left";
const randomUD = num => num === 1 ? "down" : "up";

const balls = [
    new Ball(
        Math.random() * $canvas.width,
        Math.random() * $canvas.height,
        50,
        5,
        randomRL(Math.floor(Math.random() * 2) + 1),
        randomUD(Math.floor(Math.random() * 2) + 1),
        "#427bf5"
    ),
    new Ball(
        Math.random() * $canvas.width,
        Math.random() * $canvas.height,
        50,
        5,
        randomRL(Math.floor(Math.random() * 2) + 1),
        randomUD(Math.floor(Math.random() * 2) + 1),
        "#42f545"
    ),
    new Ball(
        Math.random() * $canvas.width,
        Math.random() * $canvas.height,
        50,
        5,
        randomRL(Math.floor(Math.random() * 2) + 1),
        randomUD(Math.floor(Math.random() * 2) + 1),
        "#dc7223"
    ),
    new Ball(
        Math.random() * $canvas.width,
        Math.random() * $canvas.height,
        50,
        5,
        randomRL(Math.floor(Math.random() * 2) + 1),
        randomUD(Math.floor(Math.random() * 2) + 1),
        "#e5eb34"
    ),
    new Ball(
        Math.random() * $canvas.width,
        Math.random() * $canvas.height,
        50,
        5,
        randomRL(Math.floor(Math.random() * 2) + 1),
        randomUD(Math.floor(Math.random() * 2) + 1),
        "#e042f5"
    ),
];

const drawBall = () => {
    ctx.clearRect(0, 0, $canvas.width, $canvas.height);

    for (let i = 0, limit = balls.length; i < limit; i++) {
        const ball = balls[i];
        const { x, y, radius, directX, directY, speed, color } = ball;

        for (let j = 0; j < limit; j++) {
            if (j !== i) {
                const ball2 = balls[j];
                const xRange = x > ball2.x ? x - ball2.x : ball2.x - x;
                const yRange = y > ball2.y ? y - ball2.y : ball2.y - y;
                const range = radius + ball2.radius;

                if(Math.sqrt(Math.pow(xRange, 2) + Math.pow(yRange, 2)) < range) {
                    
                };
            };
        }

        if (directX === "right" && x >= $canvas.width - radius) ball.directX = "left";
        if (directX === "left" && x <= radius) ball.directX = "right";

        if (directY === "down" && y >= $canvas.height - radius) ball.directY = "up";
        if (directY === "up" && y <= radius) ball.directY = "down";

        if (directX === "right") ball.x += speed;
        else if (directX === "left") ball.x -= speed;

        if (directY === "down") ball.y += speed;
        else if (directY === "up") ball.y -= speed;

        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, 2 * Math.PI);
        ctx.fill();
    }

    requestAnimationFrame(drawBall);
};
requestAnimationFrame(drawBall);