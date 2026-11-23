import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiKeysApiKeyIdRoute,
  getApiKeysRoute,
  patchApiKeysApiKeyIdRoute,
  postApiKeysRoute,
} from '../routes'

const app = new OpenAPIHono()

export const apiKeysHandler = app
  .openapi(postApiKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiKeysApiKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiKeysApiKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
