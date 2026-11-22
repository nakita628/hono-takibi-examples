import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1WebhooksRoute,
  getV1WebhooksWebhookIdRoute,
  postV1WebhooksRoute,
  postV1WebhooksWebhookIdPingRoute,
  postV1WebhooksWebhookIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const webhooksHandler = app
  .openapi(getV1WebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1WebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1WebhooksWebhookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1WebhooksWebhookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1WebhooksWebhookIdPingRoute, (c) => {
    throw new Error('Not implemented')
  })
