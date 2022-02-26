var t1= gsap.timeline();
t1.from(".a",{
    opacity:0,
    duration:4,
    stagger:.2,
    x:15,
    ease:Expo.easeInOut
},"-=3")
.from(".b",{
    opacity:0,
    duration:4,
    stagger:0.2,
    y:15,
    ease:Expo.easeInOut
},"-=2")
.from(".c",{
    opacity:0,
    duration:0.5,
    stagger:0.2,
    x:15,
    ease:Expo.easeInOut
},"-=1")
 
gsap.to(".move",{
    width:"-100%",
    duration:2,
     scale:1,
    ease:Expo.easeInOut,
})
gsap.to(".move1",{
    height:"-80%",
    duration:6,
     scale:1,
    ease:Expo.easeInOut,
})



document.querySelector("#center").addEventListener("click",function (){
    gsap.to("#overlay",{
        opacity:0,
        duration:2,
        y:"-100%",
        ease:Expo.easeInOut,
    })
})