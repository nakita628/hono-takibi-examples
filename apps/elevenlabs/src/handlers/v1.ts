import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1AssetsAssetIdRoute,
  deleteV1AudioIsolationHistoryHistoryItemIdRoute,
  deleteV1ConvaiAgentsAgentIdBranchesBranchIdProceduresProcedureIdDraftRoute,
  deleteV1ConvaiAgentsAgentIdBranchesBranchIdProceduresProcedureIdRoute,
  deleteV1ConvaiAgentsAgentIdDraftsRoute,
  deleteV1ConvaiAgentsAgentIdHoldAudioRoute,
  deleteV1ConvaiAgentsAgentIdRoute,
  deleteV1ConvaiAgentTestingFoldersFolderIdRoute,
  deleteV1ConvaiAgentTestingTestIdRoute,
  deleteV1ConvaiAnalysisItemsAnalysisItemIdRoute,
  deleteV1ConvaiBatchCallingBatchIdRoute,
  deleteV1ConvaiConversationsConversationIdFilesFileIdRoute,
  deleteV1ConvaiConversationsConversationIdRoute,
  deleteV1ConvaiConversationsConversationIdTagsTagIdRoute,
  deleteV1ConvaiEnvironmentsEnvironmentRoute,
  deleteV1ConvaiEnvironmentVariablesEnvVarIdRoute,
  deleteV1ConvaiKnowledgeBaseDocumentationIdRagIndexRagIndexIdRoute,
  deleteV1ConvaiKnowledgeBaseDocumentationIdRoute,
  deleteV1ConvaiMcpServersMcpServerIdRoute,
  deleteV1ConvaiMcpServersMcpServerIdToolApprovalsToolNameRoute,
  deleteV1ConvaiMcpServersMcpServerIdToolConfigsToolNameRoute,
  deleteV1ConvaiOutboundCampaignsCampaignsCampaignIdLeadsLeadIdRoute,
  deleteV1ConvaiPhoneNumbersPhoneNumberIdRoute,
  deleteV1ConvaiRealtimeConversationGroupsConversationGroupIdRoute,
  deleteV1ConvaiRealtimeConversationsConversationIdConversationGroupRoute,
  deleteV1ConvaiSecretsSecretIdRoute,
  deleteV1ConvaiTagsTagIdRoute,
  deleteV1ConvaiToolsToolIdRoute,
  deleteV1ConvaiTriageTicketsAgentqaTicketIdRoute,
  deleteV1ConvaiWhatsappAccountsPhoneNumberIdRoute,
  deleteV1DubbingDubbingIdRoute,
  deleteV1DubbingProjectProjectIdLanguageLanguageIdRoute,
  deleteV1DubbingProjectProjectIdRoute,
  deleteV1DubbingProjectProjectIdTranscriptSegmentSegmentIdRoute,
  deleteV1DubbingResourceDubbingIdSegmentSegmentIdRoute,
  deleteV1HistoryHistoryItemIdRoute,
  deleteV1MusicFinetunesFinetuneIdRoute,
  deleteV1ProductionsOrdersOrderIdItemsItemIdRoute,
  deleteV1ReceptionAssetsAssetIdRoute,
  deleteV1ReceptionCustomerFacingAgentsAgentIdProceduresProcedureIdRoute,
  deleteV1ReceptionCustomerFacingAgentsAgentIdRulesRuleIdRoute,
  deleteV1ReceptionCustomerFacingAgentsAgentIdTransferRulesRuleIdRoute,
  deleteV1ReceptionHolidaysHolidayIdRoute,
  deleteV1ReceptionKnowledgeSourcesSourceIdRoute,
  deleteV1ReceptionLocationsLocationIdRoute,
  deleteV1ReceptionPhoneNumbersAssignmentsPhoneAssignmentIdRoute,
  deleteV1ReceptionProductsProductIdRoute,
  deleteV1ReceptionResellerWorkspacesWorkspaceIdSubscriptionRoute,
  deleteV1ReceptionServicesServiceIdRoute,
  deleteV1ReceptionStaffStaffIdRoute,
  deleteV1ReceptionTeamInvitesRoute,
  deleteV1ReceptionTeamMembersUserIdRoute,
  deleteV1ServiceAccountsServiceAccountUserIdApiKeysApiKeyIdRoute,
  deleteV1SpeechEngineSpeechEngineIdRoute,
  deleteV1SpeechToTextTranscriptsTranscriptionIdRoute,
  deleteV1StudioProjectsProjectIdChaptersChapterIdRoute,
  deleteV1StudioProjectsProjectIdRoute,
  deleteV1VoicesCollectionsCollectionIdRoute,
  deleteV1VoicesCollectionsCollectionIdVoiceVoiceIdRoute,
  deleteV1VoicesPvcVoiceIdSamplesSampleIdRoute,
  deleteV1VoicesVoiceIdRoute,
  deleteV1VoicesVoiceIdSamplesSampleIdRoute,
  deleteV1WorkspaceAuthConnectionsAuthConnectionIdRoute,
  deleteV1WorkspaceInvitesRoute,
  deleteV1WorkspaceWebhooksWebhookIdRoute,
  getV1AssetsAssetIdRoute,
  getV1AssetsRoute,
  getV1AudioEffectsCatalogRoute,
  getV1AudioIsolationHistoryRoute,
  getV1AudioNativeProjectIdSettingsRoute,
  getV1ConvaiAgentAgentIdKnowledgeBaseSizeRoute,
  getV1ConvaiAgentsAgentIdBranchesBranchIdProceduresProcedureIdDraftRoute,
  getV1ConvaiAgentsAgentIdBranchesBranchIdProceduresProcedureIdRoute,
  getV1ConvaiAgentsAgentIdBranchesBranchIdProceduresRoute,
  getV1ConvaiAgentsAgentIdBranchesBranchIdRebasePreviewRoute,
  getV1ConvaiAgentsAgentIdBranchesBranchIdRoute,
  getV1ConvaiAgentsAgentIdBranchesRoute,
  getV1ConvaiAgentsAgentIdBranchesSourceBranchIdMergePreviewRoute,
  getV1ConvaiAgentsAgentIdDeploymentsRoute,
  getV1ConvaiAgentsAgentIdLinkRoute,
  getV1ConvaiAgentsAgentIdMergeProposalsMergeProposalIdRoute,
  getV1ConvaiAgentsAgentIdMergeProposalsRoute,
  getV1ConvaiAgentsAgentIdRoute,
  getV1ConvaiAgentsAgentIdSubagentDependentsRoute,
  getV1ConvaiAgentsAgentIdTopicsRoute,
  getV1ConvaiAgentsAgentIdTriageTicketsAssignableUsersRoute,
  getV1ConvaiAgentsAgentIdTriageTicketsRoute,
  getV1ConvaiAgentsAgentIdVersionsVersionIdRoute,
  getV1ConvaiAgentsAgentIdWidgetRoute,
  getV1ConvaiAgentsRoute,
  getV1ConvaiAgentsSummariesRoute,
  getV1ConvaiAgentTestingFoldersFolderIdRoute,
  getV1ConvaiAgentTestingRoute,
  getV1ConvaiAgentTestingTestIdRoute,
  getV1ConvaiAnalysisItemsAnalysisItemIdDependentAgentsRoute,
  getV1ConvaiAnalysisItemsAnalysisItemIdRoute,
  getV1ConvaiAnalysisItemsAnalysisItemIdVersionsRoute,
  getV1ConvaiAnalysisItemsRoute,
  getV1ConvaiAnalyticsLiveCountRoute,
  getV1ConvaiBatchCallingBatchIdExportRoute,
  getV1ConvaiBatchCallingBatchIdRoute,
  getV1ConvaiBatchCallingWorkspaceRoute,
  getV1ConvaiConversationGetSignedUrl2Route,
  getV1ConvaiConversationGetSignedUrlRoute,
  getV1ConvaiConversationsConversationIdAudioRoute,
  getV1ConvaiConversationsConversationIdFilesFileIdRoute,
  getV1ConvaiConversationsConversationIdRoute,
  getV1ConvaiConversationsConversationIdSipMessagesRoute,
  getV1ConvaiConversationsConversationIdSummaryRoute,
  getV1ConvaiConversationsConversationIdTurnsTurnIdEventsRoute,
  getV1ConvaiConversationsConversationIdTurnsTurnIdRoute,
  getV1ConvaiConversationsMessagesSmartSearchRoute,
  getV1ConvaiConversationsMessagesTextSearchRoute,
  getV1ConvaiConversationsResolveRoute,
  getV1ConvaiConversationsRoute,
  getV1ConvaiConversationTokenRoute,
  getV1ConvaiEnvironmentsRoute,
  getV1ConvaiEnvironmentVariablesEnvVarIdRoute,
  getV1ConvaiEnvironmentVariablesRoute,
  getV1ConvaiKnowledgeBaseCrawlCrawlJobIdRoute,
  getV1ConvaiKnowledgeBaseCrawlRoute,
  getV1ConvaiKnowledgeBaseDocumentationIdChunkChunkIdRoute,
  getV1ConvaiKnowledgeBaseDocumentationIdChunkingOverrideRoute,
  getV1ConvaiKnowledgeBaseDocumentationIdChunksRoute,
  getV1ConvaiKnowledgeBaseDocumentationIdContentRoute,
  getV1ConvaiKnowledgeBaseDocumentationIdDependentAgentsRoute,
  getV1ConvaiKnowledgeBaseDocumentationIdRagIndexRoute,
  getV1ConvaiKnowledgeBaseDocumentationIdRoute,
  getV1ConvaiKnowledgeBaseDocumentationIdSourceFileUrlRoute,
  getV1ConvaiKnowledgeBaseRagIndexRoute,
  getV1ConvaiKnowledgeBaseRoute,
  getV1ConvaiKnowledgeBaseSearchRoute,
  getV1ConvaiKnowledgeBaseSummariesRoute,
  getV1ConvaiLlmListRoute,
  getV1ConvaiMcpServersMcpServerIdRoute,
  getV1ConvaiMcpServersMcpServerIdToolConfigsToolNameRoute,
  getV1ConvaiMcpServersMcpServerIdToolsRoute,
  getV1ConvaiMcpServersRoute,
  getV1ConvaiOutboundCampaignsAttentionRoute,
  getV1ConvaiOutboundCampaignsCampaignsCampaignIdCallsRoute,
  getV1ConvaiOutboundCampaignsCampaignsCampaignIdExportRoute,
  getV1ConvaiOutboundCampaignsCampaignsCampaignIdFollowUpRequestsRoute,
  getV1ConvaiOutboundCampaignsCampaignsCampaignIdLeadsLeadIdRoute,
  getV1ConvaiOutboundCampaignsCampaignsCampaignIdLeadsRoute,
  getV1ConvaiOutboundCampaignsCampaignsCampaignIdProgressRoute,
  getV1ConvaiOutboundCampaignsCampaignsCampaignIdRoute,
  getV1ConvaiOutboundCampaignsCampaignsRoute,
  getV1ConvaiOutboundCampaignsConfigRoute,
  getV1ConvaiPhoneNumbersPhoneNumberIdRoute,
  getV1ConvaiPhoneNumbersPhoneNumberIdSipMessagesRoute,
  getV1ConvaiPhoneNumbersRoute,
  getV1ConvaiRealtimeConversationGroupsConversationGroupIdRoute,
  getV1ConvaiRealtimeConversationGroupsRoute,
  getV1ConvaiSecretsRoute,
  getV1ConvaiSecretsSecretIdDependenciesResourceTypeRoute,
  getV1ConvaiSecretsSecretIdRoute,
  getV1ConvaiSettingsDashboardRoute,
  getV1ConvaiSettingsRoute,
  getV1ConvaiTagsRoute,
  getV1ConvaiTagsTagIdRoute,
  getV1ConvaiTestInvocationsRoute,
  getV1ConvaiTestInvocationsTestInvocationIdRoute,
  getV1ConvaiToolsRoute,
  getV1ConvaiToolsToolIdDependentAgentsRoute,
  getV1ConvaiToolsToolIdExecutionsRoute,
  getV1ConvaiToolsToolIdRoute,
  getV1ConvaiTriageTicketsAgentqaTicketIdRoute,
  getV1ConvaiTriageTicketsRoute,
  getV1ConvaiUsersRoute,
  getV1ConvaiV2PhoneNumbersRoute,
  getV1ConvaiWhatsappAccountsPhoneNumberIdRoute,
  getV1ConvaiWhatsappAccountsRoute,
  getV1DubbingDubbingIdAudioLanguageCodeRoute,
  getV1DubbingDubbingIdRoute,
  getV1DubbingDubbingIdTranscriptLanguageCodeRoute,
  getV1DubbingDubbingIdTranscriptsLanguageCodeFormatFormatTypeRoute,
  getV1DubbingProjectProjectIdLanguageLanguageIdRoute,
  getV1DubbingProjectProjectIdLanguageLanguageIdTranscriptRoute,
  getV1DubbingProjectProjectIdLanguageRoute,
  getV1DubbingProjectProjectIdRoute,
  getV1DubbingProjectProjectIdTranscriptRoute,
  getV1DubbingProjectRoute,
  getV1DubbingResourceDubbingIdRoute,
  getV1DubbingResourceDubbingIdSpeakerSpeakerIdSimilarVoicesRoute,
  getV1DubbingRoute,
  getV1FlowsImageGenerationIdRoute,
  getV1FlowsImageRoute,
  getV1FlowsTemplatesRoute,
  getV1FlowsTemplatesTemplateIdRoute,
  getV1FlowsTemplatesTemplateIdRunsRoute,
  getV1FlowsTemplatesTemplateIdRunsRunIdRoute,
  getV1FlowsTextToSpeechGenerationIdRoute,
  getV1FlowsTextToSpeechRoute,
  getV1FlowsVideoGenerationIdRoute,
  getV1FlowsVideoRoute,
  getV1HistoryHistoryItemIdAudioRoute,
  getV1HistoryHistoryItemIdRoute,
  getV1HistoryRoute,
  getV1ModelsRoute,
  getV1MusicFinetunesFinetuneIdRoute,
  getV1MusicFinetunesRoute,
  getV1ProductionsOrdersLanguagesOrderItemKindRoute,
  getV1ProductionsOrdersOrderIdDeliverablesRoute,
  getV1ProductionsOrdersOrderIdMediaMediaIdRoute,
  getV1ProductionsOrdersOrderIdRoute,
  getV1ProductionsOrdersRoute,
  getV1PronunciationDictionariesDictionaryIdVersionIdDownloadRoute,
  getV1PronunciationDictionariesPronunciationDictionaryIdRoute,
  getV1PronunciationDictionariesRoute,
  getV1ReceptionAgentInfoRoute,
  getV1ReceptionAssetsAssetIdRoute,
  getV1ReceptionAssetsRoute,
  getV1ReceptionCustomerFacingAgentsAgentIdProceduresRoute,
  getV1ReceptionCustomerFacingAgentsRoute,
  getV1ReceptionHolidaysHolidayIdRoute,
  getV1ReceptionHolidaysRoute,
  getV1ReceptionKnowledgeSourcesRoute,
  getV1ReceptionKnowledgeSourcesSourceIdRoute,
  getV1ReceptionLocationsLocationIdRoute,
  getV1ReceptionLocationsRoute,
  getV1ReceptionPhoneNumbersAssignmentsRoute,
  getV1ReceptionProductsProductIdRoute,
  getV1ReceptionProductsRoute,
  getV1ReceptionResellerBillingInvoicesInvoiceIdRoute,
  getV1ReceptionResellerBillingInvoicesRoute,
  getV1ReceptionResellerBillingUpcomingRoute,
  getV1ReceptionResellerTierLadderRoute,
  getV1ReceptionResellerWorkspacesRoute,
  getV1ReceptionServicesRoute,
  getV1ReceptionServicesServiceIdRoute,
  getV1ReceptionStaffRoute,
  getV1ReceptionStaffStaffIdRoute,
  getV1ReceptionTeamInvitesRoute,
  getV1ReceptionTeamMembersRoute,
  getV1ServiceAccountsRoute,
  getV1ServiceAccountsServiceAccountUserIdApiKeysRoute,
  getV1SharedVoicesRoute,
  getV1SpeechEngineRoute,
  getV1SpeechEngineSpeechEngineIdRoute,
  getV1SpeechToTextTranscriptsTranscriptionIdRoute,
  getV1StudioProjectsProjectIdChaptersChapterIdRoute,
  getV1StudioProjectsProjectIdChaptersChapterIdSnapshotsChapterSnapshotIdRoute,
  getV1StudioProjectsProjectIdChaptersChapterIdSnapshotsRoute,
  getV1StudioProjectsProjectIdChaptersRoute,
  getV1StudioProjectsProjectIdMutedTracksRoute,
  getV1StudioProjectsProjectIdRoute,
  getV1StudioProjectsProjectIdSnapshotsProjectSnapshotIdRoute,
  getV1StudioProjectsProjectIdSnapshotsRoute,
  getV1StudioProjectsRoute,
  getV1TextToVoiceGeneratedVoiceIdStreamRoute,
  getV1UsageCharacterStatsRoute,
  getV1UserRoute,
  getV1UserSubscriptionRoute,
  getV1VoicesAccentsRoute,
  getV1VoicesCollectionsCollectionIdRoute,
  getV1VoicesCollectionsRoute,
  getV1VoicesPvcVoiceIdCaptchaRoute,
  getV1VoicesPvcVoiceIdSamplesSampleIdAudioRoute,
  getV1VoicesPvcVoiceIdSamplesSampleIdSpeakersRoute,
  getV1VoicesPvcVoiceIdSamplesSampleIdSpeakersSpeakerIdAudioRoute,
  getV1VoicesPvcVoiceIdSamplesSampleIdWaveformRoute,
  getV1VoicesRoute,
  getV1VoicesSettingsDefaultRoute,
  getV1VoicesVoiceIdRoute,
  getV1VoicesVoiceIdSamplesSampleIdAudioRoute,
  getV1VoicesVoiceIdSettingsRoute,
  getV1WorkspaceAuditLogsRoute,
  getV1WorkspaceAuthConnectionsRoute,
  getV1WorkspaceGroupsRoute,
  getV1WorkspaceGroupsSearchRoute,
  getV1WorkspaceMembersRoute,
  getV1WorkspaceResourcesResourceIdRoute,
  getV1WorkspaceWebhooksRoute,
  patchV1ConvaiAgentsAgentIdBranchesBranchIdProceduresProcedureIdDraftRoute,
  patchV1ConvaiAgentsAgentIdBranchesBranchIdRoute,
  patchV1ConvaiAgentsAgentIdMergeProposalsMergeProposalIdRoute,
  patchV1ConvaiAgentsAgentIdRoute,
  patchV1ConvaiAgentTestingFoldersFolderIdRoute,
  patchV1ConvaiAnalysisItemsAnalysisItemIdAttachmentsRoute,
  patchV1ConvaiAnalysisItemsAnalysisItemIdRoute,
  patchV1ConvaiEnvironmentVariablesEnvVarIdRoute,
  patchV1ConvaiKnowledgeBaseDocumentationIdChunkingOverrideRoute,
  patchV1ConvaiKnowledgeBaseDocumentationIdRoute,
  patchV1ConvaiKnowledgeBaseDocumentationIdUpdateFileRoute,
  patchV1ConvaiMcpServersMcpServerIdApprovalPolicyRoute,
  patchV1ConvaiMcpServersMcpServerIdRoute,
  patchV1ConvaiMcpServersMcpServerIdToolConfigsToolNameRoute,
  patchV1ConvaiPhoneNumbersPhoneNumberIdRoute,
  patchV1ConvaiRealtimeConversationGroupsConversationGroupIdRoute,
  patchV1ConvaiSecretsSecretIdRoute,
  patchV1ConvaiSettingsDashboardRoute,
  patchV1ConvaiSettingsRoute,
  patchV1ConvaiTagsTagIdRoute,
  patchV1ConvaiTestInvocationsTestInvocationIdRoute,
  patchV1ConvaiToolsToolIdRoute,
  patchV1ConvaiTriageTicketsAgentqaTicketIdRoute,
  patchV1ConvaiWhatsappAccountsPhoneNumberIdRoute,
  patchV1DubbingProjectProjectIdLanguageLanguageIdTranscriptSegmentSegmentIdRoute,
  patchV1DubbingProjectProjectIdLanguageLanguageIdTranscriptSegmentsRoute,
  patchV1DubbingProjectProjectIdTranscriptSegmentSegmentIdRoute,
  patchV1DubbingProjectProjectIdTranscriptSegmentsRoute,
  patchV1DubbingResourceDubbingIdSegmentSegmentIdLanguageRoute,
  patchV1DubbingResourceDubbingIdSpeakerSpeakerIdRoute,
  patchV1MusicFinetunesFinetuneIdRoute,
  patchV1ProductionsOrdersOrderIdRoute,
  patchV1PronunciationDictionariesPronunciationDictionaryIdRoute,
  patchV1ReceptionCustomerFacingAgentsAgentIdRoute,
  patchV1ReceptionPhoneNumbersAssignmentsPhoneAssignmentIdRoute,
  patchV1ReceptionProductsProductIdStockRoute,
  patchV1ReceptionResellerWorkspacesWorkspaceIdSubscriptionRoute,
  patchV1ReceptionTeamMembersUserIdRoute,
  patchV1ServiceAccountsServiceAccountUserIdApiKeysApiKeyIdRoute,
  patchV1SpeechEngineSpeechEngineIdRoute,
  patchV1VoicesCollectionsCollectionIdRoute,
  patchV1WorkspaceAuthConnectionsAuthConnectionIdRoute,
  patchV1WorkspaceWebhooksWebhookIdRoute,
  postV1AssetsRoute,
  postV1AudioIsolationRoute,
  postV1AudioIsolationStreamRoute,
  postV1AudioNativeContentRoute,
  postV1AudioNativeProjectIdContentRoute,
  postV1AudioNativeRoute,
  postV1ContentProvenanceWatermarkRoute,
  postV1ConvaiAgentAgentIdLlmUsageCalculateRoute,
  postV1ConvaiAgentsAgentIdAvatarRoute,
  postV1ConvaiAgentsAgentIdBranchesBranchIdProceduresCompileRoute,
  postV1ConvaiAgentsAgentIdBranchesBranchIdProceduresRoute,
  postV1ConvaiAgentsAgentIdBranchesBranchIdRebaseRoute,
  postV1ConvaiAgentsAgentIdBranchesRoute,
  postV1ConvaiAgentsAgentIdBranchesSourceBranchIdMergeRoute,
  postV1ConvaiAgentsAgentIdDeploymentsRoute,
  postV1ConvaiAgentsAgentIdDraftsRoute,
  postV1ConvaiAgentsAgentIdDuplicateRoute,
  postV1ConvaiAgentsAgentIdHoldAudioRoute,
  postV1ConvaiAgentsAgentIdKnowledgeBaseRagQueryRoute,
  postV1ConvaiAgentsAgentIdMergeProposalsMergeProposalIdCommentsRoute,
  postV1ConvaiAgentsAgentIdMergeProposalsMergeProposalIdMergeRoute,
  postV1ConvaiAgentsAgentIdMergeProposalsMergeProposalIdReviewsRoute,
  postV1ConvaiAgentsAgentIdMergeProposalsRoute,
  postV1ConvaiAgentsAgentIdRunTestsRoute,
  postV1ConvaiAgentsAgentIdSimulateConversationRoute,
  postV1ConvaiAgentsAgentIdSimulateConversationStreamRoute,
  postV1ConvaiAgentsAgentIdTriageTicketsRoute,
  postV1ConvaiAgentsCreateRoute,
  postV1ConvaiAgentTestingBulkMoveRoute,
  postV1ConvaiAgentTestingCreateRoute,
  postV1ConvaiAgentTestingFoldersRoute,
  postV1ConvaiAgentTestingSummariesRoute,
  postV1ConvaiAnalysisItemsAnalysisItemIdCopyRoute,
  postV1ConvaiAnalysisItemsRoute,
  postV1ConvaiBatchCallingBatchIdCancelRoute,
  postV1ConvaiBatchCallingBatchIdRetryRoute,
  postV1ConvaiBatchCallingSubmitRoute,
  postV1ConvaiConversationsConversationIdAnalysisEvaluationsRunRoute,
  postV1ConvaiConversationsConversationIdAnalysisRunRoute,
  postV1ConvaiConversationsConversationIdFeedbackRoute,
  postV1ConvaiConversationsConversationIdFilesRoute,
  postV1ConvaiConversationsConversationIdMessagesRoute,
  postV1ConvaiConversationsConversationIdMessagesStreamRoute,
  postV1ConvaiConversationsConversationIdTagsRoute,
  postV1ConvaiConversationsRoute,
  postV1ConvaiEnvironmentsRoute,
  postV1ConvaiEnvironmentVariablesRoute,
  postV1ConvaiExotelOutboundCallRoute,
  postV1ConvaiKnowledgeBaseBulkDeleteRoute,
  postV1ConvaiKnowledgeBaseBulkMoveRoute,
  postV1ConvaiKnowledgeBaseCrawlCrawlJobIdCancelRoute,
  postV1ConvaiKnowledgeBaseCrawlRoute,
  postV1ConvaiKnowledgeBaseDependentAgentsRoute,
  postV1ConvaiKnowledgeBaseDocumentationIdRagIndexRoute,
  postV1ConvaiKnowledgeBaseDocumentationIdRefreshRoute,
  postV1ConvaiKnowledgeBaseDocumentIdMoveRoute,
  postV1ConvaiKnowledgeBaseFileRoute,
  postV1ConvaiKnowledgeBaseFolderRoute,
  postV1ConvaiKnowledgeBaseRagIndexRoute,
  postV1ConvaiKnowledgeBaseRoute,
  postV1ConvaiKnowledgeBaseTextRoute,
  postV1ConvaiKnowledgeBaseUrlRoute,
  postV1ConvaiLlmUsageCalculateRoute,
  postV1ConvaiMcpServersMcpServerIdToolApprovalsRoute,
  postV1ConvaiMcpServersMcpServerIdToolConfigsRoute,
  postV1ConvaiMcpServersRoute,
  postV1ConvaiOutboundCampaignsAttentionAttentionIdResolveRoute,
  postV1ConvaiOutboundCampaignsAttentionAttentionIdRetryRoute,
  postV1ConvaiOutboundCampaignsCampaignsCampaignIdPauseRoute,
  postV1ConvaiOutboundCampaignsCampaignsCampaignIdResumeRoute,
  postV1ConvaiOutboundCampaignsCampaignsCampaignIdStopRoute,
  postV1ConvaiOutboundCampaignsCampaignsPauseAllRoute,
  postV1ConvaiOutboundCampaignsCampaignsStopAllRoute,
  postV1ConvaiOutboundCampaignsCampaignsSubmitRoute,
  postV1ConvaiPhoneNumbersRoute,
  postV1ConvaiRealtimeClientSecretsRoute,
  postV1ConvaiRealtimeConversationGroupsRoute,
  postV1ConvaiSecretsRoute,
  postV1ConvaiSipTrunkOutboundCallRoute,
  postV1ConvaiTagsRoute,
  postV1ConvaiTestInvocationsTestInvocationIdCancelRoute,
  postV1ConvaiTestInvocationsTestInvocationIdResubmitRoute,
  postV1ConvaiToolsRoute,
  postV1ConvaiTriageTicketsAgentqaTicketIdCommentsRoute,
  postV1ConvaiTriageTicketsAgentqaTicketIdMergeRoute,
  postV1ConvaiTriageTicketsAgentqaTicketIdTurnCommentsRoute,
  postV1ConvaiTriageTicketsRoute,
  postV1ConvaiTwilioOutboundCallRoute,
  postV1ConvaiTwilioRegisterCallRoute,
  postV1ConvaiWhatsappOutboundCallRoute,
  postV1ConvaiWhatsappOutboundMessageRoute,
  postV1DubbingProjectProjectIdLanguageLanguageIdTranscriptRegenerateRoute,
  postV1DubbingProjectProjectIdLanguageRoute,
  postV1DubbingProjectProjectIdTranscriptSegmentRoute,
  postV1DubbingProjectRoute,
  postV1DubbingResourceDubbingIdDubRoute,
  postV1DubbingResourceDubbingIdLanguageRoute,
  postV1DubbingResourceDubbingIdMigrateSegmentsRoute,
  postV1DubbingResourceDubbingIdRenderLanguageRoute,
  postV1DubbingResourceDubbingIdSpeakerRoute,
  postV1DubbingResourceDubbingIdSpeakerSpeakerIdSegmentRoute,
  postV1DubbingResourceDubbingIdTranscribeRoute,
  postV1DubbingResourceDubbingIdTranslateRoute,
  postV1DubbingRoute,
  postV1FlowsImageRoute,
  postV1FlowsTemplatesTemplateIdRunsRoute,
  postV1FlowsTextToSpeechRoute,
  postV1FlowsVideoRoute,
  postV1ForcedAlignmentRoute,
  postV1HistoryDownloadRoute,
  postV1MusicDetailedRoute,
  postV1MusicDetailedStreamRoute,
  postV1MusicFinetunesRoute,
  postV1MusicPlanRoute,
  postV1MusicRoute,
  postV1MusicStemSeparationRoute,
  postV1MusicStreamRoute,
  postV1MusicUploadRoute,
  postV1MusicVideoToMusicRoute,
  postV1ProductionsOrdersOrderIdItemsRoute,
  postV1ProductionsOrdersOrderIdMediaRoute,
  postV1ProductionsOrdersOrderIdSubmitRoute,
  postV1ProductionsOrdersRoute,
  postV1PronunciationDictionariesAddFromFileRoute,
  postV1PronunciationDictionariesAddFromRulesRoute,
  postV1PronunciationDictionariesPronunciationDictionaryIdAddRulesRoute,
  postV1PronunciationDictionariesPronunciationDictionaryIdRemoveRulesRoute,
  postV1PronunciationDictionariesPronunciationDictionaryIdSetRulesRoute,
  postV1ReceptionAssetsRoute,
  postV1ReceptionCustomerFacingAgentsAgentIdActivateRoute,
  postV1ReceptionCustomerFacingAgentsAgentIdProceduresRoute,
  postV1ReceptionCustomerFacingAgentsAgentIdRulesRoute,
  postV1ReceptionCustomerFacingAgentsAgentIdTransferRulesRoute,
  postV1ReceptionHolidaysRoute,
  postV1ReceptionKnowledgeSourcesRoute,
  postV1ReceptionKnowledgeSourcesUrlsRoute,
  postV1ReceptionLocationsRoute,
  postV1ReceptionPhoneNumbersAssignmentsRoute,
  postV1ReceptionProductsProductIdStockAdjustRoute,
  postV1ReceptionProductsRoute,
  postV1ReceptionResellerWorkspacesRoute,
  postV1ReceptionResellerWorkspacesWorkspaceIdCompleteOnboardingRoute,
  postV1ReceptionResellerWorkspacesWorkspaceIdSubscriptionCancelDowngradeRoute,
  postV1ReceptionResellerWorkspacesWorkspaceIdSubscriptionRestoreRoute,
  postV1ReceptionResellerWorkspacesWorkspaceIdSubscriptionRoute,
  postV1ReceptionServicesRoute,
  postV1ReceptionServicesServiceIdConfirmUpdateRoute,
  postV1ReceptionStaffRoute,
  postV1ReceptionTeamInvitesRoute,
  postV1ServiceAccountsRoute,
  postV1ServiceAccountsServiceAccountUserIdApiKeysApiKeyIdDisableRoute,
  postV1ServiceAccountsServiceAccountUserIdApiKeysRoute,
  postV1SimilarVoicesRoute,
  postV1SingleUseTokenTokenTypeRoute,
  postV1SoundGenerationRoute,
  postV1SpeechEngineRoute,
  postV1SpeechEngineSpeechEngineIdDuplicateRoute,
  postV1SpeechToTextRoute,
  postV1StudioPodcastsRoute,
  postV1StudioProjectsProjectIdChaptersChapterIdConvertRoute,
  postV1StudioProjectsProjectIdChaptersChapterIdRoute,
  postV1StudioProjectsProjectIdChaptersChapterIdSnapshotsChapterSnapshotIdStreamRoute,
  postV1StudioProjectsProjectIdChaptersRoute,
  postV1StudioProjectsProjectIdContentRoute,
  postV1StudioProjectsProjectIdConvertRoute,
  postV1StudioProjectsProjectIdPronunciationDictionariesRoute,
  postV1StudioProjectsProjectIdRoute,
  postV1StudioProjectsProjectIdSnapshotsProjectSnapshotIdArchiveRoute,
  postV1StudioProjectsProjectIdSnapshotsProjectSnapshotIdStreamRoute,
  postV1StudioProjectsRoute,
  postV1TextToDialogueRoute,
  postV1TextToDialogueStreamRoute,
  postV1TextToDialogueStreamWithTimestampsRoute,
  postV1TextToDialogueWithTimestampsRoute,
  postV1TextToSpeechVoiceIdRoute,
  postV1TextToSpeechVoiceIdStreamRoute,
  postV1TextToSpeechVoiceIdStreamWithTimestampsRoute,
  postV1TextToSpeechVoiceIdWithTimestampsRoute,
  postV1TextToVoiceCreatePreviewsRoute,
  postV1TextToVoiceDesignRoute,
  postV1TextToVoiceRoute,
  postV1TextToVoiceVoiceIdRemixRoute,
  postV1VoiceChangerVoiceIdRoute,
  postV1VoiceChangerVoiceIdStreamRoute,
  postV1VoicesAddPublicUserIdVoiceIdRoute,
  postV1VoicesAddRoute,
  postV1VoicesCollectionsCollectionIdVoiceVoiceIdRoute,
  postV1VoicesCollectionsRoute,
  postV1VoicesPvcRoute,
  postV1VoicesPvcVoiceIdCaptchaRoute,
  postV1VoicesPvcVoiceIdRoute,
  postV1VoicesPvcVoiceIdSamplesRoute,
  postV1VoicesPvcVoiceIdSamplesSampleIdRoute,
  postV1VoicesPvcVoiceIdSamplesSampleIdSeparateSpeakersRoute,
  postV1VoicesPvcVoiceIdTrainRoute,
  postV1VoicesPvcVoiceIdVerificationRoute,
  postV1VoicesVoiceIdEditRoute,
  postV1VoicesVoiceIdReplicateToIsolatedEnvironmentRoute,
  postV1VoicesVoiceIdSettingsEditRoute,
  postV1WorkspaceAnalyticsQueryUsageByProductOverTimeRoute,
  postV1WorkspaceAnalyticsRequestsRoute,
  postV1WorkspaceAnalyticsUsageRoute,
  postV1WorkspaceAuthConnectionsRoute,
  postV1WorkspaceGroupsGroupIdMembersRemoveRoute,
  postV1WorkspaceGroupsGroupIdMembersRoute,
  postV1WorkspaceInvitesAddBulkRoute,
  postV1WorkspaceInvitesAddRoute,
  postV1WorkspaceMembersRoute,
  postV1WorkspaceResourcesResourceIdShareRoute,
  postV1WorkspaceResourcesResourceIdUnshareRoute,
  postV1WorkspacesApiKeysDisableRoute,
  postV1WorkspacesApiKeysThirdPartyDisablingRoute,
  postV1WorkspaceWebhooksRoute,
  postV1WorkspaceWebhooksWebhookIdDeliveriesDeliveryIdRedeliverRoute,
  postV1WorkspaceWebhooksWebhookIdTestRoute,
  putV1ConvaiAgentTestingTestIdRoute,
  putV1ConvaiOutboundCampaignsConfigRoute,
  putV1ConvaiRealtimeConversationsConversationIdConversationGroupRoute,
  putV1ReceptionAgentInfoRoute,
  putV1ReceptionAssetsAssetIdRoute,
  putV1ReceptionCustomerFacingAgentsAgentIdProceduresProcedureIdRoute,
  putV1ReceptionCustomerFacingAgentsAgentIdRulesRuleIdRoute,
  putV1ReceptionCustomerFacingAgentsAgentIdTransferRulesRuleIdRoute,
  putV1ReceptionHolidaysHolidayIdRoute,
  putV1ReceptionLocationsLocationIdRoute,
  putV1ReceptionProductsProductIdRoute,
  putV1ReceptionServicesServiceIdRoute,
  putV1ReceptionStaffStaffIdRoute,
  putV1WorkspaceMembersUserIdUsageLimitRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v1Handler = app
  .openapi(getV1HistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1HistoryHistoryItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1HistoryHistoryItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1HistoryHistoryItemIdAudioRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1HistoryDownloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SoundGenerationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AudioIsolationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AudioIsolationHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1AudioIsolationHistoryHistoryItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AudioIsolationStreamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AudioEffectsCatalogRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1VoicesVoiceIdSamplesSampleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1VoicesVoiceIdSamplesSampleIdAudioRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TextToSpeechVoiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TextToSpeechVoiceIdWithTimestampsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TextToSpeechVoiceIdStreamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TextToSpeechVoiceIdStreamWithTimestampsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TextToDialogueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TextToDialogueStreamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TextToDialogueStreamWithTimestampsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TextToDialogueWithTimestampsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1VoiceChangerVoiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1VoiceChangerVoiceIdStreamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TextToVoiceCreatePreviewsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TextToVoiceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TextToVoiceDesignRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TextToVoiceVoiceIdRemixRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TextToVoiceGeneratedVoiceIdStreamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1UserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1UserSubscriptionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1VoicesCollectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1VoicesCollectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1VoicesCollectionsCollectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1VoicesCollectionsCollectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1VoicesCollectionsCollectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1VoicesCollectionsCollectionIdVoiceVoiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1VoicesCollectionsCollectionIdVoiceVoiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1VoicesSettingsDefaultRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1VoicesVoiceIdSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1VoicesVoiceIdSettingsEditRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1VoicesAccentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1VoicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1VoicesVoiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1VoicesVoiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1VoicesVoiceIdEditRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1VoicesVoiceIdReplicateToIsolatedEnvironmentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1VoicesAddRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1VoicesAddPublicUserIdVoiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1StudioPodcastsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1StudioProjectsProjectIdPronunciationDictionariesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1StudioProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1StudioProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1StudioProjectsProjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1StudioProjectsProjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1StudioProjectsProjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1StudioProjectsProjectIdContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1StudioProjectsProjectIdConvertRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1StudioProjectsProjectIdSnapshotsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1StudioProjectsProjectIdSnapshotsProjectSnapshotIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1StudioProjectsProjectIdSnapshotsProjectSnapshotIdStreamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1StudioProjectsProjectIdSnapshotsProjectSnapshotIdArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1StudioProjectsProjectIdChaptersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1StudioProjectsProjectIdChaptersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1StudioProjectsProjectIdChaptersChapterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1StudioProjectsProjectIdChaptersChapterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1StudioProjectsProjectIdChaptersChapterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1StudioProjectsProjectIdChaptersChapterIdConvertRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1StudioProjectsProjectIdChaptersChapterIdSnapshotsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1StudioProjectsProjectIdChaptersChapterIdSnapshotsChapterSnapshotIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postV1StudioProjectsProjectIdChaptersChapterIdSnapshotsChapterSnapshotIdStreamRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getV1StudioProjectsProjectIdMutedTracksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AudioNativeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AudioNativeProjectIdSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AudioNativeProjectIdContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AudioNativeContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DubbingProjectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DubbingProjectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DubbingProjectProjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1DubbingProjectProjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DubbingProjectProjectIdLanguageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DubbingProjectProjectIdLanguageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DubbingProjectProjectIdLanguageLanguageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1DubbingProjectProjectIdLanguageLanguageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DubbingProjectProjectIdTranscriptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1DubbingProjectProjectIdTranscriptSegmentSegmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1DubbingProjectProjectIdTranscriptSegmentSegmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1DubbingProjectProjectIdTranscriptSegmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DubbingProjectProjectIdTranscriptSegmentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DubbingProjectProjectIdLanguageLanguageIdTranscriptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1DubbingProjectProjectIdLanguageLanguageIdTranscriptSegmentSegmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1DubbingProjectProjectIdLanguageLanguageIdTranscriptSegmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DubbingProjectProjectIdLanguageLanguageIdTranscriptRegenerateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DubbingResourceDubbingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DubbingResourceDubbingIdLanguageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DubbingResourceDubbingIdSpeakerSpeakerIdSegmentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1DubbingResourceDubbingIdSegmentSegmentIdLanguageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DubbingResourceDubbingIdMigrateSegmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1DubbingResourceDubbingIdSegmentSegmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DubbingResourceDubbingIdTranscribeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DubbingResourceDubbingIdTranslateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DubbingResourceDubbingIdDubRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1DubbingResourceDubbingIdSpeakerSpeakerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DubbingResourceDubbingIdSpeakerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DubbingResourceDubbingIdSpeakerSpeakerIdSimilarVoicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DubbingResourceDubbingIdRenderLanguageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DubbingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DubbingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DubbingDubbingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1DubbingDubbingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DubbingDubbingIdAudioLanguageCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DubbingDubbingIdTranscriptLanguageCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DubbingDubbingIdTranscriptsLanguageCodeFormatFormatTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ModelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ContentProvenanceWatermarkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SimilarVoicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SharedVoicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1UsageCharacterStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PronunciationDictionariesAddFromFileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PronunciationDictionariesAddFromRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1PronunciationDictionariesPronunciationDictionaryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PronunciationDictionariesPronunciationDictionaryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PronunciationDictionariesPronunciationDictionaryIdSetRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PronunciationDictionariesPronunciationDictionaryIdAddRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PronunciationDictionariesPronunciationDictionaryIdRemoveRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PronunciationDictionariesDictionaryIdVersionIdDownloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PronunciationDictionariesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1WorkspacesApiKeysDisableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1WorkspacesApiKeysThirdPartyDisablingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ServiceAccountsServiceAccountUserIdApiKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ServiceAccountsServiceAccountUserIdApiKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1ServiceAccountsServiceAccountUserIdApiKeysApiKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ServiceAccountsServiceAccountUserIdApiKeysApiKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ServiceAccountsServiceAccountUserIdApiKeysApiKeyIdDisableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1WorkspaceAuditLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1WorkspaceAuthConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1WorkspaceAuthConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1WorkspaceAuthConnectionsAuthConnectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1WorkspaceAuthConnectionsAuthConnectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ServiceAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ServiceAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1WorkspaceGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1WorkspaceGroupsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1WorkspaceGroupsGroupIdMembersRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1WorkspaceGroupsGroupIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1WorkspaceInvitesAddRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1WorkspaceInvitesAddBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1WorkspaceInvitesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1WorkspaceMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1WorkspaceMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1WorkspaceMembersUserIdUsageLimitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1WorkspaceResourcesResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1WorkspaceResourcesResourceIdShareRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1WorkspaceResourcesResourceIdUnshareRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1WorkspaceWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1WorkspaceWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1WorkspaceWebhooksWebhookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1WorkspaceWebhooksWebhookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1MusicVideoToMusicRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SpeechToTextRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SpeechToTextTranscriptsTranscriptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1SpeechToTextTranscriptsTranscriptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SingleUseTokenTokenTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ForcedAlignmentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConvaiConversationGetSignedUrlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConvaiConversationGetSignedUrl2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConvaiConversationTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConvaiTwilioOutboundCallRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConvaiTwilioRegisterCallRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConvaiExotelOutboundCallRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConvaiWhatsappOutboundCallRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConvaiWhatsappOutboundMessageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConvaiAgentsCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConvaiAgentsSummariesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConvaiAgentsAgentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1ConvaiAgentsAgentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ConvaiAgentsAgentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConvaiAgentsAgentIdSubagentDependentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConvaiAgentsAgentIdWidgetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConvaiAgentsAgentIdLinkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConvaiAgentsAgentIdAvatarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConvaiAgentsAgentIdHoldAudioRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ConvaiAgentsAgentIdHoldAudioRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConvaiAgentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConvaiAgentAgentIdKnowledgeBaseSizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConvaiAgentAgentIdLlmUsageCalculateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConvaiAgentsAgentIdDuplicateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConvaiAgentsAgentIdSimulateConversationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConvaiAgentsAgentIdSimulateConversationStreamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConvaiAgentTestingCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConvaiAgentTestingFoldersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConvaiAgentTestingFoldersFolderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1ConvaiAgentTestingFoldersFolderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ConvaiAgentTestingFoldersFolderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConvaiAgentTestingBulkMoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConvaiAgentTestingTestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ConvaiAgentTestingTestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ConvaiAgentTestingTestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConvaiAgentTestingSummariesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConvaiAgentTestingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConvaiTestInvocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConvaiAgentsAgentIdRunTestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConvaiTestInvocationsTestInvocationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1ConvaiTestInvocationsTestInvocationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConvaiTestInvocationsTestInvocationIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConvaiTestInvocationsTestInvocationIdResubmitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConvaiConversationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConvaiConversationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConvaiUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConvaiConversationsResolveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConvaiConversationsConversationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ConvaiConversationsConversationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConvaiConversationsConversationIdSummaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConvaiConversationsConversationIdSipMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConvaiConversationsConversationIdAudioRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConvaiConversationsConversationIdFilesFileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ConvaiConversationsConversationIdFilesFileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConvaiConversationsConversationIdFeedbackRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConvaiConversationsMessagesTextSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConvaiConversationsMessagesSmartSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConvaiConversationsConversationIdTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ConvaiConversationsConversationIdTagsTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConvaiTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConvaiTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConvaiTagsTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1ConvaiTagsTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ConvaiTagsTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConvaiAgentsAgentIdTriageTicketsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConvaiAgentsAgentIdTriageTicketsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConvaiTriageTicketsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConvaiTriageTicketsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConvaiAgentsAgentIdTriageTicketsAssignableUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConvaiTriageTicketsAgentqaTicketIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1ConvaiTriageTicketsAgentqaTicketIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ConvaiTriageTicketsAgentqaTicketIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConvaiTriageTicketsAgentqaTicketIdCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConvaiTriageTicketsAgentqaTicketIdMergeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConvaiTriageTicketsAgentqaTicketIdTurnCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConvaiPhoneNumbersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConvaiPhoneNumbersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConvaiPhoneNumbersPhoneNumberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ConvaiPhoneNumbersPhoneNumberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1ConvaiPhoneNumbersPhoneNumberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConvaiV2PhoneNumbersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConvaiPhoneNumbersPhoneNumberIdSipMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConvaiLlmUsageCalculateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConvaiLlmListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConvaiConversationsConversationIdFilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConvaiAnalyticsLiveCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConvaiKnowledgeBaseSummariesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConvaiKnowledgeBaseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConvaiKnowledgeBaseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConvaiKnowledgeBaseUrlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConvaiKnowledgeBaseCrawlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConvaiKnowledgeBaseCrawlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConvaiKnowledgeBaseCrawlCrawlJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConvaiKnowledgeBaseCrawlCrawlJobIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConvaiKnowledgeBaseFileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConvaiKnowledgeBaseTextRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConvaiKnowledgeBaseFolderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1ConvaiKnowledgeBaseDocumentationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConvaiKnowledgeBaseDocumentationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ConvaiKnowledgeBaseDocumentationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConvaiKnowledgeBaseDocumentationIdChunkingOverrideRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1ConvaiKnowledgeBaseDocumentationIdChunkingOverrideRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1ConvaiKnowledgeBaseDocumentationIdUpdateFileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConvaiKnowledgeBaseRagIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConvaiKnowledgeBaseRagIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConvaiKnowledgeBaseDocumentationIdRefreshRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConvaiKnowledgeBaseDocumentationIdRagIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConvaiKnowledgeBaseDocumentationIdRagIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ConvaiKnowledgeBaseDocumentationIdRagIndexRagIndexIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConvaiKnowledgeBaseSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConvaiAgentsAgentIdKnowledgeBaseRagQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConvaiKnowledgeBaseDocumentationIdDependentAgentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConvaiKnowledgeBaseDependentAgentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConvaiKnowledgeBaseDocumentationIdContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConvaiKnowledgeBaseDocumentationIdSourceFileUrlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConvaiKnowledgeBaseDocumentationIdChunkChunkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConvaiKnowledgeBaseDocumentationIdChunksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConvaiKnowledgeBaseDocumentIdMoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConvaiKnowledgeBaseBulkMoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConvaiKnowledgeBaseBulkDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConvaiAgentsAgentIdTopicsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConvaiToolsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConvaiToolsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConvaiToolsToolIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1ConvaiToolsToolIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ConvaiToolsToolIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConvaiToolsToolIdDependentAgentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConvaiToolsToolIdExecutionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConvaiAnalysisItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConvaiAnalysisItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1ConvaiAnalysisItemsAnalysisItemIdAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConvaiAnalysisItemsAnalysisItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1ConvaiAnalysisItemsAnalysisItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ConvaiAnalysisItemsAnalysisItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConvaiAnalysisItemsAnalysisItemIdVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConvaiAnalysisItemsAnalysisItemIdCopyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConvaiAnalysisItemsAnalysisItemIdDependentAgentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConvaiSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1ConvaiSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConvaiSettingsDashboardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1ConvaiSettingsDashboardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConvaiSecretsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConvaiSecretsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConvaiSecretsSecretIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ConvaiSecretsSecretIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1ConvaiSecretsSecretIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConvaiSecretsSecretIdDependenciesResourceTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConvaiBatchCallingSubmitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConvaiBatchCallingWorkspaceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConvaiBatchCallingBatchIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ConvaiBatchCallingBatchIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConvaiBatchCallingBatchIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConvaiBatchCallingBatchIdRetryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConvaiBatchCallingBatchIdExportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConvaiSipTrunkOutboundCallRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConvaiMcpServersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConvaiMcpServersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConvaiMcpServersMcpServerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ConvaiMcpServersMcpServerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1ConvaiMcpServersMcpServerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConvaiMcpServersMcpServerIdToolsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1ConvaiMcpServersMcpServerIdApprovalPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConvaiMcpServersMcpServerIdToolApprovalsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ConvaiMcpServersMcpServerIdToolApprovalsToolNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConvaiMcpServersMcpServerIdToolConfigsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConvaiMcpServersMcpServerIdToolConfigsToolNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1ConvaiMcpServersMcpServerIdToolConfigsToolNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ConvaiMcpServersMcpServerIdToolConfigsToolNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConvaiWhatsappAccountsPhoneNumberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1ConvaiWhatsappAccountsPhoneNumberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ConvaiWhatsappAccountsPhoneNumberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConvaiWhatsappAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConvaiAgentsAgentIdBranchesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConvaiAgentsAgentIdBranchesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConvaiAgentsAgentIdBranchesBranchIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1ConvaiAgentsAgentIdBranchesBranchIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConvaiAgentsAgentIdVersionsVersionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConvaiAgentsAgentIdBranchesSourceBranchIdMergePreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConvaiAgentsAgentIdBranchesSourceBranchIdMergeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConvaiAgentsAgentIdBranchesBranchIdRebasePreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConvaiAgentsAgentIdBranchesBranchIdRebaseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConvaiAgentsAgentIdDeploymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConvaiAgentsAgentIdDeploymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConvaiAgentsAgentIdDraftsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ConvaiAgentsAgentIdDraftsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConvaiAgentsAgentIdMergeProposalsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConvaiAgentsAgentIdMergeProposalsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConvaiAgentsAgentIdMergeProposalsMergeProposalIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1ConvaiAgentsAgentIdMergeProposalsMergeProposalIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConvaiAgentsAgentIdMergeProposalsMergeProposalIdReviewsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConvaiAgentsAgentIdMergeProposalsMergeProposalIdCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConvaiAgentsAgentIdMergeProposalsMergeProposalIdMergeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConvaiOutboundCampaignsConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ConvaiOutboundCampaignsConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConvaiOutboundCampaignsCampaignsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConvaiOutboundCampaignsCampaignsPauseAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConvaiOutboundCampaignsCampaignsStopAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConvaiOutboundCampaignsCampaignsSubmitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConvaiOutboundCampaignsCampaignsCampaignIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConvaiOutboundCampaignsCampaignsCampaignIdProgressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConvaiOutboundCampaignsCampaignsCampaignIdLeadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConvaiOutboundCampaignsCampaignsCampaignIdCallsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConvaiOutboundCampaignsCampaignsCampaignIdFollowUpRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConvaiOutboundCampaignsCampaignsCampaignIdExportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConvaiOutboundCampaignsCampaignsCampaignIdLeadsLeadIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ConvaiOutboundCampaignsCampaignsCampaignIdLeadsLeadIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConvaiOutboundCampaignsCampaignsCampaignIdPauseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConvaiOutboundCampaignsCampaignsCampaignIdResumeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConvaiOutboundCampaignsCampaignsCampaignIdStopRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConvaiOutboundCampaignsAttentionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConvaiOutboundCampaignsAttentionAttentionIdRetryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConvaiOutboundCampaignsAttentionAttentionIdResolveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SpeechEngineRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SpeechEngineRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SpeechEngineSpeechEngineIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1SpeechEngineSpeechEngineIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1SpeechEngineSpeechEngineIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SpeechEngineSpeechEngineIdDuplicateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConvaiConversationsConversationIdMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConvaiConversationsConversationIdMessagesStreamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConvaiConversationsConversationIdTurnsTurnIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConvaiConversationsConversationIdTurnsTurnIdEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConvaiAgentsAgentIdBranchesBranchIdProceduresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConvaiAgentsAgentIdBranchesBranchIdProceduresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConvaiAgentsAgentIdBranchesBranchIdProceduresCompileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ConvaiAgentsAgentIdBranchesBranchIdProceduresProcedureIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConvaiAgentsAgentIdBranchesBranchIdProceduresProcedureIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConvaiAgentsAgentIdBranchesBranchIdProceduresProcedureIdDraftRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1ConvaiAgentsAgentIdBranchesBranchIdProceduresProcedureIdDraftRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ConvaiAgentsAgentIdBranchesBranchIdProceduresProcedureIdDraftRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConvaiConversationsConversationIdAnalysisRunRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConvaiConversationsConversationIdAnalysisEvaluationsRunRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConvaiEnvironmentVariablesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConvaiEnvironmentVariablesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConvaiEnvironmentVariablesEnvVarIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1ConvaiEnvironmentVariablesEnvVarIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ConvaiEnvironmentVariablesEnvVarIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConvaiEnvironmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConvaiEnvironmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ConvaiEnvironmentsEnvironmentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConvaiRealtimeConversationGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConvaiRealtimeConversationGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConvaiRealtimeConversationGroupsConversationGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1ConvaiRealtimeConversationGroupsConversationGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ConvaiRealtimeConversationGroupsConversationGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ConvaiRealtimeConversationsConversationIdConversationGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ConvaiRealtimeConversationsConversationIdConversationGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConvaiRealtimeClientSecretsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1MusicPlanRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1MusicRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1MusicDetailedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1MusicDetailedStreamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1MusicStreamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1MusicUploadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1MusicStemSeparationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1MusicFinetunesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1MusicFinetunesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1MusicFinetunesFinetuneIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1MusicFinetunesFinetuneIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1MusicFinetunesFinetuneIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProductionsOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProductionsOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProductionsOrdersOrderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1ProductionsOrdersOrderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProductionsOrdersOrderIdMediaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProductionsOrdersOrderIdMediaMediaIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProductionsOrdersOrderIdItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ProductionsOrdersOrderIdItemsItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProductionsOrdersOrderIdSubmitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProductionsOrdersOrderIdDeliverablesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProductionsOrdersLanguagesOrderItemKindRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1VoicesPvcRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1VoicesPvcVoiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1VoicesPvcVoiceIdSamplesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1VoicesPvcVoiceIdSamplesSampleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1VoicesPvcVoiceIdSamplesSampleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1VoicesPvcVoiceIdSamplesSampleIdAudioRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1VoicesPvcVoiceIdSamplesSampleIdWaveformRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1VoicesPvcVoiceIdSamplesSampleIdSpeakersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1VoicesPvcVoiceIdSamplesSampleIdSeparateSpeakersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1VoicesPvcVoiceIdSamplesSampleIdSpeakersSpeakerIdAudioRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1VoicesPvcVoiceIdCaptchaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1VoicesPvcVoiceIdCaptchaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1VoicesPvcVoiceIdTrainRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1VoicesPvcVoiceIdVerificationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1FlowsVideoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1FlowsVideoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1FlowsVideoGenerationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1FlowsImageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1FlowsImageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1FlowsImageGenerationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1FlowsTextToSpeechRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1FlowsTextToSpeechRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1FlowsTextToSpeechGenerationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1FlowsTemplatesTemplateIdRunsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1FlowsTemplatesTemplateIdRunsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1FlowsTemplatesTemplateIdRunsRunIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1FlowsTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1FlowsTemplatesTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AssetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AssetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AssetsAssetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1AssetsAssetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1WorkspaceAnalyticsQueryUsageByProductOverTimeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1WorkspaceAnalyticsUsageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1WorkspaceAnalyticsRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1WorkspaceWebhooksWebhookIdTestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1WorkspaceWebhooksWebhookIdDeliveriesDeliveryIdRedeliverRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ReceptionServicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ReceptionServicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ReceptionServicesServiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ReceptionServicesServiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ReceptionServicesServiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ReceptionServicesServiceIdConfirmUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ReceptionAssetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ReceptionAssetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ReceptionAssetsAssetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ReceptionAssetsAssetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ReceptionAssetsAssetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ReceptionProductsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ReceptionProductsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ReceptionProductsProductIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ReceptionProductsProductIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ReceptionProductsProductIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1ReceptionProductsProductIdStockRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ReceptionProductsProductIdStockAdjustRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ReceptionStaffRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ReceptionStaffRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ReceptionStaffStaffIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ReceptionStaffStaffIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ReceptionStaffStaffIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ReceptionCustomerFacingAgentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1ReceptionCustomerFacingAgentsAgentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ReceptionCustomerFacingAgentsAgentIdActivateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ReceptionCustomerFacingAgentsAgentIdRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ReceptionCustomerFacingAgentsAgentIdRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ReceptionCustomerFacingAgentsAgentIdRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ReceptionCustomerFacingAgentsAgentIdProceduresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ReceptionCustomerFacingAgentsAgentIdProceduresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ReceptionCustomerFacingAgentsAgentIdProceduresProcedureIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ReceptionCustomerFacingAgentsAgentIdProceduresProcedureIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ReceptionCustomerFacingAgentsAgentIdTransferRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ReceptionCustomerFacingAgentsAgentIdTransferRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ReceptionCustomerFacingAgentsAgentIdTransferRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ReceptionPhoneNumbersAssignmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ReceptionPhoneNumbersAssignmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ReceptionPhoneNumbersAssignmentsPhoneAssignmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1ReceptionPhoneNumbersAssignmentsPhoneAssignmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ReceptionHolidaysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ReceptionHolidaysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ReceptionHolidaysHolidayIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ReceptionHolidaysHolidayIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ReceptionHolidaysHolidayIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ReceptionLocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ReceptionLocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ReceptionLocationsLocationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ReceptionLocationsLocationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ReceptionLocationsLocationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ReceptionAgentInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ReceptionAgentInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ReceptionKnowledgeSourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ReceptionKnowledgeSourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ReceptionKnowledgeSourcesSourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ReceptionKnowledgeSourcesSourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ReceptionKnowledgeSourcesUrlsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ReceptionResellerWorkspacesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ReceptionResellerWorkspacesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ReceptionResellerWorkspacesWorkspaceIdCompleteOnboardingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ReceptionResellerWorkspacesWorkspaceIdSubscriptionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1ReceptionResellerWorkspacesWorkspaceIdSubscriptionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ReceptionResellerWorkspacesWorkspaceIdSubscriptionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ReceptionResellerWorkspacesWorkspaceIdSubscriptionRestoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ReceptionResellerWorkspacesWorkspaceIdSubscriptionCancelDowngradeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ReceptionResellerTierLadderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ReceptionResellerBillingInvoicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ReceptionResellerBillingInvoicesInvoiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ReceptionResellerBillingUpcomingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ReceptionTeamMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ReceptionTeamInvitesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ReceptionTeamInvitesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ReceptionTeamInvitesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1ReceptionTeamMembersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ReceptionTeamMembersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
