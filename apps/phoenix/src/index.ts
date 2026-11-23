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
  getArizePhoenixVersionRoute,
  getAuthLogoutRoute,
  getHealthzRoute,
  getOauth2IdpNameLoginRoute,
  getOauth2IdpNameTokensRoute,
  getReadyzRoute,
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
  postAgentsServerSessionsSessionIdChatRoute,
  postAuthLdapLoginRoute,
  postAuthLoginRoute,
  postAuthPasswordResetEmailRoute,
  postAuthPasswordResetRoute,
  postAuthRefreshRoute,
  postOauth2IdpNameLoginRoute,
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
} from './routes'
import {
  deleteV1AnnotationConfigsConfigIdRouteHandler,
  deleteV1DatasetLabelsLabelIdRouteHandler,
  deleteV1DatasetsDatasetIdentifierLabelsLabelIdRouteHandler,
  deleteV1DatasetsDatasetIdentifierSplitsSplitIdRouteHandler,
  deleteV1DatasetsIdRouteHandler,
  deleteV1ExperimentsExperimentIdRouteHandler,
  deleteV1ExperimentsExperimentIdTagsTagIdentifierRouteHandler,
  deleteV1ProjectsProjectIdentifierAnnotationConfigsConfigIdentifierRouteHandler,
  deleteV1ProjectsProjectIdentifierRouteHandler,
  deleteV1ProjectsProjectIdentifierSessionAnnotationsRouteHandler,
  deleteV1ProjectsProjectIdentifierSpanAnnotationsRouteHandler,
  deleteV1ProjectsProjectIdentifierTraceAnnotationsRouteHandler,
  deleteV1ProjectsProjectIdentifierTracesRouteHandler,
  deleteV1PromptsPromptIdentifierRouteHandler,
  deleteV1PromptVersionsPromptVersionIdTagsTagNameRouteHandler,
  deleteV1SessionsSessionIdentifierRouteHandler,
  deleteV1SpansSpanIdentifierRouteHandler,
  deleteV1SystemApiKeysApiKeyIdRouteHandler,
  deleteV1TracesTraceIdentifierRouteHandler,
  deleteV1UserApiKeysApiKeyIdRouteHandler,
  deleteV1UsersUserIdRouteHandler,
  getArizePhoenixVersionRouteHandler,
  getAuthLogoutRouteHandler,
  getHealthzRouteHandler,
  getOauth2IdpNameLoginRouteHandler,
  getOauth2IdpNameTokensRouteHandler,
  getReadyzRouteHandler,
  getV1AgentSessionsRouteHandler,
  getV1AgentSessionsSessionIdMessagesRouteHandler,
  getV1AgentSessionsSessionIdRouteHandler,
  getV1AnnotationConfigsConfigIdentifierRouteHandler,
  getV1AnnotationConfigsRouteHandler,
  getV1CustomModelProvidersRouteHandler,
  getV1DatasetLabelsLabelIdRouteHandler,
  getV1DatasetLabelsRouteHandler,
  getV1DatasetsDatasetIdentifierLabelsRouteHandler,
  getV1DatasetsDatasetIdentifierSplitsRouteHandler,
  getV1DatasetsDatasetIdExperimentsRouteHandler,
  getV1DatasetsIdCsvRouteHandler,
  getV1DatasetsIdExamplesRouteHandler,
  getV1DatasetsIdJsonlOpenaiEvalsRouteHandler,
  getV1DatasetsIdJsonlOpenaiFtRouteHandler,
  getV1DatasetsIdJsonlRouteHandler,
  getV1DatasetsIdRouteHandler,
  getV1DatasetsIdVersionsRouteHandler,
  getV1DatasetsRouteHandler,
  getV1ExperimentsExperimentIdCsvRouteHandler,
  getV1ExperimentsExperimentIdIncompleteEvaluationsRouteHandler,
  getV1ExperimentsExperimentIdIncompleteRunsRouteHandler,
  getV1ExperimentsExperimentIdJsonRouteHandler,
  getV1ExperimentsExperimentIdRouteHandler,
  getV1ExperimentsExperimentIdRunsRouteHandler,
  getV1ExperimentsExperimentIdTagsRouteHandler,
  getV1ModelProvidersRouteHandler,
  getV1ProjectsProjectIdentifierAnnotationConfigsRouteHandler,
  getV1ProjectsProjectIdentifierRouteHandler,
  getV1ProjectsProjectIdentifierSessionAnnotationsRouteHandler,
  getV1ProjectsProjectIdentifierSessionsRouteHandler,
  getV1ProjectsProjectIdentifierSpanAnnotationsRouteHandler,
  getV1ProjectsProjectIdentifierSpansOtlpv1RouteHandler,
  getV1ProjectsProjectIdentifierSpansRouteHandler,
  getV1ProjectsProjectIdentifierTraceAnnotationsRouteHandler,
  getV1ProjectsProjectIdentifierTracesRouteHandler,
  getV1ProjectsRouteHandler,
  getV1PromptsPromptIdentifierLatestRouteHandler,
  getV1PromptsPromptIdentifierTagsTagNameRouteHandler,
  getV1PromptsPromptIdentifierVersionsRouteHandler,
  getV1PromptsRouteHandler,
  getV1PromptVersionsPromptVersionIdRouteHandler,
  getV1PromptVersionsPromptVersionIdTagsRouteHandler,
  getV1SessionsSessionIdentifierRouteHandler,
  getV1SystemApiKeysRouteHandler,
  getV1UserApiKeysRouteHandler,
  getV1UserRouteHandler,
  getV1UsersApiKeysRouteHandler,
  getV1UsersRouteHandler,
  patchV1AgentSessionsSessionIdRouteHandler,
  patchV1DatasetLabelsLabelIdRouteHandler,
  patchV1DatasetsDatasetIdentifierSplitsSplitIdRouteHandler,
  patchV1ExperimentsExperimentIdRouteHandler,
  patchV1ProjectsProjectIdentifierRetentionRouteHandler,
  patchV1PromptsPromptIdentifierRouteHandler,
  postAgentsServerSessionsSessionIdChatRouteHandler,
  postAuthLdapLoginRouteHandler,
  postAuthLoginRouteHandler,
  postAuthPasswordResetEmailRouteHandler,
  postAuthPasswordResetRouteHandler,
  postAuthRefreshRouteHandler,
  postOauth2IdpNameLoginRouteHandler,
  postV1AgentSessionsRouteHandler,
  postV1AgentSessionsSessionIdChatRouteHandler,
  postV1AgentSessionsSessionIdCompactRouteHandler,
  postV1AgentSessionsSessionIdToolApprovalsRouteHandler,
  postV1AgentSessionsSessionIdToolOutputsRouteHandler,
  postV1AnnotationConfigsRouteHandler,
  postV1ChatCompletionsRouteHandler,
  postV1DatasetLabelsRouteHandler,
  postV1DatasetsDatasetIdentifierSplitsRouteHandler,
  postV1DatasetsDatasetIdExperimentsRouteHandler,
  postV1DatasetsUploadRouteHandler,
  postV1DocumentAnnotationsRouteHandler,
  postV1ExperimentEvaluationsRouteHandler,
  postV1ExperimentsExperimentIdRunsRouteHandler,
  postV1ExperimentsExperimentIdTagsRouteHandler,
  postV1ProjectsProjectIdentifierSpansRouteHandler,
  postV1ProjectsRouteHandler,
  postV1PromptsPromptIdentifierVersionsRouteHandler,
  postV1PromptsRouteHandler,
  postV1PromptVersionsPromptVersionIdTagsRouteHandler,
  postV1SessionAnnotationsRouteHandler,
  postV1SessionNotesRouteHandler,
  postV1SessionsDeleteRouteHandler,
  postV1SpanAnnotationsRouteHandler,
  postV1SpanNotesRouteHandler,
  postV1SystemApiKeysRouteHandler,
  postV1TraceAnnotationsRouteHandler,
  postV1TraceNotesRouteHandler,
  postV1TracesTransferRouteHandler,
  postV1UserApiKeysRouteHandler,
  postV1UsersRouteHandler,
  putV1AnnotationConfigsConfigIdRouteHandler,
  putV1DatasetsDatasetIdentifierLabelsLabelIdRouteHandler,
  putV1DatasetsDatasetIdentifierLabelsRouteHandler,
  putV1ProjectsProjectIdentifierAnnotationConfigsConfigIdentifierRouteHandler,
  putV1ProjectsProjectIdentifierAnnotationConfigsRouteHandler,
  putV1ProjectsProjectIdentifierRouteHandler,
  putV1SecretsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getV1AnnotationConfigsRoute, getV1AnnotationConfigsRouteHandler)
  .openapi(postV1AnnotationConfigsRoute, postV1AnnotationConfigsRouteHandler)
  .openapi(
    getV1AnnotationConfigsConfigIdentifierRoute,
    getV1AnnotationConfigsConfigIdentifierRouteHandler,
  )
  .openapi(putV1AnnotationConfigsConfigIdRoute, putV1AnnotationConfigsConfigIdRouteHandler)
  .openapi(deleteV1AnnotationConfigsConfigIdRoute, deleteV1AnnotationConfigsConfigIdRouteHandler)
  .openapi(
    getV1ProjectsProjectIdentifierAnnotationConfigsRoute,
    getV1ProjectsProjectIdentifierAnnotationConfigsRouteHandler,
  )
  .openapi(
    putV1ProjectsProjectIdentifierAnnotationConfigsRoute,
    putV1ProjectsProjectIdentifierAnnotationConfigsRouteHandler,
  )
  .openapi(
    putV1ProjectsProjectIdentifierAnnotationConfigsConfigIdentifierRoute,
    putV1ProjectsProjectIdentifierAnnotationConfigsConfigIdentifierRouteHandler,
  )
  .openapi(
    deleteV1ProjectsProjectIdentifierAnnotationConfigsConfigIdentifierRoute,
    deleteV1ProjectsProjectIdentifierAnnotationConfigsConfigIdentifierRouteHandler,
  )
  .openapi(
    getV1ProjectsProjectIdentifierSpanAnnotationsRoute,
    getV1ProjectsProjectIdentifierSpanAnnotationsRouteHandler,
  )
  .openapi(
    deleteV1ProjectsProjectIdentifierSpanAnnotationsRoute,
    deleteV1ProjectsProjectIdentifierSpanAnnotationsRouteHandler,
  )
  .openapi(
    getV1ProjectsProjectIdentifierTraceAnnotationsRoute,
    getV1ProjectsProjectIdentifierTraceAnnotationsRouteHandler,
  )
  .openapi(
    deleteV1ProjectsProjectIdentifierTraceAnnotationsRoute,
    deleteV1ProjectsProjectIdentifierTraceAnnotationsRouteHandler,
  )
  .openapi(
    getV1ProjectsProjectIdentifierSessionAnnotationsRoute,
    getV1ProjectsProjectIdentifierSessionAnnotationsRouteHandler,
  )
  .openapi(
    deleteV1ProjectsProjectIdentifierSessionAnnotationsRoute,
    deleteV1ProjectsProjectIdentifierSessionAnnotationsRouteHandler,
  )
  .openapi(getV1DatasetLabelsRoute, getV1DatasetLabelsRouteHandler)
  .openapi(postV1DatasetLabelsRoute, postV1DatasetLabelsRouteHandler)
  .openapi(getV1DatasetLabelsLabelIdRoute, getV1DatasetLabelsLabelIdRouteHandler)
  .openapi(patchV1DatasetLabelsLabelIdRoute, patchV1DatasetLabelsLabelIdRouteHandler)
  .openapi(deleteV1DatasetLabelsLabelIdRoute, deleteV1DatasetLabelsLabelIdRouteHandler)
  .openapi(
    getV1DatasetsDatasetIdentifierLabelsRoute,
    getV1DatasetsDatasetIdentifierLabelsRouteHandler,
  )
  .openapi(
    putV1DatasetsDatasetIdentifierLabelsRoute,
    putV1DatasetsDatasetIdentifierLabelsRouteHandler,
  )
  .openapi(
    putV1DatasetsDatasetIdentifierLabelsLabelIdRoute,
    putV1DatasetsDatasetIdentifierLabelsLabelIdRouteHandler,
  )
  .openapi(
    deleteV1DatasetsDatasetIdentifierLabelsLabelIdRoute,
    deleteV1DatasetsDatasetIdentifierLabelsLabelIdRouteHandler,
  )
  .openapi(getV1DatasetsRoute, getV1DatasetsRouteHandler)
  .openapi(deleteV1DatasetsIdRoute, deleteV1DatasetsIdRouteHandler)
  .openapi(getV1DatasetsIdRoute, getV1DatasetsIdRouteHandler)
  .openapi(getV1DatasetsIdVersionsRoute, getV1DatasetsIdVersionsRouteHandler)
  .openapi(postV1DatasetsUploadRoute, postV1DatasetsUploadRouteHandler)
  .openapi(getV1DatasetsIdExamplesRoute, getV1DatasetsIdExamplesRouteHandler)
  .openapi(
    getV1DatasetsDatasetIdentifierSplitsRoute,
    getV1DatasetsDatasetIdentifierSplitsRouteHandler,
  )
  .openapi(
    postV1DatasetsDatasetIdentifierSplitsRoute,
    postV1DatasetsDatasetIdentifierSplitsRouteHandler,
  )
  .openapi(
    patchV1DatasetsDatasetIdentifierSplitsSplitIdRoute,
    patchV1DatasetsDatasetIdentifierSplitsSplitIdRouteHandler,
  )
  .openapi(
    deleteV1DatasetsDatasetIdentifierSplitsSplitIdRoute,
    deleteV1DatasetsDatasetIdentifierSplitsSplitIdRouteHandler,
  )
  .openapi(getV1DatasetsIdCsvRoute, getV1DatasetsIdCsvRouteHandler)
  .openapi(getV1DatasetsIdJsonlRoute, getV1DatasetsIdJsonlRouteHandler)
  .openapi(getV1DatasetsIdJsonlOpenaiFtRoute, getV1DatasetsIdJsonlOpenaiFtRouteHandler)
  .openapi(getV1DatasetsIdJsonlOpenaiEvalsRoute, getV1DatasetsIdJsonlOpenaiEvalsRouteHandler)
  .openapi(postV1DatasetsDatasetIdExperimentsRoute, postV1DatasetsDatasetIdExperimentsRouteHandler)
  .openapi(getV1DatasetsDatasetIdExperimentsRoute, getV1DatasetsDatasetIdExperimentsRouteHandler)
  .openapi(getV1ExperimentsExperimentIdRoute, getV1ExperimentsExperimentIdRouteHandler)
  .openapi(patchV1ExperimentsExperimentIdRoute, patchV1ExperimentsExperimentIdRouteHandler)
  .openapi(deleteV1ExperimentsExperimentIdRoute, deleteV1ExperimentsExperimentIdRouteHandler)
  .openapi(
    getV1ExperimentsExperimentIdIncompleteRunsRoute,
    getV1ExperimentsExperimentIdIncompleteRunsRouteHandler,
  )
  .openapi(getV1ExperimentsExperimentIdJsonRoute, getV1ExperimentsExperimentIdJsonRouteHandler)
  .openapi(getV1ExperimentsExperimentIdCsvRoute, getV1ExperimentsExperimentIdCsvRouteHandler)
  .openapi(getV1ExperimentsExperimentIdTagsRoute, getV1ExperimentsExperimentIdTagsRouteHandler)
  .openapi(postV1ExperimentsExperimentIdTagsRoute, postV1ExperimentsExperimentIdTagsRouteHandler)
  .openapi(
    deleteV1ExperimentsExperimentIdTagsTagIdentifierRoute,
    deleteV1ExperimentsExperimentIdTagsTagIdentifierRouteHandler,
  )
  .openapi(postV1ExperimentsExperimentIdRunsRoute, postV1ExperimentsExperimentIdRunsRouteHandler)
  .openapi(getV1ExperimentsExperimentIdRunsRoute, getV1ExperimentsExperimentIdRunsRouteHandler)
  .openapi(
    getV1ExperimentsExperimentIdIncompleteEvaluationsRoute,
    getV1ExperimentsExperimentIdIncompleteEvaluationsRouteHandler,
  )
  .openapi(postV1ExperimentEvaluationsRoute, postV1ExperimentEvaluationsRouteHandler)
  .openapi(
    getV1ProjectsProjectIdentifierTracesRoute,
    getV1ProjectsProjectIdentifierTracesRouteHandler,
  )
  .openapi(
    deleteV1ProjectsProjectIdentifierTracesRoute,
    deleteV1ProjectsProjectIdentifierTracesRouteHandler,
  )
  .openapi(postV1TraceAnnotationsRoute, postV1TraceAnnotationsRouteHandler)
  .openapi(postV1TraceNotesRoute, postV1TraceNotesRouteHandler)
  .openapi(postV1TracesTransferRoute, postV1TracesTransferRouteHandler)
  .openapi(deleteV1TracesTraceIdentifierRoute, deleteV1TracesTraceIdentifierRouteHandler)
  .openapi(
    getV1ProjectsProjectIdentifierSpansOtlpv1Route,
    getV1ProjectsProjectIdentifierSpansOtlpv1RouteHandler,
  )
  .openapi(
    getV1ProjectsProjectIdentifierSpansRoute,
    getV1ProjectsProjectIdentifierSpansRouteHandler,
  )
  .openapi(
    postV1ProjectsProjectIdentifierSpansRoute,
    postV1ProjectsProjectIdentifierSpansRouteHandler,
  )
  .openapi(postV1SpanAnnotationsRoute, postV1SpanAnnotationsRouteHandler)
  .openapi(postV1SpanNotesRoute, postV1SpanNotesRouteHandler)
  .openapi(deleteV1SpansSpanIdentifierRoute, deleteV1SpansSpanIdentifierRouteHandler)
  .openapi(getV1PromptsRoute, getV1PromptsRouteHandler)
  .openapi(postV1PromptsRoute, postV1PromptsRouteHandler)
  .openapi(
    getV1PromptsPromptIdentifierVersionsRoute,
    getV1PromptsPromptIdentifierVersionsRouteHandler,
  )
  .openapi(
    postV1PromptsPromptIdentifierVersionsRoute,
    postV1PromptsPromptIdentifierVersionsRouteHandler,
  )
  .openapi(getV1PromptVersionsPromptVersionIdRoute, getV1PromptVersionsPromptVersionIdRouteHandler)
  .openapi(
    getV1PromptsPromptIdentifierTagsTagNameRoute,
    getV1PromptsPromptIdentifierTagsTagNameRouteHandler,
  )
  .openapi(getV1PromptsPromptIdentifierLatestRoute, getV1PromptsPromptIdentifierLatestRouteHandler)
  .openapi(
    getV1PromptVersionsPromptVersionIdTagsRoute,
    getV1PromptVersionsPromptVersionIdTagsRouteHandler,
  )
  .openapi(
    postV1PromptVersionsPromptVersionIdTagsRoute,
    postV1PromptVersionsPromptVersionIdTagsRouteHandler,
  )
  .openapi(
    deleteV1PromptVersionsPromptVersionIdTagsTagNameRoute,
    deleteV1PromptVersionsPromptVersionIdTagsTagNameRouteHandler,
  )
  .openapi(patchV1PromptsPromptIdentifierRoute, patchV1PromptsPromptIdentifierRouteHandler)
  .openapi(deleteV1PromptsPromptIdentifierRoute, deleteV1PromptsPromptIdentifierRouteHandler)
  .openapi(getV1ProjectsRoute, getV1ProjectsRouteHandler)
  .openapi(postV1ProjectsRoute, postV1ProjectsRouteHandler)
  .openapi(getV1ProjectsProjectIdentifierRoute, getV1ProjectsProjectIdentifierRouteHandler)
  .openapi(putV1ProjectsProjectIdentifierRoute, putV1ProjectsProjectIdentifierRouteHandler)
  .openapi(deleteV1ProjectsProjectIdentifierRoute, deleteV1ProjectsProjectIdentifierRouteHandler)
  .openapi(
    patchV1ProjectsProjectIdentifierRetentionRoute,
    patchV1ProjectsProjectIdentifierRetentionRouteHandler,
  )
  .openapi(getV1ModelProvidersRoute, getV1ModelProvidersRouteHandler)
  .openapi(getV1CustomModelProvidersRoute, getV1CustomModelProvidersRouteHandler)
  .openapi(getV1SessionsSessionIdentifierRoute, getV1SessionsSessionIdentifierRouteHandler)
  .openapi(deleteV1SessionsSessionIdentifierRoute, deleteV1SessionsSessionIdentifierRouteHandler)
  .openapi(postV1SessionsDeleteRoute, postV1SessionsDeleteRouteHandler)
  .openapi(
    getV1ProjectsProjectIdentifierSessionsRoute,
    getV1ProjectsProjectIdentifierSessionsRouteHandler,
  )
  .openapi(postV1SessionAnnotationsRoute, postV1SessionAnnotationsRouteHandler)
  .openapi(postV1SessionNotesRoute, postV1SessionNotesRouteHandler)
  .openapi(postV1DocumentAnnotationsRoute, postV1DocumentAnnotationsRouteHandler)
  .openapi(getV1UserRoute, getV1UserRouteHandler)
  .openapi(getV1UsersRoute, getV1UsersRouteHandler)
  .openapi(postV1UsersRoute, postV1UsersRouteHandler)
  .openapi(deleteV1UsersUserIdRoute, deleteV1UsersUserIdRouteHandler)
  .openapi(putV1SecretsRoute, putV1SecretsRouteHandler)
  .openapi(getV1UserApiKeysRoute, getV1UserApiKeysRouteHandler)
  .openapi(postV1UserApiKeysRoute, postV1UserApiKeysRouteHandler)
  .openapi(getV1UsersApiKeysRoute, getV1UsersApiKeysRouteHandler)
  .openapi(deleteV1UserApiKeysApiKeyIdRoute, deleteV1UserApiKeysApiKeyIdRouteHandler)
  .openapi(getV1SystemApiKeysRoute, getV1SystemApiKeysRouteHandler)
  .openapi(postV1SystemApiKeysRoute, postV1SystemApiKeysRouteHandler)
  .openapi(deleteV1SystemApiKeysApiKeyIdRoute, deleteV1SystemApiKeysApiKeyIdRouteHandler)
  .openapi(postV1ChatCompletionsRoute, postV1ChatCompletionsRouteHandler)
  .openapi(postAuthLoginRoute, postAuthLoginRouteHandler)
  .openapi(getAuthLogoutRoute, getAuthLogoutRouteHandler)
  .openapi(postAuthRefreshRoute, postAuthRefreshRouteHandler)
  .openapi(postAuthPasswordResetEmailRoute, postAuthPasswordResetEmailRouteHandler)
  .openapi(postAuthPasswordResetRoute, postAuthPasswordResetRouteHandler)
  .openapi(postAuthLdapLoginRoute, postAuthLdapLoginRouteHandler)
  .openapi(postOauth2IdpNameLoginRoute, postOauth2IdpNameLoginRouteHandler)
  .openapi(getOauth2IdpNameLoginRoute, getOauth2IdpNameLoginRouteHandler)
  .openapi(getOauth2IdpNameTokensRoute, getOauth2IdpNameTokensRouteHandler)
  .openapi(
    postAgentsServerSessionsSessionIdChatRoute,
    postAgentsServerSessionsSessionIdChatRouteHandler,
  )
  .openapi(postV1AgentSessionsRoute, postV1AgentSessionsRouteHandler)
  .openapi(getV1AgentSessionsRoute, getV1AgentSessionsRouteHandler)
  .openapi(patchV1AgentSessionsSessionIdRoute, patchV1AgentSessionsSessionIdRouteHandler)
  .openapi(getV1AgentSessionsSessionIdRoute, getV1AgentSessionsSessionIdRouteHandler)
  .openapi(
    getV1AgentSessionsSessionIdMessagesRoute,
    getV1AgentSessionsSessionIdMessagesRouteHandler,
  )
  .openapi(
    postV1AgentSessionsSessionIdCompactRoute,
    postV1AgentSessionsSessionIdCompactRouteHandler,
  )
  .openapi(
    postV1AgentSessionsSessionIdToolOutputsRoute,
    postV1AgentSessionsSessionIdToolOutputsRouteHandler,
  )
  .openapi(
    postV1AgentSessionsSessionIdToolApprovalsRoute,
    postV1AgentSessionsSessionIdToolApprovalsRouteHandler,
  )
  .openapi(postV1AgentSessionsSessionIdChatRoute, postV1AgentSessionsSessionIdChatRouteHandler)
  .openapi(getArizePhoenixVersionRoute, getArizePhoenixVersionRouteHandler)
  .openapi(getHealthzRoute, getHealthzRouteHandler)
  .openapi(getReadyzRoute, getReadyzRouteHandler)

export default app
