import { useState } from "react";
import { Routes, Route } from 'react-router-dom';
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getStorage, ref, getDownloadURL } from "firebase/storage";

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
  const db = getFirestore(app);
  const storage = getStorage(app);
  
  // async function func() {
  //   const docs = await getDocs(collection(db, "skills"))
  //   const meme = docs.docs.map(async doc => {
  //     const logoRef = ref(storage, doc.data().path + ".svg");
  //     const meme2 = await getDownloadURL(logoRef);
  //     return meme2;
  //   })
  //   return meme;
  // }
    
  // console.log(func())

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