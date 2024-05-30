import "../css/education.css";
import { motion } from "framer-motion";

function Education() {
    return (
        <section id="education">
            <motion.h1 className="text-center title"
                initial={{ opacity: 0, y: -40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 3 }}
            >
                Education
            </motion.h1>
            <div className="timeline">
                {/* Container 1 */}
                <div className="timeline-container left-container">
                    <div className="timeline-dot"></div>
                    <motion.div className="p-3 bg-light text-dark border rounded position-relative"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 2 }}
                    >
                        <h2>Bachelor of Technology</h2>
                        <h4 style={{color: "#0E9E1F"}}>K L University</h4>
                        <h6>Degree in Computer Science</h6>
                        <small>2019-2024</small>
                        <p>CGPA:<span>5.6</span></p>
                    </motion.div>
                </div>
                {/* Container 2 */}
                <div className="timeline-container right-container">
                    <div className="timeline-dot-right"></div>
                    <motion.div className="p-3 bg-light text-dark border rounded position-relative"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 2, delay: 0.2 }}
                    >
                        <h2>Intermediate/12th</h2>
                        <h4 style={{color: "#0E9E1F"}}>Sri Chaitanya</h4>
                        <h6>Maths, Physics and Chemistry</h6>
                        <small>2017-2019</small>
                        <p>CGPA:<span>8.8</span></p>
                    </motion.div>
                </div>
                {/* Container 3 */}
                <div className="timeline-container left-container">
                    <div className="timeline-dot"></div>
                    <motion.div className="p-3 bg-light text-dark border rounded position-relative"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 2, delay: 0.2 }}
                    >
                        <h2>High School (10th class)</h2>
                        <h4 style={{color: "#0E9E1F"}}>Gowtham School</h4>
                        <small>2016-2017</small>
                        <p>CGPA:<span>9.8</span></p>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Education;