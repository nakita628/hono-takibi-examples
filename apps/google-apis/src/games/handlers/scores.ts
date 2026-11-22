import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getGamesV1LeaderboardsLeaderboardIdScoresCollectionRoute,
  getGamesV1LeaderboardsLeaderboardIdWindowCollectionRoute,
  getGamesV1PlayersPlayerIdLeaderboardsLeaderboardIdScoresTimeSpanRoute,
  postGamesV1LeaderboardsLeaderboardIdScoresRoute,
  postGamesV1LeaderboardsScoresRoute,
} from '../routes'

const app = new OpenAPIHono()

export const scoresHandler = app
  .openapi(postGamesV1LeaderboardsScoresRoute, (c) => {
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
  .openapi(getGamesV1PlayersPlayerIdLeaderboardsLeaderboardIdScoresTimeSpanRoute, (c) => {
    throw new Error('Not implemented')
  })
