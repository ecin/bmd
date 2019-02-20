import { axe } from 'jest-axe'
import React from 'react'
import { Route } from 'react-router-dom'

import { render } from '../../test/testUtils'

import SummaryPage from './ReviewPage'

it(`renders SummaryPage without votes`, () => {
  const { container } = render(
    <Route path="/review" component={SummaryPage} />,
    {
      route: '/review',
    }
  )
  expect(container.firstChild).toMatchSnapshot()
})

fit(`renders SummaryPage with votes`, () => {
  const { container } = render(
    <Route path="/review" component={SummaryPage} />,
    {
      route: '/review',
      votes: {
        president: 'minnieMouse',
        senator: 'johnSmith',
      },
    }
  )
  expect(container.firstChild).toMatchSnapshot()
})

it(`SummaryPage without votes is accessible`, async () => {
  const resetVotes = jest.fn()
  const { container } = render(
    <Route path="/review" component={SummaryPage} />,
    {
      resetVotes,
      route: '/review',
    }
  )
  expect(await axe(container.innerHTML)).toHaveNoViolations()
})

it(`SummaryPage with votes is accessible`, async () => {
  const resetVotes = jest.fn()
  const { container } = render(
    <Route path="/review" component={SummaryPage} />,
    {
      resetVotes,
      route: '/review',
      votes: {
        president: 'minnieMouse',
        senator: 'johnSmith',
      },
    }
  )
  expect(await axe(container.innerHTML)).toHaveNoViolations()
})