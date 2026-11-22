import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMeJoinedTeamsTeamIdChannelsChannelIdMembersConversationMemberIdRoute,
  deleteMeJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
  deleteMeJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdRoute,
  deleteMeJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1Route,
  deleteMeJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRoute,
  deleteMeJoinedTeamsTeamIdChannelsChannelIdRoute,
  deleteMeJoinedTeamsTeamIdChannelsChannelIdSharedWithTeamsSharedWithChannelTeamInfoIdRoute,
  deleteMeJoinedTeamsTeamIdChannelsChannelIdTabsTeamsTabIdRoute,
  deleteMeJoinedTeamsTeamIdInstalledAppsTeamsAppInstallationIdRoute,
  deleteMeJoinedTeamsTeamIdMembersConversationMemberIdRoute,
  deleteMeJoinedTeamsTeamIdOperationsTeamsAsyncOperationIdRoute,
  deleteMeJoinedTeamsTeamIdPhotoRoute,
  deleteMeJoinedTeamsTeamIdPrimaryChannelMembersConversationMemberIdRoute,
  deleteMeJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
  deleteMeJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdRoute,
  deleteMeJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1Route,
  deleteMeJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdRoute,
  deleteMeJoinedTeamsTeamIdPrimaryChannelRoute,
  deleteMeJoinedTeamsTeamIdPrimaryChannelSharedWithTeamsSharedWithChannelTeamInfoIdRoute,
  deleteMeJoinedTeamsTeamIdPrimaryChannelTabsTeamsTabIdRoute,
  deleteMeJoinedTeamsTeamIdRoute,
  deleteMeJoinedTeamsTeamIdScheduleOfferShiftRequestsOfferShiftRequestIdRoute,
  deleteMeJoinedTeamsTeamIdScheduleOpenShiftChangeRequestsOpenShiftChangeRequestIdRoute,
  deleteMeJoinedTeamsTeamIdScheduleOpenShiftsOpenShiftIdRoute,
  deleteMeJoinedTeamsTeamIdScheduleRoute,
  deleteMeJoinedTeamsTeamIdScheduleSchedulingGroupsSchedulingGroupIdRoute,
  deleteMeJoinedTeamsTeamIdScheduleShiftsShiftIdRoute,
  deleteMeJoinedTeamsTeamIdScheduleSwapShiftsChangeRequestsSwapShiftsChangeRequestIdRoute,
  deleteMeJoinedTeamsTeamIdScheduleTimeOffReasonsTimeOffReasonIdRoute,
  deleteMeJoinedTeamsTeamIdScheduleTimeOffRequestsTimeOffRequestIdRoute,
  deleteMeJoinedTeamsTeamIdScheduleTimesOffTimeOffIdRoute,
  deleteMeJoinedTeamsTeamIdTagsTeamworkTagIdMembersTeamworkTagMemberIdRoute,
  deleteMeJoinedTeamsTeamIdTagsTeamworkTagIdRoute,
  getMeJoinedTeamsRoute,
  getMeJoinedTeamsTeamIdAllChannelsChannelIdRoute,
  getMeJoinedTeamsTeamIdAllChannelsRoute,
  getMeJoinedTeamsTeamIdChannelsChannelIdFilesFolderContentRoute,
  getMeJoinedTeamsTeamIdChannelsChannelIdFilesFolderRoute,
  getMeJoinedTeamsTeamIdChannelsChannelIdMembersConversationMemberIdRoute,
  getMeJoinedTeamsTeamIdChannelsChannelIdMembersRoute,
  getMeJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
  getMeJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdHostedContentsRoute,
  getMeJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdRoute,
  getMeJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsRoute,
  getMeJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1Route,
  getMeJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesRoute,
  getMeJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRoute,
  getMeJoinedTeamsTeamIdChannelsChannelIdMessagesRoute,
  getMeJoinedTeamsTeamIdChannelsChannelIdRoute,
  getMeJoinedTeamsTeamIdChannelsChannelIdSharedWithTeamsRoute,
  getMeJoinedTeamsTeamIdChannelsChannelIdSharedWithTeamsSharedWithChannelTeamInfoIdAllowedMembersConversationMemberIdRoute,
  getMeJoinedTeamsTeamIdChannelsChannelIdSharedWithTeamsSharedWithChannelTeamInfoIdAllowedMembersRoute,
  getMeJoinedTeamsTeamIdChannelsChannelIdSharedWithTeamsSharedWithChannelTeamInfoIdRoute,
  getMeJoinedTeamsTeamIdChannelsChannelIdTabsRoute,
  getMeJoinedTeamsTeamIdChannelsChannelIdTabsTeamsTabIdRoute,
  getMeJoinedTeamsTeamIdChannelsChannelIdTabsTeamsTabIdTeamsAppRoute,
  getMeJoinedTeamsTeamIdChannelsRoute,
  getMeJoinedTeamsTeamIdGroupRoute,
  getMeJoinedTeamsTeamIdIncomingChannelsChannelIdRoute,
  getMeJoinedTeamsTeamIdIncomingChannelsRoute,
  getMeJoinedTeamsTeamIdInstalledAppsRoute,
  getMeJoinedTeamsTeamIdInstalledAppsTeamsAppInstallationIdRoute,
  getMeJoinedTeamsTeamIdInstalledAppsTeamsAppInstallationIdTeamsAppDefinitionRoute,
  getMeJoinedTeamsTeamIdInstalledAppsTeamsAppInstallationIdTeamsAppRoute,
  getMeJoinedTeamsTeamIdMembersConversationMemberIdRoute,
  getMeJoinedTeamsTeamIdMembersRoute,
  getMeJoinedTeamsTeamIdOperationsRoute,
  getMeJoinedTeamsTeamIdOperationsTeamsAsyncOperationIdRoute,
  getMeJoinedTeamsTeamIdPhotoRoute,
  getMeJoinedTeamsTeamIdPhotoValueRoute,
  getMeJoinedTeamsTeamIdPrimaryChannelFilesFolderContentRoute,
  getMeJoinedTeamsTeamIdPrimaryChannelFilesFolderRoute,
  getMeJoinedTeamsTeamIdPrimaryChannelMembersConversationMemberIdRoute,
  getMeJoinedTeamsTeamIdPrimaryChannelMembersRoute,
  getMeJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
  getMeJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdHostedContentsRoute,
  getMeJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdRoute,
  getMeJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1HostedContentsRoute,
  getMeJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1Route,
  getMeJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesRoute,
  getMeJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdRoute,
  getMeJoinedTeamsTeamIdPrimaryChannelMessagesRoute,
  getMeJoinedTeamsTeamIdPrimaryChannelRoute,
  getMeJoinedTeamsTeamIdPrimaryChannelSharedWithTeamsRoute,
  getMeJoinedTeamsTeamIdPrimaryChannelSharedWithTeamsSharedWithChannelTeamInfoIdAllowedMembersConversationMemberIdRoute,
  getMeJoinedTeamsTeamIdPrimaryChannelSharedWithTeamsSharedWithChannelTeamInfoIdAllowedMembersRoute,
  getMeJoinedTeamsTeamIdPrimaryChannelSharedWithTeamsSharedWithChannelTeamInfoIdRoute,
  getMeJoinedTeamsTeamIdPrimaryChannelTabsRoute,
  getMeJoinedTeamsTeamIdPrimaryChannelTabsTeamsTabIdRoute,
  getMeJoinedTeamsTeamIdPrimaryChannelTabsTeamsTabIdTeamsAppRoute,
  getMeJoinedTeamsTeamIdRoute,
  getMeJoinedTeamsTeamIdScheduleOfferShiftRequestsOfferShiftRequestIdRoute,
  getMeJoinedTeamsTeamIdScheduleOfferShiftRequestsRoute,
  getMeJoinedTeamsTeamIdScheduleOpenShiftChangeRequestsOpenShiftChangeRequestIdRoute,
  getMeJoinedTeamsTeamIdScheduleOpenShiftChangeRequestsRoute,
  getMeJoinedTeamsTeamIdScheduleOpenShiftsOpenShiftIdRoute,
  getMeJoinedTeamsTeamIdScheduleOpenShiftsRoute,
  getMeJoinedTeamsTeamIdScheduleRoute,
  getMeJoinedTeamsTeamIdScheduleSchedulingGroupsRoute,
  getMeJoinedTeamsTeamIdScheduleSchedulingGroupsSchedulingGroupIdRoute,
  getMeJoinedTeamsTeamIdScheduleShiftsRoute,
  getMeJoinedTeamsTeamIdScheduleShiftsShiftIdRoute,
  getMeJoinedTeamsTeamIdScheduleSwapShiftsChangeRequestsRoute,
  getMeJoinedTeamsTeamIdScheduleSwapShiftsChangeRequestsSwapShiftsChangeRequestIdRoute,
  getMeJoinedTeamsTeamIdScheduleTimeOffReasonsRoute,
  getMeJoinedTeamsTeamIdScheduleTimeOffReasonsTimeOffReasonIdRoute,
  getMeJoinedTeamsTeamIdScheduleTimeOffRequestsRoute,
  getMeJoinedTeamsTeamIdScheduleTimeOffRequestsTimeOffRequestIdRoute,
  getMeJoinedTeamsTeamIdScheduleTimesOffRoute,
  getMeJoinedTeamsTeamIdScheduleTimesOffTimeOffIdRoute,
  getMeJoinedTeamsTeamIdTagsRoute,
  getMeJoinedTeamsTeamIdTagsTeamworkTagIdMembersRoute,
  getMeJoinedTeamsTeamIdTagsTeamworkTagIdMembersTeamworkTagMemberIdRoute,
  getMeJoinedTeamsTeamIdTagsTeamworkTagIdRoute,
  getMeJoinedTeamsTeamIdTemplateRoute,
  patchMeJoinedTeamsTeamIdChannelsChannelIdMembersConversationMemberIdRoute,
  patchMeJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
  patchMeJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdRoute,
  patchMeJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1Route,
  patchMeJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRoute,
  patchMeJoinedTeamsTeamIdChannelsChannelIdRoute,
  patchMeJoinedTeamsTeamIdChannelsChannelIdSharedWithTeamsSharedWithChannelTeamInfoIdRoute,
  patchMeJoinedTeamsTeamIdChannelsChannelIdTabsTeamsTabIdRoute,
  patchMeJoinedTeamsTeamIdInstalledAppsTeamsAppInstallationIdRoute,
  patchMeJoinedTeamsTeamIdMembersConversationMemberIdRoute,
  patchMeJoinedTeamsTeamIdOperationsTeamsAsyncOperationIdRoute,
  patchMeJoinedTeamsTeamIdPhotoRoute,
  patchMeJoinedTeamsTeamIdPrimaryChannelMembersConversationMemberIdRoute,
  patchMeJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
  patchMeJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdRoute,
  patchMeJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1Route,
  patchMeJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdRoute,
  patchMeJoinedTeamsTeamIdPrimaryChannelRoute,
  patchMeJoinedTeamsTeamIdPrimaryChannelSharedWithTeamsSharedWithChannelTeamInfoIdRoute,
  patchMeJoinedTeamsTeamIdPrimaryChannelTabsTeamsTabIdRoute,
  patchMeJoinedTeamsTeamIdRoute,
  patchMeJoinedTeamsTeamIdScheduleOfferShiftRequestsOfferShiftRequestIdRoute,
  patchMeJoinedTeamsTeamIdScheduleOpenShiftChangeRequestsOpenShiftChangeRequestIdRoute,
  patchMeJoinedTeamsTeamIdScheduleOpenShiftsOpenShiftIdRoute,
  patchMeJoinedTeamsTeamIdScheduleSchedulingGroupsSchedulingGroupIdRoute,
  patchMeJoinedTeamsTeamIdScheduleShiftsShiftIdRoute,
  patchMeJoinedTeamsTeamIdScheduleSwapShiftsChangeRequestsSwapShiftsChangeRequestIdRoute,
  patchMeJoinedTeamsTeamIdScheduleTimeOffReasonsTimeOffReasonIdRoute,
  patchMeJoinedTeamsTeamIdScheduleTimeOffRequestsTimeOffRequestIdRoute,
  patchMeJoinedTeamsTeamIdScheduleTimesOffTimeOffIdRoute,
  patchMeJoinedTeamsTeamIdTagsTeamworkTagIdMembersTeamworkTagMemberIdRoute,
  patchMeJoinedTeamsTeamIdTagsTeamworkTagIdRoute,
  postMeJoinedTeamsRoute,
  postMeJoinedTeamsTeamIdChannelsChannelIdMembersRoute,
  postMeJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdHostedContentsRoute,
  postMeJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsRoute,
  postMeJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesRoute,
  postMeJoinedTeamsTeamIdChannelsChannelIdMessagesRoute,
  postMeJoinedTeamsTeamIdChannelsChannelIdSharedWithTeamsRoute,
  postMeJoinedTeamsTeamIdChannelsChannelIdTabsRoute,
  postMeJoinedTeamsTeamIdChannelsRoute,
  postMeJoinedTeamsTeamIdInstalledAppsRoute,
  postMeJoinedTeamsTeamIdMembersRoute,
  postMeJoinedTeamsTeamIdOperationsRoute,
  postMeJoinedTeamsTeamIdPrimaryChannelMembersRoute,
  postMeJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdHostedContentsRoute,
  postMeJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1HostedContentsRoute,
  postMeJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesRoute,
  postMeJoinedTeamsTeamIdPrimaryChannelMessagesRoute,
  postMeJoinedTeamsTeamIdPrimaryChannelSharedWithTeamsRoute,
  postMeJoinedTeamsTeamIdPrimaryChannelTabsRoute,
  postMeJoinedTeamsTeamIdScheduleOfferShiftRequestsRoute,
  postMeJoinedTeamsTeamIdScheduleOpenShiftChangeRequestsRoute,
  postMeJoinedTeamsTeamIdScheduleOpenShiftsRoute,
  postMeJoinedTeamsTeamIdScheduleSchedulingGroupsRoute,
  postMeJoinedTeamsTeamIdScheduleShiftsRoute,
  postMeJoinedTeamsTeamIdScheduleSwapShiftsChangeRequestsRoute,
  postMeJoinedTeamsTeamIdScheduleTimeOffReasonsRoute,
  postMeJoinedTeamsTeamIdScheduleTimeOffRequestsRoute,
  postMeJoinedTeamsTeamIdScheduleTimesOffRoute,
  postMeJoinedTeamsTeamIdTagsRoute,
  postMeJoinedTeamsTeamIdTagsTeamworkTagIdMembersRoute,
  putMeJoinedTeamsTeamIdChannelsChannelIdFilesFolderContentRoute,
  putMeJoinedTeamsTeamIdPhotoValueRoute,
  putMeJoinedTeamsTeamIdPrimaryChannelFilesFolderContentRoute,
  putMeJoinedTeamsTeamIdScheduleRoute,
} from '../routes'

