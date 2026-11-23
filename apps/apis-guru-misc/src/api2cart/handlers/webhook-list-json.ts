import { OpenAPIHono } from '@hono/zod-openapi'
import { getWebhookListJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const webhookListJsonHandler = app.openapi(getWebhookListJsonRoute, (c) => {
  throw new Error('Not implemented')
})
