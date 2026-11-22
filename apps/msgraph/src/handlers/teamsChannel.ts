import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTeamsTeamIdChannelsChannelIdAllMembersConversationMemberIdRoute,
  deleteTeamsTeamIdChannelsChannelIdFilesFolderContentRoute,
  deleteTeamsTeamIdChannelsChannelIdMembersConversationMemberIdRoute,
  deleteTeamsTeamIdChannelsChannelIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
  deleteTeamsTeamIdChannelsChannelIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdValueRoute,
  deleteTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdRoute,
  deleteTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdValueRoute,
  deleteTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1Route,
  deleteTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRoute,
  deleteTeamsTeamIdChannelsChannelIdRoute,
  deleteTeamsTeamIdChannelsChannelIdSharedWithTeamsSharedWithChannelTeamInfoIdRoute,
  deleteTeamsTeamIdChannelsChannelIdTabsTeamsTabIdRoute,
  deleteTeamsTeamIdPrimaryChannelAllMembersConversationMemberIdRoute,
  deleteTeamsTeamIdPrimaryChannelFilesFolderContentRoute,
  deleteTeamsTeamIdPrimaryChannelMembersConversationMemberIdRoute,
  deleteTeamsTeamIdPrimaryChannelMessagesChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
  deleteTeamsTeamIdPrimaryChannelMessagesChatMessageIdHostedContentsChatMessageHostedContentIdValueRoute,
  deleteTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdRoute,
  deleteTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdValueRoute,
  deleteTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1Route,
  deleteTeamsTeamIdPrimaryChannelMessagesChatMessageIdRoute,
  deleteTeamsTeamIdPrimaryChannelRoute,
  deleteTeamsTeamIdPrimaryChannelSharedWithTeamsSharedWithChannelTeamInfoIdRoute,
  deleteTeamsTeamIdPrimaryChannelTabsTeamsTabIdRoute,
  getTeamsTeamIdAllChannelsChannelIdRoute,
  getTeamsTeamIdAllChannelsCountRoute,
  getTeamsTeamIdAllChannelsRoute,
  getTeamsTeamIdChannelsChannelIdAllMembersConversationMemberIdRoute,
  getTeamsTeamIdChannelsChannelIdAllMembersCountRoute,
  getTeamsTeamIdChannelsChannelIdAllMembersRoute,
  getTeamsTeamIdChannelsChannelIdDoesUserHaveAccessUserIdUserIdTenantIdTenantIdUserPrincipalNameUserPrincipalNameRoute,
  getTeamsTeamIdChannelsChannelIdEnabledAppsCountRoute,
  getTeamsTeamIdChannelsChannelIdEnabledAppsRoute,
  getTeamsTeamIdChannelsChannelIdEnabledAppsTeamsAppIdRoute,
  getTeamsTeamIdChannelsChannelIdFilesFolderContentRoute,
  getTeamsTeamIdChannelsChannelIdFilesFolderRoute,
  getTeamsTeamIdChannelsChannelIdMembersConversationMemberIdRoute,
  getTeamsTeamIdChannelsChannelIdMembersCountRoute,
  getTeamsTeamIdChannelsChannelIdMembersRoute,
  getTeamsTeamIdChannelsChannelIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
  getTeamsTeamIdChannelsChannelIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdValueRoute,
  getTeamsTeamIdChannelsChannelIdMessagesChatMessageIdHostedContentsCountRoute,
  getTeamsTeamIdChannelsChannelIdMessagesChatMessageIdHostedContentsRoute,
  getTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdRoute,
  getTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdValueRoute,
  getTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsCountRoute,
  getTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsRoute,
  getTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1Route,
  getTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesCountRoute,
  getTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesDeltaRoute,
  getTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesRoute,
  getTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRoute,
  getTeamsTeamIdChannelsChannelIdMessagesCountRoute,
  getTeamsTeamIdChannelsChannelIdMessagesDeltaRoute,
  getTeamsTeamIdChannelsChannelIdMessagesRoute,
  getTeamsTeamIdChannelsChannelIdRoute,
  getTeamsTeamIdChannelsChannelIdSharedWithTeamsCountRoute,
  getTeamsTeamIdChannelsChannelIdSharedWithTeamsRoute,
  getTeamsTeamIdChannelsChannelIdSharedWithTeamsSharedWithChannelTeamInfoIdAllowedMembersConversationMemberIdRoute,
  getTeamsTeamIdChannelsChannelIdSharedWithTeamsSharedWithChannelTeamInfoIdAllowedMembersCountRoute,
  getTeamsTeamIdChannelsChannelIdSharedWithTeamsSharedWithChannelTeamInfoIdAllowedMembersRoute,
  getTeamsTeamIdChannelsChannelIdSharedWithTeamsSharedWithChannelTeamInfoIdRoute,
  getTeamsTeamIdChannelsChannelIdSharedWithTeamsSharedWithChannelTeamInfoIdTeamRoute,
  getTeamsTeamIdChannelsChannelIdTabsCountRoute,
  getTeamsTeamIdChannelsChannelIdTabsRoute,
  getTeamsTeamIdChannelsChannelIdTabsTeamsTabIdRoute,
  getTeamsTeamIdChannelsChannelIdTabsTeamsTabIdTeamsAppRoute,
  getTeamsTeamIdChannelsCountRoute,
  getTeamsTeamIdChannelsGetAllMessagesRoute,
  getTeamsTeamIdChannelsGetAllRetainedMessagesRoute,
  getTeamsTeamIdChannelsRoute,
  getTeamsTeamIdIncomingChannelsChannelIdRoute,
  getTeamsTeamIdIncomingChannelsCountRoute,
  getTeamsTeamIdIncomingChannelsRoute,
  getTeamsTeamIdPrimaryChannelAllMembersConversationMemberIdRoute,
  getTeamsTeamIdPrimaryChannelAllMembersCountRoute,
  getTeamsTeamIdPrimaryChannelAllMembersRoute,
  getTeamsTeamIdPrimaryChannelDoesUserHaveAccessUserIdUserIdTenantIdTenantIdUserPrincipalNameUserPrincipalNameRoute,
  getTeamsTeamIdPrimaryChannelEnabledAppsCountRoute,
  getTeamsTeamIdPrimaryChannelEnabledAppsRoute,
  getTeamsTeamIdPrimaryChannelEnabledAppsTeamsAppIdRoute,
  getTeamsTeamIdPrimaryChannelFilesFolderContentRoute,
  getTeamsTeamIdPrimaryChannelFilesFolderRoute,
  getTeamsTeamIdPrimaryChannelMembersConversationMemberIdRoute,
  getTeamsTeamIdPrimaryChannelMembersCountRoute,
  getTeamsTeamIdPrimaryChannelMembersRoute,
  getTeamsTeamIdPrimaryChannelMessagesChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
  getTeamsTeamIdPrimaryChannelMessagesChatMessageIdHostedContentsChatMessageHostedContentIdValueRoute,
  getTeamsTeamIdPrimaryChannelMessagesChatMessageIdHostedContentsCountRoute,
  getTeamsTeamIdPrimaryChannelMessagesChatMessageIdHostedContentsRoute,
  getTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdRoute,
  getTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdValueRoute,
  getTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1HostedContentsCountRoute,
  getTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1HostedContentsRoute,
  getTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1Route,
  getTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesCountRoute,
  getTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesDeltaRoute,
  getTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesRoute,
  getTeamsTeamIdPrimaryChannelMessagesChatMessageIdRoute,
  getTeamsTeamIdPrimaryChannelMessagesCountRoute,
  getTeamsTeamIdPrimaryChannelMessagesDeltaRoute,
  getTeamsTeamIdPrimaryChannelMessagesRoute,
  getTeamsTeamIdPrimaryChannelRoute,
  getTeamsTeamIdPrimaryChannelSharedWithTeamsCountRoute,
  getTeamsTeamIdPrimaryChannelSharedWithTeamsRoute,
  getTeamsTeamIdPrimaryChannelSharedWithTeamsSharedWithChannelTeamInfoIdAllowedMembersConversationMemberIdRoute,
  getTeamsTeamIdPrimaryChannelSharedWithTeamsSharedWithChannelTeamInfoIdAllowedMembersCountRoute,
  getTeamsTeamIdPrimaryChannelSharedWithTeamsSharedWithChannelTeamInfoIdAllowedMembersRoute,
  getTeamsTeamIdPrimaryChannelSharedWithTeamsSharedWithChannelTeamInfoIdRoute,
  getTeamsTeamIdPrimaryChannelSharedWithTeamsSharedWithChannelTeamInfoIdTeamRoute,
  getTeamsTeamIdPrimaryChannelTabsCountRoute,
  getTeamsTeamIdPrimaryChannelTabsRoute,
  getTeamsTeamIdPrimaryChannelTabsTeamsTabIdRoute,
  getTeamsTeamIdPrimaryChannelTabsTeamsTabIdTeamsAppRoute,
  patchTeamsTeamIdChannelsChannelIdAllMembersConversationMemberIdRoute,
  patchTeamsTeamIdChannelsChannelIdMembersConversationMemberIdRoute,
  patchTeamsTeamIdChannelsChannelIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
  patchTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdRoute,
  patchTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1Route,
  patchTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRoute,
  patchTeamsTeamIdChannelsChannelIdRoute,
  patchTeamsTeamIdChannelsChannelIdSharedWithTeamsSharedWithChannelTeamInfoIdRoute,
  patchTeamsTeamIdChannelsChannelIdTabsTeamsTabIdRoute,
  patchTeamsTeamIdPrimaryChannelAllMembersConversationMemberIdRoute,
  patchTeamsTeamIdPrimaryChannelMembersConversationMemberIdRoute,
  patchTeamsTeamIdPrimaryChannelMessagesChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
  patchTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdRoute,
  patchTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1Route,
  patchTeamsTeamIdPrimaryChannelMessagesChatMessageIdRoute,
  patchTeamsTeamIdPrimaryChannelRoute,
  patchTeamsTeamIdPrimaryChannelSharedWithTeamsSharedWithChannelTeamInfoIdRoute,
  patchTeamsTeamIdPrimaryChannelTabsTeamsTabIdRoute,
  postTeamsTeamIdChannelsChannelIdAllMembersAddRoute,
  postTeamsTeamIdChannelsChannelIdAllMembersRemoveRoute,
  postTeamsTeamIdChannelsChannelIdAllMembersRoute,
  postTeamsTeamIdChannelsChannelIdArchiveRoute,
  postTeamsTeamIdChannelsChannelIdCompleteMigrationRoute,
  postTeamsTeamIdChannelsChannelIdMembersAddRoute,
  postTeamsTeamIdChannelsChannelIdMembersRemoveRoute,
  postTeamsTeamIdChannelsChannelIdMembersRoute,
  postTeamsTeamIdChannelsChannelIdMessagesChatMessageIdHostedContentsRoute,
  postTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsRoute,
  postTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1SetReactionRoute,
  postTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1SoftDeleteRoute,
  postTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1UndoSoftDeleteRoute,
  postTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1UnsetReactionRoute,
  postTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesReplyWithQuoteRoute,
  postTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesRoute,
  postTeamsTeamIdChannelsChannelIdMessagesChatMessageIdSetReactionRoute,
  postTeamsTeamIdChannelsChannelIdMessagesChatMessageIdSoftDeleteRoute,
  postTeamsTeamIdChannelsChannelIdMessagesChatMessageIdUndoSoftDeleteRoute,
  postTeamsTeamIdChannelsChannelIdMessagesChatMessageIdUnsetReactionRoute,
  postTeamsTeamIdChannelsChannelIdMessagesReplyWithQuoteRoute,
  postTeamsTeamIdChannelsChannelIdMessagesRoute,
  postTeamsTeamIdChannelsChannelIdProvisionEmailRoute,
  postTeamsTeamIdChannelsChannelIdRemoveEmailRoute,
  postTeamsTeamIdChannelsChannelIdSharedWithTeamsRoute,
  postTeamsTeamIdChannelsChannelIdStartMigrationRoute,
  postTeamsTeamIdChannelsChannelIdTabsRoute,
  postTeamsTeamIdChannelsChannelIdUnarchiveRoute,
  postTeamsTeamIdChannelsRoute,
  postTeamsTeamIdPrimaryChannelAllMembersAddRoute,
  postTeamsTeamIdPrimaryChannelAllMembersRemoveRoute,
  postTeamsTeamIdPrimaryChannelAllMembersRoute,
  postTeamsTeamIdPrimaryChannelArchiveRoute,
  postTeamsTeamIdPrimaryChannelCompleteMigrationRoute,
  postTeamsTeamIdPrimaryChannelMembersAddRoute,
  postTeamsTeamIdPrimaryChannelMembersRemoveRoute,
  postTeamsTeamIdPrimaryChannelMembersRoute,
  postTeamsTeamIdPrimaryChannelMessagesChatMessageIdHostedContentsRoute,
  postTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1HostedContentsRoute,
  postTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1SetReactionRoute,
  postTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1SoftDeleteRoute,
  postTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1UndoSoftDeleteRoute,
  postTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1UnsetReactionRoute,
  postTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesReplyWithQuoteRoute,
  postTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesRoute,
  postTeamsTeamIdPrimaryChannelMessagesChatMessageIdSetReactionRoute,
  postTeamsTeamIdPrimaryChannelMessagesChatMessageIdSoftDeleteRoute,
  postTeamsTeamIdPrimaryChannelMessagesChatMessageIdUndoSoftDeleteRoute,
  postTeamsTeamIdPrimaryChannelMessagesChatMessageIdUnsetReactionRoute,
  postTeamsTeamIdPrimaryChannelMessagesReplyWithQuoteRoute,
  postTeamsTeamIdPrimaryChannelMessagesRoute,
  postTeamsTeamIdPrimaryChannelProvisionEmailRoute,
  postTeamsTeamIdPrimaryChannelRemoveEmailRoute,
  postTeamsTeamIdPrimaryChannelSharedWithTeamsRoute,
  postTeamsTeamIdPrimaryChannelStartMigrationRoute,
  postTeamsTeamIdPrimaryChannelTabsRoute,
  postTeamsTeamIdPrimaryChannelUnarchiveRoute,
  putTeamsTeamIdChannelsChannelIdFilesFolderContentRoute,
  putTeamsTeamIdChannelsChannelIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdValueRoute,
  putTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdValueRoute,
  putTeamsTeamIdPrimaryChannelFilesFolderContentRoute,
  putTeamsTeamIdPrimaryChannelMessagesChatMessageIdHostedContentsChatMessageHostedContentIdValueRoute,
  putTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdValueRoute,
} from '../routes'

