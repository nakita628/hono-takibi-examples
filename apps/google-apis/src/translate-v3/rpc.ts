import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postV3DatasetExportData(
  args: InferRequestType<(typeof client.v3)[':dataset:exportData']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3[':dataset:exportData'].$post(args, options))
}

export async function postV3DatasetImportData(
  args: InferRequestType<(typeof client.v3)[':dataset:importData']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3[':dataset:importData'].$post(args, options))
}

export async function getV3Name(
  args: InferRequestType<(typeof client.v3)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3[':name'].$get(args, options))
}

export async function deleteV3Name(
  args: InferRequestType<(typeof client.v3)[':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3[':name'].$delete(args, options))
}

export async function patchV3Name(
  args: InferRequestType<(typeof client.v3)[':name']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3[':name'].$patch(args, options))
}

export async function getV3NameLocations(
  args: InferRequestType<(typeof client.v3)[':name']['locations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3[':name'].locations.$get(args, options))
}

export async function getV3NameOperations(
  args: InferRequestType<(typeof client.v3)[':name']['operations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3[':name'].operations.$get(args, options))
}

export async function postV3NameCancel(
  args: InferRequestType<(typeof client.v3)[':name:cancel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3[':name:cancel'].$post(args, options))
}

export async function postV3NameWait(
  args: InferRequestType<(typeof client.v3)[':name:wait']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3[':name:wait'].$post(args, options))
}

export async function getV3ParentAdaptiveMtDatasets(
  args: InferRequestType<(typeof client.v3)[':parent']['adaptiveMtDatasets']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3[':parent'].adaptiveMtDatasets.$get(args, options))
}

export async function postV3ParentAdaptiveMtDatasets(
  args: InferRequestType<(typeof client.v3)[':parent']['adaptiveMtDatasets']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3[':parent'].adaptiveMtDatasets.$post(args, options))
}

export async function getV3ParentAdaptiveMtFiles(
  args: InferRequestType<(typeof client.v3)[':parent']['adaptiveMtFiles']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3[':parent'].adaptiveMtFiles.$get(args, options))
}

export async function getV3ParentAdaptiveMtSentences(
  args: InferRequestType<(typeof client.v3)[':parent']['adaptiveMtSentences']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3[':parent'].adaptiveMtSentences.$get(args, options))
}

export async function getV3ParentDatasets(
  args: InferRequestType<(typeof client.v3)[':parent']['datasets']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3[':parent'].datasets.$get(args, options))
}

export async function postV3ParentDatasets(
  args: InferRequestType<(typeof client.v3)[':parent']['datasets']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3[':parent'].datasets.$post(args, options))
}

export async function getV3ParentExamples(
  args: InferRequestType<(typeof client.v3)[':parent']['examples']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3[':parent'].examples.$get(args, options))
}

export async function getV3ParentGlossaries(
  args: InferRequestType<(typeof client.v3)[':parent']['glossaries']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3[':parent'].glossaries.$get(args, options))
}

export async function postV3ParentGlossaries(
  args: InferRequestType<(typeof client.v3)[':parent']['glossaries']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3[':parent'].glossaries.$post(args, options))
}

export async function getV3ParentGlossaryEntries(
  args: InferRequestType<(typeof client.v3)[':parent']['glossaryEntries']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3[':parent'].glossaryEntries.$get(args, options))
}

export async function postV3ParentGlossaryEntries(
  args: InferRequestType<(typeof client.v3)[':parent']['glossaryEntries']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3[':parent'].glossaryEntries.$post(args, options))
}

export async function getV3ParentModels(
  args: InferRequestType<(typeof client.v3)[':parent']['models']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3[':parent'].models.$get(args, options))
}

export async function postV3ParentModels(
  args: InferRequestType<(typeof client.v3)[':parent']['models']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3[':parent'].models.$post(args, options))
}

export async function getV3ParentSupportedLanguages(
  args: InferRequestType<(typeof client.v3)[':parent']['supportedLanguages']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3[':parent'].supportedLanguages.$get(args, options))
}

export async function postV3ParentAdaptiveMtTranslate(
  args: InferRequestType<(typeof client.v3)[':parent:adaptiveMtTranslate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3[':parent:adaptiveMtTranslate'].$post(args, options))
}

export async function postV3ParentBatchTranslateDocument(
  args: InferRequestType<(typeof client.v3)[':parent:batchTranslateDocument']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3[':parent:batchTranslateDocument'].$post(args, options))
}

export async function postV3ParentBatchTranslateText(
  args: InferRequestType<(typeof client.v3)[':parent:batchTranslateText']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3[':parent:batchTranslateText'].$post(args, options))
}

export async function postV3ParentDetectLanguage(
  args: InferRequestType<(typeof client.v3)[':parent:detectLanguage']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3[':parent:detectLanguage'].$post(args, options))
}

export async function postV3ParentImportAdaptiveMtFile(
  args: InferRequestType<(typeof client.v3)[':parent:importAdaptiveMtFile']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3[':parent:importAdaptiveMtFile'].$post(args, options))
}

export async function postV3ParentRomanizeText(
  args: InferRequestType<(typeof client.v3)[':parent:romanizeText']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3[':parent:romanizeText'].$post(args, options))
}

export async function postV3ParentTranslateDocument(
  args: InferRequestType<(typeof client.v3)[':parent:translateDocument']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3[':parent:translateDocument'].$post(args, options))
}

export async function postV3ParentTranslateText(
  args: InferRequestType<(typeof client.v3)[':parent:translateText']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3[':parent:translateText'].$post(args, options))
}
