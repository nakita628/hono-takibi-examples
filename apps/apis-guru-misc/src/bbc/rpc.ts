import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function get(options?: ClientRequestOptions) {
  return await parseResponse(client.index.$get(undefined, options))
}

export async function getAvailabilities(
  args: InferRequestType<typeof client.availabilities.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.availabilities.$get(args, options))
}

export async function getBroadcasts(
  args: InferRequestType<typeof client.broadcasts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.broadcasts.$get(args, options))
}

export async function getGroups(
  args: InferRequestType<typeof client.groups.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.groups.$get(args, options))
}

export async function getImages(
  args: InferRequestType<typeof client.images.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.images.$get(args, options))
}

export async function getItems(
  args: InferRequestType<typeof client.items.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.items.$get(args, options))
}

export async function getMasterBrands(
  args: InferRequestType<typeof client.master_brands.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.master_brands.$get(args, options))
}

export async function getPeople(
  args: InferRequestType<typeof client.people.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.people.$get(args, options))
}

export async function getPips(
  args: InferRequestType<typeof client.pips.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pips.$get(args, options))
}

export async function getProgrammeDetails(
  args: InferRequestType<typeof client.programme_details.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.programme_details.$get(args, options))
}

export async function getProgrammes(
  args: InferRequestType<typeof client.programmes.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.programmes.$get(args, options))
}

export async function getPromotions(
  args: InferRequestType<typeof client.promotions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.promotions.$get(args, options))
}

export async function getSchedules(
  args: InferRequestType<typeof client.schedules.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.schedules.$get(args, options))
}

export async function getSchema(options?: ClientRequestOptions) {
  return await parseResponse(client.schema.$get(undefined, options))
}

export async function getServices(
  args: InferRequestType<typeof client.services.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.services.$get(args, options))
}

export async function getV1BrandsPid(
  args: InferRequestType<(typeof client.v1.brands)[':pid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.brands[':pid'].$get(args, options))
}

export async function getV1BrandsPidFranchisesIndex(
  args: InferRequestType<(typeof client.v1.brands)[':pid']['franchises']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.brands[':pid'].franchises.index.$get(args, options))
}

export async function getV1EpisodesPid(
  args: InferRequestType<(typeof client.v1.episodes)[':pid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.episodes[':pid'].$get(args, options))
}

export async function getV1EpisodesPidAncestorsIndex(
  args: InferRequestType<(typeof client.v1.episodes)[':pid']['ancestors']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.episodes[':pid'].ancestors.index.$get(args, options))
}

export async function getV1EpisodesPidFormatsIndex(
  args: InferRequestType<(typeof client.v1.episodes)[':pid']['formats']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.episodes[':pid'].formats.index.$get(args, options))
}

export async function getV1EpisodesPidGenreGroupsIndex(
  args: InferRequestType<(typeof client.v1.episodes)[':pid']['genre_groups']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.episodes[':pid'].genre_groups.index.$get(args, options))
}

export async function getV1ImagesPid(
  args: InferRequestType<(typeof client.v1.images)[':pid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.images[':pid'].$get(args, options))
}

export async function getV1MasterBrandsMbid(
  args: InferRequestType<(typeof client.v1.master_brands)[':mbid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.master_brands[':mbid'].$get(args, options))
}

export async function getV1PromotionsPid(
  args: InferRequestType<(typeof client.v1.promotions)[':pid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.promotions[':pid'].$get(args, options))
}

export async function getVersions(
  args: InferRequestType<typeof client.versions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.versions.$get(args, options))
}
