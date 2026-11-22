import { OpenAPIHono } from '@hono/zod-openapi'
import {
  delete2ChatConversationsIdArchiveRoute,
  delete2ChatConversationsIdInviteRoute,
  delete2ChatConversationsIdMessageTtlRoute,
  delete2ChatConversationsIdMuteRoute,
  delete2ChatConversationsIdRoute,
  get2ChatConversationsIdAdminRequestsRoute,
  get2ChatConversationsIdEventsRoute,
  get2ChatConversationsIdInvitesTokenRoute,
  get2ChatConversationsIdPinnedMessagesRoute,
  get2ChatConversationsIdRoute,
  get2ChatConversationsRoute,
  get2ChatMediaIdMediaHashKeyRoute,
  get2ChatMessageRequestsIdRoute,
  get2ChatMessageRequestsRoute,
  get2ChatSettingsRoute,
  post2ChatConversationsGroupInitializeRoute,
  post2ChatConversationsGroupRoute,
  post2ChatConversationsIdAdminRequestsRoute,
  post2ChatConversationsIdAdminRequestsUserIdApproveRoute,
  post2ChatConversationsIdAdminRequestsUserIdRejectRoute,
  post2ChatConversationsIdAdminsRemoveRoute,
  post2ChatConversationsIdAdminsRoute,
  post2ChatConversationsIdArchiveRoute,
  post2ChatConversationsIdInviteRoute,
  post2ChatConversationsIdJoinRequestsRejectRoute,
  post2ChatConversationsIdJoinRequestsRoute,
  post2ChatConversationsIdKeysRoute,
  post2ChatConversationsIdMembersRemoveRoute,
  post2ChatConversationsIdMembersRoute,
  post2ChatConversationsIdMessagesDeleteRoute,
  post2ChatConversationsIdMessagesRoute,
  post2ChatConversationsIdMuteRoute,
  post2ChatConversationsIdReadRoute,
  post2ChatConversationsIdTypingRoute,
  post2ChatConversationsIdUnreadRoute,
  post2ChatMediaUploadIdAppendRoute,
  post2ChatMediaUploadIdFinalizeRoute,
  post2ChatMediaUploadInitializeRoute,
  post2ChatMessageRequestsIdAcceptRoute,
  post2UsersIdPublicKeysRoute,
  put2ChatConversationsIdAdminSettingsRoute,
  put2ChatConversationsIdMessageTtlRoute,
  put2ChatConversationsIdRoute,
  put2ChatConversationsIdScreenCaptureRoute,
  put2ChatSettingsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const chatHandler = app
  .openapi(get2ChatConversationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(post2ChatConversationsGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(post2ChatConversationsGroupInitializeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(delete2ChatConversationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get2ChatConversationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(put2ChatConversationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get2ChatConversationsIdAdminRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(post2ChatConversationsIdAdminRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(post2ChatConversationsIdAdminRequestsUserIdApproveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(post2ChatConversationsIdAdminRequestsUserIdRejectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(put2ChatConversationsIdAdminSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(post2ChatConversationsIdAdminsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(post2ChatConversationsIdAdminsRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(delete2ChatConversationsIdArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(post2ChatConversationsIdArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get2ChatConversationsIdEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(delete2ChatConversationsIdInviteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(post2ChatConversationsIdInviteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get2ChatConversationsIdInvitesTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(post2ChatConversationsIdJoinRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(post2ChatConversationsIdJoinRequestsRejectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(post2ChatConversationsIdKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(post2ChatConversationsIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(post2ChatConversationsIdMembersRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(delete2ChatConversationsIdMessageTtlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(put2ChatConversationsIdMessageTtlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(post2ChatConversationsIdMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(post2ChatConversationsIdMessagesDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(delete2ChatConversationsIdMuteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(post2ChatConversationsIdMuteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get2ChatConversationsIdPinnedMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(post2ChatConversationsIdReadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(put2ChatConversationsIdScreenCaptureRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(post2ChatConversationsIdTypingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(post2ChatConversationsIdUnreadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(post2ChatMediaUploadInitializeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(post2ChatMediaUploadIdAppendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(post2ChatMediaUploadIdFinalizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get2ChatMediaIdMediaHashKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get2ChatMessageRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get2ChatMessageRequestsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(post2ChatMessageRequestsIdAcceptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get2ChatSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(put2ChatSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(post2UsersIdPublicKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
