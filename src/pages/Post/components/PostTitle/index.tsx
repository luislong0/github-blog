import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { formatDistanceToNow, formatDistanceToNowStrict, formatISO } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

import moment from "moment";
import { ArrowSquareOut, CalendarBlank, CaretLeft, ChatCircle } from "phosphor-react";

import { NavLink } from "react-router-dom";

import { ContentContainer, InfoContainer, PostTitleContainer, TitleContainer } from "./styles";

interface TitleProps {
    title: string;
    git: string;
    created_at: Date;
    comments: number
    htmlUrl: string
}


export function PostTitle(props: TitleProps) {

    const formattedDate = moment(props.created_at).format()

    return (
        <PostTitleContainer>
            <TitleContainer>
                <NavLink to="/" title="back">
                    <CaretLeft size={16} />
                    Voltar
                </NavLink>
                <a href={props.htmlUrl}>
                    Ver No Github
                    <ArrowSquareOut size={16} />
                </a>
            </TitleContainer>
            <ContentContainer>
                <span>{props.title}</span>
                <InfoContainer>
                    <span>
                        <FontAwesomeIcon icon={faGithub} />
                        {props.git}
                    </span>

                    <span>
                        <CalendarBlank weight="bold" />
                        {formatDistanceToNowStrict(new Date( String(formattedDate)), 
                        {
                            addSuffix: true,
                            locale: ptBR,
                        })}
                        {/* {formattedDate} */}
                    </span>

                    <span>
                        <ChatCircle weight="bold" />
                        {props.comments} comentários
                    </span>
                </InfoContainer>
            </ContentContainer>
        </PostTitleContainer>
    )
}