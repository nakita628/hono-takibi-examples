import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteWebhooksIdRoute,
  getWebhooksIdRoute,
  getWebhooksRoute,
  patchWebhooksIdRoute,
  postWebhooksRegenerateTokenIdRoute,
  postWebhooksResendActivityIdRoute,
  postWebhooksRoute,
} from '../routes'

const app = new OpenAPIHono()

export const webhooksHandler = app
  .openapi(getWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWebhooksRegenerateTokenIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWebhooksResendActivityIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWebhooksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWebhooksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchWebhooksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
