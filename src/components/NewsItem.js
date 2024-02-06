import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let { title, description , imageUrl , newsUrl , author ,publishedAt ,source} = this.props;
        return (
            <>
                <div>
                    <div className="my-3">
                    <div className="card">
                        <img src={imageUrl} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title text-dark" style={{fontFamily:'sans-serif'}}>{title}<span className='position-absolute top-0 translate-middle badge rounded-pill bg-danger' style={{left:'90%',zIndex:'1'}}>{source}</span></h5>
                            <p className="card-text text-dark">{description}....</p>
                            <p className="card-text text-light"><small class="text-dark">By {!author?"unknown":author} on {new Date(publishedAt).toGMTString()}</small></p>
                            <a href={newsUrl} target='_blanck' className="btn btn-sm btn-dark">Read More</a>
                        </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default NewsItem
