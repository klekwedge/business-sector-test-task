import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import Search from '../Search/Search';
import './App.scss'

function App() {
  return (
    <Router>
      <div className='container'>
        <Search />
        <Routes>
          <Route path="/:page" element={<div>f</div>} />
        </Routes>
      </div>
      <Navigation />
    </Router>
  );
}

export default App;
