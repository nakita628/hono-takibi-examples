import { OpenAPIHono } from '@hono/zod-openapi'
import { getLogsRoute } from '../routes'

const app = new OpenAPIHono()

export const logsHandler = app.openapi(getLogsRoute, (c) => {
  throw new Error('Not implemented')
})
