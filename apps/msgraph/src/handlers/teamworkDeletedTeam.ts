import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdAllMembersConversationMemberIdRoute,
  deleteTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdFilesFolderContentRoute,
  deleteTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMembersConversationMemberIdRoute,
  deleteTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
  deleteTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdValueRoute,
  deleteTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdRoute,
  deleteTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdValueRoute,
  deleteTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1Route,
  deleteTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdRoute,
  deleteTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdRoute,
  deleteTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdSharedWithTeamsSharedWithChannelTeamInfoIdRoute,
  deleteTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdTabsTeamsTabIdRoute,
  deleteTeamworkDeletedTeamsDeletedTeamIdRoute,
  getTeamworkDeletedTeamsCountRoute,
  getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdAllMembersConversationMemberIdRoute,
  getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdAllMembersCountRoute,
  getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdAllMembersRoute,
  getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdDoesUserHaveAccessUserIdUserIdTenantIdTenantIdUserPrincipalNameUserPrincipalNameRoute,
  getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdEnabledAppsCountRoute,
  getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdEnabledAppsRoute,
  getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdEnabledAppsTeamsAppIdRoute,
  getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdFilesFolderContentRoute,
  getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdFilesFolderRoute,
  getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMembersConversationMemberIdRoute,
  getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMembersCountRoute,
  getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMembersRoute,
  getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
  getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdValueRoute,
  getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdHostedContentsCountRoute,
  getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdHostedContentsRoute,
  getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdRoute,
  getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdValueRoute,
  getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsCountRoute,
  getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsRoute,
  getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1Route,
  getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdRepliesCountRoute,
  getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdRepliesDeltaRoute,
  getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdRepliesRoute,
  getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdRoute,
  getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesCountRoute,
  getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesDeltaRoute,
  getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesRoute,
  getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdRoute,
  getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdSharedWithTeamsCountRoute,
  getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdSharedWithTeamsRoute,
  getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdSharedWithTeamsSharedWithChannelTeamInfoIdAllowedMembersConversationMemberIdRoute,
  getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdSharedWithTeamsSharedWithChannelTeamInfoIdAllowedMembersCountRoute,
  getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdSharedWithTeamsSharedWithChannelTeamInfoIdAllowedMembersRoute,
  getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdSharedWithTeamsSharedWithChannelTeamInfoIdRoute,
  getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdSharedWithTeamsSharedWithChannelTeamInfoIdTeamRoute,
  getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdTabsCountRoute,
  getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdTabsRoute,
  getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdTabsTeamsTabIdRoute,
  getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdTabsTeamsTabIdTeamsAppRoute,
  getTeamworkDeletedTeamsDeletedTeamIdChannelsCountRoute,
  getTeamworkDeletedTeamsDeletedTeamIdChannelsGetAllMessagesRoute,
  getTeamworkDeletedTeamsDeletedTeamIdChannelsGetAllRetainedMessagesRoute,
  getTeamworkDeletedTeamsDeletedTeamIdChannelsRoute,
  getTeamworkDeletedTeamsDeletedTeamIdRoute,
  getTeamworkDeletedTeamsGetAllMessagesRoute,
  getTeamworkDeletedTeamsRoute,
  patchTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdAllMembersConversationMemberIdRoute,
  patchTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMembersConversationMemberIdRoute,
  patchTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
  patchTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdRoute,
  patchTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1Route,
  patchTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdRoute,
  patchTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdRoute,
  patchTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdSharedWithTeamsSharedWithChannelTeamInfoIdRoute,
  patchTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdTabsTeamsTabIdRoute,
  patchTeamworkDeletedTeamsDeletedTeamIdRoute,
  postTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdAllMembersAddRoute,
  postTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdAllMembersRemoveRoute,
  postTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdAllMembersRoute,
  postTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdArchiveRoute,
  postTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdCompleteMigrationRoute,
  postTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMembersAddRoute,
  postTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMembersRemoveRoute,
  postTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMembersRoute,
  postTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdHostedContentsRoute,
  postTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsRoute,
  postTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1SetReactionRoute,
  postTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1SoftDeleteRoute,
  postTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1UndoSoftDeleteRoute,
  postTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1UnsetReactionRoute,
  postTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdRepliesReplyWithQuoteRoute,
  postTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdRepliesRoute,
  postTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdSetReactionRoute,
  postTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdSoftDeleteRoute,
  postTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdUndoSoftDeleteRoute,
  postTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdUnsetReactionRoute,
  postTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesReplyWithQuoteRoute,
  postTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesRoute,
  postTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdProvisionEmailRoute,
  postTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdRemoveEmailRoute,
  postTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdSharedWithTeamsRoute,
  postTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdStartMigrationRoute,
  postTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdTabsRoute,
  postTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdUnarchiveRoute,
  postTeamworkDeletedTeamsDeletedTeamIdChannelsRoute,
  postTeamworkDeletedTeamsRoute,
  putTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdFilesFolderContentRoute,
  putTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdValueRoute,
  putTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdValueRoute,
} from '../routes'

