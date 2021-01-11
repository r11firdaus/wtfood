import React from "react";
import { useHistory } from "react-router-dom";

const HeadlineItems = props => {
    const history = useHistory();
    const dataClilked = title => {
        const typePath = props.type.split('str');
        let urlPath = typePath[1].toLowerCase()
        history.push(`/result/${urlPath}/${title}`)
    }
    return (
        <div className={props.pos ? props.pos:"carousel-item"}>
            <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" role="img" focusable="false"><rect width="100%" height="100%" fill="#a2bcff" /></svg>

            <div className="container">
                <div className={props.txtalign ? props.txtalign:'carousel-caption'}>
                    <h1>{props.title}</h1>
                    <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                    <p><button className="btn btn-lg btn-primary" onClick={() => dataClilked(props.title)} role="button">Learn more</button></p>
                </div>
            </div>
        </div>
    )
}

export default HeadlineItems;