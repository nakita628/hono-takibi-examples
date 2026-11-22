import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getGroupsCountRoute,
  getGroupsGroupIdAcceptedSendersCountRoute,
  getGroupsGroupIdAppRoleAssignmentsCountRoute,
  getGroupsGroupIdCalendarCalendarPermissionsCountRoute,
  getGroupsGroupIdCalendarCalendarViewCountRoute,
  getGroupsGroupIdCalendarCalendarViewEventIdAttachmentsCountRoute,
  getGroupsGroupIdCalendarCalendarViewEventIdExtensionsCountRoute,
  getGroupsGroupIdCalendarCalendarViewEventIdInstancesCountRoute,
  getGroupsGroupIdCalendarCalendarViewEventIdInstancesEventId1AttachmentsCountRoute,
  getGroupsGroupIdCalendarCalendarViewEventIdInstancesEventId1ExtensionsCountRoute,
  getGroupsGroupIdCalendarCalendarViewEventIdInstancesEventId1MultiValueExtendedPropertiesCountRoute,
  getGroupsGroupIdCalendarCalendarViewEventIdInstancesEventId1SingleValueExtendedPropertiesCountRoute,
  getGroupsGroupIdCalendarCalendarViewEventIdMultiValueExtendedPropertiesCountRoute,
  getGroupsGroupIdCalendarCalendarViewEventIdSingleValueExtendedPropertiesCountRoute,
  getGroupsGroupIdCalendarEventsCountRoute,
  getGroupsGroupIdCalendarEventsEventIdAttachmentsCountRoute,
  getGroupsGroupIdCalendarEventsEventIdExtensionsCountRoute,
  getGroupsGroupIdCalendarEventsEventIdInstancesCountRoute,
  getGroupsGroupIdCalendarEventsEventIdInstancesEventId1AttachmentsCountRoute,
  getGroupsGroupIdCalendarEventsEventIdInstancesEventId1ExtensionsCountRoute,
  getGroupsGroupIdCalendarEventsEventIdInstancesEventId1MultiValueExtendedPropertiesCountRoute,
  getGroupsGroupIdCalendarEventsEventIdInstancesEventId1SingleValueExtendedPropertiesCountRoute,
  getGroupsGroupIdCalendarEventsEventIdMultiValueExtendedPropertiesCountRoute,
  getGroupsGroupIdCalendarEventsEventIdSingleValueExtendedPropertiesCountRoute,
  getGroupsGroupIdCalendarMultiValueExtendedPropertiesCountRoute,
  getGroupsGroupIdCalendarSingleValueExtendedPropertiesCountRoute,
  getGroupsGroupIdCalendarViewCountRoute,
  getGroupsGroupIdCalendarViewEventIdAttachmentsCountRoute,
  getGroupsGroupIdCalendarViewEventIdExtensionsCountRoute,
  getGroupsGroupIdCalendarViewEventIdInstancesCountRoute,
  getGroupsGroupIdCalendarViewEventIdInstancesEventId1AttachmentsCountRoute,
  getGroupsGroupIdCalendarViewEventIdInstancesEventId1ExtensionsCountRoute,
  getGroupsGroupIdCalendarViewEventIdInstancesEventId1MultiValueExtendedPropertiesCountRoute,
  getGroupsGroupIdCalendarViewEventIdInstancesEventId1SingleValueExtendedPropertiesCountRoute,
  getGroupsGroupIdCalendarViewEventIdMultiValueExtendedPropertiesCountRoute,
  getGroupsGroupIdCalendarViewEventIdSingleValueExtendedPropertiesCountRoute,
  getGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdPostsCountRoute,
  getGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdPostsPostIdAttachmentsCountRoute,
  getGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdPostsPostIdExtensionsCountRoute,
  getGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdPostsPostIdInReplyToAttachmentsCountRoute,
  getGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdPostsPostIdInReplyToExtensionsCountRoute,
  getGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdPostsPostIdInReplyToMultiValueExtendedPropertiesCountRoute,
  getGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdPostsPostIdInReplyToSingleValueExtendedPropertiesCountRoute,
  getGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdPostsPostIdMultiValueExtendedPropertiesCountRoute,
  getGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdPostsPostIdSingleValueExtendedPropertiesCountRoute,
  getGroupsGroupIdConversationsConversationIdThreadsCountRoute,
  getGroupsGroupIdConversationsCountRoute,
  getGroupsGroupIdDrivesCountRoute,
  getGroupsGroupIdEventsCountRoute,
  getGroupsGroupIdEventsEventIdAttachmentsCountRoute,
  getGroupsGroupIdEventsEventIdExtensionsCountRoute,
  getGroupsGroupIdEventsEventIdInstancesCountRoute,
  getGroupsGroupIdEventsEventIdInstancesEventId1AttachmentsCountRoute,
  getGroupsGroupIdEventsEventIdInstancesEventId1ExtensionsCountRoute,
  getGroupsGroupIdEventsEventIdInstancesEventId1MultiValueExtendedPropertiesCountRoute,
  getGroupsGroupIdEventsEventIdInstancesEventId1SingleValueExtendedPropertiesCountRoute,
  getGroupsGroupIdEventsEventIdMultiValueExtendedPropertiesCountRoute,
  getGroupsGroupIdEventsEventIdSingleValueExtendedPropertiesCountRoute,
  getGroupsGroupIdExtensionsCountRoute,
  getGroupsGroupIdGroupLifecyclePoliciesCountRoute,
  getGroupsGroupIdMemberOfCountRoute,
  getGroupsGroupIdMemberOfMicrosoftGraphApplicationCountRoute,
  getGroupsGroupIdMemberOfMicrosoftGraphDeviceCountRoute,
  getGroupsGroupIdMemberOfMicrosoftGraphGroupCountRoute,
  getGroupsGroupIdMemberOfMicrosoftGraphOrgContactCountRoute,
  getGroupsGroupIdMemberOfMicrosoftGraphServicePrincipalCountRoute,
  getGroupsGroupIdMemberOfMicrosoftGraphUserCountRoute,
  getGroupsGroupIdMembersCountRoute,
  getGroupsGroupIdMembersMicrosoftGraphApplicationCountRoute,
  getGroupsGroupIdMembersMicrosoftGraphDeviceCountRoute,
  getGroupsGroupIdMembersMicrosoftGraphGroupCountRoute,
  getGroupsGroupIdMembersMicrosoftGraphOrgContactCountRoute,
  getGroupsGroupIdMembersMicrosoftGraphServicePrincipalCountRoute,
  getGroupsGroupIdMembersMicrosoftGraphUserCountRoute,
  getGroupsGroupIdMembersWithLicenseErrorsCountRoute,
  getGroupsGroupIdMembersWithLicenseErrorsMicrosoftGraphApplicationCountRoute,
  getGroupsGroupIdMembersWithLicenseErrorsMicrosoftGraphDeviceCountRoute,
  getGroupsGroupIdMembersWithLicenseErrorsMicrosoftGraphGroupCountRoute,
  getGroupsGroupIdMembersWithLicenseErrorsMicrosoftGraphOrgContactCountRoute,
  getGroupsGroupIdMembersWithLicenseErrorsMicrosoftGraphServicePrincipalCountRoute,
  getGroupsGroupIdMembersWithLicenseErrorsMicrosoftGraphUserCountRoute,
  getGroupsGroupIdOnenoteNotebooksCountRoute,
  getGroupsGroupIdOnenoteNotebooksNotebookIdSectionGroupsCountRoute,
  getGroupsGroupIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionGroupsCountRoute,
  getGroupsGroupIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsCountRoute,
  getGroupsGroupIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesCountRoute,
  getGroupsGroupIdOnenoteNotebooksNotebookIdSectionsCountRoute,
  getGroupsGroupIdOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdPagesCountRoute,
  getGroupsGroupIdOnenoteOperationsCountRoute,
  getGroupsGroupIdOnenotePagesCountRoute,
  getGroupsGroupIdOnenoteResourcesCountRoute,
  getGroupsGroupIdOnenoteSectionGroupsCountRoute,
  getGroupsGroupIdOnenoteSectionGroupsSectionGroupIdSectionGroupsCountRoute,
  getGroupsGroupIdOnenoteSectionGroupsSectionGroupIdSectionsCountRoute,
  getGroupsGroupIdOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesCountRoute,
  getGroupsGroupIdOnenoteSectionsCountRoute,
  getGroupsGroupIdOnenoteSectionsOnenoteSectionIdPagesCountRoute,
  getGroupsGroupIdOwnersCountRoute,
  getGroupsGroupIdOwnersMicrosoftGraphApplicationCountRoute,
  getGroupsGroupIdOwnersMicrosoftGraphDeviceCountRoute,
  getGroupsGroupIdOwnersMicrosoftGraphGroupCountRoute,
  getGroupsGroupIdOwnersMicrosoftGraphOrgContactCountRoute,
  getGroupsGroupIdOwnersMicrosoftGraphServicePrincipalCountRoute,
  getGroupsGroupIdOwnersMicrosoftGraphUserCountRoute,
  getGroupsGroupIdPermissionGrantsCountRoute,
  getGroupsGroupIdPhotosCountRoute,
  getGroupsGroupIdPlannerPlansCountRoute,
  getGroupsGroupIdPlannerPlansPlannerPlanIdBucketsCountRoute,
  getGroupsGroupIdPlannerPlansPlannerPlanIdBucketsPlannerBucketIdTasksCountRoute,
  getGroupsGroupIdPlannerPlansPlannerPlanIdTasksCountRoute,
  getGroupsGroupIdRejectedSendersCountRoute,
  getGroupsGroupIdSettingsCountRoute,
  getGroupsGroupIdSitesCountRoute,
  getGroupsGroupIdSitesSiteIdColumnsCountRoute,
  getGroupsGroupIdSitesSiteIdContentTypesContentTypeIdBaseTypesCountRoute,
  getGroupsGroupIdSitesSiteIdContentTypesContentTypeIdColumnLinksCountRoute,
  getGroupsGroupIdSitesSiteIdContentTypesContentTypeIdColumnPositionsCountRoute,
  getGroupsGroupIdSitesSiteIdContentTypesContentTypeIdColumnsCountRoute,
  getGroupsGroupIdSitesSiteIdContentTypesCountRoute,
  getGroupsGroupIdSitesSiteIdDrivesCountRoute,
  getGroupsGroupIdSitesSiteIdExternalColumnsCountRoute,
  getGroupsGroupIdSitesSiteIdItemsCountRoute,
  getGroupsGroupIdSitesSiteIdListsCountRoute,
  getGroupsGroupIdSitesSiteIdListsListIdColumnsCountRoute,
  getGroupsGroupIdSitesSiteIdListsListIdContentTypesContentTypeIdBaseTypesCountRoute,
  getGroupsGroupIdSitesSiteIdListsListIdContentTypesContentTypeIdColumnLinksCountRoute,
  getGroupsGroupIdSitesSiteIdListsListIdContentTypesContentTypeIdColumnPositionsCountRoute,
  getGroupsGroupIdSitesSiteIdListsListIdContentTypesContentTypeIdColumnsCountRoute,
  getGroupsGroupIdSitesSiteIdListsListIdContentTypesCountRoute,
  getGroupsGroupIdSitesSiteIdListsListIdItemsCountRoute,
  getGroupsGroupIdSitesSiteIdListsListIdItemsListItemIdDocumentSetVersionsCountRoute,
  getGroupsGroupIdSitesSiteIdListsListIdItemsListItemIdVersionsCountRoute,
  getGroupsGroupIdSitesSiteIdListsListIdOperationsCountRoute,
  getGroupsGroupIdSitesSiteIdListsListIdSubscriptionsCountRoute,
  getGroupsGroupIdSitesSiteIdOnenoteNotebooksCountRoute,
  getGroupsGroupIdSitesSiteIdOnenoteNotebooksNotebookIdSectionGroupsCountRoute,
  getGroupsGroupIdSitesSiteIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionGroupsCountRoute,
  getGroupsGroupIdSitesSiteIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsCountRoute,
  getGroupsGroupIdSitesSiteIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesCountRoute,
  getGroupsGroupIdSitesSiteIdOnenoteNotebooksNotebookIdSectionsCountRoute,
  getGroupsGroupIdSitesSiteIdOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdPagesCountRoute,
  getGroupsGroupIdSitesSiteIdOnenoteOperationsCountRoute,
  getGroupsGroupIdSitesSiteIdOnenotePagesCountRoute,
  getGroupsGroupIdSitesSiteIdOnenoteResourcesCountRoute,
  getGroupsGroupIdSitesSiteIdOnenoteSectionGroupsCountRoute,
  getGroupsGroupIdSitesSiteIdOnenoteSectionGroupsSectionGroupIdSectionGroupsCountRoute,
  getGroupsGroupIdSitesSiteIdOnenoteSectionGroupsSectionGroupIdSectionsCountRoute,
  getGroupsGroupIdSitesSiteIdOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesCountRoute,
  getGroupsGroupIdSitesSiteIdOnenoteSectionsCountRoute,
  getGroupsGroupIdSitesSiteIdOnenoteSectionsOnenoteSectionIdPagesCountRoute,
  getGroupsGroupIdSitesSiteIdOperationsCountRoute,
  getGroupsGroupIdSitesSiteIdPermissionsCountRoute,
  getGroupsGroupIdSitesSiteIdSitesCountRoute,
  getGroupsGroupIdSitesSiteIdTermStoreGroupsCountRoute,
  getGroupsGroupIdSitesSiteIdTermStoreGroupsGroupId1SetsCountRoute,
  getGroupsGroupIdSitesSiteIdTermStoreGroupsGroupId1SetsSetIdChildrenCountRoute,
  getGroupsGroupIdSitesSiteIdTermStoreGroupsGroupId1SetsSetIdChildrenTermIdChildrenCountRoute,
  getGroupsGroupIdSitesSiteIdTermStoreGroupsGroupId1SetsSetIdChildrenTermIdChildrenTermId1RelationsCountRoute,
  getGroupsGroupIdSitesSiteIdTermStoreGroupsGroupId1SetsSetIdChildrenTermIdRelationsCountRoute,
  getGroupsGroupIdSitesSiteIdTermStoreGroupsGroupId1SetsSetIdRelationsCountRoute,
  getGroupsGroupIdSitesSiteIdTermStoreGroupsGroupId1SetsSetIdTermsCountRoute,
  getGroupsGroupIdSitesSiteIdTermStoreGroupsGroupId1SetsSetIdTermsTermIdChildrenCountRoute,
  getGroupsGroupIdSitesSiteIdTermStoreGroupsGroupId1SetsSetIdTermsTermIdChildrenTermId1RelationsCountRoute,
  getGroupsGroupIdSitesSiteIdTermStoreGroupsGroupId1SetsSetIdTermsTermIdRelationsCountRoute,
  getGroupsGroupIdSitesSiteIdTermStoresCountRoute,
  getGroupsGroupIdSitesSiteIdTermStoreSetsCountRoute,
  getGroupsGroupIdSitesSiteIdTermStoreSetsSetIdChildrenCountRoute,
  getGroupsGroupIdSitesSiteIdTermStoreSetsSetIdChildrenTermIdChildrenCountRoute,
  getGroupsGroupIdSitesSiteIdTermStoreSetsSetIdChildrenTermIdChildrenTermId1RelationsCountRoute,
  getGroupsGroupIdSitesSiteIdTermStoreSetsSetIdChildrenTermIdRelationsCountRoute,
  getGroupsGroupIdSitesSiteIdTermStoreSetsSetIdParentGroupSetsCountRoute,
  getGroupsGroupIdSitesSiteIdTermStoreSetsSetIdParentGroupSetsSetId1ChildrenCountRoute,
  getGroupsGroupIdSitesSiteIdTermStoreSetsSetIdParentGroupSetsSetId1ChildrenTermIdChildrenCountRoute,
  getGroupsGroupIdSitesSiteIdTermStoreSetsSetIdParentGroupSetsSetId1ChildrenTermIdChildrenTermId1RelationsCountRoute,
  getGroupsGroupIdSitesSiteIdTermStoreSetsSetIdParentGroupSetsSetId1ChildrenTermIdRelationsCountRoute,
  getGroupsGroupIdSitesSiteIdTermStoreSetsSetIdParentGroupSetsSetId1RelationsCountRoute,
  getGroupsGroupIdSitesSiteIdTermStoreSetsSetIdParentGroupSetsSetId1TermsCountRoute,
  getGroupsGroupIdSitesSiteIdTermStoreSetsSetIdParentGroupSetsSetId1TermsTermIdChildrenCountRoute,
  getGroupsGroupIdSitesSiteIdTermStoreSetsSetIdParentGroupSetsSetId1TermsTermIdChildrenTermId1RelationsCountRoute,
  getGroupsGroupIdSitesSiteIdTermStoreSetsSetIdParentGroupSetsSetId1TermsTermIdRelationsCountRoute,
  getGroupsGroupIdSitesSiteIdTermStoreSetsSetIdRelationsCountRoute,
  getGroupsGroupIdSitesSiteIdTermStoreSetsSetIdTermsCountRoute,
  getGroupsGroupIdSitesSiteIdTermStoreSetsSetIdTermsTermIdChildrenCountRoute,
  getGroupsGroupIdSitesSiteIdTermStoreSetsSetIdTermsTermIdChildrenTermId1RelationsCountRoute,
  getGroupsGroupIdSitesSiteIdTermStoreSetsSetIdTermsTermIdRelationsCountRoute,
  getGroupsGroupIdSitesSiteIdTermStoresStoreIdGroupsCountRoute,
  getGroupsGroupIdSitesSiteIdTermStoresStoreIdGroupsGroupId1SetsCountRoute,
  getGroupsGroupIdSitesSiteIdTermStoresStoreIdGroupsGroupId1SetsSetIdChildrenCountRoute,
  getGroupsGroupIdSitesSiteIdTermStoresStoreIdGroupsGroupId1SetsSetIdChildrenTermIdChildrenCountRoute,
  getGroupsGroupIdSitesSiteIdTermStoresStoreIdGroupsGroupId1SetsSetIdChildrenTermIdChildrenTermId1RelationsCountRoute,
  getGroupsGroupIdSitesSiteIdTermStoresStoreIdGroupsGroupId1SetsSetIdChildrenTermIdRelationsCountRoute,
  getGroupsGroupIdSitesSiteIdTermStoresStoreIdGroupsGroupId1SetsSetIdRelationsCountRoute,
  getGroupsGroupIdSitesSiteIdTermStoresStoreIdGroupsGroupId1SetsSetIdTermsCountRoute,
  getGroupsGroupIdSitesSiteIdTermStoresStoreIdGroupsGroupId1SetsSetIdTermsTermIdChildrenCountRoute,
  getGroupsGroupIdSitesSiteIdTermStoresStoreIdGroupsGroupId1SetsSetIdTermsTermIdChildrenTermId1RelationsCountRoute,
  getGroupsGroupIdSitesSiteIdTermStoresStoreIdGroupsGroupId1SetsSetIdTermsTermIdRelationsCountRoute,
  getGroupsGroupIdSitesSiteIdTermStoresStoreIdSetsCountRoute,
  getGroupsGroupIdSitesSiteIdTermStoresStoreIdSetsSetIdChildrenCountRoute,
  getGroupsGroupIdSitesSiteIdTermStoresStoreIdSetsSetIdChildrenTermIdChildrenCountRoute,
  getGroupsGroupIdSitesSiteIdTermStoresStoreIdSetsSetIdChildrenTermIdChildrenTermId1RelationsCountRoute,
  getGroupsGroupIdSitesSiteIdTermStoresStoreIdSetsSetIdChildrenTermIdRelationsCountRoute,
  getGroupsGroupIdSitesSiteIdTermStoresStoreIdSetsSetIdParentGroupSetsCountRoute,
  getGroupsGroupIdSitesSiteIdTermStoresStoreIdSetsSetIdParentGroupSetsSetId1ChildrenCountRoute,
  getGroupsGroupIdSitesSiteIdTermStoresStoreIdSetsSetIdParentGroupSetsSetId1ChildrenTermIdChildrenCountRoute,
  getGroupsGroupIdSitesSiteIdTermStoresStoreIdSetsSetIdParentGroupSetsSetId1ChildrenTermIdChildrenTermId1RelationsCountRoute,
  getGroupsGroupIdSitesSiteIdTermStoresStoreIdSetsSetIdParentGroupSetsSetId1ChildrenTermIdRelationsCountRoute,
  getGroupsGroupIdSitesSiteIdTermStoresStoreIdSetsSetIdParentGroupSetsSetId1RelationsCountRoute,
  getGroupsGroupIdSitesSiteIdTermStoresStoreIdSetsSetIdParentGroupSetsSetId1TermsCountRoute,
  getGroupsGroupIdSitesSiteIdTermStoresStoreIdSetsSetIdParentGroupSetsSetId1TermsTermIdChildrenCountRoute,
  getGroupsGroupIdSitesSiteIdTermStoresStoreIdSetsSetIdParentGroupSetsSetId1TermsTermIdChildrenTermId1RelationsCountRoute,
  getGroupsGroupIdSitesSiteIdTermStoresStoreIdSetsSetIdParentGroupSetsSetId1TermsTermIdRelationsCountRoute,
  getGroupsGroupIdSitesSiteIdTermStoresStoreIdSetsSetIdRelationsCountRoute,
  getGroupsGroupIdSitesSiteIdTermStoresStoreIdSetsSetIdTermsCountRoute,
  getGroupsGroupIdSitesSiteIdTermStoresStoreIdSetsSetIdTermsTermIdChildrenCountRoute,
  getGroupsGroupIdSitesSiteIdTermStoresStoreIdSetsSetIdTermsTermIdChildrenTermId1RelationsCountRoute,
  getGroupsGroupIdSitesSiteIdTermStoresStoreIdSetsSetIdTermsTermIdRelationsCountRoute,
  getGroupsGroupIdTeamAllChannelsCountRoute,
  getGroupsGroupIdTeamChannelsChannelIdMembersCountRoute,
  getGroupsGroupIdTeamChannelsChannelIdMessagesChatMessageIdHostedContentsCountRoute,
  getGroupsGroupIdTeamChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsCountRoute,
  getGroupsGroupIdTeamChannelsChannelIdMessagesChatMessageIdRepliesCountRoute,
  getGroupsGroupIdTeamChannelsChannelIdMessagesCountRoute,
  getGroupsGroupIdTeamChannelsChannelIdSharedWithTeamsCountRoute,
  getGroupsGroupIdTeamChannelsChannelIdSharedWithTeamsSharedWithChannelTeamInfoIdAllowedMembersCountRoute,
  getGroupsGroupIdTeamChannelsChannelIdTabsCountRoute,
  getGroupsGroupIdTeamChannelsCountRoute,
  getGroupsGroupIdTeamIncomingChannelsCountRoute,
  getGroupsGroupIdTeamInstalledAppsCountRoute,
  getGroupsGroupIdTeamMembersCountRoute,
  getGroupsGroupIdTeamOperationsCountRoute,
  getGroupsGroupIdTeamPrimaryChannelMembersCountRoute,
  getGroupsGroupIdTeamPrimaryChannelMessagesChatMessageIdHostedContentsCountRoute,
  getGroupsGroupIdTeamPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1HostedContentsCountRoute,
  getGroupsGroupIdTeamPrimaryChannelMessagesChatMessageIdRepliesCountRoute,
  getGroupsGroupIdTeamPrimaryChannelMessagesCountRoute,
  getGroupsGroupIdTeamPrimaryChannelSharedWithTeamsCountRoute,
  getGroupsGroupIdTeamPrimaryChannelSharedWithTeamsSharedWithChannelTeamInfoIdAllowedMembersCountRoute,
  getGroupsGroupIdTeamPrimaryChannelTabsCountRoute,
  getGroupsGroupIdTeamScheduleOfferShiftRequestsCountRoute,
  getGroupsGroupIdTeamScheduleOpenShiftChangeRequestsCountRoute,
  getGroupsGroupIdTeamScheduleOpenShiftsCountRoute,
  getGroupsGroupIdTeamScheduleSchedulingGroupsCountRoute,
  getGroupsGroupIdTeamScheduleShiftsCountRoute,
  getGroupsGroupIdTeamScheduleSwapShiftsChangeRequestsCountRoute,
  getGroupsGroupIdTeamScheduleTimeOffReasonsCountRoute,
  getGroupsGroupIdTeamScheduleTimeOffRequestsCountRoute,
  getGroupsGroupIdTeamScheduleTimesOffCountRoute,
  getGroupsGroupIdTeamTagsCountRoute,
  getGroupsGroupIdTeamTagsTeamworkTagIdMembersCountRoute,
  getGroupsGroupIdThreadsConversationThreadIdPostsCountRoute,
  getGroupsGroupIdThreadsConversationThreadIdPostsPostIdAttachmentsCountRoute,
  getGroupsGroupIdThreadsConversationThreadIdPostsPostIdExtensionsCountRoute,
  getGroupsGroupIdThreadsConversationThreadIdPostsPostIdInReplyToAttachmentsCountRoute,
  getGroupsGroupIdThreadsConversationThreadIdPostsPostIdInReplyToExtensionsCountRoute,
  getGroupsGroupIdThreadsConversationThreadIdPostsPostIdInReplyToMultiValueExtendedPropertiesCountRoute,
  getGroupsGroupIdThreadsConversationThreadIdPostsPostIdInReplyToSingleValueExtendedPropertiesCountRoute,
  getGroupsGroupIdThreadsConversationThreadIdPostsPostIdMultiValueExtendedPropertiesCountRoute,
  getGroupsGroupIdThreadsConversationThreadIdPostsPostIdSingleValueExtendedPropertiesCountRoute,
  getGroupsGroupIdThreadsCountRoute,
  getGroupsGroupIdTransitiveMemberOfCountRoute,
  getGroupsGroupIdTransitiveMemberOfMicrosoftGraphApplicationCountRoute,
  getGroupsGroupIdTransitiveMemberOfMicrosoftGraphDeviceCountRoute,
  getGroupsGroupIdTransitiveMemberOfMicrosoftGraphGroupCountRoute,
  getGroupsGroupIdTransitiveMemberOfMicrosoftGraphOrgContactCountRoute,
  getGroupsGroupIdTransitiveMemberOfMicrosoftGraphServicePrincipalCountRoute,
  getGroupsGroupIdTransitiveMemberOfMicrosoftGraphUserCountRoute,
  getGroupsGroupIdTransitiveMembersCountRoute,
  getGroupsGroupIdTransitiveMembersMicrosoftGraphApplicationCountRoute,
  getGroupsGroupIdTransitiveMembersMicrosoftGraphDeviceCountRoute,
  getGroupsGroupIdTransitiveMembersMicrosoftGraphGroupCountRoute,
  getGroupsGroupIdTransitiveMembersMicrosoftGraphOrgContactCountRoute,
  getGroupsGroupIdTransitiveMembersMicrosoftGraphServicePrincipalCountRoute,
  getGroupsGroupIdTransitiveMembersMicrosoftGraphUserCountRoute,
} from '../routes'

