import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV1AnnotationConfigs(
  args: InferRequestType<typeof client.v1.annotation_configs.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.annotation_configs.$get(args, options))
}

export async function postV1AnnotationConfigs(
  args: InferRequestType<typeof client.v1.annotation_configs.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.annotation_configs.$post(args, options))
}

export async function getV1AnnotationConfigsConfigIdentifier(
  args: InferRequestType<(typeof client.v1.annotation_configs)[':config_identifier']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.annotation_configs[':config_identifier'].$get(args, options))
}

export async function putV1AnnotationConfigsConfigId(
  args: InferRequestType<(typeof client.v1.annotation_configs)[':config_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.annotation_configs[':config_id'].$put(args, options))
}

export async function deleteV1AnnotationConfigsConfigId(
  args: InferRequestType<(typeof client.v1.annotation_configs)[':config_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.annotation_configs[':config_id'].$delete(args, options))
}

export async function getV1ProjectsProjectIdentifierAnnotationConfigs(
  args: InferRequestType<
    (typeof client.v1.projects)[':project_identifier']['annotation_configs']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':project_identifier'].annotation_configs.$get(args, options),
  )
}

export async function putV1ProjectsProjectIdentifierAnnotationConfigs(
  args: InferRequestType<
    (typeof client.v1.projects)[':project_identifier']['annotation_configs']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':project_identifier'].annotation_configs.$put(args, options),
  )
}

export async function putV1ProjectsProjectIdentifierAnnotationConfigsConfigIdentifier(
  args: InferRequestType<
    (typeof client.v1.projects)[':project_identifier']['annotation_configs'][':config_identifier']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':project_identifier'].annotation_configs[':config_identifier'].$put(
      args,
      options,
    ),
  )
}

export async function deleteV1ProjectsProjectIdentifierAnnotationConfigsConfigIdentifier(
  args: InferRequestType<
    (typeof client.v1.projects)[':project_identifier']['annotation_configs'][':config_identifier']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':project_identifier'].annotation_configs[':config_identifier'].$delete(
      args,
      options,
    ),
  )
}

export async function getV1ProjectsProjectIdentifierSpanAnnotations(
  args: InferRequestType<
    (typeof client.v1.projects)[':project_identifier']['span_annotations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':project_identifier'].span_annotations.$get(args, options),
  )
}

export async function deleteV1ProjectsProjectIdentifierSpanAnnotations(
  args: InferRequestType<
    (typeof client.v1.projects)[':project_identifier']['span_annotations']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':project_identifier'].span_annotations.$delete(args, options),
  )
}

export async function getV1ProjectsProjectIdentifierTraceAnnotations(
  args: InferRequestType<
    (typeof client.v1.projects)[':project_identifier']['trace_annotations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':project_identifier'].trace_annotations.$get(args, options),
  )
}

export async function deleteV1ProjectsProjectIdentifierTraceAnnotations(
  args: InferRequestType<
    (typeof client.v1.projects)[':project_identifier']['trace_annotations']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':project_identifier'].trace_annotations.$delete(args, options),
  )
}

export async function getV1ProjectsProjectIdentifierSessionAnnotations(
  args: InferRequestType<
    (typeof client.v1.projects)[':project_identifier']['session_annotations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':project_identifier'].session_annotations.$get(args, options),
  )
}

export async function deleteV1ProjectsProjectIdentifierSessionAnnotations(
  args: InferRequestType<
    (typeof client.v1.projects)[':project_identifier']['session_annotations']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':project_identifier'].session_annotations.$delete(args, options),
  )
}

export async function getV1DatasetLabels(
  args: InferRequestType<typeof client.v1.dataset_labels.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.dataset_labels.$get(args, options))
}

export async function postV1DatasetLabels(
  args: InferRequestType<typeof client.v1.dataset_labels.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.dataset_labels.$post(args, options))
}

