import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiWebhooksWebhookIdRoute,
  getApiWebhooksRoute,
  getApiWebhooksWebhookIdRoute,
  patchApiWebhooksWebhookIdRoute,
  postApiWebhooksRoute,
  postApiWebhooksWebhookIdRotateSigningSecretRoute,
} from '../routes'

const app = new OpenAPIHono()

export const webhooksHandler = app
  .openapi(postApiWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiWebhooksWebhookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiWebhooksWebhookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiWebhooksWebhookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiWebhooksWebhookIdRotateSigningSecretRoute, (c) => {
    throw new Error('Not implemented')
  })
