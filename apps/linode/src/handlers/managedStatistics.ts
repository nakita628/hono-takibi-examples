import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiVersionManagedStatsRoute } from '../routes'

const app = new OpenAPIHono()

export const managedStatisticsHandler = app.openapi(getApiVersionManagedStatsRoute, (c) => {
  throw new Error('Not implemented')
})
