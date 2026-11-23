import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAuthMfaFactorsIdRoute,
  deleteAuthSessionRoute,
  getAuthMfaFactorsRoute,
  getAuthUserProvidersRoute,
  postAuthAuthProviderUserRoute,
  postAuthMfaChallengesIdVerifyRoute,
  postAuthMfaFactorsIdVerifyRoute,
  postAuthMfaFactorsRoute,
  postAuthMfaRecoveryCodesRoute,
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
  .openapi(postAuthMfaChallengesIdVerifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthMfaFactorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthMfaFactorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAuthMfaFactorsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthMfaFactorsIdVerifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthMfaRecoveryCodesRoute, (c) => {
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
  .openapi(postAuthAuthProviderUserRoute, (c) => {
    throw new Error('Not implemented')
  })
