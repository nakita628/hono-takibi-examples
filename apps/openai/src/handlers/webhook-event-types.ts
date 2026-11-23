import { OpenAPIHono } from '@hono/zod-openapi'
import { getWebhookEventTypesRoute } from '../routes'

const app = new OpenAPIHono()

export const webhookEventTypesHandler = app.openapi(getWebhookEventTypesRoute, (c) => {
  throw new Error('Not implemented')
})
