import { OpenAPIHono } from '@hono/zod-openapi'
import { postNotificationsListRoute } from '../routes'

const app = new OpenAPIHono()

export const notificationsListHandler = app.openapi(postNotificationsListRoute, (c) => {
  throw new Error('Not implemented')
})
