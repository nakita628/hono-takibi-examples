import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteV2GenAiAgentsAgentUuidApiKeysApiKeyUuidRoute,
  deleteV2GenAiAgentsAgentUuidFunctionsFunctionUuidRoute,
  deleteV2GenAiAgentsAgentUuidGuardrailsGuardrailUuidRoute,
  deleteV2GenAiAgentsAgentUuidKnowledgeBasesKnowledgeBaseUuidRoute,
  deleteV2GenAiAgentsParentAgentUuidChildAgentsChildAgentUuidRoute,
  deleteV2GenAiAgentsUuidRoute,
  deleteV2GenAiAnthropicKeysApiKeyUuidRoute,
  deleteV2GenAiCustomEvaluationMetricsMetricUuidRoute,
  deleteV2GenAiCustomModelsUuidRoute,
  deleteV2GenAiEvaluationDatasetsDatasetUuidRoute,
  deleteV2GenAiKnowledgeBasesKnowledgeBaseUuidDataSourcesDataSourceUuidRoute,
  deleteV2GenAiKnowledgeBasesUuidRoute,
  deleteV2GenAiModelEvaluationPresetsEvalPresetUuidRoute,
  deleteV2GenAiModelEvaluationRunsEvalRunUuidRoute,
  deleteV2GenAiModelsApiKeysApiKeyUuidRoute,
  deleteV2GenAiModelsRoutersUuidRoute,
  deleteV2GenAiOpenaiKeysApiKeyUuidRoute,
  deleteV2GenAiScenarioSetsScenarioSetUuidRoute,
  deleteV2GenAiScheduledIndexingUuidRoute,
  deleteV2GenAiSimulationRunsRunUuidRoute,
  deleteV2GenAiWorkspacesWorkspaceUuidRoute,
  getV2GenAiAgentsAgentUuidApiKeysRoute,
  getV2GenAiAgentsRoute,
  getV2GenAiAgentsUuidChildAgentsRoute,
  getV2GenAiAgentsUuidRoute,
  getV2GenAiAgentsUuidUsageRoute,
  getV2GenAiAgentsUuidVersionsRoute,
  getV2GenAiAnthropicKeysApiKeyUuidRoute,
  getV2GenAiAnthropicKeysRoute,
  getV2GenAiAnthropicKeysUuidAgentsRoute,
  getV2GenAiCustomModelsRoute,
  getV2GenAiCustomModelsUuidRoute,
  getV2GenAiEvaluationDatasetsDatasetUuidDownloadUrlRoute,
  getV2GenAiEvaluationDatasetsRoute,
  getV2GenAiEvaluationMetricsRoute,
  getV2GenAiEvaluationRunsEvaluationRunUuidResultsPromptIdRoute,
  getV2GenAiEvaluationRunsEvaluationRunUuidResultsRoute,
  getV2GenAiEvaluationRunsEvaluationRunUuidRoute,
  getV2GenAiEvaluationTestCasesEvaluationTestCaseUuidEvaluationRunsRoute,
  getV2GenAiEvaluationTestCasesRoute,
  getV2GenAiEvaluationTestCasesTestCaseUuidRoute,
  getV2GenAiIndexingJobsIndexingJobUuidDataSourcesRoute,
  getV2GenAiIndexingJobsIndexingJobUuidDetailsSignedUrlRoute,
  getV2GenAiIndexingJobsRoute,
  getV2GenAiIndexingJobsUuidRoute,
  getV2GenAiKnowledgeBasesKnowledgeBaseUuidDataSourcesRoute,
  getV2GenAiKnowledgeBasesKnowledgeBaseUuidIndexingJobsRoute,
  getV2GenAiKnowledgeBasesRoute,
  getV2GenAiKnowledgeBasesUuidRoute,
  getV2GenAiModelEvaluationMetricsRoute,
  getV2GenAiModelEvaluationPresetsEvalPresetUuidRoute,
  getV2GenAiModelEvaluationPresetsRoute,
  getV2GenAiModelEvaluationRunsEvalRunUuidResultsDownloadUrlRoute,
  getV2GenAiModelEvaluationRunsEvalRunUuidRoute,
  getV2GenAiModelEvaluationRunsRoute,
  getV2GenAiModelsApiKeysRoute,
  getV2GenAiModelsCatalogIdRoute,
  getV2GenAiModelsCatalogRoute,
  getV2GenAiModelsCatalogV2IdRoute,
  getV2GenAiModelsCatalogV2Route,
  getV2GenAiModelsRoute,
  getV2GenAiModelsRoutersPresetsRoute,
  getV2GenAiModelsRoutersRoute,
  getV2GenAiModelsRoutersTasksPresetsRoute,
  getV2GenAiModelsRoutersUuidRoute,
  getV2GenAiOauth2UrlRoute,
  getV2GenAiOpenaiKeysApiKeyUuidRoute,
  getV2GenAiOpenaiKeysRoute,
  getV2GenAiOpenaiKeysUuidAgentsRoute,
  getV2GenAiRegionsRoute,
  getV2GenAiScenarioLibraryLibraryScenarioUuidScenariosRoute,
  getV2GenAiScenarioLibraryRoute,
  getV2GenAiScenarioSetsRoute,
  getV2GenAiScenarioSetsScenarioSetUuidDownloadUrlRoute,
  getV2GenAiScenarioSetsScenarioSetUuidRoute,
  getV2GenAiScenarioSetsScenarioSetUuidScenariosRoute,
  getV2GenAiScheduledIndexingKnowledgeBaseKnowledgeBaseUuidRoute,
  getV2GenAiSimulationRunsRoute,
  getV2GenAiSimulationRunsRunUuidEpisodesEpisodeUuidRoute,
  getV2GenAiSimulationRunsRunUuidEpisodesEpisodeUuidTrajectoryRoute,
  getV2GenAiSimulationRunsRunUuidEpisodesEpisodeUuidTrajectoryUrlRoute,
  getV2GenAiSimulationRunsRunUuidEpisodesRoute,
  getV2GenAiSimulationRunsRunUuidRoute,
  getV2GenAiWorkspacesRoute,
  getV2GenAiWorkspacesWorkspaceUuidAgentsRoute,
  getV2GenAiWorkspacesWorkspaceUuidEvaluationTestCasesRoute,
  getV2GenAiWorkspacesWorkspaceUuidRoute,
  patchV2GenAiCustomModelsUuidMetadataRoute,
  patchV2GenAiModelEvaluationRunsEvalRunUuidRoute,
  patchV2GenAiSimulationRunsRunUuidCancelRoute,
  postV2GenAiAgentsAgentUuidApiKeysRoute,
  postV2GenAiAgentsAgentUuidFunctionsRoute,
  postV2GenAiAgentsAgentUuidGuardrailsRoute,
  postV2GenAiAgentsAgentUuidKnowledgeBasesKnowledgeBaseUuidRoute,
  postV2GenAiAgentsAgentUuidKnowledgeBasesRoute,
  postV2GenAiAgentsParentAgentUuidChildAgentsChildAgentUuidRoute,
  postV2GenAiAgentsRoute,
  postV2GenAiAnthropicKeysRoute,
  postV2GenAiCustomEvaluationMetricsRoute,
  postV2GenAiCustomModelsImportRoute,
  postV2GenAiEvaluationDatasetsFileUploadPresignedUrlsRoute,
  postV2GenAiEvaluationDatasetsRoute,
  postV2GenAiEvaluationRunsRoute,
  postV2GenAiEvaluationTestCasesRoute,
  postV2GenAiIndexingJobsRoute,
  postV2GenAiKnowledgeBasesDataSourcesFileUploadPresignedUrlsRoute,
  postV2GenAiKnowledgeBasesKnowledgeBaseUuidDataSourcesRoute,
  postV2GenAiKnowledgeBasesRoute,
  postV2GenAiModelEvaluationDatasetsFileUploadPresignedUrlsRoute,
  postV2GenAiModelEvaluationRunsRoute,
  postV2GenAiModelsApiKeysRoute,
  postV2GenAiModelsRoutersRoute,
  postV2GenAiOauth2DropboxTokensRoute,
  postV2GenAiOpenaiKeysRoute,
  postV2GenAiScenarioLibraryLibraryScenarioUuidCreateScenarioSetRoute,
  postV2GenAiScenarioSetsFileUploadPresignedUrlsRoute,
  postV2GenAiScenarioSetsGenerateRoute,
  postV2GenAiScenarioSetsRoute,
  postV2GenAiScenarioSetsScenarioSetUuidDuplicateRoute,
  postV2GenAiScheduledIndexingRoute,
  postV2GenAiSimulationRunsRoute,
  postV2GenAiWorkspacesRoute,
  putV2GenAiAgentsAgentUuidApiKeysApiKeyUuidRegenerateRoute,
  putV2GenAiAgentsAgentUuidApiKeysApiKeyUuidRoute,
  putV2GenAiAgentsAgentUuidFunctionsFunctionUuidRoute,
  putV2GenAiAgentsParentAgentUuidChildAgentsChildAgentUuidRoute,
  putV2GenAiAgentsUuidDeploymentVisibilityRoute,
  putV2GenAiAgentsUuidRoute,
  putV2GenAiAgentsUuidVersionsRoute,
  putV2GenAiAnthropicKeysApiKeyUuidRoute,
  putV2GenAiCustomEvaluationMetricsMetricUuidRoute,
  putV2GenAiEvaluationTestCasesTestCaseUuidRoute,
  putV2GenAiIndexingJobsUuidCancelRoute,
  putV2GenAiKnowledgeBasesKnowledgeBaseUuidDataSourcesDataSourceUuidRoute,
  putV2GenAiKnowledgeBasesUuidRoute,
  putV2GenAiModelEvaluationRunsEvalRunUuidCancelRoute,
  putV2GenAiModelsApiKeysApiKeyUuidRegenerateRoute,
  putV2GenAiModelsApiKeysApiKeyUuidRoute,
  putV2GenAiModelsRoutersUuidRoute,
  putV2GenAiOpenaiKeysApiKeyUuidRoute,
  putV2GenAiScenarioSetsScenarioSetUuidRoute,
  putV2GenAiSimulationRunsRunUuidRoute,
  putV2GenAiWorkspacesWorkspaceUuidAgentsRoute,
  putV2GenAiWorkspacesWorkspaceUuidRoute,
} from '../routes'

