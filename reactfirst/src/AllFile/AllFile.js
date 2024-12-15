import AboutMe from '../MainPage/AboutMe';
import Achievements from '../MainPage/Achievements';
import ContactMe from '../MainPage/ContactMe';
import Education from '../MainPage/Education';
import Experience from '../MainPage/Expeience';
import Language from '../MainPage/Language';
import MainPages from '../MainPage/MainPages';
import Projects from '../MainPage/Projects';
import ViewAll from '../MainPage/ViewAll';

function AllFile() {
    return (
        <>
            <MainPages />
            <AboutMe />
            <Experience />
            <Education />
            <Language />
            <Projects />
            <ViewAll />
            <Achievements />
            <ContactMe />
        </>
    );
}

export default AllFile;
