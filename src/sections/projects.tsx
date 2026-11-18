import './projects.css'

function Projects(){

    return(
        <div className='proj'>
            <div className='sectionTitle'>What I've Built</div>
            <div className="projWrapper">

                <div className='projBox'>
                    <img className='projImg' src="gpform.png" alt="Picture of Project" />
                    <div className='projtext'>
                        <div className='projTitle'>
                            Grand Prix Form
                        </div>
                        <div className='projBody'>
                            An interactive, dynamic form connected to a Monday.Com backend. Built with React and Firebase.
                        </div>
                        <div className='techBox'>
                            <div className='techIcon'>React</div>
                            <div className='techIcon'>HTML + CSS</div>
                            <div className='techIcon'>Firebase</div>
                            <div className='techIcon'>Monday.com</div>
                        </div>
                        <div className='buttons'>
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/Joel-Wat/Capstone-26-Team-2" className="toGit"><img className='git' src="git.png" />Github <span className="arrow">↗</span></a>
                        </div>
                    </div>
                </div>



                <div className='projBox'>
                    <img className='projImg' src="portfolio.png" alt="Picture of Project" />
                    <div className='projtext'>
                        <div className='projTitle'>
                            Portfolio Website
                        </div>
                        <div className='projBody'>
                            The website you're currently on! Designed, wireframed, and built from scratch. Check out the weather app on the topnav :)
                        </div>
                        <div className='techBox'>
                            <div className='techIcon'>React</div>
                            <div className='techIcon'>HTML + CSS</div>
                            <div className='techIcon'>Firebase</div>
                            <div className='techIcon'>REST APIs</div>
                        </div>
                        <div className='buttons'>
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/Look-Polite/react-portfolio" className="toGit"><img className='git' src="git.png" />Github <span className="arrow">↗</span></a>
                        </div>
                    </div>
                </div>



            </div>
        </div>

    )

}


export default Projects