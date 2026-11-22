import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getAdvancedAsyncFormat(
  args: InferRequestType<(typeof client.advanced.async)[':format']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.advanced.async[':format'].$get(args, options))
}

export async function getAdvancedFormat(
  args: InferRequestType<(typeof client.advanced)[':format']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.advanced[':format'].$get(args, options))
}

export async function getBasicFormat(
  args: InferRequestType<(typeof client.basic)[':format']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.basic[':format'].$get(args, options))
}

export async function getStandardFormat(
  args: InferRequestType<(typeof client.standard)[':format']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.standard[':format'].$get(args, options))
}
