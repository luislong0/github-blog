import styled from "styled-components";
import { mediaQueries } from "../../../../styles/mediaQueires";

export const SearchFormContainer = styled.div`
    display: flex;
    flex-direction: column;
    
    width: 55rem;
    margin: 5rem auto 2rem;

    input[type="text"] {
        width: 55rem;
        padding: 1rem;
        margin-top: 1rem;
        margin-bottom: 1.5rem;

        color: ${props => props.theme["base-subtitle"]};
        font-size: 1rem;

        background-color: ${props => props.theme["base-input"]};
        border: 1px solid ${props => props.theme["base-border"]};
        border-radius: 6px;

        &::placeholder {
            color: ${props => props.theme["base-label"]};
            letter-spacing: 1px;
        }

        ${mediaQueries('md')`
            width: 100%;
            margin: 2rem auto;
        `}
    }

    ${mediaQueries('md')`
        width: 90%;
        margin: 3rem auto 0;
    `}
`

export const PostsCountContainer = styled.div`
    display: flex;
    align-items: center;

    justify-content: space-between;

    span {

        &:first-child {
            font-size: 1.125rem;
            color: ${props => props.theme["base-subtitle"]};
            font-weight: 700;
        }

        &:last-child {
            display: flex;
            margin-top: 2px;

            font-size: 0.875rem;
            color: ${props => props.theme["base-span"]};
        }
    }
    
    
`