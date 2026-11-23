import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getContentproSearch(
  args: InferRequestType<(typeof client)['contentpro-search']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['contentpro-search'].$get(args, options))
}

export async function postContentproSimilarText(
  args: InferRequestType<(typeof client)['contentpro-similar-text']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['contentpro-similar-text'].$post(args, options))
}

export async function getSearch(
  args: InferRequestType<typeof client.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.search.$get(args, options))
}

export async function getSimilar(
  args: InferRequestType<typeof client.similar.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.similar.$get(args, options))
}
