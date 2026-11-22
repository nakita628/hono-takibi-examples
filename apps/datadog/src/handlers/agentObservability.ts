import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiUnstableLlmObsConfigEvaluatorsCustomEvalNameRoute,
  deleteApiV2LlmObsV1AnnotationQueuesQueueIdRoute,
  deleteApiV2LlmObsV1PromptsPromptIdRoute,
  deleteApiV2LlmObsV1TopicDiscoveryConfigsConfigIdRoute,
  getApiUnstableLlmObsConfigEvaluatorsCustomEvalNameRoute,
  getApiUnstableLlmObsConfigEvaluatorsCustomRoute,
  getApiV2LlmObsV1AnnotatedInteractionsRoute,
  getApiV2LlmObsV1AnnotationQueuesQueueIdAnnotatedInteractionsInteractionIdRoute,
  getApiV2LlmObsV1AnnotationQueuesQueueIdAnnotatedInteractionsRoute,
  getApiV2LlmObsV1AnnotationQueuesQueueIdLabelSchemaRoute,
  getApiV2LlmObsV1AnnotationQueuesRoute,
  getApiV2LlmObsV1ExperimentsExperimentIdEventsRoute,
  getApiV2LlmObsV1ExperimentsRoute,
  getApiV2LlmObsV1IntegrationsIntegrationAccountIdModelsRoute,
  getApiV2LlmObsV1IntegrationsIntegrationAccountsRoute,
  getApiV2LlmObsV1ProjectIdDatasetsDatasetIdDraftStateRoute,
  getApiV2LlmObsV1ProjectIdDatasetsDatasetIdExportRoute,
  getApiV2LlmObsV1ProjectIdDatasetsDatasetIdRecordsRoute,
  getApiV2LlmObsV1ProjectIdDatasetsDatasetIdVersionsRoute,
  getApiV2LlmObsV1ProjectIdDatasetsRoute,
  getApiV2LlmObsV1ProjectsRoute,
  getApiV2LlmObsV1PromptsPromptIdRoute,
  getApiV2LlmObsV1PromptsPromptIdVersionsRoute,
  getApiV2LlmObsV1PromptsPromptIdVersionsVersionRoute,
  getApiV2LlmObsV1PromptsRoute,
  getApiV2LlmObsV1SpansEventsRoute,
  getApiV2LlmObsV1TopicDiscoveryClusteredPointsRoute,
  getApiV2LlmObsV1TopicDiscoveryConfigsLatestRoute,
  getApiV2LlmObsV1TopicDiscoveryConfigsRoute,
  getApiV2LlmObsV1TopicDiscoveryRunsRoute,
  getApiV2LlmObsV1TopicDiscoveryRunsStatusRoute,
  getApiV2LlmObsV1TopicDiscoveryTemplatesRoute,
  getApiV2LlmObsV1TopicDiscoveryTopicsRoute,
  getApiV2LlmObsV1TopicDiscoveryTopicsWithClusterPointsRoute,
  getApiV2LlmObsV2ExperimentsExperimentIdEventsRoute,
  getApiV2LlmObsV3ExperimentsExperimentIdEventsRoute,
  patchApiV2LlmObsV1AnnotationQueuesQueueIdRoute,
  patchApiV2LlmObsV1ExperimentsExperimentIdRoute,
  patchApiV2LlmObsV1ProjectIdDatasetsDatasetIdDraftStateLockRoute,
  patchApiV2LlmObsV1ProjectIdDatasetsDatasetIdDraftStateUnlockRoute,
  patchApiV2LlmObsV1ProjectIdDatasetsDatasetIdRecordsRoute,
  patchApiV2LlmObsV1ProjectIdDatasetsDatasetIdRoute,
  patchApiV2LlmObsV1ProjectsProjectIdRoute,
  patchApiV2LlmObsV1PromptsPromptIdRoute,
  patchApiV2LlmObsV1PromptsPromptIdVersionsVersionRoute,
  postApiV2LlmObsV1AnnotationQueuesQueueIdAnnotationsDeleteRoute,
  postApiV2LlmObsV1AnnotationQueuesQueueIdAnnotationsRoute,
  postApiV2LlmObsV1AnnotationQueuesQueueIdInteractionsDeleteRoute,
  postApiV2LlmObsV1AnnotationQueuesQueueIdInteractionsRoute,
  postApiV2LlmObsV1AnnotationQueuesRoute,
  postApiV2LlmObsV1ExperimentationAnalyticsRoute,
  postApiV2LlmObsV1ExperimentationSearchRoute,
  postApiV2LlmObsV1ExperimentationSimpleSearchRoute,
  postApiV2LlmObsV1ExperimentsDeleteRoute,
  postApiV2LlmObsV1ExperimentsExperimentIdEventsRoute,
  postApiV2LlmObsV1ExperimentsRoute,
  postApiV2LlmObsV1IntegrationsIntegrationAccountIdInferenceRoute,
  postApiV2LlmObsV1ProjectIdDatasetsDatasetIdBatchUpdateRoute,
  postApiV2LlmObsV1ProjectIdDatasetsDatasetIdCloneRoute,
  postApiV2LlmObsV1ProjectIdDatasetsDatasetIdRecordsDeleteRoute,
  postApiV2LlmObsV1ProjectIdDatasetsDatasetIdRecordsRoute,
  postApiV2LlmObsV1ProjectIdDatasetsDatasetIdRestoreRoute,
  postApiV2LlmObsV1ProjectIdDatasetsDeleteRoute,
  postApiV2LlmObsV1ProjectIdDatasetsRoute,
  postApiV2LlmObsV1ProjectsDeleteRoute,
  postApiV2LlmObsV1ProjectsRoute,
  postApiV2LlmObsV1PromptsPromptIdVersionsRoute,
  postApiV2LlmObsV1PromptsRoute,
  postApiV2LlmObsV1SpansEventsSearchRoute,
  postApiV2LlmObsV1TopicDiscoveryRunsRoute,
  postApiV2LlmObsV2ProjectIdDatasetsDatasetIdRecordsUploadRoute,
  putApiUnstableLlmObsConfigEvaluatorsCustomEvalNameRoute,
  putApiV2LlmObsV1AnnotationQueuesQueueIdLabelSchemaRoute,
  putApiV2LlmObsV1TopicDiscoveryConfigsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const agentObservabilityHandler = app
  .openapi(getApiUnstableLlmObsConfigEvaluatorsCustomRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiUnstableLlmObsConfigEvaluatorsCustomEvalNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUnstableLlmObsConfigEvaluatorsCustomEvalNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiUnstableLlmObsConfigEvaluatorsCustomEvalNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2LlmObsV1AnnotatedInteractionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2LlmObsV1AnnotationQueuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2LlmObsV1AnnotationQueuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2LlmObsV1AnnotationQueuesQueueIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2LlmObsV1AnnotationQueuesQueueIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2LlmObsV1AnnotationQueuesQueueIdAnnotatedInteractionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2LlmObsV1AnnotationQueuesQueueIdAnnotatedInteractionsInteractionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2LlmObsV1AnnotationQueuesQueueIdAnnotationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2LlmObsV1AnnotationQueuesQueueIdAnnotationsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2LlmObsV1AnnotationQueuesQueueIdInteractionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2LlmObsV1AnnotationQueuesQueueIdInteractionsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2LlmObsV1AnnotationQueuesQueueIdLabelSchemaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2LlmObsV1AnnotationQueuesQueueIdLabelSchemaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2LlmObsV1ExperimentationAnalyticsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2LlmObsV1ExperimentationSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2LlmObsV1ExperimentationSimpleSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2LlmObsV1ExperimentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2LlmObsV1ExperimentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2LlmObsV1ExperimentsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2LlmObsV1ExperimentsExperimentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2LlmObsV1ExperimentsExperimentIdEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2LlmObsV1ExperimentsExperimentIdEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2LlmObsV1IntegrationsIntegrationAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2LlmObsV1IntegrationsIntegrationAccountIdInferenceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2LlmObsV1IntegrationsIntegrationAccountIdModelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2LlmObsV1ProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2LlmObsV1ProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2LlmObsV1ProjectsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2LlmObsV1ProjectsProjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2LlmObsV1PromptsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2LlmObsV1PromptsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2LlmObsV1PromptsPromptIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2LlmObsV1PromptsPromptIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2LlmObsV1PromptsPromptIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2LlmObsV1PromptsPromptIdVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2LlmObsV1PromptsPromptIdVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2LlmObsV1PromptsPromptIdVersionsVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2LlmObsV1PromptsPromptIdVersionsVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2LlmObsV1SpansEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2LlmObsV1SpansEventsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2LlmObsV1TopicDiscoveryClusteredPointsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2LlmObsV1TopicDiscoveryConfigsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2LlmObsV1TopicDiscoveryConfigsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2LlmObsV1TopicDiscoveryConfigsLatestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2LlmObsV1TopicDiscoveryConfigsConfigIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2LlmObsV1TopicDiscoveryRunsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2LlmObsV1TopicDiscoveryRunsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2LlmObsV1TopicDiscoveryRunsStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2LlmObsV1TopicDiscoveryTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2LlmObsV1TopicDiscoveryTopicsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2LlmObsV1TopicDiscoveryTopicsWithClusterPointsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2LlmObsV1ProjectIdDatasetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2LlmObsV1ProjectIdDatasetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2LlmObsV1ProjectIdDatasetsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2LlmObsV1ProjectIdDatasetsDatasetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2LlmObsV1ProjectIdDatasetsDatasetIdBatchUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2LlmObsV1ProjectIdDatasetsDatasetIdCloneRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2LlmObsV1ProjectIdDatasetsDatasetIdDraftStateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2LlmObsV1ProjectIdDatasetsDatasetIdDraftStateLockRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2LlmObsV1ProjectIdDatasetsDatasetIdDraftStateUnlockRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2LlmObsV1ProjectIdDatasetsDatasetIdExportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2LlmObsV1ProjectIdDatasetsDatasetIdRecordsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2LlmObsV1ProjectIdDatasetsDatasetIdRecordsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2LlmObsV1ProjectIdDatasetsDatasetIdRecordsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2LlmObsV1ProjectIdDatasetsDatasetIdRecordsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2LlmObsV1ProjectIdDatasetsDatasetIdRestoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2LlmObsV1ProjectIdDatasetsDatasetIdVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2LlmObsV2ExperimentsExperimentIdEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2LlmObsV2ProjectIdDatasetsDatasetIdRecordsUploadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2LlmObsV3ExperimentsExperimentIdEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
