import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './assets/pages/HomePage/HomePage';
import MultiVideoPage from './assets/pages/MultiVideoPage/MultiVideoPage';
import SingleVideoPage from './assets/pages/SingleVideoPage/SingleVideoPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/multi-video" element={<MultiVideoPage />} />
        <Route path="/single-video/:videoId" element={<SingleVideoPage />} />
      </Routes>
    </Router>
  );
}

export default App;
