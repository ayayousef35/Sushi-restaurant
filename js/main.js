// Show Menu
const navMenu =document.getElementById("nav-menu");
const navClose =document.getElementById("nav-close");
const menuBar =document.getElementById("menu-bar");
const carrt =document.getElementsByClassName('container-cart');
 
if(menuBar){
    menuBar.addEventListener("click", () =>{
        navMenu.classList.add('show-menu')
    });
} 
if(navClose){
    navClose.addEventListener("click", () =>{
        navMenu.classList.remove('show-menu')
    });
} 
//*==========Show Search Form===============*/
const search= document.querySelector(".search-icon") ,
      searchForm = document.querySelector("#search-from"),
      closeForm =document.querySelector("#close-search-form");
if(search){
    search.addEventListener("click", () =>{
        searchForm.classList.add('show-search')
    })
} 
if(closeForm){
    closeForm.addEventListener("click", () =>{
        searchForm.classList.remove('show-search')
    })
} 
/* ============Show Cart From=============*/ 
const cartLink= document.querySelector("#cart") ,
      cartSection = document.querySelector("#section-cart"),
      closeCart =document.querySelector("#close-cart");
if(cartLink){
    cartLink.addEventListener("click", () =>{
        cartSection.classList.add('show-cart')
    })
} 
if(closeCart){
    closeCart.addEventListener("click", () =>{
        cartSection.classList.remove('show-cart')
    })
}
// ////////////////// /////////////////////////////////
// let allProdects = document.querySelector('popular-container')
// let products =[
//     {
//         id:1,
//         title:"Onigiri Rols",
//         price: "$10.99",
//         imageUrl:"image/popular-1.png"
//     },
//     {
//         id:2,
//         title:"Spring  Rolls",
//         price: "$15.99",
//         imageUrl:"image/popular-2.png"
//     },
//     {
//         id:3,
//         title:"Sushi  Rolls",
//         price: "$19.99",
//         imageUrl:"image/popular-3.png"
//     };
// ]
// function drawItems() {
//     let itemPopular =products.map((item) =>{
//         return` <article class="popular-card">
//         <img src="${item.imageUrl}" alt="popular image" class="popular-image">
//         <h3 class="popular-name">${item.title}</h3>
//         <span class="popular-desc">Japanese Dish</span>
//         <span class="popular-price">${item.price}</span>
//         <button class="popular-button" >
//             <i class="ri-shopping-bag-line"></i>
//         </button>
//     </article>`
//     })
//     allProdects.innerHTML = itemPopular;
    
// }
// drawItems()






/*=========Add Diches Of The Cart=========*/ 
(function () {
    const popularBtn = document.querySelectorAll(".popular-button");
  
    popularBtn.forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        if (e.target.parentElement.classList.contains("popular-button")) {
          // Extracting image source
          let fullpath =
            e.target.parentElement.parentElement.firstElementChild.src;
          let pos = fullpath.indexOf("image") + 5;
          let partPath = fullpath.slice(pos);
  
          // Setting up item object
          const item = {};
          item.img = `image${partPath}`;
          
          // Getting name and price
          let name = e.target.parentElement.parentElement.children[1].textContent;
          item.name = name.trim();
          
          let price = e.target.parentElement.parentElement.children[3].textContent;
          item.price = parseFloat(price.slice(1).trim());
  
          // Create cart item element
          const cartItem = document.createElement("div");
          cartItem.classList.add("cartItem");
  
          cartItem.innerHTML = `
            <img src="${item.img}" alt="" class="cart-item-img">
            <div class="item-text">
              <p class="cart-item-title">${item.name}</p>
              <span class="cart-item-price">$${item.price.toFixed(2)}</span>
            </div>
            <a href="#" class="cart-item-remove">
              <i class="ri-delete-bin-5-fill"></i>
            </a>
          `;
  
          // Insert into cart before total
          const cartSection = document.getElementById("section-cart");
          const totalContainer = document.querySelector(".total-container");
          cartSection.insertBefore(cartItem, totalContainer);
  
          // Event listener for remove button
          cartItem.querySelector(".cart-item-remove").addEventListener("click", function () {
            cartItem.remove();
            showTotal();
          });
  
          // Update total and cart count
          showTotal();
        }
      });
    });
  
    // Function to calculate and display the total price
    function showTotal() {
      const totals = [];
      const items = document.querySelectorAll(".cart-item-price");
  
      items.forEach(function (item) {
        totals.push(parseFloat(item.textContent.slice(1)));
      });
  
      const totalMoney = totals.reduce((total, item) => total + item, 0).toFixed(2);
      document.getElementById("total").textContent = `$${totalMoney}`;
  
      // Update cart count
      const cartCount = document.getElementById("cart-count");
      cartCount.classList.add("show-count");
      cartCount.textContent = items.length;
    }
  })();
  




// (function(){
//     const popularBtn =document.querySelectorAll('.popular-button');

