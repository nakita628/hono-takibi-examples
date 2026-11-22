import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV3RemotepathmappingIdRoute,
  getApiV3RemotepathmappingIdRoute,
  getApiV3RemotepathmappingRoute,
  postApiV3RemotepathmappingRoute,
  putApiV3RemotepathmappingIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const remotePathMappingHandler = app
  .openapi(postApiV3RemotepathmappingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3RemotepathmappingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV3RemotepathmappingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV3RemotepathmappingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3RemotepathmappingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
