import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faLink,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { GitHubLink, ProfileContainer } from './styles'

interface PropsProfile {
  avataUrl: string
  name: string
  url: string
  bio?: string
  login: string
  company?: string
  followers: number
}

export function Profile({
  avataUrl,
  name,
  url,
  bio,
  login,
  company,
  followers,
}: PropsProfile) {
  return (
    <ProfileContainer>
      <img src={avataUrl} alt="Avatar" />
      <div>
        <div>
          <h1>{name}</h1>
          <GitHubLink>
            <a href={url} target="_blank" rel="noreferrer">
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
