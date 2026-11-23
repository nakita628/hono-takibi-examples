import { OpenAPIHono } from '@hono/zod-openapi'
import { getStatsMetricRoute, getStatsRoute } from '../routes'

const app = new OpenAPIHono()

export const statsHandler = app
  .openapi(getStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStatsMetricRoute, (c) => {
    throw new Error('Not implemented')
  })
