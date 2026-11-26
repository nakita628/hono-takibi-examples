import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getApiPublicAnnotationQueuesRoute,
  postApiPublicAnnotationQueuesRoute,
  getApiPublicAnnotationQueuesQueueIdRoute,
  getApiPublicAnnotationQueuesQueueIdItemsRoute,
  postApiPublicAnnotationQueuesQueueIdItemsRoute,
  getApiPublicAnnotationQueuesQueueIdItemsItemIdRoute,
  patchApiPublicAnnotationQueuesQueueIdItemsItemIdRoute,
  deleteApiPublicAnnotationQueuesQueueIdItemsItemIdRoute,
  postApiPublicAnnotationQueuesQueueIdAssignmentsRoute,
  deleteApiPublicAnnotationQueuesQueueIdAssignmentsRoute,
  getApiPublicIntegrationsBlobStorageRoute,
  putApiPublicIntegrationsBlobStorageRoute,
  getApiPublicIntegrationsBlobStorageIdRoute,
  deleteApiPublicIntegrationsBlobStorageIdRoute,
  postApiPublicCommentsRoute,
  getApiPublicCommentsRoute,
  getApiPublicCommentsCommentIdRoute,
  postApiPublicDatasetItemsRoute,
  getApiPublicDatasetItemsRoute,
  getApiPublicDatasetItemsIdRoute,
  deleteApiPublicDatasetItemsIdRoute,
  getApiPublicV2DatasetsRoute,
  postApiPublicV2DatasetsRoute,
  getApiPublicV2DatasetsDatasetNameRoute,
  postApiPublicV2EvaluationRulesRoute,
  getApiPublicV2EvaluationRulesRoute,
  getApiPublicV2EvaluationRulesEvaluationRuleIdRoute,
  patchApiPublicV2EvaluationRulesEvaluationRuleIdRoute,
  deleteApiPublicV2EvaluationRulesEvaluationRuleIdRoute,
  postApiPublicV2EvaluatorsRoute,
  getApiPublicV2EvaluatorsRoute,
  getApiPublicV2EvaluatorsEvaluatorIdRoute,
  patchApiPublicV2EvaluatorsEvaluatorIdRoute,
  deleteApiPublicV2EvaluatorsEvaluatorIdRoute,
  getApiPublicV2EvaluatorsEvaluatorIdVersionsRoute,
  getApiPublicExperimentsRoute,
  getApiPublicExperimentItemsRoute,
  postApiPublicFeedbackRoute,
  getApiPublicHealthRoute,
  getApiPublicLlmConnectionsRoute,
  putApiPublicLlmConnectionsRoute,
  deleteApiPublicLlmConnectionsIdRoute,
  getApiPublicOrganizationsLlmConnectionsRoute,
  putApiPublicOrganizationsLlmConnectionsRoute,
  deleteApiPublicOrganizationsLlmConnectionsIdRoute,
  getApiPublicMediaMediaIdRoute,
  patchApiPublicMediaMediaIdRoute,
  postApiPublicMediaRoute,
  getApiPublicV2MetricsRoute,
  postApiPublicModelsRoute,
  getApiPublicModelsRoute,
  putApiPublicModelsIdRoute,
  getApiPublicModelsIdRoute,
  deleteApiPublicModelsIdRoute,
  getApiPublicV2ObservationsRoute,
  postApiPublicOtelV1TracesRoute,
  getApiPublicOrganizationsMembershipsRoute,
  putApiPublicOrganizationsMembershipsRoute,
  deleteApiPublicOrganizationsMembershipsRoute,
  getApiPublicProjectsProjectIdMembershipsRoute,
  putApiPublicProjectsProjectIdMembershipsRoute,
  deleteApiPublicProjectsProjectIdMembershipsRoute,
  getApiPublicOrganizationsProjectsRoute,
  getApiPublicOrganizationsApiKeysRoute,
  getApiPublicProjectsRoute,
  postApiPublicProjectsRoute,
  putApiPublicProjectsProjectIdRoute,
  deleteApiPublicProjectsProjectIdRoute,
  getApiPublicProjectsProjectIdApiKeysRoute,
  postApiPublicProjectsProjectIdApiKeysRoute,
  deleteApiPublicProjectsProjectIdApiKeysApiKeyIdRoute,
  patchApiPublicV2PromptsNameVersionsVersionRoute,
  getApiPublicV2PromptsPromptNameRoute,
  deleteApiPublicV2PromptsPromptNameRoute,
  getApiPublicV2PromptsRoute,
  postApiPublicV2PromptsRoute,
  getApiPublicScimServiceProviderConfigRoute,
  getApiPublicScimResourceTypesRoute,
  getApiPublicScimSchemasRoute,
  getApiPublicScimUsersRoute,
  postApiPublicScimUsersRoute,
  getApiPublicScimUsersUserIdRoute,
  deleteApiPublicScimUsersUserIdRoute,
  postApiPublicScoreConfigsRoute,
  getApiPublicScoreConfigsRoute,
  getApiPublicScoreConfigsConfigIdRoute,
  patchApiPublicScoreConfigsConfigIdRoute,
  postApiPublicScoresRoute,
  deleteApiPublicScoresScoreIdRoute,
  getApiPublicV3ScoresRoute,
  getApiPublicSkillsRoute,
  postApiPublicSkillsRoute,
  getApiPublicSkillsSkillNameRoute,
  patchApiPublicSkillsSkillNameRoute,
  getApiPublicSkillsFilesContentRoute,
  patchApiPublicSkillsSkillNameVersionsSkillVersionRoute,
  deleteApiPublicSkillsSkillNameVersionsSkillVersionRoute,
  deleteApiPublicTracesTraceIdRoute,
  deleteApiPublicTracesRoute,
  getApiPublicUnstableOrganizationsBillableUnitsRoute,
  getApiPublicUnstableDashboardWidgetsRoute,
  postApiPublicUnstableDashboardWidgetsRoute,
  getApiPublicUnstableDashboardWidgetsWidgetIdRoute,
  patchApiPublicUnstableDashboardWidgetsWidgetIdRoute,
  deleteApiPublicUnstableDashboardWidgetsWidgetIdRoute,
  getApiPublicUnstableDashboardsRoute,
  postApiPublicUnstableDashboardsRoute,
  getApiPublicUnstableDashboardsDashboardIdRoute,
  patchApiPublicUnstableDashboardsDashboardIdRoute,
  deleteApiPublicUnstableDashboardsDashboardIdRoute,
  postApiPublicUnstableDashboardsDashboardIdPlacementsRoute,
  patchApiPublicUnstableDashboardsDashboardIdPlacementsPlacementIdRoute,
  deleteApiPublicUnstableDashboardsDashboardIdPlacementsPlacementIdRoute,
  getApiPublicUnstableTopicFacetsRoute,
  getApiPublicUnstableTopicFacetsFacetIdRoute,
  getApiPublicUnstableTopicsRoute,
  getApiPublicUnstableTopicsTopicStableIdRoute,
  getApiPublicUnstableTopicRulesRoute,
  getApiPublicUnstableTopicRulesRuleIdRoute,
  getApiPublicUnstableTopicSummariesRoute,
  getApiPublicUnstableTopicAssignmentsRoute,
} from '../routes'

