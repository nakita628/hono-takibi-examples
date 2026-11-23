import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getBusinessUnitsPublic202609BusinessUnitsUserUserId(
  args: InferRequestType<
    (typeof client)['business-units']['public']['2026-09']['business-units']['user'][':userId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['business-units'].public['2026-09']['business-units'].user[':userId'].$get(
      args,
      options,
    ),
  )
}
