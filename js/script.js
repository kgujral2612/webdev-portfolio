// ======= CURSOR ANIMATINO ========

var cursor = document.querySelector('.cursor');
var cursorInner = document.querySelector('.inner-cursor');
var anchors = document.querySelectorAll('.anchor');
var anchorsBlack = document.querySelectorAll('.anchor-black');

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

anchorsBlack.forEach(item => {
  item.addEventListener('mouseover', () => {
    cursor.classList.add('hover-white');
    cursorInner.classList.add('inner-hover');
  });
  item.addEventListener('mouseleave', () => {
    cursor.classList.remove('hover-white');
    cursorInner.classList.remove('inner-hover');
  });
})


// ======= NAVBAR ========
var bar0 = document.querySelector("#menu-button-bar-0");
var bar1 = document.querySelector("#menu-button-bar-1");
var bar2 = document.querySelector("#menu-button-bar-2");
var navMenuBtn = document.querySelector("#nav-menu-btn");
var navMenuContainer = document.querySelector("#nav-menu-container");
var navMenuItems = document.querySelectorAll(".nav-menu-item");

navMenuBtn.addEventListener('click', ()=> {
  bar0.style.transform = bar0.style.transform === 'translate(0px, 0px)' ? 'translate(0px, 9px) rotate(45deg)' : 'translate(0px, 0px)';
  bar1.style.opacity = bar1.style.opacity === '1' ? '0' : '1';
  bar2.style.transform = bar2.style.transform === 'translate(0px, 0px)' ? 'translate(0px, -9px) rotate(-45deg)' : 'translate(0px, 0px)';
  navMenuContainer.style.right = navMenuContainer.style.right === '-380px' ? '0px' : '-380px';
})

for (var i = 0; i < navMenuItems.length; i++) {
  (function(index) {
    navMenuItems[index].addEventListener("click", function() {
      var activeItem = document.querySelector(".active");
      activeItem.classList.remove("active");
      navMenuItems[index].classList.add("active");
    })
  })(i);
}


//===================================================
// ============= Intersection observer  =============
//===================================================

const hiddenElements = document.querySelectorAll('.hidden');
const showingObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry)=> {
      if(entry.isIntersecting){
        entry.target.classList.add('show');
      }
  });
});
hiddenElements.forEach((el)=> showingObserver.observe(el));

const animatedMouse = document.querySelector(".animated-mouse");
animatedMouse.addEventListener("click", function(){
  document.getElementById("about").scrollIntoView({behavior: 'smooth'});
});
