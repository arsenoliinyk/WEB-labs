import React from "react";
import { Card, Button } from "antd";
import { Body, Footer } from "./CardItem.styled";

const { Meta } = Card;

const CardItem = ({ id, title = 'No title.', num_of_passangers, imageSrc, max_speed }) => (
    <Card
        hoverable
        style={{ width: 350, borderRadius: "20px" }}
        cover={
            <img style={{ borderRadius: "20px", borderTop: "1px solid grey",borderBottom: "1px solid grey" }} alt={title} src={imageSrc} />
        }
    >
        <Meta title={title} style={{ textAlign: "center" }} />
        <Body>
            <p>Num Of Passangers: {num_of_passangers}</p>
            <p>Maximal Speed: {max_speed}</p>
        </Body>
        <Footer>
            <Button>Show More</Button>
        </Footer>
    </Card>
);

export default CardItem;