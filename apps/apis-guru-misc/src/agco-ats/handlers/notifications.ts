import { OpenAPIHono } from '@hono/zod-openapi'
import { postApiV2NotificationsRoute } from '../routes'

const app = new OpenAPIHono()

export const notificationsHandler = app.openapi(postApiV2NotificationsRoute, (c) => {
  throw new Error('Not implemented')
})
