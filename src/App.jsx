import { BrowserRouter } from 'react-router-dom';
import {
    About,
    Experience,
    Hero,
    Navbar,
    Tech,
    Works,
    StarsCanvas,
} from './components';

const App = () => {
    return (
        <BrowserRouter>
            <div className='relative z-1 bg-primary'>
                <div className='relative z-0'>
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
