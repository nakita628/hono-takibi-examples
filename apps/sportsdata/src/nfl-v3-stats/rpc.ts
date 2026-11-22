import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getFormatActiveBoxScores(
  args: InferRequestType<(typeof client)[':format']['ActiveBoxScores']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':format'].ActiveBoxScores.$get(args, options))
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

export async function getFormatBoxScoreSeasonWeekHometeam(
  args: InferRequestType<
    (typeof client)[':format']['BoxScore'][':season'][':week'][':hometeam']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':format'].BoxScore[':season'][':week'][':hometeam'].$get(args, options),
  )
}

export async function getFormatBoxScoreByScoreIDV3Scoreid(
  args: InferRequestType<(typeof client)[':format']['BoxScoreByScoreIDV3'][':scoreid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':format'].BoxScoreByScoreIDV3[':scoreid'].$get(args, options))
}

export async function getFormatBoxScoreV3SeasonWeekHometeam(
  args: InferRequestType<
    (typeof client)[':format']['BoxScoreV3'][':season'][':week'][':hometeam']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':format'].BoxScoreV3[':season'][':week'][':hometeam'].$get(args, options),
  )
}

export async function getFormatBoxScoresSeasonWeek(
  args: InferRequestType<(typeof client)[':format']['BoxScores'][':season'][':week']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':format'].BoxScores[':season'][':week'].$get(args, options))
}

export async function getFormatBoxScoresDeltaSeasonWeekMinutes(
  args: InferRequestType<
    (typeof client)[':format']['BoxScoresDelta'][':season'][':week'][':minutes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':format'].BoxScoresDelta[':season'][':week'][':minutes'].$get(args, options),
  )
}

export async function getFormatBoxScoresDeltaV3SeasonWeekPlayerstoincludeMinutes(
  args: InferRequestType<
    (typeof client)[':format']['BoxScoresDeltaV3'][':season'][':week'][':playerstoinclude'][':minutes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':format'].BoxScoresDeltaV3[':season'][':week'][':playerstoinclude'][':minutes'].$get(
      args,
      options,
    ),
  )
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

export async function getFormatDailyFantasyPlayersDate(
  args: InferRequestType<(typeof client)[':format']['DailyFantasyPlayers'][':date']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':format'].DailyFantasyPlayers[':date'].$get(args, options))
}

export async function getFormatDailyFantasyPointsDate(
  args: InferRequestType<(typeof client)[':format']['DailyFantasyPoints'][':date']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':format'].DailyFantasyPoints[':date'].$get(args, options))
}

export async function getFormatDfsSlatesByDateDate(
  args: InferRequestType<(typeof client)[':format']['DfsSlatesByDate'][':date']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':format'].DfsSlatesByDate[':date'].$get(args, options))
}

export async function getFormatDfsSlatesByWeekSeasonWeek(
  args: InferRequestType<(typeof client)[':format']['DfsSlatesByWeek'][':season'][':week']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':format'].DfsSlatesByWeek[':season'][':week'].$get(args, options),
  )
}

export async function getFormatFantasyDefenseByGameSeasonWeek(
  args: InferRequestType<
    (typeof client)[':format']['FantasyDefenseByGame'][':season'][':week']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':format'].FantasyDefenseByGame[':season'][':week'].$get(args, options),
  )
}

export async function getFormatFantasyDefenseByGameByTeamSeasonWeekTeam(
  args: InferRequestType<
    (typeof client)[':format']['FantasyDefenseByGameByTeam'][':season'][':week'][':team']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':format'].FantasyDefenseByGameByTeam[':season'][':week'][':team'].$get(args, options),
  )
}

export async function getFormatFantasyDefenseBySeasonSeason(
  args: InferRequestType<(typeof client)[':format']['FantasyDefenseBySeason'][':season']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':format'].FantasyDefenseBySeason[':season'].$get(args, options),
  )
}

