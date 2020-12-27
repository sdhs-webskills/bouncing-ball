//write...
window.onload = function () {
    ballmove();
}

//공 움직이기

let ball = document.querySelector('.ball');
let x = 0;
let y = 0;
function playR() {
    x += 1;
    ball.style.marginLeft = x + 'px';
}
function playL() {
    x -= 1;
    ball.style.marginLeft = x + 'px';
}
function playB() {
    y -= 1;
    ball.style.marginBottom = y + 'px'
}
function playT() {
    y += 1;
    ball.style.marginBottom = y + 'px';
}
let set = setInterval(playR, 10)

function ballmove() {
    // 스페이스바 누를시 공 멈추기/ 움직이기
    window.addEventListener('keydown', function (e) {
        let key = e.keyCode;
        switch (key) {
            case 32:
                clearInterval(set)
                bl = false;
                break;
            // 방향키로 공 움직이기
            case 37:
                clearInterval(set)
                set = setInterval(playL, 10)
                break;
            case 38:
                clearInterval(set)
                set = setInterval(playT, 10)
                break;
            case 39:
                clearInterval(set)
                set = setInterval(playR, 10)
                break;
            case 40:
                clearInterval(set)
                set = setInterval(playB, 10)
                break;
        }
    })
}