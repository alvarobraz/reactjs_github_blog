import styled from 'styled-components'

export const PostContainer = styled.header`
  a {
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
    text-decoration: none;

    color: ${(props) => props.theme['base-span']};

    > div {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: start;
      text-align: left;
      /* text-decoration: none; */

      h1 {
        width: 17rem;
        color: ${(props) => props.theme['base-title']};

        font-size: 1.25rem;
        font-weight: 700;
        line-height: 160%;
        /* text-decoration: none; */
      }

      p {
        width: 4.313rem;
        color: ${(props) => props.theme['base-span']};

        font-size: 0.875rem;
        font-weight: 400;
        line-height: 160%;

        padding-top: 0.3rem;
        /* text-decoration: none; */
      }
    }
  }

  a:hover {
    padding: 1.9375rem;
    border: 1px solid ${(props) => props.theme['base-label']};
    text-decoration: none;
  }

  @media (max-width: 768px) {
    a {
      width: 100%;
      height: auto;
      margin-top: 1rem;
      padding: 1rem;

      > div {
        width: 100%;

        h1 {
          font-size: 1rem;
          width: 80%;
        }

        p {
          width: 20%;
        }
      }
    }

    a:hover {
      width: 100%;
      height: auto;
      margin-top: 1rem;
      padding: 0.9375rem;
    }
  }
`