export const getV2GenAiAgentsRouteHandler: RouteHandler<typeof getV2GenAiAgentsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV2GenAiAgentsRouteHandler: RouteHandler<typeof postV2GenAiAgentsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV2GenAiAgentsAgentUuidApiKeysRouteHandler: RouteHandler<
  typeof getV2GenAiAgentsAgentUuidApiKeysRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2GenAiAgentsAgentUuidApiKeysRouteHandler: RouteHandler<
  typeof postV2GenAiAgentsAgentUuidApiKeysRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV2GenAiAgentsAgentUuidApiKeysApiKeyUuidRouteHandler: RouteHandler<
  typeof putV2GenAiAgentsAgentUuidApiKeysApiKeyUuidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV2GenAiAgentsAgentUuidApiKeysApiKeyUuidRouteHandler: RouteHandler<
  typeof deleteV2GenAiAgentsAgentUuidApiKeysApiKeyUuidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV2GenAiAgentsAgentUuidApiKeysApiKeyUuidRegenerateRouteHandler: RouteHandler<
  typeof putV2GenAiAgentsAgentUuidApiKeysApiKeyUuidRegenerateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2GenAiAgentsAgentUuidFunctionsRouteHandler: RouteHandler<
  typeof postV2GenAiAgentsAgentUuidFunctionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV2GenAiAgentsAgentUuidFunctionsFunctionUuidRouteHandler: RouteHandler<
  typeof putV2GenAiAgentsAgentUuidFunctionsFunctionUuidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV2GenAiAgentsAgentUuidFunctionsFunctionUuidRouteHandler: RouteHandler<
  typeof deleteV2GenAiAgentsAgentUuidFunctionsFunctionUuidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2GenAiAgentsAgentUuidGuardrailsRouteHandler: RouteHandler<
  typeof postV2GenAiAgentsAgentUuidGuardrailsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV2GenAiAgentsAgentUuidGuardrailsGuardrailUuidRouteHandler: RouteHandler<
  typeof deleteV2GenAiAgentsAgentUuidGuardrailsGuardrailUuidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2GenAiAgentsAgentUuidKnowledgeBasesRouteHandler: RouteHandler<
  typeof postV2GenAiAgentsAgentUuidKnowledgeBasesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2GenAiAgentsAgentUuidKnowledgeBasesKnowledgeBaseUuidRouteHandler: RouteHandler<
  typeof postV2GenAiAgentsAgentUuidKnowledgeBasesKnowledgeBaseUuidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV2GenAiAgentsAgentUuidKnowledgeBasesKnowledgeBaseUuidRouteHandler: RouteHandler<
  typeof deleteV2GenAiAgentsAgentUuidKnowledgeBasesKnowledgeBaseUuidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2GenAiAgentsParentAgentUuidChildAgentsChildAgentUuidRouteHandler: RouteHandler<
  typeof postV2GenAiAgentsParentAgentUuidChildAgentsChildAgentUuidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV2GenAiAgentsParentAgentUuidChildAgentsChildAgentUuidRouteHandler: RouteHandler<
  typeof putV2GenAiAgentsParentAgentUuidChildAgentsChildAgentUuidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV2GenAiAgentsParentAgentUuidChildAgentsChildAgentUuidRouteHandler: RouteHandler<
  typeof deleteV2GenAiAgentsParentAgentUuidChildAgentsChildAgentUuidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2GenAiAgentsUuidRouteHandler: RouteHandler<
  typeof getV2GenAiAgentsUuidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV2GenAiAgentsUuidRouteHandler: RouteHandler<
  typeof putV2GenAiAgentsUuidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV2GenAiAgentsUuidRouteHandler: RouteHandler<
  typeof deleteV2GenAiAgentsUuidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2GenAiAgentsUuidChildAgentsRouteHandler: RouteHandler<
  typeof getV2GenAiAgentsUuidChildAgentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV2GenAiAgentsUuidDeploymentVisibilityRouteHandler: RouteHandler<
  typeof putV2GenAiAgentsUuidDeploymentVisibilityRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2GenAiAgentsUuidUsageRouteHandler: RouteHandler<
  typeof getV2GenAiAgentsUuidUsageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2GenAiAgentsUuidVersionsRouteHandler: RouteHandler<
  typeof getV2GenAiAgentsUuidVersionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV2GenAiAgentsUuidVersionsRouteHandler: RouteHandler<
  typeof putV2GenAiAgentsUuidVersionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2GenAiAnthropicKeysRouteHandler: RouteHandler<
  typeof getV2GenAiAnthropicKeysRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2GenAiAnthropicKeysRouteHandler: RouteHandler<
  typeof postV2GenAiAnthropicKeysRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2GenAiAnthropicKeysApiKeyUuidRouteHandler: RouteHandler<
  typeof getV2GenAiAnthropicKeysApiKeyUuidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV2GenAiAnthropicKeysApiKeyUuidRouteHandler: RouteHandler<
  typeof putV2GenAiAnthropicKeysApiKeyUuidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV2GenAiAnthropicKeysApiKeyUuidRouteHandler: RouteHandler<
  typeof deleteV2GenAiAnthropicKeysApiKeyUuidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2GenAiAnthropicKeysUuidAgentsRouteHandler: RouteHandler<
  typeof getV2GenAiAnthropicKeysUuidAgentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2GenAiCustomModelsRouteHandler: RouteHandler<
  typeof getV2GenAiCustomModelsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2GenAiCustomModelsImportRouteHandler: RouteHandler<
  typeof postV2GenAiCustomModelsImportRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2GenAiCustomModelsUuidRouteHandler: RouteHandler<
  typeof getV2GenAiCustomModelsUuidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV2GenAiCustomModelsUuidRouteHandler: RouteHandler<
  typeof deleteV2GenAiCustomModelsUuidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV2GenAiCustomModelsUuidMetadataRouteHandler: RouteHandler<
  typeof patchV2GenAiCustomModelsUuidMetadataRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2GenAiEvaluationDatasetsRouteHandler: RouteHandler<
  typeof getV2GenAiEvaluationDatasetsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2GenAiEvaluationDatasetsRouteHandler: RouteHandler<
  typeof postV2GenAiEvaluationDatasetsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2GenAiEvaluationDatasetsFileUploadPresignedUrlsRouteHandler: RouteHandler<
  typeof postV2GenAiEvaluationDatasetsFileUploadPresignedUrlsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV2GenAiEvaluationDatasetsDatasetUuidRouteHandler: RouteHandler<
  typeof deleteV2GenAiEvaluationDatasetsDatasetUuidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2GenAiEvaluationDatasetsDatasetUuidDownloadUrlRouteHandler: RouteHandler<
  typeof getV2GenAiEvaluationDatasetsDatasetUuidDownloadUrlRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2GenAiEvaluationMetricsRouteHandler: RouteHandler<
  typeof getV2GenAiEvaluationMetricsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2GenAiCustomEvaluationMetricsRouteHandler: RouteHandler<
  typeof postV2GenAiCustomEvaluationMetricsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV2GenAiCustomEvaluationMetricsMetricUuidRouteHandler: RouteHandler<
  typeof putV2GenAiCustomEvaluationMetricsMetricUuidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV2GenAiCustomEvaluationMetricsMetricUuidRouteHandler: RouteHandler<
  typeof deleteV2GenAiCustomEvaluationMetricsMetricUuidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2GenAiEvaluationRunsRouteHandler: RouteHandler<
  typeof postV2GenAiEvaluationRunsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2GenAiEvaluationRunsEvaluationRunUuidRouteHandler: RouteHandler<
  typeof getV2GenAiEvaluationRunsEvaluationRunUuidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2GenAiEvaluationRunsEvaluationRunUuidResultsRouteHandler: RouteHandler<
  typeof getV2GenAiEvaluationRunsEvaluationRunUuidResultsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2GenAiEvaluationRunsEvaluationRunUuidResultsPromptIdRouteHandler: RouteHandler<
  typeof getV2GenAiEvaluationRunsEvaluationRunUuidResultsPromptIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2GenAiEvaluationTestCasesRouteHandler: RouteHandler<
  typeof getV2GenAiEvaluationTestCasesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2GenAiEvaluationTestCasesRouteHandler: RouteHandler<
  typeof postV2GenAiEvaluationTestCasesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2GenAiEvaluationTestCasesEvaluationTestCaseUuidEvaluationRunsRouteHandler: RouteHandler<
  typeof getV2GenAiEvaluationTestCasesEvaluationTestCaseUuidEvaluationRunsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2GenAiEvaluationTestCasesTestCaseUuidRouteHandler: RouteHandler<
  typeof getV2GenAiEvaluationTestCasesTestCaseUuidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV2GenAiEvaluationTestCasesTestCaseUuidRouteHandler: RouteHandler<
  typeof putV2GenAiEvaluationTestCasesTestCaseUuidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2GenAiIndexingJobsRouteHandler: RouteHandler<
  typeof getV2GenAiIndexingJobsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2GenAiIndexingJobsRouteHandler: RouteHandler<
  typeof postV2GenAiIndexingJobsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2GenAiIndexingJobsIndexingJobUuidDataSourcesRouteHandler: RouteHandler<
  typeof getV2GenAiIndexingJobsIndexingJobUuidDataSourcesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2GenAiIndexingJobsIndexingJobUuidDetailsSignedUrlRouteHandler: RouteHandler<
  typeof getV2GenAiIndexingJobsIndexingJobUuidDetailsSignedUrlRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2GenAiIndexingJobsUuidRouteHandler: RouteHandler<
  typeof getV2GenAiIndexingJobsUuidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV2GenAiIndexingJobsUuidCancelRouteHandler: RouteHandler<
  typeof putV2GenAiIndexingJobsUuidCancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2GenAiKnowledgeBasesRouteHandler: RouteHandler<
  typeof getV2GenAiKnowledgeBasesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2GenAiKnowledgeBasesRouteHandler: RouteHandler<
  typeof postV2GenAiKnowledgeBasesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2GenAiKnowledgeBasesDataSourcesFileUploadPresignedUrlsRouteHandler: RouteHandler<
  typeof postV2GenAiKnowledgeBasesDataSourcesFileUploadPresignedUrlsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2GenAiKnowledgeBasesKnowledgeBaseUuidDataSourcesRouteHandler: RouteHandler<
  typeof getV2GenAiKnowledgeBasesKnowledgeBaseUuidDataSourcesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2GenAiKnowledgeBasesKnowledgeBaseUuidDataSourcesRouteHandler: RouteHandler<
  typeof postV2GenAiKnowledgeBasesKnowledgeBaseUuidDataSourcesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV2GenAiKnowledgeBasesKnowledgeBaseUuidDataSourcesDataSourceUuidRouteHandler: RouteHandler<
  typeof putV2GenAiKnowledgeBasesKnowledgeBaseUuidDataSourcesDataSourceUuidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV2GenAiKnowledgeBasesKnowledgeBaseUuidDataSourcesDataSourceUuidRouteHandler: RouteHandler<
  typeof deleteV2GenAiKnowledgeBasesKnowledgeBaseUuidDataSourcesDataSourceUuidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2GenAiKnowledgeBasesKnowledgeBaseUuidIndexingJobsRouteHandler: RouteHandler<
  typeof getV2GenAiKnowledgeBasesKnowledgeBaseUuidIndexingJobsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2GenAiKnowledgeBasesUuidRouteHandler: RouteHandler<
  typeof getV2GenAiKnowledgeBasesUuidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV2GenAiKnowledgeBasesUuidRouteHandler: RouteHandler<
  typeof putV2GenAiKnowledgeBasesUuidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV2GenAiKnowledgeBasesUuidRouteHandler: RouteHandler<
  typeof deleteV2GenAiKnowledgeBasesUuidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2GenAiModelEvaluationDatasetsFileUploadPresignedUrlsRouteHandler: RouteHandler<
  typeof postV2GenAiModelEvaluationDatasetsFileUploadPresignedUrlsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2GenAiModelEvaluationMetricsRouteHandler: RouteHandler<
  typeof getV2GenAiModelEvaluationMetricsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2GenAiModelEvaluationPresetsRouteHandler: RouteHandler<
  typeof getV2GenAiModelEvaluationPresetsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2GenAiModelEvaluationPresetsEvalPresetUuidRouteHandler: RouteHandler<
  typeof getV2GenAiModelEvaluationPresetsEvalPresetUuidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV2GenAiModelEvaluationPresetsEvalPresetUuidRouteHandler: RouteHandler<
  typeof deleteV2GenAiModelEvaluationPresetsEvalPresetUuidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2GenAiModelEvaluationRunsRouteHandler: RouteHandler<
  typeof getV2GenAiModelEvaluationRunsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2GenAiModelEvaluationRunsRouteHandler: RouteHandler<
  typeof postV2GenAiModelEvaluationRunsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2GenAiModelEvaluationRunsEvalRunUuidRouteHandler: RouteHandler<
  typeof getV2GenAiModelEvaluationRunsEvalRunUuidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV2GenAiModelEvaluationRunsEvalRunUuidRouteHandler: RouteHandler<
  typeof deleteV2GenAiModelEvaluationRunsEvalRunUuidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV2GenAiModelEvaluationRunsEvalRunUuidRouteHandler: RouteHandler<
  typeof patchV2GenAiModelEvaluationRunsEvalRunUuidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV2GenAiModelEvaluationRunsEvalRunUuidCancelRouteHandler: RouteHandler<
  typeof putV2GenAiModelEvaluationRunsEvalRunUuidCancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2GenAiModelEvaluationRunsEvalRunUuidResultsDownloadUrlRouteHandler: RouteHandler<
  typeof getV2GenAiModelEvaluationRunsEvalRunUuidResultsDownloadUrlRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2GenAiModelsRouteHandler: RouteHandler<typeof getV2GenAiModelsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV2GenAiModelsApiKeysRouteHandler: RouteHandler<
  typeof getV2GenAiModelsApiKeysRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2GenAiModelsApiKeysRouteHandler: RouteHandler<
  typeof postV2GenAiModelsApiKeysRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV2GenAiModelsApiKeysApiKeyUuidRouteHandler: RouteHandler<
  typeof putV2GenAiModelsApiKeysApiKeyUuidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV2GenAiModelsApiKeysApiKeyUuidRouteHandler: RouteHandler<
  typeof deleteV2GenAiModelsApiKeysApiKeyUuidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV2GenAiModelsApiKeysApiKeyUuidRegenerateRouteHandler: RouteHandler<
  typeof putV2GenAiModelsApiKeysApiKeyUuidRegenerateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2GenAiModelsCatalogRouteHandler: RouteHandler<
  typeof getV2GenAiModelsCatalogRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2GenAiModelsCatalogIdRouteHandler: RouteHandler<
  typeof getV2GenAiModelsCatalogIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2GenAiModelsCatalogV2RouteHandler: RouteHandler<
  typeof getV2GenAiModelsCatalogV2Route
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2GenAiModelsCatalogV2IdRouteHandler: RouteHandler<
  typeof getV2GenAiModelsCatalogV2IdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2GenAiModelsRoutersRouteHandler: RouteHandler<
  typeof getV2GenAiModelsRoutersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2GenAiModelsRoutersRouteHandler: RouteHandler<
  typeof postV2GenAiModelsRoutersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2GenAiModelsRoutersPresetsRouteHandler: RouteHandler<
  typeof getV2GenAiModelsRoutersPresetsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2GenAiModelsRoutersTasksPresetsRouteHandler: RouteHandler<
  typeof getV2GenAiModelsRoutersTasksPresetsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2GenAiModelsRoutersUuidRouteHandler: RouteHandler<
  typeof getV2GenAiModelsRoutersUuidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV2GenAiModelsRoutersUuidRouteHandler: RouteHandler<
  typeof putV2GenAiModelsRoutersUuidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV2GenAiModelsRoutersUuidRouteHandler: RouteHandler<
  typeof deleteV2GenAiModelsRoutersUuidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2GenAiOauth2DropboxTokensRouteHandler: RouteHandler<
  typeof postV2GenAiOauth2DropboxTokensRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2GenAiOauth2UrlRouteHandler: RouteHandler<
  typeof getV2GenAiOauth2UrlRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2GenAiOpenaiKeysRouteHandler: RouteHandler<
  typeof getV2GenAiOpenaiKeysRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2GenAiOpenaiKeysRouteHandler: RouteHandler<
  typeof postV2GenAiOpenaiKeysRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2GenAiOpenaiKeysApiKeyUuidRouteHandler: RouteHandler<
  typeof getV2GenAiOpenaiKeysApiKeyUuidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV2GenAiOpenaiKeysApiKeyUuidRouteHandler: RouteHandler<
  typeof putV2GenAiOpenaiKeysApiKeyUuidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV2GenAiOpenaiKeysApiKeyUuidRouteHandler: RouteHandler<
  typeof deleteV2GenAiOpenaiKeysApiKeyUuidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2GenAiOpenaiKeysUuidAgentsRouteHandler: RouteHandler<
  typeof getV2GenAiOpenaiKeysUuidAgentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2GenAiRegionsRouteHandler: RouteHandler<typeof getV2GenAiRegionsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV2GenAiScenarioLibraryRouteHandler: RouteHandler<
  typeof getV2GenAiScenarioLibraryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2GenAiScenarioLibraryLibraryScenarioUuidCreateScenarioSetRouteHandler: RouteHandler<
  typeof postV2GenAiScenarioLibraryLibraryScenarioUuidCreateScenarioSetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2GenAiScenarioLibraryLibraryScenarioUuidScenariosRouteHandler: RouteHandler<
  typeof getV2GenAiScenarioLibraryLibraryScenarioUuidScenariosRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2GenAiScenarioSetsRouteHandler: RouteHandler<
  typeof getV2GenAiScenarioSetsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2GenAiScenarioSetsRouteHandler: RouteHandler<
  typeof postV2GenAiScenarioSetsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2GenAiScenarioSetsFileUploadPresignedUrlsRouteHandler: RouteHandler<
  typeof postV2GenAiScenarioSetsFileUploadPresignedUrlsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2GenAiScenarioSetsGenerateRouteHandler: RouteHandler<
  typeof postV2GenAiScenarioSetsGenerateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2GenAiScenarioSetsScenarioSetUuidRouteHandler: RouteHandler<
  typeof getV2GenAiScenarioSetsScenarioSetUuidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV2GenAiScenarioSetsScenarioSetUuidRouteHandler: RouteHandler<
  typeof putV2GenAiScenarioSetsScenarioSetUuidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV2GenAiScenarioSetsScenarioSetUuidRouteHandler: RouteHandler<
  typeof deleteV2GenAiScenarioSetsScenarioSetUuidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2GenAiScenarioSetsScenarioSetUuidDownloadUrlRouteHandler: RouteHandler<
  typeof getV2GenAiScenarioSetsScenarioSetUuidDownloadUrlRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2GenAiScenarioSetsScenarioSetUuidDuplicateRouteHandler: RouteHandler<
  typeof postV2GenAiScenarioSetsScenarioSetUuidDuplicateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2GenAiScenarioSetsScenarioSetUuidScenariosRouteHandler: RouteHandler<
  typeof getV2GenAiScenarioSetsScenarioSetUuidScenariosRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2GenAiScheduledIndexingRouteHandler: RouteHandler<
  typeof postV2GenAiScheduledIndexingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2GenAiScheduledIndexingKnowledgeBaseKnowledgeBaseUuidRouteHandler: RouteHandler<
  typeof getV2GenAiScheduledIndexingKnowledgeBaseKnowledgeBaseUuidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV2GenAiScheduledIndexingUuidRouteHandler: RouteHandler<
  typeof deleteV2GenAiScheduledIndexingUuidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2GenAiSimulationRunsRouteHandler: RouteHandler<
  typeof getV2GenAiSimulationRunsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2GenAiSimulationRunsRouteHandler: RouteHandler<
  typeof postV2GenAiSimulationRunsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2GenAiSimulationRunsRunUuidRouteHandler: RouteHandler<
  typeof getV2GenAiSimulationRunsRunUuidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV2GenAiSimulationRunsRunUuidRouteHandler: RouteHandler<
  typeof putV2GenAiSimulationRunsRunUuidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV2GenAiSimulationRunsRunUuidRouteHandler: RouteHandler<
  typeof deleteV2GenAiSimulationRunsRunUuidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV2GenAiSimulationRunsRunUuidCancelRouteHandler: RouteHandler<
  typeof patchV2GenAiSimulationRunsRunUuidCancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2GenAiSimulationRunsRunUuidEpisodesRouteHandler: RouteHandler<
  typeof getV2GenAiSimulationRunsRunUuidEpisodesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2GenAiSimulationRunsRunUuidEpisodesEpisodeUuidRouteHandler: RouteHandler<
  typeof getV2GenAiSimulationRunsRunUuidEpisodesEpisodeUuidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2GenAiSimulationRunsRunUuidEpisodesEpisodeUuidTrajectoryRouteHandler: RouteHandler<
  typeof getV2GenAiSimulationRunsRunUuidEpisodesEpisodeUuidTrajectoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2GenAiSimulationRunsRunUuidEpisodesEpisodeUuidTrajectoryUrlRouteHandler: RouteHandler<
  typeof getV2GenAiSimulationRunsRunUuidEpisodesEpisodeUuidTrajectoryUrlRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2GenAiWorkspacesRouteHandler: RouteHandler<
  typeof getV2GenAiWorkspacesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2GenAiWorkspacesRouteHandler: RouteHandler<
  typeof postV2GenAiWorkspacesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2GenAiWorkspacesWorkspaceUuidRouteHandler: RouteHandler<
  typeof getV2GenAiWorkspacesWorkspaceUuidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV2GenAiWorkspacesWorkspaceUuidRouteHandler: RouteHandler<
  typeof putV2GenAiWorkspacesWorkspaceUuidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV2GenAiWorkspacesWorkspaceUuidRouteHandler: RouteHandler<
  typeof deleteV2GenAiWorkspacesWorkspaceUuidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2GenAiWorkspacesWorkspaceUuidAgentsRouteHandler: RouteHandler<
  typeof getV2GenAiWorkspacesWorkspaceUuidAgentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV2GenAiWorkspacesWorkspaceUuidAgentsRouteHandler: RouteHandler<
  typeof putV2GenAiWorkspacesWorkspaceUuidAgentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2GenAiWorkspacesWorkspaceUuidEvaluationTestCasesRouteHandler: RouteHandler<
  typeof getV2GenAiWorkspacesWorkspaceUuidEvaluationTestCasesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
