import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1RemotepathmappingIdRoute,
  getApiV1RemotepathmappingIdRoute,
  getApiV1RemotepathmappingRoute,
  postApiV1RemotepathmappingRoute,
  putApiV1RemotepathmappingIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const remotePathMappingHandler = app
  .openapi(getApiV1RemotepathmappingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1RemotepathmappingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1RemotepathmappingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1RemotepathmappingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1RemotepathmappingRoute, (c) => {
    throw new Error('Not implemented')
  })
