import { OpenAPIHono } from '@hono/zod-openapi'
import { postGetWebhookInfoRoute } from '../routes'

const app = new OpenAPIHono()

export const getWebhookInfoHandler = app.openapi(postGetWebhookInfoRoute, (c) => {
  throw new Error('Not implemented')
})
