import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postMeAuthenticationMethodsAuthenticationMethodIdMicrosoftGraphResetPasswordRoute,
  postMeAuthenticationPhoneMethodsPhoneAuthenticationMethodIdMicrosoftGraphDisableSmsSignInRoute,
  postMeAuthenticationPhoneMethodsPhoneAuthenticationMethodIdMicrosoftGraphEnableSmsSignInRoute,
  postMeCalendarCalendarViewEventIdAttachmentsMicrosoftGraphCreateUploadSessionRoute,
  postMeCalendarCalendarViewEventIdInstancesEventId1AttachmentsMicrosoftGraphCreateUploadSessionRoute,
  postMeCalendarCalendarViewEventIdInstancesEventId1MicrosoftGraphAcceptRoute,
  postMeCalendarCalendarViewEventIdInstancesEventId1MicrosoftGraphCancelRoute,
  postMeCalendarCalendarViewEventIdInstancesEventId1MicrosoftGraphDeclineRoute,
  postMeCalendarCalendarViewEventIdInstancesEventId1MicrosoftGraphDismissReminderRoute,
  postMeCalendarCalendarViewEventIdInstancesEventId1MicrosoftGraphForwardRoute,
  postMeCalendarCalendarViewEventIdInstancesEventId1MicrosoftGraphSnoozeReminderRoute,
  postMeCalendarCalendarViewEventIdInstancesEventId1MicrosoftGraphTentativelyAcceptRoute,
  postMeCalendarCalendarViewEventIdMicrosoftGraphAcceptRoute,
  postMeCalendarCalendarViewEventIdMicrosoftGraphCancelRoute,
  postMeCalendarCalendarViewEventIdMicrosoftGraphDeclineRoute,
  postMeCalendarCalendarViewEventIdMicrosoftGraphDismissReminderRoute,
  postMeCalendarCalendarViewEventIdMicrosoftGraphForwardRoute,
  postMeCalendarCalendarViewEventIdMicrosoftGraphSnoozeReminderRoute,
  postMeCalendarCalendarViewEventIdMicrosoftGraphTentativelyAcceptRoute,
  postMeCalendarEventsEventIdAttachmentsMicrosoftGraphCreateUploadSessionRoute,
  postMeCalendarEventsEventIdInstancesEventId1AttachmentsMicrosoftGraphCreateUploadSessionRoute,
  postMeCalendarEventsEventIdInstancesEventId1MicrosoftGraphAcceptRoute,
  postMeCalendarEventsEventIdInstancesEventId1MicrosoftGraphCancelRoute,
  postMeCalendarEventsEventIdInstancesEventId1MicrosoftGraphDeclineRoute,
  postMeCalendarEventsEventIdInstancesEventId1MicrosoftGraphDismissReminderRoute,
  postMeCalendarEventsEventIdInstancesEventId1MicrosoftGraphForwardRoute,
  postMeCalendarEventsEventIdInstancesEventId1MicrosoftGraphSnoozeReminderRoute,
  postMeCalendarEventsEventIdInstancesEventId1MicrosoftGraphTentativelyAcceptRoute,
  postMeCalendarEventsEventIdMicrosoftGraphAcceptRoute,
  postMeCalendarEventsEventIdMicrosoftGraphCancelRoute,
  postMeCalendarEventsEventIdMicrosoftGraphDeclineRoute,
  postMeCalendarEventsEventIdMicrosoftGraphDismissReminderRoute,
  postMeCalendarEventsEventIdMicrosoftGraphForwardRoute,
  postMeCalendarEventsEventIdMicrosoftGraphSnoozeReminderRoute,
  postMeCalendarEventsEventIdMicrosoftGraphTentativelyAcceptRoute,
  postMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdAttachmentsMicrosoftGraphCreateUploadSessionRoute,
  postMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1AttachmentsMicrosoftGraphCreateUploadSessionRoute,
  postMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1MicrosoftGraphAcceptRoute,
  postMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1MicrosoftGraphCancelRoute,
  postMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1MicrosoftGraphDeclineRoute,
  postMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1MicrosoftGraphDismissReminderRoute,
  postMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1MicrosoftGraphForwardRoute,
  postMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1MicrosoftGraphSnoozeReminderRoute,
  postMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1MicrosoftGraphTentativelyAcceptRoute,
  postMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdMicrosoftGraphAcceptRoute,
  postMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdMicrosoftGraphCancelRoute,
  postMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdMicrosoftGraphDeclineRoute,
  postMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdMicrosoftGraphDismissReminderRoute,
  postMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdMicrosoftGraphForwardRoute,
  postMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdMicrosoftGraphSnoozeReminderRoute,
  postMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdMicrosoftGraphTentativelyAcceptRoute,
  postMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdAttachmentsMicrosoftGraphCreateUploadSessionRoute,
  postMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdInstancesEventId1AttachmentsMicrosoftGraphCreateUploadSessionRoute,
  postMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdInstancesEventId1MicrosoftGraphAcceptRoute,
  postMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdInstancesEventId1MicrosoftGraphCancelRoute,
  postMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdInstancesEventId1MicrosoftGraphDeclineRoute,
  postMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdInstancesEventId1MicrosoftGraphDismissReminderRoute,
  postMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdInstancesEventId1MicrosoftGraphForwardRoute,
  postMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdInstancesEventId1MicrosoftGraphSnoozeReminderRoute,
  postMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdInstancesEventId1MicrosoftGraphTentativelyAcceptRoute,
  postMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdMicrosoftGraphAcceptRoute,
  postMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdMicrosoftGraphCancelRoute,
  postMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdMicrosoftGraphDeclineRoute,
  postMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdMicrosoftGraphDismissReminderRoute,
  postMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdMicrosoftGraphForwardRoute,
  postMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdMicrosoftGraphSnoozeReminderRoute,
  postMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdMicrosoftGraphTentativelyAcceptRoute,
  postMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdMicrosoftGraphGetScheduleRoute,
  postMeCalendarMicrosoftGraphGetScheduleRoute,
  postMeCalendarsCalendarIdCalendarViewEventIdAttachmentsMicrosoftGraphCreateUploadSessionRoute,
  postMeCalendarsCalendarIdCalendarViewEventIdInstancesEventId1AttachmentsMicrosoftGraphCreateUploadSessionRoute,
  postMeCalendarsCalendarIdCalendarViewEventIdInstancesEventId1MicrosoftGraphAcceptRoute,
  postMeCalendarsCalendarIdCalendarViewEventIdInstancesEventId1MicrosoftGraphCancelRoute,
  postMeCalendarsCalendarIdCalendarViewEventIdInstancesEventId1MicrosoftGraphDeclineRoute,
  postMeCalendarsCalendarIdCalendarViewEventIdInstancesEventId1MicrosoftGraphDismissReminderRoute,
  postMeCalendarsCalendarIdCalendarViewEventIdInstancesEventId1MicrosoftGraphForwardRoute,
  postMeCalendarsCalendarIdCalendarViewEventIdInstancesEventId1MicrosoftGraphSnoozeReminderRoute,
  postMeCalendarsCalendarIdCalendarViewEventIdInstancesEventId1MicrosoftGraphTentativelyAcceptRoute,
  postMeCalendarsCalendarIdCalendarViewEventIdMicrosoftGraphAcceptRoute,
  postMeCalendarsCalendarIdCalendarViewEventIdMicrosoftGraphCancelRoute,
  postMeCalendarsCalendarIdCalendarViewEventIdMicrosoftGraphDeclineRoute,
  postMeCalendarsCalendarIdCalendarViewEventIdMicrosoftGraphDismissReminderRoute,
  postMeCalendarsCalendarIdCalendarViewEventIdMicrosoftGraphForwardRoute,
  postMeCalendarsCalendarIdCalendarViewEventIdMicrosoftGraphSnoozeReminderRoute,
  postMeCalendarsCalendarIdCalendarViewEventIdMicrosoftGraphTentativelyAcceptRoute,
  postMeCalendarsCalendarIdEventsEventIdAttachmentsMicrosoftGraphCreateUploadSessionRoute,
  postMeCalendarsCalendarIdEventsEventIdInstancesEventId1AttachmentsMicrosoftGraphCreateUploadSessionRoute,
  postMeCalendarsCalendarIdEventsEventIdInstancesEventId1MicrosoftGraphAcceptRoute,
  postMeCalendarsCalendarIdEventsEventIdInstancesEventId1MicrosoftGraphCancelRoute,
  postMeCalendarsCalendarIdEventsEventIdInstancesEventId1MicrosoftGraphDeclineRoute,
  postMeCalendarsCalendarIdEventsEventIdInstancesEventId1MicrosoftGraphDismissReminderRoute,
  postMeCalendarsCalendarIdEventsEventIdInstancesEventId1MicrosoftGraphForwardRoute,
  postMeCalendarsCalendarIdEventsEventIdInstancesEventId1MicrosoftGraphSnoozeReminderRoute,
  postMeCalendarsCalendarIdEventsEventIdInstancesEventId1MicrosoftGraphTentativelyAcceptRoute,
  postMeCalendarsCalendarIdEventsEventIdMicrosoftGraphAcceptRoute,
  postMeCalendarsCalendarIdEventsEventIdMicrosoftGraphCancelRoute,
  postMeCalendarsCalendarIdEventsEventIdMicrosoftGraphDeclineRoute,
  postMeCalendarsCalendarIdEventsEventIdMicrosoftGraphDismissReminderRoute,
  postMeCalendarsCalendarIdEventsEventIdMicrosoftGraphForwardRoute,
  postMeCalendarsCalendarIdEventsEventIdMicrosoftGraphSnoozeReminderRoute,
  postMeCalendarsCalendarIdEventsEventIdMicrosoftGraphTentativelyAcceptRoute,
  postMeCalendarsCalendarIdMicrosoftGraphGetScheduleRoute,
  postMeCalendarViewEventIdAttachmentsMicrosoftGraphCreateUploadSessionRoute,
  postMeCalendarViewEventIdInstancesEventId1AttachmentsMicrosoftGraphCreateUploadSessionRoute,
  postMeCalendarViewEventIdInstancesEventId1MicrosoftGraphAcceptRoute,
  postMeCalendarViewEventIdInstancesEventId1MicrosoftGraphCancelRoute,
  postMeCalendarViewEventIdInstancesEventId1MicrosoftGraphDeclineRoute,
  postMeCalendarViewEventIdInstancesEventId1MicrosoftGraphDismissReminderRoute,
  postMeCalendarViewEventIdInstancesEventId1MicrosoftGraphForwardRoute,
  postMeCalendarViewEventIdInstancesEventId1MicrosoftGraphSnoozeReminderRoute,
  postMeCalendarViewEventIdInstancesEventId1MicrosoftGraphTentativelyAcceptRoute,
  postMeCalendarViewEventIdMicrosoftGraphAcceptRoute,
  postMeCalendarViewEventIdMicrosoftGraphCancelRoute,
  postMeCalendarViewEventIdMicrosoftGraphDeclineRoute,
  postMeCalendarViewEventIdMicrosoftGraphDismissReminderRoute,
  postMeCalendarViewEventIdMicrosoftGraphForwardRoute,
  postMeCalendarViewEventIdMicrosoftGraphSnoozeReminderRoute,
  postMeCalendarViewEventIdMicrosoftGraphTentativelyAcceptRoute,
  postMeChatsChatIdInstalledAppsTeamsAppInstallationIdMicrosoftGraphUpgradeRoute,
  postMeChatsChatIdMembersMicrosoftGraphAddRoute,
  postMeChatsChatIdMessagesChatMessageIdMicrosoftGraphSoftDeleteRoute,
  postMeChatsChatIdMessagesChatMessageIdMicrosoftGraphUndoSoftDeleteRoute,
  postMeChatsChatIdMessagesChatMessageIdRepliesChatMessageId1MicrosoftGraphSoftDeleteRoute,
  postMeChatsChatIdMessagesChatMessageIdRepliesChatMessageId1MicrosoftGraphUndoSoftDeleteRoute,
  postMeChatsChatIdMicrosoftGraphHideForUserRoute,
  postMeChatsChatIdMicrosoftGraphMarkChatReadForUserRoute,
  postMeChatsChatIdMicrosoftGraphMarkChatUnreadForUserRoute,
  postMeChatsChatIdMicrosoftGraphSendActivityNotificationRoute,
  postMeChatsChatIdMicrosoftGraphUnhideForUserRoute,
  postMeEventsEventIdAttachmentsMicrosoftGraphCreateUploadSessionRoute,
  postMeEventsEventIdInstancesEventId1AttachmentsMicrosoftGraphCreateUploadSessionRoute,
  postMeEventsEventIdInstancesEventId1MicrosoftGraphAcceptRoute,
  postMeEventsEventIdInstancesEventId1MicrosoftGraphCancelRoute,
  postMeEventsEventIdInstancesEventId1MicrosoftGraphDeclineRoute,
  postMeEventsEventIdInstancesEventId1MicrosoftGraphDismissReminderRoute,
  postMeEventsEventIdInstancesEventId1MicrosoftGraphForwardRoute,
  postMeEventsEventIdInstancesEventId1MicrosoftGraphSnoozeReminderRoute,
  postMeEventsEventIdInstancesEventId1MicrosoftGraphTentativelyAcceptRoute,
  postMeEventsEventIdMicrosoftGraphAcceptRoute,
  postMeEventsEventIdMicrosoftGraphCancelRoute,
  postMeEventsEventIdMicrosoftGraphDeclineRoute,
  postMeEventsEventIdMicrosoftGraphDismissReminderRoute,
  postMeEventsEventIdMicrosoftGraphForwardRoute,
  postMeEventsEventIdMicrosoftGraphSnoozeReminderRoute,
  postMeEventsEventIdMicrosoftGraphTentativelyAcceptRoute,
  postMeJoinedTeamsTeamIdChannelsChannelIdMembersMicrosoftGraphAddRoute,
  postMeJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdMicrosoftGraphSoftDeleteRoute,
  postMeJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdMicrosoftGraphUndoSoftDeleteRoute,
  postMeJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1MicrosoftGraphSoftDeleteRoute,
  postMeJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1MicrosoftGraphUndoSoftDeleteRoute,
  postMeJoinedTeamsTeamIdChannelsChannelIdMicrosoftGraphCompleteMigrationRoute,
  postMeJoinedTeamsTeamIdChannelsChannelIdMicrosoftGraphProvisionEmailRoute,
  postMeJoinedTeamsTeamIdChannelsChannelIdMicrosoftGraphRemoveEmailRoute,
  postMeJoinedTeamsTeamIdInstalledAppsTeamsAppInstallationIdMicrosoftGraphUpgradeRoute,
  postMeJoinedTeamsTeamIdMembersMicrosoftGraphAddRoute,
  postMeJoinedTeamsTeamIdMicrosoftGraphArchiveRoute,
  postMeJoinedTeamsTeamIdMicrosoftGraphCloneRoute,
  postMeJoinedTeamsTeamIdMicrosoftGraphCompleteMigrationRoute,
  postMeJoinedTeamsTeamIdMicrosoftGraphSendActivityNotificationRoute,
  postMeJoinedTeamsTeamIdMicrosoftGraphUnarchiveRoute,
  postMeJoinedTeamsTeamIdPrimaryChannelMembersMicrosoftGraphAddRoute,
  postMeJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdMicrosoftGraphSoftDeleteRoute,
  postMeJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdMicrosoftGraphUndoSoftDeleteRoute,
  postMeJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1MicrosoftGraphSoftDeleteRoute,
  postMeJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1MicrosoftGraphUndoSoftDeleteRoute,
  postMeJoinedTeamsTeamIdPrimaryChannelMicrosoftGraphCompleteMigrationRoute,
  postMeJoinedTeamsTeamIdPrimaryChannelMicrosoftGraphProvisionEmailRoute,
  postMeJoinedTeamsTeamIdPrimaryChannelMicrosoftGraphRemoveEmailRoute,
  postMeJoinedTeamsTeamIdScheduleMicrosoftGraphShareRoute,
  postMeMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMessageIdAttachmentsMicrosoftGraphCreateUploadSessionRoute,
  postMeMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMessageIdMicrosoftGraphCopyRoute,
  postMeMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMessageIdMicrosoftGraphCreateForwardRoute,
  postMeMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMessageIdMicrosoftGraphCreateReplyAllRoute,
  postMeMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMessageIdMicrosoftGraphCreateReplyRoute,
  postMeMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMessageIdMicrosoftGraphForwardRoute,
  postMeMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMessageIdMicrosoftGraphMoveRoute,
  postMeMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMessageIdMicrosoftGraphReplyAllRoute,
  postMeMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMessageIdMicrosoftGraphReplyRoute,
  postMeMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMessageIdMicrosoftGraphSendRoute,
  postMeMailFoldersMailFolderIdChildFoldersMailFolderId1MicrosoftGraphCopyRoute,
  postMeMailFoldersMailFolderIdChildFoldersMailFolderId1MicrosoftGraphMoveRoute,
  postMeMailFoldersMailFolderIdMessagesMessageIdAttachmentsMicrosoftGraphCreateUploadSessionRoute,
  postMeMailFoldersMailFolderIdMessagesMessageIdMicrosoftGraphCopyRoute,
  postMeMailFoldersMailFolderIdMessagesMessageIdMicrosoftGraphCreateForwardRoute,
  postMeMailFoldersMailFolderIdMessagesMessageIdMicrosoftGraphCreateReplyAllRoute,
  postMeMailFoldersMailFolderIdMessagesMessageIdMicrosoftGraphCreateReplyRoute,
  postMeMailFoldersMailFolderIdMessagesMessageIdMicrosoftGraphForwardRoute,
  postMeMailFoldersMailFolderIdMessagesMessageIdMicrosoftGraphMoveRoute,
  postMeMailFoldersMailFolderIdMessagesMessageIdMicrosoftGraphReplyAllRoute,
  postMeMailFoldersMailFolderIdMessagesMessageIdMicrosoftGraphReplyRoute,
  postMeMailFoldersMailFolderIdMessagesMessageIdMicrosoftGraphSendRoute,
  postMeMailFoldersMailFolderIdMicrosoftGraphCopyRoute,
  postMeMailFoldersMailFolderIdMicrosoftGraphMoveRoute,
  postMeManagedDevicesManagedDeviceIdMicrosoftGraphBypassActivationLockRoute,
  postMeManagedDevicesManagedDeviceIdMicrosoftGraphCleanWindowsDeviceRoute,
  postMeManagedDevicesManagedDeviceIdMicrosoftGraphDeleteUserFromSharedAppleDeviceRoute,
  postMeManagedDevicesManagedDeviceIdMicrosoftGraphDisableLostModeRoute,
  postMeManagedDevicesManagedDeviceIdMicrosoftGraphLocateDeviceRoute,
  postMeManagedDevicesManagedDeviceIdMicrosoftGraphLogoutSharedAppleDeviceActiveUserRoute,
  postMeManagedDevicesManagedDeviceIdMicrosoftGraphRebootNowRoute,
  postMeManagedDevicesManagedDeviceIdMicrosoftGraphRecoverPasscodeRoute,
  postMeManagedDevicesManagedDeviceIdMicrosoftGraphRemoteLockRoute,
  postMeManagedDevicesManagedDeviceIdMicrosoftGraphRequestRemoteAssistanceRoute,
  postMeManagedDevicesManagedDeviceIdMicrosoftGraphResetPasscodeRoute,
  postMeManagedDevicesManagedDeviceIdMicrosoftGraphRetireRoute,
  postMeManagedDevicesManagedDeviceIdMicrosoftGraphShutDownRoute,
  postMeManagedDevicesManagedDeviceIdMicrosoftGraphSyncDeviceRoute,
  postMeManagedDevicesManagedDeviceIdMicrosoftGraphUpdateWindowsDeviceAccountRoute,
  postMeManagedDevicesManagedDeviceIdMicrosoftGraphWindowsDefenderScanRoute,
  postMeManagedDevicesManagedDeviceIdMicrosoftGraphWindowsDefenderUpdateSignaturesRoute,
  postMeManagedDevicesManagedDeviceIdMicrosoftGraphWipeRoute,
  postMeMessagesMessageIdAttachmentsMicrosoftGraphCreateUploadSessionRoute,
  postMeMessagesMessageIdMicrosoftGraphCopyRoute,
  postMeMessagesMessageIdMicrosoftGraphCreateForwardRoute,
  postMeMessagesMessageIdMicrosoftGraphCreateReplyAllRoute,
  postMeMessagesMessageIdMicrosoftGraphCreateReplyRoute,
  postMeMessagesMessageIdMicrosoftGraphForwardRoute,
  postMeMessagesMessageIdMicrosoftGraphMoveRoute,
  postMeMessagesMessageIdMicrosoftGraphReplyAllRoute,
  postMeMessagesMessageIdMicrosoftGraphReplyRoute,
  postMeMessagesMessageIdMicrosoftGraphSendRoute,
  postMeMicrosoftGraphAssignLicenseRoute,
  postMeMicrosoftGraphChangePasswordRoute,
  postMeMicrosoftGraphCheckMemberGroupsRoute,
  postMeMicrosoftGraphCheckMemberObjectsRoute,
  postMeMicrosoftGraphExportPersonalDataRoute,
  postMeMicrosoftGraphFindMeetingTimesRoute,
  postMeMicrosoftGraphGetMailTipsRoute,
  postMeMicrosoftGraphGetMemberGroupsRoute,
  postMeMicrosoftGraphGetMemberObjectsRoute,
  postMeMicrosoftGraphRemoveAllDevicesFromManagementRoute,
  postMeMicrosoftGraphReprocessLicenseAssignmentRoute,
  postMeMicrosoftGraphRestoreRoute,
  postMeMicrosoftGraphRevokeSignInSessionsRoute,
  postMeMicrosoftGraphSendMailRoute,
  postMeMicrosoftGraphTranslateExchangeIdsRoute,
  postMeMicrosoftGraphWipeManagedAppRegistrationsByDeviceTagRoute,
  postMeOnenoteNotebooksMicrosoftGraphGetNotebookFromWebUrlRoute,
  postMeOnenoteNotebooksNotebookIdMicrosoftGraphCopyNotebookRoute,
  postMeOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdMicrosoftGraphCopyToNotebookRoute,
  postMeOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdMicrosoftGraphCopyToSectionGroupRoute,
  postMeOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdMicrosoftGraphCopyToSectionRoute,
  postMeOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdMicrosoftGraphOnenotePatchContentRoute,
  postMeOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdMicrosoftGraphCopyToNotebookRoute,
  postMeOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdMicrosoftGraphCopyToSectionGroupRoute,
  postMeOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdPagesOnenotePageIdMicrosoftGraphCopyToSectionRoute,
  postMeOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdPagesOnenotePageIdMicrosoftGraphOnenotePatchContentRoute,
  postMeOnenotePagesOnenotePageIdMicrosoftGraphCopyToSectionRoute,
  postMeOnenotePagesOnenotePageIdMicrosoftGraphOnenotePatchContentRoute,
  postMeOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdMicrosoftGraphCopyToNotebookRoute,
  postMeOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdMicrosoftGraphCopyToSectionGroupRoute,
  postMeOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdMicrosoftGraphCopyToSectionRoute,
  postMeOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdMicrosoftGraphOnenotePatchContentRoute,
  postMeOnenoteSectionsOnenoteSectionIdMicrosoftGraphCopyToNotebookRoute,
  postMeOnenoteSectionsOnenoteSectionIdMicrosoftGraphCopyToSectionGroupRoute,
  postMeOnenoteSectionsOnenoteSectionIdPagesOnenotePageIdMicrosoftGraphCopyToSectionRoute,
  postMeOnenoteSectionsOnenoteSectionIdPagesOnenotePageIdMicrosoftGraphOnenotePatchContentRoute,
  postMeOnlineMeetingsMicrosoftGraphCreateOrGetRoute,
  postMePresenceMicrosoftGraphClearPresenceRoute,
  postMePresenceMicrosoftGraphClearUserPreferredPresenceRoute,
  postMePresenceMicrosoftGraphSetPresenceRoute,
  postMePresenceMicrosoftGraphSetUserPreferredPresenceRoute,
  postMeTeamworkMicrosoftGraphSendActivityNotificationRoute,
  postMeTodoListsTodoTaskListIdTasksTodoTaskIdAttachmentsMicrosoftGraphCreateUploadSessionRoute,
} from '../routes'

