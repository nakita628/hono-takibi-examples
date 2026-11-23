import { OpenAPIHono } from '@hono/zod-openapi'
import {
  delete10dlcBrandBrandIdRoute,
  delete10dlcCampaignCampaignIdRoute,
  delete10dlcPhoneNumberCampaignsPhoneNumberRoute,
  deleteAccessIpAddressAccessIpAddressIdRoute,
  deleteAccessIpRangesAccessIpRangeIdRoute,
  deleteAddressesIdRoute,
  deleteAgentGatewaysInstanceIdApisApiIdRoute,
  deleteAgentGatewaysInstanceIdGuardrailsGuardrailIdRoute,
  deleteAgentGatewaysInstanceIdKeysKeyIdRoute,
  deleteAgentGatewaysInstanceIdMcpServersServerIdRoute,
  deleteAgentGatewaysInstanceIdPoliciesNameRoute,
  deleteAgentGatewaysInstanceIdPolicyAttachmentsAttachmentIdRoute,
  deleteAgentGatewaysInstanceIdRoute,
  deleteAgentGatewaysInstanceIdTeamsTeamIdRoute,
  deleteAiAssistantsAssistantIdCanaryDeploysRoute,
  deleteAiAssistantsAssistantIdRoute,
  deleteAiAssistantsAssistantIdScheduledEventsEventIdRoute,
  deleteAiAssistantsAssistantIdTagsTagRoute,
  deleteAiAssistantsAssistantIdToolsToolIdRoute,
  deleteAiAssistantsAssistantIdVersionsVersionIdRoute,
  deleteAiAssistantsTestsTestIdRoute,
  deleteAiClustersTaskIdRoute,
  deleteAiCollectionsUuidRoute,
  deleteAiCollectionsUuidSourcesSourceIdRoute,
  deleteAiConversationsConversationIdConversationsInsightsInsightIdRoute,
  deleteAiConversationsConversationIdRoute,
  deleteAiConversationsInsightGroupsGroupIdInsightsInsightIdUnassignRoute,
  deleteAiConversationsInsightGroupsGroupIdRoute,
  deleteAiConversationsInsightsInsightIdRoute,
  deleteAiEmbeddingsBucketsBucketNameRoute,
  deleteAiIntegrationsConnectionsUserConnectionIdRoute,
  deleteAiMcpServersMcpServerIdRoute,
  deleteAiMemoryNamespacesNamespaceProfilesProfileIdRoute,
  deleteAiMemoryNamespacesNamespaceProfilesProfileIdSourcesSourceIdRoute,
  deleteAiMemoryNamespacesNamespaceRoute,
  deleteAiMissionsMissionIdKnowledgeBasesKnowledgeBaseIdRoute,
  deleteAiMissionsMissionIdMcpServersMcpServerIdRoute,
  deleteAiMissionsMissionIdRoute,
  deleteAiMissionsMissionIdRunsRunIdTelnyxAgentsTelnyxAgentIdRoute,
  deleteAiMissionsMissionIdToolsToolIdRoute,
  deleteAiTestsSchedulesV1CronJobsIdRoute,
  deleteAiTestsTestFrameworkV1AiagentsIdRoute,
  deleteAiTestsTestFrameworkV1MetricsIdRoute,
  deleteAiTestsTestFrameworkV1ResultsIdRoute,
  deleteAiTestsTestFrameworkV1ScenariosIdRoute,
  deleteAiToolsToolIdRoute,
  deleteAlphanumericSenderIdsIdRoute,
  deleteAuthenticationProvidersIdRoute,
  deleteBillingGroupsIdRoute,
  deleteBrowserSessionsIdRoute,
  deleteBundlePricingUserBundlesUserBundleIdRoute,
  deleteCalendarConnectionsIdRoute,
  deleteCallControlApplicationsIdRoute,
  deleteComputeFuncsIdLogsExportRoute,
  deleteCredentialConnectionsIdRoute,
  deleteCustomStorageCredentialsConnectionIdRoute,
  deleteDialogflowConnectionsConnectionIdRoute,
  deleteDirDirIdPhoneNumbersRoute,
  deleteDirDirIdRoute,
  deleteDocumentsIdRoute,
  deleteDynamicEmergencyAddressesIdRoute,
  deleteDynamicEmergencyEndpointsIdRoute,
  deleteEmailBlocksIdRoute,
  deleteEmailDedicatedIpsIdRoute,
  deleteEmailDomainsDomainIdWebhooksIdRoute,
  deleteEmailDomainsIdRoute,
  deleteEmailInboxesIdRoute,
  deleteEmailInboxesInboxIdDraftsDraftIdRoute,
  deleteEmailInboxesInboxIdFiltersRoute,
  deleteEmailInboxesInboxIdMessagesMessageIdLabelsRoute,
  deleteEmailInboxesInboxIdThreadsThreadIdLabelsRoute,
  deleteEmailIpPoolsIdIpsIpIdRoute,
  deleteEmailIpPoolsIdRoute,
  deleteEmailMessagesEmailIdScheduleRoute,
  deleteEmailMessagesIdRoute,
  deleteEmailMessagesRoute,
  deleteEmailTemplatesIdRoute,
  deleteEmailUnsubscribeGroupsIdRoute,
  deleteEmailUnsubscribeGroupsIdSuppressionsEmailRoute,
  deleteEnterprisesEnterpriseIdReputationNumbersPhoneNumberRoute,
  deleteEnterprisesEnterpriseIdReputationRoute,
  deleteEnterprisesEnterpriseIdRoute,
  deleteExternalConnectionsIdRoute,
  deleteExternalConnectionsLogMessagesIdRoute,
  deleteFaxApplicationsIdRoute,
  deleteFaxesIdRoute,
  deleteFqdnConnectionsIdRoute,
  deleteFqdnsIdRoute,
  deleteGlobalIpAssignmentsIdRoute,
  deleteGlobalIpHealthChecksIdRoute,
  deleteGlobalIpsIdRoute,
  deleteIntegrationSecretsIdRoute,
  deleteIpConnectionsIdRoute,
  deleteIpsIdRoute,
  deleteLegacyReportingBatchDetailRecordsMessagingId2Route,
  deleteLegacyReportingBatchDetailRecordsMessagingIdRoute,
  deleteLegacyReportingBatchDetailRecordsSpeechToTextId2Route,
  deleteLegacyReportingBatchDetailRecordsSpeechToTextIdRoute,
  deleteLegacyReportingBatchDetailRecordsVoiceId2Route,
  deleteLegacyReportingBatchDetailRecordsVoiceIdRoute,
  deleteLegacyReportingUsageReportsMessagingId2Route,
  deleteLegacyReportingUsageReportsMessagingIdRoute,
  deleteLegacyReportingUsageReportsNumberLookupId2Route,
  deleteLegacyReportingUsageReportsNumberLookupIdRoute,
  deleteLegacyReportingUsageReportsVoiceId2Route,
  deleteLegacyReportingUsageReportsVoiceIdRoute,
  deleteLlmTokenGatewayTokenGroupsIdRoute,
  deleteLlmTokenGatewayTokenKeysIdRoute,
  deleteMediaMediaNameRoute,
  deleteMeetingSessionsIdRecordingMediaRoute,
  deleteMeetingSessionsIdRoute,
  deleteMessagesIdRoute,
  deleteMessagingHostedNumberOrdersIdRoute,
  deleteMessagingHostedNumbersIdRoute,
  deleteMessagingProfilesIdRoute,
  deleteMessagingProfilesProfileIdAutorespConfigsAutorespCfgIdRoute,
  deleteMessagingTollfreeVerificationRequestsIdRoute,
  deleteMobilePushCredentialsPushCredentialIdRoute,
  deleteMobileVoiceConnectionsIdRoute,
  deleteNetworkRoutesIdRoute,
  deleteNetworksIdDefaultGatewayRoute,
  deleteNetworksIdRoute,
  deleteNotificationChannelsIdRoute,
  deleteNotificationProfilesIdRoute,
  deleteNotificationSettingsIdRoute,
  deleteOauthClientsId2Route,
  deleteOauthClientsIdRoute,
  deleteOauthGrantsId2Route,
  deleteOauthGrantsIdRoute,
  deleteOutboundVoiceProfilesIdRoute,
  deletePayConnectorsNameRoute,
  deletePhoneNumbersIdRoute,
  deletePortingLoaConfigurationsIdRoute,
  deletePortingOrdersIdAdditionalDocumentsAdditionalDocumentIdRoute,
  deletePortingOrdersIdRoute,
  deletePortingOrdersPortingOrderIdAssociatedPhoneNumbersIdRoute,
  deletePortingOrdersPortingOrderIdPhoneNumberBlocksIdRoute,
  deletePortingOrdersPortingOrderIdPhoneNumberExtensionsIdRoute,
  deletePrivateWirelessGatewaysIdRoute,
  deletePronunciationDictsIdRoute,
  deletePublicInternetGatewaysIdRoute,
  deleteQueuesQueueNameCallsCallControlIdRoute,
  deleteQueuesQueueNameRoute,
  deleteRcsAgentsIdTestDevicesTestDeviceIdRoute,
  deleteRecordingsRecordingIdRoute,
  deleteRecordingTranscriptionsRecordingTranscriptionIdRoute,
  deleteReportsMdrUsageReportsIdRoute,
  deleteReputationNumbersPhoneNumberRoute,
  deleteRequirementGroupsIdRoute,
  deleteRequirementsIdVersionsPendingRoute,
  deleteRoomCompositionsRoomCompositionIdRoute,
  deleteRoomRecordingsRoomRecordingIdRoute,
  deleteRoomRecordingsRoute,
  deleteRoomsRoomIdRoute,
  deleteSimCardDataUsageNotificationsIdRoute,
  deleteSimCardGroupsIdRoute,
  deleteSimCardsIdRoute,
  deleteSiprecConnectorsConnectorNameRoute,
  deleteSpendLimitsProductRoute,
  deleteStorageBucketsBucketNameSslCertificateRoute,
  deleteStorageCloudfsIdRoute,
  deleteStorageKvsIdKeysKeyRoute,
  deleteStorageKvsIdRoute,
  deleteStorageMigrationSourcesIdRoute,
  deleteStorageSqldbsIdRoute,
  deleteTailscaleSubnetRoutersIdRoute,
  deleteTelephonyCredentialsIdRoute,
  deleteTexmlAccountsAccountSidConferencesConferenceSidParticipantsCallSidOrParticipantLabelRoute,
  deleteTexmlAccountsAccountSidQueuesQueueSidRoute,
  deleteTexmlAccountsAccountSidRecordingsRecordingSidJsonRoute,
  deleteTexmlAccountsAccountSidTranscriptionsRecordingTranscriptionSidJsonRoute,
  deleteTexmlApplicationsIdRoute,
  deleteTrafficPolicyProfilesId2Route,
  deleteTrafficPolicyProfilesIdRoute,
  deleteTunnelsIdRoute,
  deleteUacConnectionsIdRoute,
  deleteV2WhatsappBusinessAccountsIdRoute,
  deleteV2WhatsappMessageTemplatesIdRoute,
  deleteV2WhatsappPhoneNumbersPhoneNumberProfilePhotoRoute,
  deleteV2WhatsappPhoneNumbersPhoneNumberRoute,
  deleteVerifiedNumbersPhoneNumberRoute,
  deleteVerifyProfilesVerifyProfileIdRoute,
  deleteVirtualCrossConnectsIdRoute,
  deleteVoiceClonesIdRoute,
  deleteVoiceDesignsIdRoute,
  deleteVoiceDesignsIdVersionsVersionRoute,
  deleteWhatsappBusinessAccountsIdRoute,
  deleteWhatsappMessageTemplatesIdRoute,
  deleteWhatsappPhoneNumbersPhoneNumberProfilePhotoRoute,
  deleteWhatsappPhoneNumbersPhoneNumberRoute,
  deleteWireguardInterfacesIdRoute,
  deleteWireguardPeersIdRoute,
  deleteWirelessBlocklistsIdRoute,
  deleteWirelessDetailRecordsReportsId2Route,
  deleteWirelessDetailRecordsReportsIdRoute,
  get10dlcBrandBrandIdExternalVettingRoute,
  get10dlcBrandBrandIdRoute,
  get10dlcBrandBrandIdSmsOtpRoute,
  get10dlcBrandFeedbackBrandId2Route,
  get10dlcBrandFeedbackBrandIdRoute,
  get10dlcBrandRoute,
  get10dlcBrandSmsOtpReferenceIdRoute,
  get10dlcCampaignBuilderBrandBrandIdUsecaseUsecaseRoute,
  get10dlcCampaignCampaignIdMnoMetadataRoute,
  get10dlcCampaignCampaignIdOperationStatusRoute,
  get10dlcCampaignCampaignIdOsrAttributes2Route,
  get10dlcCampaignCampaignIdOsrAttributesRoute,
  get10dlcCampaignCampaignIdRoute,
  get10dlcCampaignCampaignIdSharingRoute,
  get10dlcCampaignRoute,
  get10dlcCampaignUsecaseCost2Route,
  get10dlcCampaignUsecaseCostRoute,
  get10dlcEnumEndpointRoute,
  get10dlcPartnerCampaignCampaignIdSharingRoute,
  get10dlcPartnerCampaignsCampaignIdRoute,
  get10dlcPartnerCampaignSharedByMeRoute,
  get10dlcPartnerCampaignsRoute,
  get10dlcPhoneNumberAssignmentByProfileTaskIdPhoneNumbersRoute,
  get10dlcPhoneNumberAssignmentByProfileTaskIdRoute,
  get10dlcPhoneNumberCampaignsPhoneNumberRoute,
  get10dlcPhoneNumberCampaignsRoute,
  getAccessIpAddressAccessIpAddressIdRoute,
  getAccessIpAddressRoute,
  getAccessIpRangesRoute,
  getAddressesIdRoute,
  getAddressesRoute,
  getAdvancedOrdersOrderIdRoute,
  getAdvancedOrdersRoute,
  getAgentGatewaysInstanceIdApisRoute,
  getAgentGatewaysInstanceIdGuardrailsRoute,
  getAgentGatewaysInstanceIdKeysKeyIdToolPermissionsRoute,
  getAgentGatewaysInstanceIdKeysRoute,
  getAgentGatewaysInstanceIdMcpServersRoute,
  getAgentGatewaysInstanceIdModelsRoute,
  getAgentGatewaysInstanceIdPoliciesNameRoute,
  getAgentGatewaysInstanceIdPoliciesRoute,
  getAgentGatewaysInstanceIdPolicyAttachmentsRoute,
  getAgentGatewaysInstanceIdRoute,
  getAgentGatewaysInstanceIdSpendLogsRoute,
  getAgentGatewaysInstanceIdTeamsRoute,
  getAgentGatewaysInstanceIdTeamsTeamIdToolPermissionsRoute,
  getAgentGatewaysRoute,
  getAiAssistantsAssistantIdCanaryDeploysRoute,
  getAiAssistantsAssistantIdDeletedRoute,
  getAiAssistantsAssistantIdRoute,
  getAiAssistantsAssistantIdScheduledEventsEventIdRoute,
  getAiAssistantsAssistantIdScheduledEventsRoute,
  getAiAssistantsAssistantIdTexmlRoute,
  getAiAssistantsAssistantIdVersionsRoute,
  getAiAssistantsAssistantIdVersionsVersionIdRoute,
  getAiAssistantsDeletedRoute,
  getAiAssistantsRoute,
  getAiAssistantsTagsRoute,
  getAiAssistantsTestsRoute,
  getAiAssistantsTestsTestIdRoute,
  getAiAssistantsTestsTestIdRunsRoute,
  getAiAssistantsTestsTestIdRunsRunIdRoute,
  getAiAssistantsTestsTestSuitesRoute,
  getAiAssistantsTestsTestSuitesSuiteNameRunsRoute,
  getAiAvatarsAvatarIdRoute,
  getAiAvatarsRoute,
  getAiClustersRoute,
  getAiClustersTaskIdGraphRoute,
  getAiClustersTaskIdRoute,
  getAiCollectionsRoute,
  getAiCollectionsSlugSlugRoute,
  getAiCollectionsUuidRoute,
  getAiCollectionsUuidSettingsRoute,
  getAiCollectionsUuidSourcesRoute,
  getAiConversationHistoriesRoute,
  getAiConversationsConversationIdConversationsInsightsRoute,
  getAiConversationsConversationIdMessagesRoute,
  getAiConversationsConversationIdRoute,
  getAiConversationsConversationInsightsAggregatesRoute,
  getAiConversationsInsightGroupsGroupIdRoute,
  getAiConversationsInsightGroupsRoute,
  getAiConversationsInsightsInsightIdRoute,
  getAiConversationsInsightsRoute,
  getAiConversationsRoute,
  getAiEmbeddingsBucketsBucketNameRoute,
  getAiEmbeddingsBucketsRoute,
  getAiEmbeddingsRoute,
  getAiEmbeddingsTaskIdRoute,
  getAiIntegrationsConnectionsRoute,
  getAiIntegrationsConnectionsUserConnectionIdRoute,
  getAiIntegrationsIntegrationIdRoute,
  getAiIntegrationsRoute,
  getAiKnowledgeCollectionsSlugDocumentsRoute,
  getAiMcpServersMcpServerIdRoute,
  getAiMcpServersRoute,
  getAiMemoryNamespacesNamespaceOperationsOperationIdRoute,
  getAiMemoryNamespacesNamespaceProfilesProfileIdMemoriesMemoryIdRoute,
  getAiMemoryNamespacesNamespaceProfilesProfileIdMemoriesRoute,
  getAiMemoryNamespacesNamespaceProfilesProfileIdSourcesRoute,
  getAiMemoryNamespacesNamespaceProfilesProfileIdSourcesSourceIdRoute,
  getAiMemoryNamespacesNamespaceProfilesProfileIdSummaryRoute,
  getAiMemoryNamespacesNamespaceProfilesRoute,
  getAiMemoryNamespacesNamespaceSettingsRoute,
  getAiMemoryNamespacesRoute,
  getAiMissionsEventsRoute,
  getAiMissionsMissionIdKnowledgeBasesKnowledgeBaseIdRoute,
  getAiMissionsMissionIdKnowledgeBasesRoute,
  getAiMissionsMissionIdMcpServersMcpServerIdRoute,
  getAiMissionsMissionIdMcpServersRoute,
  getAiMissionsMissionIdRoute,
  getAiMissionsMissionIdRunsRoute,
  getAiMissionsMissionIdRunsRunIdEventsEventIdRoute,
  getAiMissionsMissionIdRunsRunIdEventsRoute,
  getAiMissionsMissionIdRunsRunIdPlanRoute,
  getAiMissionsMissionIdRunsRunIdPlanStepsStepIdRoute,
  getAiMissionsMissionIdRunsRunIdRoute,
  getAiMissionsMissionIdRunsRunIdTelnyxAgentsRoute,
  getAiMissionsMissionIdToolsRoute,
  getAiMissionsMissionIdToolsToolIdRoute,
  getAiMissionsRoute,
  getAiMissionsRunsRoute,
  getAiModelsRoute,
  getAiOpenaiEmbeddingsModelsRoute,
  getAiOpenaiModelsRoute,
  getAiTestsSchedulesV1CronJobsIdRoute,
  getAiTestsSchedulesV1CronJobsRoute,
  getAiTestsTestFrameworkV1AiagentsIdRoute,
  getAiTestsTestFrameworkV1AiagentsRoute,
  getAiTestsTestFrameworkV1MetricsGenerateMetricsProgressRoute,
  getAiTestsTestFrameworkV1MetricsIdRoute,
  getAiTestsTestFrameworkV1MetricsRoute,
  getAiTestsTestFrameworkV1PersonalitiesRoute,
  getAiTestsTestFrameworkV1ResultsIdRoute,
  getAiTestsTestFrameworkV1ResultsRoute,
  getAiTestsTestFrameworkV1ScenariosExportScenariosRoute,
  getAiTestsTestFrameworkV1ScenariosGenerateProgressRoute,
  getAiTestsTestFrameworkV1ScenariosIdRoute,
  getAiTestsTestFrameworkV1ScenariosRoute,
  getAiTestsTestFrameworkV1ScenariosScenarioAgentProgressRoute,
  getAiToolsRoute,
  getAiToolsToolIdRoute,
  getAlphanumericSenderIdsIdRoute,
  getAlphanumericSenderIdsRoute,
  getArtifactDownloadsArtifactIdRoute,
  getAuditEventsRoute,
  getAuthenticationProvidersIdRoute,
  getAuthenticationProvidersRoute,
  getAvailablePhoneNumberBlocksRoute,
  getAvailablePhoneNumbersRoute,
  getBalanceRoute,
  getBillingGroupsIdRoute,
  getBillingGroupsRoute,
  getBotSessionsRoute,
  getBrowserSessionsIdActionsActionIdRoute,
  getBrowserSessionsIdArtifactsArtifactIdRoute,
  getBrowserSessionsIdRoute,
  getBrowserSessionsRoute,
  getBulkSimCardActionsIdRoute,
  getBulkSimCardActionsRoute,
  getBundlePricingBillingBundlesBundleIdRoute,
  getBundlePricingBillingBundlesRoute,
  getBundlePricingUserBundlesRoute,
  getBundlePricingUserBundlesUnusedRoute,
  getBundlePricingUserBundlesUserBundleIdResourcesRoute,
  getBundlePricingUserBundlesUserBundleIdRoute,
  getCalendarConnectionsIdMeetingsRoute,
  getCalendarConnectionsIdRoute,
  getCalendarConnectionsRoute,
  getCallControlApplicationsIdRoute,
  getCallControlApplicationsRoute,
  getCallEventsRoute,
  getCallReasonsRoute,
  getCallsCallControlIdRoute,
  getChannelZonesRoute,
  getChargesBreakdownRoute,
  getChargesSummaryRoute,
  getCommentsIdRoute,
  getCommentsRoute,
  getComputeActorsIdRoute,
  getComputeFuncsIdLogsExportRoute,
  getComputeFuncsIdLogsRoute,
  getComputeFuncsIdMetricAggregatesRoute,
  getComputeFuncsIdRevisionsRoute,
  getComputeFuncsIdShipInspectionRoute,
  getComputeFuncsRoute,
  getConferencesConferenceIdParticipantsRoute,
  getConferencesIdParticipantsParticipantIdRoute,
  getConferencesIdRoute,
  getConferencesRoute,
  getConnectionsConnectionIdActiveCallsRoute,
  getConnectionsCountRoute,
  getConnectionsIdRoute,
  getConnectionsRoute,
  getCountryCoverageCountriesCountryCodeRoute,
  getCountryCoverageRoute,
  getCredentialConnectionsIdRoute,
  getCredentialConnectionsRoute,
  getCustomerServiceRecordsCustomerServiceRecordIdRoute,
  getCustomerServiceRecordsRoute,
  getCustomStorageCredentialsConnectionIdRoute,
  getDetailRecordsRoute,
  getDialMetricsRoute,
  getDialogflowConnectionsConnectionIdRoute,
  getDirDirIdBpoAuthorizationsRoute,
  getDirDirIdCommentsRoute,
  getDirDirIdInfringementClaimsRoute,
  getDirDirIdPhoneNumberBatchesBatchIdRoute,
  getDirDirIdPhoneNumberBatchesRoute,
  getDirDirIdPhoneNumbersRoute,
  getDirDirIdReferencesRoute,
  getDirDirIdRoute,
  getDirDirIdVerifyEmailRoute,
  getDirDocumentTypesRoute,
  getDirRoute,
  getDocumentLinksRoute,
  getDocumentsIdDownloadLinkRoute,
  getDocumentsIdDownloadRoute,
  getDocumentsIdRoute,
  getDocumentsRoute,
  getDynamicEmergencyAddressesIdRoute,
  getDynamicEmergencyAddressesRoute,
  getDynamicEmergencyEndpointsIdRoute,
  getDynamicEmergencyEndpointsRoute,
  getEmailBlocksExportRoute,
  getEmailBlocksIdEventsRoute,
  getEmailBlocksIdRoute,
  getEmailBlocksImportIdRoute,
  getEmailBlocksRoute,
  getEmailDedicatedIpsIdRoute,
  getEmailDedicatedIpsRoute,
  getEmailDomainsDomainIdDnsRecordsRoute,
  getEmailDomainsDomainIdWebhooksIdRoute,
  getEmailDomainsDomainIdWebhooksRoute,
  getEmailDomainsIdHealthRoute,
  getEmailDomainsIdRoute,
  getEmailDomainsRoute,
  getEmailEventsRoute,
  getEmailEventsStatsRoute,
  getEmailInboxesIdRoute,
  getEmailInboxesInboxIdDraftsDraftIdRoute,
  getEmailInboxesInboxIdDraftsRoute,
  getEmailInboxesInboxIdFiltersRoute,
  getEmailInboxesInboxIdMessagesRoute,
  getEmailInboxesInboxIdThreadsRoute,
  getEmailInboxesInboxIdThreadsThreadIdRoute,
  getEmailInboxesRoute,
  getEmailIpPoolsIdRoute,
  getEmailIpPoolsRoute,
  getEmailMessagesEmailIdEventsRoute,
  getEmailMessagesEmailIdRecipientsRecipientIdRoute,
  getEmailMessagesEmailIdRecipientsRoute,
  getEmailMessagesIdRoute,
  getEmailMessagesRoute,
  getEmailTemplatesIdRoute,
  getEmailTemplatesRoute,
  getEmailThreadsRoute,
  getEmailThreadsThreadIdRoute,
  getEmailUnsubscribeGroupsIdRoute,
  getEmailUnsubscribeGroupsIdSuppressionsRoute,
  getEmailUnsubscribeGroupsRoute,
  getEmailValidationsBatchIdRoute,
  getEnterprisesEnterpriseIdDirRoute,
  getEnterprisesEnterpriseIdReputationExternalVerificationRoute,
  getEnterprisesEnterpriseIdReputationNumbersPhoneNumberOwnershipRoute,
  getEnterprisesEnterpriseIdReputationNumbersPhoneNumberRoute,
  getEnterprisesEnterpriseIdReputationNumbersRoute,
  getEnterprisesEnterpriseIdReputationRemediationRemediationIdRoute,
  getEnterprisesEnterpriseIdReputationRemediationRoute,
  getEnterprisesEnterpriseIdReputationRoute,
  getEnterprisesEnterpriseIdRoute,
  getEnterprisesRoute,
  getExternalConnectionsIdCivicAddressesAddressIdRoute,
  getExternalConnectionsIdCivicAddressesRoute,
  getExternalConnectionsIdPhoneNumbersPhoneNumberIdRoute,
  getExternalConnectionsIdPhoneNumbersRoute,
  getExternalConnectionsIdReleasesReleaseIdRoute,
  getExternalConnectionsIdReleasesRoute,
  getExternalConnectionsIdRoute,
  getExternalConnectionsIdUploadsRoute,
  getExternalConnectionsIdUploadsStatusRoute,
  getExternalConnectionsIdUploadsTicketIdRoute,
  getExternalConnectionsLogMessagesIdRoute,
  getExternalConnectionsLogMessagesRoute,
  getExternalConnectionsRoute,
  getExternalRequirementsRegulatoryRequirementIdSubNumberOrdersSubNumberOrderIdRoute,
  getFaxApplicationsIdRoute,
  getFaxApplicationsRoute,
  getFaxesIdRoute,
  getFaxesRoute,
  getFqdnConnectionsFqdnConnectionIdFqdnAuthenticationRoute,
  getFqdnConnectionsIdRoute,
  getFqdnConnectionsRoute,
  getFqdnsIdRoute,
  getFqdnsRoute,
  getGlobalIpAllowedPortsRoute,
  getGlobalIpAssignmentHealthRoute,
  getGlobalIpAssignmentsIdRoute,
  getGlobalIpAssignmentsRoute,
  getGlobalIpAssignmentsUsage2Route,
  getGlobalIpAssignmentsUsageRoute,
  getGlobalIpHealthChecksIdRoute,
  getGlobalIpHealthChecksRoute,
  getGlobalIpHealthCheckTypesRoute,
  getGlobalIpLatencyRoute,
  getGlobalIpProtocolsRoute,
  getGlobalIpsIdRoute,
  getGlobalIpsRoute,
  getGlobalIpUsageRoute,
  getInboundChannelsRoute,
  getInexplicitNumberOrdersIdRoute,
  getInexplicitNumberOrdersRoute,
  getInfringementClaimsClaimIdRoute,
  getIntegrationSecretsRoute,
  getInventoryCoverageRoute,
  getInvoicesIdRoute,
  getInvoicesRoute,
  getIpConnectionsIdRoute,
  getIpConnectionsRoute,
  getIpsIdRoute,
  getIpsRoute,
  getLedgerBillingGroupReportsIdRoute,
  getLegacyReportingBatchDetailRecordsMessaging2Route,
  getLegacyReportingBatchDetailRecordsMessagingId2Route,
  getLegacyReportingBatchDetailRecordsMessagingIdRoute,
  getLegacyReportingBatchDetailRecordsMessagingRoute,
  getLegacyReportingBatchDetailRecordsSpeechToText2Route,
  getLegacyReportingBatchDetailRecordsSpeechToTextId2Route,
  getLegacyReportingBatchDetailRecordsSpeechToTextIdRoute,
  getLegacyReportingBatchDetailRecordsSpeechToTextRoute,
  getLegacyReportingBatchDetailRecordsVoice2Route,
  getLegacyReportingBatchDetailRecordsVoiceFields2Route,
  getLegacyReportingBatchDetailRecordsVoiceFieldsRoute,
  getLegacyReportingBatchDetailRecordsVoiceId2Route,
  getLegacyReportingBatchDetailRecordsVoiceIdRoute,
  getLegacyReportingBatchDetailRecordsVoiceRoute,
  getLegacyReportingUsageReportsMessaging2Route,
  getLegacyReportingUsageReportsMessagingId2Route,
  getLegacyReportingUsageReportsMessagingIdRoute,
  getLegacyReportingUsageReportsMessagingRoute,
  getLegacyReportingUsageReportsNumberLookup2Route,
  getLegacyReportingUsageReportsNumberLookupId2Route,
  getLegacyReportingUsageReportsNumberLookupIdRoute,
  getLegacyReportingUsageReportsNumberLookupRoute,
  getLegacyReportingUsageReportsSpeechToText2Route,
  getLegacyReportingUsageReportsSpeechToTextRoute,
  getLegacyReportingUsageReportsVoice2Route,
  getLegacyReportingUsageReportsVoiceId2Route,
  getLegacyReportingUsageReportsVoiceIdRoute,
  getLegacyReportingUsageReportsVoiceRoute,
  getListChannelZoneIdRoute,
  getListRoute,
  getLlmTokenGatewaySpendEventsRoute,
  getLlmTokenGatewaySpendSummaryRoute,
  getLlmTokenGatewayTokenGroupsIdRoute,
  getLlmTokenGatewayTokenGroupsRoute,
  getLlmTokenGatewayTokenKeysIdRoute,
  getLlmTokenGatewayTokenKeysRoute,
  getLlmTokenGatewayUsageExportRoute,
  getLlmTokenGatewayUsageSummaryRoute,
  getManagedAccountsAllocatableGlobalOutboundChannelsRoute,
  getManagedAccountsIdRoute,
  getManagedAccountsRoute,
  getMediaMediaNameDownloadRoute,
  getMediaMediaNameRoute,
  getMediaRoute,
  getMeetingBotCalendarOauthCallbackRoute,
  getMeetingSessionsIdArtifactsArtifactIdRoute,
  getMeetingSessionsIdArtifactsRoute,
  getMeetingSessionsIdEventsRoute,
  getMeetingSessionsIdRecordingsRoute,
  getMeetingSessionsIdRoute,
  getMeetingSessionsIdTranscriptRoute,
  getMeetingSessionsRoute,
  getMessagesGroupMessageIdRoute,
  getMessagesIdRoute,
  getMessagesRcsDeeplinksAgentId2Route,
  getMessagesRcsDeeplinksAgentIdRoute,
  getMessagingHostedNumberOrdersIdRoute,
  getMessagingHostedNumberOrdersRoute,
  getMessagingHostedNumbers2Route,
  getMessagingHostedNumbersIdRoute,
  getMessagingHostedNumbersRoute,
  getMessagingNumbersBulkUpdatesOrderId2Route,
  getMessagingNumbersBulkUpdatesOrderIdRoute,
  getMessagingOptoutsRoute,
  getMessagingProfileMetricsRoute,
  getMessagingProfilesIdAlphanumericSenderIds2Route,
  getMessagingProfilesIdAlphanumericSenderIdsRoute,
  getMessagingProfilesIdMetrics2Route,
  getMessagingProfilesIdMetricsRoute,
  getMessagingProfilesIdPhoneNumbersRoute,
  getMessagingProfilesIdRoute,
  getMessagingProfilesIdShortCodesRoute,
  getMessagingProfilesProfileIdAutorespConfigsAutorespCfgIdRoute,
  getMessagingProfilesProfileIdAutorespConfigsRoute,
  getMessagingProfilesRoute,
  getMessagingRcsAgentsIdRoute,
  getMessagingRcsAgentsRoute,
  getMessagingRcsCapabilitiesAgentIdPhoneNumberRoute,
  getMessagingTollfreeVerificationRequestsIdRoute,
  getMessagingTollfreeVerificationRequestsIdStatusHistory2Route,
  getMessagingTollfreeVerificationRequestsIdStatusHistoryRoute,
  getMessagingTollfreeVerificationRequestsRoute,
  getMessagingUrlDomainsRoute,
  getMobileNetworkOperatorsRoute,
  getMobilePhoneNumbersIdMessagingRoute,
  getMobilePhoneNumbersIdRoute,
  getMobilePhoneNumbersMessagingRoute,
  getMobilePhoneNumbersRoute,
  getMobilePushCredentialsPushCredentialIdRoute,
  getMobilePushCredentialsRoute,
  getMobileVoiceConnectionsIdRoute,
  getMobileVoiceConnectionsRoute,
  getNetworkCoverageRoute,
  getNetworkRoutesIdRoute,
  getNetworkRoutesRoute,
  getNetworksIdDefaultGatewayRoute,
  getNetworksIdNetworkInterfacesRoute,
  getNetworksIdRoute,
  getNetworksRoute,
  getNoiseSuppressionEnginesRoute,
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
  getNumberOrderPhoneNumbersNumberOrderPhoneNumberIdRoute,
  getNumberOrderPhoneNumbersRoute,
  getNumberOrdersNumberOrderIdRoute,
  getNumberOrdersRoute,
  getNumberReservationsNumberReservationIdRoute,
  getNumberReservationsRoute,
  getOauthAuthorizeRoute,
  getOauthClients2Route,
  getOauthClientsId2Route,
  getOauthClientsIdRoute,
  getOauthClientsRoute,
  getOauthConsentConsentTokenRoute,
  getOauthGrants2Route,
  getOauthGrantsId2Route,
  getOauthGrantsIdRoute,
  getOauthGrantsRoute,
  getOauthJwksRoute,
  getOrganizationsUsersIdRoute,
  getOrganizationsUsersRoute,
  getOrganizationsUsersUsersGroupsReportRoute,
  getOtaUpdatesIdRoute,
  getOtaUpdatesRoute,
  getOutboundVoiceProfilesIdRoute,
  getOutboundVoiceProfilesRoute,
  getPayConnectorsNameRoute,
  getPayConnectorsRoute,
  getPaymentAutoRechargePrefsRoute,
  getPhoneNumberBlocksJobsIdRoute,
  getPhoneNumberBlocksJobsRoute,
  getPhoneNumbersCsvDownloadsIdRoute,
  getPhoneNumbersCsvDownloadsRoute,
  getPhoneNumbersIdMessagingRoute,
  getPhoneNumbersIdRoute,
  getPhoneNumbersIdVoiceRoute,
  getPhoneNumbersJobsIdRoute,
  getPhoneNumbersJobsRoute,
  getPhoneNumbersMessagingRoute,
  getPhoneNumbersPhoneNumberIdVoicemailRoute,
  getPhoneNumbersRegulatoryRequirements2Route,
  getPhoneNumbersRegulatoryRequirementsRoute,
  getPhoneNumbersRoute,
  getPhoneNumbersSlimRoute,
  getPhoneNumbersVoiceRoute,
  getPortingEventsIdRoute,
  getPortingEventsRoute,
  getPortingLoaConfigurationsIdPreviewRoute,
  getPortingLoaConfigurationsIdRoute,
  getPortingLoaConfigurationsRoute,
  getPortingOrdersExceptionTypesRoute,
  getPortingOrdersIdActivationJobsActivationJobIdRoute,
  getPortingOrdersIdActivationJobsRoute,
  getPortingOrdersIdAdditionalDocumentsRoute,
  getPortingOrdersIdAllowedFocWindowsRoute,
  getPortingOrdersIdCommentsRoute,
  getPortingOrdersIdLoaTemplateRoute,
  getPortingOrdersIdRequirementsRoute,
  getPortingOrdersIdRoute,
  getPortingOrdersIdSubRequestRoute,
  getPortingOrdersIdVerificationCodesRoute,
  getPortingOrdersPhoneNumberConfigurationsRoute,
  getPortingOrdersPortingOrderIdActionRequirementsRoute,
  getPortingOrdersPortingOrderIdAssociatedPhoneNumbersRoute,
  getPortingOrdersPortingOrderIdPhoneNumberBlocksRoute,
  getPortingOrdersPortingOrderIdPhoneNumberExtensionsRoute,
  getPortingOrdersRoute,
  getPortingPhoneNumbersRoute,
  getPortingReportsIdRoute,
  getPortingReportsRoute,
  getPortingUkCarriersRoute,
  getPortoutsEventsIdRoute,
  getPortoutsEventsRoute,
  getPortoutsIdCommentsRoute,
  getPortoutsIdRoute,
  getPortoutsIdSupportingDocumentsRoute,
  getPortoutsRejectionsPortoutIdRoute,
  getPortoutsReportsIdRoute,
  getPortoutsReportsRoute,
  getPortoutsRoute,
  getPricingProductsRoute,
  getPricingProductsSlugRoute,
  getPrivateWirelessGatewaysIdRoute,
  getPrivateWirelessGatewaysRoute,
  getPronunciationDictsIdRoute,
  getPronunciationDictsRoute,
  getPublicInternetGatewaysIdRoute,
  getPublicInternetGatewaysRoute,
  getQueuesQueueNameCallsCallControlIdRoute,
  getQueuesQueueNameCallsRoute,
  getQueuesQueueNameRoute,
  getQueuesRoute,
  getRcsAgentsIdCarrierApprovalsRoute,
  getRcsAgentsIdRoute,
  getRcsAgentsIdTestDevicesRoute,
  getRcsAgentsRoute,
  getRcsBrandsIdRoute,
  getRcsBrandsRoute,
  getRecordingsRecordingIdRoute,
  getRecordingsRoute,
  getRecordingTranscriptionsRecordingTranscriptionIdRoute,
  getRecordingTranscriptionsRoute,
  getRegionsRoute,
  getRegulatoryRequirementsRoute,
  getReportsCdrUsageReportsSyncRoute,
  getReportsMdrsRoute,
  getReportsMdrUsageReportsIdRoute,
  getReportsMdrUsageReportsRoute,
  getReportsMdrUsageReportsSyncRoute,
  getReportsWdrsRoute,
  getReputationNumbersPhoneNumberRoute,
  getReputationNumbersRoute,
  getRequirementGroupsIdRoute,
  getRequirementGroupsRoute,
  getRequirementsIdRoute,
  getRequirementsRoute,
  getRequirementTypesIdRoute,
  getRequirementTypesRoute,
  getRoomCompositionsRoomCompositionIdRoute,
  getRoomCompositionsRoute,
  getRoomParticipantsRoomParticipantIdRoute,
  getRoomParticipantsRoute,
  getRoomRecordingsRoomRecordingIdRoute,
  getRoomRecordingsRoute,
  getRoomSessionsRoomSessionIdParticipantsRoute,
  getRoomSessionsRoomSessionIdRoute,
  getRoomSessionsRoute,
  getRoomsRoomIdRoute,
  getRoomsRoomIdSessionsRoute,
  getRoomsRoute,
  getSessionAnalysisMetadataRecordTypeRoute,
  getSessionAnalysisMetadataRoute,
  getSessionAnalysisRecordTypeEventIdRoute,
  getSetiBlackBoxTestResultsRoute,
  getShortCodesIdRoute,
  getShortCodesRoute,
  getSimCardActionsIdRoute,
  getSimCardActionsRoute,
  getSimCardDataUsageNotificationsIdRoute,
  getSimCardDataUsageNotificationsRoute,
  getSimCardGroupActionsIdRoute,
  getSimCardGroupActionsRoute,
  getSimCardGroupsIdRoute,
  getSimCardGroupsRoute,
  getSimCardOrdersIdRoute,
  getSimCardOrdersRoute,
  getSimCardsIdActivationCodeRoute,
  getSimCardsIdDeviceDetailsRoute,
  getSimCardsIdPublicIpRoute,
  getSimCardsIdRoute,
  getSimCardsIdWirelessConnectivityLogsRoute,
  getSimCardsRoute,
  getSiprecConnectorsConnectorNameRoute,
  getSipRegistrationStatusRoute,
  getSpeechToTextProvidersRoute,
  getSpeechToTextTranscriptionRoute,
  getSpendLimitsRoute,
  getStorageBucketsBucketNameSslCertificateRoute,
  getStorageBucketsBucketNameUsageApiRoute,
  getStorageBucketsBucketNameUsageStorageRoute,
  getStorageCloudfsIdRoute,
  getStorageCloudfsRoute,
  getStorageKvsIdKeysKeyRoute,
  getStorageKvsIdKeysRoute,
  getStorageKvsIdRoute,
  getStorageKvsRoute,
  getStorageMigrationsIdRoute,
  getStorageMigrationSourceCoverageRoute,
  getStorageMigrationSourcesIdRoute,
  getStorageMigrationSourcesRoute,
  getStorageMigrationsRoute,
  getStorageSqldbsIdRoute,
  getStorageSqldbsRoute,
  getSubNumberOrdersReportReportId2Route,
  getSubNumberOrdersReportReportIdDownload2Route,
  getSubNumberOrdersReportReportIdDownloadRoute,
  getSubNumberOrdersReportReportIdRoute,
  getSubNumberOrdersRoute,
  getSubNumberOrdersSubNumberOrderIdRoute,
  getTailscaleSubnetRoutersIdRoute,
  getTailscaleSubnetRoutersRoute,
  getTelephonyCredentialsIdRoute,
  getTelephonyCredentialsIdTokenMaterialRoute,
  getTelephonyCredentialsRoute,
  getTermsOfServiceAgreementsAgreementIdRoute,
  getTermsOfServiceAgreementsRoute,
  getTermsOfServiceInfoRoute,
  getTermsOfServiceStatusRoute,
  getTexmlAccountsAccountSidCallsCallSidRecordingsJsonRoute,
  getTexmlAccountsAccountSidCallsCallSidRoute,
  getTexmlAccountsAccountSidCallsRoute,
  getTexmlAccountsAccountSidConferencesConferenceSidParticipantsCallSidOrParticipantLabelRoute,
  getTexmlAccountsAccountSidConferencesConferenceSidParticipantsRoute,
  getTexmlAccountsAccountSidConferencesConferenceSidRecordingsJsonRoute,
  getTexmlAccountsAccountSidConferencesConferenceSidRecordingsRoute,
  getTexmlAccountsAccountSidConferencesConferenceSidRoute,
  getTexmlAccountsAccountSidConferencesRoute,
  getTexmlAccountsAccountSidQueuesQueueSidRoute,
  getTexmlAccountsAccountSidQueuesRoute,
  getTexmlAccountsAccountSidRecordingsJsonRoute,
  getTexmlAccountsAccountSidRecordingsRecordingSidJsonRoute,
  getTexmlAccountsAccountSidTranscriptionsJsonRoute,
  getTexmlAccountsAccountSidTranscriptionsRecordingTranscriptionSidJsonRoute,
  getTexmlApplicationsIdRoute,
  getTexmlApplicationsRoute,
  getTextToSpeechSpeechRoute,
  getTextToSpeechVoicesRoute,
  getTrafficPolicyProfiles2Route,
  getTrafficPolicyProfilesId2Route,
  getTrafficPolicyProfilesIdRoute,
  getTrafficPolicyProfilesRoute,
  getTrafficPolicyProfilesServices2Route,
  getTrafficPolicyProfilesServicesRoute,
  getTunnelsIdRoute,
  getTunnelsRoute,
  getUacConnectionsIdRoute,
  getUacConnectionsRoute,
  getUsageReportsOptionsRoute,
  getUsageReportsRoute,
  getUserAddresses2Route,
  getUserAddressesId2Route,
  getUserAddressesIdRoute,
  getUserAddressesRoute,
  getUserProfileRoute,
  getUserTagsRoute,
  getV2WhatsappBusinessAccountsIdPhoneNumbersRoute,
  getV2WhatsappBusinessAccountsIdRoute,
  getV2WhatsappBusinessAccountsIdSettingsRoute,
  getV2WhatsappBusinessAccountsRoute,
  getV2WhatsappMessageTemplatesIdRoute,
  getV2WhatsappMessageTemplatesRoute,
  getV2WhatsappPhoneNumbersPhoneNumberCallingSettingsRoute,
  getV2WhatsappPhoneNumbersPhoneNumberConversationalComponentsRoute,
  getV2WhatsappPhoneNumbersPhoneNumberConversationWindowRoute,
  getV2WhatsappPhoneNumbersPhoneNumberProfilePhotoRoute,
  getV2WhatsappPhoneNumbersPhoneNumberProfileRoute,
  getV2WhatsappPhoneNumbersPhoneNumberRoute,
  getV2WhatsappPhoneNumbersRoute,
  getV2WhatsappUserDataRoute,
  getVerificationsByPhoneNumberPhoneNumberRoute,
  getVerificationsVerificationIdRoute,
  getVerifiedNumbersPhoneNumberRoute,
  getVerifiedNumbersRoute,
  getVerifyProfilesRoute,
  getVerifyProfilesTemplatesRoute,
  getVerifyProfilesVerifyProfileIdRoute,
  getVirtualCrossConnectsCoverage2Route,
  getVirtualCrossConnectsCoverageRoute,
  getVirtualCrossConnectsIdRoute,
  getVirtualCrossConnectsRoute,
  getVoiceClonesIdSampleRoute,
  getVoiceClonesRoute,
  getVoiceDesignsIdRoute,
  getVoiceDesignsIdSampleRoute,
  getVoiceDesignsRoute,
  getVoiceSdkCallReportsCallIdRoute,
  getVoiceSdkCallReportsRoute,
  getWebhookDeliveriesIdRoute,
  getWebhookDeliveriesRoute,
  getWebSearchResearchTaskIdRoute,
  getWellKnownOauthAuthorizationServerRoute,
  getWellKnownOauthProtectedResourceRoute,
  getWhatsappBusinessAccountsIdPhoneNumbersRoute,
  getWhatsappBusinessAccountsIdRoute,
  getWhatsappBusinessAccountsIdSettingsRoute,
  getWhatsappBusinessAccountsRoute,
  getWhatsappHostedSignupsIdRoute,
  getWhatsappHostedSignupsRoute,
  getWhatsappMessageTemplatesIdRoute,
  getWhatsappMessageTemplatesRoute,
  getWhatsappPhoneNumbersIdCallingRoutingRoute,
  getWhatsappPhoneNumbersPhoneNumberCallingSettingsRoute,
  getWhatsappPhoneNumbersPhoneNumberConversationalComponentsRoute,
  getWhatsappPhoneNumbersPhoneNumberConversationWindowRoute,
  getWhatsappPhoneNumbersPhoneNumberProfilePhotoRoute,
  getWhatsappPhoneNumbersPhoneNumberProfileRoute,
  getWhatsappPhoneNumbersPhoneNumberRoute,
  getWhatsappPhoneNumbersRoute,
  getWhatsappSignupIdStatusRoute,
  getWhatsappSignupRoute,
  getWireguardInterfacesIdRoute,
  getWireguardInterfacesRoute,
  getWireguardPeersIdConfigRoute,
  getWireguardPeersIdRoute,
  getWireguardPeersRoute,
  getWirelessBlocklistsIdRoute,
  getWirelessBlocklistsRoute,
  getWirelessBlocklistValuesRoute,
  getWirelessDetailRecordsReports2Route,
  getWirelessDetailRecordsReportsId2Route,
  getWirelessDetailRecordsReportsIdRoute,
  getWirelessDetailRecordsReportsRoute,
  getWirelessRegionsRoute,
  getX402CreditAccountPaymentsIdRoute,
  getX402CreditAccountPaymentsRoute,
  patch10dlcPartnerCampaignsCampaignIdRoute,
  patchAdvancedOrdersAdvancedOrderIdRequirementGroupRoute,
  patchAgentGatewaysInstanceIdApisApiIdRoute,
  patchAgentGatewaysInstanceIdGuardrailsGuardrailIdRoute,
  patchAgentGatewaysInstanceIdKeysKeyIdRoute,
  patchAgentGatewaysInstanceIdMcpServersServerIdRoute,
  patchAgentGatewaysInstanceIdPoliciesNameRoute,
  patchAgentGatewaysInstanceIdTeamsTeamIdRoute,
  patchAiAvatarsAvatarIdRoute,
  patchAiCollectionsUuidRoute,
  patchAiCollectionsUuidSettingsRoute,
  patchAiMemoryNamespacesNamespaceSettingsRoute,
  patchAiMissionsMissionIdRunsRunIdPlanStepsStepIdRoute,
  patchAiMissionsMissionIdRunsRunIdRoute,
  patchAiTestsSchedulesV1CronJobsIdRoute,
  patchAiTestsTestFrameworkV1MetricsIdRoute,
  patchAiTestsTestFrameworkV1ScenariosIdRoute,
  patchAiToolsToolIdRoute,
  patchAuthenticationProvidersIdRoute,
  patchBillingGroupsIdRoute,
  patchCalendarConnectionsIdMeetingsMeetingIdRoute,
  patchCalendarConnectionsIdRoute,
  patchCallControlApplicationsIdRoute,
  patchCommentsIdReadRoute,
  patchConferencesIdParticipantsParticipantIdRoute,
  patchCredentialConnectionsIdRoute,
  patchDirDirIdReferencesRefTypeSlotRoute,
  patchDirDirIdRoute,
  patchDocumentsIdRoute,
  patchEmailDedicatedIpsIdRoute,
  patchEmailDomainsDomainIdWebhooksIdRoute,
  patchEmailDomainsIdRoute,
  patchEmailInboxesInboxIdDraftsDraftIdRoute,
  patchEmailInboxesInboxIdMessagesMessageIdRoute,
  patchEmailIpPoolsIdRoute,
  patchEmailMessagesEmailIdScheduleRoute,
  patchEmailTemplatesIdRoute,
  patchEmailUnsubscribeGroupsIdRoute,
  patchEnterprisesEnterpriseIdReputationFrequencyRoute,
  patchEnterprisesEnterpriseIdReputationLoaRoute,
  patchEnterprisesEnterpriseIdReputationWebhookRoute,
  patchExternalConnectionsIdLocationsLocationIdRoute,
  patchExternalConnectionsIdPhoneNumbersPhoneNumberIdRoute,
  patchExternalConnectionsIdRoute,
  patchFaxApplicationsIdRoute,
  patchFqdnConnectionsFqdnConnectionIdFqdnAuthenticationRoute,
  patchFqdnConnectionsIdRoute,
  patchFqdnsIdRoute,
  patchGlobalIpAssignmentsIdRoute,
  patchInboundChannelsRoute,
  patchIpConnectionsIdRoute,
  patchIpsIdRoute,
  patchLlmTokenGatewayTokenGroupsIdRoute,
  patchLlmTokenGatewayTokenKeysIdRoute,
  patchManagedAccountsIdRoute,
  patchManagedAccountsIdUpdateGlobalChannelLimitRoute,
  patchMeetingSessionsIdRoute,
  patchMessagingHostedNumbersIdRoute,
  patchMessagingProfilesIdRoute,
  patchMessagingRcsAgentsIdRoute,
  patchMessagingTollfreeVerificationRequestsIdRoute,
  patchMobilePhoneNumbersIdRoute,
  patchMobileVoiceConnectionsIdRoute,
  patchNetworksIdRoute,
  patchNotificationChannelsIdRoute,
  patchNotificationProfilesIdRoute,
  patchNumberOrderPhoneNumbersNumberOrderPhoneNumberIdRoute,
  patchNumberOrdersNumberOrderIdRoute,
  patchOutboundVoiceProfilesIdRoute,
  patchPayConnectorsNameRoute,
  patchPaymentAutoRechargePrefsRoute,
  patchPhoneNumbersIdActionsBundleStatusChangeRoute,
  patchPhoneNumbersIdMessagingRoute,
  patchPhoneNumbersIdRoute,
  patchPhoneNumbersIdVoiceRoute,
  patchPhoneNumbersPhoneNumberIdVoicemailRoute,
  patchPortingLoaConfigurationsIdRoute,
  patchPortingOrdersIdActivationJobsActivationJobIdRoute,
  patchPortingOrdersIdRoute,
  patchPortoutsIdStatusRoute,
  patchPronunciationDictsIdRoute,
  patchQueuesQueueNameCallsCallControlIdRoute,
  patchRcsAgentsIdRoute,
  patchRcsBrandsIdRoute,
  patchRequirementGroupsIdRoute,
  patchRoomsRoomIdRoute,
  patchShortCodesIdRoute,
  patchSimCardDataUsageNotificationsIdRoute,
  patchSimCardGroupsIdRoute,
  patchSimCardsIdRoute,
  patchSpendLimitsProductRoute,
  patchStorageCloudfsIdRoute,
  patchSubNumberOrdersSubNumberOrderIdCancelRoute,
  patchSubNumberOrdersSubNumberOrderIdRoute,
  patchTailscaleSubnetRoutersIdRoute,
  patchTelephonyCredentialsIdRoute,
  patchTexmlApplicationsIdRoute,
  patchTrafficPolicyProfilesId2Route,
  patchTrafficPolicyProfilesIdRoute,
  patchUacConnectionsIdRoute,
  patchUserProfileRoute,
  patchV2WhatsappBusinessAccountsIdSettingsRoute,
  patchV2WhatsappMessageTemplatesIdRoute,
  patchV2WhatsappPhoneNumbersPhoneNumberCallingSettingsRoute,
  patchV2WhatsappPhoneNumbersPhoneNumberConversationalComponentsRoute,
  patchV2WhatsappPhoneNumbersPhoneNumberProfileRoute,
  patchV2WhatsappUserDataRoute,
  patchVerifyProfilesTemplatesTemplateIdRoute,
  patchVerifyProfilesVerifyProfileIdRoute,
  patchVirtualCrossConnectsIdRoute,
  patchVoiceClonesIdRoute,
  patchVoiceDesignsIdRoute,
  patchWhatsappBusinessAccountsIdSettingsRoute,
  patchWhatsappMessageTemplatesIdRoute,
  patchWhatsappPhoneNumbersIdCallingRoutingRoute,
  patchWhatsappPhoneNumbersPhoneNumberCallingSettingsRoute,
  patchWhatsappPhoneNumbersPhoneNumberConversationalComponentsRoute,
  patchWhatsappPhoneNumbersPhoneNumberProfileRoute,
  patchWireguardPeersIdRoute,
  patchWirelessBlocklistsIdRoute,
  post10dlcBrandBrandId2faEmailRoute,
  post10dlcBrandBrandIdExternalVettingRoute,
  post10dlcBrandBrandIdSmsOtpRoute,
  post10dlcBrandRoute,
  post10dlcCampaignAcceptSharingCampaignIdRoute,
  post10dlcCampaignBuilderRoute,
  post10dlcCampaignCampaignIdAppealRoute,
  post10dlcPhoneNumberAssignmentByProfileRoute,
  post10dlcPhoneNumberCampaignsRoute,
  postAccessIpAddressRoute,
  postAccessIpRangesRoute,
  postActionsPurchaseEsimsRoute,
  postActionsRegisterSimCardsRoute,
  postAddressesActionsValidateRoute,
  postAddressesIdActionsAcceptSuggestionsRoute,
  postAddressesRoute,
  postAdvancedOrdersRoute,
  postAgentGatewaysInstanceIdApisRoute,
  postAgentGatewaysInstanceIdGuardrailsRoute,
  postAgentGatewaysInstanceIdKeysRoute,
  postAgentGatewaysInstanceIdMcpServersRoute,
  postAgentGatewaysInstanceIdPoliciesRoute,
  postAgentGatewaysInstanceIdPolicyAttachmentsRoute,
  postAgentGatewaysInstanceIdTeamsRoute,
  postAgentGatewaysRoute,
  postAiAnthropicV1MessagesRoute,
  postAiAssistantsAssistantIdCanaryDeploysRoute,
  postAiAssistantsAssistantIdChatRoute,
  postAiAssistantsAssistantIdChatSmsRoute,
  postAiAssistantsAssistantIdChatWhatsappRoute,
  postAiAssistantsAssistantIdCloneRoute,
  postAiAssistantsAssistantIdInstructionsEnhanceRoute,
  postAiAssistantsAssistantIdRestoreRoute,
  postAiAssistantsAssistantIdRoute,
  postAiAssistantsAssistantIdScheduledEventsRoute,
  postAiAssistantsAssistantIdTagsRoute,
  postAiAssistantsAssistantIdToolsToolIdTestRoute,
  postAiAssistantsAssistantIdVersionsVersionIdPromoteRoute,
  postAiAssistantsAssistantIdVersionsVersionIdRoute,
  postAiAssistantsImportRoute,
  postAiAssistantsRoute,
  postAiAssistantsTestsRoute,
  postAiAssistantsTestsTestIdRunsRoute,
  postAiAssistantsTestsTestSuitesSuiteNameRunsRoute,
  postAiAudioTranscriptionsRoute,
  postAiAvatarsRoute,
  postAiChatCompletionsRoute,
  postAiClustersRoute,
  postAiCollectionsRoute,
  postAiCollectionsUuidSourcesRoute,
  postAiConversationsConversationIdMessageRoute,
  postAiConversationsInsightGroupsGroupIdInsightsInsightIdAssignRoute,
  postAiConversationsInsightGroupsRoute,
  postAiConversationsInsightsRoute,
  postAiConversationsRoute,
  postAiEmbeddingsRoute,
  postAiEmbeddingsSimilaritySearchRoute,
  postAiEmbeddingsUrlRoute,
  postAiMcpServersRoute,
  postAiMemoryNamespacesNamespaceProfilesProfileIdIngestRoute,
  postAiMemoryNamespacesNamespaceProfilesProfileIdRecallRoute,
  postAiMemoryNamespacesNamespaceProfilesProfileIdRememberRoute,
  postAiMemoryNamespacesNamespaceProfilesProfileIdSummaryPreviewRoute,
  postAiMemoryNamespacesRoute,
  postAiMissionsMissionIdCloneRoute,
  postAiMissionsMissionIdKnowledgeBasesRoute,
  postAiMissionsMissionIdMcpServersRoute,
  postAiMissionsMissionIdRunsRoute,
  postAiMissionsMissionIdRunsRunIdCancelRoute,
  postAiMissionsMissionIdRunsRunIdEventsRoute,
  postAiMissionsMissionIdRunsRunIdPauseRoute,
  postAiMissionsMissionIdRunsRunIdPlanRoute,
  postAiMissionsMissionIdRunsRunIdPlanStepsRoute,
  postAiMissionsMissionIdRunsRunIdResumeRoute,
  postAiMissionsMissionIdRunsRunIdTelnyxAgentsRoute,
  postAiMissionsMissionIdToolsRoute,
  postAiMissionsRoute,
  postAiOpenaiChatCompletionsRoute,
  postAiOpenaiEmbeddingsRoute,
  postAiOpenaiResponsesRoute,
  postAiResponsesRoute,
  postAiSummarizeRoute,
  postAiTestsSchedulesV1CronJobsRoute,
  postAiTestsTestFrameworkV1AiagentsRoute,
  postAiTestsTestFrameworkV1MetricsBulkCreateRoute,
  postAiTestsTestFrameworkV1MetricsGenerateMetricsRoute,
  postAiTestsTestFrameworkV1MetricsRoute,
  postAiTestsTestFrameworkV1ResultsIdRerunRoute,
  postAiTestsTestFrameworkV1ScenariosGenerateBgRoute,
  postAiTestsTestFrameworkV1ScenariosRoute,
  postAiTestsTestFrameworkV1ScenariosRunScenariosRoute,
  postAiTestsTestFrameworkV1ScenariosScenarioAgentRoute,
  postAiToolsRoute,
  postAiTypesafeV1SystemoneRoute,
  postAlphanumericSenderIdsRoute,
  postAuthenticationProvidersRoute,
  postBillingGroupsRoute,
  postBotChallengeRoute,
  postBotSignupResendMagicLinkRoute,
  postBotSignupRoute,
  postBrowserSessionsIdActionsRoute,
  postBrowserSessionsRoute,
  postBundlePricingUserBundlesBulkRoute,
  postCalendarConnectionsRoute,
  postCallControlApplicationsRoute,
  postCallReasonsValidateRoute,
  postCallsCallControlIdActionsAiAssistantAddMessagesRoute,
  postCallsCallControlIdActionsAiAssistantJoinRoute,
  postCallsCallControlIdActionsAiAssistantStartRoute,
  postCallsCallControlIdActionsAiAssistantStopRoute,
  postCallsCallControlIdActionsAnswerRoute,
  postCallsCallControlIdActionsBridgeRoute,
  postCallsCallControlIdActionsConversationRelayStartRoute,
  postCallsCallControlIdActionsConversationRelayStopRoute,
  postCallsCallControlIdActionsEnqueueRoute,
  postCallsCallControlIdActionsForkStartRoute,
  postCallsCallControlIdActionsForkStopRoute,
  postCallsCallControlIdActionsGatherRoute,
  postCallsCallControlIdActionsGatherStopRoute,
  postCallsCallControlIdActionsGatherUsingAiRoute,
  postCallsCallControlIdActionsGatherUsingAudioRoute,
  postCallsCallControlIdActionsGatherUsingSpeakRoute,
  postCallsCallControlIdActionsHangupRoute,
  postCallsCallControlIdActionsLeaveQueueRoute,
  postCallsCallControlIdActionsPayRoute,
  postCallsCallControlIdActionsPlaybackStartRoute,
  postCallsCallControlIdActionsPlaybackStopRoute,
  postCallsCallControlIdActionsRecordPauseRoute,
  postCallsCallControlIdActionsRecordResumeRoute,
  postCallsCallControlIdActionsRecordStartRoute,
  postCallsCallControlIdActionsRecordStopRoute,
  postCallsCallControlIdActionsReferRoute,
  postCallsCallControlIdActionsRejectRoute,
  postCallsCallControlIdActionsSendDtmfRoute,
  postCallsCallControlIdActionsSendSipInfoRoute,
  postCallsCallControlIdActionsSiprecStartRoute,
  postCallsCallControlIdActionsSiprecStopRoute,
  postCallsCallControlIdActionsSpeakRoute,
  postCallsCallControlIdActionsStreamingStartRoute,
  postCallsCallControlIdActionsStreamingStopRoute,
  postCallsCallControlIdActionsSuppressionStartRoute,
  postCallsCallControlIdActionsSuppressionStopRoute,
  postCallsCallControlIdActionsSwitchSupervisorRoleRoute,
  postCallsCallControlIdActionsTranscriptionStartRoute,
  postCallsCallControlIdActionsTranscriptionStopRoute,
  postCallsCallControlIdActionsTransferRoute,
  postCallsRoute,
  postCommentsRoute,
  postConferencesIdActionsEndRoute,
  postConferencesIdActionsGatherUsingAudioRoute,
  postConferencesIdActionsHoldRoute,
  postConferencesIdActionsJoinRoute,
  postConferencesIdActionsLeaveRoute,
  postConferencesIdActionsMuteRoute,
  postConferencesIdActionsPlayRoute,
  postConferencesIdActionsRecordPauseRoute,
  postConferencesIdActionsRecordResumeRoute,
  postConferencesIdActionsRecordStartRoute,
  postConferencesIdActionsRecordStopRoute,
  postConferencesIdActionsSendDtmfRoute,
  postConferencesIdActionsSpeakRoute,
  postConferencesIdActionsStopRoute,
  postConferencesIdActionsUnholdRoute,
  postConferencesIdActionsUnmuteRoute,
  postConferencesIdActionsUpdateRoute,
  postConferencesRoute,
  postCredentialConnectionsIdActionsCheckRegistrationStatusRoute,
  postCredentialConnectionsRoute,
  postCustomerServiceRecordsPhoneNumberCoveragesRoute,
  postCustomerServiceRecordsRoute,
  postCustomStorageCredentialsConnectionIdRoute,
  postDialogflowConnectionsConnectionIdRoute,
  postDirDirIdBpoLoaRoute,
  postDirDirIdCommentsRoute,
  postDirDirIdLoaRoute,
  postDirDirIdPhoneNumbersRoute,
  postDirDirIdReferencesRoute,
  postDirDirIdSubmitRoute,
  postDirDirIdVerifyEmailConfirmRoute,
  postDirDirIdVerifyEmailRoute,
  postDocumentsRoute,
  postDynamicEmergencyAddressesRoute,
  postDynamicEmergencyEndpointsRoute,
  postEmailBlocksImportRoute,
  postEmailBlocksRoute,
  postEmailDedicatedIpsIdActionsCompleteWarmupRoute,
  postEmailDedicatedIpsIdActionsPauseWarmupRoute,
  postEmailDedicatedIpsIdActionsResumeWarmupRoute,
  postEmailDedicatedIpsIdActionsStartWarmupRoute,
  postEmailDedicatedIpsRoute,
  postEmailDomainsDomainIdRotateDkimRoute,
  postEmailDomainsDomainIdVerifyRoute,
  postEmailDomainsDomainIdWebhooksRoute,
  postEmailDomainsRoute,
  postEmailInboxesInboxIdDraftsDraftIdSendRoute,
  postEmailInboxesInboxIdDraftsRoute,
  postEmailInboxesInboxIdFiltersRoute,
  postEmailInboxesInboxIdMessagesMessageIdActionsForwardRoute,
  postEmailInboxesInboxIdMessagesMessageIdActionsReplyAllRoute,
  postEmailInboxesInboxIdMessagesMessageIdActionsReplyRoute,
  postEmailInboxesInboxIdMessagesMessageIdDraftsRoute,
  postEmailInboxesInboxIdMessagesMessageIdLabelsRoute,
  postEmailInboxesInboxIdThreadsThreadIdLabelsRoute,
  postEmailInboxesRoute,
  postEmailIpPoolsIdIpsRoute,
  postEmailIpPoolsRoute,
  postEmailMessagesBatchRoute,
  postEmailMessagesRoute,
  postEmailTemplatesIdRenderRoute,
  postEmailTemplatesRoute,
  postEmailUnsubscribeGroupsIdSuppressionsRoute,
  postEmailUnsubscribeGroupsRoute,
  postEmailValidationsBatchRoute,
  postEmailValidationsRoute,
  postEnterprisesEnterpriseIdBrandedCallingRoute,
  postEnterprisesEnterpriseIdDirRoute,
  postEnterprisesEnterpriseIdReputationExternalVerificationRoute,
  postEnterprisesEnterpriseIdReputationLoaRoute,
  postEnterprisesEnterpriseIdReputationNumbersPhoneNumberOwnershipConfirmRoute,
  postEnterprisesEnterpriseIdReputationNumbersRefreshRoute,
  postEnterprisesEnterpriseIdReputationNumbersRoute,
  postEnterprisesEnterpriseIdReputationRemediationRoute,
  postEnterprisesEnterpriseIdReputationRoute,
  postEnterprisesEnterpriseIdVerifyEmailConfirmRoute,
  postEnterprisesEnterpriseIdVerifyEmailRoute,
  postEnterprisesRoute,
  postExternalConnectionsIdUploadsRefreshRoute,
  postExternalConnectionsIdUploadsRoute,
  postExternalConnectionsIdUploadsTicketIdRetryRoute,
  postExternalConnectionsRoute,
  postExternalRequirementsRegulatoryRequirementIdSubNumberOrdersSubNumberOrderIdRoute,
  postFaxApplicationsRoute,
  postFaxesIdActionsCancelRoute,
  postFaxesIdActionsRefreshRoute,
  postFaxesRoute,
  postFqdnConnectionsRoute,
  postFqdnsRoute,
  postGlobalIpAssignmentsRoute,
  postGlobalIpHealthChecksRoute,
  postGlobalIpsRoute,
  postInexplicitNumberOrdersRoute,
  postInfringementClaimsClaimIdContestRoute,
  postIntegrationSecretsRoute,
  postIpConnectionsRoute,
  postIpsRoute,
  postLedgerBillingGroupReportsRoute,
  postLegacyReportingBatchDetailRecordsMessaging2Route,
  postLegacyReportingBatchDetailRecordsMessagingRoute,
  postLegacyReportingBatchDetailRecordsSpeechToText2Route,
  postLegacyReportingBatchDetailRecordsSpeechToTextRoute,
  postLegacyReportingBatchDetailRecordsVoice2Route,
  postLegacyReportingBatchDetailRecordsVoiceRoute,
  postLegacyReportingUsageReportsMessaging2Route,
  postLegacyReportingUsageReportsMessagingRoute,
  postLegacyReportingUsageReportsNumberLookup2Route,
  postLegacyReportingUsageReportsNumberLookupRoute,
  postLegacyReportingUsageReportsVoice2Route,
  postLegacyReportingUsageReportsVoiceRoute,
  postLlmTokenGatewayTokenGroupsRoute,
  postLlmTokenGatewayTokenKeysRoute,
  postMachinePaymentsAccountCreditRoute,
  postManagedAccountsIdActionsDisableRoute,
  postManagedAccountsIdActionsEnableRoute,
  postManagedAccountsRoute,
  postMediaRoute,
  postMeetingSessionsIdActionsSendChatRoute,
  postMeetingSessionsIdActionsSpeakRoute,
  postMeetingSessionsIdActionsStopSpeakingRoute,
  postMeetingSessionsIdArtifactsRoute,
  postMeetingSessionsRoute,
  postMessagesAlphanumericSenderId2Route,
  postMessagesAlphanumericSenderIdRoute,
  postMessagesGroupMmsRoute,
  postMessagesLongCodeRoute,
  postMessagesNumberPoolRoute,
  postMessagesRcsRoute,
  postMessagesRoute,
  postMessagesScheduleRoute,
  postMessagesShortCodeRoute,
  postMessagesWhatsappRoute,
  postMessagingHostedNumberOrdersEligibilityNumbersCheckRoute,
  postMessagingHostedNumberOrdersIdActionsFileUploadRoute,
  postMessagingHostedNumberOrdersIdValidationCodesRoute,
  postMessagingHostedNumberOrdersIdVerificationCodesRoute,
  postMessagingHostedNumberOrdersRoute,
  postMessagingNumbersBulkUpdates2Route,
  postMessagingNumbersBulkUpdatesRoute,
  postMessagingProfilesIdActionsRegenerateSecret2Route,
  postMessagingProfilesIdActionsRegenerateSecretRoute,
  postMessagingProfilesProfileIdAutorespConfigsRoute,
  postMessagingProfilesRoute,
  postMessagingRcsBulkCapabilitiesRoute,
  postMessagingTollfreeVerificationRequestsRoute,
  postMobilePushCredentialsRoute,
  postMobileVoiceConnectionsRoute,
  postNetworkRoutesRoute,
  postNetworksIdDefaultGatewayRoute,
  postNetworksRoute,
  postNotificationChannelsRoute,
  postNotificationProfilesRoute,
  postNotificationSettingsRoute,
  postNumberBlockOrdersRoute,
  postNumberOrderPhoneNumbersIdRequirementGroupRoute,
  postNumberOrdersRoute,
  postNumberReservationsNumberReservationIdActionsExtendRoute,
  postNumberReservationsRoute,
  postNumbersFeaturesRoute,
  postOauthClients2Route,
  postOauthClientsRoute,
  postOauthGrantsRoute,
  postOauthIntrospectRoute,
  postOauthRegisterRoute,
  postOauthTokenRoute,
  postOperatorConnectActionsRefreshRoute,
  postOrganizationsUsersIdActionsRemoveRoute,
  postOutboundVoiceProfilesRoute,
  postPayConnectorsRoute,
  postPaymentStoredPaymentTransactionsRoute,
  postPhoneNumberBlocksJobsDeletePhoneNumberBlockRoute,
  postPhoneNumbersActionsVerifyOwnershipRoute,
  postPhoneNumbersCsvDownloadsRoute,
  postPhoneNumbersIdActionsEnableEmergencyRoute,
  postPhoneNumbersJobsDeletePhoneNumbersRoute,
  postPhoneNumbersJobsUpdateEmergencySettingsRoute,
  postPhoneNumbersJobsUpdatePhoneNumbersRoute,
  postPhoneNumbersPhoneNumberIdVoicemailRoute,
  postPortabilityChecksRoute,
  postPortingEventsIdRepublishRoute,
  postPortingLoaConfigurationsPreviewRoute,
  postPortingLoaConfigurationsRoute,
  postPortingOrdersIdActionsActivateRoute,
  postPortingOrdersIdActionsCancelRoute,
  postPortingOrdersIdActionsConfirmRoute,
  postPortingOrdersIdActionsShareRoute,
  postPortingOrdersIdAdditionalDocumentsRoute,
  postPortingOrdersIdCommentsRoute,
  postPortingOrdersIdVerificationCodesSendRoute,
  postPortingOrdersIdVerificationCodesVerifyRoute,
  postPortingOrdersPhoneNumberConfigurationsRoute,
  postPortingOrdersPortingOrderIdActionRequirementsIdInitiateRoute,
  postPortingOrdersPortingOrderIdAssociatedPhoneNumbersRoute,
  postPortingOrdersPortingOrderIdPhoneNumberBlocksRoute,
  postPortingOrdersPortingOrderIdPhoneNumberExtensionsRoute,
  postPortingOrdersRoute,
  postPortingReportsRoute,
  postPortoutsEventsIdRepublishRoute,
  postPortoutsIdCommentsRoute,
  postPortoutsIdSupportingDocumentsRoute,
  postPortoutsReportsRoute,
  postPrivateWirelessGatewaysRoute,
  postPronunciationDictsRoute,
  postPublicInternetGatewaysRoute,
  postQueuesQueueNameRoute,
  postQueuesRoute,
  postRcsAgentsIdLaunchRoute,
  postRcsAgentsIdSubmitRoute,
  postRcsAgentsIdTestDevicesRoute,
  postRcsAgentsRoute,
  postRcsBrandsIdSubmitRoute,
  postRcsBrandsRoute,
  postRecordingsActionsDeleteRoute,
  postReportsMdrUsageReportsRoute,
  postRequirementGroupsIdSubmitForApprovalRoute,
  postRequirementGroupsRoute,
  postRequirementsIdVersionsRoute,
  postRoomCompositionsRoute,
  postRoomSessionsRoomSessionIdActionsEndRoute,
  postRoomSessionsRoomSessionIdActionsKickRoute,
  postRoomSessionsRoomSessionIdActionsMuteRoute,
  postRoomSessionsRoomSessionIdActionsUnmuteRoute,
  postRoomsRoomIdActionsGenerateJoinClientTokenRoute,
  postRoomsRoomIdActionsRefreshClientTokenRoute,
  postRoomsRoute,
  postSimCardDataUsageNotificationsRoute,
  postSimCardGroupsIdActionsRemovePrivateWirelessGatewayRoute,
  postSimCardGroupsIdActionsRemoveWirelessBlocklistRoute,
  postSimCardGroupsIdActionsSetPrivateWirelessGatewayRoute,
  postSimCardGroupsIdActionsSetWirelessBlocklistRoute,
  postSimCardGroupsRoute,
  postSimCardOrderPreviewRoute,
  postSimCardOrdersRoute,
  postSimCardsActionsBulkDisableVoiceRoute,
  postSimCardsActionsBulkEnableVoiceRoute,
  postSimCardsActionsBulkSetPublicIpsRoute,
  postSimCardsActionsValidateRegistrationCodesRoute,
  postSimCardsIdActionsDisableRoute,
  postSimCardsIdActionsDisableVoiceRoute,
  postSimCardsIdActionsEnableRoute,
  postSimCardsIdActionsEnableVoiceRoute,
  postSimCardsIdActionsRemovePublicIpRoute,
  postSimCardsIdActionsSetPublicIpRoute,
  postSimCardsIdActionsSetStandbyRoute,
  postSiprecConnectorsRoute,
  postSpendLimitsRoute,
  postStorageBucketsBucketNameObjectNamePresignedUrlRoute,
  postStorageCloudfsIdActionsRotateMetaTokenRoute,
  postStorageCloudfsRoute,
  postStorageKvsRoute,
  postStorageMigrationsIdActionsStopRoute,
  postStorageMigrationSourcesRoute,
  postStorageMigrationsRoute,
  postStorageSqldbsIdActionsQueryRoute,
  postStorageSqldbsRoute,
  postSubNumberOrdersIdRequirementGroupRoute,
  postSubNumberOrdersReport2Route,
  postSubNumberOrdersReportRoute,
  postTailscaleSubnetRoutersRoute,
  postTelephonyCredentialsIdTokenRoute,
  postTelephonyCredentialsRoute,
  postTermsOfServiceBrandedCallingAgreeRoute,
  postTermsOfServiceNumberReputationAgreeRoute,
  postTexmlAccountsAccountSidCallsCallSidRecordingsJsonRoute,
  postTexmlAccountsAccountSidCallsCallSidRecordingsRecordingSidJsonRoute,
  postTexmlAccountsAccountSidCallsCallSidRoute,
  postTexmlAccountsAccountSidCallsCallSidSiprecJsonRoute,
  postTexmlAccountsAccountSidCallsCallSidSiprecSiprecSidJsonRoute,
  postTexmlAccountsAccountSidCallsCallSidStreamsJsonRoute,
  postTexmlAccountsAccountSidCallsCallSidStreamsStreamingSidJsonRoute,
  postTexmlAccountsAccountSidCallsRoute,
  postTexmlAccountsAccountSidConferencesConferenceSidParticipantsCallSidOrParticipantLabelRoute,
  postTexmlAccountsAccountSidConferencesConferenceSidParticipantsRoute,
  postTexmlAccountsAccountSidConferencesConferenceSidRoute,
  postTexmlAccountsAccountSidQueuesQueueSidRoute,
  postTexmlAccountsAccountSidQueuesRoute,
  postTexmlAiCallsConnectionIdRoute,
  postTexmlApplicationsRoute,
  postTexmlCallsConnectionIdRoute,
  postTexmlSecretsRoute,
  postTextToSpeechSpeechRoute,
  postTrafficPolicyProfiles2Route,
  postTrafficPolicyProfilesRoute,
  postTunnelsIdActionsRotateTokenRoute,
  postTunnelsRoute,
  postUacConnectionsIdActionsCheckRegistrationStatusRoute,
  postUacConnectionsRoute,
  postUserAddresses2Route,
  postUserAddressesRoute,
  postV2WhatsappBusinessAccountsIdPhoneNumbersRoute,
  postV2WhatsappMessageTemplatesRoute,
  postV2WhatsappPhoneNumbersPhoneNumberProfilePhotoRoute,
  postV2WhatsappPhoneNumbersPhoneNumberResendVerificationRoute,
  postV2WhatsappPhoneNumbersPhoneNumberVerifyRoute,
  postVerificationsByPhoneNumberPhoneNumberActionsVerifyRoute,
  postVerificationsCallRoute,
  postVerificationsFlashcallRoute,
  postVerificationsSmsRoute,
  postVerificationsVerificationIdActionsVerifyRoute,
  postVerificationsWhatsappRoute,
  postVerifiedNumbersPhoneNumberActionsVerifyRoute,
  postVerifiedNumbersRoute,
  postVerifyProfilesRoute,
  postVerifyProfilesTemplatesRoute,
  postVirtualCrossConnectsRoute,
  postVoiceClonesFromUploadRoute,
  postVoiceClonesRoute,
  postVoiceDesignsRoute,
  postWebSearchContentsRoute,
  postWebSearchResearchRoute,
  postWebSearchRoute,
  postWhatsappBusinessAccountsIdPhoneNumbersRoute,
  postWhatsappHostedSignupsRoute,
  postWhatsappMessageTemplatesRoute,
  postWhatsappPhoneNumbersPhoneNumberProfilePhotoRoute,
  postWhatsappPhoneNumbersPhoneNumberResendVerificationRoute,
  postWhatsappPhoneNumbersPhoneNumberVerifyRoute,
  postWireguardInterfacesRoute,
  postWireguardPeersRoute,
  postWirelessBlocklistsRoute,
  postWirelessDetailRecordsReports2Route,
  postWirelessDetailRecordsReportsRoute,
  postX402CreditAccountQuoteRoute,
  postX402CreditAccountRoute,
  put10dlcBrandBrandIdExternalVettingRoute,
  put10dlcBrandBrandIdRevetRoute,
  put10dlcBrandBrandIdRoute,
  put10dlcBrandBrandIdSmsOtpRoute,
  put10dlcCampaignCampaignIdRoute,
  put10dlcPhoneNumberCampaignsPhoneNumberRoute,
  putAgentGatewaysInstanceIdKeysKeyIdToolPermissionsRoute,
  putAgentGatewaysInstanceIdTeamsTeamIdToolPermissionsRoute,
  putAiAssistantsAssistantIdCanaryDeploysRoute,
  putAiAssistantsAssistantIdToolsToolIdRoute,
  putAiAssistantsTestsTestIdRoute,
  putAiCollectionsUuidSettingsRoute,
  putAiCollectionsUuidSourcesRoute,
  putAiConversationsConversationIdRoute,
  putAiConversationsInsightGroupsGroupIdRoute,
  putAiConversationsInsightsInsightIdRoute,
  putAiMcpServersMcpServerIdRoute,
  putAiMissionsMissionIdKnowledgeBasesKnowledgeBaseIdRoute,
  putAiMissionsMissionIdMcpServersMcpServerIdRoute,
  putAiMissionsMissionIdRoute,
  putAiMissionsMissionIdToolsToolIdRoute,
  putAiTestsTestFrameworkV1AiagentsIdRoute,
  putCallsCallControlIdActionsClientStateUpdateRoute,
  putChannelZonesChannelZoneIdRoute,
  putComputeFuncsIdLogsExportRoute,
  putCustomStorageCredentialsConnectionIdRoute,
  putDialogflowConnectionsConnectionIdRoute,
  putDirDirIdInfringementUpdateRoute,
  putEmailInboxesInboxIdDraftsDraftIdRoute,
  putEmailInboxesInboxIdFiltersRoute,
  putEmailTemplatesIdRoute,
  putEnterprisesEnterpriseIdRoute,
  putMediaMediaNameRoute,
  putMessagingProfilesProfileIdAutorespConfigsAutorespCfgIdRoute,
  putMessagingRcsTestNumberInviteIdPhoneNumberRoute,
  putOauthClientsId2Route,
  putOauthClientsIdRoute,
  putSiprecConnectorsConnectorNameRoute,
  putStorageBucketsBucketNameSslCertificateRoute,
  putStorageKvsIdKeysKeyRoute,
} from './routes'
import {
  delete10dlcBrandBrandIdRouteHandler,
  delete10dlcCampaignCampaignIdRouteHandler,
  delete10dlcPhoneNumberCampaignsPhoneNumberRouteHandler,
  deleteAccessIpAddressAccessIpAddressIdRouteHandler,
  deleteAccessIpRangesAccessIpRangeIdRouteHandler,
  deleteAddressesIdRouteHandler,
  deleteAgentGatewaysInstanceIdApisApiIdRouteHandler,
  deleteAgentGatewaysInstanceIdGuardrailsGuardrailIdRouteHandler,
  deleteAgentGatewaysInstanceIdKeysKeyIdRouteHandler,
  deleteAgentGatewaysInstanceIdMcpServersServerIdRouteHandler,
  deleteAgentGatewaysInstanceIdPoliciesNameRouteHandler,
  deleteAgentGatewaysInstanceIdPolicyAttachmentsAttachmentIdRouteHandler,
  deleteAgentGatewaysInstanceIdRouteHandler,
  deleteAgentGatewaysInstanceIdTeamsTeamIdRouteHandler,
  deleteAiAssistantsAssistantIdCanaryDeploysRouteHandler,
  deleteAiAssistantsAssistantIdRouteHandler,
  deleteAiAssistantsAssistantIdScheduledEventsEventIdRouteHandler,
  deleteAiAssistantsAssistantIdTagsTagRouteHandler,
  deleteAiAssistantsAssistantIdToolsToolIdRouteHandler,
  deleteAiAssistantsAssistantIdVersionsVersionIdRouteHandler,
  deleteAiAssistantsTestsTestIdRouteHandler,
  deleteAiClustersTaskIdRouteHandler,
  deleteAiCollectionsUuidRouteHandler,
  deleteAiCollectionsUuidSourcesSourceIdRouteHandler,
  deleteAiConversationsConversationIdConversationsInsightsInsightIdRouteHandler,
  deleteAiConversationsConversationIdRouteHandler,
  deleteAiConversationsInsightGroupsGroupIdInsightsInsightIdUnassignRouteHandler,
  deleteAiConversationsInsightGroupsGroupIdRouteHandler,
  deleteAiConversationsInsightsInsightIdRouteHandler,
  deleteAiEmbeddingsBucketsBucketNameRouteHandler,
  deleteAiIntegrationsConnectionsUserConnectionIdRouteHandler,
  deleteAiMcpServersMcpServerIdRouteHandler,
  deleteAiMemoryNamespacesNamespaceProfilesProfileIdRouteHandler,
  deleteAiMemoryNamespacesNamespaceProfilesProfileIdSourcesSourceIdRouteHandler,
  deleteAiMemoryNamespacesNamespaceRouteHandler,
  deleteAiMissionsMissionIdKnowledgeBasesKnowledgeBaseIdRouteHandler,
  deleteAiMissionsMissionIdMcpServersMcpServerIdRouteHandler,
  deleteAiMissionsMissionIdRouteHandler,
  deleteAiMissionsMissionIdRunsRunIdTelnyxAgentsTelnyxAgentIdRouteHandler,
  deleteAiMissionsMissionIdToolsToolIdRouteHandler,
  deleteAiTestsSchedulesV1CronJobsIdRouteHandler,
  deleteAiTestsTestFrameworkV1AiagentsIdRouteHandler,
  deleteAiTestsTestFrameworkV1MetricsIdRouteHandler,
  deleteAiTestsTestFrameworkV1ResultsIdRouteHandler,
  deleteAiTestsTestFrameworkV1ScenariosIdRouteHandler,
  deleteAiToolsToolIdRouteHandler,
  deleteAlphanumericSenderIdsIdRouteHandler,
  deleteAuthenticationProvidersIdRouteHandler,
  deleteBillingGroupsIdRouteHandler,
  deleteBrowserSessionsIdRouteHandler,
  deleteBundlePricingUserBundlesUserBundleIdRouteHandler,
  deleteCalendarConnectionsIdRouteHandler,
  deleteCallControlApplicationsIdRouteHandler,
  deleteComputeFuncsIdLogsExportRouteHandler,
  deleteCredentialConnectionsIdRouteHandler,
  deleteCustomStorageCredentialsConnectionIdRouteHandler,
  deleteDialogflowConnectionsConnectionIdRouteHandler,
  deleteDirDirIdPhoneNumbersRouteHandler,
  deleteDirDirIdRouteHandler,
  deleteDocumentsIdRouteHandler,
  deleteDynamicEmergencyAddressesIdRouteHandler,
  deleteDynamicEmergencyEndpointsIdRouteHandler,
  deleteEmailBlocksIdRouteHandler,
  deleteEmailDedicatedIpsIdRouteHandler,
  deleteEmailDomainsDomainIdWebhooksIdRouteHandler,
  deleteEmailDomainsIdRouteHandler,
  deleteEmailInboxesIdRouteHandler,
  deleteEmailInboxesInboxIdDraftsDraftIdRouteHandler,
  deleteEmailInboxesInboxIdFiltersRouteHandler,
  deleteEmailInboxesInboxIdMessagesMessageIdLabelsRouteHandler,
  deleteEmailInboxesInboxIdThreadsThreadIdLabelsRouteHandler,
  deleteEmailIpPoolsIdIpsIpIdRouteHandler,
  deleteEmailIpPoolsIdRouteHandler,
  deleteEmailMessagesEmailIdScheduleRouteHandler,
  deleteEmailMessagesIdRouteHandler,
  deleteEmailMessagesRouteHandler,
  deleteEmailTemplatesIdRouteHandler,
  deleteEmailUnsubscribeGroupsIdRouteHandler,
  deleteEmailUnsubscribeGroupsIdSuppressionsEmailRouteHandler,
  deleteEnterprisesEnterpriseIdReputationNumbersPhoneNumberRouteHandler,
  deleteEnterprisesEnterpriseIdReputationRouteHandler,
  deleteEnterprisesEnterpriseIdRouteHandler,
  deleteExternalConnectionsIdRouteHandler,
  deleteExternalConnectionsLogMessagesIdRouteHandler,
  deleteFaxApplicationsIdRouteHandler,
  deleteFaxesIdRouteHandler,
  deleteFqdnConnectionsIdRouteHandler,
  deleteFqdnsIdRouteHandler,
  deleteGlobalIpAssignmentsIdRouteHandler,
  deleteGlobalIpHealthChecksIdRouteHandler,
  deleteGlobalIpsIdRouteHandler,
  deleteIntegrationSecretsIdRouteHandler,
  deleteIpConnectionsIdRouteHandler,
  deleteIpsIdRouteHandler,
  deleteLegacyReportingBatchDetailRecordsMessagingId2RouteHandler,
  deleteLegacyReportingBatchDetailRecordsMessagingIdRouteHandler,
  deleteLegacyReportingBatchDetailRecordsSpeechToTextId2RouteHandler,
  deleteLegacyReportingBatchDetailRecordsSpeechToTextIdRouteHandler,
  deleteLegacyReportingBatchDetailRecordsVoiceId2RouteHandler,
  deleteLegacyReportingBatchDetailRecordsVoiceIdRouteHandler,
  deleteLegacyReportingUsageReportsMessagingId2RouteHandler,
  deleteLegacyReportingUsageReportsMessagingIdRouteHandler,
  deleteLegacyReportingUsageReportsNumberLookupId2RouteHandler,
  deleteLegacyReportingUsageReportsNumberLookupIdRouteHandler,
  deleteLegacyReportingUsageReportsVoiceId2RouteHandler,
  deleteLegacyReportingUsageReportsVoiceIdRouteHandler,
  deleteLlmTokenGatewayTokenGroupsIdRouteHandler,
  deleteLlmTokenGatewayTokenKeysIdRouteHandler,
  deleteMediaMediaNameRouteHandler,
  deleteMeetingSessionsIdRecordingMediaRouteHandler,
  deleteMeetingSessionsIdRouteHandler,
  deleteMessagesIdRouteHandler,
  deleteMessagingHostedNumberOrdersIdRouteHandler,
  deleteMessagingHostedNumbersIdRouteHandler,
  deleteMessagingProfilesIdRouteHandler,
  deleteMessagingProfilesProfileIdAutorespConfigsAutorespCfgIdRouteHandler,
  deleteMessagingTollfreeVerificationRequestsIdRouteHandler,
  deleteMobilePushCredentialsPushCredentialIdRouteHandler,
  deleteMobileVoiceConnectionsIdRouteHandler,
  deleteNetworkRoutesIdRouteHandler,
  deleteNetworksIdDefaultGatewayRouteHandler,
  deleteNetworksIdRouteHandler,
  deleteNotificationChannelsIdRouteHandler,
  deleteNotificationProfilesIdRouteHandler,
  deleteNotificationSettingsIdRouteHandler,
  deleteOauthClientsId2RouteHandler,
  deleteOauthClientsIdRouteHandler,
  deleteOauthGrantsId2RouteHandler,
  deleteOauthGrantsIdRouteHandler,
  deleteOutboundVoiceProfilesIdRouteHandler,
  deletePayConnectorsNameRouteHandler,
  deletePhoneNumbersIdRouteHandler,
  deletePortingLoaConfigurationsIdRouteHandler,
  deletePortingOrdersIdAdditionalDocumentsAdditionalDocumentIdRouteHandler,
  deletePortingOrdersIdRouteHandler,
  deletePortingOrdersPortingOrderIdAssociatedPhoneNumbersIdRouteHandler,
  deletePortingOrdersPortingOrderIdPhoneNumberBlocksIdRouteHandler,
  deletePortingOrdersPortingOrderIdPhoneNumberExtensionsIdRouteHandler,
  deletePrivateWirelessGatewaysIdRouteHandler,
  deletePronunciationDictsIdRouteHandler,
  deletePublicInternetGatewaysIdRouteHandler,
  deleteQueuesQueueNameCallsCallControlIdRouteHandler,
  deleteQueuesQueueNameRouteHandler,
  deleteRcsAgentsIdTestDevicesTestDeviceIdRouteHandler,
  deleteRecordingsRecordingIdRouteHandler,
  deleteRecordingTranscriptionsRecordingTranscriptionIdRouteHandler,
  deleteReportsMdrUsageReportsIdRouteHandler,
  deleteReputationNumbersPhoneNumberRouteHandler,
  deleteRequirementGroupsIdRouteHandler,
  deleteRequirementsIdVersionsPendingRouteHandler,
  deleteRoomCompositionsRoomCompositionIdRouteHandler,
  deleteRoomRecordingsRoomRecordingIdRouteHandler,
  deleteRoomRecordingsRouteHandler,
  deleteRoomsRoomIdRouteHandler,
  deleteSimCardDataUsageNotificationsIdRouteHandler,
  deleteSimCardGroupsIdRouteHandler,
  deleteSimCardsIdRouteHandler,
  deleteSiprecConnectorsConnectorNameRouteHandler,
  deleteSpendLimitsProductRouteHandler,
  deleteStorageBucketsBucketNameSslCertificateRouteHandler,
  deleteStorageCloudfsIdRouteHandler,
  deleteStorageKvsIdKeysKeyRouteHandler,
  deleteStorageKvsIdRouteHandler,
  deleteStorageMigrationSourcesIdRouteHandler,
  deleteStorageSqldbsIdRouteHandler,
  deleteTailscaleSubnetRoutersIdRouteHandler,
  deleteTelephonyCredentialsIdRouteHandler,
  deleteTexmlAccountsAccountSidConferencesConferenceSidParticipantsCallSidOrParticipantLabelRouteHandler,
  deleteTexmlAccountsAccountSidQueuesQueueSidRouteHandler,
  deleteTexmlAccountsAccountSidRecordingsRecordingSidJsonRouteHandler,
  deleteTexmlAccountsAccountSidTranscriptionsRecordingTranscriptionSidJsonRouteHandler,
  deleteTexmlApplicationsIdRouteHandler,
  deleteTrafficPolicyProfilesId2RouteHandler,
  deleteTrafficPolicyProfilesIdRouteHandler,
  deleteTunnelsIdRouteHandler,
  deleteUacConnectionsIdRouteHandler,
  deleteV2WhatsappBusinessAccountsIdRouteHandler,
  deleteV2WhatsappMessageTemplatesIdRouteHandler,
  deleteV2WhatsappPhoneNumbersPhoneNumberProfilePhotoRouteHandler,
  deleteV2WhatsappPhoneNumbersPhoneNumberRouteHandler,
  deleteVerifiedNumbersPhoneNumberRouteHandler,
  deleteVerifyProfilesVerifyProfileIdRouteHandler,
  deleteVirtualCrossConnectsIdRouteHandler,
  deleteVoiceClonesIdRouteHandler,
  deleteVoiceDesignsIdRouteHandler,
  deleteVoiceDesignsIdVersionsVersionRouteHandler,
  deleteWhatsappBusinessAccountsIdRouteHandler,
  deleteWhatsappMessageTemplatesIdRouteHandler,
  deleteWhatsappPhoneNumbersPhoneNumberProfilePhotoRouteHandler,
  deleteWhatsappPhoneNumbersPhoneNumberRouteHandler,
  deleteWireguardInterfacesIdRouteHandler,
  deleteWireguardPeersIdRouteHandler,
  deleteWirelessBlocklistsIdRouteHandler,
  deleteWirelessDetailRecordsReportsId2RouteHandler,
  deleteWirelessDetailRecordsReportsIdRouteHandler,
  get10dlcBrandBrandIdExternalVettingRouteHandler,
  get10dlcBrandBrandIdRouteHandler,
  get10dlcBrandBrandIdSmsOtpRouteHandler,
  get10dlcBrandFeedbackBrandId2RouteHandler,
  get10dlcBrandFeedbackBrandIdRouteHandler,
  get10dlcBrandRouteHandler,
  get10dlcBrandSmsOtpReferenceIdRouteHandler,
  get10dlcCampaignBuilderBrandBrandIdUsecaseUsecaseRouteHandler,
  get10dlcCampaignCampaignIdMnoMetadataRouteHandler,
  get10dlcCampaignCampaignIdOperationStatusRouteHandler,
  get10dlcCampaignCampaignIdOsrAttributes2RouteHandler,
  get10dlcCampaignCampaignIdOsrAttributesRouteHandler,
  get10dlcCampaignCampaignIdRouteHandler,
  get10dlcCampaignCampaignIdSharingRouteHandler,
  get10dlcCampaignRouteHandler,
  get10dlcCampaignUsecaseCost2RouteHandler,
  get10dlcCampaignUsecaseCostRouteHandler,
  get10dlcEnumEndpointRouteHandler,
  get10dlcPartnerCampaignCampaignIdSharingRouteHandler,
  get10dlcPartnerCampaignsCampaignIdRouteHandler,
  get10dlcPartnerCampaignSharedByMeRouteHandler,
  get10dlcPartnerCampaignsRouteHandler,
  get10dlcPhoneNumberAssignmentByProfileTaskIdPhoneNumbersRouteHandler,
  get10dlcPhoneNumberAssignmentByProfileTaskIdRouteHandler,
  get10dlcPhoneNumberCampaignsPhoneNumberRouteHandler,
  get10dlcPhoneNumberCampaignsRouteHandler,
  getAccessIpAddressAccessIpAddressIdRouteHandler,
  getAccessIpAddressRouteHandler,
  getAccessIpRangesRouteHandler,
  getAddressesIdRouteHandler,
  getAddressesRouteHandler,
  getAdvancedOrdersOrderIdRouteHandler,
  getAdvancedOrdersRouteHandler,
  getAgentGatewaysInstanceIdApisRouteHandler,
  getAgentGatewaysInstanceIdGuardrailsRouteHandler,
  getAgentGatewaysInstanceIdKeysKeyIdToolPermissionsRouteHandler,
  getAgentGatewaysInstanceIdKeysRouteHandler,
  getAgentGatewaysInstanceIdMcpServersRouteHandler,
  getAgentGatewaysInstanceIdModelsRouteHandler,
  getAgentGatewaysInstanceIdPoliciesNameRouteHandler,
  getAgentGatewaysInstanceIdPoliciesRouteHandler,
  getAgentGatewaysInstanceIdPolicyAttachmentsRouteHandler,
  getAgentGatewaysInstanceIdRouteHandler,
  getAgentGatewaysInstanceIdSpendLogsRouteHandler,
  getAgentGatewaysInstanceIdTeamsRouteHandler,
  getAgentGatewaysInstanceIdTeamsTeamIdToolPermissionsRouteHandler,
  getAgentGatewaysRouteHandler,
  getAiAssistantsAssistantIdCanaryDeploysRouteHandler,
  getAiAssistantsAssistantIdDeletedRouteHandler,
  getAiAssistantsAssistantIdRouteHandler,
  getAiAssistantsAssistantIdScheduledEventsEventIdRouteHandler,
  getAiAssistantsAssistantIdScheduledEventsRouteHandler,
  getAiAssistantsAssistantIdTexmlRouteHandler,
  getAiAssistantsAssistantIdVersionsRouteHandler,
  getAiAssistantsAssistantIdVersionsVersionIdRouteHandler,
  getAiAssistantsDeletedRouteHandler,
  getAiAssistantsRouteHandler,
  getAiAssistantsTagsRouteHandler,
  getAiAssistantsTestsRouteHandler,
  getAiAssistantsTestsTestIdRouteHandler,
  getAiAssistantsTestsTestIdRunsRouteHandler,
  getAiAssistantsTestsTestIdRunsRunIdRouteHandler,
  getAiAssistantsTestsTestSuitesRouteHandler,
  getAiAssistantsTestsTestSuitesSuiteNameRunsRouteHandler,
  getAiAvatarsAvatarIdRouteHandler,
  getAiAvatarsRouteHandler,
  getAiClustersRouteHandler,
  getAiClustersTaskIdGraphRouteHandler,
  getAiClustersTaskIdRouteHandler,
  getAiCollectionsRouteHandler,
  getAiCollectionsSlugSlugRouteHandler,
  getAiCollectionsUuidRouteHandler,
  getAiCollectionsUuidSettingsRouteHandler,
  getAiCollectionsUuidSourcesRouteHandler,
  getAiConversationHistoriesRouteHandler,
  getAiConversationsConversationIdConversationsInsightsRouteHandler,
  getAiConversationsConversationIdMessagesRouteHandler,
  getAiConversationsConversationIdRouteHandler,
  getAiConversationsConversationInsightsAggregatesRouteHandler,
  getAiConversationsInsightGroupsGroupIdRouteHandler,
  getAiConversationsInsightGroupsRouteHandler,
  getAiConversationsInsightsInsightIdRouteHandler,
  getAiConversationsInsightsRouteHandler,
  getAiConversationsRouteHandler,
  getAiEmbeddingsBucketsBucketNameRouteHandler,
  getAiEmbeddingsBucketsRouteHandler,
  getAiEmbeddingsRouteHandler,
  getAiEmbeddingsTaskIdRouteHandler,
  getAiIntegrationsConnectionsRouteHandler,
  getAiIntegrationsConnectionsUserConnectionIdRouteHandler,
  getAiIntegrationsIntegrationIdRouteHandler,
  getAiIntegrationsRouteHandler,
  getAiKnowledgeCollectionsSlugDocumentsRouteHandler,
  getAiMcpServersMcpServerIdRouteHandler,
  getAiMcpServersRouteHandler,
  getAiMemoryNamespacesNamespaceOperationsOperationIdRouteHandler,
  getAiMemoryNamespacesNamespaceProfilesProfileIdMemoriesMemoryIdRouteHandler,
  getAiMemoryNamespacesNamespaceProfilesProfileIdMemoriesRouteHandler,
  getAiMemoryNamespacesNamespaceProfilesProfileIdSourcesRouteHandler,
  getAiMemoryNamespacesNamespaceProfilesProfileIdSourcesSourceIdRouteHandler,
  getAiMemoryNamespacesNamespaceProfilesProfileIdSummaryRouteHandler,
  getAiMemoryNamespacesNamespaceProfilesRouteHandler,
  getAiMemoryNamespacesNamespaceSettingsRouteHandler,
  getAiMemoryNamespacesRouteHandler,
  getAiMissionsEventsRouteHandler,
  getAiMissionsMissionIdKnowledgeBasesKnowledgeBaseIdRouteHandler,
  getAiMissionsMissionIdKnowledgeBasesRouteHandler,
  getAiMissionsMissionIdMcpServersMcpServerIdRouteHandler,
  getAiMissionsMissionIdMcpServersRouteHandler,
  getAiMissionsMissionIdRouteHandler,
  getAiMissionsMissionIdRunsRouteHandler,
  getAiMissionsMissionIdRunsRunIdEventsEventIdRouteHandler,
  getAiMissionsMissionIdRunsRunIdEventsRouteHandler,
  getAiMissionsMissionIdRunsRunIdPlanRouteHandler,
  getAiMissionsMissionIdRunsRunIdPlanStepsStepIdRouteHandler,
  getAiMissionsMissionIdRunsRunIdRouteHandler,
  getAiMissionsMissionIdRunsRunIdTelnyxAgentsRouteHandler,
  getAiMissionsMissionIdToolsRouteHandler,
  getAiMissionsMissionIdToolsToolIdRouteHandler,
  getAiMissionsRouteHandler,
  getAiMissionsRunsRouteHandler,
  getAiModelsRouteHandler,
  getAiOpenaiEmbeddingsModelsRouteHandler,
  getAiOpenaiModelsRouteHandler,
  getAiTestsSchedulesV1CronJobsIdRouteHandler,
  getAiTestsSchedulesV1CronJobsRouteHandler,
  getAiTestsTestFrameworkV1AiagentsIdRouteHandler,
  getAiTestsTestFrameworkV1AiagentsRouteHandler,
  getAiTestsTestFrameworkV1MetricsGenerateMetricsProgressRouteHandler,
  getAiTestsTestFrameworkV1MetricsIdRouteHandler,
  getAiTestsTestFrameworkV1MetricsRouteHandler,
  getAiTestsTestFrameworkV1PersonalitiesRouteHandler,
  getAiTestsTestFrameworkV1ResultsIdRouteHandler,
  getAiTestsTestFrameworkV1ResultsRouteHandler,
  getAiTestsTestFrameworkV1ScenariosExportScenariosRouteHandler,
  getAiTestsTestFrameworkV1ScenariosGenerateProgressRouteHandler,
  getAiTestsTestFrameworkV1ScenariosIdRouteHandler,
  getAiTestsTestFrameworkV1ScenariosRouteHandler,
  getAiTestsTestFrameworkV1ScenariosScenarioAgentProgressRouteHandler,
  getAiToolsRouteHandler,
  getAiToolsToolIdRouteHandler,
  getAlphanumericSenderIdsIdRouteHandler,
  getAlphanumericSenderIdsRouteHandler,
  getArtifactDownloadsArtifactIdRouteHandler,
  getAuditEventsRouteHandler,
  getAuthenticationProvidersIdRouteHandler,
  getAuthenticationProvidersRouteHandler,
  getAvailablePhoneNumberBlocksRouteHandler,
  getAvailablePhoneNumbersRouteHandler,
  getBalanceRouteHandler,
  getBillingGroupsIdRouteHandler,
  getBillingGroupsRouteHandler,
  getBotSessionsRouteHandler,
  getBrowserSessionsIdActionsActionIdRouteHandler,
  getBrowserSessionsIdArtifactsArtifactIdRouteHandler,
  getBrowserSessionsIdRouteHandler,
  getBrowserSessionsRouteHandler,
  getBulkSimCardActionsIdRouteHandler,
  getBulkSimCardActionsRouteHandler,
  getBundlePricingBillingBundlesBundleIdRouteHandler,
  getBundlePricingBillingBundlesRouteHandler,
  getBundlePricingUserBundlesRouteHandler,
  getBundlePricingUserBundlesUnusedRouteHandler,
  getBundlePricingUserBundlesUserBundleIdResourcesRouteHandler,
  getBundlePricingUserBundlesUserBundleIdRouteHandler,
  getCalendarConnectionsIdMeetingsRouteHandler,
  getCalendarConnectionsIdRouteHandler,
  getCalendarConnectionsRouteHandler,
  getCallControlApplicationsIdRouteHandler,
  getCallControlApplicationsRouteHandler,
  getCallEventsRouteHandler,
  getCallReasonsRouteHandler,
  getCallsCallControlIdRouteHandler,
  getChannelZonesRouteHandler,
  getChargesBreakdownRouteHandler,
  getChargesSummaryRouteHandler,
  getCommentsIdRouteHandler,
  getCommentsRouteHandler,
  getComputeActorsIdRouteHandler,
  getComputeFuncsIdLogsExportRouteHandler,
  getComputeFuncsIdLogsRouteHandler,
  getComputeFuncsIdMetricAggregatesRouteHandler,
  getComputeFuncsIdRevisionsRouteHandler,
  getComputeFuncsIdShipInspectionRouteHandler,
  getComputeFuncsRouteHandler,
  getConferencesConferenceIdParticipantsRouteHandler,
  getConferencesIdParticipantsParticipantIdRouteHandler,
  getConferencesIdRouteHandler,
  getConferencesRouteHandler,
  getConnectionsConnectionIdActiveCallsRouteHandler,
  getConnectionsCountRouteHandler,
  getConnectionsIdRouteHandler,
  getConnectionsRouteHandler,
  getCountryCoverageCountriesCountryCodeRouteHandler,
  getCountryCoverageRouteHandler,
  getCredentialConnectionsIdRouteHandler,
  getCredentialConnectionsRouteHandler,
  getCustomerServiceRecordsCustomerServiceRecordIdRouteHandler,
  getCustomerServiceRecordsRouteHandler,
  getCustomStorageCredentialsConnectionIdRouteHandler,
  getDetailRecordsRouteHandler,
  getDialMetricsRouteHandler,
  getDialogflowConnectionsConnectionIdRouteHandler,
  getDirDirIdBpoAuthorizationsRouteHandler,
  getDirDirIdCommentsRouteHandler,
  getDirDirIdInfringementClaimsRouteHandler,
  getDirDirIdPhoneNumberBatchesBatchIdRouteHandler,
  getDirDirIdPhoneNumberBatchesRouteHandler,
  getDirDirIdPhoneNumbersRouteHandler,
  getDirDirIdReferencesRouteHandler,
  getDirDirIdRouteHandler,
  getDirDirIdVerifyEmailRouteHandler,
  getDirDocumentTypesRouteHandler,
  getDirRouteHandler,
  getDocumentLinksRouteHandler,
  getDocumentsIdDownloadLinkRouteHandler,
  getDocumentsIdDownloadRouteHandler,
  getDocumentsIdRouteHandler,
  getDocumentsRouteHandler,
  getDynamicEmergencyAddressesIdRouteHandler,
  getDynamicEmergencyAddressesRouteHandler,
  getDynamicEmergencyEndpointsIdRouteHandler,
  getDynamicEmergencyEndpointsRouteHandler,
  getEmailBlocksExportRouteHandler,
  getEmailBlocksIdEventsRouteHandler,
  getEmailBlocksIdRouteHandler,
  getEmailBlocksImportIdRouteHandler,
  getEmailBlocksRouteHandler,
  getEmailDedicatedIpsIdRouteHandler,
  getEmailDedicatedIpsRouteHandler,
  getEmailDomainsDomainIdDnsRecordsRouteHandler,
  getEmailDomainsDomainIdWebhooksIdRouteHandler,
  getEmailDomainsDomainIdWebhooksRouteHandler,
  getEmailDomainsIdHealthRouteHandler,
  getEmailDomainsIdRouteHandler,
  getEmailDomainsRouteHandler,
  getEmailEventsRouteHandler,
  getEmailEventsStatsRouteHandler,
  getEmailInboxesIdRouteHandler,
  getEmailInboxesInboxIdDraftsDraftIdRouteHandler,
  getEmailInboxesInboxIdDraftsRouteHandler,
  getEmailInboxesInboxIdFiltersRouteHandler,
  getEmailInboxesInboxIdMessagesRouteHandler,
  getEmailInboxesInboxIdThreadsRouteHandler,
  getEmailInboxesInboxIdThreadsThreadIdRouteHandler,
  getEmailInboxesRouteHandler,
  getEmailIpPoolsIdRouteHandler,
  getEmailIpPoolsRouteHandler,
  getEmailMessagesEmailIdEventsRouteHandler,
  getEmailMessagesEmailIdRecipientsRecipientIdRouteHandler,
  getEmailMessagesEmailIdRecipientsRouteHandler,
  getEmailMessagesIdRouteHandler,
  getEmailMessagesRouteHandler,
  getEmailTemplatesIdRouteHandler,
  getEmailTemplatesRouteHandler,
  getEmailThreadsRouteHandler,
  getEmailThreadsThreadIdRouteHandler,
  getEmailUnsubscribeGroupsIdRouteHandler,
  getEmailUnsubscribeGroupsIdSuppressionsRouteHandler,
  getEmailUnsubscribeGroupsRouteHandler,
  getEmailValidationsBatchIdRouteHandler,
  getEnterprisesEnterpriseIdDirRouteHandler,
  getEnterprisesEnterpriseIdReputationExternalVerificationRouteHandler,
  getEnterprisesEnterpriseIdReputationNumbersPhoneNumberOwnershipRouteHandler,
  getEnterprisesEnterpriseIdReputationNumbersPhoneNumberRouteHandler,
  getEnterprisesEnterpriseIdReputationNumbersRouteHandler,
  getEnterprisesEnterpriseIdReputationRemediationRemediationIdRouteHandler,
  getEnterprisesEnterpriseIdReputationRemediationRouteHandler,
  getEnterprisesEnterpriseIdReputationRouteHandler,
  getEnterprisesEnterpriseIdRouteHandler,
  getEnterprisesRouteHandler,
  getExternalConnectionsIdCivicAddressesAddressIdRouteHandler,
  getExternalConnectionsIdCivicAddressesRouteHandler,
  getExternalConnectionsIdPhoneNumbersPhoneNumberIdRouteHandler,
  getExternalConnectionsIdPhoneNumbersRouteHandler,
  getExternalConnectionsIdReleasesReleaseIdRouteHandler,
  getExternalConnectionsIdReleasesRouteHandler,
  getExternalConnectionsIdRouteHandler,
  getExternalConnectionsIdUploadsRouteHandler,
  getExternalConnectionsIdUploadsStatusRouteHandler,
  getExternalConnectionsIdUploadsTicketIdRouteHandler,
  getExternalConnectionsLogMessagesIdRouteHandler,
  getExternalConnectionsLogMessagesRouteHandler,
  getExternalConnectionsRouteHandler,
  getExternalRequirementsRegulatoryRequirementIdSubNumberOrdersSubNumberOrderIdRouteHandler,
  getFaxApplicationsIdRouteHandler,
  getFaxApplicationsRouteHandler,
  getFaxesIdRouteHandler,
  getFaxesRouteHandler,
  getFqdnConnectionsFqdnConnectionIdFqdnAuthenticationRouteHandler,
  getFqdnConnectionsIdRouteHandler,
  getFqdnConnectionsRouteHandler,
  getFqdnsIdRouteHandler,
  getFqdnsRouteHandler,
  getGlobalIpAllowedPortsRouteHandler,
  getGlobalIpAssignmentHealthRouteHandler,
  getGlobalIpAssignmentsIdRouteHandler,
  getGlobalIpAssignmentsRouteHandler,
  getGlobalIpAssignmentsUsage2RouteHandler,
  getGlobalIpAssignmentsUsageRouteHandler,
  getGlobalIpHealthChecksIdRouteHandler,
  getGlobalIpHealthChecksRouteHandler,
  getGlobalIpHealthCheckTypesRouteHandler,
  getGlobalIpLatencyRouteHandler,
  getGlobalIpProtocolsRouteHandler,
  getGlobalIpsIdRouteHandler,
  getGlobalIpsRouteHandler,
  getGlobalIpUsageRouteHandler,
  getInboundChannelsRouteHandler,
  getInexplicitNumberOrdersIdRouteHandler,
  getInexplicitNumberOrdersRouteHandler,
  getInfringementClaimsClaimIdRouteHandler,
  getIntegrationSecretsRouteHandler,
  getInventoryCoverageRouteHandler,
  getInvoicesIdRouteHandler,
  getInvoicesRouteHandler,
  getIpConnectionsIdRouteHandler,
  getIpConnectionsRouteHandler,
  getIpsIdRouteHandler,
  getIpsRouteHandler,
  getLedgerBillingGroupReportsIdRouteHandler,
  getLegacyReportingBatchDetailRecordsMessaging2RouteHandler,
  getLegacyReportingBatchDetailRecordsMessagingId2RouteHandler,
  getLegacyReportingBatchDetailRecordsMessagingIdRouteHandler,
  getLegacyReportingBatchDetailRecordsMessagingRouteHandler,
  getLegacyReportingBatchDetailRecordsSpeechToText2RouteHandler,
  getLegacyReportingBatchDetailRecordsSpeechToTextId2RouteHandler,
  getLegacyReportingBatchDetailRecordsSpeechToTextIdRouteHandler,
  getLegacyReportingBatchDetailRecordsSpeechToTextRouteHandler,
  getLegacyReportingBatchDetailRecordsVoice2RouteHandler,
  getLegacyReportingBatchDetailRecordsVoiceFields2RouteHandler,
  getLegacyReportingBatchDetailRecordsVoiceFieldsRouteHandler,
  getLegacyReportingBatchDetailRecordsVoiceId2RouteHandler,
  getLegacyReportingBatchDetailRecordsVoiceIdRouteHandler,
  getLegacyReportingBatchDetailRecordsVoiceRouteHandler,
  getLegacyReportingUsageReportsMessaging2RouteHandler,
  getLegacyReportingUsageReportsMessagingId2RouteHandler,
  getLegacyReportingUsageReportsMessagingIdRouteHandler,
  getLegacyReportingUsageReportsMessagingRouteHandler,
  getLegacyReportingUsageReportsNumberLookup2RouteHandler,
  getLegacyReportingUsageReportsNumberLookupId2RouteHandler,
  getLegacyReportingUsageReportsNumberLookupIdRouteHandler,
  getLegacyReportingUsageReportsNumberLookupRouteHandler,
  getLegacyReportingUsageReportsSpeechToText2RouteHandler,
  getLegacyReportingUsageReportsSpeechToTextRouteHandler,
  getLegacyReportingUsageReportsVoice2RouteHandler,
  getLegacyReportingUsageReportsVoiceId2RouteHandler,
  getLegacyReportingUsageReportsVoiceIdRouteHandler,
  getLegacyReportingUsageReportsVoiceRouteHandler,
  getListChannelZoneIdRouteHandler,
  getListRouteHandler,
  getLlmTokenGatewaySpendEventsRouteHandler,
  getLlmTokenGatewaySpendSummaryRouteHandler,
  getLlmTokenGatewayTokenGroupsIdRouteHandler,
  getLlmTokenGatewayTokenGroupsRouteHandler,
  getLlmTokenGatewayTokenKeysIdRouteHandler,
  getLlmTokenGatewayTokenKeysRouteHandler,
  getLlmTokenGatewayUsageExportRouteHandler,
  getLlmTokenGatewayUsageSummaryRouteHandler,
  getManagedAccountsAllocatableGlobalOutboundChannelsRouteHandler,
  getManagedAccountsIdRouteHandler,
  getManagedAccountsRouteHandler,
  getMediaMediaNameDownloadRouteHandler,
  getMediaMediaNameRouteHandler,
  getMediaRouteHandler,
  getMeetingBotCalendarOauthCallbackRouteHandler,
  getMeetingSessionsIdArtifactsArtifactIdRouteHandler,
  getMeetingSessionsIdArtifactsRouteHandler,
  getMeetingSessionsIdEventsRouteHandler,
  getMeetingSessionsIdRecordingsRouteHandler,
  getMeetingSessionsIdRouteHandler,
  getMeetingSessionsIdTranscriptRouteHandler,
  getMeetingSessionsRouteHandler,
  getMessagesGroupMessageIdRouteHandler,
  getMessagesIdRouteHandler,
  getMessagesRcsDeeplinksAgentId2RouteHandler,
  getMessagesRcsDeeplinksAgentIdRouteHandler,
  getMessagingHostedNumberOrdersIdRouteHandler,
  getMessagingHostedNumberOrdersRouteHandler,
  getMessagingHostedNumbers2RouteHandler,
  getMessagingHostedNumbersIdRouteHandler,
  getMessagingHostedNumbersRouteHandler,
  getMessagingNumbersBulkUpdatesOrderId2RouteHandler,
  getMessagingNumbersBulkUpdatesOrderIdRouteHandler,
  getMessagingOptoutsRouteHandler,
  getMessagingProfileMetricsRouteHandler,
  getMessagingProfilesIdAlphanumericSenderIds2RouteHandler,
  getMessagingProfilesIdAlphanumericSenderIdsRouteHandler,
  getMessagingProfilesIdMetrics2RouteHandler,
  getMessagingProfilesIdMetricsRouteHandler,
  getMessagingProfilesIdPhoneNumbersRouteHandler,
  getMessagingProfilesIdRouteHandler,
  getMessagingProfilesIdShortCodesRouteHandler,
  getMessagingProfilesProfileIdAutorespConfigsAutorespCfgIdRouteHandler,
  getMessagingProfilesProfileIdAutorespConfigsRouteHandler,
  getMessagingProfilesRouteHandler,
  getMessagingRcsAgentsIdRouteHandler,
  getMessagingRcsAgentsRouteHandler,
  getMessagingRcsCapabilitiesAgentIdPhoneNumberRouteHandler,
  getMessagingTollfreeVerificationRequestsIdRouteHandler,
  getMessagingTollfreeVerificationRequestsIdStatusHistory2RouteHandler,
  getMessagingTollfreeVerificationRequestsIdStatusHistoryRouteHandler,
  getMessagingTollfreeVerificationRequestsRouteHandler,
  getMessagingUrlDomainsRouteHandler,
  getMobileNetworkOperatorsRouteHandler,
  getMobilePhoneNumbersIdMessagingRouteHandler,
  getMobilePhoneNumbersIdRouteHandler,
  getMobilePhoneNumbersMessagingRouteHandler,
  getMobilePhoneNumbersRouteHandler,
  getMobilePushCredentialsPushCredentialIdRouteHandler,
  getMobilePushCredentialsRouteHandler,
  getMobileVoiceConnectionsIdRouteHandler,
  getMobileVoiceConnectionsRouteHandler,
  getNetworkCoverageRouteHandler,
  getNetworkRoutesIdRouteHandler,
  getNetworkRoutesRouteHandler,
  getNetworksIdDefaultGatewayRouteHandler,
  getNetworksIdNetworkInterfacesRouteHandler,
  getNetworksIdRouteHandler,
  getNetworksRouteHandler,
  getNoiseSuppressionEnginesRouteHandler,
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
  getNumberOrderPhoneNumbersNumberOrderPhoneNumberIdRouteHandler,
  getNumberOrderPhoneNumbersRouteHandler,
  getNumberOrdersNumberOrderIdRouteHandler,
  getNumberOrdersRouteHandler,
  getNumberReservationsNumberReservationIdRouteHandler,
  getNumberReservationsRouteHandler,
  getOauthAuthorizeRouteHandler,
  getOauthClients2RouteHandler,
  getOauthClientsId2RouteHandler,
  getOauthClientsIdRouteHandler,
  getOauthClientsRouteHandler,
  getOauthConsentConsentTokenRouteHandler,
  getOauthGrants2RouteHandler,
  getOauthGrantsId2RouteHandler,
  getOauthGrantsIdRouteHandler,
  getOauthGrantsRouteHandler,
  getOauthJwksRouteHandler,
  getOrganizationsUsersIdRouteHandler,
  getOrganizationsUsersRouteHandler,
  getOrganizationsUsersUsersGroupsReportRouteHandler,
  getOtaUpdatesIdRouteHandler,
  getOtaUpdatesRouteHandler,
  getOutboundVoiceProfilesIdRouteHandler,
  getOutboundVoiceProfilesRouteHandler,
  getPayConnectorsNameRouteHandler,
  getPayConnectorsRouteHandler,
  getPaymentAutoRechargePrefsRouteHandler,
  getPhoneNumberBlocksJobsIdRouteHandler,
  getPhoneNumberBlocksJobsRouteHandler,
  getPhoneNumbersCsvDownloadsIdRouteHandler,
  getPhoneNumbersCsvDownloadsRouteHandler,
  getPhoneNumbersIdMessagingRouteHandler,
  getPhoneNumbersIdRouteHandler,
  getPhoneNumbersIdVoiceRouteHandler,
  getPhoneNumbersJobsIdRouteHandler,
  getPhoneNumbersJobsRouteHandler,
  getPhoneNumbersMessagingRouteHandler,
  getPhoneNumbersPhoneNumberIdVoicemailRouteHandler,
  getPhoneNumbersRegulatoryRequirements2RouteHandler,
  getPhoneNumbersRegulatoryRequirementsRouteHandler,
  getPhoneNumbersRouteHandler,
  getPhoneNumbersSlimRouteHandler,
  getPhoneNumbersVoiceRouteHandler,
  getPortingEventsIdRouteHandler,
  getPortingEventsRouteHandler,
  getPortingLoaConfigurationsIdPreviewRouteHandler,
  getPortingLoaConfigurationsIdRouteHandler,
  getPortingLoaConfigurationsRouteHandler,
  getPortingOrdersExceptionTypesRouteHandler,
  getPortingOrdersIdActivationJobsActivationJobIdRouteHandler,
  getPortingOrdersIdActivationJobsRouteHandler,
  getPortingOrdersIdAdditionalDocumentsRouteHandler,
  getPortingOrdersIdAllowedFocWindowsRouteHandler,
  getPortingOrdersIdCommentsRouteHandler,
  getPortingOrdersIdLoaTemplateRouteHandler,
  getPortingOrdersIdRequirementsRouteHandler,
  getPortingOrdersIdRouteHandler,
  getPortingOrdersIdSubRequestRouteHandler,
  getPortingOrdersIdVerificationCodesRouteHandler,
  getPortingOrdersPhoneNumberConfigurationsRouteHandler,
  getPortingOrdersPortingOrderIdActionRequirementsRouteHandler,
  getPortingOrdersPortingOrderIdAssociatedPhoneNumbersRouteHandler,
  getPortingOrdersPortingOrderIdPhoneNumberBlocksRouteHandler,
  getPortingOrdersPortingOrderIdPhoneNumberExtensionsRouteHandler,
  getPortingOrdersRouteHandler,
  getPortingPhoneNumbersRouteHandler,
  getPortingReportsIdRouteHandler,
  getPortingReportsRouteHandler,
  getPortingUkCarriersRouteHandler,
  getPortoutsEventsIdRouteHandler,
  getPortoutsEventsRouteHandler,
  getPortoutsIdCommentsRouteHandler,
  getPortoutsIdRouteHandler,
  getPortoutsIdSupportingDocumentsRouteHandler,
  getPortoutsRejectionsPortoutIdRouteHandler,
  getPortoutsReportsIdRouteHandler,
  getPortoutsReportsRouteHandler,
  getPortoutsRouteHandler,
  getPricingProductsRouteHandler,
  getPricingProductsSlugRouteHandler,
  getPrivateWirelessGatewaysIdRouteHandler,
  getPrivateWirelessGatewaysRouteHandler,
  getPronunciationDictsIdRouteHandler,
  getPronunciationDictsRouteHandler,
  getPublicInternetGatewaysIdRouteHandler,
  getPublicInternetGatewaysRouteHandler,
  getQueuesQueueNameCallsCallControlIdRouteHandler,
  getQueuesQueueNameCallsRouteHandler,
  getQueuesQueueNameRouteHandler,
  getQueuesRouteHandler,
  getRcsAgentsIdCarrierApprovalsRouteHandler,
  getRcsAgentsIdRouteHandler,
  getRcsAgentsIdTestDevicesRouteHandler,
  getRcsAgentsRouteHandler,
  getRcsBrandsIdRouteHandler,
  getRcsBrandsRouteHandler,
  getRecordingsRecordingIdRouteHandler,
  getRecordingsRouteHandler,
  getRecordingTranscriptionsRecordingTranscriptionIdRouteHandler,
  getRecordingTranscriptionsRouteHandler,
  getRegionsRouteHandler,
  getRegulatoryRequirementsRouteHandler,
  getReportsCdrUsageReportsSyncRouteHandler,
  getReportsMdrsRouteHandler,
  getReportsMdrUsageReportsIdRouteHandler,
  getReportsMdrUsageReportsRouteHandler,
  getReportsMdrUsageReportsSyncRouteHandler,
  getReportsWdrsRouteHandler,
  getReputationNumbersPhoneNumberRouteHandler,
  getReputationNumbersRouteHandler,
  getRequirementGroupsIdRouteHandler,
  getRequirementGroupsRouteHandler,
  getRequirementsIdRouteHandler,
  getRequirementsRouteHandler,
  getRequirementTypesIdRouteHandler,
  getRequirementTypesRouteHandler,
  getRoomCompositionsRoomCompositionIdRouteHandler,
  getRoomCompositionsRouteHandler,
  getRoomParticipantsRoomParticipantIdRouteHandler,
  getRoomParticipantsRouteHandler,
  getRoomRecordingsRoomRecordingIdRouteHandler,
  getRoomRecordingsRouteHandler,
  getRoomSessionsRoomSessionIdParticipantsRouteHandler,
  getRoomSessionsRoomSessionIdRouteHandler,
  getRoomSessionsRouteHandler,
  getRoomsRoomIdRouteHandler,
  getRoomsRoomIdSessionsRouteHandler,
  getRoomsRouteHandler,
  getSessionAnalysisMetadataRecordTypeRouteHandler,
  getSessionAnalysisMetadataRouteHandler,
  getSessionAnalysisRecordTypeEventIdRouteHandler,
  getSetiBlackBoxTestResultsRouteHandler,
  getShortCodesIdRouteHandler,
  getShortCodesRouteHandler,
  getSimCardActionsIdRouteHandler,
  getSimCardActionsRouteHandler,
  getSimCardDataUsageNotificationsIdRouteHandler,
  getSimCardDataUsageNotificationsRouteHandler,
  getSimCardGroupActionsIdRouteHandler,
  getSimCardGroupActionsRouteHandler,
  getSimCardGroupsIdRouteHandler,
  getSimCardGroupsRouteHandler,
  getSimCardOrdersIdRouteHandler,
  getSimCardOrdersRouteHandler,
  getSimCardsIdActivationCodeRouteHandler,
  getSimCardsIdDeviceDetailsRouteHandler,
  getSimCardsIdPublicIpRouteHandler,
  getSimCardsIdRouteHandler,
  getSimCardsIdWirelessConnectivityLogsRouteHandler,
  getSimCardsRouteHandler,
  getSiprecConnectorsConnectorNameRouteHandler,
  getSipRegistrationStatusRouteHandler,
  getSpeechToTextProvidersRouteHandler,
  getSpeechToTextTranscriptionRouteHandler,
  getSpendLimitsRouteHandler,
  getStorageBucketsBucketNameSslCertificateRouteHandler,
  getStorageBucketsBucketNameUsageApiRouteHandler,
  getStorageBucketsBucketNameUsageStorageRouteHandler,
  getStorageCloudfsIdRouteHandler,
  getStorageCloudfsRouteHandler,
  getStorageKvsIdKeysKeyRouteHandler,
  getStorageKvsIdKeysRouteHandler,
  getStorageKvsIdRouteHandler,
  getStorageKvsRouteHandler,
  getStorageMigrationsIdRouteHandler,
  getStorageMigrationSourceCoverageRouteHandler,
  getStorageMigrationSourcesIdRouteHandler,
  getStorageMigrationSourcesRouteHandler,
  getStorageMigrationsRouteHandler,
  getStorageSqldbsIdRouteHandler,
  getStorageSqldbsRouteHandler,
  getSubNumberOrdersReportReportId2RouteHandler,
  getSubNumberOrdersReportReportIdDownload2RouteHandler,
  getSubNumberOrdersReportReportIdDownloadRouteHandler,
  getSubNumberOrdersReportReportIdRouteHandler,
  getSubNumberOrdersRouteHandler,
  getSubNumberOrdersSubNumberOrderIdRouteHandler,
  getTailscaleSubnetRoutersIdRouteHandler,
  getTailscaleSubnetRoutersRouteHandler,
  getTelephonyCredentialsIdRouteHandler,
  getTelephonyCredentialsIdTokenMaterialRouteHandler,
  getTelephonyCredentialsRouteHandler,
  getTermsOfServiceAgreementsAgreementIdRouteHandler,
  getTermsOfServiceAgreementsRouteHandler,
  getTermsOfServiceInfoRouteHandler,
  getTermsOfServiceStatusRouteHandler,
  getTexmlAccountsAccountSidCallsCallSidRecordingsJsonRouteHandler,
  getTexmlAccountsAccountSidCallsCallSidRouteHandler,
  getTexmlAccountsAccountSidCallsRouteHandler,
  getTexmlAccountsAccountSidConferencesConferenceSidParticipantsCallSidOrParticipantLabelRouteHandler,
  getTexmlAccountsAccountSidConferencesConferenceSidParticipantsRouteHandler,
  getTexmlAccountsAccountSidConferencesConferenceSidRecordingsJsonRouteHandler,
  getTexmlAccountsAccountSidConferencesConferenceSidRecordingsRouteHandler,
  getTexmlAccountsAccountSidConferencesConferenceSidRouteHandler,
  getTexmlAccountsAccountSidConferencesRouteHandler,
  getTexmlAccountsAccountSidQueuesQueueSidRouteHandler,
  getTexmlAccountsAccountSidQueuesRouteHandler,
  getTexmlAccountsAccountSidRecordingsJsonRouteHandler,
  getTexmlAccountsAccountSidRecordingsRecordingSidJsonRouteHandler,
  getTexmlAccountsAccountSidTranscriptionsJsonRouteHandler,
  getTexmlAccountsAccountSidTranscriptionsRecordingTranscriptionSidJsonRouteHandler,
  getTexmlApplicationsIdRouteHandler,
  getTexmlApplicationsRouteHandler,
  getTextToSpeechSpeechRouteHandler,
  getTextToSpeechVoicesRouteHandler,
  getTrafficPolicyProfiles2RouteHandler,
  getTrafficPolicyProfilesId2RouteHandler,
  getTrafficPolicyProfilesIdRouteHandler,
  getTrafficPolicyProfilesRouteHandler,
  getTrafficPolicyProfilesServices2RouteHandler,
  getTrafficPolicyProfilesServicesRouteHandler,
  getTunnelsIdRouteHandler,
  getTunnelsRouteHandler,
  getUacConnectionsIdRouteHandler,
  getUacConnectionsRouteHandler,
  getUsageReportsOptionsRouteHandler,
  getUsageReportsRouteHandler,
  getUserAddresses2RouteHandler,
  getUserAddressesId2RouteHandler,
  getUserAddressesIdRouteHandler,
  getUserAddressesRouteHandler,
  getUserProfileRouteHandler,
  getUserTagsRouteHandler,
  getV2WhatsappBusinessAccountsIdPhoneNumbersRouteHandler,
  getV2WhatsappBusinessAccountsIdRouteHandler,
  getV2WhatsappBusinessAccountsIdSettingsRouteHandler,
  getV2WhatsappBusinessAccountsRouteHandler,
  getV2WhatsappMessageTemplatesIdRouteHandler,
  getV2WhatsappMessageTemplatesRouteHandler,
  getV2WhatsappPhoneNumbersPhoneNumberCallingSettingsRouteHandler,
  getV2WhatsappPhoneNumbersPhoneNumberConversationalComponentsRouteHandler,
  getV2WhatsappPhoneNumbersPhoneNumberConversationWindowRouteHandler,
  getV2WhatsappPhoneNumbersPhoneNumberProfilePhotoRouteHandler,
  getV2WhatsappPhoneNumbersPhoneNumberProfileRouteHandler,
  getV2WhatsappPhoneNumbersPhoneNumberRouteHandler,
  getV2WhatsappPhoneNumbersRouteHandler,
  getV2WhatsappUserDataRouteHandler,
  getVerificationsByPhoneNumberPhoneNumberRouteHandler,
  getVerificationsVerificationIdRouteHandler,
  getVerifiedNumbersPhoneNumberRouteHandler,
  getVerifiedNumbersRouteHandler,
  getVerifyProfilesRouteHandler,
  getVerifyProfilesTemplatesRouteHandler,
  getVerifyProfilesVerifyProfileIdRouteHandler,
  getVirtualCrossConnectsCoverage2RouteHandler,
  getVirtualCrossConnectsCoverageRouteHandler,
  getVirtualCrossConnectsIdRouteHandler,
  getVirtualCrossConnectsRouteHandler,
  getVoiceClonesIdSampleRouteHandler,
  getVoiceClonesRouteHandler,
  getVoiceDesignsIdRouteHandler,
  getVoiceDesignsIdSampleRouteHandler,
  getVoiceDesignsRouteHandler,
  getVoiceSdkCallReportsCallIdRouteHandler,
  getVoiceSdkCallReportsRouteHandler,
  getWebhookDeliveriesIdRouteHandler,
  getWebhookDeliveriesRouteHandler,
  getWebSearchResearchTaskIdRouteHandler,
  getWellKnownOauthAuthorizationServerRouteHandler,
  getWellKnownOauthProtectedResourceRouteHandler,
  getWhatsappBusinessAccountsIdPhoneNumbersRouteHandler,
  getWhatsappBusinessAccountsIdRouteHandler,
  getWhatsappBusinessAccountsIdSettingsRouteHandler,
  getWhatsappBusinessAccountsRouteHandler,
  getWhatsappHostedSignupsIdRouteHandler,
  getWhatsappHostedSignupsRouteHandler,
  getWhatsappMessageTemplatesIdRouteHandler,
  getWhatsappMessageTemplatesRouteHandler,
  getWhatsappPhoneNumbersIdCallingRoutingRouteHandler,
  getWhatsappPhoneNumbersPhoneNumberCallingSettingsRouteHandler,
  getWhatsappPhoneNumbersPhoneNumberConversationalComponentsRouteHandler,
  getWhatsappPhoneNumbersPhoneNumberConversationWindowRouteHandler,
  getWhatsappPhoneNumbersPhoneNumberProfilePhotoRouteHandler,
  getWhatsappPhoneNumbersPhoneNumberProfileRouteHandler,
  getWhatsappPhoneNumbersPhoneNumberRouteHandler,
  getWhatsappPhoneNumbersRouteHandler,
  getWhatsappSignupIdStatusRouteHandler,
  getWhatsappSignupRouteHandler,
  getWireguardInterfacesIdRouteHandler,
  getWireguardInterfacesRouteHandler,
  getWireguardPeersIdConfigRouteHandler,
  getWireguardPeersIdRouteHandler,
  getWireguardPeersRouteHandler,
  getWirelessBlocklistsIdRouteHandler,
  getWirelessBlocklistsRouteHandler,
  getWirelessBlocklistValuesRouteHandler,
  getWirelessDetailRecordsReports2RouteHandler,
  getWirelessDetailRecordsReportsId2RouteHandler,
  getWirelessDetailRecordsReportsIdRouteHandler,
  getWirelessDetailRecordsReportsRouteHandler,
  getWirelessRegionsRouteHandler,
  getX402CreditAccountPaymentsIdRouteHandler,
  getX402CreditAccountPaymentsRouteHandler,
  patch10dlcPartnerCampaignsCampaignIdRouteHandler,
  patchAdvancedOrdersAdvancedOrderIdRequirementGroupRouteHandler,
  patchAgentGatewaysInstanceIdApisApiIdRouteHandler,
  patchAgentGatewaysInstanceIdGuardrailsGuardrailIdRouteHandler,
  patchAgentGatewaysInstanceIdKeysKeyIdRouteHandler,
  patchAgentGatewaysInstanceIdMcpServersServerIdRouteHandler,
  patchAgentGatewaysInstanceIdPoliciesNameRouteHandler,
  patchAgentGatewaysInstanceIdTeamsTeamIdRouteHandler,
  patchAiAvatarsAvatarIdRouteHandler,
  patchAiCollectionsUuidRouteHandler,
  patchAiCollectionsUuidSettingsRouteHandler,
  patchAiMemoryNamespacesNamespaceSettingsRouteHandler,
  patchAiMissionsMissionIdRunsRunIdPlanStepsStepIdRouteHandler,
  patchAiMissionsMissionIdRunsRunIdRouteHandler,
  patchAiTestsSchedulesV1CronJobsIdRouteHandler,
  patchAiTestsTestFrameworkV1MetricsIdRouteHandler,
  patchAiTestsTestFrameworkV1ScenariosIdRouteHandler,
  patchAiToolsToolIdRouteHandler,
  patchAuthenticationProvidersIdRouteHandler,
  patchBillingGroupsIdRouteHandler,
  patchCalendarConnectionsIdMeetingsMeetingIdRouteHandler,
  patchCalendarConnectionsIdRouteHandler,
  patchCallControlApplicationsIdRouteHandler,
  patchCommentsIdReadRouteHandler,
  patchConferencesIdParticipantsParticipantIdRouteHandler,
  patchCredentialConnectionsIdRouteHandler,
  patchDirDirIdReferencesRefTypeSlotRouteHandler,
  patchDirDirIdRouteHandler,
  patchDocumentsIdRouteHandler,
  patchEmailDedicatedIpsIdRouteHandler,
  patchEmailDomainsDomainIdWebhooksIdRouteHandler,
  patchEmailDomainsIdRouteHandler,
  patchEmailInboxesInboxIdDraftsDraftIdRouteHandler,
  patchEmailInboxesInboxIdMessagesMessageIdRouteHandler,
  patchEmailIpPoolsIdRouteHandler,
  patchEmailMessagesEmailIdScheduleRouteHandler,
  patchEmailTemplatesIdRouteHandler,
  patchEmailUnsubscribeGroupsIdRouteHandler,
  patchEnterprisesEnterpriseIdReputationFrequencyRouteHandler,
  patchEnterprisesEnterpriseIdReputationLoaRouteHandler,
  patchEnterprisesEnterpriseIdReputationWebhookRouteHandler,
  patchExternalConnectionsIdLocationsLocationIdRouteHandler,
  patchExternalConnectionsIdPhoneNumbersPhoneNumberIdRouteHandler,
  patchExternalConnectionsIdRouteHandler,
  patchFaxApplicationsIdRouteHandler,
  patchFqdnConnectionsFqdnConnectionIdFqdnAuthenticationRouteHandler,
  patchFqdnConnectionsIdRouteHandler,
  patchFqdnsIdRouteHandler,
  patchGlobalIpAssignmentsIdRouteHandler,
  patchInboundChannelsRouteHandler,
  patchIpConnectionsIdRouteHandler,
  patchIpsIdRouteHandler,
  patchLlmTokenGatewayTokenGroupsIdRouteHandler,
  patchLlmTokenGatewayTokenKeysIdRouteHandler,
  patchManagedAccountsIdRouteHandler,
  patchManagedAccountsIdUpdateGlobalChannelLimitRouteHandler,
  patchMeetingSessionsIdRouteHandler,
  patchMessagingHostedNumbersIdRouteHandler,
  patchMessagingProfilesIdRouteHandler,
  patchMessagingRcsAgentsIdRouteHandler,
  patchMessagingTollfreeVerificationRequestsIdRouteHandler,
  patchMobilePhoneNumbersIdRouteHandler,
  patchMobileVoiceConnectionsIdRouteHandler,
  patchNetworksIdRouteHandler,
  patchNotificationChannelsIdRouteHandler,
  patchNotificationProfilesIdRouteHandler,
  patchNumberOrderPhoneNumbersNumberOrderPhoneNumberIdRouteHandler,
  patchNumberOrdersNumberOrderIdRouteHandler,
  patchOutboundVoiceProfilesIdRouteHandler,
  patchPayConnectorsNameRouteHandler,
  patchPaymentAutoRechargePrefsRouteHandler,
  patchPhoneNumbersIdActionsBundleStatusChangeRouteHandler,
  patchPhoneNumbersIdMessagingRouteHandler,
  patchPhoneNumbersIdRouteHandler,
  patchPhoneNumbersIdVoiceRouteHandler,
  patchPhoneNumbersPhoneNumberIdVoicemailRouteHandler,
  patchPortingLoaConfigurationsIdRouteHandler,
  patchPortingOrdersIdActivationJobsActivationJobIdRouteHandler,
  patchPortingOrdersIdRouteHandler,
  patchPortoutsIdStatusRouteHandler,
  patchPronunciationDictsIdRouteHandler,
  patchQueuesQueueNameCallsCallControlIdRouteHandler,
  patchRcsAgentsIdRouteHandler,
  patchRcsBrandsIdRouteHandler,
  patchRequirementGroupsIdRouteHandler,
  patchRoomsRoomIdRouteHandler,
  patchShortCodesIdRouteHandler,
  patchSimCardDataUsageNotificationsIdRouteHandler,
  patchSimCardGroupsIdRouteHandler,
  patchSimCardsIdRouteHandler,
  patchSpendLimitsProductRouteHandler,
  patchStorageCloudfsIdRouteHandler,
  patchSubNumberOrdersSubNumberOrderIdCancelRouteHandler,
  patchSubNumberOrdersSubNumberOrderIdRouteHandler,
  patchTailscaleSubnetRoutersIdRouteHandler,
  patchTelephonyCredentialsIdRouteHandler,
  patchTexmlApplicationsIdRouteHandler,
  patchTrafficPolicyProfilesId2RouteHandler,
  patchTrafficPolicyProfilesIdRouteHandler,
  patchUacConnectionsIdRouteHandler,
  patchUserProfileRouteHandler,
  patchV2WhatsappBusinessAccountsIdSettingsRouteHandler,
  patchV2WhatsappMessageTemplatesIdRouteHandler,
  patchV2WhatsappPhoneNumbersPhoneNumberCallingSettingsRouteHandler,
  patchV2WhatsappPhoneNumbersPhoneNumberConversationalComponentsRouteHandler,
  patchV2WhatsappPhoneNumbersPhoneNumberProfileRouteHandler,
  patchV2WhatsappUserDataRouteHandler,
  patchVerifyProfilesTemplatesTemplateIdRouteHandler,
  patchVerifyProfilesVerifyProfileIdRouteHandler,
  patchVirtualCrossConnectsIdRouteHandler,
  patchVoiceClonesIdRouteHandler,
  patchVoiceDesignsIdRouteHandler,
  patchWhatsappBusinessAccountsIdSettingsRouteHandler,
  patchWhatsappMessageTemplatesIdRouteHandler,
  patchWhatsappPhoneNumbersIdCallingRoutingRouteHandler,
  patchWhatsappPhoneNumbersPhoneNumberCallingSettingsRouteHandler,
  patchWhatsappPhoneNumbersPhoneNumberConversationalComponentsRouteHandler,
  patchWhatsappPhoneNumbersPhoneNumberProfileRouteHandler,
  patchWireguardPeersIdRouteHandler,
  patchWirelessBlocklistsIdRouteHandler,
  post10dlcBrandBrandId2faEmailRouteHandler,
  post10dlcBrandBrandIdExternalVettingRouteHandler,
  post10dlcBrandBrandIdSmsOtpRouteHandler,
  post10dlcBrandRouteHandler,
  post10dlcCampaignAcceptSharingCampaignIdRouteHandler,
  post10dlcCampaignBuilderRouteHandler,
  post10dlcCampaignCampaignIdAppealRouteHandler,
  post10dlcPhoneNumberAssignmentByProfileRouteHandler,
  post10dlcPhoneNumberCampaignsRouteHandler,
  postAccessIpAddressRouteHandler,
  postAccessIpRangesRouteHandler,
  postActionsPurchaseEsimsRouteHandler,
  postActionsRegisterSimCardsRouteHandler,
  postAddressesActionsValidateRouteHandler,
  postAddressesIdActionsAcceptSuggestionsRouteHandler,
  postAddressesRouteHandler,
  postAdvancedOrdersRouteHandler,
  postAgentGatewaysInstanceIdApisRouteHandler,
  postAgentGatewaysInstanceIdGuardrailsRouteHandler,
  postAgentGatewaysInstanceIdKeysRouteHandler,
  postAgentGatewaysInstanceIdMcpServersRouteHandler,
  postAgentGatewaysInstanceIdPoliciesRouteHandler,
  postAgentGatewaysInstanceIdPolicyAttachmentsRouteHandler,
  postAgentGatewaysInstanceIdTeamsRouteHandler,
  postAgentGatewaysRouteHandler,
  postAiAnthropicV1MessagesRouteHandler,
  postAiAssistantsAssistantIdCanaryDeploysRouteHandler,
  postAiAssistantsAssistantIdChatRouteHandler,
  postAiAssistantsAssistantIdChatSmsRouteHandler,
  postAiAssistantsAssistantIdChatWhatsappRouteHandler,
  postAiAssistantsAssistantIdCloneRouteHandler,
  postAiAssistantsAssistantIdInstructionsEnhanceRouteHandler,
  postAiAssistantsAssistantIdRestoreRouteHandler,
  postAiAssistantsAssistantIdRouteHandler,
  postAiAssistantsAssistantIdScheduledEventsRouteHandler,
  postAiAssistantsAssistantIdTagsRouteHandler,
  postAiAssistantsAssistantIdToolsToolIdTestRouteHandler,
  postAiAssistantsAssistantIdVersionsVersionIdPromoteRouteHandler,
  postAiAssistantsAssistantIdVersionsVersionIdRouteHandler,
  postAiAssistantsImportRouteHandler,
  postAiAssistantsRouteHandler,
  postAiAssistantsTestsRouteHandler,
  postAiAssistantsTestsTestIdRunsRouteHandler,
  postAiAssistantsTestsTestSuitesSuiteNameRunsRouteHandler,
  postAiAudioTranscriptionsRouteHandler,
  postAiAvatarsRouteHandler,
  postAiChatCompletionsRouteHandler,
  postAiClustersRouteHandler,
  postAiCollectionsRouteHandler,
  postAiCollectionsUuidSourcesRouteHandler,
  postAiConversationsConversationIdMessageRouteHandler,
  postAiConversationsInsightGroupsGroupIdInsightsInsightIdAssignRouteHandler,
  postAiConversationsInsightGroupsRouteHandler,
  postAiConversationsInsightsRouteHandler,
  postAiConversationsRouteHandler,
  postAiEmbeddingsRouteHandler,
  postAiEmbeddingsSimilaritySearchRouteHandler,
  postAiEmbeddingsUrlRouteHandler,
  postAiMcpServersRouteHandler,
  postAiMemoryNamespacesNamespaceProfilesProfileIdIngestRouteHandler,
  postAiMemoryNamespacesNamespaceProfilesProfileIdRecallRouteHandler,
  postAiMemoryNamespacesNamespaceProfilesProfileIdRememberRouteHandler,
  postAiMemoryNamespacesNamespaceProfilesProfileIdSummaryPreviewRouteHandler,
  postAiMemoryNamespacesRouteHandler,
  postAiMissionsMissionIdCloneRouteHandler,
  postAiMissionsMissionIdKnowledgeBasesRouteHandler,
  postAiMissionsMissionIdMcpServersRouteHandler,
  postAiMissionsMissionIdRunsRouteHandler,
  postAiMissionsMissionIdRunsRunIdCancelRouteHandler,
  postAiMissionsMissionIdRunsRunIdEventsRouteHandler,
  postAiMissionsMissionIdRunsRunIdPauseRouteHandler,
  postAiMissionsMissionIdRunsRunIdPlanRouteHandler,
  postAiMissionsMissionIdRunsRunIdPlanStepsRouteHandler,
  postAiMissionsMissionIdRunsRunIdResumeRouteHandler,
  postAiMissionsMissionIdRunsRunIdTelnyxAgentsRouteHandler,
  postAiMissionsMissionIdToolsRouteHandler,
  postAiMissionsRouteHandler,
  postAiOpenaiChatCompletionsRouteHandler,
  postAiOpenaiEmbeddingsRouteHandler,
  postAiOpenaiResponsesRouteHandler,
  postAiResponsesRouteHandler,
  postAiSummarizeRouteHandler,
  postAiTestsSchedulesV1CronJobsRouteHandler,
  postAiTestsTestFrameworkV1AiagentsRouteHandler,
  postAiTestsTestFrameworkV1MetricsBulkCreateRouteHandler,
  postAiTestsTestFrameworkV1MetricsGenerateMetricsRouteHandler,
  postAiTestsTestFrameworkV1MetricsRouteHandler,
  postAiTestsTestFrameworkV1ResultsIdRerunRouteHandler,
  postAiTestsTestFrameworkV1ScenariosGenerateBgRouteHandler,
  postAiTestsTestFrameworkV1ScenariosRouteHandler,
  postAiTestsTestFrameworkV1ScenariosRunScenariosRouteHandler,
  postAiTestsTestFrameworkV1ScenariosScenarioAgentRouteHandler,
  postAiToolsRouteHandler,
  postAiTypesafeV1SystemoneRouteHandler,
  postAlphanumericSenderIdsRouteHandler,
  postAuthenticationProvidersRouteHandler,
  postBillingGroupsRouteHandler,
  postBotChallengeRouteHandler,
  postBotSignupResendMagicLinkRouteHandler,
  postBotSignupRouteHandler,
  postBrowserSessionsIdActionsRouteHandler,
  postBrowserSessionsRouteHandler,
  postBundlePricingUserBundlesBulkRouteHandler,
  postCalendarConnectionsRouteHandler,
  postCallControlApplicationsRouteHandler,
  postCallReasonsValidateRouteHandler,
  postCallsCallControlIdActionsAiAssistantAddMessagesRouteHandler,
  postCallsCallControlIdActionsAiAssistantJoinRouteHandler,
  postCallsCallControlIdActionsAiAssistantStartRouteHandler,
  postCallsCallControlIdActionsAiAssistantStopRouteHandler,
  postCallsCallControlIdActionsAnswerRouteHandler,
  postCallsCallControlIdActionsBridgeRouteHandler,
  postCallsCallControlIdActionsConversationRelayStartRouteHandler,
  postCallsCallControlIdActionsConversationRelayStopRouteHandler,
  postCallsCallControlIdActionsEnqueueRouteHandler,
  postCallsCallControlIdActionsForkStartRouteHandler,
  postCallsCallControlIdActionsForkStopRouteHandler,
  postCallsCallControlIdActionsGatherRouteHandler,
  postCallsCallControlIdActionsGatherStopRouteHandler,
  postCallsCallControlIdActionsGatherUsingAiRouteHandler,
  postCallsCallControlIdActionsGatherUsingAudioRouteHandler,
  postCallsCallControlIdActionsGatherUsingSpeakRouteHandler,
  postCallsCallControlIdActionsHangupRouteHandler,
  postCallsCallControlIdActionsLeaveQueueRouteHandler,
  postCallsCallControlIdActionsPayRouteHandler,
  postCallsCallControlIdActionsPlaybackStartRouteHandler,
  postCallsCallControlIdActionsPlaybackStopRouteHandler,
  postCallsCallControlIdActionsRecordPauseRouteHandler,
  postCallsCallControlIdActionsRecordResumeRouteHandler,
  postCallsCallControlIdActionsRecordStartRouteHandler,
  postCallsCallControlIdActionsRecordStopRouteHandler,
  postCallsCallControlIdActionsReferRouteHandler,
  postCallsCallControlIdActionsRejectRouteHandler,
  postCallsCallControlIdActionsSendDtmfRouteHandler,
  postCallsCallControlIdActionsSendSipInfoRouteHandler,
  postCallsCallControlIdActionsSiprecStartRouteHandler,
  postCallsCallControlIdActionsSiprecStopRouteHandler,
  postCallsCallControlIdActionsSpeakRouteHandler,
  postCallsCallControlIdActionsStreamingStartRouteHandler,
  postCallsCallControlIdActionsStreamingStopRouteHandler,
  postCallsCallControlIdActionsSuppressionStartRouteHandler,
  postCallsCallControlIdActionsSuppressionStopRouteHandler,
  postCallsCallControlIdActionsSwitchSupervisorRoleRouteHandler,
  postCallsCallControlIdActionsTranscriptionStartRouteHandler,
  postCallsCallControlIdActionsTranscriptionStopRouteHandler,
  postCallsCallControlIdActionsTransferRouteHandler,
  postCallsRouteHandler,
  postCommentsRouteHandler,
  postConferencesIdActionsEndRouteHandler,
  postConferencesIdActionsGatherUsingAudioRouteHandler,
  postConferencesIdActionsHoldRouteHandler,
  postConferencesIdActionsJoinRouteHandler,
  postConferencesIdActionsLeaveRouteHandler,
  postConferencesIdActionsMuteRouteHandler,
  postConferencesIdActionsPlayRouteHandler,
  postConferencesIdActionsRecordPauseRouteHandler,
  postConferencesIdActionsRecordResumeRouteHandler,
  postConferencesIdActionsRecordStartRouteHandler,
  postConferencesIdActionsRecordStopRouteHandler,
  postConferencesIdActionsSendDtmfRouteHandler,
  postConferencesIdActionsSpeakRouteHandler,
  postConferencesIdActionsStopRouteHandler,
  postConferencesIdActionsUnholdRouteHandler,
  postConferencesIdActionsUnmuteRouteHandler,
  postConferencesIdActionsUpdateRouteHandler,
  postConferencesRouteHandler,
  postCredentialConnectionsIdActionsCheckRegistrationStatusRouteHandler,
  postCredentialConnectionsRouteHandler,
  postCustomerServiceRecordsPhoneNumberCoveragesRouteHandler,
  postCustomerServiceRecordsRouteHandler,
  postCustomStorageCredentialsConnectionIdRouteHandler,
  postDialogflowConnectionsConnectionIdRouteHandler,
  postDirDirIdBpoLoaRouteHandler,
  postDirDirIdCommentsRouteHandler,
  postDirDirIdLoaRouteHandler,
  postDirDirIdPhoneNumbersRouteHandler,
  postDirDirIdReferencesRouteHandler,
  postDirDirIdSubmitRouteHandler,
  postDirDirIdVerifyEmailConfirmRouteHandler,
  postDirDirIdVerifyEmailRouteHandler,
  postDocumentsRouteHandler,
  postDynamicEmergencyAddressesRouteHandler,
  postDynamicEmergencyEndpointsRouteHandler,
  postEmailBlocksImportRouteHandler,
  postEmailBlocksRouteHandler,
  postEmailDedicatedIpsIdActionsCompleteWarmupRouteHandler,
  postEmailDedicatedIpsIdActionsPauseWarmupRouteHandler,
  postEmailDedicatedIpsIdActionsResumeWarmupRouteHandler,
  postEmailDedicatedIpsIdActionsStartWarmupRouteHandler,
  postEmailDedicatedIpsRouteHandler,
  postEmailDomainsDomainIdRotateDkimRouteHandler,
  postEmailDomainsDomainIdVerifyRouteHandler,
  postEmailDomainsDomainIdWebhooksRouteHandler,
  postEmailDomainsRouteHandler,
  postEmailInboxesInboxIdDraftsDraftIdSendRouteHandler,
  postEmailInboxesInboxIdDraftsRouteHandler,
  postEmailInboxesInboxIdFiltersRouteHandler,
  postEmailInboxesInboxIdMessagesMessageIdActionsForwardRouteHandler,
  postEmailInboxesInboxIdMessagesMessageIdActionsReplyAllRouteHandler,
  postEmailInboxesInboxIdMessagesMessageIdActionsReplyRouteHandler,
  postEmailInboxesInboxIdMessagesMessageIdDraftsRouteHandler,
  postEmailInboxesInboxIdMessagesMessageIdLabelsRouteHandler,
  postEmailInboxesInboxIdThreadsThreadIdLabelsRouteHandler,
  postEmailInboxesRouteHandler,
  postEmailIpPoolsIdIpsRouteHandler,
  postEmailIpPoolsRouteHandler,
  postEmailMessagesBatchRouteHandler,
  postEmailMessagesRouteHandler,
  postEmailTemplatesIdRenderRouteHandler,
  postEmailTemplatesRouteHandler,
  postEmailUnsubscribeGroupsIdSuppressionsRouteHandler,
  postEmailUnsubscribeGroupsRouteHandler,
  postEmailValidationsBatchRouteHandler,
  postEmailValidationsRouteHandler,
  postEnterprisesEnterpriseIdBrandedCallingRouteHandler,
  postEnterprisesEnterpriseIdDirRouteHandler,
  postEnterprisesEnterpriseIdReputationExternalVerificationRouteHandler,
  postEnterprisesEnterpriseIdReputationLoaRouteHandler,
  postEnterprisesEnterpriseIdReputationNumbersPhoneNumberOwnershipConfirmRouteHandler,
  postEnterprisesEnterpriseIdReputationNumbersRefreshRouteHandler,
  postEnterprisesEnterpriseIdReputationNumbersRouteHandler,
  postEnterprisesEnterpriseIdReputationRemediationRouteHandler,
  postEnterprisesEnterpriseIdReputationRouteHandler,
  postEnterprisesEnterpriseIdVerifyEmailConfirmRouteHandler,
  postEnterprisesEnterpriseIdVerifyEmailRouteHandler,
  postEnterprisesRouteHandler,
  postExternalConnectionsIdUploadsRefreshRouteHandler,
  postExternalConnectionsIdUploadsRouteHandler,
  postExternalConnectionsIdUploadsTicketIdRetryRouteHandler,
  postExternalConnectionsRouteHandler,
  postExternalRequirementsRegulatoryRequirementIdSubNumberOrdersSubNumberOrderIdRouteHandler,
  postFaxApplicationsRouteHandler,
  postFaxesIdActionsCancelRouteHandler,
  postFaxesIdActionsRefreshRouteHandler,
  postFaxesRouteHandler,
  postFqdnConnectionsRouteHandler,
  postFqdnsRouteHandler,
  postGlobalIpAssignmentsRouteHandler,
  postGlobalIpHealthChecksRouteHandler,
  postGlobalIpsRouteHandler,
  postInexplicitNumberOrdersRouteHandler,
  postInfringementClaimsClaimIdContestRouteHandler,
  postIntegrationSecretsRouteHandler,
  postIpConnectionsRouteHandler,
  postIpsRouteHandler,
  postLedgerBillingGroupReportsRouteHandler,
  postLegacyReportingBatchDetailRecordsMessaging2RouteHandler,
  postLegacyReportingBatchDetailRecordsMessagingRouteHandler,
  postLegacyReportingBatchDetailRecordsSpeechToText2RouteHandler,
  postLegacyReportingBatchDetailRecordsSpeechToTextRouteHandler,
  postLegacyReportingBatchDetailRecordsVoice2RouteHandler,
  postLegacyReportingBatchDetailRecordsVoiceRouteHandler,
  postLegacyReportingUsageReportsMessaging2RouteHandler,
  postLegacyReportingUsageReportsMessagingRouteHandler,
  postLegacyReportingUsageReportsNumberLookup2RouteHandler,
  postLegacyReportingUsageReportsNumberLookupRouteHandler,
  postLegacyReportingUsageReportsVoice2RouteHandler,
  postLegacyReportingUsageReportsVoiceRouteHandler,
  postLlmTokenGatewayTokenGroupsRouteHandler,
  postLlmTokenGatewayTokenKeysRouteHandler,
  postMachinePaymentsAccountCreditRouteHandler,
  postManagedAccountsIdActionsDisableRouteHandler,
  postManagedAccountsIdActionsEnableRouteHandler,
  postManagedAccountsRouteHandler,
  postMediaRouteHandler,
  postMeetingSessionsIdActionsSendChatRouteHandler,
  postMeetingSessionsIdActionsSpeakRouteHandler,
  postMeetingSessionsIdActionsStopSpeakingRouteHandler,
  postMeetingSessionsIdArtifactsRouteHandler,
  postMeetingSessionsRouteHandler,
  postMessagesAlphanumericSenderId2RouteHandler,
  postMessagesAlphanumericSenderIdRouteHandler,
  postMessagesGroupMmsRouteHandler,
  postMessagesLongCodeRouteHandler,
  postMessagesNumberPoolRouteHandler,
  postMessagesRcsRouteHandler,
  postMessagesRouteHandler,
  postMessagesScheduleRouteHandler,
  postMessagesShortCodeRouteHandler,
  postMessagesWhatsappRouteHandler,
  postMessagingHostedNumberOrdersEligibilityNumbersCheckRouteHandler,
  postMessagingHostedNumberOrdersIdActionsFileUploadRouteHandler,
  postMessagingHostedNumberOrdersIdValidationCodesRouteHandler,
  postMessagingHostedNumberOrdersIdVerificationCodesRouteHandler,
  postMessagingHostedNumberOrdersRouteHandler,
  postMessagingNumbersBulkUpdates2RouteHandler,
  postMessagingNumbersBulkUpdatesRouteHandler,
  postMessagingProfilesIdActionsRegenerateSecret2RouteHandler,
  postMessagingProfilesIdActionsRegenerateSecretRouteHandler,
  postMessagingProfilesProfileIdAutorespConfigsRouteHandler,
  postMessagingProfilesRouteHandler,
  postMessagingRcsBulkCapabilitiesRouteHandler,
  postMessagingTollfreeVerificationRequestsRouteHandler,
  postMobilePushCredentialsRouteHandler,
  postMobileVoiceConnectionsRouteHandler,
  postNetworkRoutesRouteHandler,
  postNetworksIdDefaultGatewayRouteHandler,
  postNetworksRouteHandler,
  postNotificationChannelsRouteHandler,
  postNotificationProfilesRouteHandler,
  postNotificationSettingsRouteHandler,
  postNumberBlockOrdersRouteHandler,
  postNumberOrderPhoneNumbersIdRequirementGroupRouteHandler,
  postNumberOrdersRouteHandler,
  postNumberReservationsNumberReservationIdActionsExtendRouteHandler,
  postNumberReservationsRouteHandler,
  postNumbersFeaturesRouteHandler,
  postOauthClients2RouteHandler,
  postOauthClientsRouteHandler,
  postOauthGrantsRouteHandler,
  postOauthIntrospectRouteHandler,
  postOauthRegisterRouteHandler,
  postOauthTokenRouteHandler,
  postOperatorConnectActionsRefreshRouteHandler,
  postOrganizationsUsersIdActionsRemoveRouteHandler,
  postOutboundVoiceProfilesRouteHandler,
  postPayConnectorsRouteHandler,
  postPaymentStoredPaymentTransactionsRouteHandler,
  postPhoneNumberBlocksJobsDeletePhoneNumberBlockRouteHandler,
  postPhoneNumbersActionsVerifyOwnershipRouteHandler,
  postPhoneNumbersCsvDownloadsRouteHandler,
  postPhoneNumbersIdActionsEnableEmergencyRouteHandler,
  postPhoneNumbersJobsDeletePhoneNumbersRouteHandler,
  postPhoneNumbersJobsUpdateEmergencySettingsRouteHandler,
  postPhoneNumbersJobsUpdatePhoneNumbersRouteHandler,
  postPhoneNumbersPhoneNumberIdVoicemailRouteHandler,
  postPortabilityChecksRouteHandler,
  postPortingEventsIdRepublishRouteHandler,
  postPortingLoaConfigurationsPreviewRouteHandler,
  postPortingLoaConfigurationsRouteHandler,
  postPortingOrdersIdActionsActivateRouteHandler,
  postPortingOrdersIdActionsCancelRouteHandler,
  postPortingOrdersIdActionsConfirmRouteHandler,
  postPortingOrdersIdActionsShareRouteHandler,
  postPortingOrdersIdAdditionalDocumentsRouteHandler,
  postPortingOrdersIdCommentsRouteHandler,
  postPortingOrdersIdVerificationCodesSendRouteHandler,
  postPortingOrdersIdVerificationCodesVerifyRouteHandler,
  postPortingOrdersPhoneNumberConfigurationsRouteHandler,
  postPortingOrdersPortingOrderIdActionRequirementsIdInitiateRouteHandler,
  postPortingOrdersPortingOrderIdAssociatedPhoneNumbersRouteHandler,
  postPortingOrdersPortingOrderIdPhoneNumberBlocksRouteHandler,
  postPortingOrdersPortingOrderIdPhoneNumberExtensionsRouteHandler,
  postPortingOrdersRouteHandler,
  postPortingReportsRouteHandler,
  postPortoutsEventsIdRepublishRouteHandler,
  postPortoutsIdCommentsRouteHandler,
  postPortoutsIdSupportingDocumentsRouteHandler,
  postPortoutsReportsRouteHandler,
  postPrivateWirelessGatewaysRouteHandler,
  postPronunciationDictsRouteHandler,
  postPublicInternetGatewaysRouteHandler,
  postQueuesQueueNameRouteHandler,
  postQueuesRouteHandler,
  postRcsAgentsIdLaunchRouteHandler,
  postRcsAgentsIdSubmitRouteHandler,
  postRcsAgentsIdTestDevicesRouteHandler,
  postRcsAgentsRouteHandler,
  postRcsBrandsIdSubmitRouteHandler,
  postRcsBrandsRouteHandler,
  postRecordingsActionsDeleteRouteHandler,
  postReportsMdrUsageReportsRouteHandler,
  postRequirementGroupsIdSubmitForApprovalRouteHandler,
  postRequirementGroupsRouteHandler,
  postRequirementsIdVersionsRouteHandler,
  postRoomCompositionsRouteHandler,
  postRoomSessionsRoomSessionIdActionsEndRouteHandler,
  postRoomSessionsRoomSessionIdActionsKickRouteHandler,
  postRoomSessionsRoomSessionIdActionsMuteRouteHandler,
  postRoomSessionsRoomSessionIdActionsUnmuteRouteHandler,
  postRoomsRoomIdActionsGenerateJoinClientTokenRouteHandler,
  postRoomsRoomIdActionsRefreshClientTokenRouteHandler,
  postRoomsRouteHandler,
  postSimCardDataUsageNotificationsRouteHandler,
  postSimCardGroupsIdActionsRemovePrivateWirelessGatewayRouteHandler,
  postSimCardGroupsIdActionsRemoveWirelessBlocklistRouteHandler,
  postSimCardGroupsIdActionsSetPrivateWirelessGatewayRouteHandler,
  postSimCardGroupsIdActionsSetWirelessBlocklistRouteHandler,
  postSimCardGroupsRouteHandler,
  postSimCardOrderPreviewRouteHandler,
  postSimCardOrdersRouteHandler,
  postSimCardsActionsBulkDisableVoiceRouteHandler,
  postSimCardsActionsBulkEnableVoiceRouteHandler,
  postSimCardsActionsBulkSetPublicIpsRouteHandler,
  postSimCardsActionsValidateRegistrationCodesRouteHandler,
  postSimCardsIdActionsDisableRouteHandler,
  postSimCardsIdActionsDisableVoiceRouteHandler,
  postSimCardsIdActionsEnableRouteHandler,
  postSimCardsIdActionsEnableVoiceRouteHandler,
  postSimCardsIdActionsRemovePublicIpRouteHandler,
  postSimCardsIdActionsSetPublicIpRouteHandler,
  postSimCardsIdActionsSetStandbyRouteHandler,
  postSiprecConnectorsRouteHandler,
  postSpendLimitsRouteHandler,
  postStorageBucketsBucketNameObjectNamePresignedUrlRouteHandler,
  postStorageCloudfsIdActionsRotateMetaTokenRouteHandler,
  postStorageCloudfsRouteHandler,
  postStorageKvsRouteHandler,
  postStorageMigrationsIdActionsStopRouteHandler,
  postStorageMigrationSourcesRouteHandler,
  postStorageMigrationsRouteHandler,
  postStorageSqldbsIdActionsQueryRouteHandler,
  postStorageSqldbsRouteHandler,
  postSubNumberOrdersIdRequirementGroupRouteHandler,
  postSubNumberOrdersReport2RouteHandler,
  postSubNumberOrdersReportRouteHandler,
  postTailscaleSubnetRoutersRouteHandler,
  postTelephonyCredentialsIdTokenRouteHandler,
  postTelephonyCredentialsRouteHandler,
  postTermsOfServiceBrandedCallingAgreeRouteHandler,
  postTermsOfServiceNumberReputationAgreeRouteHandler,
  postTexmlAccountsAccountSidCallsCallSidRecordingsJsonRouteHandler,
  postTexmlAccountsAccountSidCallsCallSidRecordingsRecordingSidJsonRouteHandler,
  postTexmlAccountsAccountSidCallsCallSidRouteHandler,
  postTexmlAccountsAccountSidCallsCallSidSiprecJsonRouteHandler,
  postTexmlAccountsAccountSidCallsCallSidSiprecSiprecSidJsonRouteHandler,
  postTexmlAccountsAccountSidCallsCallSidStreamsJsonRouteHandler,
  postTexmlAccountsAccountSidCallsCallSidStreamsStreamingSidJsonRouteHandler,
  postTexmlAccountsAccountSidCallsRouteHandler,
  postTexmlAccountsAccountSidConferencesConferenceSidParticipantsCallSidOrParticipantLabelRouteHandler,
  postTexmlAccountsAccountSidConferencesConferenceSidParticipantsRouteHandler,
  postTexmlAccountsAccountSidConferencesConferenceSidRouteHandler,
  postTexmlAccountsAccountSidQueuesQueueSidRouteHandler,
  postTexmlAccountsAccountSidQueuesRouteHandler,
  postTexmlAiCallsConnectionIdRouteHandler,
  postTexmlApplicationsRouteHandler,
  postTexmlCallsConnectionIdRouteHandler,
  postTexmlSecretsRouteHandler,
  postTextToSpeechSpeechRouteHandler,
  postTrafficPolicyProfiles2RouteHandler,
  postTrafficPolicyProfilesRouteHandler,
  postTunnelsIdActionsRotateTokenRouteHandler,
  postTunnelsRouteHandler,
  postUacConnectionsIdActionsCheckRegistrationStatusRouteHandler,
  postUacConnectionsRouteHandler,
  postUserAddresses2RouteHandler,
  postUserAddressesRouteHandler,
  postV2WhatsappBusinessAccountsIdPhoneNumbersRouteHandler,
  postV2WhatsappMessageTemplatesRouteHandler,
  postV2WhatsappPhoneNumbersPhoneNumberProfilePhotoRouteHandler,
  postV2WhatsappPhoneNumbersPhoneNumberResendVerificationRouteHandler,
  postV2WhatsappPhoneNumbersPhoneNumberVerifyRouteHandler,
  postVerificationsByPhoneNumberPhoneNumberActionsVerifyRouteHandler,
  postVerificationsCallRouteHandler,
  postVerificationsFlashcallRouteHandler,
  postVerificationsSmsRouteHandler,
  postVerificationsVerificationIdActionsVerifyRouteHandler,
  postVerificationsWhatsappRouteHandler,
  postVerifiedNumbersPhoneNumberActionsVerifyRouteHandler,
  postVerifiedNumbersRouteHandler,
  postVerifyProfilesRouteHandler,
  postVerifyProfilesTemplatesRouteHandler,
  postVirtualCrossConnectsRouteHandler,
  postVoiceClonesFromUploadRouteHandler,
  postVoiceClonesRouteHandler,
  postVoiceDesignsRouteHandler,
  postWebSearchContentsRouteHandler,
  postWebSearchResearchRouteHandler,
  postWebSearchRouteHandler,
  postWhatsappBusinessAccountsIdPhoneNumbersRouteHandler,
  postWhatsappHostedSignupsRouteHandler,
  postWhatsappMessageTemplatesRouteHandler,
  postWhatsappPhoneNumbersPhoneNumberProfilePhotoRouteHandler,
  postWhatsappPhoneNumbersPhoneNumberResendVerificationRouteHandler,
  postWhatsappPhoneNumbersPhoneNumberVerifyRouteHandler,
  postWireguardInterfacesRouteHandler,
  postWireguardPeersRouteHandler,
  postWirelessBlocklistsRouteHandler,
  postWirelessDetailRecordsReports2RouteHandler,
  postWirelessDetailRecordsReportsRouteHandler,
  postX402CreditAccountQuoteRouteHandler,
  postX402CreditAccountRouteHandler,
  put10dlcBrandBrandIdExternalVettingRouteHandler,
  put10dlcBrandBrandIdRevetRouteHandler,
  put10dlcBrandBrandIdRouteHandler,
  put10dlcBrandBrandIdSmsOtpRouteHandler,
  put10dlcCampaignCampaignIdRouteHandler,
  put10dlcPhoneNumberCampaignsPhoneNumberRouteHandler,
  putAgentGatewaysInstanceIdKeysKeyIdToolPermissionsRouteHandler,
  putAgentGatewaysInstanceIdTeamsTeamIdToolPermissionsRouteHandler,
  putAiAssistantsAssistantIdCanaryDeploysRouteHandler,
  putAiAssistantsAssistantIdToolsToolIdRouteHandler,
  putAiAssistantsTestsTestIdRouteHandler,
  putAiCollectionsUuidSettingsRouteHandler,
  putAiCollectionsUuidSourcesRouteHandler,
  putAiConversationsConversationIdRouteHandler,
  putAiConversationsInsightGroupsGroupIdRouteHandler,
  putAiConversationsInsightsInsightIdRouteHandler,
  putAiMcpServersMcpServerIdRouteHandler,
  putAiMissionsMissionIdKnowledgeBasesKnowledgeBaseIdRouteHandler,
  putAiMissionsMissionIdMcpServersMcpServerIdRouteHandler,
  putAiMissionsMissionIdRouteHandler,
  putAiMissionsMissionIdToolsToolIdRouteHandler,
  putAiTestsTestFrameworkV1AiagentsIdRouteHandler,
  putCallsCallControlIdActionsClientStateUpdateRouteHandler,
  putChannelZonesChannelZoneIdRouteHandler,
  putComputeFuncsIdLogsExportRouteHandler,
  putCustomStorageCredentialsConnectionIdRouteHandler,
  putDialogflowConnectionsConnectionIdRouteHandler,
  putDirDirIdInfringementUpdateRouteHandler,
  putEmailInboxesInboxIdDraftsDraftIdRouteHandler,
  putEmailInboxesInboxIdFiltersRouteHandler,
  putEmailTemplatesIdRouteHandler,
  putEnterprisesEnterpriseIdRouteHandler,
  putMediaMediaNameRouteHandler,
  putMessagingProfilesProfileIdAutorespConfigsAutorespCfgIdRouteHandler,
  putMessagingRcsTestNumberInviteIdPhoneNumberRouteHandler,
  putOauthClientsId2RouteHandler,
  putOauthClientsIdRouteHandler,
  putSiprecConnectorsConnectorNameRouteHandler,
  putStorageBucketsBucketNameSslCertificateRouteHandler,
  putStorageKvsIdKeysKeyRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    getWellKnownOauthAuthorizationServerRoute,
    getWellKnownOauthAuthorizationServerRouteHandler,
  )
  .openapi(getWellKnownOauthProtectedResourceRoute, getWellKnownOauthProtectedResourceRouteHandler)
  .openapi(get10dlcBrandRoute, get10dlcBrandRouteHandler)
  .openapi(post10dlcBrandRoute, post10dlcBrandRouteHandler)
  .openapi(get10dlcBrandFeedbackBrandIdRoute, get10dlcBrandFeedbackBrandIdRouteHandler)
  .openapi(get10dlcBrandSmsOtpReferenceIdRoute, get10dlcBrandSmsOtpReferenceIdRouteHandler)
  .openapi(delete10dlcBrandBrandIdRoute, delete10dlcBrandBrandIdRouteHandler)
  .openapi(get10dlcBrandBrandIdRoute, get10dlcBrandBrandIdRouteHandler)
  .openapi(put10dlcBrandBrandIdRoute, put10dlcBrandBrandIdRouteHandler)
  .openapi(post10dlcBrandBrandId2faEmailRoute, post10dlcBrandBrandId2faEmailRouteHandler)
  .openapi(
    get10dlcBrandBrandIdExternalVettingRoute,
    get10dlcBrandBrandIdExternalVettingRouteHandler,
  )
  .openapi(
    post10dlcBrandBrandIdExternalVettingRoute,
    post10dlcBrandBrandIdExternalVettingRouteHandler,
  )
  .openapi(
    put10dlcBrandBrandIdExternalVettingRoute,
    put10dlcBrandBrandIdExternalVettingRouteHandler,
  )
  .openapi(put10dlcBrandBrandIdRevetRoute, put10dlcBrandBrandIdRevetRouteHandler)
  .openapi(get10dlcBrandBrandIdSmsOtpRoute, get10dlcBrandBrandIdSmsOtpRouteHandler)
  .openapi(post10dlcBrandBrandIdSmsOtpRoute, post10dlcBrandBrandIdSmsOtpRouteHandler)
  .openapi(put10dlcBrandBrandIdSmsOtpRoute, put10dlcBrandBrandIdSmsOtpRouteHandler)
  .openapi(get10dlcBrandFeedbackBrandId2Route, get10dlcBrandFeedbackBrandId2RouteHandler)
  .openapi(get10dlcCampaignRoute, get10dlcCampaignRouteHandler)
  .openapi(
    post10dlcCampaignAcceptSharingCampaignIdRoute,
    post10dlcCampaignAcceptSharingCampaignIdRouteHandler,
  )
  .openapi(get10dlcCampaignUsecaseCostRoute, get10dlcCampaignUsecaseCostRouteHandler)
  .openapi(get10dlcCampaignUsecaseCost2Route, get10dlcCampaignUsecaseCost2RouteHandler)
  .openapi(delete10dlcCampaignCampaignIdRoute, delete10dlcCampaignCampaignIdRouteHandler)
  .openapi(get10dlcCampaignCampaignIdRoute, get10dlcCampaignCampaignIdRouteHandler)
  .openapi(put10dlcCampaignCampaignIdRoute, put10dlcCampaignCampaignIdRouteHandler)
  .openapi(post10dlcCampaignCampaignIdAppealRoute, post10dlcCampaignCampaignIdAppealRouteHandler)
  .openapi(
    get10dlcCampaignCampaignIdMnoMetadataRoute,
    get10dlcCampaignCampaignIdMnoMetadataRouteHandler,
  )
  .openapi(
    get10dlcCampaignCampaignIdOperationStatusRoute,
    get10dlcCampaignCampaignIdOperationStatusRouteHandler,
  )
  .openapi(
    get10dlcCampaignCampaignIdOsrAttributesRoute,
    get10dlcCampaignCampaignIdOsrAttributesRouteHandler,
  )
  .openapi(
    get10dlcCampaignCampaignIdOsrAttributes2Route,
    get10dlcCampaignCampaignIdOsrAttributes2RouteHandler,
  )
  .openapi(get10dlcCampaignCampaignIdSharingRoute, get10dlcCampaignCampaignIdSharingRouteHandler)
  .openapi(post10dlcCampaignBuilderRoute, post10dlcCampaignBuilderRouteHandler)
  .openapi(
    get10dlcCampaignBuilderBrandBrandIdUsecaseUsecaseRoute,
    get10dlcCampaignBuilderBrandBrandIdUsecaseUsecaseRouteHandler,
  )
  .openapi(get10dlcEnumEndpointRoute, get10dlcEnumEndpointRouteHandler)
  .openapi(get10dlcPartnerCampaignSharedByMeRoute, get10dlcPartnerCampaignSharedByMeRouteHandler)
  .openapi(
    get10dlcPartnerCampaignCampaignIdSharingRoute,
    get10dlcPartnerCampaignCampaignIdSharingRouteHandler,
  )
  .openapi(get10dlcPartnerCampaignsRoute, get10dlcPartnerCampaignsRouteHandler)
  .openapi(get10dlcPartnerCampaignsCampaignIdRoute, get10dlcPartnerCampaignsCampaignIdRouteHandler)
  .openapi(
    patch10dlcPartnerCampaignsCampaignIdRoute,
    patch10dlcPartnerCampaignsCampaignIdRouteHandler,
  )
  .openapi(
    post10dlcPhoneNumberAssignmentByProfileRoute,
    post10dlcPhoneNumberAssignmentByProfileRouteHandler,
  )
  .openapi(
    get10dlcPhoneNumberAssignmentByProfileTaskIdRoute,
    get10dlcPhoneNumberAssignmentByProfileTaskIdRouteHandler,
  )
  .openapi(
    get10dlcPhoneNumberAssignmentByProfileTaskIdPhoneNumbersRoute,
    get10dlcPhoneNumberAssignmentByProfileTaskIdPhoneNumbersRouteHandler,
  )
  .openapi(get10dlcPhoneNumberCampaignsRoute, get10dlcPhoneNumberCampaignsRouteHandler)
  .openapi(post10dlcPhoneNumberCampaignsRoute, post10dlcPhoneNumberCampaignsRouteHandler)
  .openapi(
    delete10dlcPhoneNumberCampaignsPhoneNumberRoute,
    delete10dlcPhoneNumberCampaignsPhoneNumberRouteHandler,
  )
  .openapi(
    get10dlcPhoneNumberCampaignsPhoneNumberRoute,
    get10dlcPhoneNumberCampaignsPhoneNumberRouteHandler,
  )
  .openapi(
    put10dlcPhoneNumberCampaignsPhoneNumberRoute,
    put10dlcPhoneNumberCampaignsPhoneNumberRouteHandler,
  )
  .openapi(getAccessIpAddressRoute, getAccessIpAddressRouteHandler)
  .openapi(postAccessIpAddressRoute, postAccessIpAddressRouteHandler)
  .openapi(
    deleteAccessIpAddressAccessIpAddressIdRoute,
    deleteAccessIpAddressAccessIpAddressIdRouteHandler,
  )
  .openapi(
    getAccessIpAddressAccessIpAddressIdRoute,
    getAccessIpAddressAccessIpAddressIdRouteHandler,
  )
  .openapi(getAccessIpRangesRoute, getAccessIpRangesRouteHandler)
  .openapi(postAccessIpRangesRoute, postAccessIpRangesRouteHandler)
  .openapi(
    deleteAccessIpRangesAccessIpRangeIdRoute,
    deleteAccessIpRangesAccessIpRangeIdRouteHandler,
  )
  .openapi(postActionsPurchaseEsimsRoute, postActionsPurchaseEsimsRouteHandler)
  .openapi(postActionsRegisterSimCardsRoute, postActionsRegisterSimCardsRouteHandler)
  .openapi(getAddressesRoute, getAddressesRouteHandler)
  .openapi(postAddressesRoute, postAddressesRouteHandler)
  .openapi(postAddressesActionsValidateRoute, postAddressesActionsValidateRouteHandler)
  .openapi(deleteAddressesIdRoute, deleteAddressesIdRouteHandler)
  .openapi(getAddressesIdRoute, getAddressesIdRouteHandler)
  .openapi(
    postAddressesIdActionsAcceptSuggestionsRoute,
    postAddressesIdActionsAcceptSuggestionsRouteHandler,
  )
  .openapi(getAdvancedOrdersRoute, getAdvancedOrdersRouteHandler)
  .openapi(postAdvancedOrdersRoute, postAdvancedOrdersRouteHandler)
  .openapi(
    patchAdvancedOrdersAdvancedOrderIdRequirementGroupRoute,
    patchAdvancedOrdersAdvancedOrderIdRequirementGroupRouteHandler,
  )
  .openapi(getAdvancedOrdersOrderIdRoute, getAdvancedOrdersOrderIdRouteHandler)
  .openapi(getAgentGatewaysRoute, getAgentGatewaysRouteHandler)
  .openapi(postAgentGatewaysRoute, postAgentGatewaysRouteHandler)
  .openapi(deleteAgentGatewaysInstanceIdRoute, deleteAgentGatewaysInstanceIdRouteHandler)
  .openapi(getAgentGatewaysInstanceIdRoute, getAgentGatewaysInstanceIdRouteHandler)
  .openapi(getAgentGatewaysInstanceIdApisRoute, getAgentGatewaysInstanceIdApisRouteHandler)
  .openapi(postAgentGatewaysInstanceIdApisRoute, postAgentGatewaysInstanceIdApisRouteHandler)
  .openapi(
    deleteAgentGatewaysInstanceIdApisApiIdRoute,
    deleteAgentGatewaysInstanceIdApisApiIdRouteHandler,
  )
  .openapi(
    patchAgentGatewaysInstanceIdApisApiIdRoute,
    patchAgentGatewaysInstanceIdApisApiIdRouteHandler,
  )
  .openapi(
    getAgentGatewaysInstanceIdGuardrailsRoute,
    getAgentGatewaysInstanceIdGuardrailsRouteHandler,
  )
  .openapi(
    postAgentGatewaysInstanceIdGuardrailsRoute,
    postAgentGatewaysInstanceIdGuardrailsRouteHandler,
  )
  .openapi(
    deleteAgentGatewaysInstanceIdGuardrailsGuardrailIdRoute,
    deleteAgentGatewaysInstanceIdGuardrailsGuardrailIdRouteHandler,
  )
  .openapi(
    patchAgentGatewaysInstanceIdGuardrailsGuardrailIdRoute,
    patchAgentGatewaysInstanceIdGuardrailsGuardrailIdRouteHandler,
  )
  .openapi(getAgentGatewaysInstanceIdKeysRoute, getAgentGatewaysInstanceIdKeysRouteHandler)
  .openapi(postAgentGatewaysInstanceIdKeysRoute, postAgentGatewaysInstanceIdKeysRouteHandler)
  .openapi(
    deleteAgentGatewaysInstanceIdKeysKeyIdRoute,
    deleteAgentGatewaysInstanceIdKeysKeyIdRouteHandler,
  )
  .openapi(
    patchAgentGatewaysInstanceIdKeysKeyIdRoute,
    patchAgentGatewaysInstanceIdKeysKeyIdRouteHandler,
  )
  .openapi(
    getAgentGatewaysInstanceIdKeysKeyIdToolPermissionsRoute,
    getAgentGatewaysInstanceIdKeysKeyIdToolPermissionsRouteHandler,
  )
  .openapi(
    putAgentGatewaysInstanceIdKeysKeyIdToolPermissionsRoute,
    putAgentGatewaysInstanceIdKeysKeyIdToolPermissionsRouteHandler,
  )
  .openapi(
    getAgentGatewaysInstanceIdMcpServersRoute,
    getAgentGatewaysInstanceIdMcpServersRouteHandler,
  )
  .openapi(
    postAgentGatewaysInstanceIdMcpServersRoute,
    postAgentGatewaysInstanceIdMcpServersRouteHandler,
  )
  .openapi(
    deleteAgentGatewaysInstanceIdMcpServersServerIdRoute,
    deleteAgentGatewaysInstanceIdMcpServersServerIdRouteHandler,
  )
  .openapi(
    patchAgentGatewaysInstanceIdMcpServersServerIdRoute,
    patchAgentGatewaysInstanceIdMcpServersServerIdRouteHandler,
  )
  .openapi(getAgentGatewaysInstanceIdModelsRoute, getAgentGatewaysInstanceIdModelsRouteHandler)
  .openapi(getAgentGatewaysInstanceIdPoliciesRoute, getAgentGatewaysInstanceIdPoliciesRouteHandler)
  .openapi(
    postAgentGatewaysInstanceIdPoliciesRoute,
    postAgentGatewaysInstanceIdPoliciesRouteHandler,
  )
  .openapi(
    deleteAgentGatewaysInstanceIdPoliciesNameRoute,
    deleteAgentGatewaysInstanceIdPoliciesNameRouteHandler,
  )
  .openapi(
    getAgentGatewaysInstanceIdPoliciesNameRoute,
    getAgentGatewaysInstanceIdPoliciesNameRouteHandler,
  )
  .openapi(
    patchAgentGatewaysInstanceIdPoliciesNameRoute,
    patchAgentGatewaysInstanceIdPoliciesNameRouteHandler,
  )
  .openapi(
    getAgentGatewaysInstanceIdPolicyAttachmentsRoute,
    getAgentGatewaysInstanceIdPolicyAttachmentsRouteHandler,
  )
  .openapi(
    postAgentGatewaysInstanceIdPolicyAttachmentsRoute,
    postAgentGatewaysInstanceIdPolicyAttachmentsRouteHandler,
  )
  .openapi(
    deleteAgentGatewaysInstanceIdPolicyAttachmentsAttachmentIdRoute,
    deleteAgentGatewaysInstanceIdPolicyAttachmentsAttachmentIdRouteHandler,
  )
  .openapi(
    getAgentGatewaysInstanceIdSpendLogsRoute,
    getAgentGatewaysInstanceIdSpendLogsRouteHandler,
  )
  .openapi(getAgentGatewaysInstanceIdTeamsRoute, getAgentGatewaysInstanceIdTeamsRouteHandler)
  .openapi(postAgentGatewaysInstanceIdTeamsRoute, postAgentGatewaysInstanceIdTeamsRouteHandler)
  .openapi(
    deleteAgentGatewaysInstanceIdTeamsTeamIdRoute,
    deleteAgentGatewaysInstanceIdTeamsTeamIdRouteHandler,
  )
  .openapi(
    patchAgentGatewaysInstanceIdTeamsTeamIdRoute,
    patchAgentGatewaysInstanceIdTeamsTeamIdRouteHandler,
  )
  .openapi(
    getAgentGatewaysInstanceIdTeamsTeamIdToolPermissionsRoute,
    getAgentGatewaysInstanceIdTeamsTeamIdToolPermissionsRouteHandler,
  )
  .openapi(
    putAgentGatewaysInstanceIdTeamsTeamIdToolPermissionsRoute,
    putAgentGatewaysInstanceIdTeamsTeamIdToolPermissionsRouteHandler,
  )
  .openapi(postAiAnthropicV1MessagesRoute, postAiAnthropicV1MessagesRouteHandler)
  .openapi(getAiAssistantsRoute, getAiAssistantsRouteHandler)
  .openapi(postAiAssistantsRoute, postAiAssistantsRouteHandler)
  .openapi(getAiAssistantsDeletedRoute, getAiAssistantsDeletedRouteHandler)
  .openapi(postAiAssistantsImportRoute, postAiAssistantsImportRouteHandler)
  .openapi(getAiAssistantsTagsRoute, getAiAssistantsTagsRouteHandler)
  .openapi(getAiAssistantsTestsRoute, getAiAssistantsTestsRouteHandler)
  .openapi(postAiAssistantsTestsRoute, postAiAssistantsTestsRouteHandler)
  .openapi(getAiAssistantsTestsTestSuitesRoute, getAiAssistantsTestsTestSuitesRouteHandler)
  .openapi(
    getAiAssistantsTestsTestSuitesSuiteNameRunsRoute,
    getAiAssistantsTestsTestSuitesSuiteNameRunsRouteHandler,
  )
  .openapi(
    postAiAssistantsTestsTestSuitesSuiteNameRunsRoute,
    postAiAssistantsTestsTestSuitesSuiteNameRunsRouteHandler,
  )
  .openapi(deleteAiAssistantsTestsTestIdRoute, deleteAiAssistantsTestsTestIdRouteHandler)
  .openapi(getAiAssistantsTestsTestIdRoute, getAiAssistantsTestsTestIdRouteHandler)
  .openapi(putAiAssistantsTestsTestIdRoute, putAiAssistantsTestsTestIdRouteHandler)
  .openapi(getAiAssistantsTestsTestIdRunsRoute, getAiAssistantsTestsTestIdRunsRouteHandler)
  .openapi(postAiAssistantsTestsTestIdRunsRoute, postAiAssistantsTestsTestIdRunsRouteHandler)
  .openapi(
    getAiAssistantsTestsTestIdRunsRunIdRoute,
    getAiAssistantsTestsTestIdRunsRunIdRouteHandler,
  )
  .openapi(deleteAiAssistantsAssistantIdRoute, deleteAiAssistantsAssistantIdRouteHandler)
  .openapi(getAiAssistantsAssistantIdRoute, getAiAssistantsAssistantIdRouteHandler)
  .openapi(postAiAssistantsAssistantIdRoute, postAiAssistantsAssistantIdRouteHandler)
  .openapi(
    deleteAiAssistantsAssistantIdCanaryDeploysRoute,
    deleteAiAssistantsAssistantIdCanaryDeploysRouteHandler,
  )
  .openapi(
    getAiAssistantsAssistantIdCanaryDeploysRoute,
    getAiAssistantsAssistantIdCanaryDeploysRouteHandler,
  )
  .openapi(
    postAiAssistantsAssistantIdCanaryDeploysRoute,
    postAiAssistantsAssistantIdCanaryDeploysRouteHandler,
  )
  .openapi(
    putAiAssistantsAssistantIdCanaryDeploysRoute,
    putAiAssistantsAssistantIdCanaryDeploysRouteHandler,
  )
  .openapi(postAiAssistantsAssistantIdChatRoute, postAiAssistantsAssistantIdChatRouteHandler)
  .openapi(postAiAssistantsAssistantIdChatSmsRoute, postAiAssistantsAssistantIdChatSmsRouteHandler)
  .openapi(
    postAiAssistantsAssistantIdChatWhatsappRoute,
    postAiAssistantsAssistantIdChatWhatsappRouteHandler,
  )
  .openapi(postAiAssistantsAssistantIdCloneRoute, postAiAssistantsAssistantIdCloneRouteHandler)
  .openapi(getAiAssistantsAssistantIdDeletedRoute, getAiAssistantsAssistantIdDeletedRouteHandler)
  .openapi(
    postAiAssistantsAssistantIdInstructionsEnhanceRoute,
    postAiAssistantsAssistantIdInstructionsEnhanceRouteHandler,
  )
  .openapi(postAiAssistantsAssistantIdRestoreRoute, postAiAssistantsAssistantIdRestoreRouteHandler)
  .openapi(
    getAiAssistantsAssistantIdScheduledEventsRoute,
    getAiAssistantsAssistantIdScheduledEventsRouteHandler,
  )
  .openapi(
    postAiAssistantsAssistantIdScheduledEventsRoute,
    postAiAssistantsAssistantIdScheduledEventsRouteHandler,
  )
  .openapi(
    deleteAiAssistantsAssistantIdScheduledEventsEventIdRoute,
    deleteAiAssistantsAssistantIdScheduledEventsEventIdRouteHandler,
  )
  .openapi(
    getAiAssistantsAssistantIdScheduledEventsEventIdRoute,
    getAiAssistantsAssistantIdScheduledEventsEventIdRouteHandler,
  )
  .openapi(postAiAssistantsAssistantIdTagsRoute, postAiAssistantsAssistantIdTagsRouteHandler)
  .openapi(
    deleteAiAssistantsAssistantIdTagsTagRoute,
    deleteAiAssistantsAssistantIdTagsTagRouteHandler,
  )
  .openapi(getAiAssistantsAssistantIdTexmlRoute, getAiAssistantsAssistantIdTexmlRouteHandler)
  .openapi(
    deleteAiAssistantsAssistantIdToolsToolIdRoute,
    deleteAiAssistantsAssistantIdToolsToolIdRouteHandler,
  )
  .openapi(
    putAiAssistantsAssistantIdToolsToolIdRoute,
    putAiAssistantsAssistantIdToolsToolIdRouteHandler,
  )
  .openapi(
    postAiAssistantsAssistantIdToolsToolIdTestRoute,
    postAiAssistantsAssistantIdToolsToolIdTestRouteHandler,
  )
  .openapi(getAiAssistantsAssistantIdVersionsRoute, getAiAssistantsAssistantIdVersionsRouteHandler)
  .openapi(
    deleteAiAssistantsAssistantIdVersionsVersionIdRoute,
    deleteAiAssistantsAssistantIdVersionsVersionIdRouteHandler,
  )
  .openapi(
    getAiAssistantsAssistantIdVersionsVersionIdRoute,
    getAiAssistantsAssistantIdVersionsVersionIdRouteHandler,
  )
  .openapi(
    postAiAssistantsAssistantIdVersionsVersionIdRoute,
    postAiAssistantsAssistantIdVersionsVersionIdRouteHandler,
  )
  .openapi(
    postAiAssistantsAssistantIdVersionsVersionIdPromoteRoute,
    postAiAssistantsAssistantIdVersionsVersionIdPromoteRouteHandler,
  )
  .openapi(postAiAudioTranscriptionsRoute, postAiAudioTranscriptionsRouteHandler)
  .openapi(getAiAvatarsRoute, getAiAvatarsRouteHandler)
  .openapi(postAiAvatarsRoute, postAiAvatarsRouteHandler)
  .openapi(getAiAvatarsAvatarIdRoute, getAiAvatarsAvatarIdRouteHandler)
  .openapi(patchAiAvatarsAvatarIdRoute, patchAiAvatarsAvatarIdRouteHandler)
  .openapi(postAiChatCompletionsRoute, postAiChatCompletionsRouteHandler)
  .openapi(getAiClustersRoute, getAiClustersRouteHandler)
  .openapi(postAiClustersRoute, postAiClustersRouteHandler)
  .openapi(deleteAiClustersTaskIdRoute, deleteAiClustersTaskIdRouteHandler)
  .openapi(getAiClustersTaskIdRoute, getAiClustersTaskIdRouteHandler)
  .openapi(getAiClustersTaskIdGraphRoute, getAiClustersTaskIdGraphRouteHandler)
  .openapi(getAiCollectionsRoute, getAiCollectionsRouteHandler)
  .openapi(postAiCollectionsRoute, postAiCollectionsRouteHandler)
  .openapi(getAiCollectionsSlugSlugRoute, getAiCollectionsSlugSlugRouteHandler)
  .openapi(deleteAiCollectionsUuidRoute, deleteAiCollectionsUuidRouteHandler)
  .openapi(getAiCollectionsUuidRoute, getAiCollectionsUuidRouteHandler)
  .openapi(patchAiCollectionsUuidRoute, patchAiCollectionsUuidRouteHandler)
  .openapi(getAiCollectionsUuidSettingsRoute, getAiCollectionsUuidSettingsRouteHandler)
  .openapi(patchAiCollectionsUuidSettingsRoute, patchAiCollectionsUuidSettingsRouteHandler)
  .openapi(putAiCollectionsUuidSettingsRoute, putAiCollectionsUuidSettingsRouteHandler)
  .openapi(getAiCollectionsUuidSourcesRoute, getAiCollectionsUuidSourcesRouteHandler)
  .openapi(postAiCollectionsUuidSourcesRoute, postAiCollectionsUuidSourcesRouteHandler)
  .openapi(putAiCollectionsUuidSourcesRoute, putAiCollectionsUuidSourcesRouteHandler)
  .openapi(
    deleteAiCollectionsUuidSourcesSourceIdRoute,
    deleteAiCollectionsUuidSourcesSourceIdRouteHandler,
  )
  .openapi(getAiConversationHistoriesRoute, getAiConversationHistoriesRouteHandler)
  .openapi(getAiConversationsRoute, getAiConversationsRouteHandler)
  .openapi(postAiConversationsRoute, postAiConversationsRouteHandler)
  .openapi(
    getAiConversationsConversationInsightsAggregatesRoute,
    getAiConversationsConversationInsightsAggregatesRouteHandler,
  )
  .openapi(getAiConversationsInsightGroupsRoute, getAiConversationsInsightGroupsRouteHandler)
  .openapi(postAiConversationsInsightGroupsRoute, postAiConversationsInsightGroupsRouteHandler)
  .openapi(
    deleteAiConversationsInsightGroupsGroupIdRoute,
    deleteAiConversationsInsightGroupsGroupIdRouteHandler,
  )
  .openapi(
    getAiConversationsInsightGroupsGroupIdRoute,
    getAiConversationsInsightGroupsGroupIdRouteHandler,
  )
  .openapi(
    putAiConversationsInsightGroupsGroupIdRoute,
    putAiConversationsInsightGroupsGroupIdRouteHandler,
  )
  .openapi(
    postAiConversationsInsightGroupsGroupIdInsightsInsightIdAssignRoute,
    postAiConversationsInsightGroupsGroupIdInsightsInsightIdAssignRouteHandler,
  )
  .openapi(
    deleteAiConversationsInsightGroupsGroupIdInsightsInsightIdUnassignRoute,
    deleteAiConversationsInsightGroupsGroupIdInsightsInsightIdUnassignRouteHandler,
  )
  .openapi(getAiConversationsInsightsRoute, getAiConversationsInsightsRouteHandler)
  .openapi(postAiConversationsInsightsRoute, postAiConversationsInsightsRouteHandler)
  .openapi(
    deleteAiConversationsInsightsInsightIdRoute,
    deleteAiConversationsInsightsInsightIdRouteHandler,
  )
  .openapi(
    getAiConversationsInsightsInsightIdRoute,
    getAiConversationsInsightsInsightIdRouteHandler,
  )
  .openapi(
    putAiConversationsInsightsInsightIdRoute,
    putAiConversationsInsightsInsightIdRouteHandler,
  )
  .openapi(
    deleteAiConversationsConversationIdRoute,
    deleteAiConversationsConversationIdRouteHandler,
  )
  .openapi(getAiConversationsConversationIdRoute, getAiConversationsConversationIdRouteHandler)
  .openapi(putAiConversationsConversationIdRoute, putAiConversationsConversationIdRouteHandler)
  .openapi(
    getAiConversationsConversationIdConversationsInsightsRoute,
    getAiConversationsConversationIdConversationsInsightsRouteHandler,
  )
  .openapi(
    deleteAiConversationsConversationIdConversationsInsightsInsightIdRoute,
    deleteAiConversationsConversationIdConversationsInsightsInsightIdRouteHandler,
  )
  .openapi(
    postAiConversationsConversationIdMessageRoute,
    postAiConversationsConversationIdMessageRouteHandler,
  )
  .openapi(
    getAiConversationsConversationIdMessagesRoute,
    getAiConversationsConversationIdMessagesRouteHandler,
  )
  .openapi(getAiEmbeddingsRoute, getAiEmbeddingsRouteHandler)
  .openapi(postAiEmbeddingsRoute, postAiEmbeddingsRouteHandler)
  .openapi(getAiEmbeddingsBucketsRoute, getAiEmbeddingsBucketsRouteHandler)
  .openapi(
    deleteAiEmbeddingsBucketsBucketNameRoute,
    deleteAiEmbeddingsBucketsBucketNameRouteHandler,
  )
  .openapi(getAiEmbeddingsBucketsBucketNameRoute, getAiEmbeddingsBucketsBucketNameRouteHandler)
  .openapi(postAiEmbeddingsSimilaritySearchRoute, postAiEmbeddingsSimilaritySearchRouteHandler)
  .openapi(postAiEmbeddingsUrlRoute, postAiEmbeddingsUrlRouteHandler)
  .openapi(getAiEmbeddingsTaskIdRoute, getAiEmbeddingsTaskIdRouteHandler)
  .openapi(getAiIntegrationsRoute, getAiIntegrationsRouteHandler)
  .openapi(getAiIntegrationsConnectionsRoute, getAiIntegrationsConnectionsRouteHandler)
  .openapi(
    deleteAiIntegrationsConnectionsUserConnectionIdRoute,
    deleteAiIntegrationsConnectionsUserConnectionIdRouteHandler,
  )
  .openapi(
    getAiIntegrationsConnectionsUserConnectionIdRoute,
    getAiIntegrationsConnectionsUserConnectionIdRouteHandler,
  )
  .openapi(getAiIntegrationsIntegrationIdRoute, getAiIntegrationsIntegrationIdRouteHandler)
  .openapi(
    getAiKnowledgeCollectionsSlugDocumentsRoute,
    getAiKnowledgeCollectionsSlugDocumentsRouteHandler,
  )
  .openapi(getAiMcpServersRoute, getAiMcpServersRouteHandler)
  .openapi(postAiMcpServersRoute, postAiMcpServersRouteHandler)
  .openapi(deleteAiMcpServersMcpServerIdRoute, deleteAiMcpServersMcpServerIdRouteHandler)
  .openapi(getAiMcpServersMcpServerIdRoute, getAiMcpServersMcpServerIdRouteHandler)
  .openapi(putAiMcpServersMcpServerIdRoute, putAiMcpServersMcpServerIdRouteHandler)
  .openapi(getAiMemoryNamespacesRoute, getAiMemoryNamespacesRouteHandler)
  .openapi(postAiMemoryNamespacesRoute, postAiMemoryNamespacesRouteHandler)
  .openapi(deleteAiMemoryNamespacesNamespaceRoute, deleteAiMemoryNamespacesNamespaceRouteHandler)
  .openapi(
    getAiMemoryNamespacesNamespaceOperationsOperationIdRoute,
    getAiMemoryNamespacesNamespaceOperationsOperationIdRouteHandler,
  )
  .openapi(
    getAiMemoryNamespacesNamespaceProfilesRoute,
    getAiMemoryNamespacesNamespaceProfilesRouteHandler,
  )
  .openapi(
    deleteAiMemoryNamespacesNamespaceProfilesProfileIdRoute,
    deleteAiMemoryNamespacesNamespaceProfilesProfileIdRouteHandler,
  )
  .openapi(
    postAiMemoryNamespacesNamespaceProfilesProfileIdIngestRoute,
    postAiMemoryNamespacesNamespaceProfilesProfileIdIngestRouteHandler,
  )
  .openapi(
    getAiMemoryNamespacesNamespaceProfilesProfileIdMemoriesRoute,
    getAiMemoryNamespacesNamespaceProfilesProfileIdMemoriesRouteHandler,
  )
  .openapi(
    getAiMemoryNamespacesNamespaceProfilesProfileIdMemoriesMemoryIdRoute,
    getAiMemoryNamespacesNamespaceProfilesProfileIdMemoriesMemoryIdRouteHandler,
  )
  .openapi(
    postAiMemoryNamespacesNamespaceProfilesProfileIdRecallRoute,
    postAiMemoryNamespacesNamespaceProfilesProfileIdRecallRouteHandler,
  )
  .openapi(
    postAiMemoryNamespacesNamespaceProfilesProfileIdRememberRoute,
    postAiMemoryNamespacesNamespaceProfilesProfileIdRememberRouteHandler,
  )
  .openapi(
    getAiMemoryNamespacesNamespaceProfilesProfileIdSourcesRoute,
    getAiMemoryNamespacesNamespaceProfilesProfileIdSourcesRouteHandler,
  )
  .openapi(
    deleteAiMemoryNamespacesNamespaceProfilesProfileIdSourcesSourceIdRoute,
    deleteAiMemoryNamespacesNamespaceProfilesProfileIdSourcesSourceIdRouteHandler,
  )
  .openapi(
    getAiMemoryNamespacesNamespaceProfilesProfileIdSourcesSourceIdRoute,
    getAiMemoryNamespacesNamespaceProfilesProfileIdSourcesSourceIdRouteHandler,
  )
  .openapi(
    getAiMemoryNamespacesNamespaceProfilesProfileIdSummaryRoute,
    getAiMemoryNamespacesNamespaceProfilesProfileIdSummaryRouteHandler,
  )
  .openapi(
    postAiMemoryNamespacesNamespaceProfilesProfileIdSummaryPreviewRoute,
    postAiMemoryNamespacesNamespaceProfilesProfileIdSummaryPreviewRouteHandler,
  )
  .openapi(
    getAiMemoryNamespacesNamespaceSettingsRoute,
    getAiMemoryNamespacesNamespaceSettingsRouteHandler,
  )
  .openapi(
    patchAiMemoryNamespacesNamespaceSettingsRoute,
    patchAiMemoryNamespacesNamespaceSettingsRouteHandler,
  )
  .openapi(getAiMissionsRoute, getAiMissionsRouteHandler)
  .openapi(postAiMissionsRoute, postAiMissionsRouteHandler)
  .openapi(getAiMissionsEventsRoute, getAiMissionsEventsRouteHandler)
  .openapi(getAiMissionsRunsRoute, getAiMissionsRunsRouteHandler)
  .openapi(deleteAiMissionsMissionIdRoute, deleteAiMissionsMissionIdRouteHandler)
  .openapi(getAiMissionsMissionIdRoute, getAiMissionsMissionIdRouteHandler)
  .openapi(putAiMissionsMissionIdRoute, putAiMissionsMissionIdRouteHandler)
  .openapi(postAiMissionsMissionIdCloneRoute, postAiMissionsMissionIdCloneRouteHandler)
  .openapi(
    getAiMissionsMissionIdKnowledgeBasesRoute,
    getAiMissionsMissionIdKnowledgeBasesRouteHandler,
  )
  .openapi(
    postAiMissionsMissionIdKnowledgeBasesRoute,
    postAiMissionsMissionIdKnowledgeBasesRouteHandler,
  )
  .openapi(
    deleteAiMissionsMissionIdKnowledgeBasesKnowledgeBaseIdRoute,
    deleteAiMissionsMissionIdKnowledgeBasesKnowledgeBaseIdRouteHandler,
  )
  .openapi(
    getAiMissionsMissionIdKnowledgeBasesKnowledgeBaseIdRoute,
    getAiMissionsMissionIdKnowledgeBasesKnowledgeBaseIdRouteHandler,
  )
  .openapi(
    putAiMissionsMissionIdKnowledgeBasesKnowledgeBaseIdRoute,
    putAiMissionsMissionIdKnowledgeBasesKnowledgeBaseIdRouteHandler,
  )
  .openapi(getAiMissionsMissionIdMcpServersRoute, getAiMissionsMissionIdMcpServersRouteHandler)
  .openapi(postAiMissionsMissionIdMcpServersRoute, postAiMissionsMissionIdMcpServersRouteHandler)
  .openapi(
    deleteAiMissionsMissionIdMcpServersMcpServerIdRoute,
    deleteAiMissionsMissionIdMcpServersMcpServerIdRouteHandler,
  )
  .openapi(
    getAiMissionsMissionIdMcpServersMcpServerIdRoute,
    getAiMissionsMissionIdMcpServersMcpServerIdRouteHandler,
  )
  .openapi(
    putAiMissionsMissionIdMcpServersMcpServerIdRoute,
    putAiMissionsMissionIdMcpServersMcpServerIdRouteHandler,
  )
  .openapi(getAiMissionsMissionIdRunsRoute, getAiMissionsMissionIdRunsRouteHandler)
  .openapi(postAiMissionsMissionIdRunsRoute, postAiMissionsMissionIdRunsRouteHandler)
  .openapi(getAiMissionsMissionIdRunsRunIdRoute, getAiMissionsMissionIdRunsRunIdRouteHandler)
  .openapi(patchAiMissionsMissionIdRunsRunIdRoute, patchAiMissionsMissionIdRunsRunIdRouteHandler)
  .openapi(
    postAiMissionsMissionIdRunsRunIdCancelRoute,
    postAiMissionsMissionIdRunsRunIdCancelRouteHandler,
  )
  .openapi(
    getAiMissionsMissionIdRunsRunIdEventsRoute,
    getAiMissionsMissionIdRunsRunIdEventsRouteHandler,
  )
  .openapi(
    postAiMissionsMissionIdRunsRunIdEventsRoute,
    postAiMissionsMissionIdRunsRunIdEventsRouteHandler,
  )
  .openapi(
    getAiMissionsMissionIdRunsRunIdEventsEventIdRoute,
    getAiMissionsMissionIdRunsRunIdEventsEventIdRouteHandler,
  )
  .openapi(
    postAiMissionsMissionIdRunsRunIdPauseRoute,
    postAiMissionsMissionIdRunsRunIdPauseRouteHandler,
  )
  .openapi(
    getAiMissionsMissionIdRunsRunIdPlanRoute,
    getAiMissionsMissionIdRunsRunIdPlanRouteHandler,
  )
  .openapi(
    postAiMissionsMissionIdRunsRunIdPlanRoute,
    postAiMissionsMissionIdRunsRunIdPlanRouteHandler,
  )
  .openapi(
    postAiMissionsMissionIdRunsRunIdPlanStepsRoute,
    postAiMissionsMissionIdRunsRunIdPlanStepsRouteHandler,
  )
  .openapi(
    getAiMissionsMissionIdRunsRunIdPlanStepsStepIdRoute,
    getAiMissionsMissionIdRunsRunIdPlanStepsStepIdRouteHandler,
  )
  .openapi(
    patchAiMissionsMissionIdRunsRunIdPlanStepsStepIdRoute,
    patchAiMissionsMissionIdRunsRunIdPlanStepsStepIdRouteHandler,
  )
  .openapi(
    postAiMissionsMissionIdRunsRunIdResumeRoute,
    postAiMissionsMissionIdRunsRunIdResumeRouteHandler,
  )
  .openapi(
    getAiMissionsMissionIdRunsRunIdTelnyxAgentsRoute,
    getAiMissionsMissionIdRunsRunIdTelnyxAgentsRouteHandler,
  )
  .openapi(
    postAiMissionsMissionIdRunsRunIdTelnyxAgentsRoute,
    postAiMissionsMissionIdRunsRunIdTelnyxAgentsRouteHandler,
  )
  .openapi(
    deleteAiMissionsMissionIdRunsRunIdTelnyxAgentsTelnyxAgentIdRoute,
    deleteAiMissionsMissionIdRunsRunIdTelnyxAgentsTelnyxAgentIdRouteHandler,
  )
  .openapi(getAiMissionsMissionIdToolsRoute, getAiMissionsMissionIdToolsRouteHandler)
  .openapi(postAiMissionsMissionIdToolsRoute, postAiMissionsMissionIdToolsRouteHandler)
  .openapi(
    deleteAiMissionsMissionIdToolsToolIdRoute,
    deleteAiMissionsMissionIdToolsToolIdRouteHandler,
  )
  .openapi(getAiMissionsMissionIdToolsToolIdRoute, getAiMissionsMissionIdToolsToolIdRouteHandler)
  .openapi(putAiMissionsMissionIdToolsToolIdRoute, putAiMissionsMissionIdToolsToolIdRouteHandler)
  .openapi(getAiModelsRoute, getAiModelsRouteHandler)
  .openapi(postAiOpenaiChatCompletionsRoute, postAiOpenaiChatCompletionsRouteHandler)
  .openapi(postAiOpenaiEmbeddingsRoute, postAiOpenaiEmbeddingsRouteHandler)
  .openapi(getAiOpenaiEmbeddingsModelsRoute, getAiOpenaiEmbeddingsModelsRouteHandler)
  .openapi(getAiOpenaiModelsRoute, getAiOpenaiModelsRouteHandler)
  .openapi(postAiOpenaiResponsesRoute, postAiOpenaiResponsesRouteHandler)
  .openapi(postAiResponsesRoute, postAiResponsesRouteHandler)
  .openapi(postAiSummarizeRoute, postAiSummarizeRouteHandler)
  .openapi(getAiTestsSchedulesV1CronJobsRoute, getAiTestsSchedulesV1CronJobsRouteHandler)
  .openapi(postAiTestsSchedulesV1CronJobsRoute, postAiTestsSchedulesV1CronJobsRouteHandler)
  .openapi(deleteAiTestsSchedulesV1CronJobsIdRoute, deleteAiTestsSchedulesV1CronJobsIdRouteHandler)
  .openapi(getAiTestsSchedulesV1CronJobsIdRoute, getAiTestsSchedulesV1CronJobsIdRouteHandler)
  .openapi(patchAiTestsSchedulesV1CronJobsIdRoute, patchAiTestsSchedulesV1CronJobsIdRouteHandler)
  .openapi(getAiTestsTestFrameworkV1AiagentsRoute, getAiTestsTestFrameworkV1AiagentsRouteHandler)
  .openapi(postAiTestsTestFrameworkV1AiagentsRoute, postAiTestsTestFrameworkV1AiagentsRouteHandler)
  .openapi(
    deleteAiTestsTestFrameworkV1AiagentsIdRoute,
    deleteAiTestsTestFrameworkV1AiagentsIdRouteHandler,
  )
  .openapi(
    getAiTestsTestFrameworkV1AiagentsIdRoute,
    getAiTestsTestFrameworkV1AiagentsIdRouteHandler,
  )
  .openapi(
    putAiTestsTestFrameworkV1AiagentsIdRoute,
    putAiTestsTestFrameworkV1AiagentsIdRouteHandler,
  )
  .openapi(getAiTestsTestFrameworkV1MetricsRoute, getAiTestsTestFrameworkV1MetricsRouteHandler)
  .openapi(postAiTestsTestFrameworkV1MetricsRoute, postAiTestsTestFrameworkV1MetricsRouteHandler)
  .openapi(
    postAiTestsTestFrameworkV1MetricsBulkCreateRoute,
    postAiTestsTestFrameworkV1MetricsBulkCreateRouteHandler,
  )
  .openapi(
    postAiTestsTestFrameworkV1MetricsGenerateMetricsRoute,
    postAiTestsTestFrameworkV1MetricsGenerateMetricsRouteHandler,
  )
  .openapi(
    getAiTestsTestFrameworkV1MetricsGenerateMetricsProgressRoute,
    getAiTestsTestFrameworkV1MetricsGenerateMetricsProgressRouteHandler,
  )
  .openapi(
    deleteAiTestsTestFrameworkV1MetricsIdRoute,
    deleteAiTestsTestFrameworkV1MetricsIdRouteHandler,
  )
  .openapi(getAiTestsTestFrameworkV1MetricsIdRoute, getAiTestsTestFrameworkV1MetricsIdRouteHandler)
  .openapi(
    patchAiTestsTestFrameworkV1MetricsIdRoute,
    patchAiTestsTestFrameworkV1MetricsIdRouteHandler,
  )
  .openapi(
    getAiTestsTestFrameworkV1PersonalitiesRoute,
    getAiTestsTestFrameworkV1PersonalitiesRouteHandler,
  )
  .openapi(getAiTestsTestFrameworkV1ResultsRoute, getAiTestsTestFrameworkV1ResultsRouteHandler)
  .openapi(
    deleteAiTestsTestFrameworkV1ResultsIdRoute,
    deleteAiTestsTestFrameworkV1ResultsIdRouteHandler,
  )
  .openapi(getAiTestsTestFrameworkV1ResultsIdRoute, getAiTestsTestFrameworkV1ResultsIdRouteHandler)
  .openapi(
    postAiTestsTestFrameworkV1ResultsIdRerunRoute,
    postAiTestsTestFrameworkV1ResultsIdRerunRouteHandler,
  )
  .openapi(getAiTestsTestFrameworkV1ScenariosRoute, getAiTestsTestFrameworkV1ScenariosRouteHandler)
  .openapi(
    postAiTestsTestFrameworkV1ScenariosRoute,
    postAiTestsTestFrameworkV1ScenariosRouteHandler,
  )
  .openapi(
    getAiTestsTestFrameworkV1ScenariosExportScenariosRoute,
    getAiTestsTestFrameworkV1ScenariosExportScenariosRouteHandler,
  )
  .openapi(
    postAiTestsTestFrameworkV1ScenariosGenerateBgRoute,
    postAiTestsTestFrameworkV1ScenariosGenerateBgRouteHandler,
  )
  .openapi(
    getAiTestsTestFrameworkV1ScenariosGenerateProgressRoute,
    getAiTestsTestFrameworkV1ScenariosGenerateProgressRouteHandler,
  )
  .openapi(
    postAiTestsTestFrameworkV1ScenariosRunScenariosRoute,
    postAiTestsTestFrameworkV1ScenariosRunScenariosRouteHandler,
  )
  .openapi(
    postAiTestsTestFrameworkV1ScenariosScenarioAgentRoute,
    postAiTestsTestFrameworkV1ScenariosScenarioAgentRouteHandler,
  )
  .openapi(
    getAiTestsTestFrameworkV1ScenariosScenarioAgentProgressRoute,
    getAiTestsTestFrameworkV1ScenariosScenarioAgentProgressRouteHandler,
  )
  .openapi(
    deleteAiTestsTestFrameworkV1ScenariosIdRoute,
    deleteAiTestsTestFrameworkV1ScenariosIdRouteHandler,
  )
  .openapi(
    getAiTestsTestFrameworkV1ScenariosIdRoute,
    getAiTestsTestFrameworkV1ScenariosIdRouteHandler,
  )
  .openapi(
    patchAiTestsTestFrameworkV1ScenariosIdRoute,
    patchAiTestsTestFrameworkV1ScenariosIdRouteHandler,
  )
  .openapi(getAiToolsRoute, getAiToolsRouteHandler)
  .openapi(postAiToolsRoute, postAiToolsRouteHandler)
  .openapi(deleteAiToolsToolIdRoute, deleteAiToolsToolIdRouteHandler)
  .openapi(getAiToolsToolIdRoute, getAiToolsToolIdRouteHandler)
  .openapi(patchAiToolsToolIdRoute, patchAiToolsToolIdRouteHandler)
  .openapi(postAiTypesafeV1SystemoneRoute, postAiTypesafeV1SystemoneRouteHandler)
  .openapi(getAlphanumericSenderIdsRoute, getAlphanumericSenderIdsRouteHandler)
  .openapi(postAlphanumericSenderIdsRoute, postAlphanumericSenderIdsRouteHandler)
  .openapi(deleteAlphanumericSenderIdsIdRoute, deleteAlphanumericSenderIdsIdRouteHandler)
  .openapi(getAlphanumericSenderIdsIdRoute, getAlphanumericSenderIdsIdRouteHandler)
  .openapi(getArtifactDownloadsArtifactIdRoute, getArtifactDownloadsArtifactIdRouteHandler)
  .openapi(getAuditEventsRoute, getAuditEventsRouteHandler)
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
  .openapi(postBotChallengeRoute, postBotChallengeRouteHandler)
  .openapi(getBotSessionsRoute, getBotSessionsRouteHandler)
  .openapi(postBotSignupRoute, postBotSignupRouteHandler)
  .openapi(postBotSignupResendMagicLinkRoute, postBotSignupResendMagicLinkRouteHandler)
  .openapi(getBrowserSessionsRoute, getBrowserSessionsRouteHandler)
  .openapi(postBrowserSessionsRoute, postBrowserSessionsRouteHandler)
  .openapi(deleteBrowserSessionsIdRoute, deleteBrowserSessionsIdRouteHandler)
  .openapi(getBrowserSessionsIdRoute, getBrowserSessionsIdRouteHandler)
  .openapi(postBrowserSessionsIdActionsRoute, postBrowserSessionsIdActionsRouteHandler)
  .openapi(
    getBrowserSessionsIdActionsActionIdRoute,
    getBrowserSessionsIdActionsActionIdRouteHandler,
  )
  .openapi(
    getBrowserSessionsIdArtifactsArtifactIdRoute,
    getBrowserSessionsIdArtifactsArtifactIdRouteHandler,
  )
  .openapi(getBulkSimCardActionsRoute, getBulkSimCardActionsRouteHandler)
  .openapi(getBulkSimCardActionsIdRoute, getBulkSimCardActionsIdRouteHandler)
  .openapi(getBundlePricingBillingBundlesRoute, getBundlePricingBillingBundlesRouteHandler)
  .openapi(
    getBundlePricingBillingBundlesBundleIdRoute,
    getBundlePricingBillingBundlesBundleIdRouteHandler,
  )
  .openapi(getBundlePricingUserBundlesRoute, getBundlePricingUserBundlesRouteHandler)
  .openapi(postBundlePricingUserBundlesBulkRoute, postBundlePricingUserBundlesBulkRouteHandler)
  .openapi(getBundlePricingUserBundlesUnusedRoute, getBundlePricingUserBundlesUnusedRouteHandler)
  .openapi(
    deleteBundlePricingUserBundlesUserBundleIdRoute,
    deleteBundlePricingUserBundlesUserBundleIdRouteHandler,
  )
  .openapi(
    getBundlePricingUserBundlesUserBundleIdRoute,
    getBundlePricingUserBundlesUserBundleIdRouteHandler,
  )
  .openapi(
    getBundlePricingUserBundlesUserBundleIdResourcesRoute,
    getBundlePricingUserBundlesUserBundleIdResourcesRouteHandler,
  )
  .openapi(getCalendarConnectionsRoute, getCalendarConnectionsRouteHandler)
  .openapi(postCalendarConnectionsRoute, postCalendarConnectionsRouteHandler)
  .openapi(deleteCalendarConnectionsIdRoute, deleteCalendarConnectionsIdRouteHandler)
  .openapi(getCalendarConnectionsIdRoute, getCalendarConnectionsIdRouteHandler)
  .openapi(patchCalendarConnectionsIdRoute, patchCalendarConnectionsIdRouteHandler)
  .openapi(getCalendarConnectionsIdMeetingsRoute, getCalendarConnectionsIdMeetingsRouteHandler)
  .openapi(
    patchCalendarConnectionsIdMeetingsMeetingIdRoute,
    patchCalendarConnectionsIdMeetingsMeetingIdRouteHandler,
  )
  .openapi(getCallControlApplicationsRoute, getCallControlApplicationsRouteHandler)
  .openapi(postCallControlApplicationsRoute, postCallControlApplicationsRouteHandler)
  .openapi(deleteCallControlApplicationsIdRoute, deleteCallControlApplicationsIdRouteHandler)
  .openapi(getCallControlApplicationsIdRoute, getCallControlApplicationsIdRouteHandler)
  .openapi(patchCallControlApplicationsIdRoute, patchCallControlApplicationsIdRouteHandler)
  .openapi(getCallEventsRoute, getCallEventsRouteHandler)
  .openapi(getCallReasonsRoute, getCallReasonsRouteHandler)
  .openapi(postCallReasonsValidateRoute, postCallReasonsValidateRouteHandler)
  .openapi(postCallsRoute, postCallsRouteHandler)
  .openapi(getCallsCallControlIdRoute, getCallsCallControlIdRouteHandler)
  .openapi(
    postCallsCallControlIdActionsAiAssistantAddMessagesRoute,
    postCallsCallControlIdActionsAiAssistantAddMessagesRouteHandler,
  )
  .openapi(
    postCallsCallControlIdActionsAiAssistantJoinRoute,
    postCallsCallControlIdActionsAiAssistantJoinRouteHandler,
  )
  .openapi(
    postCallsCallControlIdActionsAiAssistantStartRoute,
    postCallsCallControlIdActionsAiAssistantStartRouteHandler,
  )
  .openapi(
    postCallsCallControlIdActionsAiAssistantStopRoute,
    postCallsCallControlIdActionsAiAssistantStopRouteHandler,
  )
  .openapi(
    postCallsCallControlIdActionsAnswerRoute,
    postCallsCallControlIdActionsAnswerRouteHandler,
  )
  .openapi(
    postCallsCallControlIdActionsBridgeRoute,
    postCallsCallControlIdActionsBridgeRouteHandler,
  )
  .openapi(
    putCallsCallControlIdActionsClientStateUpdateRoute,
    putCallsCallControlIdActionsClientStateUpdateRouteHandler,
  )
  .openapi(
    postCallsCallControlIdActionsConversationRelayStartRoute,
    postCallsCallControlIdActionsConversationRelayStartRouteHandler,
  )
  .openapi(
    postCallsCallControlIdActionsConversationRelayStopRoute,
    postCallsCallControlIdActionsConversationRelayStopRouteHandler,
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
    postCallsCallControlIdActionsGatherRoute,
    postCallsCallControlIdActionsGatherRouteHandler,
  )
  .openapi(
    postCallsCallControlIdActionsGatherStopRoute,
    postCallsCallControlIdActionsGatherStopRouteHandler,
  )
  .openapi(
    postCallsCallControlIdActionsGatherUsingAiRoute,
    postCallsCallControlIdActionsGatherUsingAiRouteHandler,
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
  .openapi(postCallsCallControlIdActionsPayRoute, postCallsCallControlIdActionsPayRouteHandler)
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
  .openapi(
    postCallsCallControlIdActionsSendSipInfoRoute,
    postCallsCallControlIdActionsSendSipInfoRouteHandler,
  )
  .openapi(
    postCallsCallControlIdActionsSiprecStartRoute,
    postCallsCallControlIdActionsSiprecStartRouteHandler,
  )
  .openapi(
    postCallsCallControlIdActionsSiprecStopRoute,
    postCallsCallControlIdActionsSiprecStopRouteHandler,
  )
  .openapi(postCallsCallControlIdActionsSpeakRoute, postCallsCallControlIdActionsSpeakRouteHandler)
  .openapi(
    postCallsCallControlIdActionsStreamingStartRoute,
    postCallsCallControlIdActionsStreamingStartRouteHandler,
  )
  .openapi(
    postCallsCallControlIdActionsStreamingStopRoute,
    postCallsCallControlIdActionsStreamingStopRouteHandler,
  )
  .openapi(
    postCallsCallControlIdActionsSuppressionStartRoute,
    postCallsCallControlIdActionsSuppressionStartRouteHandler,
  )
  .openapi(
    postCallsCallControlIdActionsSuppressionStopRoute,
    postCallsCallControlIdActionsSuppressionStopRouteHandler,
  )
  .openapi(
    postCallsCallControlIdActionsSwitchSupervisorRoleRoute,
    postCallsCallControlIdActionsSwitchSupervisorRoleRouteHandler,
  )
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
  .openapi(getChannelZonesRoute, getChannelZonesRouteHandler)
  .openapi(putChannelZonesChannelZoneIdRoute, putChannelZonesChannelZoneIdRouteHandler)
  .openapi(getChargesBreakdownRoute, getChargesBreakdownRouteHandler)
  .openapi(getChargesSummaryRoute, getChargesSummaryRouteHandler)
  .openapi(getCommentsRoute, getCommentsRouteHandler)
  .openapi(postCommentsRoute, postCommentsRouteHandler)
  .openapi(getCommentsIdRoute, getCommentsIdRouteHandler)
  .openapi(patchCommentsIdReadRoute, patchCommentsIdReadRouteHandler)
  .openapi(getComputeActorsIdRoute, getComputeActorsIdRouteHandler)
  .openapi(getComputeFuncsRoute, getComputeFuncsRouteHandler)
  .openapi(getComputeFuncsIdLogsRoute, getComputeFuncsIdLogsRouteHandler)
  .openapi(deleteComputeFuncsIdLogsExportRoute, deleteComputeFuncsIdLogsExportRouteHandler)
  .openapi(getComputeFuncsIdLogsExportRoute, getComputeFuncsIdLogsExportRouteHandler)
  .openapi(putComputeFuncsIdLogsExportRoute, putComputeFuncsIdLogsExportRouteHandler)
  .openapi(getComputeFuncsIdMetricAggregatesRoute, getComputeFuncsIdMetricAggregatesRouteHandler)
  .openapi(getComputeFuncsIdRevisionsRoute, getComputeFuncsIdRevisionsRouteHandler)
  .openapi(getComputeFuncsIdShipInspectionRoute, getComputeFuncsIdShipInspectionRouteHandler)
  .openapi(getConferencesRoute, getConferencesRouteHandler)
  .openapi(postConferencesRoute, postConferencesRouteHandler)
  .openapi(
    getConferencesConferenceIdParticipantsRoute,
    getConferencesConferenceIdParticipantsRouteHandler,
  )
  .openapi(getConferencesIdRoute, getConferencesIdRouteHandler)
  .openapi(postConferencesIdActionsEndRoute, postConferencesIdActionsEndRouteHandler)
  .openapi(
    postConferencesIdActionsGatherUsingAudioRoute,
    postConferencesIdActionsGatherUsingAudioRouteHandler,
  )
  .openapi(postConferencesIdActionsHoldRoute, postConferencesIdActionsHoldRouteHandler)
  .openapi(postConferencesIdActionsJoinRoute, postConferencesIdActionsJoinRouteHandler)
  .openapi(postConferencesIdActionsLeaveRoute, postConferencesIdActionsLeaveRouteHandler)
  .openapi(postConferencesIdActionsMuteRoute, postConferencesIdActionsMuteRouteHandler)
  .openapi(postConferencesIdActionsPlayRoute, postConferencesIdActionsPlayRouteHandler)
  .openapi(
    postConferencesIdActionsRecordPauseRoute,
    postConferencesIdActionsRecordPauseRouteHandler,
  )
  .openapi(
    postConferencesIdActionsRecordResumeRoute,
    postConferencesIdActionsRecordResumeRouteHandler,
  )
  .openapi(
    postConferencesIdActionsRecordStartRoute,
    postConferencesIdActionsRecordStartRouteHandler,
  )
  .openapi(postConferencesIdActionsRecordStopRoute, postConferencesIdActionsRecordStopRouteHandler)
  .openapi(postConferencesIdActionsSendDtmfRoute, postConferencesIdActionsSendDtmfRouteHandler)
  .openapi(postConferencesIdActionsSpeakRoute, postConferencesIdActionsSpeakRouteHandler)
  .openapi(postConferencesIdActionsStopRoute, postConferencesIdActionsStopRouteHandler)
  .openapi(postConferencesIdActionsUnholdRoute, postConferencesIdActionsUnholdRouteHandler)
  .openapi(postConferencesIdActionsUnmuteRoute, postConferencesIdActionsUnmuteRouteHandler)
  .openapi(postConferencesIdActionsUpdateRoute, postConferencesIdActionsUpdateRouteHandler)
  .openapi(
    getConferencesIdParticipantsParticipantIdRoute,
    getConferencesIdParticipantsParticipantIdRouteHandler,
  )
  .openapi(
    patchConferencesIdParticipantsParticipantIdRoute,
    patchConferencesIdParticipantsParticipantIdRouteHandler,
  )
  .openapi(getConnectionsRoute, getConnectionsRouteHandler)
  .openapi(getConnectionsCountRoute, getConnectionsCountRouteHandler)
  .openapi(
    getConnectionsConnectionIdActiveCallsRoute,
    getConnectionsConnectionIdActiveCallsRouteHandler,
  )
  .openapi(getConnectionsIdRoute, getConnectionsIdRouteHandler)
  .openapi(getCountryCoverageRoute, getCountryCoverageRouteHandler)
  .openapi(
    getCountryCoverageCountriesCountryCodeRoute,
    getCountryCoverageCountriesCountryCodeRouteHandler,
  )
  .openapi(getCredentialConnectionsRoute, getCredentialConnectionsRouteHandler)
  .openapi(postCredentialConnectionsRoute, postCredentialConnectionsRouteHandler)
  .openapi(deleteCredentialConnectionsIdRoute, deleteCredentialConnectionsIdRouteHandler)
  .openapi(getCredentialConnectionsIdRoute, getCredentialConnectionsIdRouteHandler)
  .openapi(patchCredentialConnectionsIdRoute, patchCredentialConnectionsIdRouteHandler)
  .openapi(
    postCredentialConnectionsIdActionsCheckRegistrationStatusRoute,
    postCredentialConnectionsIdActionsCheckRegistrationStatusRouteHandler,
  )
  .openapi(
    deleteCustomStorageCredentialsConnectionIdRoute,
    deleteCustomStorageCredentialsConnectionIdRouteHandler,
  )
  .openapi(
    getCustomStorageCredentialsConnectionIdRoute,
    getCustomStorageCredentialsConnectionIdRouteHandler,
  )
  .openapi(
    postCustomStorageCredentialsConnectionIdRoute,
    postCustomStorageCredentialsConnectionIdRouteHandler,
  )
  .openapi(
    putCustomStorageCredentialsConnectionIdRoute,
    putCustomStorageCredentialsConnectionIdRouteHandler,
  )
  .openapi(getCustomerServiceRecordsRoute, getCustomerServiceRecordsRouteHandler)
  .openapi(postCustomerServiceRecordsRoute, postCustomerServiceRecordsRouteHandler)
  .openapi(
    postCustomerServiceRecordsPhoneNumberCoveragesRoute,
    postCustomerServiceRecordsPhoneNumberCoveragesRouteHandler,
  )
  .openapi(
    getCustomerServiceRecordsCustomerServiceRecordIdRoute,
    getCustomerServiceRecordsCustomerServiceRecordIdRouteHandler,
  )
  .openapi(getDetailRecordsRoute, getDetailRecordsRouteHandler)
  .openapi(getDialMetricsRoute, getDialMetricsRouteHandler)
  .openapi(
    deleteDialogflowConnectionsConnectionIdRoute,
    deleteDialogflowConnectionsConnectionIdRouteHandler,
  )
  .openapi(
    getDialogflowConnectionsConnectionIdRoute,
    getDialogflowConnectionsConnectionIdRouteHandler,
  )
  .openapi(
    postDialogflowConnectionsConnectionIdRoute,
    postDialogflowConnectionsConnectionIdRouteHandler,
  )
  .openapi(
    putDialogflowConnectionsConnectionIdRoute,
    putDialogflowConnectionsConnectionIdRouteHandler,
  )
  .openapi(getDirRoute, getDirRouteHandler)
  .openapi(getDirDocumentTypesRoute, getDirDocumentTypesRouteHandler)
  .openapi(deleteDirDirIdRoute, deleteDirDirIdRouteHandler)
  .openapi(getDirDirIdRoute, getDirDirIdRouteHandler)
  .openapi(patchDirDirIdRoute, patchDirDirIdRouteHandler)
  .openapi(getDirDirIdBpoAuthorizationsRoute, getDirDirIdBpoAuthorizationsRouteHandler)
  .openapi(postDirDirIdBpoLoaRoute, postDirDirIdBpoLoaRouteHandler)
  .openapi(getDirDirIdCommentsRoute, getDirDirIdCommentsRouteHandler)
  .openapi(postDirDirIdCommentsRoute, postDirDirIdCommentsRouteHandler)
  .openapi(getDirDirIdInfringementClaimsRoute, getDirDirIdInfringementClaimsRouteHandler)
  .openapi(putDirDirIdInfringementUpdateRoute, putDirDirIdInfringementUpdateRouteHandler)
  .openapi(postDirDirIdLoaRoute, postDirDirIdLoaRouteHandler)
  .openapi(getDirDirIdPhoneNumberBatchesRoute, getDirDirIdPhoneNumberBatchesRouteHandler)
  .openapi(
    getDirDirIdPhoneNumberBatchesBatchIdRoute,
    getDirDirIdPhoneNumberBatchesBatchIdRouteHandler,
  )
  .openapi(deleteDirDirIdPhoneNumbersRoute, deleteDirDirIdPhoneNumbersRouteHandler)
  .openapi(getDirDirIdPhoneNumbersRoute, getDirDirIdPhoneNumbersRouteHandler)
  .openapi(postDirDirIdPhoneNumbersRoute, postDirDirIdPhoneNumbersRouteHandler)
  .openapi(getDirDirIdReferencesRoute, getDirDirIdReferencesRouteHandler)
  .openapi(postDirDirIdReferencesRoute, postDirDirIdReferencesRouteHandler)
  .openapi(patchDirDirIdReferencesRefTypeSlotRoute, patchDirDirIdReferencesRefTypeSlotRouteHandler)
  .openapi(postDirDirIdSubmitRoute, postDirDirIdSubmitRouteHandler)
  .openapi(getDirDirIdVerifyEmailRoute, getDirDirIdVerifyEmailRouteHandler)
  .openapi(postDirDirIdVerifyEmailRoute, postDirDirIdVerifyEmailRouteHandler)
  .openapi(postDirDirIdVerifyEmailConfirmRoute, postDirDirIdVerifyEmailConfirmRouteHandler)
  .openapi(getDocumentLinksRoute, getDocumentLinksRouteHandler)
  .openapi(getDocumentsRoute, getDocumentsRouteHandler)
  .openapi(postDocumentsRoute, postDocumentsRouteHandler)
  .openapi(deleteDocumentsIdRoute, deleteDocumentsIdRouteHandler)
  .openapi(getDocumentsIdRoute, getDocumentsIdRouteHandler)
  .openapi(patchDocumentsIdRoute, patchDocumentsIdRouteHandler)
  .openapi(getDocumentsIdDownloadRoute, getDocumentsIdDownloadRouteHandler)
  .openapi(getDocumentsIdDownloadLinkRoute, getDocumentsIdDownloadLinkRouteHandler)
  .openapi(getDynamicEmergencyAddressesRoute, getDynamicEmergencyAddressesRouteHandler)
  .openapi(postDynamicEmergencyAddressesRoute, postDynamicEmergencyAddressesRouteHandler)
  .openapi(deleteDynamicEmergencyAddressesIdRoute, deleteDynamicEmergencyAddressesIdRouteHandler)
  .openapi(getDynamicEmergencyAddressesIdRoute, getDynamicEmergencyAddressesIdRouteHandler)
  .openapi(getDynamicEmergencyEndpointsRoute, getDynamicEmergencyEndpointsRouteHandler)
  .openapi(postDynamicEmergencyEndpointsRoute, postDynamicEmergencyEndpointsRouteHandler)
  .openapi(deleteDynamicEmergencyEndpointsIdRoute, deleteDynamicEmergencyEndpointsIdRouteHandler)
  .openapi(getDynamicEmergencyEndpointsIdRoute, getDynamicEmergencyEndpointsIdRouteHandler)
  .openapi(getEmailDedicatedIpsRoute, getEmailDedicatedIpsRouteHandler)
  .openapi(postEmailDedicatedIpsRoute, postEmailDedicatedIpsRouteHandler)
  .openapi(deleteEmailDedicatedIpsIdRoute, deleteEmailDedicatedIpsIdRouteHandler)
  .openapi(getEmailDedicatedIpsIdRoute, getEmailDedicatedIpsIdRouteHandler)
  .openapi(patchEmailDedicatedIpsIdRoute, patchEmailDedicatedIpsIdRouteHandler)
  .openapi(
    postEmailDedicatedIpsIdActionsCompleteWarmupRoute,
    postEmailDedicatedIpsIdActionsCompleteWarmupRouteHandler,
  )
  .openapi(
    postEmailDedicatedIpsIdActionsPauseWarmupRoute,
    postEmailDedicatedIpsIdActionsPauseWarmupRouteHandler,
  )
  .openapi(
    postEmailDedicatedIpsIdActionsResumeWarmupRoute,
    postEmailDedicatedIpsIdActionsResumeWarmupRouteHandler,
  )
  .openapi(
    postEmailDedicatedIpsIdActionsStartWarmupRoute,
    postEmailDedicatedIpsIdActionsStartWarmupRouteHandler,
  )
  .openapi(getEmailIpPoolsRoute, getEmailIpPoolsRouteHandler)
  .openapi(postEmailIpPoolsRoute, postEmailIpPoolsRouteHandler)
  .openapi(deleteEmailIpPoolsIdRoute, deleteEmailIpPoolsIdRouteHandler)
  .openapi(getEmailIpPoolsIdRoute, getEmailIpPoolsIdRouteHandler)
  .openapi(patchEmailIpPoolsIdRoute, patchEmailIpPoolsIdRouteHandler)
  .openapi(postEmailIpPoolsIdIpsRoute, postEmailIpPoolsIdIpsRouteHandler)
  .openapi(deleteEmailIpPoolsIdIpsIpIdRoute, deleteEmailIpPoolsIdIpsIpIdRouteHandler)
  .openapi(getEmailBlocksRoute, getEmailBlocksRouteHandler)
  .openapi(postEmailBlocksRoute, postEmailBlocksRouteHandler)
  .openapi(getEmailBlocksExportRoute, getEmailBlocksExportRouteHandler)
  .openapi(postEmailBlocksImportRoute, postEmailBlocksImportRouteHandler)
  .openapi(getEmailBlocksImportIdRoute, getEmailBlocksImportIdRouteHandler)
  .openapi(deleteEmailBlocksIdRoute, deleteEmailBlocksIdRouteHandler)
  .openapi(getEmailBlocksIdRoute, getEmailBlocksIdRouteHandler)
  .openapi(getEmailBlocksIdEventsRoute, getEmailBlocksIdEventsRouteHandler)
  .openapi(getEmailDomainsRoute, getEmailDomainsRouteHandler)
  .openapi(postEmailDomainsRoute, postEmailDomainsRouteHandler)
  .openapi(getEmailDomainsDomainIdDnsRecordsRoute, getEmailDomainsDomainIdDnsRecordsRouteHandler)
  .openapi(postEmailDomainsDomainIdRotateDkimRoute, postEmailDomainsDomainIdRotateDkimRouteHandler)
  .openapi(postEmailDomainsDomainIdVerifyRoute, postEmailDomainsDomainIdVerifyRouteHandler)
  .openapi(getEmailDomainsDomainIdWebhooksRoute, getEmailDomainsDomainIdWebhooksRouteHandler)
  .openapi(postEmailDomainsDomainIdWebhooksRoute, postEmailDomainsDomainIdWebhooksRouteHandler)
  .openapi(
    deleteEmailDomainsDomainIdWebhooksIdRoute,
    deleteEmailDomainsDomainIdWebhooksIdRouteHandler,
  )
  .openapi(getEmailDomainsDomainIdWebhooksIdRoute, getEmailDomainsDomainIdWebhooksIdRouteHandler)
  .openapi(
    patchEmailDomainsDomainIdWebhooksIdRoute,
    patchEmailDomainsDomainIdWebhooksIdRouteHandler,
  )
  .openapi(deleteEmailDomainsIdRoute, deleteEmailDomainsIdRouteHandler)
  .openapi(getEmailDomainsIdRoute, getEmailDomainsIdRouteHandler)
  .openapi(patchEmailDomainsIdRoute, patchEmailDomainsIdRouteHandler)
  .openapi(getEmailDomainsIdHealthRoute, getEmailDomainsIdHealthRouteHandler)
  .openapi(getEmailEventsRoute, getEmailEventsRouteHandler)
  .openapi(getEmailEventsStatsRoute, getEmailEventsStatsRouteHandler)
  .openapi(getEmailInboxesRoute, getEmailInboxesRouteHandler)
  .openapi(postEmailInboxesRoute, postEmailInboxesRouteHandler)
  .openapi(deleteEmailInboxesIdRoute, deleteEmailInboxesIdRouteHandler)
  .openapi(getEmailInboxesIdRoute, getEmailInboxesIdRouteHandler)
  .openapi(getEmailInboxesInboxIdDraftsRoute, getEmailInboxesInboxIdDraftsRouteHandler)
  .openapi(postEmailInboxesInboxIdDraftsRoute, postEmailInboxesInboxIdDraftsRouteHandler)
  .openapi(
    deleteEmailInboxesInboxIdDraftsDraftIdRoute,
    deleteEmailInboxesInboxIdDraftsDraftIdRouteHandler,
  )
  .openapi(
    getEmailInboxesInboxIdDraftsDraftIdRoute,
    getEmailInboxesInboxIdDraftsDraftIdRouteHandler,
  )
  .openapi(
    patchEmailInboxesInboxIdDraftsDraftIdRoute,
    patchEmailInboxesInboxIdDraftsDraftIdRouteHandler,
  )
  .openapi(
    putEmailInboxesInboxIdDraftsDraftIdRoute,
    putEmailInboxesInboxIdDraftsDraftIdRouteHandler,
  )
  .openapi(
    postEmailInboxesInboxIdDraftsDraftIdSendRoute,
    postEmailInboxesInboxIdDraftsDraftIdSendRouteHandler,
  )
  .openapi(deleteEmailInboxesInboxIdFiltersRoute, deleteEmailInboxesInboxIdFiltersRouteHandler)
  .openapi(getEmailInboxesInboxIdFiltersRoute, getEmailInboxesInboxIdFiltersRouteHandler)
  .openapi(postEmailInboxesInboxIdFiltersRoute, postEmailInboxesInboxIdFiltersRouteHandler)
  .openapi(putEmailInboxesInboxIdFiltersRoute, putEmailInboxesInboxIdFiltersRouteHandler)
  .openapi(getEmailInboxesInboxIdMessagesRoute, getEmailInboxesInboxIdMessagesRouteHandler)
  .openapi(
    patchEmailInboxesInboxIdMessagesMessageIdRoute,
    patchEmailInboxesInboxIdMessagesMessageIdRouteHandler,
  )
  .openapi(
    postEmailInboxesInboxIdMessagesMessageIdActionsForwardRoute,
    postEmailInboxesInboxIdMessagesMessageIdActionsForwardRouteHandler,
  )
  .openapi(
    postEmailInboxesInboxIdMessagesMessageIdActionsReplyRoute,
    postEmailInboxesInboxIdMessagesMessageIdActionsReplyRouteHandler,
  )
  .openapi(
    postEmailInboxesInboxIdMessagesMessageIdActionsReplyAllRoute,
    postEmailInboxesInboxIdMessagesMessageIdActionsReplyAllRouteHandler,
  )
  .openapi(
    postEmailInboxesInboxIdMessagesMessageIdDraftsRoute,
    postEmailInboxesInboxIdMessagesMessageIdDraftsRouteHandler,
  )
  .openapi(
    deleteEmailInboxesInboxIdMessagesMessageIdLabelsRoute,
    deleteEmailInboxesInboxIdMessagesMessageIdLabelsRouteHandler,
  )
  .openapi(
    postEmailInboxesInboxIdMessagesMessageIdLabelsRoute,
    postEmailInboxesInboxIdMessagesMessageIdLabelsRouteHandler,
  )
  .openapi(getEmailInboxesInboxIdThreadsRoute, getEmailInboxesInboxIdThreadsRouteHandler)
  .openapi(
    getEmailInboxesInboxIdThreadsThreadIdRoute,
    getEmailInboxesInboxIdThreadsThreadIdRouteHandler,
  )
  .openapi(
    deleteEmailInboxesInboxIdThreadsThreadIdLabelsRoute,
    deleteEmailInboxesInboxIdThreadsThreadIdLabelsRouteHandler,
  )
  .openapi(
    postEmailInboxesInboxIdThreadsThreadIdLabelsRoute,
    postEmailInboxesInboxIdThreadsThreadIdLabelsRouteHandler,
  )
  .openapi(deleteEmailMessagesRoute, deleteEmailMessagesRouteHandler)
  .openapi(getEmailMessagesRoute, getEmailMessagesRouteHandler)
  .openapi(postEmailMessagesRoute, postEmailMessagesRouteHandler)
  .openapi(postEmailMessagesBatchRoute, postEmailMessagesBatchRouteHandler)
  .openapi(getEmailMessagesEmailIdEventsRoute, getEmailMessagesEmailIdEventsRouteHandler)
  .openapi(getEmailMessagesEmailIdRecipientsRoute, getEmailMessagesEmailIdRecipientsRouteHandler)
  .openapi(
    getEmailMessagesEmailIdRecipientsRecipientIdRoute,
    getEmailMessagesEmailIdRecipientsRecipientIdRouteHandler,
  )
  .openapi(deleteEmailMessagesEmailIdScheduleRoute, deleteEmailMessagesEmailIdScheduleRouteHandler)
  .openapi(patchEmailMessagesEmailIdScheduleRoute, patchEmailMessagesEmailIdScheduleRouteHandler)
  .openapi(deleteEmailMessagesIdRoute, deleteEmailMessagesIdRouteHandler)
  .openapi(getEmailMessagesIdRoute, getEmailMessagesIdRouteHandler)
  .openapi(getEmailTemplatesRoute, getEmailTemplatesRouteHandler)
  .openapi(postEmailTemplatesRoute, postEmailTemplatesRouteHandler)
  .openapi(deleteEmailTemplatesIdRoute, deleteEmailTemplatesIdRouteHandler)
  .openapi(getEmailTemplatesIdRoute, getEmailTemplatesIdRouteHandler)
  .openapi(patchEmailTemplatesIdRoute, patchEmailTemplatesIdRouteHandler)
  .openapi(putEmailTemplatesIdRoute, putEmailTemplatesIdRouteHandler)
  .openapi(postEmailTemplatesIdRenderRoute, postEmailTemplatesIdRenderRouteHandler)
  .openapi(getEmailThreadsRoute, getEmailThreadsRouteHandler)
  .openapi(getEmailThreadsThreadIdRoute, getEmailThreadsThreadIdRouteHandler)
  .openapi(getEmailUnsubscribeGroupsRoute, getEmailUnsubscribeGroupsRouteHandler)
  .openapi(postEmailUnsubscribeGroupsRoute, postEmailUnsubscribeGroupsRouteHandler)
  .openapi(deleteEmailUnsubscribeGroupsIdRoute, deleteEmailUnsubscribeGroupsIdRouteHandler)
  .openapi(getEmailUnsubscribeGroupsIdRoute, getEmailUnsubscribeGroupsIdRouteHandler)
  .openapi(patchEmailUnsubscribeGroupsIdRoute, patchEmailUnsubscribeGroupsIdRouteHandler)
  .openapi(
    getEmailUnsubscribeGroupsIdSuppressionsRoute,
    getEmailUnsubscribeGroupsIdSuppressionsRouteHandler,
  )
  .openapi(
    postEmailUnsubscribeGroupsIdSuppressionsRoute,
    postEmailUnsubscribeGroupsIdSuppressionsRouteHandler,
  )
  .openapi(
    deleteEmailUnsubscribeGroupsIdSuppressionsEmailRoute,
    deleteEmailUnsubscribeGroupsIdSuppressionsEmailRouteHandler,
  )
  .openapi(postEmailValidationsRoute, postEmailValidationsRouteHandler)
  .openapi(postEmailValidationsBatchRoute, postEmailValidationsBatchRouteHandler)
  .openapi(getEmailValidationsBatchIdRoute, getEmailValidationsBatchIdRouteHandler)
  .openapi(getEnterprisesRoute, getEnterprisesRouteHandler)
  .openapi(postEnterprisesRoute, postEnterprisesRouteHandler)
  .openapi(deleteEnterprisesEnterpriseIdRoute, deleteEnterprisesEnterpriseIdRouteHandler)
  .openapi(getEnterprisesEnterpriseIdRoute, getEnterprisesEnterpriseIdRouteHandler)
  .openapi(putEnterprisesEnterpriseIdRoute, putEnterprisesEnterpriseIdRouteHandler)
  .openapi(
    postEnterprisesEnterpriseIdBrandedCallingRoute,
    postEnterprisesEnterpriseIdBrandedCallingRouteHandler,
  )
  .openapi(getEnterprisesEnterpriseIdDirRoute, getEnterprisesEnterpriseIdDirRouteHandler)
  .openapi(postEnterprisesEnterpriseIdDirRoute, postEnterprisesEnterpriseIdDirRouteHandler)
  .openapi(
    deleteEnterprisesEnterpriseIdReputationRoute,
    deleteEnterprisesEnterpriseIdReputationRouteHandler,
  )
  .openapi(
    getEnterprisesEnterpriseIdReputationRoute,
    getEnterprisesEnterpriseIdReputationRouteHandler,
  )
  .openapi(
    postEnterprisesEnterpriseIdReputationRoute,
    postEnterprisesEnterpriseIdReputationRouteHandler,
  )
  .openapi(
    getEnterprisesEnterpriseIdReputationExternalVerificationRoute,
    getEnterprisesEnterpriseIdReputationExternalVerificationRouteHandler,
  )
  .openapi(
    postEnterprisesEnterpriseIdReputationExternalVerificationRoute,
    postEnterprisesEnterpriseIdReputationExternalVerificationRouteHandler,
  )
  .openapi(
    patchEnterprisesEnterpriseIdReputationFrequencyRoute,
    patchEnterprisesEnterpriseIdReputationFrequencyRouteHandler,
  )
  .openapi(
    patchEnterprisesEnterpriseIdReputationLoaRoute,
    patchEnterprisesEnterpriseIdReputationLoaRouteHandler,
  )
  .openapi(
    postEnterprisesEnterpriseIdReputationLoaRoute,
    postEnterprisesEnterpriseIdReputationLoaRouteHandler,
  )
  .openapi(
    getEnterprisesEnterpriseIdReputationNumbersRoute,
    getEnterprisesEnterpriseIdReputationNumbersRouteHandler,
  )
  .openapi(
    postEnterprisesEnterpriseIdReputationNumbersRoute,
    postEnterprisesEnterpriseIdReputationNumbersRouteHandler,
  )
  .openapi(
    postEnterprisesEnterpriseIdReputationNumbersRefreshRoute,
    postEnterprisesEnterpriseIdReputationNumbersRefreshRouteHandler,
  )
  .openapi(
    deleteEnterprisesEnterpriseIdReputationNumbersPhoneNumberRoute,
    deleteEnterprisesEnterpriseIdReputationNumbersPhoneNumberRouteHandler,
  )
  .openapi(
    getEnterprisesEnterpriseIdReputationNumbersPhoneNumberRoute,
    getEnterprisesEnterpriseIdReputationNumbersPhoneNumberRouteHandler,
  )
  .openapi(
    getEnterprisesEnterpriseIdReputationNumbersPhoneNumberOwnershipRoute,
    getEnterprisesEnterpriseIdReputationNumbersPhoneNumberOwnershipRouteHandler,
  )
  .openapi(
    postEnterprisesEnterpriseIdReputationNumbersPhoneNumberOwnershipConfirmRoute,
    postEnterprisesEnterpriseIdReputationNumbersPhoneNumberOwnershipConfirmRouteHandler,
  )
  .openapi(
    getEnterprisesEnterpriseIdReputationRemediationRoute,
    getEnterprisesEnterpriseIdReputationRemediationRouteHandler,
  )
  .openapi(
    postEnterprisesEnterpriseIdReputationRemediationRoute,
    postEnterprisesEnterpriseIdReputationRemediationRouteHandler,
  )
  .openapi(
    getEnterprisesEnterpriseIdReputationRemediationRemediationIdRoute,
    getEnterprisesEnterpriseIdReputationRemediationRemediationIdRouteHandler,
  )
  .openapi(
    patchEnterprisesEnterpriseIdReputationWebhookRoute,
    patchEnterprisesEnterpriseIdReputationWebhookRouteHandler,
  )
  .openapi(
    postEnterprisesEnterpriseIdVerifyEmailRoute,
    postEnterprisesEnterpriseIdVerifyEmailRouteHandler,
  )
  .openapi(
    postEnterprisesEnterpriseIdVerifyEmailConfirmRoute,
    postEnterprisesEnterpriseIdVerifyEmailConfirmRouteHandler,
  )
  .openapi(getExternalConnectionsRoute, getExternalConnectionsRouteHandler)
  .openapi(postExternalConnectionsRoute, postExternalConnectionsRouteHandler)
  .openapi(getExternalConnectionsLogMessagesRoute, getExternalConnectionsLogMessagesRouteHandler)
  .openapi(
    deleteExternalConnectionsLogMessagesIdRoute,
    deleteExternalConnectionsLogMessagesIdRouteHandler,
  )
  .openapi(
    getExternalConnectionsLogMessagesIdRoute,
    getExternalConnectionsLogMessagesIdRouteHandler,
  )
  .openapi(deleteExternalConnectionsIdRoute, deleteExternalConnectionsIdRouteHandler)
  .openapi(getExternalConnectionsIdRoute, getExternalConnectionsIdRouteHandler)
  .openapi(patchExternalConnectionsIdRoute, patchExternalConnectionsIdRouteHandler)
  .openapi(
    getExternalConnectionsIdCivicAddressesRoute,
    getExternalConnectionsIdCivicAddressesRouteHandler,
  )
  .openapi(
    getExternalConnectionsIdCivicAddressesAddressIdRoute,
    getExternalConnectionsIdCivicAddressesAddressIdRouteHandler,
  )
  .openapi(
    patchExternalConnectionsIdLocationsLocationIdRoute,
    patchExternalConnectionsIdLocationsLocationIdRouteHandler,
  )
  .openapi(
    getExternalConnectionsIdPhoneNumbersRoute,
    getExternalConnectionsIdPhoneNumbersRouteHandler,
  )
  .openapi(
    getExternalConnectionsIdPhoneNumbersPhoneNumberIdRoute,
    getExternalConnectionsIdPhoneNumbersPhoneNumberIdRouteHandler,
  )
  .openapi(
    patchExternalConnectionsIdPhoneNumbersPhoneNumberIdRoute,
    patchExternalConnectionsIdPhoneNumbersPhoneNumberIdRouteHandler,
  )
  .openapi(getExternalConnectionsIdReleasesRoute, getExternalConnectionsIdReleasesRouteHandler)
  .openapi(
    getExternalConnectionsIdReleasesReleaseIdRoute,
    getExternalConnectionsIdReleasesReleaseIdRouteHandler,
  )
  .openapi(getExternalConnectionsIdUploadsRoute, getExternalConnectionsIdUploadsRouteHandler)
  .openapi(postExternalConnectionsIdUploadsRoute, postExternalConnectionsIdUploadsRouteHandler)
  .openapi(
    postExternalConnectionsIdUploadsRefreshRoute,
    postExternalConnectionsIdUploadsRefreshRouteHandler,
  )
  .openapi(
    getExternalConnectionsIdUploadsStatusRoute,
    getExternalConnectionsIdUploadsStatusRouteHandler,
  )
  .openapi(
    getExternalConnectionsIdUploadsTicketIdRoute,
    getExternalConnectionsIdUploadsTicketIdRouteHandler,
  )
  .openapi(
    postExternalConnectionsIdUploadsTicketIdRetryRoute,
    postExternalConnectionsIdUploadsTicketIdRetryRouteHandler,
  )
  .openapi(
    getExternalRequirementsRegulatoryRequirementIdSubNumberOrdersSubNumberOrderIdRoute,
    getExternalRequirementsRegulatoryRequirementIdSubNumberOrdersSubNumberOrderIdRouteHandler,
  )
  .openapi(
    postExternalRequirementsRegulatoryRequirementIdSubNumberOrdersSubNumberOrderIdRoute,
    postExternalRequirementsRegulatoryRequirementIdSubNumberOrdersSubNumberOrderIdRouteHandler,
  )
  .openapi(getFaxApplicationsRoute, getFaxApplicationsRouteHandler)
  .openapi(postFaxApplicationsRoute, postFaxApplicationsRouteHandler)
  .openapi(deleteFaxApplicationsIdRoute, deleteFaxApplicationsIdRouteHandler)
  .openapi(getFaxApplicationsIdRoute, getFaxApplicationsIdRouteHandler)
  .openapi(patchFaxApplicationsIdRoute, patchFaxApplicationsIdRouteHandler)
  .openapi(getFaxesRoute, getFaxesRouteHandler)
  .openapi(postFaxesRoute, postFaxesRouteHandler)
  .openapi(deleteFaxesIdRoute, deleteFaxesIdRouteHandler)
  .openapi(getFaxesIdRoute, getFaxesIdRouteHandler)
  .openapi(postFaxesIdActionsCancelRoute, postFaxesIdActionsCancelRouteHandler)
  .openapi(postFaxesIdActionsRefreshRoute, postFaxesIdActionsRefreshRouteHandler)
  .openapi(getFqdnConnectionsRoute, getFqdnConnectionsRouteHandler)
  .openapi(postFqdnConnectionsRoute, postFqdnConnectionsRouteHandler)
  .openapi(
    getFqdnConnectionsFqdnConnectionIdFqdnAuthenticationRoute,
    getFqdnConnectionsFqdnConnectionIdFqdnAuthenticationRouteHandler,
  )
  .openapi(
    patchFqdnConnectionsFqdnConnectionIdFqdnAuthenticationRoute,
    patchFqdnConnectionsFqdnConnectionIdFqdnAuthenticationRouteHandler,
  )
  .openapi(deleteFqdnConnectionsIdRoute, deleteFqdnConnectionsIdRouteHandler)
  .openapi(getFqdnConnectionsIdRoute, getFqdnConnectionsIdRouteHandler)
  .openapi(patchFqdnConnectionsIdRoute, patchFqdnConnectionsIdRouteHandler)
  .openapi(getFqdnsRoute, getFqdnsRouteHandler)
  .openapi(postFqdnsRoute, postFqdnsRouteHandler)
  .openapi(deleteFqdnsIdRoute, deleteFqdnsIdRouteHandler)
  .openapi(getFqdnsIdRoute, getFqdnsIdRouteHandler)
  .openapi(patchFqdnsIdRoute, patchFqdnsIdRouteHandler)
  .openapi(getGlobalIpAllowedPortsRoute, getGlobalIpAllowedPortsRouteHandler)
  .openapi(getGlobalIpAssignmentHealthRoute, getGlobalIpAssignmentHealthRouteHandler)
  .openapi(getGlobalIpAssignmentsRoute, getGlobalIpAssignmentsRouteHandler)
  .openapi(postGlobalIpAssignmentsRoute, postGlobalIpAssignmentsRouteHandler)
  .openapi(getGlobalIpAssignmentsUsageRoute, getGlobalIpAssignmentsUsageRouteHandler)
  .openapi(deleteGlobalIpAssignmentsIdRoute, deleteGlobalIpAssignmentsIdRouteHandler)
  .openapi(getGlobalIpAssignmentsIdRoute, getGlobalIpAssignmentsIdRouteHandler)
  .openapi(patchGlobalIpAssignmentsIdRoute, patchGlobalIpAssignmentsIdRouteHandler)
  .openapi(getGlobalIpAssignmentsUsage2Route, getGlobalIpAssignmentsUsage2RouteHandler)
  .openapi(getGlobalIpHealthCheckTypesRoute, getGlobalIpHealthCheckTypesRouteHandler)
  .openapi(getGlobalIpHealthChecksRoute, getGlobalIpHealthChecksRouteHandler)
  .openapi(postGlobalIpHealthChecksRoute, postGlobalIpHealthChecksRouteHandler)
  .openapi(deleteGlobalIpHealthChecksIdRoute, deleteGlobalIpHealthChecksIdRouteHandler)
  .openapi(getGlobalIpHealthChecksIdRoute, getGlobalIpHealthChecksIdRouteHandler)
  .openapi(getGlobalIpLatencyRoute, getGlobalIpLatencyRouteHandler)
  .openapi(getGlobalIpProtocolsRoute, getGlobalIpProtocolsRouteHandler)
  .openapi(getGlobalIpUsageRoute, getGlobalIpUsageRouteHandler)
  .openapi(getGlobalIpsRoute, getGlobalIpsRouteHandler)
  .openapi(postGlobalIpsRoute, postGlobalIpsRouteHandler)
  .openapi(deleteGlobalIpsIdRoute, deleteGlobalIpsIdRouteHandler)
  .openapi(getGlobalIpsIdRoute, getGlobalIpsIdRouteHandler)
  .openapi(getInboundChannelsRoute, getInboundChannelsRouteHandler)
  .openapi(patchInboundChannelsRoute, patchInboundChannelsRouteHandler)
  .openapi(getInexplicitNumberOrdersRoute, getInexplicitNumberOrdersRouteHandler)
  .openapi(postInexplicitNumberOrdersRoute, postInexplicitNumberOrdersRouteHandler)
  .openapi(getInexplicitNumberOrdersIdRoute, getInexplicitNumberOrdersIdRouteHandler)
  .openapi(getInfringementClaimsClaimIdRoute, getInfringementClaimsClaimIdRouteHandler)
  .openapi(
    postInfringementClaimsClaimIdContestRoute,
    postInfringementClaimsClaimIdContestRouteHandler,
  )
  .openapi(getIntegrationSecretsRoute, getIntegrationSecretsRouteHandler)
  .openapi(postIntegrationSecretsRoute, postIntegrationSecretsRouteHandler)
  .openapi(deleteIntegrationSecretsIdRoute, deleteIntegrationSecretsIdRouteHandler)
  .openapi(getInventoryCoverageRoute, getInventoryCoverageRouteHandler)
  .openapi(getInvoicesRoute, getInvoicesRouteHandler)
  .openapi(getInvoicesIdRoute, getInvoicesIdRouteHandler)
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
  .openapi(
    getLegacyReportingBatchDetailRecordsSpeechToTextRoute,
    getLegacyReportingBatchDetailRecordsSpeechToTextRouteHandler,
  )
  .openapi(
    postLegacyReportingBatchDetailRecordsSpeechToTextRoute,
    postLegacyReportingBatchDetailRecordsSpeechToTextRouteHandler,
  )
  .openapi(
    deleteLegacyReportingBatchDetailRecordsSpeechToTextIdRoute,
    deleteLegacyReportingBatchDetailRecordsSpeechToTextIdRouteHandler,
  )
  .openapi(
    getLegacyReportingBatchDetailRecordsSpeechToTextIdRoute,
    getLegacyReportingBatchDetailRecordsSpeechToTextIdRouteHandler,
  )
  .openapi(
    getLegacyReportingBatchDetailRecordsMessagingRoute,
    getLegacyReportingBatchDetailRecordsMessagingRouteHandler,
  )
  .openapi(
    postLegacyReportingBatchDetailRecordsMessagingRoute,
    postLegacyReportingBatchDetailRecordsMessagingRouteHandler,
  )
  .openapi(
    deleteLegacyReportingBatchDetailRecordsMessagingIdRoute,
    deleteLegacyReportingBatchDetailRecordsMessagingIdRouteHandler,
  )
  .openapi(
    getLegacyReportingBatchDetailRecordsMessagingIdRoute,
    getLegacyReportingBatchDetailRecordsMessagingIdRouteHandler,
  )
  .openapi(
    getLegacyReportingBatchDetailRecordsSpeechToText2Route,
    getLegacyReportingBatchDetailRecordsSpeechToText2RouteHandler,
  )
  .openapi(
    postLegacyReportingBatchDetailRecordsSpeechToText2Route,
    postLegacyReportingBatchDetailRecordsSpeechToText2RouteHandler,
  )
  .openapi(
    deleteLegacyReportingBatchDetailRecordsSpeechToTextId2Route,
    deleteLegacyReportingBatchDetailRecordsSpeechToTextId2RouteHandler,
  )
  .openapi(
    getLegacyReportingBatchDetailRecordsSpeechToTextId2Route,
    getLegacyReportingBatchDetailRecordsSpeechToTextId2RouteHandler,
  )
  .openapi(
    getLegacyReportingBatchDetailRecordsVoiceRoute,
    getLegacyReportingBatchDetailRecordsVoiceRouteHandler,
  )
  .openapi(
    postLegacyReportingBatchDetailRecordsVoiceRoute,
    postLegacyReportingBatchDetailRecordsVoiceRouteHandler,
  )
  .openapi(
    getLegacyReportingBatchDetailRecordsVoiceFieldsRoute,
    getLegacyReportingBatchDetailRecordsVoiceFieldsRouteHandler,
  )
  .openapi(
    deleteLegacyReportingBatchDetailRecordsVoiceIdRoute,
    deleteLegacyReportingBatchDetailRecordsVoiceIdRouteHandler,
  )
  .openapi(
    getLegacyReportingBatchDetailRecordsVoiceIdRoute,
    getLegacyReportingBatchDetailRecordsVoiceIdRouteHandler,
  )
  .openapi(
    getLegacyReportingUsageReportsMessagingRoute,
    getLegacyReportingUsageReportsMessagingRouteHandler,
  )
  .openapi(
    postLegacyReportingUsageReportsMessagingRoute,
    postLegacyReportingUsageReportsMessagingRouteHandler,
  )
  .openapi(
    deleteLegacyReportingUsageReportsMessagingIdRoute,
    deleteLegacyReportingUsageReportsMessagingIdRouteHandler,
  )
  .openapi(
    getLegacyReportingUsageReportsMessagingIdRoute,
    getLegacyReportingUsageReportsMessagingIdRouteHandler,
  )
  .openapi(
    getLegacyReportingUsageReportsNumberLookupRoute,
    getLegacyReportingUsageReportsNumberLookupRouteHandler,
  )
  .openapi(
    postLegacyReportingUsageReportsNumberLookupRoute,
    postLegacyReportingUsageReportsNumberLookupRouteHandler,
  )
  .openapi(
    deleteLegacyReportingUsageReportsNumberLookupIdRoute,
    deleteLegacyReportingUsageReportsNumberLookupIdRouteHandler,
  )
  .openapi(
    getLegacyReportingUsageReportsNumberLookupIdRoute,
    getLegacyReportingUsageReportsNumberLookupIdRouteHandler,
  )
  .openapi(
    getLegacyReportingUsageReportsSpeechToTextRoute,
    getLegacyReportingUsageReportsSpeechToTextRouteHandler,
  )
  .openapi(
    getLegacyReportingUsageReportsVoiceRoute,
    getLegacyReportingUsageReportsVoiceRouteHandler,
  )
  .openapi(
    postLegacyReportingUsageReportsVoiceRoute,
    postLegacyReportingUsageReportsVoiceRouteHandler,
  )
  .openapi(
    deleteLegacyReportingUsageReportsVoiceIdRoute,
    deleteLegacyReportingUsageReportsVoiceIdRouteHandler,
  )
  .openapi(
    getLegacyReportingUsageReportsVoiceIdRoute,
    getLegacyReportingUsageReportsVoiceIdRouteHandler,
  )
  .openapi(
    getLegacyReportingBatchDetailRecordsMessaging2Route,
    getLegacyReportingBatchDetailRecordsMessaging2RouteHandler,
  )
  .openapi(
    postLegacyReportingBatchDetailRecordsMessaging2Route,
    postLegacyReportingBatchDetailRecordsMessaging2RouteHandler,
  )
  .openapi(
    deleteLegacyReportingBatchDetailRecordsMessagingId2Route,
    deleteLegacyReportingBatchDetailRecordsMessagingId2RouteHandler,
  )
  .openapi(
    getLegacyReportingBatchDetailRecordsMessagingId2Route,
    getLegacyReportingBatchDetailRecordsMessagingId2RouteHandler,
  )
  .openapi(
    getLegacyReportingBatchDetailRecordsVoice2Route,
    getLegacyReportingBatchDetailRecordsVoice2RouteHandler,
  )
  .openapi(
    postLegacyReportingBatchDetailRecordsVoice2Route,
    postLegacyReportingBatchDetailRecordsVoice2RouteHandler,
  )
  .openapi(
    getLegacyReportingBatchDetailRecordsVoiceFields2Route,
    getLegacyReportingBatchDetailRecordsVoiceFields2RouteHandler,
  )
  .openapi(
    deleteLegacyReportingBatchDetailRecordsVoiceId2Route,
    deleteLegacyReportingBatchDetailRecordsVoiceId2RouteHandler,
  )
  .openapi(
    getLegacyReportingBatchDetailRecordsVoiceId2Route,
    getLegacyReportingBatchDetailRecordsVoiceId2RouteHandler,
  )
  .openapi(
    getLegacyReportingUsageReportsMessaging2Route,
    getLegacyReportingUsageReportsMessaging2RouteHandler,
  )
  .openapi(
    postLegacyReportingUsageReportsMessaging2Route,
    postLegacyReportingUsageReportsMessaging2RouteHandler,
  )
  .openapi(
    deleteLegacyReportingUsageReportsMessagingId2Route,
    deleteLegacyReportingUsageReportsMessagingId2RouteHandler,
  )
  .openapi(
    getLegacyReportingUsageReportsMessagingId2Route,
    getLegacyReportingUsageReportsMessagingId2RouteHandler,
  )
  .openapi(
    getLegacyReportingUsageReportsNumberLookup2Route,
    getLegacyReportingUsageReportsNumberLookup2RouteHandler,
  )
  .openapi(
    postLegacyReportingUsageReportsNumberLookup2Route,
    postLegacyReportingUsageReportsNumberLookup2RouteHandler,
  )
  .openapi(
    deleteLegacyReportingUsageReportsNumberLookupId2Route,
    deleteLegacyReportingUsageReportsNumberLookupId2RouteHandler,
  )
  .openapi(
    getLegacyReportingUsageReportsNumberLookupId2Route,
    getLegacyReportingUsageReportsNumberLookupId2RouteHandler,
  )
  .openapi(
    getLegacyReportingUsageReportsSpeechToText2Route,
    getLegacyReportingUsageReportsSpeechToText2RouteHandler,
  )
  .openapi(
    getLegacyReportingUsageReportsVoice2Route,
    getLegacyReportingUsageReportsVoice2RouteHandler,
  )
  .openapi(
    postLegacyReportingUsageReportsVoice2Route,
    postLegacyReportingUsageReportsVoice2RouteHandler,
  )
  .openapi(
    deleteLegacyReportingUsageReportsVoiceId2Route,
    deleteLegacyReportingUsageReportsVoiceId2RouteHandler,
  )
  .openapi(
    getLegacyReportingUsageReportsVoiceId2Route,
    getLegacyReportingUsageReportsVoiceId2RouteHandler,
  )
  .openapi(getListRoute, getListRouteHandler)
  .openapi(getListChannelZoneIdRoute, getListChannelZoneIdRouteHandler)
  .openapi(getLlmTokenGatewaySpendEventsRoute, getLlmTokenGatewaySpendEventsRouteHandler)
  .openapi(getLlmTokenGatewaySpendSummaryRoute, getLlmTokenGatewaySpendSummaryRouteHandler)
  .openapi(getLlmTokenGatewayTokenGroupsRoute, getLlmTokenGatewayTokenGroupsRouteHandler)
  .openapi(postLlmTokenGatewayTokenGroupsRoute, postLlmTokenGatewayTokenGroupsRouteHandler)
  .openapi(deleteLlmTokenGatewayTokenGroupsIdRoute, deleteLlmTokenGatewayTokenGroupsIdRouteHandler)
  .openapi(getLlmTokenGatewayTokenGroupsIdRoute, getLlmTokenGatewayTokenGroupsIdRouteHandler)
  .openapi(patchLlmTokenGatewayTokenGroupsIdRoute, patchLlmTokenGatewayTokenGroupsIdRouteHandler)
  .openapi(getLlmTokenGatewayTokenKeysRoute, getLlmTokenGatewayTokenKeysRouteHandler)
  .openapi(postLlmTokenGatewayTokenKeysRoute, postLlmTokenGatewayTokenKeysRouteHandler)
  .openapi(deleteLlmTokenGatewayTokenKeysIdRoute, deleteLlmTokenGatewayTokenKeysIdRouteHandler)
  .openapi(getLlmTokenGatewayTokenKeysIdRoute, getLlmTokenGatewayTokenKeysIdRouteHandler)
  .openapi(patchLlmTokenGatewayTokenKeysIdRoute, patchLlmTokenGatewayTokenKeysIdRouteHandler)
  .openapi(getLlmTokenGatewayUsageExportRoute, getLlmTokenGatewayUsageExportRouteHandler)
  .openapi(getLlmTokenGatewayUsageSummaryRoute, getLlmTokenGatewayUsageSummaryRouteHandler)
  .openapi(postMachinePaymentsAccountCreditRoute, postMachinePaymentsAccountCreditRouteHandler)
  .openapi(getManagedAccountsRoute, getManagedAccountsRouteHandler)
  .openapi(postManagedAccountsRoute, postManagedAccountsRouteHandler)
  .openapi(
    getManagedAccountsAllocatableGlobalOutboundChannelsRoute,
    getManagedAccountsAllocatableGlobalOutboundChannelsRouteHandler,
  )
  .openapi(getManagedAccountsIdRoute, getManagedAccountsIdRouteHandler)
  .openapi(patchManagedAccountsIdRoute, patchManagedAccountsIdRouteHandler)
  .openapi(
    postManagedAccountsIdActionsDisableRoute,
    postManagedAccountsIdActionsDisableRouteHandler,
  )
  .openapi(postManagedAccountsIdActionsEnableRoute, postManagedAccountsIdActionsEnableRouteHandler)
  .openapi(
    patchManagedAccountsIdUpdateGlobalChannelLimitRoute,
    patchManagedAccountsIdUpdateGlobalChannelLimitRouteHandler,
  )
  .openapi(getMediaRoute, getMediaRouteHandler)
  .openapi(postMediaRoute, postMediaRouteHandler)
  .openapi(deleteMediaMediaNameRoute, deleteMediaMediaNameRouteHandler)
  .openapi(getMediaMediaNameRoute, getMediaMediaNameRouteHandler)
  .openapi(putMediaMediaNameRoute, putMediaMediaNameRouteHandler)
  .openapi(getMediaMediaNameDownloadRoute, getMediaMediaNameDownloadRouteHandler)
  .openapi(getMeetingBotCalendarOauthCallbackRoute, getMeetingBotCalendarOauthCallbackRouteHandler)
  .openapi(getMeetingSessionsRoute, getMeetingSessionsRouteHandler)
  .openapi(postMeetingSessionsRoute, postMeetingSessionsRouteHandler)
  .openapi(deleteMeetingSessionsIdRoute, deleteMeetingSessionsIdRouteHandler)
  .openapi(getMeetingSessionsIdRoute, getMeetingSessionsIdRouteHandler)
  .openapi(patchMeetingSessionsIdRoute, patchMeetingSessionsIdRouteHandler)
  .openapi(
    postMeetingSessionsIdActionsSendChatRoute,
    postMeetingSessionsIdActionsSendChatRouteHandler,
  )
  .openapi(postMeetingSessionsIdActionsSpeakRoute, postMeetingSessionsIdActionsSpeakRouteHandler)
  .openapi(
    postMeetingSessionsIdActionsStopSpeakingRoute,
    postMeetingSessionsIdActionsStopSpeakingRouteHandler,
  )
  .openapi(getMeetingSessionsIdArtifactsRoute, getMeetingSessionsIdArtifactsRouteHandler)
  .openapi(postMeetingSessionsIdArtifactsRoute, postMeetingSessionsIdArtifactsRouteHandler)
  .openapi(
    getMeetingSessionsIdArtifactsArtifactIdRoute,
    getMeetingSessionsIdArtifactsArtifactIdRouteHandler,
  )
  .openapi(getMeetingSessionsIdEventsRoute, getMeetingSessionsIdEventsRouteHandler)
  .openapi(
    deleteMeetingSessionsIdRecordingMediaRoute,
    deleteMeetingSessionsIdRecordingMediaRouteHandler,
  )
  .openapi(getMeetingSessionsIdRecordingsRoute, getMeetingSessionsIdRecordingsRouteHandler)
  .openapi(getMeetingSessionsIdTranscriptRoute, getMeetingSessionsIdTranscriptRouteHandler)
  .openapi(postMessagesRoute, postMessagesRouteHandler)
  .openapi(postMessagesAlphanumericSenderIdRoute, postMessagesAlphanumericSenderIdRouteHandler)
  .openapi(postMessagesAlphanumericSenderId2Route, postMessagesAlphanumericSenderId2RouteHandler)
  .openapi(getMessagesGroupMessageIdRoute, getMessagesGroupMessageIdRouteHandler)
  .openapi(postMessagesGroupMmsRoute, postMessagesGroupMmsRouteHandler)
  .openapi(postMessagesLongCodeRoute, postMessagesLongCodeRouteHandler)
  .openapi(postMessagesNumberPoolRoute, postMessagesNumberPoolRouteHandler)
  .openapi(postMessagesRcsRoute, postMessagesRcsRouteHandler)
  .openapi(getMessagesRcsDeeplinksAgentIdRoute, getMessagesRcsDeeplinksAgentIdRouteHandler)
  .openapi(getMessagesRcsDeeplinksAgentId2Route, getMessagesRcsDeeplinksAgentId2RouteHandler)
  .openapi(postMessagesScheduleRoute, postMessagesScheduleRouteHandler)
  .openapi(postMessagesShortCodeRoute, postMessagesShortCodeRouteHandler)
  .openapi(postMessagesWhatsappRoute, postMessagesWhatsappRouteHandler)
  .openapi(deleteMessagesIdRoute, deleteMessagesIdRouteHandler)
  .openapi(getMessagesIdRoute, getMessagesIdRouteHandler)
  .openapi(getMessagingHostedNumbersRoute, getMessagingHostedNumbersRouteHandler)
  .openapi(
    postMessagingProfilesIdActionsRegenerateSecretRoute,
    postMessagingProfilesIdActionsRegenerateSecretRouteHandler,
  )
  .openapi(
    getMessagingProfilesIdAlphanumericSenderIdsRoute,
    getMessagingProfilesIdAlphanumericSenderIdsRouteHandler,
  )
  .openapi(getMessagingProfilesIdMetricsRoute, getMessagingProfilesIdMetricsRouteHandler)
  .openapi(getMessagingRcsAgentsRoute, getMessagingRcsAgentsRouteHandler)
  .openapi(getMessagingRcsAgentsIdRoute, getMessagingRcsAgentsIdRouteHandler)
  .openapi(patchMessagingRcsAgentsIdRoute, patchMessagingRcsAgentsIdRouteHandler)
  .openapi(postMessagingRcsBulkCapabilitiesRoute, postMessagingRcsBulkCapabilitiesRouteHandler)
  .openapi(
    getMessagingRcsCapabilitiesAgentIdPhoneNumberRoute,
    getMessagingRcsCapabilitiesAgentIdPhoneNumberRouteHandler,
  )
  .openapi(
    putMessagingRcsTestNumberInviteIdPhoneNumberRoute,
    putMessagingRcsTestNumberInviteIdPhoneNumberRouteHandler,
  )
  .openapi(
    getMessagingTollfreeVerificationRequestsIdStatusHistoryRoute,
    getMessagingTollfreeVerificationRequestsIdStatusHistoryRouteHandler,
  )
  .openapi(getMessagingHostedNumberOrdersRoute, getMessagingHostedNumberOrdersRouteHandler)
  .openapi(postMessagingHostedNumberOrdersRoute, postMessagingHostedNumberOrdersRouteHandler)
  .openapi(
    postMessagingHostedNumberOrdersEligibilityNumbersCheckRoute,
    postMessagingHostedNumberOrdersEligibilityNumbersCheckRouteHandler,
  )
  .openapi(
    deleteMessagingHostedNumberOrdersIdRoute,
    deleteMessagingHostedNumberOrdersIdRouteHandler,
  )
  .openapi(getMessagingHostedNumberOrdersIdRoute, getMessagingHostedNumberOrdersIdRouteHandler)
  .openapi(
    postMessagingHostedNumberOrdersIdActionsFileUploadRoute,
    postMessagingHostedNumberOrdersIdActionsFileUploadRouteHandler,
  )
  .openapi(
    postMessagingHostedNumberOrdersIdValidationCodesRoute,
    postMessagingHostedNumberOrdersIdValidationCodesRouteHandler,
  )
  .openapi(
    postMessagingHostedNumberOrdersIdVerificationCodesRoute,
    postMessagingHostedNumberOrdersIdVerificationCodesRouteHandler,
  )
  .openapi(getMessagingHostedNumbers2Route, getMessagingHostedNumbers2RouteHandler)
  .openapi(deleteMessagingHostedNumbersIdRoute, deleteMessagingHostedNumbersIdRouteHandler)
  .openapi(getMessagingHostedNumbersIdRoute, getMessagingHostedNumbersIdRouteHandler)
  .openapi(patchMessagingHostedNumbersIdRoute, patchMessagingHostedNumbersIdRouteHandler)
  .openapi(postMessagingNumbersBulkUpdatesRoute, postMessagingNumbersBulkUpdatesRouteHandler)
  .openapi(
    getMessagingNumbersBulkUpdatesOrderIdRoute,
    getMessagingNumbersBulkUpdatesOrderIdRouteHandler,
  )
  .openapi(postMessagingNumbersBulkUpdates2Route, postMessagingNumbersBulkUpdates2RouteHandler)
  .openapi(
    getMessagingNumbersBulkUpdatesOrderId2Route,
    getMessagingNumbersBulkUpdatesOrderId2RouteHandler,
  )
  .openapi(getMessagingOptoutsRoute, getMessagingOptoutsRouteHandler)
  .openapi(getMessagingProfileMetricsRoute, getMessagingProfileMetricsRouteHandler)
  .openapi(getMessagingProfilesRoute, getMessagingProfilesRouteHandler)
  .openapi(postMessagingProfilesRoute, postMessagingProfilesRouteHandler)
  .openapi(deleteMessagingProfilesIdRoute, deleteMessagingProfilesIdRouteHandler)
  .openapi(getMessagingProfilesIdRoute, getMessagingProfilesIdRouteHandler)
  .openapi(patchMessagingProfilesIdRoute, patchMessagingProfilesIdRouteHandler)
  .openapi(
    postMessagingProfilesIdActionsRegenerateSecret2Route,
    postMessagingProfilesIdActionsRegenerateSecret2RouteHandler,
  )
  .openapi(
    getMessagingProfilesIdAlphanumericSenderIds2Route,
    getMessagingProfilesIdAlphanumericSenderIds2RouteHandler,
  )
  .openapi(getMessagingProfilesIdMetrics2Route, getMessagingProfilesIdMetrics2RouteHandler)
  .openapi(getMessagingProfilesIdPhoneNumbersRoute, getMessagingProfilesIdPhoneNumbersRouteHandler)
  .openapi(getMessagingProfilesIdShortCodesRoute, getMessagingProfilesIdShortCodesRouteHandler)
  .openapi(
    getMessagingProfilesProfileIdAutorespConfigsRoute,
    getMessagingProfilesProfileIdAutorespConfigsRouteHandler,
  )
  .openapi(
    postMessagingProfilesProfileIdAutorespConfigsRoute,
    postMessagingProfilesProfileIdAutorespConfigsRouteHandler,
  )
  .openapi(
    deleteMessagingProfilesProfileIdAutorespConfigsAutorespCfgIdRoute,
    deleteMessagingProfilesProfileIdAutorespConfigsAutorespCfgIdRouteHandler,
  )
  .openapi(
    getMessagingProfilesProfileIdAutorespConfigsAutorespCfgIdRoute,
    getMessagingProfilesProfileIdAutorespConfigsAutorespCfgIdRouteHandler,
  )
  .openapi(
    putMessagingProfilesProfileIdAutorespConfigsAutorespCfgIdRoute,
    putMessagingProfilesProfileIdAutorespConfigsAutorespCfgIdRouteHandler,
  )
  .openapi(
    getMessagingTollfreeVerificationRequestsRoute,
    getMessagingTollfreeVerificationRequestsRouteHandler,
  )
  .openapi(
    postMessagingTollfreeVerificationRequestsRoute,
    postMessagingTollfreeVerificationRequestsRouteHandler,
  )
  .openapi(
    deleteMessagingTollfreeVerificationRequestsIdRoute,
    deleteMessagingTollfreeVerificationRequestsIdRouteHandler,
  )
  .openapi(
    getMessagingTollfreeVerificationRequestsIdRoute,
    getMessagingTollfreeVerificationRequestsIdRouteHandler,
  )
  .openapi(
    patchMessagingTollfreeVerificationRequestsIdRoute,
    patchMessagingTollfreeVerificationRequestsIdRouteHandler,
  )
  .openapi(
    getMessagingTollfreeVerificationRequestsIdStatusHistory2Route,
    getMessagingTollfreeVerificationRequestsIdStatusHistory2RouteHandler,
  )
  .openapi(getMessagingUrlDomainsRoute, getMessagingUrlDomainsRouteHandler)
  .openapi(getMobileNetworkOperatorsRoute, getMobileNetworkOperatorsRouteHandler)
  .openapi(getMobilePhoneNumbersRoute, getMobilePhoneNumbersRouteHandler)
  .openapi(getMobilePhoneNumbersMessagingRoute, getMobilePhoneNumbersMessagingRouteHandler)
  .openapi(getMobilePhoneNumbersIdRoute, getMobilePhoneNumbersIdRouteHandler)
  .openapi(patchMobilePhoneNumbersIdRoute, patchMobilePhoneNumbersIdRouteHandler)
  .openapi(getMobilePhoneNumbersIdMessagingRoute, getMobilePhoneNumbersIdMessagingRouteHandler)
  .openapi(getMobilePushCredentialsRoute, getMobilePushCredentialsRouteHandler)
  .openapi(postMobilePushCredentialsRoute, postMobilePushCredentialsRouteHandler)
  .openapi(
    deleteMobilePushCredentialsPushCredentialIdRoute,
    deleteMobilePushCredentialsPushCredentialIdRouteHandler,
  )
  .openapi(
    getMobilePushCredentialsPushCredentialIdRoute,
    getMobilePushCredentialsPushCredentialIdRouteHandler,
  )
  .openapi(getMobileVoiceConnectionsRoute, getMobileVoiceConnectionsRouteHandler)
  .openapi(postMobileVoiceConnectionsRoute, postMobileVoiceConnectionsRouteHandler)
  .openapi(deleteMobileVoiceConnectionsIdRoute, deleteMobileVoiceConnectionsIdRouteHandler)
  .openapi(getMobileVoiceConnectionsIdRoute, getMobileVoiceConnectionsIdRouteHandler)
  .openapi(patchMobileVoiceConnectionsIdRoute, patchMobileVoiceConnectionsIdRouteHandler)
  .openapi(getNetworkCoverageRoute, getNetworkCoverageRouteHandler)
  .openapi(getNetworkRoutesRoute, getNetworkRoutesRouteHandler)
  .openapi(postNetworkRoutesRoute, postNetworkRoutesRouteHandler)
  .openapi(deleteNetworkRoutesIdRoute, deleteNetworkRoutesIdRouteHandler)
  .openapi(getNetworkRoutesIdRoute, getNetworkRoutesIdRouteHandler)
  .openapi(getNetworksRoute, getNetworksRouteHandler)
  .openapi(postNetworksRoute, postNetworksRouteHandler)
  .openapi(deleteNetworksIdRoute, deleteNetworksIdRouteHandler)
  .openapi(getNetworksIdRoute, getNetworksIdRouteHandler)
  .openapi(patchNetworksIdRoute, patchNetworksIdRouteHandler)
  .openapi(deleteNetworksIdDefaultGatewayRoute, deleteNetworksIdDefaultGatewayRouteHandler)
  .openapi(getNetworksIdDefaultGatewayRoute, getNetworksIdDefaultGatewayRouteHandler)
  .openapi(postNetworksIdDefaultGatewayRoute, postNetworksIdDefaultGatewayRouteHandler)
  .openapi(getNetworksIdNetworkInterfacesRoute, getNetworksIdNetworkInterfacesRouteHandler)
  .openapi(getNoiseSuppressionEnginesRoute, getNoiseSuppressionEnginesRouteHandler)
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
  .openapi(getNumberOrderPhoneNumbersRoute, getNumberOrderPhoneNumbersRouteHandler)
  .openapi(
    postNumberOrderPhoneNumbersIdRequirementGroupRoute,
    postNumberOrderPhoneNumbersIdRequirementGroupRouteHandler,
  )
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
  .openapi(postNumbersFeaturesRoute, postNumbersFeaturesRouteHandler)
  .openapi(getOauthAuthorizeRoute, getOauthAuthorizeRouteHandler)
  .openapi(getOauthClientsRoute, getOauthClientsRouteHandler)
  .openapi(postOauthClientsRoute, postOauthClientsRouteHandler)
  .openapi(deleteOauthClientsIdRoute, deleteOauthClientsIdRouteHandler)
  .openapi(getOauthClientsIdRoute, getOauthClientsIdRouteHandler)
  .openapi(putOauthClientsIdRoute, putOauthClientsIdRouteHandler)
  .openapi(getOauthConsentConsentTokenRoute, getOauthConsentConsentTokenRouteHandler)
  .openapi(getOauthGrantsRoute, getOauthGrantsRouteHandler)
  .openapi(postOauthGrantsRoute, postOauthGrantsRouteHandler)
  .openapi(deleteOauthGrantsIdRoute, deleteOauthGrantsIdRouteHandler)
  .openapi(getOauthGrantsIdRoute, getOauthGrantsIdRouteHandler)
  .openapi(postOauthIntrospectRoute, postOauthIntrospectRouteHandler)
  .openapi(getOauthJwksRoute, getOauthJwksRouteHandler)
  .openapi(postOauthRegisterRoute, postOauthRegisterRouteHandler)
  .openapi(postOauthTokenRoute, postOauthTokenRouteHandler)
  .openapi(getOauthClients2Route, getOauthClients2RouteHandler)
  .openapi(postOauthClients2Route, postOauthClients2RouteHandler)
  .openapi(deleteOauthClientsId2Route, deleteOauthClientsId2RouteHandler)
  .openapi(getOauthClientsId2Route, getOauthClientsId2RouteHandler)
  .openapi(putOauthClientsId2Route, putOauthClientsId2RouteHandler)
  .openapi(getOauthGrants2Route, getOauthGrants2RouteHandler)
  .openapi(deleteOauthGrantsId2Route, deleteOauthGrantsId2RouteHandler)
  .openapi(getOauthGrantsId2Route, getOauthGrantsId2RouteHandler)
  .openapi(postOperatorConnectActionsRefreshRoute, postOperatorConnectActionsRefreshRouteHandler)
  .openapi(getOrganizationsUsersRoute, getOrganizationsUsersRouteHandler)
  .openapi(
    getOrganizationsUsersUsersGroupsReportRoute,
    getOrganizationsUsersUsersGroupsReportRouteHandler,
  )
  .openapi(getOrganizationsUsersIdRoute, getOrganizationsUsersIdRouteHandler)
  .openapi(
    postOrganizationsUsersIdActionsRemoveRoute,
    postOrganizationsUsersIdActionsRemoveRouteHandler,
  )
  .openapi(getOtaUpdatesRoute, getOtaUpdatesRouteHandler)
  .openapi(getOtaUpdatesIdRoute, getOtaUpdatesIdRouteHandler)
  .openapi(getOutboundVoiceProfilesRoute, getOutboundVoiceProfilesRouteHandler)
  .openapi(postOutboundVoiceProfilesRoute, postOutboundVoiceProfilesRouteHandler)
  .openapi(deleteOutboundVoiceProfilesIdRoute, deleteOutboundVoiceProfilesIdRouteHandler)
  .openapi(getOutboundVoiceProfilesIdRoute, getOutboundVoiceProfilesIdRouteHandler)
  .openapi(patchOutboundVoiceProfilesIdRoute, patchOutboundVoiceProfilesIdRouteHandler)
  .openapi(getPayConnectorsRoute, getPayConnectorsRouteHandler)
  .openapi(postPayConnectorsRoute, postPayConnectorsRouteHandler)
  .openapi(deletePayConnectorsNameRoute, deletePayConnectorsNameRouteHandler)
  .openapi(getPayConnectorsNameRoute, getPayConnectorsNameRouteHandler)
  .openapi(patchPayConnectorsNameRoute, patchPayConnectorsNameRouteHandler)
  .openapi(getPaymentAutoRechargePrefsRoute, getPaymentAutoRechargePrefsRouteHandler)
  .openapi(patchPaymentAutoRechargePrefsRoute, patchPaymentAutoRechargePrefsRouteHandler)
  .openapi(
    postPaymentStoredPaymentTransactionsRoute,
    postPaymentStoredPaymentTransactionsRouteHandler,
  )
  .openapi(getPhoneNumberBlocksJobsRoute, getPhoneNumberBlocksJobsRouteHandler)
  .openapi(
    postPhoneNumberBlocksJobsDeletePhoneNumberBlockRoute,
    postPhoneNumberBlocksJobsDeletePhoneNumberBlockRouteHandler,
  )
  .openapi(getPhoneNumberBlocksJobsIdRoute, getPhoneNumberBlocksJobsIdRouteHandler)
  .openapi(getPhoneNumbersRoute, getPhoneNumbersRouteHandler)
  .openapi(
    postPhoneNumbersActionsVerifyOwnershipRoute,
    postPhoneNumbersActionsVerifyOwnershipRouteHandler,
  )
  .openapi(getPhoneNumbersCsvDownloadsRoute, getPhoneNumbersCsvDownloadsRouteHandler)
  .openapi(postPhoneNumbersCsvDownloadsRoute, postPhoneNumbersCsvDownloadsRouteHandler)
  .openapi(getPhoneNumbersCsvDownloadsIdRoute, getPhoneNumbersCsvDownloadsIdRouteHandler)
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
  .openapi(
    getPhoneNumbersRegulatoryRequirementsRoute,
    getPhoneNumbersRegulatoryRequirementsRouteHandler,
  )
  .openapi(getPhoneNumbersSlimRoute, getPhoneNumbersSlimRouteHandler)
  .openapi(getPhoneNumbersVoiceRoute, getPhoneNumbersVoiceRouteHandler)
  .openapi(deletePhoneNumbersIdRoute, deletePhoneNumbersIdRouteHandler)
  .openapi(getPhoneNumbersIdRoute, getPhoneNumbersIdRouteHandler)
  .openapi(patchPhoneNumbersIdRoute, patchPhoneNumbersIdRouteHandler)
  .openapi(
    patchPhoneNumbersIdActionsBundleStatusChangeRoute,
    patchPhoneNumbersIdActionsBundleStatusChangeRouteHandler,
  )
  .openapi(
    postPhoneNumbersIdActionsEnableEmergencyRoute,
    postPhoneNumbersIdActionsEnableEmergencyRouteHandler,
  )
  .openapi(getPhoneNumbersIdMessagingRoute, getPhoneNumbersIdMessagingRouteHandler)
  .openapi(patchPhoneNumbersIdMessagingRoute, patchPhoneNumbersIdMessagingRouteHandler)
  .openapi(getPhoneNumbersIdVoiceRoute, getPhoneNumbersIdVoiceRouteHandler)
  .openapi(patchPhoneNumbersIdVoiceRoute, patchPhoneNumbersIdVoiceRouteHandler)
  .openapi(
    getPhoneNumbersPhoneNumberIdVoicemailRoute,
    getPhoneNumbersPhoneNumberIdVoicemailRouteHandler,
  )
  .openapi(
    patchPhoneNumbersPhoneNumberIdVoicemailRoute,
    patchPhoneNumbersPhoneNumberIdVoicemailRouteHandler,
  )
  .openapi(
    postPhoneNumbersPhoneNumberIdVoicemailRoute,
    postPhoneNumbersPhoneNumberIdVoicemailRouteHandler,
  )
  .openapi(
    getPhoneNumbersRegulatoryRequirements2Route,
    getPhoneNumbersRegulatoryRequirements2RouteHandler,
  )
  .openapi(postPortabilityChecksRoute, postPortabilityChecksRouteHandler)
  .openapi(getPortingEventsRoute, getPortingEventsRouteHandler)
  .openapi(getPortingEventsIdRoute, getPortingEventsIdRouteHandler)
  .openapi(postPortingEventsIdRepublishRoute, postPortingEventsIdRepublishRouteHandler)
  .openapi(getPortingLoaConfigurationsRoute, getPortingLoaConfigurationsRouteHandler)
  .openapi(postPortingLoaConfigurationsRoute, postPortingLoaConfigurationsRouteHandler)
  .openapi(
    postPortingLoaConfigurationsPreviewRoute,
    postPortingLoaConfigurationsPreviewRouteHandler,
  )
  .openapi(deletePortingLoaConfigurationsIdRoute, deletePortingLoaConfigurationsIdRouteHandler)
  .openapi(getPortingLoaConfigurationsIdRoute, getPortingLoaConfigurationsIdRouteHandler)
  .openapi(patchPortingLoaConfigurationsIdRoute, patchPortingLoaConfigurationsIdRouteHandler)
  .openapi(
    getPortingLoaConfigurationsIdPreviewRoute,
    getPortingLoaConfigurationsIdPreviewRouteHandler,
  )
  .openapi(getPortingReportsRoute, getPortingReportsRouteHandler)
  .openapi(postPortingReportsRoute, postPortingReportsRouteHandler)
  .openapi(getPortingReportsIdRoute, getPortingReportsIdRouteHandler)
  .openapi(getPortingUkCarriersRoute, getPortingUkCarriersRouteHandler)
  .openapi(getPortingOrdersRoute, getPortingOrdersRouteHandler)
  .openapi(postPortingOrdersRoute, postPortingOrdersRouteHandler)
  .openapi(getPortingOrdersExceptionTypesRoute, getPortingOrdersExceptionTypesRouteHandler)
  .openapi(
    getPortingOrdersPhoneNumberConfigurationsRoute,
    getPortingOrdersPhoneNumberConfigurationsRouteHandler,
  )
  .openapi(
    postPortingOrdersPhoneNumberConfigurationsRoute,
    postPortingOrdersPhoneNumberConfigurationsRouteHandler,
  )
  .openapi(deletePortingOrdersIdRoute, deletePortingOrdersIdRouteHandler)
  .openapi(getPortingOrdersIdRoute, getPortingOrdersIdRouteHandler)
  .openapi(patchPortingOrdersIdRoute, patchPortingOrdersIdRouteHandler)
  .openapi(postPortingOrdersIdActionsActivateRoute, postPortingOrdersIdActionsActivateRouteHandler)
  .openapi(postPortingOrdersIdActionsCancelRoute, postPortingOrdersIdActionsCancelRouteHandler)
  .openapi(postPortingOrdersIdActionsConfirmRoute, postPortingOrdersIdActionsConfirmRouteHandler)
  .openapi(postPortingOrdersIdActionsShareRoute, postPortingOrdersIdActionsShareRouteHandler)
  .openapi(getPortingOrdersIdActivationJobsRoute, getPortingOrdersIdActivationJobsRouteHandler)
  .openapi(
    getPortingOrdersIdActivationJobsActivationJobIdRoute,
    getPortingOrdersIdActivationJobsActivationJobIdRouteHandler,
  )
  .openapi(
    patchPortingOrdersIdActivationJobsActivationJobIdRoute,
    patchPortingOrdersIdActivationJobsActivationJobIdRouteHandler,
  )
  .openapi(
    getPortingOrdersIdAdditionalDocumentsRoute,
    getPortingOrdersIdAdditionalDocumentsRouteHandler,
  )
  .openapi(
    postPortingOrdersIdAdditionalDocumentsRoute,
    postPortingOrdersIdAdditionalDocumentsRouteHandler,
  )
  .openapi(
    deletePortingOrdersIdAdditionalDocumentsAdditionalDocumentIdRoute,
    deletePortingOrdersIdAdditionalDocumentsAdditionalDocumentIdRouteHandler,
  )
  .openapi(
    getPortingOrdersIdAllowedFocWindowsRoute,
    getPortingOrdersIdAllowedFocWindowsRouteHandler,
  )
  .openapi(getPortingOrdersIdCommentsRoute, getPortingOrdersIdCommentsRouteHandler)
  .openapi(postPortingOrdersIdCommentsRoute, postPortingOrdersIdCommentsRouteHandler)
  .openapi(getPortingOrdersIdLoaTemplateRoute, getPortingOrdersIdLoaTemplateRouteHandler)
  .openapi(getPortingOrdersIdRequirementsRoute, getPortingOrdersIdRequirementsRouteHandler)
  .openapi(getPortingOrdersIdSubRequestRoute, getPortingOrdersIdSubRequestRouteHandler)
  .openapi(
    getPortingOrdersIdVerificationCodesRoute,
    getPortingOrdersIdVerificationCodesRouteHandler,
  )
  .openapi(
    postPortingOrdersIdVerificationCodesSendRoute,
    postPortingOrdersIdVerificationCodesSendRouteHandler,
  )
  .openapi(
    postPortingOrdersIdVerificationCodesVerifyRoute,
    postPortingOrdersIdVerificationCodesVerifyRouteHandler,
  )
  .openapi(
    getPortingOrdersPortingOrderIdActionRequirementsRoute,
    getPortingOrdersPortingOrderIdActionRequirementsRouteHandler,
  )
  .openapi(
    postPortingOrdersPortingOrderIdActionRequirementsIdInitiateRoute,
    postPortingOrdersPortingOrderIdActionRequirementsIdInitiateRouteHandler,
  )
  .openapi(
    getPortingOrdersPortingOrderIdAssociatedPhoneNumbersRoute,
    getPortingOrdersPortingOrderIdAssociatedPhoneNumbersRouteHandler,
  )
  .openapi(
    postPortingOrdersPortingOrderIdAssociatedPhoneNumbersRoute,
    postPortingOrdersPortingOrderIdAssociatedPhoneNumbersRouteHandler,
  )
  .openapi(
    deletePortingOrdersPortingOrderIdAssociatedPhoneNumbersIdRoute,
    deletePortingOrdersPortingOrderIdAssociatedPhoneNumbersIdRouteHandler,
  )
  .openapi(
    getPortingOrdersPortingOrderIdPhoneNumberBlocksRoute,
    getPortingOrdersPortingOrderIdPhoneNumberBlocksRouteHandler,
  )
  .openapi(
    postPortingOrdersPortingOrderIdPhoneNumberBlocksRoute,
    postPortingOrdersPortingOrderIdPhoneNumberBlocksRouteHandler,
  )
  .openapi(
    deletePortingOrdersPortingOrderIdPhoneNumberBlocksIdRoute,
    deletePortingOrdersPortingOrderIdPhoneNumberBlocksIdRouteHandler,
  )
  .openapi(
    getPortingOrdersPortingOrderIdPhoneNumberExtensionsRoute,
    getPortingOrdersPortingOrderIdPhoneNumberExtensionsRouteHandler,
  )
  .openapi(
    postPortingOrdersPortingOrderIdPhoneNumberExtensionsRoute,
    postPortingOrdersPortingOrderIdPhoneNumberExtensionsRouteHandler,
  )
  .openapi(
    deletePortingOrdersPortingOrderIdPhoneNumberExtensionsIdRoute,
    deletePortingOrdersPortingOrderIdPhoneNumberExtensionsIdRouteHandler,
  )
  .openapi(getPortingPhoneNumbersRoute, getPortingPhoneNumbersRouteHandler)
  .openapi(getPortoutsRoute, getPortoutsRouteHandler)
  .openapi(getPortoutsEventsRoute, getPortoutsEventsRouteHandler)
  .openapi(getPortoutsEventsIdRoute, getPortoutsEventsIdRouteHandler)
  .openapi(postPortoutsEventsIdRepublishRoute, postPortoutsEventsIdRepublishRouteHandler)
  .openapi(getPortoutsRejectionsPortoutIdRoute, getPortoutsRejectionsPortoutIdRouteHandler)
  .openapi(getPortoutsReportsRoute, getPortoutsReportsRouteHandler)
  .openapi(postPortoutsReportsRoute, postPortoutsReportsRouteHandler)
  .openapi(getPortoutsReportsIdRoute, getPortoutsReportsIdRouteHandler)
  .openapi(getPortoutsIdRoute, getPortoutsIdRouteHandler)
  .openapi(getPortoutsIdCommentsRoute, getPortoutsIdCommentsRouteHandler)
  .openapi(postPortoutsIdCommentsRoute, postPortoutsIdCommentsRouteHandler)
  .openapi(getPortoutsIdSupportingDocumentsRoute, getPortoutsIdSupportingDocumentsRouteHandler)
  .openapi(postPortoutsIdSupportingDocumentsRoute, postPortoutsIdSupportingDocumentsRouteHandler)
  .openapi(patchPortoutsIdStatusRoute, patchPortoutsIdStatusRouteHandler)
  .openapi(getPricingProductsRoute, getPricingProductsRouteHandler)
  .openapi(getPricingProductsSlugRoute, getPricingProductsSlugRouteHandler)
  .openapi(getPrivateWirelessGatewaysRoute, getPrivateWirelessGatewaysRouteHandler)
  .openapi(postPrivateWirelessGatewaysRoute, postPrivateWirelessGatewaysRouteHandler)
  .openapi(deletePrivateWirelessGatewaysIdRoute, deletePrivateWirelessGatewaysIdRouteHandler)
  .openapi(getPrivateWirelessGatewaysIdRoute, getPrivateWirelessGatewaysIdRouteHandler)
  .openapi(getPronunciationDictsRoute, getPronunciationDictsRouteHandler)
  .openapi(postPronunciationDictsRoute, postPronunciationDictsRouteHandler)
  .openapi(deletePronunciationDictsIdRoute, deletePronunciationDictsIdRouteHandler)
  .openapi(getPronunciationDictsIdRoute, getPronunciationDictsIdRouteHandler)
  .openapi(patchPronunciationDictsIdRoute, patchPronunciationDictsIdRouteHandler)
  .openapi(getPublicInternetGatewaysRoute, getPublicInternetGatewaysRouteHandler)
  .openapi(postPublicInternetGatewaysRoute, postPublicInternetGatewaysRouteHandler)
  .openapi(deletePublicInternetGatewaysIdRoute, deletePublicInternetGatewaysIdRouteHandler)
  .openapi(getPublicInternetGatewaysIdRoute, getPublicInternetGatewaysIdRouteHandler)
  .openapi(getQueuesRoute, getQueuesRouteHandler)
  .openapi(postQueuesRoute, postQueuesRouteHandler)
  .openapi(deleteQueuesQueueNameRoute, deleteQueuesQueueNameRouteHandler)
  .openapi(getQueuesQueueNameRoute, getQueuesQueueNameRouteHandler)
  .openapi(postQueuesQueueNameRoute, postQueuesQueueNameRouteHandler)
  .openapi(getQueuesQueueNameCallsRoute, getQueuesQueueNameCallsRouteHandler)
  .openapi(
    deleteQueuesQueueNameCallsCallControlIdRoute,
    deleteQueuesQueueNameCallsCallControlIdRouteHandler,
  )
  .openapi(
    getQueuesQueueNameCallsCallControlIdRoute,
    getQueuesQueueNameCallsCallControlIdRouteHandler,
  )
  .openapi(
    patchQueuesQueueNameCallsCallControlIdRoute,
    patchQueuesQueueNameCallsCallControlIdRouteHandler,
  )
  .openapi(getRcsAgentsRoute, getRcsAgentsRouteHandler)
  .openapi(postRcsAgentsRoute, postRcsAgentsRouteHandler)
  .openapi(getRcsAgentsIdRoute, getRcsAgentsIdRouteHandler)
  .openapi(patchRcsAgentsIdRoute, patchRcsAgentsIdRouteHandler)
  .openapi(getRcsAgentsIdCarrierApprovalsRoute, getRcsAgentsIdCarrierApprovalsRouteHandler)
  .openapi(postRcsAgentsIdLaunchRoute, postRcsAgentsIdLaunchRouteHandler)
  .openapi(postRcsAgentsIdSubmitRoute, postRcsAgentsIdSubmitRouteHandler)
  .openapi(getRcsAgentsIdTestDevicesRoute, getRcsAgentsIdTestDevicesRouteHandler)
  .openapi(postRcsAgentsIdTestDevicesRoute, postRcsAgentsIdTestDevicesRouteHandler)
  .openapi(
    deleteRcsAgentsIdTestDevicesTestDeviceIdRoute,
    deleteRcsAgentsIdTestDevicesTestDeviceIdRouteHandler,
  )
  .openapi(getRcsBrandsRoute, getRcsBrandsRouteHandler)
  .openapi(postRcsBrandsRoute, postRcsBrandsRouteHandler)
  .openapi(getRcsBrandsIdRoute, getRcsBrandsIdRouteHandler)
  .openapi(patchRcsBrandsIdRoute, patchRcsBrandsIdRouteHandler)
  .openapi(postRcsBrandsIdSubmitRoute, postRcsBrandsIdSubmitRouteHandler)
  .openapi(getRecordingTranscriptionsRoute, getRecordingTranscriptionsRouteHandler)
  .openapi(
    deleteRecordingTranscriptionsRecordingTranscriptionIdRoute,
    deleteRecordingTranscriptionsRecordingTranscriptionIdRouteHandler,
  )
  .openapi(
    getRecordingTranscriptionsRecordingTranscriptionIdRoute,
    getRecordingTranscriptionsRecordingTranscriptionIdRouteHandler,
  )
  .openapi(getRecordingsRoute, getRecordingsRouteHandler)
  .openapi(postRecordingsActionsDeleteRoute, postRecordingsActionsDeleteRouteHandler)
  .openapi(deleteRecordingsRecordingIdRoute, deleteRecordingsRecordingIdRouteHandler)
  .openapi(getRecordingsRecordingIdRoute, getRecordingsRecordingIdRouteHandler)
  .openapi(getRegionsRoute, getRegionsRouteHandler)
  .openapi(getRegulatoryRequirementsRoute, getRegulatoryRequirementsRouteHandler)
  .openapi(getReportsCdrUsageReportsSyncRoute, getReportsCdrUsageReportsSyncRouteHandler)
  .openapi(getReportsMdrUsageReportsRoute, getReportsMdrUsageReportsRouteHandler)
  .openapi(postReportsMdrUsageReportsRoute, postReportsMdrUsageReportsRouteHandler)
  .openapi(getReportsMdrUsageReportsSyncRoute, getReportsMdrUsageReportsSyncRouteHandler)
  .openapi(deleteReportsMdrUsageReportsIdRoute, deleteReportsMdrUsageReportsIdRouteHandler)
  .openapi(getReportsMdrUsageReportsIdRoute, getReportsMdrUsageReportsIdRouteHandler)
  .openapi(getReportsMdrsRoute, getReportsMdrsRouteHandler)
  .openapi(getReportsWdrsRoute, getReportsWdrsRouteHandler)
  .openapi(getReputationNumbersRoute, getReputationNumbersRouteHandler)
  .openapi(deleteReputationNumbersPhoneNumberRoute, deleteReputationNumbersPhoneNumberRouteHandler)
  .openapi(getReputationNumbersPhoneNumberRoute, getReputationNumbersPhoneNumberRouteHandler)
  .openapi(getRequirementGroupsRoute, getRequirementGroupsRouteHandler)
  .openapi(postRequirementGroupsRoute, postRequirementGroupsRouteHandler)
  .openapi(deleteRequirementGroupsIdRoute, deleteRequirementGroupsIdRouteHandler)
  .openapi(getRequirementGroupsIdRoute, getRequirementGroupsIdRouteHandler)
  .openapi(patchRequirementGroupsIdRoute, patchRequirementGroupsIdRouteHandler)
  .openapi(
    postRequirementGroupsIdSubmitForApprovalRoute,
    postRequirementGroupsIdSubmitForApprovalRouteHandler,
  )
  .openapi(getRequirementTypesRoute, getRequirementTypesRouteHandler)
  .openapi(getRequirementTypesIdRoute, getRequirementTypesIdRouteHandler)
  .openapi(getRequirementsRoute, getRequirementsRouteHandler)
  .openapi(getRequirementsIdRoute, getRequirementsIdRouteHandler)
  .openapi(postRequirementsIdVersionsRoute, postRequirementsIdVersionsRouteHandler)
  .openapi(
    deleteRequirementsIdVersionsPendingRoute,
    deleteRequirementsIdVersionsPendingRouteHandler,
  )
  .openapi(getRoomCompositionsRoute, getRoomCompositionsRouteHandler)
  .openapi(postRoomCompositionsRoute, postRoomCompositionsRouteHandler)
  .openapi(
    deleteRoomCompositionsRoomCompositionIdRoute,
    deleteRoomCompositionsRoomCompositionIdRouteHandler,
  )
  .openapi(
    getRoomCompositionsRoomCompositionIdRoute,
    getRoomCompositionsRoomCompositionIdRouteHandler,
  )
  .openapi(getRoomParticipantsRoute, getRoomParticipantsRouteHandler)
  .openapi(
    getRoomParticipantsRoomParticipantIdRoute,
    getRoomParticipantsRoomParticipantIdRouteHandler,
  )
  .openapi(deleteRoomRecordingsRoute, deleteRoomRecordingsRouteHandler)
  .openapi(getRoomRecordingsRoute, getRoomRecordingsRouteHandler)
  .openapi(
    deleteRoomRecordingsRoomRecordingIdRoute,
    deleteRoomRecordingsRoomRecordingIdRouteHandler,
  )
  .openapi(getRoomRecordingsRoomRecordingIdRoute, getRoomRecordingsRoomRecordingIdRouteHandler)
  .openapi(getRoomSessionsRoute, getRoomSessionsRouteHandler)
  .openapi(getRoomSessionsRoomSessionIdRoute, getRoomSessionsRoomSessionIdRouteHandler)
  .openapi(
    postRoomSessionsRoomSessionIdActionsEndRoute,
    postRoomSessionsRoomSessionIdActionsEndRouteHandler,
  )
  .openapi(
    postRoomSessionsRoomSessionIdActionsKickRoute,
    postRoomSessionsRoomSessionIdActionsKickRouteHandler,
  )
  .openapi(
    postRoomSessionsRoomSessionIdActionsMuteRoute,
    postRoomSessionsRoomSessionIdActionsMuteRouteHandler,
  )
  .openapi(
    postRoomSessionsRoomSessionIdActionsUnmuteRoute,
    postRoomSessionsRoomSessionIdActionsUnmuteRouteHandler,
  )
  .openapi(
    getRoomSessionsRoomSessionIdParticipantsRoute,
    getRoomSessionsRoomSessionIdParticipantsRouteHandler,
  )
  .openapi(getRoomsRoute, getRoomsRouteHandler)
  .openapi(postRoomsRoute, postRoomsRouteHandler)
  .openapi(deleteRoomsRoomIdRoute, deleteRoomsRoomIdRouteHandler)
  .openapi(getRoomsRoomIdRoute, getRoomsRoomIdRouteHandler)
  .openapi(patchRoomsRoomIdRoute, patchRoomsRoomIdRouteHandler)
  .openapi(
    postRoomsRoomIdActionsGenerateJoinClientTokenRoute,
    postRoomsRoomIdActionsGenerateJoinClientTokenRouteHandler,
  )
  .openapi(
    postRoomsRoomIdActionsRefreshClientTokenRoute,
    postRoomsRoomIdActionsRefreshClientTokenRouteHandler,
  )
  .openapi(getRoomsRoomIdSessionsRoute, getRoomsRoomIdSessionsRouteHandler)
  .openapi(getSessionAnalysisMetadataRoute, getSessionAnalysisMetadataRouteHandler)
  .openapi(
    getSessionAnalysisMetadataRecordTypeRoute,
    getSessionAnalysisMetadataRecordTypeRouteHandler,
  )
  .openapi(
    getSessionAnalysisRecordTypeEventIdRoute,
    getSessionAnalysisRecordTypeEventIdRouteHandler,
  )
  .openapi(getSetiBlackBoxTestResultsRoute, getSetiBlackBoxTestResultsRouteHandler)
  .openapi(getShortCodesRoute, getShortCodesRouteHandler)
  .openapi(getShortCodesIdRoute, getShortCodesIdRouteHandler)
  .openapi(patchShortCodesIdRoute, patchShortCodesIdRouteHandler)
  .openapi(getSimCardActionsRoute, getSimCardActionsRouteHandler)
  .openapi(getSimCardActionsIdRoute, getSimCardActionsIdRouteHandler)
  .openapi(getSimCardDataUsageNotificationsRoute, getSimCardDataUsageNotificationsRouteHandler)
  .openapi(postSimCardDataUsageNotificationsRoute, postSimCardDataUsageNotificationsRouteHandler)
  .openapi(
    deleteSimCardDataUsageNotificationsIdRoute,
    deleteSimCardDataUsageNotificationsIdRouteHandler,
  )
  .openapi(getSimCardDataUsageNotificationsIdRoute, getSimCardDataUsageNotificationsIdRouteHandler)
  .openapi(
    patchSimCardDataUsageNotificationsIdRoute,
    patchSimCardDataUsageNotificationsIdRouteHandler,
  )
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
    postSimCardGroupsIdActionsRemoveWirelessBlocklistRoute,
    postSimCardGroupsIdActionsRemoveWirelessBlocklistRouteHandler,
  )
  .openapi(
    postSimCardGroupsIdActionsSetPrivateWirelessGatewayRoute,
    postSimCardGroupsIdActionsSetPrivateWirelessGatewayRouteHandler,
  )
  .openapi(
    postSimCardGroupsIdActionsSetWirelessBlocklistRoute,
    postSimCardGroupsIdActionsSetWirelessBlocklistRouteHandler,
  )
  .openapi(postSimCardOrderPreviewRoute, postSimCardOrderPreviewRouteHandler)
  .openapi(getSimCardOrdersRoute, getSimCardOrdersRouteHandler)
  .openapi(postSimCardOrdersRoute, postSimCardOrdersRouteHandler)
  .openapi(getSimCardOrdersIdRoute, getSimCardOrdersIdRouteHandler)
  .openapi(getSimCardsRoute, getSimCardsRouteHandler)
  .openapi(
    postSimCardsActionsBulkDisableVoiceRoute,
    postSimCardsActionsBulkDisableVoiceRouteHandler,
  )
  .openapi(postSimCardsActionsBulkEnableVoiceRoute, postSimCardsActionsBulkEnableVoiceRouteHandler)
  .openapi(
    postSimCardsActionsBulkSetPublicIpsRoute,
    postSimCardsActionsBulkSetPublicIpsRouteHandler,
  )
  .openapi(
    postSimCardsActionsValidateRegistrationCodesRoute,
    postSimCardsActionsValidateRegistrationCodesRouteHandler,
  )
  .openapi(deleteSimCardsIdRoute, deleteSimCardsIdRouteHandler)
  .openapi(getSimCardsIdRoute, getSimCardsIdRouteHandler)
  .openapi(patchSimCardsIdRoute, patchSimCardsIdRouteHandler)
  .openapi(postSimCardsIdActionsDisableRoute, postSimCardsIdActionsDisableRouteHandler)
  .openapi(postSimCardsIdActionsDisableVoiceRoute, postSimCardsIdActionsDisableVoiceRouteHandler)
  .openapi(postSimCardsIdActionsEnableRoute, postSimCardsIdActionsEnableRouteHandler)
  .openapi(postSimCardsIdActionsEnableVoiceRoute, postSimCardsIdActionsEnableVoiceRouteHandler)
  .openapi(
    postSimCardsIdActionsRemovePublicIpRoute,
    postSimCardsIdActionsRemovePublicIpRouteHandler,
  )
  .openapi(postSimCardsIdActionsSetPublicIpRoute, postSimCardsIdActionsSetPublicIpRouteHandler)
  .openapi(postSimCardsIdActionsSetStandbyRoute, postSimCardsIdActionsSetStandbyRouteHandler)
  .openapi(getSimCardsIdActivationCodeRoute, getSimCardsIdActivationCodeRouteHandler)
  .openapi(getSimCardsIdDeviceDetailsRoute, getSimCardsIdDeviceDetailsRouteHandler)
  .openapi(getSimCardsIdPublicIpRoute, getSimCardsIdPublicIpRouteHandler)
  .openapi(
    getSimCardsIdWirelessConnectivityLogsRoute,
    getSimCardsIdWirelessConnectivityLogsRouteHandler,
  )
  .openapi(getSipRegistrationStatusRoute, getSipRegistrationStatusRouteHandler)
  .openapi(postSiprecConnectorsRoute, postSiprecConnectorsRouteHandler)
  .openapi(
    deleteSiprecConnectorsConnectorNameRoute,
    deleteSiprecConnectorsConnectorNameRouteHandler,
  )
  .openapi(getSiprecConnectorsConnectorNameRoute, getSiprecConnectorsConnectorNameRouteHandler)
  .openapi(putSiprecConnectorsConnectorNameRoute, putSiprecConnectorsConnectorNameRouteHandler)
  .openapi(getSpeechToTextProvidersRoute, getSpeechToTextProvidersRouteHandler)
  .openapi(getSpeechToTextTranscriptionRoute, getSpeechToTextTranscriptionRouteHandler)
  .openapi(getSpendLimitsRoute, getSpendLimitsRouteHandler)
  .openapi(postSpendLimitsRoute, postSpendLimitsRouteHandler)
  .openapi(deleteSpendLimitsProductRoute, deleteSpendLimitsProductRouteHandler)
  .openapi(patchSpendLimitsProductRoute, patchSpendLimitsProductRouteHandler)
  .openapi(
    deleteStorageBucketsBucketNameSslCertificateRoute,
    deleteStorageBucketsBucketNameSslCertificateRouteHandler,
  )
  .openapi(
    getStorageBucketsBucketNameSslCertificateRoute,
    getStorageBucketsBucketNameSslCertificateRouteHandler,
  )
  .openapi(
    putStorageBucketsBucketNameSslCertificateRoute,
    putStorageBucketsBucketNameSslCertificateRouteHandler,
  )
  .openapi(
    getStorageBucketsBucketNameUsageApiRoute,
    getStorageBucketsBucketNameUsageApiRouteHandler,
  )
  .openapi(
    getStorageBucketsBucketNameUsageStorageRoute,
    getStorageBucketsBucketNameUsageStorageRouteHandler,
  )
  .openapi(
    postStorageBucketsBucketNameObjectNamePresignedUrlRoute,
    postStorageBucketsBucketNameObjectNamePresignedUrlRouteHandler,
  )
  .openapi(getStorageCloudfsRoute, getStorageCloudfsRouteHandler)
  .openapi(postStorageCloudfsRoute, postStorageCloudfsRouteHandler)
  .openapi(deleteStorageCloudfsIdRoute, deleteStorageCloudfsIdRouteHandler)
  .openapi(getStorageCloudfsIdRoute, getStorageCloudfsIdRouteHandler)
  .openapi(patchStorageCloudfsIdRoute, patchStorageCloudfsIdRouteHandler)
  .openapi(
    postStorageCloudfsIdActionsRotateMetaTokenRoute,
    postStorageCloudfsIdActionsRotateMetaTokenRouteHandler,
  )
  .openapi(getStorageKvsRoute, getStorageKvsRouteHandler)
  .openapi(postStorageKvsRoute, postStorageKvsRouteHandler)
  .openapi(deleteStorageKvsIdRoute, deleteStorageKvsIdRouteHandler)
  .openapi(getStorageKvsIdRoute, getStorageKvsIdRouteHandler)
  .openapi(getStorageKvsIdKeysRoute, getStorageKvsIdKeysRouteHandler)
  .openapi(deleteStorageKvsIdKeysKeyRoute, deleteStorageKvsIdKeysKeyRouteHandler)
  .openapi(getStorageKvsIdKeysKeyRoute, getStorageKvsIdKeysKeyRouteHandler)
  .openapi(putStorageKvsIdKeysKeyRoute, putStorageKvsIdKeysKeyRouteHandler)
  .openapi(getStorageMigrationSourceCoverageRoute, getStorageMigrationSourceCoverageRouteHandler)
  .openapi(getStorageMigrationSourcesRoute, getStorageMigrationSourcesRouteHandler)
  .openapi(postStorageMigrationSourcesRoute, postStorageMigrationSourcesRouteHandler)
  .openapi(deleteStorageMigrationSourcesIdRoute, deleteStorageMigrationSourcesIdRouteHandler)
  .openapi(getStorageMigrationSourcesIdRoute, getStorageMigrationSourcesIdRouteHandler)
  .openapi(getStorageMigrationsRoute, getStorageMigrationsRouteHandler)
  .openapi(postStorageMigrationsRoute, postStorageMigrationsRouteHandler)
  .openapi(getStorageMigrationsIdRoute, getStorageMigrationsIdRouteHandler)
  .openapi(postStorageMigrationsIdActionsStopRoute, postStorageMigrationsIdActionsStopRouteHandler)
  .openapi(getStorageSqldbsRoute, getStorageSqldbsRouteHandler)
  .openapi(postStorageSqldbsRoute, postStorageSqldbsRouteHandler)
  .openapi(deleteStorageSqldbsIdRoute, deleteStorageSqldbsIdRouteHandler)
  .openapi(getStorageSqldbsIdRoute, getStorageSqldbsIdRouteHandler)
  .openapi(postStorageSqldbsIdActionsQueryRoute, postStorageSqldbsIdActionsQueryRouteHandler)
  .openapi(getSubNumberOrdersRoute, getSubNumberOrdersRouteHandler)
  .openapi(postSubNumberOrdersReportRoute, postSubNumberOrdersReportRouteHandler)
  .openapi(getSubNumberOrdersReportReportIdRoute, getSubNumberOrdersReportReportIdRouteHandler)
  .openapi(
    getSubNumberOrdersReportReportIdDownloadRoute,
    getSubNumberOrdersReportReportIdDownloadRouteHandler,
  )
  .openapi(
    postSubNumberOrdersIdRequirementGroupRoute,
    postSubNumberOrdersIdRequirementGroupRouteHandler,
  )
  .openapi(getSubNumberOrdersSubNumberOrderIdRoute, getSubNumberOrdersSubNumberOrderIdRouteHandler)
  .openapi(
    patchSubNumberOrdersSubNumberOrderIdRoute,
    patchSubNumberOrdersSubNumberOrderIdRouteHandler,
  )
  .openapi(
    patchSubNumberOrdersSubNumberOrderIdCancelRoute,
    patchSubNumberOrdersSubNumberOrderIdCancelRouteHandler,
  )
  .openapi(postSubNumberOrdersReport2Route, postSubNumberOrdersReport2RouteHandler)
  .openapi(getSubNumberOrdersReportReportId2Route, getSubNumberOrdersReportReportId2RouteHandler)
  .openapi(
    getSubNumberOrdersReportReportIdDownload2Route,
    getSubNumberOrdersReportReportIdDownload2RouteHandler,
  )
  .openapi(getTailscaleSubnetRoutersRoute, getTailscaleSubnetRoutersRouteHandler)
  .openapi(postTailscaleSubnetRoutersRoute, postTailscaleSubnetRoutersRouteHandler)
  .openapi(deleteTailscaleSubnetRoutersIdRoute, deleteTailscaleSubnetRoutersIdRouteHandler)
  .openapi(getTailscaleSubnetRoutersIdRoute, getTailscaleSubnetRoutersIdRouteHandler)
  .openapi(patchTailscaleSubnetRoutersIdRoute, patchTailscaleSubnetRoutersIdRouteHandler)
  .openapi(getTelephonyCredentialsRoute, getTelephonyCredentialsRouteHandler)
  .openapi(postTelephonyCredentialsRoute, postTelephonyCredentialsRouteHandler)
  .openapi(deleteTelephonyCredentialsIdRoute, deleteTelephonyCredentialsIdRouteHandler)
  .openapi(getTelephonyCredentialsIdRoute, getTelephonyCredentialsIdRouteHandler)
  .openapi(patchTelephonyCredentialsIdRoute, patchTelephonyCredentialsIdRouteHandler)
  .openapi(postTelephonyCredentialsIdTokenRoute, postTelephonyCredentialsIdTokenRouteHandler)
  .openapi(
    getTelephonyCredentialsIdTokenMaterialRoute,
    getTelephonyCredentialsIdTokenMaterialRouteHandler,
  )
  .openapi(getTermsOfServiceAgreementsRoute, getTermsOfServiceAgreementsRouteHandler)
  .openapi(
    getTermsOfServiceAgreementsAgreementIdRoute,
    getTermsOfServiceAgreementsAgreementIdRouteHandler,
  )
  .openapi(
    postTermsOfServiceBrandedCallingAgreeRoute,
    postTermsOfServiceBrandedCallingAgreeRouteHandler,
  )
  .openapi(getTermsOfServiceInfoRoute, getTermsOfServiceInfoRouteHandler)
  .openapi(
    postTermsOfServiceNumberReputationAgreeRoute,
    postTermsOfServiceNumberReputationAgreeRouteHandler,
  )
  .openapi(getTermsOfServiceStatusRoute, getTermsOfServiceStatusRouteHandler)
  .openapi(getTexmlAccountsAccountSidCallsRoute, getTexmlAccountsAccountSidCallsRouteHandler)
  .openapi(postTexmlAccountsAccountSidCallsRoute, postTexmlAccountsAccountSidCallsRouteHandler)
  .openapi(
    getTexmlAccountsAccountSidCallsCallSidRoute,
    getTexmlAccountsAccountSidCallsCallSidRouteHandler,
  )
  .openapi(
    postTexmlAccountsAccountSidCallsCallSidRoute,
    postTexmlAccountsAccountSidCallsCallSidRouteHandler,
  )
  .openapi(
    getTexmlAccountsAccountSidCallsCallSidRecordingsJsonRoute,
    getTexmlAccountsAccountSidCallsCallSidRecordingsJsonRouteHandler,
  )
  .openapi(
    postTexmlAccountsAccountSidCallsCallSidRecordingsJsonRoute,
    postTexmlAccountsAccountSidCallsCallSidRecordingsJsonRouteHandler,
  )
  .openapi(
    postTexmlAccountsAccountSidCallsCallSidRecordingsRecordingSidJsonRoute,
    postTexmlAccountsAccountSidCallsCallSidRecordingsRecordingSidJsonRouteHandler,
  )
  .openapi(
    postTexmlAccountsAccountSidCallsCallSidSiprecJsonRoute,
    postTexmlAccountsAccountSidCallsCallSidSiprecJsonRouteHandler,
  )
  .openapi(
    postTexmlAccountsAccountSidCallsCallSidSiprecSiprecSidJsonRoute,
    postTexmlAccountsAccountSidCallsCallSidSiprecSiprecSidJsonRouteHandler,
  )
  .openapi(
    postTexmlAccountsAccountSidCallsCallSidStreamsJsonRoute,
    postTexmlAccountsAccountSidCallsCallSidStreamsJsonRouteHandler,
  )
  .openapi(
    postTexmlAccountsAccountSidCallsCallSidStreamsStreamingSidJsonRoute,
    postTexmlAccountsAccountSidCallsCallSidStreamsStreamingSidJsonRouteHandler,
  )
  .openapi(
    getTexmlAccountsAccountSidConferencesRoute,
    getTexmlAccountsAccountSidConferencesRouteHandler,
  )
  .openapi(
    getTexmlAccountsAccountSidConferencesConferenceSidRoute,
    getTexmlAccountsAccountSidConferencesConferenceSidRouteHandler,
  )
  .openapi(
    postTexmlAccountsAccountSidConferencesConferenceSidRoute,
    postTexmlAccountsAccountSidConferencesConferenceSidRouteHandler,
  )
  .openapi(
    getTexmlAccountsAccountSidConferencesConferenceSidParticipantsRoute,
    getTexmlAccountsAccountSidConferencesConferenceSidParticipantsRouteHandler,
  )
  .openapi(
    postTexmlAccountsAccountSidConferencesConferenceSidParticipantsRoute,
    postTexmlAccountsAccountSidConferencesConferenceSidParticipantsRouteHandler,
  )
  .openapi(
    deleteTexmlAccountsAccountSidConferencesConferenceSidParticipantsCallSidOrParticipantLabelRoute,
    deleteTexmlAccountsAccountSidConferencesConferenceSidParticipantsCallSidOrParticipantLabelRouteHandler,
  )
  .openapi(
    getTexmlAccountsAccountSidConferencesConferenceSidParticipantsCallSidOrParticipantLabelRoute,
    getTexmlAccountsAccountSidConferencesConferenceSidParticipantsCallSidOrParticipantLabelRouteHandler,
  )
  .openapi(
    postTexmlAccountsAccountSidConferencesConferenceSidParticipantsCallSidOrParticipantLabelRoute,
    postTexmlAccountsAccountSidConferencesConferenceSidParticipantsCallSidOrParticipantLabelRouteHandler,
  )
  .openapi(
    getTexmlAccountsAccountSidConferencesConferenceSidRecordingsRoute,
    getTexmlAccountsAccountSidConferencesConferenceSidRecordingsRouteHandler,
  )
  .openapi(
    getTexmlAccountsAccountSidConferencesConferenceSidRecordingsJsonRoute,
    getTexmlAccountsAccountSidConferencesConferenceSidRecordingsJsonRouteHandler,
  )
  .openapi(getTexmlAccountsAccountSidQueuesRoute, getTexmlAccountsAccountSidQueuesRouteHandler)
  .openapi(postTexmlAccountsAccountSidQueuesRoute, postTexmlAccountsAccountSidQueuesRouteHandler)
  .openapi(
    deleteTexmlAccountsAccountSidQueuesQueueSidRoute,
    deleteTexmlAccountsAccountSidQueuesQueueSidRouteHandler,
  )
  .openapi(
    getTexmlAccountsAccountSidQueuesQueueSidRoute,
    getTexmlAccountsAccountSidQueuesQueueSidRouteHandler,
  )
  .openapi(
    postTexmlAccountsAccountSidQueuesQueueSidRoute,
    postTexmlAccountsAccountSidQueuesQueueSidRouteHandler,
  )
  .openapi(
    getTexmlAccountsAccountSidRecordingsJsonRoute,
    getTexmlAccountsAccountSidRecordingsJsonRouteHandler,
  )
  .openapi(
    deleteTexmlAccountsAccountSidRecordingsRecordingSidJsonRoute,
    deleteTexmlAccountsAccountSidRecordingsRecordingSidJsonRouteHandler,
  )
  .openapi(
    getTexmlAccountsAccountSidRecordingsRecordingSidJsonRoute,
    getTexmlAccountsAccountSidRecordingsRecordingSidJsonRouteHandler,
  )
  .openapi(
    getTexmlAccountsAccountSidTranscriptionsJsonRoute,
    getTexmlAccountsAccountSidTranscriptionsJsonRouteHandler,
  )
  .openapi(
    deleteTexmlAccountsAccountSidTranscriptionsRecordingTranscriptionSidJsonRoute,
    deleteTexmlAccountsAccountSidTranscriptionsRecordingTranscriptionSidJsonRouteHandler,
  )
  .openapi(
    getTexmlAccountsAccountSidTranscriptionsRecordingTranscriptionSidJsonRoute,
    getTexmlAccountsAccountSidTranscriptionsRecordingTranscriptionSidJsonRouteHandler,
  )
  .openapi(postTexmlAiCallsConnectionIdRoute, postTexmlAiCallsConnectionIdRouteHandler)
  .openapi(postTexmlCallsConnectionIdRoute, postTexmlCallsConnectionIdRouteHandler)
  .openapi(postTexmlSecretsRoute, postTexmlSecretsRouteHandler)
  .openapi(getTexmlApplicationsRoute, getTexmlApplicationsRouteHandler)
  .openapi(postTexmlApplicationsRoute, postTexmlApplicationsRouteHandler)
  .openapi(deleteTexmlApplicationsIdRoute, deleteTexmlApplicationsIdRouteHandler)
  .openapi(getTexmlApplicationsIdRoute, getTexmlApplicationsIdRouteHandler)
  .openapi(patchTexmlApplicationsIdRoute, patchTexmlApplicationsIdRouteHandler)
  .openapi(getTextToSpeechSpeechRoute, getTextToSpeechSpeechRouteHandler)
  .openapi(postTextToSpeechSpeechRoute, postTextToSpeechSpeechRouteHandler)
  .openapi(getTextToSpeechVoicesRoute, getTextToSpeechVoicesRouteHandler)
  .openapi(getTrafficPolicyProfilesRoute, getTrafficPolicyProfilesRouteHandler)
  .openapi(postTrafficPolicyProfilesRoute, postTrafficPolicyProfilesRouteHandler)
  .openapi(getTrafficPolicyProfilesServicesRoute, getTrafficPolicyProfilesServicesRouteHandler)
  .openapi(deleteTrafficPolicyProfilesIdRoute, deleteTrafficPolicyProfilesIdRouteHandler)
  .openapi(getTrafficPolicyProfilesIdRoute, getTrafficPolicyProfilesIdRouteHandler)
  .openapi(patchTrafficPolicyProfilesIdRoute, patchTrafficPolicyProfilesIdRouteHandler)
  .openapi(getTrafficPolicyProfiles2Route, getTrafficPolicyProfiles2RouteHandler)
  .openapi(postTrafficPolicyProfiles2Route, postTrafficPolicyProfiles2RouteHandler)
  .openapi(getTrafficPolicyProfilesServices2Route, getTrafficPolicyProfilesServices2RouteHandler)
  .openapi(deleteTrafficPolicyProfilesId2Route, deleteTrafficPolicyProfilesId2RouteHandler)
  .openapi(getTrafficPolicyProfilesId2Route, getTrafficPolicyProfilesId2RouteHandler)
  .openapi(patchTrafficPolicyProfilesId2Route, patchTrafficPolicyProfilesId2RouteHandler)
  .openapi(getTunnelsRoute, getTunnelsRouteHandler)
  .openapi(postTunnelsRoute, postTunnelsRouteHandler)
  .openapi(deleteTunnelsIdRoute, deleteTunnelsIdRouteHandler)
  .openapi(getTunnelsIdRoute, getTunnelsIdRouteHandler)
  .openapi(postTunnelsIdActionsRotateTokenRoute, postTunnelsIdActionsRotateTokenRouteHandler)
  .openapi(getUacConnectionsRoute, getUacConnectionsRouteHandler)
  .openapi(postUacConnectionsRoute, postUacConnectionsRouteHandler)
  .openapi(deleteUacConnectionsIdRoute, deleteUacConnectionsIdRouteHandler)
  .openapi(getUacConnectionsIdRoute, getUacConnectionsIdRouteHandler)
  .openapi(patchUacConnectionsIdRoute, patchUacConnectionsIdRouteHandler)
  .openapi(
    postUacConnectionsIdActionsCheckRegistrationStatusRoute,
    postUacConnectionsIdActionsCheckRegistrationStatusRouteHandler,
  )
  .openapi(getUsageReportsRoute, getUsageReportsRouteHandler)
  .openapi(getUsageReportsOptionsRoute, getUsageReportsOptionsRouteHandler)
  .openapi(getUserAddressesRoute, getUserAddressesRouteHandler)
  .openapi(postUserAddressesRoute, postUserAddressesRouteHandler)
  .openapi(getUserAddressesIdRoute, getUserAddressesIdRouteHandler)
  .openapi(getUserAddresses2Route, getUserAddresses2RouteHandler)
  .openapi(postUserAddresses2Route, postUserAddresses2RouteHandler)
  .openapi(getUserAddressesId2Route, getUserAddressesId2RouteHandler)
  .openapi(getUserProfileRoute, getUserProfileRouteHandler)
  .openapi(patchUserProfileRoute, patchUserProfileRouteHandler)
  .openapi(getUserTagsRoute, getUserTagsRouteHandler)
  .openapi(getV2WhatsappBusinessAccountsRoute, getV2WhatsappBusinessAccountsRouteHandler)
  .openapi(deleteV2WhatsappBusinessAccountsIdRoute, deleteV2WhatsappBusinessAccountsIdRouteHandler)
  .openapi(getV2WhatsappBusinessAccountsIdRoute, getV2WhatsappBusinessAccountsIdRouteHandler)
  .openapi(
    getV2WhatsappBusinessAccountsIdPhoneNumbersRoute,
    getV2WhatsappBusinessAccountsIdPhoneNumbersRouteHandler,
  )
  .openapi(
    postV2WhatsappBusinessAccountsIdPhoneNumbersRoute,
    postV2WhatsappBusinessAccountsIdPhoneNumbersRouteHandler,
  )
  .openapi(
    getV2WhatsappBusinessAccountsIdSettingsRoute,
    getV2WhatsappBusinessAccountsIdSettingsRouteHandler,
  )
  .openapi(
    patchV2WhatsappBusinessAccountsIdSettingsRoute,
    patchV2WhatsappBusinessAccountsIdSettingsRouteHandler,
  )
  .openapi(getV2WhatsappMessageTemplatesRoute, getV2WhatsappMessageTemplatesRouteHandler)
  .openapi(postV2WhatsappMessageTemplatesRoute, postV2WhatsappMessageTemplatesRouteHandler)
  .openapi(getV2WhatsappPhoneNumbersRoute, getV2WhatsappPhoneNumbersRouteHandler)
  .openapi(
    deleteV2WhatsappPhoneNumbersPhoneNumberRoute,
    deleteV2WhatsappPhoneNumbersPhoneNumberRouteHandler,
  )
  .openapi(
    getV2WhatsappPhoneNumbersPhoneNumberRoute,
    getV2WhatsappPhoneNumbersPhoneNumberRouteHandler,
  )
  .openapi(
    getV2WhatsappPhoneNumbersPhoneNumberCallingSettingsRoute,
    getV2WhatsappPhoneNumbersPhoneNumberCallingSettingsRouteHandler,
  )
  .openapi(
    patchV2WhatsappPhoneNumbersPhoneNumberCallingSettingsRoute,
    patchV2WhatsappPhoneNumbersPhoneNumberCallingSettingsRouteHandler,
  )
  .openapi(
    getV2WhatsappPhoneNumbersPhoneNumberConversationWindowRoute,
    getV2WhatsappPhoneNumbersPhoneNumberConversationWindowRouteHandler,
  )
  .openapi(
    getV2WhatsappPhoneNumbersPhoneNumberConversationalComponentsRoute,
    getV2WhatsappPhoneNumbersPhoneNumberConversationalComponentsRouteHandler,
  )
  .openapi(
    patchV2WhatsappPhoneNumbersPhoneNumberConversationalComponentsRoute,
    patchV2WhatsappPhoneNumbersPhoneNumberConversationalComponentsRouteHandler,
  )
  .openapi(
    getV2WhatsappPhoneNumbersPhoneNumberProfileRoute,
    getV2WhatsappPhoneNumbersPhoneNumberProfileRouteHandler,
  )
  .openapi(
    patchV2WhatsappPhoneNumbersPhoneNumberProfileRoute,
    patchV2WhatsappPhoneNumbersPhoneNumberProfileRouteHandler,
  )
  .openapi(
    deleteV2WhatsappPhoneNumbersPhoneNumberProfilePhotoRoute,
    deleteV2WhatsappPhoneNumbersPhoneNumberProfilePhotoRouteHandler,
  )
  .openapi(
    getV2WhatsappPhoneNumbersPhoneNumberProfilePhotoRoute,
    getV2WhatsappPhoneNumbersPhoneNumberProfilePhotoRouteHandler,
  )
  .openapi(
    postV2WhatsappPhoneNumbersPhoneNumberProfilePhotoRoute,
    postV2WhatsappPhoneNumbersPhoneNumberProfilePhotoRouteHandler,
  )
  .openapi(
    postV2WhatsappPhoneNumbersPhoneNumberResendVerificationRoute,
    postV2WhatsappPhoneNumbersPhoneNumberResendVerificationRouteHandler,
  )
  .openapi(
    postV2WhatsappPhoneNumbersPhoneNumberVerifyRoute,
    postV2WhatsappPhoneNumbersPhoneNumberVerifyRouteHandler,
  )
  .openapi(getV2WhatsappUserDataRoute, getV2WhatsappUserDataRouteHandler)
  .openapi(patchV2WhatsappUserDataRoute, patchV2WhatsappUserDataRouteHandler)
  .openapi(deleteV2WhatsappMessageTemplatesIdRoute, deleteV2WhatsappMessageTemplatesIdRouteHandler)
  .openapi(getV2WhatsappMessageTemplatesIdRoute, getV2WhatsappMessageTemplatesIdRouteHandler)
  .openapi(patchV2WhatsappMessageTemplatesIdRoute, patchV2WhatsappMessageTemplatesIdRouteHandler)
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
  .openapi(postVerificationsSmsRoute, postVerificationsSmsRouteHandler)
  .openapi(postVerificationsWhatsappRoute, postVerificationsWhatsappRouteHandler)
  .openapi(getVerificationsVerificationIdRoute, getVerificationsVerificationIdRouteHandler)
  .openapi(
    postVerificationsVerificationIdActionsVerifyRoute,
    postVerificationsVerificationIdActionsVerifyRouteHandler,
  )
  .openapi(getVerifiedNumbersRoute, getVerifiedNumbersRouteHandler)
  .openapi(postVerifiedNumbersRoute, postVerifiedNumbersRouteHandler)
  .openapi(deleteVerifiedNumbersPhoneNumberRoute, deleteVerifiedNumbersPhoneNumberRouteHandler)
  .openapi(getVerifiedNumbersPhoneNumberRoute, getVerifiedNumbersPhoneNumberRouteHandler)
  .openapi(
    postVerifiedNumbersPhoneNumberActionsVerifyRoute,
    postVerifiedNumbersPhoneNumberActionsVerifyRouteHandler,
  )
  .openapi(getVerifyProfilesRoute, getVerifyProfilesRouteHandler)
  .openapi(postVerifyProfilesRoute, postVerifyProfilesRouteHandler)
  .openapi(getVerifyProfilesTemplatesRoute, getVerifyProfilesTemplatesRouteHandler)
  .openapi(postVerifyProfilesTemplatesRoute, postVerifyProfilesTemplatesRouteHandler)
  .openapi(
    patchVerifyProfilesTemplatesTemplateIdRoute,
    patchVerifyProfilesTemplatesTemplateIdRouteHandler,
  )
  .openapi(
    deleteVerifyProfilesVerifyProfileIdRoute,
    deleteVerifyProfilesVerifyProfileIdRouteHandler,
  )
  .openapi(getVerifyProfilesVerifyProfileIdRoute, getVerifyProfilesVerifyProfileIdRouteHandler)
  .openapi(patchVerifyProfilesVerifyProfileIdRoute, patchVerifyProfilesVerifyProfileIdRouteHandler)
  .openapi(getVirtualCrossConnectsRoute, getVirtualCrossConnectsRouteHandler)
  .openapi(postVirtualCrossConnectsRoute, postVirtualCrossConnectsRouteHandler)
  .openapi(getVirtualCrossConnectsCoverageRoute, getVirtualCrossConnectsCoverageRouteHandler)
  .openapi(deleteVirtualCrossConnectsIdRoute, deleteVirtualCrossConnectsIdRouteHandler)
  .openapi(getVirtualCrossConnectsIdRoute, getVirtualCrossConnectsIdRouteHandler)
  .openapi(patchVirtualCrossConnectsIdRoute, patchVirtualCrossConnectsIdRouteHandler)
  .openapi(getVirtualCrossConnectsCoverage2Route, getVirtualCrossConnectsCoverage2RouteHandler)
  .openapi(getVoiceClonesRoute, getVoiceClonesRouteHandler)
  .openapi(postVoiceClonesRoute, postVoiceClonesRouteHandler)
  .openapi(postVoiceClonesFromUploadRoute, postVoiceClonesFromUploadRouteHandler)
  .openapi(deleteVoiceClonesIdRoute, deleteVoiceClonesIdRouteHandler)
  .openapi(patchVoiceClonesIdRoute, patchVoiceClonesIdRouteHandler)
  .openapi(getVoiceClonesIdSampleRoute, getVoiceClonesIdSampleRouteHandler)
  .openapi(getVoiceDesignsRoute, getVoiceDesignsRouteHandler)
  .openapi(postVoiceDesignsRoute, postVoiceDesignsRouteHandler)
  .openapi(deleteVoiceDesignsIdRoute, deleteVoiceDesignsIdRouteHandler)
  .openapi(getVoiceDesignsIdRoute, getVoiceDesignsIdRouteHandler)
  .openapi(patchVoiceDesignsIdRoute, patchVoiceDesignsIdRouteHandler)
  .openapi(getVoiceDesignsIdSampleRoute, getVoiceDesignsIdSampleRouteHandler)
  .openapi(
    deleteVoiceDesignsIdVersionsVersionRoute,
    deleteVoiceDesignsIdVersionsVersionRouteHandler,
  )
  .openapi(getVoiceSdkCallReportsRoute, getVoiceSdkCallReportsRouteHandler)
  .openapi(getVoiceSdkCallReportsCallIdRoute, getVoiceSdkCallReportsCallIdRouteHandler)
  .openapi(postWebSearchRoute, postWebSearchRouteHandler)
  .openapi(postWebSearchContentsRoute, postWebSearchContentsRouteHandler)
  .openapi(postWebSearchResearchRoute, postWebSearchResearchRouteHandler)
  .openapi(getWebSearchResearchTaskIdRoute, getWebSearchResearchTaskIdRouteHandler)
  .openapi(getWebhookDeliveriesRoute, getWebhookDeliveriesRouteHandler)
  .openapi(getWebhookDeliveriesIdRoute, getWebhookDeliveriesIdRouteHandler)
  .openapi(getWhatsappBusinessAccountsRoute, getWhatsappBusinessAccountsRouteHandler)
  .openapi(deleteWhatsappBusinessAccountsIdRoute, deleteWhatsappBusinessAccountsIdRouteHandler)
  .openapi(getWhatsappBusinessAccountsIdRoute, getWhatsappBusinessAccountsIdRouteHandler)
  .openapi(
    getWhatsappBusinessAccountsIdPhoneNumbersRoute,
    getWhatsappBusinessAccountsIdPhoneNumbersRouteHandler,
  )
  .openapi(
    postWhatsappBusinessAccountsIdPhoneNumbersRoute,
    postWhatsappBusinessAccountsIdPhoneNumbersRouteHandler,
  )
  .openapi(
    getWhatsappBusinessAccountsIdSettingsRoute,
    getWhatsappBusinessAccountsIdSettingsRouteHandler,
  )
  .openapi(
    patchWhatsappBusinessAccountsIdSettingsRoute,
    patchWhatsappBusinessAccountsIdSettingsRouteHandler,
  )
  .openapi(getWhatsappHostedSignupsRoute, getWhatsappHostedSignupsRouteHandler)
  .openapi(postWhatsappHostedSignupsRoute, postWhatsappHostedSignupsRouteHandler)
  .openapi(getWhatsappHostedSignupsIdRoute, getWhatsappHostedSignupsIdRouteHandler)
  .openapi(getWhatsappMessageTemplatesRoute, getWhatsappMessageTemplatesRouteHandler)
  .openapi(postWhatsappMessageTemplatesRoute, postWhatsappMessageTemplatesRouteHandler)
  .openapi(deleteWhatsappMessageTemplatesIdRoute, deleteWhatsappMessageTemplatesIdRouteHandler)
  .openapi(getWhatsappMessageTemplatesIdRoute, getWhatsappMessageTemplatesIdRouteHandler)
  .openapi(patchWhatsappMessageTemplatesIdRoute, patchWhatsappMessageTemplatesIdRouteHandler)
  .openapi(getWhatsappPhoneNumbersRoute, getWhatsappPhoneNumbersRouteHandler)
  .openapi(
    getWhatsappPhoneNumbersIdCallingRoutingRoute,
    getWhatsappPhoneNumbersIdCallingRoutingRouteHandler,
  )
  .openapi(
    patchWhatsappPhoneNumbersIdCallingRoutingRoute,
    patchWhatsappPhoneNumbersIdCallingRoutingRouteHandler,
  )
  .openapi(
    deleteWhatsappPhoneNumbersPhoneNumberRoute,
    deleteWhatsappPhoneNumbersPhoneNumberRouteHandler,
  )
  .openapi(getWhatsappPhoneNumbersPhoneNumberRoute, getWhatsappPhoneNumbersPhoneNumberRouteHandler)
  .openapi(
    getWhatsappPhoneNumbersPhoneNumberCallingSettingsRoute,
    getWhatsappPhoneNumbersPhoneNumberCallingSettingsRouteHandler,
  )
  .openapi(
    patchWhatsappPhoneNumbersPhoneNumberCallingSettingsRoute,
    patchWhatsappPhoneNumbersPhoneNumberCallingSettingsRouteHandler,
  )
  .openapi(
    getWhatsappPhoneNumbersPhoneNumberConversationWindowRoute,
    getWhatsappPhoneNumbersPhoneNumberConversationWindowRouteHandler,
  )
  .openapi(
    getWhatsappPhoneNumbersPhoneNumberConversationalComponentsRoute,
    getWhatsappPhoneNumbersPhoneNumberConversationalComponentsRouteHandler,
  )
  .openapi(
    patchWhatsappPhoneNumbersPhoneNumberConversationalComponentsRoute,
    patchWhatsappPhoneNumbersPhoneNumberConversationalComponentsRouteHandler,
  )
  .openapi(
    getWhatsappPhoneNumbersPhoneNumberProfileRoute,
    getWhatsappPhoneNumbersPhoneNumberProfileRouteHandler,
  )
  .openapi(
    patchWhatsappPhoneNumbersPhoneNumberProfileRoute,
    patchWhatsappPhoneNumbersPhoneNumberProfileRouteHandler,
  )
  .openapi(
    deleteWhatsappPhoneNumbersPhoneNumberProfilePhotoRoute,
    deleteWhatsappPhoneNumbersPhoneNumberProfilePhotoRouteHandler,
  )
  .openapi(
    getWhatsappPhoneNumbersPhoneNumberProfilePhotoRoute,
    getWhatsappPhoneNumbersPhoneNumberProfilePhotoRouteHandler,
  )
  .openapi(
    postWhatsappPhoneNumbersPhoneNumberProfilePhotoRoute,
    postWhatsappPhoneNumbersPhoneNumberProfilePhotoRouteHandler,
  )
  .openapi(
    postWhatsappPhoneNumbersPhoneNumberResendVerificationRoute,
    postWhatsappPhoneNumbersPhoneNumberResendVerificationRouteHandler,
  )
  .openapi(
    postWhatsappPhoneNumbersPhoneNumberVerifyRoute,
    postWhatsappPhoneNumbersPhoneNumberVerifyRouteHandler,
  )
  .openapi(getWhatsappSignupRoute, getWhatsappSignupRouteHandler)
  .openapi(getWhatsappSignupIdStatusRoute, getWhatsappSignupIdStatusRouteHandler)
  .openapi(getWireguardInterfacesRoute, getWireguardInterfacesRouteHandler)
  .openapi(postWireguardInterfacesRoute, postWireguardInterfacesRouteHandler)
  .openapi(deleteWireguardInterfacesIdRoute, deleteWireguardInterfacesIdRouteHandler)
  .openapi(getWireguardInterfacesIdRoute, getWireguardInterfacesIdRouteHandler)
  .openapi(getWireguardPeersRoute, getWireguardPeersRouteHandler)
  .openapi(postWireguardPeersRoute, postWireguardPeersRouteHandler)
  .openapi(deleteWireguardPeersIdRoute, deleteWireguardPeersIdRouteHandler)
  .openapi(getWireguardPeersIdRoute, getWireguardPeersIdRouteHandler)
  .openapi(patchWireguardPeersIdRoute, patchWireguardPeersIdRouteHandler)
  .openapi(getWireguardPeersIdConfigRoute, getWireguardPeersIdConfigRouteHandler)
  .openapi(getWirelessDetailRecordsReportsRoute, getWirelessDetailRecordsReportsRouteHandler)
  .openapi(postWirelessDetailRecordsReportsRoute, postWirelessDetailRecordsReportsRouteHandler)
  .openapi(
    deleteWirelessDetailRecordsReportsIdRoute,
    deleteWirelessDetailRecordsReportsIdRouteHandler,
  )
  .openapi(getWirelessDetailRecordsReportsIdRoute, getWirelessDetailRecordsReportsIdRouteHandler)
  .openapi(getWirelessDetailRecordsReports2Route, getWirelessDetailRecordsReports2RouteHandler)
  .openapi(postWirelessDetailRecordsReports2Route, postWirelessDetailRecordsReports2RouteHandler)
  .openapi(
    deleteWirelessDetailRecordsReportsId2Route,
    deleteWirelessDetailRecordsReportsId2RouteHandler,
  )
  .openapi(getWirelessDetailRecordsReportsId2Route, getWirelessDetailRecordsReportsId2RouteHandler)
  .openapi(getWirelessRegionsRoute, getWirelessRegionsRouteHandler)
  .openapi(getWirelessBlocklistValuesRoute, getWirelessBlocklistValuesRouteHandler)
  .openapi(getWirelessBlocklistsRoute, getWirelessBlocklistsRouteHandler)
  .openapi(postWirelessBlocklistsRoute, postWirelessBlocklistsRouteHandler)
  .openapi(deleteWirelessBlocklistsIdRoute, deleteWirelessBlocklistsIdRouteHandler)
  .openapi(getWirelessBlocklistsIdRoute, getWirelessBlocklistsIdRouteHandler)
  .openapi(patchWirelessBlocklistsIdRoute, patchWirelessBlocklistsIdRouteHandler)
  .openapi(postX402CreditAccountRoute, postX402CreditAccountRouteHandler)
  .openapi(getX402CreditAccountPaymentsRoute, getX402CreditAccountPaymentsRouteHandler)
  .openapi(getX402CreditAccountPaymentsIdRoute, getX402CreditAccountPaymentsIdRouteHandler)
  .openapi(postX402CreditAccountQuoteRoute, postX402CreditAccountQuoteRouteHandler)

export default app
