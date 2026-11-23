import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1PrivateAgentConfigsBlueprintsEnvironmentsEnvNameProjectsProjectIdRoute,
  deleteV1PrivateDashboardsDashboardIdRoute,
  deleteV1PrivateDatasetsIdRoute,
  deleteV1PrivateDatasetsIdVersionsVersionHashTagsTagRoute,
  deleteV1PrivateFeedbackDefinitionsIdRoute,
  deleteV1PrivateGuardrailsPoliciesIdRoute,
  deleteV1PrivateInsightsViewsInsightsViewIdRoute,
  deleteV1PrivateLocalRunnersRunnerIdRoute,
  deleteV1PrivateOllieStateRoute,
  deleteV1PrivateProjectsIdRoute,
  deleteV1PrivatePromptsIdRoute,
  deleteV1PrivateRetentionRulesRuleIdRoute,
  deleteV1PrivateSpansIdRoute,
  deleteV1PrivateTracesIdRoute,
  deleteV1PrivateWorkspacesConfigurationsRoute,
  getV1InternalDashboardSavedQueriesIdRoute,
  getV1InternalUsageBiDatasetsRoute,
  getV1InternalUsageBiExperimentsRoute,
  getV1InternalUsageBiSpansRoute,
  getV1InternalUsageBiTracesRoute,
  getV1InternalUsageWorkspaceSpanCountsBreakdownRoute,
  getV1InternalUsageWorkspaceSpanCountsRoute,
  getV1InternalUsageWorkspaceTraceCountsRoute,
  getV1PrivateAgentConfigsBlueprintsBlueprintIdDeltasRoute,
  getV1PrivateAgentConfigsBlueprintsBlueprintIdRoute,
  getV1PrivateAgentConfigsBlueprintsEnvironmentsEnvNameProjectsProjectIdRoute,
  getV1PrivateAgentConfigsBlueprintsHistoryProjectsProjectIdRoute,
  getV1PrivateAgentConfigsBlueprintsLatestProjectsProjectIdRoute,
  getV1PrivateAgentConfigsBlueprintsProjectsProjectIdNamesNameRoute,
  getV1PrivateAgentInsightsIssuesIssueIdRoute,
  getV1PrivateAgentInsightsIssuesRoute,
  getV1PrivateAgentInsightsJobsProjectIdRoute,
  getV1PrivateAlertsIdRoute,
  getV1PrivateAlertsRoute,
  getV1PrivateAlertsWebhooksExamplesRoute,
  getV1PrivateAnnotationQueuesIdRoute,
  getV1PrivateAnnotationQueuesQueueIdLocksRoute,
  getV1PrivateAnnotationQueuesRoute,
  getV1PrivateAttachmentDownloadRoute,
  getV1PrivateAttachmentListRoute,
  getV1PrivateAuthWorkspaceRoute,
  getV1PrivateAutomationsEvaluatorsIdLogsRoute,
  getV1PrivateAutomationsEvaluatorsIdRoute,
  getV1PrivateAutomationsEvaluatorsRoute,
  getV1PrivateDashboardsDashboardIdRoute,
  getV1PrivateDashboardsRoute,
  getV1PrivateDatasetsExportJobsJobIdDownloadRoute,
  getV1PrivateDatasetsExportJobsJobIdRoute,
  getV1PrivateDatasetsExportJobsRoute,
  getV1PrivateDatasetsIdItemsExperimentsItemsOutputColumnsRoute,
  getV1PrivateDatasetsIdItemsExperimentsItemsRoute,
  getV1PrivateDatasetsIdItemsExperimentsItemsStatsRoute,
  getV1PrivateDatasetsIdItemsRoute,
  getV1PrivateDatasetsIdRoute,
  getV1PrivateDatasetsIdVersionsDiffRoute,
  getV1PrivateDatasetsIdVersionsHashVersionHashRoute,
  getV1PrivateDatasetsIdVersionsRoute,
  getV1PrivateDatasetsItemsItemIdRoute,
  getV1PrivateDatasetsRoute,
  getV1PrivateEnvironmentsIdRoute,
  getV1PrivateEnvironmentsRoute,
  getV1PrivateExperimentsFeedbackScoresNamesRoute,
  getV1PrivateExperimentsGroupsAggregationsRoute,
  getV1PrivateExperimentsGroupsRoute,
  getV1PrivateExperimentsIdRoute,
  getV1PrivateExperimentsItemsIdRoute,
  getV1PrivateExperimentsRoute,
  getV1PrivateFeedbackDefinitionsIdRoute,
  getV1PrivateFeedbackDefinitionsRoute,
  getV1PrivateGuardrailsPoliciesIdRoute,
  getV1PrivateGuardrailsPoliciesRoute,
  getV1PrivateInsightsViewsInsightsViewIdRoute,
  getV1PrivateInsightsViewsRoute,
  getV1PrivateLlmModelsProfilesRoute,
  getV1PrivateLlmModelsRoute,
  getV1PrivateLlmProviderKeyIdRoute,
  getV1PrivateLlmProviderKeyRoute,
  getV1PrivateLocalRunnersJobsJobIdLogsRoute,
  getV1PrivateLocalRunnersJobsJobIdRoute,
  getV1PrivateLocalRunnersRoute,
  getV1PrivateLocalRunnersRunnerIdBridgeCommandsCommandIdRoute,
  getV1PrivateLocalRunnersRunnerIdJobsRoute,
  getV1PrivateLocalRunnersRunnerIdRoute,
  getV1PrivateOllieStateRoute,
  getV1PrivateOptimizationsIdRoute,
  getV1PrivateOptimizationsRoute,
  getV1PrivateOptimizationsStudioIdLogsRoute,
  getV1PrivateProjectsFeedbackScoresNamesRoute,
  getV1PrivateProjectsIdRoute,
  getV1PrivateProjectsIdTokenUsageNamesRoute,
  getV1PrivateProjectsProjectIdActivitiesRoute,
  getV1PrivateProjectsProjectIdAlertsRoute,
  getV1PrivateProjectsProjectIdDashboardsRoute,
  getV1PrivateProjectsProjectIdDatasetsRoute,
  getV1PrivateProjectsProjectIdExperimentsRoute,
  getV1PrivateProjectsProjectIdOptimizationsRoute,
  getV1PrivateProjectsProjectIdPromptsRoute,
  getV1PrivateProjectsProjectIdReportsPreferencesRoute,
  getV1PrivateProjectsProjectIdReportsRoute,
  getV1PrivateProjectsRoute,
  getV1PrivateProjectsStatsRoute,
  getV1PrivatePromptsByCommitCommitRoute,
  getV1PrivatePromptsIdRoute,
  getV1PrivatePromptsIdVersionsRoute,
  getV1PrivatePromptsPromptIdVersionsByNumberVersionNumberRoute,
  getV1PrivatePromptsRoute,
  getV1PrivatePromptsVersionsVersionIdRoute,
  getV1PrivateReportFailuresRoute,
  getV1PrivateRetentionRulesRoute,
  getV1PrivateRetentionRulesRuleIdRoute,
  getV1PrivateSpansExistsRoute,
  getV1PrivateSpansFeedbackScoresNamesRoute,
  getV1PrivateSpansIdRoute,
  getV1PrivateSpansRoute,
  getV1PrivateSpansSpanIdCommentsCommentIdRoute,
  getV1PrivateSpansStatsRoute,
  getV1PrivateTogglesRoute,
  getV1PrivateTracesExistsRoute,
  getV1PrivateTracesFeedbackScoresNamesRoute,
  getV1PrivateTracesIdRoute,
  getV1PrivateTracesRoute,
  getV1PrivateTracesStatsRoute,
  getV1PrivateTracesThreadsFeedbackScoresNamesRoute,
  getV1PrivateTracesThreadsRoute,
  getV1PrivateTracesThreadsStatsRoute,
  getV1PrivateTracesThreadsThreadIdCommentsCommentIdRoute,
  getV1PrivateTracesTraceIdCommentsCommentIdRoute,
  getV1PrivateWelcomeWizardRoute,
  getV1PrivateWorkspacePermissionsRoute,
  getV1PrivateWorkspacesConfigurationsRoute,
  getV1SessionRedirectDatasetsRoute,
  getV1SessionRedirectExperimentsRoute,
  getV1SessionRedirectOptimizationsRoute,
  getV1SessionRedirectProjectsRoute,
  patchV1PrivateAgentConfigsBlueprintsRoute,
  patchV1PrivateAgentInsightsIssuesIssueIdRoute,
  patchV1PrivateAgentInsightsJobsProjectIdRoute,
  patchV1PrivateAnnotationQueuesIdRoute,
  patchV1PrivateAutomationsEvaluatorsIdRoute,
  patchV1PrivateDashboardsDashboardIdRoute,
  patchV1PrivateDatasetsIdVersionsHashVersionHashRoute,
  patchV1PrivateDatasetsItemsBatchRoute,
  patchV1PrivateDatasetsItemsItemIdRoute,
  patchV1PrivateEnvironmentsIdRoute,
  patchV1PrivateExperimentsBatchRoute,
  patchV1PrivateExperimentsIdRoute,
  patchV1PrivateInsightsViewsInsightsViewIdRoute,
  patchV1PrivateLlmProviderKeyIdRoute,
  patchV1PrivateLocalRunnersRunnerIdChecklistRoute,
  patchV1PrivateProjectsIdRoute,
  patchV1PrivatePromptsVersionsRoute,
  patchV1PrivatePromptsVersionsVersionIdEnvironmentsRoute,
  patchV1PrivateSpansBatchRoute,
  patchV1PrivateSpansCommentsCommentIdRoute,
  patchV1PrivateSpansIdRoute,
  patchV1PrivateTracesBatchRoute,
  patchV1PrivateTracesCommentsCommentIdRoute,
  patchV1PrivateTracesIdRoute,
  patchV1PrivateTracesThreadsBatchRoute,
  patchV1PrivateTracesThreadsCommentsCommentIdRoute,
  patchV1PrivateTracesThreadsThreadModelIdRoute,
  postV1InternalAgentInsightsEnrollmentRoute,
  postV1InternalAnalyticsQueriesProjectsProjectIdRoute,
  postV1InternalAnalyticsQueriesRoute,
  postV1InternalDashboardSavedQueriesRoute,
  postV1InternalUsageProjectsRoute,
  postV1PrivateAgentConfigsBlueprintsEnvironmentsRoute,
  postV1PrivateAgentConfigsBlueprintsProjectsProjectIdMasksMaskIdRoute,
  postV1PrivateAgentConfigsBlueprintsRemoveKeysRoute,
  postV1PrivateAgentConfigsBlueprintsRoute,
  postV1PrivateAgentInsightsIssuesRoute,
  postV1PrivateAgentInsightsJobsProjectIdRoute,
  postV1PrivateAgentInsightsJobsProjectIdTriggerRoute,
  postV1PrivateAlertsDeleteRoute,
  postV1PrivateAlertsRoute,
  postV1PrivateAlertsWebhooksTestsRoute,
  postV1PrivateAnnotationQueuesBatchRoute,
  postV1PrivateAnnotationQueuesDeleteRoute,
  postV1PrivateAnnotationQueuesIdItemsAddRoute,
  postV1PrivateAnnotationQueuesIdItemsDeleteRoute,
  postV1PrivateAnnotationQueuesIdItemsSearchRoute,
  postV1PrivateAnnotationQueuesRoute,
  postV1PrivateAttachmentDeleteRoute,
  postV1PrivateAttachmentUploadCompleteRoute,
  postV1PrivateAttachmentUploadStartRoute,
  postV1PrivateAuthRoute,
  postV1PrivateAutomationsEvaluatorsDeleteRoute,
  postV1PrivateAutomationsEvaluatorsRoute,
  postV1PrivateChatCompletionsRoute,
  postV1PrivateDashboardsDashboardIdWidgetsWidgetIdQueryRoute,
  postV1PrivateDashboardsDeleteBatchRoute,
  postV1PrivateDashboardsRoute,
  postV1PrivateDatasetsDatasetIdItemsFromSpansRoute,
  postV1PrivateDatasetsDatasetIdItemsFromTracesRoute,
  postV1PrivateDatasetsDeleteBatchRoute,
  postV1PrivateDatasetsDeleteRoute,
  postV1PrivateDatasetsIdExpansionsRoute,
  postV1PrivateDatasetsIdExportRoute,
  postV1PrivateDatasetsIdItemsChangesRoute,
  postV1PrivateDatasetsIdVersionsHashVersionHashTagsRoute,
  postV1PrivateDatasetsIdVersionsRestoreRoute,
  postV1PrivateDatasetsIdVersionsRetrieveRoute,
  postV1PrivateDatasetsItemsDeleteRoute,
  postV1PrivateDatasetsItemsFromCsvRoute,
  postV1PrivateDatasetsItemsFromJsonRoute,
  postV1PrivateDatasetsItemsStreamRoute,
  postV1PrivateDatasetsRetrieveRoute,
  postV1PrivateDatasetsRoute,
  postV1PrivateEnvironmentsDeleteRoute,
  postV1PrivateEnvironmentsRoute,
  postV1PrivateExperimentsDeleteRoute,
  postV1PrivateExperimentsExecuteRoute,
  postV1PrivateExperimentsFinishRoute,
  postV1PrivateExperimentsItemsDeleteRoute,
  postV1PrivateExperimentsItemsRoute,
  postV1PrivateExperimentsItemsStreamRoute,
  postV1PrivateExperimentsRoute,
  postV1PrivateExperimentsStreamRoute,
  postV1PrivateFeedbackDefinitionsDeleteRoute,
  postV1PrivateFeedbackDefinitionsRoute,
  postV1PrivateGuardrailsPoliciesRoute,
  postV1PrivateGuardrailsRoute,
  postV1PrivateGuardrailsValidationsRoute,
  postV1PrivateInsightsViewsDeleteBatchRoute,
  postV1PrivateInsightsViewsInsightsViewIdWidgetsWidgetIdQueryRoute,
  postV1PrivateInsightsViewsRoute,
  postV1PrivateLlmProviderKeyAuthConfigTestRoute,
  postV1PrivateLlmProviderKeyDeleteRoute,
  postV1PrivateLlmProviderKeyRoute,
  postV1PrivateLocalRunnersJobsJobIdCancelRoute,
  postV1PrivateLocalRunnersJobsJobIdLogsRoute,
  postV1PrivateLocalRunnersJobsJobIdResultsRoute,
  postV1PrivateLocalRunnersJobsRoute,
  postV1PrivateLocalRunnersRunnerIdBridgeCommandsCommandIdResultsRoute,
  postV1PrivateLocalRunnersRunnerIdBridgeCommandsNextRoute,
  postV1PrivateLocalRunnersRunnerIdBridgeCommandsRoute,
  postV1PrivateLocalRunnersRunnerIdHeartbeatsRoute,
  postV1PrivateLocalRunnersRunnerIdJobsNextRoute,
  postV1PrivateManualEvaluationSpansRoute,
  postV1PrivateManualEvaluationThreadsRoute,
  postV1PrivateManualEvaluationTracesRoute,
  postV1PrivateOllamaModelsRoute,
  postV1PrivateOllamaTestConnectionRoute,
  postV1PrivateOptimizationsDeleteRoute,
  postV1PrivateOptimizationsRoute,
  postV1PrivateOtelV1TracesRoute,
  postV1PrivatePairingSessionsRoute,
  postV1PrivatePairingSessionsSessionIdActivateRoute,
  postV1PrivateProjectsDeleteRoute,
  postV1PrivateProjectsIdKpiCardsRoute,
  postV1PrivateProjectsIdMetricsRoute,
  postV1PrivateProjectsProjectIdReportsGenerateRoute,
  postV1PrivateProjectsProjectIdReportsReportIdCompleteRoute,
  postV1PrivateProjectsRetrieveRoute,
  postV1PrivateProjectsRoute,
  postV1PrivatePromptsDeleteRoute,
  postV1PrivatePromptsPromptIdVersionsVersionIdRestoreRoute,
  postV1PrivatePromptsRetrieveByCommitsRoute,
  postV1PrivatePromptsRoute,
  postV1PrivatePromptsVersionsRetrieveByIdsRoute,
  postV1PrivatePromptsVersionsRetrieveRoute,
  postV1PrivatePromptsVersionsRoute,
  postV1PrivateReportFailuresRoute,
  postV1PrivateRetentionRulesRoute,
  postV1PrivateSpansBatchRoute,
  postV1PrivateSpansCommentsDeleteRoute,
  postV1PrivateSpansIdCommentsRoute,
  postV1PrivateSpansIdFeedbackScoresDeleteRoute,
  postV1PrivateSpansRoute,
  postV1PrivateSpansSearchRoute,
  postV1PrivateTracesBatchRoute,
  postV1PrivateTracesCommentsDeleteRoute,
  postV1PrivateTracesDeleteRoute,
  postV1PrivateTracesIdCommentsRoute,
  postV1PrivateTracesIdFeedbackScoresDeleteRoute,
  postV1PrivateTracesRoute,
  postV1PrivateTracesSearchRoute,
  postV1PrivateTracesThreadsCommentsDeleteRoute,
  postV1PrivateTracesThreadsDeleteRoute,
  postV1PrivateTracesThreadsFeedbackScoresDeleteRoute,
  postV1PrivateTracesThreadsIdCommentsRoute,
  postV1PrivateTracesThreadsRetrieveRoute,
  postV1PrivateTracesThreadsSearchRoute,
  postV1PrivateWelcomeWizardRoute,
  postV1PrivateWorkspacesCostsRoute,
  postV1PrivateWorkspacesCostsSummariesRoute,
  postV1PrivateWorkspacesMetricsRoute,
  postV1PrivateWorkspacesMetricsSpansRoute,
  postV1PrivateWorkspacesMetricsSummariesRoute,
  postV1PrivateWorkspacesTokenUsageNamesRoute,
  putV1PrivateAgentConfigsBlueprintsEnvironmentsEnvNameProjectsProjectIdRoute,
  putV1PrivateAgentInsightsJobsProjectIdGuidanceRoute,
  putV1PrivateAlertsIdRoute,
  putV1PrivateAnnotationQueuesQueueIdItemsItemIdLockRoute,
  putV1PrivateAssertionResultsRoute,
  putV1PrivateAttachmentUploadRoute,
  putV1PrivateDatasetsExportJobsJobIdMarkViewedRoute,
  putV1PrivateDatasetsIdRoute,
  putV1PrivateDatasetsItemsRoute,
  putV1PrivateExperimentsCancelRoute,
  putV1PrivateExperimentsItemsBulkRoute,
  putV1PrivateFeedbackDefinitionsIdRoute,
  putV1PrivateGuardrailsPoliciesIdRoute,
  putV1PrivateLocalRunnersRunnerIdAgentsRoute,
  putV1PrivateOllieStateRoute,
  putV1PrivateOptimizationsIdRoute,
  putV1PrivateOptimizationsRoute,
  putV1PrivateProjectsProjectIdReportsPreferencesRoute,
  putV1PrivatePromptsIdRoute,
  putV1PrivateSpansFeedbackScoresRoute,
  putV1PrivateSpansIdFeedbackScoresRoute,
  putV1PrivateTracesFeedbackScoresRoute,
  putV1PrivateTracesIdFeedbackScoresRoute,
  putV1PrivateTracesThreadsCloseRoute,
  putV1PrivateTracesThreadsFeedbackScoresRoute,
  putV1PrivateTracesThreadsOpenRoute,
  putV1PrivateWorkspacesConfigurationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v1Handler = app
  .openapi(postV1InternalAgentInsightsEnrollmentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1InternalAnalyticsQueriesProjectsProjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1InternalAnalyticsQueriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1InternalDashboardSavedQueriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1InternalDashboardSavedQueriesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1InternalUsageProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1InternalUsageBiDatasetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1InternalUsageBiExperimentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1InternalUsageBiSpansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1InternalUsageWorkspaceSpanCountsBreakdownRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1InternalUsageWorkspaceSpanCountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1InternalUsageBiTracesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1InternalUsageWorkspaceTraceCountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateAgentConfigsBlueprintsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1PrivateAgentConfigsBlueprintsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateAgentConfigsBlueprintsProjectsProjectIdMasksMaskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateAgentConfigsBlueprintsEnvironmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateAgentConfigsBlueprintsEnvironmentsEnvNameProjectsProjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1PrivateAgentConfigsBlueprintsEnvironmentsEnvNameProjectsProjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1PrivateAgentConfigsBlueprintsEnvironmentsEnvNameProjectsProjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateAgentConfigsBlueprintsBlueprintIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateAgentConfigsBlueprintsProjectsProjectIdNamesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateAgentConfigsBlueprintsHistoryProjectsProjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateAgentConfigsBlueprintsBlueprintIdDeltasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateAgentConfigsBlueprintsLatestProjectsProjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateAgentConfigsBlueprintsRemoveKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateAgentInsightsJobsProjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateAgentInsightsJobsProjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1PrivateAgentInsightsJobsProjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateAgentInsightsJobsProjectIdTriggerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1PrivateAgentInsightsJobsProjectIdGuidanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateAgentInsightsIssuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateAgentInsightsIssuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateAgentInsightsIssuesIssueIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1PrivateAgentInsightsIssuesIssueIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateAlertsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateAlertsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateAlertsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateAlertsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1PrivateAlertsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateAlertsWebhooksExamplesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateAlertsWebhooksTestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateAnnotationQueuesIdItemsAddRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateAnnotationQueuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateAnnotationQueuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateAnnotationQueuesBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateAnnotationQueuesDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateAnnotationQueuesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1PrivateAnnotationQueuesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateAnnotationQueuesQueueIdLocksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1PrivateAnnotationQueuesQueueIdItemsItemIdLockRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateAnnotationQueuesIdItemsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateAnnotationQueuesIdItemsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1PrivateAssertionResultsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateAttachmentListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateAttachmentUploadCompleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateAttachmentDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateAttachmentDownloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateAttachmentUploadStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1PrivateAttachmentUploadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateAuthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateAuthWorkspaceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateAutomationsEvaluatorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateAutomationsEvaluatorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateAutomationsEvaluatorsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateAutomationsEvaluatorsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1PrivateAutomationsEvaluatorsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateAutomationsEvaluatorsIdLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateChatCompletionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateDashboardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateDashboardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateDashboardsDashboardIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1PrivateDashboardsDashboardIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1PrivateDashboardsDashboardIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateDashboardsDeleteBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateDashboardsDashboardIdWidgetsWidgetIdQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateDatasetsIdItemsChangesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1PrivateDatasetsItemsBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateDatasetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateDatasetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1PrivateDatasetsItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateDatasetsItemsFromCsvRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateDatasetsItemsFromJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateDatasetsDatasetIdItemsFromSpansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateDatasetsDatasetIdItemsFromTracesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateDatasetsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1PrivateDatasetsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1PrivateDatasetsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateDatasetsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateDatasetsItemsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateDatasetsDeleteBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateDatasetsExportJobsJobIdDownloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateDatasetsIdExpansionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateDatasetsIdItemsExperimentsItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateDatasetsRetrieveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateDatasetsIdItemsExperimentsItemsStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateDatasetsExportJobsJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateDatasetsExportJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateDatasetsItemsItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1PrivateDatasetsItemsItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateDatasetsIdItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateDatasetsIdItemsExperimentsItemsOutputColumnsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1PrivateDatasetsExportJobsJobIdMarkViewedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateDatasetsIdExportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateDatasetsItemsStreamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateDatasetsIdVersionsDiffRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateDatasetsIdVersionsHashVersionHashTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1PrivateDatasetsIdVersionsVersionHashTagsTagRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateDatasetsIdVersionsHashVersionHashRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1PrivateDatasetsIdVersionsHashVersionHashRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateDatasetsIdVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateDatasetsIdVersionsRestoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateDatasetsIdVersionsRetrieveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateEnvironmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateEnvironmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateEnvironmentsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateEnvironmentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1PrivateEnvironmentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1PrivateExperimentsBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1PrivateExperimentsCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateExperimentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateExperimentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateExperimentsItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateExperimentsItemsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateExperimentsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateExperimentsExecuteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1PrivateExperimentsItemsBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateExperimentsFeedbackScoresNamesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateExperimentsGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateExperimentsGroupsAggregationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateExperimentsFinishRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateExperimentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1PrivateExperimentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateExperimentsItemsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateExperimentsItemsStreamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateExperimentsStreamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateFeedbackDefinitionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateFeedbackDefinitionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateFeedbackDefinitionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1PrivateFeedbackDefinitionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1PrivateFeedbackDefinitionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateFeedbackDefinitionsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateGuardrailsPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateGuardrailsPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateGuardrailsPoliciesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1PrivateGuardrailsPoliciesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1PrivateGuardrailsPoliciesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateGuardrailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateGuardrailsValidationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateInsightsViewsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateInsightsViewsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateInsightsViewsInsightsViewIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1PrivateInsightsViewsInsightsViewIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1PrivateInsightsViewsInsightsViewIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateInsightsViewsDeleteBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateInsightsViewsInsightsViewIdWidgetsWidgetIdQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateLlmModelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateLlmModelsProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateLlmProviderKeyDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateLlmProviderKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateLlmProviderKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateLlmProviderKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1PrivateLlmProviderKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateLlmProviderKeyAuthConfigTestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateLocalRunnersJobsJobIdLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateLocalRunnersJobsJobIdLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateLocalRunnersJobsJobIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateLocalRunnersRunnerIdBridgeCommandsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateLocalRunnersJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateLocalRunnersRunnerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1PrivateLocalRunnersRunnerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateLocalRunnersRunnerIdBridgeCommandsCommandIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateLocalRunnersJobsJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateLocalRunnersRunnerIdHeartbeatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateLocalRunnersRunnerIdJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateLocalRunnersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateLocalRunnersRunnerIdBridgeCommandsNextRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateLocalRunnersRunnerIdJobsNextRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1PrivateLocalRunnersRunnerIdChecklistRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1PrivateLocalRunnersRunnerIdAgentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateLocalRunnersRunnerIdBridgeCommandsCommandIdResultsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateLocalRunnersJobsJobIdResultsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateManualEvaluationSpansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateManualEvaluationThreadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateManualEvaluationTracesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateOllamaModelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateOllamaTestConnectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateOllieStateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1PrivateOllieStateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1PrivateOllieStateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateOtelV1TracesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateOptimizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1PrivateOptimizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateOptimizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateOptimizationsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateOptimizationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1PrivateOptimizationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateOptimizationsStudioIdLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivatePairingSessionsSessionIdActivateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivatePairingSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateProjectsProjectIdAlertsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateProjectsProjectIdDashboardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateProjectsProjectIdDatasetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateProjectsProjectIdExperimentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateProjectsProjectIdOptimizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateProjectsProjectIdPromptsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateProjectsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1PrivateProjectsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1PrivateProjectsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateProjectsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateProjectsFeedbackScoresNamesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateProjectsIdTokenUsageNamesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateProjectsIdKpiCardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateProjectsIdMetricsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateProjectsStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateProjectsRetrieveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivatePromptsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivatePromptsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivatePromptsVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1PrivatePromptsVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivatePromptsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1PrivatePromptsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1PrivatePromptsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivatePromptsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivatePromptsByCommitCommitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivatePromptsVersionsVersionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivatePromptsPromptIdVersionsByNumberVersionNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivatePromptsIdVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivatePromptsRetrieveByCommitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivatePromptsPromptIdVersionsVersionIdRestoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivatePromptsVersionsRetrieveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivatePromptsVersionsRetrieveByIdsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1PrivatePromptsVersionsVersionIdEnvironmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateProjectsProjectIdActivitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateReportFailuresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateReportFailuresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateProjectsProjectIdReportsReportIdCompleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateProjectsProjectIdReportsGenerateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateProjectsProjectIdReportsPreferencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1PrivateProjectsProjectIdReportsPreferencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateProjectsProjectIdReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateRetentionRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateRetentionRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateRetentionRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1PrivateRetentionRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateTogglesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateSpansIdCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1PrivateSpansIdFeedbackScoresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateSpansBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1PrivateSpansBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateSpansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateSpansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateSpansIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1PrivateSpansIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1PrivateSpansIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateSpansCommentsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateSpansIdFeedbackScoresDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateSpansFeedbackScoresNamesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateSpansSpanIdCommentsCommentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateSpansStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1PrivateSpansFeedbackScoresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateSpansSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateSpansExistsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1PrivateSpansCommentsCommentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateTracesThreadsIdCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateTracesIdCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1PrivateTracesIdFeedbackScoresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateTracesBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1PrivateTracesBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1PrivateTracesThreadsBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1PrivateTracesThreadsCloseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateTracesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateTracesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateTracesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1PrivateTracesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1PrivateTracesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateTracesThreadsCommentsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateTracesThreadsFeedbackScoresDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateTracesCommentsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateTracesIdFeedbackScoresDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateTracesThreadsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateTracesDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateTracesFeedbackScoresNamesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateTracesThreadsFeedbackScoresNamesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateTracesStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateTracesThreadsThreadIdCommentsCommentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateTracesThreadsStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateTracesTraceIdCommentsCommentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateTracesThreadsRetrieveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateTracesThreadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1PrivateTracesThreadsOpenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1PrivateTracesThreadsFeedbackScoresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1PrivateTracesFeedbackScoresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateTracesThreadsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateTracesSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateTracesExistsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1PrivateTracesThreadsThreadModelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1PrivateTracesThreadsCommentsCommentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1PrivateTracesCommentsCommentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateWelcomeWizardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateWelcomeWizardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateWorkspacePermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateWorkspacesCostsSummariesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateWorkspacesConfigurationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1PrivateWorkspacesConfigurationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1PrivateWorkspacesConfigurationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateWorkspacesCostsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateWorkspacesMetricsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateWorkspacesMetricsSpansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateWorkspacesTokenUsageNamesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateWorkspacesMetricsSummariesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SessionRedirectDatasetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SessionRedirectExperimentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SessionRedirectOptimizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SessionRedirectProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
