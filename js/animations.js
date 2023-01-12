gsap.registerPlugin(ScrollTrigger);

window.onbeforeunload = function () {
  // window.scroll({behavior:'initial', top:100, left:100})
  window.scrollTo(0, 0);
  // document.location.href='#home';
}

// =====PRESENTATION ANIMATION=========
const tl = gsap.timeline();

tl.to('body',{overflowY:'hidden'});
tl.from('.presentation__logo',{rotate: 800, duration: 2.5, ease: 'elastic'});
tl.to('.presentation', {backgroundColor: 'rgb(2, 24, 31)'});
// tl.to('.presentation__logo',{toggleClass:'presentation__logo--move'})
// tl.to('.presentation__logo',{ease: 'power2',left:0, top:-45, y:'10%',scale:0.3,duration: 1})
// tl.to('.presentation__logo', {opacity:0})
// tl.to('.presentation__logo',{ease: 'power2',left:0, top:45, y:'-10%',scale:1,duration: 1})
tl.to('.presentation',{opacity:0});
// tl.from('.hero__text',{x:-50, y:30, opacity:0, duration:2, ease:'power4'})
// tl.from('.hero__background',{x:50, y:5, opacity:0, duration:2, ease:'power4'},'<')
tl.to('body',{overflowY:'visible'});
// tl.from('.main', {display:'none',duration:.1})
// tl.from('.hero',{opacity:0, duration:.3});


// =======NAV TRANSITION=========
const button = document.querySelectorAll('.nav__li')
const tlTransition = gsap.timeline()

for (var i = 0; i < button.length; i++) {
  button[i].addEventListener('click', () => {
    tlTransition
    // gsap.from('.transition1',{width:'120vw',
    // height:'120vh',alingSelf:'center', opacity:1})
      .from('.transition1',{height:'50vh',duration:1})
      .from('.transition2',{height:'50vh',duration:1},'<')
      .from('.nav',{pointerEvents:'none', duration:1},'<')
      // .from('.presentation__logo',{opacity:1,scale:1, duration: 1,},)
      // .to('.presentation__logo',{scale:0, duration:1})
      // .from('.presentation',{opacity:1, duration:1},'<')
  });
}

// =========HERO ANIMATION==========
const tlHero = new gsap.timeline()
ScrollTrigger.create({
  animation:tlHero,
  trigger:'.hero',
  start:'50% 50%',
  end:'50% 10%',
  // markers: true,
  scrub:3,
})
tlHero
  .to('.hero__background',{
    opacity:0,
    x:50,
    y:5,
    display: "none"
  })
  .to('.hero__text',{
    opacity:0,
    x:-50,
    y:30,
  },'<')

// gsap.to('.hero__background', {
//   x:50,
//   y:5,
//   opacity:0,
//   scrollTrigger:{
//     trigger:'.hero',
//     start:'50% 50%',
//     end:'50% top',
//     // markers: true,
//     scrub:2,
//   }
// })
// gsap.to('.hero__text', {
//   x:-50,
//   y:30,
//   opacity:0,
//   scrollTrigger:{
//     trigger:'.hero',
//     start:'50% 50%',
//     end:'50% top',
//     // markers: true,
//     scrub:2,
//   }
// })

// ========WELCOME ANIMATION============
gsap.from('.welcome__text', {
  opacity:0,
  scrollTrigger:{
    trigger: '.welcome',
    start:'bottom bottom',
    end: 'top 40%',
    // markers:true,
    scrub:1.5,
  }
})

const tlWall =  gsap.timeline()
tlWall
  .from('.about__me',{
    y:-200,
    duration:1
  })
  .from('.about__wall',{
    y:-150,
    duration:1
  },'<')
  .from('.about__street',{
    y:80,
    duration:1
  },'<')
  .to('.about__cloud',{
    x:-250,
    duration:1
  },'<')
  .to('.about__cloud2',{
    x:-250,
    duration:1
  },'<')

 ScrollTrigger.create({
  animation:tlWall,
  trigger:'.about',
  // markers:true,
  scrub:2,
 })

