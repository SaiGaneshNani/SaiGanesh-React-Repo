import React, { useEffect, useState } from "react";
import RestarauntCard from "./RestarauntCard";
import Shimmer from "./shimmer";

const Body = () => {

    const [listOfRestaurants, setlistOfRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.37240&lng=78.43780&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const jsonData = await data.json();
        console.log(jsonData);

        setlistOfRestaurants(jsonData?.data?.cards[4]?.card?.card?.
            gridElements?.infoWithStyle?.restaurants
        );
        setFilteredRestaurant(jsonData?.data?.cards[4]?.card?.card?.
            gridElements?.infoWithStyle?.restaurants);
    }

    useEffect(() => {
        fetchData();
    }, []);

    return listOfRestaurants.length === 0 ? (
        <Shimmer />
    ) : (
        <div className="body">
            <div className="filter-btn">
                <div className="search-div">
                    <input
                        type="text"
                        value={searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value);
                        }}
                    ></input>
                    <button
                        onClick={() => {
                            const filteredRestaurant = listOfRestaurants.filter
                                ((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                            setFilteredRestaurant(filteredRestaurant);
                        }}
                    >Search
                    </button>
                </div>
                <button onClick={() => {
                    const filteredList = listOfRestaurants.filter((restaruant) => restaruant.info.avgRating > 4);
                    setlistOfRestaurants(filteredList);
                }}>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {filteredRestaurant.map((restaruant) => (
                    <RestarauntCard key={restaruant.info.id} resData={restaruant} />
                ))}
            </div>
        </div>
    );
}

export default Body;