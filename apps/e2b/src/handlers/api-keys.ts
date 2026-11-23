import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiKeysApiKeyIDRoute,
  getApiKeysRoute,
  patchApiKeysApiKeyIDRoute,
  postApiKeysRoute,
} from '../routes'

const app = new OpenAPIHono()

export const apiKeysHandler = app
  .openapi(getApiKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiKeysApiKeyIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiKeysApiKeyIDRoute, (c) => {
    throw new Error('Not implemented')
  })
