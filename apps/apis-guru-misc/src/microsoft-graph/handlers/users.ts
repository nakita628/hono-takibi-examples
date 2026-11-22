import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getUsersCountRoute,
  getUsersUserIdActivitiesCountRoute,
  getUsersUserIdActivitiesUserActivityIdHistoryItemsCountRoute,
  getUsersUserIdAgreementAcceptancesCountRoute,
  getUsersUserIdAppRoleAssignmentsCountRoute,
  getUsersUserIdAuthenticationEmailMethodsCountRoute,
  getUsersUserIdAuthenticationFido2MethodsCountRoute,
  getUsersUserIdAuthenticationMethodsCountRoute,
  getUsersUserIdAuthenticationMicrosoftAuthenticatorMethodsCountRoute,
  getUsersUserIdAuthenticationOperationsCountRoute,
  getUsersUserIdAuthenticationPasswordMethodsCountRoute,
  getUsersUserIdAuthenticationPhoneMethodsCountRoute,
  getUsersUserIdAuthenticationSoftwareOathMethodsCountRoute,
  getUsersUserIdAuthenticationTemporaryAccessPassMethodsCountRoute,
  getUsersUserIdAuthenticationWindowsHelloForBusinessMethodsCountRoute,
  getUsersUserIdCalendarCalendarPermissionsCountRoute,
  getUsersUserIdCalendarCalendarViewCountRoute,
  getUsersUserIdCalendarCalendarViewEventIdAttachmentsCountRoute,
  getUsersUserIdCalendarCalendarViewEventIdExtensionsCountRoute,
  getUsersUserIdCalendarCalendarViewEventIdInstancesCountRoute,
  getUsersUserIdCalendarCalendarViewEventIdInstancesEventId1AttachmentsCountRoute,
  getUsersUserIdCalendarCalendarViewEventIdInstancesEventId1ExtensionsCountRoute,
  getUsersUserIdCalendarCalendarViewEventIdInstancesEventId1MultiValueExtendedPropertiesCountRoute,
  getUsersUserIdCalendarCalendarViewEventIdInstancesEventId1SingleValueExtendedPropertiesCountRoute,
  getUsersUserIdCalendarCalendarViewEventIdMultiValueExtendedPropertiesCountRoute,
  getUsersUserIdCalendarCalendarViewEventIdSingleValueExtendedPropertiesCountRoute,
  getUsersUserIdCalendarEventsCountRoute,
  getUsersUserIdCalendarEventsEventIdAttachmentsCountRoute,
  getUsersUserIdCalendarEventsEventIdExtensionsCountRoute,
  getUsersUserIdCalendarEventsEventIdInstancesCountRoute,
  getUsersUserIdCalendarEventsEventIdInstancesEventId1AttachmentsCountRoute,
  getUsersUserIdCalendarEventsEventIdInstancesEventId1ExtensionsCountRoute,
  getUsersUserIdCalendarEventsEventIdInstancesEventId1MultiValueExtendedPropertiesCountRoute,
  getUsersUserIdCalendarEventsEventIdInstancesEventId1SingleValueExtendedPropertiesCountRoute,
  getUsersUserIdCalendarEventsEventIdMultiValueExtendedPropertiesCountRoute,
  getUsersUserIdCalendarEventsEventIdSingleValueExtendedPropertiesCountRoute,
  getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarPermissionsCountRoute,
  getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewCountRoute,
  getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdAttachmentsCountRoute,
  getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdExtensionsCountRoute,
  getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdInstancesCountRoute,
  getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1AttachmentsCountRoute,
  getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1ExtensionsCountRoute,
  getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1MultiValueExtendedPropertiesCountRoute,
  getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1SingleValueExtendedPropertiesCountRoute,
  getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdMultiValueExtendedPropertiesCountRoute,
  getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdSingleValueExtendedPropertiesCountRoute,
  getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsCountRoute,
  getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdAttachmentsCountRoute,
  getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdExtensionsCountRoute,
  getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdInstancesCountRoute,
  getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdInstancesEventId1AttachmentsCountRoute,
  getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdInstancesEventId1ExtensionsCountRoute,
  getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdInstancesEventId1MultiValueExtendedPropertiesCountRoute,
  getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdInstancesEventId1SingleValueExtendedPropertiesCountRoute,
  getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdMultiValueExtendedPropertiesCountRoute,
  getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdSingleValueExtendedPropertiesCountRoute,
  getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdMultiValueExtendedPropertiesCountRoute,
  getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdSingleValueExtendedPropertiesCountRoute,
  getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCountRoute,
  getUsersUserIdCalendarGroupsCountRoute,
  getUsersUserIdCalendarMultiValueExtendedPropertiesCountRoute,
  getUsersUserIdCalendarsCalendarIdCalendarPermissionsCountRoute,
  getUsersUserIdCalendarsCalendarIdCalendarViewCountRoute,
  getUsersUserIdCalendarsCalendarIdCalendarViewEventIdAttachmentsCountRoute,
  getUsersUserIdCalendarsCalendarIdCalendarViewEventIdExtensionsCountRoute,
  getUsersUserIdCalendarsCalendarIdCalendarViewEventIdInstancesCountRoute,
  getUsersUserIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1AttachmentsCountRoute,
  getUsersUserIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1ExtensionsCountRoute,
  getUsersUserIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1MultiValueExtendedPropertiesCountRoute,
  getUsersUserIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1SingleValueExtendedPropertiesCountRoute,
  getUsersUserIdCalendarsCalendarIdCalendarViewEventIdMultiValueExtendedPropertiesCountRoute,
  getUsersUserIdCalendarsCalendarIdCalendarViewEventIdSingleValueExtendedPropertiesCountRoute,
  getUsersUserIdCalendarsCalendarIdEventsCountRoute,
  getUsersUserIdCalendarsCalendarIdEventsEventIdAttachmentsCountRoute,
  getUsersUserIdCalendarsCalendarIdEventsEventIdExtensionsCountRoute,
  getUsersUserIdCalendarsCalendarIdEventsEventIdInstancesCountRoute,
  getUsersUserIdCalendarsCalendarIdEventsEventIdInstancesEventId1AttachmentsCountRoute,
  getUsersUserIdCalendarsCalendarIdEventsEventIdInstancesEventId1ExtensionsCountRoute,
  getUsersUserIdCalendarsCalendarIdEventsEventIdInstancesEventId1MultiValueExtendedPropertiesCountRoute,
  getUsersUserIdCalendarsCalendarIdEventsEventIdInstancesEventId1SingleValueExtendedPropertiesCountRoute,
  getUsersUserIdCalendarsCalendarIdEventsEventIdMultiValueExtendedPropertiesCountRoute,
  getUsersUserIdCalendarsCalendarIdEventsEventIdSingleValueExtendedPropertiesCountRoute,
  getUsersUserIdCalendarsCalendarIdMultiValueExtendedPropertiesCountRoute,
  getUsersUserIdCalendarsCalendarIdSingleValueExtendedPropertiesCountRoute,
  getUsersUserIdCalendarsCountRoute,
  getUsersUserIdCalendarSingleValueExtendedPropertiesCountRoute,
  getUsersUserIdCalendarViewCountRoute,
  getUsersUserIdCalendarViewEventIdAttachmentsCountRoute,
  getUsersUserIdCalendarViewEventIdExtensionsCountRoute,
  getUsersUserIdCalendarViewEventIdInstancesCountRoute,
  getUsersUserIdCalendarViewEventIdInstancesEventId1AttachmentsCountRoute,
  getUsersUserIdCalendarViewEventIdInstancesEventId1ExtensionsCountRoute,
  getUsersUserIdCalendarViewEventIdInstancesEventId1MultiValueExtendedPropertiesCountRoute,
  getUsersUserIdCalendarViewEventIdInstancesEventId1SingleValueExtendedPropertiesCountRoute,
  getUsersUserIdCalendarViewEventIdMultiValueExtendedPropertiesCountRoute,
  getUsersUserIdCalendarViewEventIdSingleValueExtendedPropertiesCountRoute,
  getUsersUserIdChatsChatIdInstalledAppsCountRoute,
  getUsersUserIdChatsChatIdMembersCountRoute,
  getUsersUserIdChatsChatIdMessagesChatMessageIdHostedContentsCountRoute,
  getUsersUserIdChatsChatIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsCountRoute,
  getUsersUserIdChatsChatIdMessagesChatMessageIdRepliesCountRoute,
  getUsersUserIdChatsChatIdMessagesCountRoute,
  getUsersUserIdChatsChatIdPinnedMessagesCountRoute,
  getUsersUserIdChatsChatIdTabsCountRoute,
  getUsersUserIdChatsCountRoute,
  getUsersUserIdContactFoldersContactFolderIdChildFoldersContactFolderId1ContactsContactIdExtensionsCountRoute,
  getUsersUserIdContactFoldersContactFolderIdChildFoldersContactFolderId1ContactsContactIdMultiValueExtendedPropertiesCountRoute,
  getUsersUserIdContactFoldersContactFolderIdChildFoldersContactFolderId1ContactsContactIdSingleValueExtendedPropertiesCountRoute,
  getUsersUserIdContactFoldersContactFolderIdChildFoldersContactFolderId1ContactsCountRoute,
  getUsersUserIdContactFoldersContactFolderIdChildFoldersContactFolderId1MultiValueExtendedPropertiesCountRoute,
  getUsersUserIdContactFoldersContactFolderIdChildFoldersContactFolderId1SingleValueExtendedPropertiesCountRoute,
  getUsersUserIdContactFoldersContactFolderIdChildFoldersCountRoute,
  getUsersUserIdContactFoldersContactFolderIdContactsContactIdExtensionsCountRoute,
  getUsersUserIdContactFoldersContactFolderIdContactsContactIdMultiValueExtendedPropertiesCountRoute,
  getUsersUserIdContactFoldersContactFolderIdContactsContactIdSingleValueExtendedPropertiesCountRoute,
  getUsersUserIdContactFoldersContactFolderIdContactsCountRoute,
  getUsersUserIdContactFoldersContactFolderIdMultiValueExtendedPropertiesCountRoute,
  getUsersUserIdContactFoldersContactFolderIdSingleValueExtendedPropertiesCountRoute,
  getUsersUserIdContactFoldersCountRoute,
  getUsersUserIdContactsContactIdExtensionsCountRoute,
  getUsersUserIdContactsContactIdMultiValueExtendedPropertiesCountRoute,
  getUsersUserIdContactsContactIdSingleValueExtendedPropertiesCountRoute,
  getUsersUserIdContactsCountRoute,
  getUsersUserIdCreatedObjectsCountRoute,
  getUsersUserIdCreatedObjectsMicrosoftGraphServicePrincipalCountRoute,
  getUsersUserIdDeviceManagementTroubleshootingEventsCountRoute,
  getUsersUserIdDirectReportsCountRoute,
  getUsersUserIdDirectReportsMicrosoftGraphOrgContactCountRoute,
  getUsersUserIdDirectReportsMicrosoftGraphUserCountRoute,
  getUsersUserIdDrivesCountRoute,
  getUsersUserIdEventsCountRoute,
  getUsersUserIdEventsEventIdAttachmentsCountRoute,
  getUsersUserIdEventsEventIdExtensionsCountRoute,
  getUsersUserIdEventsEventIdInstancesCountRoute,
  getUsersUserIdEventsEventIdInstancesEventId1AttachmentsCountRoute,
  getUsersUserIdEventsEventIdInstancesEventId1ExtensionsCountRoute,
  getUsersUserIdEventsEventIdInstancesEventId1MultiValueExtendedPropertiesCountRoute,
  getUsersUserIdEventsEventIdInstancesEventId1SingleValueExtendedPropertiesCountRoute,
  getUsersUserIdEventsEventIdMultiValueExtendedPropertiesCountRoute,
  getUsersUserIdEventsEventIdSingleValueExtendedPropertiesCountRoute,
  getUsersUserIdExtensionsCountRoute,
  getUsersUserIdFollowedSitesCountRoute,
  getUsersUserIdInferenceClassificationOverridesCountRoute,
  getUsersUserIdInsightsSharedCountRoute,
  getUsersUserIdInsightsTrendingCountRoute,
  getUsersUserIdInsightsUsedCountRoute,
  getUsersUserIdJoinedTeamsCountRoute,
  getUsersUserIdJoinedTeamsTeamIdAllChannelsCountRoute,
  getUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMembersCountRoute,
  getUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdHostedContentsCountRoute,
  getUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsCountRoute,
  getUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesCountRoute,
  getUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMessagesCountRoute,
  getUsersUserIdJoinedTeamsTeamIdChannelsChannelIdSharedWithTeamsCountRoute,
  getUsersUserIdJoinedTeamsTeamIdChannelsChannelIdSharedWithTeamsSharedWithChannelTeamInfoIdAllowedMembersCountRoute,
  getUsersUserIdJoinedTeamsTeamIdChannelsChannelIdTabsCountRoute,
  getUsersUserIdJoinedTeamsTeamIdChannelsCountRoute,
  getUsersUserIdJoinedTeamsTeamIdIncomingChannelsCountRoute,
  getUsersUserIdJoinedTeamsTeamIdInstalledAppsCountRoute,
  getUsersUserIdJoinedTeamsTeamIdMembersCountRoute,
  getUsersUserIdJoinedTeamsTeamIdOperationsCountRoute,
  getUsersUserIdJoinedTeamsTeamIdPrimaryChannelMembersCountRoute,
  getUsersUserIdJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdHostedContentsCountRoute,
  getUsersUserIdJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1HostedContentsCountRoute,
  getUsersUserIdJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesCountRoute,
  getUsersUserIdJoinedTeamsTeamIdPrimaryChannelMessagesCountRoute,
  getUsersUserIdJoinedTeamsTeamIdPrimaryChannelSharedWithTeamsCountRoute,
  getUsersUserIdJoinedTeamsTeamIdPrimaryChannelSharedWithTeamsSharedWithChannelTeamInfoIdAllowedMembersCountRoute,
  getUsersUserIdJoinedTeamsTeamIdPrimaryChannelTabsCountRoute,
  getUsersUserIdJoinedTeamsTeamIdScheduleOfferShiftRequestsCountRoute,
  getUsersUserIdJoinedTeamsTeamIdScheduleOpenShiftChangeRequestsCountRoute,
  getUsersUserIdJoinedTeamsTeamIdScheduleOpenShiftsCountRoute,
  getUsersUserIdJoinedTeamsTeamIdScheduleSchedulingGroupsCountRoute,
  getUsersUserIdJoinedTeamsTeamIdScheduleShiftsCountRoute,
  getUsersUserIdJoinedTeamsTeamIdScheduleSwapShiftsChangeRequestsCountRoute,
  getUsersUserIdJoinedTeamsTeamIdScheduleTimeOffReasonsCountRoute,
  getUsersUserIdJoinedTeamsTeamIdScheduleTimeOffRequestsCountRoute,
  getUsersUserIdJoinedTeamsTeamIdScheduleTimesOffCountRoute,
  getUsersUserIdJoinedTeamsTeamIdTagsCountRoute,
  getUsersUserIdJoinedTeamsTeamIdTagsTeamworkTagIdMembersCountRoute,
  getUsersUserIdLicenseDetailsCountRoute,
  getUsersUserIdMailFoldersCountRoute,
  getUsersUserIdMailFoldersMailFolderIdChildFoldersCountRoute,
  getUsersUserIdMailFoldersMailFolderIdChildFoldersMailFolderId1MessageRulesCountRoute,
  getUsersUserIdMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesCountRoute,
  getUsersUserIdMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMessageIdAttachmentsCountRoute,
  getUsersUserIdMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMessageIdExtensionsCountRoute,
  getUsersUserIdMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMessageIdMultiValueExtendedPropertiesCountRoute,
  getUsersUserIdMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMessageIdSingleValueExtendedPropertiesCountRoute,
  getUsersUserIdMailFoldersMailFolderIdChildFoldersMailFolderId1MultiValueExtendedPropertiesCountRoute,
  getUsersUserIdMailFoldersMailFolderIdChildFoldersMailFolderId1SingleValueExtendedPropertiesCountRoute,
  getUsersUserIdMailFoldersMailFolderIdMessageRulesCountRoute,
  getUsersUserIdMailFoldersMailFolderIdMessagesCountRoute,
  getUsersUserIdMailFoldersMailFolderIdMessagesMessageIdAttachmentsCountRoute,
  getUsersUserIdMailFoldersMailFolderIdMessagesMessageIdExtensionsCountRoute,
  getUsersUserIdMailFoldersMailFolderIdMessagesMessageIdMultiValueExtendedPropertiesCountRoute,
  getUsersUserIdMailFoldersMailFolderIdMessagesMessageIdSingleValueExtendedPropertiesCountRoute,
  getUsersUserIdMailFoldersMailFolderIdMultiValueExtendedPropertiesCountRoute,
  getUsersUserIdMailFoldersMailFolderIdSingleValueExtendedPropertiesCountRoute,
  getUsersUserIdManagedAppRegistrationsCountRoute,
  getUsersUserIdManagedDevicesCountRoute,
  getUsersUserIdManagedDevicesManagedDeviceIdDeviceCompliancePolicyStatesCountRoute,
  getUsersUserIdManagedDevicesManagedDeviceIdDeviceConfigurationStatesCountRoute,
  getUsersUserIdMemberOfCountRoute,
  getUsersUserIdMemberOfMicrosoftGraphApplicationCountRoute,
  getUsersUserIdMemberOfMicrosoftGraphDeviceCountRoute,
  getUsersUserIdMemberOfMicrosoftGraphGroupCountRoute,
  getUsersUserIdMemberOfMicrosoftGraphOrgContactCountRoute,
  getUsersUserIdMemberOfMicrosoftGraphServicePrincipalCountRoute,
  getUsersUserIdMemberOfMicrosoftGraphUserCountRoute,
  getUsersUserIdMessagesCountRoute,
  getUsersUserIdMessagesMessageIdAttachmentsCountRoute,
  getUsersUserIdMessagesMessageIdExtensionsCountRoute,
  getUsersUserIdMessagesMessageIdMultiValueExtendedPropertiesCountRoute,
  getUsersUserIdMessagesMessageIdSingleValueExtendedPropertiesCountRoute,
  getUsersUserIdOauth2PermissionGrantsCountRoute,
  getUsersUserIdOnenoteNotebooksCountRoute,
  getUsersUserIdOnenoteNotebooksNotebookIdSectionGroupsCountRoute,
  getUsersUserIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionGroupsCountRoute,
  getUsersUserIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsCountRoute,
  getUsersUserIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesCountRoute,
  getUsersUserIdOnenoteNotebooksNotebookIdSectionsCountRoute,
  getUsersUserIdOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdPagesCountRoute,
  getUsersUserIdOnenoteOperationsCountRoute,
  getUsersUserIdOnenotePagesCountRoute,
  getUsersUserIdOnenoteResourcesCountRoute,
  getUsersUserIdOnenoteSectionGroupsCountRoute,
  getUsersUserIdOnenoteSectionGroupsSectionGroupIdSectionGroupsCountRoute,
  getUsersUserIdOnenoteSectionGroupsSectionGroupIdSectionsCountRoute,
  getUsersUserIdOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesCountRoute,
  getUsersUserIdOnenoteSectionsCountRoute,
  getUsersUserIdOnenoteSectionsOnenoteSectionIdPagesCountRoute,
  getUsersUserIdOnlineMeetingsCountRoute,
  getUsersUserIdOnlineMeetingsOnlineMeetingIdAttendanceReportsCountRoute,
  getUsersUserIdOnlineMeetingsOnlineMeetingIdAttendanceReportsMeetingAttendanceReportIdAttendanceRecordsCountRoute,
  getUsersUserIdOutlookMasterCategoriesCountRoute,
  getUsersUserIdOwnedDevicesCountRoute,
  getUsersUserIdOwnedDevicesMicrosoftGraphAppRoleAssignmentCountRoute,
  getUsersUserIdOwnedDevicesMicrosoftGraphDeviceCountRoute,
  getUsersUserIdOwnedDevicesMicrosoftGraphEndpointCountRoute,
  getUsersUserIdOwnedObjectsCountRoute,
  getUsersUserIdOwnedObjectsMicrosoftGraphApplicationCountRoute,
  getUsersUserIdOwnedObjectsMicrosoftGraphGroupCountRoute,
  getUsersUserIdOwnedObjectsMicrosoftGraphServicePrincipalCountRoute,
  getUsersUserIdPeopleCountRoute,
  getUsersUserIdPhotosCountRoute,
  getUsersUserIdPlannerPlansCountRoute,
  getUsersUserIdPlannerPlansPlannerPlanIdBucketsCountRoute,
  getUsersUserIdPlannerPlansPlannerPlanIdBucketsPlannerBucketIdTasksCountRoute,
  getUsersUserIdPlannerPlansPlannerPlanIdTasksCountRoute,
  getUsersUserIdPlannerTasksCountRoute,
  getUsersUserIdRegisteredDevicesCountRoute,
  getUsersUserIdRegisteredDevicesMicrosoftGraphAppRoleAssignmentCountRoute,
  getUsersUserIdRegisteredDevicesMicrosoftGraphDeviceCountRoute,
  getUsersUserIdRegisteredDevicesMicrosoftGraphEndpointCountRoute,
  getUsersUserIdScopedRoleMemberOfCountRoute,
  getUsersUserIdTeamworkAssociatedTeamsCountRoute,
  getUsersUserIdTeamworkInstalledAppsCountRoute,
  getUsersUserIdTodoListsCountRoute,
  getUsersUserIdTodoListsTodoTaskListIdExtensionsCountRoute,
  getUsersUserIdTodoListsTodoTaskListIdTasksCountRoute,
  getUsersUserIdTodoListsTodoTaskListIdTasksTodoTaskIdAttachmentsCountRoute,
  getUsersUserIdTodoListsTodoTaskListIdTasksTodoTaskIdAttachmentSessionsCountRoute,
  getUsersUserIdTodoListsTodoTaskListIdTasksTodoTaskIdChecklistItemsCountRoute,
  getUsersUserIdTodoListsTodoTaskListIdTasksTodoTaskIdExtensionsCountRoute,
  getUsersUserIdTodoListsTodoTaskListIdTasksTodoTaskIdLinkedResourcesCountRoute,
  getUsersUserIdTransitiveMemberOfCountRoute,
  getUsersUserIdTransitiveMemberOfMicrosoftGraphApplicationCountRoute,
  getUsersUserIdTransitiveMemberOfMicrosoftGraphDeviceCountRoute,
  getUsersUserIdTransitiveMemberOfMicrosoftGraphGroupCountRoute,
  getUsersUserIdTransitiveMemberOfMicrosoftGraphOrgContactCountRoute,
  getUsersUserIdTransitiveMemberOfMicrosoftGraphServicePrincipalCountRoute,
  getUsersUserIdTransitiveMemberOfMicrosoftGraphUserCountRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersHandler = app
  .openapi(getUsersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdActivitiesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdActivitiesUserActivityIdHistoryItemsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdAgreementAcceptancesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdAppRoleAssignmentsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdAuthenticationEmailMethodsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdAuthenticationFido2MethodsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdAuthenticationMethodsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdAuthenticationMicrosoftAuthenticatorMethodsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdAuthenticationOperationsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdAuthenticationPasswordMethodsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdAuthenticationPhoneMethodsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdAuthenticationSoftwareOathMethodsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdAuthenticationTemporaryAccessPassMethodsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdAuthenticationWindowsHelloForBusinessMethodsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdCalendarCalendarPermissionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdCalendarCalendarViewCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdCalendarCalendarViewEventIdAttachmentsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdCalendarCalendarViewEventIdExtensionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdCalendarCalendarViewEventIdInstancesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdCalendarCalendarViewEventIdInstancesEventId1AttachmentsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdCalendarCalendarViewEventIdInstancesEventId1ExtensionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getUsersUserIdCalendarCalendarViewEventIdInstancesEventId1MultiValueExtendedPropertiesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdCalendarCalendarViewEventIdInstancesEventId1SingleValueExtendedPropertiesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getUsersUserIdCalendarCalendarViewEventIdMultiValueExtendedPropertiesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getUsersUserIdCalendarCalendarViewEventIdSingleValueExtendedPropertiesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getUsersUserIdCalendarEventsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdCalendarEventsEventIdAttachmentsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdCalendarEventsEventIdExtensionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdCalendarEventsEventIdInstancesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdCalendarEventsEventIdInstancesEventId1AttachmentsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdCalendarEventsEventIdInstancesEventId1ExtensionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getUsersUserIdCalendarEventsEventIdInstancesEventId1MultiValueExtendedPropertiesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdCalendarEventsEventIdInstancesEventId1SingleValueExtendedPropertiesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getUsersUserIdCalendarEventsEventIdMultiValueExtendedPropertiesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdCalendarEventsEventIdSingleValueExtendedPropertiesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdCalendarMultiValueExtendedPropertiesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdCalendarSingleValueExtendedPropertiesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdCalendarGroupsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarPermissionsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdAttachmentsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdExtensionsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdInstancesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1AttachmentsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1ExtensionsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1MultiValueExtendedPropertiesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1SingleValueExtendedPropertiesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdMultiValueExtendedPropertiesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdSingleValueExtendedPropertiesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdAttachmentsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdExtensionsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdInstancesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdInstancesEventId1AttachmentsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdInstancesEventId1ExtensionsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdInstancesEventId1MultiValueExtendedPropertiesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdInstancesEventId1SingleValueExtendedPropertiesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdMultiValueExtendedPropertiesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdSingleValueExtendedPropertiesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdMultiValueExtendedPropertiesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdSingleValueExtendedPropertiesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getUsersUserIdCalendarViewCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdCalendarViewEventIdAttachmentsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdCalendarViewEventIdExtensionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdCalendarViewEventIdInstancesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdCalendarViewEventIdInstancesEventId1AttachmentsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdCalendarViewEventIdInstancesEventId1ExtensionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getUsersUserIdCalendarViewEventIdInstancesEventId1MultiValueExtendedPropertiesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdCalendarViewEventIdInstancesEventId1SingleValueExtendedPropertiesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getUsersUserIdCalendarViewEventIdMultiValueExtendedPropertiesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdCalendarViewEventIdSingleValueExtendedPropertiesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdCalendarsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdCalendarsCalendarIdCalendarPermissionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdCalendarsCalendarIdCalendarViewCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdCalendarsCalendarIdCalendarViewEventIdAttachmentsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdCalendarsCalendarIdCalendarViewEventIdExtensionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdCalendarsCalendarIdCalendarViewEventIdInstancesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getUsersUserIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1AttachmentsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1ExtensionsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1MultiValueExtendedPropertiesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1SingleValueExtendedPropertiesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdCalendarsCalendarIdCalendarViewEventIdMultiValueExtendedPropertiesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdCalendarsCalendarIdCalendarViewEventIdSingleValueExtendedPropertiesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getUsersUserIdCalendarsCalendarIdEventsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdCalendarsCalendarIdEventsEventIdAttachmentsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdCalendarsCalendarIdEventsEventIdExtensionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdCalendarsCalendarIdEventsEventIdInstancesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getUsersUserIdCalendarsCalendarIdEventsEventIdInstancesEventId1AttachmentsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdCalendarsCalendarIdEventsEventIdInstancesEventId1ExtensionsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdCalendarsCalendarIdEventsEventIdInstancesEventId1MultiValueExtendedPropertiesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdCalendarsCalendarIdEventsEventIdInstancesEventId1SingleValueExtendedPropertiesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdCalendarsCalendarIdEventsEventIdMultiValueExtendedPropertiesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdCalendarsCalendarIdEventsEventIdSingleValueExtendedPropertiesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getUsersUserIdCalendarsCalendarIdMultiValueExtendedPropertiesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdCalendarsCalendarIdSingleValueExtendedPropertiesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdChatsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdChatsChatIdInstalledAppsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdChatsChatIdMembersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdChatsChatIdMessagesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdChatsChatIdMessagesChatMessageIdHostedContentsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdChatsChatIdMessagesChatMessageIdRepliesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getUsersUserIdChatsChatIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getUsersUserIdChatsChatIdPinnedMessagesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdChatsChatIdTabsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdContactFoldersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdContactFoldersContactFolderIdChildFoldersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getUsersUserIdContactFoldersContactFolderIdChildFoldersContactFolderId1ContactsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdContactFoldersContactFolderIdChildFoldersContactFolderId1ContactsContactIdExtensionsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdContactFoldersContactFolderIdChildFoldersContactFolderId1ContactsContactIdMultiValueExtendedPropertiesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdContactFoldersContactFolderIdChildFoldersContactFolderId1ContactsContactIdSingleValueExtendedPropertiesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdContactFoldersContactFolderIdChildFoldersContactFolderId1MultiValueExtendedPropertiesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdContactFoldersContactFolderIdChildFoldersContactFolderId1SingleValueExtendedPropertiesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getUsersUserIdContactFoldersContactFolderIdContactsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getUsersUserIdContactFoldersContactFolderIdContactsContactIdExtensionsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdContactFoldersContactFolderIdContactsContactIdMultiValueExtendedPropertiesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdContactFoldersContactFolderIdContactsContactIdSingleValueExtendedPropertiesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdContactFoldersContactFolderIdMultiValueExtendedPropertiesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdContactFoldersContactFolderIdSingleValueExtendedPropertiesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getUsersUserIdContactsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdContactsContactIdExtensionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdContactsContactIdMultiValueExtendedPropertiesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdContactsContactIdSingleValueExtendedPropertiesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdCreatedObjectsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdCreatedObjectsMicrosoftGraphServicePrincipalCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdDeviceManagementTroubleshootingEventsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdDirectReportsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdDirectReportsMicrosoftGraphOrgContactCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdDirectReportsMicrosoftGraphUserCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdDrivesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdEventsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdEventsEventIdAttachmentsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdEventsEventIdExtensionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdEventsEventIdInstancesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdEventsEventIdInstancesEventId1AttachmentsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdEventsEventIdInstancesEventId1ExtensionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getUsersUserIdEventsEventIdInstancesEventId1MultiValueExtendedPropertiesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdEventsEventIdInstancesEventId1SingleValueExtendedPropertiesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getUsersUserIdEventsEventIdMultiValueExtendedPropertiesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdEventsEventIdSingleValueExtendedPropertiesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdExtensionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdFollowedSitesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdInferenceClassificationOverridesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdInsightsSharedCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdInsightsTrendingCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdInsightsUsedCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdJoinedTeamsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdJoinedTeamsTeamIdAllChannelsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdJoinedTeamsTeamIdChannelsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMembersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMessagesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdHostedContentsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1HostedContentsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getUsersUserIdJoinedTeamsTeamIdChannelsChannelIdSharedWithTeamsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getUsersUserIdJoinedTeamsTeamIdChannelsChannelIdSharedWithTeamsSharedWithChannelTeamInfoIdAllowedMembersCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getUsersUserIdJoinedTeamsTeamIdChannelsChannelIdTabsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdJoinedTeamsTeamIdIncomingChannelsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdJoinedTeamsTeamIdInstalledAppsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdJoinedTeamsTeamIdMembersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdJoinedTeamsTeamIdOperationsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdJoinedTeamsTeamIdPrimaryChannelMembersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdJoinedTeamsTeamIdPrimaryChannelMessagesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getUsersUserIdJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdHostedContentsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1HostedContentsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getUsersUserIdJoinedTeamsTeamIdPrimaryChannelSharedWithTeamsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getUsersUserIdJoinedTeamsTeamIdPrimaryChannelSharedWithTeamsSharedWithChannelTeamInfoIdAllowedMembersCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getUsersUserIdJoinedTeamsTeamIdPrimaryChannelTabsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdJoinedTeamsTeamIdScheduleOfferShiftRequestsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdJoinedTeamsTeamIdScheduleOpenShiftChangeRequestsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdJoinedTeamsTeamIdScheduleOpenShiftsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdJoinedTeamsTeamIdScheduleSchedulingGroupsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdJoinedTeamsTeamIdScheduleShiftsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdJoinedTeamsTeamIdScheduleSwapShiftsChangeRequestsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdJoinedTeamsTeamIdScheduleTimeOffReasonsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdJoinedTeamsTeamIdScheduleTimeOffRequestsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdJoinedTeamsTeamIdScheduleTimesOffCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdJoinedTeamsTeamIdTagsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdJoinedTeamsTeamIdTagsTeamworkTagIdMembersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdLicenseDetailsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdMailFoldersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdMailFoldersMailFolderIdChildFoldersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getUsersUserIdMailFoldersMailFolderIdChildFoldersMailFolderId1MessageRulesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMessageIdAttachmentsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMessageIdExtensionsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMessageIdMultiValueExtendedPropertiesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMessageIdSingleValueExtendedPropertiesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdMailFoldersMailFolderIdChildFoldersMailFolderId1MultiValueExtendedPropertiesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdMailFoldersMailFolderIdChildFoldersMailFolderId1SingleValueExtendedPropertiesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getUsersUserIdMailFoldersMailFolderIdMessageRulesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdMailFoldersMailFolderIdMessagesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdMailFoldersMailFolderIdMessagesMessageIdAttachmentsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdMailFoldersMailFolderIdMessagesMessageIdExtensionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getUsersUserIdMailFoldersMailFolderIdMessagesMessageIdMultiValueExtendedPropertiesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdMailFoldersMailFolderIdMessagesMessageIdSingleValueExtendedPropertiesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getUsersUserIdMailFoldersMailFolderIdMultiValueExtendedPropertiesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdMailFoldersMailFolderIdSingleValueExtendedPropertiesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdManagedAppRegistrationsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdManagedDevicesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getUsersUserIdManagedDevicesManagedDeviceIdDeviceCompliancePolicyStatesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getUsersUserIdManagedDevicesManagedDeviceIdDeviceConfigurationStatesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdMemberOfCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdMemberOfMicrosoftGraphApplicationCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdMemberOfMicrosoftGraphDeviceCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdMemberOfMicrosoftGraphGroupCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdMemberOfMicrosoftGraphOrgContactCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdMemberOfMicrosoftGraphServicePrincipalCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdMemberOfMicrosoftGraphUserCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdMessagesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdMessagesMessageIdAttachmentsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdMessagesMessageIdExtensionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdMessagesMessageIdMultiValueExtendedPropertiesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdMessagesMessageIdSingleValueExtendedPropertiesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdOauth2PermissionGrantsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdOnenoteNotebooksCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdOnenoteNotebooksNotebookIdSectionGroupsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getUsersUserIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionGroupsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getUsersUserIdOnenoteNotebooksNotebookIdSectionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdPagesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdOnenoteOperationsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdOnenotePagesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdOnenoteResourcesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdOnenoteSectionGroupsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdOnenoteSectionGroupsSectionGroupIdSectionGroupsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdOnenoteSectionGroupsSectionGroupIdSectionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getUsersUserIdOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getUsersUserIdOnenoteSectionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdOnenoteSectionsOnenoteSectionIdPagesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdOnlineMeetingsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdOnlineMeetingsOnlineMeetingIdAttendanceReportsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getUsersUserIdOnlineMeetingsOnlineMeetingIdAttendanceReportsMeetingAttendanceReportIdAttendanceRecordsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getUsersUserIdOutlookMasterCategoriesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdOwnedDevicesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdOwnedDevicesMicrosoftGraphAppRoleAssignmentCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdOwnedDevicesMicrosoftGraphDeviceCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdOwnedDevicesMicrosoftGraphEndpointCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdOwnedObjectsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdOwnedObjectsMicrosoftGraphApplicationCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdOwnedObjectsMicrosoftGraphGroupCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdOwnedObjectsMicrosoftGraphServicePrincipalCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdPeopleCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdPhotosCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdPlannerPlansCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdPlannerPlansPlannerPlanIdBucketsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdPlannerPlansPlannerPlanIdBucketsPlannerBucketIdTasksCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdPlannerPlansPlannerPlanIdTasksCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdPlannerTasksCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdRegisteredDevicesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdRegisteredDevicesMicrosoftGraphAppRoleAssignmentCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdRegisteredDevicesMicrosoftGraphDeviceCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdRegisteredDevicesMicrosoftGraphEndpointCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdScopedRoleMemberOfCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdTeamworkAssociatedTeamsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdTeamworkInstalledAppsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdTodoListsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdTodoListsTodoTaskListIdExtensionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdTodoListsTodoTaskListIdTasksCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getUsersUserIdTodoListsTodoTaskListIdTasksTodoTaskIdAttachmentSessionsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getUsersUserIdTodoListsTodoTaskListIdTasksTodoTaskIdAttachmentsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdTodoListsTodoTaskListIdTasksTodoTaskIdChecklistItemsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdTodoListsTodoTaskListIdTasksTodoTaskIdExtensionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdTodoListsTodoTaskListIdTasksTodoTaskIdLinkedResourcesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdTransitiveMemberOfCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdTransitiveMemberOfMicrosoftGraphApplicationCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdTransitiveMemberOfMicrosoftGraphDeviceCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdTransitiveMemberOfMicrosoftGraphGroupCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdTransitiveMemberOfMicrosoftGraphOrgContactCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdTransitiveMemberOfMicrosoftGraphServicePrincipalCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdTransitiveMemberOfMicrosoftGraphUserCountRoute, (c) => {
    throw new Error('Not implemented')
  })
