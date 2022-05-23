/* App.jsx */

// import Router
import { Route, Routes } from 'react-router-dom';

//import Home from './Routes/Home.jsx'
import Home from './Routes/Home.jsx'
import IntroMovie from './Routes/IntroMovie.jsx';
import Gallery from './Routes/Gallery.jsx'
import House from './Routes/House.jsx'
import MiniGame from './Routes/MiniGame.jsx'



const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/house" element={<House />}></Route>
      <Route path="/gallery" element={<Gallery />}></Route>
      <Route path="/introMovie" element={<IntroMovie />}></Route>
      <Route path="/MiniGame" element={<MiniGame />}></Route>
    </Routes>
  );
}

export default App;
