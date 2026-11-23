import { OpenAPIHono } from '@hono/zod-openapi'
import { postGetNotificationConfigurationRoute } from '../routes'

const app = new OpenAPIHono()

export const getNotificationConfigurationHandler = app.openapi(
  postGetNotificationConfigurationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
