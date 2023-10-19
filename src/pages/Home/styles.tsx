import styled from 'styled-components'

export const HomeContainer = styled.main`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  margin-bottom: 14.625rem;

  input {
    background: ${(props) => props.theme['base-input']};

    width: 54rem;
    height: 3.125rem;

    border-radius: 6px;
    border: 1px solid ${(props) => props.theme['base-border']};

    margin: 12px 0;
    padding: 12px 16px;

    outline: 0;
    font-size: 1rem;
    color: ${(props) => props.theme['base-text']};

    &:focus-visible {
      box-shadow: none;
      border: 0.5px solid ${(props) => props.theme.blue};
    }
    &::placeholder {
      color: ${(props) => props.theme['base-label']};
    }
  }

  @media (max-width: 768px) {
    margin-bottom: 5rem;

    input {
      width: 100%;
      height: 2.725rem;

      margin: 6px 0;
      padding: 6px 10px;

      font-size: 0.75rem;
    }
  }
`

export const HederPublish = styled.header`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-top: 4.5rem;

  h1 {
    color: ${(props) => props.theme['base-subtitle']};

    font-size: 1.125rem;
    font-weight: 700;
    line-height: 160%;
  }

  p {
    color: ${(props) => props.theme['base-span']};

    font-size: 0.875rem;
    font-weight: 400;
    line-height: 160%;
  }

  @media (max-width: 768px) {
    margin-top: 1.5rem;

    h1 {
      font-size: 1rem;
    }

    p {
      font-size: 0.75rem;
    }
  }
`
