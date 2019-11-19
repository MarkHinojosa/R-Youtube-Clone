import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import youtube from "./api/youtube";
import { SearchBar, VideoList, VideoDetail } from "./components";

export default class App extends Component {
  state = {
    searchResults: null,
    selectedVideo: null
  };
  handleSubmit = async searchTerm => {
    let response = await youtube.get("search", {
      params: {
        q: searchTerm,
        part: "snippet",
        maxResults: 5,
        key: process.env.REACT_APP_YOUTUBE_API_KEY
      }
    });

    this.setState({
      searchResults: response.data.items,
      selectedVideo: response.data.items[0]
    });
  };

  render() {
    return (
      <Grid justify="center" container spacing={10}>
        <Grid item xs={12}>
          <Grid container spacing={10}>
            <Grid item xs={12}>
              <SearchBar handleSubmit={this.handleSubmit} />
            </Grid>
            <Grid item xs={8}>
              <VideoDetail video={this.state.selectedVideo} />
            </Grid>
            <Grid item xs={1}>
              <VideoList searchResults={this.state.searchResults} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}
