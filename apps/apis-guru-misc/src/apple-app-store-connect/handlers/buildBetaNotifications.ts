import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1BuildBetaNotificationsRoute } from '../routes'

const app = new OpenAPIHono()

export const buildBetaNotificationsHandler = app.openapi(postV1BuildBetaNotificationsRoute, (c) => {
  throw new Error('Not implemented')
})
