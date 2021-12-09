import React from "react";
import Helicopter from "../../Icons/helicopter.jpg";
import CardItem from "../../components/CardItem/CardItem";
import {
    CardWrapper,
} from "./Catalog.styled";
import FilterBar from "../FilterBar/FilterBar";


const data = [
    {
        id: 1,
        title: "Lockheed AH-56 Cheyenne",
        num_of_passangers: 31,
        image: Helicopter,
        max_speed: 715,
    },
    {
        id: 2,
        title: "Sikorsky UH-60 Black Hawk",
        num_of_passangers: 22,
        image: Helicopter,
        max_speed: 540,
    },
    {
        id: 3,
        title: "Sikorsky HH-60 Pave Hawk",
        num_of_passangers: 15,
        image: Helicopter,
        max_speed: 1610,
    },

    {
        id: 5,
        title: "Cargo helicopter",
        num_of_passangers: 13,
        image: Helicopter,
        max_speed: 900,
    },
];

const Catalog = () =>{
    return (
        <div>
            <FilterBar />
            <CardWrapper>
                {data.map(({ title, num_of_passangers, image, max_speed , id}, idx) => (
                    <CardItem
                        title={title}
                        num_of_passangers={num_of_passangers}
                        imageSrc={image}
                        max_speed={max_speed}
                        key={id}
                    />
                ))}
            </CardWrapper>
        </div>
    );
}

export default Catalog;