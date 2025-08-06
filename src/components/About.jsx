import React from 'react';
import {Tilt} from "react-tilt";
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services, socials } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full" >
      <motion.div 
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'  
      > 
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title} 
          className='w-16 h-16 object-contain' />
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>

        </div>
      </motion.div>
    </Tilt>
  )
}

const SocialCard = ({index, icon, link}) => {
  return (
    <motion.div
       variants={fadeIn("right", "spring", 0.8 * index, 0.75)}
    >
      <div
        onClick={() => window.open(link, "_blank")}
        className=''
      >
            <img src={icon} alt={index} 
            className='shadow-lg hover:shadow-white w-16 h-16 object-contain rounded-full hover:cursor-pointer' />
          </div>
    </motion.div>
  )
}


const About = () => {
  return (
    <>
      <motion.div
        variants={textVariant()}
      >
        <p className={styles.sectionSubText}>
          Introduction
        </p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-6xl leading-[30px]'
      >
        Results-driven software engineer with 3 years of professional experience, specializing in full-stack development. Proficient in data structures, algorithms, and design thinking. GCP Certified Associate Cloud Engineer with a track record of solving 500+ problems on LeetCode. Aspiring full-stack expert focused on industry leadership. Known for strong personal attributes including empathy, time management, and planning skills.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10 justify-between'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>

      <div className='mt-20 flex justify-around gap-64'>
        {socials.map((social, index) => (
          <SocialCard key={social.title} index={index} {...social} />
        ))}
      </div>

    </>
  )
}

export default SectionWrapper(About, "about");