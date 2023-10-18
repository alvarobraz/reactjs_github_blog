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

interface PropsPostInfo {
  url: string
  title: string
  login: string
  date: string
  comments: string
}

export function PostInfo({ url, title, login, date, comments }: PropsPostInfo) {
  return (
    <PostInfoContainer>
      <div>
        <div>
          <NavLink to="/">
            <FontAwesomeIcon icon={faChevronLeft} />
            VOLTAR
          </NavLink>
          <GitHubLink>
            <a href={url} target="_blank" rel="noreferrer">
              GITHUB
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          </GitHubLink>
        </div>
        <h1>{title}</h1>
        <div>
          <p>
            <FontAwesomeIcon icon={faLink} />
            {login}
          </p>
          <p>
            <FontAwesomeIcon icon={faCalendarDay} />
            Há {date} dia
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
