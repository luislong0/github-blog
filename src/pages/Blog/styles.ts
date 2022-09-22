import styled from "styled-components";
import { mediaQueries } from "../../styles/mediaQueires";

export const CofferCardsContainer = styled.main`    
    width: 55rem;
    margin: 0 auto;
    padding-bottom: 5rem;

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 3rem;

    a {
        text-decoration: none;
        border: 2px solid transparent;
        border-radius: 10px;

        transition: all ease-out 0.2s;

        overflow: hidden;

        &:hover {
            border: 2px solid ${props => props.theme["base-label"]};
        }
    }

    ${mediaQueries('md')`
        width: 90%;
        display: flex;
        flex-direction: column;
    `}
`