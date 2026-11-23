import type { RouteHandler } from '@hono/zod-openapi'
import type {
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

export const getV1AnnotationConfigsRouteHandler: RouteHandler<
  typeof getV1AnnotationConfigsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1AnnotationConfigsRouteHandler: RouteHandler<
  typeof postV1AnnotationConfigsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AnnotationConfigsConfigIdentifierRouteHandler: RouteHandler<
  typeof getV1AnnotationConfigsConfigIdentifierRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1AnnotationConfigsConfigIdRouteHandler: RouteHandler<
  typeof putV1AnnotationConfigsConfigIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1AnnotationConfigsConfigIdRouteHandler: RouteHandler<
  typeof deleteV1AnnotationConfigsConfigIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ProjectsProjectIdentifierAnnotationConfigsRouteHandler: RouteHandler<
  typeof getV1ProjectsProjectIdentifierAnnotationConfigsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1ProjectsProjectIdentifierAnnotationConfigsRouteHandler: RouteHandler<
  typeof putV1ProjectsProjectIdentifierAnnotationConfigsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1ProjectsProjectIdentifierAnnotationConfigsConfigIdentifierRouteHandler: RouteHandler<
  typeof putV1ProjectsProjectIdentifierAnnotationConfigsConfigIdentifierRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1ProjectsProjectIdentifierAnnotationConfigsConfigIdentifierRouteHandler: RouteHandler<
  typeof deleteV1ProjectsProjectIdentifierAnnotationConfigsConfigIdentifierRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ProjectsProjectIdentifierSpanAnnotationsRouteHandler: RouteHandler<
  typeof getV1ProjectsProjectIdentifierSpanAnnotationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1ProjectsProjectIdentifierSpanAnnotationsRouteHandler: RouteHandler<
  typeof deleteV1ProjectsProjectIdentifierSpanAnnotationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ProjectsProjectIdentifierTraceAnnotationsRouteHandler: RouteHandler<
  typeof getV1ProjectsProjectIdentifierTraceAnnotationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1ProjectsProjectIdentifierTraceAnnotationsRouteHandler: RouteHandler<
  typeof deleteV1ProjectsProjectIdentifierTraceAnnotationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ProjectsProjectIdentifierSessionAnnotationsRouteHandler: RouteHandler<
  typeof getV1ProjectsProjectIdentifierSessionAnnotationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1ProjectsProjectIdentifierSessionAnnotationsRouteHandler: RouteHandler<
  typeof deleteV1ProjectsProjectIdentifierSessionAnnotationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1DatasetLabelsRouteHandler: RouteHandler<typeof getV1DatasetLabelsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1DatasetLabelsRouteHandler: RouteHandler<
  typeof postV1DatasetLabelsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1DatasetLabelsLabelIdRouteHandler: RouteHandler<
  typeof getV1DatasetLabelsLabelIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1DatasetLabelsLabelIdRouteHandler: RouteHandler<
  typeof patchV1DatasetLabelsLabelIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1DatasetLabelsLabelIdRouteHandler: RouteHandler<
  typeof deleteV1DatasetLabelsLabelIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1DatasetsDatasetIdentifierLabelsRouteHandler: RouteHandler<
  typeof getV1DatasetsDatasetIdentifierLabelsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1DatasetsDatasetIdentifierLabelsRouteHandler: RouteHandler<
  typeof putV1DatasetsDatasetIdentifierLabelsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1DatasetsDatasetIdentifierLabelsLabelIdRouteHandler: RouteHandler<
  typeof putV1DatasetsDatasetIdentifierLabelsLabelIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1DatasetsDatasetIdentifierLabelsLabelIdRouteHandler: RouteHandler<
  typeof deleteV1DatasetsDatasetIdentifierLabelsLabelIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1DatasetsRouteHandler: RouteHandler<typeof getV1DatasetsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1DatasetsIdRouteHandler: RouteHandler<typeof deleteV1DatasetsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1DatasetsIdRouteHandler: RouteHandler<typeof getV1DatasetsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1DatasetsIdVersionsRouteHandler: RouteHandler<
  typeof getV1DatasetsIdVersionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1DatasetsUploadRouteHandler: RouteHandler<
  typeof postV1DatasetsUploadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1DatasetsIdExamplesRouteHandler: RouteHandler<
  typeof getV1DatasetsIdExamplesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1DatasetsDatasetIdentifierSplitsRouteHandler: RouteHandler<
  typeof getV1DatasetsDatasetIdentifierSplitsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1DatasetsDatasetIdentifierSplitsRouteHandler: RouteHandler<
  typeof postV1DatasetsDatasetIdentifierSplitsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1DatasetsDatasetIdentifierSplitsSplitIdRouteHandler: RouteHandler<
  typeof patchV1DatasetsDatasetIdentifierSplitsSplitIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1DatasetsDatasetIdentifierSplitsSplitIdRouteHandler: RouteHandler<
  typeof deleteV1DatasetsDatasetIdentifierSplitsSplitIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1DatasetsIdCsvRouteHandler: RouteHandler<typeof getV1DatasetsIdCsvRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1DatasetsIdJsonlRouteHandler: RouteHandler<
  typeof getV1DatasetsIdJsonlRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1DatasetsIdJsonlOpenaiFtRouteHandler: RouteHandler<
  typeof getV1DatasetsIdJsonlOpenaiFtRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1DatasetsIdJsonlOpenaiEvalsRouteHandler: RouteHandler<
  typeof getV1DatasetsIdJsonlOpenaiEvalsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1DatasetsDatasetIdExperimentsRouteHandler: RouteHandler<
  typeof postV1DatasetsDatasetIdExperimentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1DatasetsDatasetIdExperimentsRouteHandler: RouteHandler<
  typeof getV1DatasetsDatasetIdExperimentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ExperimentsExperimentIdRouteHandler: RouteHandler<
  typeof getV1ExperimentsExperimentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1ExperimentsExperimentIdRouteHandler: RouteHandler<
  typeof patchV1ExperimentsExperimentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1ExperimentsExperimentIdRouteHandler: RouteHandler<
  typeof deleteV1ExperimentsExperimentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ExperimentsExperimentIdIncompleteRunsRouteHandler: RouteHandler<
  typeof getV1ExperimentsExperimentIdIncompleteRunsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ExperimentsExperimentIdJsonRouteHandler: RouteHandler<
  typeof getV1ExperimentsExperimentIdJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ExperimentsExperimentIdCsvRouteHandler: RouteHandler<
  typeof getV1ExperimentsExperimentIdCsvRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ExperimentsExperimentIdTagsRouteHandler: RouteHandler<
  typeof getV1ExperimentsExperimentIdTagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ExperimentsExperimentIdTagsRouteHandler: RouteHandler<
  typeof postV1ExperimentsExperimentIdTagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1ExperimentsExperimentIdTagsTagIdentifierRouteHandler: RouteHandler<
  typeof deleteV1ExperimentsExperimentIdTagsTagIdentifierRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ExperimentsExperimentIdRunsRouteHandler: RouteHandler<
  typeof postV1ExperimentsExperimentIdRunsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ExperimentsExperimentIdRunsRouteHandler: RouteHandler<
  typeof getV1ExperimentsExperimentIdRunsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ExperimentsExperimentIdIncompleteEvaluationsRouteHandler: RouteHandler<
  typeof getV1ExperimentsExperimentIdIncompleteEvaluationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ExperimentEvaluationsRouteHandler: RouteHandler<
  typeof postV1ExperimentEvaluationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ProjectsProjectIdentifierTracesRouteHandler: RouteHandler<
  typeof getV1ProjectsProjectIdentifierTracesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1ProjectsProjectIdentifierTracesRouteHandler: RouteHandler<
  typeof deleteV1ProjectsProjectIdentifierTracesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1TraceAnnotationsRouteHandler: RouteHandler<
  typeof postV1TraceAnnotationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1TraceNotesRouteHandler: RouteHandler<typeof postV1TraceNotesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1TracesTransferRouteHandler: RouteHandler<
  typeof postV1TracesTransferRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1TracesTraceIdentifierRouteHandler: RouteHandler<
  typeof deleteV1TracesTraceIdentifierRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ProjectsProjectIdentifierSpansOtlpv1RouteHandler: RouteHandler<
  typeof getV1ProjectsProjectIdentifierSpansOtlpv1Route
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ProjectsProjectIdentifierSpansRouteHandler: RouteHandler<
  typeof getV1ProjectsProjectIdentifierSpansRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ProjectsProjectIdentifierSpansRouteHandler: RouteHandler<
  typeof postV1ProjectsProjectIdentifierSpansRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1SpanAnnotationsRouteHandler: RouteHandler<
  typeof postV1SpanAnnotationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1SpanNotesRouteHandler: RouteHandler<typeof postV1SpanNotesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1SpansSpanIdentifierRouteHandler: RouteHandler<
  typeof deleteV1SpansSpanIdentifierRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1PromptsRouteHandler: RouteHandler<typeof getV1PromptsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PromptsRouteHandler: RouteHandler<typeof postV1PromptsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1PromptsPromptIdentifierVersionsRouteHandler: RouteHandler<
  typeof getV1PromptsPromptIdentifierVersionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PromptsPromptIdentifierVersionsRouteHandler: RouteHandler<
  typeof postV1PromptsPromptIdentifierVersionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1PromptVersionsPromptVersionIdRouteHandler: RouteHandler<
  typeof getV1PromptVersionsPromptVersionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1PromptsPromptIdentifierTagsTagNameRouteHandler: RouteHandler<
  typeof getV1PromptsPromptIdentifierTagsTagNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1PromptsPromptIdentifierLatestRouteHandler: RouteHandler<
  typeof getV1PromptsPromptIdentifierLatestRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1PromptVersionsPromptVersionIdTagsRouteHandler: RouteHandler<
  typeof getV1PromptVersionsPromptVersionIdTagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PromptVersionsPromptVersionIdTagsRouteHandler: RouteHandler<
  typeof postV1PromptVersionsPromptVersionIdTagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1PromptVersionsPromptVersionIdTagsTagNameRouteHandler: RouteHandler<
  typeof deleteV1PromptVersionsPromptVersionIdTagsTagNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1PromptsPromptIdentifierRouteHandler: RouteHandler<
  typeof patchV1PromptsPromptIdentifierRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1PromptsPromptIdentifierRouteHandler: RouteHandler<
  typeof deleteV1PromptsPromptIdentifierRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ProjectsRouteHandler: RouteHandler<typeof getV1ProjectsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ProjectsRouteHandler: RouteHandler<typeof postV1ProjectsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ProjectsProjectIdentifierRouteHandler: RouteHandler<
  typeof getV1ProjectsProjectIdentifierRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1ProjectsProjectIdentifierRouteHandler: RouteHandler<
  typeof putV1ProjectsProjectIdentifierRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1ProjectsProjectIdentifierRouteHandler: RouteHandler<
  typeof deleteV1ProjectsProjectIdentifierRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1ProjectsProjectIdentifierRetentionRouteHandler: RouteHandler<
  typeof patchV1ProjectsProjectIdentifierRetentionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ModelProvidersRouteHandler: RouteHandler<
  typeof getV1ModelProvidersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1CustomModelProvidersRouteHandler: RouteHandler<
  typeof getV1CustomModelProvidersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1SessionsSessionIdentifierRouteHandler: RouteHandler<
  typeof getV1SessionsSessionIdentifierRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1SessionsSessionIdentifierRouteHandler: RouteHandler<
  typeof deleteV1SessionsSessionIdentifierRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1SessionsDeleteRouteHandler: RouteHandler<
  typeof postV1SessionsDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ProjectsProjectIdentifierSessionsRouteHandler: RouteHandler<
  typeof getV1ProjectsProjectIdentifierSessionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1SessionAnnotationsRouteHandler: RouteHandler<
  typeof postV1SessionAnnotationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1SessionNotesRouteHandler: RouteHandler<typeof postV1SessionNotesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1DocumentAnnotationsRouteHandler: RouteHandler<
  typeof postV1DocumentAnnotationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1UserRouteHandler: RouteHandler<typeof getV1UserRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1UsersRouteHandler: RouteHandler<typeof getV1UsersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1UsersRouteHandler: RouteHandler<typeof postV1UsersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1UsersUserIdRouteHandler: RouteHandler<
  typeof deleteV1UsersUserIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1SecretsRouteHandler: RouteHandler<typeof putV1SecretsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1UserApiKeysRouteHandler: RouteHandler<typeof getV1UserApiKeysRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1UserApiKeysRouteHandler: RouteHandler<typeof postV1UserApiKeysRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1UsersApiKeysRouteHandler: RouteHandler<typeof getV1UsersApiKeysRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteV1UserApiKeysApiKeyIdRouteHandler: RouteHandler<
  typeof deleteV1UserApiKeysApiKeyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1SystemApiKeysRouteHandler: RouteHandler<typeof getV1SystemApiKeysRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1SystemApiKeysRouteHandler: RouteHandler<
  typeof postV1SystemApiKeysRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1SystemApiKeysApiKeyIdRouteHandler: RouteHandler<
  typeof deleteV1SystemApiKeysApiKeyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ChatCompletionsRouteHandler: RouteHandler<
  typeof postV1ChatCompletionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1AgentSessionsRouteHandler: RouteHandler<
  typeof postV1AgentSessionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AgentSessionsRouteHandler: RouteHandler<typeof getV1AgentSessionsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const patchV1AgentSessionsSessionIdRouteHandler: RouteHandler<
  typeof patchV1AgentSessionsSessionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AgentSessionsSessionIdRouteHandler: RouteHandler<
  typeof getV1AgentSessionsSessionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AgentSessionsSessionIdMessagesRouteHandler: RouteHandler<
  typeof getV1AgentSessionsSessionIdMessagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1AgentSessionsSessionIdCompactRouteHandler: RouteHandler<
  typeof postV1AgentSessionsSessionIdCompactRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1AgentSessionsSessionIdToolOutputsRouteHandler: RouteHandler<
  typeof postV1AgentSessionsSessionIdToolOutputsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1AgentSessionsSessionIdToolApprovalsRouteHandler: RouteHandler<
  typeof postV1AgentSessionsSessionIdToolApprovalsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1AgentSessionsSessionIdChatRouteHandler: RouteHandler<
  typeof postV1AgentSessionsSessionIdChatRoute
> = async (c) => {
  throw new Error('Not implemented')
}
