import React, { Component } from "react";
import { Paper, TextField } from "@material-ui/core";

export default class SearchBar extends Component {
  state = {
    searchTerm: ""
  };

  handleChange = event => this.setState({ searchTerm: event.target.value });

  onFormSubmit = event => {
    event.preventDefault();
    this.props.handleSubmit(this.state.searchTerm);
  };

  render() {
    return (
      <Paper elevation={6} style={{ margin: "25px" }}>
        <form onSubmit={this.onFormSubmit}>
          <TextField fullWidth label="Search..." onChange={this.handleChange} />
        </form>
      </Paper>
    );
  }
}
