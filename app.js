const form = document.querySelector('form')
const link = document.querySelector('#link')
const topText = document.querySelector('#texttop')
const bottomText = document.querySelector('#textbottom')
const bigContainer = document.querySelector('.box')
const button = document.querySelector('button')
let deleteToggle = true;


form.addEventListener('submit', e =>{
    e.preventDefault()
    //create image container
let container = document.createElement('div')
    bigContainer.append(container)
    container.className = "image-container"
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



button.addEventListener('click', e =>{
    let containers=document.querySelectorAll('.image-container')
    // Toggle delete on
    if(deleteToggle){
        for(image of containers){
            image.innerHTML += `<i class="fas fa-trash"></i>`
             //remove a meme
            image.addEventListener('click', e =>{
                if (e.target.tagName === "I"){
                    e.target.parentElement.remove()}
                                              })
                                 }
        deleteToggle=false
                     }
        //Toggle delete off

    else{
        for(image of containers){
                if (image.lastElementChild.tagName==="I"){
                     image.lastElementChild.remove()}}
                   deleteToggle=true
         }
                                         })
    

   

