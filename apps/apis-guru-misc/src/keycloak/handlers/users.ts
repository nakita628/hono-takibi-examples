import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteRealmUsersIdConsentsClientRoute,
  deleteRealmUsersIdCredentialsCredentialIdRoute,
  deleteRealmUsersIdFederatedIdentityProviderRoute,
  deleteRealmUsersIdGroupsGroupIdRoute,
  deleteRealmUsersIdRoute,
  getRealmUsersCountRoute,
  getRealmUsersIdConfiguredUserStorageCredentialTypesRoute,
  getRealmUsersIdConsentsRoute,
  getRealmUsersIdCredentialsRoute,
  getRealmUsersIdFederatedIdentityRoute,
  getRealmUsersIdGroupsCountRoute,
  getRealmUsersIdGroupsRoute,
  getRealmUsersIdOfflineSessionsClientIdRoute,
  getRealmUsersIdRoute,
  getRealmUsersIdSessionsRoute,
  getRealmUsersRoute,
  postRealmUsersIdCredentialsCredentialIdMoveAfterNewPreviousCredentialIdRoute,
  postRealmUsersIdCredentialsCredentialIdMoveToFirstRoute,
  postRealmUsersIdFederatedIdentityProviderRoute,
  postRealmUsersIdImpersonationRoute,
  postRealmUsersIdLogoutRoute,
  postRealmUsersRoute,
  putRealmUsersIdCredentialsCredentialIdUserLabelRoute,
  putRealmUsersIdDisableCredentialTypesRoute,
  putRealmUsersIdExecuteActionsEmailRoute,
  putRealmUsersIdGroupsGroupIdRoute,
  putRealmUsersIdResetPasswordRoute,
  putRealmUsersIdRoute,
  putRealmUsersIdSendVerifyEmailRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersHandler = app
  .openapi(getRealmUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRealmUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmUsersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRealmUsersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmUsersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRealmUsersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmUsersIdConfiguredUserStorageCredentialTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmUsersIdConsentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRealmUsersIdConsentsClientRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmUsersIdCredentialsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRealmUsersIdCredentialsCredentialIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRealmUsersIdCredentialsCredentialIdMoveAfterNewPreviousCredentialIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRealmUsersIdCredentialsCredentialIdMoveToFirstRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRealmUsersIdCredentialsCredentialIdUserLabelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRealmUsersIdDisableCredentialTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRealmUsersIdExecuteActionsEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmUsersIdFederatedIdentityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRealmUsersIdFederatedIdentityProviderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRealmUsersIdFederatedIdentityProviderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmUsersIdGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmUsersIdGroupsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRealmUsersIdGroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRealmUsersIdGroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRealmUsersIdImpersonationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRealmUsersIdLogoutRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmUsersIdOfflineSessionsClientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRealmUsersIdResetPasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRealmUsersIdSendVerifyEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmUsersIdSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
