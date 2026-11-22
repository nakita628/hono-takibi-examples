import { OpenAPIHono } from '@hono/zod-openapi'
import { getV2EventsWebhookEventIdRoute } from '../routes'

const app = new OpenAPIHono()

export const webhookEventsAPIHandler = app.openapi(getV2EventsWebhookEventIdRoute, (c) => {
  throw new Error('Not implemented')
})
