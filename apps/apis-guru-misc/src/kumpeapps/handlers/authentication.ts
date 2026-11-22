import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAuthenticationAuthkeyRoute,
  getAuthenticationVerifyotpRoute,
  getAuthkeyRoute,
  patchAppkeyRoute,
  patchAuthenticationAppkeyRoute,
  patchAuthenticationAuthkeyRoute,
  patchAuthkeyRoute,
  postAppkeyRoute,
  postAuthenticationAppkeyRoute,
  postAuthenticationAuthkeyRoute,
  postAuthkeyRoute,
  putAppkeyRoute,
  putAuthenticationAppkeyRoute,
  putAuthenticationAuthkeyRoute,
  putAuthkeyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const authenticationHandler = app
  .openapi(patchAppkeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppkeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAppkeyRoute, (c) => {
    throw new Error('Not implemented')
  })
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
  .openapi(getAuthkeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAuthkeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthkeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAuthkeyRoute, (c) => {
    throw new Error('Not implemented')
  })
