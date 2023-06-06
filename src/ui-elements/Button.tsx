import React from 'react';

type ButtonProps = {
    link: string;
    icon: string;
};

const Button: React.FC<ButtonProps> = ({ link, icon }) => {
    return (
        <div
            onClick={() => window.open(link, '_blank')}
            className='black-gradient w-16 h-16 rounded-full flex justify-center items-center cursor-pointer
            green-pink-gradient p-[1px]'
        >
            <div className='bg-primary rounded-full w-full h-full object-contain flex justify-center items-center'>
                <img
                    src={icon}
                    alt='alt'
                    className='w-1/2 h-1/2 object-contain'
                />
            </div>
        </div>
    );
};

export default Button;
