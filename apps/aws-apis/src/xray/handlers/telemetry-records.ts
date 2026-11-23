import { OpenAPIHono } from '@hono/zod-openapi'
import { postTelemetryRecordsRoute } from '../routes'

const app = new OpenAPIHono()

export const telemetryRecordsHandler = app.openapi(postTelemetryRecordsRoute, (c) => {
  throw new Error('Not implemented')
})
