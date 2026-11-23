import type { ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getCommercePaymentAccounts202609Status(options?: ClientRequestOptions) {
  return await parseResponse(
    client.commerce['payment-accounts']['2026-09'].status.$get(undefined, options),
  )
}
