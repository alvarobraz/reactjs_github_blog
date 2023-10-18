import { Post } from '../components/Post'
import { Profile } from '../components/Profile'
import { HederPublish, HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Profile
        avataUrl="https://avatars.githubusercontent.com/u/60791524?v=4"
        name="Álvaro Adriano Braz"
        url="https://github.com/alvarobraz"
        bio="Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
      viverra massa quam dignissim aenean malesuada suscipit. Nunc,
      volutpat pulvinar vel mass."
        login="alvarobraz"
        company="Rocketseat"
        followers={5}
      />
      <HederPublish>
        <h1>Publicações</h1>
        <p>6 publicações</p>
      </HederPublish>
      <input placeholder="Buscar conteúdo" />
      <Post
        title="JavaScript data types and data structures"
        date="1"
        body="Programming languages all have built-in data structures, but these often
      differ from one language to another. This article attempts to list the
      built-in data structures available in ..."
      />
      <Post
        title="JavaScript data types and data structures"
        date="1"
        body="Programming languages all have built-in data structures, but these often
      differ from one language to another. This article attempts to list the
      built-in data structures available in ..."
      />
      <Post
        title="JavaScript data types and data structures"
        date="1"
        body="Programming languages all have built-in data structures, but these often
      differ from one language to another. This article attempts to list the
      built-in data structures available in ..."
      />
      <Post
        title="JavaScript data types and data structures"
        date="1"
        body="Programming languages all have built-in data structures, but these often
      differ from one language to another. This article attempts to list the
      built-in data structures available in ..."
      />
    </HomeContainer>
  )
}
