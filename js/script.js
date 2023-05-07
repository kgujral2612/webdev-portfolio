// ======= CURSOR ANIMATION ========
var cursor = document.querySelector('.cursor');
var cursorInner = document.querySelector('.inner-cursor');
var anchors = document.querySelectorAll('.anchor');
var anchorsWhite = document.querySelectorAll('.anchor-white');
var anchorsDark = document.querySelectorAll('.anchor-dark');

document.addEventListener('mousemove', function(e){
  cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
});

document.addEventListener('mousemove', function(e){
  var x = e.clientX;
  var y = e.clientY;
  cursorInner.style.left = x + 'px';
  cursorInner.style.top = y + 'px';
});

anchors.forEach(item => {
  item.addEventListener('mouseover', () => {
    cursor.classList.add('hover');
    cursorInner.classList.add('inner-hover');
  });
  item.addEventListener('mouseleave', () => {
    cursor.classList.remove('hover');
    cursorInner.classList.remove('inner-hover');
  });
})

anchorsWhite.forEach(item => {
  item.addEventListener('mouseover', () => {
    cursor.classList.add('hover-white');
    cursorInner.classList.add('inner-hover');
  });
  item.addEventListener('mouseleave', () => {
    cursor.classList.remove('hover-white');
    cursorInner.classList.remove('inner-hover');
  });
})

anchorsDark.forEach(item => {
  item.addEventListener('mouseover', () => {
    cursor.classList.add('cursor-small-dark');
    cursorInner.classList.add('inner-cursor-dark');
  });
  item.addEventListener('mouseleave', () => {
    cursor.classList.remove('cursor-small-dark');
    cursorInner.classList.remove('inner-cursor-dark');
  });
})
// ======= NAVBAR ========
var bar0 = document.querySelector("#menu-button-bar-0");
var bar1 = document.querySelector("#menu-button-bar-1");
var bar2 = document.querySelector("#menu-button-bar-2");
var navMenuBtn = document.querySelector("#nav-menu-btn");
var navMenuContainer = document.querySelector("#nav-menu-container");
var navMenuItems = document.querySelectorAll(".nav-menu-item");
var navWidth = navMenuContainer.offsetWidth;

function navMenuPosition(){
  navWidth = navMenuContainer.offsetWidth;
  navMenuContainer.style.right = -navWidth + 'px';
}
navMenuPosition();

window.addEventListener("resize", ()=> {
  navMenuPosition();
});

navMenuBtn.addEventListener('click', ()=> {
  bar0.style.transform = bar0.style.transform === 'translate(0px, 0px)' ? 'translate(0px, 9px) rotate(45deg)' : 'translate(0px, 0px)';
  bar1.style.opacity = bar1.style.opacity === '1' ? '0' : '1';
  bar2.style.transform = bar2.style.transform === 'translate(0px, 0px)' ? 'translate(0px, -9px) rotate(-45deg)' : 'translate(0px, 0px)';
  navMenuContainer.style.right = navMenuContainer.style.right === -navWidth + 'px' ? '0px' : -navWidth + 'px';
})

function closeWindow() {
  bar0.style.transform = 'translate(0px, 0px)';
  bar1.style.opacity = '1' ;
  bar2.style.transform = 'translate(0px, 0px)' ;
  navMenuContainer.style.right = -navWidth + 'px';
}
for (var i = 0; i < navMenuItems.length; i++) {
  (function(index) {
    navMenuItems[index].addEventListener("click", function() {
      makeActive(navMenuItems[index]);
      if(window.innerWidth <= 500 ){
        closeWindow();
      }
    })
  })(i);
}

function makeActive(newActiveNavItem){
  var activeItem = document.querySelector(".active");
  activeItem.classList.remove("active");
  newActiveNavItem.classList.add("active");
}

// nav sticks upon scroll up, otherwise disappears

var lastScrollTop;
var navbar = document.querySelector('#nav'); 
const navHeight = navbar.scrollHeight;
window.addEventListener('scroll',function(){
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  //if the nav menu is open then the nav buttons should always stick
  if(navMenuContainer.style.right == '0px'){
      navbar.style.top='0' ;
  }
  else{
    if(scrollTop > lastScrollTop){
      navbar.style.top='-' + navHeight + 'px';
    }
    else{
      navbar.style.top='0';
    }
  }
  lastScrollTop = scrollTop;
});


//===================================================
// ============= Intersection observer  =============
//===================================================

