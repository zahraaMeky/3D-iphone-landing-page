import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import {watchImg,rightImg} from '../utils'
import VideoCarousel from "./VideoCarousel ";
const Highlights = () => {
  useGSAP(() => {
    // gsap code here...
    gsap.to("#title", {opacity: 1,y:0});
    gsap.to(".link", {opacity: 1,y:0,duration:1,stagger:0.25});
  }, []); 
  return (
    <section id="highlights" className="w-screen overflow-hidden h-full bg-zinc common-padding">
      <div className="screen-max-width">
        <div className="mb-12 items-end justify-between w-full md:flex">
          <h1 id="title" className="section-heading">Get the highlights.</h1>
          <div className="flex flex-wrap items-end gap-5">
            <p className="link">
              Watch the film
              <img src={watchImg} alt="watchImg"/>
            </p>
            <p className="link">
              Watch the event
              <img src={rightImg} alt="watchImg" className="ml-2"/>
            </p>
          </div>
        </div>
        <VideoCarousel/>
      </div>
    </section>
  )
}

export default Highlights
