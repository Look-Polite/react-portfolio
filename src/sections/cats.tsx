import './cats.css'
import { useState } from "react";



function Cats(){
    const images = [
        { src: "placeholder.png", alt: "p1", caption:"p1" },
        { src: "placeholder2.png", alt: "p2", caption:"p2" },
        { src: "placeholder3.png", alt: "p3", caption:"p3" },
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