import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GithubDataContext } from "../../contexts/GithubDataContext";
import { PostCard } from "./components/PostCard";
import { Profile } from "./components/Profile";
import { SearchForm } from "./components/SearchForm";
import { CofferCardsContainer } from "./styles";


interface IssuesArrayData {
    id:number
    title:string
    body:string
} 


export function Blog() {
    
    const { issuesArray, fetchSelectedIssue } = useContext(GithubDataContext);

    function handleEnterPost(number: number) {
        fetchSelectedIssue(String(number))
    }
    
    return (
        <>
            <Profile />
            <SearchForm />
            <CofferCardsContainer>
                {
                    issuesArray.map(issueArray => {
                    return (
                        <NavLink to="/post" onClick={() => handleEnterPost(issueArray.number)} title="Post">
                            <PostCard 
                                key={issueArray.id}
                                title={issueArray.title}
                                body={issueArray.body}
                                date={issueArray.created_at}
                            />
                        </NavLink>

                    )
                })}

            </CofferCardsContainer>
        </>
    )
}