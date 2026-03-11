const typing = document.querySelector(".typing")

const words = [

"Software Developer",
"Java Developer",
"Web Developer"

]

let i = 0
let j = 0
let currentWord = ""
let isDeleting = false

function type(){

currentWord = words[i]

if(isDeleting){

typing.textContent = currentWord.substring(0,j--)

}else{

typing.textContent = currentWord.substring(0,j++)

}

if(!isDeleting && j === currentWord.length){

isDeleting = true

setTimeout(type,1000)

return

}

if(isDeleting && j === 0){

isDeleting = false

i = (i+1) % words.length

}

setTimeout(type,isDeleting ? 60 : 120)

}

type()