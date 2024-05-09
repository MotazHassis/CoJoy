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

//buttons section
function balance() {
    console.log("Button balance clicked!");
    axios.put('https://pppserver.onrender.com/myupdate/readingsbalance', { left:90,right:90 })
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
                document.getElementById("left").innerHTML = 'Left: '+ball.style.top;
                document.getElementById("right").innerHTML = 'Right: ' + ball.style.left;
                document.getElementById("speed").innerHTML = 'Speed: '+ball2.style.top;
                document.getElementById("rear").innerHTML = 'Rear: '+ball2.style.left;
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
            if ((parseInt(ball.style.top) - 30) >= 0) {
                ball.style.top = parseInt(ball.style.top) - 30 + 'px';
                console.log('y: ', parseInt(ball.style.top))
                
            }
            else {
                ball.style.top = 0 + 'px'
                console.log(ball.style.top)
            }
            axios.put('https://pppserver.onrender.com/myupdate/readingsleft', { left: parseInt(ball.style.top) })
            break;
        case "ArrowUp":
            if ((parseInt(ball.style.top) + 30) <= 180) {
                ball.style.top = parseInt(ball.style.top) + 30 + 'px';
                console.log('y: ', parseInt(ball.style.top))
            }
            else {
                ball.style.top = 180 + 'px'
                console.log(ball.style.top)
            }
            axios.put('https://pppserver.onrender.com/myupdate/readingsleft', { left: parseInt(ball.style.top) })
            break;
        case "ArrowRight":
            if ((parseInt(ball.style.left) + 30) <= 180) {
                ball.style.left = parseInt(ball.style.left) + 30 + 'px';
                console.log('x: ', parseInt(ball.style.left))
            }
            else {
                ball.style.left = 180 + 'px'
                console.log(ball.style.left)
            }
            axios.put('https://pppserver.onrender.com/myupdate/readingsright', { right: parseInt(ball.style.left) })
            break;
        case "ArrowLeft":
            if ((parseInt(ball.style.left) - 30) >= 0) {
                ball.style.left = parseInt(ball.style.left) - 30 + 'px';
                console.log('x: ', parseInt(ball.style.left))
            }
            else {
                ball.style.left = 0 + 'px'
                console.log(ball.style.left)
            }
            axios.put('https://pppserver.onrender.com/myupdate/readingsright', { right: parseInt(ball.style.left) })
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
            if ((parseInt(ball2.style.left) + 30) <= 180) {
                ball2.style.left = parseInt(ball2.style.left) + 30 + 'px';
                console.log('x: ', parseInt(ball2.style.left))
            }
            else {
                ball2.style.left = 180 + 'px'
                console.log(ball2.style.left)
            }
            axios.put('https://pppserver.onrender.com/myupdate/readingsrear', { rear: parseInt(ball2.style.left) })
            break;
        case "ArrowLeft2":
            if ((parseInt(ball2.style.left) - 30) >= 0) {
                ball2.style.left = parseInt(ball2.style.left) - 30 + 'px';
                console.log('x: ', parseInt(ball2.style.left))
            }
            else {
                ball2.style.left = 0 + 'px'
                console.log(ball2.style.left)
            }
            axios.put('https://pppserver.onrender.com/myupdate/readingsrear', { rear: parseInt(ball2.style.left) })
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