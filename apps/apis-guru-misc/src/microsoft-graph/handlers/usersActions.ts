import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postUsersMicrosoftGraphGetAvailableExtensionPropertiesRoute,
  postUsersMicrosoftGraphGetByIdsRoute,
  postUsersMicrosoftGraphValidatePropertiesRoute,
  postUsersUserIdAuthenticationMethodsAuthenticationMethodIdMicrosoftGraphResetPasswordRoute,
  postUsersUserIdAuthenticationPhoneMethodsPhoneAuthenticationMethodIdMicrosoftGraphDisableSmsSignInRoute,
  postUsersUserIdAuthenticationPhoneMethodsPhoneAuthenticationMethodIdMicrosoftGraphEnableSmsSignInRoute,
  postUsersUserIdCalendarCalendarViewEventIdAttachmentsMicrosoftGraphCreateUploadSessionRoute,
  postUsersUserIdCalendarCalendarViewEventIdInstancesEventId1AttachmentsMicrosoftGraphCreateUploadSessionRoute,
  postUsersUserIdCalendarCalendarViewEventIdInstancesEventId1MicrosoftGraphAcceptRoute,
  postUsersUserIdCalendarCalendarViewEventIdInstancesEventId1MicrosoftGraphCancelRoute,
  postUsersUserIdCalendarCalendarViewEventIdInstancesEventId1MicrosoftGraphDeclineRoute,
  postUsersUserIdCalendarCalendarViewEventIdInstancesEventId1MicrosoftGraphDismissReminderRoute,
  postUsersUserIdCalendarCalendarViewEventIdInstancesEventId1MicrosoftGraphForwardRoute,
  postUsersUserIdCalendarCalendarViewEventIdInstancesEventId1MicrosoftGraphSnoozeReminderRoute,
  postUsersUserIdCalendarCalendarViewEventIdInstancesEventId1MicrosoftGraphTentativelyAcceptRoute,
  postUsersUserIdCalendarCalendarViewEventIdMicrosoftGraphAcceptRoute,
  postUsersUserIdCalendarCalendarViewEventIdMicrosoftGraphCancelRoute,
  postUsersUserIdCalendarCalendarViewEventIdMicrosoftGraphDeclineRoute,
  postUsersUserIdCalendarCalendarViewEventIdMicrosoftGraphDismissReminderRoute,
  postUsersUserIdCalendarCalendarViewEventIdMicrosoftGraphForwardRoute,
  postUsersUserIdCalendarCalendarViewEventIdMicrosoftGraphSnoozeReminderRoute,
  postUsersUserIdCalendarCalendarViewEventIdMicrosoftGraphTentativelyAcceptRoute,
  postUsersUserIdCalendarEventsEventIdAttachmentsMicrosoftGraphCreateUploadSessionRoute,
  postUsersUserIdCalendarEventsEventIdInstancesEventId1AttachmentsMicrosoftGraphCreateUploadSessionRoute,
  postUsersUserIdCalendarEventsEventIdInstancesEventId1MicrosoftGraphAcceptRoute,
  postUsersUserIdCalendarEventsEventIdInstancesEventId1MicrosoftGraphCancelRoute,
  postUsersUserIdCalendarEventsEventIdInstancesEventId1MicrosoftGraphDeclineRoute,
  postUsersUserIdCalendarEventsEventIdInstancesEventId1MicrosoftGraphDismissReminderRoute,
  postUsersUserIdCalendarEventsEventIdInstancesEventId1MicrosoftGraphForwardRoute,
  postUsersUserIdCalendarEventsEventIdInstancesEventId1MicrosoftGraphSnoozeReminderRoute,
  postUsersUserIdCalendarEventsEventIdInstancesEventId1MicrosoftGraphTentativelyAcceptRoute,
  postUsersUserIdCalendarEventsEventIdMicrosoftGraphAcceptRoute,
  postUsersUserIdCalendarEventsEventIdMicrosoftGraphCancelRoute,
  postUsersUserIdCalendarEventsEventIdMicrosoftGraphDeclineRoute,
  postUsersUserIdCalendarEventsEventIdMicrosoftGraphDismissReminderRoute,
  postUsersUserIdCalendarEventsEventIdMicrosoftGraphForwardRoute,
  postUsersUserIdCalendarEventsEventIdMicrosoftGraphSnoozeReminderRoute,
  postUsersUserIdCalendarEventsEventIdMicrosoftGraphTentativelyAcceptRoute,
  postUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdAttachmentsMicrosoftGraphCreateUploadSessionRoute,
  postUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1AttachmentsMicrosoftGraphCreateUploadSessionRoute,
  postUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1MicrosoftGraphAcceptRoute,
  postUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1MicrosoftGraphCancelRoute,
  postUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1MicrosoftGraphDeclineRoute,
  postUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1MicrosoftGraphDismissReminderRoute,
  postUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1MicrosoftGraphForwardRoute,
  postUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1MicrosoftGraphSnoozeReminderRoute,
  postUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1MicrosoftGraphTentativelyAcceptRoute,
  postUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdMicrosoftGraphAcceptRoute,
  postUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdMicrosoftGraphCancelRoute,
  postUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdMicrosoftGraphDeclineRoute,
  postUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdMicrosoftGraphDismissReminderRoute,
  postUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdMicrosoftGraphForwardRoute,
  postUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdMicrosoftGraphSnoozeReminderRoute,
  postUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdMicrosoftGraphTentativelyAcceptRoute,
  postUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdAttachmentsMicrosoftGraphCreateUploadSessionRoute,
  postUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdInstancesEventId1AttachmentsMicrosoftGraphCreateUploadSessionRoute,
  postUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdInstancesEventId1MicrosoftGraphAcceptRoute,
  postUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdInstancesEventId1MicrosoftGraphCancelRoute,
  postUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdInstancesEventId1MicrosoftGraphDeclineRoute,
  postUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdInstancesEventId1MicrosoftGraphDismissReminderRoute,
  postUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdInstancesEventId1MicrosoftGraphForwardRoute,
  postUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdInstancesEventId1MicrosoftGraphSnoozeReminderRoute,
  postUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdInstancesEventId1MicrosoftGraphTentativelyAcceptRoute,
  postUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdMicrosoftGraphAcceptRoute,
  postUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdMicrosoftGraphCancelRoute,
  postUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdMicrosoftGraphDeclineRoute,
  postUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdMicrosoftGraphDismissReminderRoute,
  postUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdMicrosoftGraphForwardRoute,
  postUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdMicrosoftGraphSnoozeReminderRoute,
  postUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdMicrosoftGraphTentativelyAcceptRoute,
  postUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdMicrosoftGraphGetScheduleRoute,
  postUsersUserIdCalendarMicrosoftGraphGetScheduleRoute,
  postUsersUserIdCalendarsCalendarIdCalendarViewEventIdAttachmentsMicrosoftGraphCreateUploadSessionRoute,
  postUsersUserIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1AttachmentsMicrosoftGraphCreateUploadSessionRoute,
  postUsersUserIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1MicrosoftGraphAcceptRoute,
  postUsersUserIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1MicrosoftGraphCancelRoute,
  postUsersUserIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1MicrosoftGraphDeclineRoute,
  postUsersUserIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1MicrosoftGraphDismissReminderRoute,
  postUsersUserIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1MicrosoftGraphForwardRoute,
  postUsersUserIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1MicrosoftGraphSnoozeReminderRoute,
  postUsersUserIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1MicrosoftGraphTentativelyAcceptRoute,
  postUsersUserIdCalendarsCalendarIdCalendarViewEventIdMicrosoftGraphAcceptRoute,
  postUsersUserIdCalendarsCalendarIdCalendarViewEventIdMicrosoftGraphCancelRoute,
  postUsersUserIdCalendarsCalendarIdCalendarViewEventIdMicrosoftGraphDeclineRoute,
  postUsersUserIdCalendarsCalendarIdCalendarViewEventIdMicrosoftGraphDismissReminderRoute,
  postUsersUserIdCalendarsCalendarIdCalendarViewEventIdMicrosoftGraphForwardRoute,
  postUsersUserIdCalendarsCalendarIdCalendarViewEventIdMicrosoftGraphSnoozeReminderRoute,
  postUsersUserIdCalendarsCalendarIdCalendarViewEventIdMicrosoftGraphTentativelyAcceptRoute,
  postUsersUserIdCalendarsCalendarIdEventsEventIdAttachmentsMicrosoftGraphCreateUploadSessionRoute,
  postUsersUserIdCalendarsCalendarIdEventsEventIdInstancesEventId1AttachmentsMicrosoftGraphCreateUploadSessionRoute,
  postUsersUserIdCalendarsCalendarIdEventsEventIdInstancesEventId1MicrosoftGraphAcceptRoute,
  postUsersUserIdCalendarsCalendarIdEventsEventIdInstancesEventId1MicrosoftGraphCancelRoute,
  postUsersUserIdCalendarsCalendarIdEventsEventIdInstancesEventId1MicrosoftGraphDeclineRoute,
  postUsersUserIdCalendarsCalendarIdEventsEventIdInstancesEventId1MicrosoftGraphDismissReminderRoute,
  postUsersUserIdCalendarsCalendarIdEventsEventIdInstancesEventId1MicrosoftGraphForwardRoute,
  postUsersUserIdCalendarsCalendarIdEventsEventIdInstancesEventId1MicrosoftGraphSnoozeReminderRoute,
  postUsersUserIdCalendarsCalendarIdEventsEventIdInstancesEventId1MicrosoftGraphTentativelyAcceptRoute,
  postUsersUserIdCalendarsCalendarIdEventsEventIdMicrosoftGraphAcceptRoute,
  postUsersUserIdCalendarsCalendarIdEventsEventIdMicrosoftGraphCancelRoute,
  postUsersUserIdCalendarsCalendarIdEventsEventIdMicrosoftGraphDeclineRoute,
  postUsersUserIdCalendarsCalendarIdEventsEventIdMicrosoftGraphDismissReminderRoute,
  postUsersUserIdCalendarsCalendarIdEventsEventIdMicrosoftGraphForwardRoute,
  postUsersUserIdCalendarsCalendarIdEventsEventIdMicrosoftGraphSnoozeReminderRoute,
  postUsersUserIdCalendarsCalendarIdEventsEventIdMicrosoftGraphTentativelyAcceptRoute,
  postUsersUserIdCalendarsCalendarIdMicrosoftGraphGetScheduleRoute,
  postUsersUserIdCalendarViewEventIdAttachmentsMicrosoftGraphCreateUploadSessionRoute,
  postUsersUserIdCalendarViewEventIdInstancesEventId1AttachmentsMicrosoftGraphCreateUploadSessionRoute,
  postUsersUserIdCalendarViewEventIdInstancesEventId1MicrosoftGraphAcceptRoute,
  postUsersUserIdCalendarViewEventIdInstancesEventId1MicrosoftGraphCancelRoute,
  postUsersUserIdCalendarViewEventIdInstancesEventId1MicrosoftGraphDeclineRoute,
  postUsersUserIdCalendarViewEventIdInstancesEventId1MicrosoftGraphDismissReminderRoute,
  postUsersUserIdCalendarViewEventIdInstancesEventId1MicrosoftGraphForwardRoute,
  postUsersUserIdCalendarViewEventIdInstancesEventId1MicrosoftGraphSnoozeReminderRoute,
  postUsersUserIdCalendarViewEventIdInstancesEventId1MicrosoftGraphTentativelyAcceptRoute,
  postUsersUserIdCalendarViewEventIdMicrosoftGraphAcceptRoute,
  postUsersUserIdCalendarViewEventIdMicrosoftGraphCancelRoute,
  postUsersUserIdCalendarViewEventIdMicrosoftGraphDeclineRoute,
  postUsersUserIdCalendarViewEventIdMicrosoftGraphDismissReminderRoute,
  postUsersUserIdCalendarViewEventIdMicrosoftGraphForwardRoute,
  postUsersUserIdCalendarViewEventIdMicrosoftGraphSnoozeReminderRoute,
  postUsersUserIdCalendarViewEventIdMicrosoftGraphTentativelyAcceptRoute,
  postUsersUserIdChatsChatIdInstalledAppsTeamsAppInstallationIdMicrosoftGraphUpgradeRoute,
  postUsersUserIdChatsChatIdMembersMicrosoftGraphAddRoute,
  postUsersUserIdChatsChatIdMessagesChatMessageIdMicrosoftGraphSoftDeleteRoute,
  postUsersUserIdChatsChatIdMessagesChatMessageIdMicrosoftGraphUndoSoftDeleteRoute,
  postUsersUserIdChatsChatIdMessagesChatMessageIdRepliesChatMessageId1MicrosoftGraphSoftDeleteRoute,
  postUsersUserIdChatsChatIdMessagesChatMessageIdRepliesChatMessageId1MicrosoftGraphUndoSoftDeleteRoute,
  postUsersUserIdChatsChatIdMicrosoftGraphHideForUserRoute,
  postUsersUserIdChatsChatIdMicrosoftGraphMarkChatReadForUserRoute,
  postUsersUserIdChatsChatIdMicrosoftGraphMarkChatUnreadForUserRoute,
  postUsersUserIdChatsChatIdMicrosoftGraphSendActivityNotificationRoute,
  postUsersUserIdChatsChatIdMicrosoftGraphUnhideForUserRoute,
  postUsersUserIdEventsEventIdAttachmentsMicrosoftGraphCreateUploadSessionRoute,
  postUsersUserIdEventsEventIdInstancesEventId1AttachmentsMicrosoftGraphCreateUploadSessionRoute,
  postUsersUserIdEventsEventIdInstancesEventId1MicrosoftGraphAcceptRoute,
  postUsersUserIdEventsEventIdInstancesEventId1MicrosoftGraphCancelRoute,
  postUsersUserIdEventsEventIdInstancesEventId1MicrosoftGraphDeclineRoute,
  postUsersUserIdEventsEventIdInstancesEventId1MicrosoftGraphDismissReminderRoute,
  postUsersUserIdEventsEventIdInstancesEventId1MicrosoftGraphForwardRoute,
  postUsersUserIdEventsEventIdInstancesEventId1MicrosoftGraphSnoozeReminderRoute,
  postUsersUserIdEventsEventIdInstancesEventId1MicrosoftGraphTentativelyAcceptRoute,
  postUsersUserIdEventsEventIdMicrosoftGraphAcceptRoute,
  postUsersUserIdEventsEventIdMicrosoftGraphCancelRoute,
  postUsersUserIdEventsEventIdMicrosoftGraphDeclineRoute,
  postUsersUserIdEventsEventIdMicrosoftGraphDismissReminderRoute,
  postUsersUserIdEventsEventIdMicrosoftGraphForwardRoute,
  postUsersUserIdEventsEventIdMicrosoftGraphSnoozeReminderRoute,
  postUsersUserIdEventsEventIdMicrosoftGraphTentativelyAcceptRoute,
  postUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMembersMicrosoftGraphAddRoute,
  postUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdMicrosoftGraphSoftDeleteRoute,
  postUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdMicrosoftGraphUndoSoftDeleteRoute,
  postUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1MicrosoftGraphSoftDeleteRoute,
  postUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1MicrosoftGraphUndoSoftDeleteRoute,
  postUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMicrosoftGraphCompleteMigrationRoute,
  postUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMicrosoftGraphProvisionEmailRoute,
  postUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMicrosoftGraphRemoveEmailRoute,
  postUsersUserIdJoinedTeamsTeamIdInstalledAppsTeamsAppInstallationIdMicrosoftGraphUpgradeRoute,
  postUsersUserIdJoinedTeamsTeamIdMembersMicrosoftGraphAddRoute,
  postUsersUserIdJoinedTeamsTeamIdMicrosoftGraphArchiveRoute,
  postUsersUserIdJoinedTeamsTeamIdMicrosoftGraphCloneRoute,
  postUsersUserIdJoinedTeamsTeamIdMicrosoftGraphCompleteMigrationRoute,
  postUsersUserIdJoinedTeamsTeamIdMicrosoftGraphSendActivityNotificationRoute,
  postUsersUserIdJoinedTeamsTeamIdMicrosoftGraphUnarchiveRoute,
  postUsersUserIdJoinedTeamsTeamIdPrimaryChannelMembersMicrosoftGraphAddRoute,
  postUsersUserIdJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdMicrosoftGraphSoftDeleteRoute,
  postUsersUserIdJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdMicrosoftGraphUndoSoftDeleteRoute,
  postUsersUserIdJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1MicrosoftGraphSoftDeleteRoute,
  postUsersUserIdJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1MicrosoftGraphUndoSoftDeleteRoute,
  postUsersUserIdJoinedTeamsTeamIdPrimaryChannelMicrosoftGraphCompleteMigrationRoute,
  postUsersUserIdJoinedTeamsTeamIdPrimaryChannelMicrosoftGraphProvisionEmailRoute,
  postUsersUserIdJoinedTeamsTeamIdPrimaryChannelMicrosoftGraphRemoveEmailRoute,
  postUsersUserIdJoinedTeamsTeamIdScheduleMicrosoftGraphShareRoute,
  postUsersUserIdMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMessageIdAttachmentsMicrosoftGraphCreateUploadSessionRoute,
  postUsersUserIdMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMessageIdMicrosoftGraphCopyRoute,
  postUsersUserIdMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMessageIdMicrosoftGraphCreateForwardRoute,
  postUsersUserIdMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMessageIdMicrosoftGraphCreateReplyAllRoute,
  postUsersUserIdMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMessageIdMicrosoftGraphCreateReplyRoute,
  postUsersUserIdMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMessageIdMicrosoftGraphForwardRoute,
  postUsersUserIdMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMessageIdMicrosoftGraphMoveRoute,
  postUsersUserIdMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMessageIdMicrosoftGraphReplyAllRoute,
  postUsersUserIdMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMessageIdMicrosoftGraphReplyRoute,
  postUsersUserIdMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMessageIdMicrosoftGraphSendRoute,
  postUsersUserIdMailFoldersMailFolderIdChildFoldersMailFolderId1MicrosoftGraphCopyRoute,
  postUsersUserIdMailFoldersMailFolderIdChildFoldersMailFolderId1MicrosoftGraphMoveRoute,
  postUsersUserIdMailFoldersMailFolderIdMessagesMessageIdAttachmentsMicrosoftGraphCreateUploadSessionRoute,
  postUsersUserIdMailFoldersMailFolderIdMessagesMessageIdMicrosoftGraphCopyRoute,
  postUsersUserIdMailFoldersMailFolderIdMessagesMessageIdMicrosoftGraphCreateForwardRoute,
  postUsersUserIdMailFoldersMailFolderIdMessagesMessageIdMicrosoftGraphCreateReplyAllRoute,
  postUsersUserIdMailFoldersMailFolderIdMessagesMessageIdMicrosoftGraphCreateReplyRoute,
  postUsersUserIdMailFoldersMailFolderIdMessagesMessageIdMicrosoftGraphForwardRoute,
  postUsersUserIdMailFoldersMailFolderIdMessagesMessageIdMicrosoftGraphMoveRoute,
  postUsersUserIdMailFoldersMailFolderIdMessagesMessageIdMicrosoftGraphReplyAllRoute,
  postUsersUserIdMailFoldersMailFolderIdMessagesMessageIdMicrosoftGraphReplyRoute,
  postUsersUserIdMailFoldersMailFolderIdMessagesMessageIdMicrosoftGraphSendRoute,
  postUsersUserIdMailFoldersMailFolderIdMicrosoftGraphCopyRoute,
  postUsersUserIdMailFoldersMailFolderIdMicrosoftGraphMoveRoute,
  postUsersUserIdManagedDevicesManagedDeviceIdMicrosoftGraphBypassActivationLockRoute,
  postUsersUserIdManagedDevicesManagedDeviceIdMicrosoftGraphCleanWindowsDeviceRoute,
  postUsersUserIdManagedDevicesManagedDeviceIdMicrosoftGraphDeleteUserFromSharedAppleDeviceRoute,
  postUsersUserIdManagedDevicesManagedDeviceIdMicrosoftGraphDisableLostModeRoute,
  postUsersUserIdManagedDevicesManagedDeviceIdMicrosoftGraphLocateDeviceRoute,
  postUsersUserIdManagedDevicesManagedDeviceIdMicrosoftGraphLogoutSharedAppleDeviceActiveUserRoute,
  postUsersUserIdManagedDevicesManagedDeviceIdMicrosoftGraphRebootNowRoute,
  postUsersUserIdManagedDevicesManagedDeviceIdMicrosoftGraphRecoverPasscodeRoute,
  postUsersUserIdManagedDevicesManagedDeviceIdMicrosoftGraphRemoteLockRoute,
  postUsersUserIdManagedDevicesManagedDeviceIdMicrosoftGraphRequestRemoteAssistanceRoute,
  postUsersUserIdManagedDevicesManagedDeviceIdMicrosoftGraphResetPasscodeRoute,
  postUsersUserIdManagedDevicesManagedDeviceIdMicrosoftGraphRetireRoute,
  postUsersUserIdManagedDevicesManagedDeviceIdMicrosoftGraphShutDownRoute,
  postUsersUserIdManagedDevicesManagedDeviceIdMicrosoftGraphSyncDeviceRoute,
  postUsersUserIdManagedDevicesManagedDeviceIdMicrosoftGraphUpdateWindowsDeviceAccountRoute,
  postUsersUserIdManagedDevicesManagedDeviceIdMicrosoftGraphWindowsDefenderScanRoute,
  postUsersUserIdManagedDevicesManagedDeviceIdMicrosoftGraphWindowsDefenderUpdateSignaturesRoute,
  postUsersUserIdManagedDevicesManagedDeviceIdMicrosoftGraphWipeRoute,
  postUsersUserIdMessagesMessageIdAttachmentsMicrosoftGraphCreateUploadSessionRoute,
  postUsersUserIdMessagesMessageIdMicrosoftGraphCopyRoute,
  postUsersUserIdMessagesMessageIdMicrosoftGraphCreateForwardRoute,
  postUsersUserIdMessagesMessageIdMicrosoftGraphCreateReplyAllRoute,
  postUsersUserIdMessagesMessageIdMicrosoftGraphCreateReplyRoute,
  postUsersUserIdMessagesMessageIdMicrosoftGraphForwardRoute,
  postUsersUserIdMessagesMessageIdMicrosoftGraphMoveRoute,
  postUsersUserIdMessagesMessageIdMicrosoftGraphReplyAllRoute,
  postUsersUserIdMessagesMessageIdMicrosoftGraphReplyRoute,
  postUsersUserIdMessagesMessageIdMicrosoftGraphSendRoute,
  postUsersUserIdMicrosoftGraphAssignLicenseRoute,
  postUsersUserIdMicrosoftGraphChangePasswordRoute,
  postUsersUserIdMicrosoftGraphCheckMemberGroupsRoute,
  postUsersUserIdMicrosoftGraphCheckMemberObjectsRoute,
  postUsersUserIdMicrosoftGraphExportPersonalDataRoute,
  postUsersUserIdMicrosoftGraphFindMeetingTimesRoute,
  postUsersUserIdMicrosoftGraphGetMailTipsRoute,
  postUsersUserIdMicrosoftGraphGetMemberGroupsRoute,
  postUsersUserIdMicrosoftGraphGetMemberObjectsRoute,
  postUsersUserIdMicrosoftGraphRemoveAllDevicesFromManagementRoute,
  postUsersUserIdMicrosoftGraphReprocessLicenseAssignmentRoute,
  postUsersUserIdMicrosoftGraphRestoreRoute,
  postUsersUserIdMicrosoftGraphRevokeSignInSessionsRoute,
  postUsersUserIdMicrosoftGraphSendMailRoute,
  postUsersUserIdMicrosoftGraphTranslateExchangeIdsRoute,
  postUsersUserIdMicrosoftGraphWipeManagedAppRegistrationsByDeviceTagRoute,
  postUsersUserIdOnenoteNotebooksMicrosoftGraphGetNotebookFromWebUrlRoute,
  postUsersUserIdOnenoteNotebooksNotebookIdMicrosoftGraphCopyNotebookRoute,
  postUsersUserIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdMicrosoftGraphCopyToNotebookRoute,
  postUsersUserIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdMicrosoftGraphCopyToSectionGroupRoute,
  postUsersUserIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdMicrosoftGraphCopyToSectionRoute,
  postUsersUserIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdMicrosoftGraphOnenotePatchContentRoute,
  postUsersUserIdOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdMicrosoftGraphCopyToNotebookRoute,
  postUsersUserIdOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdMicrosoftGraphCopyToSectionGroupRoute,
  postUsersUserIdOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdPagesOnenotePageIdMicrosoftGraphCopyToSectionRoute,
  postUsersUserIdOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdPagesOnenotePageIdMicrosoftGraphOnenotePatchContentRoute,
  postUsersUserIdOnenotePagesOnenotePageIdMicrosoftGraphCopyToSectionRoute,
  postUsersUserIdOnenotePagesOnenotePageIdMicrosoftGraphOnenotePatchContentRoute,
  postUsersUserIdOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdMicrosoftGraphCopyToNotebookRoute,
  postUsersUserIdOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdMicrosoftGraphCopyToSectionGroupRoute,
  postUsersUserIdOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdMicrosoftGraphCopyToSectionRoute,
  postUsersUserIdOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdMicrosoftGraphOnenotePatchContentRoute,
  postUsersUserIdOnenoteSectionsOnenoteSectionIdMicrosoftGraphCopyToNotebookRoute,
  postUsersUserIdOnenoteSectionsOnenoteSectionIdMicrosoftGraphCopyToSectionGroupRoute,
  postUsersUserIdOnenoteSectionsOnenoteSectionIdPagesOnenotePageIdMicrosoftGraphCopyToSectionRoute,
  postUsersUserIdOnenoteSectionsOnenoteSectionIdPagesOnenotePageIdMicrosoftGraphOnenotePatchContentRoute,
  postUsersUserIdOnlineMeetingsMicrosoftGraphCreateOrGetRoute,
  postUsersUserIdPresenceMicrosoftGraphClearPresenceRoute,
  postUsersUserIdPresenceMicrosoftGraphClearUserPreferredPresenceRoute,
  postUsersUserIdPresenceMicrosoftGraphSetPresenceRoute,
  postUsersUserIdPresenceMicrosoftGraphSetUserPreferredPresenceRoute,
  postUsersUserIdTeamworkMicrosoftGraphSendActivityNotificationRoute,
  postUsersUserIdTodoListsTodoTaskListIdTasksTodoTaskIdAttachmentsMicrosoftGraphCreateUploadSessionRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersActionsHandler = app
  .openapi(postUsersMicrosoftGraphGetAvailableExtensionPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersMicrosoftGraphGetByIdsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersMicrosoftGraphValidatePropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postUsersUserIdAuthenticationMethodsAuthenticationMethodIdMicrosoftGraphResetPasswordRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdAuthenticationPhoneMethodsPhoneAuthenticationMethodIdMicrosoftGraphDisableSmsSignInRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdAuthenticationPhoneMethodsPhoneAuthenticationMethodIdMicrosoftGraphEnableSmsSignInRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdCalendarCalendarViewEventIdAttachmentsMicrosoftGraphCreateUploadSessionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdCalendarCalendarViewEventIdInstancesEventId1AttachmentsMicrosoftGraphCreateUploadSessionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdCalendarCalendarViewEventIdInstancesEventId1MicrosoftGraphAcceptRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdCalendarCalendarViewEventIdInstancesEventId1MicrosoftGraphCancelRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdCalendarCalendarViewEventIdInstancesEventId1MicrosoftGraphDeclineRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdCalendarCalendarViewEventIdInstancesEventId1MicrosoftGraphDismissReminderRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdCalendarCalendarViewEventIdInstancesEventId1MicrosoftGraphForwardRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdCalendarCalendarViewEventIdInstancesEventId1MicrosoftGraphSnoozeReminderRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdCalendarCalendarViewEventIdInstancesEventId1MicrosoftGraphTentativelyAcceptRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postUsersUserIdCalendarCalendarViewEventIdMicrosoftGraphAcceptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdCalendarCalendarViewEventIdMicrosoftGraphCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdCalendarCalendarViewEventIdMicrosoftGraphDeclineRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdCalendarCalendarViewEventIdMicrosoftGraphDismissReminderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdCalendarCalendarViewEventIdMicrosoftGraphForwardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdCalendarCalendarViewEventIdMicrosoftGraphSnoozeReminderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdCalendarCalendarViewEventIdMicrosoftGraphTentativelyAcceptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postUsersUserIdCalendarEventsEventIdAttachmentsMicrosoftGraphCreateUploadSessionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdCalendarEventsEventIdInstancesEventId1AttachmentsMicrosoftGraphCreateUploadSessionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postUsersUserIdCalendarEventsEventIdInstancesEventId1MicrosoftGraphAcceptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdCalendarEventsEventIdInstancesEventId1MicrosoftGraphCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdCalendarEventsEventIdInstancesEventId1MicrosoftGraphDeclineRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postUsersUserIdCalendarEventsEventIdInstancesEventId1MicrosoftGraphDismissReminderRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postUsersUserIdCalendarEventsEventIdInstancesEventId1MicrosoftGraphForwardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postUsersUserIdCalendarEventsEventIdInstancesEventId1MicrosoftGraphSnoozeReminderRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdCalendarEventsEventIdInstancesEventId1MicrosoftGraphTentativelyAcceptRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postUsersUserIdCalendarEventsEventIdMicrosoftGraphAcceptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdCalendarEventsEventIdMicrosoftGraphCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdCalendarEventsEventIdMicrosoftGraphDeclineRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdCalendarEventsEventIdMicrosoftGraphDismissReminderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdCalendarEventsEventIdMicrosoftGraphForwardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdCalendarEventsEventIdMicrosoftGraphSnoozeReminderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdCalendarEventsEventIdMicrosoftGraphTentativelyAcceptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdCalendarMicrosoftGraphGetScheduleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdAttachmentsMicrosoftGraphCreateUploadSessionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1AttachmentsMicrosoftGraphCreateUploadSessionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1MicrosoftGraphAcceptRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1MicrosoftGraphCancelRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1MicrosoftGraphDeclineRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1MicrosoftGraphDismissReminderRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1MicrosoftGraphForwardRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1MicrosoftGraphSnoozeReminderRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1MicrosoftGraphTentativelyAcceptRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdMicrosoftGraphAcceptRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdMicrosoftGraphCancelRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdMicrosoftGraphDeclineRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdMicrosoftGraphDismissReminderRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdMicrosoftGraphForwardRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdMicrosoftGraphSnoozeReminderRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdMicrosoftGraphTentativelyAcceptRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdAttachmentsMicrosoftGraphCreateUploadSessionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdInstancesEventId1AttachmentsMicrosoftGraphCreateUploadSessionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdInstancesEventId1MicrosoftGraphAcceptRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdInstancesEventId1MicrosoftGraphCancelRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdInstancesEventId1MicrosoftGraphDeclineRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdInstancesEventId1MicrosoftGraphDismissReminderRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdInstancesEventId1MicrosoftGraphForwardRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdInstancesEventId1MicrosoftGraphSnoozeReminderRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdInstancesEventId1MicrosoftGraphTentativelyAcceptRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdMicrosoftGraphAcceptRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdMicrosoftGraphCancelRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdMicrosoftGraphDeclineRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdMicrosoftGraphDismissReminderRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdMicrosoftGraphForwardRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdMicrosoftGraphSnoozeReminderRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdMicrosoftGraphTentativelyAcceptRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdMicrosoftGraphGetScheduleRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdCalendarViewEventIdAttachmentsMicrosoftGraphCreateUploadSessionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdCalendarViewEventIdInstancesEventId1AttachmentsMicrosoftGraphCreateUploadSessionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postUsersUserIdCalendarViewEventIdInstancesEventId1MicrosoftGraphAcceptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdCalendarViewEventIdInstancesEventId1MicrosoftGraphCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdCalendarViewEventIdInstancesEventId1MicrosoftGraphDeclineRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postUsersUserIdCalendarViewEventIdInstancesEventId1MicrosoftGraphDismissReminderRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postUsersUserIdCalendarViewEventIdInstancesEventId1MicrosoftGraphForwardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postUsersUserIdCalendarViewEventIdInstancesEventId1MicrosoftGraphSnoozeReminderRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdCalendarViewEventIdInstancesEventId1MicrosoftGraphTentativelyAcceptRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postUsersUserIdCalendarViewEventIdMicrosoftGraphAcceptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdCalendarViewEventIdMicrosoftGraphCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdCalendarViewEventIdMicrosoftGraphDeclineRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdCalendarViewEventIdMicrosoftGraphDismissReminderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdCalendarViewEventIdMicrosoftGraphForwardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdCalendarViewEventIdMicrosoftGraphSnoozeReminderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdCalendarViewEventIdMicrosoftGraphTentativelyAcceptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postUsersUserIdCalendarsCalendarIdCalendarViewEventIdAttachmentsMicrosoftGraphCreateUploadSessionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1AttachmentsMicrosoftGraphCreateUploadSessionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1MicrosoftGraphAcceptRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1MicrosoftGraphCancelRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1MicrosoftGraphDeclineRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1MicrosoftGraphDismissReminderRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1MicrosoftGraphForwardRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1MicrosoftGraphSnoozeReminderRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1MicrosoftGraphTentativelyAcceptRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postUsersUserIdCalendarsCalendarIdCalendarViewEventIdMicrosoftGraphAcceptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdCalendarsCalendarIdCalendarViewEventIdMicrosoftGraphCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdCalendarsCalendarIdCalendarViewEventIdMicrosoftGraphDeclineRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postUsersUserIdCalendarsCalendarIdCalendarViewEventIdMicrosoftGraphDismissReminderRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postUsersUserIdCalendarsCalendarIdCalendarViewEventIdMicrosoftGraphForwardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postUsersUserIdCalendarsCalendarIdCalendarViewEventIdMicrosoftGraphSnoozeReminderRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdCalendarsCalendarIdCalendarViewEventIdMicrosoftGraphTentativelyAcceptRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdCalendarsCalendarIdEventsEventIdAttachmentsMicrosoftGraphCreateUploadSessionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdCalendarsCalendarIdEventsEventIdInstancesEventId1AttachmentsMicrosoftGraphCreateUploadSessionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdCalendarsCalendarIdEventsEventIdInstancesEventId1MicrosoftGraphAcceptRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdCalendarsCalendarIdEventsEventIdInstancesEventId1MicrosoftGraphCancelRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdCalendarsCalendarIdEventsEventIdInstancesEventId1MicrosoftGraphDeclineRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdCalendarsCalendarIdEventsEventIdInstancesEventId1MicrosoftGraphDismissReminderRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdCalendarsCalendarIdEventsEventIdInstancesEventId1MicrosoftGraphForwardRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdCalendarsCalendarIdEventsEventIdInstancesEventId1MicrosoftGraphSnoozeReminderRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdCalendarsCalendarIdEventsEventIdInstancesEventId1MicrosoftGraphTentativelyAcceptRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postUsersUserIdCalendarsCalendarIdEventsEventIdMicrosoftGraphAcceptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdCalendarsCalendarIdEventsEventIdMicrosoftGraphCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdCalendarsCalendarIdEventsEventIdMicrosoftGraphDeclineRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postUsersUserIdCalendarsCalendarIdEventsEventIdMicrosoftGraphDismissReminderRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postUsersUserIdCalendarsCalendarIdEventsEventIdMicrosoftGraphForwardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postUsersUserIdCalendarsCalendarIdEventsEventIdMicrosoftGraphSnoozeReminderRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdCalendarsCalendarIdEventsEventIdMicrosoftGraphTentativelyAcceptRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postUsersUserIdCalendarsCalendarIdMicrosoftGraphGetScheduleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postUsersUserIdChatsChatIdInstalledAppsTeamsAppInstallationIdMicrosoftGraphUpgradeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postUsersUserIdChatsChatIdMembersMicrosoftGraphAddRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdChatsChatIdMessagesChatMessageIdMicrosoftGraphSoftDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postUsersUserIdChatsChatIdMessagesChatMessageIdMicrosoftGraphUndoSoftDeleteRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdChatsChatIdMessagesChatMessageIdRepliesChatMessageId1MicrosoftGraphSoftDeleteRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdChatsChatIdMessagesChatMessageIdRepliesChatMessageId1MicrosoftGraphUndoSoftDeleteRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postUsersUserIdChatsChatIdMicrosoftGraphHideForUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdChatsChatIdMicrosoftGraphMarkChatReadForUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdChatsChatIdMicrosoftGraphMarkChatUnreadForUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdChatsChatIdMicrosoftGraphSendActivityNotificationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdChatsChatIdMicrosoftGraphUnhideForUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdEventsEventIdAttachmentsMicrosoftGraphCreateUploadSessionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postUsersUserIdEventsEventIdInstancesEventId1AttachmentsMicrosoftGraphCreateUploadSessionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postUsersUserIdEventsEventIdInstancesEventId1MicrosoftGraphAcceptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdEventsEventIdInstancesEventId1MicrosoftGraphCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdEventsEventIdInstancesEventId1MicrosoftGraphDeclineRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdEventsEventIdInstancesEventId1MicrosoftGraphDismissReminderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdEventsEventIdInstancesEventId1MicrosoftGraphForwardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdEventsEventIdInstancesEventId1MicrosoftGraphSnoozeReminderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postUsersUserIdEventsEventIdInstancesEventId1MicrosoftGraphTentativelyAcceptRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postUsersUserIdEventsEventIdMicrosoftGraphAcceptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdEventsEventIdMicrosoftGraphCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdEventsEventIdMicrosoftGraphDeclineRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdEventsEventIdMicrosoftGraphDismissReminderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdEventsEventIdMicrosoftGraphForwardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdEventsEventIdMicrosoftGraphSnoozeReminderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdEventsEventIdMicrosoftGraphTentativelyAcceptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMembersMicrosoftGraphAddRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdMicrosoftGraphSoftDeleteRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdMicrosoftGraphUndoSoftDeleteRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1MicrosoftGraphSoftDeleteRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1MicrosoftGraphUndoSoftDeleteRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMicrosoftGraphCompleteMigrationRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMicrosoftGraphProvisionEmailRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postUsersUserIdJoinedTeamsTeamIdChannelsChannelIdMicrosoftGraphRemoveEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postUsersUserIdJoinedTeamsTeamIdInstalledAppsTeamsAppInstallationIdMicrosoftGraphUpgradeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postUsersUserIdJoinedTeamsTeamIdMembersMicrosoftGraphAddRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdJoinedTeamsTeamIdMicrosoftGraphArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdJoinedTeamsTeamIdMicrosoftGraphCloneRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdJoinedTeamsTeamIdMicrosoftGraphCompleteMigrationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdJoinedTeamsTeamIdMicrosoftGraphSendActivityNotificationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdJoinedTeamsTeamIdMicrosoftGraphUnarchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdJoinedTeamsTeamIdPrimaryChannelMembersMicrosoftGraphAddRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postUsersUserIdJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdMicrosoftGraphSoftDeleteRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdMicrosoftGraphUndoSoftDeleteRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1MicrosoftGraphSoftDeleteRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1MicrosoftGraphUndoSoftDeleteRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdJoinedTeamsTeamIdPrimaryChannelMicrosoftGraphCompleteMigrationRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postUsersUserIdJoinedTeamsTeamIdPrimaryChannelMicrosoftGraphProvisionEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdJoinedTeamsTeamIdPrimaryChannelMicrosoftGraphRemoveEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdJoinedTeamsTeamIdScheduleMicrosoftGraphShareRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postUsersUserIdMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMessageIdAttachmentsMicrosoftGraphCreateUploadSessionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMessageIdMicrosoftGraphCopyRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMessageIdMicrosoftGraphCreateForwardRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMessageIdMicrosoftGraphCreateReplyRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMessageIdMicrosoftGraphCreateReplyAllRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMessageIdMicrosoftGraphForwardRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMessageIdMicrosoftGraphMoveRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMessageIdMicrosoftGraphReplyRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMessageIdMicrosoftGraphReplyAllRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMessageIdMicrosoftGraphSendRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdMailFoldersMailFolderIdChildFoldersMailFolderId1MicrosoftGraphCopyRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdMailFoldersMailFolderIdChildFoldersMailFolderId1MicrosoftGraphMoveRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdMailFoldersMailFolderIdMessagesMessageIdAttachmentsMicrosoftGraphCreateUploadSessionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postUsersUserIdMailFoldersMailFolderIdMessagesMessageIdMicrosoftGraphCopyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postUsersUserIdMailFoldersMailFolderIdMessagesMessageIdMicrosoftGraphCreateForwardRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdMailFoldersMailFolderIdMessagesMessageIdMicrosoftGraphCreateReplyRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdMailFoldersMailFolderIdMessagesMessageIdMicrosoftGraphCreateReplyAllRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdMailFoldersMailFolderIdMessagesMessageIdMicrosoftGraphForwardRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postUsersUserIdMailFoldersMailFolderIdMessagesMessageIdMicrosoftGraphMoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdMailFoldersMailFolderIdMessagesMessageIdMicrosoftGraphReplyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postUsersUserIdMailFoldersMailFolderIdMessagesMessageIdMicrosoftGraphReplyAllRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postUsersUserIdMailFoldersMailFolderIdMessagesMessageIdMicrosoftGraphSendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdMailFoldersMailFolderIdMicrosoftGraphCopyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdMailFoldersMailFolderIdMicrosoftGraphMoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postUsersUserIdManagedDevicesManagedDeviceIdMicrosoftGraphBypassActivationLockRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdManagedDevicesManagedDeviceIdMicrosoftGraphCleanWindowsDeviceRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdManagedDevicesManagedDeviceIdMicrosoftGraphDeleteUserFromSharedAppleDeviceRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postUsersUserIdManagedDevicesManagedDeviceIdMicrosoftGraphDisableLostModeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdManagedDevicesManagedDeviceIdMicrosoftGraphLocateDeviceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postUsersUserIdManagedDevicesManagedDeviceIdMicrosoftGraphLogoutSharedAppleDeviceActiveUserRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postUsersUserIdManagedDevicesManagedDeviceIdMicrosoftGraphRebootNowRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdManagedDevicesManagedDeviceIdMicrosoftGraphRecoverPasscodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdManagedDevicesManagedDeviceIdMicrosoftGraphRemoteLockRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postUsersUserIdManagedDevicesManagedDeviceIdMicrosoftGraphRequestRemoteAssistanceRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postUsersUserIdManagedDevicesManagedDeviceIdMicrosoftGraphResetPasscodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdManagedDevicesManagedDeviceIdMicrosoftGraphRetireRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdManagedDevicesManagedDeviceIdMicrosoftGraphShutDownRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdManagedDevicesManagedDeviceIdMicrosoftGraphSyncDeviceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postUsersUserIdManagedDevicesManagedDeviceIdMicrosoftGraphUpdateWindowsDeviceAccountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdManagedDevicesManagedDeviceIdMicrosoftGraphWindowsDefenderScanRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdManagedDevicesManagedDeviceIdMicrosoftGraphWindowsDefenderUpdateSignaturesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postUsersUserIdManagedDevicesManagedDeviceIdMicrosoftGraphWipeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postUsersUserIdMessagesMessageIdAttachmentsMicrosoftGraphCreateUploadSessionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postUsersUserIdMessagesMessageIdMicrosoftGraphCopyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdMessagesMessageIdMicrosoftGraphCreateForwardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdMessagesMessageIdMicrosoftGraphCreateReplyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdMessagesMessageIdMicrosoftGraphCreateReplyAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdMessagesMessageIdMicrosoftGraphForwardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdMessagesMessageIdMicrosoftGraphMoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdMessagesMessageIdMicrosoftGraphReplyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdMessagesMessageIdMicrosoftGraphReplyAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdMessagesMessageIdMicrosoftGraphSendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdMicrosoftGraphAssignLicenseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdMicrosoftGraphChangePasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdMicrosoftGraphCheckMemberGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdMicrosoftGraphCheckMemberObjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdMicrosoftGraphExportPersonalDataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdMicrosoftGraphFindMeetingTimesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdMicrosoftGraphGetMailTipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdMicrosoftGraphGetMemberGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdMicrosoftGraphGetMemberObjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdMicrosoftGraphRemoveAllDevicesFromManagementRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdMicrosoftGraphReprocessLicenseAssignmentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdMicrosoftGraphRestoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdMicrosoftGraphRevokeSignInSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdMicrosoftGraphSendMailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdMicrosoftGraphTranslateExchangeIdsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdMicrosoftGraphWipeManagedAppRegistrationsByDeviceTagRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdOnenoteNotebooksMicrosoftGraphGetNotebookFromWebUrlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdOnenoteNotebooksNotebookIdMicrosoftGraphCopyNotebookRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postUsersUserIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdMicrosoftGraphCopyToNotebookRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdMicrosoftGraphCopyToSectionGroupRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdMicrosoftGraphCopyToSectionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdMicrosoftGraphOnenotePatchContentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdMicrosoftGraphCopyToNotebookRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdMicrosoftGraphCopyToSectionGroupRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdPagesOnenotePageIdMicrosoftGraphCopyToSectionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdPagesOnenotePageIdMicrosoftGraphOnenotePatchContentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postUsersUserIdOnenotePagesOnenotePageIdMicrosoftGraphCopyToSectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdOnenotePagesOnenotePageIdMicrosoftGraphOnenotePatchContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postUsersUserIdOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdMicrosoftGraphCopyToNotebookRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdMicrosoftGraphCopyToSectionGroupRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdMicrosoftGraphCopyToSectionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdMicrosoftGraphOnenotePatchContentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postUsersUserIdOnenoteSectionsOnenoteSectionIdMicrosoftGraphCopyToNotebookRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postUsersUserIdOnenoteSectionsOnenoteSectionIdMicrosoftGraphCopyToSectionGroupRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdOnenoteSectionsOnenoteSectionIdPagesOnenotePageIdMicrosoftGraphCopyToSectionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdOnenoteSectionsOnenoteSectionIdPagesOnenotePageIdMicrosoftGraphOnenotePatchContentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postUsersUserIdOnlineMeetingsMicrosoftGraphCreateOrGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdPresenceMicrosoftGraphClearPresenceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdPresenceMicrosoftGraphClearUserPreferredPresenceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdPresenceMicrosoftGraphSetPresenceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdPresenceMicrosoftGraphSetUserPreferredPresenceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdTeamworkMicrosoftGraphSendActivityNotificationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postUsersUserIdTodoListsTodoTaskListIdTasksTodoTaskIdAttachmentsMicrosoftGraphCreateUploadSessionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
