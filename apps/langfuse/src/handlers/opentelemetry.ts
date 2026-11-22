import { OpenAPIHono } from '@hono/zod-openapi'
import { postApiPublicOtelV1TracesRoute } from '../routes'

const app = new OpenAPIHono()

export const opentelemetryHandler = app.openapi(postApiPublicOtelV1TracesRoute, (c) => {
  throw new Error('Not implemented')
})
