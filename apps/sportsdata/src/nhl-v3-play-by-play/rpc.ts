import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getFormatPlayByPlayGameid(
  args: InferRequestType<(typeof client)[':format']['PlayByPlay'][':gameid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':format'].PlayByPlay[':gameid'].$get(args, options))
}

export async function getFormatPlayByPlayDeltaDateMinutes(
  args: InferRequestType<
    (typeof client)[':format']['PlayByPlayDelta'][':date'][':minutes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':format'].PlayByPlayDelta[':date'][':minutes'].$get(args, options),
  )
}
