import React from 'react'

const NewsItem = (props) => {
    let { title, description, imageUrl, newsUrl, author, date, source, theme } = props;
    return (
        <div className="my-3">
            <div className={`card carda ${theme === "dark" ? 'dcard' :null}`}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    position: 'absolute',
                    right: '0'
                }
                }>
                    <span className="badge rounded-pill bg-danger badgea"> {source} </span>
                </div>
                <img src={!imageUrl ? "https://images.immediate.co.uk/production/volatile/sites/4/2022/06/Cool-gadgets-small-3eb3e3e.jpg?quality=90&webp=true&resize=1200,510" : imageUrl} className="card-img-top" alt="..." />
                <div className="card-body card-bodys">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description} <a rel="noreferrer" href={newsUrl} target="_blank" className="readm">read more...</a></p>
                    <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on  {new Date(date).toGMTString()}</small></p>
                </div>
            </div>
        </div>
    )

}

export default NewsItem