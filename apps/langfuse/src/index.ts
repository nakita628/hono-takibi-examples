import { OpenAPIHono } from '@hono/zod-openapi'
import {
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
} from './routes'
import {
  getApiPublicAnnotationQueuesRouteHandler,
  postApiPublicAnnotationQueuesRouteHandler,
  getApiPublicAnnotationQueuesQueueIdRouteHandler,
  getApiPublicAnnotationQueuesQueueIdItemsRouteHandler,
  postApiPublicAnnotationQueuesQueueIdItemsRouteHandler,
  getApiPublicAnnotationQueuesQueueIdItemsItemIdRouteHandler,
  patchApiPublicAnnotationQueuesQueueIdItemsItemIdRouteHandler,
  deleteApiPublicAnnotationQueuesQueueIdItemsItemIdRouteHandler,
  postApiPublicAnnotationQueuesQueueIdAssignmentsRouteHandler,
  deleteApiPublicAnnotationQueuesQueueIdAssignmentsRouteHandler,
  getApiPublicIntegrationsBlobStorageRouteHandler,
  putApiPublicIntegrationsBlobStorageRouteHandler,
  getApiPublicIntegrationsBlobStorageIdRouteHandler,
  deleteApiPublicIntegrationsBlobStorageIdRouteHandler,
  postApiPublicCommentsRouteHandler,
  getApiPublicCommentsRouteHandler,
  getApiPublicCommentsCommentIdRouteHandler,
  postApiPublicDatasetItemsRouteHandler,
  getApiPublicDatasetItemsRouteHandler,
  getApiPublicDatasetItemsIdRouteHandler,
  deleteApiPublicDatasetItemsIdRouteHandler,
  getApiPublicV2DatasetsRouteHandler,
  postApiPublicV2DatasetsRouteHandler,
  getApiPublicV2DatasetsDatasetNameRouteHandler,
  postApiPublicV2EvaluationRulesRouteHandler,
  getApiPublicV2EvaluationRulesRouteHandler,
  getApiPublicV2EvaluationRulesEvaluationRuleIdRouteHandler,
  patchApiPublicV2EvaluationRulesEvaluationRuleIdRouteHandler,
  deleteApiPublicV2EvaluationRulesEvaluationRuleIdRouteHandler,
  postApiPublicV2EvaluatorsRouteHandler,
  getApiPublicV2EvaluatorsRouteHandler,
  getApiPublicV2EvaluatorsEvaluatorIdRouteHandler,
  patchApiPublicV2EvaluatorsEvaluatorIdRouteHandler,
  deleteApiPublicV2EvaluatorsEvaluatorIdRouteHandler,
  getApiPublicV2EvaluatorsEvaluatorIdVersionsRouteHandler,
  getApiPublicExperimentsRouteHandler,
  getApiPublicExperimentItemsRouteHandler,
  postApiPublicFeedbackRouteHandler,
  getApiPublicHealthRouteHandler,
  getApiPublicLlmConnectionsRouteHandler,
  putApiPublicLlmConnectionsRouteHandler,
  deleteApiPublicLlmConnectionsIdRouteHandler,
  getApiPublicOrganizationsLlmConnectionsRouteHandler,
  putApiPublicOrganizationsLlmConnectionsRouteHandler,
  deleteApiPublicOrganizationsLlmConnectionsIdRouteHandler,
  getApiPublicMediaMediaIdRouteHandler,
  patchApiPublicMediaMediaIdRouteHandler,
  postApiPublicMediaRouteHandler,
  getApiPublicV2MetricsRouteHandler,
  postApiPublicModelsRouteHandler,
  getApiPublicModelsRouteHandler,
  putApiPublicModelsIdRouteHandler,
  getApiPublicModelsIdRouteHandler,
  deleteApiPublicModelsIdRouteHandler,
  getApiPublicV2ObservationsRouteHandler,
  postApiPublicOtelV1TracesRouteHandler,
  getApiPublicOrganizationsMembershipsRouteHandler,
  putApiPublicOrganizationsMembershipsRouteHandler,
  deleteApiPublicOrganizationsMembershipsRouteHandler,
  getApiPublicProjectsProjectIdMembershipsRouteHandler,
  putApiPublicProjectsProjectIdMembershipsRouteHandler,
  deleteApiPublicProjectsProjectIdMembershipsRouteHandler,
  getApiPublicOrganizationsProjectsRouteHandler,
  getApiPublicOrganizationsApiKeysRouteHandler,
  getApiPublicProjectsRouteHandler,
  postApiPublicProjectsRouteHandler,
  putApiPublicProjectsProjectIdRouteHandler,
  deleteApiPublicProjectsProjectIdRouteHandler,
  getApiPublicProjectsProjectIdApiKeysRouteHandler,
  postApiPublicProjectsProjectIdApiKeysRouteHandler,
  deleteApiPublicProjectsProjectIdApiKeysApiKeyIdRouteHandler,
  patchApiPublicV2PromptsNameVersionsVersionRouteHandler,
  getApiPublicV2PromptsPromptNameRouteHandler,
  deleteApiPublicV2PromptsPromptNameRouteHandler,
  getApiPublicV2PromptsRouteHandler,
  postApiPublicV2PromptsRouteHandler,
  getApiPublicScimServiceProviderConfigRouteHandler,
  getApiPublicScimResourceTypesRouteHandler,
  getApiPublicScimSchemasRouteHandler,
  getApiPublicScimUsersRouteHandler,
  postApiPublicScimUsersRouteHandler,
  getApiPublicScimUsersUserIdRouteHandler,
  deleteApiPublicScimUsersUserIdRouteHandler,
  postApiPublicScoreConfigsRouteHandler,
  getApiPublicScoreConfigsRouteHandler,
  getApiPublicScoreConfigsConfigIdRouteHandler,
  patchApiPublicScoreConfigsConfigIdRouteHandler,
  postApiPublicScoresRouteHandler,
  deleteApiPublicScoresScoreIdRouteHandler,
  getApiPublicV3ScoresRouteHandler,
  getApiPublicSkillsRouteHandler,
  postApiPublicSkillsRouteHandler,
  getApiPublicSkillsSkillNameRouteHandler,
  patchApiPublicSkillsSkillNameRouteHandler,
  getApiPublicSkillsFilesContentRouteHandler,
  patchApiPublicSkillsSkillNameVersionsSkillVersionRouteHandler,
  deleteApiPublicSkillsSkillNameVersionsSkillVersionRouteHandler,
  deleteApiPublicTracesTraceIdRouteHandler,
  deleteApiPublicTracesRouteHandler,
  getApiPublicUnstableOrganizationsBillableUnitsRouteHandler,
  getApiPublicUnstableDashboardWidgetsRouteHandler,
  postApiPublicUnstableDashboardWidgetsRouteHandler,
  getApiPublicUnstableDashboardWidgetsWidgetIdRouteHandler,
  patchApiPublicUnstableDashboardWidgetsWidgetIdRouteHandler,
  deleteApiPublicUnstableDashboardWidgetsWidgetIdRouteHandler,
  getApiPublicUnstableDashboardsRouteHandler,
  postApiPublicUnstableDashboardsRouteHandler,
  getApiPublicUnstableDashboardsDashboardIdRouteHandler,
  patchApiPublicUnstableDashboardsDashboardIdRouteHandler,
  deleteApiPublicUnstableDashboardsDashboardIdRouteHandler,
  postApiPublicUnstableDashboardsDashboardIdPlacementsRouteHandler,
  patchApiPublicUnstableDashboardsDashboardIdPlacementsPlacementIdRouteHandler,
  deleteApiPublicUnstableDashboardsDashboardIdPlacementsPlacementIdRouteHandler,
  getApiPublicUnstableTopicFacetsRouteHandler,
  getApiPublicUnstableTopicFacetsFacetIdRouteHandler,
  getApiPublicUnstableTopicsRouteHandler,
  getApiPublicUnstableTopicsTopicStableIdRouteHandler,
  getApiPublicUnstableTopicRulesRouteHandler,
  getApiPublicUnstableTopicRulesRuleIdRouteHandler,
  getApiPublicUnstableTopicSummariesRouteHandler,
  getApiPublicUnstableTopicAssignmentsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getApiPublicAnnotationQueuesRoute, getApiPublicAnnotationQueuesRouteHandler)
  .openapi(postApiPublicAnnotationQueuesRoute, postApiPublicAnnotationQueuesRouteHandler)
  .openapi(
    getApiPublicAnnotationQueuesQueueIdRoute,
    getApiPublicAnnotationQueuesQueueIdRouteHandler,
  )
  .openapi(
    getApiPublicAnnotationQueuesQueueIdItemsRoute,
    getApiPublicAnnotationQueuesQueueIdItemsRouteHandler,
  )
  .openapi(
    postApiPublicAnnotationQueuesQueueIdItemsRoute,
    postApiPublicAnnotationQueuesQueueIdItemsRouteHandler,
  )
  .openapi(
    getApiPublicAnnotationQueuesQueueIdItemsItemIdRoute,
    getApiPublicAnnotationQueuesQueueIdItemsItemIdRouteHandler,
  )
  .openapi(
    patchApiPublicAnnotationQueuesQueueIdItemsItemIdRoute,
    patchApiPublicAnnotationQueuesQueueIdItemsItemIdRouteHandler,
  )
  .openapi(
    deleteApiPublicAnnotationQueuesQueueIdItemsItemIdRoute,
    deleteApiPublicAnnotationQueuesQueueIdItemsItemIdRouteHandler,
  )
  .openapi(
    postApiPublicAnnotationQueuesQueueIdAssignmentsRoute,
    postApiPublicAnnotationQueuesQueueIdAssignmentsRouteHandler,
  )
  .openapi(
    deleteApiPublicAnnotationQueuesQueueIdAssignmentsRoute,
    deleteApiPublicAnnotationQueuesQueueIdAssignmentsRouteHandler,
  )
  .openapi(
    getApiPublicIntegrationsBlobStorageRoute,
    getApiPublicIntegrationsBlobStorageRouteHandler,
  )
  .openapi(
    putApiPublicIntegrationsBlobStorageRoute,
    putApiPublicIntegrationsBlobStorageRouteHandler,
  )
  .openapi(
    getApiPublicIntegrationsBlobStorageIdRoute,
    getApiPublicIntegrationsBlobStorageIdRouteHandler,
  )
  .openapi(
    deleteApiPublicIntegrationsBlobStorageIdRoute,
    deleteApiPublicIntegrationsBlobStorageIdRouteHandler,
  )
  .openapi(postApiPublicCommentsRoute, postApiPublicCommentsRouteHandler)
  .openapi(getApiPublicCommentsRoute, getApiPublicCommentsRouteHandler)
  .openapi(getApiPublicCommentsCommentIdRoute, getApiPublicCommentsCommentIdRouteHandler)
  .openapi(postApiPublicDatasetItemsRoute, postApiPublicDatasetItemsRouteHandler)
  .openapi(getApiPublicDatasetItemsRoute, getApiPublicDatasetItemsRouteHandler)
  .openapi(getApiPublicDatasetItemsIdRoute, getApiPublicDatasetItemsIdRouteHandler)
  .openapi(deleteApiPublicDatasetItemsIdRoute, deleteApiPublicDatasetItemsIdRouteHandler)
  .openapi(getApiPublicV2DatasetsRoute, getApiPublicV2DatasetsRouteHandler)
  .openapi(postApiPublicV2DatasetsRoute, postApiPublicV2DatasetsRouteHandler)
  .openapi(getApiPublicV2DatasetsDatasetNameRoute, getApiPublicV2DatasetsDatasetNameRouteHandler)
  .openapi(postApiPublicV2EvaluationRulesRoute, postApiPublicV2EvaluationRulesRouteHandler)
  .openapi(getApiPublicV2EvaluationRulesRoute, getApiPublicV2EvaluationRulesRouteHandler)
  .openapi(
    getApiPublicV2EvaluationRulesEvaluationRuleIdRoute,
    getApiPublicV2EvaluationRulesEvaluationRuleIdRouteHandler,
  )
  .openapi(
    patchApiPublicV2EvaluationRulesEvaluationRuleIdRoute,
    patchApiPublicV2EvaluationRulesEvaluationRuleIdRouteHandler,
  )
  .openapi(
    deleteApiPublicV2EvaluationRulesEvaluationRuleIdRoute,
    deleteApiPublicV2EvaluationRulesEvaluationRuleIdRouteHandler,
  )
  .openapi(postApiPublicV2EvaluatorsRoute, postApiPublicV2EvaluatorsRouteHandler)
  .openapi(getApiPublicV2EvaluatorsRoute, getApiPublicV2EvaluatorsRouteHandler)
  .openapi(
    getApiPublicV2EvaluatorsEvaluatorIdRoute,
    getApiPublicV2EvaluatorsEvaluatorIdRouteHandler,
  )
  .openapi(
    patchApiPublicV2EvaluatorsEvaluatorIdRoute,
    patchApiPublicV2EvaluatorsEvaluatorIdRouteHandler,
  )
  .openapi(
    deleteApiPublicV2EvaluatorsEvaluatorIdRoute,
    deleteApiPublicV2EvaluatorsEvaluatorIdRouteHandler,
  )
  .openapi(
    getApiPublicV2EvaluatorsEvaluatorIdVersionsRoute,
    getApiPublicV2EvaluatorsEvaluatorIdVersionsRouteHandler,
  )
  .openapi(getApiPublicExperimentsRoute, getApiPublicExperimentsRouteHandler)
  .openapi(getApiPublicExperimentItemsRoute, getApiPublicExperimentItemsRouteHandler)
  .openapi(postApiPublicFeedbackRoute, postApiPublicFeedbackRouteHandler)
  .openapi(getApiPublicHealthRoute, getApiPublicHealthRouteHandler)
  .openapi(getApiPublicLlmConnectionsRoute, getApiPublicLlmConnectionsRouteHandler)
  .openapi(putApiPublicLlmConnectionsRoute, putApiPublicLlmConnectionsRouteHandler)
  .openapi(deleteApiPublicLlmConnectionsIdRoute, deleteApiPublicLlmConnectionsIdRouteHandler)
  .openapi(
    getApiPublicOrganizationsLlmConnectionsRoute,
    getApiPublicOrganizationsLlmConnectionsRouteHandler,
  )
  .openapi(
    putApiPublicOrganizationsLlmConnectionsRoute,
    putApiPublicOrganizationsLlmConnectionsRouteHandler,
  )
  .openapi(
    deleteApiPublicOrganizationsLlmConnectionsIdRoute,
    deleteApiPublicOrganizationsLlmConnectionsIdRouteHandler,
  )
  .openapi(getApiPublicMediaMediaIdRoute, getApiPublicMediaMediaIdRouteHandler)
  .openapi(patchApiPublicMediaMediaIdRoute, patchApiPublicMediaMediaIdRouteHandler)
  .openapi(postApiPublicMediaRoute, postApiPublicMediaRouteHandler)
  .openapi(getApiPublicV2MetricsRoute, getApiPublicV2MetricsRouteHandler)
  .openapi(postApiPublicModelsRoute, postApiPublicModelsRouteHandler)
  .openapi(getApiPublicModelsRoute, getApiPublicModelsRouteHandler)
  .openapi(putApiPublicModelsIdRoute, putApiPublicModelsIdRouteHandler)
  .openapi(getApiPublicModelsIdRoute, getApiPublicModelsIdRouteHandler)
  .openapi(deleteApiPublicModelsIdRoute, deleteApiPublicModelsIdRouteHandler)
  .openapi(getApiPublicV2ObservationsRoute, getApiPublicV2ObservationsRouteHandler)
  .openapi(postApiPublicOtelV1TracesRoute, postApiPublicOtelV1TracesRouteHandler)
  .openapi(
    getApiPublicOrganizationsMembershipsRoute,
    getApiPublicOrganizationsMembershipsRouteHandler,
  )
  .openapi(
    putApiPublicOrganizationsMembershipsRoute,
    putApiPublicOrganizationsMembershipsRouteHandler,
  )
  .openapi(
    deleteApiPublicOrganizationsMembershipsRoute,
    deleteApiPublicOrganizationsMembershipsRouteHandler,
  )
  .openapi(
    getApiPublicProjectsProjectIdMembershipsRoute,
    getApiPublicProjectsProjectIdMembershipsRouteHandler,
  )
  .openapi(
    putApiPublicProjectsProjectIdMembershipsRoute,
    putApiPublicProjectsProjectIdMembershipsRouteHandler,
  )
  .openapi(
    deleteApiPublicProjectsProjectIdMembershipsRoute,
    deleteApiPublicProjectsProjectIdMembershipsRouteHandler,
  )
  .openapi(getApiPublicOrganizationsProjectsRoute, getApiPublicOrganizationsProjectsRouteHandler)
  .openapi(getApiPublicOrganizationsApiKeysRoute, getApiPublicOrganizationsApiKeysRouteHandler)
  .openapi(getApiPublicProjectsRoute, getApiPublicProjectsRouteHandler)
  .openapi(postApiPublicProjectsRoute, postApiPublicProjectsRouteHandler)
  .openapi(putApiPublicProjectsProjectIdRoute, putApiPublicProjectsProjectIdRouteHandler)
  .openapi(deleteApiPublicProjectsProjectIdRoute, deleteApiPublicProjectsProjectIdRouteHandler)
  .openapi(
    getApiPublicProjectsProjectIdApiKeysRoute,
    getApiPublicProjectsProjectIdApiKeysRouteHandler,
  )
  .openapi(
    postApiPublicProjectsProjectIdApiKeysRoute,
    postApiPublicProjectsProjectIdApiKeysRouteHandler,
  )
  .openapi(
    deleteApiPublicProjectsProjectIdApiKeysApiKeyIdRoute,
    deleteApiPublicProjectsProjectIdApiKeysApiKeyIdRouteHandler,
  )
  .openapi(
    patchApiPublicV2PromptsNameVersionsVersionRoute,
    patchApiPublicV2PromptsNameVersionsVersionRouteHandler,
  )
  .openapi(getApiPublicV2PromptsPromptNameRoute, getApiPublicV2PromptsPromptNameRouteHandler)
  .openapi(deleteApiPublicV2PromptsPromptNameRoute, deleteApiPublicV2PromptsPromptNameRouteHandler)
  .openapi(getApiPublicV2PromptsRoute, getApiPublicV2PromptsRouteHandler)
  .openapi(postApiPublicV2PromptsRoute, postApiPublicV2PromptsRouteHandler)
  .openapi(
    getApiPublicScimServiceProviderConfigRoute,
    getApiPublicScimServiceProviderConfigRouteHandler,
  )
  .openapi(getApiPublicScimResourceTypesRoute, getApiPublicScimResourceTypesRouteHandler)
  .openapi(getApiPublicScimSchemasRoute, getApiPublicScimSchemasRouteHandler)
  .openapi(getApiPublicScimUsersRoute, getApiPublicScimUsersRouteHandler)
  .openapi(postApiPublicScimUsersRoute, postApiPublicScimUsersRouteHandler)
  .openapi(getApiPublicScimUsersUserIdRoute, getApiPublicScimUsersUserIdRouteHandler)
  .openapi(deleteApiPublicScimUsersUserIdRoute, deleteApiPublicScimUsersUserIdRouteHandler)
  .openapi(postApiPublicScoreConfigsRoute, postApiPublicScoreConfigsRouteHandler)
  .openapi(getApiPublicScoreConfigsRoute, getApiPublicScoreConfigsRouteHandler)
  .openapi(getApiPublicScoreConfigsConfigIdRoute, getApiPublicScoreConfigsConfigIdRouteHandler)
  .openapi(patchApiPublicScoreConfigsConfigIdRoute, patchApiPublicScoreConfigsConfigIdRouteHandler)
  .openapi(postApiPublicScoresRoute, postApiPublicScoresRouteHandler)
  .openapi(deleteApiPublicScoresScoreIdRoute, deleteApiPublicScoresScoreIdRouteHandler)
  .openapi(getApiPublicV3ScoresRoute, getApiPublicV3ScoresRouteHandler)
  .openapi(getApiPublicSkillsRoute, getApiPublicSkillsRouteHandler)
  .openapi(postApiPublicSkillsRoute, postApiPublicSkillsRouteHandler)
  .openapi(getApiPublicSkillsSkillNameRoute, getApiPublicSkillsSkillNameRouteHandler)
  .openapi(patchApiPublicSkillsSkillNameRoute, patchApiPublicSkillsSkillNameRouteHandler)
  .openapi(getApiPublicSkillsFilesContentRoute, getApiPublicSkillsFilesContentRouteHandler)
  .openapi(
    patchApiPublicSkillsSkillNameVersionsSkillVersionRoute,
    patchApiPublicSkillsSkillNameVersionsSkillVersionRouteHandler,
  )
  .openapi(
    deleteApiPublicSkillsSkillNameVersionsSkillVersionRoute,
    deleteApiPublicSkillsSkillNameVersionsSkillVersionRouteHandler,
  )
  .openapi(deleteApiPublicTracesTraceIdRoute, deleteApiPublicTracesTraceIdRouteHandler)
  .openapi(deleteApiPublicTracesRoute, deleteApiPublicTracesRouteHandler)
  .openapi(
    getApiPublicUnstableOrganizationsBillableUnitsRoute,
    getApiPublicUnstableOrganizationsBillableUnitsRouteHandler,
  )
  .openapi(
    getApiPublicUnstableDashboardWidgetsRoute,
    getApiPublicUnstableDashboardWidgetsRouteHandler,
  )
  .openapi(
    postApiPublicUnstableDashboardWidgetsRoute,
    postApiPublicUnstableDashboardWidgetsRouteHandler,
  )
  .openapi(
    getApiPublicUnstableDashboardWidgetsWidgetIdRoute,
    getApiPublicUnstableDashboardWidgetsWidgetIdRouteHandler,
  )
  .openapi(
    patchApiPublicUnstableDashboardWidgetsWidgetIdRoute,
    patchApiPublicUnstableDashboardWidgetsWidgetIdRouteHandler,
  )
  .openapi(
    deleteApiPublicUnstableDashboardWidgetsWidgetIdRoute,
    deleteApiPublicUnstableDashboardWidgetsWidgetIdRouteHandler,
  )
  .openapi(getApiPublicUnstableDashboardsRoute, getApiPublicUnstableDashboardsRouteHandler)
  .openapi(postApiPublicUnstableDashboardsRoute, postApiPublicUnstableDashboardsRouteHandler)
  .openapi(
    getApiPublicUnstableDashboardsDashboardIdRoute,
    getApiPublicUnstableDashboardsDashboardIdRouteHandler,
  )
  .openapi(
    patchApiPublicUnstableDashboardsDashboardIdRoute,
    patchApiPublicUnstableDashboardsDashboardIdRouteHandler,
  )
  .openapi(
    deleteApiPublicUnstableDashboardsDashboardIdRoute,
    deleteApiPublicUnstableDashboardsDashboardIdRouteHandler,
  )
  .openapi(
    postApiPublicUnstableDashboardsDashboardIdPlacementsRoute,
    postApiPublicUnstableDashboardsDashboardIdPlacementsRouteHandler,
  )
  .openapi(
    patchApiPublicUnstableDashboardsDashboardIdPlacementsPlacementIdRoute,
    patchApiPublicUnstableDashboardsDashboardIdPlacementsPlacementIdRouteHandler,
  )
  .openapi(
    deleteApiPublicUnstableDashboardsDashboardIdPlacementsPlacementIdRoute,
    deleteApiPublicUnstableDashboardsDashboardIdPlacementsPlacementIdRouteHandler,
  )
  .openapi(getApiPublicUnstableTopicFacetsRoute, getApiPublicUnstableTopicFacetsRouteHandler)
  .openapi(
    getApiPublicUnstableTopicFacetsFacetIdRoute,
    getApiPublicUnstableTopicFacetsFacetIdRouteHandler,
  )
  .openapi(getApiPublicUnstableTopicsRoute, getApiPublicUnstableTopicsRouteHandler)
  .openapi(
    getApiPublicUnstableTopicsTopicStableIdRoute,
    getApiPublicUnstableTopicsTopicStableIdRouteHandler,
  )
  .openapi(getApiPublicUnstableTopicRulesRoute, getApiPublicUnstableTopicRulesRouteHandler)
  .openapi(
    getApiPublicUnstableTopicRulesRuleIdRoute,
    getApiPublicUnstableTopicRulesRuleIdRouteHandler,
  )
  .openapi(getApiPublicUnstableTopicSummariesRoute, getApiPublicUnstableTopicSummariesRouteHandler)
  .openapi(
    getApiPublicUnstableTopicAssignmentsRoute,
    getApiPublicUnstableTopicAssignmentsRouteHandler,
  )

export default app
