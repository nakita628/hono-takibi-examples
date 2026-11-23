import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteWebhooksIdIndexRoute,
  getWebhooksIdIndexRoute,
  getWebhooksIndexRoute,
  patchWebhooksIdIndexRoute,
  postWebhooksIdActiveIndexRoute,
  postWebhooksIdInactiveIndexRoute,
  postWebhooksIndexRoute,
  putWebhooksIdIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const webhooksHandler = app
  .openapi(getWebhooksIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWebhooksIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWebhooksIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWebhooksIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchWebhooksIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putWebhooksIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWebhooksIdActiveIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWebhooksIdInactiveIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
