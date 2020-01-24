const form = document.querySelector('form')
const link = document.querySelector('#link')
const topText = document.querySelector('#texttop')
const bottomText = document.querySelector('#textbottom')
const bigContainer = document.querySelector('.box')



form.addEventListener('submit', e =>{
        e.preventDefault()
    //create image container and trash icon
    let container = document.createElement('div')
        bigContainer.append(container)
        container.className = "image-container"
    let trash = document.createElement('i');
        trash.className = "fas fa-trash";
        trash.classList.toggle('hide')
        container.append(trash)

    //create image 
    let memeImg = document.createElement('img')
        container.append(memeImg)
        memeImg.setAttribute('src', link.value)
//create div with top text
    let textTop = document.createElement('div')
        container.append(textTop)
        textTop.innerText = topText.value
        textTop.className="top"
//create div with bottom text
    let textBottom = document.createElement('div')
        container.append(textBottom)
        textBottom.innerText = bottomText.value
        textBottom.className = "bottom"
        form.reset()

})

bigContainer.addEventListener('click', e=> {
    if (e.target.tagName === 'IMG'){
        icon = e.target.previousElementSibling;
        icon.classList.toggle('hide');
    }
    if (e.target.tagName === 'I') {
        e.target.parentElement.remove();
   }
})



