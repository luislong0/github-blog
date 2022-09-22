import styled from "styled-components";
import { mediaQueries } from "../../styles/mediaQueires";

export const PostContainer = styled.main`
    width: 55rem;
    margin: 0 auto;
    padding-bottom: 5rem;

    ${mediaQueries('md')`
        width: 100%;
    `}
`