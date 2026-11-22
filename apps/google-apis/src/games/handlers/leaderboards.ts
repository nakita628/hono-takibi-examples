import { OpenAPIHono } from '@hono/zod-openapi'
import { getGamesV1LeaderboardsLeaderboardIdRoute, getGamesV1LeaderboardsRoute } from '../routes'

const app = new OpenAPIHono()

export const leaderboardsHandler = app
  .openapi(getGamesV1LeaderboardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGamesV1LeaderboardsLeaderboardIdRoute, (c) => {
    throw new Error('Not implemented')
  })
