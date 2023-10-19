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

  @media (max-width: 768px) {
    margin-bottom: 5rem;

    > div {
      padding: 1.5rem 1rem;

      p {
        font-size: 0.875rem;
      }
    }
  }
`
