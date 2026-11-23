import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getWebhookEndpointsRoute,
  getWebhookEndpointsWebhookEndpointIdRoute,
  postWebhookEndpointsRoute,
  postWebhookEndpointsWebhookEndpointIdDeleteRoute,
  postWebhookEndpointsWebhookEndpointIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const webhookEndpointsHandler = app
  .openapi(postWebhookEndpointsWebhookEndpointIdDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWebhookEndpointsWebhookEndpointIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWebhookEndpointsWebhookEndpointIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWebhookEndpointsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWebhookEndpointsRoute, (c) => {
    throw new Error('Not implemented')
  })
