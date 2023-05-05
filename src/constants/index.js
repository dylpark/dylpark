import {
    mobile,
    web,
    design,
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
    moonphase,
    base,
    dreamApp,
    google,
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
        id: 'contact',
        title: 'Contact',
    },
];

const services = [
    {
        title: 'Frontend Developer',
        icon: web,
    },
    {
        title: 'iOS Developer',
        icon: mobile,
    },
    {
        title: 'Designer',
        icon: design,
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
];

const experiences = [
    {
        title: 'Frontend Developer',
        company_name: 'Company Name',
        icon: base,
        iconBg: '#383E56',
        date: 'March 2020 - April 2021',
        points: [
            'Developing and maintaining web applications using React.js and other related technologies.',
            'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
            'Implementing responsive design and ensuring cross-browser compatibility.',
            'Participating in code reviews and providing constructive feedback to other developers.',
        ],
    },
    {
        title: 'iOS Developer',
        company_name: 'Company Name',
        icon: base,
        iconBg: '#E6DEDD',
        date: 'Jan 2021 - Feb 2022',
        points: [
            'Developing and maintaining web applications using React.js and other related technologies.',
            'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
            'Implementing responsive design and ensuring cross-browser compatibility.',
            'Participating in code reviews and providing constructive feedback to other developers.',
        ],
    },
    {
        title: 'Web Developer',
        company_name: 'Company Name',
        icon: base,
        iconBg: '#383E56',
        date: 'Jan 2022 - Jan 2023',
        points: [
            'Developing and maintaining web applications using React.js and other related technologies.',
            'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
            'Implementing responsive design and ensuring cross-browser compatibility.',
            'Participating in code reviews and providing constructive feedback to other developers.',
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
        image: 'https://cdn.shopify.com/s/files/1/1128/8094/files/TONY_HAWK_TEAMPAGE.jpg?17626671960250125766',
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Dylan does.",
        name: 'Bert Kreischer',
        designation: 'Tech Lead',
        company: 'DEF Corp',
        image: 'https://bertbertbert.com/wp-content/uploads/2022/06/Netflix-Pics-The-Cabin.png',
    },
    {
        testimonial:
            "After Dylan optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: 'David Choe',
        designation: 'CTO',
        company: '456 Enterprises',
        image: 'https://images.squarespace-cdn.com/content/v1/559dbbb5e4b064657baefaaf/7fc5b2de-439b-4c66-b443-91d36eb19e5d/David+Choe+mixed+media+artwork.png?format=750w',
    },
];

const projects = [
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
