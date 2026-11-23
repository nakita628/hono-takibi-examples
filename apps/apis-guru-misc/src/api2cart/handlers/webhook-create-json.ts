import { OpenAPIHono } from '@hono/zod-openapi'
import { postWebhookCreateJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const webhookCreateJsonHandler = app.openapi(postWebhookCreateJsonRoute, (c) => {
  throw new Error('Not implemented')
})
