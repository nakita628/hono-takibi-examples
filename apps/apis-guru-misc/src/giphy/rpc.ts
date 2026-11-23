import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getGifs(
  args: InferRequestType<typeof client.gifs.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gifs.$get(args, options))
}

export async function getGifsRandom(
  args: InferRequestType<typeof client.gifs.random.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gifs.random.$get(args, options))
}

export async function getGifsSearch(
  args: InferRequestType<typeof client.gifs.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gifs.search.$get(args, options))
}

export async function getGifsTranslate(
  args: InferRequestType<typeof client.gifs.translate.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gifs.translate.$get(args, options))
}

export async function getGifsTrending(
  args: InferRequestType<typeof client.gifs.trending.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gifs.trending.$get(args, options))
}

export async function getGifsGifId(
  args: InferRequestType<(typeof client.gifs)[':gifId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gifs[':gifId'].$get(args, options))
}

export async function getStickersRandom(
  args: InferRequestType<typeof client.stickers.random.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stickers.random.$get(args, options))
}

export async function getStickersSearch(
  args: InferRequestType<typeof client.stickers.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stickers.search.$get(args, options))
}

export async function getStickersTranslate(
  args: InferRequestType<typeof client.stickers.translate.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stickers.translate.$get(args, options))
}

export async function getStickersTrending(
  args: InferRequestType<typeof client.stickers.trending.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stickers.trending.$get(args, options))
}
