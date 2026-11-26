import type { RouteHandler } from '@hono/zod-openapi'
import type {
  postV1AudioSpeechRoute,
  getV1ModelsRoute,
  getV1ModelsModelIdRoute,
  deleteV1ModelsModelIdRoute,
  postV1ResponsesRoute,
  postV1ResponsesInputTokensRoute,
  postV1ClientSessionsRoute,
  postV1ServiceAccountsRoute,
  getV1ServiceAccountsRoute,
  getV1ServiceAccountsAssignableRolesRoute,
  getV1ServiceAccountsServiceAccountIdRoute,
  patchV1ServiceAccountsServiceAccountIdRoute,
  deleteV1ServiceAccountsServiceAccountIdRoute,
  putV1ServiceAccountsServiceAccountIdRolesRoute,
  getV1ServiceAccountsServiceAccountIdRolesRoute,
  postV1ConversationsRoute,
  getV1ConversationsRoute,
  getV1ConversationsConversationIdRoute,
  deleteV1ConversationsConversationIdRoute,
  postV1ConversationsConversationIdRoute,
  getV1ConversationsConversationIdHistoryRoute,
  getV1ConversationsConversationIdMessagesRoute,
  postV1ConversationsConversationIdRestartRoute,
  postV1AgentsRoute,
  getV1AgentsRoute,
  getV1AgentsPagesRoute,
  getV1AgentsAgentIdRoute,
  patchV1AgentsAgentIdRoute,
  deleteV1AgentsAgentIdRoute,
  patchV1AgentsAgentIdVersionRoute,
  getV1AgentsAgentIdVersionsRoute,
  getV1AgentsAgentIdVersionsVersionRoute,
  putV1AgentsAgentIdAliasesRoute,
  getV1AgentsAgentIdAliasesRoute,
  deleteV1AgentsAgentIdAliasesRoute,
  postV1ConversationsStreamRoute,
  postV1ConversationsConversationIdStreamRoute,
  postV1ConversationsConversationIdRestartStreamRoute,
  postV1FilesRoute,
  getV1FilesRoute,
  getV1FilesFileIdRoute,
  deleteV1FilesFileIdRoute,
  getV1FilesFileIdContentRoute,
  getV1FilesFileIdUrlRoute,
  patchV1FineTuningModelsModelIdRoute,
  postV1FineTuningModelsModelIdArchiveRoute,
  deleteV1FineTuningModelsModelIdArchiveRoute,
  getV1BatchJobsRoute,
  postV1BatchJobsRoute,
  getV1BatchJobsJobIdRoute,
  deleteV1BatchJobsJobIdRoute,
  postV1BatchJobsJobIdCancelRoute,
  postV1ChatCompletionsRoute,
  postV1FimCompletionsRoute,
  postV1AgentsCompletionsRoute,
  postV1EmbeddingsRoute,
  postV1ModerationsRoute,
  postV1ChatModerationsRoute,
  postV1OcrRoute,
  postV1ClassificationsRoute,
  postV1ChatClassificationsRoute,
  postV1AudioTranscriptionsRoute,
  postV1AudioTranscriptionsStreamRoute,
  getV1LibrariesRoute,
  postV1LibrariesRoute,
  getV1LibrariesLibraryIdRoute,
  deleteV1LibrariesLibraryIdRoute,
  patchV1LibrariesLibraryIdRoute,
  putV1LibrariesLibraryIdRoute,
  getV1LibrariesLibraryIdDocumentsRoute,
  postV1LibrariesLibraryIdDocumentsRoute,
  getV1LibrariesLibraryIdDocumentsDocumentIdRoute,
  patchV1LibrariesLibraryIdDocumentsDocumentIdRoute,
  putV1LibrariesLibraryIdDocumentsDocumentIdRoute,
  deleteV1LibrariesLibraryIdDocumentsDocumentIdRoute,
  getV1LibrariesLibraryIdDocumentsDocumentIdTextContentRoute,
  getV1LibrariesLibraryIdDocumentsDocumentIdStatusRoute,
  getV1LibrariesLibraryIdDocumentsDocumentIdSignedUrlRoute,
  getV1LibrariesLibraryIdDocumentsDocumentIdExtractedTextSignedUrlRoute,
  postV1LibrariesLibraryIdDocumentsDocumentIdReprocessRoute,
  getV1LibrariesLibraryIdShareRoute,
  putV1LibrariesLibraryIdShareRoute,
  deleteV1LibrariesLibraryIdShareRoute,
  postV1ObservabilityDatasetsRoute,
  getV1ObservabilityDatasetsRoute,
  getV1ObservabilityDatasetsDatasetIdRoute,
  deleteV1ObservabilityDatasetsDatasetIdRoute,
  patchV1ObservabilityDatasetsDatasetIdRoute,
  getV1ObservabilityDatasetsDatasetIdRecordsRoute,
  postV1ObservabilityDatasetsDatasetIdRecordsRoute,
  postV1ObservabilityDatasetsDatasetIdRecordsBulkRoute,
  postV1ObservabilityDatasetsDatasetIdImportsFromFileRoute,
  postV1ObservabilityDatasetsDatasetIdImportsFromSpansRoute,
  postV1ObservabilityDatasetsDatasetIdImportsFromDatasetRoute,
  getV1ObservabilityDatasetsDatasetIdExportsToJsonlRoute,
  getV1ObservabilityDatasetsDatasetIdTasksTaskIdRoute,
  getV1ObservabilityDatasetsDatasetIdTasksRoute,
  getV1ObservabilityDatasetRecordsDatasetRecordIdRoute,
  deleteV1ObservabilityDatasetRecordsDatasetRecordIdRoute,
  postV1ObservabilityDatasetRecordsBulkDeleteRoute,
  putV1ObservabilityDatasetRecordsDatasetRecordIdPayloadRoute,
  putV1ObservabilityDatasetRecordsDatasetRecordIdPropertiesRoute,
  postV1ObservabilityPipelinesRoute,
  getV1ObservabilityPipelinesRoute,
  getV1ObservabilityPipelinesPipelineIdRoute,
  putV1ObservabilityPipelinesPipelineIdRoute,
  deleteV1ObservabilityPipelinesPipelineIdRoute,
  postV1ObservabilityLogsSearchRoute,
  postV1ObservabilityTracesSearchRoute,
  postV1ObservabilityTracesAggregateRoute,
  postV1ObservabilitySpansSearchRoute,
  postV1ObservabilitySpansAggregateRoute,
  postV1ObservabilitySpansEvaluationsAggregateRoute,
  postV1ObservabilitySpansEvaluationsSearchRoute,
  postV1ObservabilitySpansEvaluationsSearchLatestRoute,
  postV1ObservabilityPipelineResultsSearchRoute,
  getV1ObservabilityPipelinesPipelineIdResultsFieldsRoute,
  getV1ObservabilityTracesFieldsRoute,
  getV1ObservabilityTracesTraceIdRoute,
  getV1ObservabilityTracesTraceIdSpansRoute,
  getV1ObservabilityLogsFieldsRoute,
  getV1ObservabilitySpansFieldsRoute,
  getV1ObservabilitySpansEvaluationsFieldsRoute,
  getV1ObservabilityTracesFieldsFieldNameOptionsRoute,
  getV1ObservabilityLogsFieldsFieldNameOptionsRoute,
  getV1ObservabilitySpansFieldsFieldNameOptionsRoute,
  getV1ObservabilitySpansEvaluationsFieldsFieldNameOptionsRoute,
  getV1ObservabilityTracesTraceIdSpansSpanIdRoute,
  getV1ObservabilityProjectsRoute,
  getV1ObservabilityProjectsProjectSlugRoute,
  getV1ObservabilityProjectsProjectSlugEvaluationsV2Route,
  getV1ObservabilityEvaluationsV2EvaluationSlugRoute,
  postV1ObservabilityEvaluationsV2EvaluationSlugRunsSearchRoute,
  postV1ObservabilityEvaluationRunsV2SearchRoute,
  getV1ObservabilityEvaluationRunsV2RunIdRoute,
  getV1ObservabilityEvaluationRunsV2RunIdStatisticsRoute,
  postV1ObservabilityEvaluationRunsV2RunIdStatisticsComputeRoute,
  getV1ObservabilityEvaluationRunsV2RunIdRecordsRecordIdRoute,
  postV1ObservabilityEvaluationRunsV2RunIdRecordsSearchRoute,
  getV1ObservabilityOptimizationsRoute,
  getV1ObservabilityOptimizationsOptimizationIdRoute,
  getV1ObservabilityOptimizationsOptimizationIdTrialsRoute,
  getV1ObservabilityScorersRoute,
  postV1ObservabilityScorersRoute,
  getV1ObservabilityScorersScorerSlugRoute,
  patchV1ObservabilityScorersScorerSlugRoute,
  postV1ConnectorsRoute,
  getV1ConnectorsRoute,
  getV1ConnectorsConnectorIdOrNameAuthUrlRoute,
  putV1ConnectorsConnectorIdShareRoute,
  deleteV1ConnectorsConnectorIdShareRoute,
  putV1ConnectorsConnectorIdOrganizationShareRoute,
  deleteV1ConnectorsConnectorIdOrganizationShareRoute,
  postV1ConnectorsConnectorIdConsumerScopeActivateRoute,
  postV1ConnectorsConnectorIdConsumerScopeDeactivateRoute,
  postV1ConnectorsConnectorIdOrNameToolsToolNameCallRoute,
  getV1ConnectorsConnectorIdOrNameToolsRoute,
  getV1ConnectorsConnectorIdOrNameAuthenticationMethodsRoute,
  getV1ConnectorsConnectorIdOrNameOrganizationCredentialsRoute,
  getV1ConnectorsConnectorIdOrNameWorkspaceCredentialsRoute,
  getV1ConnectorsConnectorIdOrNameUserCredentialsRoute,
  deleteV1ConnectorsConnectorIdOrNameUserCredentialsRoute,
  postV1ConnectorsConnectorIdOrNameConsumerScopeCredentialsRoute,
  patchV1ConnectorsConnectorIdOrNameConsumerScopeCredentialsRoute,
  deleteV1ConnectorsConnectorIdOrNameConsumerScopeCredentialsCredentialsNameRoute,
  getV1ConnectorsConnectorIdOrNameIdOrNameRoute,
  patchV1ConnectorsConnectorIdIdRoute,
  deleteV1ConnectorsConnectorIdIdRoute,
  getV1AudioVoicesRoute,
  postV1AudioVoicesRoute,
  deleteV1AudioVoicesVoiceIdRoute,
  patchV1AudioVoicesVoiceIdRoute,
  getV1AudioVoicesVoiceIdRoute,
  getV1AudioVoicesVoiceIdSampleRoute,
  postV1AudioSessionsRoute,
  getV1AudioSessionsSessionIdRoute,
  patchV1AudioSessionsSessionIdRoute,
  deleteV1AudioSessionsSessionIdRoute,
  getV1AudioAgentsRoute,
  postV1AudioAgentsRoute,
  getV1AudioAgentsAgentIdRoute,
  putV1AudioAgentsAgentIdRoute,
  deleteV1AudioAgentsAgentIdRoute,
  getV1AudioAgentsAgentIdVersionsRoute,
  getV1AudioAgentsAgentIdSessionsRoute,
  getV1WorkflowsExecutionsExecutionIdRoute,
  getV1WorkflowsExecutionsExecutionIdHistoryRoute,
  postV1WorkflowsExecutionsExecutionIdSignalsRoute,
  postV1WorkflowsExecutionsExecutionIdQueriesRoute,
  postV1WorkflowsExecutionsExecutionIdTerminateRoute,
  postV1WorkflowsExecutionsTerminateRoute,
  postV1WorkflowsExecutionsExecutionIdCancelRoute,
  postV1WorkflowsExecutionsCancelRoute,
  postV1WorkflowsExecutionsExecutionIdResetRoute,
  postV1WorkflowsExecutionsExecutionIdUpdatesRoute,
  getV1WorkflowsExecutionsExecutionIdTraceInfoRoute,
  getV1WorkflowsExecutionsExecutionIdTraceOtelRoute,
  getV1WorkflowsExecutionsExecutionIdTraceSummaryRoute,
  getV1WorkflowsExecutionsExecutionIdTraceEventsRoute,
  getV1WorkflowsExecutionsExecutionIdStreamRoute,
  getV1WorkflowsExecutionsExecutionIdLogsRoute,
  getV1WorkflowsExecutionsExecutionIdLogsStreamRoute,
  getV1WorkflowsWorkflowNameMetricsRoute,
  getV1WorkflowsRunsRoute,
  getV1WorkflowsRunsRunIdRoute,
  getV1WorkflowsRunsRunIdHistoryRoute,
  getV1WorkflowsSchedulesRoute,
  postV1WorkflowsSchedulesRoute,
  getV1WorkflowsSchedulesScheduleIdRoute,
  deleteV1WorkflowsSchedulesScheduleIdRoute,
  patchV1WorkflowsSchedulesScheduleIdRoute,
  postV1WorkflowsSchedulesScheduleIdPauseRoute,
  postV1WorkflowsSchedulesScheduleIdResumeRoute,
  postV1WorkflowsSchedulesScheduleIdTriggerRoute,
  getV1WorkflowsEventsStreamRoute,
  getV1WorkflowsEventsListRoute,
  postV1WorkflowsDeploymentsDeploymentIdUnhardenRoute,
  getV1WorkflowsDeploymentsRoute,
  postV1WorkflowsDeploymentsRoute,
  patchV1WorkflowsDeploymentsNameRoute,
  deleteV1WorkflowsDeploymentsNameRoute,
  getV1WorkflowsDeploymentsNameRoute,
  postV1WorkflowsDeploymentsNameStopRoute,
  postV1WorkflowsDeploymentsNameStartRoute,
  postV1WorkflowsDeploymentsNameRestartRoute,
  getV1WorkflowsDeploymentsNameWorkersRoute,
  getV1WorkflowsDeploymentsNameArchiveRoute,
  postV1WorkflowsDeploymentsArchivesRoute,
  getV1WorkflowsDeploymentsNameLogsRoute,
  getV1WorkflowsDeploymentsNameLogsStreamRoute,
  getV1WorkflowsRoute,
  getV1WorkflowsRegistrationsRoute,
  postV1WorkflowsWorkflowIdentifierExecuteRoute,
  postV1WorkflowsRegistrationsWorkflowRegistrationIdExecuteRoute,
  getV1WorkflowsWorkflowIdentifierRoute,
  putV1WorkflowsWorkflowIdentifierRoute,
  getV1WorkflowsRegistrationsWorkflowRegistrationIdRoute,
  putV1WorkflowsArchiveRoute,
  putV1WorkflowsUnarchiveRoute,
  postV1WorkflowsWorkflowIdentifierTagsRoute,
  putV1WorkflowsWorkflowIdentifierArchiveRoute,
  putV1WorkflowsWorkflowIdentifierUnarchiveRoute,
  getV1RagIngestionPipelineConfigurationsRoute,
  putV1RagIngestionPipelineConfigurationsRoute,
  putV1RagIngestionPipelineConfigurationsIdRunInfoRoute,
  postV1ContextSearchIndexesRoute,
  getV1ContextSearchIndexesRoute,
  getV1ContextSearchIndexesIndexNameRoute,
  putV1ContextSearchIndexesIndexNameRoute,
  deleteV1ContextSearchIndexesIndexNameRoute,
  postV1ContextSearchIndexesIndexNameDocumentsRoute,
  deleteV1ContextSearchIndexesIndexNameDocumentsRoute,
  postV1ContextSearchIndexesIndexNameSearchRoute,
  postV1ContextSearchIndexesIndexNameNavigateRoute,
  postV1ContextSearchIndexesIndexNameReadRoute,
  postV1ContextSearchIndexesIndexNameGrepRoute,
  getV1ContextSearchIndexesIndexNameChunksChunkIdRoute,
  getV1ContextSearchIndexesIndexNameSummaryFieldLanguageRoute,
  postV1ContextSearchIndexesIndexNameSummaryFieldLanguageRoute,
  putV1ContextSearchIndexesIndexNameSummaryFieldLanguageRoute,
  postV1TriggersRoute,
  getV1TriggersRoute,
  getV1TriggersTriggerIdRoute,
  deleteV1TriggersTriggerIdRoute,
  getV1TriggersTriggerIdEventsRoute,
  getV1WebhooksRoute,
  postV1WebhooksRoute,
  getV1WebhooksWebhookIdRoute,
  deleteV1WebhooksWebhookIdRoute,
  getV1WebhooksWebhookIdSigningSecretRoute,
  getV1UsersMeRoute,
  getV1UsersMeOrganizationsRoute,
  getV1UsersMeWorkspacesRoute,
  getV1WhoamiRoute,
  getV1BillingBudgetRoute,
  getV1BillingSubscriptionRoute,
  postV1AdminUsageQueryRoute,
  getV1AdminUsersRoute,
  postV1AdminUsersRoute,
  postV1AdminUsersInviteRoute,
  getV1AdminUsersInviteRoute,
  deleteV1AdminUsersInviteInviteUuidRoute,
  patchV1AdminUsersUserIdRoute,
  deleteV1AdminUsersUserIdRoute,
  getV1AdminUsersUserIdRoute,
  postV1AdminUsersUserIdDeactivateRoute,
  postV1AdminUsersUserIdReactivateRoute,
  getV1AdminUsersUserIdWorkspacesRoute,
  getV1AdminRolesRoute,
  getV1AdminWorkspacesRoute,
  postV1AdminWorkspacesRoute,
  patchV1AdminWorkspacesWorkspaceUuidRoute,
  deleteV1AdminWorkspacesWorkspaceUuidRoute,
  getV1AdminWorkspacesWorkspaceUuidUsersRoute,
  patchV1AdminWorkspacesWorkspaceUuidUsersRoute,
  postV1AdminWorkspacesWorkspaceUuidAddUsersRoute,
  deleteV1AdminWorkspacesWorkspaceUuidRemoveUsersRoute,
  getV1AdminRateLimitRoute,
  getV1AdminSpendLimitRoute,
  postV1AdminSpendLimitRoute,
  getV1AdminUsageRoute,
  getV1AdminAuditLogsRoute,
  getV1AdminUserGroupsRoute,
  postV1AdminUserGroupsRoute,
  postV1AdminUserGroupsProvisionWorkspaceRoute,
  getV1AdminUserGroupsGroupUuidRoute,
  patchV1AdminUserGroupsGroupUuidRoute,
  deleteV1AdminUserGroupsGroupUuidRoute,
  getV1AdminUserGroupsGroupUuidMembersRoute,
  postV1AdminUserGroupsGroupUuidMembersRoute,
  deleteV1AdminUserGroupsGroupUuidMembersRoute,
  getV1AdminUserGroupsGroupUuidWorkspacesRoute,
  postV1AdminUserGroupsGroupUuidWorkspacesRoute,
  patchV1AdminUserGroupsGroupUuidWorkspacesWorkspaceUuidRoute,
  deleteV1AdminUserGroupsGroupUuidWorkspacesWorkspaceUuidRoute,
  patchV1AdminUserGroupsGroupUuidOrganizationRoleRoute,
  getV1AdminApiKeysRoute,
  postV1AdminApiKeysRoute,
  deleteV1AdminApiKeysKeyIdRoute,
  postV1AdminScimSyncRoute,
  getV1AdminScimSyncRunIdRoute,
  getV1AdminAnalyticsVibeWorkUsageByUserStatsRoute,
  getV1AdminAnalyticsVibeWorkUsageByAgentStatsRoute,
  getV1AdminAnalyticsVibeWorkUsageByTimeStatsRoute,
  getV1AdminAnalyticsVibeCodeUsageByWorkspaceRoute,
  getV1AdminAnalyticsVibeCodeUsageByOrganizationRoute,
} from '../routes'

