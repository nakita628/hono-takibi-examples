import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1EventWebhooksIdRoute,
  getV1EventWebhooksIdLogsRoute,
  getV1EventWebhooksIdRoute,
  getV1EventWebhooksRoute,
  postV1EventWebhooksIdTestRoute,
  postV1EventWebhooksRoute,
  putV1EventWebhooksIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const eventWebhooksHandler = app
  .openapi(getV1EventWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1EventWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1EventWebhooksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1EventWebhooksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1EventWebhooksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1EventWebhooksIdLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1EventWebhooksIdTestRoute, (c) => {
    throw new Error('Not implemented')
  })
