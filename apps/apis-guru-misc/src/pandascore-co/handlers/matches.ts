import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getMatchesMatchIdOrSlugOpponentsRoute,
  getMatchesMatchIdOrSlugRoute,
  getMatchesPastRoute,
  getMatchesRoute,
  getMatchesRunningRoute,
  getMatchesUpcomingRoute,
} from '../routes'

const app = new OpenAPIHono()

export const matchesHandler = app
  .openapi(getMatchesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMatchesPastRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMatchesRunningRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMatchesUpcomingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMatchesMatchIdOrSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMatchesMatchIdOrSlugOpponentsRoute, (c) => {
    throw new Error('Not implemented')
  })
