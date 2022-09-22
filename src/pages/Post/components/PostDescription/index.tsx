import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { DescriptionContainer } from "./styles";

interface DescriptionProps {
    body: string
}

export function PostDescription(props: DescriptionProps) {
    return (
        <DescriptionContainer>
            <ReactMarkdown 
                children={props.body} 
                remarkPlugins={[remarkGfm]} 
            />
        </DescriptionContainer>
    )
}