import { OpenAPIHono } from '@hono/zod-openapi'
import { getNotificationEventConditionsRoute } from '../routes'

const app = new OpenAPIHono()

export const notificationEventConditionsHandler = app.openapi(
  getNotificationEventConditionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