const app = new OpenAPIHono()

export const groupsHandler = app
  .openapi(getGroupsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdAcceptedSendersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdAppRoleAssignmentsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdCalendarCalendarPermissionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdCalendarCalendarViewCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdCalendarCalendarViewEventIdAttachmentsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdCalendarCalendarViewEventIdExtensionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdCalendarCalendarViewEventIdInstancesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getGroupsGroupIdCalendarCalendarViewEventIdInstancesEventId1AttachmentsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdCalendarCalendarViewEventIdInstancesEventId1ExtensionsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdCalendarCalendarViewEventIdInstancesEventId1MultiValueExtendedPropertiesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdCalendarCalendarViewEventIdInstancesEventId1SingleValueExtendedPropertiesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdCalendarCalendarViewEventIdMultiValueExtendedPropertiesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdCalendarCalendarViewEventIdSingleValueExtendedPropertiesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getGroupsGroupIdCalendarEventsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdCalendarEventsEventIdAttachmentsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdCalendarEventsEventIdExtensionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdCalendarEventsEventIdInstancesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdCalendarEventsEventIdInstancesEventId1AttachmentsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdCalendarEventsEventIdInstancesEventId1ExtensionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getGroupsGroupIdCalendarEventsEventIdInstancesEventId1MultiValueExtendedPropertiesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdCalendarEventsEventIdInstancesEventId1SingleValueExtendedPropertiesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getGroupsGroupIdCalendarEventsEventIdMultiValueExtendedPropertiesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdCalendarEventsEventIdSingleValueExtendedPropertiesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdCalendarMultiValueExtendedPropertiesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdCalendarSingleValueExtendedPropertiesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdCalendarViewCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdCalendarViewEventIdAttachmentsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdCalendarViewEventIdExtensionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdCalendarViewEventIdInstancesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdCalendarViewEventIdInstancesEventId1AttachmentsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdCalendarViewEventIdInstancesEventId1ExtensionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getGroupsGroupIdCalendarViewEventIdInstancesEventId1MultiValueExtendedPropertiesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdCalendarViewEventIdInstancesEventId1SingleValueExtendedPropertiesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getGroupsGroupIdCalendarViewEventIdMultiValueExtendedPropertiesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdCalendarViewEventIdSingleValueExtendedPropertiesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdConversationsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdConversationsConversationIdThreadsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdPostsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdPostsPostIdAttachmentsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdPostsPostIdExtensionsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdPostsPostIdInReplyToAttachmentsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdPostsPostIdInReplyToExtensionsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdPostsPostIdInReplyToMultiValueExtendedPropertiesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdPostsPostIdInReplyToSingleValueExtendedPropertiesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdPostsPostIdMultiValueExtendedPropertiesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdConversationsConversationIdThreadsConversationThreadIdPostsPostIdSingleValueExtendedPropertiesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getGroupsGroupIdDrivesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdEventsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdEventsEventIdAttachmentsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdEventsEventIdExtensionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdEventsEventIdInstancesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdEventsEventIdInstancesEventId1AttachmentsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdEventsEventIdInstancesEventId1ExtensionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getGroupsGroupIdEventsEventIdInstancesEventId1MultiValueExtendedPropertiesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdEventsEventIdInstancesEventId1SingleValueExtendedPropertiesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getGroupsGroupIdEventsEventIdMultiValueExtendedPropertiesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdEventsEventIdSingleValueExtendedPropertiesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdExtensionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdGroupLifecyclePoliciesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdMemberOfCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdMemberOfMicrosoftGraphApplicationCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdMemberOfMicrosoftGraphDeviceCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdMemberOfMicrosoftGraphGroupCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdMemberOfMicrosoftGraphOrgContactCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdMemberOfMicrosoftGraphServicePrincipalCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdMemberOfMicrosoftGraphUserCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdMembersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdMembersMicrosoftGraphApplicationCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdMembersMicrosoftGraphDeviceCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdMembersMicrosoftGraphGroupCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdMembersMicrosoftGraphOrgContactCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdMembersMicrosoftGraphServicePrincipalCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdMembersMicrosoftGraphUserCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdMembersWithLicenseErrorsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdMembersWithLicenseErrorsMicrosoftGraphApplicationCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdMembersWithLicenseErrorsMicrosoftGraphDeviceCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdMembersWithLicenseErrorsMicrosoftGraphGroupCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdMembersWithLicenseErrorsMicrosoftGraphOrgContactCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getGroupsGroupIdMembersWithLicenseErrorsMicrosoftGraphServicePrincipalCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getGroupsGroupIdMembersWithLicenseErrorsMicrosoftGraphUserCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdOnenoteNotebooksCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdOnenoteNotebooksNotebookIdSectionGroupsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getGroupsGroupIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionGroupsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getGroupsGroupIdOnenoteNotebooksNotebookIdSectionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getGroupsGroupIdOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdPagesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getGroupsGroupIdOnenoteOperationsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdOnenotePagesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdOnenoteResourcesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdOnenoteSectionGroupsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdOnenoteSectionGroupsSectionGroupIdSectionGroupsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdOnenoteSectionGroupsSectionGroupIdSectionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getGroupsGroupIdOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getGroupsGroupIdOnenoteSectionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdOnenoteSectionsOnenoteSectionIdPagesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdOwnersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdOwnersMicrosoftGraphApplicationCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdOwnersMicrosoftGraphDeviceCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdOwnersMicrosoftGraphGroupCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdOwnersMicrosoftGraphOrgContactCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdOwnersMicrosoftGraphServicePrincipalCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdOwnersMicrosoftGraphUserCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdPermissionGrantsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdPhotosCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdPlannerPlansCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdPlannerPlansPlannerPlanIdBucketsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdPlannerPlansPlannerPlanIdBucketsPlannerBucketIdTasksCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdPlannerPlansPlannerPlanIdTasksCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdRejectedSendersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdSettingsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdSitesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdSitesSiteIdColumnsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdSitesSiteIdContentTypesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdSitesSiteIdContentTypesContentTypeIdBaseTypesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdSitesSiteIdContentTypesContentTypeIdColumnLinksCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdSitesSiteIdContentTypesContentTypeIdColumnPositionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdSitesSiteIdContentTypesContentTypeIdColumnsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdSitesSiteIdDrivesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdSitesSiteIdExternalColumnsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdSitesSiteIdItemsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdSitesSiteIdListsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdSitesSiteIdListsListIdColumnsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdSitesSiteIdListsListIdContentTypesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getGroupsGroupIdSitesSiteIdListsListIdContentTypesContentTypeIdBaseTypesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdSitesSiteIdListsListIdContentTypesContentTypeIdColumnLinksCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdSitesSiteIdListsListIdContentTypesContentTypeIdColumnPositionsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdSitesSiteIdListsListIdContentTypesContentTypeIdColumnsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getGroupsGroupIdSitesSiteIdListsListIdItemsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getGroupsGroupIdSitesSiteIdListsListIdItemsListItemIdDocumentSetVersionsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getGroupsGroupIdSitesSiteIdListsListIdItemsListItemIdVersionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdSitesSiteIdListsListIdOperationsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdSitesSiteIdListsListIdSubscriptionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdSitesSiteIdOnenoteNotebooksCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdSitesSiteIdOnenoteNotebooksNotebookIdSectionGroupsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getGroupsGroupIdSitesSiteIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionGroupsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdSitesSiteIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdSitesSiteIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getGroupsGroupIdSitesSiteIdOnenoteNotebooksNotebookIdSectionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getGroupsGroupIdSitesSiteIdOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdPagesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getGroupsGroupIdSitesSiteIdOnenoteOperationsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdSitesSiteIdOnenotePagesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdSitesSiteIdOnenoteResourcesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdSitesSiteIdOnenoteSectionGroupsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getGroupsGroupIdSitesSiteIdOnenoteSectionGroupsSectionGroupIdSectionGroupsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getGroupsGroupIdSitesSiteIdOnenoteSectionGroupsSectionGroupIdSectionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getGroupsGroupIdSitesSiteIdOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getGroupsGroupIdSitesSiteIdOnenoteSectionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdSitesSiteIdOnenoteSectionsOnenoteSectionIdPagesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdSitesSiteIdOperationsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdSitesSiteIdPermissionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdSitesSiteIdSitesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdSitesSiteIdTermStoreGroupsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdSitesSiteIdTermStoreGroupsGroupId1SetsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdSitesSiteIdTermStoreGroupsGroupId1SetsSetIdChildrenCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getGroupsGroupIdSitesSiteIdTermStoreGroupsGroupId1SetsSetIdChildrenTermIdChildrenCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdSitesSiteIdTermStoreGroupsGroupId1SetsSetIdChildrenTermIdChildrenTermId1RelationsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdSitesSiteIdTermStoreGroupsGroupId1SetsSetIdChildrenTermIdRelationsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getGroupsGroupIdSitesSiteIdTermStoreGroupsGroupId1SetsSetIdRelationsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdSitesSiteIdTermStoreGroupsGroupId1SetsSetIdTermsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getGroupsGroupIdSitesSiteIdTermStoreGroupsGroupId1SetsSetIdTermsTermIdChildrenCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdSitesSiteIdTermStoreGroupsGroupId1SetsSetIdTermsTermIdChildrenTermId1RelationsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdSitesSiteIdTermStoreGroupsGroupId1SetsSetIdTermsTermIdRelationsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getGroupsGroupIdSitesSiteIdTermStoreSetsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdSitesSiteIdTermStoreSetsSetIdChildrenCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdSitesSiteIdTermStoreSetsSetIdChildrenTermIdChildrenCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getGroupsGroupIdSitesSiteIdTermStoreSetsSetIdChildrenTermIdChildrenTermId1RelationsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getGroupsGroupIdSitesSiteIdTermStoreSetsSetIdChildrenTermIdRelationsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdSitesSiteIdTermStoreSetsSetIdParentGroupSetsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getGroupsGroupIdSitesSiteIdTermStoreSetsSetIdParentGroupSetsSetId1ChildrenCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdSitesSiteIdTermStoreSetsSetIdParentGroupSetsSetId1ChildrenTermIdChildrenCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdSitesSiteIdTermStoreSetsSetIdParentGroupSetsSetId1ChildrenTermIdChildrenTermId1RelationsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdSitesSiteIdTermStoreSetsSetIdParentGroupSetsSetId1ChildrenTermIdRelationsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdSitesSiteIdTermStoreSetsSetIdParentGroupSetsSetId1RelationsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdSitesSiteIdTermStoreSetsSetIdParentGroupSetsSetId1TermsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdSitesSiteIdTermStoreSetsSetIdParentGroupSetsSetId1TermsTermIdChildrenCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdSitesSiteIdTermStoreSetsSetIdParentGroupSetsSetId1TermsTermIdChildrenTermId1RelationsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdSitesSiteIdTermStoreSetsSetIdParentGroupSetsSetId1TermsTermIdRelationsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getGroupsGroupIdSitesSiteIdTermStoreSetsSetIdRelationsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdSitesSiteIdTermStoreSetsSetIdTermsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdSitesSiteIdTermStoreSetsSetIdTermsTermIdChildrenCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getGroupsGroupIdSitesSiteIdTermStoreSetsSetIdTermsTermIdChildrenTermId1RelationsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getGroupsGroupIdSitesSiteIdTermStoreSetsSetIdTermsTermIdRelationsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdSitesSiteIdTermStoresCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdSitesSiteIdTermStoresStoreIdGroupsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdSitesSiteIdTermStoresStoreIdGroupsGroupId1SetsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getGroupsGroupIdSitesSiteIdTermStoresStoreIdGroupsGroupId1SetsSetIdChildrenCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdSitesSiteIdTermStoresStoreIdGroupsGroupId1SetsSetIdChildrenTermIdChildrenCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdSitesSiteIdTermStoresStoreIdGroupsGroupId1SetsSetIdChildrenTermIdChildrenTermId1RelationsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdSitesSiteIdTermStoresStoreIdGroupsGroupId1SetsSetIdChildrenTermIdRelationsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdSitesSiteIdTermStoresStoreIdGroupsGroupId1SetsSetIdRelationsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdSitesSiteIdTermStoresStoreIdGroupsGroupId1SetsSetIdTermsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdSitesSiteIdTermStoresStoreIdGroupsGroupId1SetsSetIdTermsTermIdChildrenCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdSitesSiteIdTermStoresStoreIdGroupsGroupId1SetsSetIdTermsTermIdChildrenTermId1RelationsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdSitesSiteIdTermStoresStoreIdGroupsGroupId1SetsSetIdTermsTermIdRelationsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getGroupsGroupIdSitesSiteIdTermStoresStoreIdSetsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdSitesSiteIdTermStoresStoreIdSetsSetIdChildrenCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getGroupsGroupIdSitesSiteIdTermStoresStoreIdSetsSetIdChildrenTermIdChildrenCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdSitesSiteIdTermStoresStoreIdSetsSetIdChildrenTermIdChildrenTermId1RelationsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdSitesSiteIdTermStoresStoreIdSetsSetIdChildrenTermIdRelationsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getGroupsGroupIdSitesSiteIdTermStoresStoreIdSetsSetIdParentGroupSetsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getGroupsGroupIdSitesSiteIdTermStoresStoreIdSetsSetIdParentGroupSetsSetId1ChildrenCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdSitesSiteIdTermStoresStoreIdSetsSetIdParentGroupSetsSetId1ChildrenTermIdChildrenCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdSitesSiteIdTermStoresStoreIdSetsSetIdParentGroupSetsSetId1ChildrenTermIdChildrenTermId1RelationsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdSitesSiteIdTermStoresStoreIdSetsSetIdParentGroupSetsSetId1ChildrenTermIdRelationsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdSitesSiteIdTermStoresStoreIdSetsSetIdParentGroupSetsSetId1RelationsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdSitesSiteIdTermStoresStoreIdSetsSetIdParentGroupSetsSetId1TermsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdSitesSiteIdTermStoresStoreIdSetsSetIdParentGroupSetsSetId1TermsTermIdChildrenCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdSitesSiteIdTermStoresStoreIdSetsSetIdParentGroupSetsSetId1TermsTermIdChildrenTermId1RelationsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdSitesSiteIdTermStoresStoreIdSetsSetIdParentGroupSetsSetId1TermsTermIdRelationsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getGroupsGroupIdSitesSiteIdTermStoresStoreIdSetsSetIdRelationsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdSitesSiteIdTermStoresStoreIdSetsSetIdTermsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getGroupsGroupIdSitesSiteIdTermStoresStoreIdSetsSetIdTermsTermIdChildrenCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdSitesSiteIdTermStoresStoreIdSetsSetIdTermsTermIdChildrenTermId1RelationsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdSitesSiteIdTermStoresStoreIdSetsSetIdTermsTermIdRelationsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getGroupsGroupIdTeamAllChannelsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamChannelsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamChannelsChannelIdMembersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamChannelsChannelIdMessagesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getGroupsGroupIdTeamChannelsChannelIdMessagesChatMessageIdHostedContentsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getGroupsGroupIdTeamChannelsChannelIdMessagesChatMessageIdRepliesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getGroupsGroupIdTeamChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getGroupsGroupIdTeamChannelsChannelIdSharedWithTeamsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getGroupsGroupIdTeamChannelsChannelIdSharedWithTeamsSharedWithChannelTeamInfoIdAllowedMembersCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getGroupsGroupIdTeamChannelsChannelIdTabsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamIncomingChannelsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamInstalledAppsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamMembersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamOperationsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamPrimaryChannelMembersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamPrimaryChannelMessagesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamPrimaryChannelMessagesChatMessageIdHostedContentsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamPrimaryChannelMessagesChatMessageIdRepliesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getGroupsGroupIdTeamPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1HostedContentsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getGroupsGroupIdTeamPrimaryChannelSharedWithTeamsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getGroupsGroupIdTeamPrimaryChannelSharedWithTeamsSharedWithChannelTeamInfoIdAllowedMembersCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getGroupsGroupIdTeamPrimaryChannelTabsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamScheduleOfferShiftRequestsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamScheduleOpenShiftChangeRequestsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamScheduleOpenShiftsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamScheduleSchedulingGroupsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamScheduleShiftsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamScheduleSwapShiftsChangeRequestsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamScheduleTimeOffReasonsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamScheduleTimeOffRequestsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamScheduleTimesOffCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamTagsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTeamTagsTeamworkTagIdMembersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdThreadsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdThreadsConversationThreadIdPostsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdThreadsConversationThreadIdPostsPostIdAttachmentsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdThreadsConversationThreadIdPostsPostIdExtensionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getGroupsGroupIdThreadsConversationThreadIdPostsPostIdInReplyToAttachmentsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdThreadsConversationThreadIdPostsPostIdInReplyToExtensionsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdThreadsConversationThreadIdPostsPostIdInReplyToMultiValueExtendedPropertiesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdThreadsConversationThreadIdPostsPostIdInReplyToSingleValueExtendedPropertiesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdThreadsConversationThreadIdPostsPostIdMultiValueExtendedPropertiesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdThreadsConversationThreadIdPostsPostIdSingleValueExtendedPropertiesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getGroupsGroupIdTransitiveMemberOfCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTransitiveMemberOfMicrosoftGraphApplicationCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTransitiveMemberOfMicrosoftGraphDeviceCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTransitiveMemberOfMicrosoftGraphGroupCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTransitiveMemberOfMicrosoftGraphOrgContactCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTransitiveMemberOfMicrosoftGraphServicePrincipalCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTransitiveMemberOfMicrosoftGraphUserCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTransitiveMembersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTransitiveMembersMicrosoftGraphApplicationCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTransitiveMembersMicrosoftGraphDeviceCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTransitiveMembersMicrosoftGraphGroupCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTransitiveMembersMicrosoftGraphOrgContactCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTransitiveMembersMicrosoftGraphServicePrincipalCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTransitiveMembersMicrosoftGraphUserCountRoute, (c) => {
    throw new Error('Not implemented')
  })
