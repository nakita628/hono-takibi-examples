import { OpenAPIHono } from '@hono/zod-openapi'
import { getWebhookEventsJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const webhookEventsJsonHandler = app.openapi(getWebhookEventsJsonRoute, (c) => {
  throw new Error('Not implemented')
})
