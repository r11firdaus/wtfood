import React from "react";
import './headline.css'
import HeadlineItems from './headlineItems'

const Headline = props => {
    const headlineData = props.data.map(meal => {
        const strTitle = Object.keys(meal);
        let headlineTitle = `meal.${strTitle}`;
        
        return (
            <HeadlineItems
                type={`${strTitle}`}
                title={eval(headlineTitle)}
                pos={meal == props.data[0] ? "carousel-item active" : "carousel-item"}
                txtalign='carousel-caption text-left'
            />
        )
    })

    return (
        <div id="myCarousel" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                {headlineData}
            </div>
            <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    )
}

export default Headline;