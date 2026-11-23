import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteWebhooksWebhookIdRoute,
  getWebhooksWebhookIdRoute,
  postWebhooksWebhookIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const webhooksHandler = app
  .openapi(deleteWebhooksWebhookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWebhooksWebhookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWebhooksWebhookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
