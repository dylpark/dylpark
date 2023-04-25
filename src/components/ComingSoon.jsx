import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';

const ComingSoon = () => {
    return (
        <div className='xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden'>
            <motion.div
                variants={slideIn('left', 'tween', 0.2, 1)}
                className='w-full lg:w-1/2'
            >
                <p className={styles.sectionSubText}>Hi I'm Dylan</p>
                <h3 className={styles.sectionHeadText}>
                    My new site is coming soon...
                </h3>
            </motion.div>

            <motion.div
                variants={slideIn('right', 'tween', 0.2, 1)}
                className='w-full lg:w-1/2 h-[350px]'
            >
                <EarthCanvas />
            </motion.div>
        </div>
    );
};

export default SectionWrapper(ComingSoon, '');
