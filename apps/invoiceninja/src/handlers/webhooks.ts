import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1WebhooksIdRoute,
  getApiV1WebhooksCreateRoute,
  getApiV1WebhooksIdEditRoute,
  getApiV1WebhooksIdRoute,
  getApiV1WebhooksRoute,
  postApiV1WebhooksBulkRoute,
  postApiV1WebhooksRoute,
  putApiV1WebhooksIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const webhooksHandler = app
  .openapi(getApiV1WebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1WebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1WebhooksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1WebhooksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1WebhooksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1WebhooksIdEditRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1WebhooksCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1WebhooksBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
