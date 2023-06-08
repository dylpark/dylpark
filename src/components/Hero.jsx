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
                        {/* <Button
                            alt='linkedin-dylpark'
                            link='https://www.linkedin.com/in/dylpark'
                            icon={linkedin}
                        />
                        <Button
                            alt='github-dylpark'
                            link='https://github.com/dylpark'
                            icon={github}
                        /> */}
                        <div
                            onClick={() =>
                                window.open(
                                    'https://github.com/dylpark',
                                    '_blank'
                                )
                            }
                            className='w-16 h-16 rounded-full flex justify-center items-center cursor-pointer
                            green-pink-gradient p-[1px]'
                        >
                            <div className='bg-primary rounded-full w-full h-full object-contain flex justify-center items-center'>
                                <div className='w-1/2 h-1/2 object-contain'>
                                    <svg
                                        class='fill-current text-white hover:text-violet ease-in-out transition-all duration-300'
                                        preserveAspectRatio='xMidYMid meet'
                                        viewBox='0 0 94 92'
                                        fill='none'
                                        xmlns='http://www.w3.org/2000/svg'
                                    >
                                        <path
                                            fill-rule='evenodd'
                                            clip-rule='evenodd'
                                            d='M47 0C21.0325 0 0 21.1057 0 47.1635C0 68.0334 13.4537 85.6607 32.1362 91.9099C34.4862 92.3226 35.3675 90.9077 35.3675 89.6696C35.3675 88.5495 35.3088 84.8354 35.3088 80.8854C23.5 83.0667 20.445 77.9967 19.505 75.3437C18.9763 73.9878 16.685 69.802 14.6875 68.6819C13.0425 67.7976 10.6925 65.6162 14.6288 65.5573C18.33 65.4983 20.9737 68.9766 21.855 70.3915C26.085 77.525 32.8413 75.5206 35.5438 74.2825C35.955 71.2169 37.1888 69.1535 38.54 67.9744C28.0825 66.7953 17.155 62.7275 17.155 44.6874C17.155 39.5584 18.9762 35.3137 21.9725 32.0122C21.5025 30.8331 19.8575 25.9989 22.4425 19.5139C22.4425 19.5139 26.3788 18.2759 35.3675 24.3482C39.1275 23.287 43.1225 22.7564 47.1175 22.7564C51.1125 22.7564 55.1075 23.287 58.8675 24.3482C67.8563 18.2169 71.7925 19.5139 71.7925 19.5139C74.3775 25.9989 72.7325 30.8331 72.2625 32.0122C75.2587 35.3137 77.08 39.4994 77.08 44.6874C77.08 62.7864 66.0938 66.7953 55.6363 67.9744C57.34 69.4483 58.8088 72.2781 58.8088 76.6997C58.8088 83.0078 58.75 88.0779 58.75 89.6696C58.75 90.9077 59.6313 92.3815 61.9813 91.9099C80.5463 85.6607 94 67.9744 94 47.1635C94 21.1057 72.9675 0 47 0V0Z'
                                            fill=''
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
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
