import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

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

export async function getV1ParentContacts(
  args: InferRequestType<(typeof client.v1)[':parent']['contacts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].contacts.$get(args, options))
}

export async function postV1ParentContacts(
  args: InferRequestType<(typeof client.v1)[':parent']['contacts']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].contacts.$post(args, options))
}

export async function getV1ParentContactsCompute(
  args: InferRequestType<(typeof client.v1)[':parent']['contacts:compute']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent']['contacts:compute'].$get(args, options))
}

export async function postV1ResourceContactsSendTestMessage(
  args: InferRequestType<(typeof client.v1)[':resource']['contacts:sendTestMessage']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1[':resource']['contacts:sendTestMessage'].$post(args, options),
  )
}
