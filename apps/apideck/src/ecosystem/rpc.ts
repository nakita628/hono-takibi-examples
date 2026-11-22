import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getEcosystemsEcosystemId(
  args: InferRequestType<(typeof client.ecosystems)[':ecosystem_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ecosystems[':ecosystem_id'].$get(args, options))
}

export async function getEcosystemsEcosystemIdCategories(
  args: InferRequestType<(typeof client.ecosystems)[':ecosystem_id']['categories']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ecosystems[':ecosystem_id'].categories.$get(args, options))
}

export async function getEcosystemsEcosystemIdCategoriesId(
  args: InferRequestType<(typeof client.ecosystems)[':ecosystem_id']['categories'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ecosystems[':ecosystem_id'].categories[':id'].$get(args, options),
  )
}

export async function getEcosystemsEcosystemIdCategoriesIdListings(
  args: InferRequestType<
    (typeof client.ecosystems)[':ecosystem_id']['categories'][':id']['listings']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ecosystems[':ecosystem_id'].categories[':id'].listings.$get(args, options),
  )
}

export async function getEcosystemsEcosystemIdCollections(
  args: InferRequestType<(typeof client.ecosystems)[':ecosystem_id']['collections']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ecosystems[':ecosystem_id'].collections.$get(args, options))
}

export async function getEcosystemsEcosystemIdCollectionsId(
  args: InferRequestType<(typeof client.ecosystems)[':ecosystem_id']['collections'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ecosystems[':ecosystem_id'].collections[':id'].$get(args, options),
  )
}

export async function getEcosystemsEcosystemIdCollectionsIdListings(
  args: InferRequestType<
    (typeof client.ecosystems)[':ecosystem_id']['collections'][':id']['listings']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ecosystems[':ecosystem_id'].collections[':id'].listings.$get(args, options),
  )
}

export async function getEcosystemsEcosystemIdListings(
  args: InferRequestType<(typeof client.ecosystems)[':ecosystem_id']['listings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ecosystems[':ecosystem_id'].listings.$get(args, options))
}

export async function getEcosystemsEcosystemIdListingsId(
  args: InferRequestType<(typeof client.ecosystems)[':ecosystem_id']['listings'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ecosystems[':ecosystem_id'].listings[':id'].$get(args, options))
}

export async function getEcosystemsEcosystemIdProducts(
  args: InferRequestType<(typeof client.ecosystems)[':ecosystem_id']['products']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ecosystems[':ecosystem_id'].products.$get(args, options))
}

export async function getEcosystemsEcosystemIdProductsId(
  args: InferRequestType<(typeof client.ecosystems)[':ecosystem_id']['products'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ecosystems[':ecosystem_id'].products[':id'].$get(args, options))
}

export async function getEcosystemsEcosystemIdProductsIdListings(
  args: InferRequestType<
    (typeof client.ecosystems)[':ecosystem_id']['products'][':id']['listings']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ecosystems[':ecosystem_id'].products[':id'].listings.$get(args, options),
  )
}
