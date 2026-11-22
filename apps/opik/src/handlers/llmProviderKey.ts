import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1PrivateLlmProviderKeyIdRoute,
  getV1PrivateLlmProviderKeyRoute,
  patchV1PrivateLlmProviderKeyIdRoute,
  postV1PrivateLlmProviderKeyAuthConfigTestRoute,
  postV1PrivateLlmProviderKeyDeleteRoute,
  postV1PrivateLlmProviderKeyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const llmProviderKeyHandler = app
  .openapi(postV1PrivateLlmProviderKeyDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateLlmProviderKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateLlmProviderKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateLlmProviderKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1PrivateLlmProviderKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateLlmProviderKeyAuthConfigTestRoute, (c) => {
    throw new Error('Not implemented')
  })
