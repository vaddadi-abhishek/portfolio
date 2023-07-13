import "../css/other.css"
import { motion } from "framer-motion";

function Skills() {
    return (
        <section id="skills">
            <motion.h1 className="text-center title"
                initial={{ opacity: 0, y: -40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 3 }}
            >
                Skills
            </motion.h1>
            {/* Row-1 */}
            <div className="skills-container row mt-5">
                <div className="col-sm">
                    <motion.h4 className="ps-3"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5 }}
                    >
                        Programming Languages
                    </motion.h4>
                    {/* Skill - 1 */}
                    <div className="row p-4">
                        <div className="col-4">
                            C
                        </div>
                        <div className="col">
                            <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                <motion.div
                                    className="progress-bar"
                                    style={{ width: "0%" }}
                                    whileInView={{ width: "80%" }}
                                >
                                    80%
                                </motion.div>
                            </div>
                        </div>
                    </div>
                    {/* Skill - 2 */}
                    <div className="row p-4">
                        <div className="col-4">
                            Java
                        </div>
                        <div className="col">
                            <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                <motion.div
                                    className="progress-bar"
                                    style={{ width: "0%" }}
                                    whileInView={{ width: "85%" }}
                                >
                                    85%
                                </motion.div>
                            </div>
                        </div>
                    </div>
                    {/* Skill - 3 */}
                    <div className="row p-4">
                        <div className="col-4">
                            Python
                        </div>
                        <div className="col">
                            <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                <motion.div
                                    className="progress-bar"
                                    style={{ width: "0%" }}
                                    whileInView={{ width: "75%" }}
                                >
                                    75%
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm">
                    <motion.h4 className="ps-3"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5 }}
                    >
                        Web Development
                    </motion.h4>
                    {/* Skill - 1 */}
                    <div className="row p-4">
                        <div className="col-4">
                            HTML5
                        </div>
                        <div className="col">
                            <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                <motion.div
                                    className="progress-bar"
                                    style={{ width: "0%" }}
                                    whileInView={{ width: "90%" }}
                                >
                                    90%
                                </motion.div>
                            </div>
                        </div>
                    </div>
                    {/* Skill - 2 */}
                    <div className="row p-4">
                        <div className="col-4">
                            CSS3
                        </div>
                        <div className="col">
                            <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                <motion.div
                                    className="progress-bar"
                                    style={{ width: "0%" }}
                                    whileInView={{ width: "80%" }}
                                >
                                    80%
                                </motion.div>
                            </div>
                        </div>
                    </div>
                    {/* Skill - 3 */}
                    <div className="row p-4">
                        <div className="col-4">
                            JavaScript
                        </div>
                        <div className="col">
                            <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                <motion.div
                                    className="progress-bar"
                                    style={{ width: "0%" }}
                                    whileInView={{ width: "60%" }}
                                >
                                    60%
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Row-2 */}
            <div className="skills-container row mt-4">
                <div className="col-sm">
                    <motion.h4 className="ps-3"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5 }}
                    >
                        Communication Skills
                    </motion.h4>
                    {/* Skill - 1 */}
                    <div className="row p-4">
                        <div className="col-4">
                            English
                        </div>
                        <div className="col">
                            <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                <motion.div
                                    className="progress-bar"
                                    style={{ width: "0%" }}
                                    whileInView={{ width: "95%" }}
                                >
                                    Full Professional Language
                                </motion.div>
                            </div>
                        </div>
                    </div>
                    {/* Skill - 2 */}
                    <div className="row p-4">
                        <div className="col-4">
                            Telugu
                        </div>
                        <div className="col">
                            <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                <motion.div
                                    className="progress-bar"
                                    style={{ width: "0%" }}
                                    whileInView={{ width: "90%" }}
                                >
                                    Native Language
                                </motion.div>
                            </div>
                        </div>
                    </div>
                    {/* Skill - 3 */}
                    <div className="row p-4">
                        <div className="col-4">
                            Hindi
                        </div>
                        <div className="col">
                            <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                <motion.div
                                    className="progress-bar"
                                    style={{ width: "0%" }}
                                    whileInView={{ width: "75%" }}
                                >
                                    Professional Language
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm">
                    <motion.h4 className="ps-3"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5 }}
                    >
                        Frameworks
                    </motion.h4>
                    {/* Skill - 1 */}
                    <div className="row p-4">
                        <div className="col-4">
                            ReactJs
                        </div>
                        <div className="col">
                            <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                <motion.div
                                    className="progress-bar"
                                    style={{ width: "0%" }}
                                    whileInView={{ width: "70%" }}
                                >
                                    70%
                                </motion.div>
                            </div>
                        </div>
                    </div>
                    {/* Skill - 2 */}
                    <div className="row p-4">
                        <div className="col-4">
                            Django
                        </div>
                        <div className="col">
                            <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                <motion.div
                                    className="progress-bar"
                                    style={{ width: "0%" }}
                                    whileInView={{ width: "70%" }}
                                >
                                    70%
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills;