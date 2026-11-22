import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getMeActivitiesMicrosoftGraphRecentRoute,
  getMeCalendarCalendarViewEventIdInstancesMicrosoftGraphDeltaRoute,
  getMeCalendarCalendarViewMicrosoftGraphDeltaRoute,
  getMeCalendarEventsEventIdInstancesMicrosoftGraphDeltaRoute,
  getMeCalendarEventsMicrosoftGraphDeltaRoute,
  getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdInstancesMicrosoftGraphDeltaRoute,
  getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewMicrosoftGraphDeltaRoute,
  getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdInstancesMicrosoftGraphDeltaRoute,
  getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsMicrosoftGraphDeltaRoute,
  getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdMicrosoftGraphAllowedCalendarSharingRolesUserUserRoute,
  getMeCalendarMicrosoftGraphAllowedCalendarSharingRolesUserUserRoute,
  getMeCalendarsCalendarIdCalendarViewEventIdInstancesMicrosoftGraphDeltaRoute,
  getMeCalendarsCalendarIdCalendarViewMicrosoftGraphDeltaRoute,
  getMeCalendarsCalendarIdEventsEventIdInstancesMicrosoftGraphDeltaRoute,
  getMeCalendarsCalendarIdEventsMicrosoftGraphDeltaRoute,
  getMeCalendarsCalendarIdMicrosoftGraphAllowedCalendarSharingRolesUserUserRoute,
  getMeCalendarViewEventIdInstancesMicrosoftGraphDeltaRoute,
  getMeCalendarViewMicrosoftGraphDeltaRoute,
  getMeChatsChatIdMessagesChatMessageIdRepliesMicrosoftGraphDeltaRoute,
  getMeChatsChatIdMessagesMicrosoftGraphDeltaRoute,
  getMeChatsMicrosoftGraphGetAllMessagesRoute,
  getMeContactFoldersContactFolderIdChildFoldersContactFolderId1ContactsMicrosoftGraphDeltaRoute,
  getMeContactFoldersContactFolderIdChildFoldersMicrosoftGraphDeltaRoute,
  getMeContactFoldersContactFolderIdContactsMicrosoftGraphDeltaRoute,
  getMeContactFoldersMicrosoftGraphDeltaRoute,
  getMeContactsMicrosoftGraphDeltaRoute,
  getMeEventsEventIdInstancesMicrosoftGraphDeltaRoute,
  getMeEventsMicrosoftGraphDeltaRoute,
  getMeJoinedTeamsMicrosoftGraphGetAllMessagesRoute,
  getMeJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesMicrosoftGraphDeltaRoute,
  getMeJoinedTeamsTeamIdChannelsChannelIdMessagesMicrosoftGraphDeltaRoute,
  getMeJoinedTeamsTeamIdChannelsChannelIdMicrosoftGraphDoesUserHaveAccessUserIdUserIdTenantIdTenantIdUserPrincipalNameUserPrincipalNameRoute,
  getMeJoinedTeamsTeamIdChannelsMicrosoftGraphGetAllMessagesRoute,
  getMeJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesMicrosoftGraphDeltaRoute,
  getMeJoinedTeamsTeamIdPrimaryChannelMessagesMicrosoftGraphDeltaRoute,
  getMeJoinedTeamsTeamIdPrimaryChannelMicrosoftGraphDoesUserHaveAccessUserIdUserIdTenantIdTenantIdUserPrincipalNameUserPrincipalNameRoute,
  getMeMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMicrosoftGraphDeltaRoute,
  getMeMailFoldersMailFolderIdChildFoldersMicrosoftGraphDeltaRoute,
  getMeMailFoldersMailFolderIdMessagesMicrosoftGraphDeltaRoute,
  getMeMailFoldersMicrosoftGraphDeltaRoute,
  getMeMessagesMicrosoftGraphDeltaRoute,
  getMeMicrosoftGraphExportDeviceAndAppManagementDataRoute,
  getMeMicrosoftGraphExportDeviceAndAppManagementDataSkipSkipTopTopRoute,
  getMeMicrosoftGraphGetManagedAppDiagnosticStatusesRoute,
  getMeMicrosoftGraphGetManagedAppPoliciesRoute,
  getMeMicrosoftGraphGetManagedDevicesWithAppFailuresRoute,
  getMeMicrosoftGraphReminderViewStartDateTimeStartDateTimeEndDateTimeEndDateTimeRoute,
  getMeOnenoteNotebooksMicrosoftGraphGetRecentNotebooksIncludePersonalNotebooksIncludePersonalNotebooksRoute,
  getMeOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdMicrosoftGraphPreviewRoute,
  getMeOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdPagesOnenotePageIdMicrosoftGraphPreviewRoute,
  getMeOnenotePagesOnenotePageIdMicrosoftGraphPreviewRoute,
  getMeOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdMicrosoftGraphPreviewRoute,
  getMeOnenoteSectionsOnenoteSectionIdPagesOnenotePageIdMicrosoftGraphPreviewRoute,
  getMeOutlookMicrosoftGraphSupportedLanguagesRoute,
  getMeOutlookMicrosoftGraphSupportedTimeZonesRoute,
  getMeOutlookMicrosoftGraphSupportedTimeZonesTimeZoneStandardTimeZoneStandardRoute,
  getMeTodoListsMicrosoftGraphDeltaRoute,
  getMeTodoListsTodoTaskListIdTasksMicrosoftGraphDeltaRoute,
} from '../routes'

