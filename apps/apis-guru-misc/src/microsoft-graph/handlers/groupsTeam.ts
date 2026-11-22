import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteGroupsGroupIdTeamChannelsChannelIdMembersConversationMemberIdRoute,
  deleteGroupsGroupIdTeamChannelsChannelIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
  deleteGroupsGroupIdTeamChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdRoute,
  deleteGroupsGroupIdTeamChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1Route,
  deleteGroupsGroupIdTeamChannelsChannelIdMessagesChatMessageIdRoute,
  deleteGroupsGroupIdTeamChannelsChannelIdRoute,
  deleteGroupsGroupIdTeamChannelsChannelIdSharedWithTeamsSharedWithChannelTeamInfoIdRoute,
  deleteGroupsGroupIdTeamChannelsChannelIdTabsTeamsTabIdRoute,
  deleteGroupsGroupIdTeamInstalledAppsTeamsAppInstallationIdRoute,
  deleteGroupsGroupIdTeamMembersConversationMemberIdRoute,
  deleteGroupsGroupIdTeamOperationsTeamsAsyncOperationIdRoute,
  deleteGroupsGroupIdTeamPhotoRoute,
  deleteGroupsGroupIdTeamPrimaryChannelMembersConversationMemberIdRoute,
  deleteGroupsGroupIdTeamPrimaryChannelMessagesChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
  deleteGroupsGroupIdTeamPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdRoute,
  deleteGroupsGroupIdTeamPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1Route,
  deleteGroupsGroupIdTeamPrimaryChannelMessagesChatMessageIdRoute,
  deleteGroupsGroupIdTeamPrimaryChannelRoute,
  deleteGroupsGroupIdTeamPrimaryChannelSharedWithTeamsSharedWithChannelTeamInfoIdRoute,
  deleteGroupsGroupIdTeamPrimaryChannelTabsTeamsTabIdRoute,
  deleteGroupsGroupIdTeamRoute,
  deleteGroupsGroupIdTeamScheduleOfferShiftRequestsOfferShiftRequestIdRoute,
  deleteGroupsGroupIdTeamScheduleOpenShiftChangeRequestsOpenShiftChangeRequestIdRoute,
  deleteGroupsGroupIdTeamScheduleOpenShiftsOpenShiftIdRoute,
  deleteGroupsGroupIdTeamScheduleRoute,
  deleteGroupsGroupIdTeamScheduleSchedulingGroupsSchedulingGroupIdRoute,
  deleteGroupsGroupIdTeamScheduleShiftsShiftIdRoute,
  deleteGroupsGroupIdTeamScheduleSwapShiftsChangeRequestsSwapShiftsChangeRequestIdRoute,
  deleteGroupsGroupIdTeamScheduleTimeOffReasonsTimeOffReasonIdRoute,
  deleteGroupsGroupIdTeamScheduleTimeOffRequestsTimeOffRequestIdRoute,
  deleteGroupsGroupIdTeamScheduleTimesOffTimeOffIdRoute,
  deleteGroupsGroupIdTeamTagsTeamworkTagIdMembersTeamworkTagMemberIdRoute,
  deleteGroupsGroupIdTeamTagsTeamworkTagIdRoute,
  getGroupsGroupIdTeamAllChannelsChannelIdRoute,
  getGroupsGroupIdTeamAllChannelsRoute,
  getGroupsGroupIdTeamChannelsChannelIdFilesFolderContentRoute,
  getGroupsGroupIdTeamChannelsChannelIdFilesFolderRoute,
  getGroupsGroupIdTeamChannelsChannelIdMembersConversationMemberIdRoute,
  getGroupsGroupIdTeamChannelsChannelIdMembersRoute,
  getGroupsGroupIdTeamChannelsChannelIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
  getGroupsGroupIdTeamChannelsChannelIdMessagesChatMessageIdHostedContentsRoute,
  getGroupsGroupIdTeamChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdRoute,
  getGroupsGroupIdTeamChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsRoute,
  getGroupsGroupIdTeamChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1Route,
  getGroupsGroupIdTeamChannelsChannelIdMessagesChatMessageIdRepliesRoute,
  getGroupsGroupIdTeamChannelsChannelIdMessagesChatMessageIdRoute,
  getGroupsGroupIdTeamChannelsChannelIdMessagesRoute,
  getGroupsGroupIdTeamChannelsChannelIdRoute,
  getGroupsGroupIdTeamChannelsChannelIdSharedWithTeamsRoute,
  getGroupsGroupIdTeamChannelsChannelIdSharedWithTeamsSharedWithChannelTeamInfoIdAllowedMembersConversationMemberIdRoute,
  getGroupsGroupIdTeamChannelsChannelIdSharedWithTeamsSharedWithChannelTeamInfoIdAllowedMembersRoute,
  getGroupsGroupIdTeamChannelsChannelIdSharedWithTeamsSharedWithChannelTeamInfoIdRoute,
  getGroupsGroupIdTeamChannelsChannelIdTabsRoute,
  getGroupsGroupIdTeamChannelsChannelIdTabsTeamsTabIdRoute,
  getGroupsGroupIdTeamChannelsChannelIdTabsTeamsTabIdTeamsAppRoute,
  getGroupsGroupIdTeamChannelsRoute,
  getGroupsGroupIdTeamGroupRoute,
  getGroupsGroupIdTeamIncomingChannelsChannelIdRoute,
  getGroupsGroupIdTeamIncomingChannelsRoute,
  getGroupsGroupIdTeamInstalledAppsRoute,
  getGroupsGroupIdTeamInstalledAppsTeamsAppInstallationIdRoute,
  getGroupsGroupIdTeamInstalledAppsTeamsAppInstallationIdTeamsAppDefinitionRoute,
  getGroupsGroupIdTeamInstalledAppsTeamsAppInstallationIdTeamsAppRoute,
  getGroupsGroupIdTeamMembersConversationMemberIdRoute,
  getGroupsGroupIdTeamMembersRoute,
  getGroupsGroupIdTeamOperationsRoute,
  getGroupsGroupIdTeamOperationsTeamsAsyncOperationIdRoute,
  getGroupsGroupIdTeamPhotoRoute,
  getGroupsGroupIdTeamPhotoValueRoute,
  getGroupsGroupIdTeamPrimaryChannelFilesFolderContentRoute,
  getGroupsGroupIdTeamPrimaryChannelFilesFolderRoute,
  getGroupsGroupIdTeamPrimaryChannelMembersConversationMemberIdRoute,
  getGroupsGroupIdTeamPrimaryChannelMembersRoute,
  getGroupsGroupIdTeamPrimaryChannelMessagesChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
  getGroupsGroupIdTeamPrimaryChannelMessagesChatMessageIdHostedContentsRoute,
  getGroupsGroupIdTeamPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdRoute,
  getGroupsGroupIdTeamPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1HostedContentsRoute,
  getGroupsGroupIdTeamPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1Route,
  getGroupsGroupIdTeamPrimaryChannelMessagesChatMessageIdRepliesRoute,
  getGroupsGroupIdTeamPrimaryChannelMessagesChatMessageIdRoute,
  getGroupsGroupIdTeamPrimaryChannelMessagesRoute,
  getGroupsGroupIdTeamPrimaryChannelRoute,
  getGroupsGroupIdTeamPrimaryChannelSharedWithTeamsRoute,
  getGroupsGroupIdTeamPrimaryChannelSharedWithTeamsSharedWithChannelTeamInfoIdAllowedMembersConversationMemberIdRoute,
  getGroupsGroupIdTeamPrimaryChannelSharedWithTeamsSharedWithChannelTeamInfoIdAllowedMembersRoute,
  getGroupsGroupIdTeamPrimaryChannelSharedWithTeamsSharedWithChannelTeamInfoIdRoute,
  getGroupsGroupIdTeamPrimaryChannelTabsRoute,
  getGroupsGroupIdTeamPrimaryChannelTabsTeamsTabIdRoute,
  getGroupsGroupIdTeamPrimaryChannelTabsTeamsTabIdTeamsAppRoute,
  getGroupsGroupIdTeamRoute,
  getGroupsGroupIdTeamScheduleOfferShiftRequestsOfferShiftRequestIdRoute,
  getGroupsGroupIdTeamScheduleOfferShiftRequestsRoute,
  getGroupsGroupIdTeamScheduleOpenShiftChangeRequestsOpenShiftChangeRequestIdRoute,
  getGroupsGroupIdTeamScheduleOpenShiftChangeRequestsRoute,
  getGroupsGroupIdTeamScheduleOpenShiftsOpenShiftIdRoute,
  getGroupsGroupIdTeamScheduleOpenShiftsRoute,
  getGroupsGroupIdTeamScheduleRoute,
  getGroupsGroupIdTeamScheduleSchedulingGroupsRoute,
  getGroupsGroupIdTeamScheduleSchedulingGroupsSchedulingGroupIdRoute,
  getGroupsGroupIdTeamScheduleShiftsRoute,
  getGroupsGroupIdTeamScheduleShiftsShiftIdRoute,
  getGroupsGroupIdTeamScheduleSwapShiftsChangeRequestsRoute,
  getGroupsGroupIdTeamScheduleSwapShiftsChangeRequestsSwapShiftsChangeRequestIdRoute,
  getGroupsGroupIdTeamScheduleTimeOffReasonsRoute,
  getGroupsGroupIdTeamScheduleTimeOffReasonsTimeOffReasonIdRoute,
  getGroupsGroupIdTeamScheduleTimeOffRequestsRoute,
  getGroupsGroupIdTeamScheduleTimeOffRequestsTimeOffRequestIdRoute,
  getGroupsGroupIdTeamScheduleTimesOffRoute,
  getGroupsGroupIdTeamScheduleTimesOffTimeOffIdRoute,
  getGroupsGroupIdTeamTagsRoute,
  getGroupsGroupIdTeamTagsTeamworkTagIdMembersRoute,
  getGroupsGroupIdTeamTagsTeamworkTagIdMembersTeamworkTagMemberIdRoute,
  getGroupsGroupIdTeamTagsTeamworkTagIdRoute,
  getGroupsGroupIdTeamTemplateRoute,
  patchGroupsGroupIdTeamChannelsChannelIdMembersConversationMemberIdRoute,
  patchGroupsGroupIdTeamChannelsChannelIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
  patchGroupsGroupIdTeamChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdRoute,
  patchGroupsGroupIdTeamChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1Route,
  patchGroupsGroupIdTeamChannelsChannelIdMessagesChatMessageIdRoute,
  patchGroupsGroupIdTeamChannelsChannelIdRoute,
  patchGroupsGroupIdTeamChannelsChannelIdSharedWithTeamsSharedWithChannelTeamInfoIdRoute,
  patchGroupsGroupIdTeamChannelsChannelIdTabsTeamsTabIdRoute,
  patchGroupsGroupIdTeamInstalledAppsTeamsAppInstallationIdRoute,
  patchGroupsGroupIdTeamMembersConversationMemberIdRoute,
  patchGroupsGroupIdTeamOperationsTeamsAsyncOperationIdRoute,
  patchGroupsGroupIdTeamPhotoRoute,
  patchGroupsGroupIdTeamPrimaryChannelMembersConversationMemberIdRoute,
  patchGroupsGroupIdTeamPrimaryChannelMessagesChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
  patchGroupsGroupIdTeamPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdRoute,
  patchGroupsGroupIdTeamPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1Route,
  patchGroupsGroupIdTeamPrimaryChannelMessagesChatMessageIdRoute,
  patchGroupsGroupIdTeamPrimaryChannelRoute,
  patchGroupsGroupIdTeamPrimaryChannelSharedWithTeamsSharedWithChannelTeamInfoIdRoute,
  patchGroupsGroupIdTeamPrimaryChannelTabsTeamsTabIdRoute,
  patchGroupsGroupIdTeamRoute,
  patchGroupsGroupIdTeamScheduleOfferShiftRequestsOfferShiftRequestIdRoute,
  patchGroupsGroupIdTeamScheduleOpenShiftChangeRequestsOpenShiftChangeRequestIdRoute,
  patchGroupsGroupIdTeamScheduleOpenShiftsOpenShiftIdRoute,
  patchGroupsGroupIdTeamScheduleSchedulingGroupsSchedulingGroupIdRoute,
  patchGroupsGroupIdTeamScheduleShiftsShiftIdRoute,
  patchGroupsGroupIdTeamScheduleSwapShiftsChangeRequestsSwapShiftsChangeRequestIdRoute,
  patchGroupsGroupIdTeamScheduleTimeOffReasonsTimeOffReasonIdRoute,
  patchGroupsGroupIdTeamScheduleTimeOffRequestsTimeOffRequestIdRoute,
  patchGroupsGroupIdTeamScheduleTimesOffTimeOffIdRoute,
  patchGroupsGroupIdTeamTagsTeamworkTagIdMembersTeamworkTagMemberIdRoute,
  patchGroupsGroupIdTeamTagsTeamworkTagIdRoute,
  postGroupsGroupIdTeamChannelsChannelIdMembersRoute,
  postGroupsGroupIdTeamChannelsChannelIdMessagesChatMessageIdHostedContentsRoute,
  postGroupsGroupIdTeamChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsRoute,
  postGroupsGroupIdTeamChannelsChannelIdMessagesChatMessageIdRepliesRoute,
  postGroupsGroupIdTeamChannelsChannelIdMessagesRoute,
  postGroupsGroupIdTeamChannelsChannelIdSharedWithTeamsRoute,
  postGroupsGroupIdTeamChannelsChannelIdTabsRoute,
  postGroupsGroupIdTeamChannelsRoute,
  postGroupsGroupIdTeamInstalledAppsRoute,
  postGroupsGroupIdTeamMembersRoute,
  postGroupsGroupIdTeamOperationsRoute,
  postGroupsGroupIdTeamPrimaryChannelMembersRoute,
  postGroupsGroupIdTeamPrimaryChannelMessagesChatMessageIdHostedContentsRoute,
  postGroupsGroupIdTeamPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1HostedContentsRoute,
  postGroupsGroupIdTeamPrimaryChannelMessagesChatMessageIdRepliesRoute,
  postGroupsGroupIdTeamPrimaryChannelMessagesRoute,
  postGroupsGroupIdTeamPrimaryChannelSharedWithTeamsRoute,
  postGroupsGroupIdTeamPrimaryChannelTabsRoute,
  postGroupsGroupIdTeamScheduleOfferShiftRequestsRoute,
  postGroupsGroupIdTeamScheduleOpenShiftChangeRequestsRoute,
  postGroupsGroupIdTeamScheduleOpenShiftsRoute,
  postGroupsGroupIdTeamScheduleSchedulingGroupsRoute,
  postGroupsGroupIdTeamScheduleShiftsRoute,
  postGroupsGroupIdTeamScheduleSwapShiftsChangeRequestsRoute,
  postGroupsGroupIdTeamScheduleTimeOffReasonsRoute,
  postGroupsGroupIdTeamScheduleTimeOffRequestsRoute,
  postGroupsGroupIdTeamScheduleTimesOffRoute,
  postGroupsGroupIdTeamTagsRoute,
  postGroupsGroupIdTeamTagsTeamworkTagIdMembersRoute,
  putGroupsGroupIdTeamChannelsChannelIdFilesFolderContentRoute,
  putGroupsGroupIdTeamPhotoValueRoute,
  putGroupsGroupIdTeamPrimaryChannelFilesFolderContentRoute,
  putGroupsGroupIdTeamScheduleRoute,
} from '../routes'

