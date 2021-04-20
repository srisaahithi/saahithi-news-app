import React from "react";
import { Button, Form } from "semantic-ui-react";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchTopic: "" };
  }

  handleChange = event => {
    this.setState({ searchTopic: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.searchForTopic(this.state.searchTopic);
  };

  render() {
    return (
      <div id="search-box" className="searchBox">
        <h2>Search for a Topic</h2>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Input
              placeholder="Search topic"
              name="topic"
              value={this.state.searchTopic}
              onChange={this.handleChange}
              className="inputField"
            />
            <Button type="submit" color="black">
              Search
            </Button>
          </Form.Group>
        </Form>
      </div>
    );
  }
}

export default SearchBar;
