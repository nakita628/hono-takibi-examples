import { OpenAPIHono } from '@hono/zod-openapi'
import { getLogsLogIdIndexRoute } from '../routes'

const app = new OpenAPIHono()

export const logsHandler = app.openapi(getLogsLogIdIndexRoute, (c) => {
  throw new Error('Not implemented')
})
