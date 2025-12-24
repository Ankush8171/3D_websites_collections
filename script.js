

function pageAnimation(){
    var t1=gsap.timeline()
t1.from("nav h1,nav h4, nav button",{
    y:-30,
    opacity:0,
    delay:0.5,
    duration:1,
    stagger:0.15
})

t1.from(".center-part1 h1",{
    x:-300,
    opacity:0,
    duration:0.5
})

t1.from(".center-part1 p",{
    x:-100,
    opacity:0,
    duration:0.4
})

t1.from(".center-part1 button",{
   
    opacity:0,
    duration:0.4
})

t1.from(".center-part2 img",{
   
    opacity:0,
    duration:0.7,
    x:200
},"-=0.7")

t1.from(".section-bottom img",{
   
    opacity:0,
    y:30,
    stagger:0.15,
    duration:0.6
})
}

pageAnimation();


var tl2= gsap.timeline({
    scrollTrigger:{
        trigger:".section-2",
        scroller:"body",
        markers:true,
        start:"top 50%",
        end:"top 0",
        scrub:2
    }
})

tl2.from(".services ",{
    y:30,
    opacity:0,
    duration:0.5
})

tl2.from(".elem.line1.left",{
    x:-300,
    opacity:0,
    duration:1
},"anim")

tl2.from(".elem.line1.right",{
    x:300,
    opacity:0,
    duration:1
},"anim")