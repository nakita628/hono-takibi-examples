import { OpenAPIHono } from '@hono/zod-openapi'
import { getNotificationsJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const notificationsJsonHandler = app.openapi(getNotificationsJsonRoute, (c) => {
  throw new Error('Not implemented')
})
