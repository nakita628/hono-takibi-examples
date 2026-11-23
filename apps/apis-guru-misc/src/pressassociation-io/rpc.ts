import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getAsset(
  args: InferRequestType<typeof client.asset.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.asset.$get(args, options))
}

export async function getAssetAssetId(
  args: InferRequestType<(typeof client.asset)[':assetId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.asset[':assetId'].$get(args, options))
}

export async function getAssetAssetIdContributor(
  args: InferRequestType<(typeof client.asset)[':assetId']['contributor']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.asset[':assetId'].contributor.$get(args, options))
}

export async function getCatalogue(options?: ClientRequestOptions) {
  return await parseResponse(client.catalogue.$get(undefined, options))
}

export async function getCatalogueCatalogueId(
  args: InferRequestType<(typeof client.catalogue)[':catalogueId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.catalogue[':catalogueId'].$get(args, options))
}

export async function getCatalogueCatalogueIdAsset(
  args: InferRequestType<(typeof client.catalogue)[':catalogueId']['asset']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.catalogue[':catalogueId'].asset.$get(args, options))
}

export async function getCatalogueCatalogueIdAssetAssetId(
  args: InferRequestType<(typeof client.catalogue)[':catalogueId']['asset'][':assetId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.catalogue[':catalogueId'].asset[':assetId'].$get(args, options))
}

export async function getChannel(
  args: InferRequestType<typeof client.channel.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channel.$get(args, options))
}

export async function getChannelChannelId(
  args: InferRequestType<(typeof client.channel)[':channelId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channel[':channelId'].$get(args, options))
}

export async function getContributor(
  args: InferRequestType<typeof client.contributor.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.contributor.$get(args, options))
}

export async function getContributorContributorId(
  args: InferRequestType<(typeof client.contributor)[':contributorId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.contributor[':contributorId'].$get(args, options))
}

export async function getFeature(
  args: InferRequestType<typeof client.feature.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.feature.$get(args, options))
}

export async function getFeatureType(options?: ClientRequestOptions) {
  return await parseResponse(client['feature-type'].$get(undefined, options))
}

export async function getFeatureFeatureId(
  args: InferRequestType<(typeof client.feature)[':featureId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.feature[':featureId'].$get(args, options))
}

export async function getPlatform(
  args: InferRequestType<typeof client.platform.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.platform.$get(args, options))
}

export async function getPlatformPlatformId(
  args: InferRequestType<(typeof client.platform)[':platformId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.platform[':platformId'].$get(args, options))
}

export async function getPlatformPlatformIdRegion(
  args: InferRequestType<(typeof client.platform)[':platformId']['region']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.platform[':platformId'].region.$get(args, options))
}

export async function getSchedule(
  args: InferRequestType<typeof client.schedule.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.schedule.$get(args, options))
}
