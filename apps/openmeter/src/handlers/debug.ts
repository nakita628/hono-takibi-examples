import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV1DebugMetricsRoute } from '../routes'

const app = new OpenAPIHono()

export const debugHandler = app.openapi(getApiV1DebugMetricsRoute, (c) => {
  throw new Error('Not implemented')
})
