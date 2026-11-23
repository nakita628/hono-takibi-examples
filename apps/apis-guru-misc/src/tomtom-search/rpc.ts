import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getSearchVersionNumberAdditionalDataExt(
  args: InferRequestType<(typeof client.search)[':versionNumber']['additionalData.{ext}']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.search[':versionNumber']['additionalData.{ext}'].$get(args, options),
  )
}

export async function getSearchVersionNumberCSCategoryExt(
  args: InferRequestType<(typeof client.search)[':versionNumber']['cS'][':category.{ext}']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.search[':versionNumber'].cS[':category.{ext}'].$get(args, options),
  )
}

export async function getSearchVersionNumberCategorySearchQueryExt(
  args: InferRequestType<
    (typeof client.search)[':versionNumber']['categorySearch'][':query.{ext}']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.search[':versionNumber'].categorySearch[':query.{ext}'].$get(args, options),
  )
}

export async function getSearchVersionNumberGeocodeQueryExt(
  args: InferRequestType<
    (typeof client.search)[':versionNumber']['geocode'][':query.{ext}']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.search[':versionNumber'].geocode[':query.{ext}'].$get(args, options),
  )
}

export async function getSearchVersionNumberGeometryFilterExt(
  args: InferRequestType<(typeof client.search)[':versionNumber']['geometryFilter.{ext}']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.search[':versionNumber']['geometryFilter.{ext}'].$get(args, options),
  )
}

export async function postSearchVersionNumberGeometryFilterExt(
  args: InferRequestType<(typeof client.search)[':versionNumber']['geometryFilter.{ext}']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.search[':versionNumber']['geometryFilter.{ext}'].$post(args, options),
  )
}

export async function getSearchVersionNumberGeometrySearchQueryExt(
  args: InferRequestType<
    (typeof client.search)[':versionNumber']['geometrySearch'][':query.{ext}']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.search[':versionNumber'].geometrySearch[':query.{ext}'].$get(args, options),
  )
}

export async function postSearchVersionNumberGeometrySearchQueryExt(
  args: InferRequestType<
    (typeof client.search)[':versionNumber']['geometrySearch'][':query.{ext}']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.search[':versionNumber'].geometrySearch[':query.{ext}'].$post(args, options),
  )
}

export async function getSearchVersionNumberNearbySearchExt(
  args: InferRequestType<
    (typeof client.search)[':versionNumber']['nearbySearch']['.{ext}']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.search[':versionNumber'].nearbySearch['.{ext}'].$get(args, options),
  )
}

export async function getSearchVersionNumberPoiSearchQueryExt(
  args: InferRequestType<
    (typeof client.search)[':versionNumber']['poiSearch'][':query.{ext}']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.search[':versionNumber'].poiSearch[':query.{ext}'].$get(args, options),
  )
}

export async function getSearchVersionNumberReverseGeocodeCrossStreetPositionExt(
  args: InferRequestType<
    (typeof client.search)[':versionNumber']['reverseGeocode']['crossStreet'][':position.{ext}']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.search[':versionNumber'].reverseGeocode.crossStreet[':position.{ext}'].$get(
      args,
      options,
    ),
  )
}

export async function getSearchVersionNumberReverseGeocodePositionExt(
  args: InferRequestType<
    (typeof client.search)[':versionNumber']['reverseGeocode'][':position.{ext}']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.search[':versionNumber'].reverseGeocode[':position.{ext}'].$get(args, options),
  )
}

export async function getSearchVersionNumberRoutedFilterPositionHeadingExt(
  args: InferRequestType<
    (typeof client.search)[':versionNumber']['routedFilter'][':position'][':heading.{ext}']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.search[':versionNumber'].routedFilter[':position'][':heading.{ext}'].$get(args, options),
  )
}

export async function postSearchVersionNumberRoutedFilterPositionHeadingExt(
  args: InferRequestType<
    (typeof client.search)[':versionNumber']['routedFilter'][':position'][':heading.{ext}']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.search[':versionNumber'].routedFilter[':position'][':heading.{ext}'].$post(
      args,
      options,
    ),
  )
}

export async function getSearchVersionNumberRoutedSearchQueryPositionHeadingExt(
  args: InferRequestType<
    (typeof client.search)[':versionNumber']['routedSearch'][':query'][':position'][':heading.{ext}']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.search[':versionNumber'].routedSearch[':query'][':position'][':heading.{ext}'].$get(
      args,
      options,
    ),
  )
}

export async function getSearchVersionNumberSQueryExt(
  args: InferRequestType<(typeof client.search)[':versionNumber']['s'][':query.{ext}']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.search[':versionNumber'].s[':query.{ext}'].$get(args, options))
}

export async function getSearchVersionNumberSearchQueryExt(
  args: InferRequestType<
    (typeof client.search)[':versionNumber']['search'][':query.{ext}']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.search[':versionNumber'].search[':query.{ext}'].$get(args, options),
  )
}

export async function postSearchVersionNumberSearchAlongRouteQueryExt(
  args: InferRequestType<
    (typeof client.search)[':versionNumber']['searchAlongRoute'][':query.{ext}']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.search[':versionNumber'].searchAlongRoute[':query.{ext}'].$post(args, options),
  )
}

export async function getSearchVersionNumberStructuredGeocodeExt(
  args: InferRequestType<
    (typeof client.search)[':versionNumber']['structuredGeocode.{ext}']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.search[':versionNumber']['structuredGeocode.{ext}'].$get(args, options),
  )
}
