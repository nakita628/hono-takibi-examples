import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV1beta1ResourceCatalogsSearch(
  args: InferRequestType<(typeof client.v1beta1)[':resource']['catalogs:search']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':resource']['catalogs:search'].$get(args, options))
}

export async function getV1beta1ResourceProductsSearch(
  args: InferRequestType<(typeof client.v1beta1)[':resource']['products:search']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':resource']['products:search'].$get(args, options))
}

export async function getV1beta1ResourceVersionsSearch(
  args: InferRequestType<(typeof client.v1beta1)[':resource']['versions:search']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':resource']['versions:search'].$get(args, options))
}
