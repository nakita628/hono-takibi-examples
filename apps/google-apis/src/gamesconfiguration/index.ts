import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteGamesV1configurationAchievementsAchievementIdRoute,
  deleteGamesV1configurationLeaderboardsLeaderboardIdRoute,
  getGamesV1configurationAchievementsAchievementIdRoute,
  getGamesV1configurationApplicationsApplicationIdAchievementsRoute,
  getGamesV1configurationApplicationsApplicationIdLeaderboardsRoute,
  getGamesV1configurationLeaderboardsLeaderboardIdRoute,
  postGamesV1configurationApplicationsApplicationIdAchievementsRoute,
  postGamesV1configurationApplicationsApplicationIdLeaderboardsRoute,
  putGamesV1configurationAchievementsAchievementIdRoute,
  putGamesV1configurationLeaderboardsLeaderboardIdRoute,
} from './routes'
import {
  deleteGamesV1configurationAchievementsAchievementIdRouteHandler,
  deleteGamesV1configurationLeaderboardsLeaderboardIdRouteHandler,
  getGamesV1configurationAchievementsAchievementIdRouteHandler,
  getGamesV1configurationApplicationsApplicationIdAchievementsRouteHandler,
  getGamesV1configurationApplicationsApplicationIdLeaderboardsRouteHandler,
  getGamesV1configurationLeaderboardsLeaderboardIdRouteHandler,
  postGamesV1configurationApplicationsApplicationIdAchievementsRouteHandler,
  postGamesV1configurationApplicationsApplicationIdLeaderboardsRouteHandler,
  putGamesV1configurationAchievementsAchievementIdRouteHandler,
  putGamesV1configurationLeaderboardsLeaderboardIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    deleteGamesV1configurationAchievementsAchievementIdRoute,
    deleteGamesV1configurationAchievementsAchievementIdRouteHandler,
  )
  .openapi(
    getGamesV1configurationAchievementsAchievementIdRoute,
    getGamesV1configurationAchievementsAchievementIdRouteHandler,
  )
  .openapi(
    putGamesV1configurationAchievementsAchievementIdRoute,
    putGamesV1configurationAchievementsAchievementIdRouteHandler,
  )
  .openapi(
    getGamesV1configurationApplicationsApplicationIdAchievementsRoute,
    getGamesV1configurationApplicationsApplicationIdAchievementsRouteHandler,
  )
  .openapi(
    postGamesV1configurationApplicationsApplicationIdAchievementsRoute,
    postGamesV1configurationApplicationsApplicationIdAchievementsRouteHandler,
  )
  .openapi(
    getGamesV1configurationApplicationsApplicationIdLeaderboardsRoute,
    getGamesV1configurationApplicationsApplicationIdLeaderboardsRouteHandler,
  )
  .openapi(
    postGamesV1configurationApplicationsApplicationIdLeaderboardsRoute,
    postGamesV1configurationApplicationsApplicationIdLeaderboardsRouteHandler,
  )
  .openapi(
    deleteGamesV1configurationLeaderboardsLeaderboardIdRoute,
    deleteGamesV1configurationLeaderboardsLeaderboardIdRouteHandler,
  )
  .openapi(
    getGamesV1configurationLeaderboardsLeaderboardIdRoute,
    getGamesV1configurationLeaderboardsLeaderboardIdRouteHandler,
  )
  .openapi(
    putGamesV1configurationLeaderboardsLeaderboardIdRoute,
    putGamesV1configurationLeaderboardsLeaderboardIdRouteHandler,
  )

export default app
