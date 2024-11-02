import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './assets/pages/HomePage/HomePage';
import YouTubeLinkForm from './assets/components/YouTubeLinkForm/YouTubeLinkForm';
import SingleVideoPage from './assets/pages/SingleVideoPage/SingleVideoPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/youtube-link" element={<YouTubeLinkForm />} /> {/* New route for the YouTube link form */}
        <Route path="/single-video" element={<SingleVideoPage />} /> {/* New route for the single video page */}
      </Routes>
    </Router>
  );
}

export default App;

