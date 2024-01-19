import React from 'react';
import './App.css'
import LandingPage from './stores/pages/LandingPage';
import {Routes,Route} from 'react-router-dom'
import MobilePage from './stores/pages/MobilePage';
import ComputersPage from './stores/pages/ComputersPage';
import WatchesPage from './stores/pages/WatchesPage';
import MensPage from './stores/pages/MensPage';
import WomanPage from './stores/pages/WomanPage';
import FurnituresPage from './stores/pages/FurnituresPage';
import AcsPage from './stores/pages/AcsPage';
import Kitchenspage from './stores/pages/Kitchenspage';
import MobileSingle from './stores/singles/MobileSingle';
import UserCart from './stores/userCart';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/mobiles" element={<MobilePage/>} />
        <Route path="/computers" element={<ComputersPage/>} />
        <Route path="/watches" element={<WatchesPage/>} />
        <Route path="/mens" element={<MensPage/>} />
        <Route path="/womans" element={<WomanPage/>} />
        <Route path="/furnitures" element={<FurnituresPage/>}/>
        <Route path="/acs" element={<AcsPage/>} />
        <Route path="/kitchens" element={<Kitchenspage/>} />
        <Route path="/mobiles/:id" element={<MobileSingle/>} />
        <Route path="/cart" element={<UserCart/>} />
      </Routes>
      
    </div>
  )
}

export default App