export async function getV1DatasetLabelsLabelId(
  args: InferRequestType<(typeof client.v1.dataset_labels)[':label_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.dataset_labels[':label_id'].$get(args, options))
}

export async function deleteV1DatasetLabelsLabelId(
  args: InferRequestType<(typeof client.v1.dataset_labels)[':label_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.dataset_labels[':label_id'].$delete(args, options))
}

export async function patchV1DatasetLabelsLabelId(
  args: InferRequestType<(typeof client.v1.dataset_labels)[':label_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.dataset_labels[':label_id'].$patch(args, options))
}

export async function getV1DatasetsDatasetIdentifierLabels(
  args: InferRequestType<(typeof client.v1.datasets)[':dataset_identifier']['labels']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.datasets[':dataset_identifier'].labels.$get(args, options))
}

export async function putV1DatasetsDatasetIdentifierLabels(
  args: InferRequestType<(typeof client.v1.datasets)[':dataset_identifier']['labels']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.datasets[':dataset_identifier'].labels.$put(args, options))
}

export async function putV1DatasetsDatasetIdentifierLabelsLabelId(
  args: InferRequestType<
    (typeof client.v1.datasets)[':dataset_identifier']['labels'][':label_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.datasets[':dataset_identifier'].labels[':label_id'].$put(args, options),
  )
}

export async function deleteV1DatasetsDatasetIdentifierLabelsLabelId(
  args: InferRequestType<
    (typeof client.v1.datasets)[':dataset_identifier']['labels'][':label_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.datasets[':dataset_identifier'].labels[':label_id'].$delete(args, options),
  )
}

export async function getV1Datasets(
  args: InferRequestType<typeof client.v1.datasets.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.datasets.$get(args, options))
}

export async function getV1DatasetsId(
  args: InferRequestType<(typeof client.v1.datasets)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.datasets[':id'].$get(args, options))
}

export async function deleteV1DatasetsId(
  args: InferRequestType<(typeof client.v1.datasets)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.datasets[':id'].$delete(args, options))
}

export async function getV1DatasetsIdVersions(
  args: InferRequestType<(typeof client.v1.datasets)[':id']['versions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.datasets[':id'].versions.$get(args, options))
}

export async function postV1DatasetsUpload(
  args: InferRequestType<typeof client.v1.datasets.upload.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.datasets.upload.$post(args, options))
}

export async function getV1DatasetsIdExamples(
  args: InferRequestType<(typeof client.v1.datasets)[':id']['examples']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.datasets[':id'].examples.$get(args, options))
}

export async function getV1DatasetsDatasetIdentifierSplits(
  args: InferRequestType<(typeof client.v1.datasets)[':dataset_identifier']['splits']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.datasets[':dataset_identifier'].splits.$get(args, options))
}

export async function postV1DatasetsDatasetIdentifierSplits(
  args: InferRequestType<(typeof client.v1.datasets)[':dataset_identifier']['splits']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.datasets[':dataset_identifier'].splits.$post(args, options))
}

export async function deleteV1DatasetsDatasetIdentifierSplitsSplitId(
  args: InferRequestType<
    (typeof client.v1.datasets)[':dataset_identifier']['splits'][':split_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.datasets[':dataset_identifier'].splits[':split_id'].$delete(args, options),
  )
}

export async function patchV1DatasetsDatasetIdentifierSplitsSplitId(
  args: InferRequestType<
    (typeof client.v1.datasets)[':dataset_identifier']['splits'][':split_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.datasets[':dataset_identifier'].splits[':split_id'].$patch(args, options),
  )
}

export async function getV1DatasetsIdCsv(
  args: InferRequestType<(typeof client.v1.datasets)[':id']['csv']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.datasets[':id'].csv.$get(args, options))
}

export async function getV1DatasetsIdJsonl(
  args: InferRequestType<(typeof client.v1.datasets)[':id']['jsonl']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.datasets[':id'].jsonl.$get(args, options))
}

export async function getV1DatasetsIdJsonlOpenaiFt(
  args: InferRequestType<(typeof client.v1.datasets)[':id']['jsonl']['openai_ft']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.datasets[':id'].jsonl.openai_ft.$get(args, options))
}

export async function getV1DatasetsIdJsonlOpenaiEvals(
  args: InferRequestType<(typeof client.v1.datasets)[':id']['jsonl']['openai_evals']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.datasets[':id'].jsonl.openai_evals.$get(args, options))
}

