import { useState } from "react";
import { Routes, Route } from 'react-router-dom';
import { initializeApp } from "firebase/app";

import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import LoadingSpinner from "./components/loading-spinner/loading-spinner";
import Home from "./components/home/home";
import Projects from "./components/projects/projects";
import About from "./components/about/about";

const App = () => {
  const [ isLoading, setIsLoading ] = useState(true);
  
  const firebaseConfig = {

  };

  const app = initializeApp(firebaseConfig);
  console.log(app)

  return ( 
    <div>
      <Header />
      { !isLoading ? 
        <LoadingSpinner />
      :
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>      
      }
      <Footer />
    </div>
  )
}

export default App;