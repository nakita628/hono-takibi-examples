import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionPutMetricStreamRoute, postActionPutMetricStreamRoute } from '../routes'

const app = new OpenAPIHono()

export const actionPutMetricStreamHandler = app
  .openapi(getActionPutMetricStreamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionPutMetricStreamRoute, (c) => {
    throw new Error('Not implemented')
  })
