import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function get(
  args: InferRequestType<typeof client.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.index.$get(args, options))
}

export async function post(
  args: InferRequestType<typeof client.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.index.$post(args, options))
}

export async function getUuid(
  args: InferRequestType<(typeof client)[':uuid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':uuid'].$get(args, options))
}

export async function putUuid(
  args: InferRequestType<(typeof client)[':uuid']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':uuid'].$put(args, options))
}

export async function putUuidDtmf(
  args: InferRequestType<(typeof client)[':uuid']['dtmf']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':uuid'].dtmf.$put(args, options))
}

export async function putUuidStream(
  args: InferRequestType<(typeof client)[':uuid']['stream']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':uuid'].stream.$put(args, options))
}

export async function deleteUuidStream(
  args: InferRequestType<(typeof client)[':uuid']['stream']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':uuid'].stream.$delete(args, options))
}

export async function putUuidTalk(
  args: InferRequestType<(typeof client)[':uuid']['talk']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':uuid'].talk.$put(args, options))
}

export async function deleteUuidTalk(
  args: InferRequestType<(typeof client)[':uuid']['talk']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':uuid'].talk.$delete(args, options))
}
