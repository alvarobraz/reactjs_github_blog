/* eslint-disable camelcase */
import { NavLink } from 'react-router-dom'
import { PostInfoContainer } from './styles'
import { GitHubLink } from '../Profile/styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faArrowUpRightFromSquare,
  faLink,
  faCalendarDay,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { PropsPostInfo } from '../../contexts/GithubBlogContext'

export function PostInfo({
  html_url,
  title,
  user,
  created_at,
  comments,
}: PropsPostInfo) {
  return (
    <PostInfoContainer>
      <div>
        <div>
          <NavLink to="/">
            <FontAwesomeIcon icon={faChevronLeft} />
            VOLTAR
          </NavLink>
          <GitHubLink>
            <a href={html_url} target="_blank" rel="noreferrer">
              GITHUB
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          </GitHubLink>
        </div>
        <h1>{title}</h1>
        <div>
          <p>
            <FontAwesomeIcon icon={faLink} />
            {user?.login}
          </p>
          <p>
            <FontAwesomeIcon icon={faCalendarDay} />
            {Number(created_at) === 0
              ? `Hoje`
              : Number(created_at) > 1
              ? `Há ${created_at} dias`
              : `Há ${created_at} dia`}
          </p>
          <p>
            <FontAwesomeIcon icon={faComment} />
            {comments} comentários
          </p>
        </div>
      </div>
    </PostInfoContainer>
  )
}
