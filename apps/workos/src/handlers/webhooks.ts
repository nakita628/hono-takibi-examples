import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteWebhookEndpointsIdRoute,
  getWebhookEndpointsRoute,
  patchWebhookEndpointsIdRoute,
  postWebhookEndpointsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const webhooksHandler = app
  .openapi(getWebhookEndpointsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWebhookEndpointsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchWebhookEndpointsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWebhookEndpointsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
