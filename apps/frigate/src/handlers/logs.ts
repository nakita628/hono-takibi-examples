import { OpenAPIHono } from '@hono/zod-openapi'
import { getLogsServiceRoute } from '../routes'

const app = new OpenAPIHono()

export const logsHandler = app.openapi(getLogsServiceRoute, (c) => {
  throw new Error('Not implemented')
})
