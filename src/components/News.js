import React, { useEffect,useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
 

const News = (props) => {
  const [articles,setArticles] = useState([])
  const [loading,setLoading] = useState(true)
  const [page,setPage] = useState(1)
  const [totalResults,setTotalResults] = useState(0)
  if (props.category !== "general") {
    document.title = `${props.category.charAt(0).toUpperCase() +
      props.category.slice(1)} - News Garden`;
  } else {
    document.title = "Home - Top Headlines";
  }
 
  const updateNews = async ()=> {
    props.setProgress(0);
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true)
    let data = await fetch(url);
    props.setProgress(30);
    let passedData = await data.json();
    props.setProgress(60);
    setArticles(passedData.articles)
    setTotalResults(passedData.totalResults)
    setLoading(false)
    props.setProgress(100);
  }

  useEffect(() => {
    updateNews();
  }, [])
  
  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=f150f73b44544504a753f12a73d87041&page=${page + 1}&pageSize=${props.pageSize}`;
    setPage(page + 1)
    let data = await fetch(url);
    let passedData = await data.json();
    setArticles(articles.concat(passedData.articles))
    setTotalResults(passedData.totalResults)
    setLoading(false)
    };
  
    return (
      <> 
      <h1 className="text-center text-white" style={{maegin:"40px", marginTop:"90px"}}>
      News Garden Top Headlines
      </h1>
        {loading && <Spinner/>}s
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles !== totalResults}
          loader={loading && <Spinner/>}>
        <div className="container">
          <div className="row">
            {articles.map((element,index) => {
              return (
                <div className="col-md-4" key={index}>
                  <NewsItem
                    title={element.title}
                    description={element.description}
                    imgUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
          </div>
        </InfiniteScroll>
      </>
    );
  }

News.defaultProps = {
  pageSize: 9,
  category: "general",
}

News.propTypes = {
  pageSize: PropTypes.number,
  category: PropTypes.string,
}

export default News;
