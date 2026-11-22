import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getFormatActiveBoxScoresRoute,
  getFormatAllTeamsRoute,
  getFormatAreAnyGamesInProgressRoute,
  getFormatBoxScoreByScoreIDV3ScoreidRoute,
  getFormatBoxScoresDeltaSeasonWeekMinutesRoute,
  getFormatBoxScoresDeltaV3SeasonWeekPlayerstoincludeMinutesRoute,
  getFormatBoxScoreSeasonWeekHometeamRoute,
  getFormatBoxScoresSeasonWeekRoute,
  getFormatBoxScoreV3SeasonWeekHometeamRoute,
  getFormatByesSeasonRoute,
  getFormatCurrentSeasonRoute,
  getFormatCurrentWeekRoute,
  getFormatDailyFantasyPlayersDateRoute,
  getFormatDailyFantasyPointsDateRoute,
  getFormatDfsSlatesByDateDateRoute,
  getFormatDfsSlatesByWeekSeasonWeekRoute,
  getFormatFantasyDefenseByGameByTeamSeasonWeekTeamRoute,
  getFormatFantasyDefenseByGameSeasonWeekRoute,
  getFormatFantasyDefenseBySeasonByTeamSeasonTeamRoute,
  getFormatFantasyDefenseBySeasonSeasonRoute,
  getFormatFantasyPlayersIDPRoute,
  getFormatFantasyPlayersRoute,
  getFormatFinalBoxScoresRoute,
  getFormatFreeAgentsRoute,
  getFormatGameLeagueLeadersSeasonWeekPositionColumnRoute,
  getFormatGameStatsByWeekSeasonWeekRoute,
  getFormatGameStatsSeasonRoute,
  getFormatInjuriesSeasonWeekRoute,
  getFormatInjuriesSeasonWeekTeamRoute,
  getFormatLastCompletedSeasonRoute,
  getFormatLastCompletedWeekRoute,
  getFormatLiveBoxScoresRoute,
  getFormatNewsByDateDateRoute,
  getFormatNewsByPlayerIDPlayeridRoute,
  getFormatNewsByTeamTeamRoute,
  getFormatNewsRoute,
  getFormatPlayerGameRedZoneInsideFiveStatsSeasonWeekRoute,
  getFormatPlayerGameRedZoneInsideTenStatsSeasonWeekRoute,
  getFormatPlayerGameRedZoneStatsSeasonWeekRoute,
  getFormatPlayerGameStatsByPlayerIDSeasonWeekPlayeridRoute,
  getFormatPlayerGameStatsBySeasonSeasonPlayeridNumberofgamesRoute,
  getFormatPlayerGameStatsByTeamSeasonWeekTeamRoute,
  getFormatPlayerGameStatsByWeekDeltaSeasonWeekMinutesRoute,
  getFormatPlayerGameStatsByWeekSeasonWeekRoute,
  getFormatPlayerGameStatsDeltaMinutesRoute,
  getFormatPlayerOwnershipSeasonWeekRoute,
  getFormatPlayerPlayeridRoute,
  getFormatPlayerSeasonRedZoneInsideFiveStatsSeasonRoute,
  getFormatPlayerSeasonRedZoneInsideTenStatsSeasonRoute,
  getFormatPlayerSeasonRedZoneStatsSeasonRoute,
  getFormatPlayerSeasonStatsByPlayerIDSeasonPlayeridRoute,
  getFormatPlayerSeasonStatsByTeamSeasonTeamRoute,
  getFormatPlayerSeasonStatsSeasonRoute,
  getFormatPlayerSeasonThirdDownStatsSeasonRoute,
  getFormatPlayersRoute,
  getFormatPlayersTeamRoute,
  getFormatProBowlersSeasonRoute,
  getFormatRecentlyUpdatedBoxScoresMinutesRoute,
  getFormatRookiesSeasonRoute,
  getFormatSchedulesSeasonRoute,
  getFormatScoresByDateDateRoute,
  getFormatScoresByWeekSeasonWeekRoute,
  getFormatScoresSeasonRoute,
  getFormatSeasonLeagueLeadersSeasonPositionColumnRoute,
  getFormatSimulatedBoxScoresV3NumberofplaysRoute,
  getFormatSimulatedScoresNumberofplaysRoute,
  getFormatStadiumsRoute,
  getFormatStandingsSeasonRoute,
  getFormatTeamGameStatsBySeasonSeasonTeamidNumberofgamesRoute,
  getFormatTeamGameStatsSeasonWeekRoute,
  getFormatTeamSeasonStatsSeasonRoute,
  getFormatTeamsRoute,
  getFormatTeamsSeasonRoute,
  getFormatTimeframesTypeRoute,
  getFormatUpcomingSeasonRoute,
  getFormatUpcomingWeekRoute,
} from '../routes'

