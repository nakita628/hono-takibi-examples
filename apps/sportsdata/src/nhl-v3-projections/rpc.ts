import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getFormatDfsSlatesByDateDate(
  args: InferRequestType<(typeof client)[':format']['DfsSlatesByDate'][':date']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':format'].DfsSlatesByDate[':date'].$get(args, options))
}

export async function getFormatInjuredPlayers(
  args: InferRequestType<(typeof client)[':format']['InjuredPlayers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':format'].InjuredPlayers.$get(args, options))
}

export async function getFormatPlayerGameProjectionStatsByDateDate(
  args: InferRequestType<
    (typeof client)[':format']['PlayerGameProjectionStatsByDate'][':date']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':format'].PlayerGameProjectionStatsByDate[':date'].$get(args, options),
  )
}

export async function getFormatPlayerGameProjectionStatsByPlayerDatePlayerid(
  args: InferRequestType<
    (typeof client)[':format']['PlayerGameProjectionStatsByPlayer'][':date'][':playerid']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':format'].PlayerGameProjectionStatsByPlayer[':date'][':playerid'].$get(args, options),
  )
}

export async function getFormatStartingGoaltendersByDateDate(
  args: InferRequestType<(typeof client)[':format']['StartingGoaltendersByDate'][':date']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':format'].StartingGoaltendersByDate[':date'].$get(args, options),
  )
}
