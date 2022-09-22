import styled from "styled-components";
import headerImg from "../../assets/header.svg";
import { mediaQueries } from "../../styles/mediaQueires";

export const HeaderContainer = styled.header`
    background-image: url(${headerImg});
    width: 100%;
    height: 350px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    img {
        width: 100%;
    }
`