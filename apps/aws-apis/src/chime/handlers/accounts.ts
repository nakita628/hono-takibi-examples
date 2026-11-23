import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdBotsBotIdEventsConfigurationRoute,
  deleteAccountsAccountIdRoomsRoomIdMembershipsMemberIdRoute,
  deleteAccountsAccountIdRoomsRoomIdRoute,
  deleteAccountsAccountIdRoute,
  getAccountsAccountIdBotsBotIdEventsConfigurationRoute,
  getAccountsAccountIdBotsBotIdRoute,
  getAccountsAccountIdBotsRoute,
  getAccountsAccountIdRetentionSettingsRoute,
  getAccountsAccountIdRoomsRoomIdMembershipsRoute,
  getAccountsAccountIdRoomsRoomIdRoute,
  getAccountsAccountIdRoomsRoute,
  getAccountsAccountIdRoute,
  getAccountsAccountIdSettingsRoute,
  getAccountsAccountIdUsersRoute,
  getAccountsAccountIdUsersUserIdRoute,
  getAccountsAccountIdUsersUserIdSettingsRoute,
  getAccountsRoute,
  postAccountsAccountIdBotsBotIdOperationRegenerateSecurityTokenRoute,
  postAccountsAccountIdBotsBotIdRoute,
  postAccountsAccountIdBotsRoute,
  postAccountsAccountIdConversationsConversationIdMessagesMessageIdOperationRedactRoute,
  postAccountsAccountIdOperationAssociateSigninDelegateGroupsRoute,
  postAccountsAccountIdOperationDisassociateSigninDelegateGroupsRoute,
  postAccountsAccountIdRoomsRoomIdMembershipsMemberIdRoute,
  postAccountsAccountIdRoomsRoomIdMembershipsOperationBatchCreateRoute,
  postAccountsAccountIdRoomsRoomIdMembershipsRoute,
  postAccountsAccountIdRoomsRoomIdMessagesMessageIdOperationRedactRoute,
  postAccountsAccountIdRoomsRoomIdRoute,
  postAccountsAccountIdRoomsRoute,
  postAccountsAccountIdRoute,
  postAccountsAccountIdUsersOperationAddRoute,
  postAccountsAccountIdUsersOperationCreateRoute,
  postAccountsAccountIdUsersOperationSuspendRoute,
  postAccountsAccountIdUsersOperationUnsuspendRoute,
  postAccountsAccountIdUsersRoute,
  postAccountsAccountIdUsersUserIdOperationAssociatePhoneNumberRoute,
  postAccountsAccountIdUsersUserIdOperationDisassociatePhoneNumberRoute,
  postAccountsAccountIdUsersUserIdOperationLogoutRoute,
  postAccountsAccountIdUsersUserIdOperationResetPersonalPinRoute,
  postAccountsAccountIdUsersUserIdRoute,
  postAccountsRoute,
  putAccountsAccountIdBotsBotIdEventsConfigurationRoute,
  putAccountsAccountIdRetentionSettingsRoute,
  putAccountsAccountIdSettingsRoute,
  putAccountsAccountIdUsersUserIdSettingsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accountsHandler = app
  .openapi(postAccountsAccountIdUsersUserIdOperationAssociatePhoneNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdOperationAssociateSigninDelegateGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdRoomsRoomIdMembershipsOperationBatchCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdUsersOperationSuspendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdUsersOperationUnsuspendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdBotsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdBotsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdRoomsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdRoomsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdRoomsRoomIdMembershipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdRoomsRoomIdMembershipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdUsersOperationCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdBotsBotIdEventsConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdBotsBotIdEventsConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdBotsBotIdEventsConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdRoomsRoomIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdRoomsRoomIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdRoomsRoomIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdRoomsRoomIdMembershipsMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdRoomsRoomIdMembershipsMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdUsersUserIdOperationDisassociatePhoneNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdOperationDisassociateSigninDelegateGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdBotsBotIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdBotsBotIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdRetentionSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdRetentionSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdUsersUserIdSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdUsersUserIdSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdUsersOperationAddRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdUsersUserIdOperationLogoutRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postAccountsAccountIdConversationsConversationIdMessagesMessageIdOperationRedactRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postAccountsAccountIdRoomsRoomIdMessagesMessageIdOperationRedactRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdBotsBotIdOperationRegenerateSecurityTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdUsersUserIdOperationResetPersonalPinRoute, (c) => {
    throw new Error('Not implemented')
  })
