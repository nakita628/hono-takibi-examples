import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteWebhookDeleteJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const webhookDeleteJsonHandler = app.openapi(deleteWebhookDeleteJsonRoute, (c) => {
  throw new Error('Not implemented')
})
