import SideNav from "./templates/sidenav";
import Home from "./templates/home";
import Education from "./templates/education";
import Skills from "./templates/skills";
import { Fragment } from "react";
import './app.css';
import Certification from "./templates/certification";
import Work from "./templates/work";
import Projects from "./templates/project";

function App() {
  return (
    // <Fragment>
    //   <SideNav/>
    //   <div className="app-content bg-dark text-light" data-bs-spy="scroll" data-bs-target="#NavLinks" tabindex="0">
    //     <Home />
    //     <Education />
    //     <Skills />
    //     <Work />
    //     <Projects />
    //     <Certification />
    //   </div>
    // </Fragment>

    <div className="row text-center">
      <div className="col-md-3">
        <SideNav />
      </div>
      <div className="col-md-9">
        <div className="app-content bg-dark text-light" data-bs-spy="scroll" data-bs-target="#NavLinks" tabindex="0">
          <Home />
          <Education />
          <Skills />
          <Work />
          <Projects />
          <Certification />
        </div>
      </div>
    </div>
  );
}

export default App;
