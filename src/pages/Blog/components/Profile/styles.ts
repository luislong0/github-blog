import styled from "styled-components";
import { mediaQueries } from "../../../../styles/mediaQueires";

export const ProfileContainer = styled.div`
    display: flex;

    padding: 2rem;
    gap: 2rem;
    
    max-width: 55rem;
    margin: -6rem auto 0 ;

    border-radius: 10px;

    background-color: ${props => props.theme["base-profile"]};

    box-shadow: 0px 5px 10px 3px rgba(0,0,0,0.3);

    img {
        height: 9.25rem;
        width: 9.25rem;

        border-radius: 8px;

        ${mediaQueries('md')`
            display: flex;
            margin: 0 auto;
        `}
    }

    ${mediaQueries('md')`
        max-width: 100%;
        flex-direction: column;
        text-align: center;
    `}
`

export const InformationContainer = styled.div`
    display: flex;
    flex-direction: column;

    justify-content: space-between;

    p {
        display: flex;
        margin-top: -1.5rem;

        color: ${props => props.theme["base-text"]};

        ${mediaQueries('md')`
            display: flex;
            margin: 0 auto;
        `}
     
    }

    ${mediaQueries('md')`
        gap: 3rem;
    `}

`

export const TitleContainer = styled.div`
    display: flex;
    width: 39rem;
    justify-content: space-between;
    align-items: center;

    
    h1 {
        font-size: 24px;
        font-weight: 700;

        color: ${props => props.theme["base-title"]};
    }

    a { 
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.2rem;

        margin-top: -0.7rem;
        padding-bottom: 3px;

        border-bottom: 1px solid transparent;

        font-size: 12px;
        text-transform: uppercase;
        font-weight: 700;
        text-decoration: none;
        color: ${props => props.theme.blue};

        transition: all ease-out 0.2s;

        &:hover {
            border-bottom: 1px solid ${props => props.theme.blue};
        }

        svg {
            margin-top: -2px;
        }
        
    }
    ${mediaQueries('md')`
        max-width: 80%;
        flex-direction: column;
        gap: 1rem;
        margin: 0 auto;
    `}
`

export const SocialInfo = styled.div`
    display: flex;
    align-items: center;

    gap: 2rem;
    
    color: ${props => props.theme["base-subtitle"]};

    span {
        display: flex;
        align-items: center;
        gap: 0.5rem;

        transition: all ease-out 0.2s;

        &:hover {
            transform: scale(1.1);

        }
    }

    svg {
        height: 22px;
        color: ${props => props.theme["base-label"]};
    }

    ${mediaQueries('md')`
        gap: 1rem;
        margin: 0 auto;
    `}
`