import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1SdkWebhooksIdRoute,
  getV1SdkConnectionsIdWebhooksRoute,
  postV1SdkConnectionsIdWebhooksRoute,
  postV1SdkWebhooksIdTestRoute,
  putV1SdkWebhooksIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sdkWebhooksHandler = app
  .openapi(getV1SdkConnectionsIdWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SdkConnectionsIdWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1SdkWebhooksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1SdkWebhooksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SdkWebhooksIdTestRoute, (c) => {
    throw new Error('Not implemented')
  })
