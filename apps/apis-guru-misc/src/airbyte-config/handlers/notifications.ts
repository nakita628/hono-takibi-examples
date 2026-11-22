import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1NotificationsTryRoute } from '../routes'

const app = new OpenAPIHono()

export const notificationsHandler = app.openapi(postV1NotificationsTryRoute, (c) => {
  throw new Error('Not implemented')
})
