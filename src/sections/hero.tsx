import './hero.css'
import { useEffect, useState } from "react";


const WORDS = ["developer", "student", "creator"];
const TYPE_SPEED = 70;
const DELETE_SPEED = 50;
const PAUSE_FULL = 2000;
const PAUSE_EMPTY = 500;

function Hero(){
    const [text, setText] = useState("");
    const [wordIndex, setWordIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const word = WORDS[wordIndex];
        let delay;
        let step;

    if (!isDeleting) {
      if (text === word) {
        delay = PAUSE_FULL;
        step = () => setIsDeleting(true);
      } else {
        delay = TYPE_SPEED;
        step = () => setText(word.slice(0, text.length + 1));
      }
    } else if (text === "") {
      delay = PAUSE_EMPTY;
      step = () => {
        setIsDeleting(false);
        setWordIndex((i) => (i + 1) % WORDS.length);
      };
    } else {
      delay = DELETE_SPEED;
      step = () => setText(word.slice(0, text.length - 1));
    }

    const id = setTimeout(step, delay);
    return () => clearTimeout(id);
  }, [text, isDeleting, wordIndex]);

  
    
    return (
    <div className="bg">
      <div className="spotlight"></div>
      <div className="center-line"></div>
      <div className="wrapper">
        <div className="welcomeText">
            I'm <span className="name">Tian,</span>
            <br />
            a <span className="name">{text}</span>
            <span className="cursor">|</span>
        </div>
        <div className="buttonHolder">
            <a href="#projects"> <button className="Projects">Projects</button></a>
            <a href="#contact"> <button className="Contact">Contact Me →</button></a>
        </div>
      </div>
    </div>
    )
}



export default Hero