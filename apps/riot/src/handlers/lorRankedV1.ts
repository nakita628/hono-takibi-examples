import { OpenAPIHono } from '@hono/zod-openapi'
import { getLorRankedV1LeaderboardsRoute } from '../routes'

const app = new OpenAPIHono()

export const lorRankedV1Handler = app.openapi(getLorRankedV1LeaderboardsRoute, (c) => {
  throw new Error('Not implemented')
})
