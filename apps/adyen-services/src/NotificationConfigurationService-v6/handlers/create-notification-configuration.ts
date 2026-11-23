import { OpenAPIHono } from '@hono/zod-openapi'
import { postCreateNotificationConfigurationRoute } from '../routes'

const app = new OpenAPIHono()

export const createNotificationConfigurationHandler = app.openapi(
  postCreateNotificationConfigurationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