const app = new OpenAPIHono()

export const teamsChannelHandler = app
  .openapi(getTeamsTeamIdAllChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdAllChannelsChannelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdAllChannelsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTeamsTeamIdChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdChannelsChannelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchTeamsTeamIdChannelsChannelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTeamsTeamIdChannelsChannelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdChannelsChannelIdAllMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTeamsTeamIdChannelsChannelIdAllMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdChannelsChannelIdAllMembersConversationMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchTeamsTeamIdChannelsChannelIdAllMembersConversationMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTeamsTeamIdChannelsChannelIdAllMembersConversationMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdChannelsChannelIdAllMembersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTeamsTeamIdChannelsChannelIdAllMembersAddRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTeamsTeamIdChannelsChannelIdAllMembersRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdChannelsChannelIdEnabledAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdChannelsChannelIdEnabledAppsTeamsAppIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdChannelsChannelIdEnabledAppsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdChannelsChannelIdFilesFolderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdChannelsChannelIdFilesFolderContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTeamsTeamIdChannelsChannelIdFilesFolderContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTeamsTeamIdChannelsChannelIdFilesFolderContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdChannelsChannelIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTeamsTeamIdChannelsChannelIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdChannelsChannelIdMembersConversationMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchTeamsTeamIdChannelsChannelIdMembersConversationMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTeamsTeamIdChannelsChannelIdMembersConversationMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdChannelsChannelIdMembersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTeamsTeamIdChannelsChannelIdMembersAddRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTeamsTeamIdChannelsChannelIdMembersRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdChannelsChannelIdMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTeamsTeamIdChannelsChannelIdMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdChannelsChannelIdMessagesChatMessageIdHostedContentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTeamsTeamIdChannelsChannelIdMessagesChatMessageIdHostedContentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getTeamsTeamIdChannelsChannelIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchTeamsTeamIdChannelsChannelIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteTeamsTeamIdChannelsChannelIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getTeamsTeamIdChannelsChannelIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdValueRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putTeamsTeamIdChannelsChannelIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdValueRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteTeamsTeamIdChannelsChannelIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdValueRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getTeamsTeamIdChannelsChannelIdMessagesChatMessageIdHostedContentsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTeamsTeamIdChannelsChannelIdMessagesChatMessageIdSetReactionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTeamsTeamIdChannelsChannelIdMessagesChatMessageIdSoftDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTeamsTeamIdChannelsChannelIdMessagesChatMessageIdUndoSoftDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTeamsTeamIdChannelsChannelIdMessagesChatMessageIdUnsetReactionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    patchTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1Route,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1Route,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdValueRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdValueRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdValueRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1SetReactionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1SoftDeleteRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1UndoSoftDeleteRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1UnsetReactionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesDeltaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesReplyWithQuoteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdChannelsChannelIdMessagesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdChannelsChannelIdMessagesDeltaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTeamsTeamIdChannelsChannelIdMessagesReplyWithQuoteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTeamsTeamIdChannelsChannelIdArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTeamsTeamIdChannelsChannelIdCompleteMigrationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getTeamsTeamIdChannelsChannelIdDoesUserHaveAccessUserIdUserIdTenantIdTenantIdUserPrincipalNameUserPrincipalNameRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postTeamsTeamIdChannelsChannelIdProvisionEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTeamsTeamIdChannelsChannelIdRemoveEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTeamsTeamIdChannelsChannelIdStartMigrationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTeamsTeamIdChannelsChannelIdUnarchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdChannelsChannelIdSharedWithTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTeamsTeamIdChannelsChannelIdSharedWithTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdChannelsChannelIdSharedWithTeamsSharedWithChannelTeamInfoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    patchTeamsTeamIdChannelsChannelIdSharedWithTeamsSharedWithChannelTeamInfoIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteTeamsTeamIdChannelsChannelIdSharedWithTeamsSharedWithChannelTeamInfoIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getTeamsTeamIdChannelsChannelIdSharedWithTeamsSharedWithChannelTeamInfoIdAllowedMembersRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getTeamsTeamIdChannelsChannelIdSharedWithTeamsSharedWithChannelTeamInfoIdAllowedMembersConversationMemberIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getTeamsTeamIdChannelsChannelIdSharedWithTeamsSharedWithChannelTeamInfoIdAllowedMembersCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getTeamsTeamIdChannelsChannelIdSharedWithTeamsSharedWithChannelTeamInfoIdTeamRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getTeamsTeamIdChannelsChannelIdSharedWithTeamsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdChannelsChannelIdTabsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTeamsTeamIdChannelsChannelIdTabsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdChannelsChannelIdTabsTeamsTabIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchTeamsTeamIdChannelsChannelIdTabsTeamsTabIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTeamsTeamIdChannelsChannelIdTabsTeamsTabIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdChannelsChannelIdTabsTeamsTabIdTeamsAppRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdChannelsChannelIdTabsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdChannelsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdChannelsGetAllMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdChannelsGetAllRetainedMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdIncomingChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdIncomingChannelsChannelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdIncomingChannelsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdPrimaryChannelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchTeamsTeamIdPrimaryChannelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTeamsTeamIdPrimaryChannelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdPrimaryChannelAllMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTeamsTeamIdPrimaryChannelAllMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdPrimaryChannelAllMembersConversationMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchTeamsTeamIdPrimaryChannelAllMembersConversationMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTeamsTeamIdPrimaryChannelAllMembersConversationMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdPrimaryChannelAllMembersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTeamsTeamIdPrimaryChannelAllMembersAddRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTeamsTeamIdPrimaryChannelAllMembersRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdPrimaryChannelEnabledAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdPrimaryChannelEnabledAppsTeamsAppIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdPrimaryChannelEnabledAppsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdPrimaryChannelFilesFolderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdPrimaryChannelFilesFolderContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTeamsTeamIdPrimaryChannelFilesFolderContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTeamsTeamIdPrimaryChannelFilesFolderContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdPrimaryChannelMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTeamsTeamIdPrimaryChannelMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdPrimaryChannelMembersConversationMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchTeamsTeamIdPrimaryChannelMembersConversationMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTeamsTeamIdPrimaryChannelMembersConversationMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdPrimaryChannelMembersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTeamsTeamIdPrimaryChannelMembersAddRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTeamsTeamIdPrimaryChannelMembersRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdPrimaryChannelMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTeamsTeamIdPrimaryChannelMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdPrimaryChannelMessagesChatMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchTeamsTeamIdPrimaryChannelMessagesChatMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTeamsTeamIdPrimaryChannelMessagesChatMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdPrimaryChannelMessagesChatMessageIdHostedContentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTeamsTeamIdPrimaryChannelMessagesChatMessageIdHostedContentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getTeamsTeamIdPrimaryChannelMessagesChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchTeamsTeamIdPrimaryChannelMessagesChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteTeamsTeamIdPrimaryChannelMessagesChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getTeamsTeamIdPrimaryChannelMessagesChatMessageIdHostedContentsChatMessageHostedContentIdValueRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putTeamsTeamIdPrimaryChannelMessagesChatMessageIdHostedContentsChatMessageHostedContentIdValueRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteTeamsTeamIdPrimaryChannelMessagesChatMessageIdHostedContentsChatMessageHostedContentIdValueRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getTeamsTeamIdPrimaryChannelMessagesChatMessageIdHostedContentsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTeamsTeamIdPrimaryChannelMessagesChatMessageIdSetReactionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTeamsTeamIdPrimaryChannelMessagesChatMessageIdSoftDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTeamsTeamIdPrimaryChannelMessagesChatMessageIdUndoSoftDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTeamsTeamIdPrimaryChannelMessagesChatMessageIdUnsetReactionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1HostedContentsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1HostedContentsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdValueRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdValueRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdValueRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1HostedContentsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1SetReactionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1SoftDeleteRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1UndoSoftDeleteRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1UnsetReactionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesDeltaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesReplyWithQuoteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdPrimaryChannelMessagesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdPrimaryChannelMessagesDeltaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTeamsTeamIdPrimaryChannelMessagesReplyWithQuoteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTeamsTeamIdPrimaryChannelArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTeamsTeamIdPrimaryChannelCompleteMigrationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getTeamsTeamIdPrimaryChannelDoesUserHaveAccessUserIdUserIdTenantIdTenantIdUserPrincipalNameUserPrincipalNameRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postTeamsTeamIdPrimaryChannelProvisionEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTeamsTeamIdPrimaryChannelRemoveEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTeamsTeamIdPrimaryChannelStartMigrationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTeamsTeamIdPrimaryChannelUnarchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdPrimaryChannelSharedWithTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTeamsTeamIdPrimaryChannelSharedWithTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdPrimaryChannelSharedWithTeamsSharedWithChannelTeamInfoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchTeamsTeamIdPrimaryChannelSharedWithTeamsSharedWithChannelTeamInfoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTeamsTeamIdPrimaryChannelSharedWithTeamsSharedWithChannelTeamInfoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getTeamsTeamIdPrimaryChannelSharedWithTeamsSharedWithChannelTeamInfoIdAllowedMembersRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getTeamsTeamIdPrimaryChannelSharedWithTeamsSharedWithChannelTeamInfoIdAllowedMembersConversationMemberIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getTeamsTeamIdPrimaryChannelSharedWithTeamsSharedWithChannelTeamInfoIdAllowedMembersCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getTeamsTeamIdPrimaryChannelSharedWithTeamsSharedWithChannelTeamInfoIdTeamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdPrimaryChannelSharedWithTeamsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdPrimaryChannelTabsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTeamsTeamIdPrimaryChannelTabsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdPrimaryChannelTabsTeamsTabIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchTeamsTeamIdPrimaryChannelTabsTeamsTabIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTeamsTeamIdPrimaryChannelTabsTeamsTabIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdPrimaryChannelTabsTeamsTabIdTeamsAppRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdPrimaryChannelTabsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
