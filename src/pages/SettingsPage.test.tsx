import React from 'react'
import { Route } from 'react-router-dom'

import { render } from '../../test/testUtils'

import SettingsPage from './SettingsPage'

xit(`renders SettingsPage`, () => {
  const { container } = render(<Route path="/" component={SettingsPage} />, {
    route: '/',
  })
  expect(container.firstChild).toMatchSnapshot()
})
