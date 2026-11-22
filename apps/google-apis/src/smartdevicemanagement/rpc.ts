import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV1Name(
  args: InferRequestType<(typeof client.v1)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name'].$get(args, options))
}

export async function postV1NameExecuteCommand(
  args: InferRequestType<(typeof client.v1)[':name:executeCommand']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name:executeCommand'].$post(args, options))
}

export async function getV1ParentDevices(
  args: InferRequestType<(typeof client.v1)[':parent']['devices']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].devices.$get(args, options))
}

export async function getV1ParentRooms(
  args: InferRequestType<(typeof client.v1)[':parent']['rooms']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].rooms.$get(args, options))
}

export async function getV1ParentStructures(
  args: InferRequestType<(typeof client.v1)[':parent']['structures']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].structures.$get(args, options))
}
