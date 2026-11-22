import { OpenAPIHono } from '@hono/zod-openapi'
import { getNotificationsPubkeyRoute, postNotificationsRegisterRoute } from '../routes'

const app = new OpenAPIHono()

export const notificationsHandler = app
  .openapi(getNotificationsPubkeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNotificationsRegisterRoute, (c) => {
    throw new Error('Not implemented')
  })
