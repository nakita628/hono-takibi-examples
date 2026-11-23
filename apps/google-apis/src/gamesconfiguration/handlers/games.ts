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
} from '../routes'

const app = new OpenAPIHono()

export const gamesHandler = app
  .openapi(deleteGamesV1configurationAchievementsAchievementIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGamesV1configurationAchievementsAchievementIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putGamesV1configurationAchievementsAchievementIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGamesV1configurationApplicationsApplicationIdAchievementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGamesV1configurationApplicationsApplicationIdAchievementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGamesV1configurationApplicationsApplicationIdLeaderboardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGamesV1configurationApplicationsApplicationIdLeaderboardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGamesV1configurationLeaderboardsLeaderboardIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGamesV1configurationLeaderboardsLeaderboardIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putGamesV1configurationLeaderboardsLeaderboardIdRoute, (c) => {
    throw new Error('Not implemented')
  })
