import { OpenAPIHono } from '@hono/zod-openapi'
import { getAccountFailedWebhooksJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const accountFailedWebhooksJsonHandler = app.openapi(
  getAccountFailedWebhooksJsonRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
