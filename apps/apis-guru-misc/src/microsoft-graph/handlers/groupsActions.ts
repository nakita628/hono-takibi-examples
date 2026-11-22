import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postGroupsGroupIdCalendarCalendarViewEventIdAttachmentsMicrosoftGraphCreateUploadSessionRoute,
  postGroupsGroupIdCalendarCalendarViewEventIdInstancesEventId1AttachmentsMicrosoftGraphCreateUploadSessionRoute,
  postGroupsGroupIdCalendarCalendarViewEventIdInstancesEventId1MicrosoftGraphAcceptRoute,
  postGroupsGroupIdCalendarCalendarViewEventIdInstancesEventId1MicrosoftGraphCancelRoute,
  postGroupsGroupIdCalendarCalendarViewEventIdInstancesEventId1MicrosoftGraphDeclineRoute,
  postGroupsGroupIdCalendarCalendarViewEventIdInstancesEventId1MicrosoftGraphDismissReminderRoute,
  postGroupsGroupIdCalendarCalendarViewEventIdInstancesEventId1MicrosoftGraphForwardRoute,
  postGroupsGroupIdCalendarCalendarViewEventIdInstancesEventId1MicrosoftGraphSnoozeReminderRoute,
  postGroupsGroupIdCalendarCalendarViewEventIdInstancesEventId1MicrosoftGraphTentativelyAcceptRoute,
  postGroupsGroupIdCalendarCalendarViewEventIdMicrosoftGraphAcceptRoute,
  postGroupsGroupIdCalendarCalendarViewEventIdMicrosoftGraphCancelRoute,
  postGroupsGroupIdCalendarCalendarViewEventIdMicrosoftGraphDeclineRoute,
  postGroupsGroupIdCalendarCalendarViewEventIdMicrosoftGraphDismissReminderRoute,
  postGroupsGroupIdCalendarCalendarViewEventIdMicrosoftGraphForwardRoute,
  postGroupsGroupIdCalendarCalendarViewEventIdMicrosoftGraphSnoozeReminderRoute,
  postGroupsGroupIdCalendarCalendarViewEventIdMicrosoftGraphTentativelyAcceptRoute,
  postGroupsGroupIdCalendarEventsEventIdAttachmentsMicrosoftGraphCreateUploadSessionRoute,
  postGroupsGroupIdCalendarEventsEventIdInstancesEventId1AttachmentsMicrosoftGraphCreateUploadSessionRoute,
  postGroupsGroupIdCalendarEventsEventIdInstancesEventId1MicrosoftGraphAcceptRoute,
  postGroupsGroupIdCalendarEventsEventIdInstancesEventId1MicrosoftGraphCancelRoute,
  postGroupsGroupIdCalendarEventsEventIdInstancesEventId1MicrosoftGraphDeclineRoute,
  postGroupsGroupIdCalendarEventsEventIdInstancesEventId1MicrosoftGraphDismissReminderRoute,
  postGroupsGroupIdCalendarEventsEventIdInstancesEventId1MicrosoftGraphForwardRoute,
  postGroupsGroupIdCalendarEventsEventIdInstancesEventId1MicrosoftGraphSnoozeReminderRoute,
  postGroupsGroupIdCalendarEventsEventIdInstancesEventId1MicrosoftGraphTentativelyAcceptRoute,
  postGroupsGroupIdCalendarEventsEventIdMicrosoftGraphAcceptRoute,
  postGroupsGroupIdCalendarEventsEventIdMicrosoftGraphCancelRoute,
  postGroupsGroupIdCalendarEventsEventIdMicrosoftGraphDeclineRoute,
  postGroupsGroupIdCalendarEventsEventIdMicrosoftGraphDismissReminderRoute,
  postGroupsGroupIdCalendarEventsEventIdMicrosoftGraphForwardRoute,
  postGroupsGroupIdCalendarEventsEventIdMicrosoftGraphSnoozeReminderRoute,
  postGroupsGroupIdCalendarEventsEventIdMicrosoftGraphTentativelyAcceptRoute,
  postGroupsGroupIdCalendarMicrosoftGraphGetScheduleRoute,
  postGroupsGroupIdCalendarViewEventIdAttachmentsMicrosoftGraphCreateUploadSessionRoute,
  postGroupsGroupIdCalendarViewEventIdInstancesEventId1AttachmentsMicrosoftGraphCreateUploadSessionRoute,
  postGroupsGroupIdCalendarViewEventIdInstancesEventId1MicrosoftGraphAcceptRoute,
  postGroupsGroupIdCalendarViewEventIdInstancesEventId1MicrosoftGraphCancelRoute,
  postGroupsGroupIdCalendarViewEventIdInstancesEventId1MicrosoftGraphDeclineRoute,
  postGroupsGroupIdCalendarViewEventIdInstancesEventId1MicrosoftGraphDismissReminderRoute,
  postGroupsGroupIdCalendarViewEventIdInstancesEventId1MicrosoftGraphForwardRoute,
  postGroupsGroupIdCalendarViewEventIdInstancesEventId1MicrosoftGraphSnoozeReminderRoute,
  postGroupsGroupIdCalendarViewEventIdInstancesEventId1MicrosoftGraphTentativelyAcceptRoute,
  postGroupsGroupIdCalendarViewEventIdMicrosoftGraphAcceptRoute,
  postGroupsGroupIdCalendarViewEventIdMicrosoftGraphCancelRoute,
  postGroupsGroupIdCalendarViewEventIdMicrosoftGraphDeclineRoute,
  postGroupsGroupIdCalendarViewEventIdMicrosoftGraphDismissReminderRoute,
  postGroupsGroupIdCalendarViewEventIdMicrosoftGraphForwardRoute,
  postGroupsGroupIdCalendarViewEventIdMicrosoftGraphSnoozeReminderRoute,
  postGroupsGroupIdCalendarViewEventIdMicrosoftGraphTentativelyAcceptRoute,
  postGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdMicrosoftGraphReplyRoute,
  postGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdPostsPostIdAttachmentsMicrosoftGraphCreateUploadSessionRoute,
  postGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdPostsPostIdInReplyToAttachmentsMicrosoftGraphCreateUploadSessionRoute,
  postGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdPostsPostIdInReplyToMicrosoftGraphForwardRoute,
  postGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdPostsPostIdInReplyToMicrosoftGraphReplyRoute,
  postGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdPostsPostIdMicrosoftGraphForwardRoute,
  postGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdPostsPostIdMicrosoftGraphReplyRoute,
  postGroupsGroupIdEventsEventIdAttachmentsMicrosoftGraphCreateUploadSessionRoute,
  postGroupsGroupIdEventsEventIdInstancesEventId1AttachmentsMicrosoftGraphCreateUploadSessionRoute,
  postGroupsGroupIdEventsEventIdInstancesEventId1MicrosoftGraphAcceptRoute,
  postGroupsGroupIdEventsEventIdInstancesEventId1MicrosoftGraphCancelRoute,
  postGroupsGroupIdEventsEventIdInstancesEventId1MicrosoftGraphDeclineRoute,
  postGroupsGroupIdEventsEventIdInstancesEventId1MicrosoftGraphDismissReminderRoute,
  postGroupsGroupIdEventsEventIdInstancesEventId1MicrosoftGraphForwardRoute,
  postGroupsGroupIdEventsEventIdInstancesEventId1MicrosoftGraphSnoozeReminderRoute,
  postGroupsGroupIdEventsEventIdInstancesEventId1MicrosoftGraphTentativelyAcceptRoute,
  postGroupsGroupIdEventsEventIdMicrosoftGraphAcceptRoute,
  postGroupsGroupIdEventsEventIdMicrosoftGraphCancelRoute,
  postGroupsGroupIdEventsEventIdMicrosoftGraphDeclineRoute,
  postGroupsGroupIdEventsEventIdMicrosoftGraphDismissReminderRoute,
  postGroupsGroupIdEventsEventIdMicrosoftGraphForwardRoute,
  postGroupsGroupIdEventsEventIdMicrosoftGraphSnoozeReminderRoute,
  postGroupsGroupIdEventsEventIdMicrosoftGraphTentativelyAcceptRoute,
  postGroupsGroupIdGroupLifecyclePoliciesGroupLifecyclePolicyIdMicrosoftGraphAddGroupRoute,
  postGroupsGroupIdGroupLifecyclePoliciesGroupLifecyclePolicyIdMicrosoftGraphRemoveGroupRoute,
  postGroupsGroupIdMicrosoftGraphAddFavoriteRoute,
  postGroupsGroupIdMicrosoftGraphAssignLicenseRoute,
  postGroupsGroupIdMicrosoftGraphCheckGrantedPermissionsForAppRoute,
  postGroupsGroupIdMicrosoftGraphCheckMemberGroupsRoute,
  postGroupsGroupIdMicrosoftGraphCheckMemberObjectsRoute,
  postGroupsGroupIdMicrosoftGraphGetMemberGroupsRoute,
  postGroupsGroupIdMicrosoftGraphGetMemberObjectsRoute,
  postGroupsGroupIdMicrosoftGraphRemoveFavoriteRoute,
  postGroupsGroupIdMicrosoftGraphRenewRoute,
  postGroupsGroupIdMicrosoftGraphResetUnseenCountRoute,
  postGroupsGroupIdMicrosoftGraphRestoreRoute,
  postGroupsGroupIdMicrosoftGraphSubscribeByMailRoute,
  postGroupsGroupIdMicrosoftGraphUnsubscribeByMailRoute,
  postGroupsGroupIdMicrosoftGraphValidatePropertiesRoute,
  postGroupsGroupIdOnenoteNotebooksMicrosoftGraphGetNotebookFromWebUrlRoute,
  postGroupsGroupIdOnenoteNotebooksNotebookIdMicrosoftGraphCopyNotebookRoute,
  postGroupsGroupIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdMicrosoftGraphCopyToNotebookRoute,
  postGroupsGroupIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdMicrosoftGraphCopyToSectionGroupRoute,
  postGroupsGroupIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdMicrosoftGraphCopyToSectionRoute,
  postGroupsGroupIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdMicrosoftGraphOnenotePatchContentRoute,
  postGroupsGroupIdOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdMicrosoftGraphCopyToNotebookRoute,
  postGroupsGroupIdOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdMicrosoftGraphCopyToSectionGroupRoute,
  postGroupsGroupIdOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdPagesOnenotePageIdMicrosoftGraphCopyToSectionRoute,
  postGroupsGroupIdOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdPagesOnenotePageIdMicrosoftGraphOnenotePatchContentRoute,
  postGroupsGroupIdOnenotePagesOnenotePageIdMicrosoftGraphCopyToSectionRoute,
  postGroupsGroupIdOnenotePagesOnenotePageIdMicrosoftGraphOnenotePatchContentRoute,
  postGroupsGroupIdOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdMicrosoftGraphCopyToNotebookRoute,
  postGroupsGroupIdOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdMicrosoftGraphCopyToSectionGroupRoute,
  postGroupsGroupIdOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdMicrosoftGraphCopyToSectionRoute,
  postGroupsGroupIdOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdMicrosoftGraphOnenotePatchContentRoute,
  postGroupsGroupIdOnenoteSectionsOnenoteSectionIdMicrosoftGraphCopyToNotebookRoute,
  postGroupsGroupIdOnenoteSectionsOnenoteSectionIdMicrosoftGraphCopyToSectionGroupRoute,
  postGroupsGroupIdOnenoteSectionsOnenoteSectionIdPagesOnenotePageIdMicrosoftGraphCopyToSectionRoute,
  postGroupsGroupIdOnenoteSectionsOnenoteSectionIdPagesOnenotePageIdMicrosoftGraphOnenotePatchContentRoute,
  postGroupsGroupIdPermissionGrantsMicrosoftGraphGetAvailableExtensionPropertiesRoute,
  postGroupsGroupIdPermissionGrantsMicrosoftGraphGetByIdsRoute,
  postGroupsGroupIdPermissionGrantsMicrosoftGraphValidatePropertiesRoute,
  postGroupsGroupIdPermissionGrantsResourceSpecificPermissionGrantIdMicrosoftGraphCheckMemberGroupsRoute,
  postGroupsGroupIdPermissionGrantsResourceSpecificPermissionGrantIdMicrosoftGraphCheckMemberObjectsRoute,
  postGroupsGroupIdPermissionGrantsResourceSpecificPermissionGrantIdMicrosoftGraphGetMemberGroupsRoute,
  postGroupsGroupIdPermissionGrantsResourceSpecificPermissionGrantIdMicrosoftGraphGetMemberObjectsRoute,
  postGroupsGroupIdPermissionGrantsResourceSpecificPermissionGrantIdMicrosoftGraphRestoreRoute,
  postGroupsGroupIdSitesMicrosoftGraphAddRoute,
  postGroupsGroupIdSitesMicrosoftGraphRemoveRoute,
  postGroupsGroupIdSitesSiteIdContentTypesContentTypeIdMicrosoftGraphAssociateWithHubSitesRoute,
  postGroupsGroupIdSitesSiteIdContentTypesContentTypeIdMicrosoftGraphCopyToDefaultContentLocationRoute,
  postGroupsGroupIdSitesSiteIdContentTypesContentTypeIdMicrosoftGraphPublishRoute,
  postGroupsGroupIdSitesSiteIdContentTypesContentTypeIdMicrosoftGraphUnpublishRoute,
  postGroupsGroupIdSitesSiteIdContentTypesMicrosoftGraphAddCopyFromContentTypeHubRoute,
  postGroupsGroupIdSitesSiteIdContentTypesMicrosoftGraphAddCopyRoute,
  postGroupsGroupIdSitesSiteIdListsListIdContentTypesContentTypeIdMicrosoftGraphAssociateWithHubSitesRoute,
  postGroupsGroupIdSitesSiteIdListsListIdContentTypesContentTypeIdMicrosoftGraphCopyToDefaultContentLocationRoute,
  postGroupsGroupIdSitesSiteIdListsListIdContentTypesContentTypeIdMicrosoftGraphPublishRoute,
  postGroupsGroupIdSitesSiteIdListsListIdContentTypesContentTypeIdMicrosoftGraphUnpublishRoute,
  postGroupsGroupIdSitesSiteIdListsListIdContentTypesMicrosoftGraphAddCopyFromContentTypeHubRoute,
  postGroupsGroupIdSitesSiteIdListsListIdContentTypesMicrosoftGraphAddCopyRoute,
  postGroupsGroupIdSitesSiteIdListsListIdItemsListItemIdDocumentSetVersionsDocumentSetVersionIdMicrosoftGraphRestoreRoute,
  postGroupsGroupIdSitesSiteIdListsListIdItemsListItemIdVersionsListItemVersionIdMicrosoftGraphRestoreVersionRoute,
  postGroupsGroupIdSitesSiteIdListsListIdSubscriptionsSubscriptionIdMicrosoftGraphReauthorizeRoute,
  postGroupsGroupIdSitesSiteIdOnenoteNotebooksMicrosoftGraphGetNotebookFromWebUrlRoute,
  postGroupsGroupIdSitesSiteIdOnenoteNotebooksNotebookIdMicrosoftGraphCopyNotebookRoute,
  postGroupsGroupIdSitesSiteIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdMicrosoftGraphCopyToNotebookRoute,
  postGroupsGroupIdSitesSiteIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdMicrosoftGraphCopyToSectionGroupRoute,
  postGroupsGroupIdSitesSiteIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdMicrosoftGraphCopyToSectionRoute,
  postGroupsGroupIdSitesSiteIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdMicrosoftGraphOnenotePatchContentRoute,
  postGroupsGroupIdSitesSiteIdOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdMicrosoftGraphCopyToNotebookRoute,
  postGroupsGroupIdSitesSiteIdOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdMicrosoftGraphCopyToSectionGroupRoute,
  postGroupsGroupIdSitesSiteIdOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdPagesOnenotePageIdMicrosoftGraphCopyToSectionRoute,
  postGroupsGroupIdSitesSiteIdOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdPagesOnenotePageIdMicrosoftGraphOnenotePatchContentRoute,
  postGroupsGroupIdSitesSiteIdOnenotePagesOnenotePageIdMicrosoftGraphCopyToSectionRoute,
  postGroupsGroupIdSitesSiteIdOnenotePagesOnenotePageIdMicrosoftGraphOnenotePatchContentRoute,
  postGroupsGroupIdSitesSiteIdOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdMicrosoftGraphCopyToNotebookRoute,
  postGroupsGroupIdSitesSiteIdOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdMicrosoftGraphCopyToSectionGroupRoute,
  postGroupsGroupIdSitesSiteIdOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdMicrosoftGraphCopyToSectionRoute,
  postGroupsGroupIdSitesSiteIdOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdMicrosoftGraphOnenotePatchContentRoute,
  postGroupsGroupIdSitesSiteIdOnenoteSectionsOnenoteSectionIdMicrosoftGraphCopyToNotebookRoute,
  postGroupsGroupIdSitesSiteIdOnenoteSectionsOnenoteSectionIdMicrosoftGraphCopyToSectionGroupRoute,
  postGroupsGroupIdSitesSiteIdOnenoteSectionsOnenoteSectionIdPagesOnenotePageIdMicrosoftGraphCopyToSectionRoute,
  postGroupsGroupIdSitesSiteIdOnenoteSectionsOnenoteSectionIdPagesOnenotePageIdMicrosoftGraphOnenotePatchContentRoute,
  postGroupsGroupIdSitesSiteIdPermissionsPermissionIdMicrosoftGraphGrantRoute,
  postGroupsGroupIdTeamChannelsChannelIdMembersMicrosoftGraphAddRoute,
  postGroupsGroupIdTeamChannelsChannelIdMessagesChatMessageIdMicrosoftGraphSoftDeleteRoute,
  postGroupsGroupIdTeamChannelsChannelIdMessagesChatMessageIdMicrosoftGraphUndoSoftDeleteRoute,
  postGroupsGroupIdTeamChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1MicrosoftGraphSoftDeleteRoute,
  postGroupsGroupIdTeamChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1MicrosoftGraphUndoSoftDeleteRoute,
  postGroupsGroupIdTeamChannelsChannelIdMicrosoftGraphCompleteMigrationRoute,
  postGroupsGroupIdTeamChannelsChannelIdMicrosoftGraphProvisionEmailRoute,
  postGroupsGroupIdTeamChannelsChannelIdMicrosoftGraphRemoveEmailRoute,
  postGroupsGroupIdTeamInstalledAppsTeamsAppInstallationIdMicrosoftGraphUpgradeRoute,
  postGroupsGroupIdTeamMembersMicrosoftGraphAddRoute,
  postGroupsGroupIdTeamMicrosoftGraphArchiveRoute,
  postGroupsGroupIdTeamMicrosoftGraphCloneRoute,
  postGroupsGroupIdTeamMicrosoftGraphCompleteMigrationRoute,
  postGroupsGroupIdTeamMicrosoftGraphSendActivityNotificationRoute,
  postGroupsGroupIdTeamMicrosoftGraphUnarchiveRoute,
  postGroupsGroupIdTeamPrimaryChannelMembersMicrosoftGraphAddRoute,
  postGroupsGroupIdTeamPrimaryChannelMessagesChatMessageIdMicrosoftGraphSoftDeleteRoute,
  postGroupsGroupIdTeamPrimaryChannelMessagesChatMessageIdMicrosoftGraphUndoSoftDeleteRoute,
  postGroupsGroupIdTeamPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1MicrosoftGraphSoftDeleteRoute,
  postGroupsGroupIdTeamPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1MicrosoftGraphUndoSoftDeleteRoute,
  postGroupsGroupIdTeamPrimaryChannelMicrosoftGraphCompleteMigrationRoute,
  postGroupsGroupIdTeamPrimaryChannelMicrosoftGraphProvisionEmailRoute,
  postGroupsGroupIdTeamPrimaryChannelMicrosoftGraphRemoveEmailRoute,
  postGroupsGroupIdTeamScheduleMicrosoftGraphShareRoute,
  postGroupsGroupIdThreadsConversationThreadIdMicrosoftGraphReplyRoute,
  postGroupsGroupIdThreadsConversationThreadIdPostsPostIdAttachmentsMicrosoftGraphCreateUploadSessionRoute,
  postGroupsGroupIdThreadsConversationThreadIdPostsPostIdInReplyToAttachmentsMicrosoftGraphCreateUploadSessionRoute,
  postGroupsGroupIdThreadsConversationThreadIdPostsPostIdInReplyToMicrosoftGraphForwardRoute,
  postGroupsGroupIdThreadsConversationThreadIdPostsPostIdInReplyToMicrosoftGraphReplyRoute,
  postGroupsGroupIdThreadsConversationThreadIdPostsPostIdMicrosoftGraphForwardRoute,
  postGroupsGroupIdThreadsConversationThreadIdPostsPostIdMicrosoftGraphReplyRoute,
  postGroupsMicrosoftGraphGetAvailableExtensionPropertiesRoute,
  postGroupsMicrosoftGraphGetByIdsRoute,
  postGroupsMicrosoftGraphValidatePropertiesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const groupsActionsHandler = app
  .openapi(postGroupsMicrosoftGraphGetAvailableExtensionPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsMicrosoftGraphGetByIdsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsMicrosoftGraphValidatePropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postGroupsGroupIdCalendarCalendarViewEventIdAttachmentsMicrosoftGraphCreateUploadSessionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postGroupsGroupIdCalendarCalendarViewEventIdInstancesEventId1AttachmentsMicrosoftGraphCreateUploadSessionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postGroupsGroupIdCalendarCalendarViewEventIdInstancesEventId1MicrosoftGraphAcceptRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postGroupsGroupIdCalendarCalendarViewEventIdInstancesEventId1MicrosoftGraphCancelRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postGroupsGroupIdCalendarCalendarViewEventIdInstancesEventId1MicrosoftGraphDeclineRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postGroupsGroupIdCalendarCalendarViewEventIdInstancesEventId1MicrosoftGraphDismissReminderRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postGroupsGroupIdCalendarCalendarViewEventIdInstancesEventId1MicrosoftGraphForwardRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postGroupsGroupIdCalendarCalendarViewEventIdInstancesEventId1MicrosoftGraphSnoozeReminderRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postGroupsGroupIdCalendarCalendarViewEventIdInstancesEventId1MicrosoftGraphTentativelyAcceptRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postGroupsGroupIdCalendarCalendarViewEventIdMicrosoftGraphAcceptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdCalendarCalendarViewEventIdMicrosoftGraphCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdCalendarCalendarViewEventIdMicrosoftGraphDeclineRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdCalendarCalendarViewEventIdMicrosoftGraphDismissReminderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdCalendarCalendarViewEventIdMicrosoftGraphForwardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdCalendarCalendarViewEventIdMicrosoftGraphSnoozeReminderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postGroupsGroupIdCalendarCalendarViewEventIdMicrosoftGraphTentativelyAcceptRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postGroupsGroupIdCalendarEventsEventIdAttachmentsMicrosoftGraphCreateUploadSessionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postGroupsGroupIdCalendarEventsEventIdInstancesEventId1AttachmentsMicrosoftGraphCreateUploadSessionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postGroupsGroupIdCalendarEventsEventIdInstancesEventId1MicrosoftGraphAcceptRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postGroupsGroupIdCalendarEventsEventIdInstancesEventId1MicrosoftGraphCancelRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postGroupsGroupIdCalendarEventsEventIdInstancesEventId1MicrosoftGraphDeclineRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postGroupsGroupIdCalendarEventsEventIdInstancesEventId1MicrosoftGraphDismissReminderRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postGroupsGroupIdCalendarEventsEventIdInstancesEventId1MicrosoftGraphForwardRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postGroupsGroupIdCalendarEventsEventIdInstancesEventId1MicrosoftGraphSnoozeReminderRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postGroupsGroupIdCalendarEventsEventIdInstancesEventId1MicrosoftGraphTentativelyAcceptRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postGroupsGroupIdCalendarEventsEventIdMicrosoftGraphAcceptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdCalendarEventsEventIdMicrosoftGraphCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdCalendarEventsEventIdMicrosoftGraphDeclineRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdCalendarEventsEventIdMicrosoftGraphDismissReminderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdCalendarEventsEventIdMicrosoftGraphForwardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdCalendarEventsEventIdMicrosoftGraphSnoozeReminderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdCalendarEventsEventIdMicrosoftGraphTentativelyAcceptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdCalendarMicrosoftGraphGetScheduleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postGroupsGroupIdCalendarViewEventIdAttachmentsMicrosoftGraphCreateUploadSessionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postGroupsGroupIdCalendarViewEventIdInstancesEventId1AttachmentsMicrosoftGraphCreateUploadSessionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postGroupsGroupIdCalendarViewEventIdInstancesEventId1MicrosoftGraphAcceptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdCalendarViewEventIdInstancesEventId1MicrosoftGraphCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdCalendarViewEventIdInstancesEventId1MicrosoftGraphDeclineRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postGroupsGroupIdCalendarViewEventIdInstancesEventId1MicrosoftGraphDismissReminderRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postGroupsGroupIdCalendarViewEventIdInstancesEventId1MicrosoftGraphForwardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postGroupsGroupIdCalendarViewEventIdInstancesEventId1MicrosoftGraphSnoozeReminderRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postGroupsGroupIdCalendarViewEventIdInstancesEventId1MicrosoftGraphTentativelyAcceptRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postGroupsGroupIdCalendarViewEventIdMicrosoftGraphAcceptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdCalendarViewEventIdMicrosoftGraphCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdCalendarViewEventIdMicrosoftGraphDeclineRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdCalendarViewEventIdMicrosoftGraphDismissReminderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdCalendarViewEventIdMicrosoftGraphForwardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdCalendarViewEventIdMicrosoftGraphSnoozeReminderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdCalendarViewEventIdMicrosoftGraphTentativelyAcceptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdMicrosoftGraphReplyRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdPostsPostIdAttachmentsMicrosoftGraphCreateUploadSessionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdPostsPostIdInReplyToAttachmentsMicrosoftGraphCreateUploadSessionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdPostsPostIdInReplyToMicrosoftGraphForwardRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdPostsPostIdInReplyToMicrosoftGraphReplyRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdPostsPostIdMicrosoftGraphForwardRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdPostsPostIdMicrosoftGraphReplyRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postGroupsGroupIdEventsEventIdAttachmentsMicrosoftGraphCreateUploadSessionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postGroupsGroupIdEventsEventIdInstancesEventId1AttachmentsMicrosoftGraphCreateUploadSessionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postGroupsGroupIdEventsEventIdInstancesEventId1MicrosoftGraphAcceptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdEventsEventIdInstancesEventId1MicrosoftGraphCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdEventsEventIdInstancesEventId1MicrosoftGraphDeclineRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postGroupsGroupIdEventsEventIdInstancesEventId1MicrosoftGraphDismissReminderRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postGroupsGroupIdEventsEventIdInstancesEventId1MicrosoftGraphForwardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postGroupsGroupIdEventsEventIdInstancesEventId1MicrosoftGraphSnoozeReminderRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postGroupsGroupIdEventsEventIdInstancesEventId1MicrosoftGraphTentativelyAcceptRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postGroupsGroupIdEventsEventIdMicrosoftGraphAcceptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdEventsEventIdMicrosoftGraphCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdEventsEventIdMicrosoftGraphDeclineRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdEventsEventIdMicrosoftGraphDismissReminderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdEventsEventIdMicrosoftGraphForwardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdEventsEventIdMicrosoftGraphSnoozeReminderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdEventsEventIdMicrosoftGraphTentativelyAcceptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postGroupsGroupIdGroupLifecyclePoliciesGroupLifecyclePolicyIdMicrosoftGraphAddGroupRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postGroupsGroupIdGroupLifecyclePoliciesGroupLifecyclePolicyIdMicrosoftGraphRemoveGroupRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postGroupsGroupIdMicrosoftGraphAddFavoriteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdMicrosoftGraphAssignLicenseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdMicrosoftGraphCheckGrantedPermissionsForAppRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdMicrosoftGraphCheckMemberGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdMicrosoftGraphCheckMemberObjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdMicrosoftGraphGetMemberGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdMicrosoftGraphGetMemberObjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdMicrosoftGraphRemoveFavoriteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdMicrosoftGraphRenewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdMicrosoftGraphResetUnseenCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdMicrosoftGraphRestoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdMicrosoftGraphSubscribeByMailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdMicrosoftGraphUnsubscribeByMailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdMicrosoftGraphValidatePropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdOnenoteNotebooksMicrosoftGraphGetNotebookFromWebUrlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdOnenoteNotebooksNotebookIdMicrosoftGraphCopyNotebookRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postGroupsGroupIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdMicrosoftGraphCopyToNotebookRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postGroupsGroupIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdMicrosoftGraphCopyToSectionGroupRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postGroupsGroupIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdMicrosoftGraphCopyToSectionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postGroupsGroupIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdMicrosoftGraphOnenotePatchContentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postGroupsGroupIdOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdMicrosoftGraphCopyToNotebookRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postGroupsGroupIdOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdMicrosoftGraphCopyToSectionGroupRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postGroupsGroupIdOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdPagesOnenotePageIdMicrosoftGraphCopyToSectionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postGroupsGroupIdOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdPagesOnenotePageIdMicrosoftGraphOnenotePatchContentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postGroupsGroupIdOnenotePagesOnenotePageIdMicrosoftGraphCopyToSectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postGroupsGroupIdOnenotePagesOnenotePageIdMicrosoftGraphOnenotePatchContentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postGroupsGroupIdOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdMicrosoftGraphCopyToNotebookRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postGroupsGroupIdOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdMicrosoftGraphCopyToSectionGroupRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postGroupsGroupIdOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdMicrosoftGraphCopyToSectionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postGroupsGroupIdOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdMicrosoftGraphOnenotePatchContentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postGroupsGroupIdOnenoteSectionsOnenoteSectionIdMicrosoftGraphCopyToNotebookRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postGroupsGroupIdOnenoteSectionsOnenoteSectionIdMicrosoftGraphCopyToSectionGroupRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postGroupsGroupIdOnenoteSectionsOnenoteSectionIdPagesOnenotePageIdMicrosoftGraphCopyToSectionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postGroupsGroupIdOnenoteSectionsOnenoteSectionIdPagesOnenotePageIdMicrosoftGraphOnenotePatchContentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postGroupsGroupIdPermissionGrantsMicrosoftGraphGetAvailableExtensionPropertiesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postGroupsGroupIdPermissionGrantsMicrosoftGraphGetByIdsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdPermissionGrantsMicrosoftGraphValidatePropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postGroupsGroupIdPermissionGrantsResourceSpecificPermissionGrantIdMicrosoftGraphCheckMemberGroupsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postGroupsGroupIdPermissionGrantsResourceSpecificPermissionGrantIdMicrosoftGraphCheckMemberObjectsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postGroupsGroupIdPermissionGrantsResourceSpecificPermissionGrantIdMicrosoftGraphGetMemberGroupsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postGroupsGroupIdPermissionGrantsResourceSpecificPermissionGrantIdMicrosoftGraphGetMemberObjectsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postGroupsGroupIdPermissionGrantsResourceSpecificPermissionGrantIdMicrosoftGraphRestoreRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postGroupsGroupIdSitesMicrosoftGraphAddRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdSitesMicrosoftGraphRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdSitesSiteIdContentTypesMicrosoftGraphAddCopyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postGroupsGroupIdSitesSiteIdContentTypesMicrosoftGraphAddCopyFromContentTypeHubRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postGroupsGroupIdSitesSiteIdContentTypesContentTypeIdMicrosoftGraphAssociateWithHubSitesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postGroupsGroupIdSitesSiteIdContentTypesContentTypeIdMicrosoftGraphCopyToDefaultContentLocationRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postGroupsGroupIdSitesSiteIdContentTypesContentTypeIdMicrosoftGraphPublishRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postGroupsGroupIdSitesSiteIdContentTypesContentTypeIdMicrosoftGraphUnpublishRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postGroupsGroupIdSitesSiteIdListsListIdContentTypesMicrosoftGraphAddCopyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postGroupsGroupIdSitesSiteIdListsListIdContentTypesMicrosoftGraphAddCopyFromContentTypeHubRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postGroupsGroupIdSitesSiteIdListsListIdContentTypesContentTypeIdMicrosoftGraphAssociateWithHubSitesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postGroupsGroupIdSitesSiteIdListsListIdContentTypesContentTypeIdMicrosoftGraphCopyToDefaultContentLocationRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postGroupsGroupIdSitesSiteIdListsListIdContentTypesContentTypeIdMicrosoftGraphPublishRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postGroupsGroupIdSitesSiteIdListsListIdContentTypesContentTypeIdMicrosoftGraphUnpublishRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postGroupsGroupIdSitesSiteIdListsListIdItemsListItemIdDocumentSetVersionsDocumentSetVersionIdMicrosoftGraphRestoreRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postGroupsGroupIdSitesSiteIdListsListIdItemsListItemIdVersionsListItemVersionIdMicrosoftGraphRestoreVersionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postGroupsGroupIdSitesSiteIdListsListIdSubscriptionsSubscriptionIdMicrosoftGraphReauthorizeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postGroupsGroupIdSitesSiteIdOnenoteNotebooksMicrosoftGraphGetNotebookFromWebUrlRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postGroupsGroupIdSitesSiteIdOnenoteNotebooksNotebookIdMicrosoftGraphCopyNotebookRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postGroupsGroupIdSitesSiteIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdMicrosoftGraphCopyToNotebookRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postGroupsGroupIdSitesSiteIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdMicrosoftGraphCopyToSectionGroupRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postGroupsGroupIdSitesSiteIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdMicrosoftGraphCopyToSectionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postGroupsGroupIdSitesSiteIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdMicrosoftGraphOnenotePatchContentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postGroupsGroupIdSitesSiteIdOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdMicrosoftGraphCopyToNotebookRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postGroupsGroupIdSitesSiteIdOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdMicrosoftGraphCopyToSectionGroupRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postGroupsGroupIdSitesSiteIdOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdPagesOnenotePageIdMicrosoftGraphCopyToSectionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postGroupsGroupIdSitesSiteIdOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdPagesOnenotePageIdMicrosoftGraphOnenotePatchContentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postGroupsGroupIdSitesSiteIdOnenotePagesOnenotePageIdMicrosoftGraphCopyToSectionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postGroupsGroupIdSitesSiteIdOnenotePagesOnenotePageIdMicrosoftGraphOnenotePatchContentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postGroupsGroupIdSitesSiteIdOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdMicrosoftGraphCopyToNotebookRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postGroupsGroupIdSitesSiteIdOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdMicrosoftGraphCopyToSectionGroupRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postGroupsGroupIdSitesSiteIdOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdMicrosoftGraphCopyToSectionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postGroupsGroupIdSitesSiteIdOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdMicrosoftGraphOnenotePatchContentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postGroupsGroupIdSitesSiteIdOnenoteSectionsOnenoteSectionIdMicrosoftGraphCopyToNotebookRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postGroupsGroupIdSitesSiteIdOnenoteSectionsOnenoteSectionIdMicrosoftGraphCopyToSectionGroupRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postGroupsGroupIdSitesSiteIdOnenoteSectionsOnenoteSectionIdPagesOnenotePageIdMicrosoftGraphCopyToSectionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postGroupsGroupIdSitesSiteIdOnenoteSectionsOnenoteSectionIdPagesOnenotePageIdMicrosoftGraphOnenotePatchContentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postGroupsGroupIdSitesSiteIdPermissionsPermissionIdMicrosoftGraphGrantRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdTeamChannelsChannelIdMembersMicrosoftGraphAddRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postGroupsGroupIdTeamChannelsChannelIdMessagesChatMessageIdMicrosoftGraphSoftDeleteRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postGroupsGroupIdTeamChannelsChannelIdMessagesChatMessageIdMicrosoftGraphUndoSoftDeleteRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postGroupsGroupIdTeamChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1MicrosoftGraphSoftDeleteRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postGroupsGroupIdTeamChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1MicrosoftGraphUndoSoftDeleteRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postGroupsGroupIdTeamChannelsChannelIdMicrosoftGraphCompleteMigrationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdTeamChannelsChannelIdMicrosoftGraphProvisionEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdTeamChannelsChannelIdMicrosoftGraphRemoveEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postGroupsGroupIdTeamInstalledAppsTeamsAppInstallationIdMicrosoftGraphUpgradeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postGroupsGroupIdTeamMembersMicrosoftGraphAddRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdTeamMicrosoftGraphArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdTeamMicrosoftGraphCloneRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdTeamMicrosoftGraphCompleteMigrationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdTeamMicrosoftGraphSendActivityNotificationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdTeamMicrosoftGraphUnarchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdTeamPrimaryChannelMembersMicrosoftGraphAddRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postGroupsGroupIdTeamPrimaryChannelMessagesChatMessageIdMicrosoftGraphSoftDeleteRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postGroupsGroupIdTeamPrimaryChannelMessagesChatMessageIdMicrosoftGraphUndoSoftDeleteRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postGroupsGroupIdTeamPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1MicrosoftGraphSoftDeleteRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postGroupsGroupIdTeamPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1MicrosoftGraphUndoSoftDeleteRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postGroupsGroupIdTeamPrimaryChannelMicrosoftGraphCompleteMigrationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdTeamPrimaryChannelMicrosoftGraphProvisionEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdTeamPrimaryChannelMicrosoftGraphRemoveEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdTeamScheduleMicrosoftGraphShareRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdThreadsConversationThreadIdMicrosoftGraphReplyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postGroupsGroupIdThreadsConversationThreadIdPostsPostIdAttachmentsMicrosoftGraphCreateUploadSessionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postGroupsGroupIdThreadsConversationThreadIdPostsPostIdInReplyToAttachmentsMicrosoftGraphCreateUploadSessionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postGroupsGroupIdThreadsConversationThreadIdPostsPostIdInReplyToMicrosoftGraphForwardRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postGroupsGroupIdThreadsConversationThreadIdPostsPostIdInReplyToMicrosoftGraphReplyRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postGroupsGroupIdThreadsConversationThreadIdPostsPostIdMicrosoftGraphForwardRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postGroupsGroupIdThreadsConversationThreadIdPostsPostIdMicrosoftGraphReplyRoute, (c) => {
    throw new Error('Not implemented')
  })
