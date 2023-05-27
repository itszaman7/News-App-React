import React  from 'react'

const NewsItem = (props)=>{
    let {title,description,imgUrl,newsUrl,author,date,source} = props;
    return (  
      <div>
      <div className="my-3">
      <img src={!imgUrl?"https://artsmidnorthcoast.com/wp-content/uploads/2014/05/no-image-available-icon-6.png":imgUrl} className="card-img-top" alt="..."/>
      <div className="card-body  text-white">
        <h5 className="card-title my-2">{title} <span className="badge text-bg-info">{source}</span></h5>
        <p className="card-text">{description}</p>
        <p className='text-light'>By {!author? "Unkown" :author} on {new Date(date).toUTCString()}</p>
        <a href={newsUrl} className="btn btn-sm btn-light">Read More</a>
      </div>
    </div>
      </div>
    )
}

export default NewsItem
