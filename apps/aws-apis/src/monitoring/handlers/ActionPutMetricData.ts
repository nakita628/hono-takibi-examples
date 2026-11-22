import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionPutMetricDataRoute, postActionPutMetricDataRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionPutMetricDataHandler = app
  .openapi(getActionPutMetricDataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionPutMetricDataRoute, (c) => {
    throw new Error('Not implemented')
  })
