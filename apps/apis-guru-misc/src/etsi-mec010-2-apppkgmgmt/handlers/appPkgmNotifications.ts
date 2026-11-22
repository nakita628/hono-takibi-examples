import { OpenAPIHono } from '@hono/zod-openapi'
import { postUserDefinedNotificationRoute } from '../routes'

const app = new OpenAPIHono()

export const appPkgmNotificationsHandler = app.openapi(postUserDefinedNotificationRoute, (c) => {
  throw new Error('Not implemented')
})
