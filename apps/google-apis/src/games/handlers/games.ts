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
} from '../routes'

const app = new OpenAPIHono()

export const gamesHandler = app
  .openapi(getGamesV1AchievementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGamesV1AchievementsUpdateMultipleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGamesV1AchievementsAchievementIdIncrementRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGamesV1AchievementsAchievementIdRevealRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGamesV1AchievementsAchievementIdSetStepsAtLeastRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGamesV1AchievementsAchievementIdUnlockRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGamesV1ApplicationsGetEndPointRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGamesV1ApplicationsPlayedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGamesV1ApplicationsApplicationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGamesV1ApplicationsApplicationIdVerifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGamesV1EventDefinitionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGamesV1EventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGamesV1EventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGamesV1LeaderboardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGamesV1LeaderboardsScoresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGamesV1LeaderboardsLeaderboardIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGamesV1LeaderboardsLeaderboardIdScoresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGamesV1LeaderboardsLeaderboardIdScoresCollectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGamesV1LeaderboardsLeaderboardIdWindowCollectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGamesV1MetagameConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGamesV1PlayersMeMultipleApplicationPlayerIdsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGamesV1PlayersMePlayersCollectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGamesV1PlayersMeScopedIdsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGamesV1PlayersPlayerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGamesV1PlayersPlayerIdAchievementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGamesV1PlayersPlayerIdCategoriesCollectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGamesV1PlayersPlayerIdLeaderboardsLeaderboardIdScoresTimeSpanRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGamesV1PlayersPlayerIdSnapshotsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGamesV1RevisionsCheckRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGamesV1SnapshotsSnapshotIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGamesV1StatsRoute, (c) => {
    throw new Error('Not implemented')
  })
