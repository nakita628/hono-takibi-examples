import { OpenAPIHono } from '@hono/zod-openapi'
import { postNotificationsUpdateAllRoute } from '../routes'

const app = new OpenAPIHono()

export const notificationsUpdateAllHandler = app.openapi(postNotificationsUpdateAllRoute, (c) => {
  throw new Error('Not implemented')
})
