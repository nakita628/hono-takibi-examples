import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiNotificationsRoute } from '../routes'

const app = new OpenAPIHono()

export const notificationsHandler = app.openapi(getApiNotificationsRoute, (c) => {
  throw new Error('Not implemented')
})
