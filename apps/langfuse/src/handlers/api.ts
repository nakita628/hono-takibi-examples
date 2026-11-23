import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiPublicAnnotationQueuesQueueIdAssignmentsRoute,
  deleteApiPublicAnnotationQueuesQueueIdItemsItemIdRoute,
  deleteApiPublicDatasetItemsIdRoute,
  deleteApiPublicIntegrationsBlobStorageIdRoute,
  deleteApiPublicLlmConnectionsIdRoute,
  deleteApiPublicModelsIdRoute,
  deleteApiPublicOrganizationsLlmConnectionsIdRoute,
  deleteApiPublicOrganizationsMembershipsRoute,
  deleteApiPublicProjectsProjectIdApiKeysApiKeyIdRoute,
  deleteApiPublicProjectsProjectIdMembershipsRoute,
  deleteApiPublicProjectsProjectIdRoute,
  deleteApiPublicScimUsersUserIdRoute,
  deleteApiPublicScoresScoreIdRoute,
  deleteApiPublicSkillsSkillNameVersionsSkillVersionRoute,
  deleteApiPublicTracesRoute,
  deleteApiPublicTracesTraceIdRoute,
  deleteApiPublicUnstableDashboardsDashboardIdPlacementsPlacementIdRoute,
  deleteApiPublicUnstableDashboardsDashboardIdRoute,
  deleteApiPublicUnstableDashboardWidgetsWidgetIdRoute,
  deleteApiPublicV2EvaluationRulesEvaluationRuleIdRoute,
  deleteApiPublicV2EvaluatorsEvaluatorIdRoute,
  deleteApiPublicV2PromptsPromptNameRoute,
  getApiPublicAnnotationQueuesQueueIdItemsItemIdRoute,
  getApiPublicAnnotationQueuesQueueIdItemsRoute,
  getApiPublicAnnotationQueuesQueueIdRoute,
  getApiPublicAnnotationQueuesRoute,
  getApiPublicCommentsCommentIdRoute,
  getApiPublicCommentsRoute,
  getApiPublicDatasetItemsIdRoute,
  getApiPublicDatasetItemsRoute,
  getApiPublicExperimentItemsRoute,
  getApiPublicExperimentsRoute,
  getApiPublicHealthRoute,
  getApiPublicIntegrationsBlobStorageIdRoute,
  getApiPublicIntegrationsBlobStorageRoute,
  getApiPublicLlmConnectionsRoute,
  getApiPublicMediaMediaIdRoute,
  getApiPublicModelsIdRoute,
  getApiPublicModelsRoute,
  getApiPublicOrganizationsApiKeysRoute,
  getApiPublicOrganizationsLlmConnectionsRoute,
  getApiPublicOrganizationsMembershipsRoute,
  getApiPublicOrganizationsProjectsRoute,
  getApiPublicProjectsProjectIdApiKeysRoute,
  getApiPublicProjectsProjectIdMembershipsRoute,
  getApiPublicProjectsRoute,
  getApiPublicScimResourceTypesRoute,
  getApiPublicScimSchemasRoute,
  getApiPublicScimServiceProviderConfigRoute,
  getApiPublicScimUsersRoute,
  getApiPublicScimUsersUserIdRoute,
  getApiPublicScoreConfigsConfigIdRoute,
  getApiPublicScoreConfigsRoute,
  getApiPublicSkillsFilesContentRoute,
  getApiPublicSkillsRoute,
  getApiPublicSkillsSkillNameRoute,
  getApiPublicUnstableDashboardsDashboardIdRoute,
  getApiPublicUnstableDashboardsRoute,
  getApiPublicUnstableDashboardWidgetsRoute,
  getApiPublicUnstableDashboardWidgetsWidgetIdRoute,
  getApiPublicUnstableOrganizationsBillableUnitsRoute,
  getApiPublicUnstableTopicAssignmentsRoute,
  getApiPublicUnstableTopicFacetsFacetIdRoute,
  getApiPublicUnstableTopicFacetsRoute,
  getApiPublicUnstableTopicRulesRoute,
  getApiPublicUnstableTopicRulesRuleIdRoute,
  getApiPublicUnstableTopicsRoute,
  getApiPublicUnstableTopicsTopicIdRoute,
  getApiPublicUnstableTopicSummariesRoute,
  getApiPublicV2DatasetsDatasetNameRoute,
  getApiPublicV2DatasetsRoute,
  getApiPublicV2EvaluationRulesEvaluationRuleIdRoute,
  getApiPublicV2EvaluationRulesRoute,
  getApiPublicV2EvaluatorsEvaluatorIdRoute,
  getApiPublicV2EvaluatorsEvaluatorIdVersionsRoute,
  getApiPublicV2EvaluatorsRoute,
  getApiPublicV2MetricsRoute,
  getApiPublicV2ObservationsRoute,
  getApiPublicV2PromptsPromptNameRoute,
  getApiPublicV2PromptsRoute,
  getApiPublicV3ScoresRoute,
  patchApiPublicAnnotationQueuesQueueIdItemsItemIdRoute,
  patchApiPublicMediaMediaIdRoute,
  patchApiPublicScoreConfigsConfigIdRoute,
  patchApiPublicSkillsSkillNameRoute,
  patchApiPublicSkillsSkillNameVersionsSkillVersionRoute,
  patchApiPublicUnstableDashboardsDashboardIdPlacementsPlacementIdRoute,
  patchApiPublicUnstableDashboardsDashboardIdRoute,
  patchApiPublicUnstableDashboardWidgetsWidgetIdRoute,
  patchApiPublicV2EvaluationRulesEvaluationRuleIdRoute,
  patchApiPublicV2EvaluatorsEvaluatorIdRoute,
  patchApiPublicV2PromptsNameVersionsVersionRoute,
  postApiPublicAnnotationQueuesQueueIdAssignmentsRoute,
  postApiPublicAnnotationQueuesQueueIdItemsRoute,
  postApiPublicAnnotationQueuesRoute,
  postApiPublicCommentsRoute,
  postApiPublicDatasetItemsRoute,
  postApiPublicFeedbackRoute,
  postApiPublicMediaRoute,
  postApiPublicModelsRoute,
  postApiPublicOtelV1TracesRoute,
  postApiPublicProjectsProjectIdApiKeysRoute,
  postApiPublicProjectsRoute,
  postApiPublicScimUsersRoute,
  postApiPublicScoreConfigsRoute,
  postApiPublicScoresRoute,
  postApiPublicSkillsRoute,
  postApiPublicUnstableDashboardsDashboardIdPlacementsRoute,
  postApiPublicUnstableDashboardsRoute,
  postApiPublicUnstableDashboardWidgetsRoute,
  postApiPublicV2DatasetsRoute,
  postApiPublicV2EvaluationRulesRoute,
  postApiPublicV2EvaluatorsRoute,
  postApiPublicV2PromptsRoute,
  putApiPublicIntegrationsBlobStorageRoute,
  putApiPublicLlmConnectionsRoute,
  putApiPublicModelsIdRoute,
  putApiPublicOrganizationsLlmConnectionsRoute,
  putApiPublicOrganizationsMembershipsRoute,
  putApiPublicProjectsProjectIdMembershipsRoute,
  putApiPublicProjectsProjectIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const apiHandler = app
  .openapi(getApiPublicAnnotationQueuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiPublicAnnotationQueuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPublicAnnotationQueuesQueueIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPublicAnnotationQueuesQueueIdItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiPublicAnnotationQueuesQueueIdItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPublicAnnotationQueuesQueueIdItemsItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiPublicAnnotationQueuesQueueIdItemsItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiPublicAnnotationQueuesQueueIdItemsItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiPublicAnnotationQueuesQueueIdAssignmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiPublicAnnotationQueuesQueueIdAssignmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPublicIntegrationsBlobStorageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiPublicIntegrationsBlobStorageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPublicIntegrationsBlobStorageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiPublicIntegrationsBlobStorageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiPublicCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPublicCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPublicCommentsCommentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiPublicDatasetItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPublicDatasetItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPublicDatasetItemsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiPublicDatasetItemsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPublicV2DatasetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiPublicV2DatasetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPublicV2DatasetsDatasetNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiPublicV2EvaluationRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPublicV2EvaluationRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPublicV2EvaluationRulesEvaluationRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiPublicV2EvaluationRulesEvaluationRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiPublicV2EvaluationRulesEvaluationRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiPublicV2EvaluatorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPublicV2EvaluatorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPublicV2EvaluatorsEvaluatorIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiPublicV2EvaluatorsEvaluatorIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiPublicV2EvaluatorsEvaluatorIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPublicV2EvaluatorsEvaluatorIdVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPublicExperimentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPublicExperimentItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiPublicFeedbackRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPublicHealthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPublicLlmConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiPublicLlmConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiPublicLlmConnectionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPublicOrganizationsLlmConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiPublicOrganizationsLlmConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiPublicOrganizationsLlmConnectionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPublicMediaMediaIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiPublicMediaMediaIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiPublicMediaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPublicV2MetricsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiPublicModelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPublicModelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiPublicModelsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPublicModelsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiPublicModelsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPublicV2ObservationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiPublicOtelV1TracesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPublicOrganizationsMembershipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiPublicOrganizationsMembershipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiPublicOrganizationsMembershipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPublicProjectsProjectIdMembershipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiPublicProjectsProjectIdMembershipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiPublicProjectsProjectIdMembershipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPublicOrganizationsProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPublicOrganizationsApiKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPublicProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiPublicProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiPublicProjectsProjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiPublicProjectsProjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPublicProjectsProjectIdApiKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiPublicProjectsProjectIdApiKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiPublicProjectsProjectIdApiKeysApiKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiPublicV2PromptsNameVersionsVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPublicV2PromptsPromptNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiPublicV2PromptsPromptNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPublicV2PromptsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiPublicV2PromptsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPublicScimServiceProviderConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPublicScimResourceTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPublicScimSchemasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPublicScimUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiPublicScimUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPublicScimUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiPublicScimUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiPublicScoreConfigsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPublicScoreConfigsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPublicScoreConfigsConfigIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiPublicScoreConfigsConfigIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiPublicScoresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiPublicScoresScoreIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPublicV3ScoresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPublicSkillsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiPublicSkillsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPublicSkillsSkillNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiPublicSkillsSkillNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPublicSkillsFilesContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiPublicSkillsSkillNameVersionsSkillVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiPublicSkillsSkillNameVersionsSkillVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiPublicTracesTraceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiPublicTracesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPublicUnstableOrganizationsBillableUnitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPublicUnstableDashboardWidgetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiPublicUnstableDashboardWidgetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPublicUnstableDashboardWidgetsWidgetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiPublicUnstableDashboardWidgetsWidgetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiPublicUnstableDashboardWidgetsWidgetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPublicUnstableDashboardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiPublicUnstableDashboardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPublicUnstableDashboardsDashboardIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiPublicUnstableDashboardsDashboardIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiPublicUnstableDashboardsDashboardIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiPublicUnstableDashboardsDashboardIdPlacementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiPublicUnstableDashboardsDashboardIdPlacementsPlacementIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiPublicUnstableDashboardsDashboardIdPlacementsPlacementIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPublicUnstableTopicFacetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPublicUnstableTopicFacetsFacetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPublicUnstableTopicsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPublicUnstableTopicsTopicIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPublicUnstableTopicRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPublicUnstableTopicRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPublicUnstableTopicSummariesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPublicUnstableTopicAssignmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
