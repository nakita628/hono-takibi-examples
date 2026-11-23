import { OpenAPIHono } from '@hono/zod-openapi'
import { postEventNotificationsRoute } from '../routes'

const app = new OpenAPIHono()

export const eventNotificationsHandler = app.openapi(postEventNotificationsRoute, (c) => {
  throw new Error('Not implemented')
})
