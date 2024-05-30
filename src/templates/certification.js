import Aviatrix from "../Pics/aviatrix.png"
import AWSCloudFoundation from "../Pics/aws-cloud-foundations.png"
import AWSCloudArchitecture from "../Pics/aws-cloud-architecture.png"
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
                    <img className="border" src={Aviatrix} alt="aviatrix" style={{ width: "14rem" }} />
                </div>
                <div className="col-sm mt-4">
                    <h5>Multi-Cloud Network Associate</h5>
                    <p className="text-secondary">Aviatrix Certified Engineer</p>
                    <small><a href="https://www.credly.com/badges/8c1d035a-7326-4769-9a1b-93824ea953e0/public_url">
                    https://www.credly.com/badges/8c1d035a-7326-4769-9a1b-93824ea953e0/public_url
                    </a></small>
                </div>
            </motion.div>
            {/* Certification */}
            <motion.div className="row p-3 m-4 bg-body-tertiary text-dark border rounded"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
            >
                <div className="col-sm-3 text-center">
                    <img className="border" src={AWSCloudFoundation} alt="AzureAI" style={{ width: "9rem" }} />
                </div>
                <div className="col-sm mt-4">
                    <h5>AWS Academy Cloud Foundations</h5>
                    <p className="text-secondary">AWS Academy</p>
                    <small><a href="https://www.credly.com/badges/0fd55cde-b5a0-49f1-87a0-c1c977bee207/public_url">
                    https://www.credly.com/badges/0fd55cde-b5a0-49f1-87a0-c1c977bee207/public_url
                    </a></small>
                </div>
            </motion.div>
            {/* Certification */}
            <motion.div className="row p-3 m-4 bg-body-tertiary text-dark border rounded"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
            >
                <div className="col-sm-3 text-center">
                    <img className="border" src={AWSCloudArchitecture} alt="AzureFundemental" style={{ width: "9rem" }} />
                </div>
                <div className="col-sm mt-4">
                    <h5>AWS Academy Cloud Architecting</h5>
                    <p className="text-secondary">AWS Academy</p>
                    <small><a href="https://www.credly.com/badges/d12129ef-da47-45df-a5d2-e53bd0f34b40/public_url">
                    https://www.credly.com/badges/d12129ef-da47-45df-a5d2-e53bd0f34b40/public_url
                    </a></small>
                </div>
            </motion.div>

        </section>
    )
}

export default Certification;