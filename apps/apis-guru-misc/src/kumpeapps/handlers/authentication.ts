import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAuthenticationAuthkeyRoute,
  getAuthenticationVerifyotpRoute,
  patchAuthenticationAppkeyRoute,
  patchAuthenticationAuthkeyRoute,
  postAuthenticationAppkeyRoute,
  postAuthenticationAuthkeyRoute,
  putAuthenticationAppkeyRoute,
  putAuthenticationAuthkeyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const authenticationHandler = app
  .openapi(patchAuthenticationAppkeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthenticationAppkeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAuthenticationAppkeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthenticationAuthkeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAuthenticationAuthkeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthenticationAuthkeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAuthenticationAuthkeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthenticationVerifyotpRoute, (c) => {
    throw new Error('Not implemented')
  })
