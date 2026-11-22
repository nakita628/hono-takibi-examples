import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUserBlocksUsernameRoute,
  deleteUserEmailsRoute,
  deleteUserFollowingUsernameRoute,
  deleteUserGpgKeysGpgKeyIdRoute,
  deleteUserIssueFieldsIssueFieldIdRoute,
  deleteUserIssueTypesIssueTypeIdRoute,
  deleteUserKeysKeyIdRoute,
  deleteUserSocialAccountsRoute,
  deleteUserSshSigningKeysSshSigningKeyIdRoute,
  deleteUsersUsernameAttestationsAttestationIdRoute,
  deleteUsersUsernameAttestationsDigestSubjectDigestRoute,
  getUserAccountIdRoute,
  getUserBlocksRoute,
  getUserBlocksUsernameRoute,
  getUserEmailsRoute,
  getUserFollowersRoute,
  getUserFollowingRoute,
  getUserFollowingUsernameRoute,
  getUserGpgKeysGpgKeyIdRoute,
  getUserGpgKeysRoute,
  getUserIssueFieldsRoute,
  getUserIssueTypesRoute,
  getUserKeysKeyIdRoute,
  getUserKeysRoute,
  getUserPublicEmailsRoute,
  getUserRoute,
  getUserSocialAccountsRoute,
  getUsersRoute,
  getUserSshSigningKeysRoute,
  getUserSshSigningKeysSshSigningKeyIdRoute,
  getUsersUsernameAttestationsSubjectDigestRoute,
  getUsersUsernameFollowersRoute,
  getUsersUsernameFollowingRoute,
  getUsersUsernameFollowingTargetUserRoute,
  getUsersUsernameGpgKeysRoute,
  getUsersUsernameHovercardRoute,
  getUsersUsernameKeysRoute,
  getUsersUsernameRoute,
  getUsersUsernameSocialAccountsRoute,
  getUsersUsernameSshSigningKeysRoute,
  patchUserEmailVisibilityRoute,
  patchUserIssueFieldsIssueFieldIdRoute,
  patchUserRoute,
  postUserEmailsRoute,
  postUserGpgKeysRoute,
  postUserIssueFieldsRoute,
  postUserIssueTypesRoute,
  postUserKeysRoute,
  postUserSocialAccountsRoute,
  postUserSshSigningKeysRoute,
  postUsersUsernameAttestationsBulkListRoute,
  postUsersUsernameAttestationsDeleteRequestRoute,
  putUserBlocksUsernameRoute,
  putUserFollowingUsernameRoute,
  putUserIssueTypesIssueTypeIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersHandler = app
  .openapi(getUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserBlocksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserBlocksUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUserBlocksUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUserBlocksUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUserEmailVisibilityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserEmailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserEmailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUserEmailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserFollowersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserFollowingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserFollowingUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUserFollowingUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUserFollowingUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserGpgKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserGpgKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserGpgKeysGpgKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUserGpgKeysGpgKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserIssueFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserIssueFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUserIssueFieldsIssueFieldIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUserIssueFieldsIssueFieldIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserIssueTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserIssueTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUserIssueTypesIssueTypeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUserIssueTypesIssueTypeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserKeysKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUserKeysKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserPublicEmailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserSocialAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserSocialAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUserSocialAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserSshSigningKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserSshSigningKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserSshSigningKeysSshSigningKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUserSshSigningKeysSshSigningKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUsernameAttestationsBulkListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUsernameAttestationsDeleteRequestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUsernameAttestationsDigestSubjectDigestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUsernameAttestationsAttestationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUsernameAttestationsSubjectDigestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUsernameFollowersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUsernameFollowingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUsernameFollowingTargetUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUsernameGpgKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUsernameHovercardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUsernameKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUsernameSocialAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUsernameSshSigningKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
