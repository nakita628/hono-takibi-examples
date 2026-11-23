import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiKeyApiKeyIdRoute,
  getApiKeyApiKeyIdRoute,
  getApiKeyRoute,
  postApiKeyRoute,
  putApiKeyApiKeyIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const apiKeyHandler = app
  .openapi(getApiKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiKeyApiKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiKeyApiKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiKeyApiKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
