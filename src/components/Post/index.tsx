/* eslint-disable camelcase */
import { NavLink } from 'react-router-dom'
import { PropsPost } from '../../contexts/GithubBlogContext'
import { PostContainer } from './styles'

export function PostCard({ number, title, created_at, body }: PropsPost) {
  return (
    <NavLink to="/">
      <PostContainer>
        <NavLink to={`post/${number}`}>
          <div>
            <h1>{title}</h1>
            <p>
              {Number(created_at) === 1
                ? `Há ${Number(created_at)} dia`
                : Number(created_at) > 1
                ? `Há ${Number(created_at)} dias`
                : `Hoje`}
            </p>
          </div>
          <p>{body}</p>
        </NavLink>
      </PostContainer>
    </NavLink>
  )
}
