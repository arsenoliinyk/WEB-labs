import React from "react";
import Helicopter from "../../Icons/helicopter.jpg";
import {
    SectionWrapper,
    StyledText,
    StyledButton,
    CardWrapper,
    } from "./Home.styled";
    import CardItem from "../../components/CardItem/CardItem";

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
    num_of_passangers:22,
    image: Helicopter,
    max_speed: 540,
},
{
    id: 3,
    title: "Sikorsky HH-60 Pave Hawk",
    num_of_passangers:15,
    image: Helicopter,
    max_speed: 1610,
},
];

const Home = () => {
    return (
        <div>
        <SectionWrapper> 
            <img alt="Intro" src={Helicopter}/>
            <StyledText>
            <h1>Admire stylish Dresses & Looks</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
                scelerisque tristique neque, eget facilisis purus consequat sit
                amet. Nulla iaculis felis eget rutrum blandit. Morbi volutpat sapien
                eget odio gravida, eu placerat erat eleifend. Aliquam erat volutpat.
                Quisque sed tincidunt felis. Sed bibendum
            </p>
            <StyledButton size="medium">Show More</StyledButton>
            </StyledText>
        </SectionWrapper>
        <CardWrapper>
                {data.map(({ title, num_of_passangers, image, max_speed }, idx) => (
            <CardItem
                title={title}
                num_of_passangers={num_of_passangers}
                imageSrc={image}
                max_speed={max_speed}
                key={idx}
            />
            ))}
        </CardWrapper>
        </div>
    );
};

export default Home;