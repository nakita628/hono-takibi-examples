import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionGetMetricStatisticsRoute, postActionGetMetricStatisticsRoute } from '../routes'

const app = new OpenAPIHono()

export const actionGetMetricStatisticsHandler = app
  .openapi(getActionGetMetricStatisticsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionGetMetricStatisticsRoute, (c) => {
    throw new Error('Not implemented')
  })
