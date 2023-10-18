import { PostContainer } from './styles'

interface PropsPost {
  title: string
  date: string
  body: string
}

export function Post({ title, date, body }: PropsPost) {
  return (
    <PostContainer>
      <div>
        <h1>{title}</h1>
        <p>Há {date} dia</p>
      </div>
      <p>{body}</p>
    </PostContainer>
  )
}
