import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Student from './pages/Student';
import AddStudent from './pages/AddStudent';

function App() {
  
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route exact path='/' Component={Student}/>
      <Route exact path='/add' Component={AddStudent}/>
      <Route exact path='/update/:id' Component={AddStudent}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
