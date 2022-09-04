import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VIdeoList";
import VideoDetail from "./VideoDetail";
import useVideos from "../hooks/useVideos";

const App = () => {
  const [selectedVideo, setselectedVideo] = useState(null);
  const [videos, search] = useVideos("buildings");

  useEffect(() => {
    setselectedVideo(videos[0]);
  }, [videos]);

  return (
    <div className="ui container">
      <SearchBar onFormSubmit={search} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList
              onVideoSelected={(video) => setselectedVideo(video)}
              videos={videos}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
