import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV2Apiusage(options?: ClientRequestOptions) {
  return await parseResponse(client.v2.apiusage.$get(undefined, options))
}

export async function getV2LanguageDatasets(
  args: InferRequestType<typeof client.v2.language.datasets.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.language.datasets.$get(args, options))
}

export async function postV2LanguageDatasetsUpload(
  args: InferRequestType<typeof client.v2.language.datasets.upload.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.language.datasets.upload.$post(args, options))
}

export async function postV2LanguageDatasetsUploadSync(
  args: InferRequestType<typeof client.v2.language.datasets.upload.sync.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.language.datasets.upload.sync.$post(args, options))
}

export async function getV2LanguageDatasetsDatasetId(
  args: InferRequestType<(typeof client.v2.language.datasets)[':datasetId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.language.datasets[':datasetId'].$get(args, options))
}

export async function deleteV2LanguageDatasetsDatasetId(
  args: InferRequestType<(typeof client.v2.language.datasets)[':datasetId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.language.datasets[':datasetId'].$delete(args, options))
}

export async function getV2LanguageDatasetsDatasetIdExamples(
  args: InferRequestType<(typeof client.v2.language.datasets)[':datasetId']['examples']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.language.datasets[':datasetId'].examples.$get(args, options))
}

export async function getV2LanguageDatasetsDatasetIdModels(
  args: InferRequestType<(typeof client.v2.language.datasets)[':datasetId']['models']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.language.datasets[':datasetId'].models.$get(args, options))
}

export async function putV2LanguageDatasetsDatasetIdUpload(
  args: InferRequestType<(typeof client.v2.language.datasets)[':datasetId']['upload']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.language.datasets[':datasetId'].upload.$put(args, options))
}

export async function getV2LanguageDeletionId(
  args: InferRequestType<(typeof client.v2.language.deletion)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.language.deletion[':id'].$get(args, options))
}

export async function getV2LanguageExamples(
  args: InferRequestType<typeof client.v2.language.examples.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.language.examples.$get(args, options))
}

export async function postV2LanguageFeedback(
  args: InferRequestType<typeof client.v2.language.feedback.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.language.feedback.$post(args, options))
}

export async function postV2LanguageIntent(
  args: InferRequestType<typeof client.v2.language.intent.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.language.intent.$post(args, options))
}

export async function getV2LanguageModelsModelId(
  args: InferRequestType<(typeof client.v2.language.models)[':modelId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.language.models[':modelId'].$get(args, options))
}

export async function deleteV2LanguageModelsModelId(
  args: InferRequestType<(typeof client.v2.language.models)[':modelId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.language.models[':modelId'].$delete(args, options))
}

export async function getV2LanguageModelsModelIdLc(
  args: InferRequestType<(typeof client.v2.language.models)[':modelId']['lc']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.language.models[':modelId'].lc.$get(args, options))
}

export async function postV2LanguageRetrain(
  args: InferRequestType<typeof client.v2.language.retrain.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.language.retrain.$post(args, options))
}

export async function postV2LanguageSentiment(
  args: InferRequestType<typeof client.v2.language.sentiment.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.language.sentiment.$post(args, options))
}

export async function postV2LanguageTrain(
  args: InferRequestType<typeof client.v2.language.train.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.language.train.$post(args, options))
}

export async function getV2LanguageTrainModelId(
  args: InferRequestType<(typeof client.v2.language.train)[':modelId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.language.train[':modelId'].$get(args, options))
}

export async function postV2Oauth2Token(
  args: InferRequestType<typeof client.v2.oauth2.token.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.oauth2.token.$post(args, options))
}

export async function deleteV2Oauth2TokensToken(
  args: InferRequestType<(typeof client.v2.oauth2.tokens)[':token']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.oauth2.tokens[':token'].$delete(args, options))
}

export async function putV2VisionBulkfeedback(
  args: InferRequestType<typeof client.v2.vision.bulkfeedback.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.vision.bulkfeedback.$put(args, options))
}

