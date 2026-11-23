import type { RouteHandler } from '@hono/zod-openapi'
import type {
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

export const postV1InternalAgentInsightsEnrollmentRouteHandler: RouteHandler<
  typeof postV1InternalAgentInsightsEnrollmentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1InternalAnalyticsQueriesProjectsProjectIdRouteHandler: RouteHandler<
  typeof postV1InternalAnalyticsQueriesProjectsProjectIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1InternalAnalyticsQueriesRouteHandler: RouteHandler<
  typeof postV1InternalAnalyticsQueriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1InternalDashboardSavedQueriesRouteHandler: RouteHandler<
  typeof postV1InternalDashboardSavedQueriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1InternalDashboardSavedQueriesIdRouteHandler: RouteHandler<
  typeof getV1InternalDashboardSavedQueriesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1InternalUsageProjectsRouteHandler: RouteHandler<
  typeof postV1InternalUsageProjectsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1InternalUsageBiDatasetsRouteHandler: RouteHandler<
  typeof getV1InternalUsageBiDatasetsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1InternalUsageBiExperimentsRouteHandler: RouteHandler<
  typeof getV1InternalUsageBiExperimentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1InternalUsageBiSpansRouteHandler: RouteHandler<
  typeof getV1InternalUsageBiSpansRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1InternalUsageWorkspaceSpanCountsBreakdownRouteHandler: RouteHandler<
  typeof getV1InternalUsageWorkspaceSpanCountsBreakdownRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1InternalUsageWorkspaceSpanCountsRouteHandler: RouteHandler<
  typeof getV1InternalUsageWorkspaceSpanCountsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1InternalUsageBiTracesRouteHandler: RouteHandler<
  typeof getV1InternalUsageBiTracesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1InternalUsageWorkspaceTraceCountsRouteHandler: RouteHandler<
  typeof getV1InternalUsageWorkspaceTraceCountsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PrivateAgentConfigsBlueprintsRouteHandler: RouteHandler<
  typeof postV1PrivateAgentConfigsBlueprintsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1PrivateAgentConfigsBlueprintsRouteHandler: RouteHandler<
  typeof patchV1PrivateAgentConfigsBlueprintsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PrivateAgentConfigsBlueprintsProjectsProjectIdMasksMaskIdRouteHandler: RouteHandler<
  typeof postV1PrivateAgentConfigsBlueprintsProjectsProjectIdMasksMaskIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PrivateAgentConfigsBlueprintsEnvironmentsRouteHandler: RouteHandler<
  typeof postV1PrivateAgentConfigsBlueprintsEnvironmentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1PrivateAgentConfigsBlueprintsEnvironmentsEnvNameProjectsProjectIdRouteHandler: RouteHandler<
  typeof getV1PrivateAgentConfigsBlueprintsEnvironmentsEnvNameProjectsProjectIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1PrivateAgentConfigsBlueprintsEnvironmentsEnvNameProjectsProjectIdRouteHandler: RouteHandler<
  typeof putV1PrivateAgentConfigsBlueprintsEnvironmentsEnvNameProjectsProjectIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1PrivateAgentConfigsBlueprintsEnvironmentsEnvNameProjectsProjectIdRouteHandler: RouteHandler<
  typeof deleteV1PrivateAgentConfigsBlueprintsEnvironmentsEnvNameProjectsProjectIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1PrivateAgentConfigsBlueprintsBlueprintIdRouteHandler: RouteHandler<
  typeof getV1PrivateAgentConfigsBlueprintsBlueprintIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1PrivateAgentConfigsBlueprintsProjectsProjectIdNamesNameRouteHandler: RouteHandler<
  typeof getV1PrivateAgentConfigsBlueprintsProjectsProjectIdNamesNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1PrivateAgentConfigsBlueprintsHistoryProjectsProjectIdRouteHandler: RouteHandler<
  typeof getV1PrivateAgentConfigsBlueprintsHistoryProjectsProjectIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1PrivateAgentConfigsBlueprintsBlueprintIdDeltasRouteHandler: RouteHandler<
  typeof getV1PrivateAgentConfigsBlueprintsBlueprintIdDeltasRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1PrivateAgentConfigsBlueprintsLatestProjectsProjectIdRouteHandler: RouteHandler<
  typeof getV1PrivateAgentConfigsBlueprintsLatestProjectsProjectIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PrivateAgentConfigsBlueprintsRemoveKeysRouteHandler: RouteHandler<
  typeof postV1PrivateAgentConfigsBlueprintsRemoveKeysRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1PrivateAgentInsightsJobsProjectIdRouteHandler: RouteHandler<
  typeof getV1PrivateAgentInsightsJobsProjectIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PrivateAgentInsightsJobsProjectIdRouteHandler: RouteHandler<
  typeof postV1PrivateAgentInsightsJobsProjectIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1PrivateAgentInsightsJobsProjectIdRouteHandler: RouteHandler<
  typeof patchV1PrivateAgentInsightsJobsProjectIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PrivateAgentInsightsJobsProjectIdTriggerRouteHandler: RouteHandler<
  typeof postV1PrivateAgentInsightsJobsProjectIdTriggerRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1PrivateAgentInsightsJobsProjectIdGuidanceRouteHandler: RouteHandler<
  typeof putV1PrivateAgentInsightsJobsProjectIdGuidanceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1PrivateAgentInsightsIssuesRouteHandler: RouteHandler<
  typeof getV1PrivateAgentInsightsIssuesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PrivateAgentInsightsIssuesRouteHandler: RouteHandler<
  typeof postV1PrivateAgentInsightsIssuesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1PrivateAgentInsightsIssuesIssueIdRouteHandler: RouteHandler<
  typeof getV1PrivateAgentInsightsIssuesIssueIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1PrivateAgentInsightsIssuesIssueIdRouteHandler: RouteHandler<
  typeof patchV1PrivateAgentInsightsIssuesIssueIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1PrivateAlertsRouteHandler: RouteHandler<typeof getV1PrivateAlertsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1PrivateAlertsRouteHandler: RouteHandler<
  typeof postV1PrivateAlertsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PrivateAlertsDeleteRouteHandler: RouteHandler<
  typeof postV1PrivateAlertsDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1PrivateAlertsIdRouteHandler: RouteHandler<
  typeof getV1PrivateAlertsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1PrivateAlertsIdRouteHandler: RouteHandler<
  typeof putV1PrivateAlertsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1PrivateAlertsWebhooksExamplesRouteHandler: RouteHandler<
  typeof getV1PrivateAlertsWebhooksExamplesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PrivateAlertsWebhooksTestsRouteHandler: RouteHandler<
  typeof postV1PrivateAlertsWebhooksTestsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PrivateAnnotationQueuesIdItemsAddRouteHandler: RouteHandler<
  typeof postV1PrivateAnnotationQueuesIdItemsAddRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1PrivateAnnotationQueuesRouteHandler: RouteHandler<
  typeof getV1PrivateAnnotationQueuesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PrivateAnnotationQueuesRouteHandler: RouteHandler<
  typeof postV1PrivateAnnotationQueuesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PrivateAnnotationQueuesBatchRouteHandler: RouteHandler<
  typeof postV1PrivateAnnotationQueuesBatchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PrivateAnnotationQueuesDeleteRouteHandler: RouteHandler<
  typeof postV1PrivateAnnotationQueuesDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1PrivateAnnotationQueuesIdRouteHandler: RouteHandler<
  typeof getV1PrivateAnnotationQueuesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1PrivateAnnotationQueuesIdRouteHandler: RouteHandler<
  typeof patchV1PrivateAnnotationQueuesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1PrivateAnnotationQueuesQueueIdLocksRouteHandler: RouteHandler<
  typeof getV1PrivateAnnotationQueuesQueueIdLocksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1PrivateAnnotationQueuesQueueIdItemsItemIdLockRouteHandler: RouteHandler<
  typeof putV1PrivateAnnotationQueuesQueueIdItemsItemIdLockRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PrivateAnnotationQueuesIdItemsDeleteRouteHandler: RouteHandler<
  typeof postV1PrivateAnnotationQueuesIdItemsDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PrivateAnnotationQueuesIdItemsSearchRouteHandler: RouteHandler<
  typeof postV1PrivateAnnotationQueuesIdItemsSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1PrivateAssertionResultsRouteHandler: RouteHandler<
  typeof putV1PrivateAssertionResultsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1PrivateAttachmentListRouteHandler: RouteHandler<
  typeof getV1PrivateAttachmentListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PrivateAttachmentUploadCompleteRouteHandler: RouteHandler<
  typeof postV1PrivateAttachmentUploadCompleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PrivateAttachmentDeleteRouteHandler: RouteHandler<
  typeof postV1PrivateAttachmentDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1PrivateAttachmentDownloadRouteHandler: RouteHandler<
  typeof getV1PrivateAttachmentDownloadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PrivateAttachmentUploadStartRouteHandler: RouteHandler<
  typeof postV1PrivateAttachmentUploadStartRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1PrivateAttachmentUploadRouteHandler: RouteHandler<
  typeof putV1PrivateAttachmentUploadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PrivateAuthRouteHandler: RouteHandler<typeof postV1PrivateAuthRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1PrivateAuthWorkspaceRouteHandler: RouteHandler<
  typeof getV1PrivateAuthWorkspaceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1PrivateAutomationsEvaluatorsRouteHandler: RouteHandler<
  typeof getV1PrivateAutomationsEvaluatorsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PrivateAutomationsEvaluatorsRouteHandler: RouteHandler<
  typeof postV1PrivateAutomationsEvaluatorsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PrivateAutomationsEvaluatorsDeleteRouteHandler: RouteHandler<
  typeof postV1PrivateAutomationsEvaluatorsDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1PrivateAutomationsEvaluatorsIdRouteHandler: RouteHandler<
  typeof getV1PrivateAutomationsEvaluatorsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1PrivateAutomationsEvaluatorsIdRouteHandler: RouteHandler<
  typeof patchV1PrivateAutomationsEvaluatorsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1PrivateAutomationsEvaluatorsIdLogsRouteHandler: RouteHandler<
  typeof getV1PrivateAutomationsEvaluatorsIdLogsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PrivateChatCompletionsRouteHandler: RouteHandler<
  typeof postV1PrivateChatCompletionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1PrivateDashboardsRouteHandler: RouteHandler<
  typeof getV1PrivateDashboardsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PrivateDashboardsRouteHandler: RouteHandler<
  typeof postV1PrivateDashboardsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1PrivateDashboardsDashboardIdRouteHandler: RouteHandler<
  typeof getV1PrivateDashboardsDashboardIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1PrivateDashboardsDashboardIdRouteHandler: RouteHandler<
  typeof deleteV1PrivateDashboardsDashboardIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1PrivateDashboardsDashboardIdRouteHandler: RouteHandler<
  typeof patchV1PrivateDashboardsDashboardIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PrivateDashboardsDeleteBatchRouteHandler: RouteHandler<
  typeof postV1PrivateDashboardsDeleteBatchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PrivateDashboardsDashboardIdWidgetsWidgetIdQueryRouteHandler: RouteHandler<
  typeof postV1PrivateDashboardsDashboardIdWidgetsWidgetIdQueryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PrivateDatasetsIdItemsChangesRouteHandler: RouteHandler<
  typeof postV1PrivateDatasetsIdItemsChangesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1PrivateDatasetsItemsBatchRouteHandler: RouteHandler<
  typeof patchV1PrivateDatasetsItemsBatchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1PrivateDatasetsRouteHandler: RouteHandler<
  typeof getV1PrivateDatasetsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PrivateDatasetsRouteHandler: RouteHandler<
  typeof postV1PrivateDatasetsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1PrivateDatasetsItemsRouteHandler: RouteHandler<
  typeof putV1PrivateDatasetsItemsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PrivateDatasetsItemsFromCsvRouteHandler: RouteHandler<
  typeof postV1PrivateDatasetsItemsFromCsvRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PrivateDatasetsItemsFromJsonRouteHandler: RouteHandler<
  typeof postV1PrivateDatasetsItemsFromJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PrivateDatasetsDatasetIdItemsFromSpansRouteHandler: RouteHandler<
  typeof postV1PrivateDatasetsDatasetIdItemsFromSpansRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PrivateDatasetsDatasetIdItemsFromTracesRouteHandler: RouteHandler<
  typeof postV1PrivateDatasetsDatasetIdItemsFromTracesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1PrivateDatasetsIdRouteHandler: RouteHandler<
  typeof getV1PrivateDatasetsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1PrivateDatasetsIdRouteHandler: RouteHandler<
  typeof putV1PrivateDatasetsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1PrivateDatasetsIdRouteHandler: RouteHandler<
  typeof deleteV1PrivateDatasetsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PrivateDatasetsDeleteRouteHandler: RouteHandler<
  typeof postV1PrivateDatasetsDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PrivateDatasetsItemsDeleteRouteHandler: RouteHandler<
  typeof postV1PrivateDatasetsItemsDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PrivateDatasetsDeleteBatchRouteHandler: RouteHandler<
  typeof postV1PrivateDatasetsDeleteBatchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1PrivateDatasetsExportJobsJobIdDownloadRouteHandler: RouteHandler<
  typeof getV1PrivateDatasetsExportJobsJobIdDownloadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PrivateDatasetsIdExpansionsRouteHandler: RouteHandler<
  typeof postV1PrivateDatasetsIdExpansionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1PrivateDatasetsIdItemsExperimentsItemsRouteHandler: RouteHandler<
  typeof getV1PrivateDatasetsIdItemsExperimentsItemsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PrivateDatasetsRetrieveRouteHandler: RouteHandler<
  typeof postV1PrivateDatasetsRetrieveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1PrivateDatasetsIdItemsExperimentsItemsStatsRouteHandler: RouteHandler<
  typeof getV1PrivateDatasetsIdItemsExperimentsItemsStatsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1PrivateDatasetsExportJobsJobIdRouteHandler: RouteHandler<
  typeof getV1PrivateDatasetsExportJobsJobIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1PrivateDatasetsExportJobsRouteHandler: RouteHandler<
  typeof getV1PrivateDatasetsExportJobsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1PrivateDatasetsItemsItemIdRouteHandler: RouteHandler<
  typeof getV1PrivateDatasetsItemsItemIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1PrivateDatasetsItemsItemIdRouteHandler: RouteHandler<
  typeof patchV1PrivateDatasetsItemsItemIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1PrivateDatasetsIdItemsRouteHandler: RouteHandler<
  typeof getV1PrivateDatasetsIdItemsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1PrivateDatasetsIdItemsExperimentsItemsOutputColumnsRouteHandler: RouteHandler<
  typeof getV1PrivateDatasetsIdItemsExperimentsItemsOutputColumnsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1PrivateDatasetsExportJobsJobIdMarkViewedRouteHandler: RouteHandler<
  typeof putV1PrivateDatasetsExportJobsJobIdMarkViewedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PrivateDatasetsIdExportRouteHandler: RouteHandler<
  typeof postV1PrivateDatasetsIdExportRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PrivateDatasetsItemsStreamRouteHandler: RouteHandler<
  typeof postV1PrivateDatasetsItemsStreamRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1PrivateDatasetsIdVersionsDiffRouteHandler: RouteHandler<
  typeof getV1PrivateDatasetsIdVersionsDiffRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PrivateDatasetsIdVersionsHashVersionHashTagsRouteHandler: RouteHandler<
  typeof postV1PrivateDatasetsIdVersionsHashVersionHashTagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1PrivateDatasetsIdVersionsVersionHashTagsTagRouteHandler: RouteHandler<
  typeof deleteV1PrivateDatasetsIdVersionsVersionHashTagsTagRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1PrivateDatasetsIdVersionsHashVersionHashRouteHandler: RouteHandler<
  typeof getV1PrivateDatasetsIdVersionsHashVersionHashRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1PrivateDatasetsIdVersionsHashVersionHashRouteHandler: RouteHandler<
  typeof patchV1PrivateDatasetsIdVersionsHashVersionHashRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1PrivateDatasetsIdVersionsRouteHandler: RouteHandler<
  typeof getV1PrivateDatasetsIdVersionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PrivateDatasetsIdVersionsRestoreRouteHandler: RouteHandler<
  typeof postV1PrivateDatasetsIdVersionsRestoreRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PrivateDatasetsIdVersionsRetrieveRouteHandler: RouteHandler<
  typeof postV1PrivateDatasetsIdVersionsRetrieveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1PrivateEnvironmentsRouteHandler: RouteHandler<
  typeof getV1PrivateEnvironmentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PrivateEnvironmentsRouteHandler: RouteHandler<
  typeof postV1PrivateEnvironmentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PrivateEnvironmentsDeleteRouteHandler: RouteHandler<
  typeof postV1PrivateEnvironmentsDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1PrivateEnvironmentsIdRouteHandler: RouteHandler<
  typeof getV1PrivateEnvironmentsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1PrivateEnvironmentsIdRouteHandler: RouteHandler<
  typeof patchV1PrivateEnvironmentsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1PrivateExperimentsBatchRouteHandler: RouteHandler<
  typeof patchV1PrivateExperimentsBatchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1PrivateExperimentsCancelRouteHandler: RouteHandler<
  typeof putV1PrivateExperimentsCancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1PrivateExperimentsRouteHandler: RouteHandler<
  typeof getV1PrivateExperimentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PrivateExperimentsRouteHandler: RouteHandler<
  typeof postV1PrivateExperimentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PrivateExperimentsItemsRouteHandler: RouteHandler<
  typeof postV1PrivateExperimentsItemsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PrivateExperimentsItemsDeleteRouteHandler: RouteHandler<
  typeof postV1PrivateExperimentsItemsDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PrivateExperimentsDeleteRouteHandler: RouteHandler<
  typeof postV1PrivateExperimentsDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PrivateExperimentsExecuteRouteHandler: RouteHandler<
  typeof postV1PrivateExperimentsExecuteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1PrivateExperimentsItemsBulkRouteHandler: RouteHandler<
  typeof putV1PrivateExperimentsItemsBulkRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1PrivateExperimentsFeedbackScoresNamesRouteHandler: RouteHandler<
  typeof getV1PrivateExperimentsFeedbackScoresNamesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1PrivateExperimentsGroupsRouteHandler: RouteHandler<
  typeof getV1PrivateExperimentsGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1PrivateExperimentsGroupsAggregationsRouteHandler: RouteHandler<
  typeof getV1PrivateExperimentsGroupsAggregationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PrivateExperimentsFinishRouteHandler: RouteHandler<
  typeof postV1PrivateExperimentsFinishRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1PrivateExperimentsIdRouteHandler: RouteHandler<
  typeof getV1PrivateExperimentsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1PrivateExperimentsIdRouteHandler: RouteHandler<
  typeof patchV1PrivateExperimentsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1PrivateExperimentsItemsIdRouteHandler: RouteHandler<
  typeof getV1PrivateExperimentsItemsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PrivateExperimentsItemsStreamRouteHandler: RouteHandler<
  typeof postV1PrivateExperimentsItemsStreamRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PrivateExperimentsStreamRouteHandler: RouteHandler<
  typeof postV1PrivateExperimentsStreamRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1PrivateFeedbackDefinitionsRouteHandler: RouteHandler<
  typeof getV1PrivateFeedbackDefinitionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PrivateFeedbackDefinitionsRouteHandler: RouteHandler<
  typeof postV1PrivateFeedbackDefinitionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1PrivateFeedbackDefinitionsIdRouteHandler: RouteHandler<
  typeof getV1PrivateFeedbackDefinitionsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1PrivateFeedbackDefinitionsIdRouteHandler: RouteHandler<
  typeof putV1PrivateFeedbackDefinitionsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1PrivateFeedbackDefinitionsIdRouteHandler: RouteHandler<
  typeof deleteV1PrivateFeedbackDefinitionsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PrivateFeedbackDefinitionsDeleteRouteHandler: RouteHandler<
  typeof postV1PrivateFeedbackDefinitionsDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1PrivateGuardrailsPoliciesRouteHandler: RouteHandler<
  typeof getV1PrivateGuardrailsPoliciesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PrivateGuardrailsPoliciesRouteHandler: RouteHandler<
  typeof postV1PrivateGuardrailsPoliciesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1PrivateGuardrailsPoliciesIdRouteHandler: RouteHandler<
  typeof getV1PrivateGuardrailsPoliciesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1PrivateGuardrailsPoliciesIdRouteHandler: RouteHandler<
  typeof putV1PrivateGuardrailsPoliciesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1PrivateGuardrailsPoliciesIdRouteHandler: RouteHandler<
  typeof deleteV1PrivateGuardrailsPoliciesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PrivateGuardrailsRouteHandler: RouteHandler<
  typeof postV1PrivateGuardrailsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PrivateGuardrailsValidationsRouteHandler: RouteHandler<
  typeof postV1PrivateGuardrailsValidationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1PrivateInsightsViewsRouteHandler: RouteHandler<
  typeof getV1PrivateInsightsViewsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PrivateInsightsViewsRouteHandler: RouteHandler<
  typeof postV1PrivateInsightsViewsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1PrivateInsightsViewsInsightsViewIdRouteHandler: RouteHandler<
  typeof getV1PrivateInsightsViewsInsightsViewIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1PrivateInsightsViewsInsightsViewIdRouteHandler: RouteHandler<
  typeof deleteV1PrivateInsightsViewsInsightsViewIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1PrivateInsightsViewsInsightsViewIdRouteHandler: RouteHandler<
  typeof patchV1PrivateInsightsViewsInsightsViewIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PrivateInsightsViewsDeleteBatchRouteHandler: RouteHandler<
  typeof postV1PrivateInsightsViewsDeleteBatchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PrivateInsightsViewsInsightsViewIdWidgetsWidgetIdQueryRouteHandler: RouteHandler<
  typeof postV1PrivateInsightsViewsInsightsViewIdWidgetsWidgetIdQueryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1PrivateLlmModelsRouteHandler: RouteHandler<
  typeof getV1PrivateLlmModelsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1PrivateLlmModelsProfilesRouteHandler: RouteHandler<
  typeof getV1PrivateLlmModelsProfilesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PrivateLlmProviderKeyDeleteRouteHandler: RouteHandler<
  typeof postV1PrivateLlmProviderKeyDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1PrivateLlmProviderKeyRouteHandler: RouteHandler<
  typeof getV1PrivateLlmProviderKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PrivateLlmProviderKeyRouteHandler: RouteHandler<
  typeof postV1PrivateLlmProviderKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1PrivateLlmProviderKeyIdRouteHandler: RouteHandler<
  typeof getV1PrivateLlmProviderKeyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1PrivateLlmProviderKeyIdRouteHandler: RouteHandler<
  typeof patchV1PrivateLlmProviderKeyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PrivateLlmProviderKeyAuthConfigTestRouteHandler: RouteHandler<
  typeof postV1PrivateLlmProviderKeyAuthConfigTestRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1PrivateLocalRunnersJobsJobIdLogsRouteHandler: RouteHandler<
  typeof getV1PrivateLocalRunnersJobsJobIdLogsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PrivateLocalRunnersJobsJobIdLogsRouteHandler: RouteHandler<
  typeof postV1PrivateLocalRunnersJobsJobIdLogsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PrivateLocalRunnersJobsJobIdCancelRouteHandler: RouteHandler<
  typeof postV1PrivateLocalRunnersJobsJobIdCancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PrivateLocalRunnersRunnerIdBridgeCommandsRouteHandler: RouteHandler<
  typeof postV1PrivateLocalRunnersRunnerIdBridgeCommandsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PrivateLocalRunnersJobsRouteHandler: RouteHandler<
  typeof postV1PrivateLocalRunnersJobsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1PrivateLocalRunnersRunnerIdRouteHandler: RouteHandler<
  typeof getV1PrivateLocalRunnersRunnerIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1PrivateLocalRunnersRunnerIdRouteHandler: RouteHandler<
  typeof deleteV1PrivateLocalRunnersRunnerIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1PrivateLocalRunnersRunnerIdBridgeCommandsCommandIdRouteHandler: RouteHandler<
  typeof getV1PrivateLocalRunnersRunnerIdBridgeCommandsCommandIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1PrivateLocalRunnersJobsJobIdRouteHandler: RouteHandler<
  typeof getV1PrivateLocalRunnersJobsJobIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PrivateLocalRunnersRunnerIdHeartbeatsRouteHandler: RouteHandler<
  typeof postV1PrivateLocalRunnersRunnerIdHeartbeatsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1PrivateLocalRunnersRunnerIdJobsRouteHandler: RouteHandler<
  typeof getV1PrivateLocalRunnersRunnerIdJobsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1PrivateLocalRunnersRouteHandler: RouteHandler<
  typeof getV1PrivateLocalRunnersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PrivateLocalRunnersRunnerIdBridgeCommandsNextRouteHandler: RouteHandler<
  typeof postV1PrivateLocalRunnersRunnerIdBridgeCommandsNextRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PrivateLocalRunnersRunnerIdJobsNextRouteHandler: RouteHandler<
  typeof postV1PrivateLocalRunnersRunnerIdJobsNextRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1PrivateLocalRunnersRunnerIdChecklistRouteHandler: RouteHandler<
  typeof patchV1PrivateLocalRunnersRunnerIdChecklistRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1PrivateLocalRunnersRunnerIdAgentsRouteHandler: RouteHandler<
  typeof putV1PrivateLocalRunnersRunnerIdAgentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PrivateLocalRunnersRunnerIdBridgeCommandsCommandIdResultsRouteHandler: RouteHandler<
  typeof postV1PrivateLocalRunnersRunnerIdBridgeCommandsCommandIdResultsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PrivateLocalRunnersJobsJobIdResultsRouteHandler: RouteHandler<
  typeof postV1PrivateLocalRunnersJobsJobIdResultsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PrivateManualEvaluationSpansRouteHandler: RouteHandler<
  typeof postV1PrivateManualEvaluationSpansRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PrivateManualEvaluationThreadsRouteHandler: RouteHandler<
  typeof postV1PrivateManualEvaluationThreadsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PrivateManualEvaluationTracesRouteHandler: RouteHandler<
  typeof postV1PrivateManualEvaluationTracesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PrivateOllamaModelsRouteHandler: RouteHandler<
  typeof postV1PrivateOllamaModelsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PrivateOllamaTestConnectionRouteHandler: RouteHandler<
  typeof postV1PrivateOllamaTestConnectionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1PrivateOllieStateRouteHandler: RouteHandler<
  typeof getV1PrivateOllieStateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1PrivateOllieStateRouteHandler: RouteHandler<
  typeof putV1PrivateOllieStateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1PrivateOllieStateRouteHandler: RouteHandler<
  typeof deleteV1PrivateOllieStateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PrivateOtelV1TracesRouteHandler: RouteHandler<
  typeof postV1PrivateOtelV1TracesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1PrivateOptimizationsRouteHandler: RouteHandler<
  typeof getV1PrivateOptimizationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1PrivateOptimizationsRouteHandler: RouteHandler<
  typeof putV1PrivateOptimizationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PrivateOptimizationsRouteHandler: RouteHandler<
  typeof postV1PrivateOptimizationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PrivateOptimizationsDeleteRouteHandler: RouteHandler<
  typeof postV1PrivateOptimizationsDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1PrivateOptimizationsIdRouteHandler: RouteHandler<
  typeof getV1PrivateOptimizationsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1PrivateOptimizationsIdRouteHandler: RouteHandler<
  typeof putV1PrivateOptimizationsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1PrivateOptimizationsStudioIdLogsRouteHandler: RouteHandler<
  typeof getV1PrivateOptimizationsStudioIdLogsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PrivatePairingSessionsSessionIdActivateRouteHandler: RouteHandler<
  typeof postV1PrivatePairingSessionsSessionIdActivateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PrivatePairingSessionsRouteHandler: RouteHandler<
  typeof postV1PrivatePairingSessionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1PrivateProjectsProjectIdAlertsRouteHandler: RouteHandler<
  typeof getV1PrivateProjectsProjectIdAlertsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1PrivateProjectsProjectIdDashboardsRouteHandler: RouteHandler<
  typeof getV1PrivateProjectsProjectIdDashboardsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1PrivateProjectsProjectIdDatasetsRouteHandler: RouteHandler<
  typeof getV1PrivateProjectsProjectIdDatasetsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1PrivateProjectsProjectIdExperimentsRouteHandler: RouteHandler<
  typeof getV1PrivateProjectsProjectIdExperimentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1PrivateProjectsProjectIdOptimizationsRouteHandler: RouteHandler<
  typeof getV1PrivateProjectsProjectIdOptimizationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1PrivateProjectsProjectIdPromptsRouteHandler: RouteHandler<
  typeof getV1PrivateProjectsProjectIdPromptsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1PrivateProjectsRouteHandler: RouteHandler<
  typeof getV1PrivateProjectsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PrivateProjectsRouteHandler: RouteHandler<
  typeof postV1PrivateProjectsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1PrivateProjectsIdRouteHandler: RouteHandler<
  typeof getV1PrivateProjectsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1PrivateProjectsIdRouteHandler: RouteHandler<
  typeof deleteV1PrivateProjectsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1PrivateProjectsIdRouteHandler: RouteHandler<
  typeof patchV1PrivateProjectsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PrivateProjectsDeleteRouteHandler: RouteHandler<
  typeof postV1PrivateProjectsDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1PrivateProjectsFeedbackScoresNamesRouteHandler: RouteHandler<
  typeof getV1PrivateProjectsFeedbackScoresNamesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1PrivateProjectsIdTokenUsageNamesRouteHandler: RouteHandler<
  typeof getV1PrivateProjectsIdTokenUsageNamesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PrivateProjectsIdKpiCardsRouteHandler: RouteHandler<
  typeof postV1PrivateProjectsIdKpiCardsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PrivateProjectsIdMetricsRouteHandler: RouteHandler<
  typeof postV1PrivateProjectsIdMetricsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1PrivateProjectsStatsRouteHandler: RouteHandler<
  typeof getV1PrivateProjectsStatsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PrivateProjectsRetrieveRouteHandler: RouteHandler<
  typeof postV1PrivateProjectsRetrieveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1PrivatePromptsRouteHandler: RouteHandler<
  typeof getV1PrivatePromptsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PrivatePromptsRouteHandler: RouteHandler<
  typeof postV1PrivatePromptsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PrivatePromptsVersionsRouteHandler: RouteHandler<
  typeof postV1PrivatePromptsVersionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1PrivatePromptsVersionsRouteHandler: RouteHandler<
  typeof patchV1PrivatePromptsVersionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1PrivatePromptsIdRouteHandler: RouteHandler<
  typeof getV1PrivatePromptsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1PrivatePromptsIdRouteHandler: RouteHandler<
  typeof putV1PrivatePromptsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1PrivatePromptsIdRouteHandler: RouteHandler<
  typeof deleteV1PrivatePromptsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PrivatePromptsDeleteRouteHandler: RouteHandler<
  typeof postV1PrivatePromptsDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1PrivatePromptsByCommitCommitRouteHandler: RouteHandler<
  typeof getV1PrivatePromptsByCommitCommitRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1PrivatePromptsVersionsVersionIdRouteHandler: RouteHandler<
  typeof getV1PrivatePromptsVersionsVersionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1PrivatePromptsPromptIdVersionsByNumberVersionNumberRouteHandler: RouteHandler<
  typeof getV1PrivatePromptsPromptIdVersionsByNumberVersionNumberRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1PrivatePromptsIdVersionsRouteHandler: RouteHandler<
  typeof getV1PrivatePromptsIdVersionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PrivatePromptsRetrieveByCommitsRouteHandler: RouteHandler<
  typeof postV1PrivatePromptsRetrieveByCommitsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PrivatePromptsPromptIdVersionsVersionIdRestoreRouteHandler: RouteHandler<
  typeof postV1PrivatePromptsPromptIdVersionsVersionIdRestoreRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PrivatePromptsVersionsRetrieveRouteHandler: RouteHandler<
  typeof postV1PrivatePromptsVersionsRetrieveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PrivatePromptsVersionsRetrieveByIdsRouteHandler: RouteHandler<
  typeof postV1PrivatePromptsVersionsRetrieveByIdsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1PrivatePromptsVersionsVersionIdEnvironmentsRouteHandler: RouteHandler<
  typeof patchV1PrivatePromptsVersionsVersionIdEnvironmentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1PrivateProjectsProjectIdActivitiesRouteHandler: RouteHandler<
  typeof getV1PrivateProjectsProjectIdActivitiesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1PrivateReportFailuresRouteHandler: RouteHandler<
  typeof getV1PrivateReportFailuresRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PrivateReportFailuresRouteHandler: RouteHandler<
  typeof postV1PrivateReportFailuresRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PrivateProjectsProjectIdReportsReportIdCompleteRouteHandler: RouteHandler<
  typeof postV1PrivateProjectsProjectIdReportsReportIdCompleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PrivateProjectsProjectIdReportsGenerateRouteHandler: RouteHandler<
  typeof postV1PrivateProjectsProjectIdReportsGenerateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1PrivateProjectsProjectIdReportsPreferencesRouteHandler: RouteHandler<
  typeof getV1PrivateProjectsProjectIdReportsPreferencesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1PrivateProjectsProjectIdReportsPreferencesRouteHandler: RouteHandler<
  typeof putV1PrivateProjectsProjectIdReportsPreferencesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1PrivateProjectsProjectIdReportsRouteHandler: RouteHandler<
  typeof getV1PrivateProjectsProjectIdReportsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1PrivateRetentionRulesRouteHandler: RouteHandler<
  typeof getV1PrivateRetentionRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PrivateRetentionRulesRouteHandler: RouteHandler<
  typeof postV1PrivateRetentionRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1PrivateRetentionRulesRuleIdRouteHandler: RouteHandler<
  typeof getV1PrivateRetentionRulesRuleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1PrivateRetentionRulesRuleIdRouteHandler: RouteHandler<
  typeof deleteV1PrivateRetentionRulesRuleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1PrivateTogglesRouteHandler: RouteHandler<
  typeof getV1PrivateTogglesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PrivateSpansIdCommentsRouteHandler: RouteHandler<
  typeof postV1PrivateSpansIdCommentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1PrivateSpansIdFeedbackScoresRouteHandler: RouteHandler<
  typeof putV1PrivateSpansIdFeedbackScoresRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PrivateSpansBatchRouteHandler: RouteHandler<
  typeof postV1PrivateSpansBatchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1PrivateSpansBatchRouteHandler: RouteHandler<
  typeof patchV1PrivateSpansBatchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1PrivateSpansRouteHandler: RouteHandler<typeof getV1PrivateSpansRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1PrivateSpansRouteHandler: RouteHandler<typeof postV1PrivateSpansRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1PrivateSpansIdRouteHandler: RouteHandler<
  typeof getV1PrivateSpansIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1PrivateSpansIdRouteHandler: RouteHandler<
  typeof deleteV1PrivateSpansIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1PrivateSpansIdRouteHandler: RouteHandler<
  typeof patchV1PrivateSpansIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PrivateSpansCommentsDeleteRouteHandler: RouteHandler<
  typeof postV1PrivateSpansCommentsDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PrivateSpansIdFeedbackScoresDeleteRouteHandler: RouteHandler<
  typeof postV1PrivateSpansIdFeedbackScoresDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1PrivateSpansFeedbackScoresNamesRouteHandler: RouteHandler<
  typeof getV1PrivateSpansFeedbackScoresNamesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1PrivateSpansSpanIdCommentsCommentIdRouteHandler: RouteHandler<
  typeof getV1PrivateSpansSpanIdCommentsCommentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1PrivateSpansStatsRouteHandler: RouteHandler<
  typeof getV1PrivateSpansStatsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1PrivateSpansFeedbackScoresRouteHandler: RouteHandler<
  typeof putV1PrivateSpansFeedbackScoresRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PrivateSpansSearchRouteHandler: RouteHandler<
  typeof postV1PrivateSpansSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1PrivateSpansExistsRouteHandler: RouteHandler<
  typeof getV1PrivateSpansExistsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1PrivateSpansCommentsCommentIdRouteHandler: RouteHandler<
  typeof patchV1PrivateSpansCommentsCommentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PrivateTracesThreadsIdCommentsRouteHandler: RouteHandler<
  typeof postV1PrivateTracesThreadsIdCommentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PrivateTracesIdCommentsRouteHandler: RouteHandler<
  typeof postV1PrivateTracesIdCommentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1PrivateTracesIdFeedbackScoresRouteHandler: RouteHandler<
  typeof putV1PrivateTracesIdFeedbackScoresRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PrivateTracesBatchRouteHandler: RouteHandler<
  typeof postV1PrivateTracesBatchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1PrivateTracesBatchRouteHandler: RouteHandler<
  typeof patchV1PrivateTracesBatchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1PrivateTracesThreadsBatchRouteHandler: RouteHandler<
  typeof patchV1PrivateTracesThreadsBatchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1PrivateTracesThreadsCloseRouteHandler: RouteHandler<
  typeof putV1PrivateTracesThreadsCloseRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1PrivateTracesRouteHandler: RouteHandler<typeof getV1PrivateTracesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1PrivateTracesRouteHandler: RouteHandler<
  typeof postV1PrivateTracesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1PrivateTracesIdRouteHandler: RouteHandler<
  typeof getV1PrivateTracesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1PrivateTracesIdRouteHandler: RouteHandler<
  typeof deleteV1PrivateTracesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1PrivateTracesIdRouteHandler: RouteHandler<
  typeof patchV1PrivateTracesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PrivateTracesThreadsCommentsDeleteRouteHandler: RouteHandler<
  typeof postV1PrivateTracesThreadsCommentsDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PrivateTracesThreadsFeedbackScoresDeleteRouteHandler: RouteHandler<
  typeof postV1PrivateTracesThreadsFeedbackScoresDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PrivateTracesCommentsDeleteRouteHandler: RouteHandler<
  typeof postV1PrivateTracesCommentsDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PrivateTracesIdFeedbackScoresDeleteRouteHandler: RouteHandler<
  typeof postV1PrivateTracesIdFeedbackScoresDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PrivateTracesThreadsDeleteRouteHandler: RouteHandler<
  typeof postV1PrivateTracesThreadsDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PrivateTracesDeleteRouteHandler: RouteHandler<
  typeof postV1PrivateTracesDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1PrivateTracesFeedbackScoresNamesRouteHandler: RouteHandler<
  typeof getV1PrivateTracesFeedbackScoresNamesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1PrivateTracesThreadsFeedbackScoresNamesRouteHandler: RouteHandler<
  typeof getV1PrivateTracesThreadsFeedbackScoresNamesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1PrivateTracesStatsRouteHandler: RouteHandler<
  typeof getV1PrivateTracesStatsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1PrivateTracesThreadsThreadIdCommentsCommentIdRouteHandler: RouteHandler<
  typeof getV1PrivateTracesThreadsThreadIdCommentsCommentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1PrivateTracesThreadsStatsRouteHandler: RouteHandler<
  typeof getV1PrivateTracesThreadsStatsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1PrivateTracesTraceIdCommentsCommentIdRouteHandler: RouteHandler<
  typeof getV1PrivateTracesTraceIdCommentsCommentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PrivateTracesThreadsRetrieveRouteHandler: RouteHandler<
  typeof postV1PrivateTracesThreadsRetrieveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1PrivateTracesThreadsRouteHandler: RouteHandler<
  typeof getV1PrivateTracesThreadsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1PrivateTracesThreadsOpenRouteHandler: RouteHandler<
  typeof putV1PrivateTracesThreadsOpenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1PrivateTracesThreadsFeedbackScoresRouteHandler: RouteHandler<
  typeof putV1PrivateTracesThreadsFeedbackScoresRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1PrivateTracesFeedbackScoresRouteHandler: RouteHandler<
  typeof putV1PrivateTracesFeedbackScoresRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PrivateTracesThreadsSearchRouteHandler: RouteHandler<
  typeof postV1PrivateTracesThreadsSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PrivateTracesSearchRouteHandler: RouteHandler<
  typeof postV1PrivateTracesSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1PrivateTracesExistsRouteHandler: RouteHandler<
  typeof getV1PrivateTracesExistsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1PrivateTracesThreadsThreadModelIdRouteHandler: RouteHandler<
  typeof patchV1PrivateTracesThreadsThreadModelIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1PrivateTracesThreadsCommentsCommentIdRouteHandler: RouteHandler<
  typeof patchV1PrivateTracesThreadsCommentsCommentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1PrivateTracesCommentsCommentIdRouteHandler: RouteHandler<
  typeof patchV1PrivateTracesCommentsCommentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1PrivateWelcomeWizardRouteHandler: RouteHandler<
  typeof getV1PrivateWelcomeWizardRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PrivateWelcomeWizardRouteHandler: RouteHandler<
  typeof postV1PrivateWelcomeWizardRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1PrivateWorkspacePermissionsRouteHandler: RouteHandler<
  typeof getV1PrivateWorkspacePermissionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PrivateWorkspacesCostsSummariesRouteHandler: RouteHandler<
  typeof postV1PrivateWorkspacesCostsSummariesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1PrivateWorkspacesConfigurationsRouteHandler: RouteHandler<
  typeof getV1PrivateWorkspacesConfigurationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1PrivateWorkspacesConfigurationsRouteHandler: RouteHandler<
  typeof putV1PrivateWorkspacesConfigurationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1PrivateWorkspacesConfigurationsRouteHandler: RouteHandler<
  typeof deleteV1PrivateWorkspacesConfigurationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PrivateWorkspacesCostsRouteHandler: RouteHandler<
  typeof postV1PrivateWorkspacesCostsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PrivateWorkspacesMetricsRouteHandler: RouteHandler<
  typeof postV1PrivateWorkspacesMetricsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PrivateWorkspacesMetricsSpansRouteHandler: RouteHandler<
  typeof postV1PrivateWorkspacesMetricsSpansRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PrivateWorkspacesTokenUsageNamesRouteHandler: RouteHandler<
  typeof postV1PrivateWorkspacesTokenUsageNamesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PrivateWorkspacesMetricsSummariesRouteHandler: RouteHandler<
  typeof postV1PrivateWorkspacesMetricsSummariesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1SessionRedirectDatasetsRouteHandler: RouteHandler<
  typeof getV1SessionRedirectDatasetsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1SessionRedirectExperimentsRouteHandler: RouteHandler<
  typeof getV1SessionRedirectExperimentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1SessionRedirectOptimizationsRouteHandler: RouteHandler<
  typeof getV1SessionRedirectOptimizationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1SessionRedirectProjectsRouteHandler: RouteHandler<
  typeof getV1SessionRedirectProjectsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
