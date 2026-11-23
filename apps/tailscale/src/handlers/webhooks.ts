import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteWebhooksEndpointIdRoute,
  getWebhooksEndpointIdRoute,
  patchWebhooksEndpointIdRoute,
  postWebhooksEndpointIdRotateRoute,
  postWebhooksEndpointIdTestRoute,
} from '../routes'

const app = new OpenAPIHono()

export const webhooksHandler = app
  .openapi(getWebhooksEndpointIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchWebhooksEndpointIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWebhooksEndpointIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWebhooksEndpointIdTestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWebhooksEndpointIdRotateRoute, (c) => {
    throw new Error('Not implemented')
  })