export async function getV1DatasetsDatasetIdExperiments(
  args: InferRequestType<(typeof client.v1.datasets)[':dataset_id']['experiments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.datasets[':dataset_id'].experiments.$get(args, options))
}

export async function postV1DatasetsDatasetIdExperiments(
  args: InferRequestType<(typeof client.v1.datasets)[':dataset_id']['experiments']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.datasets[':dataset_id'].experiments.$post(args, options))
}

export async function getV1ExperimentsExperimentId(
  args: InferRequestType<(typeof client.v1.experiments)[':experiment_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.experiments[':experiment_id'].$get(args, options))
}

export async function deleteV1ExperimentsExperimentId(
  args: InferRequestType<(typeof client.v1.experiments)[':experiment_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.experiments[':experiment_id'].$delete(args, options))
}

export async function patchV1ExperimentsExperimentId(
  args: InferRequestType<(typeof client.v1.experiments)[':experiment_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.experiments[':experiment_id'].$patch(args, options))
}

export async function getV1ExperimentsExperimentIdIncompleteRuns(
  args: InferRequestType<
    (typeof client.v1.experiments)[':experiment_id']['incomplete-runs']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.experiments[':experiment_id']['incomplete-runs'].$get(args, options),
  )
}

export async function getV1ExperimentsExperimentIdJson(
  args: InferRequestType<(typeof client.v1.experiments)[':experiment_id']['json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.experiments[':experiment_id'].json.$get(args, options))
}

export async function getV1ExperimentsExperimentIdCsv(
  args: InferRequestType<(typeof client.v1.experiments)[':experiment_id']['csv']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.experiments[':experiment_id'].csv.$get(args, options))
}

export async function getV1ExperimentsExperimentIdTags(
  args: InferRequestType<(typeof client.v1.experiments)[':experiment_id']['tags']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.experiments[':experiment_id'].tags.$get(args, options))
}

export async function postV1ExperimentsExperimentIdTags(
  args: InferRequestType<(typeof client.v1.experiments)[':experiment_id']['tags']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.experiments[':experiment_id'].tags.$post(args, options))
}

export async function deleteV1ExperimentsExperimentIdTagsTagIdentifier(
  args: InferRequestType<
    (typeof client.v1.experiments)[':experiment_id']['tags'][':tag_identifier']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.experiments[':experiment_id'].tags[':tag_identifier'].$delete(args, options),
  )
}

export async function getV1ExperimentsExperimentIdRuns(
  args: InferRequestType<(typeof client.v1.experiments)[':experiment_id']['runs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.experiments[':experiment_id'].runs.$get(args, options))
}

export async function postV1ExperimentsExperimentIdRuns(
  args: InferRequestType<(typeof client.v1.experiments)[':experiment_id']['runs']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.experiments[':experiment_id'].runs.$post(args, options))
}

export async function getV1ExperimentsExperimentIdIncompleteEvaluations(
  args: InferRequestType<
    (typeof client.v1.experiments)[':experiment_id']['incomplete-evaluations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.experiments[':experiment_id']['incomplete-evaluations'].$get(args, options),
  )
}

export async function postV1ExperimentEvaluations(
  args: InferRequestType<typeof client.v1.experiment_evaluations.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.experiment_evaluations.$post(args, options))
}

export async function getV1ProjectsProjectIdentifierTraces(
  args: InferRequestType<(typeof client.v1.projects)[':project_identifier']['traces']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects[':project_identifier'].traces.$get(args, options))
}

export async function deleteV1ProjectsProjectIdentifierTraces(
  args: InferRequestType<(typeof client.v1.projects)[':project_identifier']['traces']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':project_identifier'].traces.$delete(args, options),
  )
}

export async function postV1TraceAnnotations(
  args: InferRequestType<typeof client.v1.trace_annotations.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.trace_annotations.$post(args, options))
}

export async function postV1TraceNotes(
  args: InferRequestType<typeof client.v1.trace_notes.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.trace_notes.$post(args, options))
}

