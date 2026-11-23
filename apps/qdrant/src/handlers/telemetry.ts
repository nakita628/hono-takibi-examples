import { OpenAPIHono } from '@hono/zod-openapi'
import { getTelemetryRoute } from '../routes'

const app = new OpenAPIHono()

export const telemetryHandler = app.openapi(getTelemetryRoute, (c) => {
  throw new Error('Not implemented')
})
