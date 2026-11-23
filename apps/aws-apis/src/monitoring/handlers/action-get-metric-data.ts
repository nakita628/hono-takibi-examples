import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionGetMetricDataRoute, postActionGetMetricDataRoute } from '../routes'

const app = new OpenAPIHono()

export const actionGetMetricDataHandler = app
  .openapi(getActionGetMetricDataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionGetMetricDataRoute, (c) => {
    throw new Error('Not implemented')
  })
