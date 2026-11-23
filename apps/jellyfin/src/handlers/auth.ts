import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAuthKeysKeyRoute,
  getAuthKeysRoute,
  getAuthPasswordResetProvidersRoute,
  getAuthProvidersRoute,
  postAuthKeysRoute,
} from '../routes'

const app = new OpenAPIHono()

export const authHandler = app
  .openapi(getAuthKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAuthKeysKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthPasswordResetProvidersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthProvidersRoute, (c) => {
    throw new Error('Not implemented')
  })
