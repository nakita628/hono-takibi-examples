import { OpenAPIHono } from '@hono/zod-openapi'
import { putNotificationsWebhooksRoute } from '../routes'

const app = new OpenAPIHono()

export const notificationsHandler = app.openapi(putNotificationsWebhooksRoute, (c) => {
  throw new Error('Not implemented')
})
