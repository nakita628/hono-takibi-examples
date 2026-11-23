import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getFormatAllStarsSeason(
  args: InferRequestType<(typeof client)[':format']['AllStars'][':season']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':format'].AllStars[':season'].$get(args, options))
}

export async function getFormatAllTeams(
  args: InferRequestType<(typeof client)[':format']['AllTeams']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':format'].AllTeams.$get(args, options))
}

export async function getFormatAreAnyGamesInProgress(
  args: InferRequestType<(typeof client)[':format']['AreAnyGamesInProgress']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':format'].AreAnyGamesInProgress.$get(args, options))
}

export async function getFormatBoxScoreGameid(
  args: InferRequestType<(typeof client)[':format']['BoxScore'][':gameid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':format'].BoxScore[':gameid'].$get(args, options))
}

export async function getFormatBoxScoresDate(
  args: InferRequestType<(typeof client)[':format']['BoxScores'][':date']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':format'].BoxScores[':date'].$get(args, options))
}

export async function getFormatBoxScoresDeltaDateMinutes(
  args: InferRequestType<(typeof client)[':format']['BoxScoresDelta'][':date'][':minutes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':format'].BoxScoresDelta[':date'][':minutes'].$get(args, options),
  )
}

export async function getFormatCurrentSeason(
  args: InferRequestType<(typeof client)[':format']['CurrentSeason']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':format'].CurrentSeason.$get(args, options))
}

export async function getFormatDfsSlatesByDateDate(
  args: InferRequestType<(typeof client)[':format']['DfsSlatesByDate'][':date']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':format'].DfsSlatesByDate[':date'].$get(args, options))
}

export async function getFormatFreeAgents(
  args: InferRequestType<(typeof client)[':format']['FreeAgents']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':format'].FreeAgents.$get(args, options))
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

export async function getFormatPlayerGameStatsByDateDate(
  args: InferRequestType<(typeof client)[':format']['PlayerGameStatsByDate'][':date']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':format'].PlayerGameStatsByDate[':date'].$get(args, options))
}

export async function getFormatPlayerGameStatsByPlayerDatePlayerid(
  args: InferRequestType<
    (typeof client)[':format']['PlayerGameStatsByPlayer'][':date'][':playerid']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':format'].PlayerGameStatsByPlayer[':date'][':playerid'].$get(args, options),
  )
}

export async function getFormatPlayerGameStatsBySeasonSeasonPlayeridNumberofgames(
  args: InferRequestType<
    (typeof client)[':format']['PlayerGameStatsBySeason'][':season'][':playerid'][':numberofgames']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':format'].PlayerGameStatsBySeason[':season'][':playerid'][':numberofgames'].$get(
      args,
      options,
    ),
  )
}

export async function getFormatPlayerSeasonStatsSeason(
  args: InferRequestType<(typeof client)[':format']['PlayerSeasonStats'][':season']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':format'].PlayerSeasonStats[':season'].$get(args, options))
}

export async function getFormatPlayerSeasonStatsByPlayerSeasonPlayerid(
  args: InferRequestType<
    (typeof client)[':format']['PlayerSeasonStatsByPlayer'][':season'][':playerid']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':format'].PlayerSeasonStatsByPlayer[':season'][':playerid'].$get(args, options),
  )
}

export async function getFormatPlayerSeasonStatsByTeamSeasonTeam(
  args: InferRequestType<
    (typeof client)[':format']['PlayerSeasonStatsByTeam'][':season'][':team']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':format'].PlayerSeasonStatsByTeam[':season'][':team'].$get(args, options),
  )
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

export async function getFormatStandingsSeason(
  args: InferRequestType<(typeof client)[':format']['Standings'][':season']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':format'].Standings[':season'].$get(args, options))
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

export async function getFormatTeamSeasonStatsSeason(
  args: InferRequestType<(typeof client)[':format']['TeamSeasonStats'][':season']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':format'].TeamSeasonStats[':season'].$get(args, options))
}

export async function getFormatTeamStatsAllowedByPositionSeason(
  args: InferRequestType<
    (typeof client)[':format']['TeamStatsAllowedByPosition'][':season']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':format'].TeamStatsAllowedByPosition[':season'].$get(args, options),
  )
}

export async function getFormatTeams(
  args: InferRequestType<(typeof client)[':format']['teams']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':format'].teams.$get(args, options))
}