export async function getV2VisionDatasets(
  args: InferRequestType<typeof client.v2.vision.datasets.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.vision.datasets.$get(args, options))
}

export async function postV2VisionDatasets(
  args: InferRequestType<typeof client.v2.vision.datasets.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.vision.datasets.$post(args, options))
}

export async function postV2VisionDatasetsUpload(
  args: InferRequestType<typeof client.v2.vision.datasets.upload.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.vision.datasets.upload.$post(args, options))
}

export async function postV2VisionDatasetsUploadSync(
  args: InferRequestType<typeof client.v2.vision.datasets.upload.sync.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.vision.datasets.upload.sync.$post(args, options))
}

export async function getV2VisionDatasetsDatasetId(
  args: InferRequestType<(typeof client.v2.vision.datasets)[':datasetId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.vision.datasets[':datasetId'].$get(args, options))
}

export async function deleteV2VisionDatasetsDatasetId(
  args: InferRequestType<(typeof client.v2.vision.datasets)[':datasetId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.vision.datasets[':datasetId'].$delete(args, options))
}

export async function getV2VisionDatasetsDatasetIdExamples(
  args: InferRequestType<(typeof client.v2.vision.datasets)[':datasetId']['examples']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.vision.datasets[':datasetId'].examples.$get(args, options))
}

export async function postV2VisionDatasetsDatasetIdExamples(
  args: InferRequestType<(typeof client.v2.vision.datasets)[':datasetId']['examples']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.vision.datasets[':datasetId'].examples.$post(args, options))
}

export async function getV2VisionDatasetsDatasetIdModels(
  args: InferRequestType<(typeof client.v2.vision.datasets)[':datasetId']['models']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.vision.datasets[':datasetId'].models.$get(args, options))
}

export async function putV2VisionDatasetsDatasetIdUpload(
  args: InferRequestType<(typeof client.v2.vision.datasets)[':datasetId']['upload']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.vision.datasets[':datasetId'].upload.$put(args, options))
}

export async function getV2VisionDeletionId(
  args: InferRequestType<(typeof client.v2.vision.deletion)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.vision.deletion[':id'].$get(args, options))
}

export async function postV2VisionDetect(
  args: InferRequestType<typeof client.v2.vision.detect.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.vision.detect.$post(args, options))
}

export async function getV2VisionExamples(
  args: InferRequestType<typeof client.v2.vision.examples.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.vision.examples.$get(args, options))
}

export async function postV2VisionFeedback(
  args: InferRequestType<typeof client.v2.vision.feedback.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.vision.feedback.$post(args, options))
}

export async function getV2VisionModelsModelId(
  args: InferRequestType<(typeof client.v2.vision.models)[':modelId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.vision.models[':modelId'].$get(args, options))
}

export async function deleteV2VisionModelsModelId(
  args: InferRequestType<(typeof client.v2.vision.models)[':modelId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.vision.models[':modelId'].$delete(args, options))
}

export async function getV2VisionModelsModelIdLc(
  args: InferRequestType<(typeof client.v2.vision.models)[':modelId']['lc']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.vision.models[':modelId'].lc.$get(args, options))
}

export async function postV2VisionOcr(
  args: InferRequestType<typeof client.v2.vision.ocr.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.vision.ocr.$post(args, options))
}

export async function postV2VisionPredict(
  args: InferRequestType<typeof client.v2.vision.predict.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.vision.predict.$post(args, options))
}

export async function postV2VisionRetrain(
  args: InferRequestType<typeof client.v2.vision.retrain.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.vision.retrain.$post(args, options))
}

export async function postV2VisionTrain(
  args: InferRequestType<typeof client.v2.vision.train.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.vision.train.$post(args, options))
}

export async function getV2VisionTrainModelId(
  args: InferRequestType<(typeof client.v2.vision.train)[':modelId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.vision.train[':modelId'].$get(args, options))
}
