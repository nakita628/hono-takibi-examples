import { OpenAPIHono } from '@hono/zod-openapi'
import { getWebhooksDefaultSecretRoute } from '../routes'

const app = new OpenAPIHono()

export const webhooksHandler = app.openapi(getWebhooksDefaultSecretRoute, (c) => {
  throw new Error('Not implemented')
})
