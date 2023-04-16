import React from 'react';
import * as Tilt from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
// import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';

const About = () => {
     return (
          <>
               <motion.div>
                    <p className={styles.sectionSubText}>introduction</p>
                    <h2 className={styles.sectionHeadText}>Overview</h2>
               </motion.div>
          </>
     );
};

export default About;
