import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteWebhooksWebhookGidRoute,
  getWebhooksRoute,
  getWebhooksWebhookGidRoute,
  postWebhooksRoute,
  putWebhooksWebhookGidRoute,
} from '../routes'

const app = new OpenAPIHono()

export const webhooksHandler = app
  .openapi(getWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWebhooksWebhookGidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWebhooksWebhookGidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putWebhooksWebhookGidRoute, (c) => {
    throw new Error('Not implemented')
  })
