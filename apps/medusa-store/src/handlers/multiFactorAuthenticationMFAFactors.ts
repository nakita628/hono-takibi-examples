import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAuthMfaFactorsIdRoute,
  getAuthMfaFactorsRoute,
  postAuthMfaChallengesIdVerifyRoute,
  postAuthMfaFactorsIdVerifyRoute,
  postAuthMfaFactorsRoute,
  postAuthMfaRecoveryCodesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const multiFactorAuthenticationMFAFactorsHandler = app
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
