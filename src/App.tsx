import { useState } from "react";
import { Routes, Route } from 'react-router-dom';

import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import LoadingSpinner from "./components/loading-spinner/loading-spinner";
import Home from "./components/home/home";
import Projects from "./components/projects/projects";

const App = () => {
  const [ isLoading, setIsLoading ] = useState(true);

  return ( 
    <div>
      <Header />
      { !isLoading ? 
        <LoadingSpinner />
      :
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element="" />
          <Route path="/projects" element={<Projects />} />
        </Routes>      
      }
      <Footer />
    </div>
  )
}

export default App;