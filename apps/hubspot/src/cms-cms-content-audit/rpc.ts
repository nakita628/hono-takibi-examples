import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getCmsAuditLogs202609(
  args: InferRequestType<(typeof client.cms)['audit-logs']['2026-09']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cms['audit-logs']['2026-09'].$get(args, options))
}

export async function postCmsAuditLogs202609Export(
  args: InferRequestType<(typeof client.cms)['audit-logs']['2026-09']['export']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cms['audit-logs']['2026-09'].export.$post(args, options))
}
