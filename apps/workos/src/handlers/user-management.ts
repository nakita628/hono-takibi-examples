import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUserManagementAuthkitOauthResourcesIdRoute,
  deleteUserManagementOrganizationMembershipsIdRoute,
  deleteUserManagementRedirectUrisIdRoute,
  deleteUserManagementUsersIdRoute,
  deleteUserManagementUsersUserIdAuthorizedApplicationsApplicationIdRoute,
  deleteUserManagementUsersUserIdConnectedAccountsSlugRoute,
  deleteUserManagementWaitlistEntriesIdRoute,
  getUserManagementAuthkitOauthResourcesRoute,
  getUserManagementAuthorizeRoute,
  getUserManagementCorsOriginsRoute,
  getUserManagementEmailVerificationIdRoute,
  getUserManagementInvitationsByTokenTokenRoute,
  getUserManagementInvitationsIdRoute,
  getUserManagementInvitationsRoute,
  getUserManagementJwtTemplateRoute,
  getUserManagementMagicAuthIdRoute,
  getUserManagementOrganizationMembershipsIdRoute,
  getUserManagementOrganizationMembershipsOmIdGroupsRoute,
  getUserManagementOrganizationMembershipsRoute,
  getUserManagementPasswordResetIdRoute,
  getUserManagementRadarChallengesIdRoute,
  getUserManagementRedirectUrisRoute,
  getUserManagementSessionsLogoutRoute,
  getUserManagementUsersExternalIdExternalIdRoute,
  getUserManagementUsersIdIdentitiesRoute,
  getUserManagementUsersIdRoute,
  getUserManagementUsersIdSessionsRoute,
  getUserManagementUsersRoute,
  getUserManagementUsersUserIdApiKeysRoute,
  getUserManagementUsersUserIdAuthorizedApplicationsRoute,
  getUserManagementUsersUserIdConnectedAccountsSlugRoute,
  getUserManagementUsersUserIdDataProvidersRoute,
  getUserManagementUsersUserIdFeatureFlagsRoute,
  getUserManagementUsersUserlandUserIdAuthFactorsRoute,
  getUserManagementWaitlistsIdEntriesRoute,
  getUserManagementWaitlistsIdRoute,
  getUserManagementWaitlistsRoute,
  postUserManagementAuthenticateRoute,
  postUserManagementAuthkitOauthResourcesRoute,
  postUserManagementAuthorizeDeviceRoute,
  postUserManagementCorsOriginsRoute,
  postUserManagementInvitationsIdAcceptRoute,
  postUserManagementInvitationsIdResendRoute,
  postUserManagementInvitationsIdRevokeRoute,
  postUserManagementInvitationsRoute,
  postUserManagementMagicAuthRoute,
  postUserManagementOrganizationMembershipsRoute,
  postUserManagementPasswordResetConfirmRoute,
  postUserManagementPasswordResetRoute,
  postUserManagementRadarChallengesRoute,
  postUserManagementRedirectUrisRoute,
  postUserManagementSessionsRevokeRoute,
  postUserManagementUsersIdEmailChangeConfirmRoute,
  postUserManagementUsersIdEmailChangeSendRoute,
  postUserManagementUsersIdEmailVerificationConfirmRoute,
  postUserManagementUsersIdEmailVerificationSendRoute,
  postUserManagementUsersRoute,
  postUserManagementUsersUserIdApiKeysRoute,
  postUserManagementUsersUserIdConnectedAccountsSlugRoute,
  postUserManagementUsersUserlandUserIdAuthFactorsRoute,
  postUserManagementWaitlistEntriesIdApproveRoute,
  postUserManagementWaitlistEntriesIdDenyRoute,
  postUserManagementWaitlistsIdEntriesRoute,
  putUserManagementJwtTemplateRoute,
  putUserManagementOrganizationMembershipsIdDeactivateRoute,
  putUserManagementOrganizationMembershipsIdReactivateRoute,
  putUserManagementOrganizationMembershipsIdRoute,
  putUserManagementUsersIdRoute,
  putUserManagementUsersUserIdConnectedAccountsSlugRoute,
} from '../routes'

const app = new OpenAPIHono()

export const userManagementHandler = app
  .openapi(postUserManagementAuthenticateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserManagementAuthkitOauthResourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserManagementAuthkitOauthResourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUserManagementAuthkitOauthResourcesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserManagementAuthorizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserManagementAuthorizeDeviceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserManagementCorsOriginsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserManagementCorsOriginsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserManagementEmailVerificationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserManagementInvitationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserManagementInvitationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserManagementInvitationsByTokenTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserManagementInvitationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserManagementInvitationsIdAcceptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserManagementInvitationsIdResendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserManagementInvitationsIdRevokeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserManagementJwtTemplateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUserManagementJwtTemplateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserManagementMagicAuthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserManagementMagicAuthIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserManagementOrganizationMembershipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserManagementOrganizationMembershipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserManagementOrganizationMembershipsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUserManagementOrganizationMembershipsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUserManagementOrganizationMembershipsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUserManagementOrganizationMembershipsIdDeactivateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUserManagementOrganizationMembershipsIdReactivateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserManagementOrganizationMembershipsOmIdGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserManagementPasswordResetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserManagementPasswordResetConfirmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserManagementPasswordResetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserManagementRadarChallengesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserManagementRadarChallengesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserManagementRedirectUrisRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserManagementRedirectUrisRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUserManagementRedirectUrisIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserManagementSessionsLogoutRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserManagementSessionsRevokeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserManagementUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserManagementUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserManagementUsersExternalIdExternalIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUserManagementUsersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserManagementUsersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUserManagementUsersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserManagementUsersIdEmailChangeConfirmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserManagementUsersIdEmailChangeSendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserManagementUsersIdEmailVerificationConfirmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserManagementUsersIdEmailVerificationSendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserManagementUsersIdIdentitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserManagementUsersIdSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserManagementUsersUserIdApiKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserManagementUsersUserIdApiKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserManagementUsersUserIdFeatureFlagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserManagementUsersUserIdAuthorizedApplicationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUserManagementUsersUserIdAuthorizedApplicationsApplicationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserManagementUsersUserIdConnectedAccountsSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUserManagementUsersUserIdConnectedAccountsSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserManagementUsersUserIdConnectedAccountsSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUserManagementUsersUserIdConnectedAccountsSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserManagementUsersUserIdDataProvidersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserManagementUsersUserlandUserIdAuthFactorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserManagementUsersUserlandUserIdAuthFactorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUserManagementWaitlistEntriesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserManagementWaitlistEntriesIdApproveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserManagementWaitlistEntriesIdDenyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserManagementWaitlistsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserManagementWaitlistsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserManagementWaitlistsIdEntriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserManagementWaitlistsIdEntriesRoute, (c) => {
    throw new Error('Not implemented')
  })
