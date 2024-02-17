import React from "react";
import { CDN_URL } from "../utils/constants.js";

const RestarauntCard = (props) => {

    const { resData } = props;
    const { cloudinaryImageId, name, cuisines, costForTwo, avgRating } = resData?.info;

    return (
        <div className="res-card">
            <img className="res-logo" alt="restaraunt Logo" src={CDN_URL + cloudinaryImageId} />
            <h5>{name}</h5>
            <h5>{cuisines.join(", ")}</h5>
            <h5>{costForTwo}</h5>
            <h5>{avgRating}</h5>
        </div>
    );
}

export default RestarauntCard;