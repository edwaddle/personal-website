import "./ProjectCard.css";
const ProjectCard = (props) => {
  let projectDict = props.projectDict;
  const res = [];

  //convert to 2d array
  for (let i = 0; i < projectDict.length; i += 3) {
    if (i + 3 > projectDict.length) {
      res.push(projectDict.slice(i, projectDict.length));
    } else {
      res.push(projectDict.slice(i, i + 3));
    }
  }
  res.map((element) =>
    element.map((e) => {
      console.log(e.image);
    })
  );
  return (
    <>
      {res.map((element) => {
        return (
          <div className="projectGrid" key={element.index}>
            {element.map((e) => {
              return (
                <div className="projectCard" key={e.index}>
                  <img
                    className="projectImage"
                    src={"./project-images/RCC.png"}
                    alt="project image"
                  ></img>
                  <h2>{e.name}</h2>
                  <h3>{e.desc}</h3>
                </div>
              );
            })}
          </div>
        );
      })}
    </>
  );
};

export default ProjectCard;
