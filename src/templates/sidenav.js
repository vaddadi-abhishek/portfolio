import "../css/sidenav.css"
import { motion } from "framer-motion";

function SideNav() {
  return (
    <nav className="navbar navbar-expand-lg">
      <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbarOffcanvasLg" aria-controls="navbarOffcanvasLg" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="offcanvas" tabIndex="-1" id="navbarOffcanvasLg" aria-labelledby="navbarOffcanvasLgLabel">
        <div className="sidenav bg-light">
          <div className="navbar-toggler border-0 p-3">
            <button className="btn btn-danger" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbarOffcanvasLg" aria-controls="navbarOffcanvasLg" aria-label="Toggle navigation">
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
          <ul id="NavLinks" className="navbar-nav d-flex flex-column align-items-center">
            <motion.li className="nav-item"
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              transition={{ type: 'spring' }}
            >
              <a className="nav-link" aria-current="page" href="#education">
                Education
              </a>
            </motion.li>
            <motion.li className="nav-item"
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              transition={{ type: 'spring', delay: 0.2 }}
            >
              <a className="nav-link" href="#skills">
                Skills
              </a>
            </motion.li>
            <motion.li className="nav-item"
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              transition={{ type: 'spring', delay: 0.3 }}
            >
              <a className="nav-link" href="#certification">
                Certifications
              </a>
            </motion.li>
            <motion.li className="nav-item"
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              transition={{ type: 'spring', delay: 0.4 }}
            >
              <a className="nav-link" href="#work">
                Work Experience
              </a>
            </motion.li>
            <motion.li className="nav-item"
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              transition={{ type: 'spring', delay: 0.5 }}
            >
              <a className="nav-link" href="#projects">
                Projects
              </a>
            </motion.li>
            <motion.li className="nav-item"
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              transition={{ type: 'spring', delay: 0.5 }}
            >
              <a className="nav-link" target="_blank" href="https://drive.google.com/file/d/13YiefhNsLOFVvziGgEkY8LOIt_BLpYIH/view?usp=sharing">
                <i class="fa-solid fa-download"></i>
                &nbsp;
                Resume
              </a>
            </motion.li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default SideNav;
