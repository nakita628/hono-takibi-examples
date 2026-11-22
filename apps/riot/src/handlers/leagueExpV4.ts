import { OpenAPIHono } from '@hono/zod-openapi'
import { getLolLeagueExpV4EntriesQueueTierDivisionRoute } from '../routes'

const app = new OpenAPIHono()

export const leagueExpV4Handler = app.openapi(
  getLolLeagueExpV4EntriesQueueTierDivisionRoute,
  (c) => {},
)