export async function postV1TracesTransfer(
  args: InferRequestType<typeof client.v1.traces.transfer.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.traces.transfer.$post(args, options))
}

export async function deleteV1TracesTraceIdentifier(
  args: InferRequestType<(typeof client.v1.traces)[':trace_identifier']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.traces[':trace_identifier'].$delete(args, options))
}

export async function getV1ProjectsProjectIdentifierSpansOtlpv1(
  args: InferRequestType<
    (typeof client.v1.projects)[':project_identifier']['spans']['otlpv1']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':project_identifier'].spans.otlpv1.$get(args, options),
  )
}

export async function getV1ProjectsProjectIdentifierSpans(
  args: InferRequestType<(typeof client.v1.projects)[':project_identifier']['spans']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects[':project_identifier'].spans.$get(args, options))
}

export async function postV1ProjectsProjectIdentifierSpans(
  args: InferRequestType<(typeof client.v1.projects)[':project_identifier']['spans']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects[':project_identifier'].spans.$post(args, options))
}

export async function postV1SpanAnnotations(
  args: InferRequestType<typeof client.v1.span_annotations.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.span_annotations.$post(args, options))
}

export async function postV1SpanNotes(
  args: InferRequestType<typeof client.v1.span_notes.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.span_notes.$post(args, options))
}

export async function deleteV1SpansSpanIdentifier(
  args: InferRequestType<(typeof client.v1.spans)[':span_identifier']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.spans[':span_identifier'].$delete(args, options))
}

export async function getV1Prompts(
  args: InferRequestType<typeof client.v1.prompts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.prompts.$get(args, options))
}

export async function postV1Prompts(
  args: InferRequestType<typeof client.v1.prompts.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.prompts.$post(args, options))
}

export async function getV1PromptsPromptIdentifierVersions(
  args: InferRequestType<(typeof client.v1.prompts)[':prompt_identifier']['versions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.prompts[':prompt_identifier'].versions.$get(args, options))
}

export async function postV1PromptsPromptIdentifierVersions(
  args: InferRequestType<(typeof client.v1.prompts)[':prompt_identifier']['versions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.prompts[':prompt_identifier'].versions.$post(args, options))
}

export async function getV1PromptVersionsPromptVersionId(
  args: InferRequestType<(typeof client.v1.prompt_versions)[':prompt_version_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.prompt_versions[':prompt_version_id'].$get(args, options))
}

export async function getV1PromptsPromptIdentifierTagsTagName(
  args: InferRequestType<
    (typeof client.v1.prompts)[':prompt_identifier']['tags'][':tag_name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.prompts[':prompt_identifier'].tags[':tag_name'].$get(args, options),
  )
}

export async function getV1PromptsPromptIdentifierLatest(
  args: InferRequestType<(typeof client.v1.prompts)[':prompt_identifier']['latest']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.prompts[':prompt_identifier'].latest.$get(args, options))
}

export async function getV1PromptVersionsPromptVersionIdTags(
  args: InferRequestType<(typeof client.v1.prompt_versions)[':prompt_version_id']['tags']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.prompt_versions[':prompt_version_id'].tags.$get(args, options),
  )
}

export async function postV1PromptVersionsPromptVersionIdTags(
  args: InferRequestType<(typeof client.v1.prompt_versions)[':prompt_version_id']['tags']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.prompt_versions[':prompt_version_id'].tags.$post(args, options),
  )
}

export async function deleteV1PromptVersionsPromptVersionIdTagsTagName(
  args: InferRequestType<
    (typeof client.v1.prompt_versions)[':prompt_version_id']['tags'][':tag_name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.prompt_versions[':prompt_version_id'].tags[':tag_name'].$delete(args, options),
  )
}

export async function deleteV1PromptsPromptIdentifier(
  args: InferRequestType<(typeof client.v1.prompts)[':prompt_identifier']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.prompts[':prompt_identifier'].$delete(args, options))
}

export async function patchV1PromptsPromptIdentifier(
  args: InferRequestType<(typeof client.v1.prompts)[':prompt_identifier']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.prompts[':prompt_identifier'].$patch(args, options))
}

