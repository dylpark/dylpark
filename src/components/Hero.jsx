import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import Button from '../ui-elements/Button';
import { github } from '../assets';
import { linkedin } from '../assets';

const Hero = () => {
    return (
        <section className='relative w-full h-screen mx-auto z-10'>
            <div
                className={`${styles.paddingX} absolute inset-0 top-[120px] 
                    max-w-7xl mx-auto flex flex-row items-start gap-5`}
            >
                <div className='flex flex-col justify-center items-center mt-5'>
                    <div className='w-5 h-5 rounded-full bg-violet' />
                    <div className='w-1 sm:h-80 h-40 violet-gradient' />
                </div>
                <div className='flex flex-col gap-y-4 items-start'>
                    <h1 className={`${styles.heroHeadText} text-white`}>
                        Hi, I'm <span className='text-violet'>Dylan</span>
                    </h1>
                    <p
                        className={`${styles.heroSubText} text-white-100 w-full lg:w-2/3`}
                    >
                        A self-taught software engineer with an industrial
                        design degree.
                    </p>
                    <div className='flex flex-row md:gap-2 gap-5'>
                        <Button
                            alt='linkedin-dylpark'
                            link='https://www.linkedin.com/in/dylpark'
                            icon={linkedin}
                        />
                        <Button
                            alt='github-dylpark'
                            link='https://github.com/dylpark'
                            icon={github}
                        />
                    </div>
                </div>
            </div>
            <EarthCanvas />
            <div className='z-[2] absolute xs:bottom-10 bottom-9 w-full flex justify-center items-center'>
                <a href='#about'>
                    <div
                        className='w-[35px] h-[64px] rounded-3xl border-4 
                         border-secondary flex justify-center items-start p-2'
                    >
                        <motion.div
                            animate={{ y: [0, 24, 0] }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                repeatType: 'loop',
                            }}
                            className='3-4 w-3 h-3 rounded-full bg-secondary mb-1'
                        />
                    </div>
                </a>
            </div>
        </section>
    );
};

export default Hero;
