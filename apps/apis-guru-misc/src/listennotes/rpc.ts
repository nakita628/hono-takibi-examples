import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getBestPodcasts(
  args: InferRequestType<typeof client.best_podcasts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.best_podcasts.$get(args, options))
}

export async function getCuratedPodcasts(
  args: InferRequestType<typeof client.curated_podcasts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.curated_podcasts.$get(args, options))
}

export async function getCuratedPodcastsId(
  args: InferRequestType<(typeof client.curated_podcasts)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.curated_podcasts[':id'].$get(args, options))
}

export async function postEpisodes(
  args: InferRequestType<typeof client.episodes.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.episodes.$post(args, options))
}

export async function getEpisodesId(
  args: InferRequestType<(typeof client.episodes)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.episodes[':id'].$get(args, options))
}

export async function getEpisodesIdRecommendations(
  args: InferRequestType<(typeof client.episodes)[':id']['recommendations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.episodes[':id'].recommendations.$get(args, options))
}

export async function getGenres(
  args: InferRequestType<typeof client.genres.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.genres.$get(args, options))
}

export async function getJustListen(
  args: InferRequestType<typeof client.just_listen.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.just_listen.$get(args, options))
}

export async function getLanguages(
  args: InferRequestType<typeof client.languages.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.languages.$get(args, options))
}

export async function getPlaylists(
  args: InferRequestType<typeof client.playlists.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.playlists.$get(args, options))
}

export async function getPlaylistsId(
  args: InferRequestType<(typeof client.playlists)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.playlists[':id'].$get(args, options))
}

export async function postPodcasts(
  args: InferRequestType<typeof client.podcasts.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.podcasts.$post(args, options))
}

export async function postPodcastsSubmit(
  args: InferRequestType<typeof client.podcasts.submit.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.podcasts.submit.$post(args, options))
}

export async function getPodcastsId(
  args: InferRequestType<(typeof client.podcasts)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.podcasts[':id'].$get(args, options))
}

export async function deletePodcastsId(
  args: InferRequestType<(typeof client.podcasts)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.podcasts[':id'].$delete(args, options))
}

export async function getPodcastsIdAudience(
  args: InferRequestType<(typeof client.podcasts)[':id']['audience']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.podcasts[':id'].audience.$get(args, options))
}

export async function getPodcastsIdRecommendations(
  args: InferRequestType<(typeof client.podcasts)[':id']['recommendations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.podcasts[':id'].recommendations.$get(args, options))
}

export async function getRegions(
  args: InferRequestType<typeof client.regions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.regions.$get(args, options))
}

export async function getRelatedSearches(
  args: InferRequestType<typeof client.related_searches.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.related_searches.$get(args, options))
}

export async function getSearch(
  args: InferRequestType<typeof client.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.search.$get(args, options))
}

export async function getSpellcheck(
  args: InferRequestType<typeof client.spellcheck.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.spellcheck.$get(args, options))
}

export async function getTrendingSearches(
  args: InferRequestType<typeof client.trending_searches.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.trending_searches.$get(args, options))
}

export async function getTypeahead(
  args: InferRequestType<typeof client.typeahead.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.typeahead.$get(args, options))
}
