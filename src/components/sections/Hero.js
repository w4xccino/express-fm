import React, { useState } from "react";
import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";
import ButtonGroup from "../elements/ButtonGroup";
import Button from "../elements/Button";
// import Image from "../elements/Image";
// import Modal from "../elements/Modal";
// import RadioPlayer from "./RadioPlayer";

import ReactJkMusicPlayer from "react-jinke-music-player";
import "react-jinke-music-player/assets/index.css";

const propTypes = {
  ...SectionProps.types,
};

const defaultProps = {
  ...SectionProps.defaults,
};

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {
  const [setVideomodalactive] = useState(false);

  const audioList = [
    {
      musicSrc: "https://eu1.serviaudio.com:10925/index.html/live",
      name: "Radio FM Expres",
      cover: require("../../assets/images/logo-player.png"),
    },
  ];
  const playerOptions = {
    audioLists: audioList,
    autoPlay: true,
    showPlay: true,
    showPlayMode: false,
    showDownload: false,
    showLyric: false,
    showReload: false,
    showProgressLoadBar: false,
    showMiniProcessBar: false,
    defaultPosition: {
      bottom: 20,
      right: 20,
    },
    drag: false,
  };

  const openModal = (e) => {
    e.preventDefault();
    setVideomodalactive(true);
  };

  const closeModal = (e) => {
    e.preventDefault();
    setVideomodalactive(false);
  };

  const outerClasses = classNames(
    "hero section center-content",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "hero-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  return (
    <section {...props} className={outerClasses}>
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">
            <h1
              className="mt-0 mb-16 reveal-from-bottom"
              data-reveal-delay="200"
            >
              Radio Expres <p className="text-color-primary">98.9</p>
            </h1>
            <ReactJkMusicPlayer {...playerOptions} />
            <div className="container-xs">
              <p
                className="m-0 mb-32 reveal-from-bottom"
                data-reveal-delay="400"
              >
                Con el Rock and Pop de tu mejor epoca!
              </p>
              <div>
                {/* <RadioPlayer */}
                {/*   showPlay={true} */}
                {/*   autoPlay={true} */}
                {/*   toggleMode={true} */}
                {/* /> */}
              </div>
              <div className="reveal-from-bottom" data-reveal-delay="600">
                <ButtonGroup>
                  <Button
                    tag="a"
                    color="primary"
                    wideMobile
                    href="https://www.fmexpres.com/"
                  >
                    Ir al sitio web!
                  </Button>
                </ButtonGroup>
              </div>
            </div>
          </div>
          <div></div>
          {/* <div> */}
          {/*   <video */}
          {/*     controls */}
          {/*     autoplay */}
          {/*     name="media" */}
          {/*     poster="http://www.fmexpres.com/wp-content/uploads/2020/12/Logo-4.jpg" */}
          {/*   > */}
          {/*     <source src="http://20.254.104.74:8000/live" type="audio/aac" /> */}
          {/*   </video> */}
          {/* </div> */}
        </div>
      </div>
    </section>
  );
};

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;
export default Hero;
