import './App.css'
import AllPlayers from './components/AllPlayers';
import NavBar from './components/NavBar';
import SinglePlayer from './components/SinglePlayer';
import { Routes, Route } from 'react-router-dom';

function App() {


  return (
    <>
    
     <h1>App</h1>
     <NavBar />
     
     <Routes>
      {/* PATH: what is added to the baseUrl, ELEMENT: react component that is rendered  */}
      <Route path="/" element={<AllPlayers />}></Route>
      <Route path="/players/:id" element={<SinglePlayer />}></Route>
      
     </Routes>
     
    </>
  )
}

export default App
