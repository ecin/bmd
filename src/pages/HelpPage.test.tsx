import React from 'react'
import { Route } from 'react-router-dom'

import { render } from '../../test/testUtils'

import HelpPage from './HelpPage'

xit(`renders HelpPage`, async () => {
  const { container } = render(<Route path="/" component={HelpPage} />, {
    route: '/',
  })
  expect(container.firstChild).toMatchSnapshot()
})
