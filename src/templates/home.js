import Abhi from '../Pics/Abhi.png'
import "../css/home.css"
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { motion } from 'framer-motion';

function Home() {

    const [intro] = useTypewriter({
        words: ['Abhishek', 'a Developer'],
        loop: {},
        typeSpeed: 120,
        deleteSpeed: 80
    })

    return (
        <section id='home' className="text-light d-flex align-items-center">
            <div className="d-flex flex-column align-items-center home-content">
                <motion.div className='intro p-2'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h1>Hi! I'm {intro}
                        <span style={{ color: '#0E9E1F' }}>
                            <Cursor cursorStyle='|' />
                        </span>
                    </h1>
                </motion.div>
                <motion.div className="about-me p-5"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <p className="lh-lg fs-5">
                        Passionate and highly skilled fresher with strong  strong foundation in Data Structures and
                        exceptional problem-solving abilities. Proficient in C, Java, Python. Skilled in web development
                        technologies including HTML, CSS, and JavaScript. Intermediate proficiency in frameworks like Django
                        and ReactJs. Committed to continuous learning and contributing to dynamic projects.
                    </p>
                </motion.div>
                <motion.ul className="d-flex social-links"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1, duration: 2 }}
                >
                    <li className='social-link'>
                        <a href="https://www.linkedin.com/in/vaddadi-abhishek" target='_blank' title='Linkedin'><i className="fa-brands fa-linkedin"></i></a>
                    </li>
                    <li className='social-link'>
                        <a href="https://github.com/vaddadi-abhishek" target='_blank' title='Github'><i className="fa-brands fa-square-github"></i></a>
                    </li>
                </motion.ul>
            </div>
            <motion.div className="float-end"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 2 }}
            >
                <img className="border-bottom my-img" src={Abhi} alt="My Image" />
            </motion.div>
        </section >
    )
}

export default Home;