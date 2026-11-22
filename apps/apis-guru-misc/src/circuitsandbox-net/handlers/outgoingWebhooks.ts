import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteWebhooksIdRoute,
  deleteWebhooksRoute,
  getWebhooksIdRoute,
  getWebhooksRoute,
  postWebhooksPresenceRoute,
  postWebhooksRoute,
  putWebhooksIdRoute,
  putWebhooksPresenceIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const outgoingWebhooksHandler = app
  .openapi(deleteWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWebhooksPresenceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putWebhooksPresenceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWebhooksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWebhooksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putWebhooksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
