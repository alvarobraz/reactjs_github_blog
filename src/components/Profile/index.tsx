import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faLink,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { GitHubLink, ProfileContainer } from './styles'
import { NavLink } from 'react-router-dom'
import Avatar from '../../assets/avatar.png'

export function Profile() {
  return (
    <ProfileContainer>
      <img src={Avatar} alt="Avatar" />
      <div>
        <div>
          <h1>Cameron Williamson</h1>
          <GitHubLink>
            <NavLink to="/">
              GITHUB
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </NavLink>
          </GitHubLink>
        </div>
        <div>
          <p>
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
            viverra massa quam dignissim aenean malesuada suscipit. Nunc,
            volutpat pulvinar vel mass.
          </p>
        </div>
        <div>
          <p>
            <FontAwesomeIcon icon={faLink} />
            cameronwll
          </p>
          <p>
            <FontAwesomeIcon icon={faBuilding} />
            Rocketseat
          </p>
          <p>
            <FontAwesomeIcon icon={faUserGroup} />
            32 seguidores
          </p>
        </div>
      </div>
    </ProfileContainer>
  )
}
