window.addEventListener("load",function(){
    const links = document.querySelectorAll(".header-nav-item_a");
links.forEach((item) => item.addEventListener("mouseenter",handleHoverLink));
const line = document.createElement("div");
line.className = "line-effect";
document.body.appendChild(line);

function handleHoverLink(event){
    const {left,top,width,height} = event.target.getBoundingClientRect();
    // console.log({left,top,width,height});
    const offsetbottom = 7;
    line.style.width = `${width}px`; // độ dài style bằng chính độ dài menu-link luôn
    line.style.left = `${left}px`; // tương tự trên
    // line.style.hight = `${hight}px`; 
    line.style.top = `${top + height + offsetbottom }px`;

}
const menu = document.querySelector(".header-nav-list");
menu.addEventListener("mouseleave",function(){
    line.style.width = 0;
})


//     const nav_item_a = document.querySelectorAll(".header-nav-item_a");
//     nav_item_a.forEach((item) => item.addEventListener("mouseenter",hanldeTopitem));
//     const line = document.createElement("div");
//     line.className = "effect-link";
//    document.body.appendChild(line);

//    function hanldeTopitem(event){
//     console.log(event.target);
//     const {left,height,width,top} = event.target.getBoundingClientRect();
//     console.log({left,height,width,top});
//     const hightnavitem = 5;
//     line.style.width = `${width}px`;
//     line.style.left = `${left}px`;
//     line.style.top = `${top + height + hightnavitem}px`;

// }
// const nav_list = document.querySelector(".header-nav-list");
//  nav_list.addEventListener("mouseleave",function(){
//     line.style.width = 0;

// })

const nav_bottom_span = document.querySelectorAll(".header-nav_bottom-title");

   nav_bottom_span.forEach((item) => item.addEventListener("mouseenter",handletopbottom));
   const nav_bottom = document.createElement("div");
   nav_bottom.className = "effect-bottom";
  document.body.appendChild(nav_bottom);

   function handletopbottom(event){
    // console.log(event.target);
    const {left,height,width,top} = event.target.getBoundingClientRect();
    // console.log({left,height,width,top});
    const hightnavbottom = 8;

    nav_bottom.style.width = `${width}px`;
    nav_bottom.style.left = `${left}px`;
    nav_bottom.style.top = `${top + height + hightnavbottom}px`;

}

    const nav_bottom_list = document.querySelector(".header-nav_bottom-list");
    nav_bottom_list.addEventListener("mouseleave",function(){
        nav_bottom.style.width = 0;
    })

    // form sign up  |   sign in

  // sign in
  // ==================================================
const headeritemsign = document.querySelector(".header-item-sign-in");
const template = 
`
<div class="modal">

<div class="form-container">
<span class="form-container__title"></span>
<form>
  <div class="form-container__sign-buttons">
    <button type="button">
      <svg viewBox="0 0 24 24" width="16" height="16"><path fill="currentColor" d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205
        11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422
        18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084
        1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93
        0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267
        1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12
        3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0
        1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24
        12.297c0-6.627-5.373-12-12-12"></path></svg>
      <span>Sign in with GitHub</span>
    </button>
    <button type="button">
      <svg width="16" height="16"><g fill="none"><path d="M2.629 10.659A5.893 5.893 0 0 1 2 8c0-.956.226-1.858.629-2.659l2.065 1.544a3.487 3.487 0 0 0 0 2.23L2.629 10.66z" fill="#FBBC05"></path><path d="M2.629 5.341C3.627 3.357 5.713 2 8.139 2c1.563 0 2.959.573 4.047 1.5L10.4 5.245a3.6 3.6 0 0 0-2.26-.79c-1.61 0-2.97 1.015-3.446 2.43L2.629 5.34z" fill="#EA4335"></path><path d="M2.628 10.657L4.692 9.11c.475 1.417 1.835 2.435 3.448 2.435 1.702 0 2.986-.845 3.293-2.318H8.14V6.91h5.72c.084.355.14.736.14 1.091 0 3.818-2.79 6-5.86 6-2.427 0-4.514-1.358-5.512-3.343z" fill="#34A853"></path><path d="M12.141 12.506l-1.96-1.483a2.704 2.704 0 0 0 1.252-1.796H8.14V6.91h5.72c.084.355.14.736.14 1.091 0 1.956-.732 3.482-1.859 4.506z" fill="#4285F4"></path></g></svg>
      <span>Sign in with Google</span>
    </button>
  </div>
  <div class="form-container__sign-inputs">
    <label>
      <legend>Email</legend>
      <input pattern="^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$" required="" class ="input-sort" type="email" placeholder="Input with email validation  ">
      <span></span>
    </label>
    <label>
      <legend>Password</legend>
      <input required="" pattern="^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d]{8,}$" type="password" placeholder="Input with password validation">
      <span></span>
    </label>
    <button class="submit-button" type="submit">
      Login
    </button>
  </div>
  <div class="form-container__auth-block">
    <span>Don't have an account? Signup <a href="#">here</a></span>
  </div>
</form>
</div>
    
</div>

`

headeritemsign.addEventListener("click",function(){
    document.body.insertAdjacentHTML("afterbegin",template);
})

document.addEventListener("click",function(el){
        const modal = document.querySelector(".modal");
        if(el.target.matches(".modal")){
            el.target.parentNode.removeChild(el.target);
        }

    }) 

});