// Section show and hide animations
const hiddenElements = document.querySelectorAll('.hidden');
const showingObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry)=> {
      if(entry.isIntersecting){
        entry.target.classList.add('show');
      }
  });
});
hiddenElements.forEach((el)=> showingObserver.observe(el));

const slideUpElements = document.querySelectorAll(".slide-up");
const slidingObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry)=> {
      if(entry.isIntersecting){
        entry.target.classList.add('slide-complete');
      }
  });
});
slideUpElements.forEach((el)=> slidingObserver.observe(el));

const animatedMouse = document.querySelector(".animated-mouse");
animatedMouse.addEventListener("click", function(){
  document.getElementById("about").scrollIntoView({behavior: 'smooth'});
});

// Nav Link Highlight As You Scroll
const navLinkHighlight = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting){
      var elId = entry.target.id;
      elId = elId == "footer" ? "contact" : elId; 
      var navItem = navMenuContainer.querySelector("a[href='#" + elId + "']");
      makeActive(navItem);
    }
  });
});
const menuItems = ["#home", "#about", "#work", "#skills", "#contact", "#footer"];
menuItems.forEach((el) => {
  var element = document.querySelector(el);
  navLinkHighlight.observe(element);
});


//===================================================
// ============= Lazy Load Swiper  =============
// swiper js, swiper css, and click sound
//===================================================

const workSection = document.querySelector("#work")

const makeClickSound = () => {
  var clickSound= document.querySelector("#click-sound");
  var navButtons = document.querySelector("#navigation-container").querySelectorAll("div");

  navButtons.forEach((el)=> {
    el.addEventListener("click", ()=>{
      clickSound.play();
    });
  });

};
const lazyLoadCarousel = () => {
  const scriptTag = document.createElement('script'); 
  scriptTag.src = "./js/swiper.js";
  const body = document.querySelector("body");

  const styleTag = document.createElement('link');
  styleTag.href = './css/swiper.css';
  styleTag.rel = 'stylesheet';
  styleTag.type = 'text/css';

  const audioTag = document.createElement('audio');
  audioTag.id = "click-sound";
  const audioSrc = document.createElement('source');
  audioSrc.src = "./assets/project/clicksound.mp3";
  audioSrc.type="audio/mpeg";
  audioTag.appendChild(audioSrc);

  body.appendChild(scriptTag);
  body.appendChild(styleTag);
  body.appendChild(audioTag);

  makeClickSound();
}

let observer = new IntersectionObserver(function(entries) {
  if (entries[0].isIntersecting) {
    setTimeout(function() {
      lazyLoadCarousel()
    }, 500)
    observer.unobserve(workSection)
  }
});
observer.observe(workSection)

//===================================================
// ============= Lazy Load Images  =============
//===================================================

var lazyImages = document.querySelectorAll(".lazy-img");
let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
  entries.forEach(function(entry) {
      if (entry.isIntersecting) {
          let lazyImage = entry.target;
          lazyImage.src = lazyImage.dataset.src;
          lazyImage.classList.remove("lazy-img");
          lazyImage.classList.remove("lazy-img-hide");
          lazyImage.classList.add("lazy-img-show");
          lazyImageObserver.unobserve(lazyImage);
      }
  });
});
/** Now observe all the non-loaded images using the observer we have setup above **/
lazyImages.forEach(function(lazyImage) {
  lazyImageObserver.observe(lazyImage);
});

//===================================================
// ============= Send Email  =============
//===================================================

const lazyLoadEmail = () => {
  //add smtp script tag
  const smtpScriptTag = document.createElement('script'); 
  smtpScriptTag.src = "https://smtpjs.com/v3/smtp.js";
  const body = document.querySelector("body");
  body.appendChild(smtpScriptTag);
  //add event listener
  var emailBtn = document.querySelector("#contact-submit-button");
  emailBtn.addEventListener("click", function() {
    Email.send({
      SecureToken : "594567ed-d157-4434-9d38-985fe4884add",
      To : 'connect2kaushambi@gmail.com',
      From : "kgujral@pdx.edu",
      Subject : "Message from "+ document.querySelector('#contact-name-input-field').value,
      Body : document.querySelector('#contact-message-input-field').value + "\n" + document.querySelector('#contact-email-input-field').value
    }).then(
    message => alert(message)
    );
  });

}
const contactSection = document.querySelector("#contact")
let contactObserver = new IntersectionObserver(function(entries) {
  if (entries[0].isIntersecting) {
    setTimeout(function() {
      lazyLoadEmail();
    }, 500)
    contactObserver.unobserve(contactSection)
  }
});
contactObserver.observe(contactSection)