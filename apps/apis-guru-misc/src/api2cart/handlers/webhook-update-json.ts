import { OpenAPIHono } from '@hono/zod-openapi'
import { putWebhookUpdateJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const webhookUpdateJsonHandler = app.openapi(putWebhookUpdateJsonRoute, (c) => {
  throw new Error('Not implemented')
})
