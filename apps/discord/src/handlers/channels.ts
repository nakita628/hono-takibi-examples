import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteChannelsChannelIdMessagesMessageIdReactionsEmojiNameMeRoute,
  deleteChannelsChannelIdMessagesMessageIdReactionsEmojiNameRoute,
  deleteChannelsChannelIdMessagesMessageIdReactionsEmojiNameUserIdRoute,
  deleteChannelsChannelIdMessagesMessageIdReactionsRoute,
  deleteChannelsChannelIdMessagesMessageIdRoute,
  deleteChannelsChannelIdMessagesPinsMessageIdRoute,
  deleteChannelsChannelIdPermissionsOverwriteIdRoute,
  deleteChannelsChannelIdPinsMessageIdRoute,
  deleteChannelsChannelIdRecipientsUserIdRoute,
  deleteChannelsChannelIdRoute,
  deleteChannelsChannelIdThreadMembersMeRoute,
  deleteChannelsChannelIdThreadMembersUserIdRoute,
  getChannelsChannelIdInvitesRoute,
  getChannelsChannelIdMessagesMessageIdReactionsEmojiNameRoute,
  getChannelsChannelIdMessagesMessageIdRoute,
  getChannelsChannelIdMessagesPinsRoute,
  getChannelsChannelIdMessagesRoute,
  getChannelsChannelIdPermissionsMemberUserIdRoute,
  getChannelsChannelIdPermissionsRoleRoleIdRoute,
  getChannelsChannelIdPinsRoute,
  getChannelsChannelIdPollsMessageIdAnswersAnswerIdRoute,
  getChannelsChannelIdRoute,
  getChannelsChannelIdThreadMembersRoute,
  getChannelsChannelIdThreadMembersUserIdRoute,
  getChannelsChannelIdThreadsArchivedPrivateRoute,
  getChannelsChannelIdThreadsArchivedPublicRoute,
  getChannelsChannelIdThreadsSearchRoute,
  getChannelsChannelIdUsersMeThreadsArchivedPrivateRoute,
  getChannelsChannelIdWebhooksRoute,
  patchChannelsChannelIdMessagesMessageIdRoute,
  patchChannelsChannelIdRoute,
  postChannelsChannelIdFollowersRoute,
  postChannelsChannelIdInvitesRoute,
  postChannelsChannelIdMessagesBulkDeleteRoute,
  postChannelsChannelIdMessagesMessageIdCrosspostRoute,
  postChannelsChannelIdMessagesMessageIdThreadsRoute,
  postChannelsChannelIdMessagesRoute,
  postChannelsChannelIdPollsMessageIdExpireRoute,
  postChannelsChannelIdSendSoundboardSoundRoute,
  postChannelsChannelIdThreadsRoute,
  postChannelsChannelIdTypingRoute,
  postChannelsChannelIdWebhooksRoute,
  putChannelsChannelIdMessagesMessageIdReactionsEmojiNameMeRoute,
  putChannelsChannelIdMessagesPinsMessageIdRoute,
  putChannelsChannelIdPermissionsOverwriteIdRoute,
  putChannelsChannelIdPinsMessageIdRoute,
  putChannelsChannelIdRecipientsUserIdRoute,
  putChannelsChannelIdThreadMembersMeRoute,
  putChannelsChannelIdThreadMembersUserIdRoute,
  putChannelsChannelIdVoiceStatusRoute,
} from '../routes'

const app = new OpenAPIHono()

export const channelsHandler = app
  .openapi(getChannelsChannelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteChannelsChannelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchChannelsChannelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postChannelsChannelIdFollowersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChannelsChannelIdInvitesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postChannelsChannelIdInvitesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChannelsChannelIdMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postChannelsChannelIdMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postChannelsChannelIdMessagesBulkDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChannelsChannelIdMessagesPinsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putChannelsChannelIdMessagesPinsMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteChannelsChannelIdMessagesPinsMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChannelsChannelIdMessagesMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteChannelsChannelIdMessagesMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchChannelsChannelIdMessagesMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postChannelsChannelIdMessagesMessageIdCrosspostRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteChannelsChannelIdMessagesMessageIdReactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChannelsChannelIdMessagesMessageIdReactionsEmojiNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteChannelsChannelIdMessagesMessageIdReactionsEmojiNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putChannelsChannelIdMessagesMessageIdReactionsEmojiNameMeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteChannelsChannelIdMessagesMessageIdReactionsEmojiNameMeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteChannelsChannelIdMessagesMessageIdReactionsEmojiNameUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postChannelsChannelIdMessagesMessageIdThreadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChannelsChannelIdPermissionsMemberUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChannelsChannelIdPermissionsRoleRoleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putChannelsChannelIdPermissionsOverwriteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteChannelsChannelIdPermissionsOverwriteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChannelsChannelIdPinsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putChannelsChannelIdPinsMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteChannelsChannelIdPinsMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChannelsChannelIdPollsMessageIdAnswersAnswerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postChannelsChannelIdPollsMessageIdExpireRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putChannelsChannelIdRecipientsUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteChannelsChannelIdRecipientsUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postChannelsChannelIdSendSoundboardSoundRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChannelsChannelIdThreadMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putChannelsChannelIdThreadMembersMeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteChannelsChannelIdThreadMembersMeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChannelsChannelIdThreadMembersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putChannelsChannelIdThreadMembersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteChannelsChannelIdThreadMembersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postChannelsChannelIdThreadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChannelsChannelIdThreadsArchivedPrivateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChannelsChannelIdThreadsArchivedPublicRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChannelsChannelIdThreadsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postChannelsChannelIdTypingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChannelsChannelIdUsersMeThreadsArchivedPrivateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putChannelsChannelIdVoiceStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChannelsChannelIdWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postChannelsChannelIdWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
