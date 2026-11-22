import { OpenAPIHono } from '@hono/zod-openapi'
import { getSystemActivityLogEntriesRoute } from '../routes'

const app = new OpenAPIHono()

export const activityLogHandler = app.openapi(getSystemActivityLogEntriesRoute, (c) => {
  throw new Error('Not implemented')
})
