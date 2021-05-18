import React from "react";
import './headline.css'
import HeadlineItems from './headlineItems'

const Headline = props => {
    const headlineData = props.data.map((meal, index) => {
        const strTitle = Object.keys(meal);
        const headlineTitle = `meal.${strTitle}`;
        
        return (
            <HeadlineItems
                key={index}
                type={`${strTitle}`}
                title={eval(headlineTitle)}
                pos={meal == props.data[0] ? "carousel-item active" : "carousel-item"}
                txtalign='carousel-caption texst-left'
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
            </a>
            <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>

            </a>
        </div>
    )
}

export default Headline;