
import { BrowserRouter as Router , Route, Routes } from 'react-router-dom';
import './App.css';
import Front from './components/Front';
import Main from './components/Main';

function App() {
  return (
    <Router>
    <div>
      <Routes>
          <Route path='/' element={<Front/>}></Route>
          <Route path='/main' element={<Main/>}></Route>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
