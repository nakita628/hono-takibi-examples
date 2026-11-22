import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postV1LocationInitialize(
  args: InferRequestType<(typeof client.v1)[':location:initialize']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':location:initialize'].$post(args, options))
}

export async function getV1Name(
  args: InferRequestType<(typeof client.v1)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name'].$get(args, options))
}

export async function deleteV1Name(
  args: InferRequestType<(typeof client.v1)[':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name'].$delete(args, options))
}

export async function patchV1Name(
  args: InferRequestType<(typeof client.v1)[':name']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name'].$patch(args, options))
}

export async function postV1NameDelete(
  args: InferRequestType<(typeof client.v1)[':name:delete']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name:delete'].$post(args, options))
}

export async function postV1NameGet(
  args: InferRequestType<(typeof client.v1)[':name:get']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name:get'].$post(args, options))
}

export async function postV1NameLock(
  args: InferRequestType<(typeof client.v1)[':name:lock']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name:lock'].$post(args, options))
}

export async function postV1ParentDocumentLinks(
  args: InferRequestType<(typeof client.v1)[':parent']['documentLinks']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].documentLinks.$post(args, options))
}

export async function getV1ParentDocumentSchemas(
  args: InferRequestType<(typeof client.v1)[':parent']['documentSchemas']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].documentSchemas.$get(args, options))
}

export async function postV1ParentDocumentSchemas(
  args: InferRequestType<(typeof client.v1)[':parent']['documentSchemas']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].documentSchemas.$post(args, options))
}

export async function postV1ParentDocuments(
  args: InferRequestType<(typeof client.v1)[':parent']['documents']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].documents.$post(args, options))
}

export async function postV1ParentDocumentsSearch(
  args: InferRequestType<(typeof client.v1)[':parent']['documents:search']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent']['documents:search'].$post(args, options))
}

export async function postV1ParentLinkedSources(
  args: InferRequestType<(typeof client.v1)[':parent']['linkedSources']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].linkedSources.$post(args, options))
}

export async function postV1ParentLinkedTargets(
  args: InferRequestType<(typeof client.v1)[':parent']['linkedTargets']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].linkedTargets.$post(args, options))
}

export async function getV1ParentRuleSets(
  args: InferRequestType<(typeof client.v1)[':parent']['ruleSets']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].ruleSets.$get(args, options))
}

export async function postV1ParentRuleSets(
  args: InferRequestType<(typeof client.v1)[':parent']['ruleSets']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].ruleSets.$post(args, options))
}

export async function getV1ParentSynonymSets(
  args: InferRequestType<(typeof client.v1)[':parent']['synonymSets']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].synonymSets.$get(args, options))
}

export async function postV1ParentSynonymSets(
  args: InferRequestType<(typeof client.v1)[':parent']['synonymSets']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].synonymSets.$post(args, options))
}

export async function postV1ResourceFetchAcl(
  args: InferRequestType<(typeof client.v1)[':resource:fetchAcl']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':resource:fetchAcl'].$post(args, options))
}

export async function postV1ResourceSetAcl(
  args: InferRequestType<(typeof client.v1)[':resource:setAcl']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':resource:setAcl'].$post(args, options))
}
