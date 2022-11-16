import logo from './logo.svg';
import './App.css';
import {NavBar} from './components/NavBar';
import {Banner} from './components/Banner';
import {Skill} from './components/Skill';
import {Project} from './components/Project';
import { Contact } from "./components/Contact";
import {Footer} from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skill />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
