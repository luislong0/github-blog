import { useContext } from "react";
import { GithubDataContext } from "../../contexts/GithubDataContext";
import { PostDescription } from "./components/PostDescription";
import { PostTitle } from "./components/PostTitle";
import { PostContainer } from "./styles";

export function Post() {

    const { selectedIssue } = useContext(GithubDataContext);
    
    return (
        <PostContainer>
            <PostTitle 
                title={selectedIssue.title}
                git={selectedIssue.user.login}
                created_at={selectedIssue.created_at}
                comments={selectedIssue.comments}
                htmlUrl={selectedIssue.html_url}
            />
            <PostDescription 
                body={selectedIssue.body}
            />
            {/* <PostCode /> */}
        </PostContainer>
    )
}