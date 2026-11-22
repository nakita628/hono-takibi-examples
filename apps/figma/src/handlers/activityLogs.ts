import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1ActivityLogsRoute } from '../routes'

const app = new OpenAPIHono()

export const activityLogsHandler = app.openapi(getV1ActivityLogsRoute, (c) => {
  throw new Error('Not implemented')
})
