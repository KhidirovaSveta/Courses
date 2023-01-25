import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './layouts/footer';
import Header from './layouts/header';
import AddCourse from './pages/addCourse';
import Home from './pages/home';

function App() {
  return (
    <div className="App">
   <Header/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/addCourse' element={<AddCourse/>}/>
   </Routes>
   <Footer/>
    </div>
  );
}

export default App;
