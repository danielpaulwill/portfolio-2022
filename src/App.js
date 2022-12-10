import './App.css';
import Contact from './Contact';
import Header from './Header';
import Home from './Home';
import Projects from './Projects';
import Blogs from './Blogs';
import Error from './Error';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='projects' element={<Projects />} />
          <Route path='blogs' element={<Blogs />} />
          <Route path='contact' element={<Contact />} />
          <Route path='*' element={<Error />} />
          {/* <Blogs /> */}
          {/* <Home /> */}
          {/* <Projects /> */}
          {/* <Contact /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
