import Component from "./final/10-tasks";
import image1 from './assets/image1.jpeg';
import image2 from './assets/image2.jpeg';
import image3 from './assets/image3.jpeg';
import image4 from './assets/image4.jpeg';
import image5 from './assets/image5.jpeg';
import React,{useEffect,useState} from "react";


const images = [image1, image2, image3, image4,image5];





const App: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    
    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="background-container" style={{ backgroundImage: `url(${images[currentImageIndex]})` }}>
      <main>
        <Component />
      </main>
    </div>
  );
}

export default App;
