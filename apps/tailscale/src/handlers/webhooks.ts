import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteWebhooksEndpointIdRoute,
  getTailnetTailnetWebhooksRoute,
  getWebhooksEndpointIdRoute,
  patchWebhooksEndpointIdRoute,
  postTailnetTailnetWebhooksRoute,
  postWebhooksEndpointIdRotateRoute,
  postWebhooksEndpointIdTestRoute,
} from '../routes'

const app = new OpenAPIHono()

export const webhooksHandler = app
  .openapi(getTailnetTailnetWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTailnetTailnetWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
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
