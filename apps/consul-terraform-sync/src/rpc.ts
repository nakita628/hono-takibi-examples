import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV1StatusCluster(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.status.cluster.$get(undefined, options))
}

export async function getV1Health(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.health.$get(undefined, options))
}

export async function getV1Tasks(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.tasks.$get(undefined, options))
}

export async function postV1Tasks(
  args: InferRequestType<typeof client.v1.tasks.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.tasks.$post(args, options))
}

export async function getV1TasksName(
  args: InferRequestType<(typeof client.v1.tasks)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.tasks[':name'].$get(args, options))
}

export async function deleteV1TasksName(
  args: InferRequestType<(typeof client.v1.tasks)[':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.tasks[':name'].$delete(args, options))
}
