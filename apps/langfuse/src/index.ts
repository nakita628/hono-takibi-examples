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
} from './routes'
import {
  deleteApiPublicAnnotationQueuesQueueIdAssignmentsRouteHandler,
  deleteApiPublicAnnotationQueuesQueueIdItemsItemIdRouteHandler,
  deleteApiPublicDatasetItemsIdRouteHandler,
  deleteApiPublicIntegrationsBlobStorageIdRouteHandler,
  deleteApiPublicLlmConnectionsIdRouteHandler,
  deleteApiPublicModelsIdRouteHandler,
  deleteApiPublicOrganizationsLlmConnectionsIdRouteHandler,
  deleteApiPublicOrganizationsMembershipsRouteHandler,
  deleteApiPublicProjectsProjectIdApiKeysApiKeyIdRouteHandler,
  deleteApiPublicProjectsProjectIdMembershipsRouteHandler,
  deleteApiPublicProjectsProjectIdRouteHandler,
  deleteApiPublicScimUsersUserIdRouteHandler,
  deleteApiPublicScoresScoreIdRouteHandler,
  deleteApiPublicSkillsSkillNameVersionsSkillVersionRouteHandler,
  deleteApiPublicTracesRouteHandler,
  deleteApiPublicTracesTraceIdRouteHandler,
  deleteApiPublicUnstableDashboardsDashboardIdPlacementsPlacementIdRouteHandler,
  deleteApiPublicUnstableDashboardsDashboardIdRouteHandler,
  deleteApiPublicUnstableDashboardWidgetsWidgetIdRouteHandler,
  deleteApiPublicV2EvaluationRulesEvaluationRuleIdRouteHandler,
  deleteApiPublicV2EvaluatorsEvaluatorIdRouteHandler,
  deleteApiPublicV2PromptsPromptNameRouteHandler,
  getApiPublicAnnotationQueuesQueueIdItemsItemIdRouteHandler,
  getApiPublicAnnotationQueuesQueueIdItemsRouteHandler,
  getApiPublicAnnotationQueuesQueueIdRouteHandler,
  getApiPublicAnnotationQueuesRouteHandler,
  getApiPublicCommentsCommentIdRouteHandler,
  getApiPublicCommentsRouteHandler,
  getApiPublicDatasetItemsIdRouteHandler,
  getApiPublicDatasetItemsRouteHandler,
  getApiPublicExperimentItemsRouteHandler,
  getApiPublicExperimentsRouteHandler,
  getApiPublicHealthRouteHandler,
  getApiPublicIntegrationsBlobStorageIdRouteHandler,
  getApiPublicIntegrationsBlobStorageRouteHandler,
  getApiPublicLlmConnectionsRouteHandler,
  getApiPublicMediaMediaIdRouteHandler,
  getApiPublicModelsIdRouteHandler,
  getApiPublicModelsRouteHandler,
  getApiPublicOrganizationsApiKeysRouteHandler,
  getApiPublicOrganizationsLlmConnectionsRouteHandler,
  getApiPublicOrganizationsMembershipsRouteHandler,
  getApiPublicOrganizationsProjectsRouteHandler,
  getApiPublicProjectsProjectIdApiKeysRouteHandler,
  getApiPublicProjectsProjectIdMembershipsRouteHandler,
  getApiPublicProjectsRouteHandler,
  getApiPublicScimResourceTypesRouteHandler,
  getApiPublicScimSchemasRouteHandler,
  getApiPublicScimServiceProviderConfigRouteHandler,
  getApiPublicScimUsersRouteHandler,
  getApiPublicScimUsersUserIdRouteHandler,
  getApiPublicScoreConfigsConfigIdRouteHandler,
  getApiPublicScoreConfigsRouteHandler,
  getApiPublicSkillsFilesContentRouteHandler,
  getApiPublicSkillsRouteHandler,
  getApiPublicSkillsSkillNameRouteHandler,
  getApiPublicUnstableDashboardsDashboardIdRouteHandler,
  getApiPublicUnstableDashboardsRouteHandler,
  getApiPublicUnstableDashboardWidgetsRouteHandler,
  getApiPublicUnstableDashboardWidgetsWidgetIdRouteHandler,
  getApiPublicUnstableOrganizationsBillableUnitsRouteHandler,
  getApiPublicUnstableTopicAssignmentsRouteHandler,
  getApiPublicUnstableTopicFacetsFacetIdRouteHandler,
  getApiPublicUnstableTopicFacetsRouteHandler,
  getApiPublicUnstableTopicRulesRouteHandler,
  getApiPublicUnstableTopicRulesRuleIdRouteHandler,
  getApiPublicUnstableTopicsRouteHandler,
  getApiPublicUnstableTopicsTopicIdRouteHandler,
  getApiPublicUnstableTopicSummariesRouteHandler,
  getApiPublicV2DatasetsDatasetNameRouteHandler,
  getApiPublicV2DatasetsRouteHandler,
  getApiPublicV2EvaluationRulesEvaluationRuleIdRouteHandler,
  getApiPublicV2EvaluationRulesRouteHandler,
  getApiPublicV2EvaluatorsEvaluatorIdRouteHandler,
  getApiPublicV2EvaluatorsEvaluatorIdVersionsRouteHandler,
  getApiPublicV2EvaluatorsRouteHandler,
  getApiPublicV2MetricsRouteHandler,
  getApiPublicV2ObservationsRouteHandler,
  getApiPublicV2PromptsPromptNameRouteHandler,
  getApiPublicV2PromptsRouteHandler,
  getApiPublicV3ScoresRouteHandler,
  patchApiPublicAnnotationQueuesQueueIdItemsItemIdRouteHandler,
  patchApiPublicMediaMediaIdRouteHandler,
  patchApiPublicScoreConfigsConfigIdRouteHandler,
  patchApiPublicSkillsSkillNameRouteHandler,
  patchApiPublicSkillsSkillNameVersionsSkillVersionRouteHandler,
  patchApiPublicUnstableDashboardsDashboardIdPlacementsPlacementIdRouteHandler,
  patchApiPublicUnstableDashboardsDashboardIdRouteHandler,
  patchApiPublicUnstableDashboardWidgetsWidgetIdRouteHandler,
  patchApiPublicV2EvaluationRulesEvaluationRuleIdRouteHandler,
  patchApiPublicV2EvaluatorsEvaluatorIdRouteHandler,
  patchApiPublicV2PromptsNameVersionsVersionRouteHandler,
  postApiPublicAnnotationQueuesQueueIdAssignmentsRouteHandler,
  postApiPublicAnnotationQueuesQueueIdItemsRouteHandler,
  postApiPublicAnnotationQueuesRouteHandler,
  postApiPublicCommentsRouteHandler,
  postApiPublicDatasetItemsRouteHandler,
  postApiPublicFeedbackRouteHandler,
  postApiPublicMediaRouteHandler,
  postApiPublicModelsRouteHandler,
  postApiPublicOtelV1TracesRouteHandler,
  postApiPublicProjectsProjectIdApiKeysRouteHandler,
  postApiPublicProjectsRouteHandler,
  postApiPublicScimUsersRouteHandler,
  postApiPublicScoreConfigsRouteHandler,
  postApiPublicScoresRouteHandler,
  postApiPublicSkillsRouteHandler,
  postApiPublicUnstableDashboardsDashboardIdPlacementsRouteHandler,
  postApiPublicUnstableDashboardsRouteHandler,
  postApiPublicUnstableDashboardWidgetsRouteHandler,
  postApiPublicV2DatasetsRouteHandler,
  postApiPublicV2EvaluationRulesRouteHandler,
  postApiPublicV2EvaluatorsRouteHandler,
  postApiPublicV2PromptsRouteHandler,
  putApiPublicIntegrationsBlobStorageRouteHandler,
  putApiPublicLlmConnectionsRouteHandler,
  putApiPublicModelsIdRouteHandler,
  putApiPublicOrganizationsLlmConnectionsRouteHandler,
  putApiPublicOrganizationsMembershipsRouteHandler,
  putApiPublicProjectsProjectIdMembershipsRouteHandler,
  putApiPublicProjectsProjectIdRouteHandler,
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
  .openapi(getApiPublicUnstableTopicsTopicIdRoute, getApiPublicUnstableTopicsTopicIdRouteHandler)
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
