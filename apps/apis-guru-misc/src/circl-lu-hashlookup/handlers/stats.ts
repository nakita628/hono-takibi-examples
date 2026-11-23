import { OpenAPIHono } from '@hono/zod-openapi'
import { getStatsTopRoute } from '../routes'

const app = new OpenAPIHono()

export const statsHandler = app.openapi(getStatsTopRoute, (c) => {
  throw new Error('Not implemented')
})
