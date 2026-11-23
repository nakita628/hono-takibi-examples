import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAuthenticationAuthenticationIdEligibilityCheckRoute,
  postAuthenticationAuthenticationIdAuthenticateRoute,
  postAuthenticationAuthenticationIdEligibilityCheckRoute,
  postAuthenticationAuthenticationIdEligibilityRoute,
  postAuthenticationAuthenticationIdEnabledAuthnMethodsTokenRoute,
  postAuthenticationAuthenticationIdRedirectRoute,
  postAuthenticationAuthenticationIdSyncRoute,
  postAuthenticationRoute,
} from '../routes'

const app = new OpenAPIHono()

export const authenticationHandler = app
  .openapi(postAuthenticationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthenticationAuthenticationIdEligibilityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthenticationAuthenticationIdAuthenticateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthenticationAuthenticationIdRedirectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthenticationAuthenticationIdSyncRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthenticationAuthenticationIdEnabledAuthnMethodsTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthenticationAuthenticationIdEligibilityCheckRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthenticationAuthenticationIdEligibilityCheckRoute, (c) => {
    throw new Error('Not implemented')
  })
