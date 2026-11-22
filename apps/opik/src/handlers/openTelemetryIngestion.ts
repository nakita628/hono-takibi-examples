import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1PrivateOtelV1TracesRoute } from '../routes'

const app = new OpenAPIHono()

export const openTelemetryIngestionHandler = app.openapi(postV1PrivateOtelV1TracesRoute, (c) => {
  throw new Error('Not implemented')
})
