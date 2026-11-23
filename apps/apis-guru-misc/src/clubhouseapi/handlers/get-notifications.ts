import { OpenAPIHono } from '@hono/zod-openapi'
import { getGetNotificationsRoute } from '../routes'

const app = new OpenAPIHono()

export const getNotificationsHandler = app.openapi(getGetNotificationsRoute, (c) => {
  throw new Error('Not implemented')
})
