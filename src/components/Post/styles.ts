import styled from 'styled-components'

export const PostContainer = styled.header`
  background: ${(props) => props.theme['base-post']};

  width: 26rem;
  height: 16.25rem;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  border-radius: 10px;

  margin-top: 2rem;
  padding: 2rem;

  gap: 20px;

  > div {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: start;

    h1 {
      width: 17.6875rem;
      color: ${(props) => props.theme['base-title']};

      font-size: 1.25rem;
      font-weight: 700;
      line-height: 160%;
    }

    p {
      width: 4.313rem;
      color: ${(props) => props.theme['base-span']};

      font-size: 0.875rem;
      font-weight: 400;
      line-height: 160%;

      padding-top: 0.3rem;
    }
  }
`
