import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAuthPinCodeRoute,
  getAuthStatusRoute,
  postAuthAdminSignUpRoute,
  postAuthChangePasswordRoute,
  postAuthLoginRoute,
  postAuthLogoutRoute,
  postAuthPinCodeRoute,
  postAuthSessionLockRoute,
  postAuthSessionUnlockRoute,
  postAuthValidateTokenRoute,
  putAuthPinCodeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const authHandler = app
  .openapi(postAuthAdminSignUpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthChangePasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthLoginRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthLogoutRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAuthPinCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthPinCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAuthPinCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthSessionLockRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthSessionUnlockRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthValidateTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
