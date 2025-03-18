import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CustomEase } from 'gsap/CustomEase';

gsap.registerPlugin(ScrollTrigger, SplitText, CustomEase);

function allGsapAnimations() {
  gsap.to(".animateme",
    {
      duration: 2,
      rotateZ: 360,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: ".animateme",
        start: "top 80%",
        end: "bottom 20%",
        scrub: true,
        markers: true
      }
    }
  )
}

export default allGsapAnimations;