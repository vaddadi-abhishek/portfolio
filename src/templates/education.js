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
                        <h2>K L University</h2>
                        <h6>Bachelor of Technology (CSE)</h6>
                        <small>2019-2023</small>
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
                        <h2>Sri Chaitanya</h2>
                        <h6>Intermediate/12th (MPC)</h6>
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
                        <h2>Gowtham School</h2>
                        <h6>10th Class</h6>
                        <small>2016-2017</small>
                        <p>CGPA:<span>9.8</span></p>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Education;