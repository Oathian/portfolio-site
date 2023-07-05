import { useState } from "react";
import { Routes, Route } from 'react-router-dom';

import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import LoadingSpinner from "./components/loading-spinner/loading-spinner";
import Home from "./components/home/home";
import Projects from "./components/projects/projects";
import About from "./components/about/about";

const App = () => {
  const [ isLoading, setIsLoading ] = useState(true);

  return ( 
    <div>
      <Header />
      <div className="content">
        { !isLoading ? 
          <LoadingSpinner />
        :
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>      
        }
      </div>
      <Footer />
    </div>
  )
}

export default App;