
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Pages/Homepage/Footer';
import Homepage from './Pages/Homepage/Homepage';
import Login from './Pages/Login/Login';
import Navbar from './Pages/Shared/Navbar/Navbar';
import Appoinment from './Pages/Appoinment/Appoinment'


function App() {
  return (
    <div >
     <Navbar></Navbar>
     <Routes>
       <Route path='/' element={<Homepage/>}></Route>
     <Route path='/login' element={<Login></Login>}></Route>
     <Route path='/appoinment' element={<Appoinment/>}></Route>
     </Routes>
     <Footer/>
    </div>
  );
}

export default App;
