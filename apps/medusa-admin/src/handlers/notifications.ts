import { OpenAPIHono } from '@hono/zod-openapi'
import { getAdminNotificationsIdRoute, getAdminNotificationsRoute } from '../routes'

const app = new OpenAPIHono()

export const notificationsHandler = app
  .openapi(getAdminNotificationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminNotificationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
