import { BrowserRouter } from 'react-router-dom';
import {
    About,
    Experience,
    Hero,
    Navbar,
    Tech,
    Works,
    StarsCanvas,
} from './blocks';

const App = () => {
    return (
        <BrowserRouter>
            <div className='relative z-1 bg-primary'>
                <div className='relative'>
                    <Navbar />
                    <Hero />
                    <StarsCanvas />
                </div>
                <About />
                <Experience />
                <Tech />
                <Works />
            </div>
        </BrowserRouter>
    );
};

export default App;
