import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAuthMfaFactorsIdRoute,
  deleteAuthSessionRoute,
  getAuthUserProvidersRoute,
  postAuthSessionRoute,
  postAuthTokenRefreshRoute,
  postAuthUserAuthProviderCallbackRoute,
  postAuthUserAuthProviderRegisterRoute,
  postAuthUserAuthProviderResetPasswordRoute,
  postAuthUserAuthProviderRoute,
  postAuthUserAuthProviderUpdateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const authHandler = app
  .openapi(deleteAuthMfaFactorsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthSessionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAuthSessionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthTokenRefreshRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthUserProvidersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthUserAuthProviderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthUserAuthProviderCallbackRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthUserAuthProviderRegisterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthUserAuthProviderResetPasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthUserAuthProviderUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
