import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getApiV1Games(
  args: InferRequestType<typeof client.api.v1.games.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.games.$get(args, options))
}

export async function getApiV1Games32881(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.games['32881'].$get(undefined, options))
}

export async function getApiV1Players(
  args: InferRequestType<typeof client.api.v1.players.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.players.$get(args, options))
}

export async function getApiV1Players237(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.players['237'].$get(undefined, options))
}

export async function getApiV1Stats(
  args: InferRequestType<typeof client.api.v1.stats.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.stats.$get(args, options))
}

export async function getApiV1Teams(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.teams.$get(undefined, options))
}

export async function getApiV1Teams1(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.teams['1'].$get(undefined, options))
}