export async function getV1Projects(
  args: InferRequestType<typeof client.v1.projects.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects.$get(args, options))
}

export async function postV1Projects(
  args: InferRequestType<typeof client.v1.projects.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects.$post(args, options))
}

export async function getV1ProjectsProjectIdentifier(
  args: InferRequestType<(typeof client.v1.projects)[':project_identifier']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects[':project_identifier'].$get(args, options))
}

export async function putV1ProjectsProjectIdentifier(
  args: InferRequestType<(typeof client.v1.projects)[':project_identifier']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects[':project_identifier'].$put(args, options))
}

export async function deleteV1ProjectsProjectIdentifier(
  args: InferRequestType<(typeof client.v1.projects)[':project_identifier']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects[':project_identifier'].$delete(args, options))
}

export async function patchV1ProjectsProjectIdentifierRetention(
  args: InferRequestType<(typeof client.v1.projects)[':project_identifier']['retention']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':project_identifier'].retention.$patch(args, options),
  )
}

export async function getV1ModelProviders(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.model_providers.$get(undefined, options))
}

export async function getV1CustomModelProviders(
  args: InferRequestType<typeof client.v1.custom_model_providers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.custom_model_providers.$get(args, options))
}

export async function getV1SessionsSessionIdentifier(
  args: InferRequestType<(typeof client.v1.sessions)[':session_identifier']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.sessions[':session_identifier'].$get(args, options))
}

export async function deleteV1SessionsSessionIdentifier(
  args: InferRequestType<(typeof client.v1.sessions)[':session_identifier']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.sessions[':session_identifier'].$delete(args, options))
}

export async function postV1SessionsDelete(
  args: InferRequestType<typeof client.v1.sessions.delete.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.sessions.delete.$post(args, options))
}

export async function getV1ProjectsProjectIdentifierSessions(
  args: InferRequestType<(typeof client.v1.projects)[':project_identifier']['sessions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects[':project_identifier'].sessions.$get(args, options))
}

export async function postV1SessionAnnotations(
  args: InferRequestType<typeof client.v1.session_annotations.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.session_annotations.$post(args, options))
}

export async function postV1SessionNotes(
  args: InferRequestType<typeof client.v1.session_notes.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.session_notes.$post(args, options))
}

export async function postV1DocumentAnnotations(
  args: InferRequestType<typeof client.v1.document_annotations.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.document_annotations.$post(args, options))
}

export async function getV1User(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.user.$get(undefined, options))
}

export async function getV1Users(
  args: InferRequestType<typeof client.v1.users.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.users.$get(args, options))
}

export async function postV1Users(
  args: InferRequestType<typeof client.v1.users.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.users.$post(args, options))
}

export async function deleteV1UsersUserId(
  args: InferRequestType<(typeof client.v1.users)[':user_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.users[':user_id'].$delete(args, options))
}

export async function putV1Secrets(
  args: InferRequestType<typeof client.v1.secrets.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.secrets.$put(args, options))
}

export async function getV1UserApiKeys(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.user.api_keys.$get(undefined, options))
}

export async function postV1UserApiKeys(
  args: InferRequestType<typeof client.v1.user.api_keys.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.user.api_keys.$post(args, options))
}

export async function getV1UsersApiKeys(
  args: InferRequestType<typeof client.v1.users.api_keys.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.users.api_keys.$get(args, options))
}

export async function deleteV1UserApiKeysApiKeyId(
  args: InferRequestType<(typeof client.v1.user.api_keys)[':api_key_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.user.api_keys[':api_key_id'].$delete(args, options))
}

export async function getV1SystemApiKeys(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.system.api_keys.$get(undefined, options))
}

export async function postV1SystemApiKeys(
  args: InferRequestType<typeof client.v1.system.api_keys.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.system.api_keys.$post(args, options))
}

export async function deleteV1SystemApiKeysApiKeyId(
  args: InferRequestType<(typeof client.v1.system.api_keys)[':api_key_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.system.api_keys[':api_key_id'].$delete(args, options))
}

export async function postV1ChatCompletions(
  args: InferRequestType<typeof client.v1.chat.completions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.chat.completions.$post(args, options))
}

