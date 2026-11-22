import { OpenAPIHono } from '@hono/zod-openapi'
import { getValConsoleRankedV1LeaderboardsByActActIdRoute } from '../routes'

const app = new OpenAPIHono()

export const valConsoleRankedV1Handler = app.openapi(
  getValConsoleRankedV1LeaderboardsByActActIdRoute,
  (c) => {},
)
