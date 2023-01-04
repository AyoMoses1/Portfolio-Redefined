const projectArray = [
  {
    id: 1, 
    name: "Tonic",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    featuredImage: "images/portoflio/post.png",
    technologies: ["ruby", "python", "node"],
    liveLink: "https://ayomoses1.github.io/Portfolio-Redefined/",
    sourceLink:"https://github.com/AyoMoses1/Portfolio-Redefined"
  },
  {
    id: 2, 
    name: "Multi-Post Stories",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    featuredImage: "images/portoflio/post.png",
    technologies: ["css", "html", "php"],
    liveLink: "https://ayomoses1.github.io/Portfolio-Redefined/",
    sourceLink:"https://github.com/AyoMoses1/Portfolio-Redefined"
  },
  {
    id: 3, 
    name: "Tonic",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    featuredImage: "images/portoflio/tonics.png",
    technologies: ["flutter", "ruby", "rails"],
    liveLink: "https://ayomoses1.github.io/Portfolio-Redefined/",
    sourceLink:"https://github.com/AyoMoses1/Portfolio-Redefined"
  },
  {
    id: 4, 
    name: "Multi-Post Stories",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    featuredImage: "images/portoflio/tonic.png",
    technologies: ["typescript", "react", "node"],
    liveLink: "https://ayomoses1.github.io/Portfolio-Redefined/",
    sourceLink:"https://github.com/AyoMoses1/Portfolio-Redefined"
  },
]


const hamburgerOpen = document.querySelector('.hamburger_open')
const hamburgerClose = document.querySelector('.hamburger_close')
const hamburgerLinks = document.querySelectorAll('.ham_link')
const hamburger =  document.querySelector('.hamburger_nav')
const projects = document.querySelectorAll('.works_card')
const viewBtn = document.querySelectorAll('.view_btn')
const modal =  document.querySelector('.modal')

const closeModal = document.createElement('img')
closeModal.setAttribute('src',"images/Icon - Cancel.png")
closeModal.setAttribute('class', 'modal_close')
closeModal.setAttribute('alt', 'cancel icon')

const body = document.querySelector('body')

for(let i = 0 ; i < projectArray.length ; i++){
  projects[i].setAttribute('id', projectArray[i].id)
  projects[i].querySelector('.works_details h3').innerHTML= projectArray[i].name
  projects[i].querySelector('img').setAttribute('src', projectArray[i].featuredImage)
  projects[i].querySelector('p').innerHTML = projectArray[i].description.slice(0, 100)
  projectArray[i].technologies.forEach(stack => {
    const listContainers =  projects[i].querySelector('.works_stack')
    const list = document.createElement('li')
    list.textContent+= stack
    listContainers.appendChild(list)
  })
}

closeModal.addEventListener('click', function(){  
  const overlay = document.querySelector('.overlay')
  overlay.remove()
  modal.classList.remove('show')
  modal.classList.add('hide')
})

hamburgerOpen.addEventListener('click', function(){
  hamburger.classList.toggle('active')
})

hamburgerClose.addEventListener('click', function(){
  hamburger.classList.toggle('active')
})

hamburgerLinks.forEach(link => {
  link.addEventListener('click', function(){
    hamburger.classList.remove("active")
  })
})

viewBtn.forEach(btn => {
  btn.addEventListener('click', function handleClick(e){
    const overlay = document.createElement('div')
    overlay.classList.add('overlay')
    body.appendChild(overlay)
    modal.classList.add('show')
    const projectId = btn.parentNode.parentNode.id
    for(let i = 0; i < projectArray.length; i++){
      if(projectId == projectArray[i].id){
        const modalImg = document.createElement('img')
        const mode = document.querySelector('.modal')
        mode.innerHTML = `<div class="modal_header">
                            <div class="flexed">
                                <h3>${projectArray[i].name}</h3>
                            </div>
                            <ul>
                                <li>canopy</li>
                                <span></span>
                                <li>back end dev</li>
                                <span></span>
                                <li>2015</li>
                            </ul>
                          </div>
                          <div class="modal_image">
                            <img src=${projectArray[i].featuredImage} alt="Tonic Image" class="post">
                          </div>
                          <div class="works_details modal_flex">
                            <div>
                              <p>${projectArray[i].description}</p>
                            </div>
                            <div>
                              <ul class="works_stack">
                                <li>html</li>
                                <li>css</li>
                                <li>javascript</li>
                              </ul>
                              <div class="modal_divider"></div>
                              <div class="btn-flex">
                                  <button class="works_btn">See Live <img src="images/Icon - Export.svg"/> </button>
                                  <button class="works_btn">See Source <img src="images/github in button.svg"/> </button>
                              </div>
                            </div>
                          </div>` 
          const flexed = document.querySelector('.flexed')
          flexed.appendChild(closeModal)
      }
    }
  })
})

