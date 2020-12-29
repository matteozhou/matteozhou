const checkbtn = document.getElementsByClassName('checkbtn')[0]
const a = document.getElementsByClassName("a")[0]

checkbtn.addEventListener('click',() => {
    a.classList.toggle("active")
})
