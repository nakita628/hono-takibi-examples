import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2NameRoute,
  getV2DefaultSupportedIdpsRoute,
  getV2NameRoute,
  getV2ParentDefaultSupportedIdpConfigsRoute,
  getV2ParentInboundSamlConfigsRoute,
  getV2ParentOauthIdpConfigsRoute,
  getV2ParentTenantsRoute,
  getV2RecaptchaConfigRoute,
  patchV2NameRoute,
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
  postV2ParentDefaultSupportedIdpConfigsRoute,
  postV2ParentInboundSamlConfigsRoute,
  postV2ParentOauthIdpConfigsRoute,
  postV2ParentTenantsRoute,
  postV2ProjectIdentityPlatformInitializeAuthRoute,
  postV2ResourceGetIamPolicyRoute,
  postV2ResourceSetIamPolicyRoute,
  postV2ResourceTestIamPermissionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v2Handler = app
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
  .openapi(getV2DefaultSupportedIdpsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2RecaptchaConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV2NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ParentDefaultSupportedIdpConfigsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2ParentDefaultSupportedIdpConfigsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ParentInboundSamlConfigsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2ParentInboundSamlConfigsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ParentOauthIdpConfigsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2ParentOauthIdpConfigsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ParentTenantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2ParentTenantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2ProjectIdentityPlatformInitializeAuthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2ResourceGetIamPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2ResourceSetIamPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2ResourceTestIamPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
