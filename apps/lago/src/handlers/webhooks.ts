import { OpenAPIHono } from '@hono/zod-openapi'
import { getWebhooksJsonPublicKeyRoute, getWebhooksPublicKeyRoute } from '../routes'

const app = new OpenAPIHono()

export const webhooksHandler = app
  .openapi(getWebhooksPublicKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWebhooksJsonPublicKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
