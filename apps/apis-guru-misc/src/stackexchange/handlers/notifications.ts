import { OpenAPIHono } from '@hono/zod-openapi'
import { getNotificationsRoute, getNotificationsUnreadRoute } from '../routes'

const app = new OpenAPIHono()

export const notificationsHandler = app
  .openapi(getNotificationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNotificationsUnreadRoute, (c) => {
    throw new Error('Not implemented')
  })
