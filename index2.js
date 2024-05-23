// move ball by clicking on joystick buttons
// move ball using arrow keys
// ball continues movement as long as key/button is pressed
// joystick buttons light up on click AND keypress
arrows = document.querySelectorAll(".arrow");
ball = document.getElementById("ball");
var ball2 = document.getElementById("ball2");
ball.style.top = '90px';
ball.style.left = '90px';
ball2.style.top = '90px';
ball2.style.left = '90px';
keepMoving = null;
var upDown = { left: 0, right: 0 }
var leftRight = { left: 0, right: 0 }
var rearleftRight={rear:90}
function increseup(vl, vr) {
    if (vl - 30 < 0) {
        vl=0
    }
    if (vr + 30 > 180) {
        vr=180
    }
    if (vl - 30 >= 0) {
        vl = vl - 30;
    }
    if (vr + 30 <= 180) {
        vr = vr + 30;
    }
    upDown.left = vl;
    upDown.right=vr
    axios.put('https://pppserver.onrender.com/myupdate/readingsbalance', { left:upDown.left,right:upDown.right })
}
function decreaseDown(vr,vl) {
    if (vl - 30 < 30) {
        vl=30
    }
    if (vr + 30 > 150) {
        vr=150
    }
    if (vl - 30 >= 30) {
        vl = vl - 30;
    }
    if (vr + 30 <= 150) {
        vr = vr + 30;
    }
    upDown.left = vr;
    upDown.right=vl
    axios.put('https://pppserver.onrender.com/myupdate/readingsbalance', { left:upDown.left,right:upDown.right })
}
function goleft(vl, vr) {
    if (vl >= 150) {
        vl = 150;
    }
    if (vr >= 180) {
        vr = 180;
    }
    if (vl + 30 <= 150) {
        vl = vl + 30;
    }
    if (vr + 30 <= 180) {
        vr = vr + 30;
    }
    upDown.left = vl;
    upDown.right=vr
    axios.put('https://pppserver.onrender.com/myupdate/readingsbalance', { left:upDown.left,right:upDown.right })
    
}
function goRight(vl, vr) {
    if (vl <= 0) {
        vl = 0;
    }
    if (vr <= 30) {
        vr = 30;
    }
    if (vl - 30 >= 0) {
        vl = vl - 30;
    }
    if (vr - 30 >= 30) {
        vr = vr - 30;
    }
    upDown.left = vl;
    upDown.right=vr
    axios.put('https://pppserver.onrender.com/myupdate/readingsbalance', { left:upDown.left,right:upDown.right })
    
}
function rearLeft(v) {

    if (v <= 30) {
        v = 30;
    }
    if (v - 30 >= 30) {
        v = v - 30;
    }
    rearleftRight.rear = v
    axios.put('https://pppserver.onrender.com/myupdate/readingsrear', { rear: rearleftRight.rear })
}
function rearRight(v) {
    if (v >= 150) {
        v = 150;
    }
    if (v + 30 <= 150) {
        v = v + 30;
    }
    rearleftRight.rear = v
    axios.put('https://pppserver.onrender.com/myupdate/readingsrear', { rear: rearleftRight.rear })
}
//buttons section
//--
function vertical_left() {
    console.log("Button balance clicked!");
    axios.put('https://pppserver.onrender.com/myupdate/readingsvertical', { vertical:140})
}
const button6 = document.getElementById("vertical-left");
button6.addEventListener("click", vertical_left);
function vertical_center() {
    console.log("Button balance clicked!");
    axios.put('https://pppserver.onrender.com/myupdate/readingsvertical', { vertical:90})
}
const button7 = document.getElementById("vertical-center");
button7.addEventListener("click", vertical_center);

function vertical_right() {
    console.log("Button balance clicked!");
    axios.put('https://pppserver.onrender.com/myupdate/readingsvertical', { vertical:60})
}
const button5 = document.getElementById("vertical-right");
button5.addEventListener("click", vertical_right);


//---

function balance() {
    console.log("Button balance clicked!");
    axios.put('https://pppserver.onrender.com/myupdate/readingsbalance', { left: 90, right: 90 })
    axios.put('https://pppserver.onrender.com/myupdate/readingsrear', { rear: 90 })
}   
const button = document.getElementById("balance");
button.addEventListener("click", balance);

