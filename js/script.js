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

//  gsap.to('.knowledge__first',{
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
    markers:true,
    // end:'109% top',
    pin:true,
    pinSpacing:false,
    snap:1
  })
  ScrollTrigger.create({
    trigger:'.knowledge__gallery2',
    markers:true,
    pin:true,
    pinSpacing:false,
    snap:1
  })
  ScrollTrigger.create({
    trigger:'.knowledge__buttons',
    // end:'top top',
    // markers:true,
    pin:true,
    pinSpacing:false,
    snap:1
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


