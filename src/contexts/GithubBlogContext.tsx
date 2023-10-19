import { ReactNode, useCallback, useEffect, useState } from 'react'
import { createContext } from 'use-context-selector'
import { api } from '../lib/axios'
import { differenceInDays } from 'date-fns'

export interface PropsProfile {
  avatar_url?: string
  name?: string
  url?: string
  bio?: string
  login?: string
  company?: string
  followers?: number
}

export interface PropsPost {
  number?: number
  title: string
  created_at: string
  body?: string
  children: React.ReactNode
}

export interface PropsPostInfo {
  html_url?: string
  title?: string
  user?: {
    login?: string
  }
  created_at?: string
  comments?: string
  body?: string
}

interface GithubBlogContextType {
  load: boolean
  fetchProfile: () => Promise<void>
  profile: PropsProfile | undefined
  loadPost: boolean
  fetchPosts: (query?: string) => Promise<void>
  posts: PropsPost[] | undefined
  loadPostId: boolean
  fetchPostId: (id?: string) => Promise<void>
  postId: PropsPostInfo | undefined
}

interface GithubBlogProviderProps {
  children: ReactNode
}

export const GithubBlogContext = createContext({} as GithubBlogContextType)

export function GithubBlogProvider({ children }: GithubBlogProviderProps) {
  const [load, setLoad] = useState<boolean>(false)
  const [profile, setProfile] = useState<PropsProfile | undefined>()
  const [loadPost, setLoadPosts] = useState<boolean>(false)
  const [posts, setPosts] = useState<PropsPost[] | undefined>([])
  const [loadPostId, setLoadPostId] = useState<boolean>(false)
  const [postId, setPostId] = useState<PropsPostInfo | undefined>()

  const fetchProfile = useCallback(async () => {
    setLoad(true)
    const response = await api.get('users/alvarobraz')
    // setTimeout(() => {}, 500)
    setLoad(false)
    setProfile(response.data)
    // console.log('response.data - > ' + JSON.stringify(response.data))
  }, [])

  const fetchPosts = useCallback(async (query?: string) => {
    setLoadPosts(true)
    if (query !== undefined) {
      const response = await api.get(
        `search/issues?q=%20${query}%20repo:alvarobraz/reactjs_github_blog`,
        {
          params: {
            _sort: 'createdAt',
            _order: 'desc',
            page: 0,
            limit: 999,
            name: query,
          },
        },
      )

      if (response.data.items.length !== 0) {
        const formattedPosts = response.data.items.map(
          (post: { created_at: string | number | Date }) => ({
            ...post,
            created_at: differenceInDays(new Date(), new Date(post.created_at)),
          }),
        )
        setLoadPosts(false)
        setPosts(formattedPosts)
      }
    } else {
      const response = await api.get(
        'repos/alvarobraz/reactjs_github_blog/issues',
        {
          params: {
            _sort: 'createdAt',
            _order: 'desc',
            page: 0,
            limit: 999,
            name: query,
          },
        },
      )

      const formattedPosts = response.data.map(
        (post: { created_at: string | number | Date }) => ({
          ...post,
          created_at: differenceInDays(new Date(), new Date(post.created_at)),
        }),
      )

      setLoadPosts(false)
      setPosts(formattedPosts)
    }
  }, [])

  const fetchPostId = useCallback(async (id?: string) => {
    setLoadPostId(true)
    const response = await api.get(
      `repos/alvarobraz/reactjs_github_blog/issues/${id}`,
    )
    // console.log('response.data -> ' + response.data)
    response.data.created_at = differenceInDays(
      new Date(),
      new Date(response.data.created_at),
    )

    setLoadPostId(false)
    setPostId(response.data)
  }, [])

  useEffect(() => {
    fetchProfile()
    fetchPosts()
  }, [fetchProfile, fetchPosts])

  return (
    <GithubBlogContext.Provider
      value={{
        load,
        fetchProfile,
        profile,
        loadPost,
        fetchPosts,
        posts,
        loadPostId,
        fetchPostId,
        postId,
      }}
    >
      {children}
    </GithubBlogContext.Provider>
  )
}
