import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionGetMetricStatisticsRoute, postActionGetMetricStatisticsRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionGetMetricStatisticsHandler = app
  .openapi(getActionGetMetricStatisticsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionGetMetricStatisticsRoute, (c) => {
    throw new Error('Not implemented')
  })
