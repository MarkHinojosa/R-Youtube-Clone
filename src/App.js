import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import youtube from "./api/youtube";
import { SearchBar, VideoList, VideoDetail } from "./components";

export default class App extends Component {
  state = {
    searchResults: null,
    selectedVideo: null
  };

  componentDidMount = () => {
    this.handleSubmit("eunice new mexico rollercoaster road");
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

  onVideoSelect = video =>
    this.setState({ selectedVideo: video }, () =>
      console.log("set the state", video)
    );

  render() {
    return (
      <Grid style={{ justifyContent: "center" }} container spacing={12}>
        <Grid item xs={12}>
          <Grid container spacing={12}>
            <Grid item xs={12}>
              <SearchBar handleSubmit={this.handleSubmit} />
            </Grid>
            <Grid container xs={12}>
              <Grid item xs={8}>
                <VideoDetail video={this.state.selectedVideo} />
              </Grid>
              <Grid item xs={4}>
                <VideoList
                  searchResults={this.state.searchResults}
                  onSelectVideo={this.onVideoSelect}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}
