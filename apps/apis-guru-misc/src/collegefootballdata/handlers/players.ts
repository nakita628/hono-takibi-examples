import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getPlayerPortalRoute,
  getPlayerReturningRoute,
  getPlayerSearchRoute,
  getPlayerUsageRoute,
  getStatsPlayerSeasonRoute,
} from '../routes'

const app = new OpenAPIHono()

export const playersHandler = app
  .openapi(getPlayerPortalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlayerReturningRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlayerSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlayerUsageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStatsPlayerSeasonRoute, (c) => {
    throw new Error('Not implemented')
  })