const app = new OpenAPIHono()

export const teamworkDeletedTeamHandler = app
  .openapi(getTeamworkDeletedTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTeamworkDeletedTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamworkDeletedTeamsDeletedTeamIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchTeamworkDeletedTeamsDeletedTeamIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTeamworkDeletedTeamsDeletedTeamIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamworkDeletedTeamsDeletedTeamIdChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTeamworkDeletedTeamsDeletedTeamIdChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdAllMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdAllMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdAllMembersConversationMemberIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdAllMembersConversationMemberIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdAllMembersConversationMemberIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdAllMembersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdAllMembersAddRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdAllMembersRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdEnabledAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdEnabledAppsTeamsAppIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdEnabledAppsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdFilesFolderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdFilesFolderContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdFilesFolderContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdFilesFolderContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMembersConversationMemberIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMembersConversationMemberIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMembersConversationMemberIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMembersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMembersAddRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMembersRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    patchTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdHostedContentsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdHostedContentsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdValueRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdValueRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdHostedContentsChatMessageHostedContentIdValueRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdHostedContentsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdSetReactionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdSoftDeleteRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdUndoSoftDeleteRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdUnsetReactionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdRepliesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdRepliesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1Route,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1Route,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1Route,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdValueRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdValueRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsChatMessageHostedContentIdValueRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1SetReactionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1SoftDeleteRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1UndoSoftDeleteRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1UnsetReactionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdRepliesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdRepliesDeltaRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesChatMessageIdRepliesReplyWithQuoteRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesDeltaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdMessagesReplyWithQuoteRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdCompleteMigrationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdDoesUserHaveAccessUserIdUserIdTenantIdTenantIdUserPrincipalNameUserPrincipalNameRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdProvisionEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdRemoveEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdStartMigrationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdUnarchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdSharedWithTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdSharedWithTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdSharedWithTeamsSharedWithChannelTeamInfoIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdSharedWithTeamsSharedWithChannelTeamInfoIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdSharedWithTeamsSharedWithChannelTeamInfoIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdSharedWithTeamsSharedWithChannelTeamInfoIdAllowedMembersRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdSharedWithTeamsSharedWithChannelTeamInfoIdAllowedMembersConversationMemberIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdSharedWithTeamsSharedWithChannelTeamInfoIdAllowedMembersCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdSharedWithTeamsSharedWithChannelTeamInfoIdTeamRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdSharedWithTeamsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdTabsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdTabsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdTabsTeamsTabIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdTabsTeamsTabIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdTabsTeamsTabIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdTabsTeamsTabIdTeamsAppRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getTeamworkDeletedTeamsDeletedTeamIdChannelsChannelIdTabsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamworkDeletedTeamsDeletedTeamIdChannelsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamworkDeletedTeamsDeletedTeamIdChannelsGetAllMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamworkDeletedTeamsDeletedTeamIdChannelsGetAllRetainedMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamworkDeletedTeamsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamworkDeletedTeamsGetAllMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
