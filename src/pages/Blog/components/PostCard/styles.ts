import styled from "styled-components";
import { mediaQueries } from "../../../../styles/mediaQueires";

export const CoffeeCardContainer = styled.div`

    width: 416px;
    height: 260px;

    padding: 2rem;

    overflow: hidden;
    


    background-color: ${props => props.theme["base-post"]};
    border-radius: 10px;

    p { 

        margin-top: 1.5rem;
        color: ${props => props.theme["base-text"]};
        line-height: 1.6;
    }

    ${mediaQueries('md')`
        width: 100%;
        margin: 0 auto;
    `}

    
`

export const TitleContainer = styled.div`

    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: flex-start;

    span {
        &:first-child {
            width: 70%;

            font-size: 1.25rem;
            font-weight: 700;
            color: ${props => props.theme["base-title"]};

            line-height: 1.6;
        }

        &:last-child {
            display: flex;

            align-items: flex-end;
            justify-content: flex-end;
            text-align: end;

            width: 20%;
            display: flex;
            margin-top: 0.32rem;

            font-size: 0.875rem;

            color: ${props => props.theme["base-span"]};
        }
    }
`