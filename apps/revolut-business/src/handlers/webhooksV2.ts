import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteWebhooksWebhookIdRoute,
  getWebhooksRoute,
  getWebhooksWebhookIdFailedEventsRoute,
  getWebhooksWebhookIdRoute,
  patchWebhooksWebhookIdRoute,
  postWebhooksRoute,
  postWebhooksWebhookIdRotateSigningSecretRoute,
} from '../routes'

const app = new OpenAPIHono()

export const webhooksV2Handler = app
  .openapi(postWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWebhooksWebhookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchWebhooksWebhookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWebhooksWebhookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWebhooksWebhookIdRotateSigningSecretRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWebhooksWebhookIdFailedEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