const app = new OpenAPIHono()

export const groupsTeamHandler = app
  .openapi(deleteGroupsGroupIdTeamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchGroupsGroupIdTeamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamAllChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamAllChannelsChannelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdTeamChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGroupsGroupIdTeamChannelsChannelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamChannelsChannelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchGroupsGroupIdTeamChannelsChannelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamChannelsChannelIdFilesFolderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamChannelsChannelIdFilesFolderContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putGroupsGroupIdTeamChannelsChannelIdFilesFolderContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamChannelsChannelIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdTeamChannelsChannelIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGroupsGroupIdTeamChannelsChannelIdMembersConversationMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamChannelsChannelIdMembersConversationMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchGroupsGroupIdTeamChannelsChannelIdMembersConversationMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamChannelsChannelIdMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdTeamChannelsChannelIdMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGroupsGroupIdTeamChannelsChannelIdMessagesChatMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamChannelsChannelIdMessagesChatMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchGroupsGroupIdTeamChannelsChannelIdMessagesChatMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamChannelsChannelIdMessagesChatMessageIdHostedContentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdTeamChannelsChannelIdMessagesChatMessageIdHostedContentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteGroupsGroupIdTeamChannelsChannelIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdTeamChannelsChannelIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchGroupsGroupIdTeamChannelsChannelIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getGroupsGroupIdTeamChannelsChannelIdMessagesChatMessageIdRepliesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdTeamChannelsChannelIdMessagesChatMessageIdRepliesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteGroupsGroupIdTeamChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1Route,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdTeamChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1Route,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchGroupsGroupIdTeamChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1Route,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdTeamChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postGroupsGroupIdTeamChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteGroupsGroupIdTeamChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdTeamChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchGroupsGroupIdTeamChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getGroupsGroupIdTeamChannelsChannelIdSharedWithTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdTeamChannelsChannelIdSharedWithTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteGroupsGroupIdTeamChannelsChannelIdSharedWithTeamsSharedWithChannelTeamInfoIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdTeamChannelsChannelIdSharedWithTeamsSharedWithChannelTeamInfoIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchGroupsGroupIdTeamChannelsChannelIdSharedWithTeamsSharedWithChannelTeamInfoIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdTeamChannelsChannelIdSharedWithTeamsSharedWithChannelTeamInfoIdAllowedMembersRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdTeamChannelsChannelIdSharedWithTeamsSharedWithChannelTeamInfoIdAllowedMembersConversationMemberIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getGroupsGroupIdTeamChannelsChannelIdTabsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdTeamChannelsChannelIdTabsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGroupsGroupIdTeamChannelsChannelIdTabsTeamsTabIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamChannelsChannelIdTabsTeamsTabIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchGroupsGroupIdTeamChannelsChannelIdTabsTeamsTabIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamChannelsChannelIdTabsTeamsTabIdTeamsAppRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamIncomingChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamIncomingChannelsChannelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamInstalledAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdTeamInstalledAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGroupsGroupIdTeamInstalledAppsTeamsAppInstallationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamInstalledAppsTeamsAppInstallationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchGroupsGroupIdTeamInstalledAppsTeamsAppInstallationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamInstalledAppsTeamsAppInstallationIdTeamsAppRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamInstalledAppsTeamsAppInstallationIdTeamsAppDefinitionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdTeamMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGroupsGroupIdTeamMembersConversationMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamMembersConversationMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchGroupsGroupIdTeamMembersConversationMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdTeamOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGroupsGroupIdTeamOperationsTeamsAsyncOperationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamOperationsTeamsAsyncOperationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchGroupsGroupIdTeamOperationsTeamsAsyncOperationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGroupsGroupIdTeamPhotoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamPhotoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchGroupsGroupIdTeamPhotoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamPhotoValueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putGroupsGroupIdTeamPhotoValueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGroupsGroupIdTeamPrimaryChannelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamPrimaryChannelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchGroupsGroupIdTeamPrimaryChannelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamPrimaryChannelFilesFolderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamPrimaryChannelFilesFolderContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putGroupsGroupIdTeamPrimaryChannelFilesFolderContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamPrimaryChannelMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdTeamPrimaryChannelMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGroupsGroupIdTeamPrimaryChannelMembersConversationMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamPrimaryChannelMembersConversationMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchGroupsGroupIdTeamPrimaryChannelMembersConversationMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamPrimaryChannelMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdTeamPrimaryChannelMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGroupsGroupIdTeamPrimaryChannelMessagesChatMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamPrimaryChannelMessagesChatMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchGroupsGroupIdTeamPrimaryChannelMessagesChatMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamPrimaryChannelMessagesChatMessageIdHostedContentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdTeamPrimaryChannelMessagesChatMessageIdHostedContentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteGroupsGroupIdTeamPrimaryChannelMessagesChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdTeamPrimaryChannelMessagesChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchGroupsGroupIdTeamPrimaryChannelMessagesChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getGroupsGroupIdTeamPrimaryChannelMessagesChatMessageIdRepliesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdTeamPrimaryChannelMessagesChatMessageIdRepliesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteGroupsGroupIdTeamPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1Route,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdTeamPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1Route,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchGroupsGroupIdTeamPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1Route,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdTeamPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1HostedContentsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postGroupsGroupIdTeamPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1HostedContentsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteGroupsGroupIdTeamPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdTeamPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchGroupsGroupIdTeamPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getGroupsGroupIdTeamPrimaryChannelSharedWithTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdTeamPrimaryChannelSharedWithTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteGroupsGroupIdTeamPrimaryChannelSharedWithTeamsSharedWithChannelTeamInfoIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdTeamPrimaryChannelSharedWithTeamsSharedWithChannelTeamInfoIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchGroupsGroupIdTeamPrimaryChannelSharedWithTeamsSharedWithChannelTeamInfoIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdTeamPrimaryChannelSharedWithTeamsSharedWithChannelTeamInfoIdAllowedMembersRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdTeamPrimaryChannelSharedWithTeamsSharedWithChannelTeamInfoIdAllowedMembersConversationMemberIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getGroupsGroupIdTeamPrimaryChannelTabsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdTeamPrimaryChannelTabsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGroupsGroupIdTeamPrimaryChannelTabsTeamsTabIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamPrimaryChannelTabsTeamsTabIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchGroupsGroupIdTeamPrimaryChannelTabsTeamsTabIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamPrimaryChannelTabsTeamsTabIdTeamsAppRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGroupsGroupIdTeamScheduleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamScheduleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putGroupsGroupIdTeamScheduleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamScheduleOfferShiftRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdTeamScheduleOfferShiftRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGroupsGroupIdTeamScheduleOfferShiftRequestsOfferShiftRequestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamScheduleOfferShiftRequestsOfferShiftRequestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchGroupsGroupIdTeamScheduleOfferShiftRequestsOfferShiftRequestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamScheduleOpenShiftChangeRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdTeamScheduleOpenShiftChangeRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteGroupsGroupIdTeamScheduleOpenShiftChangeRequestsOpenShiftChangeRequestIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdTeamScheduleOpenShiftChangeRequestsOpenShiftChangeRequestIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchGroupsGroupIdTeamScheduleOpenShiftChangeRequestsOpenShiftChangeRequestIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getGroupsGroupIdTeamScheduleOpenShiftsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdTeamScheduleOpenShiftsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGroupsGroupIdTeamScheduleOpenShiftsOpenShiftIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamScheduleOpenShiftsOpenShiftIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchGroupsGroupIdTeamScheduleOpenShiftsOpenShiftIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamScheduleSchedulingGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdTeamScheduleSchedulingGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGroupsGroupIdTeamScheduleSchedulingGroupsSchedulingGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamScheduleSchedulingGroupsSchedulingGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchGroupsGroupIdTeamScheduleSchedulingGroupsSchedulingGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamScheduleShiftsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdTeamScheduleShiftsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGroupsGroupIdTeamScheduleShiftsShiftIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamScheduleShiftsShiftIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchGroupsGroupIdTeamScheduleShiftsShiftIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamScheduleSwapShiftsChangeRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdTeamScheduleSwapShiftsChangeRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteGroupsGroupIdTeamScheduleSwapShiftsChangeRequestsSwapShiftsChangeRequestIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdTeamScheduleSwapShiftsChangeRequestsSwapShiftsChangeRequestIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchGroupsGroupIdTeamScheduleSwapShiftsChangeRequestsSwapShiftsChangeRequestIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getGroupsGroupIdTeamScheduleTimeOffReasonsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdTeamScheduleTimeOffReasonsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGroupsGroupIdTeamScheduleTimeOffReasonsTimeOffReasonIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamScheduleTimeOffReasonsTimeOffReasonIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchGroupsGroupIdTeamScheduleTimeOffReasonsTimeOffReasonIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamScheduleTimeOffRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdTeamScheduleTimeOffRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGroupsGroupIdTeamScheduleTimeOffRequestsTimeOffRequestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamScheduleTimeOffRequestsTimeOffRequestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchGroupsGroupIdTeamScheduleTimeOffRequestsTimeOffRequestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamScheduleTimesOffRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdTeamScheduleTimesOffRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGroupsGroupIdTeamScheduleTimesOffTimeOffIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamScheduleTimesOffTimeOffIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchGroupsGroupIdTeamScheduleTimesOffTimeOffIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdTeamTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGroupsGroupIdTeamTagsTeamworkTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamTagsTeamworkTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchGroupsGroupIdTeamTagsTeamworkTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamTagsTeamworkTagIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdTeamTagsTeamworkTagIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGroupsGroupIdTeamTagsTeamworkTagIdMembersTeamworkTagMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamTagsTeamworkTagIdMembersTeamworkTagMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchGroupsGroupIdTeamTagsTeamworkTagIdMembersTeamworkTagMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamTemplateRoute, (c) => {
    throw new Error('Not implemented')
  })
