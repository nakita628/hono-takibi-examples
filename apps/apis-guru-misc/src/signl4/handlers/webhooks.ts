import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteWebhooksWebhookIdRoute,
  getWebhooksRoute,
  getWebhooksWebhookIdRoute,
  postWebhooksRoute,
  postWebhooksWebhookIdDisableRoute,
  postWebhooksWebhookIdEnableRoute,
  putWebhooksWebhookIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const webhooksHandler = app
  .openapi(getWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWebhooksWebhookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWebhooksWebhookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putWebhooksWebhookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWebhooksWebhookIdDisableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWebhooksWebhookIdEnableRoute, (c) => {
    throw new Error('Not implemented')
  })
