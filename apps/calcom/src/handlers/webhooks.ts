import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2WebhooksWebhookIdRoute,
  getV2WebhooksRoute,
  getV2WebhooksWebhookIdRoute,
  patchV2WebhooksWebhookIdRoute,
  postV2WebhooksRoute,
} from '../routes'

const app = new OpenAPIHono()

export const webhooksHandler = app
  .openapi(postV2WebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2WebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV2WebhooksWebhookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2WebhooksWebhookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2WebhooksWebhookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