const app = new OpenAPIHono()

export const meFunctionsHandler = app
  .openapi(getMeActivitiesMicrosoftGraphRecentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarCalendarViewMicrosoftGraphDeltaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarCalendarViewEventIdInstancesMicrosoftGraphDeltaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarEventsMicrosoftGraphDeltaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarEventsEventIdInstancesMicrosoftGraphDeltaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarMicrosoftGraphAllowedCalendarSharingRolesUserUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewMicrosoftGraphDeltaRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdInstancesMicrosoftGraphDeltaRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsMicrosoftGraphDeltaRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdInstancesMicrosoftGraphDeltaRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdMicrosoftGraphAllowedCalendarSharingRolesUserUserRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getMeCalendarViewMicrosoftGraphDeltaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarViewEventIdInstancesMicrosoftGraphDeltaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarsCalendarIdCalendarViewMicrosoftGraphDeltaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarsCalendarIdCalendarViewEventIdInstancesMicrosoftGraphDeltaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarsCalendarIdEventsMicrosoftGraphDeltaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarsCalendarIdEventsEventIdInstancesMicrosoftGraphDeltaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarsCalendarIdMicrosoftGraphAllowedCalendarSharingRolesUserUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeChatsMicrosoftGraphGetAllMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeChatsChatIdMessagesMicrosoftGraphDeltaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeChatsChatIdMessagesChatMessageIdRepliesMicrosoftGraphDeltaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeContactFoldersMicrosoftGraphDeltaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeContactFoldersContactFolderIdChildFoldersMicrosoftGraphDeltaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getMeContactFoldersContactFolderIdChildFoldersContactFolderId1ContactsMicrosoftGraphDeltaRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getMeContactFoldersContactFolderIdContactsMicrosoftGraphDeltaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeContactsMicrosoftGraphDeltaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeEventsMicrosoftGraphDeltaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeEventsEventIdInstancesMicrosoftGraphDeltaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsMicrosoftGraphGetAllMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdChannelsMicrosoftGraphGetAllMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeJoinedTeamsTeamIdChannelsChannelIdMessagesMicrosoftGraphDeltaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getMeJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesMicrosoftGraphDeltaRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeJoinedTeamsTeamIdChannelsChannelIdMicrosoftGraphDoesUserHaveAccessUserIdUserIdTenantIdTenantIdUserPrincipalNameUserPrincipalNameRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getMeJoinedTeamsTeamIdPrimaryChannelMessagesMicrosoftGraphDeltaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getMeJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesMicrosoftGraphDeltaRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeJoinedTeamsTeamIdPrimaryChannelMicrosoftGraphDoesUserHaveAccessUserIdUserIdTenantIdTenantIdUserPrincipalNameUserPrincipalNameRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getMeMailFoldersMicrosoftGraphDeltaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeMailFoldersMailFolderIdChildFoldersMicrosoftGraphDeltaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getMeMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMicrosoftGraphDeltaRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getMeMailFoldersMailFolderIdMessagesMicrosoftGraphDeltaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeMessagesMicrosoftGraphDeltaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeMicrosoftGraphExportDeviceAndAppManagementDataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeMicrosoftGraphExportDeviceAndAppManagementDataSkipSkipTopTopRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeMicrosoftGraphGetManagedAppDiagnosticStatusesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeMicrosoftGraphGetManagedAppPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeMicrosoftGraphGetManagedDevicesWithAppFailuresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getMeMicrosoftGraphReminderViewStartDateTimeStartDateTimeEndDateTimeEndDateTimeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeOnenoteNotebooksMicrosoftGraphGetRecentNotebooksIncludePersonalNotebooksIncludePersonalNotebooksRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdMicrosoftGraphPreviewRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdPagesOnenotePageIdMicrosoftGraphPreviewRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getMeOnenotePagesOnenotePageIdMicrosoftGraphPreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getMeOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdMicrosoftGraphPreviewRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeOnenoteSectionsOnenoteSectionIdPagesOnenotePageIdMicrosoftGraphPreviewRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getMeOutlookMicrosoftGraphSupportedLanguagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeOutlookMicrosoftGraphSupportedTimeZonesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getMeOutlookMicrosoftGraphSupportedTimeZonesTimeZoneStandardTimeZoneStandardRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getMeTodoListsMicrosoftGraphDeltaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeTodoListsTodoTaskListIdTasksMicrosoftGraphDeltaRoute, (c) => {
    throw new Error('Not implemented')
  })
