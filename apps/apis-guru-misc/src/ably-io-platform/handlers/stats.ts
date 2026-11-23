import { OpenAPIHono } from '@hono/zod-openapi'
import { getStatsRoute } from '../routes'

const app = new OpenAPIHono()

export const statsHandler = app.openapi(getStatsRoute, (c) => {
  throw new Error('Not implemented')
})
