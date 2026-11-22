import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getCrmOwners202609(
  args: InferRequestType<(typeof client.crm.owners)['2026-09']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.owners['2026-09'].$get(args, options))
}

export async function getCrmOwners202609OwnerId(
  args: InferRequestType<(typeof client.crm.owners)['2026-09'][':ownerId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.owners['2026-09'][':ownerId'].$get(args, options))
}
