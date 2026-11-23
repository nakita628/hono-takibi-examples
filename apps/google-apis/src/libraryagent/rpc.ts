import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV1Shelves(
  args: InferRequestType<typeof client.v1.shelves.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.shelves.$get(args, options))
}

export async function getV1Name(
  args: InferRequestType<(typeof client.v1)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name'].$get(args, options))
}

export async function postV1NameBorrow(
  args: InferRequestType<(typeof client.v1)[':name:borrow']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name:borrow'].$post(args, options))
}

export async function postV1NameReturn(
  args: InferRequestType<(typeof client.v1)[':name:return']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name:return'].$post(args, options))
}

export async function getV1ParentBooks(
  args: InferRequestType<(typeof client.v1)[':parent']['books']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].books.$get(args, options))
}
