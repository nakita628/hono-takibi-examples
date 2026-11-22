import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV1EmojiAutoEmojify(
  args: InferRequestType<(typeof client.v1.emoji)['auto-emojify']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.emoji['auto-emojify'].$get(args, options))
}

export async function getV1EmojiSuggestions(
  args: InferRequestType<typeof client.v1.emoji.suggestions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.emoji.suggestions.$get(args, options))
}

export async function getV1ImagesAnimate(
  args: InferRequestType<typeof client.v1.images.animate.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.images.animate.$get(args, options))
}

export async function getV1ImagesLogo(
  args: InferRequestType<typeof client.v1.images.logo.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.images.logo.$get(args, options))
}

export async function getV1ImagesQuote(
  args: InferRequestType<typeof client.v1.images.quote.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.images.quote.$get(args, options))
}

export async function getV1LinkCta(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.link.cta.$get(undefined, options))
}

export async function getV1LinkShortLink(
  args: InferRequestType<(typeof client.v1.link)['short-link']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.link['short-link'].$get(args, options))
}

export async function getV1SearchTrending(
  args: InferRequestType<typeof client.v1.search.trending.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.search.trending.$get(args, options))
}

export async function getV1StatsAutoHashtag(
  args: InferRequestType<(typeof client.v1.stats)['auto-hashtag']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.stats['auto-hashtag'].$get(args, options))
}

export async function getV1StatsHashtagSuggestions(
  args: InferRequestType<(typeof client.v1.stats)['hashtag-suggestions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.stats['hashtag-suggestions'].$get(args, options))
}

export async function getV1StatsHistoryHashtag(
  args: InferRequestType<(typeof client.v1.stats.history)[':hashtag']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.stats.history[':hashtag'].$get(args, options))
}

export async function getV1StatsMultipleHashtags(
  args: InferRequestType<(typeof client.v1.stats)['multiple-hashtags']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.stats['multiple-hashtags'].$get(args, options))
}

export async function getV2InstagramHashtagsCleaner(
  args: InferRequestType<(typeof client.v2.instagram)['hashtags-cleaner']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.instagram['hashtags-cleaner'].$get(args, options))
}
