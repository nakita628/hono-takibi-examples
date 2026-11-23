import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getApiV2PodcastsCategories(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.podcasts.categories.$get(undefined, options))
}

export async function getApiV2PodcastsCountries(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.podcasts.countries.$get(undefined, options))
}

export async function postApiV2PodcastsCreate(
  args: InferRequestType<typeof client.api.v2.podcasts.create.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.podcasts.create.$post(args, options))
}

export async function getApiV2PodcastsLanguages(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.podcasts.languages.$get(undefined, options))
}

export async function postApiV2PodcastsSearch(
  args: InferRequestType<typeof client.api.v2.podcasts.search.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.podcasts.search.$post(args, options))
}

export async function getApiV2PodcastsPodcastKey(
  args: InferRequestType<(typeof client.api.v2.podcasts)[':podcastKey']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.podcasts[':podcastKey'].$get(args, options))
}

export async function putApiV2PodcastsPodcastKey(
  args: InferRequestType<(typeof client.api.v2.podcasts)[':podcastKey']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.podcasts[':podcastKey'].$put(args, options))
}

export async function deleteApiV2PodcastsPodcastKey(
  args: InferRequestType<(typeof client.api.v2.podcasts)[':podcastKey']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.podcasts[':podcastKey'].$delete(args, options))
}

export async function getApiV2PodcastsPodcastKeyEpisodes(
  args: InferRequestType<(typeof client.api.v2.podcasts)[':podcastKey']['episodes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.podcasts[':podcastKey'].episodes.$get(args, options))
}

export async function postApiV2PodcastsPodcastKeyEpisodesCreate(
  args: InferRequestType<
    (typeof client.api.v2.podcasts)[':podcastKey']['episodes']['create']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.podcasts[':podcastKey'].episodes.create.$post(args, options),
  )
}

export async function getApiV2PodcastsPodcastKeyEpisodesEpisodeKey(
  args: InferRequestType<
    (typeof client.api.v2.podcasts)[':podcastKey']['episodes'][':episodeKey']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.podcasts[':podcastKey'].episodes[':episodeKey'].$get(args, options),
  )
}

export async function putApiV2PodcastsPodcastKeyEpisodesEpisodeKey(
  args: InferRequestType<
    (typeof client.api.v2.podcasts)[':podcastKey']['episodes'][':episodeKey']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.podcasts[':podcastKey'].episodes[':episodeKey'].$put(args, options),
  )
}

export async function deleteApiV2PodcastsPodcastKeyEpisodesEpisodeKey(
  args: InferRequestType<
    (typeof client.api.v2.podcasts)[':podcastKey']['episodes'][':episodeKey']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.podcasts[':podcastKey'].episodes[':episodeKey'].$delete(args, options),
  )
}

export async function getApiV2StationsCountries(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.stations.countries.$get(undefined, options))
}

export async function getApiV2StationsGenres(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.stations.genres.$get(undefined, options))
}

export async function getApiV2StationsLanguages(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.stations.languages.$get(undefined, options))
}

export async function getApiV2StationsList(
  args: InferRequestType<typeof client.api.v2.stations.list.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.stations.list.$get(args, options))
}

export async function postApiV2StationsSearch(
  args: InferRequestType<typeof client.api.v2.stations.search.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.stations.search.$post(args, options))
}
