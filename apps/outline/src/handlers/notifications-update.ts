import { OpenAPIHono } from '@hono/zod-openapi'
import { postNotificationsUpdateRoute } from '../routes'

const app = new OpenAPIHono()

export const notificationsUpdateHandler = app.openapi(postNotificationsUpdateRoute, (c) => {
  throw new Error('Not implemented')
})
