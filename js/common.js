window.onload = () => {
    let ball = document.getElementsByClassName('ball')[0] //ball이라는 클래스를 가져옴
    let bg = document.getElementsByClassName('floor')[0]    //floor이라는 클래스를 가져옴
    let rect = ball.getBoundingClientRect() //볼의 네방향의 좌표를 가져옴
    let x = rect.left     //x의 left
    let mx = 1
    let y = rect.top     //y의 top
    let my = 1          //

    function move() {
        if (x >= window.innerWidth - rect.width) {mx = -1}   //x가 창안에 가로보다 커지거나 같아지면 mx가 -1 바낌
        if (y >= window.innerHeight - bg.clientHeight - rect.height) {my = -1}   //x가 창안에 가로보다 커지거나 같아지면 mx가 -1 바낌
        if(x == 0){mx = 1}  //x가 왼쪽 끝에 다으면 다시 mx가 1이됨
        if(y == 0){my = 1}  //x가 왼쪽 끝에 다으면 다시 mx가 1이됨
        ball.style.left = x + 'px'
        x += mx //x = x+mx
        ball.style.top = y + 'px'
        y += my //x = x+mx

    }
    //console.log(bg.clientWidth)

    setInterval(move, 1)    //함수 실행 , 시간

}