import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionStopActivityStreamRoute, postActionStopActivityStreamRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionStopActivityStreamHandler = app
  .openapi(getActionStopActivityStreamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionStopActivityStreamRoute, (c) => {
    throw new Error('Not implemented')
  })
