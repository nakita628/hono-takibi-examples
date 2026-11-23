import { OpenAPIHono } from '@hono/zod-openapi'
import { getStatsCarRoute } from '../routes'

const app = new OpenAPIHono()

export const statsHandler = app.openapi(getStatsCarRoute, (c) => {
  throw new Error('Not implemented')
})
