import { OpenAPIHono } from '@hono/zod-openapi'
import { postTestNotificationConfigurationRoute } from '../routes'

const app = new OpenAPIHono()

export const testNotificationConfigurationHandler = app.openapi(
  postTestNotificationConfigurationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
