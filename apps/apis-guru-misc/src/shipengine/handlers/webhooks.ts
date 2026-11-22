import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1EnvironmentWebhooksWebhookIdRoute,
  getV1EnvironmentWebhooksRoute,
  getV1EnvironmentWebhooksWebhookIdRoute,
  postV1EnvironmentWebhooksRoute,
  putV1EnvironmentWebhooksWebhookIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const webhooksHandler = app
  .openapi(getV1EnvironmentWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1EnvironmentWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1EnvironmentWebhooksWebhookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1EnvironmentWebhooksWebhookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1EnvironmentWebhooksWebhookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
