import styled from 'styled-components'

export const PostInfoContainer = styled.section`
  background: ${(props) => props.theme['base-profile']};

  width: 54rem;
  height: 10.5rem;
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

  > div {
    width: 100%;
    height: 6.5rem;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;

    > h1 {
      font-size: 1.5rem;
      font-weight: 700;
      line-height: 130%;

      color: ${(props) => props.theme['base-title']};
    }

    div:nth-child(1) {
      width: 100%;

      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-start;

      a {
        color: ${(props) => props.theme.blue};
        text-decoration: none;

        font-size: 0.75rem;
        font-weight: 400;
        line-height: 160%;

        svg {
          color: ${(props) => props.theme.blue};

          width: 12px;
          height: 12px;

          position: relative;

          margin-right: 8px;
          top: 0.1rem;
        }
      }

      a:focus {
        outline: none;
      }

      a:hover {
        text-decoration: underline;
      }
    }

    div:nth-child(3) {
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
