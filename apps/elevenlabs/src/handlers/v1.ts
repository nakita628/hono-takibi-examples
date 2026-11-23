import type { RouteHandler } from '@hono/zod-openapi'
import type {
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

export const getV1HistoryRouteHandler: RouteHandler<typeof getV1HistoryRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1HistoryHistoryItemIdRouteHandler: RouteHandler<
  typeof getV1HistoryHistoryItemIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1HistoryHistoryItemIdRouteHandler: RouteHandler<
  typeof deleteV1HistoryHistoryItemIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1HistoryHistoryItemIdAudioRouteHandler: RouteHandler<
  typeof getV1HistoryHistoryItemIdAudioRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1HistoryDownloadRouteHandler: RouteHandler<
  typeof postV1HistoryDownloadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1SoundGenerationRouteHandler: RouteHandler<
  typeof postV1SoundGenerationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1AudioIsolationRouteHandler: RouteHandler<
  typeof postV1AudioIsolationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AudioIsolationHistoryRouteHandler: RouteHandler<
  typeof getV1AudioIsolationHistoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1AudioIsolationHistoryHistoryItemIdRouteHandler: RouteHandler<
  typeof deleteV1AudioIsolationHistoryHistoryItemIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1AudioIsolationStreamRouteHandler: RouteHandler<
  typeof postV1AudioIsolationStreamRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AudioEffectsCatalogRouteHandler: RouteHandler<
  typeof getV1AudioEffectsCatalogRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1VoicesVoiceIdSamplesSampleIdRouteHandler: RouteHandler<
  typeof deleteV1VoicesVoiceIdSamplesSampleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1VoicesVoiceIdSamplesSampleIdAudioRouteHandler: RouteHandler<
  typeof getV1VoicesVoiceIdSamplesSampleIdAudioRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1TextToSpeechVoiceIdRouteHandler: RouteHandler<
  typeof postV1TextToSpeechVoiceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1TextToSpeechVoiceIdWithTimestampsRouteHandler: RouteHandler<
  typeof postV1TextToSpeechVoiceIdWithTimestampsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1TextToSpeechVoiceIdStreamRouteHandler: RouteHandler<
  typeof postV1TextToSpeechVoiceIdStreamRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1TextToSpeechVoiceIdStreamWithTimestampsRouteHandler: RouteHandler<
  typeof postV1TextToSpeechVoiceIdStreamWithTimestampsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1TextToDialogueRouteHandler: RouteHandler<
  typeof postV1TextToDialogueRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1TextToDialogueStreamRouteHandler: RouteHandler<
  typeof postV1TextToDialogueStreamRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1TextToDialogueStreamWithTimestampsRouteHandler: RouteHandler<
  typeof postV1TextToDialogueStreamWithTimestampsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1TextToDialogueWithTimestampsRouteHandler: RouteHandler<
  typeof postV1TextToDialogueWithTimestampsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1VoiceChangerVoiceIdRouteHandler: RouteHandler<
  typeof postV1VoiceChangerVoiceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1VoiceChangerVoiceIdStreamRouteHandler: RouteHandler<
  typeof postV1VoiceChangerVoiceIdStreamRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1TextToVoiceCreatePreviewsRouteHandler: RouteHandler<
  typeof postV1TextToVoiceCreatePreviewsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1TextToVoiceRouteHandler: RouteHandler<typeof postV1TextToVoiceRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1TextToVoiceDesignRouteHandler: RouteHandler<
  typeof postV1TextToVoiceDesignRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1TextToVoiceVoiceIdRemixRouteHandler: RouteHandler<
  typeof postV1TextToVoiceVoiceIdRemixRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1TextToVoiceGeneratedVoiceIdStreamRouteHandler: RouteHandler<
  typeof getV1TextToVoiceGeneratedVoiceIdStreamRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1UserRouteHandler: RouteHandler<typeof getV1UserRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1UserSubscriptionRouteHandler: RouteHandler<
  typeof getV1UserSubscriptionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1VoicesCollectionsRouteHandler: RouteHandler<
  typeof getV1VoicesCollectionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1VoicesCollectionsRouteHandler: RouteHandler<
  typeof postV1VoicesCollectionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1VoicesCollectionsCollectionIdRouteHandler: RouteHandler<
  typeof getV1VoicesCollectionsCollectionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1VoicesCollectionsCollectionIdRouteHandler: RouteHandler<
  typeof patchV1VoicesCollectionsCollectionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1VoicesCollectionsCollectionIdRouteHandler: RouteHandler<
  typeof deleteV1VoicesCollectionsCollectionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1VoicesCollectionsCollectionIdVoiceVoiceIdRouteHandler: RouteHandler<
  typeof postV1VoicesCollectionsCollectionIdVoiceVoiceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1VoicesCollectionsCollectionIdVoiceVoiceIdRouteHandler: RouteHandler<
  typeof deleteV1VoicesCollectionsCollectionIdVoiceVoiceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1VoicesSettingsDefaultRouteHandler: RouteHandler<
  typeof getV1VoicesSettingsDefaultRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1VoicesVoiceIdSettingsRouteHandler: RouteHandler<
  typeof getV1VoicesVoiceIdSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1VoicesVoiceIdSettingsEditRouteHandler: RouteHandler<
  typeof postV1VoicesVoiceIdSettingsEditRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1VoicesAccentsRouteHandler: RouteHandler<typeof getV1VoicesAccentsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1VoicesRouteHandler: RouteHandler<typeof getV1VoicesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1VoicesVoiceIdRouteHandler: RouteHandler<typeof getV1VoicesVoiceIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteV1VoicesVoiceIdRouteHandler: RouteHandler<
  typeof deleteV1VoicesVoiceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1VoicesVoiceIdEditRouteHandler: RouteHandler<
  typeof postV1VoicesVoiceIdEditRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1VoicesVoiceIdReplicateToIsolatedEnvironmentRouteHandler: RouteHandler<
  typeof postV1VoicesVoiceIdReplicateToIsolatedEnvironmentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1VoicesAddRouteHandler: RouteHandler<typeof postV1VoicesAddRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1VoicesAddPublicUserIdVoiceIdRouteHandler: RouteHandler<
  typeof postV1VoicesAddPublicUserIdVoiceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1StudioPodcastsRouteHandler: RouteHandler<
  typeof postV1StudioPodcastsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1StudioProjectsProjectIdPronunciationDictionariesRouteHandler: RouteHandler<
  typeof postV1StudioProjectsProjectIdPronunciationDictionariesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1StudioProjectsRouteHandler: RouteHandler<
  typeof getV1StudioProjectsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1StudioProjectsRouteHandler: RouteHandler<
  typeof postV1StudioProjectsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1StudioProjectsProjectIdRouteHandler: RouteHandler<
  typeof postV1StudioProjectsProjectIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1StudioProjectsProjectIdRouteHandler: RouteHandler<
  typeof getV1StudioProjectsProjectIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1StudioProjectsProjectIdRouteHandler: RouteHandler<
  typeof deleteV1StudioProjectsProjectIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1StudioProjectsProjectIdContentRouteHandler: RouteHandler<
  typeof postV1StudioProjectsProjectIdContentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1StudioProjectsProjectIdConvertRouteHandler: RouteHandler<
  typeof postV1StudioProjectsProjectIdConvertRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1StudioProjectsProjectIdSnapshotsRouteHandler: RouteHandler<
  typeof getV1StudioProjectsProjectIdSnapshotsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1StudioProjectsProjectIdSnapshotsProjectSnapshotIdRouteHandler: RouteHandler<
  typeof getV1StudioProjectsProjectIdSnapshotsProjectSnapshotIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1StudioProjectsProjectIdSnapshotsProjectSnapshotIdStreamRouteHandler: RouteHandler<
  typeof postV1StudioProjectsProjectIdSnapshotsProjectSnapshotIdStreamRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1StudioProjectsProjectIdSnapshotsProjectSnapshotIdArchiveRouteHandler: RouteHandler<
  typeof postV1StudioProjectsProjectIdSnapshotsProjectSnapshotIdArchiveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1StudioProjectsProjectIdChaptersRouteHandler: RouteHandler<
  typeof getV1StudioProjectsProjectIdChaptersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1StudioProjectsProjectIdChaptersRouteHandler: RouteHandler<
  typeof postV1StudioProjectsProjectIdChaptersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1StudioProjectsProjectIdChaptersChapterIdRouteHandler: RouteHandler<
  typeof getV1StudioProjectsProjectIdChaptersChapterIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1StudioProjectsProjectIdChaptersChapterIdRouteHandler: RouteHandler<
  typeof postV1StudioProjectsProjectIdChaptersChapterIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1StudioProjectsProjectIdChaptersChapterIdRouteHandler: RouteHandler<
  typeof deleteV1StudioProjectsProjectIdChaptersChapterIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1StudioProjectsProjectIdChaptersChapterIdConvertRouteHandler: RouteHandler<
  typeof postV1StudioProjectsProjectIdChaptersChapterIdConvertRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1StudioProjectsProjectIdChaptersChapterIdSnapshotsRouteHandler: RouteHandler<
  typeof getV1StudioProjectsProjectIdChaptersChapterIdSnapshotsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1StudioProjectsProjectIdChaptersChapterIdSnapshotsChapterSnapshotIdRouteHandler: RouteHandler<
  typeof getV1StudioProjectsProjectIdChaptersChapterIdSnapshotsChapterSnapshotIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1StudioProjectsProjectIdChaptersChapterIdSnapshotsChapterSnapshotIdStreamRouteHandler: RouteHandler<
  typeof postV1StudioProjectsProjectIdChaptersChapterIdSnapshotsChapterSnapshotIdStreamRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1StudioProjectsProjectIdMutedTracksRouteHandler: RouteHandler<
  typeof getV1StudioProjectsProjectIdMutedTracksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1AudioNativeRouteHandler: RouteHandler<typeof postV1AudioNativeRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1AudioNativeProjectIdSettingsRouteHandler: RouteHandler<
  typeof getV1AudioNativeProjectIdSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1AudioNativeProjectIdContentRouteHandler: RouteHandler<
  typeof postV1AudioNativeProjectIdContentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1AudioNativeContentRouteHandler: RouteHandler<
  typeof postV1AudioNativeContentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1DubbingProjectRouteHandler: RouteHandler<
  typeof postV1DubbingProjectRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1DubbingProjectRouteHandler: RouteHandler<
  typeof getV1DubbingProjectRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1DubbingProjectProjectIdRouteHandler: RouteHandler<
  typeof getV1DubbingProjectProjectIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1DubbingProjectProjectIdRouteHandler: RouteHandler<
  typeof deleteV1DubbingProjectProjectIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1DubbingProjectProjectIdLanguageRouteHandler: RouteHandler<
  typeof postV1DubbingProjectProjectIdLanguageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1DubbingProjectProjectIdLanguageRouteHandler: RouteHandler<
  typeof getV1DubbingProjectProjectIdLanguageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1DubbingProjectProjectIdLanguageLanguageIdRouteHandler: RouteHandler<
  typeof getV1DubbingProjectProjectIdLanguageLanguageIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1DubbingProjectProjectIdLanguageLanguageIdRouteHandler: RouteHandler<
  typeof deleteV1DubbingProjectProjectIdLanguageLanguageIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1DubbingProjectProjectIdTranscriptRouteHandler: RouteHandler<
  typeof getV1DubbingProjectProjectIdTranscriptRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1DubbingProjectProjectIdTranscriptSegmentSegmentIdRouteHandler: RouteHandler<
  typeof patchV1DubbingProjectProjectIdTranscriptSegmentSegmentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1DubbingProjectProjectIdTranscriptSegmentSegmentIdRouteHandler: RouteHandler<
  typeof deleteV1DubbingProjectProjectIdTranscriptSegmentSegmentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1DubbingProjectProjectIdTranscriptSegmentsRouteHandler: RouteHandler<
  typeof patchV1DubbingProjectProjectIdTranscriptSegmentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1DubbingProjectProjectIdTranscriptSegmentRouteHandler: RouteHandler<
  typeof postV1DubbingProjectProjectIdTranscriptSegmentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1DubbingProjectProjectIdLanguageLanguageIdTranscriptRouteHandler: RouteHandler<
  typeof getV1DubbingProjectProjectIdLanguageLanguageIdTranscriptRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1DubbingProjectProjectIdLanguageLanguageIdTranscriptSegmentSegmentIdRouteHandler: RouteHandler<
  typeof patchV1DubbingProjectProjectIdLanguageLanguageIdTranscriptSegmentSegmentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1DubbingProjectProjectIdLanguageLanguageIdTranscriptSegmentsRouteHandler: RouteHandler<
  typeof patchV1DubbingProjectProjectIdLanguageLanguageIdTranscriptSegmentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1DubbingProjectProjectIdLanguageLanguageIdTranscriptRegenerateRouteHandler: RouteHandler<
  typeof postV1DubbingProjectProjectIdLanguageLanguageIdTranscriptRegenerateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1DubbingResourceDubbingIdRouteHandler: RouteHandler<
  typeof getV1DubbingResourceDubbingIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1DubbingResourceDubbingIdLanguageRouteHandler: RouteHandler<
  typeof postV1DubbingResourceDubbingIdLanguageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1DubbingResourceDubbingIdSpeakerSpeakerIdSegmentRouteHandler: RouteHandler<
  typeof postV1DubbingResourceDubbingIdSpeakerSpeakerIdSegmentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1DubbingResourceDubbingIdSegmentSegmentIdLanguageRouteHandler: RouteHandler<
  typeof patchV1DubbingResourceDubbingIdSegmentSegmentIdLanguageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1DubbingResourceDubbingIdMigrateSegmentsRouteHandler: RouteHandler<
  typeof postV1DubbingResourceDubbingIdMigrateSegmentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1DubbingResourceDubbingIdSegmentSegmentIdRouteHandler: RouteHandler<
  typeof deleteV1DubbingResourceDubbingIdSegmentSegmentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1DubbingResourceDubbingIdTranscribeRouteHandler: RouteHandler<
  typeof postV1DubbingResourceDubbingIdTranscribeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1DubbingResourceDubbingIdTranslateRouteHandler: RouteHandler<
  typeof postV1DubbingResourceDubbingIdTranslateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1DubbingResourceDubbingIdDubRouteHandler: RouteHandler<
  typeof postV1DubbingResourceDubbingIdDubRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1DubbingResourceDubbingIdSpeakerSpeakerIdRouteHandler: RouteHandler<
  typeof patchV1DubbingResourceDubbingIdSpeakerSpeakerIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1DubbingResourceDubbingIdSpeakerRouteHandler: RouteHandler<
  typeof postV1DubbingResourceDubbingIdSpeakerRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1DubbingResourceDubbingIdSpeakerSpeakerIdSimilarVoicesRouteHandler: RouteHandler<
  typeof getV1DubbingResourceDubbingIdSpeakerSpeakerIdSimilarVoicesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1DubbingResourceDubbingIdRenderLanguageRouteHandler: RouteHandler<
  typeof postV1DubbingResourceDubbingIdRenderLanguageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1DubbingRouteHandler: RouteHandler<typeof getV1DubbingRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1DubbingRouteHandler: RouteHandler<typeof postV1DubbingRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1DubbingDubbingIdRouteHandler: RouteHandler<
  typeof getV1DubbingDubbingIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1DubbingDubbingIdRouteHandler: RouteHandler<
  typeof deleteV1DubbingDubbingIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1DubbingDubbingIdAudioLanguageCodeRouteHandler: RouteHandler<
  typeof getV1DubbingDubbingIdAudioLanguageCodeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1DubbingDubbingIdTranscriptLanguageCodeRouteHandler: RouteHandler<
  typeof getV1DubbingDubbingIdTranscriptLanguageCodeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1DubbingDubbingIdTranscriptsLanguageCodeFormatFormatTypeRouteHandler: RouteHandler<
  typeof getV1DubbingDubbingIdTranscriptsLanguageCodeFormatFormatTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ModelsRouteHandler: RouteHandler<typeof getV1ModelsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ContentProvenanceWatermarkRouteHandler: RouteHandler<
  typeof postV1ContentProvenanceWatermarkRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1SimilarVoicesRouteHandler: RouteHandler<
  typeof postV1SimilarVoicesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1SharedVoicesRouteHandler: RouteHandler<typeof getV1SharedVoicesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1UsageCharacterStatsRouteHandler: RouteHandler<
  typeof getV1UsageCharacterStatsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PronunciationDictionariesAddFromFileRouteHandler: RouteHandler<
  typeof postV1PronunciationDictionariesAddFromFileRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PronunciationDictionariesAddFromRulesRouteHandler: RouteHandler<
  typeof postV1PronunciationDictionariesAddFromRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1PronunciationDictionariesPronunciationDictionaryIdRouteHandler: RouteHandler<
  typeof patchV1PronunciationDictionariesPronunciationDictionaryIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1PronunciationDictionariesPronunciationDictionaryIdRouteHandler: RouteHandler<
  typeof getV1PronunciationDictionariesPronunciationDictionaryIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PronunciationDictionariesPronunciationDictionaryIdSetRulesRouteHandler: RouteHandler<
  typeof postV1PronunciationDictionariesPronunciationDictionaryIdSetRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PronunciationDictionariesPronunciationDictionaryIdAddRulesRouteHandler: RouteHandler<
  typeof postV1PronunciationDictionariesPronunciationDictionaryIdAddRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PronunciationDictionariesPronunciationDictionaryIdRemoveRulesRouteHandler: RouteHandler<
  typeof postV1PronunciationDictionariesPronunciationDictionaryIdRemoveRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1PronunciationDictionariesDictionaryIdVersionIdDownloadRouteHandler: RouteHandler<
  typeof getV1PronunciationDictionariesDictionaryIdVersionIdDownloadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1PronunciationDictionariesRouteHandler: RouteHandler<
  typeof getV1PronunciationDictionariesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1WorkspacesApiKeysDisableRouteHandler: RouteHandler<
  typeof postV1WorkspacesApiKeysDisableRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1WorkspacesApiKeysThirdPartyDisablingRouteHandler: RouteHandler<
  typeof postV1WorkspacesApiKeysThirdPartyDisablingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ServiceAccountsServiceAccountUserIdApiKeysRouteHandler: RouteHandler<
  typeof getV1ServiceAccountsServiceAccountUserIdApiKeysRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ServiceAccountsServiceAccountUserIdApiKeysRouteHandler: RouteHandler<
  typeof postV1ServiceAccountsServiceAccountUserIdApiKeysRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1ServiceAccountsServiceAccountUserIdApiKeysApiKeyIdRouteHandler: RouteHandler<
  typeof patchV1ServiceAccountsServiceAccountUserIdApiKeysApiKeyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1ServiceAccountsServiceAccountUserIdApiKeysApiKeyIdRouteHandler: RouteHandler<
  typeof deleteV1ServiceAccountsServiceAccountUserIdApiKeysApiKeyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ServiceAccountsServiceAccountUserIdApiKeysApiKeyIdDisableRouteHandler: RouteHandler<
  typeof postV1ServiceAccountsServiceAccountUserIdApiKeysApiKeyIdDisableRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1WorkspaceAuditLogsRouteHandler: RouteHandler<
  typeof getV1WorkspaceAuditLogsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1WorkspaceAuthConnectionsRouteHandler: RouteHandler<
  typeof postV1WorkspaceAuthConnectionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1WorkspaceAuthConnectionsRouteHandler: RouteHandler<
  typeof getV1WorkspaceAuthConnectionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1WorkspaceAuthConnectionsAuthConnectionIdRouteHandler: RouteHandler<
  typeof patchV1WorkspaceAuthConnectionsAuthConnectionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1WorkspaceAuthConnectionsAuthConnectionIdRouteHandler: RouteHandler<
  typeof deleteV1WorkspaceAuthConnectionsAuthConnectionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ServiceAccountsRouteHandler: RouteHandler<
  typeof getV1ServiceAccountsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ServiceAccountsRouteHandler: RouteHandler<
  typeof postV1ServiceAccountsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1WorkspaceGroupsRouteHandler: RouteHandler<
  typeof getV1WorkspaceGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1WorkspaceGroupsSearchRouteHandler: RouteHandler<
  typeof getV1WorkspaceGroupsSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1WorkspaceGroupsGroupIdMembersRemoveRouteHandler: RouteHandler<
  typeof postV1WorkspaceGroupsGroupIdMembersRemoveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1WorkspaceGroupsGroupIdMembersRouteHandler: RouteHandler<
  typeof postV1WorkspaceGroupsGroupIdMembersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1WorkspaceInvitesAddRouteHandler: RouteHandler<
  typeof postV1WorkspaceInvitesAddRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1WorkspaceInvitesAddBulkRouteHandler: RouteHandler<
  typeof postV1WorkspaceInvitesAddBulkRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1WorkspaceInvitesRouteHandler: RouteHandler<
  typeof deleteV1WorkspaceInvitesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1WorkspaceMembersRouteHandler: RouteHandler<
  typeof getV1WorkspaceMembersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1WorkspaceMembersRouteHandler: RouteHandler<
  typeof postV1WorkspaceMembersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1WorkspaceMembersUserIdUsageLimitRouteHandler: RouteHandler<
  typeof putV1WorkspaceMembersUserIdUsageLimitRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1WorkspaceResourcesResourceIdRouteHandler: RouteHandler<
  typeof getV1WorkspaceResourcesResourceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1WorkspaceResourcesResourceIdShareRouteHandler: RouteHandler<
  typeof postV1WorkspaceResourcesResourceIdShareRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1WorkspaceResourcesResourceIdUnshareRouteHandler: RouteHandler<
  typeof postV1WorkspaceResourcesResourceIdUnshareRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1WorkspaceWebhooksRouteHandler: RouteHandler<
  typeof getV1WorkspaceWebhooksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1WorkspaceWebhooksRouteHandler: RouteHandler<
  typeof postV1WorkspaceWebhooksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1WorkspaceWebhooksWebhookIdRouteHandler: RouteHandler<
  typeof patchV1WorkspaceWebhooksWebhookIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1WorkspaceWebhooksWebhookIdRouteHandler: RouteHandler<
  typeof deleteV1WorkspaceWebhooksWebhookIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1MusicVideoToMusicRouteHandler: RouteHandler<
  typeof postV1MusicVideoToMusicRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1SpeechToTextRouteHandler: RouteHandler<typeof postV1SpeechToTextRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1SpeechToTextTranscriptsTranscriptionIdRouteHandler: RouteHandler<
  typeof getV1SpeechToTextTranscriptsTranscriptionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1SpeechToTextTranscriptsTranscriptionIdRouteHandler: RouteHandler<
  typeof deleteV1SpeechToTextTranscriptsTranscriptionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1SingleUseTokenTokenTypeRouteHandler: RouteHandler<
  typeof postV1SingleUseTokenTokenTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ForcedAlignmentRouteHandler: RouteHandler<
  typeof postV1ForcedAlignmentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ConvaiConversationGetSignedUrlRouteHandler: RouteHandler<
  typeof getV1ConvaiConversationGetSignedUrlRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ConvaiConversationGetSignedUrl2RouteHandler: RouteHandler<
  typeof getV1ConvaiConversationGetSignedUrl2Route
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ConvaiConversationTokenRouteHandler: RouteHandler<
  typeof getV1ConvaiConversationTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConvaiTwilioOutboundCallRouteHandler: RouteHandler<
  typeof postV1ConvaiTwilioOutboundCallRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConvaiTwilioRegisterCallRouteHandler: RouteHandler<
  typeof postV1ConvaiTwilioRegisterCallRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConvaiExotelOutboundCallRouteHandler: RouteHandler<
  typeof postV1ConvaiExotelOutboundCallRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConvaiWhatsappOutboundCallRouteHandler: RouteHandler<
  typeof postV1ConvaiWhatsappOutboundCallRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConvaiWhatsappOutboundMessageRouteHandler: RouteHandler<
  typeof postV1ConvaiWhatsappOutboundMessageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConvaiAgentsCreateRouteHandler: RouteHandler<
  typeof postV1ConvaiAgentsCreateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ConvaiAgentsSummariesRouteHandler: RouteHandler<
  typeof getV1ConvaiAgentsSummariesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ConvaiAgentsAgentIdRouteHandler: RouteHandler<
  typeof getV1ConvaiAgentsAgentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1ConvaiAgentsAgentIdRouteHandler: RouteHandler<
  typeof patchV1ConvaiAgentsAgentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1ConvaiAgentsAgentIdRouteHandler: RouteHandler<
  typeof deleteV1ConvaiAgentsAgentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ConvaiAgentsAgentIdSubagentDependentsRouteHandler: RouteHandler<
  typeof getV1ConvaiAgentsAgentIdSubagentDependentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ConvaiAgentsAgentIdWidgetRouteHandler: RouteHandler<
  typeof getV1ConvaiAgentsAgentIdWidgetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ConvaiAgentsAgentIdLinkRouteHandler: RouteHandler<
  typeof getV1ConvaiAgentsAgentIdLinkRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConvaiAgentsAgentIdAvatarRouteHandler: RouteHandler<
  typeof postV1ConvaiAgentsAgentIdAvatarRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConvaiAgentsAgentIdHoldAudioRouteHandler: RouteHandler<
  typeof postV1ConvaiAgentsAgentIdHoldAudioRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1ConvaiAgentsAgentIdHoldAudioRouteHandler: RouteHandler<
  typeof deleteV1ConvaiAgentsAgentIdHoldAudioRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ConvaiAgentsRouteHandler: RouteHandler<typeof getV1ConvaiAgentsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1ConvaiAgentAgentIdKnowledgeBaseSizeRouteHandler: RouteHandler<
  typeof getV1ConvaiAgentAgentIdKnowledgeBaseSizeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConvaiAgentAgentIdLlmUsageCalculateRouteHandler: RouteHandler<
  typeof postV1ConvaiAgentAgentIdLlmUsageCalculateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConvaiAgentsAgentIdDuplicateRouteHandler: RouteHandler<
  typeof postV1ConvaiAgentsAgentIdDuplicateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConvaiAgentsAgentIdSimulateConversationRouteHandler: RouteHandler<
  typeof postV1ConvaiAgentsAgentIdSimulateConversationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConvaiAgentsAgentIdSimulateConversationStreamRouteHandler: RouteHandler<
  typeof postV1ConvaiAgentsAgentIdSimulateConversationStreamRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConvaiAgentTestingCreateRouteHandler: RouteHandler<
  typeof postV1ConvaiAgentTestingCreateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConvaiAgentTestingFoldersRouteHandler: RouteHandler<
  typeof postV1ConvaiAgentTestingFoldersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ConvaiAgentTestingFoldersFolderIdRouteHandler: RouteHandler<
  typeof getV1ConvaiAgentTestingFoldersFolderIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1ConvaiAgentTestingFoldersFolderIdRouteHandler: RouteHandler<
  typeof patchV1ConvaiAgentTestingFoldersFolderIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1ConvaiAgentTestingFoldersFolderIdRouteHandler: RouteHandler<
  typeof deleteV1ConvaiAgentTestingFoldersFolderIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConvaiAgentTestingBulkMoveRouteHandler: RouteHandler<
  typeof postV1ConvaiAgentTestingBulkMoveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ConvaiAgentTestingTestIdRouteHandler: RouteHandler<
  typeof getV1ConvaiAgentTestingTestIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1ConvaiAgentTestingTestIdRouteHandler: RouteHandler<
  typeof putV1ConvaiAgentTestingTestIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1ConvaiAgentTestingTestIdRouteHandler: RouteHandler<
  typeof deleteV1ConvaiAgentTestingTestIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConvaiAgentTestingSummariesRouteHandler: RouteHandler<
  typeof postV1ConvaiAgentTestingSummariesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ConvaiAgentTestingRouteHandler: RouteHandler<
  typeof getV1ConvaiAgentTestingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ConvaiTestInvocationsRouteHandler: RouteHandler<
  typeof getV1ConvaiTestInvocationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConvaiAgentsAgentIdRunTestsRouteHandler: RouteHandler<
  typeof postV1ConvaiAgentsAgentIdRunTestsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ConvaiTestInvocationsTestInvocationIdRouteHandler: RouteHandler<
  typeof getV1ConvaiTestInvocationsTestInvocationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1ConvaiTestInvocationsTestInvocationIdRouteHandler: RouteHandler<
  typeof patchV1ConvaiTestInvocationsTestInvocationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConvaiTestInvocationsTestInvocationIdCancelRouteHandler: RouteHandler<
  typeof postV1ConvaiTestInvocationsTestInvocationIdCancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConvaiTestInvocationsTestInvocationIdResubmitRouteHandler: RouteHandler<
  typeof postV1ConvaiTestInvocationsTestInvocationIdResubmitRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ConvaiConversationsRouteHandler: RouteHandler<
  typeof getV1ConvaiConversationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConvaiConversationsRouteHandler: RouteHandler<
  typeof postV1ConvaiConversationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ConvaiUsersRouteHandler: RouteHandler<typeof getV1ConvaiUsersRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1ConvaiConversationsResolveRouteHandler: RouteHandler<
  typeof getV1ConvaiConversationsResolveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ConvaiConversationsConversationIdRouteHandler: RouteHandler<
  typeof getV1ConvaiConversationsConversationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1ConvaiConversationsConversationIdRouteHandler: RouteHandler<
  typeof deleteV1ConvaiConversationsConversationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ConvaiConversationsConversationIdSummaryRouteHandler: RouteHandler<
  typeof getV1ConvaiConversationsConversationIdSummaryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ConvaiConversationsConversationIdSipMessagesRouteHandler: RouteHandler<
  typeof getV1ConvaiConversationsConversationIdSipMessagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ConvaiConversationsConversationIdAudioRouteHandler: RouteHandler<
  typeof getV1ConvaiConversationsConversationIdAudioRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ConvaiConversationsConversationIdFilesFileIdRouteHandler: RouteHandler<
  typeof getV1ConvaiConversationsConversationIdFilesFileIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1ConvaiConversationsConversationIdFilesFileIdRouteHandler: RouteHandler<
  typeof deleteV1ConvaiConversationsConversationIdFilesFileIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConvaiConversationsConversationIdFeedbackRouteHandler: RouteHandler<
  typeof postV1ConvaiConversationsConversationIdFeedbackRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ConvaiConversationsMessagesTextSearchRouteHandler: RouteHandler<
  typeof getV1ConvaiConversationsMessagesTextSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ConvaiConversationsMessagesSmartSearchRouteHandler: RouteHandler<
  typeof getV1ConvaiConversationsMessagesSmartSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConvaiConversationsConversationIdTagsRouteHandler: RouteHandler<
  typeof postV1ConvaiConversationsConversationIdTagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1ConvaiConversationsConversationIdTagsTagIdRouteHandler: RouteHandler<
  typeof deleteV1ConvaiConversationsConversationIdTagsTagIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ConvaiTagsRouteHandler: RouteHandler<typeof getV1ConvaiTagsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConvaiTagsRouteHandler: RouteHandler<typeof postV1ConvaiTagsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1ConvaiTagsTagIdRouteHandler: RouteHandler<
  typeof getV1ConvaiTagsTagIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1ConvaiTagsTagIdRouteHandler: RouteHandler<
  typeof patchV1ConvaiTagsTagIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1ConvaiTagsTagIdRouteHandler: RouteHandler<
  typeof deleteV1ConvaiTagsTagIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ConvaiAgentsAgentIdTriageTicketsRouteHandler: RouteHandler<
  typeof getV1ConvaiAgentsAgentIdTriageTicketsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConvaiAgentsAgentIdTriageTicketsRouteHandler: RouteHandler<
  typeof postV1ConvaiAgentsAgentIdTriageTicketsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ConvaiTriageTicketsRouteHandler: RouteHandler<
  typeof getV1ConvaiTriageTicketsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConvaiTriageTicketsRouteHandler: RouteHandler<
  typeof postV1ConvaiTriageTicketsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ConvaiAgentsAgentIdTriageTicketsAssignableUsersRouteHandler: RouteHandler<
  typeof getV1ConvaiAgentsAgentIdTriageTicketsAssignableUsersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ConvaiTriageTicketsAgentqaTicketIdRouteHandler: RouteHandler<
  typeof getV1ConvaiTriageTicketsAgentqaTicketIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1ConvaiTriageTicketsAgentqaTicketIdRouteHandler: RouteHandler<
  typeof patchV1ConvaiTriageTicketsAgentqaTicketIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1ConvaiTriageTicketsAgentqaTicketIdRouteHandler: RouteHandler<
  typeof deleteV1ConvaiTriageTicketsAgentqaTicketIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConvaiTriageTicketsAgentqaTicketIdCommentsRouteHandler: RouteHandler<
  typeof postV1ConvaiTriageTicketsAgentqaTicketIdCommentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConvaiTriageTicketsAgentqaTicketIdMergeRouteHandler: RouteHandler<
  typeof postV1ConvaiTriageTicketsAgentqaTicketIdMergeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConvaiTriageTicketsAgentqaTicketIdTurnCommentsRouteHandler: RouteHandler<
  typeof postV1ConvaiTriageTicketsAgentqaTicketIdTurnCommentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConvaiPhoneNumbersRouteHandler: RouteHandler<
  typeof postV1ConvaiPhoneNumbersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ConvaiPhoneNumbersRouteHandler: RouteHandler<
  typeof getV1ConvaiPhoneNumbersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ConvaiPhoneNumbersPhoneNumberIdRouteHandler: RouteHandler<
  typeof getV1ConvaiPhoneNumbersPhoneNumberIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1ConvaiPhoneNumbersPhoneNumberIdRouteHandler: RouteHandler<
  typeof deleteV1ConvaiPhoneNumbersPhoneNumberIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1ConvaiPhoneNumbersPhoneNumberIdRouteHandler: RouteHandler<
  typeof patchV1ConvaiPhoneNumbersPhoneNumberIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ConvaiV2PhoneNumbersRouteHandler: RouteHandler<
  typeof getV1ConvaiV2PhoneNumbersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ConvaiPhoneNumbersPhoneNumberIdSipMessagesRouteHandler: RouteHandler<
  typeof getV1ConvaiPhoneNumbersPhoneNumberIdSipMessagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConvaiLlmUsageCalculateRouteHandler: RouteHandler<
  typeof postV1ConvaiLlmUsageCalculateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ConvaiLlmListRouteHandler: RouteHandler<typeof getV1ConvaiLlmListRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1ConvaiConversationsConversationIdFilesRouteHandler: RouteHandler<
  typeof postV1ConvaiConversationsConversationIdFilesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ConvaiAnalyticsLiveCountRouteHandler: RouteHandler<
  typeof getV1ConvaiAnalyticsLiveCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ConvaiKnowledgeBaseSummariesRouteHandler: RouteHandler<
  typeof getV1ConvaiKnowledgeBaseSummariesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConvaiKnowledgeBaseRouteHandler: RouteHandler<
  typeof postV1ConvaiKnowledgeBaseRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ConvaiKnowledgeBaseRouteHandler: RouteHandler<
  typeof getV1ConvaiKnowledgeBaseRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConvaiKnowledgeBaseUrlRouteHandler: RouteHandler<
  typeof postV1ConvaiKnowledgeBaseUrlRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConvaiKnowledgeBaseCrawlRouteHandler: RouteHandler<
  typeof postV1ConvaiKnowledgeBaseCrawlRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ConvaiKnowledgeBaseCrawlRouteHandler: RouteHandler<
  typeof getV1ConvaiKnowledgeBaseCrawlRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ConvaiKnowledgeBaseCrawlCrawlJobIdRouteHandler: RouteHandler<
  typeof getV1ConvaiKnowledgeBaseCrawlCrawlJobIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConvaiKnowledgeBaseCrawlCrawlJobIdCancelRouteHandler: RouteHandler<
  typeof postV1ConvaiKnowledgeBaseCrawlCrawlJobIdCancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConvaiKnowledgeBaseFileRouteHandler: RouteHandler<
  typeof postV1ConvaiKnowledgeBaseFileRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConvaiKnowledgeBaseTextRouteHandler: RouteHandler<
  typeof postV1ConvaiKnowledgeBaseTextRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConvaiKnowledgeBaseFolderRouteHandler: RouteHandler<
  typeof postV1ConvaiKnowledgeBaseFolderRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1ConvaiKnowledgeBaseDocumentationIdRouteHandler: RouteHandler<
  typeof patchV1ConvaiKnowledgeBaseDocumentationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ConvaiKnowledgeBaseDocumentationIdRouteHandler: RouteHandler<
  typeof getV1ConvaiKnowledgeBaseDocumentationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1ConvaiKnowledgeBaseDocumentationIdRouteHandler: RouteHandler<
  typeof deleteV1ConvaiKnowledgeBaseDocumentationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ConvaiKnowledgeBaseDocumentationIdChunkingOverrideRouteHandler: RouteHandler<
  typeof getV1ConvaiKnowledgeBaseDocumentationIdChunkingOverrideRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1ConvaiKnowledgeBaseDocumentationIdChunkingOverrideRouteHandler: RouteHandler<
  typeof patchV1ConvaiKnowledgeBaseDocumentationIdChunkingOverrideRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1ConvaiKnowledgeBaseDocumentationIdUpdateFileRouteHandler: RouteHandler<
  typeof patchV1ConvaiKnowledgeBaseDocumentationIdUpdateFileRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConvaiKnowledgeBaseRagIndexRouteHandler: RouteHandler<
  typeof postV1ConvaiKnowledgeBaseRagIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ConvaiKnowledgeBaseRagIndexRouteHandler: RouteHandler<
  typeof getV1ConvaiKnowledgeBaseRagIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConvaiKnowledgeBaseDocumentationIdRefreshRouteHandler: RouteHandler<
  typeof postV1ConvaiKnowledgeBaseDocumentationIdRefreshRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConvaiKnowledgeBaseDocumentationIdRagIndexRouteHandler: RouteHandler<
  typeof postV1ConvaiKnowledgeBaseDocumentationIdRagIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ConvaiKnowledgeBaseDocumentationIdRagIndexRouteHandler: RouteHandler<
  typeof getV1ConvaiKnowledgeBaseDocumentationIdRagIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1ConvaiKnowledgeBaseDocumentationIdRagIndexRagIndexIdRouteHandler: RouteHandler<
  typeof deleteV1ConvaiKnowledgeBaseDocumentationIdRagIndexRagIndexIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ConvaiKnowledgeBaseSearchRouteHandler: RouteHandler<
  typeof getV1ConvaiKnowledgeBaseSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConvaiAgentsAgentIdKnowledgeBaseRagQueryRouteHandler: RouteHandler<
  typeof postV1ConvaiAgentsAgentIdKnowledgeBaseRagQueryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ConvaiKnowledgeBaseDocumentationIdDependentAgentsRouteHandler: RouteHandler<
  typeof getV1ConvaiKnowledgeBaseDocumentationIdDependentAgentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConvaiKnowledgeBaseDependentAgentsRouteHandler: RouteHandler<
  typeof postV1ConvaiKnowledgeBaseDependentAgentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ConvaiKnowledgeBaseDocumentationIdContentRouteHandler: RouteHandler<
  typeof getV1ConvaiKnowledgeBaseDocumentationIdContentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ConvaiKnowledgeBaseDocumentationIdSourceFileUrlRouteHandler: RouteHandler<
  typeof getV1ConvaiKnowledgeBaseDocumentationIdSourceFileUrlRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ConvaiKnowledgeBaseDocumentationIdChunkChunkIdRouteHandler: RouteHandler<
  typeof getV1ConvaiKnowledgeBaseDocumentationIdChunkChunkIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ConvaiKnowledgeBaseDocumentationIdChunksRouteHandler: RouteHandler<
  typeof getV1ConvaiKnowledgeBaseDocumentationIdChunksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConvaiKnowledgeBaseDocumentIdMoveRouteHandler: RouteHandler<
  typeof postV1ConvaiKnowledgeBaseDocumentIdMoveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConvaiKnowledgeBaseBulkMoveRouteHandler: RouteHandler<
  typeof postV1ConvaiKnowledgeBaseBulkMoveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConvaiKnowledgeBaseBulkDeleteRouteHandler: RouteHandler<
  typeof postV1ConvaiKnowledgeBaseBulkDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ConvaiAgentsAgentIdTopicsRouteHandler: RouteHandler<
  typeof getV1ConvaiAgentsAgentIdTopicsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConvaiToolsRouteHandler: RouteHandler<typeof postV1ConvaiToolsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1ConvaiToolsRouteHandler: RouteHandler<typeof getV1ConvaiToolsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1ConvaiToolsToolIdRouteHandler: RouteHandler<
  typeof getV1ConvaiToolsToolIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1ConvaiToolsToolIdRouteHandler: RouteHandler<
  typeof patchV1ConvaiToolsToolIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1ConvaiToolsToolIdRouteHandler: RouteHandler<
  typeof deleteV1ConvaiToolsToolIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ConvaiToolsToolIdDependentAgentsRouteHandler: RouteHandler<
  typeof getV1ConvaiToolsToolIdDependentAgentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ConvaiToolsToolIdExecutionsRouteHandler: RouteHandler<
  typeof getV1ConvaiToolsToolIdExecutionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConvaiAnalysisItemsRouteHandler: RouteHandler<
  typeof postV1ConvaiAnalysisItemsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ConvaiAnalysisItemsRouteHandler: RouteHandler<
  typeof getV1ConvaiAnalysisItemsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1ConvaiAnalysisItemsAnalysisItemIdAttachmentsRouteHandler: RouteHandler<
  typeof patchV1ConvaiAnalysisItemsAnalysisItemIdAttachmentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ConvaiAnalysisItemsAnalysisItemIdRouteHandler: RouteHandler<
  typeof getV1ConvaiAnalysisItemsAnalysisItemIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1ConvaiAnalysisItemsAnalysisItemIdRouteHandler: RouteHandler<
  typeof patchV1ConvaiAnalysisItemsAnalysisItemIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1ConvaiAnalysisItemsAnalysisItemIdRouteHandler: RouteHandler<
  typeof deleteV1ConvaiAnalysisItemsAnalysisItemIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ConvaiAnalysisItemsAnalysisItemIdVersionsRouteHandler: RouteHandler<
  typeof getV1ConvaiAnalysisItemsAnalysisItemIdVersionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConvaiAnalysisItemsAnalysisItemIdCopyRouteHandler: RouteHandler<
  typeof postV1ConvaiAnalysisItemsAnalysisItemIdCopyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ConvaiAnalysisItemsAnalysisItemIdDependentAgentsRouteHandler: RouteHandler<
  typeof getV1ConvaiAnalysisItemsAnalysisItemIdDependentAgentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ConvaiSettingsRouteHandler: RouteHandler<
  typeof getV1ConvaiSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1ConvaiSettingsRouteHandler: RouteHandler<
  typeof patchV1ConvaiSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ConvaiSettingsDashboardRouteHandler: RouteHandler<
  typeof getV1ConvaiSettingsDashboardRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1ConvaiSettingsDashboardRouteHandler: RouteHandler<
  typeof patchV1ConvaiSettingsDashboardRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConvaiSecretsRouteHandler: RouteHandler<
  typeof postV1ConvaiSecretsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ConvaiSecretsRouteHandler: RouteHandler<typeof getV1ConvaiSecretsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1ConvaiSecretsSecretIdRouteHandler: RouteHandler<
  typeof getV1ConvaiSecretsSecretIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1ConvaiSecretsSecretIdRouteHandler: RouteHandler<
  typeof deleteV1ConvaiSecretsSecretIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1ConvaiSecretsSecretIdRouteHandler: RouteHandler<
  typeof patchV1ConvaiSecretsSecretIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ConvaiSecretsSecretIdDependenciesResourceTypeRouteHandler: RouteHandler<
  typeof getV1ConvaiSecretsSecretIdDependenciesResourceTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConvaiBatchCallingSubmitRouteHandler: RouteHandler<
  typeof postV1ConvaiBatchCallingSubmitRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ConvaiBatchCallingWorkspaceRouteHandler: RouteHandler<
  typeof getV1ConvaiBatchCallingWorkspaceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ConvaiBatchCallingBatchIdRouteHandler: RouteHandler<
  typeof getV1ConvaiBatchCallingBatchIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1ConvaiBatchCallingBatchIdRouteHandler: RouteHandler<
  typeof deleteV1ConvaiBatchCallingBatchIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConvaiBatchCallingBatchIdCancelRouteHandler: RouteHandler<
  typeof postV1ConvaiBatchCallingBatchIdCancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConvaiBatchCallingBatchIdRetryRouteHandler: RouteHandler<
  typeof postV1ConvaiBatchCallingBatchIdRetryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ConvaiBatchCallingBatchIdExportRouteHandler: RouteHandler<
  typeof getV1ConvaiBatchCallingBatchIdExportRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConvaiSipTrunkOutboundCallRouteHandler: RouteHandler<
  typeof postV1ConvaiSipTrunkOutboundCallRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConvaiMcpServersRouteHandler: RouteHandler<
  typeof postV1ConvaiMcpServersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ConvaiMcpServersRouteHandler: RouteHandler<
  typeof getV1ConvaiMcpServersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ConvaiMcpServersMcpServerIdRouteHandler: RouteHandler<
  typeof getV1ConvaiMcpServersMcpServerIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1ConvaiMcpServersMcpServerIdRouteHandler: RouteHandler<
  typeof deleteV1ConvaiMcpServersMcpServerIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1ConvaiMcpServersMcpServerIdRouteHandler: RouteHandler<
  typeof patchV1ConvaiMcpServersMcpServerIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ConvaiMcpServersMcpServerIdToolsRouteHandler: RouteHandler<
  typeof getV1ConvaiMcpServersMcpServerIdToolsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1ConvaiMcpServersMcpServerIdApprovalPolicyRouteHandler: RouteHandler<
  typeof patchV1ConvaiMcpServersMcpServerIdApprovalPolicyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConvaiMcpServersMcpServerIdToolApprovalsRouteHandler: RouteHandler<
  typeof postV1ConvaiMcpServersMcpServerIdToolApprovalsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1ConvaiMcpServersMcpServerIdToolApprovalsToolNameRouteHandler: RouteHandler<
  typeof deleteV1ConvaiMcpServersMcpServerIdToolApprovalsToolNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConvaiMcpServersMcpServerIdToolConfigsRouteHandler: RouteHandler<
  typeof postV1ConvaiMcpServersMcpServerIdToolConfigsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ConvaiMcpServersMcpServerIdToolConfigsToolNameRouteHandler: RouteHandler<
  typeof getV1ConvaiMcpServersMcpServerIdToolConfigsToolNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1ConvaiMcpServersMcpServerIdToolConfigsToolNameRouteHandler: RouteHandler<
  typeof patchV1ConvaiMcpServersMcpServerIdToolConfigsToolNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1ConvaiMcpServersMcpServerIdToolConfigsToolNameRouteHandler: RouteHandler<
  typeof deleteV1ConvaiMcpServersMcpServerIdToolConfigsToolNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ConvaiWhatsappAccountsPhoneNumberIdRouteHandler: RouteHandler<
  typeof getV1ConvaiWhatsappAccountsPhoneNumberIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1ConvaiWhatsappAccountsPhoneNumberIdRouteHandler: RouteHandler<
  typeof patchV1ConvaiWhatsappAccountsPhoneNumberIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1ConvaiWhatsappAccountsPhoneNumberIdRouteHandler: RouteHandler<
  typeof deleteV1ConvaiWhatsappAccountsPhoneNumberIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ConvaiWhatsappAccountsRouteHandler: RouteHandler<
  typeof getV1ConvaiWhatsappAccountsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConvaiAgentsAgentIdBranchesRouteHandler: RouteHandler<
  typeof postV1ConvaiAgentsAgentIdBranchesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ConvaiAgentsAgentIdBranchesRouteHandler: RouteHandler<
  typeof getV1ConvaiAgentsAgentIdBranchesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ConvaiAgentsAgentIdBranchesBranchIdRouteHandler: RouteHandler<
  typeof getV1ConvaiAgentsAgentIdBranchesBranchIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1ConvaiAgentsAgentIdBranchesBranchIdRouteHandler: RouteHandler<
  typeof patchV1ConvaiAgentsAgentIdBranchesBranchIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ConvaiAgentsAgentIdVersionsVersionIdRouteHandler: RouteHandler<
  typeof getV1ConvaiAgentsAgentIdVersionsVersionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ConvaiAgentsAgentIdBranchesSourceBranchIdMergePreviewRouteHandler: RouteHandler<
  typeof getV1ConvaiAgentsAgentIdBranchesSourceBranchIdMergePreviewRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConvaiAgentsAgentIdBranchesSourceBranchIdMergeRouteHandler: RouteHandler<
  typeof postV1ConvaiAgentsAgentIdBranchesSourceBranchIdMergeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ConvaiAgentsAgentIdBranchesBranchIdRebasePreviewRouteHandler: RouteHandler<
  typeof getV1ConvaiAgentsAgentIdBranchesBranchIdRebasePreviewRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConvaiAgentsAgentIdBranchesBranchIdRebaseRouteHandler: RouteHandler<
  typeof postV1ConvaiAgentsAgentIdBranchesBranchIdRebaseRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConvaiAgentsAgentIdDeploymentsRouteHandler: RouteHandler<
  typeof postV1ConvaiAgentsAgentIdDeploymentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ConvaiAgentsAgentIdDeploymentsRouteHandler: RouteHandler<
  typeof getV1ConvaiAgentsAgentIdDeploymentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConvaiAgentsAgentIdDraftsRouteHandler: RouteHandler<
  typeof postV1ConvaiAgentsAgentIdDraftsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1ConvaiAgentsAgentIdDraftsRouteHandler: RouteHandler<
  typeof deleteV1ConvaiAgentsAgentIdDraftsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConvaiAgentsAgentIdMergeProposalsRouteHandler: RouteHandler<
  typeof postV1ConvaiAgentsAgentIdMergeProposalsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ConvaiAgentsAgentIdMergeProposalsRouteHandler: RouteHandler<
  typeof getV1ConvaiAgentsAgentIdMergeProposalsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ConvaiAgentsAgentIdMergeProposalsMergeProposalIdRouteHandler: RouteHandler<
  typeof getV1ConvaiAgentsAgentIdMergeProposalsMergeProposalIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1ConvaiAgentsAgentIdMergeProposalsMergeProposalIdRouteHandler: RouteHandler<
  typeof patchV1ConvaiAgentsAgentIdMergeProposalsMergeProposalIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConvaiAgentsAgentIdMergeProposalsMergeProposalIdReviewsRouteHandler: RouteHandler<
  typeof postV1ConvaiAgentsAgentIdMergeProposalsMergeProposalIdReviewsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConvaiAgentsAgentIdMergeProposalsMergeProposalIdCommentsRouteHandler: RouteHandler<
  typeof postV1ConvaiAgentsAgentIdMergeProposalsMergeProposalIdCommentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConvaiAgentsAgentIdMergeProposalsMergeProposalIdMergeRouteHandler: RouteHandler<
  typeof postV1ConvaiAgentsAgentIdMergeProposalsMergeProposalIdMergeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ConvaiOutboundCampaignsConfigRouteHandler: RouteHandler<
  typeof getV1ConvaiOutboundCampaignsConfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1ConvaiOutboundCampaignsConfigRouteHandler: RouteHandler<
  typeof putV1ConvaiOutboundCampaignsConfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ConvaiOutboundCampaignsCampaignsRouteHandler: RouteHandler<
  typeof getV1ConvaiOutboundCampaignsCampaignsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConvaiOutboundCampaignsCampaignsPauseAllRouteHandler: RouteHandler<
  typeof postV1ConvaiOutboundCampaignsCampaignsPauseAllRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConvaiOutboundCampaignsCampaignsStopAllRouteHandler: RouteHandler<
  typeof postV1ConvaiOutboundCampaignsCampaignsStopAllRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConvaiOutboundCampaignsCampaignsSubmitRouteHandler: RouteHandler<
  typeof postV1ConvaiOutboundCampaignsCampaignsSubmitRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ConvaiOutboundCampaignsCampaignsCampaignIdRouteHandler: RouteHandler<
  typeof getV1ConvaiOutboundCampaignsCampaignsCampaignIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ConvaiOutboundCampaignsCampaignsCampaignIdProgressRouteHandler: RouteHandler<
  typeof getV1ConvaiOutboundCampaignsCampaignsCampaignIdProgressRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ConvaiOutboundCampaignsCampaignsCampaignIdLeadsRouteHandler: RouteHandler<
  typeof getV1ConvaiOutboundCampaignsCampaignsCampaignIdLeadsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ConvaiOutboundCampaignsCampaignsCampaignIdCallsRouteHandler: RouteHandler<
  typeof getV1ConvaiOutboundCampaignsCampaignsCampaignIdCallsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ConvaiOutboundCampaignsCampaignsCampaignIdFollowUpRequestsRouteHandler: RouteHandler<
  typeof getV1ConvaiOutboundCampaignsCampaignsCampaignIdFollowUpRequestsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ConvaiOutboundCampaignsCampaignsCampaignIdExportRouteHandler: RouteHandler<
  typeof getV1ConvaiOutboundCampaignsCampaignsCampaignIdExportRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ConvaiOutboundCampaignsCampaignsCampaignIdLeadsLeadIdRouteHandler: RouteHandler<
  typeof getV1ConvaiOutboundCampaignsCampaignsCampaignIdLeadsLeadIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1ConvaiOutboundCampaignsCampaignsCampaignIdLeadsLeadIdRouteHandler: RouteHandler<
  typeof deleteV1ConvaiOutboundCampaignsCampaignsCampaignIdLeadsLeadIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConvaiOutboundCampaignsCampaignsCampaignIdPauseRouteHandler: RouteHandler<
  typeof postV1ConvaiOutboundCampaignsCampaignsCampaignIdPauseRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConvaiOutboundCampaignsCampaignsCampaignIdResumeRouteHandler: RouteHandler<
  typeof postV1ConvaiOutboundCampaignsCampaignsCampaignIdResumeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConvaiOutboundCampaignsCampaignsCampaignIdStopRouteHandler: RouteHandler<
  typeof postV1ConvaiOutboundCampaignsCampaignsCampaignIdStopRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ConvaiOutboundCampaignsAttentionRouteHandler: RouteHandler<
  typeof getV1ConvaiOutboundCampaignsAttentionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConvaiOutboundCampaignsAttentionAttentionIdRetryRouteHandler: RouteHandler<
  typeof postV1ConvaiOutboundCampaignsAttentionAttentionIdRetryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConvaiOutboundCampaignsAttentionAttentionIdResolveRouteHandler: RouteHandler<
  typeof postV1ConvaiOutboundCampaignsAttentionAttentionIdResolveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1SpeechEngineRouteHandler: RouteHandler<typeof getV1SpeechEngineRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1SpeechEngineRouteHandler: RouteHandler<typeof postV1SpeechEngineRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1SpeechEngineSpeechEngineIdRouteHandler: RouteHandler<
  typeof getV1SpeechEngineSpeechEngineIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1SpeechEngineSpeechEngineIdRouteHandler: RouteHandler<
  typeof patchV1SpeechEngineSpeechEngineIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1SpeechEngineSpeechEngineIdRouteHandler: RouteHandler<
  typeof deleteV1SpeechEngineSpeechEngineIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1SpeechEngineSpeechEngineIdDuplicateRouteHandler: RouteHandler<
  typeof postV1SpeechEngineSpeechEngineIdDuplicateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConvaiConversationsConversationIdMessagesRouteHandler: RouteHandler<
  typeof postV1ConvaiConversationsConversationIdMessagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConvaiConversationsConversationIdMessagesStreamRouteHandler: RouteHandler<
  typeof postV1ConvaiConversationsConversationIdMessagesStreamRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ConvaiConversationsConversationIdTurnsTurnIdRouteHandler: RouteHandler<
  typeof getV1ConvaiConversationsConversationIdTurnsTurnIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ConvaiConversationsConversationIdTurnsTurnIdEventsRouteHandler: RouteHandler<
  typeof getV1ConvaiConversationsConversationIdTurnsTurnIdEventsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConvaiAgentsAgentIdBranchesBranchIdProceduresRouteHandler: RouteHandler<
  typeof postV1ConvaiAgentsAgentIdBranchesBranchIdProceduresRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ConvaiAgentsAgentIdBranchesBranchIdProceduresRouteHandler: RouteHandler<
  typeof getV1ConvaiAgentsAgentIdBranchesBranchIdProceduresRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConvaiAgentsAgentIdBranchesBranchIdProceduresCompileRouteHandler: RouteHandler<
  typeof postV1ConvaiAgentsAgentIdBranchesBranchIdProceduresCompileRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1ConvaiAgentsAgentIdBranchesBranchIdProceduresProcedureIdRouteHandler: RouteHandler<
  typeof deleteV1ConvaiAgentsAgentIdBranchesBranchIdProceduresProcedureIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ConvaiAgentsAgentIdBranchesBranchIdProceduresProcedureIdRouteHandler: RouteHandler<
  typeof getV1ConvaiAgentsAgentIdBranchesBranchIdProceduresProcedureIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ConvaiAgentsAgentIdBranchesBranchIdProceduresProcedureIdDraftRouteHandler: RouteHandler<
  typeof getV1ConvaiAgentsAgentIdBranchesBranchIdProceduresProcedureIdDraftRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1ConvaiAgentsAgentIdBranchesBranchIdProceduresProcedureIdDraftRouteHandler: RouteHandler<
  typeof patchV1ConvaiAgentsAgentIdBranchesBranchIdProceduresProcedureIdDraftRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1ConvaiAgentsAgentIdBranchesBranchIdProceduresProcedureIdDraftRouteHandler: RouteHandler<
  typeof deleteV1ConvaiAgentsAgentIdBranchesBranchIdProceduresProcedureIdDraftRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConvaiConversationsConversationIdAnalysisRunRouteHandler: RouteHandler<
  typeof postV1ConvaiConversationsConversationIdAnalysisRunRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConvaiConversationsConversationIdAnalysisEvaluationsRunRouteHandler: RouteHandler<
  typeof postV1ConvaiConversationsConversationIdAnalysisEvaluationsRunRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ConvaiEnvironmentVariablesRouteHandler: RouteHandler<
  typeof getV1ConvaiEnvironmentVariablesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConvaiEnvironmentVariablesRouteHandler: RouteHandler<
  typeof postV1ConvaiEnvironmentVariablesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ConvaiEnvironmentVariablesEnvVarIdRouteHandler: RouteHandler<
  typeof getV1ConvaiEnvironmentVariablesEnvVarIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1ConvaiEnvironmentVariablesEnvVarIdRouteHandler: RouteHandler<
  typeof patchV1ConvaiEnvironmentVariablesEnvVarIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1ConvaiEnvironmentVariablesEnvVarIdRouteHandler: RouteHandler<
  typeof deleteV1ConvaiEnvironmentVariablesEnvVarIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ConvaiEnvironmentsRouteHandler: RouteHandler<
  typeof getV1ConvaiEnvironmentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConvaiEnvironmentsRouteHandler: RouteHandler<
  typeof postV1ConvaiEnvironmentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1ConvaiEnvironmentsEnvironmentRouteHandler: RouteHandler<
  typeof deleteV1ConvaiEnvironmentsEnvironmentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ConvaiRealtimeConversationGroupsRouteHandler: RouteHandler<
  typeof getV1ConvaiRealtimeConversationGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConvaiRealtimeConversationGroupsRouteHandler: RouteHandler<
  typeof postV1ConvaiRealtimeConversationGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ConvaiRealtimeConversationGroupsConversationGroupIdRouteHandler: RouteHandler<
  typeof getV1ConvaiRealtimeConversationGroupsConversationGroupIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1ConvaiRealtimeConversationGroupsConversationGroupIdRouteHandler: RouteHandler<
  typeof patchV1ConvaiRealtimeConversationGroupsConversationGroupIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1ConvaiRealtimeConversationGroupsConversationGroupIdRouteHandler: RouteHandler<
  typeof deleteV1ConvaiRealtimeConversationGroupsConversationGroupIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1ConvaiRealtimeConversationsConversationIdConversationGroupRouteHandler: RouteHandler<
  typeof putV1ConvaiRealtimeConversationsConversationIdConversationGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1ConvaiRealtimeConversationsConversationIdConversationGroupRouteHandler: RouteHandler<
  typeof deleteV1ConvaiRealtimeConversationsConversationIdConversationGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConvaiRealtimeClientSecretsRouteHandler: RouteHandler<
  typeof postV1ConvaiRealtimeClientSecretsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1MusicPlanRouteHandler: RouteHandler<typeof postV1MusicPlanRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1MusicRouteHandler: RouteHandler<typeof postV1MusicRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1MusicDetailedRouteHandler: RouteHandler<
  typeof postV1MusicDetailedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1MusicDetailedStreamRouteHandler: RouteHandler<
  typeof postV1MusicDetailedStreamRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1MusicStreamRouteHandler: RouteHandler<typeof postV1MusicStreamRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1MusicUploadRouteHandler: RouteHandler<typeof postV1MusicUploadRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1MusicStemSeparationRouteHandler: RouteHandler<
  typeof postV1MusicStemSeparationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1MusicFinetunesRouteHandler: RouteHandler<
  typeof getV1MusicFinetunesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1MusicFinetunesRouteHandler: RouteHandler<
  typeof postV1MusicFinetunesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1MusicFinetunesFinetuneIdRouteHandler: RouteHandler<
  typeof getV1MusicFinetunesFinetuneIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1MusicFinetunesFinetuneIdRouteHandler: RouteHandler<
  typeof patchV1MusicFinetunesFinetuneIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1MusicFinetunesFinetuneIdRouteHandler: RouteHandler<
  typeof deleteV1MusicFinetunesFinetuneIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ProductionsOrdersRouteHandler: RouteHandler<
  typeof postV1ProductionsOrdersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ProductionsOrdersRouteHandler: RouteHandler<
  typeof getV1ProductionsOrdersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ProductionsOrdersOrderIdRouteHandler: RouteHandler<
  typeof getV1ProductionsOrdersOrderIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1ProductionsOrdersOrderIdRouteHandler: RouteHandler<
  typeof patchV1ProductionsOrdersOrderIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ProductionsOrdersOrderIdMediaRouteHandler: RouteHandler<
  typeof postV1ProductionsOrdersOrderIdMediaRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ProductionsOrdersOrderIdMediaMediaIdRouteHandler: RouteHandler<
  typeof getV1ProductionsOrdersOrderIdMediaMediaIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ProductionsOrdersOrderIdItemsRouteHandler: RouteHandler<
  typeof postV1ProductionsOrdersOrderIdItemsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1ProductionsOrdersOrderIdItemsItemIdRouteHandler: RouteHandler<
  typeof deleteV1ProductionsOrdersOrderIdItemsItemIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ProductionsOrdersOrderIdSubmitRouteHandler: RouteHandler<
  typeof postV1ProductionsOrdersOrderIdSubmitRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ProductionsOrdersOrderIdDeliverablesRouteHandler: RouteHandler<
  typeof getV1ProductionsOrdersOrderIdDeliverablesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ProductionsOrdersLanguagesOrderItemKindRouteHandler: RouteHandler<
  typeof getV1ProductionsOrdersLanguagesOrderItemKindRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1VoicesPvcRouteHandler: RouteHandler<typeof postV1VoicesPvcRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1VoicesPvcVoiceIdRouteHandler: RouteHandler<
  typeof postV1VoicesPvcVoiceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1VoicesPvcVoiceIdSamplesRouteHandler: RouteHandler<
  typeof postV1VoicesPvcVoiceIdSamplesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1VoicesPvcVoiceIdSamplesSampleIdRouteHandler: RouteHandler<
  typeof postV1VoicesPvcVoiceIdSamplesSampleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1VoicesPvcVoiceIdSamplesSampleIdRouteHandler: RouteHandler<
  typeof deleteV1VoicesPvcVoiceIdSamplesSampleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1VoicesPvcVoiceIdSamplesSampleIdAudioRouteHandler: RouteHandler<
  typeof getV1VoicesPvcVoiceIdSamplesSampleIdAudioRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1VoicesPvcVoiceIdSamplesSampleIdWaveformRouteHandler: RouteHandler<
  typeof getV1VoicesPvcVoiceIdSamplesSampleIdWaveformRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1VoicesPvcVoiceIdSamplesSampleIdSpeakersRouteHandler: RouteHandler<
  typeof getV1VoicesPvcVoiceIdSamplesSampleIdSpeakersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1VoicesPvcVoiceIdSamplesSampleIdSeparateSpeakersRouteHandler: RouteHandler<
  typeof postV1VoicesPvcVoiceIdSamplesSampleIdSeparateSpeakersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1VoicesPvcVoiceIdSamplesSampleIdSpeakersSpeakerIdAudioRouteHandler: RouteHandler<
  typeof getV1VoicesPvcVoiceIdSamplesSampleIdSpeakersSpeakerIdAudioRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1VoicesPvcVoiceIdCaptchaRouteHandler: RouteHandler<
  typeof getV1VoicesPvcVoiceIdCaptchaRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1VoicesPvcVoiceIdCaptchaRouteHandler: RouteHandler<
  typeof postV1VoicesPvcVoiceIdCaptchaRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1VoicesPvcVoiceIdTrainRouteHandler: RouteHandler<
  typeof postV1VoicesPvcVoiceIdTrainRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1VoicesPvcVoiceIdVerificationRouteHandler: RouteHandler<
  typeof postV1VoicesPvcVoiceIdVerificationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1FlowsVideoRouteHandler: RouteHandler<typeof postV1FlowsVideoRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1FlowsVideoRouteHandler: RouteHandler<typeof getV1FlowsVideoRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1FlowsVideoGenerationIdRouteHandler: RouteHandler<
  typeof getV1FlowsVideoGenerationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1FlowsImageRouteHandler: RouteHandler<typeof postV1FlowsImageRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1FlowsImageRouteHandler: RouteHandler<typeof getV1FlowsImageRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1FlowsImageGenerationIdRouteHandler: RouteHandler<
  typeof getV1FlowsImageGenerationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1FlowsTextToSpeechRouteHandler: RouteHandler<
  typeof postV1FlowsTextToSpeechRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1FlowsTextToSpeechRouteHandler: RouteHandler<
  typeof getV1FlowsTextToSpeechRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1FlowsTextToSpeechGenerationIdRouteHandler: RouteHandler<
  typeof getV1FlowsTextToSpeechGenerationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1FlowsTemplatesTemplateIdRunsRouteHandler: RouteHandler<
  typeof postV1FlowsTemplatesTemplateIdRunsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1FlowsTemplatesTemplateIdRunsRouteHandler: RouteHandler<
  typeof getV1FlowsTemplatesTemplateIdRunsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1FlowsTemplatesTemplateIdRunsRunIdRouteHandler: RouteHandler<
  typeof getV1FlowsTemplatesTemplateIdRunsRunIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1FlowsTemplatesRouteHandler: RouteHandler<
  typeof getV1FlowsTemplatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1FlowsTemplatesTemplateIdRouteHandler: RouteHandler<
  typeof getV1FlowsTemplatesTemplateIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1AssetsRouteHandler: RouteHandler<typeof postV1AssetsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AssetsRouteHandler: RouteHandler<typeof getV1AssetsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AssetsAssetIdRouteHandler: RouteHandler<typeof getV1AssetsAssetIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteV1AssetsAssetIdRouteHandler: RouteHandler<
  typeof deleteV1AssetsAssetIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1WorkspaceAnalyticsQueryUsageByProductOverTimeRouteHandler: RouteHandler<
  typeof postV1WorkspaceAnalyticsQueryUsageByProductOverTimeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1WorkspaceAnalyticsUsageRouteHandler: RouteHandler<
  typeof postV1WorkspaceAnalyticsUsageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1WorkspaceAnalyticsRequestsRouteHandler: RouteHandler<
  typeof postV1WorkspaceAnalyticsRequestsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1WorkspaceWebhooksWebhookIdTestRouteHandler: RouteHandler<
  typeof postV1WorkspaceWebhooksWebhookIdTestRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1WorkspaceWebhooksWebhookIdDeliveriesDeliveryIdRedeliverRouteHandler: RouteHandler<
  typeof postV1WorkspaceWebhooksWebhookIdDeliveriesDeliveryIdRedeliverRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ReceptionServicesRouteHandler: RouteHandler<
  typeof getV1ReceptionServicesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ReceptionServicesRouteHandler: RouteHandler<
  typeof postV1ReceptionServicesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ReceptionServicesServiceIdRouteHandler: RouteHandler<
  typeof getV1ReceptionServicesServiceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1ReceptionServicesServiceIdRouteHandler: RouteHandler<
  typeof putV1ReceptionServicesServiceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1ReceptionServicesServiceIdRouteHandler: RouteHandler<
  typeof deleteV1ReceptionServicesServiceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ReceptionServicesServiceIdConfirmUpdateRouteHandler: RouteHandler<
  typeof postV1ReceptionServicesServiceIdConfirmUpdateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ReceptionAssetsRouteHandler: RouteHandler<
  typeof getV1ReceptionAssetsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ReceptionAssetsRouteHandler: RouteHandler<
  typeof postV1ReceptionAssetsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ReceptionAssetsAssetIdRouteHandler: RouteHandler<
  typeof getV1ReceptionAssetsAssetIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1ReceptionAssetsAssetIdRouteHandler: RouteHandler<
  typeof putV1ReceptionAssetsAssetIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1ReceptionAssetsAssetIdRouteHandler: RouteHandler<
  typeof deleteV1ReceptionAssetsAssetIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ReceptionProductsRouteHandler: RouteHandler<
  typeof getV1ReceptionProductsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ReceptionProductsRouteHandler: RouteHandler<
  typeof postV1ReceptionProductsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ReceptionProductsProductIdRouteHandler: RouteHandler<
  typeof getV1ReceptionProductsProductIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1ReceptionProductsProductIdRouteHandler: RouteHandler<
  typeof putV1ReceptionProductsProductIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1ReceptionProductsProductIdRouteHandler: RouteHandler<
  typeof deleteV1ReceptionProductsProductIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1ReceptionProductsProductIdStockRouteHandler: RouteHandler<
  typeof patchV1ReceptionProductsProductIdStockRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ReceptionProductsProductIdStockAdjustRouteHandler: RouteHandler<
  typeof postV1ReceptionProductsProductIdStockAdjustRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ReceptionStaffRouteHandler: RouteHandler<
  typeof getV1ReceptionStaffRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ReceptionStaffRouteHandler: RouteHandler<
  typeof postV1ReceptionStaffRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ReceptionStaffStaffIdRouteHandler: RouteHandler<
  typeof getV1ReceptionStaffStaffIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1ReceptionStaffStaffIdRouteHandler: RouteHandler<
  typeof putV1ReceptionStaffStaffIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1ReceptionStaffStaffIdRouteHandler: RouteHandler<
  typeof deleteV1ReceptionStaffStaffIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ReceptionCustomerFacingAgentsRouteHandler: RouteHandler<
  typeof getV1ReceptionCustomerFacingAgentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1ReceptionCustomerFacingAgentsAgentIdRouteHandler: RouteHandler<
  typeof patchV1ReceptionCustomerFacingAgentsAgentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ReceptionCustomerFacingAgentsAgentIdActivateRouteHandler: RouteHandler<
  typeof postV1ReceptionCustomerFacingAgentsAgentIdActivateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ReceptionCustomerFacingAgentsAgentIdRulesRouteHandler: RouteHandler<
  typeof postV1ReceptionCustomerFacingAgentsAgentIdRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1ReceptionCustomerFacingAgentsAgentIdRulesRuleIdRouteHandler: RouteHandler<
  typeof putV1ReceptionCustomerFacingAgentsAgentIdRulesRuleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1ReceptionCustomerFacingAgentsAgentIdRulesRuleIdRouteHandler: RouteHandler<
  typeof deleteV1ReceptionCustomerFacingAgentsAgentIdRulesRuleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ReceptionCustomerFacingAgentsAgentIdProceduresRouteHandler: RouteHandler<
  typeof getV1ReceptionCustomerFacingAgentsAgentIdProceduresRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ReceptionCustomerFacingAgentsAgentIdProceduresRouteHandler: RouteHandler<
  typeof postV1ReceptionCustomerFacingAgentsAgentIdProceduresRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1ReceptionCustomerFacingAgentsAgentIdProceduresProcedureIdRouteHandler: RouteHandler<
  typeof putV1ReceptionCustomerFacingAgentsAgentIdProceduresProcedureIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1ReceptionCustomerFacingAgentsAgentIdProceduresProcedureIdRouteHandler: RouteHandler<
  typeof deleteV1ReceptionCustomerFacingAgentsAgentIdProceduresProcedureIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ReceptionCustomerFacingAgentsAgentIdTransferRulesRouteHandler: RouteHandler<
  typeof postV1ReceptionCustomerFacingAgentsAgentIdTransferRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1ReceptionCustomerFacingAgentsAgentIdTransferRulesRuleIdRouteHandler: RouteHandler<
  typeof putV1ReceptionCustomerFacingAgentsAgentIdTransferRulesRuleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1ReceptionCustomerFacingAgentsAgentIdTransferRulesRuleIdRouteHandler: RouteHandler<
  typeof deleteV1ReceptionCustomerFacingAgentsAgentIdTransferRulesRuleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ReceptionPhoneNumbersAssignmentsRouteHandler: RouteHandler<
  typeof getV1ReceptionPhoneNumbersAssignmentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ReceptionPhoneNumbersAssignmentsRouteHandler: RouteHandler<
  typeof postV1ReceptionPhoneNumbersAssignmentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1ReceptionPhoneNumbersAssignmentsPhoneAssignmentIdRouteHandler: RouteHandler<
  typeof deleteV1ReceptionPhoneNumbersAssignmentsPhoneAssignmentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1ReceptionPhoneNumbersAssignmentsPhoneAssignmentIdRouteHandler: RouteHandler<
  typeof patchV1ReceptionPhoneNumbersAssignmentsPhoneAssignmentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ReceptionHolidaysRouteHandler: RouteHandler<
  typeof getV1ReceptionHolidaysRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ReceptionHolidaysRouteHandler: RouteHandler<
  typeof postV1ReceptionHolidaysRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ReceptionHolidaysHolidayIdRouteHandler: RouteHandler<
  typeof getV1ReceptionHolidaysHolidayIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1ReceptionHolidaysHolidayIdRouteHandler: RouteHandler<
  typeof putV1ReceptionHolidaysHolidayIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1ReceptionHolidaysHolidayIdRouteHandler: RouteHandler<
  typeof deleteV1ReceptionHolidaysHolidayIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ReceptionLocationsRouteHandler: RouteHandler<
  typeof getV1ReceptionLocationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ReceptionLocationsRouteHandler: RouteHandler<
  typeof postV1ReceptionLocationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ReceptionLocationsLocationIdRouteHandler: RouteHandler<
  typeof getV1ReceptionLocationsLocationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1ReceptionLocationsLocationIdRouteHandler: RouteHandler<
  typeof putV1ReceptionLocationsLocationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1ReceptionLocationsLocationIdRouteHandler: RouteHandler<
  typeof deleteV1ReceptionLocationsLocationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ReceptionAgentInfoRouteHandler: RouteHandler<
  typeof getV1ReceptionAgentInfoRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1ReceptionAgentInfoRouteHandler: RouteHandler<
  typeof putV1ReceptionAgentInfoRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ReceptionKnowledgeSourcesRouteHandler: RouteHandler<
  typeof getV1ReceptionKnowledgeSourcesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ReceptionKnowledgeSourcesRouteHandler: RouteHandler<
  typeof postV1ReceptionKnowledgeSourcesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ReceptionKnowledgeSourcesSourceIdRouteHandler: RouteHandler<
  typeof getV1ReceptionKnowledgeSourcesSourceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1ReceptionKnowledgeSourcesSourceIdRouteHandler: RouteHandler<
  typeof deleteV1ReceptionKnowledgeSourcesSourceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ReceptionKnowledgeSourcesUrlsRouteHandler: RouteHandler<
  typeof postV1ReceptionKnowledgeSourcesUrlsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ReceptionResellerWorkspacesRouteHandler: RouteHandler<
  typeof getV1ReceptionResellerWorkspacesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ReceptionResellerWorkspacesRouteHandler: RouteHandler<
  typeof postV1ReceptionResellerWorkspacesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ReceptionResellerWorkspacesWorkspaceIdCompleteOnboardingRouteHandler: RouteHandler<
  typeof postV1ReceptionResellerWorkspacesWorkspaceIdCompleteOnboardingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ReceptionResellerWorkspacesWorkspaceIdSubscriptionRouteHandler: RouteHandler<
  typeof postV1ReceptionResellerWorkspacesWorkspaceIdSubscriptionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1ReceptionResellerWorkspacesWorkspaceIdSubscriptionRouteHandler: RouteHandler<
  typeof patchV1ReceptionResellerWorkspacesWorkspaceIdSubscriptionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1ReceptionResellerWorkspacesWorkspaceIdSubscriptionRouteHandler: RouteHandler<
  typeof deleteV1ReceptionResellerWorkspacesWorkspaceIdSubscriptionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ReceptionResellerWorkspacesWorkspaceIdSubscriptionRestoreRouteHandler: RouteHandler<
  typeof postV1ReceptionResellerWorkspacesWorkspaceIdSubscriptionRestoreRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ReceptionResellerWorkspacesWorkspaceIdSubscriptionCancelDowngradeRouteHandler: RouteHandler<
  typeof postV1ReceptionResellerWorkspacesWorkspaceIdSubscriptionCancelDowngradeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ReceptionResellerTierLadderRouteHandler: RouteHandler<
  typeof getV1ReceptionResellerTierLadderRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ReceptionResellerBillingInvoicesRouteHandler: RouteHandler<
  typeof getV1ReceptionResellerBillingInvoicesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ReceptionResellerBillingInvoicesInvoiceIdRouteHandler: RouteHandler<
  typeof getV1ReceptionResellerBillingInvoicesInvoiceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ReceptionResellerBillingUpcomingRouteHandler: RouteHandler<
  typeof getV1ReceptionResellerBillingUpcomingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ReceptionTeamMembersRouteHandler: RouteHandler<
  typeof getV1ReceptionTeamMembersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ReceptionTeamInvitesRouteHandler: RouteHandler<
  typeof getV1ReceptionTeamInvitesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ReceptionTeamInvitesRouteHandler: RouteHandler<
  typeof postV1ReceptionTeamInvitesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1ReceptionTeamInvitesRouteHandler: RouteHandler<
  typeof deleteV1ReceptionTeamInvitesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1ReceptionTeamMembersUserIdRouteHandler: RouteHandler<
  typeof patchV1ReceptionTeamMembersUserIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1ReceptionTeamMembersUserIdRouteHandler: RouteHandler<
  typeof deleteV1ReceptionTeamMembersUserIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
