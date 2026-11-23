import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteActionsBulkTelephonyCredentialsRoute,
  deleteAddressesIdRoute,
  deleteAuthenticationProvidersIdRoute,
  deleteBillingGroupsIdRoute,
  deleteCallControlApplicationsIdRoute,
  deleteCredentialConnectionsIdRoute,
  deleteDocumentsIdRoute,
  deleteFaxApplicationsIdRoute,
  deleteFaxesIdRoute,
  deleteFqdnConnectionsIdRoute,
  deleteFqdnsIdRoute,
  deleteIpConnectionsIdRoute,
  deleteIpsIdRoute,
  deleteMediaMediaNameRoute,
  deleteMessagingHostedNumbersIdRoute,
  deleteMessagingProfilesIdRoute,
  deleteNotificationChannelsIdRoute,
  deleteNotificationProfilesIdRoute,
  deleteNotificationSettingsIdRoute,
  deleteOutboundVoiceProfilesIdRoute,
  deletePhoneNumbersIdRoute,
  deletePortingOrdersIdRoute,
  deletePrivateWirelessGatewaysIdRoute,
  deleteReportsBatchMdrReportsIdRoute,
  deleteReportsMdrUsageReportsIdRoute,
  deleteRoomsRoomIdRoute,
  deleteSimCardGroupsIdRoute,
  deleteSimCardsIdRoute,
  deleteSimCardsSimCardIdNetworkPreferencesRoute,
  deleteSimCardsSimCardIdPublicIpRoute,
  deleteTelephonyCredentialsIdRoute,
  deleteTexmlApplicationsIdRoute,
  deleteVerifyProfilesVerifyProfileIdRoute,
  deleteWhatsappDetailRecordReportsIdRoute,
  deleteWhatsappMediaWhatsappUserIdMediaIdRoute,
  deleteWirelessDetailRecordsReportsIdRoute,
  getAddressesIdRoute,
  getAddressesRoute,
  getAuthenticationProvidersIdRoute,
  getAuthenticationProvidersRoute,
  getAvailablePhoneNumberBlocksRoute,
  getAvailablePhoneNumbersRoute,
  getBalanceRoute,
  getBillingGroupsIdRoute,
  getBillingGroupsRoute,
  getCallControlApplicationsIdRoute,
  getCallControlApplicationsRoute,
  getCallEventsRoute,
  getCallsCallControlIdRoute,
  getCommentsIdRoute,
  getCommentsRoute,
  getConferencesConferenceIdParticipantsRoute,
  getConferencesIdRoute,
  getConferencesRoute,
  getConnectionsIdRoute,
  getConnectionsRoute,
  getCredentialConnectionsIdRoute,
  getCredentialConnectionsRoute,
  getDetailRecordsRoute,
  getDocumentLinksRoute,
  getDocumentsIdDownloadRoute,
  getDocumentsIdRoute,
  getDocumentsRoute,
  getFaxApplicationsIdRoute,
  getFaxApplicationsRoute,
  getFaxesIdRoute,
  getFaxesRoute,
  getFqdnConnectionsIdRoute,
  getFqdnConnectionsRoute,
  getFqdnsIdRoute,
  getFqdnsRoute,
  getInventoryCoverageRoute,
  getIpConnectionsIdRoute,
  getIpConnectionsRoute,
  getIpsIdRoute,
  getIpsRoute,
  getLedgerBillingGroupReportsIdRoute,
  getManagedAccountsIdRoute,
  getManagedAccountsRoute,
  getMediaMediaNameDownloadRoute,
  getMediaMediaNameRoute,
  getMediaRoute,
  getMessageDetailRecordsIdMessageBodyRoute,
  getMessageDetailRecordsRoute,
  getMessagesIdRoute,
  getMessagingHostedNumberOrdersIdRoute,
  getMessagingHostedNumberOrdersRoute,
  getMessagingProfileMetricsRoute,
  getMessagingProfilesIdMetricsRoute,
  getMessagingProfilesIdPhoneNumbersRoute,
  getMessagingProfilesIdRoute,
  getMessagingProfilesIdShortCodesRoute,
  getMessagingProfilesRoute,
  getMessagingUrlDomainsRoute,
  getMobileOperatorNetworksRoute,
  getNotificationChannelsIdRoute,
  getNotificationChannelsRoute,
  getNotificationEventConditionsRoute,
  getNotificationEventsRoute,
  getNotificationProfilesIdRoute,
  getNotificationProfilesRoute,
  getNotificationSettingsIdRoute,
  getNotificationSettingsRoute,
  getNumberBlockOrdersNumberBlockOrderIdRoute,
  getNumberBlockOrdersRoute,
  getNumberLookupPhoneNumberRoute,
  getNumberOrderDocumentsNumberOrderDocumentIdRoute,
  getNumberOrderDocumentsRoute,
  getNumberOrderPhoneNumbersNumberOrderPhoneNumberIdRoute,
  getNumberOrderPhoneNumbersRoute,
  getNumberOrdersNumberOrderIdRoute,
  getNumberOrdersRoute,
  getNumberReservationsNumberReservationIdRoute,
  getNumberReservationsRoute,
  getOtaUpdatesIdRoute,
  getOtaUpdatesRoute,
  getOutboundVoiceProfilesIdRoute,
  getOutboundVoiceProfilesRoute,
  getPhoneNumberBlocksJobsIdRoute,
  getPhoneNumberBlocksJobsRoute,
  getPhoneNumbersCsvDownloadsIdRoute,
  getPhoneNumbersCsvDownloadsRoute,
  getPhoneNumbersIdMessagingRoute,
  getPhoneNumbersIdRoute,
  getPhoneNumbersIdVoiceRoute,
  getPhoneNumbersInboundChannelsRoute,
  getPhoneNumbersJobsIdRoute,
  getPhoneNumbersJobsRoute,
  getPhoneNumbersMessagingRoute,
  getPhoneNumbersRoute,
  getPhoneNumbersVoiceRoute,
  getPortingOrdersExceptionTypesRoute,
  getPortingOrdersIdActivationJobsActivationJobIdRoute,
  getPortingOrdersIdActivationJobsRoute,
  getPortingOrdersIdCommentsRoute,
  getPortingOrdersIdLoaTemplateRoute,
  getPortingOrdersIdRoute,
  getPortingOrdersRoute,
  getPortingPhoneNumbersRoute,
  getPortoutsIdCommentsRoute,
  getPortoutsIdRoute,
  getPortoutsRoute,
  getPrivateWirelessGatewaysIdRoute,
  getPrivateWirelessGatewaysRoute,
  getQueuesQueueNameCallsCallControlIdRoute,
  getQueuesQueueNameCallsRoute,
  getQueuesQueueNameRoute,
  getRecordingsIdRoute,
  getRecordingsRoute,
  getReportsBatchMdrReportsIdRoute,
  getReportsBatchMdrReportsRoute,
  getReportsCdrUsageReportsSyncRoute,
  getReportsMdrsRoute,
  getReportsMdrUsageReportsIdRoute,
  getReportsMdrUsageReportsRoute,
  getReportsMdrUsageReportsSyncRoute,
  getReportsWdrsRoute,
  getRequirementsIdRoute,
  getRequirementsRoute,
  getRequirementTypesIdRoute,
  getRequirementTypesRoute,
  getRoomParticipantsRoomParticipantIdRoute,
  getRoomParticipantsRoute,
  getRoomSessionsRoomSessionIdParticipantsRoute,
  getRoomSessionsRoomSessionIdRoute,
  getRoomSessionsRoute,
  getRoomsRoomIdRoute,
  getRoomsRoomIdSessionsRoute,
  getRoomsRoute,
  getShortCodesIdRoute,
  getShortCodesRoute,
  getSimCardGroupActionsIdRoute,
  getSimCardGroupActionsRoute,
  getSimCardGroupsIdRoute,
  getSimCardGroupsRoute,
  getSimCardOrdersIdRoute,
  getSimCardOrdersRoute,
  getSimCardsIdRoute,
  getSimCardsRoute,
  getSimCardsSimCardIdNetworkPreferencesRoute,
  getSimCardsSimCardIdPublicIpRoute,
  getSimCardsSimCardIdWirelessConnectivityLogsRoute,
  getSubNumberOrdersRoute,
  getSubNumberOrdersSubNumberOrderIdRoute,
  getTelephonyCredentialsIdRoute,
  getTelephonyCredentialsRoute,
  getTelephonyCredentialsTagsRoute,
  getTexmlApplicationsIdRoute,
  getTexmlApplicationsRoute,
  getVerificationsByPhoneNumberPhoneNumberRoute,
  getVerificationsVerificationIdRoute,
  getVerifyProfilesRoute,
  getVerifyProfilesVerifyProfileIdRoute,
  getWebhookDeliveriesIdRoute,
  getWebhookDeliveriesRoute,
  getWhatsappDetailRecordReportsIdRoute,
  getWhatsappDetailRecordReportsRoute,
  getWhatsappMediaWhatsappUserIdMediaIdRoute,
  getWhatsappUsageAggregationsRoute,
  getWhatsappUsersWhatsappUserIdRoute,
  getWirelessDetailRecordsReportsIdRoute,
  getWirelessDetailRecordsReportsRoute,
  patchActionsBulkTelephonyCredentialsRoute,
  patchAuthenticationProvidersIdRoute,
  patchBillingGroupsIdRoute,
  patchCallControlApplicationsIdRoute,
  patchCommentsIdReadRoute,
  patchCredentialConnectionsIdRoute,
  patchDocumentsIdRoute,
  patchFaxApplicationsIdRoute,
  patchFqdnConnectionsIdRoute,
  patchFqdnsIdRoute,
  patchIpConnectionsIdRoute,
  patchIpsIdRoute,
  patchMessagingProfilesIdRoute,
  patchNotificationChannelsIdRoute,
  patchNotificationProfilesIdRoute,
  patchNumberOrderDocumentsNumberOrderDocumentIdRoute,
  patchNumberOrderPhoneNumbersNumberOrderPhoneNumberIdRoute,
  patchNumberOrdersNumberOrderIdRoute,
  patchOutboundVoiceProfilesIdRoute,
  patchPhoneNumbersIdMessagingRoute,
  patchPhoneNumbersIdRoute,
  patchPhoneNumbersIdVoiceRoute,
  patchPhoneNumbersInboundChannelsRoute,
  patchPortingOrdersIdRoute,
  patchPortoutsIdStatusRoute,
  patchShortCodesIdRoute,
  patchSimCardGroupsIdRoute,
  patchSimCardsIdRoute,
  patchSubNumberOrdersSubNumberOrderIdRoute,
  patchTelephonyCredentialsIdRoute,
  patchTexmlApplicationsIdRoute,
  patchVerifyProfilesVerifyProfileIdRoute,
  patchWhatsappMessagesMessageIdRoute,
  patchWhatsappUsersWhatsappUserIdRoute,
  postActionsActionTelephonyCredentialsRoute,
  postActionsBulkTelephonyCredentialsRoute,
  postActionsRegisterSimCardsRoute,
  postAddressesActionsValidateRoute,
  postAddressesRoute,
  postAuthenticationProvidersRoute,
  postBillingGroupsRoute,
  postCallControlApplicationsRoute,
  postCallsCallControlIdActionsAnswerRoute,
  postCallsCallControlIdActionsBridgeRoute,
  postCallsCallControlIdActionsEnqueueRoute,
  postCallsCallControlIdActionsForkStartRoute,
  postCallsCallControlIdActionsForkStopRoute,
  postCallsCallControlIdActionsGatherStopRoute,
  postCallsCallControlIdActionsGatherUsingAudioRoute,
  postCallsCallControlIdActionsGatherUsingSpeakRoute,
  postCallsCallControlIdActionsHangupRoute,
  postCallsCallControlIdActionsLeaveQueueRoute,
  postCallsCallControlIdActionsPlaybackStartRoute,
  postCallsCallControlIdActionsPlaybackStopRoute,
  postCallsCallControlIdActionsRecordPauseRoute,
  postCallsCallControlIdActionsRecordResumeRoute,
  postCallsCallControlIdActionsRecordStartRoute,
  postCallsCallControlIdActionsRecordStopRoute,
  postCallsCallControlIdActionsReferRoute,
  postCallsCallControlIdActionsRejectRoute,
  postCallsCallControlIdActionsSendDtmfRoute,
  postCallsCallControlIdActionsSpeakRoute,
  postCallsCallControlIdActionsTranscriptionStartRoute,
  postCallsCallControlIdActionsTranscriptionStopRoute,
  postCallsCallControlIdActionsTransferRoute,
  postCallsRoute,
  postCommentsRoute,
  postConferencesIdActionsDialParticipantRoute,
  postConferencesIdActionsHoldRoute,
  postConferencesIdActionsJoinRoute,
  postConferencesIdActionsLeaveRoute,
  postConferencesIdActionsMuteRoute,
  postConferencesIdActionsPlayRoute,
  postConferencesIdActionsRecordStartRoute,
  postConferencesIdActionsRecordStopRoute,
  postConferencesIdActionsSpeakRoute,
  postConferencesIdActionsStopRoute,
  postConferencesIdActionsUnholdRoute,
  postConferencesIdActionsUnmuteRoute,
  postConferencesIdActionsUpdateRoute,
  postConferencesRoute,
  postCredentialConnectionsRoute,
  postDocumentsRoute,
  postFaxApplicationsRoute,
  postFaxesIdActionsRefreshRoute,
  postFaxesRoute,
  postFqdnConnectionsRoute,
  postFqdnsRoute,
  postIpConnectionsRoute,
  postIpsRoute,
  postLedgerBillingGroupReportsRoute,
  postManagedAccountsIdActionsDisableRoute,
  postManagedAccountsIdActionsEnableRoute,
  postManagedAccountsRoute,
  postMediaRoute,
  postMessagesLongCodeRoute,
  postMessagesNumberPoolRoute,
  postMessagesRoute,
  postMessagesShortCodeRoute,
  postMessagingHostedNumberOrdersIdActionsFileUploadRoute,
  postMessagingHostedNumberOrdersRoute,
  postMessagingProfilesRoute,
  postNotificationChannelsRoute,
  postNotificationProfilesRoute,
  postNotificationSettingsRoute,
  postNumberBlockOrdersRoute,
  postNumberOrderDocumentsRoute,
  postNumberOrdersRoute,
  postNumberReservationsNumberReservationIdActionsExtendRoute,
  postNumberReservationsRoute,
  postOutboundVoiceProfilesRoute,
  postPhoneNumberBlocksJobsDeletePhoneNumberBlockRoute,
  postPhoneNumbersCsvDownloadsRoute,
  postPhoneNumbersIdActionsEnableEmergencyRoute,
  postPhoneNumbersJobsDeletePhoneNumbersRoute,
  postPhoneNumbersJobsUpdateEmergencySettingsRoute,
  postPhoneNumbersJobsUpdatePhoneNumbersRoute,
  postPortabilityChecksRoute,
  postPortingOrdersIdActionsActivateRoute,
  postPortingOrdersIdActionsCancelRoute,
  postPortingOrdersIdActionsConfirmRoute,
  postPortingOrdersIdCommentsRoute,
  postPortingOrdersRoute,
  postPortoutsIdCommentsRoute,
  postPrivateWirelessGatewaysRoute,
  postReportsBatchMdrReportsRoute,
  postReportsMdrUsageReportsRoute,
  postRoomsRoomIdActionsGenerateJoinClientTokenRoute,
  postRoomsRoomIdActionsRefreshClientTokenRoute,
  postRoomsRoute,
  postSimCardGroupsIdActionsRemovePrivateWirelessGatewayRoute,
  postSimCardGroupsIdActionsSetPrivateWirelessGatewayRoute,
  postSimCardGroupsRoute,
  postSimCardOrderPreviewRoute,
  postSimCardOrdersRoute,
  postSimCardsActionsValidateRegistrationCodesRoute,
  postSimCardsIdActionsDisableRoute,
  postSimCardsIdActionsEnableRoute,
  postSimCardsIdActionsSetStandbyRoute,
  postSimCardsSimCardIdPublicIpRoute,
  postTelephonyCredentialsIdActionsActionRoute,
  postTelephonyCredentialsIdTokenRoute,
  postTelephonyCredentialsRoute,
  postTexmlApplicationsRoute,
  postVerificationsByPhoneNumberPhoneNumberActionsVerifyRoute,
  postVerificationsCallRoute,
  postVerificationsFlashcallRoute,
  postVerificationsPsd2Route,
  postVerificationsSmsRoute,
  postVerificationsWhatsappRoute,
  postVerifyProfilesRoute,
  postWhatsappContactsRoute,
  postWhatsappDetailRecordReportsRoute,
  postWhatsappMediaRoute,
  postWhatsappMessagesRoute,
  postWirelessDetailRecordsReportsRoute,
  putActionsNetworkPreferencesSimCardsRoute,
  putMediaMediaNameRoute,
  putSimCardsSimCardIdNetworkPreferencesRoute,
} from './routes'
import {
  deleteActionsBulkTelephonyCredentialsRouteHandler,
  deleteAddressesIdRouteHandler,
  deleteAuthenticationProvidersIdRouteHandler,
  deleteBillingGroupsIdRouteHandler,
  deleteCallControlApplicationsIdRouteHandler,
  deleteCredentialConnectionsIdRouteHandler,
  deleteDocumentsIdRouteHandler,
  deleteFaxApplicationsIdRouteHandler,
  deleteFaxesIdRouteHandler,
  deleteFqdnConnectionsIdRouteHandler,
  deleteFqdnsIdRouteHandler,
  deleteIpConnectionsIdRouteHandler,
  deleteIpsIdRouteHandler,
  deleteMediaMediaNameRouteHandler,
  deleteMessagingHostedNumbersIdRouteHandler,
  deleteMessagingProfilesIdRouteHandler,
  deleteNotificationChannelsIdRouteHandler,
  deleteNotificationProfilesIdRouteHandler,
  deleteNotificationSettingsIdRouteHandler,
  deleteOutboundVoiceProfilesIdRouteHandler,
  deletePhoneNumbersIdRouteHandler,
  deletePortingOrdersIdRouteHandler,
  deletePrivateWirelessGatewaysIdRouteHandler,
  deleteReportsBatchMdrReportsIdRouteHandler,
  deleteReportsMdrUsageReportsIdRouteHandler,
  deleteRoomsRoomIdRouteHandler,
  deleteSimCardGroupsIdRouteHandler,
  deleteSimCardsIdRouteHandler,
  deleteSimCardsSimCardIdNetworkPreferencesRouteHandler,
  deleteSimCardsSimCardIdPublicIpRouteHandler,
  deleteTelephonyCredentialsIdRouteHandler,
  deleteTexmlApplicationsIdRouteHandler,
  deleteVerifyProfilesVerifyProfileIdRouteHandler,
  deleteWhatsappDetailRecordReportsIdRouteHandler,
  deleteWhatsappMediaWhatsappUserIdMediaIdRouteHandler,
  deleteWirelessDetailRecordsReportsIdRouteHandler,
  getAddressesIdRouteHandler,
  getAddressesRouteHandler,
  getAuthenticationProvidersIdRouteHandler,
  getAuthenticationProvidersRouteHandler,
  getAvailablePhoneNumberBlocksRouteHandler,
  getAvailablePhoneNumbersRouteHandler,
  getBalanceRouteHandler,
  getBillingGroupsIdRouteHandler,
  getBillingGroupsRouteHandler,
  getCallControlApplicationsIdRouteHandler,
  getCallControlApplicationsRouteHandler,
  getCallEventsRouteHandler,
  getCallsCallControlIdRouteHandler,
  getCommentsIdRouteHandler,
  getCommentsRouteHandler,
  getConferencesConferenceIdParticipantsRouteHandler,
  getConferencesIdRouteHandler,
  getConferencesRouteHandler,
  getConnectionsIdRouteHandler,
  getConnectionsRouteHandler,
  getCredentialConnectionsIdRouteHandler,
  getCredentialConnectionsRouteHandler,
  getDetailRecordsRouteHandler,
  getDocumentLinksRouteHandler,
  getDocumentsIdDownloadRouteHandler,
  getDocumentsIdRouteHandler,
  getDocumentsRouteHandler,
  getFaxApplicationsIdRouteHandler,
  getFaxApplicationsRouteHandler,
  getFaxesIdRouteHandler,
  getFaxesRouteHandler,
  getFqdnConnectionsIdRouteHandler,
  getFqdnConnectionsRouteHandler,
  getFqdnsIdRouteHandler,
  getFqdnsRouteHandler,
  getInventoryCoverageRouteHandler,
  getIpConnectionsIdRouteHandler,
  getIpConnectionsRouteHandler,
  getIpsIdRouteHandler,
  getIpsRouteHandler,
  getLedgerBillingGroupReportsIdRouteHandler,
  getManagedAccountsIdRouteHandler,
  getManagedAccountsRouteHandler,
  getMediaMediaNameDownloadRouteHandler,
  getMediaMediaNameRouteHandler,
  getMediaRouteHandler,
  getMessageDetailRecordsIdMessageBodyRouteHandler,
  getMessageDetailRecordsRouteHandler,
  getMessagesIdRouteHandler,
  getMessagingHostedNumberOrdersIdRouteHandler,
  getMessagingHostedNumberOrdersRouteHandler,
  getMessagingProfileMetricsRouteHandler,
  getMessagingProfilesIdMetricsRouteHandler,
  getMessagingProfilesIdPhoneNumbersRouteHandler,
  getMessagingProfilesIdRouteHandler,
  getMessagingProfilesIdShortCodesRouteHandler,
  getMessagingProfilesRouteHandler,
  getMessagingUrlDomainsRouteHandler,
  getMobileOperatorNetworksRouteHandler,
  getNotificationChannelsIdRouteHandler,
  getNotificationChannelsRouteHandler,
  getNotificationEventConditionsRouteHandler,
  getNotificationEventsRouteHandler,
  getNotificationProfilesIdRouteHandler,
  getNotificationProfilesRouteHandler,
  getNotificationSettingsIdRouteHandler,
  getNotificationSettingsRouteHandler,
  getNumberBlockOrdersNumberBlockOrderIdRouteHandler,
  getNumberBlockOrdersRouteHandler,
  getNumberLookupPhoneNumberRouteHandler,
  getNumberOrderDocumentsNumberOrderDocumentIdRouteHandler,
  getNumberOrderDocumentsRouteHandler,
  getNumberOrderPhoneNumbersNumberOrderPhoneNumberIdRouteHandler,
  getNumberOrderPhoneNumbersRouteHandler,
  getNumberOrdersNumberOrderIdRouteHandler,
  getNumberOrdersRouteHandler,
  getNumberReservationsNumberReservationIdRouteHandler,
  getNumberReservationsRouteHandler,
  getOtaUpdatesIdRouteHandler,
  getOtaUpdatesRouteHandler,
  getOutboundVoiceProfilesIdRouteHandler,
  getOutboundVoiceProfilesRouteHandler,
  getPhoneNumberBlocksJobsIdRouteHandler,
  getPhoneNumberBlocksJobsRouteHandler,
  getPhoneNumbersCsvDownloadsIdRouteHandler,
  getPhoneNumbersCsvDownloadsRouteHandler,
  getPhoneNumbersIdMessagingRouteHandler,
  getPhoneNumbersIdRouteHandler,
  getPhoneNumbersIdVoiceRouteHandler,
  getPhoneNumbersInboundChannelsRouteHandler,
  getPhoneNumbersJobsIdRouteHandler,
  getPhoneNumbersJobsRouteHandler,
  getPhoneNumbersMessagingRouteHandler,
  getPhoneNumbersRouteHandler,
  getPhoneNumbersVoiceRouteHandler,
  getPortingOrdersExceptionTypesRouteHandler,
  getPortingOrdersIdActivationJobsActivationJobIdRouteHandler,
  getPortingOrdersIdActivationJobsRouteHandler,
  getPortingOrdersIdCommentsRouteHandler,
  getPortingOrdersIdLoaTemplateRouteHandler,
  getPortingOrdersIdRouteHandler,
  getPortingOrdersRouteHandler,
  getPortingPhoneNumbersRouteHandler,
  getPortoutsIdCommentsRouteHandler,
  getPortoutsIdRouteHandler,
  getPortoutsRouteHandler,
  getPrivateWirelessGatewaysIdRouteHandler,
  getPrivateWirelessGatewaysRouteHandler,
  getQueuesQueueNameCallsCallControlIdRouteHandler,
  getQueuesQueueNameCallsRouteHandler,
  getQueuesQueueNameRouteHandler,
  getRecordingsIdRouteHandler,
  getRecordingsRouteHandler,
  getReportsBatchMdrReportsIdRouteHandler,
  getReportsBatchMdrReportsRouteHandler,
  getReportsCdrUsageReportsSyncRouteHandler,
  getReportsMdrsRouteHandler,
  getReportsMdrUsageReportsIdRouteHandler,
  getReportsMdrUsageReportsRouteHandler,
  getReportsMdrUsageReportsSyncRouteHandler,
  getReportsWdrsRouteHandler,
  getRequirementsIdRouteHandler,
  getRequirementsRouteHandler,
  getRequirementTypesIdRouteHandler,
  getRequirementTypesRouteHandler,
  getRoomParticipantsRoomParticipantIdRouteHandler,
  getRoomParticipantsRouteHandler,
  getRoomSessionsRoomSessionIdParticipantsRouteHandler,
  getRoomSessionsRoomSessionIdRouteHandler,
  getRoomSessionsRouteHandler,
  getRoomsRoomIdRouteHandler,
  getRoomsRoomIdSessionsRouteHandler,
  getRoomsRouteHandler,
  getShortCodesIdRouteHandler,
  getShortCodesRouteHandler,
  getSimCardGroupActionsIdRouteHandler,
  getSimCardGroupActionsRouteHandler,
  getSimCardGroupsIdRouteHandler,
  getSimCardGroupsRouteHandler,
  getSimCardOrdersIdRouteHandler,
  getSimCardOrdersRouteHandler,
  getSimCardsIdRouteHandler,
  getSimCardsRouteHandler,
  getSimCardsSimCardIdNetworkPreferencesRouteHandler,
  getSimCardsSimCardIdPublicIpRouteHandler,
  getSimCardsSimCardIdWirelessConnectivityLogsRouteHandler,
  getSubNumberOrdersRouteHandler,
  getSubNumberOrdersSubNumberOrderIdRouteHandler,
  getTelephonyCredentialsIdRouteHandler,
  getTelephonyCredentialsRouteHandler,
  getTelephonyCredentialsTagsRouteHandler,
  getTexmlApplicationsIdRouteHandler,
  getTexmlApplicationsRouteHandler,
  getVerificationsByPhoneNumberPhoneNumberRouteHandler,
  getVerificationsVerificationIdRouteHandler,
  getVerifyProfilesRouteHandler,
  getVerifyProfilesVerifyProfileIdRouteHandler,
  getWebhookDeliveriesIdRouteHandler,
  getWebhookDeliveriesRouteHandler,
  getWhatsappDetailRecordReportsIdRouteHandler,
  getWhatsappDetailRecordReportsRouteHandler,
  getWhatsappMediaWhatsappUserIdMediaIdRouteHandler,
  getWhatsappUsageAggregationsRouteHandler,
  getWhatsappUsersWhatsappUserIdRouteHandler,
  getWirelessDetailRecordsReportsIdRouteHandler,
  getWirelessDetailRecordsReportsRouteHandler,
  patchActionsBulkTelephonyCredentialsRouteHandler,
  patchAuthenticationProvidersIdRouteHandler,
  patchBillingGroupsIdRouteHandler,
  patchCallControlApplicationsIdRouteHandler,
  patchCommentsIdReadRouteHandler,
  patchCredentialConnectionsIdRouteHandler,
  patchDocumentsIdRouteHandler,
  patchFaxApplicationsIdRouteHandler,
  patchFqdnConnectionsIdRouteHandler,
  patchFqdnsIdRouteHandler,
  patchIpConnectionsIdRouteHandler,
  patchIpsIdRouteHandler,
  patchMessagingProfilesIdRouteHandler,
  patchNotificationChannelsIdRouteHandler,
  patchNotificationProfilesIdRouteHandler,
  patchNumberOrderDocumentsNumberOrderDocumentIdRouteHandler,
  patchNumberOrderPhoneNumbersNumberOrderPhoneNumberIdRouteHandler,
  patchNumberOrdersNumberOrderIdRouteHandler,
  patchOutboundVoiceProfilesIdRouteHandler,
  patchPhoneNumbersIdMessagingRouteHandler,
  patchPhoneNumbersIdRouteHandler,
  patchPhoneNumbersIdVoiceRouteHandler,
  patchPhoneNumbersInboundChannelsRouteHandler,
  patchPortingOrdersIdRouteHandler,
  patchPortoutsIdStatusRouteHandler,
  patchShortCodesIdRouteHandler,
  patchSimCardGroupsIdRouteHandler,
  patchSimCardsIdRouteHandler,
  patchSubNumberOrdersSubNumberOrderIdRouteHandler,
  patchTelephonyCredentialsIdRouteHandler,
  patchTexmlApplicationsIdRouteHandler,
  patchVerifyProfilesVerifyProfileIdRouteHandler,
  patchWhatsappMessagesMessageIdRouteHandler,
  patchWhatsappUsersWhatsappUserIdRouteHandler,
  postActionsActionTelephonyCredentialsRouteHandler,
  postActionsBulkTelephonyCredentialsRouteHandler,
  postActionsRegisterSimCardsRouteHandler,
  postAddressesActionsValidateRouteHandler,
  postAddressesRouteHandler,
  postAuthenticationProvidersRouteHandler,
  postBillingGroupsRouteHandler,
  postCallControlApplicationsRouteHandler,
  postCallsCallControlIdActionsAnswerRouteHandler,
  postCallsCallControlIdActionsBridgeRouteHandler,
  postCallsCallControlIdActionsEnqueueRouteHandler,
  postCallsCallControlIdActionsForkStartRouteHandler,
  postCallsCallControlIdActionsForkStopRouteHandler,
  postCallsCallControlIdActionsGatherStopRouteHandler,
  postCallsCallControlIdActionsGatherUsingAudioRouteHandler,
  postCallsCallControlIdActionsGatherUsingSpeakRouteHandler,
  postCallsCallControlIdActionsHangupRouteHandler,
  postCallsCallControlIdActionsLeaveQueueRouteHandler,
  postCallsCallControlIdActionsPlaybackStartRouteHandler,
  postCallsCallControlIdActionsPlaybackStopRouteHandler,
  postCallsCallControlIdActionsRecordPauseRouteHandler,
  postCallsCallControlIdActionsRecordResumeRouteHandler,
  postCallsCallControlIdActionsRecordStartRouteHandler,
  postCallsCallControlIdActionsRecordStopRouteHandler,
  postCallsCallControlIdActionsReferRouteHandler,
  postCallsCallControlIdActionsRejectRouteHandler,
  postCallsCallControlIdActionsSendDtmfRouteHandler,
  postCallsCallControlIdActionsSpeakRouteHandler,
  postCallsCallControlIdActionsTranscriptionStartRouteHandler,
  postCallsCallControlIdActionsTranscriptionStopRouteHandler,
  postCallsCallControlIdActionsTransferRouteHandler,
  postCallsRouteHandler,
  postCommentsRouteHandler,
  postConferencesIdActionsDialParticipantRouteHandler,
  postConferencesIdActionsHoldRouteHandler,
  postConferencesIdActionsJoinRouteHandler,
  postConferencesIdActionsLeaveRouteHandler,
  postConferencesIdActionsMuteRouteHandler,
  postConferencesIdActionsPlayRouteHandler,
  postConferencesIdActionsRecordStartRouteHandler,
  postConferencesIdActionsRecordStopRouteHandler,
  postConferencesIdActionsSpeakRouteHandler,
  postConferencesIdActionsStopRouteHandler,
  postConferencesIdActionsUnholdRouteHandler,
  postConferencesIdActionsUnmuteRouteHandler,
  postConferencesIdActionsUpdateRouteHandler,
  postConferencesRouteHandler,
  postCredentialConnectionsRouteHandler,
  postDocumentsRouteHandler,
  postFaxApplicationsRouteHandler,
  postFaxesIdActionsRefreshRouteHandler,
  postFaxesRouteHandler,
  postFqdnConnectionsRouteHandler,
  postFqdnsRouteHandler,
  postIpConnectionsRouteHandler,
  postIpsRouteHandler,
  postLedgerBillingGroupReportsRouteHandler,
  postManagedAccountsIdActionsDisableRouteHandler,
  postManagedAccountsIdActionsEnableRouteHandler,
  postManagedAccountsRouteHandler,
  postMediaRouteHandler,
  postMessagesLongCodeRouteHandler,
  postMessagesNumberPoolRouteHandler,
  postMessagesRouteHandler,
  postMessagesShortCodeRouteHandler,
  postMessagingHostedNumberOrdersIdActionsFileUploadRouteHandler,
  postMessagingHostedNumberOrdersRouteHandler,
  postMessagingProfilesRouteHandler,
  postNotificationChannelsRouteHandler,
  postNotificationProfilesRouteHandler,
  postNotificationSettingsRouteHandler,
  postNumberBlockOrdersRouteHandler,
  postNumberOrderDocumentsRouteHandler,
  postNumberOrdersRouteHandler,
  postNumberReservationsNumberReservationIdActionsExtendRouteHandler,
  postNumberReservationsRouteHandler,
  postOutboundVoiceProfilesRouteHandler,
  postPhoneNumberBlocksJobsDeletePhoneNumberBlockRouteHandler,
  postPhoneNumbersCsvDownloadsRouteHandler,
  postPhoneNumbersIdActionsEnableEmergencyRouteHandler,
  postPhoneNumbersJobsDeletePhoneNumbersRouteHandler,
  postPhoneNumbersJobsUpdateEmergencySettingsRouteHandler,
  postPhoneNumbersJobsUpdatePhoneNumbersRouteHandler,
  postPortabilityChecksRouteHandler,
  postPortingOrdersIdActionsActivateRouteHandler,
  postPortingOrdersIdActionsCancelRouteHandler,
  postPortingOrdersIdActionsConfirmRouteHandler,
  postPortingOrdersIdCommentsRouteHandler,
  postPortingOrdersRouteHandler,
  postPortoutsIdCommentsRouteHandler,
  postPrivateWirelessGatewaysRouteHandler,
  postReportsBatchMdrReportsRouteHandler,
  postReportsMdrUsageReportsRouteHandler,
  postRoomsRoomIdActionsGenerateJoinClientTokenRouteHandler,
  postRoomsRoomIdActionsRefreshClientTokenRouteHandler,
  postRoomsRouteHandler,
  postSimCardGroupsIdActionsRemovePrivateWirelessGatewayRouteHandler,
  postSimCardGroupsIdActionsSetPrivateWirelessGatewayRouteHandler,
  postSimCardGroupsRouteHandler,
  postSimCardOrderPreviewRouteHandler,
  postSimCardOrdersRouteHandler,
  postSimCardsActionsValidateRegistrationCodesRouteHandler,
  postSimCardsIdActionsDisableRouteHandler,
  postSimCardsIdActionsEnableRouteHandler,
  postSimCardsIdActionsSetStandbyRouteHandler,
  postSimCardsSimCardIdPublicIpRouteHandler,
  postTelephonyCredentialsIdActionsActionRouteHandler,
  postTelephonyCredentialsIdTokenRouteHandler,
  postTelephonyCredentialsRouteHandler,
  postTexmlApplicationsRouteHandler,
  postVerificationsByPhoneNumberPhoneNumberActionsVerifyRouteHandler,
  postVerificationsCallRouteHandler,
  postVerificationsFlashcallRouteHandler,
  postVerificationsPsd2RouteHandler,
  postVerificationsSmsRouteHandler,
  postVerificationsWhatsappRouteHandler,
  postVerifyProfilesRouteHandler,
  postWhatsappContactsRouteHandler,
  postWhatsappDetailRecordReportsRouteHandler,
  postWhatsappMediaRouteHandler,
  postWhatsappMessagesRouteHandler,
  postWirelessDetailRecordsReportsRouteHandler,
  putActionsNetworkPreferencesSimCardsRouteHandler,
  putMediaMediaNameRouteHandler,
  putSimCardsSimCardIdNetworkPreferencesRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    deleteActionsBulkTelephonyCredentialsRoute,
    deleteActionsBulkTelephonyCredentialsRouteHandler,
  )
  .openapi(
    patchActionsBulkTelephonyCredentialsRoute,
    patchActionsBulkTelephonyCredentialsRouteHandler,
  )
  .openapi(
    postActionsBulkTelephonyCredentialsRoute,
    postActionsBulkTelephonyCredentialsRouteHandler,
  )
  .openapi(
    putActionsNetworkPreferencesSimCardsRoute,
    putActionsNetworkPreferencesSimCardsRouteHandler,
  )
  .openapi(postActionsRegisterSimCardsRoute, postActionsRegisterSimCardsRouteHandler)
  .openapi(
    postActionsActionTelephonyCredentialsRoute,
    postActionsActionTelephonyCredentialsRouteHandler,
  )
  .openapi(getAddressesRoute, getAddressesRouteHandler)
  .openapi(postAddressesRoute, postAddressesRouteHandler)
  .openapi(postAddressesActionsValidateRoute, postAddressesActionsValidateRouteHandler)
  .openapi(deleteAddressesIdRoute, deleteAddressesIdRouteHandler)
  .openapi(getAddressesIdRoute, getAddressesIdRouteHandler)
  .openapi(getAuthenticationProvidersRoute, getAuthenticationProvidersRouteHandler)
  .openapi(postAuthenticationProvidersRoute, postAuthenticationProvidersRouteHandler)
  .openapi(deleteAuthenticationProvidersIdRoute, deleteAuthenticationProvidersIdRouteHandler)
  .openapi(getAuthenticationProvidersIdRoute, getAuthenticationProvidersIdRouteHandler)
  .openapi(patchAuthenticationProvidersIdRoute, patchAuthenticationProvidersIdRouteHandler)
  .openapi(getAvailablePhoneNumberBlocksRoute, getAvailablePhoneNumberBlocksRouteHandler)
  .openapi(getAvailablePhoneNumbersRoute, getAvailablePhoneNumbersRouteHandler)
  .openapi(getBalanceRoute, getBalanceRouteHandler)
  .openapi(getBillingGroupsRoute, getBillingGroupsRouteHandler)
  .openapi(postBillingGroupsRoute, postBillingGroupsRouteHandler)
  .openapi(deleteBillingGroupsIdRoute, deleteBillingGroupsIdRouteHandler)
  .openapi(getBillingGroupsIdRoute, getBillingGroupsIdRouteHandler)
  .openapi(patchBillingGroupsIdRoute, patchBillingGroupsIdRouteHandler)
  .openapi(getCallControlApplicationsRoute, getCallControlApplicationsRouteHandler)
  .openapi(postCallControlApplicationsRoute, postCallControlApplicationsRouteHandler)
  .openapi(deleteCallControlApplicationsIdRoute, deleteCallControlApplicationsIdRouteHandler)
  .openapi(getCallControlApplicationsIdRoute, getCallControlApplicationsIdRouteHandler)
  .openapi(patchCallControlApplicationsIdRoute, patchCallControlApplicationsIdRouteHandler)
  .openapi(getCallEventsRoute, getCallEventsRouteHandler)
  .openapi(postCallsRoute, postCallsRouteHandler)
  .openapi(getCallsCallControlIdRoute, getCallsCallControlIdRouteHandler)
  .openapi(
    postCallsCallControlIdActionsAnswerRoute,
    postCallsCallControlIdActionsAnswerRouteHandler,
  )
  .openapi(
    postCallsCallControlIdActionsBridgeRoute,
    postCallsCallControlIdActionsBridgeRouteHandler,
  )
  .openapi(
    postCallsCallControlIdActionsEnqueueRoute,
    postCallsCallControlIdActionsEnqueueRouteHandler,
  )
  .openapi(
    postCallsCallControlIdActionsForkStartRoute,
    postCallsCallControlIdActionsForkStartRouteHandler,
  )
  .openapi(
    postCallsCallControlIdActionsForkStopRoute,
    postCallsCallControlIdActionsForkStopRouteHandler,
  )
  .openapi(
    postCallsCallControlIdActionsGatherStopRoute,
    postCallsCallControlIdActionsGatherStopRouteHandler,
  )
  .openapi(
    postCallsCallControlIdActionsGatherUsingAudioRoute,
    postCallsCallControlIdActionsGatherUsingAudioRouteHandler,
  )
  .openapi(
    postCallsCallControlIdActionsGatherUsingSpeakRoute,
    postCallsCallControlIdActionsGatherUsingSpeakRouteHandler,
  )
  .openapi(
    postCallsCallControlIdActionsHangupRoute,
    postCallsCallControlIdActionsHangupRouteHandler,
  )
  .openapi(
    postCallsCallControlIdActionsLeaveQueueRoute,
    postCallsCallControlIdActionsLeaveQueueRouteHandler,
  )
  .openapi(
    postCallsCallControlIdActionsPlaybackStartRoute,
    postCallsCallControlIdActionsPlaybackStartRouteHandler,
  )
  .openapi(
    postCallsCallControlIdActionsPlaybackStopRoute,
    postCallsCallControlIdActionsPlaybackStopRouteHandler,
  )
  .openapi(
    postCallsCallControlIdActionsRecordPauseRoute,
    postCallsCallControlIdActionsRecordPauseRouteHandler,
  )
  .openapi(
    postCallsCallControlIdActionsRecordResumeRoute,
    postCallsCallControlIdActionsRecordResumeRouteHandler,
  )
  .openapi(
    postCallsCallControlIdActionsRecordStartRoute,
    postCallsCallControlIdActionsRecordStartRouteHandler,
  )
  .openapi(
    postCallsCallControlIdActionsRecordStopRoute,
    postCallsCallControlIdActionsRecordStopRouteHandler,
  )
  .openapi(postCallsCallControlIdActionsReferRoute, postCallsCallControlIdActionsReferRouteHandler)
  .openapi(
    postCallsCallControlIdActionsRejectRoute,
    postCallsCallControlIdActionsRejectRouteHandler,
  )
  .openapi(
    postCallsCallControlIdActionsSendDtmfRoute,
    postCallsCallControlIdActionsSendDtmfRouteHandler,
  )
  .openapi(postCallsCallControlIdActionsSpeakRoute, postCallsCallControlIdActionsSpeakRouteHandler)
  .openapi(
    postCallsCallControlIdActionsTranscriptionStartRoute,
    postCallsCallControlIdActionsTranscriptionStartRouteHandler,
  )
  .openapi(
    postCallsCallControlIdActionsTranscriptionStopRoute,
    postCallsCallControlIdActionsTranscriptionStopRouteHandler,
  )
  .openapi(
    postCallsCallControlIdActionsTransferRoute,
    postCallsCallControlIdActionsTransferRouteHandler,
  )
  .openapi(getCommentsRoute, getCommentsRouteHandler)
  .openapi(postCommentsRoute, postCommentsRouteHandler)
  .openapi(getCommentsIdRoute, getCommentsIdRouteHandler)
  .openapi(patchCommentsIdReadRoute, patchCommentsIdReadRouteHandler)
  .openapi(getConferencesRoute, getConferencesRouteHandler)
  .openapi(postConferencesRoute, postConferencesRouteHandler)
  .openapi(
    getConferencesConferenceIdParticipantsRoute,
    getConferencesConferenceIdParticipantsRouteHandler,
  )
  .openapi(getConferencesIdRoute, getConferencesIdRouteHandler)
  .openapi(
    postConferencesIdActionsDialParticipantRoute,
    postConferencesIdActionsDialParticipantRouteHandler,
  )
  .openapi(postConferencesIdActionsHoldRoute, postConferencesIdActionsHoldRouteHandler)
  .openapi(postConferencesIdActionsJoinRoute, postConferencesIdActionsJoinRouteHandler)
  .openapi(postConferencesIdActionsLeaveRoute, postConferencesIdActionsLeaveRouteHandler)
  .openapi(postConferencesIdActionsMuteRoute, postConferencesIdActionsMuteRouteHandler)
  .openapi(postConferencesIdActionsPlayRoute, postConferencesIdActionsPlayRouteHandler)
  .openapi(
    postConferencesIdActionsRecordStartRoute,
    postConferencesIdActionsRecordStartRouteHandler,
  )
  .openapi(postConferencesIdActionsRecordStopRoute, postConferencesIdActionsRecordStopRouteHandler)
  .openapi(postConferencesIdActionsSpeakRoute, postConferencesIdActionsSpeakRouteHandler)
  .openapi(postConferencesIdActionsStopRoute, postConferencesIdActionsStopRouteHandler)
  .openapi(postConferencesIdActionsUnholdRoute, postConferencesIdActionsUnholdRouteHandler)
  .openapi(postConferencesIdActionsUnmuteRoute, postConferencesIdActionsUnmuteRouteHandler)
  .openapi(postConferencesIdActionsUpdateRoute, postConferencesIdActionsUpdateRouteHandler)
  .openapi(getConnectionsRoute, getConnectionsRouteHandler)
  .openapi(getConnectionsIdRoute, getConnectionsIdRouteHandler)
  .openapi(getCredentialConnectionsRoute, getCredentialConnectionsRouteHandler)
  .openapi(postCredentialConnectionsRoute, postCredentialConnectionsRouteHandler)
  .openapi(deleteCredentialConnectionsIdRoute, deleteCredentialConnectionsIdRouteHandler)
  .openapi(getCredentialConnectionsIdRoute, getCredentialConnectionsIdRouteHandler)
  .openapi(patchCredentialConnectionsIdRoute, patchCredentialConnectionsIdRouteHandler)
  .openapi(getDetailRecordsRoute, getDetailRecordsRouteHandler)
  .openapi(getDocumentLinksRoute, getDocumentLinksRouteHandler)
  .openapi(getDocumentsRoute, getDocumentsRouteHandler)
  .openapi(postDocumentsRoute, postDocumentsRouteHandler)
  .openapi(deleteDocumentsIdRoute, deleteDocumentsIdRouteHandler)
  .openapi(getDocumentsIdRoute, getDocumentsIdRouteHandler)
  .openapi(patchDocumentsIdRoute, patchDocumentsIdRouteHandler)
  .openapi(getDocumentsIdDownloadRoute, getDocumentsIdDownloadRouteHandler)
  .openapi(getFaxApplicationsRoute, getFaxApplicationsRouteHandler)
  .openapi(postFaxApplicationsRoute, postFaxApplicationsRouteHandler)
  .openapi(deleteFaxApplicationsIdRoute, deleteFaxApplicationsIdRouteHandler)
  .openapi(getFaxApplicationsIdRoute, getFaxApplicationsIdRouteHandler)
  .openapi(patchFaxApplicationsIdRoute, patchFaxApplicationsIdRouteHandler)
  .openapi(getFaxesRoute, getFaxesRouteHandler)
  .openapi(postFaxesRoute, postFaxesRouteHandler)
  .openapi(deleteFaxesIdRoute, deleteFaxesIdRouteHandler)
  .openapi(getFaxesIdRoute, getFaxesIdRouteHandler)
  .openapi(postFaxesIdActionsRefreshRoute, postFaxesIdActionsRefreshRouteHandler)
  .openapi(getFqdnConnectionsRoute, getFqdnConnectionsRouteHandler)
  .openapi(postFqdnConnectionsRoute, postFqdnConnectionsRouteHandler)
  .openapi(deleteFqdnConnectionsIdRoute, deleteFqdnConnectionsIdRouteHandler)
  .openapi(getFqdnConnectionsIdRoute, getFqdnConnectionsIdRouteHandler)
  .openapi(patchFqdnConnectionsIdRoute, patchFqdnConnectionsIdRouteHandler)
  .openapi(getFqdnsRoute, getFqdnsRouteHandler)
  .openapi(postFqdnsRoute, postFqdnsRouteHandler)
  .openapi(deleteFqdnsIdRoute, deleteFqdnsIdRouteHandler)
  .openapi(getFqdnsIdRoute, getFqdnsIdRouteHandler)
  .openapi(patchFqdnsIdRoute, patchFqdnsIdRouteHandler)
  .openapi(getInventoryCoverageRoute, getInventoryCoverageRouteHandler)
  .openapi(getIpConnectionsRoute, getIpConnectionsRouteHandler)
  .openapi(postIpConnectionsRoute, postIpConnectionsRouteHandler)
  .openapi(deleteIpConnectionsIdRoute, deleteIpConnectionsIdRouteHandler)
  .openapi(getIpConnectionsIdRoute, getIpConnectionsIdRouteHandler)
  .openapi(patchIpConnectionsIdRoute, patchIpConnectionsIdRouteHandler)
  .openapi(getIpsRoute, getIpsRouteHandler)
  .openapi(postIpsRoute, postIpsRouteHandler)
  .openapi(deleteIpsIdRoute, deleteIpsIdRouteHandler)
  .openapi(getIpsIdRoute, getIpsIdRouteHandler)
  .openapi(patchIpsIdRoute, patchIpsIdRouteHandler)
  .openapi(postLedgerBillingGroupReportsRoute, postLedgerBillingGroupReportsRouteHandler)
  .openapi(getLedgerBillingGroupReportsIdRoute, getLedgerBillingGroupReportsIdRouteHandler)
  .openapi(getManagedAccountsRoute, getManagedAccountsRouteHandler)
  .openapi(postManagedAccountsRoute, postManagedAccountsRouteHandler)
  .openapi(getManagedAccountsIdRoute, getManagedAccountsIdRouteHandler)
  .openapi(
    postManagedAccountsIdActionsDisableRoute,
    postManagedAccountsIdActionsDisableRouteHandler,
  )
  .openapi(postManagedAccountsIdActionsEnableRoute, postManagedAccountsIdActionsEnableRouteHandler)
  .openapi(getMediaRoute, getMediaRouteHandler)
  .openapi(postMediaRoute, postMediaRouteHandler)
  .openapi(deleteMediaMediaNameRoute, deleteMediaMediaNameRouteHandler)
  .openapi(getMediaMediaNameRoute, getMediaMediaNameRouteHandler)
  .openapi(putMediaMediaNameRoute, putMediaMediaNameRouteHandler)
  .openapi(getMediaMediaNameDownloadRoute, getMediaMediaNameDownloadRouteHandler)
  .openapi(getMessageDetailRecordsRoute, getMessageDetailRecordsRouteHandler)
  .openapi(
    getMessageDetailRecordsIdMessageBodyRoute,
    getMessageDetailRecordsIdMessageBodyRouteHandler,
  )
  .openapi(postMessagesRoute, postMessagesRouteHandler)
  .openapi(postMessagesLongCodeRoute, postMessagesLongCodeRouteHandler)
  .openapi(postMessagesNumberPoolRoute, postMessagesNumberPoolRouteHandler)
  .openapi(postMessagesShortCodeRoute, postMessagesShortCodeRouteHandler)
  .openapi(getMessagesIdRoute, getMessagesIdRouteHandler)
  .openapi(getMessagingHostedNumberOrdersRoute, getMessagingHostedNumberOrdersRouteHandler)
  .openapi(postMessagingHostedNumberOrdersRoute, postMessagingHostedNumberOrdersRouteHandler)
  .openapi(getMessagingHostedNumberOrdersIdRoute, getMessagingHostedNumberOrdersIdRouteHandler)
  .openapi(
    postMessagingHostedNumberOrdersIdActionsFileUploadRoute,
    postMessagingHostedNumberOrdersIdActionsFileUploadRouteHandler,
  )
  .openapi(deleteMessagingHostedNumbersIdRoute, deleteMessagingHostedNumbersIdRouteHandler)
  .openapi(getMessagingProfileMetricsRoute, getMessagingProfileMetricsRouteHandler)
  .openapi(getMessagingProfilesRoute, getMessagingProfilesRouteHandler)
  .openapi(postMessagingProfilesRoute, postMessagingProfilesRouteHandler)
  .openapi(deleteMessagingProfilesIdRoute, deleteMessagingProfilesIdRouteHandler)
  .openapi(getMessagingProfilesIdRoute, getMessagingProfilesIdRouteHandler)
  .openapi(patchMessagingProfilesIdRoute, patchMessagingProfilesIdRouteHandler)
  .openapi(getMessagingProfilesIdMetricsRoute, getMessagingProfilesIdMetricsRouteHandler)
  .openapi(getMessagingProfilesIdPhoneNumbersRoute, getMessagingProfilesIdPhoneNumbersRouteHandler)
  .openapi(getMessagingProfilesIdShortCodesRoute, getMessagingProfilesIdShortCodesRouteHandler)
  .openapi(getMessagingUrlDomainsRoute, getMessagingUrlDomainsRouteHandler)
  .openapi(getMobileOperatorNetworksRoute, getMobileOperatorNetworksRouteHandler)
  .openapi(getNotificationChannelsRoute, getNotificationChannelsRouteHandler)
  .openapi(postNotificationChannelsRoute, postNotificationChannelsRouteHandler)
  .openapi(deleteNotificationChannelsIdRoute, deleteNotificationChannelsIdRouteHandler)
  .openapi(getNotificationChannelsIdRoute, getNotificationChannelsIdRouteHandler)
  .openapi(patchNotificationChannelsIdRoute, patchNotificationChannelsIdRouteHandler)
  .openapi(getNotificationEventConditionsRoute, getNotificationEventConditionsRouteHandler)
  .openapi(getNotificationEventsRoute, getNotificationEventsRouteHandler)
  .openapi(getNotificationProfilesRoute, getNotificationProfilesRouteHandler)
  .openapi(postNotificationProfilesRoute, postNotificationProfilesRouteHandler)
  .openapi(deleteNotificationProfilesIdRoute, deleteNotificationProfilesIdRouteHandler)
  .openapi(getNotificationProfilesIdRoute, getNotificationProfilesIdRouteHandler)
  .openapi(patchNotificationProfilesIdRoute, patchNotificationProfilesIdRouteHandler)
  .openapi(getNotificationSettingsRoute, getNotificationSettingsRouteHandler)
  .openapi(postNotificationSettingsRoute, postNotificationSettingsRouteHandler)
  .openapi(deleteNotificationSettingsIdRoute, deleteNotificationSettingsIdRouteHandler)
  .openapi(getNotificationSettingsIdRoute, getNotificationSettingsIdRouteHandler)
  .openapi(getNumberBlockOrdersRoute, getNumberBlockOrdersRouteHandler)
  .openapi(postNumberBlockOrdersRoute, postNumberBlockOrdersRouteHandler)
  .openapi(
    getNumberBlockOrdersNumberBlockOrderIdRoute,
    getNumberBlockOrdersNumberBlockOrderIdRouteHandler,
  )
  .openapi(getNumberLookupPhoneNumberRoute, getNumberLookupPhoneNumberRouteHandler)
  .openapi(getNumberOrderDocumentsRoute, getNumberOrderDocumentsRouteHandler)
  .openapi(postNumberOrderDocumentsRoute, postNumberOrderDocumentsRouteHandler)
  .openapi(
    getNumberOrderDocumentsNumberOrderDocumentIdRoute,
    getNumberOrderDocumentsNumberOrderDocumentIdRouteHandler,
  )
  .openapi(
    patchNumberOrderDocumentsNumberOrderDocumentIdRoute,
    patchNumberOrderDocumentsNumberOrderDocumentIdRouteHandler,
  )
  .openapi(getNumberOrderPhoneNumbersRoute, getNumberOrderPhoneNumbersRouteHandler)
  .openapi(
    getNumberOrderPhoneNumbersNumberOrderPhoneNumberIdRoute,
    getNumberOrderPhoneNumbersNumberOrderPhoneNumberIdRouteHandler,
  )
  .openapi(
    patchNumberOrderPhoneNumbersNumberOrderPhoneNumberIdRoute,
    patchNumberOrderPhoneNumbersNumberOrderPhoneNumberIdRouteHandler,
  )
  .openapi(getNumberOrdersRoute, getNumberOrdersRouteHandler)
  .openapi(postNumberOrdersRoute, postNumberOrdersRouteHandler)
  .openapi(getNumberOrdersNumberOrderIdRoute, getNumberOrdersNumberOrderIdRouteHandler)
  .openapi(patchNumberOrdersNumberOrderIdRoute, patchNumberOrdersNumberOrderIdRouteHandler)
  .openapi(getNumberReservationsRoute, getNumberReservationsRouteHandler)
  .openapi(postNumberReservationsRoute, postNumberReservationsRouteHandler)
  .openapi(
    getNumberReservationsNumberReservationIdRoute,
    getNumberReservationsNumberReservationIdRouteHandler,
  )
  .openapi(
    postNumberReservationsNumberReservationIdActionsExtendRoute,
    postNumberReservationsNumberReservationIdActionsExtendRouteHandler,
  )
  .openapi(getOtaUpdatesRoute, getOtaUpdatesRouteHandler)
  .openapi(getOtaUpdatesIdRoute, getOtaUpdatesIdRouteHandler)
  .openapi(getOutboundVoiceProfilesRoute, getOutboundVoiceProfilesRouteHandler)
  .openapi(postOutboundVoiceProfilesRoute, postOutboundVoiceProfilesRouteHandler)
  .openapi(deleteOutboundVoiceProfilesIdRoute, deleteOutboundVoiceProfilesIdRouteHandler)
  .openapi(getOutboundVoiceProfilesIdRoute, getOutboundVoiceProfilesIdRouteHandler)
  .openapi(patchOutboundVoiceProfilesIdRoute, patchOutboundVoiceProfilesIdRouteHandler)
  .openapi(getPhoneNumberBlocksJobsRoute, getPhoneNumberBlocksJobsRouteHandler)
  .openapi(
    postPhoneNumberBlocksJobsDeletePhoneNumberBlockRoute,
    postPhoneNumberBlocksJobsDeletePhoneNumberBlockRouteHandler,
  )
  .openapi(getPhoneNumberBlocksJobsIdRoute, getPhoneNumberBlocksJobsIdRouteHandler)
  .openapi(getPhoneNumbersRoute, getPhoneNumbersRouteHandler)
  .openapi(getPhoneNumbersCsvDownloadsRoute, getPhoneNumbersCsvDownloadsRouteHandler)
  .openapi(postPhoneNumbersCsvDownloadsRoute, postPhoneNumbersCsvDownloadsRouteHandler)
  .openapi(getPhoneNumbersCsvDownloadsIdRoute, getPhoneNumbersCsvDownloadsIdRouteHandler)
  .openapi(getPhoneNumbersInboundChannelsRoute, getPhoneNumbersInboundChannelsRouteHandler)
  .openapi(patchPhoneNumbersInboundChannelsRoute, patchPhoneNumbersInboundChannelsRouteHandler)
  .openapi(getPhoneNumbersJobsRoute, getPhoneNumbersJobsRouteHandler)
  .openapi(
    postPhoneNumbersJobsDeletePhoneNumbersRoute,
    postPhoneNumbersJobsDeletePhoneNumbersRouteHandler,
  )
  .openapi(
    postPhoneNumbersJobsUpdateEmergencySettingsRoute,
    postPhoneNumbersJobsUpdateEmergencySettingsRouteHandler,
  )
  .openapi(
    postPhoneNumbersJobsUpdatePhoneNumbersRoute,
    postPhoneNumbersJobsUpdatePhoneNumbersRouteHandler,
  )
  .openapi(getPhoneNumbersJobsIdRoute, getPhoneNumbersJobsIdRouteHandler)
  .openapi(getPhoneNumbersMessagingRoute, getPhoneNumbersMessagingRouteHandler)
  .openapi(getPhoneNumbersVoiceRoute, getPhoneNumbersVoiceRouteHandler)
  .openapi(deletePhoneNumbersIdRoute, deletePhoneNumbersIdRouteHandler)
  .openapi(getPhoneNumbersIdRoute, getPhoneNumbersIdRouteHandler)
  .openapi(patchPhoneNumbersIdRoute, patchPhoneNumbersIdRouteHandler)
  .openapi(
    postPhoneNumbersIdActionsEnableEmergencyRoute,
    postPhoneNumbersIdActionsEnableEmergencyRouteHandler,
  )
  .openapi(getPhoneNumbersIdMessagingRoute, getPhoneNumbersIdMessagingRouteHandler)
  .openapi(patchPhoneNumbersIdMessagingRoute, patchPhoneNumbersIdMessagingRouteHandler)
  .openapi(getPhoneNumbersIdVoiceRoute, getPhoneNumbersIdVoiceRouteHandler)
  .openapi(patchPhoneNumbersIdVoiceRoute, patchPhoneNumbersIdVoiceRouteHandler)
  .openapi(postPortabilityChecksRoute, postPortabilityChecksRouteHandler)
  .openapi(getPortingOrdersRoute, getPortingOrdersRouteHandler)
  .openapi(postPortingOrdersRoute, postPortingOrdersRouteHandler)
  .openapi(getPortingOrdersExceptionTypesRoute, getPortingOrdersExceptionTypesRouteHandler)
  .openapi(deletePortingOrdersIdRoute, deletePortingOrdersIdRouteHandler)
  .openapi(getPortingOrdersIdRoute, getPortingOrdersIdRouteHandler)
  .openapi(patchPortingOrdersIdRoute, patchPortingOrdersIdRouteHandler)
  .openapi(postPortingOrdersIdActionsActivateRoute, postPortingOrdersIdActionsActivateRouteHandler)
  .openapi(postPortingOrdersIdActionsCancelRoute, postPortingOrdersIdActionsCancelRouteHandler)
  .openapi(postPortingOrdersIdActionsConfirmRoute, postPortingOrdersIdActionsConfirmRouteHandler)
  .openapi(getPortingOrdersIdActivationJobsRoute, getPortingOrdersIdActivationJobsRouteHandler)
  .openapi(
    getPortingOrdersIdActivationJobsActivationJobIdRoute,
    getPortingOrdersIdActivationJobsActivationJobIdRouteHandler,
  )
  .openapi(getPortingOrdersIdCommentsRoute, getPortingOrdersIdCommentsRouteHandler)
  .openapi(postPortingOrdersIdCommentsRoute, postPortingOrdersIdCommentsRouteHandler)
  .openapi(getPortingOrdersIdLoaTemplateRoute, getPortingOrdersIdLoaTemplateRouteHandler)
  .openapi(getPortingPhoneNumbersRoute, getPortingPhoneNumbersRouteHandler)
  .openapi(getPortoutsRoute, getPortoutsRouteHandler)
  .openapi(getPortoutsIdRoute, getPortoutsIdRouteHandler)
  .openapi(getPortoutsIdCommentsRoute, getPortoutsIdCommentsRouteHandler)
  .openapi(postPortoutsIdCommentsRoute, postPortoutsIdCommentsRouteHandler)
  .openapi(patchPortoutsIdStatusRoute, patchPortoutsIdStatusRouteHandler)
  .openapi(getPrivateWirelessGatewaysRoute, getPrivateWirelessGatewaysRouteHandler)
  .openapi(postPrivateWirelessGatewaysRoute, postPrivateWirelessGatewaysRouteHandler)
  .openapi(deletePrivateWirelessGatewaysIdRoute, deletePrivateWirelessGatewaysIdRouteHandler)
  .openapi(getPrivateWirelessGatewaysIdRoute, getPrivateWirelessGatewaysIdRouteHandler)
  .openapi(getQueuesQueueNameRoute, getQueuesQueueNameRouteHandler)
  .openapi(getQueuesQueueNameCallsRoute, getQueuesQueueNameCallsRouteHandler)
  .openapi(
    getQueuesQueueNameCallsCallControlIdRoute,
    getQueuesQueueNameCallsCallControlIdRouteHandler,
  )
  .openapi(getRecordingsRoute, getRecordingsRouteHandler)
  .openapi(getRecordingsIdRoute, getRecordingsIdRouteHandler)
  .openapi(getReportsBatchMdrReportsRoute, getReportsBatchMdrReportsRouteHandler)
  .openapi(postReportsBatchMdrReportsRoute, postReportsBatchMdrReportsRouteHandler)
  .openapi(deleteReportsBatchMdrReportsIdRoute, deleteReportsBatchMdrReportsIdRouteHandler)
  .openapi(getReportsBatchMdrReportsIdRoute, getReportsBatchMdrReportsIdRouteHandler)
  .openapi(getReportsCdrUsageReportsSyncRoute, getReportsCdrUsageReportsSyncRouteHandler)
  .openapi(getReportsMdrUsageReportsRoute, getReportsMdrUsageReportsRouteHandler)
  .openapi(postReportsMdrUsageReportsRoute, postReportsMdrUsageReportsRouteHandler)
  .openapi(getReportsMdrUsageReportsSyncRoute, getReportsMdrUsageReportsSyncRouteHandler)
  .openapi(deleteReportsMdrUsageReportsIdRoute, deleteReportsMdrUsageReportsIdRouteHandler)
  .openapi(getReportsMdrUsageReportsIdRoute, getReportsMdrUsageReportsIdRouteHandler)
  .openapi(getReportsMdrsRoute, getReportsMdrsRouteHandler)
  .openapi(getReportsWdrsRoute, getReportsWdrsRouteHandler)
  .openapi(getRequirementTypesRoute, getRequirementTypesRouteHandler)
  .openapi(getRequirementTypesIdRoute, getRequirementTypesIdRouteHandler)
  .openapi(getRequirementsRoute, getRequirementsRouteHandler)
  .openapi(getRequirementsIdRoute, getRequirementsIdRouteHandler)
  .openapi(getRoomParticipantsRoute, getRoomParticipantsRouteHandler)
  .openapi(
    getRoomParticipantsRoomParticipantIdRoute,
    getRoomParticipantsRoomParticipantIdRouteHandler,
  )
  .openapi(getRoomSessionsRoute, getRoomSessionsRouteHandler)
  .openapi(getRoomSessionsRoomSessionIdRoute, getRoomSessionsRoomSessionIdRouteHandler)
  .openapi(
    getRoomSessionsRoomSessionIdParticipantsRoute,
    getRoomSessionsRoomSessionIdParticipantsRouteHandler,
  )
  .openapi(getRoomsRoute, getRoomsRouteHandler)
  .openapi(postRoomsRoute, postRoomsRouteHandler)
  .openapi(deleteRoomsRoomIdRoute, deleteRoomsRoomIdRouteHandler)
  .openapi(getRoomsRoomIdRoute, getRoomsRoomIdRouteHandler)
  .openapi(
    postRoomsRoomIdActionsGenerateJoinClientTokenRoute,
    postRoomsRoomIdActionsGenerateJoinClientTokenRouteHandler,
  )
  .openapi(
    postRoomsRoomIdActionsRefreshClientTokenRoute,
    postRoomsRoomIdActionsRefreshClientTokenRouteHandler,
  )
  .openapi(getRoomsRoomIdSessionsRoute, getRoomsRoomIdSessionsRouteHandler)
  .openapi(getShortCodesRoute, getShortCodesRouteHandler)
  .openapi(getShortCodesIdRoute, getShortCodesIdRouteHandler)
  .openapi(patchShortCodesIdRoute, patchShortCodesIdRouteHandler)
  .openapi(getSimCardGroupActionsRoute, getSimCardGroupActionsRouteHandler)
  .openapi(getSimCardGroupActionsIdRoute, getSimCardGroupActionsIdRouteHandler)
  .openapi(getSimCardGroupsRoute, getSimCardGroupsRouteHandler)
  .openapi(postSimCardGroupsRoute, postSimCardGroupsRouteHandler)
  .openapi(deleteSimCardGroupsIdRoute, deleteSimCardGroupsIdRouteHandler)
  .openapi(getSimCardGroupsIdRoute, getSimCardGroupsIdRouteHandler)
  .openapi(patchSimCardGroupsIdRoute, patchSimCardGroupsIdRouteHandler)
  .openapi(
    postSimCardGroupsIdActionsRemovePrivateWirelessGatewayRoute,
    postSimCardGroupsIdActionsRemovePrivateWirelessGatewayRouteHandler,
  )
  .openapi(
    postSimCardGroupsIdActionsSetPrivateWirelessGatewayRoute,
    postSimCardGroupsIdActionsSetPrivateWirelessGatewayRouteHandler,
  )
  .openapi(postSimCardOrderPreviewRoute, postSimCardOrderPreviewRouteHandler)
  .openapi(getSimCardOrdersRoute, getSimCardOrdersRouteHandler)
  .openapi(postSimCardOrdersRoute, postSimCardOrdersRouteHandler)
  .openapi(getSimCardOrdersIdRoute, getSimCardOrdersIdRouteHandler)
  .openapi(getSimCardsRoute, getSimCardsRouteHandler)
  .openapi(
    postSimCardsActionsValidateRegistrationCodesRoute,
    postSimCardsActionsValidateRegistrationCodesRouteHandler,
  )
  .openapi(deleteSimCardsIdRoute, deleteSimCardsIdRouteHandler)
  .openapi(getSimCardsIdRoute, getSimCardsIdRouteHandler)
  .openapi(patchSimCardsIdRoute, patchSimCardsIdRouteHandler)
  .openapi(postSimCardsIdActionsDisableRoute, postSimCardsIdActionsDisableRouteHandler)
  .openapi(postSimCardsIdActionsEnableRoute, postSimCardsIdActionsEnableRouteHandler)
  .openapi(postSimCardsIdActionsSetStandbyRoute, postSimCardsIdActionsSetStandbyRouteHandler)
  .openapi(
    deleteSimCardsSimCardIdNetworkPreferencesRoute,
    deleteSimCardsSimCardIdNetworkPreferencesRouteHandler,
  )
  .openapi(
    getSimCardsSimCardIdNetworkPreferencesRoute,
    getSimCardsSimCardIdNetworkPreferencesRouteHandler,
  )
  .openapi(
    putSimCardsSimCardIdNetworkPreferencesRoute,
    putSimCardsSimCardIdNetworkPreferencesRouteHandler,
  )
  .openapi(deleteSimCardsSimCardIdPublicIpRoute, deleteSimCardsSimCardIdPublicIpRouteHandler)
  .openapi(getSimCardsSimCardIdPublicIpRoute, getSimCardsSimCardIdPublicIpRouteHandler)
  .openapi(postSimCardsSimCardIdPublicIpRoute, postSimCardsSimCardIdPublicIpRouteHandler)
  .openapi(
    getSimCardsSimCardIdWirelessConnectivityLogsRoute,
    getSimCardsSimCardIdWirelessConnectivityLogsRouteHandler,
  )
  .openapi(getSubNumberOrdersRoute, getSubNumberOrdersRouteHandler)
  .openapi(getSubNumberOrdersSubNumberOrderIdRoute, getSubNumberOrdersSubNumberOrderIdRouteHandler)
  .openapi(
    patchSubNumberOrdersSubNumberOrderIdRoute,
    patchSubNumberOrdersSubNumberOrderIdRouteHandler,
  )
  .openapi(getTelephonyCredentialsRoute, getTelephonyCredentialsRouteHandler)
  .openapi(postTelephonyCredentialsRoute, postTelephonyCredentialsRouteHandler)
  .openapi(getTelephonyCredentialsTagsRoute, getTelephonyCredentialsTagsRouteHandler)
  .openapi(deleteTelephonyCredentialsIdRoute, deleteTelephonyCredentialsIdRouteHandler)
  .openapi(getTelephonyCredentialsIdRoute, getTelephonyCredentialsIdRouteHandler)
  .openapi(patchTelephonyCredentialsIdRoute, patchTelephonyCredentialsIdRouteHandler)
  .openapi(
    postTelephonyCredentialsIdActionsActionRoute,
    postTelephonyCredentialsIdActionsActionRouteHandler,
  )
  .openapi(postTelephonyCredentialsIdTokenRoute, postTelephonyCredentialsIdTokenRouteHandler)
  .openapi(getTexmlApplicationsRoute, getTexmlApplicationsRouteHandler)
  .openapi(postTexmlApplicationsRoute, postTexmlApplicationsRouteHandler)
  .openapi(deleteTexmlApplicationsIdRoute, deleteTexmlApplicationsIdRouteHandler)
  .openapi(getTexmlApplicationsIdRoute, getTexmlApplicationsIdRouteHandler)
  .openapi(patchTexmlApplicationsIdRoute, patchTexmlApplicationsIdRouteHandler)
  .openapi(
    getVerificationsByPhoneNumberPhoneNumberRoute,
    getVerificationsByPhoneNumberPhoneNumberRouteHandler,
  )
  .openapi(
    postVerificationsByPhoneNumberPhoneNumberActionsVerifyRoute,
    postVerificationsByPhoneNumberPhoneNumberActionsVerifyRouteHandler,
  )
  .openapi(postVerificationsCallRoute, postVerificationsCallRouteHandler)
  .openapi(postVerificationsFlashcallRoute, postVerificationsFlashcallRouteHandler)
  .openapi(postVerificationsPsd2Route, postVerificationsPsd2RouteHandler)
  .openapi(postVerificationsSmsRoute, postVerificationsSmsRouteHandler)
  .openapi(postVerificationsWhatsappRoute, postVerificationsWhatsappRouteHandler)
  .openapi(getVerificationsVerificationIdRoute, getVerificationsVerificationIdRouteHandler)
  .openapi(getVerifyProfilesRoute, getVerifyProfilesRouteHandler)
  .openapi(postVerifyProfilesRoute, postVerifyProfilesRouteHandler)
  .openapi(
    deleteVerifyProfilesVerifyProfileIdRoute,
    deleteVerifyProfilesVerifyProfileIdRouteHandler,
  )
  .openapi(getVerifyProfilesVerifyProfileIdRoute, getVerifyProfilesVerifyProfileIdRouteHandler)
  .openapi(patchVerifyProfilesVerifyProfileIdRoute, patchVerifyProfilesVerifyProfileIdRouteHandler)
  .openapi(getWebhookDeliveriesRoute, getWebhookDeliveriesRouteHandler)
  .openapi(getWebhookDeliveriesIdRoute, getWebhookDeliveriesIdRouteHandler)
  .openapi(postWhatsappContactsRoute, postWhatsappContactsRouteHandler)
  .openapi(getWhatsappDetailRecordReportsRoute, getWhatsappDetailRecordReportsRouteHandler)
  .openapi(postWhatsappDetailRecordReportsRoute, postWhatsappDetailRecordReportsRouteHandler)
  .openapi(
    deleteWhatsappDetailRecordReportsIdRoute,
    deleteWhatsappDetailRecordReportsIdRouteHandler,
  )
  .openapi(getWhatsappDetailRecordReportsIdRoute, getWhatsappDetailRecordReportsIdRouteHandler)
  .openapi(postWhatsappMediaRoute, postWhatsappMediaRouteHandler)
  .openapi(
    deleteWhatsappMediaWhatsappUserIdMediaIdRoute,
    deleteWhatsappMediaWhatsappUserIdMediaIdRouteHandler,
  )
  .openapi(
    getWhatsappMediaWhatsappUserIdMediaIdRoute,
    getWhatsappMediaWhatsappUserIdMediaIdRouteHandler,
  )
  .openapi(postWhatsappMessagesRoute, postWhatsappMessagesRouteHandler)
  .openapi(patchWhatsappMessagesMessageIdRoute, patchWhatsappMessagesMessageIdRouteHandler)
  .openapi(getWhatsappUsageAggregationsRoute, getWhatsappUsageAggregationsRouteHandler)
  .openapi(getWhatsappUsersWhatsappUserIdRoute, getWhatsappUsersWhatsappUserIdRouteHandler)
  .openapi(patchWhatsappUsersWhatsappUserIdRoute, patchWhatsappUsersWhatsappUserIdRouteHandler)
  .openapi(getWirelessDetailRecordsReportsRoute, getWirelessDetailRecordsReportsRouteHandler)
  .openapi(postWirelessDetailRecordsReportsRoute, postWirelessDetailRecordsReportsRouteHandler)
  .openapi(
    deleteWirelessDetailRecordsReportsIdRoute,
    deleteWirelessDetailRecordsReportsIdRouteHandler,
  )
  .openapi(getWirelessDetailRecordsReportsIdRoute, getWirelessDetailRecordsReportsIdRouteHandler)

export default app
