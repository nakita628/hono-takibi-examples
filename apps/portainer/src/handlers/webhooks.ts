import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteWebhooksIdRoute,
  getWebhooksRoute,
  postWebhooksIdRoute,
  postWebhooksRoute,
  putWebhooksIdRoute,
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
  .openapi(postWebhooksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putWebhooksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
