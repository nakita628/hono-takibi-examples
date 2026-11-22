import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postSimilarityByContent(
  args: InferRequestType<typeof client.similarity.by_content.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.similarity.by_content.$post(args, options))
}

export async function getSimilarityBySong(
  args: InferRequestType<typeof client.similarity.by_song.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.similarity.by_song.$get(args, options))
}

export async function getSongSearch(
  args: InferRequestType<typeof client.song.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.song.search.$get(args, options))
}
