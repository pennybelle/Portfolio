'use client'
import { useRef } from 'react';
import './globals.css';
// import logo from '/public/images/ChiStudios.png';
// import topWave from '/public/images/topWave.png';
// import bottomWave from '/public/images/bottomWave.png';
// import flatTopWave from '/public/images/flatTopWave.png';
import Window from './components/Window.jsx';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faGithub, faLinkedinIn, faJs, faReact, faHtml5, faCss3Alt, faFigma, faNode, faNpm, faPython, faDocker, faGit } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faHouse, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

// Add icons to library
library.add(fab, faGithub, faLinkedinIn, faJs, faReact, faHtml5, faCss3Alt, faFigma, faNode, faNpm, faPython, faDocker, faGit, faDatabase, faHouse, faPhone, faEnvelope);

function App() {
  const containerRef = useRef(null);

  return (
    <div className='grid'>
      <div className='navbar snap'>
        <img src='/images/ChiStudios.png' className='navTitle'/>
        <div className='navBtns'>
          <a href='#contact'>Home</a>
          <a href='#projects'>Projects</a>
          <a href='#about'>About</a>
        </div>
        <div className='socialBtns'>
          <a href='https://github.com/SpookyCthulhu' target='_blank'>
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href='https://www.linkedin.com/in/michelle-ferris-8790271a6/' target='_blank'>
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </div>
      </div>
      <div className='seperatorLG'></div>
      <div className='snip'>
        <div className='contact snap' id='contact'>
          <div className='landing'>
            <img src='/images/topWave.png' className='wave topW'/>
            <img src='/images/bottomWave.png' className='wave bottomW'/>
            <div className='padding'></div>
            <h1 className='landingText name'>Michelle</h1>
            <h1 className='landingText name lastName'>Ferris</h1>
            <h1 className='landingText jobDesc'>Fullstack Developer</h1>
          </div>
        </div>
      </div>
      
      <div className='projects snap page' id='projects'>
        <img src='/images/flatTopWave.png' className='flatTopWave' />
            <Window style='main abs'>
              <div className='titleContent'>
                <div>
                  <h1 className='titleCardTitle'>Application Title</h1>
                  <p>TBD</p>
                </div>
              </div>
            </Window>
            <Window style='mini abs'>
              <div className='titleContent'>
                <div>
                  <h1 className='titleCardTitle'>Application Description</h1>
                  <p>Will be updated as current projects are brought online</p>
                </div>
              </div>
            </Window>
      </div>

      <div className='seperator'></div>
      <img src='/images/topWave.png' className='waveSeperator' />

      <div className='aboutMe snap' id='about'>
        <h1 className='aboutTitle'>About Me</h1>
        <div className='skills'>
          <h2>Attributes</h2>
          <p>Imaginative designer <br/>Computer Scientist <br/>Resourceful problem solver</p>
          <h2>Tech Stack</h2>
          <p>Frontend</p>
          <div className='techstack'>
            <div className="icon-container">
              <FontAwesomeIcon icon={faJs} />
              <p className="tooltip-text">Javascript</p>
            </div>
            <div className="icon-container">
              <FontAwesomeIcon icon={faReact} />
              <p className="tooltip-text">React</p>
            </div>
            <div className="icon-container">
              <FontAwesomeIcon icon={faHtml5} />
              <p className="tooltip-text">HTML5</p>
            </div>
            <div className="icon-container">
              <FontAwesomeIcon icon={faCss3Alt} />
              <p className="tooltip-text">CSS3</p>
            </div>
            <div className="icon-container">
              <FontAwesomeIcon icon={faFigma} />
              <p className="tooltip-text">Figma</p>
            </div>
          </div>
          <p>Backend</p>
          <div className='techstack'>
            <div className="icon-container">
              <FontAwesomeIcon icon={faDatabase} />
              <p className="tooltip-text">MySQL</p>
            </div>
            <div className="icon-container">
              <FontAwesomeIcon icon={faNode} />
              <p className="tooltip-text">Node.js</p>
            </div>
            <div className="icon-container">
              <FontAwesomeIcon icon={faNpm} />
              <p className="tooltip-text">NPM</p>
            </div>
          </div>
          <p>Scripting</p>
          <div className='techstack'>
            <div className="icon-container">
              <FontAwesomeIcon icon={faPython} />
              <p className="tooltip-text">Python</p>
            </div>
            <div className="icon-container">
              <FontAwesomeIcon icon={faJs} />
              <p className="tooltip-text">Javascript</p>
            </div>
          </div>
          <p>Hosting</p>
          <div className='techstack'>
            <div className="icon-container">
              <FontAwesomeIcon icon={faDocker} />
              <p className="tooltip-text">Docker</p>
            </div>
            <div className="icon-container">
              <FontAwesomeIcon icon={faGit} />
              <p className="tooltip-text">Git</p>
            </div>
            <div className="icon-container">
              <FontAwesomeIcon icon={faGithub} />
              <p className="tooltip-text">Github</p>
            </div>
          </div>
        </div>
        <div className='passion'>
          <h2>My Passion</h2>
          <p>I have been building web applications for over a decade. <br/>It has always been a creative outlet for me. <br/>Simulatenously demanding logic and reason, as well as vision and inspriation. <br/> This discipline comes naturally to me, like an artist to a paintbrush. I love to create<br/></p>
        </div>
         <div className='education'>
          <h2>Education</h2>
          <p>University of Maine<br/>2019-2023<br/>B.S. Computer Science<br/>Deans list Fall 2020</p>
        </div>
        <div className='relevant'>
            <h2>Relevant Coursework</h2>
            <p>Cloud Computing<br/>Cyber Security<br/>Advanced Data Structures<br/><br/></p>
        </div>
        <div className='group'>
          <p>Gained experience with Scrum, DevOps, and Kanban through multiple semester-long group projects.</p>
        </div>

        <div className='bottomAbout'>
          <div className='contactBtns'>
            <div>
              <FontAwesomeIcon icon={faHouse} />
              <p>Gardiner, ME, USA<br/>04359</p>
            </div>
            <div>
              <FontAwesomeIcon icon={faPhone} />
              <p>207-427-1574</p>
            </div>
            <div>
              <FontAwesomeIcon icon={faEnvelope} />
              <p>ferrismichelled<br/>@gmail.com</p>
            </div>
          </div>
        </div>
        <div className='about'>
        </div>
      </div>

    </div>
  );
}

export default App;