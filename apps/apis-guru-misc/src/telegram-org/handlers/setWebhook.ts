import { OpenAPIHono } from '@hono/zod-openapi'
import { postSetWebhookRoute } from '../routes'

const app = new OpenAPIHono()

export const setWebhookHandler = app.openapi(postSetWebhookRoute, (c) => {
  throw new Error('Not implemented')
})
