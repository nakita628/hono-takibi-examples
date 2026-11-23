import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteKeysKeyIdOrNameRoute,
  getKeysKeyIdOrNameRoute,
  getKeysRoute,
  patchKeysKeyIdOrNameRoute,
  postKeysRoute,
  putKeysKeyIdOrNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const keysHandler = app
  .openapi(getKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteKeysKeyIdOrNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKeysKeyIdOrNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchKeysKeyIdOrNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putKeysKeyIdOrNameRoute, (c) => {
    throw new Error('Not implemented')
  })