const app = new OpenAPIHono()

export const meTeamHandler = app
  .openapi(getMeJoinedTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeJoinedTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeJoinedTeamsTeamIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeJoinedTeamsTeamIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdAllChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdAllChannelsChannelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeJoinedTeamsTeamIdChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeJoinedTeamsTeamIdChannelsChannelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdChannelsChannelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeJoinedTeamsTeamIdChannelsChannelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdChannelsChannelIdFilesFolderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdChannelsChannelIdFilesFolderContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMeJoinedTeamsTeamIdChannelsChannelIdFilesFolderContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdChannelsChannelIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeJoinedTeamsTeamIdChannelsChannelIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeJoinedTeamsTeamIdChannelsChannelIdMembersConversationMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdChannelsChannelIdMembersConversationMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeJoinedTeamsTeamIdChannelsChannelIdMembersConversationMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdChannelsChannelIdMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeJoinedTeamsTeamIdChannelsChannelIdMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdHostedContentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postMeJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdHostedContentsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteMeJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchMeJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getMeJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteMeJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1Route,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1Route,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchMeJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1Route,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postMeJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteMeJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchMeJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getMeJoinedTeamsTeamIdChannelsChannelIdSharedWithTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeJoinedTeamsTeamIdChannelsChannelIdSharedWithTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteMeJoinedTeamsTeamIdChannelsChannelIdSharedWithTeamsSharedWithChannelTeamInfoIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeJoinedTeamsTeamIdChannelsChannelIdSharedWithTeamsSharedWithChannelTeamInfoIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchMeJoinedTeamsTeamIdChannelsChannelIdSharedWithTeamsSharedWithChannelTeamInfoIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeJoinedTeamsTeamIdChannelsChannelIdSharedWithTeamsSharedWithChannelTeamInfoIdAllowedMembersRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeJoinedTeamsTeamIdChannelsChannelIdSharedWithTeamsSharedWithChannelTeamInfoIdAllowedMembersConversationMemberIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getMeJoinedTeamsTeamIdChannelsChannelIdTabsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeJoinedTeamsTeamIdChannelsChannelIdTabsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeJoinedTeamsTeamIdChannelsChannelIdTabsTeamsTabIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdChannelsChannelIdTabsTeamsTabIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeJoinedTeamsTeamIdChannelsChannelIdTabsTeamsTabIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdChannelsChannelIdTabsTeamsTabIdTeamsAppRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdIncomingChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdIncomingChannelsChannelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdInstalledAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeJoinedTeamsTeamIdInstalledAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeJoinedTeamsTeamIdInstalledAppsTeamsAppInstallationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdInstalledAppsTeamsAppInstallationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeJoinedTeamsTeamIdInstalledAppsTeamsAppInstallationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdInstalledAppsTeamsAppInstallationIdTeamsAppRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getMeJoinedTeamsTeamIdInstalledAppsTeamsAppInstallationIdTeamsAppDefinitionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getMeJoinedTeamsTeamIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeJoinedTeamsTeamIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeJoinedTeamsTeamIdMembersConversationMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdMembersConversationMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeJoinedTeamsTeamIdMembersConversationMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeJoinedTeamsTeamIdOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeJoinedTeamsTeamIdOperationsTeamsAsyncOperationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdOperationsTeamsAsyncOperationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeJoinedTeamsTeamIdOperationsTeamsAsyncOperationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeJoinedTeamsTeamIdPhotoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdPhotoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeJoinedTeamsTeamIdPhotoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdPhotoValueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMeJoinedTeamsTeamIdPhotoValueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeJoinedTeamsTeamIdPrimaryChannelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdPrimaryChannelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeJoinedTeamsTeamIdPrimaryChannelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdPrimaryChannelFilesFolderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdPrimaryChannelFilesFolderContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMeJoinedTeamsTeamIdPrimaryChannelFilesFolderContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdPrimaryChannelMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeJoinedTeamsTeamIdPrimaryChannelMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeJoinedTeamsTeamIdPrimaryChannelMembersConversationMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdPrimaryChannelMembersConversationMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeJoinedTeamsTeamIdPrimaryChannelMembersConversationMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdPrimaryChannelMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeJoinedTeamsTeamIdPrimaryChannelMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdHostedContentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdHostedContentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteMeJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchMeJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getMeJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteMeJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1Route,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1Route,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchMeJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1Route,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1HostedContentsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postMeJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1HostedContentsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteMeJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchMeJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getMeJoinedTeamsTeamIdPrimaryChannelSharedWithTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeJoinedTeamsTeamIdPrimaryChannelSharedWithTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteMeJoinedTeamsTeamIdPrimaryChannelSharedWithTeamsSharedWithChannelTeamInfoIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeJoinedTeamsTeamIdPrimaryChannelSharedWithTeamsSharedWithChannelTeamInfoIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchMeJoinedTeamsTeamIdPrimaryChannelSharedWithTeamsSharedWithChannelTeamInfoIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeJoinedTeamsTeamIdPrimaryChannelSharedWithTeamsSharedWithChannelTeamInfoIdAllowedMembersRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeJoinedTeamsTeamIdPrimaryChannelSharedWithTeamsSharedWithChannelTeamInfoIdAllowedMembersConversationMemberIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getMeJoinedTeamsTeamIdPrimaryChannelTabsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeJoinedTeamsTeamIdPrimaryChannelTabsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeJoinedTeamsTeamIdPrimaryChannelTabsTeamsTabIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdPrimaryChannelTabsTeamsTabIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeJoinedTeamsTeamIdPrimaryChannelTabsTeamsTabIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdPrimaryChannelTabsTeamsTabIdTeamsAppRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeJoinedTeamsTeamIdScheduleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdScheduleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMeJoinedTeamsTeamIdScheduleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdScheduleOfferShiftRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeJoinedTeamsTeamIdScheduleOfferShiftRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeJoinedTeamsTeamIdScheduleOfferShiftRequestsOfferShiftRequestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdScheduleOfferShiftRequestsOfferShiftRequestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeJoinedTeamsTeamIdScheduleOfferShiftRequestsOfferShiftRequestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdScheduleOpenShiftChangeRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeJoinedTeamsTeamIdScheduleOpenShiftChangeRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteMeJoinedTeamsTeamIdScheduleOpenShiftChangeRequestsOpenShiftChangeRequestIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeJoinedTeamsTeamIdScheduleOpenShiftChangeRequestsOpenShiftChangeRequestIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchMeJoinedTeamsTeamIdScheduleOpenShiftChangeRequestsOpenShiftChangeRequestIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getMeJoinedTeamsTeamIdScheduleOpenShiftsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeJoinedTeamsTeamIdScheduleOpenShiftsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeJoinedTeamsTeamIdScheduleOpenShiftsOpenShiftIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdScheduleOpenShiftsOpenShiftIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeJoinedTeamsTeamIdScheduleOpenShiftsOpenShiftIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdScheduleSchedulingGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeJoinedTeamsTeamIdScheduleSchedulingGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeJoinedTeamsTeamIdScheduleSchedulingGroupsSchedulingGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdScheduleSchedulingGroupsSchedulingGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeJoinedTeamsTeamIdScheduleSchedulingGroupsSchedulingGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdScheduleShiftsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeJoinedTeamsTeamIdScheduleShiftsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeJoinedTeamsTeamIdScheduleShiftsShiftIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdScheduleShiftsShiftIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeJoinedTeamsTeamIdScheduleShiftsShiftIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdScheduleSwapShiftsChangeRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeJoinedTeamsTeamIdScheduleSwapShiftsChangeRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteMeJoinedTeamsTeamIdScheduleSwapShiftsChangeRequestsSwapShiftsChangeRequestIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeJoinedTeamsTeamIdScheduleSwapShiftsChangeRequestsSwapShiftsChangeRequestIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchMeJoinedTeamsTeamIdScheduleSwapShiftsChangeRequestsSwapShiftsChangeRequestIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getMeJoinedTeamsTeamIdScheduleTimeOffReasonsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeJoinedTeamsTeamIdScheduleTimeOffReasonsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeJoinedTeamsTeamIdScheduleTimeOffReasonsTimeOffReasonIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdScheduleTimeOffReasonsTimeOffReasonIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeJoinedTeamsTeamIdScheduleTimeOffReasonsTimeOffReasonIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdScheduleTimeOffRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeJoinedTeamsTeamIdScheduleTimeOffRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeJoinedTeamsTeamIdScheduleTimeOffRequestsTimeOffRequestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdScheduleTimeOffRequestsTimeOffRequestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeJoinedTeamsTeamIdScheduleTimeOffRequestsTimeOffRequestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdScheduleTimesOffRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeJoinedTeamsTeamIdScheduleTimesOffRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeJoinedTeamsTeamIdScheduleTimesOffTimeOffIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdScheduleTimesOffTimeOffIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeJoinedTeamsTeamIdScheduleTimesOffTimeOffIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeJoinedTeamsTeamIdTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeJoinedTeamsTeamIdTagsTeamworkTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdTagsTeamworkTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeJoinedTeamsTeamIdTagsTeamworkTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdTagsTeamworkTagIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeJoinedTeamsTeamIdTagsTeamworkTagIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeJoinedTeamsTeamIdTagsTeamworkTagIdMembersTeamworkTagMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdTagsTeamworkTagIdMembersTeamworkTagMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeJoinedTeamsTeamIdTagsTeamworkTagIdMembersTeamworkTagMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdTemplateRoute, (c) => {
    throw new Error('Not implemented')
  })
