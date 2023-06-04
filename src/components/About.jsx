import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => (
    <Tilt className='xs:w-[250px] w-full'>
        <motion.div
            variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
            className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
        >
            <div
                options={{
                    max: 45,
                    scale: 1,
                    speed: 450,
                }}
                className='bg-tertiary rounded-[20px] py-5 px-12 
                min-h-[280px] flex justify-evenly items-center flex-col'
            >
                <img
                    src={icon}
                    alt='web-development'
                    className='w-16 h-16 object-contain'
                />

                <h3 className='text-white text-[20px] font-bold text-center'>
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
                <p className={styles.sectionSubText}>Introduction</p>
                <h2 className={styles.sectionHeadText}>Overview.</h2>
            </motion.div>
            <motion.p
                variants={fadeIn('', '', 0.1, 1)}
                className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
            >
                I am a dedicated frontend engineer based in Brisbane, Australia.
                Currently working full-time, I specialise in building web apps
                using React and TypeScript.
                <br />
                <br />
                With my Bachelor's degree in Industrial Design, I bring a unique
                perspective to my work, combining aesthetics and functionality
                to create exceptional user experiences. I strive to put the
                customer first, whilst also producing reliable and reusable
                code.
                <br />
                <br />
                In addition to my frontend expertise, I have hands-on experience
                in iOS development, which has equipped me with a solid
                understanding of mobile app development principles. As an
                aspiring Full Stack Developer, I am actively expanding my skill
                set to encompass backend technologies and frameworks, eager to
                take on more comprehensive development projects.
                <br />
                <br />
                I am a proactive learner, always seeking opportunities to
                enhance my skills and stay up-to-date with the latest industry
                trends. With a strong foundation in frontend development, a
                background in design, and a growing expertise in backend
                technologies, I am well-positioned to contribute to innovative
                and dynamic development teams.
                <br />
                <br />
                You can reach out to me via LinkedIn, or to view my recent work,
                you can check out my GitHub profile.
            </motion.p>
            <div className='mt-20 flex flex-wrap gap-10'>
                {services.map((service, index) => (
                    <ServiceCard
                        key={service.title}
                        index={index}
                        {...service}
                    />
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(About, 'about');
