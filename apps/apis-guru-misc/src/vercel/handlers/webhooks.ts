import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1WebhooksIdRoute,
  getV1WebhooksIdRoute,
  getV1WebhooksRoute,
  postV1WebhooksRoute,
} from '../routes'

const app = new OpenAPIHono()

export const webhooksHandler = app
  .openapi(getV1WebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1WebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1WebhooksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1WebhooksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
