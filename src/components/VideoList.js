import React from "react";
import VideoItem from "./VideoItem";
import { Paper, Grid, Typography } from "@material-ui/core";

const VideoList = ({ searchResults, onVideoSelect }) => {
  if (!searchResults) {
    return null;
  } else {
    const listOfVideos = searchResults.map((video, id) => {
      return <VideoItem onVideoSelect={onSelectVideo} key={id} video={video} />;
    });

    return <Grid>{listOfVideos}</Grid>;
  }
};

export default VideoList;
