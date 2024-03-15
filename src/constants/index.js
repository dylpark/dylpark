import {
    mobile,
    web,
    frontend,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    git,
    figma,
    docker,
    threejs,
    swift,
    twig,
    linkwave,
    moonphase,
    nestchat,
    dreamApp,
    google,
    rexlabs,
    ethereal,
    mppiglobal,
} from '../assets';

export const navLinks = [
    {
        id: 'about',
        title: 'About',
    },
    {
        id: 'work',
        title: 'Work',
    },
    {
        id: 'projects',
        title: 'Projects',
    },
    // {
    //     id: 'contact',
    //     title: 'Contact',
    // },
];

const services = [
    {
        title: 'Frontend',
        icon: frontend,
    },
    {
        title: 'Full Stack',
        icon: web,
    },
    {
        title: 'iOS Swift',
        icon: mobile,
    },
];

const technologies = [
    {
        name: 'HTML 5',
        icon: html,
    },
    {
        name: 'CSS 3',
        icon: css,
    },
    {
        name: 'JavaScript',
        icon: javascript,
    },
    {
        name: 'TypeScript',
        icon: typescript,
    },
    {
        name: 'React JS',
        icon: reactjs,
    },
    {
        name: 'Redux Toolkit',
        icon: redux,
    },
    {
        name: 'Tailwind CSS',
        icon: tailwind,
    },
    {
        name: 'Node JS',
        icon: nodejs,
    },
    {
        name: 'Three JS',
        icon: threejs,
    },
    {
        name: 'git',
        icon: git,
    },
    {
        name: 'figma',
        icon: figma,
    },
    {
        name: 'docker',
        icon: docker,
    },
    {
        name: 'swift',
        icon: swift,
    },
    {
        name: 'twig',
        icon: twig,
    },
];

const experiences = [
    {
        title: 'Frontend Developer',
        company_name: 'Rex Software',
        icon: rexlabs,
        iconBg: '#FFFFFF',
        date: 'May 2022 - Current',
        points: [
            'Develop and maintain the frontend of three different in-house web applications using primarily React (TypeScript) and Tailwind CSS',
            'Fostering collaboration within cross-functional teams, promoting a supportive knowledge-sharing environment',
            'Utilising a solid understanding of engineering fundamentals, including asynchronous programming, data structures, solution design, architecture, and design patterns',
            'Contributing small pieces of code to the backend to expand my skill-set. PHP/Laravel with PostgreSQL and MySQL databases.',
        ],
    },
    {
        title: 'Freelance Frontend Developer',
        company_name: 'Ethere.al',
        icon: ethereal,
        iconBg: '#FFFFFF',
        date: 'March 2022 - May 2022',
        points: [
            'Contracted to develop the frontend of a blockchain/Web3 minting platform',
            'Leveraged the power of React, TypeScript, and Redux to craft a seamless, user-friendly interface that stands at the forefront of digital asset creation',
            "Collaborated closely with a team of visionary developers and designers, we explored the boundaries of what's possible in web3 development",
        ],
    },
    {
        title: 'Business Analyst',
        company_name: 'MPPIglobal',
        icon: mppiglobal,
        iconBg: '#FFFFFF',
        date: 'Nov 2021 - Apr 2022',
        points: [
            'Convert customer requirements into a set of build instructions/pseudo code for the dev team.',
            'Typically bringing old Excel systems into MPPIglobal’s (C#, .NET based) software platform',
            'Visiting mine sites to scope and estimate projects',
            'Scoping would include workshops with metallurgists & process managers, identifying data-source systems, connection details for SCADAs, and engaging 3rd parties for API and database requirements.',
        ],
    },
];

const testimonials = [
    {
        testimonial:
            'I thought it was impossible to make a website as beautiful as ours, but Dylan proved me wrong.',
        name: 'Tony Hawk',
        designation: 'CEO',
        company: 'Birdhouse',
        image: '',
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Dylan does.",
        name: 'Bert Kreischer',
        designation: 'Tech Lead',
        company: 'DEF Corp',
        image: '',
    },
    {
        testimonial:
            "After Dylan optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: 'David Choe',
        designation: 'CTO',
        company: '456 Enterprises',
        image: '',
    },
];

const projects = [
    {
        name: 'Linkwave',
        description:
            'Linkwave is a Social Link Sharing Platform inspired by 🌴 Linktree where users can publish and edit a profile for their social media links. The goal of this project is to leverage SvelteKits’s rendering capabilities with a variety of user authentication and data fetching patterns.',
        tags: [
            {
                name: 'sveltekit',
                color: 'blue-text-gradient',
            },
            {
                name: 'firebase',
                color: 'orange-text-gradient',
            },
            {
                name: 'daisyui',
                color: 'green-text-gradient',
            },
            {
                name: 'tailwindcss',
                color: 'pink-text-gradient',
            },
        ],
        image: linkwave,
        source_code_link: 'https://github.com/dylpark/linkwave',
    },
    {
        name: 'Moon Phase',
        description:
            'Moon Phase is a minimalist, open-source, moon phase tracker. The home screen shows how many days until the next New or Full Moon. You can use the calendar to pick a date. As well as your current location or map, to target your search.',
        tags: [
            {
                name: 'ios',
                color: 'blue-text-gradient',
            },
            {
                name: 'swift',
                color: 'orange-text-gradient',
            },
            {
                name: 'uikit',
                color: 'green-text-gradient',
            },
        ],
        image: moonphase,
        source_code_link: 'https://github.com/dylpark/MoonPhase-iOS',
    },
    {
        name: 'Nest Chat',
        description:
            "This full stack project is a simple chat messaging app built using Nest, TypeScript, Vite, Pusher, and Tailwind CSS. It leverages Nest's powerful server-side capabilities, TypeScript's type safety, Pusher's real-time messaging capability, and Tailwind CSS's easy-to-use styling framework.",
        tags: [
            {
                name: 'vue',
                color: 'blue-text-gradient',
            },
            {
                name: 'typescript',
                color: 'orange-text-gradient',
            },
            {
                name: 'nestjs',
                color: 'green-text-gradient',
            },
            {
                name: 'tailwindcss',
                color: 'pink-text-gradient',
            },
        ],
        image: nestchat,
        source_code_link: 'https://github.com/dylpark/nest-chat-app/',
    },
    {
        name: 'Dream App',
        description:
            "Image generator using built using Open AI's DALL·E. Vanilla JavaScript app with Vite.",
        tags: [
            {
                name: 'react',
                color: 'blue-text-gradient',
            },
            {
                name: 'javascript',
                color: 'orange-text-gradient',
            },
            {
                name: 'restapi',
                color: 'green-text-gradient',
            },
            {
                name: 'tailwindcss',
                color: 'pink-text-gradient',
            },
        ],
        image: dreamApp,
        source_code_link: 'https://github.com/dylpark/Dream-App',
    },
    {
        name: 'Google 2.0',
        description:
            "Google search engine rebuild with React (Next.js) and Tailwind CSS. (Responsive, Server-Side Rendering, Pagination, TypeScript). The app is using Google's Search API to display results.",
        tags: [
            {
                name: 'react',
                color: 'blue-text-gradient',
            },
            {
                name: 'typescript',
                color: 'orange-text-gradient',
            },
            {
                name: 'nextjs',
                color: 'green-text-gradient',
            },
            {
                name: 'tailwindcss',
                color: 'pink-text-gradient',
            },
        ],
        image: google,
        source_code_link: 'https://github.com/dylpark/Google-2.0',
    },
];

export { services, technologies, experiences, testimonials, projects };
