import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteWebhooksWebhookIdRoute,
  getWebhooksRoute,
  getWebhooksWebhookIdRoute,
  postWebhooksExportRoute,
  postWebhooksRoute,
  putWebhooksWebhookIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const webhooksHandler = app
  .openapi(getWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWebhooksExportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWebhooksWebhookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWebhooksWebhookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putWebhooksWebhookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
