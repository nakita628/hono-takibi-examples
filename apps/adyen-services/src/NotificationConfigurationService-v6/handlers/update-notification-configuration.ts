import { OpenAPIHono } from '@hono/zod-openapi'
import { postUpdateNotificationConfigurationRoute } from '../routes'

const app = new OpenAPIHono()

export const updateNotificationConfigurationHandler = app.openapi(
  postUpdateNotificationConfigurationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
