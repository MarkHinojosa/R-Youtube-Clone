import React from "react";
import VideoItem from "./VideoItem";
import { Grid } from "@material-ui/core";

const VideoList = ({ searchResults, onSelectVideo }) => {
  if (!searchResults) {
    return null;
  } else {
    const listOfVideos = searchResults.map((video, id) => {
      return <VideoItem onSelectVideo={onSelectVideo} key={id} video={video} />;
    });

    return <Grid>{listOfVideos}</Grid>;
  }
};

export default VideoList;
