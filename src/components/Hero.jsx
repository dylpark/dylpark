import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';

const Hero = () => {
     return (
          <section class='relative w-full h-screen mx-auto'>
               <div
                    class={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
               >
                    <div class='flex flex-col justify-center mt-5'>
                         <div class='w-5 h-5 rounded-full bg-[#915eff]' />
                         <div class='w-1 sm:h-80 h-40 violet-gradient' />
                    </div>
                    <div>
                         <h1 class={`${styles.heroHeadText} text-white`}>
                              Hi, I'm <span class='text-[#915eff]'>Dylan</span>
                         </h1>
                         <p class={`${styles.heroSubText} mt-2 text-white-100`}>
                              I develop 3D visuals, user interfaces,
                              <br class='sm:block hidden' /> iOS, and web applications.
                         </p>
                    </div>
               </div>
               <ComputersCanvas />
          </section>
     );
};

export default Hero;
