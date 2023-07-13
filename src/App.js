import SideNav from "./templates/sidenav";
import Home from "./templates/home";
import Education from "./templates/education";
import Skills from "./templates/skills";
import { Fragment } from "react";
import "./css/app.css"
import Certification from "./templates/certification";
import Work from "./templates/work";
import Projects from "./templates/project";

function App() {
  return (
    <Fragment>
      <SideNav/>
      <div className="app-content bg-dark text-light" data-bs-spy="scroll" data-bs-target="#NavLinks" tabindex="0">
        <Home />
        <Education />
        <Skills />
        <Certification />
        <Work />
        <Projects />
      </div>
    </Fragment>
  );
}

export default App;
