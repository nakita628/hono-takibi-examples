import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postRefresh(
  args: InferRequestType<typeof client.refresh.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.refresh.$post(args, options))
}

export async function getEntities(
  args: InferRequestType<typeof client.entities.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.entities.$get(args, options))
}

export async function getEntitiesByUidUid(
  args: InferRequestType<(typeof client.entities)['by-uid'][':uid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.entities['by-uid'][':uid'].$get(args, options))
}

export async function deleteEntitiesByUidUid(
  args: InferRequestType<(typeof client.entities)['by-uid'][':uid']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.entities['by-uid'][':uid'].$delete(args, options))
}

export async function getEntitiesByNameKindNamespaceName(
  args: InferRequestType<
    (typeof client.entities)['by-name'][':kind'][':namespace'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.entities['by-name'][':kind'][':namespace'][':name'].$get(args, options),
  )
}

export async function getEntitiesByNameKindNamespaceNameAncestry(
  args: InferRequestType<
    (typeof client.entities)['by-name'][':kind'][':namespace'][':name']['ancestry']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.entities['by-name'][':kind'][':namespace'][':name'].ancestry.$get(args, options),
  )
}

export async function postEntitiesByRefs(
  args: InferRequestType<(typeof client.entities)['by-refs']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.entities['by-refs'].$post(args, options))
}

export async function getEntitiesByQuery(
  args: InferRequestType<(typeof client.entities)['by-query']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.entities['by-query'].$get(args, options))
}

export async function postEntitiesByQuery(
  args: InferRequestType<(typeof client.entities)['by-query']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.entities['by-query'].$post(args, options))
}

export async function getEntityFacets(
  args: InferRequestType<(typeof client)['entity-facets']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['entity-facets'].$get(args, options))
}

export async function postEntityFacets(
  args: InferRequestType<(typeof client)['entity-facets']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['entity-facets'].$post(args, options))
}

export async function getLocations(options?: ClientRequestOptions) {
  return await parseResponse(client.locations.$get(undefined, options))
}

export async function postLocations(
  args: InferRequestType<typeof client.locations.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.locations.$post(args, options))
}

export async function postLocationsByQuery(
  args: InferRequestType<(typeof client.locations)['by-query']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.locations['by-query'].$post(args, options))
}

export async function getLocationsId(
  args: InferRequestType<(typeof client.locations)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.locations[':id'].$get(args, options))
}

export async function putLocationsId(
  args: InferRequestType<(typeof client.locations)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.locations[':id'].$put(args, options))
}

export async function deleteLocationsId(
  args: InferRequestType<(typeof client.locations)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.locations[':id'].$delete(args, options))
}

export async function getLocationsByEntityKindNamespaceName(
  args: InferRequestType<
    (typeof client.locations)['by-entity'][':kind'][':namespace'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.locations['by-entity'][':kind'][':namespace'][':name'].$get(args, options),
  )
}

export async function postAnalyzeLocation(
  args: InferRequestType<(typeof client)['analyze-location']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['analyze-location'].$post(args, options))
}

export async function postValidateEntity(
  args: InferRequestType<(typeof client)['validate-entity']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['validate-entity'].$post(args, options))
}
