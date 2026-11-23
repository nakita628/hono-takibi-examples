import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteWebhookEndpointsWebhookEndpointIdRoute,
  getWebhookEndpointsRoute,
  getWebhookEndpointsWebhookEndpointIdRoute,
  postWebhookEndpointsRoute,
  postWebhookEndpointsWebhookEndpointIdRotateSecretRoute,
  postWebhookEndpointsWebhookEndpointIdRoute,
  postWebhookEndpointsWebhookEndpointIdTestRoute,
} from '../routes'

const app = new OpenAPIHono()

export const webhookEndpointsHandler = app
  .openapi(getWebhookEndpointsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWebhookEndpointsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWebhookEndpointsWebhookEndpointIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWebhookEndpointsWebhookEndpointIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWebhookEndpointsWebhookEndpointIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWebhookEndpointsWebhookEndpointIdRotateSecretRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWebhookEndpointsWebhookEndpointIdTestRoute, (c) => {
    throw new Error('Not implemented')
  })
