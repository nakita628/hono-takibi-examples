import { OpenAPIHono } from '@hono/zod-openapi'
import { postWebhookSubscriptionsDeleteRoute } from '../routes'

const app = new OpenAPIHono()

export const webhookSubscriptionsDeleteHandler = app.openapi(
  postWebhookSubscriptionsDeleteRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
