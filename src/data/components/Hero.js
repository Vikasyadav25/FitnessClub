import React from "react";
import Header from "./Header/Header";
import "./Hero.css";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
import {motion} from 'framer-motion';
import NumberCounter from 'number-counter'



const Hero = () => {
  const transition={type:'spring', duration:3}
  const mobile=window.innerWidth<=768?true:false;
  return (
    <div className="hero" id="home">
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />

        <div className="the-best-ad">
          <motion.div
            initial={{ left: mobile ? "165px" : "238px" }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>
          <span>The best fitness club in the town</span>
        </div>

        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal body </span>
          </div>
          <div>
            {" "}
            <span>
              IN HERE WE WILL HELP YOU TO SHAPE AND BUILD YOUR IDEAL BODY AND
              LIVE UP YOUR LIFE TO FULLEST
            </span>
          </div>
        </div>

        <div className="figures">
          <div>
            <span>
              <NumberCounter end={139} start={99} delay="4" preFix="+" />
            </span>
            <span>expert coachs</span>
          </div>
          <div>
            <span>
              <NumberCounter end={878} start={789} delay="4" preFix="+" />
            </span>
            <span>members joined</span>
          </div>
          <div>
            <span>
              <NumberCounter end={40} start={15} delay="2" preFix="+" />
            </span>
            <span>fitness programs</span>
          </div>
        </div>
        <div className="hero-buttons">
          <button className="btn"> Get Started</button>
          <button className="btn"> Learn More</button>
        </div>
      </div>
      <div className="right-h">
        <button className="btn"> Join Now</button>
        <motion.div
          initial={{ right: "-1rem" }}
          whileInView={{ right: "4rem" }}
          transition={transition}
          className="heart-rate"
        >
          <img src={Heart} alt=""></img>
          <span> Heart Rate</span>
          <span>106 bpm</span>
        </motion.div>
        <img src={hero_image} alt="" className="hero-image"></img>
        <motion.img
          initial={{ right: "11rem" }}
          whileInView={{ right: "25rem" }}
          transition={transition}
          src={hero_image_back}
          alt=""
          className="hero-image-back"
        ></motion.img>
        <motion.div
          initial={{ right: "37rem" }}
          whileInView={{ right: "32rem" }}
          transition={transition}
          className="calories"
        >
          <img src={Calories} alt=""></img>
          <div>
            <span> Calories Burned </span>
            <span>210 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
