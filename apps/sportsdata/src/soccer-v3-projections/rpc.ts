import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getFormatDfsSlatesByDateDate(
  args: InferRequestType<(typeof client)[':format']['DfsSlatesByDate'][':date']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':format'].DfsSlatesByDate[':date'].$get(args, options))
}

export async function getFormatInjuredPlayersCompetition(
  args: InferRequestType<(typeof client)[':format']['InjuredPlayers'][':competition']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':format'].InjuredPlayers[':competition'].$get(args, options))
}

export async function getFormatPlayerGameProjectionStatsByCompetitionCompetitionDate(
  args: InferRequestType<
    (typeof client)[':format']['PlayerGameProjectionStatsByCompetition'][':competition'][':date']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':format'].PlayerGameProjectionStatsByCompetition[':competition'][':date'].$get(
      args,
      options,
    ),
  )
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

export async function getFormatUpcomingDfsSlatesByCompetitionCompetitionId(
  args: InferRequestType<
    (typeof client)[':format']['UpcomingDfsSlatesByCompetition'][':competitionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':format'].UpcomingDfsSlatesByCompetition[':competitionId'].$get(args, options),
  )
}
