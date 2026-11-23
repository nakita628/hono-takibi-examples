import { OpenAPIHono } from '@hono/zod-openapi'
import { postNotificationsSubscribeRoute, postNotificationsUnsubscribeRoute } from '../routes'

const app = new OpenAPIHono()

export const notificationsHandler = app
  .openapi(postNotificationsSubscribeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNotificationsUnsubscribeRoute, (c) => {
    throw new Error('Not implemented')
  })
