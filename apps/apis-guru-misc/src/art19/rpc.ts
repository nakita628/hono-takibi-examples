import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getClassificationInclusions(
  args: InferRequestType<typeof client.classification_inclusions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.classification_inclusions.$get(args, options))
}

export async function getClassificationInclusionsId(
  args: InferRequestType<(typeof client.classification_inclusions)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.classification_inclusions[':id'].$get(args, options))
}

export async function getClassifications(
  args: InferRequestType<typeof client.classifications.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.classifications.$get(args, options))
}

export async function getClassificationsId(
  args: InferRequestType<(typeof client.classifications)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.classifications[':id'].$get(args, options))
}

export async function getCredits(
  args: InferRequestType<typeof client.credits.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.credits.$get(args, options))
}

export async function getCreditsId(
  args: InferRequestType<(typeof client.credits)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.credits[':id'].$get(args, options))
}

export async function getEpisodes(
  args: InferRequestType<typeof client.episodes.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.episodes.$get(args, options))
}

export async function getEpisodesId(
  args: InferRequestType<(typeof client.episodes)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.episodes[':id'].$get(args, options))
}

export async function getEpisodesIdNextSibling(
  args: InferRequestType<(typeof client.episodes)[':id']['next_sibling']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.episodes[':id'].next_sibling.$get(args, options))
}

export async function getEpisodesIdPreviousSibling(
  args: InferRequestType<(typeof client.episodes)[':id']['previous_sibling']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.episodes[':id'].previous_sibling.$get(args, options))
}

export async function getImages(
  args: InferRequestType<typeof client.images.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.images.$get(args, options))
}

export async function getImagesId(
  args: InferRequestType<(typeof client.images)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.images[':id'].$get(args, options))
}

export async function getMediaAssets(
  args: InferRequestType<typeof client.media_assets.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.media_assets.$get(args, options))
}

export async function getMediaAssetsId(
  args: InferRequestType<(typeof client.media_assets)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.media_assets[':id'].$get(args, options))
}

export async function getNetworks(
  args: InferRequestType<typeof client.networks.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks.$get(args, options))
}

export async function getNetworksId(
  args: InferRequestType<(typeof client.networks)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':id'].$get(args, options))
}

export async function getPeople(
  args: InferRequestType<typeof client.people.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.people.$get(args, options))
}

export async function getPeopleId(
  args: InferRequestType<(typeof client.people)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.people[':id'].$get(args, options))
}

export async function getSeasons(
  args: InferRequestType<typeof client.seasons.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.seasons.$get(args, options))
}

export async function getSeasonsId(
  args: InferRequestType<(typeof client.seasons)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.seasons[':id'].$get(args, options))
}

export async function getSeries(
  args: InferRequestType<typeof client.series.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.series.$get(args, options))
}

export async function getSeriesId(
  args: InferRequestType<(typeof client.series)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.series[':id'].$get(args, options))
}
