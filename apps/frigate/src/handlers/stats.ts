import { OpenAPIHono } from '@hono/zod-openapi'
import { getStatsHistoryRoute, getStatsRoute } from '../routes'

const app = new OpenAPIHono()

export const statsHandler = app
  .openapi(getStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStatsHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
