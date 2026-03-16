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

const elSellingContent = document.querySelector(".selling__content")
const elSellingList = document.querySelector(".selling__list")
const elSearchInput = document.querySelector(".change_input")

let elWindowId = new URLSearchParams(window.location.search).get("id")
let elSellingObject = elSellingArray[elWindowId - 1]
let elSellingNewArray = elSellingArray.filter((object) => object.id != elWindowId)
const elSearchWebkit = new webkitSpeechRecognition()
elSearchWebkit.lang = "en-EN"
let elTrandyImgArray = ["./Photo/Img/img1.png","./Photo/Img/img2.png","./Photo/Img/img3.png","./Photo/Img/img6.pnga"]

elSearchBtn.addEventListener("click", (evt) => {
    evt.preventDefault()
    elSearch.classList.remove("hidden")
})
elSearchDeleteBtn.addEventListener("click", (evt) => {
    evt.preventDefault()
    elSearch.classList.add("hidden")
})

elSearchMikraphoneBtn.addEventListener("click", (evt) => {
    evt.preventDefault()
    
    elSearchWebkit.start()
    elSearchWebkit.onresult = function(evt){
        elSearchInput.value = evt.results[0][0].transcript
    }
})

function isOpenShopModal(){
    elShop.classList.remove("hidden")
}
elShopDeleteBtn.addEventListener("click", (evt) => {
    evt.preventDefault()
    elShop.classList.add("hidden")
})

elSidebarBtn.addEventListener("click", (evt) => {
    evt.preventDefault()
    elSidebar.classList.remove("hidden")
})
elSidebarDelete.addEventListener("click", (evt) => {
    evt.preventDefault()
    elSidebar.classList.add("hidden")
})

function isOpenRegistorModal(){
    elRegistor.classList.remove("hidden")
}
elRegistorDelete.addEventListener("click", (evt) => {
    evt.preventDefault()
    elRegistor.classList.add("hidden")
})

function renderContent(elSellingObject){
    elSellingContent.innerHTML = `
        <img width="550px" src="${elSellingObject.img}" alt="" class="selling_img">
        <div class="selling__inner">
             <h3 class="selling_subtitle">${elSellingObject.title}</h3>
             <p class="selling_text">${elSellingObject.textTwo}</p>
             <strong class="selling_strong">${elSellingObject.strong}</strong>
             <div class="selling__btn">
                <button onclick="isOpenRegistorModal()" class="selling_btn">${elSellingObject.buttonOne}</button>
                <button onclick="isOpenShopModal()" class="selling_btn"><img src="${elSellingObject.buttonTwo}" alt=""></button>
            </div>
         </div>
    `
}
renderContent(elSellingObject)

elSellingNewArray.forEach((object) => {
    elSellingList.innerHTML += `
    <li class="selling__item">
            <img width="90%" src="${object.img}" alt="" class="selling_img-item">
            <h3 class="selling_subtitle">${object.title}</h3>
            <p class="selling_text-item">${object.text}</p>
            <div class="selling__bottom">
                <strong class="selling_strong">${object.strong}</strong>
                <a href="http://127.0.0.1:5500/selling.html?id=${object.id}" class="selling_link"><img width="25px" src="${object.buttonThree}" alt=""></a>
            </div>
    </li>
    `
})

window.addEventListener("keydown", (evt) => {
    if(evt.key == "b"){
        elSidebar.classList.remove("hidden")
    }
})