export async function getFormatFantasyDefenseBySeasonByTeamSeasonTeam(
  args: InferRequestType<
    (typeof client)[':format']['FantasyDefenseBySeasonByTeam'][':season'][':team']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':format'].FantasyDefenseBySeasonByTeam[':season'][':team'].$get(args, options),
  )
}

export async function getFormatFantasyPlayers(
  args: InferRequestType<(typeof client)[':format']['FantasyPlayers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':format'].FantasyPlayers.$get(args, options))
}

export async function getFormatFantasyPlayersIDP(
  args: InferRequestType<(typeof client)[':format']['FantasyPlayersIDP']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':format'].FantasyPlayersIDP.$get(args, options))
}

export async function getFormatFinalBoxScores(
  args: InferRequestType<(typeof client)[':format']['FinalBoxScores']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':format'].FinalBoxScores.$get(args, options))
}

export async function getFormatFreeAgents(
  args: InferRequestType<(typeof client)[':format']['FreeAgents']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':format'].FreeAgents.$get(args, options))
}

export async function getFormatGameLeagueLeadersSeasonWeekPositionColumn(
  args: InferRequestType<
    (typeof client)[':format']['GameLeagueLeaders'][':season'][':week'][':position'][':column']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':format'].GameLeagueLeaders[':season'][':week'][':position'][':column'].$get(
      args,
      options,
    ),
  )
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

export async function getFormatInjuriesSeasonWeek(
  args: InferRequestType<(typeof client)[':format']['Injuries'][':season'][':week']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':format'].Injuries[':season'][':week'].$get(args, options))
}

export async function getFormatInjuriesSeasonWeekTeam(
  args: InferRequestType<
    (typeof client)[':format']['Injuries'][':season'][':week'][':team']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':format'].Injuries[':season'][':week'][':team'].$get(args, options),
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

export async function getFormatLiveBoxScores(
  args: InferRequestType<(typeof client)[':format']['LiveBoxScores']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':format'].LiveBoxScores.$get(args, options))
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

export async function getFormatPlayerPlayerid(
  args: InferRequestType<(typeof client)[':format']['Player'][':playerid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':format'].Player[':playerid'].$get(args, options))
}

export async function getFormatPlayerGameRedZoneInsideFiveStatsSeasonWeek(
  args: InferRequestType<
    (typeof client)[':format']['PlayerGameRedZoneInsideFiveStats'][':season'][':week']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':format'].PlayerGameRedZoneInsideFiveStats[':season'][':week'].$get(args, options),
  )
}

export async function getFormatPlayerGameRedZoneInsideTenStatsSeasonWeek(
  args: InferRequestType<
    (typeof client)[':format']['PlayerGameRedZoneInsideTenStats'][':season'][':week']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':format'].PlayerGameRedZoneInsideTenStats[':season'][':week'].$get(args, options),
  )
}

export async function getFormatPlayerGameRedZoneStatsSeasonWeek(
  args: InferRequestType<
    (typeof client)[':format']['PlayerGameRedZoneStats'][':season'][':week']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':format'].PlayerGameRedZoneStats[':season'][':week'].$get(args, options),
  )
}

export async function getFormatPlayerGameStatsByPlayerIDSeasonWeekPlayerid(
  args: InferRequestType<
    (typeof client)[':format']['PlayerGameStatsByPlayerID'][':season'][':week'][':playerid']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':format'].PlayerGameStatsByPlayerID[':season'][':week'][':playerid'].$get(
      args,
      options,
    ),
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

export async function getFormatPlayerGameStatsByTeamSeasonWeekTeam(
  args: InferRequestType<
    (typeof client)[':format']['PlayerGameStatsByTeam'][':season'][':week'][':team']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':format'].PlayerGameStatsByTeam[':season'][':week'][':team'].$get(args, options),
  )
}

