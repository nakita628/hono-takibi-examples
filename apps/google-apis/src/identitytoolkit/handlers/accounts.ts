import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postV2AccountsMfaEnrollmentFinalizeRoute,
  postV2AccountsMfaEnrollmentStartRoute,
  postV2AccountsMfaEnrollmentWithdrawRoute,
  postV2AccountsMfaSignInFinalizeRoute,
  postV2AccountsMfaSignInStartRoute,
  postV2AccountsPasskeyEnrollmentFinalizeRoute,
  postV2AccountsPasskeyEnrollmentStartRoute,
  postV2AccountsPasskeySignInFinalizeRoute,
  postV2AccountsPasskeySignInStartRoute,
  postV2AccountsRevokeTokenRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accountsHandler = app
  .openapi(postV2AccountsMfaEnrollmentFinalizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2AccountsMfaEnrollmentStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2AccountsMfaEnrollmentWithdrawRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2AccountsMfaSignInFinalizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2AccountsMfaSignInStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2AccountsPasskeyEnrollmentFinalizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2AccountsPasskeyEnrollmentStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2AccountsPasskeySignInFinalizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2AccountsPasskeySignInStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2AccountsRevokeTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
