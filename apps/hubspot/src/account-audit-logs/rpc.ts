import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getAccountInfo202609ActivityAuditLogs(
  args: InferRequestType<
    (typeof client)['account-info']['2026-09']['activity']['audit-logs']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['account-info']['2026-09'].activity['audit-logs'].$get(args, options),
  )
}

export async function getAccountInfo202609ActivityLogin(
  args: InferRequestType<(typeof client)['account-info']['2026-09']['activity']['login']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['account-info']['2026-09'].activity.login.$get(args, options))
}

export async function getAccountInfo202609ActivitySecurity(
  args: InferRequestType<
    (typeof client)['account-info']['2026-09']['activity']['security']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['account-info']['2026-09'].activity.security.$get(args, options),
  )
}
