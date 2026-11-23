import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getFormatDepthCharts(
  args: InferRequestType<(typeof client)[':format']['DepthCharts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':format'].DepthCharts.$get(args, options))
}

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

export async function getFormatPlayerSeasonProjectionStatsSeason(
  args: InferRequestType<
    (typeof client)[':format']['PlayerSeasonProjectionStats'][':season']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':format'].PlayerSeasonProjectionStats[':season'].$get(args, options),
  )
}

export async function getFormatStartingLineupsByDateDate(
  args: InferRequestType<(typeof client)[':format']['StartingLineupsByDate'][':date']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':format'].StartingLineupsByDate[':date'].$get(args, options))
}
