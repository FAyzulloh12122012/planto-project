const elSearchBtn = document.querySelector(".search_btn")
const elSearchMikraphoneBtn = document.querySelector(".change_btn-mikrafon")
const elSidebarBtn = document.querySelector(".sidebar_btn")

const elSearch = document.querySelector(".search")
const elSearchDeleteBtn = document.querySelector(".search_delete")
const elShop = document.querySelector(".shop")
const elShopDeleteBtn = document.querySelector(".shop_delete")
const elSidebar = document.querySelector(".site__sidebar")
const elSidebarDelete = document.querySelector(".sidebar_delete")
const elRegistor = document.querySelector(".registor")
const elRegistorDelete = document.querySelector(".registor_delete")

const elTrandyImg = document.querySelector(".trandy_img")
const elTrandyLeftBtn = document.querySelector(".trandy_btn-left")
const elTrandyRightBtn = document.querySelector(".trandy_btn-right")
const elSearchInput = document.querySelector(".change_input")

const elPlantsWraper = document.querySelector(".plants__wraper")
const elSellingList = document.querySelector(".selling__list")
const elUsersWraper = document.querySelector(".users__wraper")
const elBestContent = document.querySelector(".best__content")

const elPlants = document.querySelector(".plants")
const elSelling = document.querySelector(".selling")
const elUsers = document.querySelector(".users")
const elBest = document.querySelector(".best")
const elFooter = document.querySelector(".site__footer")

const elSearchWebkit = new webkitSpeechRecognition()
elSearchWebkit.lang = "en-EN"
let elTrandyImgArray = ["./Photo/Img/img1.png","./Photo/Img/img2.png","./Photo/Img/img3.png","./Photo/Img/img6.pnga"]
let elBestObject = {}
let elTrandyImgIndex = 0

elSearchBtn.addEventListener("click", (evt) => {
    evt.preventDefault()
    elSearch.classList.remove("hidden")
})
elSearchDeleteBtn.addEventListener("click", (evt) => {
    evt.preventDefault()
    elSearch.classList.add("hidden")
})

function isOpenShopModal(){
    elShop.classList.remove("hidden")
}
elShopDeleteBtn.addEventListener("click", (evt) => {
    evt.preventDefault()
    elShop.classList.add("hidden")
})

function isOpenRegistorModal(){
    elRegistor.classList.remove("hidden")
}
elRegistorDelete.addEventListener("click", (evt) => {
    evt.preventDefault()
    elRegistor.classList.add("hidden")
})

elSidebarBtn.addEventListener("click", (evt) => {
    evt.preventDefault()
    elSidebar.classList.remove("hidden")
})
elSidebarDelete.addEventListener("click", (evt) => {
    evt.preventDefault()
    elSidebar.classList.add("hidden")
})

elTrandyLeftBtn.addEventListener("click", (evt) => {
    evt.preventDefault()
    --elTrandyImgIndex

    if(elTrandyImgIndex < 0){
        elTrandyImgIndex = elTrandyImgArray.length - 1
    }

    elTrandyImg.setAttribute("src", `${elTrandyImgArray[elTrandyImgIndex]}`)
    elBestObject = elBestArray[elTrandyImgIndex]
    renderBest(elBestObject)
})
elTrandyRightBtn.addEventListener("click", (evt) => {
    evt.preventDefault()
    ++elTrandyImgIndex

    if(elTrandyImgIndex > elTrandyImgArray.length - 1){
        elTrandyImgIndex = 0
    }

    elTrandyImg.setAttribute("src", `${elTrandyImgArray[elTrandyImgIndex]}`)
    elBestObject = elBestArray[elTrandyImgIndex]
    renderBest(elBestObject)
})

elSearchMikraphoneBtn.addEventListener("click", (evt) => {
    evt.preventDefault()
    
    elSearchWebkit.start()
    elSearchWebkit.onresult = function(evt){
        elSearchInput.value = evt.results[0][0].transcript
    }
})

elPlantsArray.forEach((object) => {
    elPlantsWraper.innerHTML += `
      <div class="plants__content">
          <img width="550px" src="${object.img}" alt="" class="plants_img">
          <div class="plants__for">
              <h3 class="plants_subtitle">${object.title}</h3>
              <p class="plants_text">${object.text}</p>
              <strong class="plants_strong">${object.strong}</strong>
              <div class="plants__btn">
                  <button onclick="isOpenRegistorModal()" class="plants_btn">${object.buttonOne}</button>
                  <button onclick="isOpenShopModal()" class="plants_btn"><img src="${object.buttonTwo}" alt="" /></button>
              </div>
          </div>
      </div>
    `
})

elSellingArray.forEach((object) => {
    elSellingList.innerHTML += `
        <li class="selling__item">
                <img width="90%" src="${object.img}" alt="" class="selling_img">
                <h3 class="selling_subtitle">${object.title}</h3>
                <p class="selling_text">${object.text}</p>
                <div class="selling__bottom">
                    <strong class="selling_strong">${object.strong}</strong>
                    <a href="http://127.0.0.1:5500/selling.html?id=${object.id}" class="selling_link"><img width="25px" src="${object.buttonThree}" alt=""></a>
                </div>
        </li>
    `
})

elUsersArray.forEach((object) => {
    elUsersWraper.innerHTML += `
      <div class="users__content">
          <div class="users__inner">
              <img width="50px" height="50px" src="${object.icon}" alt="" class="users_avatar">
              <div class="users__category">
                  <h3 class="users_subtitle">${object.title}</h3>
                  <img src="${object.stars}" alt="" class="users_stars">
              </div>
          </div>
          <p class="users_text">${object.text}</p>
      </div>
    `
})

function renderBest(bestObject){
    elBestContent.innerHTML = `
       <img width="650px" src="${bestObject.img}" alt="" class="best_img">
       <div class="best__inner">
           <h3 class="best_subtitle">${bestObject.title}</h3>
           <p class="best_text">${bestObject.textOne}</p>
           <p class="best_text">${bestObject.textOne}</p>
           <button onclick="isOpenRegistorModal()" class="best_btn">${bestObject.button}</button>
       </div>    
    `
}

window.addEventListener("keydown", (evt) => {
    if(evt.key == "b"){
        elSidebar.classList.remove("hidden")
    }
})
window.addEventListener("scroll", (evt) => {
    let elPageStamp = evt.timeStamp

    if(elPageStamp >= 2000){
        elPlants.classList.remove("hidden")
    }

    if(elPageStamp >= 4500){
        elSelling.classList.remove("hidden")
    }

    if(elPageStamp >= 6500){
        elUsers.classList.remove("hidden")
    }

    if(elPageStamp >= 9000){
        elBest.classList.remove("hidden")
    }

    if(elPageStamp >= 12000){
        elFooter.classList.remove("hidden")
    }
})