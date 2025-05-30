import React from "react";
import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import myPhoto from "@/assets/myPhoto.jpg";

const About = () =>
{
  return (
    <section id="about" className="section bg-secondary/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 gradient-bg mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 blur opacity-70"></div>
              <Avatar className="w-64 h-64 border-4 border-background relative">
                <AvatarImage src={myPhoto} alt="Oladimeji Oladiti" />
                <AvatarFallback className="text-4xl bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                  OO
                </AvatarFallback>
              </Avatar>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3 className="text-2xl font-bold mb-4">
              Creative Software Engineer & Designer
            </h3>
            <p className="text-muted-foreground mb-6">
              Software developer with a Master’s degree in Software Engineering and practical experience delivering functional, visually engaging websites and applications.
              What began as a curiosity about how the internet works has evolved into a results-driven career focused on building clean, efficient, and reliable solutions.
            </p>
            <p className="text-muted-foreground mb-6">
              I specialize in creating responsive, user-focused interfaces that enhance usability and performance.
              With a strong foundation in modern development practices and a collaborative mindset, I aim to deliver scalable, maintainable solutions that solve real-world business challenges and exceed client expectations.
            </p>



            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <p className="font-medium">Name:</p>
                <p className="text-muted-foreground">Oladimeji Oladiti</p>
              </div>
              <div>
                <p className="font-medium">Email:</p>
                <p className="text-muted-foreground">dimejioladiti@gmail.com</p>
              </div>
              <div>
                <p className="font-medium">Location:</p>
                <p className="text-muted-foreground">United Kingdom</p>
              </div>
              <div>
                <p className="font-medium">Availability:</p>
                <p className="text-muted-foreground">Freelance & Full-time Role</p>
              </div>
            </div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <a
                href="/Oladimeji_Oladiti_Resume.pdf"
                className="inline-block gradient-bg text-white font-medium px-6 py-3 rounded-lg"
                download
              >
                Download Resume
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
