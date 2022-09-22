import { ArrowSquareOut, Buildings, Users } from "phosphor-react";
import { InformationContainer, ProfileContainer, SocialInfo, TitleContainer } from "./styles";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { useContext } from "react";
import { GithubDataContext } from "../../../../contexts/GithubDataContext";

export function Profile() {

    const { gitHubData } = useContext(GithubDataContext);

    return (
        <ProfileContainer>
            <img src={gitHubData.avatar_url} alt="" />
            <InformationContainer>
                <TitleContainer>
                    <h1>{gitHubData.name}</h1>
                    <a href="https://github.com/luislong0">
                        github 
                        <ArrowSquareOut size={14} weight="bold"/>
                    </a>
                </TitleContainer>
                <p>{gitHubData.bio}</p>
                <SocialInfo>
                    <span>
                        <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                        {gitHubData.login}
                    </span>
                    <span>
                        <Buildings size={22} weight="bold" />
                        Rocketseat
                    </span>
                    <span>
                        <Users size={22} weight="bold" />
                        {gitHubData.followers} {gitHubData.followers < 2 ? "seguidor" : "seguidores"}
                    </span>
                </SocialInfo>
            </InformationContainer>
        </ProfileContainer>
    )
}