let tagsgot = 0
let gamble = null
let tagHTML = document.querySelector('.tag')
let tagsHTML = document.querySelector('.tags')
let message = document.querySelector('.message')
let reseter = document.querySelector('.reseter')
let tags = [
    "gambler", "nerd", "caseoh", "j", "greg", "hmm", "iphone", "android", "samsung", "windows", "mac", "hacker", "legendary", "mom", "rizz", "sigma", "skibidi", "man", "82 year old guy named poe", "epic", "level 100 boss", "alpha", "level 1 crook", "level 10 mafia guy", "level 1,000 sigma", "idiot", "melon", "banned from morroco", "chris griffin", "lois griffin", "peter griffin", "brian griffin", "meg griffin", "stewie griffin", "overlord", "cleveland brown from the hit show family guy", "mouse", "adam sandler", "spaceuk", "discord mod", "1 in 42,348,382,318,492 chance (might be innacurate)", "mr bean", "sword wielder", "college dropout", "jar", "pro basketball player lebron james", "gold", "silver", "bronze (you tried)", "average", "Error in line 5 of epic.js: you punched the machine too hard :(", "you", "cool kid", "exister", "48", "feeling 78!! :D", "unicode that is random", "the rng likes this tag"
]
if(localStorage.length === 0) {
    data = [
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
    ]
} else {
    data = localStorage.getItem("dataRefresh")
    addtags()
}
function roll() {
    if(Math.random() > 0.6) {
        message.innerHTML = 'Rolled.'
        gamble = Math.round(Math.random()*(tags.length))
        data[gamble] = 1;
        updateTagHTML()
        localStorage.setItem("dataRefresh", data)
        addtags()
    } else {
        message.innerHTML = 'Machine broke. Try again, this machine sucks..'
    }
}
function addtags() {
    tagsgot = 0
    for (let i = 0; i < localStorage.getItem("dataRefresh").length; i++) {
        if(localStorage.getItem("dataRefresh")[i] > 0.9){
            tagsgot = tagsgot + 1
        } else {

        }
    }
    console.log(tagsgot)
    updateTagsHTML()
}
function reset() {
    localStorage.clear()
    tagsgot = 0
    data = [
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
    ]
    localStorage.setItem("dataRefresh", data)
}
function updateTagHTML() {
    tagHTML.innerHTML = String(tags[gamble])
}
function updateTagsHTML() {
    tagsHTML.innerHTML = `${tagsgot}/59`
}