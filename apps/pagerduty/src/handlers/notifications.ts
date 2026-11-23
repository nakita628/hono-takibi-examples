import { OpenAPIHono } from '@hono/zod-openapi'
import { getNotificationsRoute } from '../routes'

const app = new OpenAPIHono()

export const notificationsHandler = app.openapi(getNotificationsRoute, (c) => {
  throw new Error('Not implemented')
})
