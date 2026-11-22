import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiKeysApiKeyIDRoute,
  getApiKeysApiKeyIDRoute,
  getApiKeysApiKeyIDSecretRoute,
  getApiKeysRoute,
  patchApiKeysApiKeyIDRoute,
  postApiKeysApiKeyIDRevokeRoute,
  postApiKeysRoute,
  postApiKeysVerifyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const apiKeysHandler = app
  .openapi(postApiKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiKeysApiKeyIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiKeysApiKeyIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiKeysApiKeyIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiKeysApiKeyIDSecretRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiKeysApiKeyIDRevokeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiKeysVerifyRoute, (c) => {
    throw new Error('Not implemented')
  })
