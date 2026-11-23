import { OpenAPIHono } from '@hono/zod-openapi'
import { getWebhookCountJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const webhookCountJsonHandler = app.openapi(getWebhookCountJsonRoute, (c) => {
  throw new Error('Not implemented')
})
