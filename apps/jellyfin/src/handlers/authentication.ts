import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAuthKeysKeyRoute,
  getAuthKeysRoute,
  getAuthPasswordResetProvidersRoute,
  getAuthProvidersRoute,
  getQuickConnectConnectRoute,
  getQuickConnectEnabledRoute,
  postAuthKeysRoute,
  postQuickConnectAuthorizeRoute,
  postQuickConnectInitiateRoute,
  postUsersAuthenticateByNameRoute,
  postUsersAuthenticateWithQuickConnectRoute,
  postUsersForgotPasswordPinRoute,
  postUsersForgotPasswordRoute,
} from '../routes'

const app = new OpenAPIHono()

export const authenticationHandler = app
  .openapi(getAuthKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAuthKeysKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postQuickConnectAuthorizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getQuickConnectConnectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getQuickConnectEnabledRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postQuickConnectInitiateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthPasswordResetProvidersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthProvidersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersAuthenticateByNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersAuthenticateWithQuickConnectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersForgotPasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersForgotPasswordPinRoute, (c) => {
    throw new Error('Not implemented')
  })
