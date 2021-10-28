import React from "react";
import Helicopter from "D:/Arsen/2 course/WEB/lab_6/my-app/src/Icons/helicopter.jpg";
import { Wrapper, IconsWrapper, VerticalLine, LogoWrapper, StyledText, IconBase } from "./Footer.styled";
import {
    TwitterOutlined,
    InstagramOutlined,
    LinkedinOutlined,
    YoutubeOutlined,
    AliwangwangOutlined
    } from "@ant-design/icons";

    const Footer = () => {
    return (
        <Wrapper>
        <LogoWrapper>
            <img alt="Logo" src={Helicopter} style={{ width: "100px" }}/>
            <h1>Helicopter</h1>
        </LogoWrapper>
        <p>Helicopters are interesting <br />Every flight is specially.</p>
        <VerticalLine />
        <IconsWrapper>
            <IconBase component={YoutubeOutlined} color='#FF0000'/>
            <IconBase component={TwitterOutlined} color='#03A9F4' />
            <IconBase component={LinkedinOutlined} color='#007AB9'/>
            <IconBase component={InstagramOutlined} color='#3A9F4'/>
        </IconsWrapper>
        <VerticalLine />
        <StyledText>© Helicopter all rights reserved</StyledText>
        </Wrapper>
    );
};

export default Footer;