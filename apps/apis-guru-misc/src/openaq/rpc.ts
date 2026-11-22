import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getFaviconIco(options?: ClientRequestOptions) {
  return await parseResponse(client['favicon.ico'].$get(undefined, options))
}

export async function getPing(options?: ClientRequestOptions) {
  return await parseResponse(client.ping.$get(undefined, options))
}

export async function getV1Cities(
  args: InferRequestType<typeof client.v1.cities.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.cities.$get(args, options))
}

export async function getV1Countries(
  args: InferRequestType<typeof client.v1.countries.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.countries.$get(args, options))
}

export async function getV1CountriesCountryId(
  args: InferRequestType<(typeof client.v1.countries)[':country_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.countries[':country_id'].$get(args, options))
}

export async function getV1Latest(
  args: InferRequestType<typeof client.v1.latest.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.latest.$get(args, options))
}

export async function getV1LatestLocationId(
  args: InferRequestType<(typeof client.v1.latest)[':location_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.latest[':location_id'].$get(args, options))
}

export async function getV1Locations(
  args: InferRequestType<typeof client.v1.locations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.locations.$get(args, options))
}

export async function getV1LocationsLocationId(
  args: InferRequestType<(typeof client.v1.locations)[':location_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.locations[':location_id'].$get(args, options))
}

export async function getV1Measurements(
  args: InferRequestType<typeof client.v1.measurements.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.measurements.$get(args, options))
}

export async function getV1Parameters(
  args: InferRequestType<typeof client.v1.parameters.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.parameters.$get(args, options))
}

export async function getV1Sources(
  args: InferRequestType<typeof client.v1.sources.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.sources.$get(args, options))
}

export async function getV2Averages(
  args: InferRequestType<typeof client.v2.averages.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.averages.$get(args, options))
}

export async function getV2Cities(
  args: InferRequestType<typeof client.v2.cities.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.cities.$get(args, options))
}

export async function getV2Countries(
  args: InferRequestType<typeof client.v2.countries.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.countries.$get(args, options))
}

export async function getV2CountriesCountryId(
  args: InferRequestType<(typeof client.v2.countries)[':country_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.countries[':country_id'].$get(args, options))
}

export async function getV2Latest(
  args: InferRequestType<typeof client.v2.latest.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.latest.$get(args, options))
}

export async function getV2LatestLocationId(
  args: InferRequestType<(typeof client.v2.latest)[':location_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.latest[':location_id'].$get(args, options))
}

export async function getV2Locations(
  args: InferRequestType<typeof client.v2.locations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.locations.$get(args, options))
}

export async function getV2LocationsTilesMobileGeneralizedTilesJson(
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.locations.tiles['mobile-generalized']['tiles.json'].$get(undefined, options),
  )
}

export async function getV2LocationsTilesMobileGeneralizedZXYPbf(
  args: InferRequestType<
    (typeof client.v2.locations.tiles)['mobile-generalized'][':z'][':x'][':y.pbf']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.locations.tiles['mobile-generalized'][':z'][':x'][':y.pbf'].$get(args, options),
  )
}

export async function getV2LocationsTilesMobileTilesJson(options?: ClientRequestOptions) {
  return await parseResponse(
    client.v2.locations.tiles.mobile['tiles.json'].$get(undefined, options),
  )
}

export async function getV2LocationsTilesMobileZXYPbf(
  args: InferRequestType<(typeof client.v2.locations.tiles.mobile)[':z'][':x'][':y.pbf']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.locations.tiles.mobile[':z'][':x'][':y.pbf'].$get(args, options),
  )
}

export async function getV2LocationsTilesTilesJson(options?: ClientRequestOptions) {
  return await parseResponse(client.v2.locations.tiles['tiles.json'].$get(undefined, options))
}

export async function getV2LocationsTilesViewer(options?: ClientRequestOptions) {
  return await parseResponse(client.v2.locations.tiles.viewer.$get(undefined, options))
}

export async function getV2LocationsTilesZXYPbf(
  args: InferRequestType<(typeof client.v2.locations.tiles)[':z'][':x'][':y.pbf']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.locations.tiles[':z'][':x'][':y.pbf'].$get(args, options))
}

export async function getV2LocationsLocationId(
  args: InferRequestType<(typeof client.v2.locations)[':location_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.locations[':location_id'].$get(args, options))
}

export async function getV2Manufacturers(options?: ClientRequestOptions) {
  return await parseResponse(client.v2.manufacturers.$get(undefined, options))
}

export async function getV2Measurements(
  args: InferRequestType<typeof client.v2.measurements.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.measurements.$get(args, options))
}

export async function getV2Models(options?: ClientRequestOptions) {
  return await parseResponse(client.v2.models.$get(undefined, options))
}

export async function getV2Parameters(
  args: InferRequestType<typeof client.v2.parameters.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.parameters.$get(args, options))
}

export async function getV2Projects(
  args: InferRequestType<typeof client.v2.projects.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.projects.$get(args, options))
}

export async function getV2ProjectsProjectId(
  args: InferRequestType<(typeof client.v2.projects)[':project_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.projects[':project_id'].$get(args, options))
}

export async function getV2Sources(
  args: InferRequestType<typeof client.v2.sources.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.sources.$get(args, options))
}

export async function getV2SourcesReadmeSlug(
  args: InferRequestType<(typeof client.v2.sources.readme)[':slug']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.sources.readme[':slug'].$get(args, options))
}

export async function getV2Summary(options?: ClientRequestOptions) {
  return await parseResponse(client.v2.summary.$get(undefined, options))
}
