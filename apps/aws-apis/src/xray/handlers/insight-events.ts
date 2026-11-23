import type { RouteHandler } from '@hono/zod-openapi'
import type { postInsightEventsRoute } from '../routes'

export const postInsightEventsRouteHandler: RouteHandler<typeof postInsightEventsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
