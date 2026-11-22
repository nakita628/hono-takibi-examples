import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getFormatCurrentSeason(
  args: InferRequestType<(typeof client)[':format']['CurrentSeason']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':format'].CurrentSeason.$get(args, options))
}

export async function getFormatDfsSlatesByTournamentTournamentid(
  args: InferRequestType<
    (typeof client)[':format']['DfsSlatesByTournament'][':tournamentid']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':format'].DfsSlatesByTournament[':tournamentid'].$get(args, options),
  )
}

export async function getFormatInjuries(
  args: InferRequestType<(typeof client)[':format']['Injuries']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':format'].Injuries.$get(args, options))
}

export async function getFormatInjuriesByHistorical(
  args: InferRequestType<(typeof client)[':format']['InjuriesByHistorical']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':format'].InjuriesByHistorical.$get(args, options))
}

export async function getFormatLeaderboardTournamentid(
  args: InferRequestType<(typeof client)[':format']['Leaderboard'][':tournamentid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':format'].Leaderboard[':tournamentid'].$get(args, options))
}

export async function getFormatNews(
  args: InferRequestType<(typeof client)[':format']['News']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':format'].News.$get(args, options))
}

export async function getFormatNewsByDateDate(
  args: InferRequestType<(typeof client)[':format']['NewsByDate'][':date']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':format'].NewsByDate[':date'].$get(args, options))
}

export async function getFormatNewsByPlayerIDPlayerid(
  args: InferRequestType<(typeof client)[':format']['NewsByPlayerID'][':playerid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':format'].NewsByPlayerID[':playerid'].$get(args, options))
}

export async function getFormatPlayerPlayerid(
  args: InferRequestType<(typeof client)[':format']['Player'][':playerid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':format'].Player[':playerid'].$get(args, options))
}

export async function getFormatPlayerSeasonStatsSeason(
  args: InferRequestType<(typeof client)[':format']['PlayerSeasonStats'][':season']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':format'].PlayerSeasonStats[':season'].$get(args, options))
}

export async function getFormatPlayerTournamentProjectionStatsTournamentid(
  args: InferRequestType<
    (typeof client)[':format']['PlayerTournamentProjectionStats'][':tournamentid']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':format'].PlayerTournamentProjectionStats[':tournamentid'].$get(args, options),
  )
}

export async function getFormatPlayerTournamentStatsByPlayerTournamentidPlayerid(
  args: InferRequestType<
    (typeof client)[':format']['PlayerTournamentStatsByPlayer'][':tournamentid'][':playerid']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':format'].PlayerTournamentStatsByPlayer[':tournamentid'][':playerid'].$get(
      args,
      options,
    ),
  )
}

export async function getFormatPlayers(
  args: InferRequestType<(typeof client)[':format']['Players']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':format'].Players.$get(args, options))
}

export async function getFormatTournaments(
  args: InferRequestType<(typeof client)[':format']['Tournaments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':format'].Tournaments.$get(args, options))
}

export async function getFormatTournamentsSeason(
  args: InferRequestType<(typeof client)[':format']['Tournaments'][':season']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':format'].Tournaments[':season'].$get(args, options))
}
