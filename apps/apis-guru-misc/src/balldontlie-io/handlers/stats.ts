import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV1StatsRoute } from '../routes'

const app = new OpenAPIHono()

export const statsHandler = app.openapi(getApiV1StatsRoute, (c) => {
  throw new Error('Not implemented')
})
