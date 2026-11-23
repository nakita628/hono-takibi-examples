import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteKeysUidOrKeyRoute,
  getKeysRoute,
  getKeysUidOrKeyRoute,
  patchKeysUidOrKeyRoute,
  postKeysRoute,
} from '../routes'

const app = new OpenAPIHono()

export const keysHandler = app
  .openapi(getKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKeysUidOrKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteKeysUidOrKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchKeysUidOrKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
