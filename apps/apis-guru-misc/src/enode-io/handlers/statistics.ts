import { OpenAPIHono } from '@hono/zod-openapi'
import { getStatisticsChargingRoute } from '../routes'

const app = new OpenAPIHono()

export const statisticsHandler = app.openapi(getStatisticsChargingRoute, (c) => {
  throw new Error('Not implemented')
})
