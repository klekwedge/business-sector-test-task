import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss';
import Table from '../Table/Table';
import MainPage from '../Pages/MainPage/MainPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/:page" element={<Table />} />
        <Route path="/" element={<MainPage />} />
        <Route path="*" element={<Table />} />
      </Routes>
    </Router>
  );
}

export default App;
