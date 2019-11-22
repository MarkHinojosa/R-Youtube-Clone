import React from "react";
import { Paper, Grid, Typography } from "@material-ui/core";

const VideoItem = ({ video, onSelectVideo }) => {
  let thumbnailSrc = video.snippet.thumbnails.medium.url;
  //   const videoSrc = `https://www.youtube.com/embed/${videoId}`;
  return (
    <Grid style={{ marginBottom: "10px", marginLeft: "10px" }} item xs={12}>
      <Paper
        style={{
          display: "flex",
          alignItems: "center",
          cursor: "pointer"
        }}
        onClick={() => onSelectVideo(video)}
      >
        <img src={thumbnailSrc} style={{ height: "10%" }} alt="thumbnail" />
        <Typography variant="subtitle1">{video.snippet.title}</Typography>
      </Paper>
    </Grid>
  );
};
export default VideoItem;
