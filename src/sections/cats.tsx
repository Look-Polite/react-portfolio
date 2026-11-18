import './cats.css'
import { useState } from "react";



function Cats(){
    const images = [
        { src: "cats1.png", alt: "the cats", caption:"The cats!" },
        { src: "cats2.png", alt: "crumpet on a chair", caption:"Crumpet on a Chair" },
        { src: "cats3.png", alt: "crumpet in a box", caption:"Crumpet in a Box" },
        { src: "cats4.png", alt: "cadbury", caption:"Cadbury :)" },
        { src: "cats5.png", alt: "the cats on a table", caption:"CnC together on a table" },
    ];

    //handling for the image carousel
    const [index, setIndex] = useState(0);
    const count = images.length;

    //makes the carasouel able to loop - mod makes it loop to max when below 0
    function wrap(i: number){ //yeah he's helpin on it :)
        return((i + count) % count);
    }

    function prev(){
        setIndex(function(i) {
            return (wrap(i-1));
        });
    }

    function next(){
        setIndex(function(i) {
            return (wrap(i+1));
        })
    }


    const left = images[wrap(index - 1)];
    const current = images[index];
    const right = images[wrap(index + 1)];
    
    return (
        <div className='cats'>
            <div className='sectionTitle'>Meet My Cats</div>
            <div className='catBox'>
                <button
                    className='left side'
                    type="button"
                    onClick={prev}
                    aria-label="Previous image"
                >
                    <img src={left.src} alt="" className="sideImg" />
                </button>

                <div className="main">
                    <img src={current.src} alt={current.alt} className='mainImg' />
                    <p key={current.caption} className="caption">{current.caption}</p>
                </div>


                <button
                    type="button"
                    onClick={next}
                    aria-label="Next image"
                    className='right side'
                >
                    <img src={right.src} alt="" className='sideImg' />
                </button>

            </div>
        </div>

    )
}

export default Cats