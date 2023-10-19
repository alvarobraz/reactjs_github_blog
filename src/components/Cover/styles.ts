import styled from 'styled-components'

export const CoverContainer = styled.header`
  background: ${(props) => props.theme['base-border']};

  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;

  img {
    padding: 4rem 0 8.375rem 0;
  }

  @media (max-width: 768px) {
    img {
      width: 20%;
      padding: 1.5rem 0 6.5rem 0;
    }
  }
`

export const BackLeft = styled.div`
  background: url('http://localhost:5173/back_left_cover.svg');

  width: 25.5325rem;
  height: 11.75rem;

  position: absolute;

  left: 0;
  top: 4.5rem;
  z-index: 0;

  @media (max-width: 768px) {
    background: transparent;
  }
`

export const BackRight = styled.div`
  background: url('http://localhost:5173/back_right_cover.svg');

  width: 23.1875rem;
  height: 14.75rem;

  position: absolute;

  right: 0;
  top: 1.875rem;

  @media (max-width: 768px) {
    background: transparent;
  }
`