const app = new OpenAPIHono()

export const meActionsHandler = app
  .openapi(
    postMeAuthenticationMethodsAuthenticationMethodIdMicrosoftGraphResetPasswordRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postMeAuthenticationPhoneMethodsPhoneAuthenticationMethodIdMicrosoftGraphDisableSmsSignInRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postMeAuthenticationPhoneMethodsPhoneAuthenticationMethodIdMicrosoftGraphEnableSmsSignInRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postMeCalendarCalendarViewEventIdAttachmentsMicrosoftGraphCreateUploadSessionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postMeCalendarCalendarViewEventIdInstancesEventId1AttachmentsMicrosoftGraphCreateUploadSessionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postMeCalendarCalendarViewEventIdInstancesEventId1MicrosoftGraphAcceptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeCalendarCalendarViewEventIdInstancesEventId1MicrosoftGraphCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeCalendarCalendarViewEventIdInstancesEventId1MicrosoftGraphDeclineRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postMeCalendarCalendarViewEventIdInstancesEventId1MicrosoftGraphDismissReminderRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postMeCalendarCalendarViewEventIdInstancesEventId1MicrosoftGraphForwardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postMeCalendarCalendarViewEventIdInstancesEventId1MicrosoftGraphSnoozeReminderRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postMeCalendarCalendarViewEventIdInstancesEventId1MicrosoftGraphTentativelyAcceptRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postMeCalendarCalendarViewEventIdMicrosoftGraphAcceptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeCalendarCalendarViewEventIdMicrosoftGraphCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeCalendarCalendarViewEventIdMicrosoftGraphDeclineRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeCalendarCalendarViewEventIdMicrosoftGraphDismissReminderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeCalendarCalendarViewEventIdMicrosoftGraphForwardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeCalendarCalendarViewEventIdMicrosoftGraphSnoozeReminderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeCalendarCalendarViewEventIdMicrosoftGraphTentativelyAcceptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeCalendarEventsEventIdAttachmentsMicrosoftGraphCreateUploadSessionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postMeCalendarEventsEventIdInstancesEventId1AttachmentsMicrosoftGraphCreateUploadSessionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postMeCalendarEventsEventIdInstancesEventId1MicrosoftGraphAcceptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeCalendarEventsEventIdInstancesEventId1MicrosoftGraphCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeCalendarEventsEventIdInstancesEventId1MicrosoftGraphDeclineRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeCalendarEventsEventIdInstancesEventId1MicrosoftGraphDismissReminderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeCalendarEventsEventIdInstancesEventId1MicrosoftGraphForwardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeCalendarEventsEventIdInstancesEventId1MicrosoftGraphSnoozeReminderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postMeCalendarEventsEventIdInstancesEventId1MicrosoftGraphTentativelyAcceptRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postMeCalendarEventsEventIdMicrosoftGraphAcceptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeCalendarEventsEventIdMicrosoftGraphCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeCalendarEventsEventIdMicrosoftGraphDeclineRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeCalendarEventsEventIdMicrosoftGraphDismissReminderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeCalendarEventsEventIdMicrosoftGraphForwardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeCalendarEventsEventIdMicrosoftGraphSnoozeReminderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeCalendarEventsEventIdMicrosoftGraphTentativelyAcceptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeCalendarMicrosoftGraphGetScheduleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdAttachmentsMicrosoftGraphCreateUploadSessionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1AttachmentsMicrosoftGraphCreateUploadSessionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1MicrosoftGraphAcceptRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1MicrosoftGraphCancelRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1MicrosoftGraphDeclineRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1MicrosoftGraphDismissReminderRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1MicrosoftGraphForwardRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1MicrosoftGraphSnoozeReminderRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1MicrosoftGraphTentativelyAcceptRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdMicrosoftGraphAcceptRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdMicrosoftGraphCancelRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdMicrosoftGraphDeclineRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdMicrosoftGraphDismissReminderRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdMicrosoftGraphForwardRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdMicrosoftGraphSnoozeReminderRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdMicrosoftGraphTentativelyAcceptRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdAttachmentsMicrosoftGraphCreateUploadSessionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdInstancesEventId1AttachmentsMicrosoftGraphCreateUploadSessionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdInstancesEventId1MicrosoftGraphAcceptRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdInstancesEventId1MicrosoftGraphCancelRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdInstancesEventId1MicrosoftGraphDeclineRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdInstancesEventId1MicrosoftGraphDismissReminderRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdInstancesEventId1MicrosoftGraphForwardRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdInstancesEventId1MicrosoftGraphSnoozeReminderRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdInstancesEventId1MicrosoftGraphTentativelyAcceptRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdMicrosoftGraphAcceptRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdMicrosoftGraphCancelRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdMicrosoftGraphDeclineRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdMicrosoftGraphDismissReminderRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdMicrosoftGraphForwardRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdMicrosoftGraphSnoozeReminderRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdMicrosoftGraphTentativelyAcceptRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdMicrosoftGraphGetScheduleRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postMeCalendarViewEventIdAttachmentsMicrosoftGraphCreateUploadSessionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postMeCalendarViewEventIdInstancesEventId1AttachmentsMicrosoftGraphCreateUploadSessionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postMeCalendarViewEventIdInstancesEventId1MicrosoftGraphAcceptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeCalendarViewEventIdInstancesEventId1MicrosoftGraphCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeCalendarViewEventIdInstancesEventId1MicrosoftGraphDeclineRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeCalendarViewEventIdInstancesEventId1MicrosoftGraphDismissReminderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeCalendarViewEventIdInstancesEventId1MicrosoftGraphForwardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeCalendarViewEventIdInstancesEventId1MicrosoftGraphSnoozeReminderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeCalendarViewEventIdInstancesEventId1MicrosoftGraphTentativelyAcceptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeCalendarViewEventIdMicrosoftGraphAcceptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeCalendarViewEventIdMicrosoftGraphCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeCalendarViewEventIdMicrosoftGraphDeclineRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeCalendarViewEventIdMicrosoftGraphDismissReminderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeCalendarViewEventIdMicrosoftGraphForwardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeCalendarViewEventIdMicrosoftGraphSnoozeReminderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeCalendarViewEventIdMicrosoftGraphTentativelyAcceptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postMeCalendarsCalendarIdCalendarViewEventIdAttachmentsMicrosoftGraphCreateUploadSessionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postMeCalendarsCalendarIdCalendarViewEventIdInstancesEventId1AttachmentsMicrosoftGraphCreateUploadSessionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postMeCalendarsCalendarIdCalendarViewEventIdInstancesEventId1MicrosoftGraphAcceptRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postMeCalendarsCalendarIdCalendarViewEventIdInstancesEventId1MicrosoftGraphCancelRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postMeCalendarsCalendarIdCalendarViewEventIdInstancesEventId1MicrosoftGraphDeclineRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postMeCalendarsCalendarIdCalendarViewEventIdInstancesEventId1MicrosoftGraphDismissReminderRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postMeCalendarsCalendarIdCalendarViewEventIdInstancesEventId1MicrosoftGraphForwardRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postMeCalendarsCalendarIdCalendarViewEventIdInstancesEventId1MicrosoftGraphSnoozeReminderRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postMeCalendarsCalendarIdCalendarViewEventIdInstancesEventId1MicrosoftGraphTentativelyAcceptRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postMeCalendarsCalendarIdCalendarViewEventIdMicrosoftGraphAcceptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeCalendarsCalendarIdCalendarViewEventIdMicrosoftGraphCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeCalendarsCalendarIdCalendarViewEventIdMicrosoftGraphDeclineRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeCalendarsCalendarIdCalendarViewEventIdMicrosoftGraphDismissReminderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeCalendarsCalendarIdCalendarViewEventIdMicrosoftGraphForwardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeCalendarsCalendarIdCalendarViewEventIdMicrosoftGraphSnoozeReminderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postMeCalendarsCalendarIdCalendarViewEventIdMicrosoftGraphTentativelyAcceptRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postMeCalendarsCalendarIdEventsEventIdAttachmentsMicrosoftGraphCreateUploadSessionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postMeCalendarsCalendarIdEventsEventIdInstancesEventId1AttachmentsMicrosoftGraphCreateUploadSessionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postMeCalendarsCalendarIdEventsEventIdInstancesEventId1MicrosoftGraphAcceptRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postMeCalendarsCalendarIdEventsEventIdInstancesEventId1MicrosoftGraphCancelRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postMeCalendarsCalendarIdEventsEventIdInstancesEventId1MicrosoftGraphDeclineRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postMeCalendarsCalendarIdEventsEventIdInstancesEventId1MicrosoftGraphDismissReminderRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postMeCalendarsCalendarIdEventsEventIdInstancesEventId1MicrosoftGraphForwardRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postMeCalendarsCalendarIdEventsEventIdInstancesEventId1MicrosoftGraphSnoozeReminderRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postMeCalendarsCalendarIdEventsEventIdInstancesEventId1MicrosoftGraphTentativelyAcceptRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postMeCalendarsCalendarIdEventsEventIdMicrosoftGraphAcceptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeCalendarsCalendarIdEventsEventIdMicrosoftGraphCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeCalendarsCalendarIdEventsEventIdMicrosoftGraphDeclineRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeCalendarsCalendarIdEventsEventIdMicrosoftGraphDismissReminderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeCalendarsCalendarIdEventsEventIdMicrosoftGraphForwardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeCalendarsCalendarIdEventsEventIdMicrosoftGraphSnoozeReminderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeCalendarsCalendarIdEventsEventIdMicrosoftGraphTentativelyAcceptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeCalendarsCalendarIdMicrosoftGraphGetScheduleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeChatsChatIdInstalledAppsTeamsAppInstallationIdMicrosoftGraphUpgradeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeChatsChatIdMembersMicrosoftGraphAddRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeChatsChatIdMessagesChatMessageIdMicrosoftGraphSoftDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeChatsChatIdMessagesChatMessageIdMicrosoftGraphUndoSoftDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postMeChatsChatIdMessagesChatMessageIdRepliesChatMessageId1MicrosoftGraphSoftDeleteRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postMeChatsChatIdMessagesChatMessageIdRepliesChatMessageId1MicrosoftGraphUndoSoftDeleteRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postMeChatsChatIdMicrosoftGraphHideForUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeChatsChatIdMicrosoftGraphMarkChatReadForUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeChatsChatIdMicrosoftGraphMarkChatUnreadForUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeChatsChatIdMicrosoftGraphSendActivityNotificationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeChatsChatIdMicrosoftGraphUnhideForUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeEventsEventIdAttachmentsMicrosoftGraphCreateUploadSessionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postMeEventsEventIdInstancesEventId1AttachmentsMicrosoftGraphCreateUploadSessionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postMeEventsEventIdInstancesEventId1MicrosoftGraphAcceptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeEventsEventIdInstancesEventId1MicrosoftGraphCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeEventsEventIdInstancesEventId1MicrosoftGraphDeclineRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeEventsEventIdInstancesEventId1MicrosoftGraphDismissReminderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeEventsEventIdInstancesEventId1MicrosoftGraphForwardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeEventsEventIdInstancesEventId1MicrosoftGraphSnoozeReminderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeEventsEventIdInstancesEventId1MicrosoftGraphTentativelyAcceptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeEventsEventIdMicrosoftGraphAcceptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeEventsEventIdMicrosoftGraphCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeEventsEventIdMicrosoftGraphDeclineRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeEventsEventIdMicrosoftGraphDismissReminderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeEventsEventIdMicrosoftGraphForwardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeEventsEventIdMicrosoftGraphSnoozeReminderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeEventsEventIdMicrosoftGraphTentativelyAcceptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeJoinedTeamsTeamIdChannelsChannelIdMembersMicrosoftGraphAddRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postMeJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdMicrosoftGraphSoftDeleteRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postMeJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdMicrosoftGraphUndoSoftDeleteRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postMeJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1MicrosoftGraphSoftDeleteRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postMeJoinedTeamsTeamIdChannelsChannelIdMessagesChatMessageIdRepliesChatMessageId1MicrosoftGraphUndoSoftDeleteRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postMeJoinedTeamsTeamIdChannelsChannelIdMicrosoftGraphCompleteMigrationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeJoinedTeamsTeamIdChannelsChannelIdMicrosoftGraphProvisionEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeJoinedTeamsTeamIdChannelsChannelIdMicrosoftGraphRemoveEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postMeJoinedTeamsTeamIdInstalledAppsTeamsAppInstallationIdMicrosoftGraphUpgradeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postMeJoinedTeamsTeamIdMembersMicrosoftGraphAddRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeJoinedTeamsTeamIdMicrosoftGraphArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeJoinedTeamsTeamIdMicrosoftGraphCloneRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeJoinedTeamsTeamIdMicrosoftGraphCompleteMigrationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeJoinedTeamsTeamIdMicrosoftGraphSendActivityNotificationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeJoinedTeamsTeamIdMicrosoftGraphUnarchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeJoinedTeamsTeamIdPrimaryChannelMembersMicrosoftGraphAddRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postMeJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdMicrosoftGraphSoftDeleteRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postMeJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdMicrosoftGraphUndoSoftDeleteRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postMeJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1MicrosoftGraphSoftDeleteRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postMeJoinedTeamsTeamIdPrimaryChannelMessagesChatMessageIdRepliesChatMessageId1MicrosoftGraphUndoSoftDeleteRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postMeJoinedTeamsTeamIdPrimaryChannelMicrosoftGraphCompleteMigrationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeJoinedTeamsTeamIdPrimaryChannelMicrosoftGraphProvisionEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeJoinedTeamsTeamIdPrimaryChannelMicrosoftGraphRemoveEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeJoinedTeamsTeamIdScheduleMicrosoftGraphShareRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postMeMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMessageIdAttachmentsMicrosoftGraphCreateUploadSessionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postMeMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMessageIdMicrosoftGraphCopyRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postMeMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMessageIdMicrosoftGraphCreateForwardRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postMeMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMessageIdMicrosoftGraphCreateReplyRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postMeMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMessageIdMicrosoftGraphCreateReplyAllRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postMeMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMessageIdMicrosoftGraphForwardRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postMeMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMessageIdMicrosoftGraphMoveRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postMeMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMessageIdMicrosoftGraphReplyRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postMeMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMessageIdMicrosoftGraphReplyAllRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postMeMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMessageIdMicrosoftGraphSendRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postMeMailFoldersMailFolderIdChildFoldersMailFolderId1MicrosoftGraphCopyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeMailFoldersMailFolderIdChildFoldersMailFolderId1MicrosoftGraphMoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postMeMailFoldersMailFolderIdMessagesMessageIdAttachmentsMicrosoftGraphCreateUploadSessionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postMeMailFoldersMailFolderIdMessagesMessageIdMicrosoftGraphCopyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeMailFoldersMailFolderIdMessagesMessageIdMicrosoftGraphCreateForwardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeMailFoldersMailFolderIdMessagesMessageIdMicrosoftGraphCreateReplyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeMailFoldersMailFolderIdMessagesMessageIdMicrosoftGraphCreateReplyAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeMailFoldersMailFolderIdMessagesMessageIdMicrosoftGraphForwardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeMailFoldersMailFolderIdMessagesMessageIdMicrosoftGraphMoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeMailFoldersMailFolderIdMessagesMessageIdMicrosoftGraphReplyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeMailFoldersMailFolderIdMessagesMessageIdMicrosoftGraphReplyAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeMailFoldersMailFolderIdMessagesMessageIdMicrosoftGraphSendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeMailFoldersMailFolderIdMicrosoftGraphCopyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeMailFoldersMailFolderIdMicrosoftGraphMoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeManagedDevicesManagedDeviceIdMicrosoftGraphBypassActivationLockRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeManagedDevicesManagedDeviceIdMicrosoftGraphCleanWindowsDeviceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postMeManagedDevicesManagedDeviceIdMicrosoftGraphDeleteUserFromSharedAppleDeviceRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postMeManagedDevicesManagedDeviceIdMicrosoftGraphDisableLostModeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeManagedDevicesManagedDeviceIdMicrosoftGraphLocateDeviceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postMeManagedDevicesManagedDeviceIdMicrosoftGraphLogoutSharedAppleDeviceActiveUserRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postMeManagedDevicesManagedDeviceIdMicrosoftGraphRebootNowRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeManagedDevicesManagedDeviceIdMicrosoftGraphRecoverPasscodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeManagedDevicesManagedDeviceIdMicrosoftGraphRemoteLockRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeManagedDevicesManagedDeviceIdMicrosoftGraphRequestRemoteAssistanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeManagedDevicesManagedDeviceIdMicrosoftGraphResetPasscodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeManagedDevicesManagedDeviceIdMicrosoftGraphRetireRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeManagedDevicesManagedDeviceIdMicrosoftGraphShutDownRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeManagedDevicesManagedDeviceIdMicrosoftGraphSyncDeviceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postMeManagedDevicesManagedDeviceIdMicrosoftGraphUpdateWindowsDeviceAccountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postMeManagedDevicesManagedDeviceIdMicrosoftGraphWindowsDefenderScanRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postMeManagedDevicesManagedDeviceIdMicrosoftGraphWindowsDefenderUpdateSignaturesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postMeManagedDevicesManagedDeviceIdMicrosoftGraphWipeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeMessagesMessageIdAttachmentsMicrosoftGraphCreateUploadSessionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeMessagesMessageIdMicrosoftGraphCopyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeMessagesMessageIdMicrosoftGraphCreateForwardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeMessagesMessageIdMicrosoftGraphCreateReplyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeMessagesMessageIdMicrosoftGraphCreateReplyAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeMessagesMessageIdMicrosoftGraphForwardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeMessagesMessageIdMicrosoftGraphMoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeMessagesMessageIdMicrosoftGraphReplyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeMessagesMessageIdMicrosoftGraphReplyAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeMessagesMessageIdMicrosoftGraphSendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeMicrosoftGraphAssignLicenseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeMicrosoftGraphChangePasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeMicrosoftGraphCheckMemberGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeMicrosoftGraphCheckMemberObjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeMicrosoftGraphExportPersonalDataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeMicrosoftGraphFindMeetingTimesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeMicrosoftGraphGetMailTipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeMicrosoftGraphGetMemberGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeMicrosoftGraphGetMemberObjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeMicrosoftGraphRemoveAllDevicesFromManagementRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeMicrosoftGraphReprocessLicenseAssignmentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeMicrosoftGraphRestoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeMicrosoftGraphRevokeSignInSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeMicrosoftGraphSendMailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeMicrosoftGraphTranslateExchangeIdsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeMicrosoftGraphWipeManagedAppRegistrationsByDeviceTagRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeOnenoteNotebooksMicrosoftGraphGetNotebookFromWebUrlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeOnenoteNotebooksNotebookIdMicrosoftGraphCopyNotebookRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postMeOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdMicrosoftGraphCopyToNotebookRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postMeOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdMicrosoftGraphCopyToSectionGroupRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postMeOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdMicrosoftGraphCopyToSectionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postMeOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdMicrosoftGraphOnenotePatchContentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postMeOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdMicrosoftGraphCopyToNotebookRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postMeOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdMicrosoftGraphCopyToSectionGroupRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postMeOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdPagesOnenotePageIdMicrosoftGraphCopyToSectionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postMeOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdPagesOnenotePageIdMicrosoftGraphOnenotePatchContentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postMeOnenotePagesOnenotePageIdMicrosoftGraphCopyToSectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeOnenotePagesOnenotePageIdMicrosoftGraphOnenotePatchContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postMeOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdMicrosoftGraphCopyToNotebookRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postMeOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdMicrosoftGraphCopyToSectionGroupRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postMeOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdMicrosoftGraphCopyToSectionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postMeOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdMicrosoftGraphOnenotePatchContentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postMeOnenoteSectionsOnenoteSectionIdMicrosoftGraphCopyToNotebookRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeOnenoteSectionsOnenoteSectionIdMicrosoftGraphCopyToSectionGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postMeOnenoteSectionsOnenoteSectionIdPagesOnenotePageIdMicrosoftGraphCopyToSectionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postMeOnenoteSectionsOnenoteSectionIdPagesOnenotePageIdMicrosoftGraphOnenotePatchContentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postMeOnlineMeetingsMicrosoftGraphCreateOrGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMePresenceMicrosoftGraphClearPresenceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMePresenceMicrosoftGraphClearUserPreferredPresenceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMePresenceMicrosoftGraphSetPresenceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMePresenceMicrosoftGraphSetUserPreferredPresenceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeTeamworkMicrosoftGraphSendActivityNotificationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postMeTodoListsTodoTaskListIdTasksTodoTaskIdAttachmentsMicrosoftGraphCreateUploadSessionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
