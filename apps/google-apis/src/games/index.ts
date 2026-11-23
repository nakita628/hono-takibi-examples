import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getGamesV1AchievementsRoute,
  getGamesV1ApplicationsApplicationIdRoute,
  getGamesV1ApplicationsApplicationIdVerifyRoute,
  getGamesV1EventDefinitionsRoute,
  getGamesV1EventsRoute,
  getGamesV1LeaderboardsLeaderboardIdRoute,
  getGamesV1LeaderboardsLeaderboardIdScoresCollectionRoute,
  getGamesV1LeaderboardsLeaderboardIdWindowCollectionRoute,
  getGamesV1LeaderboardsRoute,
  getGamesV1MetagameConfigRoute,
  getGamesV1PlayersMeMultipleApplicationPlayerIdsRoute,
  getGamesV1PlayersMePlayersCollectionRoute,
  getGamesV1PlayersMeScopedIdsRoute,
  getGamesV1PlayersPlayerIdAchievementsRoute,
  getGamesV1PlayersPlayerIdCategoriesCollectionRoute,
  getGamesV1PlayersPlayerIdLeaderboardsLeaderboardIdScoresTimeSpanRoute,
  getGamesV1PlayersPlayerIdRoute,
  getGamesV1PlayersPlayerIdSnapshotsRoute,
  getGamesV1RevisionsCheckRoute,
  getGamesV1SnapshotsSnapshotIdRoute,
  getGamesV1StatsRoute,
  postGamesV1AchievementsAchievementIdIncrementRoute,
  postGamesV1AchievementsAchievementIdRevealRoute,
  postGamesV1AchievementsAchievementIdSetStepsAtLeastRoute,
  postGamesV1AchievementsAchievementIdUnlockRoute,
  postGamesV1AchievementsUpdateMultipleRoute,
  postGamesV1ApplicationsGetEndPointRoute,
  postGamesV1ApplicationsPlayedRoute,
  postGamesV1EventsRoute,
  postGamesV1LeaderboardsLeaderboardIdScoresRoute,
  postGamesV1LeaderboardsScoresRoute,
} from './routes'
import {
  getGamesV1AchievementsRouteHandler,
  getGamesV1ApplicationsApplicationIdRouteHandler,
  getGamesV1ApplicationsApplicationIdVerifyRouteHandler,
  getGamesV1EventDefinitionsRouteHandler,
  getGamesV1EventsRouteHandler,
  getGamesV1LeaderboardsLeaderboardIdRouteHandler,
  getGamesV1LeaderboardsLeaderboardIdScoresCollectionRouteHandler,
  getGamesV1LeaderboardsLeaderboardIdWindowCollectionRouteHandler,
  getGamesV1LeaderboardsRouteHandler,
  getGamesV1MetagameConfigRouteHandler,
  getGamesV1PlayersMeMultipleApplicationPlayerIdsRouteHandler,
  getGamesV1PlayersMePlayersCollectionRouteHandler,
  getGamesV1PlayersMeScopedIdsRouteHandler,
  getGamesV1PlayersPlayerIdAchievementsRouteHandler,
  getGamesV1PlayersPlayerIdCategoriesCollectionRouteHandler,
  getGamesV1PlayersPlayerIdLeaderboardsLeaderboardIdScoresTimeSpanRouteHandler,
  getGamesV1PlayersPlayerIdRouteHandler,
  getGamesV1PlayersPlayerIdSnapshotsRouteHandler,
  getGamesV1RevisionsCheckRouteHandler,
  getGamesV1SnapshotsSnapshotIdRouteHandler,
  getGamesV1StatsRouteHandler,
  postGamesV1AchievementsAchievementIdIncrementRouteHandler,
  postGamesV1AchievementsAchievementIdRevealRouteHandler,
  postGamesV1AchievementsAchievementIdSetStepsAtLeastRouteHandler,
  postGamesV1AchievementsAchievementIdUnlockRouteHandler,
  postGamesV1AchievementsUpdateMultipleRouteHandler,
  postGamesV1ApplicationsGetEndPointRouteHandler,
  postGamesV1ApplicationsPlayedRouteHandler,
  postGamesV1EventsRouteHandler,
  postGamesV1LeaderboardsLeaderboardIdScoresRouteHandler,
  postGamesV1LeaderboardsScoresRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getGamesV1AchievementsRoute, getGamesV1AchievementsRouteHandler)
  .openapi(
    postGamesV1AchievementsUpdateMultipleRoute,
    postGamesV1AchievementsUpdateMultipleRouteHandler,
  )
  .openapi(
    postGamesV1AchievementsAchievementIdIncrementRoute,
    postGamesV1AchievementsAchievementIdIncrementRouteHandler,
  )
  .openapi(
    postGamesV1AchievementsAchievementIdRevealRoute,
    postGamesV1AchievementsAchievementIdRevealRouteHandler,
  )
  .openapi(
    postGamesV1AchievementsAchievementIdSetStepsAtLeastRoute,
    postGamesV1AchievementsAchievementIdSetStepsAtLeastRouteHandler,
  )
  .openapi(
    postGamesV1AchievementsAchievementIdUnlockRoute,
    postGamesV1AchievementsAchievementIdUnlockRouteHandler,
  )
  .openapi(postGamesV1ApplicationsGetEndPointRoute, postGamesV1ApplicationsGetEndPointRouteHandler)
  .openapi(postGamesV1ApplicationsPlayedRoute, postGamesV1ApplicationsPlayedRouteHandler)
  .openapi(
    getGamesV1ApplicationsApplicationIdRoute,
    getGamesV1ApplicationsApplicationIdRouteHandler,
  )
  .openapi(
    getGamesV1ApplicationsApplicationIdVerifyRoute,
    getGamesV1ApplicationsApplicationIdVerifyRouteHandler,
  )
  .openapi(getGamesV1EventDefinitionsRoute, getGamesV1EventDefinitionsRouteHandler)
  .openapi(getGamesV1EventsRoute, getGamesV1EventsRouteHandler)
  .openapi(postGamesV1EventsRoute, postGamesV1EventsRouteHandler)
  .openapi(getGamesV1LeaderboardsRoute, getGamesV1LeaderboardsRouteHandler)
  .openapi(postGamesV1LeaderboardsScoresRoute, postGamesV1LeaderboardsScoresRouteHandler)
  .openapi(
    getGamesV1LeaderboardsLeaderboardIdRoute,
    getGamesV1LeaderboardsLeaderboardIdRouteHandler,
  )
  .openapi(
    postGamesV1LeaderboardsLeaderboardIdScoresRoute,
    postGamesV1LeaderboardsLeaderboardIdScoresRouteHandler,
  )
  .openapi(
    getGamesV1LeaderboardsLeaderboardIdScoresCollectionRoute,
    getGamesV1LeaderboardsLeaderboardIdScoresCollectionRouteHandler,
  )
  .openapi(
    getGamesV1LeaderboardsLeaderboardIdWindowCollectionRoute,
    getGamesV1LeaderboardsLeaderboardIdWindowCollectionRouteHandler,
  )
  .openapi(getGamesV1MetagameConfigRoute, getGamesV1MetagameConfigRouteHandler)
  .openapi(
    getGamesV1PlayersMeMultipleApplicationPlayerIdsRoute,
    getGamesV1PlayersMeMultipleApplicationPlayerIdsRouteHandler,
  )
  .openapi(
    getGamesV1PlayersMePlayersCollectionRoute,
    getGamesV1PlayersMePlayersCollectionRouteHandler,
  )
  .openapi(getGamesV1PlayersMeScopedIdsRoute, getGamesV1PlayersMeScopedIdsRouteHandler)
  .openapi(getGamesV1PlayersPlayerIdRoute, getGamesV1PlayersPlayerIdRouteHandler)
  .openapi(
    getGamesV1PlayersPlayerIdAchievementsRoute,
    getGamesV1PlayersPlayerIdAchievementsRouteHandler,
  )
  .openapi(
    getGamesV1PlayersPlayerIdCategoriesCollectionRoute,
    getGamesV1PlayersPlayerIdCategoriesCollectionRouteHandler,
  )
  .openapi(
    getGamesV1PlayersPlayerIdLeaderboardsLeaderboardIdScoresTimeSpanRoute,
    getGamesV1PlayersPlayerIdLeaderboardsLeaderboardIdScoresTimeSpanRouteHandler,
  )
  .openapi(getGamesV1PlayersPlayerIdSnapshotsRoute, getGamesV1PlayersPlayerIdSnapshotsRouteHandler)
  .openapi(getGamesV1RevisionsCheckRoute, getGamesV1RevisionsCheckRouteHandler)
  .openapi(getGamesV1SnapshotsSnapshotIdRoute, getGamesV1SnapshotsSnapshotIdRouteHandler)
  .openapi(getGamesV1StatsRoute, getGamesV1StatsRouteHandler)

export default app
