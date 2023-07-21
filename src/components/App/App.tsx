import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from '../../pages/MainPage/MainPage';
import TablePage from '../../pages/TablePage/TablePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/:page" element={<TablePage />} />
        <Route path="/" element={<MainPage />} />
        <Route path="*" element={<h1>Error</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
