import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getAtozLetterProgrammes(
  args: InferRequestType<(typeof client.atoz)[':letter']['programmes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.atoz[':letter'].programmes.$get(args, options))
}

export async function getCategories(
  args: InferRequestType<typeof client.categories.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.categories.$get(args, options))
}

export async function getCategoriesCategory(
  args: InferRequestType<(typeof client.categories)[':category']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.categories[':category'].$get(args, options))
}

export async function getCategoriesCategoryEpisodes(
  args: InferRequestType<(typeof client.categories)[':category']['episodes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.categories[':category'].episodes.$get(args, options))
}

export async function getCategoriesCategoryHighlights(
  args: InferRequestType<(typeof client.categories)[':category']['highlights']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.categories[':category'].highlights.$get(args, options))
}

export async function getCategoriesCategoryProgrammes(
  args: InferRequestType<(typeof client.categories)[':category']['programmes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.categories[':category'].programmes.$get(args, options))
}

export async function getChannels(
  args: InferRequestType<typeof client.channels.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channels.$get(args, options))
}

export async function getChannelsChannelBroadcasts(
  args: InferRequestType<(typeof client.channels)[':channel']['broadcasts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channels[':channel'].broadcasts.$get(args, options))
}

export async function getChannelsChannelHighlights(
  args: InferRequestType<(typeof client.channels)[':channel']['highlights']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channels[':channel'].highlights.$get(args, options))
}

export async function getChannelsChannelProgrammes(
  args: InferRequestType<(typeof client.channels)[':channel']['programmes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channels[':channel'].programmes.$get(args, options))
}

export async function getChannelsChannelScheduleDate(
  args: InferRequestType<(typeof client.channels)[':channel']['schedule'][':date']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channels[':channel'].schedule[':date'].$get(args, options))
}

export async function getClipsPid(
  args: InferRequestType<(typeof client.clips)[':pid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.clips[':pid'].$get(args, options))
}

export async function getEpisodesPid(
  args: InferRequestType<(typeof client.episodes)[':pid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.episodes[':pid'].$get(args, options))
}

export async function getEpisodesPidNext(
  args: InferRequestType<(typeof client.episodes)[':pid']['next']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.episodes[':pid'].next.$get(args, options))
}

export async function getEpisodesPidPostrolls(
  args: InferRequestType<(typeof client.episodes)[':pid']['postrolls']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.episodes[':pid'].postrolls.$get(args, options))
}

export async function getEpisodesPidPrerolls(
  args: InferRequestType<(typeof client.episodes)[':pid']['prerolls']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.episodes[':pid'].prerolls.$get(args, options))
}

export async function getEpisodesPidRecommendations(
  args: InferRequestType<(typeof client.episodes)[':pid']['recommendations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.episodes[':pid'].recommendations.$get(args, options))
}

export async function getGroupsPopularEpisodes(
  args: InferRequestType<typeof client.groups.popular.episodes.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.groups.popular.episodes.$get(args, options))
}

export async function getGroupsPidEpisodes(
  args: InferRequestType<(typeof client.groups)[':pid']['episodes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.groups[':pid'].episodes.$get(args, options))
}

export async function getHomeHighlights(
  args: InferRequestType<typeof client.home.highlights.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.home.highlights.$get(args, options))
}

export async function getProgrammesPid(
  args: InferRequestType<(typeof client.programmes)[':pid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.programmes[':pid'].$get(args, options))
}

export async function getProgrammesPidEpisodes(
  args: InferRequestType<(typeof client.programmes)[':pid']['episodes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.programmes[':pid'].episodes.$get(args, options))
}

export async function getRegions(
  args: InferRequestType<typeof client.regions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.regions.$get(args, options))
}

export async function getSchemaIblJson(options?: ClientRequestOptions) {
  return await parseResponse(client.schema['ibl.json'].$get(undefined, options))
}

export async function getSearch(
  args: InferRequestType<typeof client.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.search.$get(args, options))
}

export async function getSearchSuggest(
  args: InferRequestType<(typeof client)['search-suggest']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['search-suggest'].$get(args, options))
}

export async function getStatus(options?: ClientRequestOptions) {
  return await parseResponse(client.status.$get(undefined, options))
}

export async function getUserPurchases(
  args: InferRequestType<typeof client.user.purchases.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.purchases.$get(args, options))
}

export async function getUserRecommendations(
  args: InferRequestType<typeof client.user.recommendations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.recommendations.$get(args, options))
}

export async function getUserWatching(
  args: InferRequestType<typeof client.user.watching.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.watching.$get(args, options))
}
