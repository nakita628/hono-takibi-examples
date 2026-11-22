import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getMeActivitiesCountRoute,
  getMeActivitiesUserActivityIdHistoryItemsCountRoute,
  getMeAgreementAcceptancesCountRoute,
  getMeAppRoleAssignmentsCountRoute,
  getMeAuthenticationEmailMethodsCountRoute,
  getMeAuthenticationFido2MethodsCountRoute,
  getMeAuthenticationMethodsCountRoute,
  getMeAuthenticationMicrosoftAuthenticatorMethodsCountRoute,
  getMeAuthenticationOperationsCountRoute,
  getMeAuthenticationPasswordMethodsCountRoute,
  getMeAuthenticationPhoneMethodsCountRoute,
  getMeAuthenticationSoftwareOathMethodsCountRoute,
  getMeAuthenticationTemporaryAccessPassMethodsCountRoute,
  getMeAuthenticationWindowsHelloForBusinessMethodsCountRoute,
  getMeCalendarCalendarPermissionsCountRoute,
  getMeCalendarCalendarViewCountRoute,
  getMeCalendarCalendarViewEventIdAttachmentsCountRoute,
  getMeCalendarCalendarViewEventIdExtensionsCountRoute,
  getMeCalendarCalendarViewEventIdInstancesCountRoute,
  getMeCalendarCalendarViewEventIdInstancesEventId1AttachmentsCountRoute,
  getMeCalendarCalendarViewEventIdInstancesEventId1ExtensionsCountRoute,
  getMeCalendarCalendarViewEventIdInstancesEventId1MultiValueExtendedPropertiesCountRoute,
  getMeCalendarCalendarViewEventIdInstancesEventId1SingleValueExtendedPropertiesCountRoute,
  getMeCalendarCalendarViewEventIdMultiValueExtendedPropertiesCountRoute,
  getMeCalendarCalendarViewEventIdSingleValueExtendedPropertiesCountRoute,
  getMeCalendarEventsCountRoute,
  getMeCalendarEventsEventIdAttachmentsCountRoute,
  getMeCalendarEventsEventIdExtensionsCountRoute,
  getMeCalendarEventsEventIdInstancesCountRoute,
  getMeCalendarEventsEventIdInstancesEventId1AttachmentsCountRoute,
  getMeCalendarEventsEventIdInstancesEventId1ExtensionsCountRoute,
  getMeCalendarEventsEventIdInstancesEventId1MultiValueExtendedPropertiesCountRoute,
  getMeCalendarEventsEventIdInstancesEventId1SingleValueExtendedPropertiesCountRoute,
  getMeCalendarEventsEventIdMultiValueExtendedPropertiesCountRoute,
  getMeCalendarEventsEventIdSingleValueExtendedPropertiesCountRoute,
  getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarPermissionsCountRoute,
  getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewCountRoute,
  getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdAttachmentsCountRoute,
  getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdExtensionsCountRoute,
  getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdInstancesCountRoute,
  getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1AttachmentsCountRoute,
  getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1ExtensionsCountRoute,
  getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1MultiValueExtendedPropertiesCountRoute,
  getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1SingleValueExtendedPropertiesCountRoute,
  getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdMultiValueExtendedPropertiesCountRoute,
  getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdSingleValueExtendedPropertiesCountRoute,
  getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsCountRoute,
  getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdAttachmentsCountRoute,
  getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdExtensionsCountRoute,
  getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdInstancesCountRoute,
  getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdInstancesEventId1AttachmentsCountRoute,
  getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdInstancesEventId1ExtensionsCountRoute,
  getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdInstancesEventId1MultiValueExtendedPropertiesCountRoute,
  getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdInstancesEventId1SingleValueExtendedPropertiesCountRoute,
  getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdMultiValueExtendedPropertiesCountRoute,
  getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdSingleValueExtendedPropertiesCountRoute,
  getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdMultiValueExtendedPropertiesCountRoute,
  getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdSingleValueExtendedPropertiesCountRoute,
  getMeCalendarGroupsCalendarGroupIdCalendarsCountRoute,
  getMeCalendarGroupsCountRoute,
  getMeCalendarMultiValueExtendedPropertiesCountRoute,
  getMeCalendarsCalendarIdCalendarPermissionsCountRoute,
  getMeCalendarsCalendarIdCalendarViewCountRoute,
  getMeCalendarsCalendarIdCalendarViewEventIdAttachmentsCountRoute,
  getMeCalendarsCalendarIdCalendarViewEventIdExtensionsCountRoute,
  getMeCalendarsCalendarIdCalendarViewEventIdInstancesCountRoute,
  getMeCalendarsCalendarIdCalendarViewEventIdInstancesEventId1AttachmentsCountRoute,
  getMeCalendarsCalendarIdCalendarViewEventIdInstancesEventId1ExtensionsCountRoute,
  getMeCalendarsCalendarIdCalendarViewEventIdInstancesEventId1MultiValueExtendedPropertiesCountRoute,
  getMeCalendarsCalendarIdCalendarViewEventIdInstancesEventId1SingleValueExtendedPropertiesCountRoute,
  getMeCalendarsCalendarIdCalendarViewEventIdMultiValueExtendedPropertiesCountRoute,
  getMeCalendarsCalendarIdCalendarViewEventIdSingleValueExtendedPropertiesCountRoute,
  getMeCalendarsCalendarIdEventsCountRoute,
  getMeCalendarsCalendarIdEventsEventIdAttachmentsCountRoute,
  getMeCalendarsCalendarIdEventsEventIdExtensionsCountRoute,
  getMeCalendarsCalendarIdEventsEventIdInstancesCountRoute,
  getMeCalendarsCalendarIdEventsEventIdInstancesEventId1AttachmentsCountRoute,
  getMeCalendarsCalendarIdEventsEventIdInstancesEventId1ExtensionsCountRoute,
  getMeCalendarsCalendarIdEventsEventIdInstancesEventId1MultiValueExtendedPropertiesCountRoute,
  getMeCalendarsCalendarIdEventsEventIdInstancesEventId1SingleValueExtendedPropertiesCountRoute,
  getMeCalendarsCalendarIdEventsEventIdMultiValueExtendedPropertiesCountRoute,
  getMeCalendarsCalendarIdEventsEventIdSingleValueExtendedPropertiesCountRoute,
  getMeCalendarsCalendarIdMultiValueExtendedPropertiesCountRoute,
  getMeCalendarsCalendarIdSingleValueExtendedPropertiesCountRoute,
  getMeCalendarsCountRoute,
  getMeCalendarSingleValueExtendedPropertiesCountRoute,
  getMeCalendarViewCountRoute,
  getMeCalendarViewEventIdAttachmentsCountRoute,
  getMeCalendarViewEventIdExtensionsCountRoute,
  getMeCalendarViewEventIdInstancesCountRoute,
  getMeCalendarViewEventIdInstancesEventId1AttachmentsCountRoute,
  getMeCalendarViewEventIdInstancesEventId1ExtensionsCountRoute,
  getMeCalendarViewEventIdInstancesEventId1MultiValueExtendedPropertiesCountRoute,
  getMeCalendarViewEventIdInstancesEventId1SingleValueExtendedPropertiesCountRoute,
  getMeCalendarViewEventIdMultiValueExtendedPropertiesCountRoute,
  getMeCalendarViewEventIdSingleValueExtendedPropertiesCountRoute,
  getMeChatsChatIdInstalledAppsCountRoute,
  getMeChatsChatIdMembersCountRoute,
  getMeChatsChatIdMessagesChatMessageIdHostedContentsCountRoute,
  getMeChatsChatIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsCountRoute,
  getMeChatsChatIdMessagesChatMessageIdRepliesCountRoute,
  getMeChatsChatIdMessagesCountRoute,
  getMeChatsChatIdPinnedMessagesCountRoute,
  getMeChatsChatIdTabsCountRoute,
  getMeChatsCountRoute,
  getMeContactFoldersContactFolderIdChildFoldersContactFolderId1ContactsContactIdExtensionsCountRoute,
  getMeContactFoldersContactFolderIdChildFoldersContactFolderId1ContactsContactIdMultiValueExtendedPropertiesCountRoute,
  getMeContactFoldersContactFolderIdChildFoldersContactFolderId1ContactsContactIdSingleValueExtendedPropertiesCountRoute,
  getMeContactFoldersContactFolderIdChildFoldersContactFolderId1ContactsCountRoute,
  getMeContactFoldersContactFolderIdChildFoldersContactFolderId1MultiValueExtendedPropertiesCountRoute,
  getMeContactFoldersContactFolderIdChildFoldersContactFolderId1SingleValueExtendedPropertiesCountRoute,
  getMeContactFoldersContactFolderIdChildFoldersCountRoute,
  getMeContactFoldersContactFolderIdContactsContactIdExtensionsCountRoute,
  getMeContactFoldersContactFolderIdContactsContactIdMultiValueExtendedPropertiesCountRoute,
  getMeContactFoldersContactFolderIdContactsContactIdSingleValueExtendedPropertiesCountRoute,
  getMeContactFoldersContactFolderIdContactsCountRoute,
  getMeContactFoldersContactFolderIdMultiValueExtendedPropertiesCountRoute,
  getMeContactFoldersContactFolderIdSingleValueExtendedPropertiesCountRoute,
  getMeContactFoldersCountRoute,
  getMeContactsContactIdExtensionsCountRoute,
  getMeContactsContactIdMultiValueExtendedPropertiesCountRoute,
  getMeContactsContactIdSingleValueExtendedPropertiesCountRoute,
  getMeContactsCountRoute,
  getMeCreatedObjectsCountRoute,
  getMeCreatedObjectsMicrosoftGraphServicePrincipalCountRoute,
  getMeDeviceManagementTroubleshootingEventsCountRoute,
  getMeDirectReportsCountRoute,
  getMeDirectReportsMicrosoftGraphOrgContactCountRoute,
  getMeDirectReportsMicrosoftGraphUserCountRoute,
  getMeDrivesCountRoute,
  getMeEventsCountRoute,
  getMeEventsEventIdAttachmentsCountRoute,
  getMeEventsEventIdExtensionsCountRoute,
  getMeEventsEventIdInstancesCountRoute,
  getMeEventsEventIdInstancesEventId1AttachmentsCountRoute,
  getMeEventsEventIdInstancesEventId1ExtensionsCountRoute,
  getMeEventsEventIdInstancesEventId1MultiValueExtendedPropertiesCountRoute,
  getMeEventsEventIdInstancesEventId1SingleValueExtendedPropertiesCountRoute,
  getMeEventsEventIdMultiValueExtendedPropertiesCountRoute,
  getMeEventsEventIdSingleValueExtendedPropertiesCountRoute,
  getMeExtensionsCountRoute,
  getMeFollowedSitesCountRoute,
  getMeInferenceClassificationOverridesCountRoute,
  getMeInsightsSharedCountRoute,
  getMeInsightsTrendingCountRoute,
  getMeInsightsUsedCountRoute,
  getMeJoinedTeamsCountRoute,
  getMeJoinedTeamsTeamIdAllChannelsCountRoute,
  getMeJoinedTeamsTeamIdChannelsChannelIdMembersCountRoute,
  getMeJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdHostedContentsCountRoute,
  getMeJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsCountRoute,
  getMeJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesCountRoute,
  getMeJoinedTeamsTeamIdChannelsChannelIdMessagesCountRoute,
  getMeJoinedTeamsTeamIdChannelsChannelIdSharedWithTeamsCountRoute,
  getMeJoinedTeamsTeamIdChannelsChannelIdSharedWithTeamsSharedWithChannelTeamInfoIdAllowedMembersCountRoute,
  getMeJoinedTeamsTeamIdChannelsChannelIdTabsCountRoute,
  getMeJoinedTeamsTeamIdChannelsCountRoute,
  getMeJoinedTeamsTeamIdIncomingChannelsCountRoute,
  getMeJoinedTeamsTeamIdInstalledAppsCountRoute,
  getMeJoinedTeamsTeamIdMembersCountRoute,
  getMeJoinedTeamsTeamIdOperationsCountRoute,
  getMeJoinedTeamsTeamIdPrimaryChannelMembersCountRoute,
  getMeJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdHostedContentsCountRoute,
  getMeJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1HostedContentsCountRoute,
  getMeJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesCountRoute,
  getMeJoinedTeamsTeamIdPrimaryChannelMessagesCountRoute,
  getMeJoinedTeamsTeamIdPrimaryChannelSharedWithTeamsCountRoute,
  getMeJoinedTeamsTeamIdPrimaryChannelSharedWithTeamsSharedWithChannelTeamInfoIdAllowedMembersCountRoute,
  getMeJoinedTeamsTeamIdPrimaryChannelTabsCountRoute,
  getMeJoinedTeamsTeamIdScheduleOfferShiftRequestsCountRoute,
  getMeJoinedTeamsTeamIdScheduleOpenShiftChangeRequestsCountRoute,
  getMeJoinedTeamsTeamIdScheduleOpenShiftsCountRoute,
  getMeJoinedTeamsTeamIdScheduleSchedulingGroupsCountRoute,
  getMeJoinedTeamsTeamIdScheduleShiftsCountRoute,
  getMeJoinedTeamsTeamIdScheduleSwapShiftsChangeRequestsCountRoute,
  getMeJoinedTeamsTeamIdScheduleTimeOffReasonsCountRoute,
  getMeJoinedTeamsTeamIdScheduleTimeOffRequestsCountRoute,
  getMeJoinedTeamsTeamIdScheduleTimesOffCountRoute,
  getMeJoinedTeamsTeamIdTagsCountRoute,
  getMeJoinedTeamsTeamIdTagsTeamworkTagIdMembersCountRoute,
  getMeLicenseDetailsCountRoute,
  getMeMailFoldersCountRoute,
  getMeMailFoldersMailFolderIdChildFoldersCountRoute,
  getMeMailFoldersMailFolderIdChildFoldersMailFolderId1MessageRulesCountRoute,
  getMeMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesCountRoute,
  getMeMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMessageIdAttachmentsCountRoute,
  getMeMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMessageIdExtensionsCountRoute,
  getMeMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMessageIdMultiValueExtendedPropertiesCountRoute,
  getMeMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMessageIdSingleValueExtendedPropertiesCountRoute,
  getMeMailFoldersMailFolderIdChildFoldersMailFolderId1MultiValueExtendedPropertiesCountRoute,
  getMeMailFoldersMailFolderIdChildFoldersMailFolderId1SingleValueExtendedPropertiesCountRoute,
  getMeMailFoldersMailFolderIdMessageRulesCountRoute,
  getMeMailFoldersMailFolderIdMessagesCountRoute,
  getMeMailFoldersMailFolderIdMessagesMessageIdAttachmentsCountRoute,
  getMeMailFoldersMailFolderIdMessagesMessageIdExtensionsCountRoute,
  getMeMailFoldersMailFolderIdMessagesMessageIdMultiValueExtendedPropertiesCountRoute,
  getMeMailFoldersMailFolderIdMessagesMessageIdSingleValueExtendedPropertiesCountRoute,
  getMeMailFoldersMailFolderIdMultiValueExtendedPropertiesCountRoute,
  getMeMailFoldersMailFolderIdSingleValueExtendedPropertiesCountRoute,
  getMeManagedAppRegistrationsCountRoute,
  getMeManagedDevicesCountRoute,
  getMeManagedDevicesManagedDeviceIdDeviceCompliancePolicyStatesCountRoute,
  getMeManagedDevicesManagedDeviceIdDeviceConfigurationStatesCountRoute,
  getMeMemberOfCountRoute,
  getMeMemberOfMicrosoftGraphApplicationCountRoute,
  getMeMemberOfMicrosoftGraphDeviceCountRoute,
  getMeMemberOfMicrosoftGraphGroupCountRoute,
  getMeMemberOfMicrosoftGraphOrgContactCountRoute,
  getMeMemberOfMicrosoftGraphServicePrincipalCountRoute,
  getMeMemberOfMicrosoftGraphUserCountRoute,
  getMeMessagesCountRoute,
  getMeMessagesMessageIdAttachmentsCountRoute,
  getMeMessagesMessageIdExtensionsCountRoute,
  getMeMessagesMessageIdMultiValueExtendedPropertiesCountRoute,
  getMeMessagesMessageIdSingleValueExtendedPropertiesCountRoute,
  getMeOauth2PermissionGrantsCountRoute,
  getMeOnenoteNotebooksCountRoute,
  getMeOnenoteNotebooksNotebookIdSectionGroupsCountRoute,
  getMeOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionGroupsCountRoute,
  getMeOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsCountRoute,
  getMeOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesCountRoute,
  getMeOnenoteNotebooksNotebookIdSectionsCountRoute,
  getMeOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdPagesCountRoute,
  getMeOnenoteOperationsCountRoute,
  getMeOnenotePagesCountRoute,
  getMeOnenoteResourcesCountRoute,
  getMeOnenoteSectionGroupsCountRoute,
  getMeOnenoteSectionGroupsSectionGroupIdSectionGroupsCountRoute,
  getMeOnenoteSectionGroupsSectionGroupIdSectionsCountRoute,
  getMeOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesCountRoute,
  getMeOnenoteSectionsCountRoute,
  getMeOnenoteSectionsOnenoteSectionIdPagesCountRoute,
  getMeOnlineMeetingsCountRoute,
  getMeOnlineMeetingsOnlineMeetingIdAttendanceReportsCountRoute,
  getMeOnlineMeetingsOnlineMeetingIdAttendanceReportsMeetingAttendanceReportIdAttendanceRecordsCountRoute,
  getMeOutlookMasterCategoriesCountRoute,
  getMeOwnedDevicesCountRoute,
  getMeOwnedDevicesMicrosoftGraphAppRoleAssignmentCountRoute,
  getMeOwnedDevicesMicrosoftGraphDeviceCountRoute,
  getMeOwnedDevicesMicrosoftGraphEndpointCountRoute,
  getMeOwnedObjectsCountRoute,
  getMeOwnedObjectsMicrosoftGraphApplicationCountRoute,
  getMeOwnedObjectsMicrosoftGraphGroupCountRoute,
  getMeOwnedObjectsMicrosoftGraphServicePrincipalCountRoute,
  getMePeopleCountRoute,
  getMePhotosCountRoute,
  getMePlannerPlansCountRoute,
  getMePlannerPlansPlannerPlanIdBucketsCountRoute,
  getMePlannerPlansPlannerPlanIdBucketsPlannerBucketIdTasksCountRoute,
  getMePlannerPlansPlannerPlanIdTasksCountRoute,
  getMePlannerTasksCountRoute,
  getMeRegisteredDevicesCountRoute,
  getMeRegisteredDevicesMicrosoftGraphAppRoleAssignmentCountRoute,
  getMeRegisteredDevicesMicrosoftGraphDeviceCountRoute,
  getMeRegisteredDevicesMicrosoftGraphEndpointCountRoute,
  getMeScopedRoleMemberOfCountRoute,
  getMeTeamworkAssociatedTeamsCountRoute,
  getMeTeamworkInstalledAppsCountRoute,
  getMeTodoListsCountRoute,
  getMeTodoListsTodoTaskListIdExtensionsCountRoute,
  getMeTodoListsTodoTaskListIdTasksCountRoute,
  getMeTodoListsTodoTaskListIdTasksTodoTaskIdAttachmentsCountRoute,
  getMeTodoListsTodoTaskListIdTasksTodoTaskIdAttachmentSessionsCountRoute,
  getMeTodoListsTodoTaskListIdTasksTodoTaskIdChecklistItemsCountRoute,
  getMeTodoListsTodoTaskListIdTasksTodoTaskIdExtensionsCountRoute,
  getMeTodoListsTodoTaskListIdTasksTodoTaskIdLinkedResourcesCountRoute,
  getMeTransitiveMemberOfCountRoute,
  getMeTransitiveMemberOfMicrosoftGraphApplicationCountRoute,
  getMeTransitiveMemberOfMicrosoftGraphDeviceCountRoute,
  getMeTransitiveMemberOfMicrosoftGraphGroupCountRoute,
  getMeTransitiveMemberOfMicrosoftGraphOrgContactCountRoute,
  getMeTransitiveMemberOfMicrosoftGraphServicePrincipalCountRoute,
  getMeTransitiveMemberOfMicrosoftGraphUserCountRoute,
} from '../routes'

