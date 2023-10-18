import logoGithubBlog from '../../assets/logo_github_blog.svg'
import { BackLeft, BackRight, CoverContainer } from './styles'
// import { NavLink } from 'react-router-dom'

export function Cover() {
  return (
    <CoverContainer>
      <BackLeft />
      <BackRight />
      {/* <NavLink to="/"> */}
      <img src={logoGithubBlog} alt="Logotipo do Github Blog" />
      {/* </NavLink> */}
    </CoverContainer>
  )
}
