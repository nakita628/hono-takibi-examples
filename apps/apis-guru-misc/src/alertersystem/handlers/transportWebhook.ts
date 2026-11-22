import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiTransportWebhookIdRoute,
  getApiTransportWebhookIdRoute,
  getApiTransportWebhookRoute,
  postApiTransportWebhookRoute,
  putApiTransportWebhookIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const transportWebhookHandler = app
  .openapi(getApiTransportWebhookRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTransportWebhookRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiTransportWebhookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportWebhookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiTransportWebhookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
