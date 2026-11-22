import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAuthPinCodeRoute,
  getAuthStatusRoute,
  getOauthMobileRedirectRoute,
  postAuthAdminSignUpRoute,
  postAuthChangePasswordRoute,
  postAuthLoginRoute,
  postAuthLogoutRoute,
  postAuthPinCodeRoute,
  postAuthSessionLockRoute,
  postAuthSessionUnlockRoute,
  postAuthValidateTokenRoute,
  postOauthAuthorizeRoute,
  postOauthBackchannelLogoutRoute,
  postOauthCallbackRoute,
  postOauthLinkRoute,
  postOauthUnlinkRoute,
  putAuthPinCodeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const authenticationHandler = app
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
  .openapi(postOauthAuthorizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOauthBackchannelLogoutRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOauthCallbackRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOauthLinkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOauthMobileRedirectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOauthUnlinkRoute, (c) => {
    throw new Error('Not implemented')
  })
