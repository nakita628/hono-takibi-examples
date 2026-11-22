import { OpenAPIHono } from '@hono/zod-openapi'
import { getValRankedV1LeaderboardsByActActIdRoute } from '../routes'

const app = new OpenAPIHono()

export const valRankedV1Handler = app.openapi(getValRankedV1LeaderboardsByActActIdRoute, (c) => {
  throw new Error('Not implemented')
})
