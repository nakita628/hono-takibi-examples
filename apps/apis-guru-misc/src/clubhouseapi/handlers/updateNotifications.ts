import { OpenAPIHono } from '@hono/zod-openapi'
import { postUpdateNotificationsRoute } from '../routes'

const app = new OpenAPIHono()

export const updateNotificationsHandler = app.openapi(postUpdateNotificationsRoute, (c) => {
  throw new Error('Not implemented')
})