export async function postAuthLogin(options?: ClientRequestOptions) {
  return await parseResponse(client.auth.login.$post(undefined, options))
}

export async function getAuthLogout(options?: ClientRequestOptions) {
  return await parseResponse(client.auth.logout.$get(undefined, options))
}

export async function postAuthRefresh(options?: ClientRequestOptions) {
  return await parseResponse(client.auth.refresh.$post(undefined, options))
}

export async function postAuthPasswordResetEmail(options?: ClientRequestOptions) {
  return await parseResponse(client.auth['password-reset-email'].$post(undefined, options))
}

export async function postAuthPasswordReset(options?: ClientRequestOptions) {
  return await parseResponse(client.auth['password-reset'].$post(undefined, options))
}

export async function postAuthLdapLogin(options?: ClientRequestOptions) {
  return await parseResponse(client.auth.ldap.login.$post(undefined, options))
}

export async function getOauth2IdpNameLogin(
  args: InferRequestType<(typeof client.oauth2)[':idp_name']['login']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.oauth2[':idp_name'].login.$get(args, options))
}

export async function postOauth2IdpNameLogin(
  args: InferRequestType<(typeof client.oauth2)[':idp_name']['login']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.oauth2[':idp_name'].login.$post(args, options))
}

export async function getOauth2IdpNameTokens(
  args: InferRequestType<(typeof client.oauth2)[':idp_name']['tokens']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.oauth2[':idp_name'].tokens.$get(args, options))
}

export async function postAgentsServerSessionsSessionIdChat(
  args: InferRequestType<(typeof client.agents.server.sessions)[':session_id']['chat']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.agents.server.sessions[':session_id'].chat.$post(args, options))
}

export async function getV1AgentSessions(
  args: InferRequestType<typeof client.v1.agent_sessions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.agent_sessions.$get(args, options))
}

export async function postV1AgentSessions(
  args: InferRequestType<typeof client.v1.agent_sessions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.agent_sessions.$post(args, options))
}

export async function getV1AgentSessionsSessionId(
  args: InferRequestType<(typeof client.v1.agent_sessions)[':session_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.agent_sessions[':session_id'].$get(args, options))
}

export async function patchV1AgentSessionsSessionId(
  args: InferRequestType<(typeof client.v1.agent_sessions)[':session_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.agent_sessions[':session_id'].$patch(args, options))
}

export async function getV1AgentSessionsSessionIdMessages(
  args: InferRequestType<(typeof client.v1.agent_sessions)[':session_id']['messages']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.agent_sessions[':session_id'].messages.$get(args, options))
}

export async function postV1AgentSessionsSessionIdCompact(
  args: InferRequestType<(typeof client.v1.agent_sessions)[':session_id']['compact']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.agent_sessions[':session_id'].compact.$post(args, options))
}

export async function postV1AgentSessionsSessionIdToolOutputs(
  args: InferRequestType<(typeof client.v1.agent_sessions)[':session_id']['tool_outputs']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.agent_sessions[':session_id'].tool_outputs.$post(args, options),
  )
}

export async function postV1AgentSessionsSessionIdToolApprovals(
  args: InferRequestType<
    (typeof client.v1.agent_sessions)[':session_id']['tool_approvals']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.agent_sessions[':session_id'].tool_approvals.$post(args, options),
  )
}

export async function postV1AgentSessionsSessionIdChat(
  args: InferRequestType<(typeof client.v1.agent_sessions)[':session_id']['chat']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.agent_sessions[':session_id'].chat.$post(args, options))
}

export async function getArizePhoenixVersion(options?: ClientRequestOptions) {
  return await parseResponse(client.arize_phoenix_version.$get(undefined, options))
}

export async function getHealthz(options?: ClientRequestOptions) {
  return await parseResponse(client.healthz.$get(undefined, options))
}

export async function getReadyz(options?: ClientRequestOptions) {
  return await parseResponse(client.readyz.$get(undefined, options))
}
