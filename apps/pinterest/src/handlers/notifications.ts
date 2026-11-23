import { OpenAPIHono } from '@hono/zod-openapi'
import { postNotificationsRoute } from '../routes'

const app = new OpenAPIHono()

export const notificationsHandler = app.openapi(postNotificationsRoute, (c) => {
  throw new Error('Not implemented')
})
