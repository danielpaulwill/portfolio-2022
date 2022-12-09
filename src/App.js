import './App.css';
import Contact from './Contact';
import Header from './Header';
import Home from './Home';
import Projects from './Projects';
import Blogs from './Blogs';

function App() {

  const projectInfo = [
    {
      id: 1,
      title: "Starbucks Confidential",
      subtitle: "An informational app that brings you the unlisted caffeine content of popular bottled Starbucks drinks.",
      image: ""
    },
    {
      id: 2,
      title: "Wayfarer: Journey to Understanding",
      subtitle: "An 8-bit multiple choice mystery RPG with some shocking twists and turns.",
      image: ""
    },
  ]


  return (
    <div>
      <Header />
      {/* <Blogs /> */}
      <Home />
      <Projects />
      {/* <Contact /> */}
    </div>
  );
}

export default App;
