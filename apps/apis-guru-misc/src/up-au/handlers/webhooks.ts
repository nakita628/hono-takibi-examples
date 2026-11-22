import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteWebhooksIdRoute,
  getWebhooksIdRoute,
  getWebhooksRoute,
  getWebhooksWebhookIdLogsRoute,
  postWebhooksRoute,
  postWebhooksWebhookIdPingRoute,
} from '../routes'

const app = new OpenAPIHono()

export const webhooksHandler = app
  .openapi(getWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWebhooksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWebhooksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWebhooksWebhookIdLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWebhooksWebhookIdPingRoute, (c) => {
    throw new Error('Not implemented')
  })
