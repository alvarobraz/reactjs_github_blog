import { useParams } from 'react-router-dom'
import { PostInfo } from '../../components/PostInfo'
import { PostContainer } from './styles'

export function Post() {
  const { id } = useParams()

  return (
    <PostContainer>
      <PostInfo
        url="https://github.com/alvarobraz/reactjs_github_blog/issues/2"
        title="JavaScript data types and data structures"
        login="alvarobraz"
        date="1"
        comments="5"
      />
      <div>
        <p>
          `ID aqui: ${id} ` Programming languages all have built-in data
          structures, but these often differ from one language to another. This
          article attempts to list the built-in data structures available in
          JavaScript and what properties they have. These can be used to build
          other data structures. Wherever possible, comparisons with other
          languages are drawn.
        </p>
      </div>
    </PostContainer>
  )
}
