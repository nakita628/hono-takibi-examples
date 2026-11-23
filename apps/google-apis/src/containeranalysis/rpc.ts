import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV1beta1Name(
  args: InferRequestType<(typeof client.v1beta1)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name'].$get(args, options))
}

export async function deleteV1beta1Name(
  args: InferRequestType<(typeof client.v1beta1)[':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name'].$delete(args, options))
}

export async function patchV1beta1Name(
  args: InferRequestType<(typeof client.v1beta1)[':name']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name'].$patch(args, options))
}

export async function getV1beta1NameNotes(
  args: InferRequestType<(typeof client.v1beta1)[':name']['notes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name'].notes.$get(args, options))
}

export async function getV1beta1NameOccurrences(
  args: InferRequestType<(typeof client.v1beta1)[':name']['occurrences']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name'].occurrences.$get(args, options))
}

export async function getV1beta1ParentNotes(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['notes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].notes.$get(args, options))
}

export async function postV1beta1ParentNotes(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['notes']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].notes.$post(args, options))
}

export async function postV1beta1ParentNotesBatchCreate(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['notes:batchCreate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent']['notes:batchCreate'].$post(args, options))
}

export async function getV1beta1ParentOccurrences(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['occurrences']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].occurrences.$get(args, options))
}

export async function postV1beta1ParentOccurrences(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['occurrences']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].occurrences.$post(args, options))
}

export async function postV1beta1ParentOccurrencesBatchCreate(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['occurrences:batchCreate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1beta1[':parent']['occurrences:batchCreate'].$post(args, options),
  )
}

export async function getV1beta1ParentOccurrencesVulnerabilitySummary(
  args: InferRequestType<
    (typeof client.v1beta1)[':parent']['occurrences:vulnerabilitySummary']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1beta1[':parent']['occurrences:vulnerabilitySummary'].$get(args, options),
  )
}

export async function postV1beta1ResourceGetIamPolicy(
  args: InferRequestType<(typeof client.v1beta1)[':resource:getIamPolicy']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':resource:getIamPolicy'].$post(args, options))
}

export async function postV1beta1ResourceSetIamPolicy(
  args: InferRequestType<(typeof client.v1beta1)[':resource:setIamPolicy']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':resource:setIamPolicy'].$post(args, options))
}

export async function postV1beta1ResourceTestIamPermissions(
  args: InferRequestType<(typeof client.v1beta1)[':resource:testIamPermissions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':resource:testIamPermissions'].$post(args, options))
}
