const container = document.querySelector('.bg-dark')
console.log(container)


const h = document.querySelector('span')
console.log(h)

// console.log(heading.innerHTML)
// console.log(heading.innerText)
// console.log(heading.textContent)

h.style.display = "none";

const listOne = document.querySelector('li')
listOne.style.color = "Yellow"
listOne.style.listStyle = 'Number'
listOne.style.fontStyle = "italic"


const list = document.querySelectorAll('li')

list[0].style.background = "magenta"
list[1].style.background = "olive"
list[2].style.background = "maroon"

const heading = document.getElementsByClassName('number-list');

const rrHeading =  Array.from(heading);
rrHeading.forEach((listItem)=> {console.log(listItem)
    listItem.children[1].innerText = 'Red'
})

/* ------------------------------------------------------------------ */