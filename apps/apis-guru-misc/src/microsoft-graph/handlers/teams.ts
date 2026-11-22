import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getTeamsCountRoute,
  getTeamsTeamIdAllChannelsCountRoute,
  getTeamsTeamIdChannelsChannelIdMembersCountRoute,
  getTeamsTeamIdChannelsChannelIdMessagesChatMessageIdHostedContentsCountRoute,
  getTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsCountRoute,
  getTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesCountRoute,
  getTeamsTeamIdChannelsChannelIdMessagesCountRoute,
  getTeamsTeamIdChannelsChannelIdSharedWithTeamsCountRoute,
  getTeamsTeamIdChannelsChannelIdSharedWithTeamsSharedWithChannelTeamInfoIdAllowedMembersCountRoute,
  getTeamsTeamIdChannelsChannelIdTabsCountRoute,
  getTeamsTeamIdChannelsCountRoute,
  getTeamsTeamIdIncomingChannelsCountRoute,
  getTeamsTeamIdInstalledAppsCountRoute,
  getTeamsTeamIdMembersCountRoute,
  getTeamsTeamIdOperationsCountRoute,
  getTeamsTeamIdPrimaryChannelMembersCountRoute,
  getTeamsTeamIdPrimaryChannelMessagesChatMessageIdHostedContentsCountRoute,
  getTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1HostedContentsCountRoute,
  getTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesCountRoute,
  getTeamsTeamIdPrimaryChannelMessagesCountRoute,
  getTeamsTeamIdPrimaryChannelSharedWithTeamsCountRoute,
  getTeamsTeamIdPrimaryChannelSharedWithTeamsSharedWithChannelTeamInfoIdAllowedMembersCountRoute,
  getTeamsTeamIdPrimaryChannelTabsCountRoute,
  getTeamsTeamIdScheduleOfferShiftRequestsCountRoute,
  getTeamsTeamIdScheduleOpenShiftChangeRequestsCountRoute,
  getTeamsTeamIdScheduleOpenShiftsCountRoute,
  getTeamsTeamIdScheduleSchedulingGroupsCountRoute,
  getTeamsTeamIdScheduleShiftsCountRoute,
  getTeamsTeamIdScheduleSwapShiftsChangeRequestsCountRoute,
  getTeamsTeamIdScheduleTimeOffReasonsCountRoute,
  getTeamsTeamIdScheduleTimeOffRequestsCountRoute,
  getTeamsTeamIdScheduleTimesOffCountRoute,
  getTeamsTeamIdTagsCountRoute,
  getTeamsTeamIdTagsTeamworkTagIdMembersCountRoute,
} from '../routes'

const app = new OpenAPIHono()

export const teamsHandler = app
  .openapi(getTeamsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdAllChannelsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdChannelsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdChannelsChannelIdMembersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdChannelsChannelIdMessagesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdChannelsChannelIdMessagesChatMessageIdHostedContentsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getTeamsTeamIdChannelsChannelIdSharedWithTeamsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getTeamsTeamIdChannelsChannelIdSharedWithTeamsSharedWithChannelTeamInfoIdAllowedMembersCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getTeamsTeamIdChannelsChannelIdTabsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdIncomingChannelsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdInstalledAppsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdMembersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdOperationsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdPrimaryChannelMembersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdPrimaryChannelMessagesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdPrimaryChannelMessagesChatMessageIdHostedContentsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1HostedContentsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getTeamsTeamIdPrimaryChannelSharedWithTeamsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getTeamsTeamIdPrimaryChannelSharedWithTeamsSharedWithChannelTeamInfoIdAllowedMembersCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getTeamsTeamIdPrimaryChannelTabsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdScheduleOfferShiftRequestsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdScheduleOpenShiftChangeRequestsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdScheduleOpenShiftsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdScheduleSchedulingGroupsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdScheduleShiftsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdScheduleSwapShiftsChangeRequestsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdScheduleTimeOffReasonsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdScheduleTimeOffRequestsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdScheduleTimesOffCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdTagsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdTagsTeamworkTagIdMembersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
