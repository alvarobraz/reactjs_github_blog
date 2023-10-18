import styled from 'styled-components'

export const PostContainer = styled.main`
  width: 100%;
  height: auto;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  margin-bottom: 14.625rem;

  > div {
    width: 100%;
    height: auto;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: start;

    padding: 2.5rem 2rem;

    p {
      color: ${(props) => props.theme['base-text']};

      font-size: 1rem;
      font-weight: 400;
      line-height: 160%;
    }
  }
`
