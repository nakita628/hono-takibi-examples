import { OpenAPIHono } from '@hono/zod-openapi'
import { getBooksV1NotificationGetRoute } from '../routes'

const app = new OpenAPIHono()

export const notificationHandler = app.openapi(getBooksV1NotificationGetRoute, (c) => {
  throw new Error('Not implemented')
})
