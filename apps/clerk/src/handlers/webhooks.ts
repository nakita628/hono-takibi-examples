import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteWebhooksSvixRoute, postWebhooksSvixRoute, postWebhooksSvixUrlRoute } from '../routes'

const app = new OpenAPIHono()

export const webhooksHandler = app
  .openapi(postWebhooksSvixRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWebhooksSvixRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWebhooksSvixUrlRoute, (c) => {
    throw new Error('Not implemented')
  })
