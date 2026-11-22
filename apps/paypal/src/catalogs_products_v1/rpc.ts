import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV1CatalogsProducts(
  args: InferRequestType<typeof client.v1.catalogs.products.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.catalogs.products.$get(args, options))
}

export async function postV1CatalogsProducts(
  args: InferRequestType<typeof client.v1.catalogs.products.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.catalogs.products.$post(args, options))
}

export async function getV1CatalogsProductsProductId(
  args: InferRequestType<(typeof client.v1.catalogs.products)[':product_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.catalogs.products[':product_id'].$get(args, options))
}

export async function patchV1CatalogsProductsProductId(
  args: InferRequestType<(typeof client.v1.catalogs.products)[':product_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.catalogs.products[':product_id'].$patch(args, options))
}
