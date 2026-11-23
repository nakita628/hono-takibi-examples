import { OpenAPIHono } from '@hono/zod-openapi'
import { postDeleteNotificationConfigurationsRoute } from '../routes'

const app = new OpenAPIHono()

export const deleteNotificationConfigurationsHandler = app.openapi(
  postDeleteNotificationConfigurationsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
