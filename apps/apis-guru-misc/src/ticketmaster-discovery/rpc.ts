import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getDiscoveryV2Attractions(
  args: InferRequestType<typeof client.discovery.v2.attractions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.discovery.v2.attractions.$get(args, options))
}

export async function getDiscoveryV2AttractionsId(
  args: InferRequestType<(typeof client.discovery.v2.attractions)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.discovery.v2.attractions[':id'].$get(args, options))
}

export async function getDiscoveryV2Classifications(
  args: InferRequestType<typeof client.discovery.v2.classifications.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.discovery.v2.classifications.$get(args, options))
}

export async function getDiscoveryV2ClassificationsGenresId(
  args: InferRequestType<(typeof client.discovery.v2.classifications.genres)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.discovery.v2.classifications.genres[':id'].$get(args, options))
}

export async function getDiscoveryV2ClassificationsSegmentsId(
  args: InferRequestType<(typeof client.discovery.v2.classifications.segments)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.discovery.v2.classifications.segments[':id'].$get(args, options),
  )
}

export async function getDiscoveryV2ClassificationsSubgenresId(
  args: InferRequestType<(typeof client.discovery.v2.classifications.subgenres)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.discovery.v2.classifications.subgenres[':id'].$get(args, options),
  )
}

export async function getDiscoveryV2ClassificationsId(
  args: InferRequestType<(typeof client.discovery.v2.classifications)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.discovery.v2.classifications[':id'].$get(args, options))
}

export async function getDiscoveryV2Events(
  args: InferRequestType<typeof client.discovery.v2.events.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.discovery.v2.events.$get(args, options))
}

export async function getDiscoveryV2EventsId(
  args: InferRequestType<(typeof client.discovery.v2.events)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.discovery.v2.events[':id'].$get(args, options))
}

export async function getDiscoveryV2EventsIdImages(
  args: InferRequestType<(typeof client.discovery.v2.events)[':id']['images']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.discovery.v2.events[':id'].images.$get(args, options))
}

export async function getDiscoveryV2Suggest(
  args: InferRequestType<typeof client.discovery.v2.suggest.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.discovery.v2.suggest.$get(args, options))
}

export async function getDiscoveryV2Venues(
  args: InferRequestType<typeof client.discovery.v2.venues.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.discovery.v2.venues.$get(args, options))
}

export async function getDiscoveryV2VenuesId(
  args: InferRequestType<(typeof client.discovery.v2.venues)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.discovery.v2.venues[':id'].$get(args, options))
}
