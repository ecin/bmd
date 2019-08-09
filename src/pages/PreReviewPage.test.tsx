import React from 'react'
import { Route } from 'react-router-dom'

import { render } from '../../test/testUtils'

import PreReviewPage from './PreReviewPage'

xit(`renders PreReviewPage`, async () => {
  const { container } = render(<Route path="/" component={PreReviewPage} />, {
    route: '/prereview',
  })
  expect(container.firstChild).toMatchSnapshot()
})
