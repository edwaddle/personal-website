import "./Project.css";
function Project() {
  return (
    <>
      <div className="ProjectContainer">
        <div className="leftCol">
          <img src={require("./background-images/penguin.png")} />
          <img src={require("./background-images/penguin.png")} />
          <img src={require("./background-images/penguin.png")} />
          <img src={require("./background-images/penguin.png")} />
          <img src={require("./background-images/penguin.png")} />
          <img src={require("./background-images/penguin.png")} />
        </div>
        <div className="rightCol">
          <h2>Pantry-Tracker</h2>
          <ul className="Description">
            <li className="Desc">Mac and Cheese</li>
            <li className="Desc">Mac and Cheese</li>
            <li className="Desc">Mac and Cheese</li>
          </ul>
          <ul className="Contributers">
            <li className="Desc">Me</li>
          </ul>
          <div>
            <button className="Desc">Next →</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;
