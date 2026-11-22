import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getFormatAreAnyGamesInProgress(
  args: InferRequestType<(typeof client)[':format']['AreAnyGamesInProgress']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':format'].AreAnyGamesInProgress.$get(args, options))
}

export async function getFormatCurrentSeason(
  args: InferRequestType<(typeof client)[':format']['CurrentSeason']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':format'].CurrentSeason.$get(args, options))
}

export async function getFormatGamesSeason(
  args: InferRequestType<(typeof client)[':format']['Games'][':season']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':format'].Games[':season'].$get(args, options))
}

export async function getFormatGamesByDateDate(
  args: InferRequestType<(typeof client)[':format']['GamesByDate'][':date']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':format'].GamesByDate[':date'].$get(args, options))
}

export async function getFormatInjuredPlayers(
  args: InferRequestType<(typeof client)[':format']['InjuredPlayers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':format'].InjuredPlayers.$get(args, options))
}

export async function getFormatLeagueHierarchy(
  args: InferRequestType<(typeof client)[':format']['LeagueHierarchy']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':format'].LeagueHierarchy.$get(args, options))
}

export async function getFormatPlayerPlayerid(
  args: InferRequestType<(typeof client)[':format']['Player'][':playerid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':format'].Player[':playerid'].$get(args, options))
}

export async function getFormatPlayers(
  args: InferRequestType<(typeof client)[':format']['Players']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':format'].Players.$get(args, options))
}

export async function getFormatPlayersTeam(
  args: InferRequestType<(typeof client)[':format']['Players'][':team']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':format'].Players[':team'].$get(args, options))
}

export async function getFormatStadiums(
  args: InferRequestType<(typeof client)[':format']['Stadiums']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':format'].Stadiums.$get(args, options))
}

export async function getFormatTeamGameStatsByDateDate(
  args: InferRequestType<(typeof client)[':format']['TeamGameStatsByDate'][':date']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':format'].TeamGameStatsByDate[':date'].$get(args, options))
}

export async function getFormatTeamGameStatsBySeasonSeasonTeamidNumberofgames(
  args: InferRequestType<
    (typeof client)[':format']['TeamGameStatsBySeason'][':season'][':teamid'][':numberofgames']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':format'].TeamGameStatsBySeason[':season'][':teamid'][':numberofgames'].$get(
      args,
      options,
    ),
  )
}

export async function getFormatTeamScheduleSeasonTeam(
  args: InferRequestType<(typeof client)[':format']['TeamSchedule'][':season'][':team']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':format'].TeamSchedule[':season'][':team'].$get(args, options))
}

export async function getFormatTeamSeasonStatsSeason(
  args: InferRequestType<(typeof client)[':format']['TeamSeasonStats'][':season']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':format'].TeamSeasonStats[':season'].$get(args, options))
}

export async function getFormatTournamentSeason(
  args: InferRequestType<(typeof client)[':format']['Tournament'][':season']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':format'].Tournament[':season'].$get(args, options))
}

export async function getFormatTeams(
  args: InferRequestType<(typeof client)[':format']['teams']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':format'].teams.$get(args, options))
}
