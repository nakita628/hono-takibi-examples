import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getCmsDomains202609(
  args: InferRequestType<(typeof client.cms.domains)['2026-09']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cms.domains['2026-09'].$get(args, options))
}

export async function getCmsDomains202609DomainId(
  args: InferRequestType<(typeof client.cms.domains)['2026-09'][':domainId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cms.domains['2026-09'][':domainId'].$get(args, options))
}
