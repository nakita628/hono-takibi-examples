import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteWebhooksWebhookIdRoute,
  getWebhooksRoute,
  getWebhooksWebhookIdEventsRoute,
  getWebhooksWebhookIdRoute,
  patchWebhooksWebhookIdRoute,
  postWebhooksRoute,
} from '../routes'

const app = new OpenAPIHono()

export const webhooksHandler = app
  .openapi(postWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWebhooksWebhookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchWebhooksWebhookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWebhooksWebhookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWebhooksWebhookIdEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