function speed50() {
    console.log("Button balance clicked!");
    axios.put('https://pppserver.onrender.com/myupdate/readingsspeed', { speed:1500 })
}
const button2 = document.getElementById("speed50");
button2.addEventListener("click", speed50);

function speed100() {
    console.log("Button balance clicked!");
    axios.put('https://pppserver.onrender.com/myupdate/readingsspeed', { speed:2000 })
}
const button3 = document.getElementById("speed100");
button3.addEventListener("click", speed100);

function speedturnOff() {
    console.log("Button balance clicked!");
    axios.put('https://pppserver.onrender.com/myupdate/readingsspeed', { speed:1000 })
}
const button4 = document.getElementById("speedturnOff");
button4.addEventListener("click", speedturnOff);

//end buttons
function fun1() {
            axios.get('https://pppserver.onrender.com/mywing/readings')
            .then((response) => {
                ball.style.top = response.data.left+'px';
                ball.style.left = response.data.right + 'px';
                ball2.style.top = response.data.speed + 'px';
                ball2.style.left = response.data.rear + 'px';
                upDown.left = response.data.left;
                upDown.right = response.data.right;
                leftRight.left = response.data.left;
                leftRight.right = response.data.right;
                rearleftRight.rear = response.data.rear;
                document.getElementById("left").innerHTML = 'Left: '+ball.style.top;
                document.getElementById("right").innerHTML = 'Right: ' + ball.style.left;
                document.getElementById("speed").innerHTML = 'Speed: '+ball2.style.top;
                document.getElementById("rear").innerHTML = 'Rear: ' + ball2.style.left;
                document.getElementById("vertical").innerHTML = 'vertical: ' + response.data.vertical;
            })
            .catch((err) => {
                console.log('fail sending data to backend')
            });
    return right,left
}
fun1()
const handleClick = (event) => {
    event.preventDefault();
    const direction = event.target.getAttribute('id') || event.key;
    if (!event.repeat && !keepMoving) {
        keepMoving = setInterval(() => {
            moveBall(direction)
        }, 50)
    }
    document.getElementById(direction).classList.add("pressed")
}

const stopMove = () => {
    clearInterval(keepMoving)
    keepMoving = null;
    arrows.forEach((arrow)=>{
        arrow.classList.remove("pressed")
    })
}

const moveBall = (direction) => {
    switch (direction) {
        case "ArrowDown":
            decreaseDown(upDown.left, upDown.right);
            break;
        case "ArrowUp":
            increseup(upDown.left, upDown.right);
            break;
        case "ArrowRight":
            goRight(upDown.left, upDown.right);
            break;
        case "ArrowLeft":
            goleft(upDown.left, upDown.right);
            break;
        case "ArrowDown2":
            if ((parseInt(ball2.style.top) - 100) >= 1000) {
                ball2.style.top = parseInt(ball2.style.top) - 100 + 'px';
                console.log('y: ', parseInt(ball2.style.top))
                
            }
            else {
                ball2.style.top = 1000 + 'px'
                console.log(ball2.style.top)
            }
            axios.put('https://pppserver.onrender.com/myupdate/readingsspeed', { speed: parseInt(ball2.style.top) })
            break;
        case "ArrowUp2":
            if ((parseInt(ball2.style.top) + 100) <= 2000) {
                ball2.style.top = parseInt(ball2.style.top) + 100 + 'px';
                console.log('y: ', parseInt(ball2.style.top))
            }
            else {
                ball2.style.top = 2000 + 'px'
                console.log(ball2.style.top)
            }
            axios.put('https://pppserver.onrender.com/myupdate/readingsspeed', { speed: parseInt(ball2.style.top) })
            break;
        case "ArrowRight2":
            rearRight(rearleftRight.rear)
            break;
        case "ArrowLeft2":
            rearLeft(rearleftRight.rear)
            break;
    }
}

document.addEventListener('keydown', handleClick)
document.addEventListener('keyup', stopMove)

arrows.forEach((arrow) => {
    arrow.addEventListener('touchstart', handleClick);
    arrow.addEventListener('mousedown', handleClick);
    arrow.addEventListener('mouseup', stopMove);
    arrow.addEventListener('touchend', stopMove);
})
// document.addEventListener('touchmove', handleClick);
// document.addEventListener('touchend', stopMove);