const app = new OpenAPIHono()

export const formatHandler = app
  .openapi(getFormatActiveBoxScoresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatAllTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatAreAnyGamesInProgressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatBoxScoreSeasonWeekHometeamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatBoxScoreByScoreIDV3ScoreidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatBoxScoreV3SeasonWeekHometeamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatBoxScoresSeasonWeekRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatBoxScoresDeltaSeasonWeekMinutesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatBoxScoresDeltaV3SeasonWeekPlayerstoincludeMinutesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatByesSeasonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatCurrentSeasonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatCurrentWeekRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatDailyFantasyPlayersDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatDailyFantasyPointsDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatDfsSlatesByDateDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatDfsSlatesByWeekSeasonWeekRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatFantasyDefenseByGameSeasonWeekRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatFantasyDefenseByGameByTeamSeasonWeekTeamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatFantasyDefenseBySeasonSeasonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatFantasyDefenseBySeasonByTeamSeasonTeamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatFantasyPlayersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatFantasyPlayersIDPRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatFinalBoxScoresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatFreeAgentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatGameLeagueLeadersSeasonWeekPositionColumnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatGameStatsSeasonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatGameStatsByWeekSeasonWeekRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatInjuriesSeasonWeekRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatInjuriesSeasonWeekTeamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatLastCompletedSeasonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatLastCompletedWeekRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatLiveBoxScoresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatNewsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatNewsByDateDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatNewsByPlayerIDPlayeridRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatNewsByTeamTeamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatPlayerPlayeridRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatPlayerGameRedZoneInsideFiveStatsSeasonWeekRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatPlayerGameRedZoneInsideTenStatsSeasonWeekRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatPlayerGameRedZoneStatsSeasonWeekRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatPlayerGameStatsByPlayerIDSeasonWeekPlayeridRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatPlayerGameStatsBySeasonSeasonPlayeridNumberofgamesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatPlayerGameStatsByTeamSeasonWeekTeamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatPlayerGameStatsByWeekSeasonWeekRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatPlayerGameStatsByWeekDeltaSeasonWeekMinutesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatPlayerGameStatsDeltaMinutesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatPlayerOwnershipSeasonWeekRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatPlayerSeasonRedZoneInsideFiveStatsSeasonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatPlayerSeasonRedZoneInsideTenStatsSeasonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatPlayerSeasonRedZoneStatsSeasonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatPlayerSeasonStatsSeasonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatPlayerSeasonStatsByPlayerIDSeasonPlayeridRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatPlayerSeasonStatsByTeamSeasonTeamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatPlayerSeasonThirdDownStatsSeasonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatPlayersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatPlayersTeamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatProBowlersSeasonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatRecentlyUpdatedBoxScoresMinutesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatRookiesSeasonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatSchedulesSeasonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatScoresSeasonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatScoresByDateDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatScoresByWeekSeasonWeekRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatSeasonLeagueLeadersSeasonPositionColumnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatSimulatedBoxScoresV3NumberofplaysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatSimulatedScoresNumberofplaysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatStadiumsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatStandingsSeasonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatTeamGameStatsSeasonWeekRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatTeamGameStatsBySeasonSeasonTeamidNumberofgamesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatTeamSeasonStatsSeasonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatTeamsSeasonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatTimeframesTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatUpcomingSeasonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatUpcomingWeekRoute, (c) => {
    throw new Error('Not implemented')
  })
