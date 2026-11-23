import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAuthApiKeyKeyRoute,
  getAuthApiKeyInboxInboxIdRoute,
  getAuthApiKeyKeyRoute,
  getAuthApiKeyRoute,
  patchAuthApiKeyKeyRoute,
  postAuthApiKeyInboxInboxIdRoute,
  postAuthApiKeyRoute,
  postAuthEphemeralRoute,
  postAuthGetJWTRoute,
  postAuthResetPasswordRoute,
  postAuthRoute,
  postAuthTokenRoute,
} from '../routes'

const app = new OpenAPIHono()

export const authHandler = app
  .openapi(postAuthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthApiKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthApiKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthApiKeyInboxInboxIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthApiKeyInboxInboxIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAuthApiKeyKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthApiKeyKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAuthApiKeyKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthEphemeralRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthGetJWTRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthResetPasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