export const getApiPublicAnnotationQueuesRouteHandler: RouteHandler<
  typeof getApiPublicAnnotationQueuesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiPublicAnnotationQueuesRouteHandler: RouteHandler<
  typeof postApiPublicAnnotationQueuesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiPublicAnnotationQueuesQueueIdRouteHandler: RouteHandler<
  typeof getApiPublicAnnotationQueuesQueueIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiPublicAnnotationQueuesQueueIdItemsRouteHandler: RouteHandler<
  typeof getApiPublicAnnotationQueuesQueueIdItemsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiPublicAnnotationQueuesQueueIdItemsRouteHandler: RouteHandler<
  typeof postApiPublicAnnotationQueuesQueueIdItemsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiPublicAnnotationQueuesQueueIdItemsItemIdRouteHandler: RouteHandler<
  typeof getApiPublicAnnotationQueuesQueueIdItemsItemIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiPublicAnnotationQueuesQueueIdItemsItemIdRouteHandler: RouteHandler<
  typeof patchApiPublicAnnotationQueuesQueueIdItemsItemIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiPublicAnnotationQueuesQueueIdItemsItemIdRouteHandler: RouteHandler<
  typeof deleteApiPublicAnnotationQueuesQueueIdItemsItemIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiPublicAnnotationQueuesQueueIdAssignmentsRouteHandler: RouteHandler<
  typeof postApiPublicAnnotationQueuesQueueIdAssignmentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiPublicAnnotationQueuesQueueIdAssignmentsRouteHandler: RouteHandler<
  typeof deleteApiPublicAnnotationQueuesQueueIdAssignmentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiPublicIntegrationsBlobStorageRouteHandler: RouteHandler<
  typeof getApiPublicIntegrationsBlobStorageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiPublicIntegrationsBlobStorageRouteHandler: RouteHandler<
  typeof putApiPublicIntegrationsBlobStorageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiPublicIntegrationsBlobStorageIdRouteHandler: RouteHandler<
  typeof getApiPublicIntegrationsBlobStorageIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiPublicIntegrationsBlobStorageIdRouteHandler: RouteHandler<
  typeof deleteApiPublicIntegrationsBlobStorageIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiPublicCommentsRouteHandler: RouteHandler<
  typeof postApiPublicCommentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiPublicCommentsRouteHandler: RouteHandler<
  typeof getApiPublicCommentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiPublicCommentsCommentIdRouteHandler: RouteHandler<
  typeof getApiPublicCommentsCommentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiPublicDatasetItemsRouteHandler: RouteHandler<
  typeof postApiPublicDatasetItemsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiPublicDatasetItemsRouteHandler: RouteHandler<
  typeof getApiPublicDatasetItemsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiPublicDatasetItemsIdRouteHandler: RouteHandler<
  typeof getApiPublicDatasetItemsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiPublicDatasetItemsIdRouteHandler: RouteHandler<
  typeof deleteApiPublicDatasetItemsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiPublicV2DatasetsRouteHandler: RouteHandler<
  typeof getApiPublicV2DatasetsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiPublicV2DatasetsRouteHandler: RouteHandler<
  typeof postApiPublicV2DatasetsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiPublicV2DatasetsDatasetNameRouteHandler: RouteHandler<
  typeof getApiPublicV2DatasetsDatasetNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiPublicV2EvaluationRulesRouteHandler: RouteHandler<
  typeof postApiPublicV2EvaluationRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiPublicV2EvaluationRulesRouteHandler: RouteHandler<
  typeof getApiPublicV2EvaluationRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiPublicV2EvaluationRulesEvaluationRuleIdRouteHandler: RouteHandler<
  typeof getApiPublicV2EvaluationRulesEvaluationRuleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiPublicV2EvaluationRulesEvaluationRuleIdRouteHandler: RouteHandler<
  typeof patchApiPublicV2EvaluationRulesEvaluationRuleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiPublicV2EvaluationRulesEvaluationRuleIdRouteHandler: RouteHandler<
  typeof deleteApiPublicV2EvaluationRulesEvaluationRuleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiPublicV2EvaluatorsRouteHandler: RouteHandler<
  typeof postApiPublicV2EvaluatorsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiPublicV2EvaluatorsRouteHandler: RouteHandler<
  typeof getApiPublicV2EvaluatorsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiPublicV2EvaluatorsEvaluatorIdRouteHandler: RouteHandler<
  typeof getApiPublicV2EvaluatorsEvaluatorIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiPublicV2EvaluatorsEvaluatorIdRouteHandler: RouteHandler<
  typeof patchApiPublicV2EvaluatorsEvaluatorIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiPublicV2EvaluatorsEvaluatorIdRouteHandler: RouteHandler<
  typeof deleteApiPublicV2EvaluatorsEvaluatorIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiPublicV2EvaluatorsEvaluatorIdVersionsRouteHandler: RouteHandler<
  typeof getApiPublicV2EvaluatorsEvaluatorIdVersionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiPublicExperimentsRouteHandler: RouteHandler<
  typeof getApiPublicExperimentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiPublicExperimentItemsRouteHandler: RouteHandler<
  typeof getApiPublicExperimentItemsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiPublicFeedbackRouteHandler: RouteHandler<
  typeof postApiPublicFeedbackRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiPublicHealthRouteHandler: RouteHandler<typeof getApiPublicHealthRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiPublicLlmConnectionsRouteHandler: RouteHandler<
  typeof getApiPublicLlmConnectionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiPublicLlmConnectionsRouteHandler: RouteHandler<
  typeof putApiPublicLlmConnectionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiPublicLlmConnectionsIdRouteHandler: RouteHandler<
  typeof deleteApiPublicLlmConnectionsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiPublicOrganizationsLlmConnectionsRouteHandler: RouteHandler<
  typeof getApiPublicOrganizationsLlmConnectionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiPublicOrganizationsLlmConnectionsRouteHandler: RouteHandler<
  typeof putApiPublicOrganizationsLlmConnectionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiPublicOrganizationsLlmConnectionsIdRouteHandler: RouteHandler<
  typeof deleteApiPublicOrganizationsLlmConnectionsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiPublicMediaMediaIdRouteHandler: RouteHandler<
  typeof getApiPublicMediaMediaIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiPublicMediaMediaIdRouteHandler: RouteHandler<
  typeof patchApiPublicMediaMediaIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiPublicMediaRouteHandler: RouteHandler<typeof postApiPublicMediaRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiPublicV2MetricsRouteHandler: RouteHandler<
  typeof getApiPublicV2MetricsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiPublicModelsRouteHandler: RouteHandler<
  typeof postApiPublicModelsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiPublicModelsRouteHandler: RouteHandler<typeof getApiPublicModelsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putApiPublicModelsIdRouteHandler: RouteHandler<
  typeof putApiPublicModelsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiPublicModelsIdRouteHandler: RouteHandler<
  typeof getApiPublicModelsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiPublicModelsIdRouteHandler: RouteHandler<
  typeof deleteApiPublicModelsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiPublicV2ObservationsRouteHandler: RouteHandler<
  typeof getApiPublicV2ObservationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiPublicOtelV1TracesRouteHandler: RouteHandler<
  typeof postApiPublicOtelV1TracesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiPublicOrganizationsMembershipsRouteHandler: RouteHandler<
  typeof getApiPublicOrganizationsMembershipsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiPublicOrganizationsMembershipsRouteHandler: RouteHandler<
  typeof putApiPublicOrganizationsMembershipsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiPublicOrganizationsMembershipsRouteHandler: RouteHandler<
  typeof deleteApiPublicOrganizationsMembershipsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiPublicProjectsProjectIdMembershipsRouteHandler: RouteHandler<
  typeof getApiPublicProjectsProjectIdMembershipsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiPublicProjectsProjectIdMembershipsRouteHandler: RouteHandler<
  typeof putApiPublicProjectsProjectIdMembershipsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiPublicProjectsProjectIdMembershipsRouteHandler: RouteHandler<
  typeof deleteApiPublicProjectsProjectIdMembershipsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiPublicOrganizationsProjectsRouteHandler: RouteHandler<
  typeof getApiPublicOrganizationsProjectsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiPublicOrganizationsApiKeysRouteHandler: RouteHandler<
  typeof getApiPublicOrganizationsApiKeysRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiPublicProjectsRouteHandler: RouteHandler<
  typeof getApiPublicProjectsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiPublicProjectsRouteHandler: RouteHandler<
  typeof postApiPublicProjectsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiPublicProjectsProjectIdRouteHandler: RouteHandler<
  typeof putApiPublicProjectsProjectIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiPublicProjectsProjectIdRouteHandler: RouteHandler<
  typeof deleteApiPublicProjectsProjectIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiPublicProjectsProjectIdApiKeysRouteHandler: RouteHandler<
  typeof getApiPublicProjectsProjectIdApiKeysRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiPublicProjectsProjectIdApiKeysRouteHandler: RouteHandler<
  typeof postApiPublicProjectsProjectIdApiKeysRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiPublicProjectsProjectIdApiKeysApiKeyIdRouteHandler: RouteHandler<
  typeof deleteApiPublicProjectsProjectIdApiKeysApiKeyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiPublicV2PromptsNameVersionsVersionRouteHandler: RouteHandler<
  typeof patchApiPublicV2PromptsNameVersionsVersionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiPublicV2PromptsPromptNameRouteHandler: RouteHandler<
  typeof getApiPublicV2PromptsPromptNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiPublicV2PromptsPromptNameRouteHandler: RouteHandler<
  typeof deleteApiPublicV2PromptsPromptNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiPublicV2PromptsRouteHandler: RouteHandler<
  typeof getApiPublicV2PromptsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiPublicV2PromptsRouteHandler: RouteHandler<
  typeof postApiPublicV2PromptsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiPublicScimServiceProviderConfigRouteHandler: RouteHandler<
  typeof getApiPublicScimServiceProviderConfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiPublicScimResourceTypesRouteHandler: RouteHandler<
  typeof getApiPublicScimResourceTypesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiPublicScimSchemasRouteHandler: RouteHandler<
  typeof getApiPublicScimSchemasRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiPublicScimUsersRouteHandler: RouteHandler<
  typeof getApiPublicScimUsersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiPublicScimUsersRouteHandler: RouteHandler<
  typeof postApiPublicScimUsersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiPublicScimUsersUserIdRouteHandler: RouteHandler<
  typeof getApiPublicScimUsersUserIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiPublicScimUsersUserIdRouteHandler: RouteHandler<
  typeof deleteApiPublicScimUsersUserIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiPublicScoreConfigsRouteHandler: RouteHandler<
  typeof postApiPublicScoreConfigsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiPublicScoreConfigsRouteHandler: RouteHandler<
  typeof getApiPublicScoreConfigsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiPublicScoreConfigsConfigIdRouteHandler: RouteHandler<
  typeof getApiPublicScoreConfigsConfigIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiPublicScoreConfigsConfigIdRouteHandler: RouteHandler<
  typeof patchApiPublicScoreConfigsConfigIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiPublicScoresRouteHandler: RouteHandler<
  typeof postApiPublicScoresRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiPublicScoresScoreIdRouteHandler: RouteHandler<
  typeof deleteApiPublicScoresScoreIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiPublicV3ScoresRouteHandler: RouteHandler<
  typeof getApiPublicV3ScoresRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiPublicSkillsRouteHandler: RouteHandler<typeof getApiPublicSkillsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postApiPublicSkillsRouteHandler: RouteHandler<
  typeof postApiPublicSkillsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiPublicSkillsSkillNameRouteHandler: RouteHandler<
  typeof getApiPublicSkillsSkillNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiPublicSkillsSkillNameRouteHandler: RouteHandler<
  typeof patchApiPublicSkillsSkillNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiPublicSkillsFilesContentRouteHandler: RouteHandler<
  typeof getApiPublicSkillsFilesContentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiPublicSkillsSkillNameVersionsSkillVersionRouteHandler: RouteHandler<
  typeof patchApiPublicSkillsSkillNameVersionsSkillVersionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiPublicSkillsSkillNameVersionsSkillVersionRouteHandler: RouteHandler<
  typeof deleteApiPublicSkillsSkillNameVersionsSkillVersionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiPublicTracesTraceIdRouteHandler: RouteHandler<
  typeof deleteApiPublicTracesTraceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiPublicTracesRouteHandler: RouteHandler<
  typeof deleteApiPublicTracesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiPublicUnstableOrganizationsBillableUnitsRouteHandler: RouteHandler<
  typeof getApiPublicUnstableOrganizationsBillableUnitsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiPublicUnstableDashboardWidgetsRouteHandler: RouteHandler<
  typeof getApiPublicUnstableDashboardWidgetsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiPublicUnstableDashboardWidgetsRouteHandler: RouteHandler<
  typeof postApiPublicUnstableDashboardWidgetsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiPublicUnstableDashboardWidgetsWidgetIdRouteHandler: RouteHandler<
  typeof getApiPublicUnstableDashboardWidgetsWidgetIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiPublicUnstableDashboardWidgetsWidgetIdRouteHandler: RouteHandler<
  typeof patchApiPublicUnstableDashboardWidgetsWidgetIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiPublicUnstableDashboardWidgetsWidgetIdRouteHandler: RouteHandler<
  typeof deleteApiPublicUnstableDashboardWidgetsWidgetIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiPublicUnstableDashboardsRouteHandler: RouteHandler<
  typeof getApiPublicUnstableDashboardsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiPublicUnstableDashboardsRouteHandler: RouteHandler<
  typeof postApiPublicUnstableDashboardsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiPublicUnstableDashboardsDashboardIdRouteHandler: RouteHandler<
  typeof getApiPublicUnstableDashboardsDashboardIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiPublicUnstableDashboardsDashboardIdRouteHandler: RouteHandler<
  typeof patchApiPublicUnstableDashboardsDashboardIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiPublicUnstableDashboardsDashboardIdRouteHandler: RouteHandler<
  typeof deleteApiPublicUnstableDashboardsDashboardIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiPublicUnstableDashboardsDashboardIdPlacementsRouteHandler: RouteHandler<
  typeof postApiPublicUnstableDashboardsDashboardIdPlacementsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiPublicUnstableDashboardsDashboardIdPlacementsPlacementIdRouteHandler: RouteHandler<
  typeof patchApiPublicUnstableDashboardsDashboardIdPlacementsPlacementIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiPublicUnstableDashboardsDashboardIdPlacementsPlacementIdRouteHandler: RouteHandler<
  typeof deleteApiPublicUnstableDashboardsDashboardIdPlacementsPlacementIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiPublicUnstableTopicFacetsRouteHandler: RouteHandler<
  typeof getApiPublicUnstableTopicFacetsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiPublicUnstableTopicFacetsFacetIdRouteHandler: RouteHandler<
  typeof getApiPublicUnstableTopicFacetsFacetIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiPublicUnstableTopicsRouteHandler: RouteHandler<
  typeof getApiPublicUnstableTopicsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiPublicUnstableTopicsTopicStableIdRouteHandler: RouteHandler<
  typeof getApiPublicUnstableTopicsTopicStableIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiPublicUnstableTopicRulesRouteHandler: RouteHandler<
  typeof getApiPublicUnstableTopicRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiPublicUnstableTopicRulesRuleIdRouteHandler: RouteHandler<
  typeof getApiPublicUnstableTopicRulesRuleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiPublicUnstableTopicSummariesRouteHandler: RouteHandler<
  typeof getApiPublicUnstableTopicSummariesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiPublicUnstableTopicAssignmentsRouteHandler: RouteHandler<
  typeof getApiPublicUnstableTopicAssignmentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
