import React, { Component } from "react";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 6,
    category: "General",
  };

  static propsType = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };
  captializeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    };
    document.title = `${this.captializeFirstLetter(
      this.props.category
    )}--Insight-Feed`;
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=770a1e050c554c489fb95e094c152370&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }
  handlePrevClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
      this.props.category
    }&apiKey=770a1e050c554c489fb95e094c152370&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);

    let parsedData = await data.json();
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading: false,
    });
  };

  handleNextClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
      this.props.category
    }&apiKey=770a1e050c554c489fb95e094c152370&page=${
      this.state.page + 1
    }&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page + 1,
      articles: parsedData.articles,
      loading: false,
    });
  };

  fetchMoreData = async () => {
    this.setState({ page: this.page + 1 });
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
      this.props.category
    }&apiKey=770a1e050c554c489fb95e094c152370&page=${
      this.state.page + 1
    }&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      loading: false,
    });
  };

  render() {
    return (
      <div className="container my-3">
        <h1
          style={{
            textAlign: "center",
            margin: "35px 0px",
            marginTop: "90px",
            color: "black",
          }}
        >
          InsightFeed-Top {this.props.category} HeadLine
        </h1>

        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles !== this.totalResults}
          loader={
            <div className="text-center" style={{ backgroundColor: "#ffecec" }}>
              <img src={require("../loading.gif")} alt="loading"></img>
            </div>
          }
        >
          <div className="row">
            {this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <div>
                    <div className="my-3">
                      <div className="card">
                        <img
                          src={element.urlToImage}
                          className="card-img-top"
                          alt="..."
                        />
                        <div className="card-body">
                          <h5
                            className="card-title text-dark"
                            style={{ fontFamily: "sans-serif" }}
                          >
                            {element.title}
                            <span
                              className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
                              style={{ left: "90%", zIndex: "1" }}
                            >
                              {element.source.name}
                            </span>
                          </h5>
                          <p className="card-text text-dark">
                            {element.description}....
                          </p>
                          <p className="card-text text-light">
                            <small className="text-dark">
                              By {!element.author ? "unknown" : element.author}{" "}
                              on {new Date(element.publishedAt).toGMTString()}
                            </small>
                          </p>
                          <a
                            href={element.url}
                            target="_blanck"
                            className="btn btn-sm btn-dark"
                          >
                            Read More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </InfiniteScroll>
      </div>
    );
  }
}

export default News;
