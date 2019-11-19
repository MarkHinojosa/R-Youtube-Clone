import React, { Component } from "react";
import { Paper, Grid, Typography } from "@material-ui/core";

const VideoItem = ({ video }) => {
  let thumbnailSrc = video.snippet.thumbnails.default.url;
  //   const videoSrc = `https://www.youtube.com/embed/${videoId}`;
  return (
    <Grid item xs={12}>
      <Paper style={{ display: "flex", alignItems: "center" }}>
        <img
          src={thumbnailSrc}
          style={{ marginRight: "20px" }}
          alt="thumbnail"
        />
        <Typography variant="subtitle1">{video.snippet.title}</Typography>
      </Paper>
    </Grid>
  );
};
export default VideoItem;
