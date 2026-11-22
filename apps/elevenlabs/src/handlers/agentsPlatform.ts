import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1ConvaiAgentsAgentIdBranchesBranchIdProceduresProcedureIdDraftRoute,
  deleteV1ConvaiAgentsAgentIdBranchesBranchIdProceduresProcedureIdRoute,
  deleteV1ConvaiAgentsAgentIdDraftsRoute,
  deleteV1ConvaiAgentsAgentIdHoldAudioRoute,
  deleteV1ConvaiAgentsAgentIdRoute,
  deleteV1ConvaiAgentTestingFoldersFolderIdRoute,
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
  deleteV1ConvaiSecretsSecretIdRoute,
  deleteV1ConvaiTagsTagIdRoute,
  deleteV1ConvaiToolsToolIdRoute,
  deleteV1ConvaiWhatsappAccountsPhoneNumberIdRoute,
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
  getV1ConvaiAgentsAgentIdVersionsVersionIdRoute,
  getV1ConvaiAgentsAgentIdWidgetRoute,
  getV1ConvaiAgentsRoute,
  getV1ConvaiAgentsSummariesRoute,
  getV1ConvaiAgentTestingFoldersFolderIdRoute,
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
  getV1ConvaiSecretsRoute,
  getV1ConvaiSecretsSecretIdDependenciesResourceTypeRoute,
  getV1ConvaiSecretsSecretIdRoute,
  getV1ConvaiSettingsDashboardRoute,
  getV1ConvaiSettingsRoute,
  getV1ConvaiTagsRoute,
  getV1ConvaiTagsTagIdRoute,
  getV1ConvaiToolsRoute,
  getV1ConvaiToolsToolIdDependentAgentsRoute,
  getV1ConvaiToolsToolIdExecutionsRoute,
  getV1ConvaiToolsToolIdRoute,
  getV1ConvaiUsersRoute,
  getV1ConvaiV2PhoneNumbersRoute,
  getV1ConvaiWhatsappAccountsPhoneNumberIdRoute,
  getV1ConvaiWhatsappAccountsRoute,
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
  patchV1ConvaiSecretsSecretIdRoute,
  patchV1ConvaiSettingsDashboardRoute,
  patchV1ConvaiSettingsRoute,
  patchV1ConvaiTagsTagIdRoute,
  patchV1ConvaiToolsToolIdRoute,
  patchV1ConvaiWhatsappAccountsPhoneNumberIdRoute,
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
  postV1ConvaiAgentsAgentIdSimulateConversationRoute,
  postV1ConvaiAgentsAgentIdSimulateConversationStreamRoute,
  postV1ConvaiAgentsCreateRoute,
  postV1ConvaiAgentTestingBulkMoveRoute,
  postV1ConvaiAgentTestingFoldersRoute,
  postV1ConvaiAnalysisItemsAnalysisItemIdCopyRoute,
  postV1ConvaiAnalysisItemsRoute,
  postV1ConvaiBatchCallingBatchIdCancelRoute,
  postV1ConvaiBatchCallingBatchIdRetryRoute,
  postV1ConvaiBatchCallingSubmitRoute,
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
  postV1ConvaiKnowledgeBaseDependentAgentsRoute,
  postV1ConvaiKnowledgeBaseDocumentationIdRagIndexRoute,
  postV1ConvaiKnowledgeBaseDocumentationIdRefreshRoute,
  postV1ConvaiKnowledgeBaseFileRoute,
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
  postV1ConvaiSecretsRoute,
  postV1ConvaiSipTrunkOutboundCallRoute,
  postV1ConvaiTagsRoute,
  postV1ConvaiToolsRoute,
  postV1ConvaiTwilioOutboundCallRoute,
  postV1ConvaiTwilioRegisterCallRoute,
  postV1ConvaiWhatsappOutboundCallRoute,
  postV1ConvaiWhatsappOutboundMessageRoute,
  putV1ConvaiOutboundCampaignsConfigRoute,
} from '../routes'

const app = new OpenAPIHono()

export const agentsPlatformHandler = app
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
  .openapi(postV1ConvaiKnowledgeBaseFileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConvaiKnowledgeBaseTextRoute, (c) => {
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
  .openapi(postV1ConvaiKnowledgeBaseBulkDeleteRoute, (c) => {
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
