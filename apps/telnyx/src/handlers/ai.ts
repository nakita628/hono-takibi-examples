import type { RouteHandler } from '@hono/zod-openapi'
import type {
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
} from '../routes'

export const postAiAnthropicV1MessagesRouteHandler: RouteHandler<
  typeof postAiAnthropicV1MessagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAiAssistantsRouteHandler: RouteHandler<typeof getAiAssistantsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postAiAssistantsRouteHandler: RouteHandler<typeof postAiAssistantsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getAiAssistantsDeletedRouteHandler: RouteHandler<
  typeof getAiAssistantsDeletedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAiAssistantsImportRouteHandler: RouteHandler<
  typeof postAiAssistantsImportRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAiAssistantsTagsRouteHandler: RouteHandler<
  typeof getAiAssistantsTagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAiAssistantsTestsRouteHandler: RouteHandler<
  typeof getAiAssistantsTestsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAiAssistantsTestsRouteHandler: RouteHandler<
  typeof postAiAssistantsTestsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAiAssistantsTestsTestSuitesRouteHandler: RouteHandler<
  typeof getAiAssistantsTestsTestSuitesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAiAssistantsTestsTestSuitesSuiteNameRunsRouteHandler: RouteHandler<
  typeof getAiAssistantsTestsTestSuitesSuiteNameRunsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAiAssistantsTestsTestSuitesSuiteNameRunsRouteHandler: RouteHandler<
  typeof postAiAssistantsTestsTestSuitesSuiteNameRunsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAiAssistantsTestsTestIdRouteHandler: RouteHandler<
  typeof deleteAiAssistantsTestsTestIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAiAssistantsTestsTestIdRouteHandler: RouteHandler<
  typeof getAiAssistantsTestsTestIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAiAssistantsTestsTestIdRouteHandler: RouteHandler<
  typeof putAiAssistantsTestsTestIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAiAssistantsTestsTestIdRunsRouteHandler: RouteHandler<
  typeof getAiAssistantsTestsTestIdRunsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAiAssistantsTestsTestIdRunsRouteHandler: RouteHandler<
  typeof postAiAssistantsTestsTestIdRunsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAiAssistantsTestsTestIdRunsRunIdRouteHandler: RouteHandler<
  typeof getAiAssistantsTestsTestIdRunsRunIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAiAssistantsAssistantIdRouteHandler: RouteHandler<
  typeof deleteAiAssistantsAssistantIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAiAssistantsAssistantIdRouteHandler: RouteHandler<
  typeof getAiAssistantsAssistantIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAiAssistantsAssistantIdRouteHandler: RouteHandler<
  typeof postAiAssistantsAssistantIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAiAssistantsAssistantIdCanaryDeploysRouteHandler: RouteHandler<
  typeof deleteAiAssistantsAssistantIdCanaryDeploysRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAiAssistantsAssistantIdCanaryDeploysRouteHandler: RouteHandler<
  typeof getAiAssistantsAssistantIdCanaryDeploysRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAiAssistantsAssistantIdCanaryDeploysRouteHandler: RouteHandler<
  typeof postAiAssistantsAssistantIdCanaryDeploysRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAiAssistantsAssistantIdCanaryDeploysRouteHandler: RouteHandler<
  typeof putAiAssistantsAssistantIdCanaryDeploysRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAiAssistantsAssistantIdChatRouteHandler: RouteHandler<
  typeof postAiAssistantsAssistantIdChatRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAiAssistantsAssistantIdChatSmsRouteHandler: RouteHandler<
  typeof postAiAssistantsAssistantIdChatSmsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAiAssistantsAssistantIdChatWhatsappRouteHandler: RouteHandler<
  typeof postAiAssistantsAssistantIdChatWhatsappRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAiAssistantsAssistantIdCloneRouteHandler: RouteHandler<
  typeof postAiAssistantsAssistantIdCloneRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAiAssistantsAssistantIdDeletedRouteHandler: RouteHandler<
  typeof getAiAssistantsAssistantIdDeletedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAiAssistantsAssistantIdInstructionsEnhanceRouteHandler: RouteHandler<
  typeof postAiAssistantsAssistantIdInstructionsEnhanceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAiAssistantsAssistantIdRestoreRouteHandler: RouteHandler<
  typeof postAiAssistantsAssistantIdRestoreRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAiAssistantsAssistantIdScheduledEventsRouteHandler: RouteHandler<
  typeof getAiAssistantsAssistantIdScheduledEventsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAiAssistantsAssistantIdScheduledEventsRouteHandler: RouteHandler<
  typeof postAiAssistantsAssistantIdScheduledEventsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAiAssistantsAssistantIdScheduledEventsEventIdRouteHandler: RouteHandler<
  typeof deleteAiAssistantsAssistantIdScheduledEventsEventIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAiAssistantsAssistantIdScheduledEventsEventIdRouteHandler: RouteHandler<
  typeof getAiAssistantsAssistantIdScheduledEventsEventIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAiAssistantsAssistantIdTagsRouteHandler: RouteHandler<
  typeof postAiAssistantsAssistantIdTagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAiAssistantsAssistantIdTagsTagRouteHandler: RouteHandler<
  typeof deleteAiAssistantsAssistantIdTagsTagRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAiAssistantsAssistantIdTexmlRouteHandler: RouteHandler<
  typeof getAiAssistantsAssistantIdTexmlRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAiAssistantsAssistantIdToolsToolIdRouteHandler: RouteHandler<
  typeof deleteAiAssistantsAssistantIdToolsToolIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAiAssistantsAssistantIdToolsToolIdRouteHandler: RouteHandler<
  typeof putAiAssistantsAssistantIdToolsToolIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAiAssistantsAssistantIdToolsToolIdTestRouteHandler: RouteHandler<
  typeof postAiAssistantsAssistantIdToolsToolIdTestRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAiAssistantsAssistantIdVersionsRouteHandler: RouteHandler<
  typeof getAiAssistantsAssistantIdVersionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAiAssistantsAssistantIdVersionsVersionIdRouteHandler: RouteHandler<
  typeof deleteAiAssistantsAssistantIdVersionsVersionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAiAssistantsAssistantIdVersionsVersionIdRouteHandler: RouteHandler<
  typeof getAiAssistantsAssistantIdVersionsVersionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAiAssistantsAssistantIdVersionsVersionIdRouteHandler: RouteHandler<
  typeof postAiAssistantsAssistantIdVersionsVersionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAiAssistantsAssistantIdVersionsVersionIdPromoteRouteHandler: RouteHandler<
  typeof postAiAssistantsAssistantIdVersionsVersionIdPromoteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAiAudioTranscriptionsRouteHandler: RouteHandler<
  typeof postAiAudioTranscriptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAiAvatarsRouteHandler: RouteHandler<typeof getAiAvatarsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postAiAvatarsRouteHandler: RouteHandler<typeof postAiAvatarsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getAiAvatarsAvatarIdRouteHandler: RouteHandler<
  typeof getAiAvatarsAvatarIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchAiAvatarsAvatarIdRouteHandler: RouteHandler<
  typeof patchAiAvatarsAvatarIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAiChatCompletionsRouteHandler: RouteHandler<
  typeof postAiChatCompletionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAiClustersRouteHandler: RouteHandler<typeof getAiClustersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postAiClustersRouteHandler: RouteHandler<typeof postAiClustersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAiClustersTaskIdRouteHandler: RouteHandler<
  typeof deleteAiClustersTaskIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAiClustersTaskIdRouteHandler: RouteHandler<
  typeof getAiClustersTaskIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAiClustersTaskIdGraphRouteHandler: RouteHandler<
  typeof getAiClustersTaskIdGraphRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAiCollectionsRouteHandler: RouteHandler<typeof getAiCollectionsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postAiCollectionsRouteHandler: RouteHandler<typeof postAiCollectionsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getAiCollectionsSlugSlugRouteHandler: RouteHandler<
  typeof getAiCollectionsSlugSlugRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAiCollectionsUuidRouteHandler: RouteHandler<
  typeof deleteAiCollectionsUuidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAiCollectionsUuidRouteHandler: RouteHandler<
  typeof getAiCollectionsUuidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchAiCollectionsUuidRouteHandler: RouteHandler<
  typeof patchAiCollectionsUuidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAiCollectionsUuidSettingsRouteHandler: RouteHandler<
  typeof getAiCollectionsUuidSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchAiCollectionsUuidSettingsRouteHandler: RouteHandler<
  typeof patchAiCollectionsUuidSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAiCollectionsUuidSettingsRouteHandler: RouteHandler<
  typeof putAiCollectionsUuidSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAiCollectionsUuidSourcesRouteHandler: RouteHandler<
  typeof getAiCollectionsUuidSourcesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAiCollectionsUuidSourcesRouteHandler: RouteHandler<
  typeof postAiCollectionsUuidSourcesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAiCollectionsUuidSourcesRouteHandler: RouteHandler<
  typeof putAiCollectionsUuidSourcesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAiCollectionsUuidSourcesSourceIdRouteHandler: RouteHandler<
  typeof deleteAiCollectionsUuidSourcesSourceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAiConversationHistoriesRouteHandler: RouteHandler<
  typeof getAiConversationHistoriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAiConversationsRouteHandler: RouteHandler<typeof getAiConversationsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postAiConversationsRouteHandler: RouteHandler<
  typeof postAiConversationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAiConversationsConversationInsightsAggregatesRouteHandler: RouteHandler<
  typeof getAiConversationsConversationInsightsAggregatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAiConversationsInsightGroupsRouteHandler: RouteHandler<
  typeof getAiConversationsInsightGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAiConversationsInsightGroupsRouteHandler: RouteHandler<
  typeof postAiConversationsInsightGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAiConversationsInsightGroupsGroupIdRouteHandler: RouteHandler<
  typeof deleteAiConversationsInsightGroupsGroupIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAiConversationsInsightGroupsGroupIdRouteHandler: RouteHandler<
  typeof getAiConversationsInsightGroupsGroupIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAiConversationsInsightGroupsGroupIdRouteHandler: RouteHandler<
  typeof putAiConversationsInsightGroupsGroupIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAiConversationsInsightGroupsGroupIdInsightsInsightIdAssignRouteHandler: RouteHandler<
  typeof postAiConversationsInsightGroupsGroupIdInsightsInsightIdAssignRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAiConversationsInsightGroupsGroupIdInsightsInsightIdUnassignRouteHandler: RouteHandler<
  typeof deleteAiConversationsInsightGroupsGroupIdInsightsInsightIdUnassignRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAiConversationsInsightsRouteHandler: RouteHandler<
  typeof getAiConversationsInsightsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAiConversationsInsightsRouteHandler: RouteHandler<
  typeof postAiConversationsInsightsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAiConversationsInsightsInsightIdRouteHandler: RouteHandler<
  typeof deleteAiConversationsInsightsInsightIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAiConversationsInsightsInsightIdRouteHandler: RouteHandler<
  typeof getAiConversationsInsightsInsightIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAiConversationsInsightsInsightIdRouteHandler: RouteHandler<
  typeof putAiConversationsInsightsInsightIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAiConversationsConversationIdRouteHandler: RouteHandler<
  typeof deleteAiConversationsConversationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAiConversationsConversationIdRouteHandler: RouteHandler<
  typeof getAiConversationsConversationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAiConversationsConversationIdRouteHandler: RouteHandler<
  typeof putAiConversationsConversationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAiConversationsConversationIdConversationsInsightsRouteHandler: RouteHandler<
  typeof getAiConversationsConversationIdConversationsInsightsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAiConversationsConversationIdConversationsInsightsInsightIdRouteHandler: RouteHandler<
  typeof deleteAiConversationsConversationIdConversationsInsightsInsightIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAiConversationsConversationIdMessageRouteHandler: RouteHandler<
  typeof postAiConversationsConversationIdMessageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAiConversationsConversationIdMessagesRouteHandler: RouteHandler<
  typeof getAiConversationsConversationIdMessagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAiEmbeddingsRouteHandler: RouteHandler<typeof getAiEmbeddingsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postAiEmbeddingsRouteHandler: RouteHandler<typeof postAiEmbeddingsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getAiEmbeddingsBucketsRouteHandler: RouteHandler<
  typeof getAiEmbeddingsBucketsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAiEmbeddingsBucketsBucketNameRouteHandler: RouteHandler<
  typeof deleteAiEmbeddingsBucketsBucketNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAiEmbeddingsBucketsBucketNameRouteHandler: RouteHandler<
  typeof getAiEmbeddingsBucketsBucketNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAiEmbeddingsSimilaritySearchRouteHandler: RouteHandler<
  typeof postAiEmbeddingsSimilaritySearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAiEmbeddingsUrlRouteHandler: RouteHandler<
  typeof postAiEmbeddingsUrlRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAiEmbeddingsTaskIdRouteHandler: RouteHandler<
  typeof getAiEmbeddingsTaskIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAiIntegrationsRouteHandler: RouteHandler<typeof getAiIntegrationsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getAiIntegrationsConnectionsRouteHandler: RouteHandler<
  typeof getAiIntegrationsConnectionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAiIntegrationsConnectionsUserConnectionIdRouteHandler: RouteHandler<
  typeof deleteAiIntegrationsConnectionsUserConnectionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAiIntegrationsConnectionsUserConnectionIdRouteHandler: RouteHandler<
  typeof getAiIntegrationsConnectionsUserConnectionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAiIntegrationsIntegrationIdRouteHandler: RouteHandler<
  typeof getAiIntegrationsIntegrationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAiKnowledgeCollectionsSlugDocumentsRouteHandler: RouteHandler<
  typeof getAiKnowledgeCollectionsSlugDocumentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAiMcpServersRouteHandler: RouteHandler<typeof getAiMcpServersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postAiMcpServersRouteHandler: RouteHandler<typeof postAiMcpServersRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteAiMcpServersMcpServerIdRouteHandler: RouteHandler<
  typeof deleteAiMcpServersMcpServerIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAiMcpServersMcpServerIdRouteHandler: RouteHandler<
  typeof getAiMcpServersMcpServerIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAiMcpServersMcpServerIdRouteHandler: RouteHandler<
  typeof putAiMcpServersMcpServerIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAiMemoryNamespacesRouteHandler: RouteHandler<
  typeof getAiMemoryNamespacesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAiMemoryNamespacesRouteHandler: RouteHandler<
  typeof postAiMemoryNamespacesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAiMemoryNamespacesNamespaceRouteHandler: RouteHandler<
  typeof deleteAiMemoryNamespacesNamespaceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAiMemoryNamespacesNamespaceOperationsOperationIdRouteHandler: RouteHandler<
  typeof getAiMemoryNamespacesNamespaceOperationsOperationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAiMemoryNamespacesNamespaceProfilesRouteHandler: RouteHandler<
  typeof getAiMemoryNamespacesNamespaceProfilesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAiMemoryNamespacesNamespaceProfilesProfileIdRouteHandler: RouteHandler<
  typeof deleteAiMemoryNamespacesNamespaceProfilesProfileIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAiMemoryNamespacesNamespaceProfilesProfileIdIngestRouteHandler: RouteHandler<
  typeof postAiMemoryNamespacesNamespaceProfilesProfileIdIngestRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAiMemoryNamespacesNamespaceProfilesProfileIdMemoriesRouteHandler: RouteHandler<
  typeof getAiMemoryNamespacesNamespaceProfilesProfileIdMemoriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAiMemoryNamespacesNamespaceProfilesProfileIdMemoriesMemoryIdRouteHandler: RouteHandler<
  typeof getAiMemoryNamespacesNamespaceProfilesProfileIdMemoriesMemoryIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAiMemoryNamespacesNamespaceProfilesProfileIdRecallRouteHandler: RouteHandler<
  typeof postAiMemoryNamespacesNamespaceProfilesProfileIdRecallRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAiMemoryNamespacesNamespaceProfilesProfileIdRememberRouteHandler: RouteHandler<
  typeof postAiMemoryNamespacesNamespaceProfilesProfileIdRememberRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAiMemoryNamespacesNamespaceProfilesProfileIdSourcesRouteHandler: RouteHandler<
  typeof getAiMemoryNamespacesNamespaceProfilesProfileIdSourcesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAiMemoryNamespacesNamespaceProfilesProfileIdSourcesSourceIdRouteHandler: RouteHandler<
  typeof deleteAiMemoryNamespacesNamespaceProfilesProfileIdSourcesSourceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAiMemoryNamespacesNamespaceProfilesProfileIdSourcesSourceIdRouteHandler: RouteHandler<
  typeof getAiMemoryNamespacesNamespaceProfilesProfileIdSourcesSourceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAiMemoryNamespacesNamespaceProfilesProfileIdSummaryRouteHandler: RouteHandler<
  typeof getAiMemoryNamespacesNamespaceProfilesProfileIdSummaryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAiMemoryNamespacesNamespaceProfilesProfileIdSummaryPreviewRouteHandler: RouteHandler<
  typeof postAiMemoryNamespacesNamespaceProfilesProfileIdSummaryPreviewRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAiMemoryNamespacesNamespaceSettingsRouteHandler: RouteHandler<
  typeof getAiMemoryNamespacesNamespaceSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchAiMemoryNamespacesNamespaceSettingsRouteHandler: RouteHandler<
  typeof patchAiMemoryNamespacesNamespaceSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAiMissionsRouteHandler: RouteHandler<typeof getAiMissionsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postAiMissionsRouteHandler: RouteHandler<typeof postAiMissionsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getAiMissionsEventsRouteHandler: RouteHandler<
  typeof getAiMissionsEventsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAiMissionsRunsRouteHandler: RouteHandler<typeof getAiMissionsRunsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteAiMissionsMissionIdRouteHandler: RouteHandler<
  typeof deleteAiMissionsMissionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAiMissionsMissionIdRouteHandler: RouteHandler<
  typeof getAiMissionsMissionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAiMissionsMissionIdRouteHandler: RouteHandler<
  typeof putAiMissionsMissionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAiMissionsMissionIdCloneRouteHandler: RouteHandler<
  typeof postAiMissionsMissionIdCloneRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAiMissionsMissionIdKnowledgeBasesRouteHandler: RouteHandler<
  typeof getAiMissionsMissionIdKnowledgeBasesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAiMissionsMissionIdKnowledgeBasesRouteHandler: RouteHandler<
  typeof postAiMissionsMissionIdKnowledgeBasesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAiMissionsMissionIdKnowledgeBasesKnowledgeBaseIdRouteHandler: RouteHandler<
  typeof deleteAiMissionsMissionIdKnowledgeBasesKnowledgeBaseIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAiMissionsMissionIdKnowledgeBasesKnowledgeBaseIdRouteHandler: RouteHandler<
  typeof getAiMissionsMissionIdKnowledgeBasesKnowledgeBaseIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAiMissionsMissionIdKnowledgeBasesKnowledgeBaseIdRouteHandler: RouteHandler<
  typeof putAiMissionsMissionIdKnowledgeBasesKnowledgeBaseIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAiMissionsMissionIdMcpServersRouteHandler: RouteHandler<
  typeof getAiMissionsMissionIdMcpServersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAiMissionsMissionIdMcpServersRouteHandler: RouteHandler<
  typeof postAiMissionsMissionIdMcpServersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAiMissionsMissionIdMcpServersMcpServerIdRouteHandler: RouteHandler<
  typeof deleteAiMissionsMissionIdMcpServersMcpServerIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAiMissionsMissionIdMcpServersMcpServerIdRouteHandler: RouteHandler<
  typeof getAiMissionsMissionIdMcpServersMcpServerIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAiMissionsMissionIdMcpServersMcpServerIdRouteHandler: RouteHandler<
  typeof putAiMissionsMissionIdMcpServersMcpServerIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAiMissionsMissionIdRunsRouteHandler: RouteHandler<
  typeof getAiMissionsMissionIdRunsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAiMissionsMissionIdRunsRouteHandler: RouteHandler<
  typeof postAiMissionsMissionIdRunsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAiMissionsMissionIdRunsRunIdRouteHandler: RouteHandler<
  typeof getAiMissionsMissionIdRunsRunIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchAiMissionsMissionIdRunsRunIdRouteHandler: RouteHandler<
  typeof patchAiMissionsMissionIdRunsRunIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAiMissionsMissionIdRunsRunIdCancelRouteHandler: RouteHandler<
  typeof postAiMissionsMissionIdRunsRunIdCancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAiMissionsMissionIdRunsRunIdEventsRouteHandler: RouteHandler<
  typeof getAiMissionsMissionIdRunsRunIdEventsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAiMissionsMissionIdRunsRunIdEventsRouteHandler: RouteHandler<
  typeof postAiMissionsMissionIdRunsRunIdEventsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAiMissionsMissionIdRunsRunIdEventsEventIdRouteHandler: RouteHandler<
  typeof getAiMissionsMissionIdRunsRunIdEventsEventIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAiMissionsMissionIdRunsRunIdPauseRouteHandler: RouteHandler<
  typeof postAiMissionsMissionIdRunsRunIdPauseRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAiMissionsMissionIdRunsRunIdPlanRouteHandler: RouteHandler<
  typeof getAiMissionsMissionIdRunsRunIdPlanRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAiMissionsMissionIdRunsRunIdPlanRouteHandler: RouteHandler<
  typeof postAiMissionsMissionIdRunsRunIdPlanRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAiMissionsMissionIdRunsRunIdPlanStepsRouteHandler: RouteHandler<
  typeof postAiMissionsMissionIdRunsRunIdPlanStepsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAiMissionsMissionIdRunsRunIdPlanStepsStepIdRouteHandler: RouteHandler<
  typeof getAiMissionsMissionIdRunsRunIdPlanStepsStepIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchAiMissionsMissionIdRunsRunIdPlanStepsStepIdRouteHandler: RouteHandler<
  typeof patchAiMissionsMissionIdRunsRunIdPlanStepsStepIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAiMissionsMissionIdRunsRunIdResumeRouteHandler: RouteHandler<
  typeof postAiMissionsMissionIdRunsRunIdResumeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAiMissionsMissionIdRunsRunIdTelnyxAgentsRouteHandler: RouteHandler<
  typeof getAiMissionsMissionIdRunsRunIdTelnyxAgentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAiMissionsMissionIdRunsRunIdTelnyxAgentsRouteHandler: RouteHandler<
  typeof postAiMissionsMissionIdRunsRunIdTelnyxAgentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAiMissionsMissionIdRunsRunIdTelnyxAgentsTelnyxAgentIdRouteHandler: RouteHandler<
  typeof deleteAiMissionsMissionIdRunsRunIdTelnyxAgentsTelnyxAgentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAiMissionsMissionIdToolsRouteHandler: RouteHandler<
  typeof getAiMissionsMissionIdToolsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAiMissionsMissionIdToolsRouteHandler: RouteHandler<
  typeof postAiMissionsMissionIdToolsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAiMissionsMissionIdToolsToolIdRouteHandler: RouteHandler<
  typeof deleteAiMissionsMissionIdToolsToolIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAiMissionsMissionIdToolsToolIdRouteHandler: RouteHandler<
  typeof getAiMissionsMissionIdToolsToolIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAiMissionsMissionIdToolsToolIdRouteHandler: RouteHandler<
  typeof putAiMissionsMissionIdToolsToolIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAiModelsRouteHandler: RouteHandler<typeof getAiModelsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postAiOpenaiChatCompletionsRouteHandler: RouteHandler<
  typeof postAiOpenaiChatCompletionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAiOpenaiEmbeddingsRouteHandler: RouteHandler<
  typeof postAiOpenaiEmbeddingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAiOpenaiEmbeddingsModelsRouteHandler: RouteHandler<
  typeof getAiOpenaiEmbeddingsModelsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAiOpenaiModelsRouteHandler: RouteHandler<typeof getAiOpenaiModelsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postAiOpenaiResponsesRouteHandler: RouteHandler<
  typeof postAiOpenaiResponsesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAiResponsesRouteHandler: RouteHandler<typeof postAiResponsesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postAiSummarizeRouteHandler: RouteHandler<typeof postAiSummarizeRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getAiTestsSchedulesV1CronJobsRouteHandler: RouteHandler<
  typeof getAiTestsSchedulesV1CronJobsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAiTestsSchedulesV1CronJobsRouteHandler: RouteHandler<
  typeof postAiTestsSchedulesV1CronJobsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAiTestsSchedulesV1CronJobsIdRouteHandler: RouteHandler<
  typeof deleteAiTestsSchedulesV1CronJobsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAiTestsSchedulesV1CronJobsIdRouteHandler: RouteHandler<
  typeof getAiTestsSchedulesV1CronJobsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchAiTestsSchedulesV1CronJobsIdRouteHandler: RouteHandler<
  typeof patchAiTestsSchedulesV1CronJobsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAiTestsTestFrameworkV1AiagentsRouteHandler: RouteHandler<
  typeof getAiTestsTestFrameworkV1AiagentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAiTestsTestFrameworkV1AiagentsRouteHandler: RouteHandler<
  typeof postAiTestsTestFrameworkV1AiagentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAiTestsTestFrameworkV1AiagentsIdRouteHandler: RouteHandler<
  typeof deleteAiTestsTestFrameworkV1AiagentsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAiTestsTestFrameworkV1AiagentsIdRouteHandler: RouteHandler<
  typeof getAiTestsTestFrameworkV1AiagentsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAiTestsTestFrameworkV1AiagentsIdRouteHandler: RouteHandler<
  typeof putAiTestsTestFrameworkV1AiagentsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAiTestsTestFrameworkV1MetricsRouteHandler: RouteHandler<
  typeof getAiTestsTestFrameworkV1MetricsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAiTestsTestFrameworkV1MetricsRouteHandler: RouteHandler<
  typeof postAiTestsTestFrameworkV1MetricsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAiTestsTestFrameworkV1MetricsBulkCreateRouteHandler: RouteHandler<
  typeof postAiTestsTestFrameworkV1MetricsBulkCreateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAiTestsTestFrameworkV1MetricsGenerateMetricsRouteHandler: RouteHandler<
  typeof postAiTestsTestFrameworkV1MetricsGenerateMetricsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAiTestsTestFrameworkV1MetricsGenerateMetricsProgressRouteHandler: RouteHandler<
  typeof getAiTestsTestFrameworkV1MetricsGenerateMetricsProgressRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAiTestsTestFrameworkV1MetricsIdRouteHandler: RouteHandler<
  typeof deleteAiTestsTestFrameworkV1MetricsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAiTestsTestFrameworkV1MetricsIdRouteHandler: RouteHandler<
  typeof getAiTestsTestFrameworkV1MetricsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchAiTestsTestFrameworkV1MetricsIdRouteHandler: RouteHandler<
  typeof patchAiTestsTestFrameworkV1MetricsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAiTestsTestFrameworkV1PersonalitiesRouteHandler: RouteHandler<
  typeof getAiTestsTestFrameworkV1PersonalitiesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAiTestsTestFrameworkV1ResultsRouteHandler: RouteHandler<
  typeof getAiTestsTestFrameworkV1ResultsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAiTestsTestFrameworkV1ResultsIdRouteHandler: RouteHandler<
  typeof deleteAiTestsTestFrameworkV1ResultsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAiTestsTestFrameworkV1ResultsIdRouteHandler: RouteHandler<
  typeof getAiTestsTestFrameworkV1ResultsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAiTestsTestFrameworkV1ResultsIdRerunRouteHandler: RouteHandler<
  typeof postAiTestsTestFrameworkV1ResultsIdRerunRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAiTestsTestFrameworkV1ScenariosRouteHandler: RouteHandler<
  typeof getAiTestsTestFrameworkV1ScenariosRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAiTestsTestFrameworkV1ScenariosRouteHandler: RouteHandler<
  typeof postAiTestsTestFrameworkV1ScenariosRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAiTestsTestFrameworkV1ScenariosExportScenariosRouteHandler: RouteHandler<
  typeof getAiTestsTestFrameworkV1ScenariosExportScenariosRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAiTestsTestFrameworkV1ScenariosGenerateBgRouteHandler: RouteHandler<
  typeof postAiTestsTestFrameworkV1ScenariosGenerateBgRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAiTestsTestFrameworkV1ScenariosGenerateProgressRouteHandler: RouteHandler<
  typeof getAiTestsTestFrameworkV1ScenariosGenerateProgressRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAiTestsTestFrameworkV1ScenariosRunScenariosRouteHandler: RouteHandler<
  typeof postAiTestsTestFrameworkV1ScenariosRunScenariosRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAiTestsTestFrameworkV1ScenariosScenarioAgentRouteHandler: RouteHandler<
  typeof postAiTestsTestFrameworkV1ScenariosScenarioAgentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAiTestsTestFrameworkV1ScenariosScenarioAgentProgressRouteHandler: RouteHandler<
  typeof getAiTestsTestFrameworkV1ScenariosScenarioAgentProgressRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAiTestsTestFrameworkV1ScenariosIdRouteHandler: RouteHandler<
  typeof deleteAiTestsTestFrameworkV1ScenariosIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAiTestsTestFrameworkV1ScenariosIdRouteHandler: RouteHandler<
  typeof getAiTestsTestFrameworkV1ScenariosIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchAiTestsTestFrameworkV1ScenariosIdRouteHandler: RouteHandler<
  typeof patchAiTestsTestFrameworkV1ScenariosIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAiToolsRouteHandler: RouteHandler<typeof getAiToolsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postAiToolsRouteHandler: RouteHandler<typeof postAiToolsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAiToolsToolIdRouteHandler: RouteHandler<
  typeof deleteAiToolsToolIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAiToolsToolIdRouteHandler: RouteHandler<typeof getAiToolsToolIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const patchAiToolsToolIdRouteHandler: RouteHandler<typeof patchAiToolsToolIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postAiTypesafeV1SystemoneRouteHandler: RouteHandler<
  typeof postAiTypesafeV1SystemoneRoute
> = async (c) => {
  throw new Error('Not implemented')
}
