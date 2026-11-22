import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV1Name(
  args: InferRequestType<(typeof client.v1)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name'].$get(args, options))
}

export async function deleteV1Name(
  args: InferRequestType<(typeof client.v1)[':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name'].$delete(args, options))
}

export async function patchV1Name(
  args: InferRequestType<(typeof client.v1)[':name']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name'].$patch(args, options))
}

export async function getV1ParentProductCertifications(
  args: InferRequestType<(typeof client.v1)[':parent']['productCertifications']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].productCertifications.$get(args, options))
}

export async function getV1ParentProducts(
  args: InferRequestType<(typeof client.v1)[':parent']['products']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].products.$get(args, options))
}

export async function getV1ParentProductsName(
  args: InferRequestType<(typeof client.v1)[':parent']['products'][':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].products[':name'].$get(args, options))
}

export async function putV1ParentProductsName(
  args: InferRequestType<(typeof client.v1)[':parent']['products'][':name']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].products[':name'].$put(args, options))
}

export async function deleteV1ParentProductsName(
  args: InferRequestType<(typeof client.v1)[':parent']['products'][':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].products[':name'].$delete(args, options))
}
