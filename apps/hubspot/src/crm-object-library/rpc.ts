import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getCrmObjectLibrary202609Enablement(options?: ClientRequestOptions) {
  return await parseResponse(
    client.crm['object-library']['2026-09'].enablement.$get(undefined, options),
  )
}

export async function getCrmObjectLibrary202609EnablementObjectTypeId(
  args: InferRequestType<
    (typeof client.crm)['object-library']['2026-09']['enablement'][':objectTypeId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm['object-library']['2026-09'].enablement[':objectTypeId'].$get(args, options),
  )
}
