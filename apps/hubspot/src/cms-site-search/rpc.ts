import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getCmsSiteSearch202609IndexedDataContentId(
  args: InferRequestType<
    (typeof client.cms)['site-search']['2026-09']['indexed-data'][':contentId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.cms['site-search']['2026-09']['indexed-data'][':contentId'].$get(args, options),
  )
}

export async function getCmsSiteSearch202609Search(
  args: InferRequestType<(typeof client.cms)['site-search']['2026-09']['search']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cms['site-search']['2026-09'].search.$get(args, options))
}
