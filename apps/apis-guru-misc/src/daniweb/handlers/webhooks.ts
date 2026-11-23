import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteWebhooksIDRoute, getWebhooksRoute, postWebhooksRoute } from '../routes'

const app = new OpenAPIHono()

export const webhooksHandler = app
  .openapi(getWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWebhooksIDRoute, (c) => {
    throw new Error('Not implemented')
  })