export async function getFormatPlayerGameStatsByWeekSeasonWeek(
  args: InferRequestType<
    (typeof client)[':format']['PlayerGameStatsByWeek'][':season'][':week']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':format'].PlayerGameStatsByWeek[':season'][':week'].$get(args, options),
  )
}

export async function getFormatPlayerGameStatsByWeekDeltaSeasonWeekMinutes(
  args: InferRequestType<
    (typeof client)[':format']['PlayerGameStatsByWeekDelta'][':season'][':week'][':minutes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':format'].PlayerGameStatsByWeekDelta[':season'][':week'][':minutes'].$get(
      args,
      options,
    ),
  )
}

export async function getFormatPlayerGameStatsDeltaMinutes(
  args: InferRequestType<(typeof client)[':format']['PlayerGameStatsDelta'][':minutes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':format'].PlayerGameStatsDelta[':minutes'].$get(args, options))
}

export async function getFormatPlayerOwnershipSeasonWeek(
  args: InferRequestType<(typeof client)[':format']['PlayerOwnership'][':season'][':week']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':format'].PlayerOwnership[':season'][':week'].$get(args, options),
  )
}

export async function getFormatPlayerSeasonRedZoneInsideFiveStatsSeason(
  args: InferRequestType<
    (typeof client)[':format']['PlayerSeasonRedZoneInsideFiveStats'][':season']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':format'].PlayerSeasonRedZoneInsideFiveStats[':season'].$get(args, options),
  )
}

export async function getFormatPlayerSeasonRedZoneInsideTenStatsSeason(
  args: InferRequestType<
    (typeof client)[':format']['PlayerSeasonRedZoneInsideTenStats'][':season']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':format'].PlayerSeasonRedZoneInsideTenStats[':season'].$get(args, options),
  )
}

export async function getFormatPlayerSeasonRedZoneStatsSeason(
  args: InferRequestType<(typeof client)[':format']['PlayerSeasonRedZoneStats'][':season']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':format'].PlayerSeasonRedZoneStats[':season'].$get(args, options),
  )
}

export async function getFormatPlayerSeasonStatsSeason(
  args: InferRequestType<(typeof client)[':format']['PlayerSeasonStats'][':season']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':format'].PlayerSeasonStats[':season'].$get(args, options))
}

export async function getFormatPlayerSeasonStatsByPlayerIDSeasonPlayerid(
  args: InferRequestType<
    (typeof client)[':format']['PlayerSeasonStatsByPlayerID'][':season'][':playerid']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':format'].PlayerSeasonStatsByPlayerID[':season'][':playerid'].$get(args, options),
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

export async function getFormatPlayerSeasonThirdDownStatsSeason(
  args: InferRequestType<
    (typeof client)[':format']['PlayerSeasonThirdDownStats'][':season']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':format'].PlayerSeasonThirdDownStats[':season'].$get(args, options),
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

export async function getFormatProBowlersSeason(
  args: InferRequestType<(typeof client)[':format']['ProBowlers'][':season']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':format'].ProBowlers[':season'].$get(args, options))
}

export async function getFormatRecentlyUpdatedBoxScoresMinutes(
  args: InferRequestType<
    (typeof client)[':format']['RecentlyUpdatedBoxScores'][':minutes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':format'].RecentlyUpdatedBoxScores[':minutes'].$get(args, options),
  )
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

export async function getFormatSeasonLeagueLeadersSeasonPositionColumn(
  args: InferRequestType<
    (typeof client)[':format']['SeasonLeagueLeaders'][':season'][':position'][':column']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':format'].SeasonLeagueLeaders[':season'][':position'][':column'].$get(args, options),
  )
}

export async function getFormatSimulatedBoxScoresV3Numberofplays(
  args: InferRequestType<
    (typeof client)[':format']['SimulatedBoxScoresV3'][':numberofplays']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':format'].SimulatedBoxScoresV3[':numberofplays'].$get(args, options),
  )
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
