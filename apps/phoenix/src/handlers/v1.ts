import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1AnnotationConfigsConfigIdRoute,
  deleteV1DatasetLabelsLabelIdRoute,
  deleteV1DatasetsDatasetIdentifierLabelsLabelIdRoute,
  deleteV1DatasetsDatasetIdentifierSplitsSplitIdRoute,
  deleteV1DatasetsIdRoute,
  deleteV1ExperimentsExperimentIdRoute,
  deleteV1ExperimentsExperimentIdTagsTagIdentifierRoute,
  deleteV1ProjectsProjectIdentifierAnnotationConfigsConfigIdentifierRoute,
  deleteV1ProjectsProjectIdentifierRoute,
  deleteV1ProjectsProjectIdentifierSessionAnnotationsRoute,
  deleteV1ProjectsProjectIdentifierSpanAnnotationsRoute,
  deleteV1ProjectsProjectIdentifierTraceAnnotationsRoute,
  deleteV1ProjectsProjectIdentifierTracesRoute,
  deleteV1PromptsPromptIdentifierRoute,
  deleteV1PromptVersionsPromptVersionIdTagsTagNameRoute,
  deleteV1SessionsSessionIdentifierRoute,
  deleteV1SpansSpanIdentifierRoute,
  deleteV1SystemApiKeysApiKeyIdRoute,
  deleteV1TracesTraceIdentifierRoute,
  deleteV1UserApiKeysApiKeyIdRoute,
  deleteV1UsersUserIdRoute,
  getV1AgentSessionsRoute,
  getV1AgentSessionsSessionIdMessagesRoute,
  getV1AgentSessionsSessionIdRoute,
  getV1AnnotationConfigsConfigIdentifierRoute,
  getV1AnnotationConfigsRoute,
  getV1CustomModelProvidersRoute,
  getV1DatasetLabelsLabelIdRoute,
  getV1DatasetLabelsRoute,
  getV1DatasetsDatasetIdentifierLabelsRoute,
  getV1DatasetsDatasetIdentifierSplitsRoute,
  getV1DatasetsDatasetIdExperimentsRoute,
  getV1DatasetsIdCsvRoute,
  getV1DatasetsIdExamplesRoute,
  getV1DatasetsIdJsonlOpenaiEvalsRoute,
  getV1DatasetsIdJsonlOpenaiFtRoute,
  getV1DatasetsIdJsonlRoute,
  getV1DatasetsIdRoute,
  getV1DatasetsIdVersionsRoute,
  getV1DatasetsRoute,
  getV1ExperimentsExperimentIdCsvRoute,
  getV1ExperimentsExperimentIdIncompleteEvaluationsRoute,
  getV1ExperimentsExperimentIdIncompleteRunsRoute,
  getV1ExperimentsExperimentIdJsonRoute,
  getV1ExperimentsExperimentIdRoute,
  getV1ExperimentsExperimentIdRunsRoute,
  getV1ExperimentsExperimentIdTagsRoute,
  getV1ModelProvidersRoute,
  getV1ProjectsProjectIdentifierAnnotationConfigsRoute,
  getV1ProjectsProjectIdentifierRoute,
  getV1ProjectsProjectIdentifierSessionAnnotationsRoute,
  getV1ProjectsProjectIdentifierSessionsRoute,
  getV1ProjectsProjectIdentifierSpanAnnotationsRoute,
  getV1ProjectsProjectIdentifierSpansOtlpv1Route,
  getV1ProjectsProjectIdentifierSpansRoute,
  getV1ProjectsProjectIdentifierTraceAnnotationsRoute,
  getV1ProjectsProjectIdentifierTracesRoute,
  getV1ProjectsRoute,
  getV1PromptsPromptIdentifierLatestRoute,
  getV1PromptsPromptIdentifierTagsTagNameRoute,
  getV1PromptsPromptIdentifierVersionsRoute,
  getV1PromptsRoute,
  getV1PromptVersionsPromptVersionIdRoute,
  getV1PromptVersionsPromptVersionIdTagsRoute,
  getV1SessionsSessionIdentifierRoute,
  getV1SystemApiKeysRoute,
  getV1UserApiKeysRoute,
  getV1UserRoute,
  getV1UsersApiKeysRoute,
  getV1UsersRoute,
  patchV1AgentSessionsSessionIdRoute,
  patchV1DatasetLabelsLabelIdRoute,
  patchV1DatasetsDatasetIdentifierSplitsSplitIdRoute,
  patchV1ExperimentsExperimentIdRoute,
  patchV1ProjectsProjectIdentifierRetentionRoute,
  patchV1PromptsPromptIdentifierRoute,
  postV1AgentSessionsRoute,
  postV1AgentSessionsSessionIdChatRoute,
  postV1AgentSessionsSessionIdCompactRoute,
  postV1AgentSessionsSessionIdToolApprovalsRoute,
  postV1AgentSessionsSessionIdToolOutputsRoute,
  postV1AnnotationConfigsRoute,
  postV1ChatCompletionsRoute,
  postV1DatasetLabelsRoute,
  postV1DatasetsDatasetIdentifierSplitsRoute,
  postV1DatasetsDatasetIdExperimentsRoute,
  postV1DatasetsUploadRoute,
  postV1DocumentAnnotationsRoute,
  postV1ExperimentEvaluationsRoute,
  postV1ExperimentsExperimentIdRunsRoute,
  postV1ExperimentsExperimentIdTagsRoute,
  postV1ProjectsProjectIdentifierSpansRoute,
  postV1ProjectsRoute,
  postV1PromptsPromptIdentifierVersionsRoute,
  postV1PromptsRoute,
  postV1PromptVersionsPromptVersionIdTagsRoute,
  postV1SessionAnnotationsRoute,
  postV1SessionNotesRoute,
  postV1SessionsDeleteRoute,
  postV1SpanAnnotationsRoute,
  postV1SpanNotesRoute,
  postV1SystemApiKeysRoute,
  postV1TraceAnnotationsRoute,
  postV1TraceNotesRoute,
  postV1TracesTransferRoute,
  postV1UserApiKeysRoute,
  postV1UsersRoute,
  putV1AnnotationConfigsConfigIdRoute,
  putV1DatasetsDatasetIdentifierLabelsLabelIdRoute,
  putV1DatasetsDatasetIdentifierLabelsRoute,
  putV1ProjectsProjectIdentifierAnnotationConfigsConfigIdentifierRoute,
  putV1ProjectsProjectIdentifierAnnotationConfigsRoute,
  putV1ProjectsProjectIdentifierRoute,
  putV1SecretsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v1Handler = app
  .openapi(getV1AnnotationConfigsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AnnotationConfigsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AnnotationConfigsConfigIdentifierRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1AnnotationConfigsConfigIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1AnnotationConfigsConfigIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsProjectIdentifierAnnotationConfigsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ProjectsProjectIdentifierAnnotationConfigsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ProjectsProjectIdentifierAnnotationConfigsConfigIdentifierRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ProjectsProjectIdentifierAnnotationConfigsConfigIdentifierRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsProjectIdentifierSpanAnnotationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ProjectsProjectIdentifierSpanAnnotationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsProjectIdentifierTraceAnnotationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ProjectsProjectIdentifierTraceAnnotationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsProjectIdentifierSessionAnnotationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ProjectsProjectIdentifierSessionAnnotationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DatasetLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DatasetLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DatasetLabelsLabelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1DatasetLabelsLabelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1DatasetLabelsLabelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DatasetsDatasetIdentifierLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1DatasetsDatasetIdentifierLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1DatasetsDatasetIdentifierLabelsLabelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1DatasetsDatasetIdentifierLabelsLabelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DatasetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1DatasetsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DatasetsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DatasetsIdVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DatasetsUploadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DatasetsIdExamplesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DatasetsDatasetIdentifierSplitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DatasetsDatasetIdentifierSplitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1DatasetsDatasetIdentifierSplitsSplitIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1DatasetsDatasetIdentifierSplitsSplitIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DatasetsIdCsvRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DatasetsIdJsonlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DatasetsIdJsonlOpenaiFtRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DatasetsIdJsonlOpenaiEvalsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DatasetsDatasetIdExperimentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DatasetsDatasetIdExperimentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ExperimentsExperimentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1ExperimentsExperimentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ExperimentsExperimentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ExperimentsExperimentIdIncompleteRunsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ExperimentsExperimentIdJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ExperimentsExperimentIdCsvRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ExperimentsExperimentIdTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ExperimentsExperimentIdTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ExperimentsExperimentIdTagsTagIdentifierRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ExperimentsExperimentIdRunsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ExperimentsExperimentIdRunsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ExperimentsExperimentIdIncompleteEvaluationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ExperimentEvaluationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsProjectIdentifierTracesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ProjectsProjectIdentifierTracesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TraceAnnotationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TraceNotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TracesTransferRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1TracesTraceIdentifierRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsProjectIdentifierSpansOtlpv1Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsProjectIdentifierSpansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsProjectIdentifierSpansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SpanAnnotationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SpanNotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1SpansSpanIdentifierRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PromptsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PromptsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PromptsPromptIdentifierVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PromptsPromptIdentifierVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PromptVersionsPromptVersionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PromptsPromptIdentifierTagsTagNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PromptsPromptIdentifierLatestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PromptVersionsPromptVersionIdTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PromptVersionsPromptVersionIdTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1PromptVersionsPromptVersionIdTagsTagNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1PromptsPromptIdentifierRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1PromptsPromptIdentifierRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsProjectIdentifierRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ProjectsProjectIdentifierRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ProjectsProjectIdentifierRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1ProjectsProjectIdentifierRetentionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ModelProvidersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CustomModelProvidersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SessionsSessionIdentifierRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1SessionsSessionIdentifierRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SessionsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsProjectIdentifierSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SessionAnnotationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SessionNotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DocumentAnnotationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1UserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1UsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1UsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1UsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1SecretsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1UserApiKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1UserApiKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1UsersApiKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1UserApiKeysApiKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SystemApiKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SystemApiKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1SystemApiKeysApiKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ChatCompletionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AgentSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AgentSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1AgentSessionsSessionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AgentSessionsSessionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AgentSessionsSessionIdMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AgentSessionsSessionIdCompactRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AgentSessionsSessionIdToolOutputsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AgentSessionsSessionIdToolApprovalsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AgentSessionsSessionIdChatRoute, (c) => {
    throw new Error('Not implemented')
  })
