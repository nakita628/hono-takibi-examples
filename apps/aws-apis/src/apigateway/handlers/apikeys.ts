import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApikeysApiKeyRoute,
  getApikeysApiKeyRoute,
  getApikeysRoute,
  patchApikeysApiKeyRoute,
  postApikeysRoute,
} from '../routes'

const app = new OpenAPIHono()

export const apikeysHandler = app
  .openapi(postApikeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApikeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApikeysApiKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApikeysApiKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApikeysApiKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