export const postV1AudioSpeechRouteHandler: RouteHandler<typeof postV1AudioSpeechRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1ModelsRouteHandler: RouteHandler<typeof getV1ModelsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ModelsModelIdRouteHandler: RouteHandler<typeof getV1ModelsModelIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteV1ModelsModelIdRouteHandler: RouteHandler<
  typeof deleteV1ModelsModelIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ResponsesRouteHandler: RouteHandler<typeof postV1ResponsesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ResponsesInputTokensRouteHandler: RouteHandler<
  typeof postV1ResponsesInputTokensRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ClientSessionsRouteHandler: RouteHandler<
  typeof postV1ClientSessionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ServiceAccountsRouteHandler: RouteHandler<
  typeof postV1ServiceAccountsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ServiceAccountsRouteHandler: RouteHandler<
  typeof getV1ServiceAccountsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ServiceAccountsAssignableRolesRouteHandler: RouteHandler<
  typeof getV1ServiceAccountsAssignableRolesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ServiceAccountsServiceAccountIdRouteHandler: RouteHandler<
  typeof getV1ServiceAccountsServiceAccountIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1ServiceAccountsServiceAccountIdRouteHandler: RouteHandler<
  typeof patchV1ServiceAccountsServiceAccountIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1ServiceAccountsServiceAccountIdRouteHandler: RouteHandler<
  typeof deleteV1ServiceAccountsServiceAccountIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1ServiceAccountsServiceAccountIdRolesRouteHandler: RouteHandler<
  typeof putV1ServiceAccountsServiceAccountIdRolesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ServiceAccountsServiceAccountIdRolesRouteHandler: RouteHandler<
  typeof getV1ServiceAccountsServiceAccountIdRolesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConversationsRouteHandler: RouteHandler<
  typeof postV1ConversationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ConversationsRouteHandler: RouteHandler<typeof getV1ConversationsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1ConversationsConversationIdRouteHandler: RouteHandler<
  typeof getV1ConversationsConversationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1ConversationsConversationIdRouteHandler: RouteHandler<
  typeof deleteV1ConversationsConversationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConversationsConversationIdRouteHandler: RouteHandler<
  typeof postV1ConversationsConversationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ConversationsConversationIdHistoryRouteHandler: RouteHandler<
  typeof getV1ConversationsConversationIdHistoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ConversationsConversationIdMessagesRouteHandler: RouteHandler<
  typeof getV1ConversationsConversationIdMessagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConversationsConversationIdRestartRouteHandler: RouteHandler<
  typeof postV1ConversationsConversationIdRestartRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1AgentsRouteHandler: RouteHandler<typeof postV1AgentsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AgentsRouteHandler: RouteHandler<typeof getV1AgentsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AgentsPagesRouteHandler: RouteHandler<typeof getV1AgentsPagesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1AgentsAgentIdRouteHandler: RouteHandler<typeof getV1AgentsAgentIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const patchV1AgentsAgentIdRouteHandler: RouteHandler<
  typeof patchV1AgentsAgentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1AgentsAgentIdRouteHandler: RouteHandler<
  typeof deleteV1AgentsAgentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1AgentsAgentIdVersionRouteHandler: RouteHandler<
  typeof patchV1AgentsAgentIdVersionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AgentsAgentIdVersionsRouteHandler: RouteHandler<
  typeof getV1AgentsAgentIdVersionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AgentsAgentIdVersionsVersionRouteHandler: RouteHandler<
  typeof getV1AgentsAgentIdVersionsVersionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1AgentsAgentIdAliasesRouteHandler: RouteHandler<
  typeof putV1AgentsAgentIdAliasesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AgentsAgentIdAliasesRouteHandler: RouteHandler<
  typeof getV1AgentsAgentIdAliasesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1AgentsAgentIdAliasesRouteHandler: RouteHandler<
  typeof deleteV1AgentsAgentIdAliasesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConversationsStreamRouteHandler: RouteHandler<
  typeof postV1ConversationsStreamRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConversationsConversationIdStreamRouteHandler: RouteHandler<
  typeof postV1ConversationsConversationIdStreamRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConversationsConversationIdRestartStreamRouteHandler: RouteHandler<
  typeof postV1ConversationsConversationIdRestartStreamRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1FilesRouteHandler: RouteHandler<typeof postV1FilesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1FilesRouteHandler: RouteHandler<typeof getV1FilesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1FilesFileIdRouteHandler: RouteHandler<typeof getV1FilesFileIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteV1FilesFileIdRouteHandler: RouteHandler<
  typeof deleteV1FilesFileIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1FilesFileIdContentRouteHandler: RouteHandler<
  typeof getV1FilesFileIdContentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1FilesFileIdUrlRouteHandler: RouteHandler<
  typeof getV1FilesFileIdUrlRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1FineTuningModelsModelIdRouteHandler: RouteHandler<
  typeof patchV1FineTuningModelsModelIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1FineTuningModelsModelIdArchiveRouteHandler: RouteHandler<
  typeof postV1FineTuningModelsModelIdArchiveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1FineTuningModelsModelIdArchiveRouteHandler: RouteHandler<
  typeof deleteV1FineTuningModelsModelIdArchiveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1BatchJobsRouteHandler: RouteHandler<typeof getV1BatchJobsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1BatchJobsRouteHandler: RouteHandler<typeof postV1BatchJobsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1BatchJobsJobIdRouteHandler: RouteHandler<
  typeof getV1BatchJobsJobIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1BatchJobsJobIdRouteHandler: RouteHandler<
  typeof deleteV1BatchJobsJobIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1BatchJobsJobIdCancelRouteHandler: RouteHandler<
  typeof postV1BatchJobsJobIdCancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ChatCompletionsRouteHandler: RouteHandler<
  typeof postV1ChatCompletionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1FimCompletionsRouteHandler: RouteHandler<
  typeof postV1FimCompletionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1AgentsCompletionsRouteHandler: RouteHandler<
  typeof postV1AgentsCompletionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1EmbeddingsRouteHandler: RouteHandler<typeof postV1EmbeddingsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1ModerationsRouteHandler: RouteHandler<typeof postV1ModerationsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1ChatModerationsRouteHandler: RouteHandler<
  typeof postV1ChatModerationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1OcrRouteHandler: RouteHandler<typeof postV1OcrRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ClassificationsRouteHandler: RouteHandler<
  typeof postV1ClassificationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ChatClassificationsRouteHandler: RouteHandler<
  typeof postV1ChatClassificationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1AudioTranscriptionsRouteHandler: RouteHandler<
  typeof postV1AudioTranscriptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1AudioTranscriptionsStreamRouteHandler: RouteHandler<
  typeof postV1AudioTranscriptionsStreamRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1LibrariesRouteHandler: RouteHandler<typeof getV1LibrariesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1LibrariesRouteHandler: RouteHandler<typeof postV1LibrariesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1LibrariesLibraryIdRouteHandler: RouteHandler<
  typeof getV1LibrariesLibraryIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1LibrariesLibraryIdRouteHandler: RouteHandler<
  typeof deleteV1LibrariesLibraryIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1LibrariesLibraryIdRouteHandler: RouteHandler<
  typeof patchV1LibrariesLibraryIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1LibrariesLibraryIdRouteHandler: RouteHandler<
  typeof putV1LibrariesLibraryIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1LibrariesLibraryIdDocumentsRouteHandler: RouteHandler<
  typeof getV1LibrariesLibraryIdDocumentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1LibrariesLibraryIdDocumentsRouteHandler: RouteHandler<
  typeof postV1LibrariesLibraryIdDocumentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1LibrariesLibraryIdDocumentsDocumentIdRouteHandler: RouteHandler<
  typeof getV1LibrariesLibraryIdDocumentsDocumentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1LibrariesLibraryIdDocumentsDocumentIdRouteHandler: RouteHandler<
  typeof patchV1LibrariesLibraryIdDocumentsDocumentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1LibrariesLibraryIdDocumentsDocumentIdRouteHandler: RouteHandler<
  typeof putV1LibrariesLibraryIdDocumentsDocumentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1LibrariesLibraryIdDocumentsDocumentIdRouteHandler: RouteHandler<
  typeof deleteV1LibrariesLibraryIdDocumentsDocumentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1LibrariesLibraryIdDocumentsDocumentIdTextContentRouteHandler: RouteHandler<
  typeof getV1LibrariesLibraryIdDocumentsDocumentIdTextContentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1LibrariesLibraryIdDocumentsDocumentIdStatusRouteHandler: RouteHandler<
  typeof getV1LibrariesLibraryIdDocumentsDocumentIdStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1LibrariesLibraryIdDocumentsDocumentIdSignedUrlRouteHandler: RouteHandler<
  typeof getV1LibrariesLibraryIdDocumentsDocumentIdSignedUrlRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1LibrariesLibraryIdDocumentsDocumentIdExtractedTextSignedUrlRouteHandler: RouteHandler<
  typeof getV1LibrariesLibraryIdDocumentsDocumentIdExtractedTextSignedUrlRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1LibrariesLibraryIdDocumentsDocumentIdReprocessRouteHandler: RouteHandler<
  typeof postV1LibrariesLibraryIdDocumentsDocumentIdReprocessRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1LibrariesLibraryIdShareRouteHandler: RouteHandler<
  typeof getV1LibrariesLibraryIdShareRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1LibrariesLibraryIdShareRouteHandler: RouteHandler<
  typeof putV1LibrariesLibraryIdShareRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1LibrariesLibraryIdShareRouteHandler: RouteHandler<
  typeof deleteV1LibrariesLibraryIdShareRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ObservabilityDatasetsRouteHandler: RouteHandler<
  typeof postV1ObservabilityDatasetsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ObservabilityDatasetsRouteHandler: RouteHandler<
  typeof getV1ObservabilityDatasetsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ObservabilityDatasetsDatasetIdRouteHandler: RouteHandler<
  typeof getV1ObservabilityDatasetsDatasetIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1ObservabilityDatasetsDatasetIdRouteHandler: RouteHandler<
  typeof deleteV1ObservabilityDatasetsDatasetIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1ObservabilityDatasetsDatasetIdRouteHandler: RouteHandler<
  typeof patchV1ObservabilityDatasetsDatasetIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ObservabilityDatasetsDatasetIdRecordsRouteHandler: RouteHandler<
  typeof getV1ObservabilityDatasetsDatasetIdRecordsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ObservabilityDatasetsDatasetIdRecordsRouteHandler: RouteHandler<
  typeof postV1ObservabilityDatasetsDatasetIdRecordsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ObservabilityDatasetsDatasetIdRecordsBulkRouteHandler: RouteHandler<
  typeof postV1ObservabilityDatasetsDatasetIdRecordsBulkRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ObservabilityDatasetsDatasetIdImportsFromFileRouteHandler: RouteHandler<
  typeof postV1ObservabilityDatasetsDatasetIdImportsFromFileRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ObservabilityDatasetsDatasetIdImportsFromSpansRouteHandler: RouteHandler<
  typeof postV1ObservabilityDatasetsDatasetIdImportsFromSpansRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ObservabilityDatasetsDatasetIdImportsFromDatasetRouteHandler: RouteHandler<
  typeof postV1ObservabilityDatasetsDatasetIdImportsFromDatasetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ObservabilityDatasetsDatasetIdExportsToJsonlRouteHandler: RouteHandler<
  typeof getV1ObservabilityDatasetsDatasetIdExportsToJsonlRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ObservabilityDatasetsDatasetIdTasksTaskIdRouteHandler: RouteHandler<
  typeof getV1ObservabilityDatasetsDatasetIdTasksTaskIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ObservabilityDatasetsDatasetIdTasksRouteHandler: RouteHandler<
  typeof getV1ObservabilityDatasetsDatasetIdTasksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ObservabilityDatasetRecordsDatasetRecordIdRouteHandler: RouteHandler<
  typeof getV1ObservabilityDatasetRecordsDatasetRecordIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1ObservabilityDatasetRecordsDatasetRecordIdRouteHandler: RouteHandler<
  typeof deleteV1ObservabilityDatasetRecordsDatasetRecordIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ObservabilityDatasetRecordsBulkDeleteRouteHandler: RouteHandler<
  typeof postV1ObservabilityDatasetRecordsBulkDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1ObservabilityDatasetRecordsDatasetRecordIdPayloadRouteHandler: RouteHandler<
  typeof putV1ObservabilityDatasetRecordsDatasetRecordIdPayloadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1ObservabilityDatasetRecordsDatasetRecordIdPropertiesRouteHandler: RouteHandler<
  typeof putV1ObservabilityDatasetRecordsDatasetRecordIdPropertiesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ObservabilityPipelinesRouteHandler: RouteHandler<
  typeof postV1ObservabilityPipelinesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ObservabilityPipelinesRouteHandler: RouteHandler<
  typeof getV1ObservabilityPipelinesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ObservabilityPipelinesPipelineIdRouteHandler: RouteHandler<
  typeof getV1ObservabilityPipelinesPipelineIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1ObservabilityPipelinesPipelineIdRouteHandler: RouteHandler<
  typeof putV1ObservabilityPipelinesPipelineIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1ObservabilityPipelinesPipelineIdRouteHandler: RouteHandler<
  typeof deleteV1ObservabilityPipelinesPipelineIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ObservabilityLogsSearchRouteHandler: RouteHandler<
  typeof postV1ObservabilityLogsSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ObservabilityTracesSearchRouteHandler: RouteHandler<
  typeof postV1ObservabilityTracesSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ObservabilityTracesAggregateRouteHandler: RouteHandler<
  typeof postV1ObservabilityTracesAggregateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ObservabilitySpansSearchRouteHandler: RouteHandler<
  typeof postV1ObservabilitySpansSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ObservabilitySpansAggregateRouteHandler: RouteHandler<
  typeof postV1ObservabilitySpansAggregateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ObservabilitySpansEvaluationsAggregateRouteHandler: RouteHandler<
  typeof postV1ObservabilitySpansEvaluationsAggregateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ObservabilitySpansEvaluationsSearchRouteHandler: RouteHandler<
  typeof postV1ObservabilitySpansEvaluationsSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ObservabilitySpansEvaluationsSearchLatestRouteHandler: RouteHandler<
  typeof postV1ObservabilitySpansEvaluationsSearchLatestRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ObservabilityPipelineResultsSearchRouteHandler: RouteHandler<
  typeof postV1ObservabilityPipelineResultsSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ObservabilityPipelinesPipelineIdResultsFieldsRouteHandler: RouteHandler<
  typeof getV1ObservabilityPipelinesPipelineIdResultsFieldsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ObservabilityTracesFieldsRouteHandler: RouteHandler<
  typeof getV1ObservabilityTracesFieldsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ObservabilityTracesTraceIdRouteHandler: RouteHandler<
  typeof getV1ObservabilityTracesTraceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ObservabilityTracesTraceIdSpansRouteHandler: RouteHandler<
  typeof getV1ObservabilityTracesTraceIdSpansRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ObservabilityLogsFieldsRouteHandler: RouteHandler<
  typeof getV1ObservabilityLogsFieldsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ObservabilitySpansFieldsRouteHandler: RouteHandler<
  typeof getV1ObservabilitySpansFieldsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ObservabilitySpansEvaluationsFieldsRouteHandler: RouteHandler<
  typeof getV1ObservabilitySpansEvaluationsFieldsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ObservabilityTracesFieldsFieldNameOptionsRouteHandler: RouteHandler<
  typeof getV1ObservabilityTracesFieldsFieldNameOptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ObservabilityLogsFieldsFieldNameOptionsRouteHandler: RouteHandler<
  typeof getV1ObservabilityLogsFieldsFieldNameOptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ObservabilitySpansFieldsFieldNameOptionsRouteHandler: RouteHandler<
  typeof getV1ObservabilitySpansFieldsFieldNameOptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ObservabilitySpansEvaluationsFieldsFieldNameOptionsRouteHandler: RouteHandler<
  typeof getV1ObservabilitySpansEvaluationsFieldsFieldNameOptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ObservabilityTracesTraceIdSpansSpanIdRouteHandler: RouteHandler<
  typeof getV1ObservabilityTracesTraceIdSpansSpanIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ObservabilityProjectsRouteHandler: RouteHandler<
  typeof getV1ObservabilityProjectsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ObservabilityProjectsProjectSlugRouteHandler: RouteHandler<
  typeof getV1ObservabilityProjectsProjectSlugRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ObservabilityProjectsProjectSlugEvaluationsV2RouteHandler: RouteHandler<
  typeof getV1ObservabilityProjectsProjectSlugEvaluationsV2Route
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ObservabilityEvaluationsV2EvaluationSlugRouteHandler: RouteHandler<
  typeof getV1ObservabilityEvaluationsV2EvaluationSlugRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ObservabilityEvaluationsV2EvaluationSlugRunsSearchRouteHandler: RouteHandler<
  typeof postV1ObservabilityEvaluationsV2EvaluationSlugRunsSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ObservabilityEvaluationRunsV2SearchRouteHandler: RouteHandler<
  typeof postV1ObservabilityEvaluationRunsV2SearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ObservabilityEvaluationRunsV2RunIdRouteHandler: RouteHandler<
  typeof getV1ObservabilityEvaluationRunsV2RunIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ObservabilityEvaluationRunsV2RunIdStatisticsRouteHandler: RouteHandler<
  typeof getV1ObservabilityEvaluationRunsV2RunIdStatisticsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ObservabilityEvaluationRunsV2RunIdStatisticsComputeRouteHandler: RouteHandler<
  typeof postV1ObservabilityEvaluationRunsV2RunIdStatisticsComputeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ObservabilityEvaluationRunsV2RunIdRecordsRecordIdRouteHandler: RouteHandler<
  typeof getV1ObservabilityEvaluationRunsV2RunIdRecordsRecordIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ObservabilityEvaluationRunsV2RunIdRecordsSearchRouteHandler: RouteHandler<
  typeof postV1ObservabilityEvaluationRunsV2RunIdRecordsSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ObservabilityOptimizationsRouteHandler: RouteHandler<
  typeof getV1ObservabilityOptimizationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ObservabilityOptimizationsOptimizationIdRouteHandler: RouteHandler<
  typeof getV1ObservabilityOptimizationsOptimizationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ObservabilityOptimizationsOptimizationIdTrialsRouteHandler: RouteHandler<
  typeof getV1ObservabilityOptimizationsOptimizationIdTrialsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ObservabilityScorersRouteHandler: RouteHandler<
  typeof getV1ObservabilityScorersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ObservabilityScorersRouteHandler: RouteHandler<
  typeof postV1ObservabilityScorersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ObservabilityScorersScorerSlugRouteHandler: RouteHandler<
  typeof getV1ObservabilityScorersScorerSlugRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1ObservabilityScorersScorerSlugRouteHandler: RouteHandler<
  typeof patchV1ObservabilityScorersScorerSlugRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConnectorsRouteHandler: RouteHandler<typeof postV1ConnectorsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1ConnectorsRouteHandler: RouteHandler<typeof getV1ConnectorsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ConnectorsConnectorIdOrNameAuthUrlRouteHandler: RouteHandler<
  typeof getV1ConnectorsConnectorIdOrNameAuthUrlRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1ConnectorsConnectorIdShareRouteHandler: RouteHandler<
  typeof putV1ConnectorsConnectorIdShareRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1ConnectorsConnectorIdShareRouteHandler: RouteHandler<
  typeof deleteV1ConnectorsConnectorIdShareRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1ConnectorsConnectorIdOrganizationShareRouteHandler: RouteHandler<
  typeof putV1ConnectorsConnectorIdOrganizationShareRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1ConnectorsConnectorIdOrganizationShareRouteHandler: RouteHandler<
  typeof deleteV1ConnectorsConnectorIdOrganizationShareRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConnectorsConnectorIdConsumerScopeActivateRouteHandler: RouteHandler<
  typeof postV1ConnectorsConnectorIdConsumerScopeActivateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConnectorsConnectorIdConsumerScopeDeactivateRouteHandler: RouteHandler<
  typeof postV1ConnectorsConnectorIdConsumerScopeDeactivateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConnectorsConnectorIdOrNameToolsToolNameCallRouteHandler: RouteHandler<
  typeof postV1ConnectorsConnectorIdOrNameToolsToolNameCallRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ConnectorsConnectorIdOrNameToolsRouteHandler: RouteHandler<
  typeof getV1ConnectorsConnectorIdOrNameToolsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ConnectorsConnectorIdOrNameAuthenticationMethodsRouteHandler: RouteHandler<
  typeof getV1ConnectorsConnectorIdOrNameAuthenticationMethodsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ConnectorsConnectorIdOrNameOrganizationCredentialsRouteHandler: RouteHandler<
  typeof getV1ConnectorsConnectorIdOrNameOrganizationCredentialsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ConnectorsConnectorIdOrNameWorkspaceCredentialsRouteHandler: RouteHandler<
  typeof getV1ConnectorsConnectorIdOrNameWorkspaceCredentialsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ConnectorsConnectorIdOrNameUserCredentialsRouteHandler: RouteHandler<
  typeof getV1ConnectorsConnectorIdOrNameUserCredentialsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1ConnectorsConnectorIdOrNameUserCredentialsRouteHandler: RouteHandler<
  typeof deleteV1ConnectorsConnectorIdOrNameUserCredentialsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConnectorsConnectorIdOrNameConsumerScopeCredentialsRouteHandler: RouteHandler<
  typeof postV1ConnectorsConnectorIdOrNameConsumerScopeCredentialsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1ConnectorsConnectorIdOrNameConsumerScopeCredentialsRouteHandler: RouteHandler<
  typeof patchV1ConnectorsConnectorIdOrNameConsumerScopeCredentialsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1ConnectorsConnectorIdOrNameConsumerScopeCredentialsCredentialsNameRouteHandler: RouteHandler<
  typeof deleteV1ConnectorsConnectorIdOrNameConsumerScopeCredentialsCredentialsNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ConnectorsConnectorIdOrNameIdOrNameRouteHandler: RouteHandler<
  typeof getV1ConnectorsConnectorIdOrNameIdOrNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1ConnectorsConnectorIdIdRouteHandler: RouteHandler<
  typeof patchV1ConnectorsConnectorIdIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1ConnectorsConnectorIdIdRouteHandler: RouteHandler<
  typeof deleteV1ConnectorsConnectorIdIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AudioVoicesRouteHandler: RouteHandler<typeof getV1AudioVoicesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1AudioVoicesRouteHandler: RouteHandler<typeof postV1AudioVoicesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteV1AudioVoicesVoiceIdRouteHandler: RouteHandler<
  typeof deleteV1AudioVoicesVoiceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1AudioVoicesVoiceIdRouteHandler: RouteHandler<
  typeof patchV1AudioVoicesVoiceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AudioVoicesVoiceIdRouteHandler: RouteHandler<
  typeof getV1AudioVoicesVoiceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AudioVoicesVoiceIdSampleRouteHandler: RouteHandler<
  typeof getV1AudioVoicesVoiceIdSampleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1AudioSessionsRouteHandler: RouteHandler<
  typeof postV1AudioSessionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AudioSessionsSessionIdRouteHandler: RouteHandler<
  typeof getV1AudioSessionsSessionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1AudioSessionsSessionIdRouteHandler: RouteHandler<
  typeof patchV1AudioSessionsSessionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1AudioSessionsSessionIdRouteHandler: RouteHandler<
  typeof deleteV1AudioSessionsSessionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AudioAgentsRouteHandler: RouteHandler<typeof getV1AudioAgentsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1AudioAgentsRouteHandler: RouteHandler<typeof postV1AudioAgentsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1AudioAgentsAgentIdRouteHandler: RouteHandler<
  typeof getV1AudioAgentsAgentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1AudioAgentsAgentIdRouteHandler: RouteHandler<
  typeof putV1AudioAgentsAgentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1AudioAgentsAgentIdRouteHandler: RouteHandler<
  typeof deleteV1AudioAgentsAgentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AudioAgentsAgentIdVersionsRouteHandler: RouteHandler<
  typeof getV1AudioAgentsAgentIdVersionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AudioAgentsAgentIdSessionsRouteHandler: RouteHandler<
  typeof getV1AudioAgentsAgentIdSessionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1WorkflowsExecutionsExecutionIdRouteHandler: RouteHandler<
  typeof getV1WorkflowsExecutionsExecutionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1WorkflowsExecutionsExecutionIdHistoryRouteHandler: RouteHandler<
  typeof getV1WorkflowsExecutionsExecutionIdHistoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1WorkflowsExecutionsExecutionIdSignalsRouteHandler: RouteHandler<
  typeof postV1WorkflowsExecutionsExecutionIdSignalsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1WorkflowsExecutionsExecutionIdQueriesRouteHandler: RouteHandler<
  typeof postV1WorkflowsExecutionsExecutionIdQueriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1WorkflowsExecutionsExecutionIdTerminateRouteHandler: RouteHandler<
  typeof postV1WorkflowsExecutionsExecutionIdTerminateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1WorkflowsExecutionsTerminateRouteHandler: RouteHandler<
  typeof postV1WorkflowsExecutionsTerminateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1WorkflowsExecutionsExecutionIdCancelRouteHandler: RouteHandler<
  typeof postV1WorkflowsExecutionsExecutionIdCancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1WorkflowsExecutionsCancelRouteHandler: RouteHandler<
  typeof postV1WorkflowsExecutionsCancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1WorkflowsExecutionsExecutionIdResetRouteHandler: RouteHandler<
  typeof postV1WorkflowsExecutionsExecutionIdResetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1WorkflowsExecutionsExecutionIdUpdatesRouteHandler: RouteHandler<
  typeof postV1WorkflowsExecutionsExecutionIdUpdatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1WorkflowsExecutionsExecutionIdTraceInfoRouteHandler: RouteHandler<
  typeof getV1WorkflowsExecutionsExecutionIdTraceInfoRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1WorkflowsExecutionsExecutionIdTraceOtelRouteHandler: RouteHandler<
  typeof getV1WorkflowsExecutionsExecutionIdTraceOtelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1WorkflowsExecutionsExecutionIdTraceSummaryRouteHandler: RouteHandler<
  typeof getV1WorkflowsExecutionsExecutionIdTraceSummaryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1WorkflowsExecutionsExecutionIdTraceEventsRouteHandler: RouteHandler<
  typeof getV1WorkflowsExecutionsExecutionIdTraceEventsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1WorkflowsExecutionsExecutionIdStreamRouteHandler: RouteHandler<
  typeof getV1WorkflowsExecutionsExecutionIdStreamRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1WorkflowsExecutionsExecutionIdLogsRouteHandler: RouteHandler<
  typeof getV1WorkflowsExecutionsExecutionIdLogsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1WorkflowsExecutionsExecutionIdLogsStreamRouteHandler: RouteHandler<
  typeof getV1WorkflowsExecutionsExecutionIdLogsStreamRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1WorkflowsWorkflowNameMetricsRouteHandler: RouteHandler<
  typeof getV1WorkflowsWorkflowNameMetricsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1WorkflowsRunsRouteHandler: RouteHandler<typeof getV1WorkflowsRunsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1WorkflowsRunsRunIdRouteHandler: RouteHandler<
  typeof getV1WorkflowsRunsRunIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1WorkflowsRunsRunIdHistoryRouteHandler: RouteHandler<
  typeof getV1WorkflowsRunsRunIdHistoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1WorkflowsSchedulesRouteHandler: RouteHandler<
  typeof getV1WorkflowsSchedulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1WorkflowsSchedulesRouteHandler: RouteHandler<
  typeof postV1WorkflowsSchedulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1WorkflowsSchedulesScheduleIdRouteHandler: RouteHandler<
  typeof getV1WorkflowsSchedulesScheduleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1WorkflowsSchedulesScheduleIdRouteHandler: RouteHandler<
  typeof deleteV1WorkflowsSchedulesScheduleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1WorkflowsSchedulesScheduleIdRouteHandler: RouteHandler<
  typeof patchV1WorkflowsSchedulesScheduleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1WorkflowsSchedulesScheduleIdPauseRouteHandler: RouteHandler<
  typeof postV1WorkflowsSchedulesScheduleIdPauseRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1WorkflowsSchedulesScheduleIdResumeRouteHandler: RouteHandler<
  typeof postV1WorkflowsSchedulesScheduleIdResumeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1WorkflowsSchedulesScheduleIdTriggerRouteHandler: RouteHandler<
  typeof postV1WorkflowsSchedulesScheduleIdTriggerRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1WorkflowsEventsStreamRouteHandler: RouteHandler<
  typeof getV1WorkflowsEventsStreamRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1WorkflowsEventsListRouteHandler: RouteHandler<
  typeof getV1WorkflowsEventsListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1WorkflowsDeploymentsDeploymentIdUnhardenRouteHandler: RouteHandler<
  typeof postV1WorkflowsDeploymentsDeploymentIdUnhardenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1WorkflowsDeploymentsRouteHandler: RouteHandler<
  typeof getV1WorkflowsDeploymentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1WorkflowsDeploymentsRouteHandler: RouteHandler<
  typeof postV1WorkflowsDeploymentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1WorkflowsDeploymentsNameRouteHandler: RouteHandler<
  typeof patchV1WorkflowsDeploymentsNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1WorkflowsDeploymentsNameRouteHandler: RouteHandler<
  typeof deleteV1WorkflowsDeploymentsNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1WorkflowsDeploymentsNameRouteHandler: RouteHandler<
  typeof getV1WorkflowsDeploymentsNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1WorkflowsDeploymentsNameStopRouteHandler: RouteHandler<
  typeof postV1WorkflowsDeploymentsNameStopRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1WorkflowsDeploymentsNameStartRouteHandler: RouteHandler<
  typeof postV1WorkflowsDeploymentsNameStartRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1WorkflowsDeploymentsNameRestartRouteHandler: RouteHandler<
  typeof postV1WorkflowsDeploymentsNameRestartRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1WorkflowsDeploymentsNameWorkersRouteHandler: RouteHandler<
  typeof getV1WorkflowsDeploymentsNameWorkersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1WorkflowsDeploymentsNameArchiveRouteHandler: RouteHandler<
  typeof getV1WorkflowsDeploymentsNameArchiveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1WorkflowsDeploymentsArchivesRouteHandler: RouteHandler<
  typeof postV1WorkflowsDeploymentsArchivesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1WorkflowsDeploymentsNameLogsRouteHandler: RouteHandler<
  typeof getV1WorkflowsDeploymentsNameLogsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1WorkflowsDeploymentsNameLogsStreamRouteHandler: RouteHandler<
  typeof getV1WorkflowsDeploymentsNameLogsStreamRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1WorkflowsRouteHandler: RouteHandler<typeof getV1WorkflowsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1WorkflowsRegistrationsRouteHandler: RouteHandler<
  typeof getV1WorkflowsRegistrationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1WorkflowsWorkflowIdentifierExecuteRouteHandler: RouteHandler<
  typeof postV1WorkflowsWorkflowIdentifierExecuteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1WorkflowsRegistrationsWorkflowRegistrationIdExecuteRouteHandler: RouteHandler<
  typeof postV1WorkflowsRegistrationsWorkflowRegistrationIdExecuteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1WorkflowsWorkflowIdentifierRouteHandler: RouteHandler<
  typeof getV1WorkflowsWorkflowIdentifierRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1WorkflowsWorkflowIdentifierRouteHandler: RouteHandler<
  typeof putV1WorkflowsWorkflowIdentifierRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1WorkflowsRegistrationsWorkflowRegistrationIdRouteHandler: RouteHandler<
  typeof getV1WorkflowsRegistrationsWorkflowRegistrationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1WorkflowsArchiveRouteHandler: RouteHandler<
  typeof putV1WorkflowsArchiveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1WorkflowsUnarchiveRouteHandler: RouteHandler<
  typeof putV1WorkflowsUnarchiveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1WorkflowsWorkflowIdentifierTagsRouteHandler: RouteHandler<
  typeof postV1WorkflowsWorkflowIdentifierTagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1WorkflowsWorkflowIdentifierArchiveRouteHandler: RouteHandler<
  typeof putV1WorkflowsWorkflowIdentifierArchiveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1WorkflowsWorkflowIdentifierUnarchiveRouteHandler: RouteHandler<
  typeof putV1WorkflowsWorkflowIdentifierUnarchiveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1RagIngestionPipelineConfigurationsRouteHandler: RouteHandler<
  typeof getV1RagIngestionPipelineConfigurationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1RagIngestionPipelineConfigurationsRouteHandler: RouteHandler<
  typeof putV1RagIngestionPipelineConfigurationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1RagIngestionPipelineConfigurationsIdRunInfoRouteHandler: RouteHandler<
  typeof putV1RagIngestionPipelineConfigurationsIdRunInfoRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ContextSearchIndexesRouteHandler: RouteHandler<
  typeof postV1ContextSearchIndexesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ContextSearchIndexesRouteHandler: RouteHandler<
  typeof getV1ContextSearchIndexesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ContextSearchIndexesIndexNameRouteHandler: RouteHandler<
  typeof getV1ContextSearchIndexesIndexNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1ContextSearchIndexesIndexNameRouteHandler: RouteHandler<
  typeof putV1ContextSearchIndexesIndexNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1ContextSearchIndexesIndexNameRouteHandler: RouteHandler<
  typeof deleteV1ContextSearchIndexesIndexNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ContextSearchIndexesIndexNameDocumentsRouteHandler: RouteHandler<
  typeof postV1ContextSearchIndexesIndexNameDocumentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1ContextSearchIndexesIndexNameDocumentsRouteHandler: RouteHandler<
  typeof deleteV1ContextSearchIndexesIndexNameDocumentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ContextSearchIndexesIndexNameSearchRouteHandler: RouteHandler<
  typeof postV1ContextSearchIndexesIndexNameSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ContextSearchIndexesIndexNameNavigateRouteHandler: RouteHandler<
  typeof postV1ContextSearchIndexesIndexNameNavigateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ContextSearchIndexesIndexNameReadRouteHandler: RouteHandler<
  typeof postV1ContextSearchIndexesIndexNameReadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ContextSearchIndexesIndexNameGrepRouteHandler: RouteHandler<
  typeof postV1ContextSearchIndexesIndexNameGrepRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ContextSearchIndexesIndexNameChunksChunkIdRouteHandler: RouteHandler<
  typeof getV1ContextSearchIndexesIndexNameChunksChunkIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ContextSearchIndexesIndexNameSummaryFieldLanguageRouteHandler: RouteHandler<
  typeof getV1ContextSearchIndexesIndexNameSummaryFieldLanguageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ContextSearchIndexesIndexNameSummaryFieldLanguageRouteHandler: RouteHandler<
  typeof postV1ContextSearchIndexesIndexNameSummaryFieldLanguageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1ContextSearchIndexesIndexNameSummaryFieldLanguageRouteHandler: RouteHandler<
  typeof putV1ContextSearchIndexesIndexNameSummaryFieldLanguageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1TriggersRouteHandler: RouteHandler<typeof postV1TriggersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1TriggersRouteHandler: RouteHandler<typeof getV1TriggersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1TriggersTriggerIdRouteHandler: RouteHandler<
  typeof getV1TriggersTriggerIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1TriggersTriggerIdRouteHandler: RouteHandler<
  typeof deleteV1TriggersTriggerIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1TriggersTriggerIdEventsRouteHandler: RouteHandler<
  typeof getV1TriggersTriggerIdEventsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1WebhooksRouteHandler: RouteHandler<typeof getV1WebhooksRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1WebhooksRouteHandler: RouteHandler<typeof postV1WebhooksRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1WebhooksWebhookIdRouteHandler: RouteHandler<
  typeof getV1WebhooksWebhookIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1WebhooksWebhookIdRouteHandler: RouteHandler<
  typeof deleteV1WebhooksWebhookIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1WebhooksWebhookIdSigningSecretRouteHandler: RouteHandler<
  typeof getV1WebhooksWebhookIdSigningSecretRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1UsersMeRouteHandler: RouteHandler<typeof getV1UsersMeRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1UsersMeOrganizationsRouteHandler: RouteHandler<
  typeof getV1UsersMeOrganizationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1UsersMeWorkspacesRouteHandler: RouteHandler<
  typeof getV1UsersMeWorkspacesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1WhoamiRouteHandler: RouteHandler<typeof getV1WhoamiRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1BillingBudgetRouteHandler: RouteHandler<typeof getV1BillingBudgetRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1BillingSubscriptionRouteHandler: RouteHandler<
  typeof getV1BillingSubscriptionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1AdminUsageQueryRouteHandler: RouteHandler<
  typeof postV1AdminUsageQueryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AdminUsersRouteHandler: RouteHandler<typeof getV1AdminUsersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1AdminUsersRouteHandler: RouteHandler<typeof postV1AdminUsersRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1AdminUsersInviteRouteHandler: RouteHandler<
  typeof postV1AdminUsersInviteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AdminUsersInviteRouteHandler: RouteHandler<
  typeof getV1AdminUsersInviteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1AdminUsersInviteInviteUuidRouteHandler: RouteHandler<
  typeof deleteV1AdminUsersInviteInviteUuidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1AdminUsersUserIdRouteHandler: RouteHandler<
  typeof patchV1AdminUsersUserIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1AdminUsersUserIdRouteHandler: RouteHandler<
  typeof deleteV1AdminUsersUserIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AdminUsersUserIdRouteHandler: RouteHandler<
  typeof getV1AdminUsersUserIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1AdminUsersUserIdDeactivateRouteHandler: RouteHandler<
  typeof postV1AdminUsersUserIdDeactivateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1AdminUsersUserIdReactivateRouteHandler: RouteHandler<
  typeof postV1AdminUsersUserIdReactivateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AdminUsersUserIdWorkspacesRouteHandler: RouteHandler<
  typeof getV1AdminUsersUserIdWorkspacesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AdminRolesRouteHandler: RouteHandler<typeof getV1AdminRolesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AdminWorkspacesRouteHandler: RouteHandler<
  typeof getV1AdminWorkspacesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1AdminWorkspacesRouteHandler: RouteHandler<
  typeof postV1AdminWorkspacesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1AdminWorkspacesWorkspaceUuidRouteHandler: RouteHandler<
  typeof patchV1AdminWorkspacesWorkspaceUuidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1AdminWorkspacesWorkspaceUuidRouteHandler: RouteHandler<
  typeof deleteV1AdminWorkspacesWorkspaceUuidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AdminWorkspacesWorkspaceUuidUsersRouteHandler: RouteHandler<
  typeof getV1AdminWorkspacesWorkspaceUuidUsersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1AdminWorkspacesWorkspaceUuidUsersRouteHandler: RouteHandler<
  typeof patchV1AdminWorkspacesWorkspaceUuidUsersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1AdminWorkspacesWorkspaceUuidAddUsersRouteHandler: RouteHandler<
  typeof postV1AdminWorkspacesWorkspaceUuidAddUsersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1AdminWorkspacesWorkspaceUuidRemoveUsersRouteHandler: RouteHandler<
  typeof deleteV1AdminWorkspacesWorkspaceUuidRemoveUsersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AdminRateLimitRouteHandler: RouteHandler<
  typeof getV1AdminRateLimitRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AdminSpendLimitRouteHandler: RouteHandler<
  typeof getV1AdminSpendLimitRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1AdminSpendLimitRouteHandler: RouteHandler<
  typeof postV1AdminSpendLimitRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AdminUsageRouteHandler: RouteHandler<typeof getV1AdminUsageRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AdminAuditLogsRouteHandler: RouteHandler<
  typeof getV1AdminAuditLogsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AdminUserGroupsRouteHandler: RouteHandler<
  typeof getV1AdminUserGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1AdminUserGroupsRouteHandler: RouteHandler<
  typeof postV1AdminUserGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1AdminUserGroupsProvisionWorkspaceRouteHandler: RouteHandler<
  typeof postV1AdminUserGroupsProvisionWorkspaceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AdminUserGroupsGroupUuidRouteHandler: RouteHandler<
  typeof getV1AdminUserGroupsGroupUuidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1AdminUserGroupsGroupUuidRouteHandler: RouteHandler<
  typeof patchV1AdminUserGroupsGroupUuidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1AdminUserGroupsGroupUuidRouteHandler: RouteHandler<
  typeof deleteV1AdminUserGroupsGroupUuidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AdminUserGroupsGroupUuidMembersRouteHandler: RouteHandler<
  typeof getV1AdminUserGroupsGroupUuidMembersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1AdminUserGroupsGroupUuidMembersRouteHandler: RouteHandler<
  typeof postV1AdminUserGroupsGroupUuidMembersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1AdminUserGroupsGroupUuidMembersRouteHandler: RouteHandler<
  typeof deleteV1AdminUserGroupsGroupUuidMembersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AdminUserGroupsGroupUuidWorkspacesRouteHandler: RouteHandler<
  typeof getV1AdminUserGroupsGroupUuidWorkspacesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1AdminUserGroupsGroupUuidWorkspacesRouteHandler: RouteHandler<
  typeof postV1AdminUserGroupsGroupUuidWorkspacesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1AdminUserGroupsGroupUuidWorkspacesWorkspaceUuidRouteHandler: RouteHandler<
  typeof patchV1AdminUserGroupsGroupUuidWorkspacesWorkspaceUuidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1AdminUserGroupsGroupUuidWorkspacesWorkspaceUuidRouteHandler: RouteHandler<
  typeof deleteV1AdminUserGroupsGroupUuidWorkspacesWorkspaceUuidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1AdminUserGroupsGroupUuidOrganizationRoleRouteHandler: RouteHandler<
  typeof patchV1AdminUserGroupsGroupUuidOrganizationRoleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AdminApiKeysRouteHandler: RouteHandler<typeof getV1AdminApiKeysRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1AdminApiKeysRouteHandler: RouteHandler<typeof postV1AdminApiKeysRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteV1AdminApiKeysKeyIdRouteHandler: RouteHandler<
  typeof deleteV1AdminApiKeysKeyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1AdminScimSyncRouteHandler: RouteHandler<
  typeof postV1AdminScimSyncRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AdminScimSyncRunIdRouteHandler: RouteHandler<
  typeof getV1AdminScimSyncRunIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AdminAnalyticsVibeWorkUsageByUserStatsRouteHandler: RouteHandler<
  typeof getV1AdminAnalyticsVibeWorkUsageByUserStatsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AdminAnalyticsVibeWorkUsageByAgentStatsRouteHandler: RouteHandler<
  typeof getV1AdminAnalyticsVibeWorkUsageByAgentStatsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AdminAnalyticsVibeWorkUsageByTimeStatsRouteHandler: RouteHandler<
  typeof getV1AdminAnalyticsVibeWorkUsageByTimeStatsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AdminAnalyticsVibeCodeUsageByWorkspaceRouteHandler: RouteHandler<
  typeof getV1AdminAnalyticsVibeCodeUsageByWorkspaceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AdminAnalyticsVibeCodeUsageByOrganizationRouteHandler: RouteHandler<
  typeof getV1AdminAnalyticsVibeCodeUsageByOrganizationRoute
> = async (c) => {
  throw new Error('Not implemented')
}
