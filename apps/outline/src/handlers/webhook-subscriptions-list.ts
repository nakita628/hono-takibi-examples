import { OpenAPIHono } from '@hono/zod-openapi'
import { postWebhookSubscriptionsListRoute } from '../routes'

const app = new OpenAPIHono()

export const webhookSubscriptionsListHandler = app.openapi(
  postWebhookSubscriptionsListRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
