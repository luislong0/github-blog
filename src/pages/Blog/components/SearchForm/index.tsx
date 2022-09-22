import { PostsCountContainer, SearchFormContainer } from "./styles";

import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { GithubDataContext } from "../../../../contexts/GithubDataContext";

const searchFormSchema = z.object({
    query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SearchForm() {

    const { fetchIssuesGit, issuesGitData } = useContext(GithubDataContext);

    const {
        register,
        handleSubmit,
        formState: { isSubmitting },
      } = useForm<SearchFormInputs>({
        resolver: zodResolver(searchFormSchema),
      })

    function handleSearchGitData(data: SearchFormInputs) {
        const query = `${data.query}`
        fetchIssuesGit(query)
      }

    return (
        <SearchFormContainer>
            <PostsCountContainer>
                <span>Publicações</span>
                <span>{issuesGitData.total_count} publicações</span>
            </PostsCountContainer>
            <form onSubmit={handleSubmit(handleSearchGitData)}>
                <input 
                    type="text" 
                    placeholder="Buscar conteúdo"
                    {...register('query')}
                />
            </form>
        </SearchFormContainer>
    )
}