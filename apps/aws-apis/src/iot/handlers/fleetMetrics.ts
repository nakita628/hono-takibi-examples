import { OpenAPIHono } from '@hono/zod-openapi'
import { getFleetMetricsRoute } from '../routes'

const app = new OpenAPIHono()

export const fleetMetricsHandler = app.openapi(getFleetMetricsRoute, (c) => {
  throw new Error('Not implemented')
})
