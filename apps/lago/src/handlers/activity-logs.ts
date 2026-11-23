import { OpenAPIHono } from '@hono/zod-openapi'
import { getActivityLogsActivityIdRoute, getActivityLogsRoute } from '../routes'

const app = new OpenAPIHono()

export const activityLogsHandler = app
  .openapi(getActivityLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getActivityLogsActivityIdRoute, (c) => {
    throw new Error('Not implemented')
  })
