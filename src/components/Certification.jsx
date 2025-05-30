import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";


import FullstackCert from "@/assets/FullstackCert.png";
import FrontendCert from "@/assets/FrontendCert.png";
import CsharpCert from "@/assets/CsharpCert.png";
import PhpCert from "@/assets/PhpCert.png";

const certifications = [
    {
        title: "Full-Stack Engineer Certificate",
        issuer: "Codecademy",
        completed: "2025",
        imageUrl: FullstackCert,
        imageDescription: "Certificate in Fullstack software Engineering",
        certificateLink: "https://www.codecademy.com/profiles/OladimejiOladiti/certificates/5f7e644d833c070013ef47c4",
    },
    {
        title: "HTML5 & CSS3 Web Design with JavaScript",
        issuer: "IT Career Switch",
        completed: "2025",
        imageUrl: FrontendCert,
        imageDescription: "HTML5 & CSS3 Web Design with JavaScript",
        certificateLink: "https://www.linkedin.com/in/oladimeji-oladiti-017426252/details/certifications/",
    },
    {
        title: "C# Certificate",
        issuer: "Codecademy",
        completed: "2025",
        imageUrl: CsharpCert,
        imageDescription: "C# CERTIFICATE",
        certificateLink: "https://www.codecademy.com/profiles/OladimejiOladiti/certificates/65f0ff88f4fc58e0536b3b51648dff24",
    },
    {
        title: "PHP Certificate",
        issuer: "Codecademy",
        completed: "2025",
        imageUrl: PhpCert,
        imageDescription: "PHP CERTIFICATE",
        certificateLink: "https://www.codecademy.com/profiles/OladimejiOladiti/certificates/9b7bcc38d0ed49f593228763cbfd51e3",
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.5 },
    },
};

const Certifications = () =>
{
    return (
        <section id="certifications" className="section bg-secondary/30">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Certifications</h2>
                    <div className="w-20 h-1 gradient-bg mx-auto rounded-full"></div>
                    <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
                        Here are some certifications I've earned to strengthen my knowledge and validate my skills.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="project-card overflow-hidden"
                        >
                            <div className="aspect-video overflow-hidden">
                                <img
                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                    alt={cert.imageDescription}
                                    src={cert.imageUrl}
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
                                <p className="text-sm text-muted-foreground mb-1">
                                    <strong>Issuer:</strong> {cert.issuer}
                                </p>
                                <p className="text-sm text-muted-foreground mb-4">
                                    <strong>Completed:</strong> {cert.completed}
                                </p>
                                {cert.certificateLink && (
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="flex items-center gap-2"
                                        asChild
                                    >
                                        <a
                                            href={cert.certificateLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <ExternalLink className="h-4 w-4" />
                                            View Certificate
                                        </a>
                                    </Button>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Button moved outside the grid */}
                <div className="flex justify-center mt-10">
                    <Button
                        variant="outline"
                        size="lg"
                        className="border-2 hover:bg-secondary"
                        asChild
                    >
                        <a
                            href="https://www.linkedin.com/in/oladimeji-oladiti-017426252/details/certifications/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View All Certifications
                        </a>
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default Certifications;
