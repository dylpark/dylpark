import React from 'react';

type TextLinkProps = {
    link: string;
    label: string;
};

const TextLink: React.FC<TextLinkProps> = ({ link, label }) => {
    return (
        <a
            className='text-violet font-bold hover:text-white ease-in-out transition-all duration-300'
            href={link}
            target='_blank'
        >
            {label}
        </a>
    );
};

export default TextLink;
