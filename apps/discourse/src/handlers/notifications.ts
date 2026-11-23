import { OpenAPIHono } from '@hono/zod-openapi'
import { putNotificationsMarkReadJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const notificationsHandler = app.openapi(putNotificationsMarkReadJsonRoute, (c) => {
  throw new Error('Not implemented')
})