// ==========SNAP PANELS ANIMATION=========
  ScrollTrigger.create({
    trigger:'.knowledge__first',
    start:'top top',
    // markers:true,
    pin:true,
    pinSpacing:false,
    snap:1,
  })
  ScrollTrigger.create({
    trigger:'.knowledge__gallery',
    // markers:true,
    // end:'109% top',
    pin:true,
    pinSpacing:false,
    snap:1
  })
  ScrollTrigger.create({
    trigger:'.knowledge__gallery2',
    // markers:true,
    pin:true,
    pinSpacing:false,
    snap:1
  })
  ScrollTrigger.create({
    trigger:'.knowledge__buttons',
    end:'top top',
    // markers:true,
    pin:true,
    pinSpacing:false,
    // snap:1
  })

  


//  ========HORIZONTAL SCROLL============
//  let sections = gsap.utils.toArray(".panel");

//  gsap.to(sections, {
//    xPercent: -100 * (sections.length - 1),
//    ease: "none",
//    scrollTrigger: {
//      trigger: ".knowledge",
//      pin: true,
//      scrub: 0.1,
//      snap: 1 / (sections.length - 1),
//      end: () => "+=" + document.querySelector(".knowledge").offsetWidth
//    }
//  });

// const galleryScroll = document.querySelector('.gallery__content2');

// galleryScroll.addEventListener('wheel',(evt)=>{
//   evt.preventDefault();
//   galleryScroll.scrollLeft += evt.deltaY;
// })

// ===========BUTTONS AND MENU ANIMATIONS=============

const cta1 = document.getElementById('cta1')

const tlButtonsMenu1 = gsap.timeline()
tlButtonsMenu1
  .pause()
  .to('.buttons__ul1',{height:300,opacity:1,duration:.5})
  .to('.buttons__ul1',{width:285,opacity:1,duration:.5})
  .to('.buttons__li1',{opacity:1,pointerEvents:'all',duration:.5})

var menuOpen1 = 0
cta1.addEventListener('click',()=>{
  if (menuOpen1 == 0) {
    menuOpen1 = 1
    tlButtonsMenu1.play()
  }else{
    menuOpen1 = 0
    tlButtonsMenu1.reverse()
  }
})
const cubeFace = document.getElementById('face2')
const tlCube3d = gsap.timeline()
tlCube3d
  .pause()
  .to('.buttons__cta3',{y:-200, duration:.9,ease:'in-out'})
  .to('.cube__face',{background:'radial-gradient(rgb(73, 0, 145),rgb(73, 0, 145))'})
  .from('.buttons__cube',{scale:0, duration:1,},'<')
  .to('.buttons__cube',{rotateY:'-450deg', rotateX:'-360deg', ease:'in-out', duration:2.5},'<')
  .to('.cube__face',{background:'radial-gradient(rgb(132, 0, 255),rgb(73, 0, 145))'})
  .from('.buttons__face7',{opacity:0,},'<')
  .to('.buttons__perspective',{perspectiveOrigin:'250px 100px'})
  // .to('.cube__face',{scrollTrigger:{trigger:'.trigger',toggleClass:'cube__face--animation'}})
  // .to('.buttons__cube',{rotateX:'-360deg',rotateY:'-450deg',ease:'in-out', duration:2.5},)
  
const buttonsCheck = document.getElementById('cta3')
var cta3Active = 0

buttonsCheck.addEventListener('click',()=>{
  console.log('click')
  if (cta3Active == 0) {
    cta3Active = 1
    tlCube3d.play()
  } else {
    cta3Active=0
    tlCube3d.reverse()
  }
})

// ==============SECTION WORKS ANIMATION===========

const worksFirst = gsap.timeline()

worksFirst
  .from('.works__text--first',{delay: .5,x:-100, duration:2,opacity:0,display:"none"})
  .from('.works__video--first',{x:100, duration:2,opacity:0,display:"none"},'<')

ScrollTrigger.create({
  animation: worksFirst,
  trigger: '.works__video--first',
  // start:'top 70%',
  toggleActions: 'restart none none none',
  // markers:true
}
)
const worksSecond = gsap.timeline()

worksSecond
  .from('.works__text--second',{delay: .5,x:100, duration:2,opacity:0, display:"none"})
  .from('.works__video--second',{x:-100, duration:2,opacity:0, display:"none"},'<')

ScrollTrigger.create({
  animation: worksSecond,
  trigger: '.works__video--second',
  // start:'top 70%',
  toggleActions: 'restart none none none',
})
