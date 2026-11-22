import { OpenAPIHono } from '@hono/zod-openapi'
import { postWebhookTestsRoute } from '../routes'

const app = new OpenAPIHono()

export const webhookTestsHandler = app.openapi(postWebhookTestsRoute, (c) => {
  throw new Error('Not implemented')
})
