import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteWebhooksAuthIdAuthRoute,
  deleteWebhooksAuthRoute,
  deleteWebhooksIdWebhookAddToDataKeyRoute,
  deleteWebhooksIdWebhookAddToDataRoute,
  deleteWebhooksIdWebhookRoute,
  deleteWebhooksRoute,
  getWebhooksAuthRoute,
  getWebhooksIdWebhookAddToDataKeyRoute,
  getWebhooksIdWebhookAddToDataRoute,
  getWebhooksIdWebhookLogsRoute,
  getWebhooksRoute,
  postWebhooksAuthIdAuthRoute,
  postWebhooksAuthRoute,
  postWebhooksIdWebhookAddToDataKeyRoute,
  postWebhooksIdWebhookAddToDataRoute,
  postWebhooksIdWebhookRoute,
  postWebhooksRoute,
  putWebhooksAuthIdAuthRoute,
  putWebhooksIdWebhookRoute,
} from '../routes'

const app = new OpenAPIHono()

export const webhooksHandler = app
  .openapi(deleteWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWebhooksAuthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWebhooksAuthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWebhooksAuthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWebhooksAuthIdAuthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWebhooksAuthIdAuthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putWebhooksAuthIdAuthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWebhooksIdWebhookRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWebhooksIdWebhookRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putWebhooksIdWebhookRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWebhooksIdWebhookAddToDataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWebhooksIdWebhookAddToDataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWebhooksIdWebhookAddToDataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWebhooksIdWebhookAddToDataKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWebhooksIdWebhookAddToDataKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWebhooksIdWebhookAddToDataKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWebhooksIdWebhookLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
