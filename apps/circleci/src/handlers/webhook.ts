import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteWebhookWebhookIdRoute,
  getWebhookRoute,
  getWebhookWebhookIdRoute,
  postWebhookRoute,
  putWebhookWebhookIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const webhookHandler = app
  .openapi(getWebhookRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWebhookRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWebhookWebhookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putWebhookWebhookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWebhookWebhookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
