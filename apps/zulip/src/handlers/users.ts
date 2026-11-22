import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAttachmentsAttachmentIdRoute,
  deleteUsersMeAlertWordsRoute,
  deleteUsersMeAndroidGcmRegIdRoute,
  deleteUsersMeApnsDeviceTokenRoute,
  deleteUsersMeAvatarRoute,
  deleteUsersMeMutedUsersMutedUserIdRoute,
  deleteUsersMeProfileDataRoute,
  deleteUsersMeRoute,
  deleteUsersUserIdRoute,
  getAttachmentsRoute,
  getBotsBotIdApiKeyRoute,
  getUserGroupsRoute,
  getUserGroupsUserGroupIdMembersRoute,
  getUserGroupsUserGroupIdMembersUserIdRoute,
  getUserGroupsUserGroupIdSubgroupsRoute,
  getUsersEmailRoute,
  getUsersMeAlertWordsRoute,
  getUsersMeRoute,
  getUsersRoute,
  getUsersUserIdOrEmailPresenceRoute,
  getUsersUserIdRoute,
  getUsersUserIdStatusRoute,
  patchSettingsRoute,
  patchUserGroupsUserGroupIdRoute,
  patchUsersEmailRoute,
  patchUsersMeProfileDataRoute,
  patchUsersUserIdRoute,
  postBotsBotIdApiKeyRegenerateRoute,
  postMessagesMessageIdTypingRoute,
  postTypingRoute,
  postUserGroupsCreateRoute,
  postUserGroupsUserGroupIdDeactivateRoute,
  postUserGroupsUserGroupIdMembersRoute,
  postUserGroupsUserGroupIdSubgroupsRoute,
  postUsersMeAlertWordsRoute,
  postUsersMeAndroidGcmRegIdRoute,
  postUsersMeApiKeyRegenerateRoute,
  postUsersMeApnsDeviceTokenRoute,
  postUsersMeAvatarRoute,
  postUsersMeMutedUsersMutedUserIdRoute,
  postUsersMePresenceRoute,
  postUsersMeStatusRoute,
  postUsersRoute,
  postUsersUserIdReactivateRoute,
  postUsersUserIdStatusRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersHandler = app
  .openapi(getAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAttachmentsAttachmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdReactivateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdOrEmailPresenceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersMeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersMeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersMeApiKeyRegenerateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersMeAlertWordsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersMeAlertWordsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersMeAlertWordsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersMePresenceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersMeProfileDataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersMeProfileDataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersMeStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersMeMutedUsersMutedUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersMeMutedUsersMutedUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersMeApnsDeviceTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersMeApnsDeviceTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersMeAndroidGcmRegIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersMeAndroidGcmRegIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersMeAvatarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersMeAvatarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersEmailRoute, (c) => {
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
  .openapi(patchSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTypingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMessagesMessageIdTypingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserGroupsCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserGroupsUserGroupIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserGroupsUserGroupIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUserGroupsUserGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserGroupsUserGroupIdSubgroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserGroupsUserGroupIdSubgroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserGroupsUserGroupIdMembersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserGroupsUserGroupIdDeactivateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBotsBotIdApiKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBotsBotIdApiKeyRegenerateRoute, (c) => {
    throw new Error('Not implemented')
  })
