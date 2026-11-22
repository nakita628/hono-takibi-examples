import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAdminRealmsRealmUsersUserIdConsentsClientRoute,
  deleteAdminRealmsRealmUsersUserIdCredentialsCredentialIdRoute,
  deleteAdminRealmsRealmUsersUserIdFederatedIdentityProviderRoute,
  deleteAdminRealmsRealmUsersUserIdGroupsGroupIdRoute,
  deleteAdminRealmsRealmUsersUserIdRoute,
  getAdminRealmsRealmUsersCountRoute,
  getAdminRealmsRealmUsersProfileMetadataRoute,
  getAdminRealmsRealmUsersProfileRoute,
  getAdminRealmsRealmUsersRoute,
  getAdminRealmsRealmUsersUserIdConfiguredUserStorageCredentialTypesRoute,
  getAdminRealmsRealmUsersUserIdConsentsRoute,
  getAdminRealmsRealmUsersUserIdCredentialsRoute,
  getAdminRealmsRealmUsersUserIdFederatedIdentityRoute,
  getAdminRealmsRealmUsersUserIdGroupsCountRoute,
  getAdminRealmsRealmUsersUserIdGroupsRoute,
  getAdminRealmsRealmUsersUserIdOfflineSessionsClientUuidRoute,
  getAdminRealmsRealmUsersUserIdRoute,
  getAdminRealmsRealmUsersUserIdSessionsRoute,
  getAdminRealmsRealmUsersUserIdUnmanagedAttributesRoute,
  postAdminRealmsRealmUsersRoute,
  postAdminRealmsRealmUsersUserIdCredentialsCredentialIdMoveAfterNewPreviousCredentialIdRoute,
  postAdminRealmsRealmUsersUserIdCredentialsCredentialIdMoveToFirstRoute,
  postAdminRealmsRealmUsersUserIdFederatedIdentityProviderRoute,
  postAdminRealmsRealmUsersUserIdImpersonationRoute,
  postAdminRealmsRealmUsersUserIdLogoutRoute,
  putAdminRealmsRealmUsersProfileRoute,
  putAdminRealmsRealmUsersUserIdCredentialsCredentialIdUserLabelRoute,
  putAdminRealmsRealmUsersUserIdDisableCredentialTypesRoute,
  putAdminRealmsRealmUsersUserIdExecuteActionsEmailRoute,
  putAdminRealmsRealmUsersUserIdGroupsGroupIdRoute,
  putAdminRealmsRealmUsersUserIdResetPasswordEmailRoute,
  putAdminRealmsRealmUsersUserIdResetPasswordRoute,
  putAdminRealmsRealmUsersUserIdRoute,
  putAdminRealmsRealmUsersUserIdSendVerifyEmailRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersHandler = app
  .openapi(getAdminRealmsRealmUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRealmsRealmUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmUsersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmUsersProfileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminRealmsRealmUsersProfileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmUsersProfileMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminRealmsRealmUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminRealmsRealmUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmUsersUserIdConfiguredUserStorageCredentialTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmUsersUserIdConsentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminRealmsRealmUsersUserIdConsentsClientRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmUsersUserIdCredentialsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminRealmsRealmUsersUserIdCredentialsCredentialIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postAdminRealmsRealmUsersUserIdCredentialsCredentialIdMoveAfterNewPreviousCredentialIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postAdminRealmsRealmUsersUserIdCredentialsCredentialIdMoveToFirstRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminRealmsRealmUsersUserIdCredentialsCredentialIdUserLabelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminRealmsRealmUsersUserIdDisableCredentialTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminRealmsRealmUsersUserIdExecuteActionsEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmUsersUserIdFederatedIdentityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRealmsRealmUsersUserIdFederatedIdentityProviderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminRealmsRealmUsersUserIdFederatedIdentityProviderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmUsersUserIdGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmUsersUserIdGroupsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminRealmsRealmUsersUserIdGroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminRealmsRealmUsersUserIdGroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRealmsRealmUsersUserIdImpersonationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRealmsRealmUsersUserIdLogoutRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmUsersUserIdOfflineSessionsClientUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminRealmsRealmUsersUserIdResetPasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminRealmsRealmUsersUserIdResetPasswordEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminRealmsRealmUsersUserIdSendVerifyEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmUsersUserIdSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmUsersUserIdUnmanagedAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
