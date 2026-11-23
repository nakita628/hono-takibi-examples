import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiKeysIdRoute,
  getApiKeysIdRoute,
  getApiKeysMeRoute,
  getApiKeysRoute,
  postApiKeysIdRotateRoute,
  postApiKeysRoute,
  putApiKeysIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const apiKeysHandler = app
  .openapi(getApiKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiKeysMeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiKeysIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiKeysIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiKeysIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiKeysIdRotateRoute, (c) => {
    throw new Error('Not implemented')
  })
