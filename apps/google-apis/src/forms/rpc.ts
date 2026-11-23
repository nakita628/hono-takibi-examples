import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postV1Forms(
  args: InferRequestType<typeof client.v1.forms.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.forms.$post(args, options))
}

export async function getV1FormsFormId(
  args: InferRequestType<(typeof client.v1.forms)[':formId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.forms[':formId'].$get(args, options))
}

export async function getV1FormsFormIdResponses(
  args: InferRequestType<(typeof client.v1.forms)[':formId']['responses']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.forms[':formId'].responses.$get(args, options))
}

export async function getV1FormsFormIdResponsesResponseId(
  args: InferRequestType<(typeof client.v1.forms)[':formId']['responses'][':responseId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.forms[':formId'].responses[':responseId'].$get(args, options),
  )
}

export async function getV1FormsFormIdWatches(
  args: InferRequestType<(typeof client.v1.forms)[':formId']['watches']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.forms[':formId'].watches.$get(args, options))
}

export async function postV1FormsFormIdWatches(
  args: InferRequestType<(typeof client.v1.forms)[':formId']['watches']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.forms[':formId'].watches.$post(args, options))
}

export async function deleteV1FormsFormIdWatchesWatchId(
  args: InferRequestType<(typeof client.v1.forms)[':formId']['watches'][':watchId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.forms[':formId'].watches[':watchId'].$delete(args, options))
}

export async function postV1FormsFormIdWatchesWatchIdRenew(
  args: InferRequestType<(typeof client.v1.forms)[':formId']['watches'][':watchId:renew']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.forms[':formId'].watches[':watchId:renew'].$post(args, options),
  )
}

export async function postV1FormsFormIdBatchUpdate(
  args: InferRequestType<(typeof client.v1.forms)[':formId:batchUpdate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.forms[':formId:batchUpdate'].$post(args, options))
}
