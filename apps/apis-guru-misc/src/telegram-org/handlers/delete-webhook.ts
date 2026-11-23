import { OpenAPIHono } from '@hono/zod-openapi'
import { postDeleteWebhookRoute } from '../routes'

const app = new OpenAPIHono()

export const deleteWebhookHandler = app.openapi(postDeleteWebhookRoute, (c) => {
  throw new Error('Not implemented')
})
