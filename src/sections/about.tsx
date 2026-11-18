import './about.css'
function About(){
    return (
        <div>         
            <div className='sectionTitle'>About Me</div>
            <div className='aboutWrapper'>
                <div className='image'><img src="home.jpg" alt="Photo of me" /></div>
                <div className='aboutContent'>
                    <p>
                    Hey there, I'm Tian, an IT student with a passion for solving interesting problems.
                    Based in Melbourne, I’m always eager to learn more and am currently seeking internship 
                    opportunities to gain hands-on experience and grow my skills. I enjoy diving into coding projects, experimenting with 
                    new technologies, and figuring out how different systems work.
                    </p>
                    <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                    <button className="Contact">Resume <span className="arrow">↗</span></button>
                    </a>
                    {/* <button className="Contact" href="/resume.pdf" >Resume <span className="arrow">↗</span></button> */}
                </div>
            </div>
        </div>

    )
}

export default About