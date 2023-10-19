import { useContextSelector } from 'use-context-selector'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { PostCard } from '../../components/Post'
import { Profile } from '../../components/Profile'
import { HederPublish, HomeContainer } from './styles'
import { GithubBlogContext } from '../../contexts/GithubBlogContext'
import { useEffect } from 'react'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function Home() {
  const profile = useContextSelector(GithubBlogContext, (context) => {
    if (context.load === false) {
      return context.profile
    }
  })

  const posts = useContextSelector(GithubBlogContext, (context) => {
    if (context.loadPost === false) {
      return context.posts
    }
  })

  const fetchPosts = useContextSelector(GithubBlogContext, (context) => {
    return context.fetchPosts
  })

  const { register, watch } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  const query = watch('query')

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    fetchPosts(query)
  }, [fetchPosts, query])

  return (
    <HomeContainer>
      <Profile
        avatar_url={profile?.avatar_url}
        name={profile?.name}
        url={profile?.url}
        bio={profile?.bio}
        login={profile?.login}
        company={profile?.company}
        followers={profile?.followers}
      />
      <HederPublish>
        <h1>Publicações</h1>
        <p>{posts?.length !== 0 ? posts?.length : 0} publicações</p>
      </HederPublish>
      <input placeholder="Buscar conteúdo" {...register('query')} />
      {posts?.length !== 0
        ? posts?.map((post) => (
            <PostCard
              key={post.number}
              number={post.number}
              title={post.title}
              created_at={post.created_at}
              body={post.body.substring(0, 200)}
            />
          ))
        : ''}
    </HomeContainer>
  )
}
