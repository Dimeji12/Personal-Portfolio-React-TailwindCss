import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

import worldGazetteerImg from "@/assets/worldGazetteerImg.png";
import taskManagerImg from "@/assets/taskManagerImg.png";
// import fitnessTrackerImg from "@/assets/fitness-tracker.png";
// import portfolioImg from "@/assets/portfolio.png";

const projects = [
  {
    title: "World Gazetteer",
    description:
      "An interactive global directory web application that allows users to search and explore countries, cities, and population data using RESTful APIs. Built with a clean UI, it integrates external data sources to provide dynamic content updates.",
    tags: ["HTML", "CSS", "JavaScript", "PHP", "REST API"],
    imageUrl: worldGazetteerImg,
    imageDescription:
      "Interactive directory interface showing country and population data with search filters",
    demoLink: "https://oladimejioladiti.co.uk/world-gazetteer/",
    codeLink: "https://github.com/Dimeji12/world-gazetteer",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, task assignment, and progress tracking.",
    tags: ["Vue.js", "Firebase", "Tailwind CSS", "JavaScript"],
    imageUrl: taskManagerImg,
    imageDescription: "Task management application with kanban board interface",
    codeLink: "#",
  }

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

const Projects = () => {
  return (
    <section id="projects" className="section bg-secondary/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="w-20 h-1 gradient-bg mx-auto rounded-full"></div>
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects. Each one represents a unique
            challenge and showcases different aspects of my skills and expertise.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="project-card overflow-hidden"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  alt={project.imageDescription}
                  src={project.imageUrl}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-2"
                    asChild
                  >
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-2"
                    asChild
                  >
                    <a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4" />
                      View Code
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mt-16"
        >
          <Button
            variant="outline"
            size="lg"
            className="border-2 hover:bg-secondary"
            asChild
          >
            <a href="https://github.com/Dimeji12" target="_blank" rel="noopener noreferrer">
              View All Projects on GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
