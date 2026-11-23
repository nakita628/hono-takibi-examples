import { OpenAPIHono } from '@hono/zod-openapi'
import { postWebhookVerificationKeyGetRoute } from '../routes'

const app = new OpenAPIHono()

export const webhookVerificationKeyHandler = app.openapi(
  postWebhookVerificationKeyGetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
