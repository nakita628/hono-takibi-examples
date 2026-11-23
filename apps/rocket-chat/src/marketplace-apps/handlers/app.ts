import { OpenAPIHono } from '@hono/zod-openapi'
import { getAppIdLogsRoute } from '../routes'

const app = new OpenAPIHono()

export const appHandler = app.openapi(getAppIdLogsRoute, (c) => {
  throw new Error('Not implemented')
})
