import { OpenAPIHono } from '@hono/zod-openapi'
import { postWebhooksRoute } from '../routes'

const app = new OpenAPIHono()

export const webhooksHandler = app.openapi(postWebhooksRoute, (c) => {
  throw new Error('Not implemented')
})
