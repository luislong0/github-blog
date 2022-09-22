import ReactMarkdown from "react-markdown";
import { CoffeeCardContainer, TitleContainer } from "./styles";


import remarkGfm from "remark-gfm";
import { formatDistanceToNow } from "date-fns";
import ptBR from 'date-fns/locale/pt-BR'


interface PostCardProps {
    title: string;
    body: string;
    date: any;
}

export function PostCard(props: PostCardProps) {

    const convertBody = props.body.substr(0, 112).concat('...');

    return (
        <CoffeeCardContainer>
            <TitleContainer>
                <span>{props.title}</span>
                <span>
                    {formatDistanceToNow(new Date(props.date), {
                      addSuffix: true,
                      locale: ptBR,
                    })}
                </span>
            </TitleContainer>
            <ReactMarkdown 
                children={convertBody} 
                remarkPlugins={[remarkGfm]} 
            />
        </CoffeeCardContainer>
    )
}