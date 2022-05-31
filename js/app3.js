let in1 = document.querySelector('.inp1')
let butt1 = document.querySelector('.butt1')
let in2 = document.querySelector('.inp2')
butt1.onclick = () => {
let a = +in1.value;
let b = +in2.value;
if (a>=0 && b>=0){
    console.log(a-b)
}
else if (a <= 0 && b <= 0){
    console.log(a*b)
}
else {
    console.log(a+b)
}
}
