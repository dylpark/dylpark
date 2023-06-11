import React from 'react';

type TextLinkProps = {
    link: string;
    label: string;
};

const TextLink: React.FC<TextLinkProps> = ({ link, label }) => {
    return (
        <a
            className='text-violet font-bold transition ease-in-out delay-75 hover:text-secondary duration-200 '
            href={link}
            target='_blank'
        >
            {label}
        </a>
    );
};

export default TextLink;
