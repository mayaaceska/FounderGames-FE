import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './assets/pages/HomePage/HomePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/multivideo" element={} />
        <Route path="/singlevideo" element={} /> */}
       </Routes>
    </Router>
  );
}

export default App;
