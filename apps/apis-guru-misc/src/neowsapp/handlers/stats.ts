import { OpenAPIHono } from '@hono/zod-openapi'
import { getRestV1StatsRoute } from '../routes'

const app = new OpenAPIHono()

export const statsHandler = app.openapi(getRestV1StatsRoute, (c) => {
  throw new Error('Not implemented')
})
