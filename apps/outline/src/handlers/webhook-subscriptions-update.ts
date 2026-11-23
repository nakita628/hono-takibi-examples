import { OpenAPIHono } from '@hono/zod-openapi'
import { postWebhookSubscriptionsUpdateRoute } from '../routes'

const app = new OpenAPIHono()

export const webhookSubscriptionsUpdateHandler = app.openapi(
  postWebhookSubscriptionsUpdateRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
