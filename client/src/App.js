import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './layouts/footer';
import Header from './layouts/header';
import AddCourse from './pages/addCourse';
import Details from './pages/details';
import Home from './pages/home';

function App() {
  return (
    <div className="App">
   <Header/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/addCourse' element={<AddCourse/>}/>
    <Route path='/:_id' element={<Details/>}/>
   </Routes>
   <Footer/>
    </div>
  );
}

export default App;
