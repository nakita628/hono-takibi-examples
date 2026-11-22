import { OpenAPIHono } from '@hono/zod-openapi'
import { postGetQueryStatisticsRoute } from '../routes'

const app = new OpenAPIHono()

export const GetQueryStatisticsHandler = app.openapi(postGetQueryStatisticsRoute, (c) => {
  throw new Error('Not implemented')
})
