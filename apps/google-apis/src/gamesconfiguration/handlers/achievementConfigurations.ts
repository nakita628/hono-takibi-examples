import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteGamesV1configurationAchievementsAchievementIdRoute,
  getGamesV1configurationAchievementsAchievementIdRoute,
  getGamesV1configurationApplicationsApplicationIdAchievementsRoute,
  postGamesV1configurationApplicationsApplicationIdAchievementsRoute,
  putGamesV1configurationAchievementsAchievementIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const achievementConfigurationsHandler = app
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
