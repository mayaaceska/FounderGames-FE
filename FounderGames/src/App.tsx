import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './assets/pages/HomePage/HomePage';
import YouTubeLinkForm from './assets/components/YouTubeLinkForm/YouTubeLinkForm';
import SingleVideoPage from './assets/pages/SingleVideoPage/SingleVideoPage';
import MultiVideoPage from './assets/pages/MultiVideoPage/MultiVideoPage';
import ChatBox from './assets/components/ChatBox/ChatBox';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/youtube-link" element={<YouTubeLinkForm />} /> {/* New route for the YouTube link form */}
        <Route path="/single-video" element={<SingleVideoPage />} /> {/* New route for the single video page */}
        <Route path="/multi-video" element={<MultiVideoPage />} /> {/* New route for the multi video page */}
      </Routes>
      <ChatBox /> {/* Include the ChatBox component here */}
    </Router>
  );
}

export default App;


