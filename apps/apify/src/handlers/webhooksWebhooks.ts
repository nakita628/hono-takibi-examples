import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2WebhooksWebhookIdRoute,
  getV2WebhooksRoute,
  getV2WebhooksWebhookIdDispatchesRoute,
  getV2WebhooksWebhookIdRoute,
  postV2WebhooksRoute,
  postV2WebhooksWebhookIdTestRoute,
  putV2WebhooksWebhookIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const webhooksWebhooksHandler = app
  .openapi(getV2WebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2WebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2WebhooksWebhookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2WebhooksWebhookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2WebhooksWebhookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2WebhooksWebhookIdTestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2WebhooksWebhookIdDispatchesRoute, (c) => {
    throw new Error('Not implemented')
  })
