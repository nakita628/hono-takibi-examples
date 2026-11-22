import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

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

export async function getFormatByesSeason(
  args: InferRequestType<(typeof client)[':format']['Byes'][':season']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':format'].Byes[':season'].$get(args, options))
}

export async function getFormatCurrentSeason(
  args: InferRequestType<(typeof client)[':format']['CurrentSeason']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':format'].CurrentSeason.$get(args, options))
}

export async function getFormatCurrentWeek(
  args: InferRequestType<(typeof client)[':format']['CurrentWeek']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':format'].CurrentWeek.$get(args, options))
}

export async function getFormatDepthCharts(
  args: InferRequestType<(typeof client)[':format']['DepthCharts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':format'].DepthCharts.$get(args, options))
}

export async function getFormatFreeAgents(
  args: InferRequestType<(typeof client)[':format']['FreeAgents']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':format'].FreeAgents.$get(args, options))
}

export async function getFormatGameStatsSeason(
  args: InferRequestType<(typeof client)[':format']['GameStats'][':season']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':format'].GameStats[':season'].$get(args, options))
}

export async function getFormatGameStatsByWeekSeasonWeek(
  args: InferRequestType<(typeof client)[':format']['GameStatsByWeek'][':season'][':week']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':format'].GameStatsByWeek[':season'][':week'].$get(args, options),
  )
}

export async function getFormatLastCompletedSeason(
  args: InferRequestType<(typeof client)[':format']['LastCompletedSeason']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':format'].LastCompletedSeason.$get(args, options))
}

export async function getFormatLastCompletedWeek(
  args: InferRequestType<(typeof client)[':format']['LastCompletedWeek']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':format'].LastCompletedWeek.$get(args, options))
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

export async function getFormatNewsByTeamTeam(
  args: InferRequestType<(typeof client)[':format']['NewsByTeam'][':team']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':format'].NewsByTeam[':team'].$get(args, options))
}

export async function getFormatPingSeconds(
  args: InferRequestType<(typeof client)[':format']['Ping'][':seconds']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':format'].Ping[':seconds'].$get(args, options))
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

export async function getFormatReferees(
  args: InferRequestType<(typeof client)[':format']['Referees']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':format'].Referees.$get(args, options))
}

export async function getFormatRookiesSeason(
  args: InferRequestType<(typeof client)[':format']['Rookies'][':season']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':format'].Rookies[':season'].$get(args, options))
}

export async function getFormatSchedulesSeason(
  args: InferRequestType<(typeof client)[':format']['Schedules'][':season']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':format'].Schedules[':season'].$get(args, options))
}

export async function getFormatScoresSeason(
  args: InferRequestType<(typeof client)[':format']['Scores'][':season']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':format'].Scores[':season'].$get(args, options))
}

export async function getFormatScoresByDateDate(
  args: InferRequestType<(typeof client)[':format']['ScoresByDate'][':date']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':format'].ScoresByDate[':date'].$get(args, options))
}

export async function getFormatScoresByWeekSeasonWeek(
  args: InferRequestType<(typeof client)[':format']['ScoresByWeek'][':season'][':week']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':format'].ScoresByWeek[':season'][':week'].$get(args, options))
}

export async function getFormatSimulatedScoresNumberofplays(
  args: InferRequestType<(typeof client)[':format']['SimulatedScores'][':numberofplays']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':format'].SimulatedScores[':numberofplays'].$get(args, options),
  )
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

export async function getFormatTeamGameStatsSeasonWeek(
  args: InferRequestType<(typeof client)[':format']['TeamGameStats'][':season'][':week']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':format'].TeamGameStats[':season'][':week'].$get(args, options),
  )
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

export async function getFormatTeams(
  args: InferRequestType<(typeof client)[':format']['Teams']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':format'].Teams.$get(args, options))
}

export async function getFormatTeamsSeason(
  args: InferRequestType<(typeof client)[':format']['Teams'][':season']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':format'].Teams[':season'].$get(args, options))
}

export async function getFormatTimeframesType(
  args: InferRequestType<(typeof client)[':format']['Timeframes'][':type']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':format'].Timeframes[':type'].$get(args, options))
}

export async function getFormatUpcomingSeason(
  args: InferRequestType<(typeof client)[':format']['UpcomingSeason']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':format'].UpcomingSeason.$get(args, options))
}

export async function getFormatUpcomingWeek(
  args: InferRequestType<(typeof client)[':format']['UpcomingWeek']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':format'].UpcomingWeek.$get(args, options))
}
