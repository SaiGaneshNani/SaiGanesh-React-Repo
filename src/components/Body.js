import React, { useState } from "react";
import RestarauntCard from "./RestarauntCard";
import { resList } from "../utils/mockdata";

const Body = () => {

    const [listOfRestaurants, setlistOfRestaurants] = useState(resList);

    return (
        <div className="body">
            <div className="filter-btn">
                <button onClick={() => {
                    const filteredList = listOfRestaurants.filter((restaruant) => restaruant.info.avgRating > 4);
                    setlistOfRestaurants(filteredList);
                }}>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {listOfRestaurants.map((restaruant) => (
                    <RestarauntCard key={restaruant.id} resData={restaruant} />
                ))}
            </div>
        </div>
    );
}

export default Body;