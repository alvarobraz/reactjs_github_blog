import styled from 'styled-components'

export const CoverContainer = styled.header`
  background: ${(props) => props.theme['base-profile']};

  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;

  img {
    padding: 4rem 0 8.375rem 0;
  }

  @media (max-width: 768px) {
    /* a img {
      position: relative;
      top: 0.3rem;

      width: 75%;

      padding: 1rem 0;
    } */
  }
`

export const BackLeft = styled.div`
  background: url('http://localhost:5173/back_left_cover.svg');

  width: 25.5325rem;
  height: 11.75rem;

  position: absolute;

  left: 0;
  top: 4.5rem;
`

export const BackRight = styled.div`
  background: url('http://localhost:5173/back_right_cover.svg');

  width: 23.1875rem;
  height: 14.75rem;

  position: absolute;

  right: 0;
  top: 1.875rem;
`