// sign up
// ================================================
const headersignup = document.querySelector(".header-item-sign-up");

const template_signup =
`
<div class="modal">

<form class="form-signup">
<div class="header-signup">Sign Up</div>
<div class="inputs-signup">
    <input placeholder="Email" class="input-signup" type="text">
    <input placeholder="Password" class="input-signup" type="password">

<div class="checkbox-container_signup">
    <label class="checkbox-signup">
    <input type="checkbox" id="checkbox-signup">
    </label>
    <label for="checkbox-signup" class="checkbox-text">Remember me</label>
</div>
<button class="sigin-btn">Submit</button>
<a class="forget" href="#">Forget password ?</a>
<p class="signup-link">Don't have an account? <a href="#">Sign up</a></p>
</div>
</form>

</div>
 `
 headersignup.addEventListener("click",function(){
  document.body.insertAdjacentHTML("beforeend",template_signup);
 })


// ========================================================================

//    fixed header nhé /

// function debounceFn(func, wait, immediate) {
//   let timeout;
//   return function () {
//     let context = this,
//       args = arguments;
//     let later = function () {
//       timeout = null;
//       if (!immediate) func.apply(context, args);
//     };
//     let callNow = immediate && !timeout;
//     clearTimeout(timeout);
//     timeout = setTimeout(later, wait);
//     if (callNow) func.apply(context, args);
//   };
// }

// const header = document.querySelector(".header-nav_bottom");
// // console.log(header);

// window.addEventListener("scroll",debounceFn( function(){

//   const scrollY = window.pageYOffset;
//   const headerHeight = header && header.offsetHeight;
//   console.log(headerHeight);

//   if(scrollY > headerHeight){
//     header && header.classList.add("is-fixed");
//     document.body.style.paddingTop = `${headerHeight}px`
//   }else {
//     header && header.classList.remove("is-fixed");
//     document.body.style.paddingTop = 0;

//   }

// },150))
const progress = document.querySelector(".progress");

window.addEventListener("scroll",function(){
const scrollTop = window.pageYOffset;
// console.log(scrollTop);

  const height_bar = 
  document.documentElement.scrollHeight - document.documentElement.clientHeight;


  const width_bar = (scrollTop /  height_bar) * 100;
  progress.style.width = `${width_bar}%`

})

// kickvào sản phẩm nó hiện ra nhé 
// ========================================
const phoneimg = document.querySelectorAll(".phone-img");
[...phoneimg].forEach((item) => item.addEventListener("click",handlight));

function handlight(e){
  console.log(e.target);
  const lightimage =e.target.getAttribute("src");
  const lightboxform =
`
<div class="lightbox">
    <div class="lightbox-content">
        <img src="${lightimage}" alt="" class="lightbox-image">
    </div>
</div>
`
document.body.insertAdjacentHTML("afterbegin",lightboxform);
 };

  document.body.addEventListener("click",function(e){
    if(e.target.matches(".lightbox")){
      e.target.parentNode.removeChild(e.target);
    }
  })
// =======================================================
  // animate advertisement

  const advertisementsliderimg = document.querySelectorAll(".advertisement-slider-img");

    window.addEventListener("scroll",function(){
      const scrollY = window.pageYOffset; 
      console.log(scrollY);

      [...advertisementsliderimg].forEach((item) => {
        if(scrollY > item.offsetTop - (item.offsetHeight / 2)) {
          item.classList.add("active");
        }
      })
    })
// =============================================================

const footerMidEmail = document.querySelector(".footer-mid-input");

footerMidEmail.addEventListener("input",function(e){
  const value = e.target.value;
  console.log(value);
  const regexEmailMid = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;

  if(regexEmailMid.test(value.trim())){
    e.target.classList.add("valid");
  }



})







