import { OpenAPIHono } from '@hono/zod-openapi'
import { getOcsV2PhpAppsDavApiV1EventsUpcomingRoute } from '../routes'

const app = new OpenAPIHono()

export const upcomingEventsHandler = app.openapi(
  getOcsV2PhpAppsDavApiV1EventsUpcomingRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
