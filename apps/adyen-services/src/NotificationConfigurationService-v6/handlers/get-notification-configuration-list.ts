import { OpenAPIHono } from '@hono/zod-openapi'
import { postGetNotificationConfigurationListRoute } from '../routes'

const app = new OpenAPIHono()

export const getNotificationConfigurationListHandler = app.openapi(
  postGetNotificationConfigurationListRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
