import { OpenAPIHono } from '@hono/zod-openapi'
import { postWebhookSubscriptionsCreateRoute } from '../routes'

const app = new OpenAPIHono()

export const webhookSubscriptionsCreateHandler = app.openapi(
  postWebhookSubscriptionsCreateRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
