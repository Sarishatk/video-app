import { Route, Routes } from 'react-router-dom'
import './App.css';
import LandingPage from './pages/LandingPage';
import Home from './pages/Home'
import WatchHistory from './pages/WatchHistory';
import Header from './components/Header';
import Footer from './components/Footer';
function App() {
  return (
    <div>
      <Header/>
     <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/Home' element={<Home/>}/>
      <Route path='/Watch-history' element={<WatchHistory/>}/>
      </Routes>
      <hr/>
      <Footer/>
    </div>
  );
}

export default App;
