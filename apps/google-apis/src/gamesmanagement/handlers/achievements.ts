import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postGamesV1managementAchievementsAchievementIdResetForAllPlayersRoute,
  postGamesV1managementAchievementsAchievementIdResetRoute,
  postGamesV1managementAchievementsResetAllForAllPlayersRoute,
  postGamesV1managementAchievementsResetMultipleForAllPlayersRoute,
  postGamesV1managementAchievementsResetRoute,
} from '../routes'

const app = new OpenAPIHono()

export const achievementsHandler = app
  .openapi(postGamesV1managementAchievementsResetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGamesV1managementAchievementsResetAllForAllPlayersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGamesV1managementAchievementsResetMultipleForAllPlayersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGamesV1managementAchievementsAchievementIdResetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGamesV1managementAchievementsAchievementIdResetForAllPlayersRoute, (c) => {
    throw new Error('Not implemented')
  })
