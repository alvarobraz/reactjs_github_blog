/* eslint-disable camelcase */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faLink,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { GitHubLink, ProfileContainer } from './styles'
import { PropsProfile } from '../../contexts/GithubBlogContext'

export function Profile({
  // eslint-disable-next-line camelcase
  avatar_url,
  name,
  bio,
  login,
  company,
  followers,
}: PropsProfile) {
  return (
    <ProfileContainer>
      <img src={avatar_url} alt="Avatar" />
      <div>
        <div>
          <h1>{name}</h1>
          <GitHubLink>
            <a
              href={`https://github.com/${login}`}
              target="_blank"
              rel="noreferrer"
            >
              GITHUB
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          </GitHubLink>
        </div>
        <div>
          <p>{bio}</p>
        </div>
        <div>
          <p>
            <FontAwesomeIcon icon={faLink} />
            {login}
          </p>
          <p>
            <FontAwesomeIcon icon={faBuilding} />
            {company}
          </p>
          <p>
            <FontAwesomeIcon icon={faUserGroup} />
            {followers} seguidores
          </p>
        </div>
      </div>
    </ProfileContainer>
  )
}
