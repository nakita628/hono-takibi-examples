import { OpenAPIHono } from '@hono/zod-openapi'
import { postZulipOutgoingWebhookRoute } from '../routes'

const app = new OpenAPIHono()

export const zulipOutgoingWebhookHandler = app.openapi(postZulipOutgoingWebhookRoute, (c) => {
  throw new Error('Not implemented')
})
