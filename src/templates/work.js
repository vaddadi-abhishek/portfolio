import { motion } from 'framer-motion';

function Work() {
    return (
        <section id="work">
            <motion.h1 className="text-center title"
                initial={{ opacity: 0, y: -15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 2 }}
            >
                Work Experience
            </motion.h1>
            <div className="timeline">
                {/* Container 1 */}
                <div className="timeline-container left-container">
                    <div className="timeline-dot"></div>
                    <motion.h2 className="text-decoration-underline"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 2 }}
                    >
                        12/2022 - 03/2023
                    </motion.h2>
                    <motion.div className="p-3 bg-light text-dark border rounded position-relative"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 2 }}
                    >
                        <h2>Spectral Clusetring</h2>
                        <h6 className="text-secondary">Samsung Prism</h6>
                        <p className="text-secondary lh-sm" style={{ fontSize: "12px", marginBottom: "0.5rem" }}>Samsung PRISM is a student program offering students a chance to work on real-world projects, interact with Samsung’s technical experts.</p>
                        <h6>Achievements/Tasks</h6>
                        <ul>
                            <li style={{ padding: "0" }}><p>Spectral clustering is a technique where the approach is used to identify communities of nodes in a graph based on the edges connecting them.</p></li>
                            <li style={{ padding: "0" }}><p>Developed AI/ML algorithm for clustering data points in the given graph using Python and K-means Clustering.</p></li>
                        </ul>
                    </motion.div>
                </div>
                {/* Container 2 */}
                <div className="timeline-container right-container">
                    <div className="timeline-dot-right"></div>
                    <motion.h2 className="text-decoration-underline"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 2 }}
                    >
                        10/2021 - 01/2022
                    </motion.h2>
                    <motion.div className="p-3 bg-light text-dark border rounded position-relative"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 2 }}
                    >
                        <h2>AWS Cloud Virtual Internship</h2>
                        <h6 className="text-secondary">AICTE - EduSkills Foundation</h6>
                        <p className="text-secondary lh-sm" style={{ fontSize: "12px", marginBottom: "0.5rem" }}>All India Council for Technical Education (AICTE) is a national-level Apex Advisory Body. It aims to encourage India’s development in an integrated manner</p>
                        <h6>Achievements/Tasks</h6>
                        <ul>
                            <li style={{ padding: "0" }}><p>Completed Two Certfications (AWS Cloud Foundations and AWS Cloud Architecture) as part of the Internship</p></li>
                            <li style={{ padding: "0" }}><p>Hosted Dynamic Website in AWS Cloud Platform using AWS Tools and Services as part of capstone project</p></li>
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Work;