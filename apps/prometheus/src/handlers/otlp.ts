import { OpenAPIHono } from '@hono/zod-openapi'
import { postOtlpV1MetricsRoute } from '../routes'

const app = new OpenAPIHono()

export const otlpHandler = app.openapi(postOtlpV1MetricsRoute, (c) => {
  throw new Error('Not implemented')
})
