import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteWebhookRoute, getWebhookRoute, postWebhookRoute } from '../routes'

const app = new OpenAPIHono()

export const webhookHandler = app
  .openapi(getWebhookRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWebhookRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWebhookRoute, (c) => {
    throw new Error('Not implemented')
  })
