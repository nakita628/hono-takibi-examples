import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postGamesV1managementLeaderboardsLeaderboardIdScoresResetForAllPlayersRoute,
  postGamesV1managementLeaderboardsLeaderboardIdScoresResetRoute,
  postGamesV1managementScoresResetAllForAllPlayersRoute,
  postGamesV1managementScoresResetMultipleForAllPlayersRoute,
  postGamesV1managementScoresResetRoute,
} from '../routes'

const app = new OpenAPIHono()

export const scoresHandler = app
  .openapi(postGamesV1managementLeaderboardsLeaderboardIdScoresResetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGamesV1managementLeaderboardsLeaderboardIdScoresResetForAllPlayersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGamesV1managementScoresResetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGamesV1managementScoresResetAllForAllPlayersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGamesV1managementScoresResetMultipleForAllPlayersRoute, (c) => {
    throw new Error('Not implemented')
  })
