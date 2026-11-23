import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV1beta2Name(
  args: InferRequestType<(typeof client.v1beta2)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta2[':name'].$get(args, options))
}

export async function deleteV1beta2Name(
  args: InferRequestType<(typeof client.v1beta2)[':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta2[':name'].$delete(args, options))
}

export async function patchV1beta2Name(
  args: InferRequestType<(typeof client.v1beta2)[':name']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta2[':name'].$patch(args, options))
}

export async function postV1beta2NameExportDocuments(
  args: InferRequestType<(typeof client.v1beta2)[':name:exportDocuments']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta2[':name:exportDocuments'].$post(args, options))
}

export async function postV1beta2NameImportDocuments(
  args: InferRequestType<(typeof client.v1beta2)[':name:importDocuments']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta2[':name:importDocuments'].$post(args, options))
}

export async function getV1beta2ParentFields(
  args: InferRequestType<(typeof client.v1beta2)[':parent']['fields']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta2[':parent'].fields.$get(args, options))
}

export async function getV1beta2ParentIndexes(
  args: InferRequestType<(typeof client.v1beta2)[':parent']['indexes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta2[':parent'].indexes.$get(args, options))
}

export async function postV1beta2ParentIndexes(
  args: InferRequestType<(typeof client.v1beta2)[':parent']['indexes']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta2[':parent'].indexes.$post(args, options))
}
