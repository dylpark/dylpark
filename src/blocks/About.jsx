import React from 'react';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

import { SectionWrapper } from '../hoc';
import ServiceCard from '../components/ServiceCard';

import TextLink from '../components/TextLink';

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
                understanding of mobile app development principles.
                <br />
                <br />
                As an aspiring Full Stack Developer, I am actively expanding my
                skill set to encompass backend technologies and frameworks,
                eager to take on more comprehensive development projects.
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
                You can reach out to me via{' '}
                <TextLink
                    link='https://www.linkedin.com/in/dylpark'
                    label='LinkedIn'
                />
                , or to view my recent work, you can check out my{' '}
                <TextLink
                    link='https://www.github.com/dylpark'
                    label='GitHub'
                />{' '}
                profile.
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
