import React, { useEffect, useState } from "react";

const BioInfo = () => {
  const [index, setIndex] = useState(1);
  const [index2, setIndex2] = useState(1);

  function LoadTitleText() {
    const titleText = "Hi, I'm Ali";
    useEffect(() => {
      const timer = setTimeout(() => {
        setIndex(index + 1);
      }, 100);
    }, [index]);
    return <h1>{titleText.slice(0, index)}</h1>;
  }

  function LoadBioText() {
    let bioText = `I'm a software engineer who specializes in JavaScript, react, and Monga DB. 
    My primary areas of expertise are web design and application development. I also work in 
    game development.`;

    useEffect(() => {
      const timer2 = setTimeout(() => {
        setIndex2(index2 + 1);
      }, 50);
    }, [index2]);

    return <p>{bioText.slice(0, index2)}</p>;
  }

  return (
    <div className="my-bio">
      <small>- - ------- ABOUT</small>
      {LoadTitleText()}
      <br />
      {LoadBioText()}
      <button>
        <span></span>GET IN TOUCH
      </button>
    </div>
  );
};

export default BioInfo;
