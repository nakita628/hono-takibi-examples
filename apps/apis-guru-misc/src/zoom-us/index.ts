import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdRoute,
  deleteAccountsAccountIdSettingsVirtualBackgroundsRoute,
  deleteAccountsAccountIdSipTrunkCalloutCountriesCountryIdRoute,
  deleteAccountsAccountIdSipTrunkInternalNumbersNumberIdRoute,
  deleteAccountsAccountIdSipTrunkNumbersRoute,
  deleteAccountsAccountIdSipTrunkTrunksTrunkIdRoute,
  deleteChatChannelsChannelIdMembersMemberIdRoute,
  deleteChatChannelsChannelIdMembersMeRoute,
  deleteChatChannelsChannelIdRoute,
  deleteChatUsersUserIdChannelsChannelIdMembersMemberIdRoute,
  deleteChatUsersUserIdChannelsChannelIdRoute,
  deleteChatUsersUserIdMessagesMessageIdRoute,
  deleteGroupsGroupIdMembersMemberIdRoute,
  deleteGroupsGroupIdRoute,
  deleteGroupsGroupIdSettingsVirtualBackgroundsRoute,
  deleteH323DevicesDeviceIdRoute,
  deleteImChatMessagesMessageIdRoute,
  deleteImGroupsGroupIdMembersMemberIdRoute,
  deleteImGroupsGroupIdRoute,
  deleteMeetingsMeetingIdPollsPollIdRoute,
  deleteMeetingsMeetingIdRecordingsRecordingIdRoute,
  deleteMeetingsMeetingIdRecordingsRoute,
  deleteMeetingsMeetingIdRegistrantsRegistrantIdRoute,
  deleteMeetingsMeetingIdRoute,
  deletePhoneAutoReceptionistsAutoReceptionistIdPhoneNumbersPhoneNumberIdRoute,
  deletePhoneAutoReceptionistsAutoReceptionistIdPhoneNumbersRoute,
  deletePhoneBlockedListBlockedListIdRoute,
  deletePhoneCallQueuesCallQueueIdMembersMemberIdRoute,
  deletePhoneCallQueuesCallQueueIdMembersRoute,
  deletePhoneCallQueuesCallQueueIdPhoneNumbersPhoneNumberIdRoute,
  deletePhoneCallQueuesCallQueueIdPhoneNumbersRoute,
  deletePhoneCallQueuesCallQueueIdRoute,
  deletePhoneCommonAreaPhonesCommonAreaPhoneIdRoute,
  deletePhoneDevicesDeviceIdRoute,
  deletePhoneSharedLineGroupsSharedLineGroupIdMembersMemberIdRoute,
  deletePhoneSharedLineGroupsSharedLineGroupIdMembersRoute,
  deletePhoneSharedLineGroupsSharedLineGroupIdPhoneNumbersPhoneNumberIdRoute,
  deletePhoneSharedLineGroupsSharedLineGroupIdRoute,
  deletePhoneSitesSiteIdRoute,
  deletePhoneUsersUserIdCallingPlansTypeRoute,
  deletePhoneUsersUserIdCallLogsCallLogIdRoute,
  deletePhoneUsersUserIdPhoneNumbersPhoneNumberIdRoute,
  deletePhoneUsersUserIdSettingsSettingTypeRoute,
  deletePhoneVoiceMailsVoicemailIdRoute,
  deleteRolesRoleIdMembersMemberIdRoute,
  deleteRolesRoleIdRoute,
  deleteRoomsRoomIdRoute,
  deleteSipPhonesPhoneIdRoute,
  deleteTrackingFieldsFieldIdRoute,
  deleteUsersUserIdAssistantsAssistantIdRoute,
  deleteUsersUserIdAssistantsRoute,
  deleteUsersUserIdRoute,
  deleteUsersUserIdSchedulersRoute,
  deleteUsersUserIdSchedulersSchedulerIdRoute,
  deleteUsersUserIdSettingsVirtualBackgroundsRoute,
  deleteUsersUserIdTokenRoute,
  deleteUsersUserIdTspTspIdRoute,
  deleteWebinarsWebinarIdPanelistsPanelistIdRoute,
  deleteWebinarsWebinarIdPanelistsRoute,
  deleteWebinarsWebinarIdPollsPollIdRoute,
  deleteWebinarsWebinarIdRegistrantsRegistrantIdRoute,
  deleteWebinarsWebinarIdRoute,
  getAccountsAccountIdBillingInvoicesInvoiceIdRoute,
  getAccountsAccountIdBillingInvoicesRoute,
  getAccountsAccountIdBillingRoute,
  getAccountsAccountIdLockSettingsRoute,
  getAccountsAccountIdManagedDomainsRoute,
  getAccountsAccountIdPlansRoute,
  getAccountsAccountIdPlansUsageRoute,
  getAccountsAccountIdRecordingsRoute,
  getAccountsAccountIdRoute,
  getAccountsAccountIdSettingsRoute,
  getAccountsAccountIdSipTrunkCalloutCountriesRoute,
  getAccountsAccountIdSipTrunkInternalNumbersRoute,
  getAccountsAccountIdSipTrunkTrunksRoute,
  getAccountsAccountIdTrustedDomainsRoute,
  getAccountsRoute,
  getApiDownloadBillingInvoicesInvoiceIdRoute,
  getArchiveFilesRoute,
  getChatChannelsChannelIdRoute,
  getChatUsersMeContactsContactIdRoute,
  getChatUsersMeContactsRoute,
  getChatUsersUserIdChannelsChannelIdMembersRoute,
  getChatUsersUserIdChannelsChannelIdRoute,
  getChatUsersUserIdChannelsRoute,
  getChatUsersUserIdMessagesRoute,
  getContactsRoute,
  getGroupsGroupIdLockSettingsRoute,
  getGroupsGroupIdMembersRoute,
  getGroupsGroupIdRoute,
  getGroupsGroupIdSettingsRoute,
  getGroupsRoute,
  getH323DevicesRoute,
  getImChatSessionsRoute,
  getImChatSessionsSessionIdRoute,
  getImGroupsGroupIdMembersRoute,
  getImGroupsGroupIdRoute,
  getImGroupsRoute,
  getImUsersUserIdChatMessagesRoute,
  getMeetingsMeetingIdInvitationRoute,
  getMeetingsMeetingIdLivestreamRoute,
  getMeetingsMeetingIdPollsPollIdRoute,
  getMeetingsMeetingIdPollsRoute,
  getMeetingsMeetingIdRecordingsRegistrantsQuestionsRoute,
  getMeetingsMeetingIdRecordingsRegistrantsRoute,
  getMeetingsMeetingIdRecordingsRoute,
  getMeetingsMeetingIdRecordingsSettingsRoute,
  getMeetingsMeetingIdRegistrantsQuestionsRoute,
  getMeetingsMeetingIdRegistrantsRoute,
  getMeetingsMeetingIdRoute,
  getMetricsClientFeedbackFeedbackIdRoute,
  getMetricsClientFeedbackRoute,
  getMetricsClientSatisfactionRoute,
  getMetricsCrcRoute,
  getMetricsImRoute,
  getMetricsIssuesZoomroomsRoute,
  getMetricsIssuesZoomroomsZoomroomIdRoute,
  getMetricsMeetingsMeetingIdParticipantsParticipantIdQosRoute,
  getMetricsMeetingsMeetingIdParticipantsQosRoute,
  getMetricsMeetingsMeetingIdParticipantsRoute,
  getMetricsMeetingsMeetingIdParticipantsSatisfactionRoute,
  getMetricsMeetingsMeetingIdParticipantsSharingRoute,
  getMetricsMeetingsMeetingIdRoute,
  getMetricsMeetingsRoute,
  getMetricsWebinarsRoute,
  getMetricsWebinarsWebinarIdParticipantsParticipantIdQosRoute,
  getMetricsWebinarsWebinarIdParticipantsQosRoute,
  getMetricsWebinarsWebinarIdParticipantsRoute,
  getMetricsWebinarsWebinarIdParticipantsSatisfactionRoute,
  getMetricsWebinarsWebinarIdParticipantsSharingRoute,
  getMetricsWebinarsWebinarIdRoute,
  getMetricsZoomroomsIssuesRoute,
  getMetricsZoomroomsRoute,
  getMetricsZoomroomsZoomroomIdRoute,
  getPastMeetingsMeetingIdFilesRoute,
  getPastMeetingsMeetingIdInstancesRoute,
  getPastMeetingsMeetingIdPollsRoute,
  getPastMeetingsMeetingUUIDParticipantsRoute,
  getPastMeetingsMeetingUUIDRoute,
  getPastWebinarsWebinarIdFilesRoute,
  getPastWebinarsWebinarIdInstancesRoute,
  getPastWebinarsWebinarIdParticipantsRoute,
  getPastWebinarsWebinarIdPollsRoute,
  getPastWebinarsWebinarIdQaRoute,
  getPastWebinarsWebinarUUIDAbsenteesRoute,
  getPhoneBlockedListBlockedListIdRoute,
  getPhoneBlockedListRoute,
  getPhoneCallingPlansRoute,
  getPhoneCallLogsRoute,
  getPhoneCallQueuesCallQueueIdRecordingsRoute,
  getPhoneCallQueuesCallQueueIdRoute,
  getPhoneCallQueuesRoute,
  getPhoneCommonAreaPhonesCommonAreaPhoneIdRoute,
  getPhoneCommonAreaPhonesRoute,
  getPhoneDevicesDeviceIdRoute,
  getPhoneDevicesRoute,
  getPhoneMetricsCallLogsCallIdQosRoute,
  getPhoneMetricsCallLogsCallIdRoute,
  getPhoneMetricsCallLogsRoute,
  getPhoneNumbersNumberIdRoute,
  getPhoneNumbersRoute,
  getPhoneRecordingsRoute,
  getPhoneReportsOperationlogsRoute,
  getPhoneSettingTemplatesRoute,
  getPhoneSettingTemplatesTemplateIdRoute,
  getPhoneSharedLineGroupsRoute,
  getPhoneSharedLineGroupsSharedLineGroupIdRoute,
  getPhoneSipTrunkTrunksRoute,
  getPhoneSitesRoute,
  getPhoneSitesSiteIdRoute,
  getPhoneUsersRoute,
  getPhoneUsersUserIdCallLogsRoute,
  getPhoneUsersUserIdRecordingsRoute,
  getPhoneUsersUserIdRoute,
  getPhoneUsersUserIdSettingsRoute,
  getPhoneUsersUserIdVoiceMailsRoute,
  getReportActivitiesRoute,
  getReportCloudRecordingRoute,
  getReportDailyRoute,
  getReportMeetingsMeetingIdParticipantsRoute,
  getReportMeetingsMeetingIdPollsRoute,
  getReportMeetingsMeetingIdRoute,
  getReportOperationlogsRoute,
  getReportTelephoneRoute,
  getReportUsersRoute,
  getReportUsersUserIdMeetingsRoute,
  getReportWebinarsWebinarIdParticipantsRoute,
  getReportWebinarsWebinarIdPollsRoute,
  getReportWebinarsWebinarIdQaRoute,
  getReportWebinarsWebinarIdRoute,
  getRolesRoleIdMembersRoute,
  getRolesRoleIdRoute,
  getRolesRoute,
  getRoomsAccountProfileRoute,
  getRoomsAccountSettingsRoute,
  getRoomsDigitalSignageRoute,
  getRoomsLocationsLocationIdRoute,
  getRoomsLocationsLocationIdSettingsRoute,
  getRoomsLocationsRoute,
  getRoomsLocationsStructureRoute,
  getRoomsRoomIdDevicesRoute,
  getRoomsRoomIdRoute,
  getRoomsRoomIdSettingsRoute,
  getRoomsRoute,
  getSipPhonesRoute,
  getSipTrunkNumbersRoute,
  getTrackingFieldsFieldIdRoute,
  getTrackingFieldsRoute,
  getTspRoute,
  getUsersEmailRoute,
  getUsersMeZakRoute,
  getUsersRoute,
  getUsersUserIdAssistantsRoute,
  getUsersUserIdMeetingsRoute,
  getUsersUserIdMeetingTemplatesRoute,
  getUsersUserIdPacRoute,
  getUsersUserIdPermissionsRoute,
  getUsersUserIdRecordingsRoute,
  getUsersUserIdRoute,
  getUsersUserIdSchedulersRoute,
  getUsersUserIdSettingsRoute,
  getUsersUserIdTokenRoute,
  getUsersUserIdTspRoute,
  getUsersUserIdTspTspIdRoute,
  getUsersUserIdWebinarsRoute,
  getUsersUserIdWebinarTemplatesRoute,
  getUsersVanityNameRoute,
  getWebinarsWebinarIdPanelistsRoute,
  getWebinarsWebinarIdPollsPollIdRoute,
  getWebinarsWebinarIdPollsRoute,
  getWebinarsWebinarIdRegistrantsQuestionsRoute,
  getWebinarsWebinarIdRegistrantsRegistrantIdRoute,
  getWebinarsWebinarIdRegistrantsRoute,
  getWebinarsWebinarIdRoute,
  getWebinarsWebinarIdTrackingSourcesRoute,
  patchAccountsAccountIdBillingRoute,
  patchAccountsAccountIdLockSettingsRoute,
  patchAccountsAccountIdOptionsRoute,
  patchAccountsAccountIdPhoneSettingsRoute,
  patchAccountsAccountIdPhoneSipTrunkTrunksSipTrunkIdRoute,
  patchAccountsAccountIdPlansAddonsStatusRoute,
  patchAccountsAccountIdPlansBaseStatusRoute,
  patchAccountsAccountIdSettingsRoute,
  patchAccountsAccountIdSipTrunkSettingsRoute,
  patchChatChannelsChannelIdRoute,
  patchChatUsersUserIdChannelsChannelIdRoute,
  patchGroupsGroupIdLockSettingsRoute,
  patchGroupsGroupIdMembersMemberIdRoute,
  patchGroupsGroupIdRoute,
  patchGroupsGroupIdSettingsRoute,
  patchH323DevicesDeviceIdRoute,
  patchImGroupsGroupIdRoute,
  patchLiveMeetingsMeetingIdEventsRoute,
  patchMeetingsMeetingIdLivestreamRoute,
  patchMeetingsMeetingIdLivestreamStatusRoute,
  patchMeetingsMeetingIdRecordingsRegistrantsQuestionsRoute,
  patchMeetingsMeetingIdRecordingsSettingsRoute,
  patchMeetingsMeetingIdRegistrantsQuestionsRoute,
  patchMeetingsMeetingIdRoute,
  patchPhoneAutoReceptionistsAutoReceptionistIdRoute,
  patchPhoneBlockedListBlockedListIdRoute,
  patchPhoneCallQueuesCallQueueIdRoute,
  patchPhoneCommonAreaPhonesCommonAreaPhoneIdRoute,
  patchPhoneDevicesDeviceIdRoute,
  patchPhoneNumbersNumberIdRoute,
  patchPhoneSettingTemplatesTemplateIdRoute,
  patchPhoneSharedLineGroupsSharedLineGroupIdRoute,
  patchPhoneSitesSiteIdRoute,
  patchPhoneUsersUserIdRoute,
  patchPhoneUsersUserIdSettingsSettingTypeRoute,
  patchRolesRoleIdRoute,
  patchRoomsAccountProfileRoute,
  patchRoomsAccountSettingsRoute,
  patchRoomsEventsRoute,
  patchRoomsIdEventsRoute,
  patchRoomsLocationsLocationIdRoute,
  patchRoomsLocationsLocationIdSettingsRoute,
  patchRoomsLocationsStructureRoute,
  patchRoomsRoomIdRoute,
  patchRoomsRoomIdSettingsRoute,
  patchSipPhonesPhoneIdRoute,
  patchTrackingFieldsFieldIdRoute,
  patchTspRoute,
  patchUsersUserIdRoute,
  patchUsersUserIdSettingsRoute,
  patchUsersUserIdTspSettingsRoute,
  patchUsersUserIdTspTspIdRoute,
  patchWebinarsWebinarIdRegistrantsQuestionsRoute,
  patchWebinarsWebinarIdRoute,
  postAccountsAccountIdPhoneSetupRoute,
  postAccountsAccountIdPhoneSipTrunkTrunksRoute,
  postAccountsAccountIdPlansAddonsRoute,
  postAccountsAccountIdPlansRoute,
  postAccountsAccountIdSettingsVirtualBackgroundsRoute,
  postAccountsAccountIdSipTrunkCalloutCountriesRoute,
  postAccountsAccountIdSipTrunkInternalNumbersRoute,
  postAccountsAccountIdSipTrunkNumbersRoute,
  postAccountsAccountIdSipTrunkTrunksRoute,
  postAccountsRoute,
  postChatChannelsChannelIdMembersMeRoute,
  postChatUsersUserIdChannelsChannelIdMembersRoute,
  postChatUsersUserIdChannelsRoute,
  postChatUsersUserIdMessagesRoute,
  postGroupsGroupIdMembersRoute,
  postGroupsGroupIdSettingsVirtualBackgroundsRoute,
  postGroupsRoute,
  postH323DevicesRoute,
  postImChatMessagesRoute,
  postImGroupsGroupIdMembersRoute,
  postImGroupsRoute,
  postImUsersMeChatMessagesRoute,
  postMeetingsMeetingIdBatchPollsRoute,
  postMeetingsMeetingIdPollsRoute,
  postMeetingsMeetingIdRecordingsRegistrantsRoute,
  postMeetingsMeetingIdRegistrantsRoute,
  postPhoneAutoReceptionistsAutoReceptionistIdPhoneNumbersRoute,
  postPhoneAutoReceptionistsRoute,
  postPhoneBlockedListRoute,
  postPhoneByocNumbersRoute,
  postPhoneCallQueuesCallQueueIdMembersRoute,
  postPhoneCallQueuesCallQueueIdPhoneNumbersRoute,
  postPhoneCallQueuesRoute,
  postPhoneCommonAreaPhonesRoute,
  postPhoneDevicesRoute,
  postPhoneSettingTemplatesRoute,
  postPhoneSharedLineGroupsRoute,
  postPhoneSharedLineGroupsSharedLineGroupIdMembersRoute,
  postPhoneSharedLineGroupsSharedLineGroupIdPhoneNumbersRoute,
  postPhoneSitesRoute,
  postPhoneUsersUserIdCallingPlansRoute,
  postPhoneUsersUserIdPhoneNumbersRoute,
  postPhoneUsersUserIdSettingsSettingTypeRoute,
  postRolesRoleIdMembersRoute,
  postRolesRoute,
  postRoomsLocationsRoute,
  postRoomsRoute,
  postSipPhonesRoute,
  postTrackingFieldsRoute,
  postUsersRoute,
  postUsersUserIdAssistantsRoute,
  postUsersUserIdMeetingsRoute,
  postUsersUserIdPictureRoute,
  postUsersUserIdSettingsVirtualBackgroundsRoute,
  postUsersUserIdTspRoute,
  postUsersUserIdWebinarsRoute,
  postWebinarsWebinarIdBatchRegistrantsRoute,
  postWebinarsWebinarIdPanelistsRoute,
  postWebinarsWebinarIdPollsRoute,
  postWebinarsWebinarIdRegistrantsRoute,
  putAccountsAccountIdOwnerRoute,
  putAccountsAccountIdPlansAddonsRoute,
  putAccountsAccountIdPlansBaseRoute,
  putAccountsAccountIdUsersUserIdAccountRoute,
  putChatUsersUserIdMessagesMessageIdRoute,
  putImChatMessagesMessageIdRoute,
  putMeetingsMeetingIdPollsPollIdRoute,
  putMeetingsMeetingIdRecordingsRecordingIdStatusRoute,
  putMeetingsMeetingIdRecordingsRegistrantsStatusRoute,
  putMeetingsMeetingIdRecordingsStatusRoute,
  putMeetingsMeetingIdRegistrantsStatusRoute,
  putMeetingsMeetingIdStatusRoute,
  putPhoneCallQueuesCallQueueIdManagerRoute,
  putPhoneCompanyNumberRoute,
  putRoomsLocationsLocationIdLocationRoute,
  putRoomsRoomIdDevicesDeviceIdAppVersionRoute,
  putRoomsRoomIdLocationRoute,
  putUsersUserIdEmailRoute,
  putUsersUserIdPasswordRoute,
  putUsersUserIdPresenceStatusRoute,
  putUsersUserIdStatusRoute,
  putWebinarsWebinarIdPollsPollIdRoute,
  putWebinarsWebinarIdRegistrantsStatusRoute,
  putWebinarsWebinarIdStatusRoute,
} from './routes'
import {
  deleteAccountsAccountIdRouteHandler,
  deleteAccountsAccountIdSettingsVirtualBackgroundsRouteHandler,
  deleteAccountsAccountIdSipTrunkCalloutCountriesCountryIdRouteHandler,
  deleteAccountsAccountIdSipTrunkInternalNumbersNumberIdRouteHandler,
  deleteAccountsAccountIdSipTrunkNumbersRouteHandler,
  deleteAccountsAccountIdSipTrunkTrunksTrunkIdRouteHandler,
  deleteChatChannelsChannelIdMembersMemberIdRouteHandler,
  deleteChatChannelsChannelIdMembersMeRouteHandler,
  deleteChatChannelsChannelIdRouteHandler,
  deleteChatUsersUserIdChannelsChannelIdMembersMemberIdRouteHandler,
  deleteChatUsersUserIdChannelsChannelIdRouteHandler,
  deleteChatUsersUserIdMessagesMessageIdRouteHandler,
  deleteGroupsGroupIdMembersMemberIdRouteHandler,
  deleteGroupsGroupIdRouteHandler,
  deleteGroupsGroupIdSettingsVirtualBackgroundsRouteHandler,
  deleteH323DevicesDeviceIdRouteHandler,
  deleteImChatMessagesMessageIdRouteHandler,
  deleteImGroupsGroupIdMembersMemberIdRouteHandler,
  deleteImGroupsGroupIdRouteHandler,
  deleteMeetingsMeetingIdPollsPollIdRouteHandler,
  deleteMeetingsMeetingIdRecordingsRecordingIdRouteHandler,
  deleteMeetingsMeetingIdRecordingsRouteHandler,
  deleteMeetingsMeetingIdRegistrantsRegistrantIdRouteHandler,
  deleteMeetingsMeetingIdRouteHandler,
  deletePhoneAutoReceptionistsAutoReceptionistIdPhoneNumbersPhoneNumberIdRouteHandler,
  deletePhoneAutoReceptionistsAutoReceptionistIdPhoneNumbersRouteHandler,
  deletePhoneBlockedListBlockedListIdRouteHandler,
  deletePhoneCallQueuesCallQueueIdMembersMemberIdRouteHandler,
  deletePhoneCallQueuesCallQueueIdMembersRouteHandler,
  deletePhoneCallQueuesCallQueueIdPhoneNumbersPhoneNumberIdRouteHandler,
  deletePhoneCallQueuesCallQueueIdPhoneNumbersRouteHandler,
  deletePhoneCallQueuesCallQueueIdRouteHandler,
  deletePhoneCommonAreaPhonesCommonAreaPhoneIdRouteHandler,
  deletePhoneDevicesDeviceIdRouteHandler,
  deletePhoneSharedLineGroupsSharedLineGroupIdMembersMemberIdRouteHandler,
  deletePhoneSharedLineGroupsSharedLineGroupIdMembersRouteHandler,
  deletePhoneSharedLineGroupsSharedLineGroupIdPhoneNumbersPhoneNumberIdRouteHandler,
  deletePhoneSharedLineGroupsSharedLineGroupIdRouteHandler,
  deletePhoneSitesSiteIdRouteHandler,
  deletePhoneUsersUserIdCallingPlansTypeRouteHandler,
  deletePhoneUsersUserIdCallLogsCallLogIdRouteHandler,
  deletePhoneUsersUserIdPhoneNumbersPhoneNumberIdRouteHandler,
  deletePhoneUsersUserIdSettingsSettingTypeRouteHandler,
  deletePhoneVoiceMailsVoicemailIdRouteHandler,
  deleteRolesRoleIdMembersMemberIdRouteHandler,
  deleteRolesRoleIdRouteHandler,
  deleteRoomsRoomIdRouteHandler,
  deleteSipPhonesPhoneIdRouteHandler,
  deleteTrackingFieldsFieldIdRouteHandler,
  deleteUsersUserIdAssistantsAssistantIdRouteHandler,
  deleteUsersUserIdAssistantsRouteHandler,
  deleteUsersUserIdRouteHandler,
  deleteUsersUserIdSchedulersRouteHandler,
  deleteUsersUserIdSchedulersSchedulerIdRouteHandler,
  deleteUsersUserIdSettingsVirtualBackgroundsRouteHandler,
  deleteUsersUserIdTokenRouteHandler,
  deleteUsersUserIdTspTspIdRouteHandler,
  deleteWebinarsWebinarIdPanelistsPanelistIdRouteHandler,
  deleteWebinarsWebinarIdPanelistsRouteHandler,
  deleteWebinarsWebinarIdPollsPollIdRouteHandler,
  deleteWebinarsWebinarIdRegistrantsRegistrantIdRouteHandler,
  deleteWebinarsWebinarIdRouteHandler,
  getAccountsAccountIdBillingInvoicesInvoiceIdRouteHandler,
  getAccountsAccountIdBillingInvoicesRouteHandler,
  getAccountsAccountIdBillingRouteHandler,
  getAccountsAccountIdLockSettingsRouteHandler,
  getAccountsAccountIdManagedDomainsRouteHandler,
  getAccountsAccountIdPlansRouteHandler,
  getAccountsAccountIdPlansUsageRouteHandler,
  getAccountsAccountIdRecordingsRouteHandler,
  getAccountsAccountIdRouteHandler,
  getAccountsAccountIdSettingsRouteHandler,
  getAccountsAccountIdSipTrunkCalloutCountriesRouteHandler,
  getAccountsAccountIdSipTrunkInternalNumbersRouteHandler,
  getAccountsAccountIdSipTrunkTrunksRouteHandler,
  getAccountsAccountIdTrustedDomainsRouteHandler,
  getAccountsRouteHandler,
  getApiDownloadBillingInvoicesInvoiceIdRouteHandler,
  getArchiveFilesRouteHandler,
  getChatChannelsChannelIdRouteHandler,
  getChatUsersMeContactsContactIdRouteHandler,
  getChatUsersMeContactsRouteHandler,
  getChatUsersUserIdChannelsChannelIdMembersRouteHandler,
  getChatUsersUserIdChannelsChannelIdRouteHandler,
  getChatUsersUserIdChannelsRouteHandler,
  getChatUsersUserIdMessagesRouteHandler,
  getContactsRouteHandler,
  getGroupsGroupIdLockSettingsRouteHandler,
  getGroupsGroupIdMembersRouteHandler,
  getGroupsGroupIdRouteHandler,
  getGroupsGroupIdSettingsRouteHandler,
  getGroupsRouteHandler,
  getH323DevicesRouteHandler,
  getImChatSessionsRouteHandler,
  getImChatSessionsSessionIdRouteHandler,
  getImGroupsGroupIdMembersRouteHandler,
  getImGroupsGroupIdRouteHandler,
  getImGroupsRouteHandler,
  getImUsersUserIdChatMessagesRouteHandler,
  getMeetingsMeetingIdInvitationRouteHandler,
  getMeetingsMeetingIdLivestreamRouteHandler,
  getMeetingsMeetingIdPollsPollIdRouteHandler,
  getMeetingsMeetingIdPollsRouteHandler,
  getMeetingsMeetingIdRecordingsRegistrantsQuestionsRouteHandler,
  getMeetingsMeetingIdRecordingsRegistrantsRouteHandler,
  getMeetingsMeetingIdRecordingsRouteHandler,
  getMeetingsMeetingIdRecordingsSettingsRouteHandler,
  getMeetingsMeetingIdRegistrantsQuestionsRouteHandler,
  getMeetingsMeetingIdRegistrantsRouteHandler,
  getMeetingsMeetingIdRouteHandler,
  getMetricsClientFeedbackFeedbackIdRouteHandler,
  getMetricsClientFeedbackRouteHandler,
  getMetricsClientSatisfactionRouteHandler,
  getMetricsCrcRouteHandler,
  getMetricsImRouteHandler,
  getMetricsIssuesZoomroomsRouteHandler,
  getMetricsIssuesZoomroomsZoomroomIdRouteHandler,
  getMetricsMeetingsMeetingIdParticipantsParticipantIdQosRouteHandler,
  getMetricsMeetingsMeetingIdParticipantsQosRouteHandler,
  getMetricsMeetingsMeetingIdParticipantsRouteHandler,
  getMetricsMeetingsMeetingIdParticipantsSatisfactionRouteHandler,
  getMetricsMeetingsMeetingIdParticipantsSharingRouteHandler,
  getMetricsMeetingsMeetingIdRouteHandler,
  getMetricsMeetingsRouteHandler,
  getMetricsWebinarsRouteHandler,
  getMetricsWebinarsWebinarIdParticipantsParticipantIdQosRouteHandler,
  getMetricsWebinarsWebinarIdParticipantsQosRouteHandler,
  getMetricsWebinarsWebinarIdParticipantsRouteHandler,
  getMetricsWebinarsWebinarIdParticipantsSatisfactionRouteHandler,
  getMetricsWebinarsWebinarIdParticipantsSharingRouteHandler,
  getMetricsWebinarsWebinarIdRouteHandler,
  getMetricsZoomroomsIssuesRouteHandler,
  getMetricsZoomroomsRouteHandler,
  getMetricsZoomroomsZoomroomIdRouteHandler,
  getPastMeetingsMeetingIdFilesRouteHandler,
  getPastMeetingsMeetingIdInstancesRouteHandler,
  getPastMeetingsMeetingIdPollsRouteHandler,
  getPastMeetingsMeetingUUIDParticipantsRouteHandler,
  getPastMeetingsMeetingUUIDRouteHandler,
  getPastWebinarsWebinarIdFilesRouteHandler,
  getPastWebinarsWebinarIdInstancesRouteHandler,
  getPastWebinarsWebinarIdParticipantsRouteHandler,
  getPastWebinarsWebinarIdPollsRouteHandler,
  getPastWebinarsWebinarIdQaRouteHandler,
  getPastWebinarsWebinarUUIDAbsenteesRouteHandler,
  getPhoneBlockedListBlockedListIdRouteHandler,
  getPhoneBlockedListRouteHandler,
  getPhoneCallingPlansRouteHandler,
  getPhoneCallLogsRouteHandler,
  getPhoneCallQueuesCallQueueIdRecordingsRouteHandler,
  getPhoneCallQueuesCallQueueIdRouteHandler,
  getPhoneCallQueuesRouteHandler,
  getPhoneCommonAreaPhonesCommonAreaPhoneIdRouteHandler,
  getPhoneCommonAreaPhonesRouteHandler,
  getPhoneDevicesDeviceIdRouteHandler,
  getPhoneDevicesRouteHandler,
  getPhoneMetricsCallLogsCallIdQosRouteHandler,
  getPhoneMetricsCallLogsCallIdRouteHandler,
  getPhoneMetricsCallLogsRouteHandler,
  getPhoneNumbersNumberIdRouteHandler,
  getPhoneNumbersRouteHandler,
  getPhoneRecordingsRouteHandler,
  getPhoneReportsOperationlogsRouteHandler,
  getPhoneSettingTemplatesRouteHandler,
  getPhoneSettingTemplatesTemplateIdRouteHandler,
  getPhoneSharedLineGroupsRouteHandler,
  getPhoneSharedLineGroupsSharedLineGroupIdRouteHandler,
  getPhoneSipTrunkTrunksRouteHandler,
  getPhoneSitesRouteHandler,
  getPhoneSitesSiteIdRouteHandler,
  getPhoneUsersRouteHandler,
  getPhoneUsersUserIdCallLogsRouteHandler,
  getPhoneUsersUserIdRecordingsRouteHandler,
  getPhoneUsersUserIdRouteHandler,
  getPhoneUsersUserIdSettingsRouteHandler,
  getPhoneUsersUserIdVoiceMailsRouteHandler,
  getReportActivitiesRouteHandler,
  getReportCloudRecordingRouteHandler,
  getReportDailyRouteHandler,
  getReportMeetingsMeetingIdParticipantsRouteHandler,
  getReportMeetingsMeetingIdPollsRouteHandler,
  getReportMeetingsMeetingIdRouteHandler,
  getReportOperationlogsRouteHandler,
  getReportTelephoneRouteHandler,
  getReportUsersRouteHandler,
  getReportUsersUserIdMeetingsRouteHandler,
  getReportWebinarsWebinarIdParticipantsRouteHandler,
  getReportWebinarsWebinarIdPollsRouteHandler,
  getReportWebinarsWebinarIdQaRouteHandler,
  getReportWebinarsWebinarIdRouteHandler,
  getRolesRoleIdMembersRouteHandler,
  getRolesRoleIdRouteHandler,
  getRolesRouteHandler,
  getRoomsAccountProfileRouteHandler,
  getRoomsAccountSettingsRouteHandler,
  getRoomsDigitalSignageRouteHandler,
  getRoomsLocationsLocationIdRouteHandler,
  getRoomsLocationsLocationIdSettingsRouteHandler,
  getRoomsLocationsRouteHandler,
  getRoomsLocationsStructureRouteHandler,
  getRoomsRoomIdDevicesRouteHandler,
  getRoomsRoomIdRouteHandler,
  getRoomsRoomIdSettingsRouteHandler,
  getRoomsRouteHandler,
  getSipPhonesRouteHandler,
  getSipTrunkNumbersRouteHandler,
  getTrackingFieldsFieldIdRouteHandler,
  getTrackingFieldsRouteHandler,
  getTspRouteHandler,
  getUsersEmailRouteHandler,
  getUsersMeZakRouteHandler,
  getUsersRouteHandler,
  getUsersUserIdAssistantsRouteHandler,
  getUsersUserIdMeetingsRouteHandler,
  getUsersUserIdMeetingTemplatesRouteHandler,
  getUsersUserIdPacRouteHandler,
  getUsersUserIdPermissionsRouteHandler,
  getUsersUserIdRecordingsRouteHandler,
  getUsersUserIdRouteHandler,
  getUsersUserIdSchedulersRouteHandler,
  getUsersUserIdSettingsRouteHandler,
  getUsersUserIdTokenRouteHandler,
  getUsersUserIdTspRouteHandler,
  getUsersUserIdTspTspIdRouteHandler,
  getUsersUserIdWebinarsRouteHandler,
  getUsersUserIdWebinarTemplatesRouteHandler,
  getUsersVanityNameRouteHandler,
  getWebinarsWebinarIdPanelistsRouteHandler,
  getWebinarsWebinarIdPollsPollIdRouteHandler,
  getWebinarsWebinarIdPollsRouteHandler,
  getWebinarsWebinarIdRegistrantsQuestionsRouteHandler,
  getWebinarsWebinarIdRegistrantsRegistrantIdRouteHandler,
  getWebinarsWebinarIdRegistrantsRouteHandler,
  getWebinarsWebinarIdRouteHandler,
  getWebinarsWebinarIdTrackingSourcesRouteHandler,
  patchAccountsAccountIdBillingRouteHandler,
  patchAccountsAccountIdLockSettingsRouteHandler,
  patchAccountsAccountIdOptionsRouteHandler,
  patchAccountsAccountIdPhoneSettingsRouteHandler,
  patchAccountsAccountIdPhoneSipTrunkTrunksSipTrunkIdRouteHandler,
  patchAccountsAccountIdPlansAddonsStatusRouteHandler,
  patchAccountsAccountIdPlansBaseStatusRouteHandler,
  patchAccountsAccountIdSettingsRouteHandler,
  patchAccountsAccountIdSipTrunkSettingsRouteHandler,
  patchChatChannelsChannelIdRouteHandler,
  patchChatUsersUserIdChannelsChannelIdRouteHandler,
  patchGroupsGroupIdLockSettingsRouteHandler,
  patchGroupsGroupIdMembersMemberIdRouteHandler,
  patchGroupsGroupIdRouteHandler,
  patchGroupsGroupIdSettingsRouteHandler,
  patchH323DevicesDeviceIdRouteHandler,
  patchImGroupsGroupIdRouteHandler,
  patchLiveMeetingsMeetingIdEventsRouteHandler,
  patchMeetingsMeetingIdLivestreamRouteHandler,
  patchMeetingsMeetingIdLivestreamStatusRouteHandler,
  patchMeetingsMeetingIdRecordingsRegistrantsQuestionsRouteHandler,
  patchMeetingsMeetingIdRecordingsSettingsRouteHandler,
  patchMeetingsMeetingIdRegistrantsQuestionsRouteHandler,
  patchMeetingsMeetingIdRouteHandler,
  patchPhoneAutoReceptionistsAutoReceptionistIdRouteHandler,
  patchPhoneBlockedListBlockedListIdRouteHandler,
  patchPhoneCallQueuesCallQueueIdRouteHandler,
  patchPhoneCommonAreaPhonesCommonAreaPhoneIdRouteHandler,
  patchPhoneDevicesDeviceIdRouteHandler,
  patchPhoneNumbersNumberIdRouteHandler,
  patchPhoneSettingTemplatesTemplateIdRouteHandler,
  patchPhoneSharedLineGroupsSharedLineGroupIdRouteHandler,
  patchPhoneSitesSiteIdRouteHandler,
  patchPhoneUsersUserIdRouteHandler,
  patchPhoneUsersUserIdSettingsSettingTypeRouteHandler,
  patchRolesRoleIdRouteHandler,
  patchRoomsAccountProfileRouteHandler,
  patchRoomsAccountSettingsRouteHandler,
  patchRoomsEventsRouteHandler,
  patchRoomsIdEventsRouteHandler,
  patchRoomsLocationsLocationIdRouteHandler,
  patchRoomsLocationsLocationIdSettingsRouteHandler,
  patchRoomsLocationsStructureRouteHandler,
  patchRoomsRoomIdRouteHandler,
  patchRoomsRoomIdSettingsRouteHandler,
  patchSipPhonesPhoneIdRouteHandler,
  patchTrackingFieldsFieldIdRouteHandler,
  patchTspRouteHandler,
  patchUsersUserIdRouteHandler,
  patchUsersUserIdSettingsRouteHandler,
  patchUsersUserIdTspSettingsRouteHandler,
  patchUsersUserIdTspTspIdRouteHandler,
  patchWebinarsWebinarIdRegistrantsQuestionsRouteHandler,
  patchWebinarsWebinarIdRouteHandler,
  postAccountsAccountIdPhoneSetupRouteHandler,
  postAccountsAccountIdPhoneSipTrunkTrunksRouteHandler,
  postAccountsAccountIdPlansAddonsRouteHandler,
  postAccountsAccountIdPlansRouteHandler,
  postAccountsAccountIdSettingsVirtualBackgroundsRouteHandler,
  postAccountsAccountIdSipTrunkCalloutCountriesRouteHandler,
  postAccountsAccountIdSipTrunkInternalNumbersRouteHandler,
  postAccountsAccountIdSipTrunkNumbersRouteHandler,
  postAccountsAccountIdSipTrunkTrunksRouteHandler,
  postAccountsRouteHandler,
  postChatChannelsChannelIdMembersMeRouteHandler,
  postChatUsersUserIdChannelsChannelIdMembersRouteHandler,
  postChatUsersUserIdChannelsRouteHandler,
  postChatUsersUserIdMessagesRouteHandler,
  postGroupsGroupIdMembersRouteHandler,
  postGroupsGroupIdSettingsVirtualBackgroundsRouteHandler,
  postGroupsRouteHandler,
  postH323DevicesRouteHandler,
  postImChatMessagesRouteHandler,
  postImGroupsGroupIdMembersRouteHandler,
  postImGroupsRouteHandler,
  postImUsersMeChatMessagesRouteHandler,
  postMeetingsMeetingIdBatchPollsRouteHandler,
  postMeetingsMeetingIdPollsRouteHandler,
  postMeetingsMeetingIdRecordingsRegistrantsRouteHandler,
  postMeetingsMeetingIdRegistrantsRouteHandler,
  postPhoneAutoReceptionistsAutoReceptionistIdPhoneNumbersRouteHandler,
  postPhoneAutoReceptionistsRouteHandler,
  postPhoneBlockedListRouteHandler,
  postPhoneByocNumbersRouteHandler,
  postPhoneCallQueuesCallQueueIdMembersRouteHandler,
  postPhoneCallQueuesCallQueueIdPhoneNumbersRouteHandler,
  postPhoneCallQueuesRouteHandler,
  postPhoneCommonAreaPhonesRouteHandler,
  postPhoneDevicesRouteHandler,
  postPhoneSettingTemplatesRouteHandler,
  postPhoneSharedLineGroupsRouteHandler,
  postPhoneSharedLineGroupsSharedLineGroupIdMembersRouteHandler,
  postPhoneSharedLineGroupsSharedLineGroupIdPhoneNumbersRouteHandler,
  postPhoneSitesRouteHandler,
  postPhoneUsersUserIdCallingPlansRouteHandler,
  postPhoneUsersUserIdPhoneNumbersRouteHandler,
  postPhoneUsersUserIdSettingsSettingTypeRouteHandler,
  postRolesRoleIdMembersRouteHandler,
  postRolesRouteHandler,
  postRoomsLocationsRouteHandler,
  postRoomsRouteHandler,
  postSipPhonesRouteHandler,
  postTrackingFieldsRouteHandler,
  postUsersRouteHandler,
  postUsersUserIdAssistantsRouteHandler,
  postUsersUserIdMeetingsRouteHandler,
  postUsersUserIdPictureRouteHandler,
  postUsersUserIdSettingsVirtualBackgroundsRouteHandler,
  postUsersUserIdTspRouteHandler,
  postUsersUserIdWebinarsRouteHandler,
  postWebinarsWebinarIdBatchRegistrantsRouteHandler,
  postWebinarsWebinarIdPanelistsRouteHandler,
  postWebinarsWebinarIdPollsRouteHandler,
  postWebinarsWebinarIdRegistrantsRouteHandler,
  putAccountsAccountIdOwnerRouteHandler,
  putAccountsAccountIdPlansAddonsRouteHandler,
  putAccountsAccountIdPlansBaseRouteHandler,
  putAccountsAccountIdUsersUserIdAccountRouteHandler,
  putChatUsersUserIdMessagesMessageIdRouteHandler,
  putImChatMessagesMessageIdRouteHandler,
  putMeetingsMeetingIdPollsPollIdRouteHandler,
  putMeetingsMeetingIdRecordingsRecordingIdStatusRouteHandler,
  putMeetingsMeetingIdRecordingsRegistrantsStatusRouteHandler,
  putMeetingsMeetingIdRecordingsStatusRouteHandler,
  putMeetingsMeetingIdRegistrantsStatusRouteHandler,
  putMeetingsMeetingIdStatusRouteHandler,
  putPhoneCallQueuesCallQueueIdManagerRouteHandler,
  putPhoneCompanyNumberRouteHandler,
  putRoomsLocationsLocationIdLocationRouteHandler,
  putRoomsRoomIdDevicesDeviceIdAppVersionRouteHandler,
  putRoomsRoomIdLocationRouteHandler,
  putUsersUserIdEmailRouteHandler,
  putUsersUserIdPasswordRouteHandler,
  putUsersUserIdPresenceStatusRouteHandler,
  putUsersUserIdStatusRouteHandler,
  putWebinarsWebinarIdPollsPollIdRouteHandler,
  putWebinarsWebinarIdRegistrantsStatusRouteHandler,
  putWebinarsWebinarIdStatusRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getAccountsRoute, getAccountsRouteHandler)
  .openapi(postAccountsRoute, postAccountsRouteHandler)
  .openapi(deleteAccountsAccountIdRoute, deleteAccountsAccountIdRouteHandler)
  .openapi(getAccountsAccountIdRoute, getAccountsAccountIdRouteHandler)
  .openapi(getAccountsAccountIdBillingRoute, getAccountsAccountIdBillingRouteHandler)
  .openapi(patchAccountsAccountIdBillingRoute, patchAccountsAccountIdBillingRouteHandler)
  .openapi(
    getAccountsAccountIdBillingInvoicesRoute,
    getAccountsAccountIdBillingInvoicesRouteHandler,
  )
  .openapi(
    getAccountsAccountIdBillingInvoicesInvoiceIdRoute,
    getAccountsAccountIdBillingInvoicesInvoiceIdRouteHandler,
  )
  .openapi(getAccountsAccountIdLockSettingsRoute, getAccountsAccountIdLockSettingsRouteHandler)
  .openapi(patchAccountsAccountIdLockSettingsRoute, patchAccountsAccountIdLockSettingsRouteHandler)
  .openapi(getAccountsAccountIdManagedDomainsRoute, getAccountsAccountIdManagedDomainsRouteHandler)
  .openapi(patchAccountsAccountIdOptionsRoute, patchAccountsAccountIdOptionsRouteHandler)
  .openapi(putAccountsAccountIdOwnerRoute, putAccountsAccountIdOwnerRouteHandler)
  .openapi(
    patchAccountsAccountIdPhoneSettingsRoute,
    patchAccountsAccountIdPhoneSettingsRouteHandler,
  )
  .openapi(postAccountsAccountIdPhoneSetupRoute, postAccountsAccountIdPhoneSetupRouteHandler)
  .openapi(
    postAccountsAccountIdPhoneSipTrunkTrunksRoute,
    postAccountsAccountIdPhoneSipTrunkTrunksRouteHandler,
  )
  .openapi(
    patchAccountsAccountIdPhoneSipTrunkTrunksSipTrunkIdRoute,
    patchAccountsAccountIdPhoneSipTrunkTrunksSipTrunkIdRouteHandler,
  )
  .openapi(getAccountsAccountIdPlansRoute, getAccountsAccountIdPlansRouteHandler)
  .openapi(postAccountsAccountIdPlansRoute, postAccountsAccountIdPlansRouteHandler)
  .openapi(postAccountsAccountIdPlansAddonsRoute, postAccountsAccountIdPlansAddonsRouteHandler)
  .openapi(putAccountsAccountIdPlansAddonsRoute, putAccountsAccountIdPlansAddonsRouteHandler)
  .openapi(
    patchAccountsAccountIdPlansAddonsStatusRoute,
    patchAccountsAccountIdPlansAddonsStatusRouteHandler,
  )
  .openapi(putAccountsAccountIdPlansBaseRoute, putAccountsAccountIdPlansBaseRouteHandler)
  .openapi(
    patchAccountsAccountIdPlansBaseStatusRoute,
    patchAccountsAccountIdPlansBaseStatusRouteHandler,
  )
  .openapi(getAccountsAccountIdPlansUsageRoute, getAccountsAccountIdPlansUsageRouteHandler)
  .openapi(getAccountsAccountIdRecordingsRoute, getAccountsAccountIdRecordingsRouteHandler)
  .openapi(getAccountsAccountIdSettingsRoute, getAccountsAccountIdSettingsRouteHandler)
  .openapi(patchAccountsAccountIdSettingsRoute, patchAccountsAccountIdSettingsRouteHandler)
  .openapi(
    deleteAccountsAccountIdSettingsVirtualBackgroundsRoute,
    deleteAccountsAccountIdSettingsVirtualBackgroundsRouteHandler,
  )
  .openapi(
    postAccountsAccountIdSettingsVirtualBackgroundsRoute,
    postAccountsAccountIdSettingsVirtualBackgroundsRouteHandler,
  )
  .openapi(
    getAccountsAccountIdSipTrunkCalloutCountriesRoute,
    getAccountsAccountIdSipTrunkCalloutCountriesRouteHandler,
  )
  .openapi(
    postAccountsAccountIdSipTrunkCalloutCountriesRoute,
    postAccountsAccountIdSipTrunkCalloutCountriesRouteHandler,
  )
  .openapi(
    deleteAccountsAccountIdSipTrunkCalloutCountriesCountryIdRoute,
    deleteAccountsAccountIdSipTrunkCalloutCountriesCountryIdRouteHandler,
  )
  .openapi(
    getAccountsAccountIdSipTrunkInternalNumbersRoute,
    getAccountsAccountIdSipTrunkInternalNumbersRouteHandler,
  )
  .openapi(
    postAccountsAccountIdSipTrunkInternalNumbersRoute,
    postAccountsAccountIdSipTrunkInternalNumbersRouteHandler,
  )
  .openapi(
    deleteAccountsAccountIdSipTrunkInternalNumbersNumberIdRoute,
    deleteAccountsAccountIdSipTrunkInternalNumbersNumberIdRouteHandler,
  )
  .openapi(
    deleteAccountsAccountIdSipTrunkNumbersRoute,
    deleteAccountsAccountIdSipTrunkNumbersRouteHandler,
  )
  .openapi(
    postAccountsAccountIdSipTrunkNumbersRoute,
    postAccountsAccountIdSipTrunkNumbersRouteHandler,
  )
  .openapi(
    patchAccountsAccountIdSipTrunkSettingsRoute,
    patchAccountsAccountIdSipTrunkSettingsRouteHandler,
  )
  .openapi(getAccountsAccountIdSipTrunkTrunksRoute, getAccountsAccountIdSipTrunkTrunksRouteHandler)
  .openapi(
    postAccountsAccountIdSipTrunkTrunksRoute,
    postAccountsAccountIdSipTrunkTrunksRouteHandler,
  )
  .openapi(
    deleteAccountsAccountIdSipTrunkTrunksTrunkIdRoute,
    deleteAccountsAccountIdSipTrunkTrunksTrunkIdRouteHandler,
  )
  .openapi(getAccountsAccountIdTrustedDomainsRoute, getAccountsAccountIdTrustedDomainsRouteHandler)
  .openapi(
    putAccountsAccountIdUsersUserIdAccountRoute,
    putAccountsAccountIdUsersUserIdAccountRouteHandler,
  )
  .openapi(
    getApiDownloadBillingInvoicesInvoiceIdRoute,
    getApiDownloadBillingInvoicesInvoiceIdRouteHandler,
  )
  .openapi(getArchiveFilesRoute, getArchiveFilesRouteHandler)
  .openapi(deleteChatChannelsChannelIdRoute, deleteChatChannelsChannelIdRouteHandler)
  .openapi(getChatChannelsChannelIdRoute, getChatChannelsChannelIdRouteHandler)
  .openapi(patchChatChannelsChannelIdRoute, patchChatChannelsChannelIdRouteHandler)
  .openapi(
    deleteChatChannelsChannelIdMembersMeRoute,
    deleteChatChannelsChannelIdMembersMeRouteHandler,
  )
  .openapi(postChatChannelsChannelIdMembersMeRoute, postChatChannelsChannelIdMembersMeRouteHandler)
  .openapi(
    deleteChatChannelsChannelIdMembersMemberIdRoute,
    deleteChatChannelsChannelIdMembersMemberIdRouteHandler,
  )
  .openapi(getChatUsersMeContactsRoute, getChatUsersMeContactsRouteHandler)
  .openapi(getChatUsersMeContactsContactIdRoute, getChatUsersMeContactsContactIdRouteHandler)
  .openapi(getChatUsersUserIdChannelsRoute, getChatUsersUserIdChannelsRouteHandler)
  .openapi(postChatUsersUserIdChannelsRoute, postChatUsersUserIdChannelsRouteHandler)
  .openapi(
    deleteChatUsersUserIdChannelsChannelIdRoute,
    deleteChatUsersUserIdChannelsChannelIdRouteHandler,
  )
  .openapi(
    getChatUsersUserIdChannelsChannelIdRoute,
    getChatUsersUserIdChannelsChannelIdRouteHandler,
  )
  .openapi(
    patchChatUsersUserIdChannelsChannelIdRoute,
    patchChatUsersUserIdChannelsChannelIdRouteHandler,
  )
  .openapi(
    getChatUsersUserIdChannelsChannelIdMembersRoute,
    getChatUsersUserIdChannelsChannelIdMembersRouteHandler,
  )
  .openapi(
    postChatUsersUserIdChannelsChannelIdMembersRoute,
    postChatUsersUserIdChannelsChannelIdMembersRouteHandler,
  )
  .openapi(
    deleteChatUsersUserIdChannelsChannelIdMembersMemberIdRoute,
    deleteChatUsersUserIdChannelsChannelIdMembersMemberIdRouteHandler,
  )
  .openapi(getChatUsersUserIdMessagesRoute, getChatUsersUserIdMessagesRouteHandler)
  .openapi(postChatUsersUserIdMessagesRoute, postChatUsersUserIdMessagesRouteHandler)
  .openapi(
    deleteChatUsersUserIdMessagesMessageIdRoute,
    deleteChatUsersUserIdMessagesMessageIdRouteHandler,
  )
  .openapi(
    putChatUsersUserIdMessagesMessageIdRoute,
    putChatUsersUserIdMessagesMessageIdRouteHandler,
  )
  .openapi(getContactsRoute, getContactsRouteHandler)
  .openapi(getGroupsRoute, getGroupsRouteHandler)
  .openapi(postGroupsRoute, postGroupsRouteHandler)
  .openapi(deleteGroupsGroupIdRoute, deleteGroupsGroupIdRouteHandler)
  .openapi(getGroupsGroupIdRoute, getGroupsGroupIdRouteHandler)
  .openapi(patchGroupsGroupIdRoute, patchGroupsGroupIdRouteHandler)
  .openapi(getGroupsGroupIdLockSettingsRoute, getGroupsGroupIdLockSettingsRouteHandler)
  .openapi(patchGroupsGroupIdLockSettingsRoute, patchGroupsGroupIdLockSettingsRouteHandler)
  .openapi(getGroupsGroupIdMembersRoute, getGroupsGroupIdMembersRouteHandler)
  .openapi(postGroupsGroupIdMembersRoute, postGroupsGroupIdMembersRouteHandler)
  .openapi(deleteGroupsGroupIdMembersMemberIdRoute, deleteGroupsGroupIdMembersMemberIdRouteHandler)
  .openapi(patchGroupsGroupIdMembersMemberIdRoute, patchGroupsGroupIdMembersMemberIdRouteHandler)
  .openapi(getGroupsGroupIdSettingsRoute, getGroupsGroupIdSettingsRouteHandler)
  .openapi(patchGroupsGroupIdSettingsRoute, patchGroupsGroupIdSettingsRouteHandler)
  .openapi(
    deleteGroupsGroupIdSettingsVirtualBackgroundsRoute,
    deleteGroupsGroupIdSettingsVirtualBackgroundsRouteHandler,
  )
  .openapi(
    postGroupsGroupIdSettingsVirtualBackgroundsRoute,
    postGroupsGroupIdSettingsVirtualBackgroundsRouteHandler,
  )
  .openapi(getH323DevicesRoute, getH323DevicesRouteHandler)
  .openapi(postH323DevicesRoute, postH323DevicesRouteHandler)
  .openapi(deleteH323DevicesDeviceIdRoute, deleteH323DevicesDeviceIdRouteHandler)
  .openapi(patchH323DevicesDeviceIdRoute, patchH323DevicesDeviceIdRouteHandler)
  .openapi(postImChatMessagesRoute, postImChatMessagesRouteHandler)
  .openapi(deleteImChatMessagesMessageIdRoute, deleteImChatMessagesMessageIdRouteHandler)
  .openapi(putImChatMessagesMessageIdRoute, putImChatMessagesMessageIdRouteHandler)
  .openapi(getImChatSessionsRoute, getImChatSessionsRouteHandler)
  .openapi(getImChatSessionsSessionIdRoute, getImChatSessionsSessionIdRouteHandler)
  .openapi(getImGroupsRoute, getImGroupsRouteHandler)
  .openapi(postImGroupsRoute, postImGroupsRouteHandler)
  .openapi(deleteImGroupsGroupIdRoute, deleteImGroupsGroupIdRouteHandler)
  .openapi(getImGroupsGroupIdRoute, getImGroupsGroupIdRouteHandler)
  .openapi(patchImGroupsGroupIdRoute, patchImGroupsGroupIdRouteHandler)
  .openapi(getImGroupsGroupIdMembersRoute, getImGroupsGroupIdMembersRouteHandler)
  .openapi(postImGroupsGroupIdMembersRoute, postImGroupsGroupIdMembersRouteHandler)
  .openapi(
    deleteImGroupsGroupIdMembersMemberIdRoute,
    deleteImGroupsGroupIdMembersMemberIdRouteHandler,
  )
  .openapi(postImUsersMeChatMessagesRoute, postImUsersMeChatMessagesRouteHandler)
  .openapi(getImUsersUserIdChatMessagesRoute, getImUsersUserIdChatMessagesRouteHandler)
  .openapi(patchLiveMeetingsMeetingIdEventsRoute, patchLiveMeetingsMeetingIdEventsRouteHandler)
  .openapi(deleteMeetingsMeetingIdRoute, deleteMeetingsMeetingIdRouteHandler)
  .openapi(getMeetingsMeetingIdRoute, getMeetingsMeetingIdRouteHandler)
  .openapi(patchMeetingsMeetingIdRoute, patchMeetingsMeetingIdRouteHandler)
  .openapi(postMeetingsMeetingIdBatchPollsRoute, postMeetingsMeetingIdBatchPollsRouteHandler)
  .openapi(getMeetingsMeetingIdInvitationRoute, getMeetingsMeetingIdInvitationRouteHandler)
  .openapi(getMeetingsMeetingIdLivestreamRoute, getMeetingsMeetingIdLivestreamRouteHandler)
  .openapi(patchMeetingsMeetingIdLivestreamRoute, patchMeetingsMeetingIdLivestreamRouteHandler)
  .openapi(
    patchMeetingsMeetingIdLivestreamStatusRoute,
    patchMeetingsMeetingIdLivestreamStatusRouteHandler,
  )
  .openapi(getMeetingsMeetingIdPollsRoute, getMeetingsMeetingIdPollsRouteHandler)
  .openapi(postMeetingsMeetingIdPollsRoute, postMeetingsMeetingIdPollsRouteHandler)
  .openapi(deleteMeetingsMeetingIdPollsPollIdRoute, deleteMeetingsMeetingIdPollsPollIdRouteHandler)
  .openapi(getMeetingsMeetingIdPollsPollIdRoute, getMeetingsMeetingIdPollsPollIdRouteHandler)
  .openapi(putMeetingsMeetingIdPollsPollIdRoute, putMeetingsMeetingIdPollsPollIdRouteHandler)
  .openapi(deleteMeetingsMeetingIdRecordingsRoute, deleteMeetingsMeetingIdRecordingsRouteHandler)
  .openapi(getMeetingsMeetingIdRecordingsRoute, getMeetingsMeetingIdRecordingsRouteHandler)
  .openapi(
    getMeetingsMeetingIdRecordingsRegistrantsRoute,
    getMeetingsMeetingIdRecordingsRegistrantsRouteHandler,
  )
  .openapi(
    postMeetingsMeetingIdRecordingsRegistrantsRoute,
    postMeetingsMeetingIdRecordingsRegistrantsRouteHandler,
  )
  .openapi(
    getMeetingsMeetingIdRecordingsRegistrantsQuestionsRoute,
    getMeetingsMeetingIdRecordingsRegistrantsQuestionsRouteHandler,
  )
  .openapi(
    patchMeetingsMeetingIdRecordingsRegistrantsQuestionsRoute,
    patchMeetingsMeetingIdRecordingsRegistrantsQuestionsRouteHandler,
  )
  .openapi(
    putMeetingsMeetingIdRecordingsRegistrantsStatusRoute,
    putMeetingsMeetingIdRecordingsRegistrantsStatusRouteHandler,
  )
  .openapi(
    getMeetingsMeetingIdRecordingsSettingsRoute,
    getMeetingsMeetingIdRecordingsSettingsRouteHandler,
  )
  .openapi(
    patchMeetingsMeetingIdRecordingsSettingsRoute,
    patchMeetingsMeetingIdRecordingsSettingsRouteHandler,
  )
  .openapi(
    putMeetingsMeetingIdRecordingsStatusRoute,
    putMeetingsMeetingIdRecordingsStatusRouteHandler,
  )
  .openapi(
    deleteMeetingsMeetingIdRecordingsRecordingIdRoute,
    deleteMeetingsMeetingIdRecordingsRecordingIdRouteHandler,
  )
  .openapi(
    putMeetingsMeetingIdRecordingsRecordingIdStatusRoute,
    putMeetingsMeetingIdRecordingsRecordingIdStatusRouteHandler,
  )
  .openapi(getMeetingsMeetingIdRegistrantsRoute, getMeetingsMeetingIdRegistrantsRouteHandler)
  .openapi(postMeetingsMeetingIdRegistrantsRoute, postMeetingsMeetingIdRegistrantsRouteHandler)
  .openapi(
    getMeetingsMeetingIdRegistrantsQuestionsRoute,
    getMeetingsMeetingIdRegistrantsQuestionsRouteHandler,
  )
  .openapi(
    patchMeetingsMeetingIdRegistrantsQuestionsRoute,
    patchMeetingsMeetingIdRegistrantsQuestionsRouteHandler,
  )
  .openapi(
    putMeetingsMeetingIdRegistrantsStatusRoute,
    putMeetingsMeetingIdRegistrantsStatusRouteHandler,
  )
  .openapi(
    deleteMeetingsMeetingIdRegistrantsRegistrantIdRoute,
    deleteMeetingsMeetingIdRegistrantsRegistrantIdRouteHandler,
  )
  .openapi(putMeetingsMeetingIdStatusRoute, putMeetingsMeetingIdStatusRouteHandler)
  .openapi(getMetricsClientFeedbackRoute, getMetricsClientFeedbackRouteHandler)
  .openapi(getMetricsClientFeedbackFeedbackIdRoute, getMetricsClientFeedbackFeedbackIdRouteHandler)
  .openapi(getMetricsClientSatisfactionRoute, getMetricsClientSatisfactionRouteHandler)
  .openapi(getMetricsCrcRoute, getMetricsCrcRouteHandler)
  .openapi(getMetricsImRoute, getMetricsImRouteHandler)
  .openapi(getMetricsIssuesZoomroomsRoute, getMetricsIssuesZoomroomsRouteHandler)
  .openapi(
    getMetricsIssuesZoomroomsZoomroomIdRoute,
    getMetricsIssuesZoomroomsZoomroomIdRouteHandler,
  )
  .openapi(getMetricsMeetingsRoute, getMetricsMeetingsRouteHandler)
  .openapi(getMetricsMeetingsMeetingIdRoute, getMetricsMeetingsMeetingIdRouteHandler)
  .openapi(
    getMetricsMeetingsMeetingIdParticipantsRoute,
    getMetricsMeetingsMeetingIdParticipantsRouteHandler,
  )
  .openapi(
    getMetricsMeetingsMeetingIdParticipantsQosRoute,
    getMetricsMeetingsMeetingIdParticipantsQosRouteHandler,
  )
  .openapi(
    getMetricsMeetingsMeetingIdParticipantsSatisfactionRoute,
    getMetricsMeetingsMeetingIdParticipantsSatisfactionRouteHandler,
  )
  .openapi(
    getMetricsMeetingsMeetingIdParticipantsSharingRoute,
    getMetricsMeetingsMeetingIdParticipantsSharingRouteHandler,
  )
  .openapi(
    getMetricsMeetingsMeetingIdParticipantsParticipantIdQosRoute,
    getMetricsMeetingsMeetingIdParticipantsParticipantIdQosRouteHandler,
  )
  .openapi(getMetricsWebinarsRoute, getMetricsWebinarsRouteHandler)
  .openapi(getMetricsWebinarsWebinarIdRoute, getMetricsWebinarsWebinarIdRouteHandler)
  .openapi(
    getMetricsWebinarsWebinarIdParticipantsRoute,
    getMetricsWebinarsWebinarIdParticipantsRouteHandler,
  )
  .openapi(
    getMetricsWebinarsWebinarIdParticipantsQosRoute,
    getMetricsWebinarsWebinarIdParticipantsQosRouteHandler,
  )
  .openapi(
    getMetricsWebinarsWebinarIdParticipantsSatisfactionRoute,
    getMetricsWebinarsWebinarIdParticipantsSatisfactionRouteHandler,
  )
  .openapi(
    getMetricsWebinarsWebinarIdParticipantsSharingRoute,
    getMetricsWebinarsWebinarIdParticipantsSharingRouteHandler,
  )
  .openapi(
    getMetricsWebinarsWebinarIdParticipantsParticipantIdQosRoute,
    getMetricsWebinarsWebinarIdParticipantsParticipantIdQosRouteHandler,
  )
  .openapi(getMetricsZoomroomsRoute, getMetricsZoomroomsRouteHandler)
  .openapi(getMetricsZoomroomsIssuesRoute, getMetricsZoomroomsIssuesRouteHandler)
  .openapi(getMetricsZoomroomsZoomroomIdRoute, getMetricsZoomroomsZoomroomIdRouteHandler)
  .openapi(getPastMeetingsMeetingIdFilesRoute, getPastMeetingsMeetingIdFilesRouteHandler)
  .openapi(getPastMeetingsMeetingIdInstancesRoute, getPastMeetingsMeetingIdInstancesRouteHandler)
  .openapi(getPastMeetingsMeetingIdPollsRoute, getPastMeetingsMeetingIdPollsRouteHandler)
  .openapi(getPastMeetingsMeetingUUIDRoute, getPastMeetingsMeetingUUIDRouteHandler)
  .openapi(
    getPastMeetingsMeetingUUIDParticipantsRoute,
    getPastMeetingsMeetingUUIDParticipantsRouteHandler,
  )
  .openapi(
    getPastWebinarsWebinarUUIDAbsenteesRoute,
    getPastWebinarsWebinarUUIDAbsenteesRouteHandler,
  )
  .openapi(getPastWebinarsWebinarIdFilesRoute, getPastWebinarsWebinarIdFilesRouteHandler)
  .openapi(getPastWebinarsWebinarIdInstancesRoute, getPastWebinarsWebinarIdInstancesRouteHandler)
  .openapi(
    getPastWebinarsWebinarIdParticipantsRoute,
    getPastWebinarsWebinarIdParticipantsRouteHandler,
  )
  .openapi(getPastWebinarsWebinarIdPollsRoute, getPastWebinarsWebinarIdPollsRouteHandler)
  .openapi(getPastWebinarsWebinarIdQaRoute, getPastWebinarsWebinarIdQaRouteHandler)
  .openapi(postPhoneAutoReceptionistsRoute, postPhoneAutoReceptionistsRouteHandler)
  .openapi(
    patchPhoneAutoReceptionistsAutoReceptionistIdRoute,
    patchPhoneAutoReceptionistsAutoReceptionistIdRouteHandler,
  )
  .openapi(
    deletePhoneAutoReceptionistsAutoReceptionistIdPhoneNumbersRoute,
    deletePhoneAutoReceptionistsAutoReceptionistIdPhoneNumbersRouteHandler,
  )
  .openapi(
    postPhoneAutoReceptionistsAutoReceptionistIdPhoneNumbersRoute,
    postPhoneAutoReceptionistsAutoReceptionistIdPhoneNumbersRouteHandler,
  )
  .openapi(
    deletePhoneAutoReceptionistsAutoReceptionistIdPhoneNumbersPhoneNumberIdRoute,
    deletePhoneAutoReceptionistsAutoReceptionistIdPhoneNumbersPhoneNumberIdRouteHandler,
  )
  .openapi(getPhoneBlockedListRoute, getPhoneBlockedListRouteHandler)
  .openapi(postPhoneBlockedListRoute, postPhoneBlockedListRouteHandler)
  .openapi(
    deletePhoneBlockedListBlockedListIdRoute,
    deletePhoneBlockedListBlockedListIdRouteHandler,
  )
  .openapi(getPhoneBlockedListBlockedListIdRoute, getPhoneBlockedListBlockedListIdRouteHandler)
  .openapi(patchPhoneBlockedListBlockedListIdRoute, patchPhoneBlockedListBlockedListIdRouteHandler)
  .openapi(postPhoneByocNumbersRoute, postPhoneByocNumbersRouteHandler)
  .openapi(getPhoneCallLogsRoute, getPhoneCallLogsRouteHandler)
  .openapi(getPhoneCallQueuesRoute, getPhoneCallQueuesRouteHandler)
  .openapi(postPhoneCallQueuesRoute, postPhoneCallQueuesRouteHandler)
  .openapi(deletePhoneCallQueuesCallQueueIdRoute, deletePhoneCallQueuesCallQueueIdRouteHandler)
  .openapi(getPhoneCallQueuesCallQueueIdRoute, getPhoneCallQueuesCallQueueIdRouteHandler)
  .openapi(patchPhoneCallQueuesCallQueueIdRoute, patchPhoneCallQueuesCallQueueIdRouteHandler)
  .openapi(
    putPhoneCallQueuesCallQueueIdManagerRoute,
    putPhoneCallQueuesCallQueueIdManagerRouteHandler,
  )
  .openapi(
    deletePhoneCallQueuesCallQueueIdMembersRoute,
    deletePhoneCallQueuesCallQueueIdMembersRouteHandler,
  )
  .openapi(
    postPhoneCallQueuesCallQueueIdMembersRoute,
    postPhoneCallQueuesCallQueueIdMembersRouteHandler,
  )
  .openapi(
    deletePhoneCallQueuesCallQueueIdMembersMemberIdRoute,
    deletePhoneCallQueuesCallQueueIdMembersMemberIdRouteHandler,
  )
  .openapi(
    deletePhoneCallQueuesCallQueueIdPhoneNumbersRoute,
    deletePhoneCallQueuesCallQueueIdPhoneNumbersRouteHandler,
  )
  .openapi(
    postPhoneCallQueuesCallQueueIdPhoneNumbersRoute,
    postPhoneCallQueuesCallQueueIdPhoneNumbersRouteHandler,
  )
  .openapi(
    deletePhoneCallQueuesCallQueueIdPhoneNumbersPhoneNumberIdRoute,
    deletePhoneCallQueuesCallQueueIdPhoneNumbersPhoneNumberIdRouteHandler,
  )
  .openapi(
    getPhoneCallQueuesCallQueueIdRecordingsRoute,
    getPhoneCallQueuesCallQueueIdRecordingsRouteHandler,
  )
  .openapi(getPhoneCallingPlansRoute, getPhoneCallingPlansRouteHandler)
  .openapi(getPhoneCommonAreaPhonesRoute, getPhoneCommonAreaPhonesRouteHandler)
  .openapi(postPhoneCommonAreaPhonesRoute, postPhoneCommonAreaPhonesRouteHandler)
  .openapi(
    deletePhoneCommonAreaPhonesCommonAreaPhoneIdRoute,
    deletePhoneCommonAreaPhonesCommonAreaPhoneIdRouteHandler,
  )
  .openapi(
    getPhoneCommonAreaPhonesCommonAreaPhoneIdRoute,
    getPhoneCommonAreaPhonesCommonAreaPhoneIdRouteHandler,
  )
  .openapi(
    patchPhoneCommonAreaPhonesCommonAreaPhoneIdRoute,
    patchPhoneCommonAreaPhonesCommonAreaPhoneIdRouteHandler,
  )
  .openapi(putPhoneCompanyNumberRoute, putPhoneCompanyNumberRouteHandler)
  .openapi(getPhoneDevicesRoute, getPhoneDevicesRouteHandler)
  .openapi(postPhoneDevicesRoute, postPhoneDevicesRouteHandler)
  .openapi(deletePhoneDevicesDeviceIdRoute, deletePhoneDevicesDeviceIdRouteHandler)
  .openapi(getPhoneDevicesDeviceIdRoute, getPhoneDevicesDeviceIdRouteHandler)
  .openapi(patchPhoneDevicesDeviceIdRoute, patchPhoneDevicesDeviceIdRouteHandler)
  .openapi(getPhoneMetricsCallLogsRoute, getPhoneMetricsCallLogsRouteHandler)
  .openapi(getPhoneMetricsCallLogsCallIdQosRoute, getPhoneMetricsCallLogsCallIdQosRouteHandler)
  .openapi(getPhoneMetricsCallLogsCallIdRoute, getPhoneMetricsCallLogsCallIdRouteHandler)
  .openapi(getPhoneNumbersRoute, getPhoneNumbersRouteHandler)
  .openapi(getPhoneNumbersNumberIdRoute, getPhoneNumbersNumberIdRouteHandler)
  .openapi(patchPhoneNumbersNumberIdRoute, patchPhoneNumbersNumberIdRouteHandler)
  .openapi(getPhoneRecordingsRoute, getPhoneRecordingsRouteHandler)
  .openapi(getPhoneReportsOperationlogsRoute, getPhoneReportsOperationlogsRouteHandler)
  .openapi(getPhoneSettingTemplatesRoute, getPhoneSettingTemplatesRouteHandler)
  .openapi(postPhoneSettingTemplatesRoute, postPhoneSettingTemplatesRouteHandler)
  .openapi(getPhoneSettingTemplatesTemplateIdRoute, getPhoneSettingTemplatesTemplateIdRouteHandler)
  .openapi(
    patchPhoneSettingTemplatesTemplateIdRoute,
    patchPhoneSettingTemplatesTemplateIdRouteHandler,
  )
  .openapi(getPhoneSharedLineGroupsRoute, getPhoneSharedLineGroupsRouteHandler)
  .openapi(postPhoneSharedLineGroupsRoute, postPhoneSharedLineGroupsRouteHandler)
  .openapi(
    deletePhoneSharedLineGroupsSharedLineGroupIdRoute,
    deletePhoneSharedLineGroupsSharedLineGroupIdRouteHandler,
  )
  .openapi(
    getPhoneSharedLineGroupsSharedLineGroupIdRoute,
    getPhoneSharedLineGroupsSharedLineGroupIdRouteHandler,
  )
  .openapi(
    patchPhoneSharedLineGroupsSharedLineGroupIdRoute,
    patchPhoneSharedLineGroupsSharedLineGroupIdRouteHandler,
  )
  .openapi(
    deletePhoneSharedLineGroupsSharedLineGroupIdMembersRoute,
    deletePhoneSharedLineGroupsSharedLineGroupIdMembersRouteHandler,
  )
  .openapi(
    postPhoneSharedLineGroupsSharedLineGroupIdMembersRoute,
    postPhoneSharedLineGroupsSharedLineGroupIdMembersRouteHandler,
  )
  .openapi(
    deletePhoneSharedLineGroupsSharedLineGroupIdMembersMemberIdRoute,
    deletePhoneSharedLineGroupsSharedLineGroupIdMembersMemberIdRouteHandler,
  )
  .openapi(
    postPhoneSharedLineGroupsSharedLineGroupIdPhoneNumbersRoute,
    postPhoneSharedLineGroupsSharedLineGroupIdPhoneNumbersRouteHandler,
  )
  .openapi(
    deletePhoneSharedLineGroupsSharedLineGroupIdPhoneNumbersPhoneNumberIdRoute,
    deletePhoneSharedLineGroupsSharedLineGroupIdPhoneNumbersPhoneNumberIdRouteHandler,
  )
  .openapi(getPhoneSipTrunkTrunksRoute, getPhoneSipTrunkTrunksRouteHandler)
  .openapi(getPhoneSitesRoute, getPhoneSitesRouteHandler)
  .openapi(postPhoneSitesRoute, postPhoneSitesRouteHandler)
  .openapi(deletePhoneSitesSiteIdRoute, deletePhoneSitesSiteIdRouteHandler)
  .openapi(getPhoneSitesSiteIdRoute, getPhoneSitesSiteIdRouteHandler)
  .openapi(patchPhoneSitesSiteIdRoute, patchPhoneSitesSiteIdRouteHandler)
  .openapi(getPhoneUsersRoute, getPhoneUsersRouteHandler)
  .openapi(getPhoneUsersUserIdRoute, getPhoneUsersUserIdRouteHandler)
  .openapi(patchPhoneUsersUserIdRoute, patchPhoneUsersUserIdRouteHandler)
  .openapi(getPhoneUsersUserIdCallLogsRoute, getPhoneUsersUserIdCallLogsRouteHandler)
  .openapi(
    deletePhoneUsersUserIdCallLogsCallLogIdRoute,
    deletePhoneUsersUserIdCallLogsCallLogIdRouteHandler,
  )
  .openapi(postPhoneUsersUserIdCallingPlansRoute, postPhoneUsersUserIdCallingPlansRouteHandler)
  .openapi(
    deletePhoneUsersUserIdCallingPlansTypeRoute,
    deletePhoneUsersUserIdCallingPlansTypeRouteHandler,
  )
  .openapi(postPhoneUsersUserIdPhoneNumbersRoute, postPhoneUsersUserIdPhoneNumbersRouteHandler)
  .openapi(
    deletePhoneUsersUserIdPhoneNumbersPhoneNumberIdRoute,
    deletePhoneUsersUserIdPhoneNumbersPhoneNumberIdRouteHandler,
  )
  .openapi(getPhoneUsersUserIdRecordingsRoute, getPhoneUsersUserIdRecordingsRouteHandler)
  .openapi(getPhoneUsersUserIdSettingsRoute, getPhoneUsersUserIdSettingsRouteHandler)
  .openapi(
    deletePhoneUsersUserIdSettingsSettingTypeRoute,
    deletePhoneUsersUserIdSettingsSettingTypeRouteHandler,
  )
  .openapi(
    patchPhoneUsersUserIdSettingsSettingTypeRoute,
    patchPhoneUsersUserIdSettingsSettingTypeRouteHandler,
  )
  .openapi(
    postPhoneUsersUserIdSettingsSettingTypeRoute,
    postPhoneUsersUserIdSettingsSettingTypeRouteHandler,
  )
  .openapi(getPhoneUsersUserIdVoiceMailsRoute, getPhoneUsersUserIdVoiceMailsRouteHandler)
  .openapi(deletePhoneVoiceMailsVoicemailIdRoute, deletePhoneVoiceMailsVoicemailIdRouteHandler)
  .openapi(getReportActivitiesRoute, getReportActivitiesRouteHandler)
  .openapi(getReportCloudRecordingRoute, getReportCloudRecordingRouteHandler)
  .openapi(getReportDailyRoute, getReportDailyRouteHandler)
  .openapi(getReportMeetingsMeetingIdRoute, getReportMeetingsMeetingIdRouteHandler)
  .openapi(
    getReportMeetingsMeetingIdParticipantsRoute,
    getReportMeetingsMeetingIdParticipantsRouteHandler,
  )
  .openapi(getReportMeetingsMeetingIdPollsRoute, getReportMeetingsMeetingIdPollsRouteHandler)
  .openapi(getReportOperationlogsRoute, getReportOperationlogsRouteHandler)
  .openapi(getReportTelephoneRoute, getReportTelephoneRouteHandler)
  .openapi(getReportUsersRoute, getReportUsersRouteHandler)
  .openapi(getReportUsersUserIdMeetingsRoute, getReportUsersUserIdMeetingsRouteHandler)
  .openapi(getReportWebinarsWebinarIdRoute, getReportWebinarsWebinarIdRouteHandler)
  .openapi(
    getReportWebinarsWebinarIdParticipantsRoute,
    getReportWebinarsWebinarIdParticipantsRouteHandler,
  )
  .openapi(getReportWebinarsWebinarIdPollsRoute, getReportWebinarsWebinarIdPollsRouteHandler)
  .openapi(getReportWebinarsWebinarIdQaRoute, getReportWebinarsWebinarIdQaRouteHandler)
  .openapi(getRolesRoute, getRolesRouteHandler)
  .openapi(postRolesRoute, postRolesRouteHandler)
  .openapi(deleteRolesRoleIdRoute, deleteRolesRoleIdRouteHandler)
  .openapi(getRolesRoleIdRoute, getRolesRoleIdRouteHandler)
  .openapi(patchRolesRoleIdRoute, patchRolesRoleIdRouteHandler)
  .openapi(getRolesRoleIdMembersRoute, getRolesRoleIdMembersRouteHandler)
  .openapi(postRolesRoleIdMembersRoute, postRolesRoleIdMembersRouteHandler)
  .openapi(deleteRolesRoleIdMembersMemberIdRoute, deleteRolesRoleIdMembersMemberIdRouteHandler)
  .openapi(getRoomsRoute, getRoomsRouteHandler)
  .openapi(postRoomsRoute, postRoomsRouteHandler)
  .openapi(getRoomsAccountProfileRoute, getRoomsAccountProfileRouteHandler)
  .openapi(patchRoomsAccountProfileRoute, patchRoomsAccountProfileRouteHandler)
  .openapi(getRoomsAccountSettingsRoute, getRoomsAccountSettingsRouteHandler)
  .openapi(patchRoomsAccountSettingsRoute, patchRoomsAccountSettingsRouteHandler)
  .openapi(getRoomsDigitalSignageRoute, getRoomsDigitalSignageRouteHandler)
  .openapi(patchRoomsEventsRoute, patchRoomsEventsRouteHandler)
  .openapi(getRoomsLocationsRoute, getRoomsLocationsRouteHandler)
  .openapi(postRoomsLocationsRoute, postRoomsLocationsRouteHandler)
  .openapi(getRoomsLocationsStructureRoute, getRoomsLocationsStructureRouteHandler)
  .openapi(patchRoomsLocationsStructureRoute, patchRoomsLocationsStructureRouteHandler)
  .openapi(getRoomsLocationsLocationIdRoute, getRoomsLocationsLocationIdRouteHandler)
  .openapi(patchRoomsLocationsLocationIdRoute, patchRoomsLocationsLocationIdRouteHandler)
  .openapi(
    putRoomsLocationsLocationIdLocationRoute,
    putRoomsLocationsLocationIdLocationRouteHandler,
  )
  .openapi(
    getRoomsLocationsLocationIdSettingsRoute,
    getRoomsLocationsLocationIdSettingsRouteHandler,
  )
  .openapi(
    patchRoomsLocationsLocationIdSettingsRoute,
    patchRoomsLocationsLocationIdSettingsRouteHandler,
  )
  .openapi(patchRoomsIdEventsRoute, patchRoomsIdEventsRouteHandler)
  .openapi(deleteRoomsRoomIdRoute, deleteRoomsRoomIdRouteHandler)
  .openapi(getRoomsRoomIdRoute, getRoomsRoomIdRouteHandler)
  .openapi(patchRoomsRoomIdRoute, patchRoomsRoomIdRouteHandler)
  .openapi(getRoomsRoomIdDevicesRoute, getRoomsRoomIdDevicesRouteHandler)
  .openapi(
    putRoomsRoomIdDevicesDeviceIdAppVersionRoute,
    putRoomsRoomIdDevicesDeviceIdAppVersionRouteHandler,
  )
  .openapi(putRoomsRoomIdLocationRoute, putRoomsRoomIdLocationRouteHandler)
  .openapi(getRoomsRoomIdSettingsRoute, getRoomsRoomIdSettingsRouteHandler)
  .openapi(patchRoomsRoomIdSettingsRoute, patchRoomsRoomIdSettingsRouteHandler)
  .openapi(getSipPhonesRoute, getSipPhonesRouteHandler)
  .openapi(postSipPhonesRoute, postSipPhonesRouteHandler)
  .openapi(deleteSipPhonesPhoneIdRoute, deleteSipPhonesPhoneIdRouteHandler)
  .openapi(patchSipPhonesPhoneIdRoute, patchSipPhonesPhoneIdRouteHandler)
  .openapi(getSipTrunkNumbersRoute, getSipTrunkNumbersRouteHandler)
  .openapi(getTrackingFieldsRoute, getTrackingFieldsRouteHandler)
  .openapi(postTrackingFieldsRoute, postTrackingFieldsRouteHandler)
  .openapi(deleteTrackingFieldsFieldIdRoute, deleteTrackingFieldsFieldIdRouteHandler)
  .openapi(getTrackingFieldsFieldIdRoute, getTrackingFieldsFieldIdRouteHandler)
  .openapi(patchTrackingFieldsFieldIdRoute, patchTrackingFieldsFieldIdRouteHandler)
  .openapi(getTspRoute, getTspRouteHandler)
  .openapi(patchTspRoute, patchTspRouteHandler)
  .openapi(getUsersRoute, getUsersRouteHandler)
  .openapi(postUsersRoute, postUsersRouteHandler)
  .openapi(getUsersEmailRoute, getUsersEmailRouteHandler)
  .openapi(getUsersMeZakRoute, getUsersMeZakRouteHandler)
  .openapi(getUsersVanityNameRoute, getUsersVanityNameRouteHandler)
  .openapi(deleteUsersUserIdRoute, deleteUsersUserIdRouteHandler)
  .openapi(getUsersUserIdRoute, getUsersUserIdRouteHandler)
  .openapi(patchUsersUserIdRoute, patchUsersUserIdRouteHandler)
  .openapi(deleteUsersUserIdAssistantsRoute, deleteUsersUserIdAssistantsRouteHandler)
  .openapi(getUsersUserIdAssistantsRoute, getUsersUserIdAssistantsRouteHandler)
  .openapi(postUsersUserIdAssistantsRoute, postUsersUserIdAssistantsRouteHandler)
  .openapi(
    deleteUsersUserIdAssistantsAssistantIdRoute,
    deleteUsersUserIdAssistantsAssistantIdRouteHandler,
  )
  .openapi(putUsersUserIdEmailRoute, putUsersUserIdEmailRouteHandler)
  .openapi(getUsersUserIdMeetingTemplatesRoute, getUsersUserIdMeetingTemplatesRouteHandler)
  .openapi(getUsersUserIdMeetingsRoute, getUsersUserIdMeetingsRouteHandler)
  .openapi(postUsersUserIdMeetingsRoute, postUsersUserIdMeetingsRouteHandler)
  .openapi(getUsersUserIdPacRoute, getUsersUserIdPacRouteHandler)
  .openapi(putUsersUserIdPasswordRoute, putUsersUserIdPasswordRouteHandler)
  .openapi(getUsersUserIdPermissionsRoute, getUsersUserIdPermissionsRouteHandler)
  .openapi(postUsersUserIdPictureRoute, postUsersUserIdPictureRouteHandler)
  .openapi(putUsersUserIdPresenceStatusRoute, putUsersUserIdPresenceStatusRouteHandler)
  .openapi(getUsersUserIdRecordingsRoute, getUsersUserIdRecordingsRouteHandler)
  .openapi(deleteUsersUserIdSchedulersRoute, deleteUsersUserIdSchedulersRouteHandler)
  .openapi(getUsersUserIdSchedulersRoute, getUsersUserIdSchedulersRouteHandler)
  .openapi(
    deleteUsersUserIdSchedulersSchedulerIdRoute,
    deleteUsersUserIdSchedulersSchedulerIdRouteHandler,
  )
  .openapi(getUsersUserIdSettingsRoute, getUsersUserIdSettingsRouteHandler)
  .openapi(patchUsersUserIdSettingsRoute, patchUsersUserIdSettingsRouteHandler)
  .openapi(
    deleteUsersUserIdSettingsVirtualBackgroundsRoute,
    deleteUsersUserIdSettingsVirtualBackgroundsRouteHandler,
  )
  .openapi(
    postUsersUserIdSettingsVirtualBackgroundsRoute,
    postUsersUserIdSettingsVirtualBackgroundsRouteHandler,
  )
  .openapi(putUsersUserIdStatusRoute, putUsersUserIdStatusRouteHandler)
  .openapi(deleteUsersUserIdTokenRoute, deleteUsersUserIdTokenRouteHandler)
  .openapi(getUsersUserIdTokenRoute, getUsersUserIdTokenRouteHandler)
  .openapi(getUsersUserIdTspRoute, getUsersUserIdTspRouteHandler)
  .openapi(postUsersUserIdTspRoute, postUsersUserIdTspRouteHandler)
  .openapi(patchUsersUserIdTspSettingsRoute, patchUsersUserIdTspSettingsRouteHandler)
  .openapi(deleteUsersUserIdTspTspIdRoute, deleteUsersUserIdTspTspIdRouteHandler)
  .openapi(getUsersUserIdTspTspIdRoute, getUsersUserIdTspTspIdRouteHandler)
  .openapi(patchUsersUserIdTspTspIdRoute, patchUsersUserIdTspTspIdRouteHandler)
  .openapi(getUsersUserIdWebinarTemplatesRoute, getUsersUserIdWebinarTemplatesRouteHandler)
  .openapi(getUsersUserIdWebinarsRoute, getUsersUserIdWebinarsRouteHandler)
  .openapi(postUsersUserIdWebinarsRoute, postUsersUserIdWebinarsRouteHandler)
  .openapi(deleteWebinarsWebinarIdRoute, deleteWebinarsWebinarIdRouteHandler)
  .openapi(getWebinarsWebinarIdRoute, getWebinarsWebinarIdRouteHandler)
  .openapi(patchWebinarsWebinarIdRoute, patchWebinarsWebinarIdRouteHandler)
  .openapi(
    postWebinarsWebinarIdBatchRegistrantsRoute,
    postWebinarsWebinarIdBatchRegistrantsRouteHandler,
  )
  .openapi(deleteWebinarsWebinarIdPanelistsRoute, deleteWebinarsWebinarIdPanelistsRouteHandler)
  .openapi(getWebinarsWebinarIdPanelistsRoute, getWebinarsWebinarIdPanelistsRouteHandler)
  .openapi(postWebinarsWebinarIdPanelistsRoute, postWebinarsWebinarIdPanelistsRouteHandler)
  .openapi(
    deleteWebinarsWebinarIdPanelistsPanelistIdRoute,
    deleteWebinarsWebinarIdPanelistsPanelistIdRouteHandler,
  )
  .openapi(getWebinarsWebinarIdPollsRoute, getWebinarsWebinarIdPollsRouteHandler)
  .openapi(postWebinarsWebinarIdPollsRoute, postWebinarsWebinarIdPollsRouteHandler)
  .openapi(deleteWebinarsWebinarIdPollsPollIdRoute, deleteWebinarsWebinarIdPollsPollIdRouteHandler)
  .openapi(getWebinarsWebinarIdPollsPollIdRoute, getWebinarsWebinarIdPollsPollIdRouteHandler)
  .openapi(putWebinarsWebinarIdPollsPollIdRoute, putWebinarsWebinarIdPollsPollIdRouteHandler)
  .openapi(getWebinarsWebinarIdRegistrantsRoute, getWebinarsWebinarIdRegistrantsRouteHandler)
  .openapi(postWebinarsWebinarIdRegistrantsRoute, postWebinarsWebinarIdRegistrantsRouteHandler)
  .openapi(
    getWebinarsWebinarIdRegistrantsQuestionsRoute,
    getWebinarsWebinarIdRegistrantsQuestionsRouteHandler,
  )
  .openapi(
    patchWebinarsWebinarIdRegistrantsQuestionsRoute,
    patchWebinarsWebinarIdRegistrantsQuestionsRouteHandler,
  )
  .openapi(
    putWebinarsWebinarIdRegistrantsStatusRoute,
    putWebinarsWebinarIdRegistrantsStatusRouteHandler,
  )
  .openapi(
    deleteWebinarsWebinarIdRegistrantsRegistrantIdRoute,
    deleteWebinarsWebinarIdRegistrantsRegistrantIdRouteHandler,
  )
  .openapi(
    getWebinarsWebinarIdRegistrantsRegistrantIdRoute,
    getWebinarsWebinarIdRegistrantsRegistrantIdRouteHandler,
  )
  .openapi(putWebinarsWebinarIdStatusRoute, putWebinarsWebinarIdStatusRouteHandler)
  .openapi(
    getWebinarsWebinarIdTrackingSourcesRoute,
    getWebinarsWebinarIdTrackingSourcesRouteHandler,
  )

export default app
