import Navbar from "../../components/Navbar/Navbar";
import Transcribe from "../../components/Transcribe/Transcribe";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";

const SingleVideoPage = () => {
  return (
    <div>
      <Navbar />
      {/* Add padding-top to the content to prevent overlap with the navbar */}
      <div className="pt-32 flex justify-between p-4"> {/* Adjust padding value if needed */}
        {/* Video Player Component */}
        <div className="flex-1 mr-4">
          <VideoPlayer />
        </div>
        {/* Transcribe Component */}
        <div className="flex-1 ml-4">
          <Transcribe />
        </div>
      </div>
    </div>
  );
};

export default SingleVideoPage;
