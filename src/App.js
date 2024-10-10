import logo from './logo.svg';
import './App.css';
import Header from './header/Header';
import HeroSection from './hero/HeroSection';
import AboutMe from './aboutMe/AboutMe';
import Projects from './projects/Projects';
import Skills from './skills/Skills';
import Contact from './contact/Contact';
import Footer from './footer/Footer';
import Calendar from './calendar/Calendar';

function App() {
  return (
    <div className="App">
      <Header/>
      <HeroSection/>
      <AboutMe/>
      <Projects/>
      <Skills/>
      <Contact/>
      <Calendar/>
      <Footer/>
    </div>
  );
}

export default App;
