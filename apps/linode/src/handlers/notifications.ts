import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiVersionAccountNotificationsRoute } from '../routes'

const app = new OpenAPIHono()

export const notificationsHandler = app.openapi(getApiVersionAccountNotificationsRoute, (c) => {
  throw new Error('Not implemented')
})
