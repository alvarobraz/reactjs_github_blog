import styled from 'styled-components'

export const ProfileContainer = styled.section`
  background: ${(props) => props.theme['base-profile']};

  width: 54rem;
  height: 13.25rem;
  /* margin: 0rem auto; */
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;

  border-radius: 10px;

  margin-top: -5.5rem;
  padding: 2rem 2.5rem;
  gap: 2rem;

  position: relative;

  /* @media (max-width: 768px) {
    width: calc(100% - 2rem);
  } */
  img {
    width: 148px;
    height: 148px;
  }

  > div {
    width: 100%;
    height: 9.25rem;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;

    > div {
      width: 100%;

      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-start;

      h1 {
        font-size: 1.5rem;
        font-weight: 700;
        line-height: 160%;

        color: ${(props) => props.theme['base-title']};
      }

      p {
        font-size: 1rem;
        font-weight: 400;
        line-height: 160%;

        color: ${(props) => props.theme['base-text']};
      }
    }

    > div + div + div {
      width: 30rem;
      height: auto;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      text-align: center;

      gap: 1.5rem;
      p {
        width: auto;
        display: flex;
        flex-direction: row;
        align-items: center;
        text-align: center;

        svg {
          color: ${(props) => props.theme['base-label']};
          margin-right: 8px;
        }
      }
    }
  }
`
export const GitHubLink = styled.div`
  font-size: 0.75rem;
  font-weight: 700;
  line-height: 160%;

  a {
    color: ${(props) => props.theme.blue};
    text-decoration: none;

    svg {
      width: 12px;
      height: 12px;

      position: relative;

      margin-left: 8px;
      top: 0.1rem;
    }
  }

  a:focus {
    outline: none;
  }

  a:hover {
    text-decoration: underline;
  }
`
