//Getting The Id's 
var minsJs = document.getElementById('mins')
var secJs = document.getElementById('sec')
var millisecJs = document.getElementById('millisec')
var hrJs = document.getElementById('hr')
//Getting The Id's 
//Initializing values
var milisecond = 0
var second = 0
var minute = 0
var hour = 0
var interval;
//Initializing values
//Some Front-End Designing
setTimeout(function () {
    var merajAli = document.getElementById('merajAli').style.backgroundColor = 'black'
    var merajAli = document.getElementById('merajAli').style.color = 'white'
}, 1000)
setTimeout(function () {
    var merajAli = document.getElementById('merajAli').style.backgroundColor = 'red'
    var merajAli = document.getElementById('merajAli').style.color = 'black'
}, 100)
setTimeout(function () {
    var StopWatch = document.getElementById('StopWatch').style.backgroundColor = 'red'
    var StopWatch = document.getElementById('StopWatch').style.color = 'black'
}, 1000)
setTimeout(function () {
    var StopWatch = document.getElementById('StopWatch').style.backgroundColor = 'black'
}, 100)
//Some Front-End Designing

//Start Button Starts Here
function startBtn() {
    interval = setInterval(function () {
        milisecond++
        millisecJs.innerHTML = milisecond
        if (milisecond >= 100) {
            second++
            secJs.innerHTML = second
            milisecond = 0
        }
    }, 10)
    setInterval(function () {
        if (second >= 60) {
            minute++
            minsJs.innerHTML = minute
            second = 0
        }
    }, 1000)
    setInterval(function () {
        if (minute >= 60) {
            hour++
            hrJs.innerHTML = hour
            minute = 0
        }
    }, 1000)
    document.getElementById('btn').disabled = true
}
//Start Button Ends Here
//Stop Button Starts Here
function stopBtn() {
    clearInterval(interval)
    document.getElementById('btn').disabled = false
}
//Stop Button Ends Here
//Reset Button Starts Here
function resetBtn() {
    document.getElementById('btn').disabled = false
    millisecJs.innerHTML = 0
    secJs.innerHTML = 0
    minsJs.innerHTML = 0
    clearInterval(interval)
}
//Reset Button Ends Here