import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getCivicinfoV2Divisions(
  args: InferRequestType<typeof client.civicinfo.v2.divisions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.civicinfo.v2.divisions.$get(args, options))
}

export async function getCivicinfoV2Elections(
  args: InferRequestType<typeof client.civicinfo.v2.elections.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.civicinfo.v2.elections.$get(args, options))
}

export async function getCivicinfoV2Representatives(
  args: InferRequestType<typeof client.civicinfo.v2.representatives.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.civicinfo.v2.representatives.$get(args, options))
}

export async function getCivicinfoV2RepresentativesOcdId(
  args: InferRequestType<(typeof client.civicinfo.v2.representatives)[':ocdId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.civicinfo.v2.representatives[':ocdId'].$get(args, options))
}

export async function getCivicinfoV2Voterinfo(
  args: InferRequestType<typeof client.civicinfo.v2.voterinfo.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.civicinfo.v2.voterinfo.$get(args, options))
}
