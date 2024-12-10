import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import projImg1 from "../assets/project-1.jpeg";
import projImg2 from "../assets/project-2.jpeg";
import projImg3 from "../assets/project-3.jpeg";
import projImg4 from "../assets/project-4.jpeg";
import projImg5 from "../assets/project-5.jpeg";
import projImg6 from "../assets/project-6.jpeg";
import projImg7 from "../assets/project-7.jpeg";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, description, imgUrl, liveDemo, url }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-3">{description}</p>
        {liveDemo && (
          <a
            href={liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 text-blue-500 underline"
          >
            Live Demo
          </a>
        )}
        {url && (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 text-blue-500 underline"
          >
            GitHub
          </a>
        )}
      </div>
      <img src={imgUrl} alt={title} />
    </motion.div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
      url: "https://github.com/Sibabalo97",
      liveDemo: "https://sibabalo-demo.com/startup",
    },
    {
      title: "Project Two",
      description: "UI/UX Design",
      imgUrl: projImg2,
      url: "https://github.com/Sibabalo97/project-two",
      liveDemo: "https://sibabalo-demo.com/project-two",
    },
    {
      title: "Project Three",
      description: "E-commerce Platform",
      imgUrl: projImg3,
      url: "https://github.com/Sibabalo97/project-three",
    },
    {
      title: "Portfolio Website",
      description: "Personal Portfolio",
      imgUrl: projImg4,
      url: "https://github.com/Sibabalo97/portfolio",
      liveDemo: "https://sibabalo-demo.com/portfolio",
    },
    {
      title: "Portfolio Website",
      description: "Personal Portfolio",
      imgUrl: projImg5,
      url: "https://github.com/Sibabalo97/portfolio",
      liveDemo: "https://sibabalo-demo.com/portfolio",
    },
    {
      title: "Portfolio Website",
      description: "Personal Portfolio",
      imgUrl: projImg6,
      url: "https://github.com/Sibabalo97/portfolio",
      liveDemo: "https://sibabalo-demo.com/portfolio",
    },
    {
      title: "Portfolio Website",
      description: "Personal Portfolio",
      imgUrl: projImg7,
      url: "https://github.com/Sibabalo97/portfolio",
      liveDemo: "https://sibabalo-demo.com/portfolio",
    },
  ];

  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
          Aliquam, amet dui feugiat facilisi dui. Aliquam aliquet integer ut
          fames odio in at. At magna ornare dictum lectus. Purus massa morbi
          purus nec eget eleifend ut elit.
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3 gap-5"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {projects.map((project, index) => (
            <Project
              key={index}
              title={project.title}
              description={project.description}
              imgUrl={project.imgUrl}
              liveDemo={project.liveDemo}
              url={project.url}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
