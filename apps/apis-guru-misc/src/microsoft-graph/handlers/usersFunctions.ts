import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getUsersMicrosoftGraphDeltaRoute,
  getUsersUserIdActivitiesMicrosoftGraphRecentRoute,
  getUsersUserIdCalendarCalendarViewEventIdInstancesMicrosoftGraphDeltaRoute,
  getUsersUserIdCalendarCalendarViewMicrosoftGraphDeltaRoute,
  getUsersUserIdCalendarEventsEventIdInstancesMicrosoftGraphDeltaRoute,
  getUsersUserIdCalendarEventsMicrosoftGraphDeltaRoute,
  getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdInstancesMicrosoftGraphDeltaRoute,
  getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewMicrosoftGraphDeltaRoute,
  getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdInstancesMicrosoftGraphDeltaRoute,
  getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsMicrosoftGraphDeltaRoute,
  getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdMicrosoftGraphAllowedCalendarSharingRolesUserUserRoute,
  getUsersUserIdCalendarMicrosoftGraphAllowedCalendarSharingRolesUserUserRoute,
  getUsersUserIdCalendarsCalendarIdCalendarViewEventIdInstancesMicrosoftGraphDeltaRoute,
  getUsersUserIdCalendarsCalendarIdCalendarViewMicrosoftGraphDeltaRoute,
  getUsersUserIdCalendarsCalendarIdEventsEventIdInstancesMicrosoftGraphDeltaRoute,
  getUsersUserIdCalendarsCalendarIdEventsMicrosoftGraphDeltaRoute,
  getUsersUserIdCalendarsCalendarIdMicrosoftGraphAllowedCalendarSharingRolesUserUserRoute,
  getUsersUserIdCalendarViewEventIdInstancesMicrosoftGraphDeltaRoute,
  getUsersUserIdCalendarViewMicrosoftGraphDeltaRoute,
  getUsersUserIdChatsChatIdMessagesChatMessageIdRepliesMicrosoftGraphDeltaRoute,
  getUsersUserIdChatsChatIdMessagesMicrosoftGraphDeltaRoute,
  getUsersUserIdChatsMicrosoftGraphGetAllMessagesRoute,
  getUsersUserIdContactFoldersContactFolderIdChildFoldersContactFolderId1ContactsMicrosoftGraphDeltaRoute,
  getUsersUserIdContactFoldersContactFolderIdChildFoldersMicrosoftGraphDeltaRoute,
  getUsersUserIdContactFoldersContactFolderIdContactsMicrosoftGraphDeltaRoute,
  getUsersUserIdContactFoldersMicrosoftGraphDeltaRoute,
  getUsersUserIdContactsMicrosoftGraphDeltaRoute,
  getUsersUserIdEventsEventIdInstancesMicrosoftGraphDeltaRoute,
  getUsersUserIdEventsMicrosoftGraphDeltaRoute,
  getUsersUserIdJoinedTeamsMicrosoftGraphGetAllMessagesRoute,
  getUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesMicrosoftGraphDeltaRoute,
  getUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMessagesMicrosoftGraphDeltaRoute,
  getUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMicrosoftGraphDoesUserHaveAccessUserIdUserIdTenantIdTenantIdUserPrincipalNameUserPrincipalNameRoute,
  getUsersUserIdJoinedTeamsTeamIdChannelsMicrosoftGraphGetAllMessagesRoute,
  getUsersUserIdJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesMicrosoftGraphDeltaRoute,
  getUsersUserIdJoinedTeamsTeamIdPrimaryChannelMessagesMicrosoftGraphDeltaRoute,
  getUsersUserIdJoinedTeamsTeamIdPrimaryChannelMicrosoftGraphDoesUserHaveAccessUserIdUserIdTenantIdTenantIdUserPrincipalNameUserPrincipalNameRoute,
  getUsersUserIdMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMicrosoftGraphDeltaRoute,
  getUsersUserIdMailFoldersMailFolderIdChildFoldersMicrosoftGraphDeltaRoute,
  getUsersUserIdMailFoldersMailFolderIdMessagesMicrosoftGraphDeltaRoute,
  getUsersUserIdMailFoldersMicrosoftGraphDeltaRoute,
  getUsersUserIdMessagesMicrosoftGraphDeltaRoute,
  getUsersUserIdMicrosoftGraphExportDeviceAndAppManagementDataRoute,
  getUsersUserIdMicrosoftGraphExportDeviceAndAppManagementDataSkipSkipTopTopRoute,
  getUsersUserIdMicrosoftGraphGetManagedAppDiagnosticStatusesRoute,
  getUsersUserIdMicrosoftGraphGetManagedAppPoliciesRoute,
  getUsersUserIdMicrosoftGraphGetManagedDevicesWithAppFailuresRoute,
  getUsersUserIdMicrosoftGraphReminderViewStartDateTimeStartDateTimeEndDateTimeEndDateTimeRoute,
  getUsersUserIdOnenoteNotebooksMicrosoftGraphGetRecentNotebooksIncludePersonalNotebooksIncludePersonalNotebooksRoute,
  getUsersUserIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdMicrosoftGraphPreviewRoute,
  getUsersUserIdOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdPagesOnenotePageIdMicrosoftGraphPreviewRoute,
  getUsersUserIdOnenotePagesOnenotePageIdMicrosoftGraphPreviewRoute,
  getUsersUserIdOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdMicrosoftGraphPreviewRoute,
  getUsersUserIdOnenoteSectionsOnenoteSectionIdPagesOnenotePageIdMicrosoftGraphPreviewRoute,
  getUsersUserIdOutlookMicrosoftGraphSupportedLanguagesRoute,
  getUsersUserIdOutlookMicrosoftGraphSupportedTimeZonesRoute,
  getUsersUserIdOutlookMicrosoftGraphSupportedTimeZonesTimeZoneStandardTimeZoneStandardRoute,
  getUsersUserIdTodoListsMicrosoftGraphDeltaRoute,
  getUsersUserIdTodoListsTodoTaskListIdTasksMicrosoftGraphDeltaRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersFunctionsHandler = app
  .openapi(getUsersMicrosoftGraphDeltaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdActivitiesMicrosoftGraphRecentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdCalendarCalendarViewMicrosoftGraphDeltaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdCalendarCalendarViewEventIdInstancesMicrosoftGraphDeltaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdCalendarEventsMicrosoftGraphDeltaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdCalendarEventsEventIdInstancesMicrosoftGraphDeltaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdCalendarMicrosoftGraphAllowedCalendarSharingRolesUserUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewMicrosoftGraphDeltaRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdInstancesMicrosoftGraphDeltaRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsMicrosoftGraphDeltaRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdInstancesMicrosoftGraphDeltaRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdMicrosoftGraphAllowedCalendarSharingRolesUserUserRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getUsersUserIdCalendarViewMicrosoftGraphDeltaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdCalendarViewEventIdInstancesMicrosoftGraphDeltaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdCalendarsCalendarIdCalendarViewMicrosoftGraphDeltaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getUsersUserIdCalendarsCalendarIdCalendarViewEventIdInstancesMicrosoftGraphDeltaRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getUsersUserIdCalendarsCalendarIdEventsMicrosoftGraphDeltaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdCalendarsCalendarIdEventsEventIdInstancesMicrosoftGraphDeltaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getUsersUserIdCalendarsCalendarIdMicrosoftGraphAllowedCalendarSharingRolesUserUserRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getUsersUserIdChatsMicrosoftGraphGetAllMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdChatsChatIdMessagesMicrosoftGraphDeltaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdChatsChatIdMessagesChatMessageIdRepliesMicrosoftGraphDeltaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdContactFoldersMicrosoftGraphDeltaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdContactFoldersContactFolderIdChildFoldersMicrosoftGraphDeltaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getUsersUserIdContactFoldersContactFolderIdChildFoldersContactFolderId1ContactsMicrosoftGraphDeltaRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getUsersUserIdContactFoldersContactFolderIdContactsMicrosoftGraphDeltaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdContactsMicrosoftGraphDeltaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdEventsMicrosoftGraphDeltaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdEventsEventIdInstancesMicrosoftGraphDeltaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdJoinedTeamsMicrosoftGraphGetAllMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdJoinedTeamsTeamIdChannelsMicrosoftGraphGetAllMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMessagesMicrosoftGraphDeltaRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesMicrosoftGraphDeltaRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMicrosoftGraphDoesUserHaveAccessUserIdUserIdTenantIdTenantIdUserPrincipalNameUserPrincipalNameRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getUsersUserIdJoinedTeamsTeamIdPrimaryChannelMessagesMicrosoftGraphDeltaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getUsersUserIdJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesMicrosoftGraphDeltaRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdJoinedTeamsTeamIdPrimaryChannelMicrosoftGraphDoesUserHaveAccessUserIdUserIdTenantIdTenantIdUserPrincipalNameUserPrincipalNameRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getUsersUserIdMailFoldersMicrosoftGraphDeltaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdMailFoldersMailFolderIdChildFoldersMicrosoftGraphDeltaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getUsersUserIdMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMicrosoftGraphDeltaRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getUsersUserIdMailFoldersMailFolderIdMessagesMicrosoftGraphDeltaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdMessagesMicrosoftGraphDeltaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdMicrosoftGraphExportDeviceAndAppManagementDataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdMicrosoftGraphExportDeviceAndAppManagementDataSkipSkipTopTopRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdMicrosoftGraphGetManagedAppDiagnosticStatusesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdMicrosoftGraphGetManagedAppPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdMicrosoftGraphGetManagedDevicesWithAppFailuresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getUsersUserIdMicrosoftGraphReminderViewStartDateTimeStartDateTimeEndDateTimeEndDateTimeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdOnenoteNotebooksMicrosoftGraphGetRecentNotebooksIncludePersonalNotebooksIncludePersonalNotebooksRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdMicrosoftGraphPreviewRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdPagesOnenotePageIdMicrosoftGraphPreviewRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getUsersUserIdOnenotePagesOnenotePageIdMicrosoftGraphPreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getUsersUserIdOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdMicrosoftGraphPreviewRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdOnenoteSectionsOnenoteSectionIdPagesOnenotePageIdMicrosoftGraphPreviewRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getUsersUserIdOutlookMicrosoftGraphSupportedLanguagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdOutlookMicrosoftGraphSupportedTimeZonesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getUsersUserIdOutlookMicrosoftGraphSupportedTimeZonesTimeZoneStandardTimeZoneStandardRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getUsersUserIdTodoListsMicrosoftGraphDeltaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdTodoListsTodoTaskListIdTasksMicrosoftGraphDeltaRoute, (c) => {
    throw new Error('Not implemented')
  })
