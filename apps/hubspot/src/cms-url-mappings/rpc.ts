import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getUrlMappings202609UrlMappings(options?: ClientRequestOptions) {
  return await parseResponse(
    client['url-mappings']['2026-09']['url-mappings'].$get(undefined, options),
  )
}

export async function postUrlMappings202609UrlMappings(
  args: InferRequestType<(typeof client)['url-mappings']['2026-09']['url-mappings']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['url-mappings']['2026-09']['url-mappings'].$post(args, options))
}

export async function getUrlMappings202609UrlMappingsId(
  args: InferRequestType<(typeof client)['url-mappings']['2026-09']['url-mappings'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['url-mappings']['2026-09']['url-mappings'][':id'].$get(args, options),
  )
}

export async function deleteUrlMappings202609UrlMappingsId(
  args: InferRequestType<
    (typeof client)['url-mappings']['2026-09']['url-mappings'][':id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['url-mappings']['2026-09']['url-mappings'][':id'].$delete(args, options),
  )
}
