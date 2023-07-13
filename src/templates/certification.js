import Aviatrix from "../Pics/aviatrix.png"
import AzureAi from "../Pics/azure ai.png"
import AzureFund from "../Pics/azure fund.png"
import { motion } from "framer-motion"

function Certification() {
    return (
        <section id="certification">
            <motion.h1 className="text-center title"
                initial={{ opacity: 0, y: -40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 3 }}
            >
                Certification
            </motion.h1>
            {/* Certification */}
            <motion.div className="row p-3 m-4 bg-body-tertiary text-dark border rounded"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <div className="col-sm-4 text-center">
                    <img className="border" src={Aviatrix} style={{ width: "14rem" }} />
                </div>
                <div className="col-sm mt-4">
                    <h5>Multi-Cloud Network Associate</h5>
                    <p className="text-secondary">Aviatrix Certified Engineer</p>
                    <small><a href="https://www.credly.com/badges/8c1d035a-7326-4769-9a1b- 93824ea953e0/public_url">Credly</a></small>
                </div>
            </motion.div>
            {/* Certification */}
            <motion.div className="row p-3 m-4 bg-body-tertiary text-dark border rounded"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
            >
                <div className="col-sm-3 text-center">
                    <img className="border" src={AzureAi} style={{ width: "9rem" }} />
                </div>
                <div className="col-sm mt-4">
                    <h5>Microsoft Azure AI Fundementals</h5>
                    <p className="text-secondary">Microsoft</p>
                    <small><a href="https://www.credly.com/badges/b2026fbb-0585-4507-b66f-f54c4f6fac74/public_url">Credly</a></small>
                </div>
            </motion.div>
            {/* Certification */}
            <motion.div className="row p-3 m-4 bg-body-tertiary text-dark border rounded"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
            >
                <div className="col-sm-3 text-center">
                    <img className="border" src={AzureFund} style={{ width: "9rem" }} />
                </div>
                <div className="col-sm mt-4">
                    <h5>Microsoft Azure Fundementals</h5>
                    <p className="text-secondary">Microsoft</p>
                    <small><a href="https://www.credly.com/badges/ddcf6dbe-5b22-4257-ad68-5d1b6e7d9af6/public_url">Credly</a></small>
                </div>
            </motion.div>

        </section>
    )
}

export default Certification;