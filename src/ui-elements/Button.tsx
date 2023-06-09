import React from 'react';
import { ReactSVG } from 'react-svg';

type ButtonProps = {
    link: string;
    icon: string;
};

const Button: React.FC<ButtonProps> = ({ link, icon }) => {
    return (
        <div
            onClick={() => window.open(link, '_blank')}
            className='w-16 h-16 rounded-full flex justify-center items-center cursor-pointer green-pink-gradient p-[1px]'
        >
            <div className='bg-primary rounded-full w-full h-full object-contain flex justify-center items-center'>
                <div className='w-1/2 h-1/2 object-contain hover:scale-125 ease-in-out transition-all duration-300 delay-75'>
                    <ReactSVG src={icon} />
                </div>
            </div>
        </div>
    );
};

export default Button;
