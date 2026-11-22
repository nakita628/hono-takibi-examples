import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2ConnectionsConnectionIdRoute,
  getApiV2ConnectionsConnectionIdRoute,
  getApiV2ConnectionsEnqueueTestRoute,
  getApiV2ConnectionsRoute,
  patchApiV2ConnectionsConnectionIdRoute,
  patchApiV2ConnectionsRoute,
  postApiV2ConnectionsDefaultsRoute,
  postApiV2ConnectionsEnqueueTestRoute,
  postApiV2ConnectionsRoute,
  postApiV2ConnectionsTestRoute,
} from '../routes'

const app = new OpenAPIHono()

export const connectionHandler = app
  .openapi(deleteApiV2ConnectionsConnectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ConnectionsConnectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2ConnectionsConnectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ConnectionsEnqueueTestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ConnectionsEnqueueTestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2ConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ConnectionsTestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ConnectionsDefaultsRoute, (c) => {
    throw new Error('Not implemented')
  })
