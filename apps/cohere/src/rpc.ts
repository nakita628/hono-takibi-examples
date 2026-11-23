import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postV1Chat(
  args: InferRequestType<typeof client.v1.chat.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.chat.$post(args, options))
}

export async function postV2Chat(
  args: InferRequestType<typeof client.v2.chat.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.chat.$post(args, options))
}

export async function postV2Parse(
  args: InferRequestType<typeof client.v2.parse.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.parse.$post(args, options))
}

export async function postV1Generate(
  args: InferRequestType<typeof client.v1.generate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.generate.$post(args, options))
}

export async function postV1Embed(
  args: InferRequestType<typeof client.v1.embed.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.embed.$post(args, options))
}

export async function postV2Embed(
  args: InferRequestType<typeof client.v2.embed.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.embed.$post(args, options))
}

export async function postV2AudioTranscriptions(
  args: InferRequestType<typeof client.v2.audio.transcriptions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.audio.transcriptions.$post(args, options))
}

export async function getV2Batches(
  args: InferRequestType<typeof client.v2.batches.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.batches.$get(args, options))
}

export async function postV2Batches(
  args: InferRequestType<typeof client.v2.batches.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.batches.$post(args, options))
}

export async function getV2BatchesId(
  args: InferRequestType<(typeof client.v2.batches)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.batches[':id'].$get(args, options))
}

export async function postV2BatchesIdCancel(
  args: InferRequestType<(typeof client.v2.batches)[':id:cancel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.batches[':id:cancel'].$post(args, options))
}

export async function getV1EmbedJobs(
  args: InferRequestType<(typeof client.v1)['embed-jobs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['embed-jobs'].$get(args, options))
}

export async function postV1EmbedJobs(
  args: InferRequestType<(typeof client.v1)['embed-jobs']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['embed-jobs'].$post(args, options))
}

export async function getV1EmbedJobsId(
  args: InferRequestType<(typeof client.v1)['embed-jobs'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['embed-jobs'][':id'].$get(args, options))
}

export async function postV1EmbedJobsIdCancel(
  args: InferRequestType<(typeof client.v1)['embed-jobs'][':id']['cancel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['embed-jobs'][':id'].cancel.$post(args, options))
}

export async function postV1Rerank(
  args: InferRequestType<typeof client.v1.rerank.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.rerank.$post(args, options))
}

export async function postV2Rerank(
  args: InferRequestType<typeof client.v2.rerank.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.rerank.$post(args, options))
}

export async function postV1Classify(
  args: InferRequestType<typeof client.v1.classify.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.classify.$post(args, options))
}

export async function getV1Datasets(
  args: InferRequestType<typeof client.v1.datasets.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.datasets.$get(args, options))
}

export async function postV1Datasets(
  args: InferRequestType<typeof client.v1.datasets.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.datasets.$post(args, options))
}

export async function getV1DatasetsUsage(
  args: InferRequestType<typeof client.v1.datasets.usage.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.datasets.usage.$get(args, options))
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

export async function postV1Summarize(
  args: InferRequestType<typeof client.v1.summarize.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.summarize.$post(args, options))
}

export async function postV1Tokenize(
  args: InferRequestType<typeof client.v1.tokenize.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.tokenize.$post(args, options))
}

export async function postV1Detokenize(
  args: InferRequestType<typeof client.v1.detokenize.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.detokenize.$post(args, options))
}

export async function getV1Connectors(
  args: InferRequestType<typeof client.v1.connectors.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.connectors.$get(args, options))
}

export async function postV1Connectors(
  args: InferRequestType<typeof client.v1.connectors.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.connectors.$post(args, options))
}

export async function getV1ConnectorsId(
  args: InferRequestType<(typeof client.v1.connectors)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.connectors[':id'].$get(args, options))
}

export async function deleteV1ConnectorsId(
  args: InferRequestType<(typeof client.v1.connectors)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.connectors[':id'].$delete(args, options))
}

export async function patchV1ConnectorsId(
  args: InferRequestType<(typeof client.v1.connectors)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.connectors[':id'].$patch(args, options))
}

export async function postV1ConnectorsIdOauthAuthorize(
  args: InferRequestType<(typeof client.v1.connectors)[':id']['oauth']['authorize']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.connectors[':id'].oauth.authorize.$post(args, options))
}

export async function getV1ModelsModel(
  args: InferRequestType<(typeof client.v1.models)[':model']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.models[':model'].$get(args, options))
}

export async function getV1Models(
  args: InferRequestType<typeof client.v1.models.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.models.$get(args, options))
}

export async function postV1CheckApiKey(
  args: InferRequestType<(typeof client.v1)['check-api-key']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['check-api-key'].$post(args, options))
}

export async function getV1FinetuningFinetunedModels(
  args: InferRequestType<(typeof client.v1.finetuning)['finetuned-models']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.finetuning['finetuned-models'].$get(args, options))
}

export async function postV1FinetuningFinetunedModels(
  args: InferRequestType<(typeof client.v1.finetuning)['finetuned-models']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.finetuning['finetuned-models'].$post(args, options))
}

export async function getV1FinetuningFinetunedModelsId(
  args: InferRequestType<(typeof client.v1.finetuning)['finetuned-models'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.finetuning['finetuned-models'][':id'].$get(args, options))
}

export async function deleteV1FinetuningFinetunedModelsId(
  args: InferRequestType<(typeof client.v1.finetuning)['finetuned-models'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.finetuning['finetuned-models'][':id'].$delete(args, options))
}

export async function patchV1FinetuningFinetunedModelsId(
  args: InferRequestType<(typeof client.v1.finetuning)['finetuned-models'][':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.finetuning['finetuned-models'][':id'].$patch(args, options))
}

export async function getV1FinetuningFinetunedModelsFinetunedModelIdEvents(
  args: InferRequestType<
    (typeof client.v1.finetuning)['finetuned-models'][':finetuned_model_id']['events']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.finetuning['finetuned-models'][':finetuned_model_id'].events.$get(args, options),
  )
}

export async function getV1FinetuningFinetunedModelsFinetunedModelIdTrainingStepMetrics(
  args: InferRequestType<
    (typeof client.v1.finetuning)['finetuned-models'][':finetuned_model_id']['training-step-metrics']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.finetuning['finetuned-models'][':finetuned_model_id']['training-step-metrics'].$get(
      args,
      options,
    ),
  )
}
