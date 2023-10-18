import { Outlet } from 'react-router-dom'

import { LayoutContainer } from './styles'
import { Cover } from '../components/Cover'

export function DefaultLayout() {
  return (
    <div>
      <Cover />
      <LayoutContainer>
        <Outlet />
      </LayoutContainer>
    </div>
  )
}
