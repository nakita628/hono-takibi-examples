import { OpenAPIHono } from '@hono/zod-openapi'
import { postAdminLogsRoute } from '../routes'

const app = new OpenAPIHono()

export const logsHandler = app.openapi(postAdminLogsRoute, (c) => {
  throw new Error('Not implemented')
})
