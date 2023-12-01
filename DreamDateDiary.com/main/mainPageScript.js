class MainGUI {
    gsapAnimation(){
        let gsapTimeLine = gsap.timeline()

        
        gsap.timeline().from("#textAnimation", {
            y: -10,
            opacity: 0.5,
            duration: 0.6,
            stagger: 0.8
          });

    
    }
}

const mainClassForGUI = new MainGUI()
mainClassForGUI.gsapAnimation()