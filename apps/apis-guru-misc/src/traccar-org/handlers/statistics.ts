import { OpenAPIHono } from '@hono/zod-openapi'
import { getStatisticsRoute } from '../routes'

const app = new OpenAPIHono()

export const statisticsHandler = app.openapi(getStatisticsRoute, (c) => {
  throw new Error('Not implemented')
})
