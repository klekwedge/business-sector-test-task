import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss';
import Table from '../Table/Table';

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/:page" element={<Table />} />
          <Route path="/" element={<Table />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
