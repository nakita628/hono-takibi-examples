import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMembersConversationMemberIdRoute,
  deleteUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
  deleteUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdRoute,
  deleteUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1Route,
  deleteUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRoute,
  deleteUsersUserIdJoinedTeamsTeamIdChannelsChannelIdRoute,
  deleteUsersUserIdJoinedTeamsTeamIdChannelsChannelIdSharedWithTeamsSharedWithChannelTeamInfoIdRoute,
  deleteUsersUserIdJoinedTeamsTeamIdChannelsChannelIdTabsTeamsTabIdRoute,
  deleteUsersUserIdJoinedTeamsTeamIdInstalledAppsTeamsAppInstallationIdRoute,
  deleteUsersUserIdJoinedTeamsTeamIdMembersConversationMemberIdRoute,
  deleteUsersUserIdJoinedTeamsTeamIdOperationsTeamsAsyncOperationIdRoute,
  deleteUsersUserIdJoinedTeamsTeamIdPhotoRoute,
  deleteUsersUserIdJoinedTeamsTeamIdPrimaryChannelMembersConversationMemberIdRoute,
  deleteUsersUserIdJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
  deleteUsersUserIdJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdRoute,
  deleteUsersUserIdJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1Route,
  deleteUsersUserIdJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdRoute,
  deleteUsersUserIdJoinedTeamsTeamIdPrimaryChannelRoute,
  deleteUsersUserIdJoinedTeamsTeamIdPrimaryChannelSharedWithTeamsSharedWithChannelTeamInfoIdRoute,
  deleteUsersUserIdJoinedTeamsTeamIdPrimaryChannelTabsTeamsTabIdRoute,
  deleteUsersUserIdJoinedTeamsTeamIdRoute,
  deleteUsersUserIdJoinedTeamsTeamIdScheduleOfferShiftRequestsOfferShiftRequestIdRoute,
  deleteUsersUserIdJoinedTeamsTeamIdScheduleOpenShiftChangeRequestsOpenShiftChangeRequestIdRoute,
  deleteUsersUserIdJoinedTeamsTeamIdScheduleOpenShiftsOpenShiftIdRoute,
  deleteUsersUserIdJoinedTeamsTeamIdScheduleRoute,
  deleteUsersUserIdJoinedTeamsTeamIdScheduleSchedulingGroupsSchedulingGroupIdRoute,
  deleteUsersUserIdJoinedTeamsTeamIdScheduleShiftsShiftIdRoute,
  deleteUsersUserIdJoinedTeamsTeamIdScheduleSwapShiftsChangeRequestsSwapShiftsChangeRequestIdRoute,
  deleteUsersUserIdJoinedTeamsTeamIdScheduleTimeOffReasonsTimeOffReasonIdRoute,
  deleteUsersUserIdJoinedTeamsTeamIdScheduleTimeOffRequestsTimeOffRequestIdRoute,
  deleteUsersUserIdJoinedTeamsTeamIdScheduleTimesOffTimeOffIdRoute,
  deleteUsersUserIdJoinedTeamsTeamIdTagsTeamworkTagIdMembersTeamworkTagMemberIdRoute,
  deleteUsersUserIdJoinedTeamsTeamIdTagsTeamworkTagIdRoute,
  getUsersUserIdJoinedTeamsRoute,
  getUsersUserIdJoinedTeamsTeamIdAllChannelsChannelIdRoute,
  getUsersUserIdJoinedTeamsTeamIdAllChannelsRoute,
  getUsersUserIdJoinedTeamsTeamIdChannelsChannelIdFilesFolderContentRoute,
  getUsersUserIdJoinedTeamsTeamIdChannelsChannelIdFilesFolderRoute,
  getUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMembersConversationMemberIdRoute,
  getUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMembersRoute,
  getUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
  getUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdHostedContentsRoute,
  getUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdRoute,
  getUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsRoute,
  getUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1Route,
  getUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesRoute,
  getUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRoute,
  getUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMessagesRoute,
  getUsersUserIdJoinedTeamsTeamIdChannelsChannelIdRoute,
  getUsersUserIdJoinedTeamsTeamIdChannelsChannelIdSharedWithTeamsRoute,
  getUsersUserIdJoinedTeamsTeamIdChannelsChannelIdSharedWithTeamsSharedWithChannelTeamInfoIdAllowedMembersConversationMemberIdRoute,
  getUsersUserIdJoinedTeamsTeamIdChannelsChannelIdSharedWithTeamsSharedWithChannelTeamInfoIdAllowedMembersRoute,
  getUsersUserIdJoinedTeamsTeamIdChannelsChannelIdSharedWithTeamsSharedWithChannelTeamInfoIdRoute,
  getUsersUserIdJoinedTeamsTeamIdChannelsChannelIdTabsRoute,
  getUsersUserIdJoinedTeamsTeamIdChannelsChannelIdTabsTeamsTabIdRoute,
  getUsersUserIdJoinedTeamsTeamIdChannelsChannelIdTabsTeamsTabIdTeamsAppRoute,
  getUsersUserIdJoinedTeamsTeamIdChannelsRoute,
  getUsersUserIdJoinedTeamsTeamIdGroupRoute,
  getUsersUserIdJoinedTeamsTeamIdIncomingChannelsChannelIdRoute,
  getUsersUserIdJoinedTeamsTeamIdIncomingChannelsRoute,
  getUsersUserIdJoinedTeamsTeamIdInstalledAppsRoute,
  getUsersUserIdJoinedTeamsTeamIdInstalledAppsTeamsAppInstallationIdRoute,
  getUsersUserIdJoinedTeamsTeamIdInstalledAppsTeamsAppInstallationIdTeamsAppDefinitionRoute,
  getUsersUserIdJoinedTeamsTeamIdInstalledAppsTeamsAppInstallationIdTeamsAppRoute,
  getUsersUserIdJoinedTeamsTeamIdMembersConversationMemberIdRoute,
  getUsersUserIdJoinedTeamsTeamIdMembersRoute,
  getUsersUserIdJoinedTeamsTeamIdOperationsRoute,
  getUsersUserIdJoinedTeamsTeamIdOperationsTeamsAsyncOperationIdRoute,
  getUsersUserIdJoinedTeamsTeamIdPhotoRoute,
  getUsersUserIdJoinedTeamsTeamIdPhotoValueRoute,
  getUsersUserIdJoinedTeamsTeamIdPrimaryChannelFilesFolderContentRoute,
  getUsersUserIdJoinedTeamsTeamIdPrimaryChannelFilesFolderRoute,
  getUsersUserIdJoinedTeamsTeamIdPrimaryChannelMembersConversationMemberIdRoute,
  getUsersUserIdJoinedTeamsTeamIdPrimaryChannelMembersRoute,
  getUsersUserIdJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
  getUsersUserIdJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdHostedContentsRoute,
  getUsersUserIdJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdRoute,
  getUsersUserIdJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1HostedContentsRoute,
  getUsersUserIdJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1Route,
  getUsersUserIdJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesRoute,
  getUsersUserIdJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdRoute,
  getUsersUserIdJoinedTeamsTeamIdPrimaryChannelMessagesRoute,
  getUsersUserIdJoinedTeamsTeamIdPrimaryChannelRoute,
  getUsersUserIdJoinedTeamsTeamIdPrimaryChannelSharedWithTeamsRoute,
  getUsersUserIdJoinedTeamsTeamIdPrimaryChannelSharedWithTeamsSharedWithChannelTeamInfoIdAllowedMembersConversationMemberIdRoute,
  getUsersUserIdJoinedTeamsTeamIdPrimaryChannelSharedWithTeamsSharedWithChannelTeamInfoIdAllowedMembersRoute,
  getUsersUserIdJoinedTeamsTeamIdPrimaryChannelSharedWithTeamsSharedWithChannelTeamInfoIdRoute,
  getUsersUserIdJoinedTeamsTeamIdPrimaryChannelTabsRoute,
  getUsersUserIdJoinedTeamsTeamIdPrimaryChannelTabsTeamsTabIdRoute,
  getUsersUserIdJoinedTeamsTeamIdPrimaryChannelTabsTeamsTabIdTeamsAppRoute,
  getUsersUserIdJoinedTeamsTeamIdRoute,
  getUsersUserIdJoinedTeamsTeamIdScheduleOfferShiftRequestsOfferShiftRequestIdRoute,
  getUsersUserIdJoinedTeamsTeamIdScheduleOfferShiftRequestsRoute,
  getUsersUserIdJoinedTeamsTeamIdScheduleOpenShiftChangeRequestsOpenShiftChangeRequestIdRoute,
  getUsersUserIdJoinedTeamsTeamIdScheduleOpenShiftChangeRequestsRoute,
  getUsersUserIdJoinedTeamsTeamIdScheduleOpenShiftsOpenShiftIdRoute,
  getUsersUserIdJoinedTeamsTeamIdScheduleOpenShiftsRoute,
  getUsersUserIdJoinedTeamsTeamIdScheduleRoute,
  getUsersUserIdJoinedTeamsTeamIdScheduleSchedulingGroupsRoute,
  getUsersUserIdJoinedTeamsTeamIdScheduleSchedulingGroupsSchedulingGroupIdRoute,
  getUsersUserIdJoinedTeamsTeamIdScheduleShiftsRoute,
  getUsersUserIdJoinedTeamsTeamIdScheduleShiftsShiftIdRoute,
  getUsersUserIdJoinedTeamsTeamIdScheduleSwapShiftsChangeRequestsRoute,
  getUsersUserIdJoinedTeamsTeamIdScheduleSwapShiftsChangeRequestsSwapShiftsChangeRequestIdRoute,
  getUsersUserIdJoinedTeamsTeamIdScheduleTimeOffReasonsRoute,
  getUsersUserIdJoinedTeamsTeamIdScheduleTimeOffReasonsTimeOffReasonIdRoute,
  getUsersUserIdJoinedTeamsTeamIdScheduleTimeOffRequestsRoute,
  getUsersUserIdJoinedTeamsTeamIdScheduleTimeOffRequestsTimeOffRequestIdRoute,
  getUsersUserIdJoinedTeamsTeamIdScheduleTimesOffRoute,
  getUsersUserIdJoinedTeamsTeamIdScheduleTimesOffTimeOffIdRoute,
  getUsersUserIdJoinedTeamsTeamIdTagsRoute,
  getUsersUserIdJoinedTeamsTeamIdTagsTeamworkTagIdMembersRoute,
  getUsersUserIdJoinedTeamsTeamIdTagsTeamworkTagIdMembersTeamworkTagMemberIdRoute,
  getUsersUserIdJoinedTeamsTeamIdTagsTeamworkTagIdRoute,
  getUsersUserIdJoinedTeamsTeamIdTemplateRoute,
  patchUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMembersConversationMemberIdRoute,
  patchUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
  patchUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdRoute,
  patchUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1Route,
  patchUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRoute,
  patchUsersUserIdJoinedTeamsTeamIdChannelsChannelIdRoute,
  patchUsersUserIdJoinedTeamsTeamIdChannelsChannelIdSharedWithTeamsSharedWithChannelTeamInfoIdRoute,
  patchUsersUserIdJoinedTeamsTeamIdChannelsChannelIdTabsTeamsTabIdRoute,
  patchUsersUserIdJoinedTeamsTeamIdInstalledAppsTeamsAppInstallationIdRoute,
  patchUsersUserIdJoinedTeamsTeamIdMembersConversationMemberIdRoute,
  patchUsersUserIdJoinedTeamsTeamIdOperationsTeamsAsyncOperationIdRoute,
  patchUsersUserIdJoinedTeamsTeamIdPhotoRoute,
  patchUsersUserIdJoinedTeamsTeamIdPrimaryChannelMembersConversationMemberIdRoute,
  patchUsersUserIdJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
  patchUsersUserIdJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdRoute,
  patchUsersUserIdJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1Route,
  patchUsersUserIdJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdRoute,
  patchUsersUserIdJoinedTeamsTeamIdPrimaryChannelRoute,
  patchUsersUserIdJoinedTeamsTeamIdPrimaryChannelSharedWithTeamsSharedWithChannelTeamInfoIdRoute,
  patchUsersUserIdJoinedTeamsTeamIdPrimaryChannelTabsTeamsTabIdRoute,
  patchUsersUserIdJoinedTeamsTeamIdRoute,
  patchUsersUserIdJoinedTeamsTeamIdScheduleOfferShiftRequestsOfferShiftRequestIdRoute,
  patchUsersUserIdJoinedTeamsTeamIdScheduleOpenShiftChangeRequestsOpenShiftChangeRequestIdRoute,
  patchUsersUserIdJoinedTeamsTeamIdScheduleOpenShiftsOpenShiftIdRoute,
  patchUsersUserIdJoinedTeamsTeamIdScheduleSchedulingGroupsSchedulingGroupIdRoute,
  patchUsersUserIdJoinedTeamsTeamIdScheduleShiftsShiftIdRoute,
  patchUsersUserIdJoinedTeamsTeamIdScheduleSwapShiftsChangeRequestsSwapShiftsChangeRequestIdRoute,
  patchUsersUserIdJoinedTeamsTeamIdScheduleTimeOffReasonsTimeOffReasonIdRoute,
  patchUsersUserIdJoinedTeamsTeamIdScheduleTimeOffRequestsTimeOffRequestIdRoute,
  patchUsersUserIdJoinedTeamsTeamIdScheduleTimesOffTimeOffIdRoute,
  patchUsersUserIdJoinedTeamsTeamIdTagsTeamworkTagIdMembersTeamworkTagMemberIdRoute,
  patchUsersUserIdJoinedTeamsTeamIdTagsTeamworkTagIdRoute,
  postUsersUserIdJoinedTeamsRoute,
  postUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMembersRoute,
  postUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdHostedContentsRoute,
  postUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsRoute,
  postUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesRoute,
  postUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMessagesRoute,
  postUsersUserIdJoinedTeamsTeamIdChannelsChannelIdSharedWithTeamsRoute,
  postUsersUserIdJoinedTeamsTeamIdChannelsChannelIdTabsRoute,
  postUsersUserIdJoinedTeamsTeamIdChannelsRoute,
  postUsersUserIdJoinedTeamsTeamIdInstalledAppsRoute,
  postUsersUserIdJoinedTeamsTeamIdMembersRoute,
  postUsersUserIdJoinedTeamsTeamIdOperationsRoute,
  postUsersUserIdJoinedTeamsTeamIdPrimaryChannelMembersRoute,
  postUsersUserIdJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdHostedContentsRoute,
  postUsersUserIdJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1HostedContentsRoute,
  postUsersUserIdJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesRoute,
  postUsersUserIdJoinedTeamsTeamIdPrimaryChannelMessagesRoute,
  postUsersUserIdJoinedTeamsTeamIdPrimaryChannelSharedWithTeamsRoute,
  postUsersUserIdJoinedTeamsTeamIdPrimaryChannelTabsRoute,
  postUsersUserIdJoinedTeamsTeamIdScheduleOfferShiftRequestsRoute,
  postUsersUserIdJoinedTeamsTeamIdScheduleOpenShiftChangeRequestsRoute,
  postUsersUserIdJoinedTeamsTeamIdScheduleOpenShiftsRoute,
  postUsersUserIdJoinedTeamsTeamIdScheduleSchedulingGroupsRoute,
  postUsersUserIdJoinedTeamsTeamIdScheduleShiftsRoute,
  postUsersUserIdJoinedTeamsTeamIdScheduleSwapShiftsChangeRequestsRoute,
  postUsersUserIdJoinedTeamsTeamIdScheduleTimeOffReasonsRoute,
  postUsersUserIdJoinedTeamsTeamIdScheduleTimeOffRequestsRoute,
  postUsersUserIdJoinedTeamsTeamIdScheduleTimesOffRoute,
  postUsersUserIdJoinedTeamsTeamIdTagsRoute,
  postUsersUserIdJoinedTeamsTeamIdTagsTeamworkTagIdMembersRoute,
  putUsersUserIdJoinedTeamsTeamIdChannelsChannelIdFilesFolderContentRoute,
  putUsersUserIdJoinedTeamsTeamIdPhotoValueRoute,
  putUsersUserIdJoinedTeamsTeamIdPrimaryChannelFilesFolderContentRoute,
  putUsersUserIdJoinedTeamsTeamIdScheduleRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersTeamHandler = app
  .openapi(getUsersUserIdJoinedTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdJoinedTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdJoinedTeamsTeamIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdJoinedTeamsTeamIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdJoinedTeamsTeamIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdJoinedTeamsTeamIdAllChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdJoinedTeamsTeamIdAllChannelsChannelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdJoinedTeamsTeamIdChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdJoinedTeamsTeamIdChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdJoinedTeamsTeamIdChannelsChannelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdJoinedTeamsTeamIdChannelsChannelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdJoinedTeamsTeamIdChannelsChannelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdJoinedTeamsTeamIdChannelsChannelIdFilesFolderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdJoinedTeamsTeamIdChannelsChannelIdFilesFolderContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUsersUserIdJoinedTeamsTeamIdChannelsChannelIdFilesFolderContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMembersConversationMemberIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMembersConversationMemberIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMembersConversationMemberIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdHostedContentsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdHostedContentsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1Route,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1Route,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1Route,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getUsersUserIdJoinedTeamsTeamIdChannelsChannelIdSharedWithTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdJoinedTeamsTeamIdChannelsChannelIdSharedWithTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteUsersUserIdJoinedTeamsTeamIdChannelsChannelIdSharedWithTeamsSharedWithChannelTeamInfoIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdJoinedTeamsTeamIdChannelsChannelIdSharedWithTeamsSharedWithChannelTeamInfoIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchUsersUserIdJoinedTeamsTeamIdChannelsChannelIdSharedWithTeamsSharedWithChannelTeamInfoIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdJoinedTeamsTeamIdChannelsChannelIdSharedWithTeamsSharedWithChannelTeamInfoIdAllowedMembersRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdJoinedTeamsTeamIdChannelsChannelIdSharedWithTeamsSharedWithChannelTeamInfoIdAllowedMembersConversationMemberIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getUsersUserIdJoinedTeamsTeamIdChannelsChannelIdTabsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdJoinedTeamsTeamIdChannelsChannelIdTabsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdJoinedTeamsTeamIdChannelsChannelIdTabsTeamsTabIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdJoinedTeamsTeamIdChannelsChannelIdTabsTeamsTabIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdJoinedTeamsTeamIdChannelsChannelIdTabsTeamsTabIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdJoinedTeamsTeamIdChannelsChannelIdTabsTeamsTabIdTeamsAppRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdJoinedTeamsTeamIdGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdJoinedTeamsTeamIdIncomingChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdJoinedTeamsTeamIdIncomingChannelsChannelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdJoinedTeamsTeamIdInstalledAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdJoinedTeamsTeamIdInstalledAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdJoinedTeamsTeamIdInstalledAppsTeamsAppInstallationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdJoinedTeamsTeamIdInstalledAppsTeamsAppInstallationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdJoinedTeamsTeamIdInstalledAppsTeamsAppInstallationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdJoinedTeamsTeamIdInstalledAppsTeamsAppInstallationIdTeamsAppRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getUsersUserIdJoinedTeamsTeamIdInstalledAppsTeamsAppInstallationIdTeamsAppDefinitionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getUsersUserIdJoinedTeamsTeamIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdJoinedTeamsTeamIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdJoinedTeamsTeamIdMembersConversationMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdJoinedTeamsTeamIdMembersConversationMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdJoinedTeamsTeamIdMembersConversationMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdJoinedTeamsTeamIdOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdJoinedTeamsTeamIdOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdJoinedTeamsTeamIdOperationsTeamsAsyncOperationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdJoinedTeamsTeamIdOperationsTeamsAsyncOperationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdJoinedTeamsTeamIdOperationsTeamsAsyncOperationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdJoinedTeamsTeamIdPhotoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdJoinedTeamsTeamIdPhotoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdJoinedTeamsTeamIdPhotoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdJoinedTeamsTeamIdPhotoValueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUsersUserIdJoinedTeamsTeamIdPhotoValueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdJoinedTeamsTeamIdPrimaryChannelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdJoinedTeamsTeamIdPrimaryChannelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdJoinedTeamsTeamIdPrimaryChannelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdJoinedTeamsTeamIdPrimaryChannelFilesFolderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdJoinedTeamsTeamIdPrimaryChannelFilesFolderContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUsersUserIdJoinedTeamsTeamIdPrimaryChannelFilesFolderContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdJoinedTeamsTeamIdPrimaryChannelMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdJoinedTeamsTeamIdPrimaryChannelMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteUsersUserIdJoinedTeamsTeamIdPrimaryChannelMembersConversationMemberIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getUsersUserIdJoinedTeamsTeamIdPrimaryChannelMembersConversationMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdJoinedTeamsTeamIdPrimaryChannelMembersConversationMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdJoinedTeamsTeamIdPrimaryChannelMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdJoinedTeamsTeamIdPrimaryChannelMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getUsersUserIdJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdHostedContentsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdHostedContentsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteUsersUserIdJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchUsersUserIdJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getUsersUserIdJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteUsersUserIdJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1Route,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1Route,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchUsersUserIdJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1Route,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1HostedContentsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1HostedContentsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteUsersUserIdJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchUsersUserIdJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getUsersUserIdJoinedTeamsTeamIdPrimaryChannelSharedWithTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdJoinedTeamsTeamIdPrimaryChannelSharedWithTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteUsersUserIdJoinedTeamsTeamIdPrimaryChannelSharedWithTeamsSharedWithChannelTeamInfoIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdJoinedTeamsTeamIdPrimaryChannelSharedWithTeamsSharedWithChannelTeamInfoIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchUsersUserIdJoinedTeamsTeamIdPrimaryChannelSharedWithTeamsSharedWithChannelTeamInfoIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdJoinedTeamsTeamIdPrimaryChannelSharedWithTeamsSharedWithChannelTeamInfoIdAllowedMembersRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdJoinedTeamsTeamIdPrimaryChannelSharedWithTeamsSharedWithChannelTeamInfoIdAllowedMembersConversationMemberIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getUsersUserIdJoinedTeamsTeamIdPrimaryChannelTabsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdJoinedTeamsTeamIdPrimaryChannelTabsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdJoinedTeamsTeamIdPrimaryChannelTabsTeamsTabIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdJoinedTeamsTeamIdPrimaryChannelTabsTeamsTabIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdJoinedTeamsTeamIdPrimaryChannelTabsTeamsTabIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdJoinedTeamsTeamIdPrimaryChannelTabsTeamsTabIdTeamsAppRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdJoinedTeamsTeamIdScheduleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdJoinedTeamsTeamIdScheduleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUsersUserIdJoinedTeamsTeamIdScheduleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdJoinedTeamsTeamIdScheduleOfferShiftRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdJoinedTeamsTeamIdScheduleOfferShiftRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteUsersUserIdJoinedTeamsTeamIdScheduleOfferShiftRequestsOfferShiftRequestIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdJoinedTeamsTeamIdScheduleOfferShiftRequestsOfferShiftRequestIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchUsersUserIdJoinedTeamsTeamIdScheduleOfferShiftRequestsOfferShiftRequestIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getUsersUserIdJoinedTeamsTeamIdScheduleOpenShiftChangeRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdJoinedTeamsTeamIdScheduleOpenShiftChangeRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteUsersUserIdJoinedTeamsTeamIdScheduleOpenShiftChangeRequestsOpenShiftChangeRequestIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdJoinedTeamsTeamIdScheduleOpenShiftChangeRequestsOpenShiftChangeRequestIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchUsersUserIdJoinedTeamsTeamIdScheduleOpenShiftChangeRequestsOpenShiftChangeRequestIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getUsersUserIdJoinedTeamsTeamIdScheduleOpenShiftsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdJoinedTeamsTeamIdScheduleOpenShiftsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdJoinedTeamsTeamIdScheduleOpenShiftsOpenShiftIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdJoinedTeamsTeamIdScheduleOpenShiftsOpenShiftIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdJoinedTeamsTeamIdScheduleOpenShiftsOpenShiftIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdJoinedTeamsTeamIdScheduleSchedulingGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdJoinedTeamsTeamIdScheduleSchedulingGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteUsersUserIdJoinedTeamsTeamIdScheduleSchedulingGroupsSchedulingGroupIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getUsersUserIdJoinedTeamsTeamIdScheduleSchedulingGroupsSchedulingGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdJoinedTeamsTeamIdScheduleSchedulingGroupsSchedulingGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdJoinedTeamsTeamIdScheduleShiftsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdJoinedTeamsTeamIdScheduleShiftsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdJoinedTeamsTeamIdScheduleShiftsShiftIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdJoinedTeamsTeamIdScheduleShiftsShiftIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdJoinedTeamsTeamIdScheduleShiftsShiftIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdJoinedTeamsTeamIdScheduleSwapShiftsChangeRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdJoinedTeamsTeamIdScheduleSwapShiftsChangeRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteUsersUserIdJoinedTeamsTeamIdScheduleSwapShiftsChangeRequestsSwapShiftsChangeRequestIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdJoinedTeamsTeamIdScheduleSwapShiftsChangeRequestsSwapShiftsChangeRequestIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchUsersUserIdJoinedTeamsTeamIdScheduleSwapShiftsChangeRequestsSwapShiftsChangeRequestIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getUsersUserIdJoinedTeamsTeamIdScheduleTimeOffReasonsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdJoinedTeamsTeamIdScheduleTimeOffReasonsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdJoinedTeamsTeamIdScheduleTimeOffReasonsTimeOffReasonIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdJoinedTeamsTeamIdScheduleTimeOffReasonsTimeOffReasonIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdJoinedTeamsTeamIdScheduleTimeOffReasonsTimeOffReasonIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdJoinedTeamsTeamIdScheduleTimeOffRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdJoinedTeamsTeamIdScheduleTimeOffRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdJoinedTeamsTeamIdScheduleTimeOffRequestsTimeOffRequestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdJoinedTeamsTeamIdScheduleTimeOffRequestsTimeOffRequestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdJoinedTeamsTeamIdScheduleTimeOffRequestsTimeOffRequestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdJoinedTeamsTeamIdScheduleTimesOffRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdJoinedTeamsTeamIdScheduleTimesOffRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdJoinedTeamsTeamIdScheduleTimesOffTimeOffIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdJoinedTeamsTeamIdScheduleTimesOffTimeOffIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdJoinedTeamsTeamIdScheduleTimesOffTimeOffIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdJoinedTeamsTeamIdTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdJoinedTeamsTeamIdTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdJoinedTeamsTeamIdTagsTeamworkTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdJoinedTeamsTeamIdTagsTeamworkTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdJoinedTeamsTeamIdTagsTeamworkTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdJoinedTeamsTeamIdTagsTeamworkTagIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdJoinedTeamsTeamIdTagsTeamworkTagIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteUsersUserIdJoinedTeamsTeamIdTagsTeamworkTagIdMembersTeamworkTagMemberIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getUsersUserIdJoinedTeamsTeamIdTagsTeamworkTagIdMembersTeamworkTagMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    patchUsersUserIdJoinedTeamsTeamIdTagsTeamworkTagIdMembersTeamworkTagMemberIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getUsersUserIdJoinedTeamsTeamIdTemplateRoute, (c) => {
    throw new Error('Not implemented')
  })
