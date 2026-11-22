import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1WebhookSecretsIdRoute,
  getV1WebhookSecretsIdRoute,
  getV1WebhookSecretsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const webhookSecretsHandler = app
  .openapi(getV1WebhookSecretsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1WebhookSecretsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1WebhookSecretsRoute, (c) => {
    throw new Error('Not implemented')
  })
