import { OpenAPIHono } from '@hono/zod-openapi'
import { postZulipOutgoingWebhookRoute } from '../routes'

const app = new OpenAPIHono()

export const webhooksHandler = app.openapi(postZulipOutgoingWebhookRoute, (c) => {
  throw new Error('Not implemented')
})
