import React from "react";

const RadioPlayer = () => {
  return (
    <div className="">
      <center>
        <iframe
          loading="lazy"
          className="cuadroBordeado"
          src="https://cp.usastreams.com/pr2g/APPlayerRadioHTML5.aspx?stream=https://eu1.serviaudio.com:10925/;&amp;fondo=05&amp;formato=aacp&amp;color=14&amp;titulo=2&amp;autoStart=1&amp;vol=10&amp;tipo=7&amp;nombre=Fm++Expres&amp;imagen=http://www.fmexpres.com/wp-content/uploads/2019/08/cropped-logo2.png&amp;server=https://eu1.serviaudio.com:10925/index.htmlCHUMILLASsid=1&amp;opt=metadata"
          name="contenedorPlayer"
          width="300px"
          height="105px"
          frameBorder="0"
          marginWidth="0"
          marginHeight="0"
          scrolling="no"
        ></iframe>
      </center>
    </div>
  );
};

export default RadioPlayer;
