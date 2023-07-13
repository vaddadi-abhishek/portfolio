import { useState } from "react";
import { motion } from 'framer-motion';

function Projects() {
    const [projects, setProjects] = useState({
        project1: true,
        project2: false,
    });

    const toggleCollapse = (project) => {
        setProjects({
            ...projects,
            [project]: !projects[project],
        });
    };

    return (
        <section id="projects">
            <motion.h1 className="text-center title"
                initial={{ opacity: 0, y: -15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                Projects
            </motion.h1>
            <motion.div className="bg-light text-dark"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
            >
                {/* Project - 1 */}
                <div className="p-3">
                    <div className="d-flex align-items-center" type="button" data-bs-toggle="collapse" data-bs-target="#collapseProject1" aria-expanded="false" aria-controls="collapseExample"
                        onClick={() => toggleCollapse('project1')}>
                        <div>
                            <h2>Food Ordering System</h2>
                            <p className="text-secondary" style={{ marginBottom: "0.5rem" }}>01/2020 - 05/2020</p>
                        </div>
                        <i className={`ms-auto fa-solid ${projects.project1 ? 'fa-eye' : 'fa-eye-slash'}`}></i>
                    </div>
                    <div className="collapse show" id="collapseProject1">
                        <div className="card card-body">
                            <p>
                                Developed a client-server application for the food ordering system
                                using Django framework.
                            </p>
                            <h5 className="text-decoration-underline">Tools Used</h5>
                            <p>FrontEnd - HTML5, CSS3, Bootstrap, Javascript</p>
                            <p>Backend - MySQL DB</p>
                            <p>Framework - Django framework</p>
                        </div>
                    </div>
                </div>
                {/* Project - 2 */}
                <div className="p-3">
                    <div className="d-flex align-items-center" type="button" data-bs-toggle="collapse" data-bs-target="#collapseProject2" aria-expanded="false" aria-controls="collapseExample"
                        onClick={() => toggleCollapse('project2')}>
                        <div>
                            <h2>Online Art Gallery</h2>
                            <p className="text-secondary" style={{ marginBottom: "0.5rem" }}>08/2021 - 01/2022</p>
                        </div>
                        <i className={`ms-auto fa-solid ${projects.project2 ? 'fa-eye' : 'fa-eye-slash'}`}></i>
                    </div>
                    <div className="collapse" id="collapseProject2">
                        <div className="card card-body">
                            <p>
                                Developed the code to provide interface for the artists to showcase their art portfolio.
                            </p>
                            <h5 className="text-decoration-underline">Tools Used</h5>
                            <p>FrontEnd - HTML5, CSS3, Bootstrap, Javascript</p>
                            <p>Backend - Oracle DB</p>
                            <p>Framework - Java SpringBoot</p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}

export default Projects;