import { OpenAPIHono } from '@hono/zod-openapi'
import { getGamesV1StatsRoute } from '../routes'

const app = new OpenAPIHono()

export const statsHandler = app.openapi(getGamesV1StatsRoute, (c) => {
  throw new Error('Not implemented')
})
