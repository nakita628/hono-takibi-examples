import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1NotificationsTryRoute, postV1NotificationsTryWebhookRoute } from '../routes'

const app = new OpenAPIHono()

export const notificationsHandler = app
  .openapi(postV1NotificationsTryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NotificationsTryWebhookRoute, (c) => {
    throw new Error('Not implemented')
  })
