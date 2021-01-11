import React from "react";
import Feature from "../feature";
import Highlight from "../highlight";

const Main = () => {
    return (
        <div className="container marketing">
            <hr className="featurette-divider" />
            <Feature />

            <hr className="featurette-divider" />
            <Feature order="col-md-7 order-md-2" />

            <hr className="featurette-divider" />
            <Feature />

            <hr className="featurette-divider" />

            <div className="row">
                <Highlight />
                <Highlight />
                <Highlight />
            </div>
        </div>
    )
}

export default Main;