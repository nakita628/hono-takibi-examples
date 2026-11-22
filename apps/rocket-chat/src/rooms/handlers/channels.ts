import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1ChannelsAnonymousreadRoute,
  getApiV1ChannelsCountersRoute,
  getApiV1ChannelsFilesRoute,
  getApiV1ChannelsGetAllUserMentionsByChannelRoute,
  getApiV1ChannelsGetIntegrationsRoute,
  getApiV1ChannelsHistoryRoute,
  getApiV1ChannelsInfoRoute,
  getApiV1ChannelsListJoinedRoute,
  getApiV1ChannelsListRoute,
  getApiV1ChannelsMembersRoute,
  getApiV1ChannelsMessagesRoute,
  getApiV1ChannelsModeratorsRoute,
  getApiV1ChannelsOnlineRoute,
  getApiV1ChannelsRolesRoute,
  postApiV1ChannelsAddAllRoute,
  postApiV1ChannelsAddLeaderRoute,
  postApiV1ChannelsAddModeratorRoute,
  postApiV1ChannelsAddOwnerRoute,
  postApiV1ChannelsArchiveRoute,
  postApiV1ChannelsCloseRoute,
  postApiV1ChannelsConvertToTeamRoute,
  postApiV1ChannelsCreateRoute,
  postApiV1ChannelsDeleteRoute,
  postApiV1ChannelsInviteRoute,
  postApiV1ChannelsJoinRoute,
  postApiV1ChannelsKickRoute,
  postApiV1ChannelsLeaveRoute,
  postApiV1ChannelsOpenRoute,
  postApiV1ChannelsRemoveLeaderRoute,
  postApiV1ChannelsRemoveModeratorRoute,
  postApiV1ChannelsRemoveOwnerRoute,
  postApiV1ChannelsRenameRoute,
  postApiV1ChannelsSetAnnouncementRoute,
  postApiV1ChannelsSetCustomFieldsRoute,
  postApiV1ChannelsSetDefaultRoute,
  postApiV1ChannelsSetDescriptionRoute,
  postApiV1ChannelsSetJoinCodeRoute,
  postApiV1ChannelsSetPurposeRoute,
  postApiV1ChannelsSetReadOnlyRoute,
  postApiV1ChannelsSetTopicRoute,
  postApiV1ChannelsSetTypeRoute,
  postApiV1ChannelsUnarchiveRoute,
} from '../routes'

const app = new OpenAPIHono()

export const channelsHandler = app
  .openapi(postApiV1ChannelsCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ChannelsAddAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ChannelsAddLeaderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ChannelsAddModeratorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ChannelsAddOwnerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ChannelsAnonymousreadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ChannelsArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ChannelsCloseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ChannelsCountersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ChannelsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ChannelsFilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ChannelsHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ChannelsInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ChannelsInviteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ChannelsJoinRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ChannelsKickRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ChannelsLeaveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ChannelsListJoinedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ChannelsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ChannelsMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ChannelsMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ChannelsModeratorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ChannelsOnlineRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ChannelsOpenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ChannelsRemoveLeaderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ChannelsRemoveModeratorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ChannelsRemoveOwnerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ChannelsRenameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ChannelsRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ChannelsSetAnnouncementRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ChannelsSetCustomFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ChannelsSetDefaultRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ChannelsSetDescriptionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ChannelsSetJoinCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ChannelsSetPurposeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ChannelsSetReadOnlyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ChannelsSetTopicRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ChannelsSetTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ChannelsUnarchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ChannelsGetAllUserMentionsByChannelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ChannelsGetIntegrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ChannelsConvertToTeamRoute, (c) => {
    throw new Error('Not implemented')
  })
