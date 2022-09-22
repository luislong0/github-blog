import styled from "styled-components";
import { mediaQueries } from "../../../../styles/mediaQueires";

export const PostTitleContainer = styled.div`
    display: flex;
    flex-direction: column;
  
    padding: 2rem;
    gap: 1rem;
    
    margin: -6rem auto 0 ;

    border-radius: 10px;

    background-color: ${props => props.theme["base-profile"]};

    box-shadow: 0px 5px 10px 3px rgba(0,0,0,0.3);
`

export const TitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    
    color: ${props => props.theme.blue};

    span {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }

    a {
        display: flex;
        align-items: center;
        gap: 0.5rem;

        border-bottom: 1px solid transparent;
        transition: all ease-out 0.2s;

        text-decoration: none;
        color: ${props => props.theme.blue};

        &:hover {
            border-bottom: 1px solid ${props => props.theme.blue};
        }

        svg {
            &:last-child {
                margin-top: -3px;

                ${mediaQueries('md')`
                    margin-top: -3.2px;
                `}
            }
        }
    }
`

export const ContentContainer = styled.div`
    margin-top: 0.5rem;
    
    font-size: 1.5rem;
    color: ${props => props.theme["base-title"]};
    font-weight: 700;

    ${mediaQueries('md')`
        margin: 0 auto;
    `}
`

export const InfoContainer = styled.div`
    display: flex;
    align-items: center;
    margin-top: 1rem;

    gap: 2rem;

    font-size: 1rem;
    color: ${props => props.theme["base-span"]};
    font-weight: normal;

    ${mediaQueries('md')`
        justify-content: center;
        align-items: center;
        text-align: center;
    `}

    span {
        display: flex;
        align-items: center;

        gap: 0.5rem;
    }

    svg {
        color: ${props => props.theme["base-label"]};
        height: 1.125rem;
        width: 1.125rem;
    }
`