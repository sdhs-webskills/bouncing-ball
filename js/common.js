//write...

//벽에 닿으면 반대 방향으로 튕기기
let ball = document.querySelector('.ball'); 
let fl = document.querySelector('.floor');
let x = ball.getBoundingClientRect().left; // x에 ball의 left 값을 선언
let y = ball.getBoundingClientRect().top; // y에 ball의 top 값을 선언
let mx = 1; // mx의 초기값 (공의 스피드)
// let my = -0.5; // (대각선)
let my = 0; // my의 초기값 (공의 스피드) // (좌우상하)

//공 움직이기
function move(){
    let br = ball.getBoundingClientRect();
    if(x >= window.innerWidth - br.width) mx = -1 // x의 값이 (화면의 가로값 - 공의 넓이)보다 크거나 같으면 mx를 -1로
    if(x <= 0) mx = 1 //x가 0보다 작거나 같으면 mx를 1로
    
    if(y >= window.innerHeight - br.height - fl.clientHeight) my = -1 // y의 값이 (화면의 세로값 - 공의 높이)보다 크거나 같으면 my를 -1로 // (좌우상하)
    if(y <= 0) my = 1 //y가 0보다 작거나 같으면 my를 1로 // (좌우상하)
    // if(br.top >= window.innerHeight - br.height - fl.clientHeight) my = -0.5 // (대각선)
    // if(br.top <= 0) my = 0.5 // (대각선)
    
    ball.style.left = x + "px"; //ball의 left 값을 x로
    x += mx; // x의 mx값을 추가 (x = x + mx)
    ball.style.top = y + "px"; //ball의 top 값을 y로
    y += my; // y의 my값을 추가 (y = y + my)
}


let set = setInterval(move,0) // 처음 공 움직이기 

// 스페이스바 누를시 공 멈추기/ 움직이기
window.addEventListener('keydown',stop) // 키보드의 키입력시 함수 실행
let count = 0; // 멈추는데 쓸 것
function stop(e){
    let key = e.keyCode; // 누른 키의 키코드
    if(key == 32){
        clearInterval(set)
        count++; //count 1추가
    }
    //공이 멈춰 있을때 어떠한 조작이 안되게 하기
    if(count == 2){ // count 2일때 실행
        // setInterval(move, 0) // <-- 이렇게 되면 가속됨;;
        set = setInterval(move, 0)
        count = 0; //count 초기화
    }
    // 방향키로 공 움직이기
    // (대각선)
    // switch(key){
    //     case 37:
    //         mx = -1
    //         break;
    //     case 38:
    //         my = -0.5
    //         break;
    //     case 39:
    //         mx = 1
    //         break;
    //     case 40:
    //         my = 0.5
    //         break;
    // }

    // (좌우상하)
    switch(key){
        case 37:
            mx = -1;
            my = 0
            break;
        case 38:
            my = -1;
            mx = 0
            break;
        case 39:
            mx = 1;
            my = 0
            break;
        case 40:
            my = 1;
            mx = 0
            break;
    }
}