import styled from "styled-components";

export const DescriptionContainer = styled.main`
    display: flex;
    flex-direction: column;
  
    padding: 2rem;

    p {
        
        color: ${props => props.theme["base-text"]};
        margin-bottom: 2rem;

        &:first-child {
            margin-top: 1rem;
        }
    }

    a { 
        margin-top: 1rem;

        display: flex;
        color: ${props => props.theme.blue};
    }

    h3 {
        color: ${props => props.theme["base-text"]}; 
        font-size: 1.25rem;
        margin-bottom: 0.5rem;
    }

    ul {
        display: flex;
        flex-direction: column;

        font-size: 1rem;

        gap: 0.5rem;
        padding: 1rem;
        width: 100%;

        background-color: ${props => props.theme["base-post"]};
        color: ${props => props.theme["base-text"]}; 

        border-radius: 5px;

        list-style: none;

        li {

            gap: 1rem;

            em {
                margin-left: 2rem;
                color: ${props => props.theme["gray-code"]}
            }

            &:nth-child(1) {
                    strong {

                    &:nth-of-type(1) {
                        color: ${props => props.theme["blue-code"]};
                    }

                    &:nth-of-type(2) {
                        color: ${props => props.theme["green-code"]};
                    }

                } 
            }

            &:nth-child(2) {
                    strong {

                    &:nth-of-type(1) {
                        color: ${props => props.theme["green-code"]};
                    }  
                } 
            }

            &:nth-child(3) {
                    strong {

                    &:nth-of-type(1) {
                        color: ${props => props.theme["green-code"]};
                    }  
                } 
            }

        }
    }
`