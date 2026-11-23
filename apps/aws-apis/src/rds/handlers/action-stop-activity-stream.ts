import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionStopActivityStreamRoute, postActionStopActivityStreamRoute } from '../routes'

const app = new OpenAPIHono()

export const actionStopActivityStreamHandler = app
  .openapi(getActionStopActivityStreamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionStopActivityStreamRoute, (c) => {
    throw new Error('Not implemented')
  })
