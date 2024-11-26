import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PhotoDetail from './PhotoDetail/PhotoDetail';
import Map from './Map/Map';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Map />} />
        <Route path="/PhotoDetail" element={<PhotoDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
