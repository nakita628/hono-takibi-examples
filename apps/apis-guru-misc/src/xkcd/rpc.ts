import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getInfo0Json(options?: ClientRequestOptions) {
  return await parseResponse(client['info.0.json'].$get(undefined, options))
}

export async function getComicIdInfo0Json(
  args: InferRequestType<(typeof client)[':comicId']['info.0.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':comicId']['info.0.json'].$get(args, options))
}
