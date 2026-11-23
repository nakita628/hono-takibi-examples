import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteGamesV1managementApplicationsApplicationIdPlayersHiddenPlayerIdRoute,
  getGamesV1managementApplicationsApplicationIdPlayersHiddenRoute,
  postGamesV1managementAchievementsAchievementIdResetForAllPlayersRoute,
  postGamesV1managementAchievementsAchievementIdResetRoute,
  postGamesV1managementAchievementsResetAllForAllPlayersRoute,
  postGamesV1managementAchievementsResetMultipleForAllPlayersRoute,
  postGamesV1managementAchievementsResetRoute,
  postGamesV1managementApplicationsApplicationIdPlayersHiddenPlayerIdRoute,
  postGamesV1managementEventsEventIdResetForAllPlayersRoute,
  postGamesV1managementEventsEventIdResetRoute,
  postGamesV1managementEventsResetAllForAllPlayersRoute,
  postGamesV1managementEventsResetMultipleForAllPlayersRoute,
  postGamesV1managementEventsResetRoute,
  postGamesV1managementLeaderboardsLeaderboardIdScoresResetForAllPlayersRoute,
  postGamesV1managementLeaderboardsLeaderboardIdScoresResetRoute,
  postGamesV1managementScoresResetAllForAllPlayersRoute,
  postGamesV1managementScoresResetMultipleForAllPlayersRoute,
  postGamesV1managementScoresResetRoute,
} from './routes'
import {
  deleteGamesV1managementApplicationsApplicationIdPlayersHiddenPlayerIdRouteHandler,
  getGamesV1managementApplicationsApplicationIdPlayersHiddenRouteHandler,
  postGamesV1managementAchievementsAchievementIdResetForAllPlayersRouteHandler,
  postGamesV1managementAchievementsAchievementIdResetRouteHandler,
  postGamesV1managementAchievementsResetAllForAllPlayersRouteHandler,
  postGamesV1managementAchievementsResetMultipleForAllPlayersRouteHandler,
  postGamesV1managementAchievementsResetRouteHandler,
  postGamesV1managementApplicationsApplicationIdPlayersHiddenPlayerIdRouteHandler,
  postGamesV1managementEventsEventIdResetForAllPlayersRouteHandler,
  postGamesV1managementEventsEventIdResetRouteHandler,
  postGamesV1managementEventsResetAllForAllPlayersRouteHandler,
  postGamesV1managementEventsResetMultipleForAllPlayersRouteHandler,
  postGamesV1managementEventsResetRouteHandler,
  postGamesV1managementLeaderboardsLeaderboardIdScoresResetForAllPlayersRouteHandler,
  postGamesV1managementLeaderboardsLeaderboardIdScoresResetRouteHandler,
  postGamesV1managementScoresResetAllForAllPlayersRouteHandler,
  postGamesV1managementScoresResetMultipleForAllPlayersRouteHandler,
  postGamesV1managementScoresResetRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    postGamesV1managementAchievementsResetRoute,
    postGamesV1managementAchievementsResetRouteHandler,
  )
  .openapi(
    postGamesV1managementAchievementsResetAllForAllPlayersRoute,
    postGamesV1managementAchievementsResetAllForAllPlayersRouteHandler,
  )
  .openapi(
    postGamesV1managementAchievementsResetMultipleForAllPlayersRoute,
    postGamesV1managementAchievementsResetMultipleForAllPlayersRouteHandler,
  )
  .openapi(
    postGamesV1managementAchievementsAchievementIdResetRoute,
    postGamesV1managementAchievementsAchievementIdResetRouteHandler,
  )
  .openapi(
    postGamesV1managementAchievementsAchievementIdResetForAllPlayersRoute,
    postGamesV1managementAchievementsAchievementIdResetForAllPlayersRouteHandler,
  )
  .openapi(
    getGamesV1managementApplicationsApplicationIdPlayersHiddenRoute,
    getGamesV1managementApplicationsApplicationIdPlayersHiddenRouteHandler,
  )
  .openapi(
    deleteGamesV1managementApplicationsApplicationIdPlayersHiddenPlayerIdRoute,
    deleteGamesV1managementApplicationsApplicationIdPlayersHiddenPlayerIdRouteHandler,
  )
  .openapi(
    postGamesV1managementApplicationsApplicationIdPlayersHiddenPlayerIdRoute,
    postGamesV1managementApplicationsApplicationIdPlayersHiddenPlayerIdRouteHandler,
  )
  .openapi(postGamesV1managementEventsResetRoute, postGamesV1managementEventsResetRouteHandler)
  .openapi(
    postGamesV1managementEventsResetAllForAllPlayersRoute,
    postGamesV1managementEventsResetAllForAllPlayersRouteHandler,
  )
  .openapi(
    postGamesV1managementEventsResetMultipleForAllPlayersRoute,
    postGamesV1managementEventsResetMultipleForAllPlayersRouteHandler,
  )
  .openapi(
    postGamesV1managementEventsEventIdResetRoute,
    postGamesV1managementEventsEventIdResetRouteHandler,
  )
  .openapi(
    postGamesV1managementEventsEventIdResetForAllPlayersRoute,
    postGamesV1managementEventsEventIdResetForAllPlayersRouteHandler,
  )
  .openapi(
    postGamesV1managementLeaderboardsLeaderboardIdScoresResetRoute,
    postGamesV1managementLeaderboardsLeaderboardIdScoresResetRouteHandler,
  )
  .openapi(
    postGamesV1managementLeaderboardsLeaderboardIdScoresResetForAllPlayersRoute,
    postGamesV1managementLeaderboardsLeaderboardIdScoresResetForAllPlayersRouteHandler,
  )
  .openapi(postGamesV1managementScoresResetRoute, postGamesV1managementScoresResetRouteHandler)
  .openapi(
    postGamesV1managementScoresResetAllForAllPlayersRoute,
    postGamesV1managementScoresResetAllForAllPlayersRouteHandler,
  )
  .openapi(
    postGamesV1managementScoresResetMultipleForAllPlayersRoute,
    postGamesV1managementScoresResetMultipleForAllPlayersRouteHandler,
  )

export default app
