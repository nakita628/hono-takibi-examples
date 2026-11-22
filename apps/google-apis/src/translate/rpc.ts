import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV3beta1Name(
  args: InferRequestType<(typeof client.v3beta1)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3beta1[':name'].$get(args, options))
}

export async function deleteV3beta1Name(
  args: InferRequestType<(typeof client.v3beta1)[':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3beta1[':name'].$delete(args, options))
}

export async function getV3beta1NameLocations(
  args: InferRequestType<(typeof client.v3beta1)[':name']['locations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3beta1[':name'].locations.$get(args, options))
}

export async function getV3beta1NameOperations(
  args: InferRequestType<(typeof client.v3beta1)[':name']['operations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3beta1[':name'].operations.$get(args, options))
}

export async function postV3beta1NameCancel(
  args: InferRequestType<(typeof client.v3beta1)[':name:cancel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3beta1[':name:cancel'].$post(args, options))
}

export async function postV3beta1NameWait(
  args: InferRequestType<(typeof client.v3beta1)[':name:wait']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3beta1[':name:wait'].$post(args, options))
}

export async function getV3beta1ParentGlossaries(
  args: InferRequestType<(typeof client.v3beta1)[':parent']['glossaries']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3beta1[':parent'].glossaries.$get(args, options))
}

export async function postV3beta1ParentGlossaries(
  args: InferRequestType<(typeof client.v3beta1)[':parent']['glossaries']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3beta1[':parent'].glossaries.$post(args, options))
}

export async function getV3beta1ParentSupportedLanguages(
  args: InferRequestType<(typeof client.v3beta1)[':parent']['supportedLanguages']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3beta1[':parent'].supportedLanguages.$get(args, options))
}

export async function postV3beta1ParentBatchTranslateDocument(
  args: InferRequestType<(typeof client.v3beta1)[':parent:batchTranslateDocument']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3beta1[':parent:batchTranslateDocument'].$post(args, options))
}

export async function postV3beta1ParentBatchTranslateText(
  args: InferRequestType<(typeof client.v3beta1)[':parent:batchTranslateText']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3beta1[':parent:batchTranslateText'].$post(args, options))
}

export async function postV3beta1ParentDetectLanguage(
  args: InferRequestType<(typeof client.v3beta1)[':parent:detectLanguage']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3beta1[':parent:detectLanguage'].$post(args, options))
}

export async function postV3beta1ParentTranslateDocument(
  args: InferRequestType<(typeof client.v3beta1)[':parent:translateDocument']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3beta1[':parent:translateDocument'].$post(args, options))
}

export async function postV3beta1ParentTranslateText(
  args: InferRequestType<(typeof client.v3beta1)[':parent:translateText']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3beta1[':parent:translateText'].$post(args, options))
}
