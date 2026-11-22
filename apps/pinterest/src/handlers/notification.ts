import { OpenAPIHono } from '@hono/zod-openapi'
import { postNotificationsRoute } from '../routes'

const app = new OpenAPIHono()

export const notificationHandler = app.openapi(postNotificationsRoute, (c) => {
  throw new Error('Not implemented')
})