const app = new OpenAPIHono()

export const meHandler = app
  .openapi(getMeActivitiesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeActivitiesUserActivityIdHistoryItemsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeAgreementAcceptancesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeAppRoleAssignmentsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeAuthenticationEmailMethodsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeAuthenticationFido2MethodsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeAuthenticationMethodsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeAuthenticationMicrosoftAuthenticatorMethodsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeAuthenticationOperationsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeAuthenticationPasswordMethodsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeAuthenticationPhoneMethodsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeAuthenticationSoftwareOathMethodsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeAuthenticationTemporaryAccessPassMethodsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeAuthenticationWindowsHelloForBusinessMethodsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarCalendarPermissionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarCalendarViewCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarCalendarViewEventIdAttachmentsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarCalendarViewEventIdExtensionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarCalendarViewEventIdInstancesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarCalendarViewEventIdInstancesEventId1AttachmentsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarCalendarViewEventIdInstancesEventId1ExtensionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getMeCalendarCalendarViewEventIdInstancesEventId1MultiValueExtendedPropertiesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeCalendarCalendarViewEventIdInstancesEventId1SingleValueExtendedPropertiesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getMeCalendarCalendarViewEventIdMultiValueExtendedPropertiesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarCalendarViewEventIdSingleValueExtendedPropertiesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarEventsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarEventsEventIdAttachmentsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarEventsEventIdExtensionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarEventsEventIdInstancesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarEventsEventIdInstancesEventId1AttachmentsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarEventsEventIdInstancesEventId1ExtensionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getMeCalendarEventsEventIdInstancesEventId1MultiValueExtendedPropertiesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeCalendarEventsEventIdInstancesEventId1SingleValueExtendedPropertiesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getMeCalendarEventsEventIdMultiValueExtendedPropertiesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarEventsEventIdSingleValueExtendedPropertiesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarMultiValueExtendedPropertiesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarSingleValueExtendedPropertiesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarGroupsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarGroupsCalendarGroupIdCalendarsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarPermissionsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdAttachmentsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdExtensionsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdInstancesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1AttachmentsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1ExtensionsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1MultiValueExtendedPropertiesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1SingleValueExtendedPropertiesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdMultiValueExtendedPropertiesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdSingleValueExtendedPropertiesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdAttachmentsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdExtensionsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdInstancesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdInstancesEventId1AttachmentsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdInstancesEventId1ExtensionsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdInstancesEventId1MultiValueExtendedPropertiesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdInstancesEventId1SingleValueExtendedPropertiesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdMultiValueExtendedPropertiesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdSingleValueExtendedPropertiesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdMultiValueExtendedPropertiesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdSingleValueExtendedPropertiesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getMeCalendarViewCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarViewEventIdAttachmentsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarViewEventIdExtensionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarViewEventIdInstancesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarViewEventIdInstancesEventId1AttachmentsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarViewEventIdInstancesEventId1ExtensionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarViewEventIdInstancesEventId1MultiValueExtendedPropertiesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getMeCalendarViewEventIdInstancesEventId1SingleValueExtendedPropertiesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getMeCalendarViewEventIdMultiValueExtendedPropertiesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarViewEventIdSingleValueExtendedPropertiesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarsCalendarIdCalendarPermissionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarsCalendarIdCalendarViewCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarsCalendarIdCalendarViewEventIdAttachmentsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarsCalendarIdCalendarViewEventIdExtensionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarsCalendarIdCalendarViewEventIdInstancesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getMeCalendarsCalendarIdCalendarViewEventIdInstancesEventId1AttachmentsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeCalendarsCalendarIdCalendarViewEventIdInstancesEventId1ExtensionsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeCalendarsCalendarIdCalendarViewEventIdInstancesEventId1MultiValueExtendedPropertiesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeCalendarsCalendarIdCalendarViewEventIdInstancesEventId1SingleValueExtendedPropertiesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeCalendarsCalendarIdCalendarViewEventIdMultiValueExtendedPropertiesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeCalendarsCalendarIdCalendarViewEventIdSingleValueExtendedPropertiesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getMeCalendarsCalendarIdEventsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarsCalendarIdEventsEventIdAttachmentsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarsCalendarIdEventsEventIdExtensionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarsCalendarIdEventsEventIdInstancesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarsCalendarIdEventsEventIdInstancesEventId1AttachmentsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarsCalendarIdEventsEventIdInstancesEventId1ExtensionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getMeCalendarsCalendarIdEventsEventIdInstancesEventId1MultiValueExtendedPropertiesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeCalendarsCalendarIdEventsEventIdInstancesEventId1SingleValueExtendedPropertiesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getMeCalendarsCalendarIdEventsEventIdMultiValueExtendedPropertiesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarsCalendarIdEventsEventIdSingleValueExtendedPropertiesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarsCalendarIdMultiValueExtendedPropertiesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarsCalendarIdSingleValueExtendedPropertiesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeChatsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeChatsChatIdInstalledAppsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeChatsChatIdMembersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeChatsChatIdMessagesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeChatsChatIdMessagesChatMessageIdHostedContentsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeChatsChatIdMessagesChatMessageIdRepliesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getMeChatsChatIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getMeChatsChatIdPinnedMessagesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeChatsChatIdTabsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeContactFoldersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeContactFoldersContactFolderIdChildFoldersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getMeContactFoldersContactFolderIdChildFoldersContactFolderId1ContactsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeContactFoldersContactFolderIdChildFoldersContactFolderId1ContactsContactIdExtensionsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeContactFoldersContactFolderIdChildFoldersContactFolderId1ContactsContactIdMultiValueExtendedPropertiesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeContactFoldersContactFolderIdChildFoldersContactFolderId1ContactsContactIdSingleValueExtendedPropertiesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeContactFoldersContactFolderIdChildFoldersContactFolderId1MultiValueExtendedPropertiesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeContactFoldersContactFolderIdChildFoldersContactFolderId1SingleValueExtendedPropertiesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getMeContactFoldersContactFolderIdContactsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeContactFoldersContactFolderIdContactsContactIdExtensionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getMeContactFoldersContactFolderIdContactsContactIdMultiValueExtendedPropertiesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeContactFoldersContactFolderIdContactsContactIdSingleValueExtendedPropertiesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getMeContactFoldersContactFolderIdMultiValueExtendedPropertiesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeContactFoldersContactFolderIdSingleValueExtendedPropertiesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeContactsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeContactsContactIdExtensionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeContactsContactIdMultiValueExtendedPropertiesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeContactsContactIdSingleValueExtendedPropertiesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCreatedObjectsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCreatedObjectsMicrosoftGraphServicePrincipalCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeDeviceManagementTroubleshootingEventsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeDirectReportsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeDirectReportsMicrosoftGraphOrgContactCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeDirectReportsMicrosoftGraphUserCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeDrivesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeEventsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeEventsEventIdAttachmentsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeEventsEventIdExtensionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeEventsEventIdInstancesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeEventsEventIdInstancesEventId1AttachmentsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeEventsEventIdInstancesEventId1ExtensionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeEventsEventIdInstancesEventId1MultiValueExtendedPropertiesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeEventsEventIdInstancesEventId1SingleValueExtendedPropertiesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeEventsEventIdMultiValueExtendedPropertiesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeEventsEventIdSingleValueExtendedPropertiesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeExtensionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeFollowedSitesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeInferenceClassificationOverridesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeInsightsSharedCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeInsightsTrendingCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeInsightsUsedCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdAllChannelsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdChannelsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdChannelsChannelIdMembersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdChannelsChannelIdMessagesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getMeJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdHostedContentsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getMeJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getMeJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getMeJoinedTeamsTeamIdChannelsChannelIdSharedWithTeamsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getMeJoinedTeamsTeamIdChannelsChannelIdSharedWithTeamsSharedWithChannelTeamInfoIdAllowedMembersCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getMeJoinedTeamsTeamIdChannelsChannelIdTabsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdIncomingChannelsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdInstalledAppsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdMembersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdOperationsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdPrimaryChannelMembersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdPrimaryChannelMessagesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getMeJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdHostedContentsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getMeJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getMeJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1HostedContentsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getMeJoinedTeamsTeamIdPrimaryChannelSharedWithTeamsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getMeJoinedTeamsTeamIdPrimaryChannelSharedWithTeamsSharedWithChannelTeamInfoIdAllowedMembersCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getMeJoinedTeamsTeamIdPrimaryChannelTabsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdScheduleOfferShiftRequestsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdScheduleOpenShiftChangeRequestsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdScheduleOpenShiftsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdScheduleSchedulingGroupsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdScheduleShiftsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdScheduleSwapShiftsChangeRequestsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdScheduleTimeOffReasonsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdScheduleTimeOffRequestsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdScheduleTimesOffCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdTagsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdTagsTeamworkTagIdMembersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeLicenseDetailsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeMailFoldersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeMailFoldersMailFolderIdChildFoldersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeMailFoldersMailFolderIdChildFoldersMailFolderId1MessageRulesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getMeMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMessageIdAttachmentsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMessageIdExtensionsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMessageIdMultiValueExtendedPropertiesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMessageIdSingleValueExtendedPropertiesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeMailFoldersMailFolderIdChildFoldersMailFolderId1MultiValueExtendedPropertiesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeMailFoldersMailFolderIdChildFoldersMailFolderId1SingleValueExtendedPropertiesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getMeMailFoldersMailFolderIdMessageRulesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeMailFoldersMailFolderIdMessagesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeMailFoldersMailFolderIdMessagesMessageIdAttachmentsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeMailFoldersMailFolderIdMessagesMessageIdExtensionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getMeMailFoldersMailFolderIdMessagesMessageIdMultiValueExtendedPropertiesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeMailFoldersMailFolderIdMessagesMessageIdSingleValueExtendedPropertiesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getMeMailFoldersMailFolderIdMultiValueExtendedPropertiesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeMailFoldersMailFolderIdSingleValueExtendedPropertiesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeManagedAppRegistrationsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeManagedDevicesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeManagedDevicesManagedDeviceIdDeviceCompliancePolicyStatesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeManagedDevicesManagedDeviceIdDeviceConfigurationStatesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeMemberOfCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeMemberOfMicrosoftGraphApplicationCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeMemberOfMicrosoftGraphDeviceCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeMemberOfMicrosoftGraphGroupCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeMemberOfMicrosoftGraphOrgContactCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeMemberOfMicrosoftGraphServicePrincipalCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeMemberOfMicrosoftGraphUserCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeMessagesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeMessagesMessageIdAttachmentsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeMessagesMessageIdExtensionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeMessagesMessageIdMultiValueExtendedPropertiesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeMessagesMessageIdSingleValueExtendedPropertiesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeOauth2PermissionGrantsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeOnenoteNotebooksCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeOnenoteNotebooksNotebookIdSectionGroupsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getMeOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionGroupsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getMeOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getMeOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getMeOnenoteNotebooksNotebookIdSectionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdPagesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeOnenoteOperationsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeOnenotePagesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeOnenoteResourcesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeOnenoteSectionGroupsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeOnenoteSectionGroupsSectionGroupIdSectionGroupsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeOnenoteSectionGroupsSectionGroupIdSectionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeOnenoteSectionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeOnenoteSectionsOnenoteSectionIdPagesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeOnlineMeetingsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeOnlineMeetingsOnlineMeetingIdAttendanceReportsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getMeOnlineMeetingsOnlineMeetingIdAttendanceReportsMeetingAttendanceReportIdAttendanceRecordsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getMeOutlookMasterCategoriesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeOwnedDevicesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeOwnedDevicesMicrosoftGraphAppRoleAssignmentCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeOwnedDevicesMicrosoftGraphDeviceCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeOwnedDevicesMicrosoftGraphEndpointCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeOwnedObjectsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeOwnedObjectsMicrosoftGraphApplicationCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeOwnedObjectsMicrosoftGraphGroupCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeOwnedObjectsMicrosoftGraphServicePrincipalCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMePeopleCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMePhotosCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMePlannerPlansCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMePlannerPlansPlannerPlanIdBucketsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMePlannerPlansPlannerPlanIdBucketsPlannerBucketIdTasksCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMePlannerPlansPlannerPlanIdTasksCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMePlannerTasksCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeRegisteredDevicesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeRegisteredDevicesMicrosoftGraphAppRoleAssignmentCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeRegisteredDevicesMicrosoftGraphDeviceCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeRegisteredDevicesMicrosoftGraphEndpointCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeScopedRoleMemberOfCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeTeamworkAssociatedTeamsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeTeamworkInstalledAppsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeTodoListsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeTodoListsTodoTaskListIdExtensionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeTodoListsTodoTaskListIdTasksCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeTodoListsTodoTaskListIdTasksTodoTaskIdAttachmentSessionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeTodoListsTodoTaskListIdTasksTodoTaskIdAttachmentsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeTodoListsTodoTaskListIdTasksTodoTaskIdChecklistItemsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeTodoListsTodoTaskListIdTasksTodoTaskIdExtensionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeTodoListsTodoTaskListIdTasksTodoTaskIdLinkedResourcesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeTransitiveMemberOfCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeTransitiveMemberOfMicrosoftGraphApplicationCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeTransitiveMemberOfMicrosoftGraphDeviceCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeTransitiveMemberOfMicrosoftGraphGroupCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeTransitiveMemberOfMicrosoftGraphOrgContactCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeTransitiveMemberOfMicrosoftGraphServicePrincipalCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeTransitiveMemberOfMicrosoftGraphUserCountRoute, (c) => {
    throw new Error('Not implemented')
  })
