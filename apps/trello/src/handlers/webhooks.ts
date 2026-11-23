import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteWebhooksIdRoute,
  getWebhooksIdFieldRoute,
  getWebhooksIdRoute,
  postWebhooksIndexRoute,
  putWebhooksIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const webhooksHandler = app
  .openapi(postWebhooksIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWebhooksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putWebhooksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWebhooksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWebhooksIdFieldRoute, (c) => {
    throw new Error('Not implemented')
  })
