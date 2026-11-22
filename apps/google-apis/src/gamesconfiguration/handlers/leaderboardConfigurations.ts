import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteGamesV1configurationLeaderboardsLeaderboardIdRoute,
  getGamesV1configurationApplicationsApplicationIdLeaderboardsRoute,
  getGamesV1configurationLeaderboardsLeaderboardIdRoute,
  postGamesV1configurationApplicationsApplicationIdLeaderboardsRoute,
  putGamesV1configurationLeaderboardsLeaderboardIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const leaderboardConfigurationsHandler = app
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
