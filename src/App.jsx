import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Form from './components/Form';
import Description from './components/Description';
import {Route, Routes, BrowserRouter as Router} from 'react-router-dom'

function App() {
  return (
    <div>
      <Router>
        <Header/>
          <Routes>
            <Route path='/Description' element={<Description/>}/>
            <Route path='/Form' element={<Form/>}/>
            <Route path='/' element={<Home/>}/>
          </Routes >
      </Router>
     
      <Footer/>
    </div>
  );
}

export default App;
