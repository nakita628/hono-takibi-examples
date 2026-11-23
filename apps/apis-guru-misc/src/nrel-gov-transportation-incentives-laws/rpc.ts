import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV1OutputFormat(
  args: InferRequestType<(typeof client)['v1.:output_format']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['v1.:output_format'].$get(args, options))
}

export async function getV1CategoryListOutputFormat(
  args: InferRequestType<(typeof client.v1)['category-list.:output_format']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['category-list.:output_format'].$get(args, options))
}

export async function getV1PocsOutputFormat(
  args: InferRequestType<(typeof client.v1)['pocs.:output_format']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['pocs.:output_format'].$get(args, options))
}

export async function getV1IdOutputFormat(
  args: InferRequestType<(typeof client.v1)[':id.:output_format']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':id.:output_format'].$get(args, options))
}
