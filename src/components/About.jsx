import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.4, 0.75)}
      className="w-full blue-pink-gradient p-[1px] rounded-[20px] shadow-md hover:shadow-xl transition-all duration-300"
    >
      <div
        options={{
          max: 40,
          scale: 1,
          speed: 400,
        }}
        className="bg-tertiary rounded-[20px] py-6 px-10 min-h-[260px] flex flex-col justify-center items-center"
      >
        <img
          src={icon}
          alt={title}
          className="w-14 h-14 object-contain mb-4"
        />

        <h3 className="text-white text-[19px] font-semibold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Who I Am</p>
        <h2 className={styles.sectionHeadText}>My Journey</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.2, 1)}
        className="mt-6 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        As a passionate frontend developer, I specialize in building interactive and responsive interfaces using React, Tailwind CSS, and modern web tools. With hands-on experience in developing real-time applications, I enjoy translating ideas into visually polished and technically sound products. Always curious and learning, I thrive in collaborative environments and love refining designs with attention to detail.
      </motion.p>

      <div className="mt-16 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
