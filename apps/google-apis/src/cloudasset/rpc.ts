import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV1p7beta1Name(
  args: InferRequestType<(typeof client.v1p7beta1)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1p7beta1[':name'].$get(args, options))
}

export async function postV1p7beta1ParentExportAssets(
  args: InferRequestType<(typeof client.v1p7beta1)[':parent:exportAssets']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1p7beta1[':parent:exportAssets'].$post(args, options))
}
