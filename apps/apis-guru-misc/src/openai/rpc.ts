import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postAnswers(
  args: InferRequestType<typeof client.answers.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.answers.$post(args, options))
}

export async function postAudioTranscriptions(
  args: InferRequestType<typeof client.audio.transcriptions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.audio.transcriptions.$post(args, options))
}

export async function postAudioTranslations(
  args: InferRequestType<typeof client.audio.translations.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.audio.translations.$post(args, options))
}

export async function postChatCompletions(
  args: InferRequestType<typeof client.chat.completions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.chat.completions.$post(args, options))
}

export async function postClassifications(
  args: InferRequestType<typeof client.classifications.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.classifications.$post(args, options))
}

export async function postCompletions(
  args: InferRequestType<typeof client.completions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.completions.$post(args, options))
}

export async function postEdits(
  args: InferRequestType<typeof client.edits.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.edits.$post(args, options))
}

export async function postEmbeddings(
  args: InferRequestType<typeof client.embeddings.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.embeddings.$post(args, options))
}

export async function getEngines(options?: ClientRequestOptions) {
  return await parseResponse(client.engines.$get(undefined, options))
}

export async function getEnginesEngineId(
  args: InferRequestType<(typeof client.engines)[':engine_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.engines[':engine_id'].$get(args, options))
}

export async function postEnginesEngineIdSearch(
  args: InferRequestType<(typeof client.engines)[':engine_id']['search']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.engines[':engine_id'].search.$post(args, options))
}

export async function getFiles(options?: ClientRequestOptions) {
  return await parseResponse(client.files.$get(undefined, options))
}

export async function postFiles(
  args: InferRequestType<typeof client.files.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.files.$post(args, options))
}

export async function getFilesFileId(
  args: InferRequestType<(typeof client.files)[':file_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.files[':file_id'].$get(args, options))
}

export async function deleteFilesFileId(
  args: InferRequestType<(typeof client.files)[':file_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.files[':file_id'].$delete(args, options))
}

export async function getFilesFileIdContent(
  args: InferRequestType<(typeof client.files)[':file_id']['content']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.files[':file_id'].content.$get(args, options))
}

export async function getFineTunes(options?: ClientRequestOptions) {
  return await parseResponse(client['fine-tunes'].$get(undefined, options))
}

export async function postFineTunes(
  args: InferRequestType<(typeof client)['fine-tunes']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['fine-tunes'].$post(args, options))
}

export async function getFineTunesFineTuneId(
  args: InferRequestType<(typeof client)['fine-tunes'][':fine_tune_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['fine-tunes'][':fine_tune_id'].$get(args, options))
}

export async function postFineTunesFineTuneIdCancel(
  args: InferRequestType<(typeof client)['fine-tunes'][':fine_tune_id']['cancel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['fine-tunes'][':fine_tune_id'].cancel.$post(args, options))
}

export async function getFineTunesFineTuneIdEvents(
  args: InferRequestType<(typeof client)['fine-tunes'][':fine_tune_id']['events']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['fine-tunes'][':fine_tune_id'].events.$get(args, options))
}

export async function postImagesEdits(
  args: InferRequestType<typeof client.images.edits.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.images.edits.$post(args, options))
}

export async function postImagesGenerations(
  args: InferRequestType<typeof client.images.generations.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.images.generations.$post(args, options))
}

export async function postImagesVariations(
  args: InferRequestType<typeof client.images.variations.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.images.variations.$post(args, options))
}

export async function getModels(options?: ClientRequestOptions) {
  return await parseResponse(client.models.$get(undefined, options))
}

export async function getModelsModel(
  args: InferRequestType<(typeof client.models)[':model']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.models[':model'].$get(args, options))
}

export async function deleteModelsModel(
  args: InferRequestType<(typeof client.models)[':model']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.models[':model'].$delete(args, options))
}

export async function postModerations(
  args: InferRequestType<typeof client.moderations.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.moderations.$post(args, options))
}
