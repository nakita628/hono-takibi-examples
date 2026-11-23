import type { ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getAccountInfo202609ApiUsageDailyPrivateApps(options?: ClientRequestOptions) {
  return await parseResponse(
    client['account-info']['2026-09']['api-usage'].daily['private-apps'].$get(undefined, options),
  )
}

export async function getAccountInfo202609Details(options?: ClientRequestOptions) {
  return await parseResponse(client['account-info']['2026-09'].details.$get(undefined, options))
}
