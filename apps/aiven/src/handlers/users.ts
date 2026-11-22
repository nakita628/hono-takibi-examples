import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccessTokenTokenPrefixRoute,
  deleteMeAuthenticationMethodsUserAuthenticationMethodIdRoute,
  deleteOrganizationOrganizationIdUserMemberUserIdAccessTokenTokenPrefixRoute,
  deleteOrganizationOrganizationIdUserMemberUserIdRoute,
  deleteUserUserIdRoute,
  getAccessTokenRoute,
  getMeAccountInvitesRoute,
  getMeAuthenticationMethodsRoute,
  getMeReferralValidationReferralCodeRoute,
  getMeRoute,
  getOrganizationOrganizationIdUserMemberUserIdAccessTokensRoute,
  getOrganizationOrganizationIdUserMemberUserIdAuthenticationMethodsRoute,
  getOrganizationOrganizationIdUserMemberUserIdPermissionsRoute,
  getOrganizationOrganizationIdUserMemberUserIdRoute,
  getOrganizationOrganizationIdUserMemberUserIdUserGroupsRoute,
  getOrganizationOrganizationIdUserRoute,
  getUserCreditCodeCreditCodeRoute,
  patchMeRoute,
  patchOrganizationOrganizationIdUserMemberUserIdRoute,
  postAccessTokenRoute,
  postMeAccountInvitesAcceptRoute,
  postMeAccountInvitesRejectRoute,
  postMeExpireTokensRoute,
  postMeLogoutRoute,
  postMePasswordStrengthRoute,
  postOrganizationOrganizationIdUserMemberUserIdResetPasswordRoute,
  postUserauthLoginOptionsRoute,
  postUserauthRoute,
  postUserPasswordResetRequestRoute,
  postUserPasswordResetVerificationCodeRoute,
  postUserPasswordStrengthRoute,
  postUserVerifyEmailVerificationCodeRoute,
  putAccessTokenTokenPrefixRoute,
  putMe2faOtpRoute,
  putMe2faRoute,
  putMePasswordRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersHandler = app
  .openapi(postAccessTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccessTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccessTokenTokenPrefixRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccessTokenTokenPrefixRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMePasswordStrengthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserPasswordStrengthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationOrganizationIdUserMemberUserIdUserGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationOrganizationIdUserMemberUserIdPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationOrganizationIdUserMemberUserIdAuthenticationMethodsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationOrganizationIdUserMemberUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationOrganizationIdUserMemberUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchOrganizationOrganizationIdUserMemberUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationOrganizationIdUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationOrganizationIdUserMemberUserIdResetPasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationOrganizationIdUserMemberUserIdAccessTokenTokenPrefixRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationOrganizationIdUserMemberUserIdAccessTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMe2faRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMe2faOtpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUserUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeAccountInvitesAcceptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeAccountInvitesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeAccountInvitesRejectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserauthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserauthLoginOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeAuthenticationMethodsUserAuthenticationMethodIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeAuthenticationMethodsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeExpireTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeLogoutRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMePasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserPasswordResetVerificationCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserPasswordResetRequestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserVerifyEmailVerificationCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserCreditCodeCreditCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeReferralValidationReferralCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
