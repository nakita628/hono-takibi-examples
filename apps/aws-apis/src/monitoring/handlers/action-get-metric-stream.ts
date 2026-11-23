import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionGetMetricStreamRoute, postActionGetMetricStreamRoute } from '../routes'

const app = new OpenAPIHono()

export const actionGetMetricStreamHandler = app
  .openapi(getActionGetMetricStreamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionGetMetricStreamRoute, (c) => {
    throw new Error('Not implemented')
  })
