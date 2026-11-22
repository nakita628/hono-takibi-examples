import { OpenAPIHono } from '@hono/zod-openapi'
import { postApiRnbPubNotificationsRoute } from '../routes'

const app = new OpenAPIHono()

export const notificationsHandler = app.openapi(postApiRnbPubNotificationsRoute, (c) => {
  throw new Error('Not implemented')
})
