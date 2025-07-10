import "./App.css";
import { useRef } from "react";
import Project from "./Project.js";
import ProjectCard from "./ProjectCard.js";
import Club from "./Club.js";

function App() {
  const homeRef = useRef();
  const aboutMeRef = useRef();
  const projectsRef = useRef();
  const clubRef = useRef();

  /*project list */
  function project(name, desc, image) {
    this.name = name;
    this.desc = String(desc);
    this.image = image;
    this.getSummary = function () {
      return `${this.name} by ${this.desc}, published in ${this.image}.`;
    };
  }

  const proj1 = new project(
    "The Hobbit",
    "J.R.R. Tolkien ADDING A LONG AHH DESCRIPTION TO CTEST WHAT HAPPENS IF U DO IT HEHEHEH. honk honk hit the klaxon!",
    "./background-images/penguin.png"
  );
  const proj2 = new project(
    "proj2",
    "J.R.R. Tolkien",
    "./background-images/penguin.png"
  );
  const proj3 = new project(
    "prj3",
    "J.R.R. Tolkien",
    "./background-images/penguin.png"
  );
  const proj4 = new project(
    "proj4",
    "J.R.R. Tolkien",
    "./background-images/penguin.png"
  );
  let projectDict = [proj1, proj2, proj3, proj4, proj4, proj4];

  function club(title, role, desc, color, size, image) {
    this.title = title;
    this.role = role;
    this.desc = String(desc); //remember to manually warp the text with \n
    this.color = color;
    this.size = size;
    this.image = image;
    this.getSummary = function () {
      return `${this.title} by ${this.desc}, published in ${this.image}.`;
    };
  }

  const RCC = new club(
    "RCC",
    "Workshop Lead",
    "makin workshops\nmakin workshops\nhi",
    "#DE517C",
    32,
    "./club-images/RCC.png"
  );
  let clubDict = [RCC, RCC, RCC, RCC];

  return (
    <div className="App">
      <div className="NavContainer">
        <div className="triangle-topright"></div>
        <div className="Nav1">
          <ul className="Hole">
            <li>
              <a
                href="#projects"
                onClick={() => {
                  homeRef.current.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#projects"
                onClick={() => {
                  aboutMeRef.current.scrollIntoView({ behavior: "smooth" });
                }}
              >
                About Me
              </a>
            </li>
            <li>
              <a
                href="#projects"
                onClick={() => {
                  projectsRef.current.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#projects"
                onClick={() => {
                  clubRef.current.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Clubs
              </a>
            </li>
          </ul>
        </div>

        <div className="triangle-topleft"></div>
      </div>

      <section ref={homeRef} className="Home">
        <div className="innerSection">
          <div className="introBox">
            <h1>
              Hey!
              <br /> I'm Edwin Yue
            </h1>
            <div className="getStartedBox">
              <button
                onClick={() => {
                  aboutMeRef.current.scrollIntoView({ behavior: "smooth" });
                }}
                className="getStarted"
              >
                Get Started!
              </button>
              <img src={require("./background-images/penguin.png")} />
            </div>
          </div>
        </div>
      </section>
      <section className="AboutMe">
        <div ref={aboutMeRef} className="innerSection">
          <h1>About Me</h1>
          <div className="AboutMeSection">
            <img
              className="pfp"
              src={require("./background-images/PfpInternship 1.png")}
            />
            <div className="AboutMeTextField">
              <h2>Hobbies</h2>
              <p>
                I like Mac and Cheese <br />
                I like Penguins <br />
                I like Coding <br />
                YAYYYY
              </p>
              <h2>Interests</h2>
              <p>
                I like Mac and Cheese <br />
                I like Penguins <br />
                I like Coding <br />
                YAYYYY
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="Projects">
        <div ref={projectsRef} className="innerSection">
          <h1>I' Projects</h1>
          <ProjectCard projectDict={projectDict} />
        </div>
      </section>
      <section className="Clubs">
        <div ref={clubRef} className="innerSection">
          <Club clubDict={clubDict} />
        </div>
      </section>
      <footer></footer>
    </div>
  );
}

export default App;
