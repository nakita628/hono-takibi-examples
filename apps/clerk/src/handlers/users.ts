import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUsersUserIdBackupCodeRoute,
  deleteUsersUserIdExternalAccountsExternalAccountIdRoute,
  deleteUsersUserIdMfaRoute,
  deleteUsersUserIdPasskeysPasskeyIdentificationIdRoute,
  deleteUsersUserIdProfileImageRoute,
  deleteUsersUserIdRoute,
  deleteUsersUserIdTotpRoute,
  deleteUsersUserIdTrustedDevicesTrustedDeviceIdRoute,
  deleteUsersUserIdWeb3WalletsWeb3WalletIdentificationIdRoute,
  getUsersCountRoute,
  getUsersRoute,
  getUsersUserIdBillingCreditsRoute,
  getUsersUserIdBillingSubscriptionRoute,
  getUsersUserIdOauthAccessTokensProviderRoute,
  getUsersUserIdOrganizationInvitationsRoute,
  getUsersUserIdOrganizationMembershipsRoute,
  getUsersUserIdRoute,
  getUsersUserIdTrustedDevicesRoute,
  patchUsersUserIdMetadataRoute,
  patchUsersUserIdRoute,
  postUsersBanRoute,
  postUsersRoute,
  postUsersUnbanRoute,
  postUsersUserIdBanRoute,
  postUsersUserIdBillingCreditsRoute,
  postUsersUserIdLockRoute,
  postUsersUserIdMergeRoute,
  postUsersUserIdProfileImageRoute,
  postUsersUserIdRemovePasswordRoute,
  postUsersUserIdUnbanRoute,
  postUsersUserIdUnlockRoute,
  postUsersUserIdVerifyPasswordRoute,
  postUsersUserIdVerifyTotpRoute,
  putUsersUserIdEmailAddressRoute,
  putUsersUserIdMetadataRoute,
  putUsersUserIdPhoneNumberRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersHandler = app
  .openapi(putUsersUserIdEmailAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUsersUserIdPhoneNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdBanRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdUnbanRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersBanRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUnbanRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdLockRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdUnlockRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdMergeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdProfileImageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdProfileImageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUsersUserIdMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdBillingSubscriptionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdBillingCreditsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdBillingCreditsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdOauthAccessTokensProviderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdOrganizationMembershipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdOrganizationInvitationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdRemovePasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdVerifyPasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdVerifyTotpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdMfaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdBackupCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdPasskeysPasskeyIdentificationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdTrustedDevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdTrustedDevicesTrustedDeviceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdWeb3WalletsWeb3WalletIdentificationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdTotpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdExternalAccountsExternalAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
