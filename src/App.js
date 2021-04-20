import React from "react";
import { getArticles } from "./api";
import { getUKArticles } from "./api";
import ArticleList from "./components/articlesList";
import SearchBar from "./components/searchBar";
import { Container, Header } from "semantic-ui-react";
import Footer from "./components/footer";
import $ from 'jquery';

class App extends React.Component {
  state = {
    articles: [],
    searchTopic: "",
    totalResults: "",
    loading: false,
    apiError: ""
  };

  async componentDidMount() {
    try {
      const response = await getUKArticles();
      this.setState({ articles: response.articles });
     // this.showSearchFilter();
    } catch (error) {
      this.setState({ apiError: "Could not find any articles" });
    }
  }

  /* showSearchFilter() {
    $('.searchMe').click(function () {
      $('.searchBox').toggle();
    });
  } */

  searchForTopic = async topic => {
    try {
        if(topic) {
          this.setState({ loading: true });
          const response = await getArticles(topic);
          this.setState({
            articles: response.articles,
            searchTopic: topic,
            totalResults: response.totalResults
          });
      }
    } catch (error) {
      this.setState({ apiError: "Could not find any articles" });
    }
    this.setState({ loading: false });
  };

  render() {

    const { articles, apiError, loading, searchTopic, totalResults, } = this.state;
    return (
      <Container fluid>
        <div className="pageTitle">
          UK News
        </div>
      {/*   <div class="searchMe" id="searchMe"> Hit me to filter out the news !! </div> */}
        <SearchBar searchForTopic={this.searchForTopic} />
        {loading && (
          <p style={{ textAlign: "left", marginLeft: 50, }}>I am Searching for articles...</p>
        )}
        {articles.length > 0 && searchTopic !== '' && (
          <Header as="h4" style={{ textAlign: "left", marginLeft: 50, marginTop: 30 }}>
            I Found {totalResults} articles on "{searchTopic}"
          </Header>
        )}
        {articles.length <= 0 && searchTopic !== '' && (
          <Header as="h4" style={{ textAlign: "left", marginLeft: 50, marginTop: 30 }}>
            I Found {totalResults} articles on "{searchTopic}"
          </Header>
        )}
        {articles.length > 0 && <ArticleList articles={articles} />}
        {apiError && <p>I Could not fetch any articles. Please try again.</p>}

        <Footer />
          
      </Container>
    );
  }
}

export default App;
