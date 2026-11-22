import { OpenAPIHono } from '@hono/zod-openapi'
import { getNotificationsJsonRoute, putNotificationsMarkReadJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const notificationsHandler = app
  .openapi(getNotificationsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNotificationsMarkReadJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
