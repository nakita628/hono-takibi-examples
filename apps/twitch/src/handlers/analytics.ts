import { OpenAPIHono } from '@hono/zod-openapi'
import { getAnalyticsExtensionsRoute, getAnalyticsGamesRoute } from '../routes'

const app = new OpenAPIHono()

export const analyticsHandler = app
  .openapi(getAnalyticsExtensionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAnalyticsGamesRoute, (c) => {
    throw new Error('Not implemented')
  })
