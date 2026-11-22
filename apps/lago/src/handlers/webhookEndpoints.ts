import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteWebhookEndpointsLagoIdRoute,
  getWebhookEndpointsLagoIdRoute,
  getWebhookEndpointsRoute,
  postWebhookEndpointsRoute,
  putWebhookEndpointsLagoIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const webhookEndpointsHandler = app
  .openapi(postWebhookEndpointsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWebhookEndpointsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putWebhookEndpointsLagoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWebhookEndpointsLagoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWebhookEndpointsLagoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
