import React from "react";
import { StyledHeader, IconsWrapper } from "./Layout.styles";
import Helicopter from "../../../Icons/helicopter.jpg";
import {
    TwitterOutlined,
    SearchOutlined,
    ShoppingCartOutlined,
    InstagramOutlined,
    FacebookOutlined,
} from "@ant-design/icons";

const Layout = () => (
    <StyledHeader title="Helicopter">
        <div>
            <img alt="Logo" src={Helicopter} style={{ width: "100px" }} />
            <p>Helicopter</p>
        </div>
        <div>
        <IconsWrapper>
            <TwitterOutlined />

            <FacebookOutlined />

            <InstagramOutlined />
        </IconsWrapper>
        </div>
        <div>
        <IconsWrapper>
            <SearchOutlined />

            <ShoppingCartOutlined />
        </IconsWrapper>
        </div>
    </StyledHeader>
);

export default Layout;