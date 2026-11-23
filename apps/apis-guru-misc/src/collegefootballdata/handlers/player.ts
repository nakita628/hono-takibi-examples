import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getPlayerPortalRoute,
  getPlayerReturningRoute,
  getPlayerSearchRoute,
  getPlayerUsageRoute,
} from '../routes'

const app = new OpenAPIHono()

export const playerHandler = app
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
