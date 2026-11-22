import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiKeysApiKeyIdRoute,
  getApiKeysApiKeyIdRoute,
  getApiKeysRoute,
  patchApiKeysApiKeyIdRoute,
  postApiKeysRoute,
  putApiKeysApiKeyIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const apiKeysHandler = app
  .openapi(getApiKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiKeysApiKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiKeysApiKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiKeysApiKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiKeysApiKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
