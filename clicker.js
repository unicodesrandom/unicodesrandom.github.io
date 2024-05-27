let cookies = document.querySelector('.amount')
let extra = document.querySelector('.boost')
let message = document.querySelector('.message')
cookies.innerHTML = localStorage.getItem("cookies");
extra.innerHTML = localStorage.getItem("extra");
function clickCookie() {
    cookies.innerHTML = parseFloat(Math.round(cookies.innerHTML)) + (1 + parseFloat(Math.round(cookies.innerHTML)) * 0.01)
    extra.innerHTML = parseFloat(cookies.innerHTML) * 0.01
    localStorage.setItem("extra", extra.innerHTML);
    localStorage.setItem("cookies", cookies.innerHTML);
}
function reset() {
    cookies.innerHTML = parseFloat(0)
    extra.innerHTML = parseFloat(0)
    localStorage.setItem("extra", extra.innerHTML);
    localStorage.setItem("cookies", cookies.innerHTML);
}
function roll() {
    if(Math.random() > 0.8) {
        message.innerHTML = 'Rolled.'
    } else {
        message.innerHTML = 'Machine broke. Try again, this machine sucks..'
    }
}