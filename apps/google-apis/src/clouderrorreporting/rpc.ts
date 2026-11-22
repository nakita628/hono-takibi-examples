import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV1beta1GroupName(
  args: InferRequestType<(typeof client.v1beta1)[':groupName']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':groupName'].$get(args, options))
}

export async function putV1beta1Name(
  args: InferRequestType<(typeof client.v1beta1)[':name']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name'].$put(args, options))
}

export async function getV1beta1ProjectNameEvents(
  args: InferRequestType<(typeof client.v1beta1)[':projectName']['events']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':projectName'].events.$get(args, options))
}

export async function deleteV1beta1ProjectNameEvents(
  args: InferRequestType<(typeof client.v1beta1)[':projectName']['events']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':projectName'].events.$delete(args, options))
}

export async function postV1beta1ProjectNameEventsReport(
  args: InferRequestType<(typeof client.v1beta1)[':projectName']['events:report']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':projectName']['events:report'].$post(args, options))
}

export async function getV1beta1ProjectNameGroupStats(
  args: InferRequestType<(typeof client.v1beta1)[':projectName']['groupStats']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':projectName'].groupStats.$get(args, options))
}
