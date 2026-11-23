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
} from './routes'
import {
  deleteV2NameRouteHandler,
  getV2DefaultSupportedIdpsRouteHandler,
  getV2NameRouteHandler,
  getV2ParentDefaultSupportedIdpConfigsRouteHandler,
  getV2ParentInboundSamlConfigsRouteHandler,
  getV2ParentOauthIdpConfigsRouteHandler,
  getV2ParentTenantsRouteHandler,
  getV2RecaptchaConfigRouteHandler,
  patchV2NameRouteHandler,
  postV2AccountsMfaEnrollmentFinalizeRouteHandler,
  postV2AccountsMfaEnrollmentStartRouteHandler,
  postV2AccountsMfaEnrollmentWithdrawRouteHandler,
  postV2AccountsMfaSignInFinalizeRouteHandler,
  postV2AccountsMfaSignInStartRouteHandler,
  postV2AccountsPasskeyEnrollmentFinalizeRouteHandler,
  postV2AccountsPasskeyEnrollmentStartRouteHandler,
  postV2AccountsPasskeySignInFinalizeRouteHandler,
  postV2AccountsPasskeySignInStartRouteHandler,
  postV2AccountsRevokeTokenRouteHandler,
  postV2ParentDefaultSupportedIdpConfigsRouteHandler,
  postV2ParentInboundSamlConfigsRouteHandler,
  postV2ParentOauthIdpConfigsRouteHandler,
  postV2ParentTenantsRouteHandler,
  postV2ProjectIdentityPlatformInitializeAuthRouteHandler,
  postV2ResourceGetIamPolicyRouteHandler,
  postV2ResourceSetIamPolicyRouteHandler,
  postV2ResourceTestIamPermissionsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    postV2AccountsMfaEnrollmentFinalizeRoute,
    postV2AccountsMfaEnrollmentFinalizeRouteHandler,
  )
  .openapi(postV2AccountsMfaEnrollmentStartRoute, postV2AccountsMfaEnrollmentStartRouteHandler)
  .openapi(
    postV2AccountsMfaEnrollmentWithdrawRoute,
    postV2AccountsMfaEnrollmentWithdrawRouteHandler,
  )
  .openapi(postV2AccountsMfaSignInFinalizeRoute, postV2AccountsMfaSignInFinalizeRouteHandler)
  .openapi(postV2AccountsMfaSignInStartRoute, postV2AccountsMfaSignInStartRouteHandler)
  .openapi(
    postV2AccountsPasskeyEnrollmentFinalizeRoute,
    postV2AccountsPasskeyEnrollmentFinalizeRouteHandler,
  )
  .openapi(
    postV2AccountsPasskeyEnrollmentStartRoute,
    postV2AccountsPasskeyEnrollmentStartRouteHandler,
  )
  .openapi(
    postV2AccountsPasskeySignInFinalizeRoute,
    postV2AccountsPasskeySignInFinalizeRouteHandler,
  )
  .openapi(postV2AccountsPasskeySignInStartRoute, postV2AccountsPasskeySignInStartRouteHandler)
  .openapi(postV2AccountsRevokeTokenRoute, postV2AccountsRevokeTokenRouteHandler)
  .openapi(getV2DefaultSupportedIdpsRoute, getV2DefaultSupportedIdpsRouteHandler)
  .openapi(getV2RecaptchaConfigRoute, getV2RecaptchaConfigRouteHandler)
  .openapi(deleteV2NameRoute, deleteV2NameRouteHandler)
  .openapi(getV2NameRoute, getV2NameRouteHandler)
  .openapi(patchV2NameRoute, patchV2NameRouteHandler)
  .openapi(
    getV2ParentDefaultSupportedIdpConfigsRoute,
    getV2ParentDefaultSupportedIdpConfigsRouteHandler,
  )
  .openapi(
    postV2ParentDefaultSupportedIdpConfigsRoute,
    postV2ParentDefaultSupportedIdpConfigsRouteHandler,
  )
  .openapi(getV2ParentInboundSamlConfigsRoute, getV2ParentInboundSamlConfigsRouteHandler)
  .openapi(postV2ParentInboundSamlConfigsRoute, postV2ParentInboundSamlConfigsRouteHandler)
  .openapi(getV2ParentOauthIdpConfigsRoute, getV2ParentOauthIdpConfigsRouteHandler)
  .openapi(postV2ParentOauthIdpConfigsRoute, postV2ParentOauthIdpConfigsRouteHandler)
  .openapi(getV2ParentTenantsRoute, getV2ParentTenantsRouteHandler)
  .openapi(postV2ParentTenantsRoute, postV2ParentTenantsRouteHandler)
  .openapi(
    postV2ProjectIdentityPlatformInitializeAuthRoute,
    postV2ProjectIdentityPlatformInitializeAuthRouteHandler,
  )
  .openapi(postV2ResourceGetIamPolicyRoute, postV2ResourceGetIamPolicyRouteHandler)
  .openapi(postV2ResourceSetIamPolicyRoute, postV2ResourceSetIamPolicyRouteHandler)
  .openapi(postV2ResourceTestIamPermissionsRoute, postV2ResourceTestIamPermissionsRouteHandler)

export default app
