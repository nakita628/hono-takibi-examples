import { OpenAPIHono } from '@hono/zod-openapi'
import { postNotificationsRegisterRoute } from '../routes'

const app = new OpenAPIHono()

export const notificationsHandler = app.openapi(postNotificationsRegisterRoute, (c) => {
  throw new Error('Not implemented')
})
