import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getCmsUrlRedirects202609(
  args: InferRequestType<(typeof client.cms)['url-redirects']['2026-09']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cms['url-redirects']['2026-09'].$get(args, options))
}

export async function postCmsUrlRedirects202609(
  args: InferRequestType<(typeof client.cms)['url-redirects']['2026-09']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cms['url-redirects']['2026-09'].$post(args, options))
}

export async function getCmsUrlRedirects202609UrlMappings(options?: ClientRequestOptions) {
  return await parseResponse(
    client.cms['url-redirects']['2026-09']['url-mappings'].$get(undefined, options),
  )
}

export async function postCmsUrlRedirects202609UrlMappings(
  args: InferRequestType<(typeof client.cms)['url-redirects']['2026-09']['url-mappings']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.cms['url-redirects']['2026-09']['url-mappings'].$post(args, options),
  )
}

export async function getCmsUrlRedirects202609UrlMappingsId(
  args: InferRequestType<
    (typeof client.cms)['url-redirects']['2026-09']['url-mappings'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.cms['url-redirects']['2026-09']['url-mappings'][':id'].$get(args, options),
  )
}

export async function deleteCmsUrlRedirects202609UrlMappingsId(
  args: InferRequestType<
    (typeof client.cms)['url-redirects']['2026-09']['url-mappings'][':id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.cms['url-redirects']['2026-09']['url-mappings'][':id'].$delete(args, options),
  )
}

export async function getCmsUrlRedirects202609UrlRedirectId(
  args: InferRequestType<(typeof client.cms)['url-redirects']['2026-09'][':urlRedirectId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.cms['url-redirects']['2026-09'][':urlRedirectId'].$get(args, options),
  )
}

export async function deleteCmsUrlRedirects202609UrlRedirectId(
  args: InferRequestType<
    (typeof client.cms)['url-redirects']['2026-09'][':urlRedirectId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.cms['url-redirects']['2026-09'][':urlRedirectId'].$delete(args, options),
  )
}

export async function patchCmsUrlRedirects202609UrlRedirectId(
  args: InferRequestType<
    (typeof client.cms)['url-redirects']['2026-09'][':urlRedirectId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.cms['url-redirects']['2026-09'][':urlRedirectId'].$patch(args, options),
  )
}
