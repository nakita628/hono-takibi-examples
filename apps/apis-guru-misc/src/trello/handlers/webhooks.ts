import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteWebhooksIdWebhookRoute,
  getWebhooksIdWebhookFieldRoute,
  getWebhooksIdWebhookRoute,
  postWebhooksRoute,
  putWebhooksIdWebhookActiveRoute,
  putWebhooksIdWebhookCallbackURLRoute,
  putWebhooksIdWebhookDescriptionRoute,
  putWebhooksIdWebhookIdModelRoute,
  putWebhooksIdWebhookRoute,
  putWebhooksIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const webhooksHandler = app
  .openapi(postWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putWebhooksIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWebhooksIdWebhookRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWebhooksIdWebhookRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putWebhooksIdWebhookRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putWebhooksIdWebhookActiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putWebhooksIdWebhookCallbackURLRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putWebhooksIdWebhookDescriptionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putWebhooksIdWebhookIdModelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWebhooksIdWebhookFieldRoute, (c) => {
    throw new Error('Not implemented')
  })
