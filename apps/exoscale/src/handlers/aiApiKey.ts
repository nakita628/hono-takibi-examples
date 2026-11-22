import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAiApiKeyIdRoute,
  getAiApiKeyIdRevealRoute,
  getAiApiKeyIdRoute,
  getAiApiKeyRoute,
  getAiQuotaRoute,
  patchAiApiKeyIdRoute,
  postAiApiKeyIdRotateRoute,
  postAiApiKeyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const aiApiKeyHandler = app
  .openapi(deleteAiApiKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAiApiKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAiApiKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAiApiKeyIdRotateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAiApiKeyIdRevealRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAiApiKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAiApiKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAiQuotaRoute, (c) => {
    throw new Error('Not implemented')
  })
