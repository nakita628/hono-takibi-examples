import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getGamesV1PlayersPlayerIdAchievementsRoute,
  postGamesV1AchievementsAchievementIdIncrementRoute,
  postGamesV1AchievementsAchievementIdRevealRoute,
  postGamesV1AchievementsAchievementIdSetStepsAtLeastRoute,
  postGamesV1AchievementsAchievementIdUnlockRoute,
  postGamesV1AchievementsUpdateMultipleRoute,
} from '../routes'

const app = new OpenAPIHono()

export const achievementsHandler = app
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
  .openapi(getGamesV1PlayersPlayerIdAchievementsRoute, (c) => {
    throw new Error('Not implemented')
  })
