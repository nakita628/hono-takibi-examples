import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteWebhookWebhooksIdRoute,
  getWebhookLogsRoute,
  getWebhookWebhooksIdRoute,
  getWebhookWebhooksRoute,
  patchWebhookWebhooksIdRoute,
  postWebhookWebhooksIdExecuteServiceIdRoute,
  postWebhookWebhooksIdXServiceIdRoute,
  postWebhookWebhooksRoute,
  postWebhookWIdServiceIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const webhooksHandler = app
  .openapi(getWebhookLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWebhookWIdServiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWebhookWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWebhookWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWebhookWebhooksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWebhookWebhooksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchWebhookWebhooksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWebhookWebhooksIdExecuteServiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWebhookWebhooksIdXServiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
