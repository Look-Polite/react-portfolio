import './skills.css'

function Skills(){
    return (
        <div>        
            <div className='sectionTitle'>Skills</div> 
            <div className='skillTitle'>Programming</div>
            <div className='skillWrapper'>
                <div className='skillBox'>
                    Java
                </div>
                <div className='skillBox'>
                    Python
                </div>
                <div className='skillBox'>
                    JavaScript
                </div>

            </div>
            <div className='skillTitle'>Web Development</div>
            <div className='skillWrapper'>
                <div className='skillBox'>
                    HTML
                </div>
                <div className='skillBox'>
                    CSS
                </div>
                <div className='skillBox'>
                    React
                </div>
                <div className='skillBox'>
                    Vite
                </div>
                <div className='skillBox'>
                    TypeScript
                </div>
                <div className='skillBox'>
                    Firebase
                </div>
            </div>
            <div className='skillTitle'>Databases</div>
            <div className='skillWrapper'>
                <div className='skillBox'>
                    SQL
                </div>
                <div className='skillBox'>
                    MongoDB
                </div>
            </div>
            <div className='skillTitle'>CyberSecurity</div>
            <div className='skillWrapper'>
                <div className='skillBox'>
                    Ethical Hacking
                </div>
                <div className='skillBox'>
                    Kali Linux
                </div>
                <div className='skillBox'>
                    Wireshark
                </div>
            </div>
        </div>
    )
}

export default Skills