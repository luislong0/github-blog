import { createContext, ReactNode, useCallback, useEffect, useState } from "react"
import { api } from "../lib/axios";

interface UserData {
    avatar_url: string;
    name: string;
    bio: string;
    login: string;
    followers: number;
}

interface GitCardsProps {
    key: number;
    items: IssuesArrayData[];
    title: string;
    body: string;
    date?: Date;
    total_count: number;
}

interface SelectedIssueProps {
  title: string,
  user: {
    login: string;
  },
  created_at: Date,
  comments: number,
  body:string,
  html_url: string,
}

interface IssuesArrayData {
  number: number;
  id: string;
  title: string;
  body: string;
  created_at: Date;
}

interface GithubDataContextType {
    gitHubData: UserData
    issuesGitData: GitCardsProps
    issuesArray: IssuesArrayData[]
    selectedIssue: SelectedIssueProps
    fetchIssuesGit: (query?: string) => Promise<void>
    fetchSelectedIssue: (query?: string) => Promise<void>
  }
  
  interface TransactionsProviderProps {
    children: ReactNode;
  }

export const GithubDataContext = createContext({} as GithubDataContextType)

export function GithubDataContextProvider({ children }: TransactionsProviderProps) {

  const [gitHubData, setGitHubData] = useState({
    avatar_url: '',
    name: '',
    bio: '',
    login: '',
    followers: 0,
  }
  )

  const [issuesGitData, setIssuesGitData] = useState<GitCardsProps>({
    key: 0,
    items: [],
    title: '',
    body: '',
    total_count: 0,
  });

  const [selectedIssue, setSelectedIssue] = useState({
    title: '',
    user: {
      login: '',
    },
    created_at: new Date(),
    comments: 0,
    body: '',
    html_url: ''
  })

  const fetchGitHubData = useCallback(async (query?: string) => {
    const response = await api.get('/users/luislong0', {
    })


    setGitHubData(response.data)
  }, [])

  const issuesArray: IssuesArrayData[] = issuesGitData.items;


  async function fetchIssuesGit(query?: string) {
    const response = await api.get(`/search/issues?q=${query}%20repo:luislong0/github-blog`)

    setIssuesGitData(response.data)
  }

  async function fetchSelectedIssue(query?: string) {
    const response = await api.get(`/repos/luislong0/github-blog/issues/${query}`)

    setSelectedIssue(response.data)
  }

useEffect(() => {
  fetchIssuesGit('')
}, [])

  useEffect(() => {
    fetchGitHubData()
}, [fetchGitHubData])

  return (
    <GithubDataContext.Provider
      value={{
        gitHubData,
        issuesGitData,
        issuesArray,
        fetchIssuesGit,
        fetchSelectedIssue,
        selectedIssue,
      }}
    >
      {children}
    </GithubDataContext.Provider>
  )
}