//     popularBtn.forEach(function(btn){
//         btn.addEventListener('click',function(e){
//             // console.log(e.target);
//             if(e.target.parentElement.classList.contains('popular-button')){
//                 let fullpath=
//                    e.target.parentElement.parentElement.firstElementChild.src;
//                 let pos =fullpath.indexOf("image")+5;
//                 let partPath =fullpath.slice(pos);
//                 // console.log(partPath);
                
//                 const item ={};
//                 item.img= `image${partPath}`;
               
//                 let name =
//                 e.target.parentElement.parentElement .children[1].textContent;
//                 // console.log(name);
                
//                 item.name=name;
//                 let price =
//                 e.target.parentElement.parentElement .children[3].textContent;
//                 // console.log(price);
//                 let finalPrice =price.slice(1).trim();
//                 item.price =finalPrice;
//                 // console.log(item);
//                 // cart item
//                 const cartItem =document.createElement("div");
//                 cartItem.classList.add("cartItem");

//                 cartItem.innerHTML=
//                 ` <img src="${item.img}" alt="" class="cart-item-img">
//                 <div class="item-text">
//                     <p class="cart-item-title">${item.name}</p>
//                     <span class="cart-item-price">$${item.price}</span>
//                 </div>
//                 <a href="#" class="cart-item-remove" >
//                     <i class="ri-delete-bin-5-fill"></i>
//                 </a>
//             </div>`;
//             // //////


//             // const cart= document.getElementById('section-cart');
//             const total=document.querySelector (".total-container");

        
//             cartSection.insertBefore(cartItem,total);
            
            
//             showTotal();
//             }
            
//         });

//     });
//      function showTotal(){
//         // const t=0;
//         const totals=[];
//         const items= document.querySelectorAll('.cart-item-price');
//         const removeCartItem =document.querySelectorAll('.cart-item-remove');
//         items.forEach(function(item){
//             // let itemPrice = item.textContent.slice(1)
//             totals.push(parseFloat(item.textContent.slice(1)));
//         });

//         // console.log(totals);
//         const totalMoney =totals.reduce(function(totals,item){
//             totals+=item
//             return totals;
//         })
      
//         console.log(totalMoney);
//         const finalMoney =totalMoney;
//         document.getElementById("total").textContent=finalMoney;
//         // document.getElementById("cart-count").textContent=totals.length;
//         const cartCount=document.getElementById("cart-count");
//         cartCount.classList.add("show-count")
//         cartCount.textContent=totals.length;
    
//             removeCartItem.addEventListener('click', function (event){
//                 console.log(event.target.parentElement);
//             });
     
   
      
    
//      } 

// })();


/*=============Scroll sections active link========== */
const sections= document.querySelectorAll('section[id]')

const scrollActive =() =>{
    const scrollY =window.pageYOffset
    
    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop-50,
        sectionId = current.getAttribute('id'),
        sectionsClass =document.querySelector('.nav-list a[href*='+sectionId+']')
        
    if(scrollY> sectionTop && scrollY <=sectionTop+ sectionHeight){
        sectionsClass.classList.add('active-link')
    }   else{
        sectionsClass.classList.remove('active-link')
    } 
    });
};
window.addEventListener('scroll',scrollActive);




// /*==============Show Scroll Up ===========*/
const scrollUp =() =>{
    const scrollUp =document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                         :scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll',scrollUp)


/* ==========dark Light Theme=========*/
const ThemeButton =document.getElementById('moon-icon');
const darkTheme ='dark-theme'
const iconTheme ='ri-sun-line'

const selectedTheme =localStorage.getItem('selected-theme')
const selectedicon =localStorage.getItem('selected-icon')

const getCurrentTheme =() => document.body.classList.contains(darkTheme)? 'dark' :'light'
const getCurrentIcon =() => ThemeButton.classList.contains(iconTheme)? 'ri-moon-line' :'ri-sun-line'

if(selectedTheme){

    document.body.classList[selectedTheme==='dark'? 'add' : 'remove'](darkTheme)
    ThemeButton.classList[selectedicon==='ri-moon-line'?'add' :'remove'](iconTheme)
}
ThemeButton.addEventListener('click',()=>{
    document.body.classList.toggle(darkTheme)
    ThemeButton.classList.toggle(iconTheme)

    localStorage.setItem('selected-theme',getCurrentTheme())
    localStorage.setItem('selected-icon',getCurrentIcon())

})
/* ==========Scroll Reveal=========*/
const sr= ScrollReveal({
    origin: "top",
    distance :"60px",
    duration: 2500,
    delay: 400,
})
sr.reveal(`.image-home,.newsletter-container,.col,.footer-img`)
sr.reveal(`.content`,{origin: "bottom"})
sr.reveal(`.about-img , .recently-img`,{origin: "left"})
sr.reveal(`.about-data , .recently-data`,{origin: "right"})
sr.reveal(`.popular-card`,{interval: 100})

// loader
function loader(){
    document.querySelector('.container-loader').classList.add('fade-out');
}
function fadeOut(){
    setInterval(loader,4000);
}
window.onload= fadeOut;



