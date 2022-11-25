gsap.registerPlugin(ScrollTrigger);

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

// =====PRESENTATION ANIMATION=========
const tl = gsap.timeline()
tl.from('.presentation__logo',{rotate: 800, duration: 2.5, ease: 'elastic'})
tl.to('.presentation', {backgroundColor: 'rgb(2, 24, 31)'})
tl.to('.presentation__logo',{position:'absolute',ease: 'power2',left:0, top:-45, y:'10%',scale:0.3,duration: 1})
tl.to('.presentation__logo', {opacity:0,})
tl.to('.presentation',{opacity:0})
tl.to('body',{overflowY:'visible'})
// tl.from('.main', {display:'none',duration:.1})
tl.from('.header',{opacty:0,duration:2})


gsap.to('.hero__background', {
  x:50,
  y:5,
  opacity:0,
  scrollTrigger:{
    trigger:'.hero',
    start:'50% 50%',
    end:'50% top',
    // markers: true,
    scrub:2,
  }
})
gsap.to('.hero__text', {
  x:-50,
  y:30,
  opacity:0,
  scrollTrigger:{
    trigger:'.hero',
    start:'50% 50%',
    end:'50% top',
    // markers: true,
    scrub:2,
  }
})


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
  scrub:1
 })

 let sections = gsap.utils.toArray(".panel");

 gsap.to(sections, {
   xPercent: -100 * (sections.length - 1),
   ease: "none",
   scrollTrigger: {
     trigger: ".knowledge",
     pin: true,
     scrub: 0.1,
     snap: 100 / (sections.length - 1),
     end: () => "+=" + document.querySelector(".knowledge").offsetWidth
   }
 });