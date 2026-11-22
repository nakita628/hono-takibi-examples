import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1SdkConnectionsIdRoute,
  getV1SdkConnectionsIdRoute,
  getV1SdkConnectionsLookupKeyRoute,
  getV1SdkConnectionsRoute,
  postV1SdkConnectionsRoute,
  putV1SdkConnectionsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sdkConnectionsHandler = app
  .openapi(getV1SdkConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SdkConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SdkConnectionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1SdkConnectionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1SdkConnectionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SdkConnectionsLookupKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
