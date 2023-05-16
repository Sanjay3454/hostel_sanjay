
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import Hostels from './Hostels';
import Hostelview from './Hostelview';


function App() {
  return (
    <div className="App">
      <Header />

      <Routes>

        <Route path='/' element={<Hostels />} />
        <Route path='/viewHostel/:id' element={<Hostelview></Hostelview>} />

      </Routes>
<Footer/>
     
    </div>
  );
}

export default App;
