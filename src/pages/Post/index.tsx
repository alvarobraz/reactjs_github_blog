import { useParams } from 'react-router-dom'
import { PostInfo } from '../../components/PostInfo'
import { PostContainer } from './styles'
import { useContextSelector } from 'use-context-selector'
import { GithubBlogContext } from '../../contexts/GithubBlogContext'
import { useEffect } from 'react'
import ReactMarkdown from 'react-markdown'

export function Post() {
  const { id } = useParams()

  const fetchPostId = useContextSelector(GithubBlogContext, (context) => {
    return context.fetchPostId
  })

  const postId = useContextSelector(GithubBlogContext, (context) => {
    if (context.loadPostId === false) {
      return context.postId
    }
  })

  useEffect(() => {
    fetchPostId(id)
  }, [fetchPostId, id])

  return (
    <PostContainer>
      <PostInfo
        html_url={postId?.html_url}
        title={postId?.title}
        user={postId?.user}
        created_at={postId?.created_at}
        comments={postId?.comments}
      />
      <div>
        <ReactMarkdown>
          {String(postId?.body).replace(/\s$/g, '')}
        </ReactMarkdown>
      </div>
    </PostContainer>
  )
}
