import './App.css';
import {useRef} from 'react';


function App() {
  const homeRef = useRef();
  const aboutMeRef = useRef();
  const projectsRef = useRef();
  const clubRef = useRef();
  
  return (
    <div className="App">
      <div className="NavContainer">
        <div className="triangle-topright"></div>
        <div className="Nav1">
          <ul className="Hole">
            <li>
              <a href="#projects" onClick={() => {
                  homeRef.current.scrollIntoView({ behavior: 'smooth' });
                }}>Home</a>
            </li>
            <li>
              <a href="#projects" onClick={() => {
                aboutMeRef.current.scrollIntoView({ behavior: 'smooth' });
              }}>About Me</a>
            </li>
            <li>
              <a href="#projects" onClick={() => {
                projectsRef.current.scrollIntoView({ behavior: 'smooth' });
              }}>Projects</a>
            </li>
            <li>
              <a href="#projects" onClick={() => {
                clubRef.current.scrollIntoView({ behavior: 'smooth' });
              }}>Clubs</a>
            </li>
          </ul>
          
        
          </div>
          
        <div className="triangle-topleft"></div>
      </div>
      
      
      <section ref={homeRef} className="Home">
        <div className="innerSection">
          <div className="introBox">
            <h1>Hey!<br/> I'm Edwin Yue</h1>
            <div className="getStartedBox">
              <button onClick={() => {
              aboutMeRef.current.scrollIntoView({ behavior: 'smooth' });
            }} className="getStarted">Get Started!</button>
              <img src={require('./background-images/penguin.png')} />
            </div>
          </div>
        </div>
      </section>
      <section className="AboutMe">
        <div ref={aboutMeRef} className="innerSection">
        <h1 >About Me</h1>
        <div className="AboutMeSection">
          <img className="pfp" src={require('./background-images/PfpInternship 1.png')} />
          <div className="AboutMeTextField">
            <h2>Hobbies</h2>
            <p>I like Mac and Cheese <br/>
            I like Penguins <br/>
            I like Coding <br/>
            YAYYYY
            </p>
            <h2>Interests</h2>
            <p>I like Mac and Cheese <br/>
            I like Penguins <br/>
            I like Coding <br/>
            YAYYYY
            </p>
          </div>
          </div>
          

          
        </div>
      </section>
      <section  className="Projects">
        <div ref={projectsRef} className="innerSection">I' projects</div>
      </section>
      <section className="Clubs">
        <div ref={clubRef} className="innerSection">I' CLubs</div>
      </section>
      <footer></footer>
      
    </div>
  );
}

export default App;
