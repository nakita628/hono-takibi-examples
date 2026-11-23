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
} from './routes'
import {
  getFormatActiveBoxScoresRouteHandler,
  getFormatAllTeamsRouteHandler,
  getFormatAreAnyGamesInProgressRouteHandler,
  getFormatBoxScoreByScoreIDV3ScoreidRouteHandler,
  getFormatBoxScoresDeltaSeasonWeekMinutesRouteHandler,
  getFormatBoxScoresDeltaV3SeasonWeekPlayerstoincludeMinutesRouteHandler,
  getFormatBoxScoreSeasonWeekHometeamRouteHandler,
  getFormatBoxScoresSeasonWeekRouteHandler,
  getFormatBoxScoreV3SeasonWeekHometeamRouteHandler,
  getFormatByesSeasonRouteHandler,
  getFormatCurrentSeasonRouteHandler,
  getFormatCurrentWeekRouteHandler,
  getFormatDailyFantasyPlayersDateRouteHandler,
  getFormatDailyFantasyPointsDateRouteHandler,
  getFormatDfsSlatesByDateDateRouteHandler,
  getFormatDfsSlatesByWeekSeasonWeekRouteHandler,
  getFormatFantasyDefenseByGameByTeamSeasonWeekTeamRouteHandler,
  getFormatFantasyDefenseByGameSeasonWeekRouteHandler,
  getFormatFantasyDefenseBySeasonByTeamSeasonTeamRouteHandler,
  getFormatFantasyDefenseBySeasonSeasonRouteHandler,
  getFormatFantasyPlayersIDPRouteHandler,
  getFormatFantasyPlayersRouteHandler,
  getFormatFinalBoxScoresRouteHandler,
  getFormatFreeAgentsRouteHandler,
  getFormatGameLeagueLeadersSeasonWeekPositionColumnRouteHandler,
  getFormatGameStatsByWeekSeasonWeekRouteHandler,
  getFormatGameStatsSeasonRouteHandler,
  getFormatInjuriesSeasonWeekRouteHandler,
  getFormatInjuriesSeasonWeekTeamRouteHandler,
  getFormatLastCompletedSeasonRouteHandler,
  getFormatLastCompletedWeekRouteHandler,
  getFormatLiveBoxScoresRouteHandler,
  getFormatNewsByDateDateRouteHandler,
  getFormatNewsByPlayerIDPlayeridRouteHandler,
  getFormatNewsByTeamTeamRouteHandler,
  getFormatNewsRouteHandler,
  getFormatPlayerGameRedZoneInsideFiveStatsSeasonWeekRouteHandler,
  getFormatPlayerGameRedZoneInsideTenStatsSeasonWeekRouteHandler,
  getFormatPlayerGameRedZoneStatsSeasonWeekRouteHandler,
  getFormatPlayerGameStatsByPlayerIDSeasonWeekPlayeridRouteHandler,
  getFormatPlayerGameStatsBySeasonSeasonPlayeridNumberofgamesRouteHandler,
  getFormatPlayerGameStatsByTeamSeasonWeekTeamRouteHandler,
  getFormatPlayerGameStatsByWeekDeltaSeasonWeekMinutesRouteHandler,
  getFormatPlayerGameStatsByWeekSeasonWeekRouteHandler,
  getFormatPlayerGameStatsDeltaMinutesRouteHandler,
  getFormatPlayerOwnershipSeasonWeekRouteHandler,
  getFormatPlayerPlayeridRouteHandler,
  getFormatPlayerSeasonRedZoneInsideFiveStatsSeasonRouteHandler,
  getFormatPlayerSeasonRedZoneInsideTenStatsSeasonRouteHandler,
  getFormatPlayerSeasonRedZoneStatsSeasonRouteHandler,
  getFormatPlayerSeasonStatsByPlayerIDSeasonPlayeridRouteHandler,
  getFormatPlayerSeasonStatsByTeamSeasonTeamRouteHandler,
  getFormatPlayerSeasonStatsSeasonRouteHandler,
  getFormatPlayerSeasonThirdDownStatsSeasonRouteHandler,
  getFormatPlayersRouteHandler,
  getFormatPlayersTeamRouteHandler,
  getFormatProBowlersSeasonRouteHandler,
  getFormatRecentlyUpdatedBoxScoresMinutesRouteHandler,
  getFormatRookiesSeasonRouteHandler,
  getFormatSchedulesSeasonRouteHandler,
  getFormatScoresByDateDateRouteHandler,
  getFormatScoresByWeekSeasonWeekRouteHandler,
  getFormatScoresSeasonRouteHandler,
  getFormatSeasonLeagueLeadersSeasonPositionColumnRouteHandler,
  getFormatSimulatedBoxScoresV3NumberofplaysRouteHandler,
  getFormatSimulatedScoresNumberofplaysRouteHandler,
  getFormatStadiumsRouteHandler,
  getFormatStandingsSeasonRouteHandler,
  getFormatTeamGameStatsBySeasonSeasonTeamidNumberofgamesRouteHandler,
  getFormatTeamGameStatsSeasonWeekRouteHandler,
  getFormatTeamSeasonStatsSeasonRouteHandler,
  getFormatTeamsRouteHandler,
  getFormatTeamsSeasonRouteHandler,
  getFormatTimeframesTypeRouteHandler,
  getFormatUpcomingSeasonRouteHandler,
  getFormatUpcomingWeekRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getFormatActiveBoxScoresRoute, getFormatActiveBoxScoresRouteHandler)
  .openapi(getFormatAllTeamsRoute, getFormatAllTeamsRouteHandler)
  .openapi(getFormatAreAnyGamesInProgressRoute, getFormatAreAnyGamesInProgressRouteHandler)
  .openapi(
    getFormatBoxScoreSeasonWeekHometeamRoute,
    getFormatBoxScoreSeasonWeekHometeamRouteHandler,
  )
  .openapi(
    getFormatBoxScoreByScoreIDV3ScoreidRoute,
    getFormatBoxScoreByScoreIDV3ScoreidRouteHandler,
  )
  .openapi(
    getFormatBoxScoreV3SeasonWeekHometeamRoute,
    getFormatBoxScoreV3SeasonWeekHometeamRouteHandler,
  )
  .openapi(getFormatBoxScoresSeasonWeekRoute, getFormatBoxScoresSeasonWeekRouteHandler)
  .openapi(
    getFormatBoxScoresDeltaSeasonWeekMinutesRoute,
    getFormatBoxScoresDeltaSeasonWeekMinutesRouteHandler,
  )
  .openapi(
    getFormatBoxScoresDeltaV3SeasonWeekPlayerstoincludeMinutesRoute,
    getFormatBoxScoresDeltaV3SeasonWeekPlayerstoincludeMinutesRouteHandler,
  )
  .openapi(getFormatByesSeasonRoute, getFormatByesSeasonRouteHandler)
  .openapi(getFormatCurrentSeasonRoute, getFormatCurrentSeasonRouteHandler)
  .openapi(getFormatCurrentWeekRoute, getFormatCurrentWeekRouteHandler)
  .openapi(getFormatDailyFantasyPlayersDateRoute, getFormatDailyFantasyPlayersDateRouteHandler)
  .openapi(getFormatDailyFantasyPointsDateRoute, getFormatDailyFantasyPointsDateRouteHandler)
  .openapi(getFormatDfsSlatesByDateDateRoute, getFormatDfsSlatesByDateDateRouteHandler)
  .openapi(getFormatDfsSlatesByWeekSeasonWeekRoute, getFormatDfsSlatesByWeekSeasonWeekRouteHandler)
  .openapi(
    getFormatFantasyDefenseByGameSeasonWeekRoute,
    getFormatFantasyDefenseByGameSeasonWeekRouteHandler,
  )
  .openapi(
    getFormatFantasyDefenseByGameByTeamSeasonWeekTeamRoute,
    getFormatFantasyDefenseByGameByTeamSeasonWeekTeamRouteHandler,
  )
  .openapi(
    getFormatFantasyDefenseBySeasonSeasonRoute,
    getFormatFantasyDefenseBySeasonSeasonRouteHandler,
  )
  .openapi(
    getFormatFantasyDefenseBySeasonByTeamSeasonTeamRoute,
    getFormatFantasyDefenseBySeasonByTeamSeasonTeamRouteHandler,
  )
  .openapi(getFormatFantasyPlayersRoute, getFormatFantasyPlayersRouteHandler)
  .openapi(getFormatFantasyPlayersIDPRoute, getFormatFantasyPlayersIDPRouteHandler)
  .openapi(getFormatFinalBoxScoresRoute, getFormatFinalBoxScoresRouteHandler)
  .openapi(getFormatFreeAgentsRoute, getFormatFreeAgentsRouteHandler)
  .openapi(
    getFormatGameLeagueLeadersSeasonWeekPositionColumnRoute,
    getFormatGameLeagueLeadersSeasonWeekPositionColumnRouteHandler,
  )
  .openapi(getFormatGameStatsSeasonRoute, getFormatGameStatsSeasonRouteHandler)
  .openapi(getFormatGameStatsByWeekSeasonWeekRoute, getFormatGameStatsByWeekSeasonWeekRouteHandler)
  .openapi(getFormatInjuriesSeasonWeekRoute, getFormatInjuriesSeasonWeekRouteHandler)
  .openapi(getFormatInjuriesSeasonWeekTeamRoute, getFormatInjuriesSeasonWeekTeamRouteHandler)
  .openapi(getFormatLastCompletedSeasonRoute, getFormatLastCompletedSeasonRouteHandler)
  .openapi(getFormatLastCompletedWeekRoute, getFormatLastCompletedWeekRouteHandler)
  .openapi(getFormatLiveBoxScoresRoute, getFormatLiveBoxScoresRouteHandler)
  .openapi(getFormatNewsRoute, getFormatNewsRouteHandler)
  .openapi(getFormatNewsByDateDateRoute, getFormatNewsByDateDateRouteHandler)
  .openapi(getFormatNewsByPlayerIDPlayeridRoute, getFormatNewsByPlayerIDPlayeridRouteHandler)
  .openapi(getFormatNewsByTeamTeamRoute, getFormatNewsByTeamTeamRouteHandler)
  .openapi(getFormatPlayerPlayeridRoute, getFormatPlayerPlayeridRouteHandler)
  .openapi(
    getFormatPlayerGameRedZoneInsideFiveStatsSeasonWeekRoute,
    getFormatPlayerGameRedZoneInsideFiveStatsSeasonWeekRouteHandler,
  )
  .openapi(
    getFormatPlayerGameRedZoneInsideTenStatsSeasonWeekRoute,
    getFormatPlayerGameRedZoneInsideTenStatsSeasonWeekRouteHandler,
  )
  .openapi(
    getFormatPlayerGameRedZoneStatsSeasonWeekRoute,
    getFormatPlayerGameRedZoneStatsSeasonWeekRouteHandler,
  )
  .openapi(
    getFormatPlayerGameStatsByPlayerIDSeasonWeekPlayeridRoute,
    getFormatPlayerGameStatsByPlayerIDSeasonWeekPlayeridRouteHandler,
  )
  .openapi(
    getFormatPlayerGameStatsBySeasonSeasonPlayeridNumberofgamesRoute,
    getFormatPlayerGameStatsBySeasonSeasonPlayeridNumberofgamesRouteHandler,
  )
  .openapi(
    getFormatPlayerGameStatsByTeamSeasonWeekTeamRoute,
    getFormatPlayerGameStatsByTeamSeasonWeekTeamRouteHandler,
  )
  .openapi(
    getFormatPlayerGameStatsByWeekSeasonWeekRoute,
    getFormatPlayerGameStatsByWeekSeasonWeekRouteHandler,
  )
  .openapi(
    getFormatPlayerGameStatsByWeekDeltaSeasonWeekMinutesRoute,
    getFormatPlayerGameStatsByWeekDeltaSeasonWeekMinutesRouteHandler,
  )
  .openapi(
    getFormatPlayerGameStatsDeltaMinutesRoute,
    getFormatPlayerGameStatsDeltaMinutesRouteHandler,
  )
  .openapi(getFormatPlayerOwnershipSeasonWeekRoute, getFormatPlayerOwnershipSeasonWeekRouteHandler)
  .openapi(
    getFormatPlayerSeasonRedZoneInsideFiveStatsSeasonRoute,
    getFormatPlayerSeasonRedZoneInsideFiveStatsSeasonRouteHandler,
  )
  .openapi(
    getFormatPlayerSeasonRedZoneInsideTenStatsSeasonRoute,
    getFormatPlayerSeasonRedZoneInsideTenStatsSeasonRouteHandler,
  )
  .openapi(
    getFormatPlayerSeasonRedZoneStatsSeasonRoute,
    getFormatPlayerSeasonRedZoneStatsSeasonRouteHandler,
  )
  .openapi(getFormatPlayerSeasonStatsSeasonRoute, getFormatPlayerSeasonStatsSeasonRouteHandler)
  .openapi(
    getFormatPlayerSeasonStatsByPlayerIDSeasonPlayeridRoute,
    getFormatPlayerSeasonStatsByPlayerIDSeasonPlayeridRouteHandler,
  )
  .openapi(
    getFormatPlayerSeasonStatsByTeamSeasonTeamRoute,
    getFormatPlayerSeasonStatsByTeamSeasonTeamRouteHandler,
  )
  .openapi(
    getFormatPlayerSeasonThirdDownStatsSeasonRoute,
    getFormatPlayerSeasonThirdDownStatsSeasonRouteHandler,
  )
  .openapi(getFormatPlayersRoute, getFormatPlayersRouteHandler)
  .openapi(getFormatPlayersTeamRoute, getFormatPlayersTeamRouteHandler)
  .openapi(getFormatProBowlersSeasonRoute, getFormatProBowlersSeasonRouteHandler)
  .openapi(
    getFormatRecentlyUpdatedBoxScoresMinutesRoute,
    getFormatRecentlyUpdatedBoxScoresMinutesRouteHandler,
  )
  .openapi(getFormatRookiesSeasonRoute, getFormatRookiesSeasonRouteHandler)
  .openapi(getFormatSchedulesSeasonRoute, getFormatSchedulesSeasonRouteHandler)
  .openapi(getFormatScoresSeasonRoute, getFormatScoresSeasonRouteHandler)
  .openapi(getFormatScoresByDateDateRoute, getFormatScoresByDateDateRouteHandler)
  .openapi(getFormatScoresByWeekSeasonWeekRoute, getFormatScoresByWeekSeasonWeekRouteHandler)
  .openapi(
    getFormatSeasonLeagueLeadersSeasonPositionColumnRoute,
    getFormatSeasonLeagueLeadersSeasonPositionColumnRouteHandler,
  )
  .openapi(
    getFormatSimulatedBoxScoresV3NumberofplaysRoute,
    getFormatSimulatedBoxScoresV3NumberofplaysRouteHandler,
  )
  .openapi(
    getFormatSimulatedScoresNumberofplaysRoute,
    getFormatSimulatedScoresNumberofplaysRouteHandler,
  )
  .openapi(getFormatStadiumsRoute, getFormatStadiumsRouteHandler)
  .openapi(getFormatStandingsSeasonRoute, getFormatStandingsSeasonRouteHandler)
  .openapi(getFormatTeamGameStatsSeasonWeekRoute, getFormatTeamGameStatsSeasonWeekRouteHandler)
  .openapi(
    getFormatTeamGameStatsBySeasonSeasonTeamidNumberofgamesRoute,
    getFormatTeamGameStatsBySeasonSeasonTeamidNumberofgamesRouteHandler,
  )
  .openapi(getFormatTeamSeasonStatsSeasonRoute, getFormatTeamSeasonStatsSeasonRouteHandler)
  .openapi(getFormatTeamsRoute, getFormatTeamsRouteHandler)
  .openapi(getFormatTeamsSeasonRoute, getFormatTeamsSeasonRouteHandler)
  .openapi(getFormatTimeframesTypeRoute, getFormatTimeframesTypeRouteHandler)
  .openapi(getFormatUpcomingSeasonRoute, getFormatUpcomingSeasonRouteHandler)
  .openapi(getFormatUpcomingWeekRoute, getFormatUpcomingWeekRouteHandler)

export default app
