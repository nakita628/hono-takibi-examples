import { OpenAPIHono } from '@hono/zod-openapi'
import { getMonitoringRoute } from '../routes'

const app = new OpenAPIHono()

export const monitoringHandler = app.openapi(getMonitoringRoute, (c) => {
  throw new Error('Not implemented')
})
