import { OpenAPIHono } from '@hono/zod-openapi'
import { postStatistics1CountsRoute } from '../routes'

const app = new OpenAPIHono()

export const statisticsHandler = app.openapi(postStatistics1CountsRoute, (c) => {
  throw new Error('Not implemented')
})
