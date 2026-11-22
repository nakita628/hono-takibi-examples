import { OpenAPIHono } from '@hono/zod-openapi'
import { getIndexesIndexUidStatsRoute, getMetricsRoute, getStatsRoute } from '../routes'

const app = new OpenAPIHono()

export const statsHandler = app
  .openapi(getIndexesIndexUidStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMetricsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
